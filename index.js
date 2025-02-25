import express from 'express';
import iphoneRouter from './routes/iphoneRouter.js';
import samsungRouter from './routes/samsungRouter.js';
import nokiaRouter from './routes/nokiaRouter.js';
import { allPhones, homeContent } from './data/phone.js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();
const PORT = process.env.PORT; // Ensure PORT is set in your .env file

const app = express();
const __dirname = path.resolve();
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const phoneName = req.query.phone;
    let selectedPhone = null;

    if (phoneName) {
        selectedPhone = allPhones.find(phone => phone.name.toLowerCase() === phoneName.toLowerCase());
    }

    res.render('pages/home', {
        phones: allPhones,
        content: homeContent,
        bodyClass: 'home',
        selectedPhone
    });
});

app.use('/iphone', iphoneRouter);
app.use('/samsung', samsungRouter);
app.use('/nokia', nokiaRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});