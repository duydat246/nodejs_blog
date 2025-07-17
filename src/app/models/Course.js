const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        thumbnail: { type: String },
        videoId: { type: String },
        level: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('course', Course);
