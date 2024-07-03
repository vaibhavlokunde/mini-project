const express = require("express");
const router = express.Router();
const Details = require("../models/Details");
const Slider = require("../models/Slider");
const Cards = require("../models/cards");
const Data = require('../models/data');
const Info = require('../models/info');

router.get("/", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);

  const sliders = await Slider.find();
  console.log(sliders);

  const cards = await Cards.find();
  console.log(cards);

  res.render("index", {
    details: details,
    sliders: sliders,
    cards: cards,
  });
});

router.get("/sign", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);
  res.render("sign", {
    details: details,
  });
});

router.get("/services", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);
  res.render("Services", {
    details: details,
  });
});

router.get("/about", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);
  res.render("About", {
    details: details,
  });
});

router.get("/contact", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);
  res.render("Contact", {
    details: details,
  });
});

router.get("/test", async (req, res) => {
  const details = await Details.findOne({ _id: "667bba33c7f6970c13c39309" });
  console.log(details);
  res.render("test", {
    details: details,
  });
});

router.post("/process-contact-form", async (req, res) => {
  try {
    console.log("this form is submitted");
    const data = req.body;
    const newData = new Data(data);
    const response = await newData.save();
    res.status(200).json(response);
    console.log("data saved ");
  } catch (err) {
    res.status(500).json({ error: 'internal server error' });
    console.log(err);
  }
});

router.post("/fetchsignup", async (req, res) => {
  try {
    const data = req.body;
    const newInfo = new Info(data);
    const response = await newInfo.save();
    res.render("Log")
    console.log("data saved");
  } catch (err) {
    res.status(500).json({ error: 'internal server error' });
    console.log(err);
  }
});

// Add a GET route for fetching signup info
router.get("/infobar",async(req,res)=>{
  try{
    const info = await Info.find();
    res.render("infobar", {info:info})
  }
  catch(err){
    res.status(500).json({error:'internal server error'});
    console.log(err);
  }
})
module.exports = router;
