const router = require("express").Router();
const controller = require("../Controller");
const auth = require("../Middleware/Auth");

router.post("/addStudent", auth, controller.Student.addStudent);
router.get("/getAllStudents", auth, controller.Student.getAllStudents);
router.post("/addCourse/:id", auth, controller.Student.addCourse);

module.exports = router;
