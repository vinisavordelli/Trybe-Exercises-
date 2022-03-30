const Author = require('../services/Author');
const Joi = require('joi');

const getAll = async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
};

const createAuthor = async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  })
    .validate({ firstName, lastName });

  if (error) {
    return next(error);
  }

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
};


const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  return res.status(200).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};