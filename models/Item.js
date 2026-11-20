const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    category: { type: String, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    description: { type: String, trim: true },
    contact: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);