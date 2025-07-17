const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .lean() // chuyển mỗi document trong mongoose thành JS object
            .then((course) =>
                res.render('home', {
                    course,
                }),
            )
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
