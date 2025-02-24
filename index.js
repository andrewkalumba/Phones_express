import express from 'express';
import iphoneRouter from './routes/iphoneRouter.js';
import samsungRouter from './routes/samsungRouter.js';
import nokiaRouter from './routes/nokiaRouter.js';
import {allPhones} from './data/phone.js';
import * as dotenv from "dotenv";
import * as path from "path";

//npm - node package manager
dotenv.config();
const PORT = process.env.PORT; //looks for port in env(hidden files for security)

const app = express ();
const __dirname = path.resolve();
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.render("pages/home",{
        phones : allPhones, //display all animals in sidebar
        bodyClass : "home"
    })                   
});

app.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name; //access route parameters
        let phone;
    
    for (let i = 0; i < allPhones.length; i++) {
        if (allPhones[i].name === phoneName) {
            phone = allPhones[i];
            break; 
        }
    }

    if (phone) {
        res.render('pages/phone.ejs', {phone});
    } else {
        res.status(404).send('Phone not found');
    }
});

app.use("/iphone",iphoneRouter);
app.use("/samsung",samsungRouter);
app.use("/nokia",nokiaRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
});
