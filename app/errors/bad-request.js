const { StatusCodes } = require('http-status-code');
const CustomAPIError = require('./custom-api-error');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
