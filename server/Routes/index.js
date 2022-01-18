const router = require("express").Router();

const AuthRoutes = require("./Auth");
const StudentAuth = require("./Student");

router.use("/auth", AuthRoutes);
router.use("/student", StudentAuth);

module.exports = router;
