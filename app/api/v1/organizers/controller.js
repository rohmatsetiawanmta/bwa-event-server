const { StatusCodes } = require('http-status-codes');
const { createOrganizers } = require('../../../services/mongoose/users');

const create = async (req, res, next) => {
  try {
    const result = await createOrganizers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
