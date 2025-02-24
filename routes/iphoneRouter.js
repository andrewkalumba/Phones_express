import express from "express";
import {iphone} from "../data/phone.js";

const iphoneRouter = express.Router();

iphoneRouter.get("/",(req,res) => {
   res.render("pages/home",{
      phones : iphone,
      bodyClass : "iphone"
   })
 })

iphoneRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name; //access route parameters
        let phone;
    
        for (let i = 0; i < iphone.length; i++) {
            if (iphone[i].name === phoneName) {
                phone = iphone[i];
                break; 
            }
        }

    if (phone) {
        res.render('pages/phone.ejs', {phone});
    } else {
        res.status(404).send('Animal not found');
    }
});

export default iphoneRouter;
