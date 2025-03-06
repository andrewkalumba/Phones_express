
import express from "express";
import {samsung, samsungContent} from "../data/phone.js";

const samsungRouter = express.Router();

samsungRouter.get("/",(req,res) => {
    let selectedPhone = null;
   res.render("pages/home",{
     phones : samsung.filter(phone => phone.type === 'samsung'),
     content : samsungContent,
    bodyClass : "samsung",
    selectedPhone
   })
 })

samsungRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name;
    const phone = samsung.find(p => p.name.toLowerCase() === phoneName.toLowerCase());

    if (phone) {
        res.render('pages/phone', { phone, bodyClass:'samsung'});
    } else {
        res.status(404).send('Phone not found');
    }
});

export default samsungRouter