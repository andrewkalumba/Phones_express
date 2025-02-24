
import express from "express";
import {samsung} from "../data/phone.js";

const samsungRouter = express.Router();

samsungRouter.get("/",(req,res) => {
   res.render("pages/home",{
     phones : samsung,
    bodyClass : "samsung"
   })
 })

samsungRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name; //access route parameters
        let phone;
    
        for (let i = 0; i < samsung.length; i++) {
            if (samsung[i].name === phoneName) {
              phone = samsung[i];
                break; 
            }
        }

    if (phone) {
        res.render('pages/phone.ejs', {animal});
    } else {
        res.status(404).send('Phone not found');
    }
});

export default samsungRouter