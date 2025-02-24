import express from "express";
import {nokia} from "../data/phone.js";

const nokiaRouter = express.Router();

nokiaRouter.get("/",(req,res) => {
   res.render("pages/home",{
      phones : nokia,
      bodyClass : "nokia"
   })
 })

nokiaRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name; //access route parameters
        let phone;
    
        for (let i = 0; i < nokia.length; i++) {
            if (nokia[i].name === phoneName) {
                phone = nokia[i];
                break; 
            }
        }

    if (phone) {
        res.render('pages/phone.ejs', {phone});
    } else {
        res.status(404).send('Phone not found');
    }
});

export default nokiaRouter