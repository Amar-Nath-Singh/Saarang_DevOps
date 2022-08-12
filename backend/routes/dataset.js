const router = require("express").Router();
let dataset = require("../models/dataset.model");
router.route("/").get((req, res) => {
  dataset
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const price = Number(req.body.price);
  const size = req.body.size;
  const image = req.body.image;

  const newData = new dataset({
    itemName,
    description,
    price,
    size,
    image,
  });

  newData
    .save()
    .then(() => res.json("Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/delete/:id").delete((req, res) => {
  dataset
    // .findOneAndDelete({ _id: req.params.id })
    .findByIdAndDelete(String(req.params.id))
    .then(() => res.json("Data deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
