const notFoundMiddleware = (req, res) => {
  res.status(404).send({ msg: 'Routedoes not exist' });
};

module.exports = notFoundMiddleware;
