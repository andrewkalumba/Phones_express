import express from "express";
import { nokia, nokiaContent} from "../data/phone.js";

const nokiaRouter = express.Router();

nokiaRouter.get("/", (req, res) => {
    let selectedPhone = null;
   res.render("pages/home", {
    phones: nokia.filter(phone => phone.type === 'nokia'),
    content: nokiaContent,
      bodyClass: "nokia",
      selectedPhone
   })
});

nokiaRouter.get('/phone/:name', (req, res) => {
    const phoneName = req.params.name;
    const phone = nokia.find(p => p.name === phoneName); // Find the phone

    if (phone) {
        res.render('pages/phone.ejs', { phone, bodyClass:'nokia'});
    } else {
        res.status(404).send('Phone not found');
    }
});

export default nokiaRouter;
