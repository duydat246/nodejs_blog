const Course = require('../models/Course');

class CoursesController {
    // [GET] /search/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) =>
                res.render('courses/show', {
                    course,
                }),
            )
            .catch(next);
    }

    // [GET]
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST]
    store(req, res, next) {
        const formData = req.body;
        formData.thumbnail = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/'));
    }

    // [GET] /courses/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => res.render('courses/edit', { course }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        const formData = req.body;
        const idCourse = req.params.id;
        Course.updateOne({ _id: idCourse }, formData)
            .then(() => res.redirect(`/me/stored/courses`))
            .catch(next);
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        const idCourse = req.params.id;
        Course.deleteOne({ _id: idCourse })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CoursesController();
