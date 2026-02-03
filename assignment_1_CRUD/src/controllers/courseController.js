const { Course } = require("../models/Course");

//Add new course
const createCourse = async (req, res) => {
  try {
    let { courseName, courseDuration, coursePrice } = req.body;
    if (!courseName || !courseDuration || !coursePrice) {
      return res.status(404).json({ message: "some fields mission" });
    }
    const course = await Course.create(req.body);
    return res.status(200).json(course);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

//select all courses
const allCourses = async (req, res) => {
  try {
    const courseData = await Course.findAll();
    return res.status(200).json({ courses: courseData });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

//Update course details
const updateCourse = async (req, res) => {
  try {
    let { id } = req.params;
    let { courseName, courseDuration, coursePrice } = req.body;

    const course = await Course.findByPk(id);
    if (course) {
      let updatedCourse = await course.update({
        courseName: courseName,
        courseDuration: courseDuration,
        coursePrice: coursePrice,
      });
      return res.status(200).json({ message: "updated Successfully" });
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

//Delete user
const deleteCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findByPk(id);

    if (course) {
      const deleteRecord = await course.destroy();
      return res.status(200).json({ message: "deleted successfully", deletedRecord: deleteRecord });
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

module.exports = { createCourse, allCourses, updateCourse, deleteCourse };
