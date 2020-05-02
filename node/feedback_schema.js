const mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    username: {type: String, require: true},
    feedback: {type: String, require: true}
})

var feedbackModel = mongoose.model('feedbacks',feedbackSchema);
module.exports = feedbackModel;