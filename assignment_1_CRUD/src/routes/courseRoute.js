const express = require("express")
const { createCourse, allCourses, updateCourse, deleteCourse } = require("../controllers/courseController")

const router = express.Router()

// Add new course
router.post('/addCourse',createCourse)

// show all courses
router.get('/courses',allCourses)

// update courses
router.put('/editCourse/:id',updateCourse)

// delete course
router.delete('/course/:id',deleteCourse)

module.exports = {router}