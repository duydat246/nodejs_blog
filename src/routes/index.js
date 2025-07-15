const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newRouter);
    app.use('/search', siteRouter);
}

module.exports = route;
