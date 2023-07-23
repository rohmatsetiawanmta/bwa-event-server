const { StatusCodes } = require('http-status-code');
const CustomAPIError = require('./custom-api-error');

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
