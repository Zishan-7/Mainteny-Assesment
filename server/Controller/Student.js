const model = require("../Models");

module.exports.addStudent = async (req, res, next) => {
  try {
    const student = await model.Student.create(req.body);
    await student.save();

    return res.status(201).send({
      statusCode: 201,
      msg: "Student Added Successfully",
      data: student,
    });
  } catch {
    return res.status(200).send({
      statusCode: 304,
      msg: "Some error occured, Please try again",
    });
  }
};

module.exports.getAllStudents = async (req, res, next) => {
  try {
    const student = await model.Student.find();

    return res.status(200).send({
      statusCode: 200,
      msg: "Students fetched Successfully",
      data: student,
    });
  } catch {
    return res.status(200).send({
      statusCode: 304,
      msg: "Some error occured, Please try again",
    });
  }
};

module.exports.addCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await model.Student.findOne({
      _id: id,
    });

    if (!student) {
      return res.status(200).send({
        statusCode: 404,
        msg: "Student not found",
      });
    }

    student.courses.push(req.body.course);
    student.save();
    return res.status(200).send({
      statusCode: 200,
      msg: "Courses added Successfully",
      data: student,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      statusCode: 304,
      msg: "Some error occured, Please try again",
    });
  }
};
