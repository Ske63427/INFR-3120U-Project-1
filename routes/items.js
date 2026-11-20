const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

function cleanBody(body) {
    if (!body.date) delete body.date;
    return body;
}

router.post('/', async (req, res, next) => {
    try {
        await Item.create(cleanBody(req.body));
        res.redirect('/#browse');
    } catch (err) {
        next(err);
    }
});

router.post('/:id/edit', async (req, res, next) => {
    try {
        await Item.findByIdAndUpdate(req.params.id, cleanBody(req.body), { runValidators: true });
        res.redirect('/#browse');
    } catch (err) {
        next(err);
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.redirect('/#browse');
    } catch (err) {
        next(err);
    }
});

module.exports = router;