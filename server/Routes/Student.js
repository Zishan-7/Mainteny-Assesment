const router = require("express").Router();
const controller = require("../Controller");

router.get("/", (req, res) => {
  res.status(200).send({ msg: "working" });
});

router.post("/addStudent", controller.Student.addStudent);
router.get("/getAllStudents", controller.Student.getAllStudents);
router.post("/addCourse/:id", controller.Student.addCourse);

module.exports = router;
