const router = require("express").Router();
const controller = require("../Controller");

router.post("/register", controller.Auth.register);
router.post("/login", controller.Auth.login);

module.exports = router;
