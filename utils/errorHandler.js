// Example of a centralized error handler. Not actively used now, but is a good practice.
exports.handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};