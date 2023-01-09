var admin = require("firebase-admin");

const BUCKET = "portfolio-278b8.appspot.com";
var serviceAccount;

if (process.env.NODE_ENV != "development") {
  serviceAccount = require("/etc/secrets/firebase-key.json");
} else {
  serviceAccount = require("./firebase-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  console.log("Iniciando upload...");
  if (!req.file) return next();

  const image = req.file;

  const fileName = Date.now() + "." + image.originalname;

  const file = bucket.file(`images/${fileName}`);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  });

  stream.on("error", (error) => {
    console.log(error);
  });

  stream.on("finish", async () => {
    await file.makePublic();

    req.file.firebaseFileName = fileName;

    req.file.firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/images%2F${fileName}?alt=media`;

    next();
  });

  stream.end(image.buffer);
};

const deleteImage = async (req, res, next) => {
  const file = bucket.file(`images/${req.file}`);

  try {
    await file.delete();
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { uploadImage, deleteImage };
