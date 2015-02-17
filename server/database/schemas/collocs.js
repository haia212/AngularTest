/**
 * Our Schema for Collocs
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Colloc Schema
var collocSchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    userId: String 
});

// The primary user model
var Colloc = mongoose.model('Colloc', collocSchema);

module.exports = Colloc;