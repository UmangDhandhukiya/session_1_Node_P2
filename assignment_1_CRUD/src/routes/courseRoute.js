const express = require("express")
const { createCourse, allCourses, updateCourse, deleteCourse, singleCourse } = require("../controllers/courseController")

const router = express.Router()

// Add new course
router.post('/addCourse',createCourse)

// show all courses
router.get('/',allCourses)

// show single course
router.get('/course/:id',singleCourse)

// update courses
router.post('/editCourse/:id',updateCourse)

// delete course
router.delete('/course/:id',deleteCourse)

module.exports = {router}