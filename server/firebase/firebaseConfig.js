var admin = require("firebase-admin");

const BUCKET = "portfolio-278b8.appspot.com";
var serviceAccount;

if (process.env.NODE_ENV != "development") {
  //deploy
  const { privateKey } = JSON.parse(process.env.PRIVATE_KEY_ID);

  serviceAccount = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: privateKey,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    universe_domain: process.env.universe_domain,
  };
} else {
  //localhost
  serviceAccount = require("./firebase-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (image) => {
  if (!image) return res.status(404).send(error);

  try {
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
    });

    stream.end(image.buffer);

    return {
      firebaseFileName: fileName,
      firebaseUrl: `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/images%2F${fileName}?alt=media`,
    };
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteImage = async (image) => {
  const img = image.slice(83, -10);
  const file = bucket.file(`images/${img}`);

  try {
    await file.delete();
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { uploadImage, deleteImage };
