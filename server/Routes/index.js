const router = require("express").Router();

const AuthRoutes = require("./Auth");
const Student = require("./Student");

router.use("/auth", AuthRoutes);
router.use("/student", Student);

module.exports = router;
