import express from 'express';
import {iphone, iphoneContent} from '../data/phone.js';

const iphoneRouter = express.Router();

iphoneRouter.get('/', (req, res) => {
    res.render('pages/home', {
        phones: iphone,
        content: iphoneContent,
        bodyClass: 'iphone',
        selectedPhone: null,
    });
});

iphoneRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name;
    const phone = iphone.find(p => p.name.toLowerCase() === phoneName.toLowerCase());

    if (phone) {
        res.render('pages/phone', { phone, bodyClass: 'iphone' });
    } else {
        res.status(404).send('Phone not found');
    }
});

export default iphoneRouter;



