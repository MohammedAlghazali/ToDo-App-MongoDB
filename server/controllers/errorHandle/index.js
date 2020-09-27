exports.clientError = (req, res) => {
  res.status(404).json({ message: 'page not found 404' });
};

exports.serverError = (err, req, res, next) => {
  res.status(500).json({
    message: 'internal server error 500',
  });
};
