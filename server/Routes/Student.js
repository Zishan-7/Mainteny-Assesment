const router = require("express").Router();
const controller = require("../Controller");
const auth = require("../Middleware/Auth");

router.post("/addStudent", controller.Student.addStudent);
router.get("/getAllStudents", controller.Student.getAllStudents);
router.post("/addCourse/:id", controller.Student.addCourse);

module.exports = router;
