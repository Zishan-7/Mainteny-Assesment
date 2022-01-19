const router = require("express").Router();
const controller = require("../Controller");

router.post("/register", controller.Auth.register);
router.post("/login", controller.Auth.login);
router.post("/logout", controller.Auth.logout);

module.exports = router;
