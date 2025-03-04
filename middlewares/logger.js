const LoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp} ${req.method} ${req.url} - IP: ${req.ip}]`);

  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${timestamp}] Response: ${res.statusCode} - ${duration}ms`);
  });

  next();
};

module.exports = LoggerMiddleware;
