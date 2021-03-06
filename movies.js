var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

// movies schema

var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: true }},
    yearReleased: { type: Date, required: true },
    genre: { type: String, required: true, enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western'] },
    actors: { type: [{actorName: String, characterName: String}], required: true }
});

// return the model

module.exports = mongoose.model('Movie', MovieSchema);