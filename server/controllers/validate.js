const Joi = require("joi");

const addProjectValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    comments: Joi.string(),
    mobileSupport: Joi.boolean().required(),
    image: Joi.string().required(),
    url: Joi.string().required(),
    repository: Joi.string().required(),
  });

  return schema.validate(data);
};

const editProjectValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    comments: Joi.string(),
    mobileSupport: Joi.boolean(),
    image: Joi.string(),
    url: Joi.string(),
    repository: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = { addProjectValidate, editProjectValidate };
