const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    String(req.headers.authorization);

  if (!token) {
    return res.status(200).send({
      statusCode: 403,
      msg: "A token is required for authentication",
    });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(200).send({
      statusCode: 401,
      msg: "Invalid Token",
    });
  }
  return next();
};

module.exports = verifyToken;
