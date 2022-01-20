const router = require("express").Router();
const controller = require("../Controller");
const auth = require("../Middleware/Auth");

router.post("/addStudent", controller.Student.addStudent);
router.get("/getAllStudents", auth, controller.Student.getAllStudents);
router.get("/viewCourses/:id", auth, controller.Student.viewCourses);
router.post("/addCourse/:id", auth, controller.Student.addCourse);

module.exports = router;
