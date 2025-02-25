import express from 'express';
import { iphone, homeContent } from '../data/phone.js';

const iphoneRouter = express.Router();

iphoneRouter.get('/', (req, res) => {
    let selectedPhone = null;
    res.render('pages/home', {
        phones: iphone.filter(phone => phone.type === 'iphone'),
        content: homeContent,
        bodyClass: 'iphone',
        selectedPhone,
    });

});

iphoneRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name;
    const phone = iphone.find(p => p.name.toLowerCase() === phoneName.toLowerCase());

    if (phone) {
        res.render('pages/phone', { phone, bodyClass:'iphone' });
    } else {
        res.status(404).send('Phone not found');
    }
});

export default iphoneRouter;
