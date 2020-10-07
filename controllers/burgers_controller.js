const express = require('express');

const router = express.Router();

const app = express();

const burger = require('../models/burger.js');

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        /// ===== WHAT IS hbsObject?!?!?!
        // const hbsObject = {
        //     burgers: data
        // };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function (req, res) {
    const newBurgName = req.body.name;
    const devoured = req.body.devoured;

    burger.insertOne([
        "name", "devoured"
    ], [
        newBurgName, devoured
    ], function (result) {
        //Send back the ID of the new burger
        res.join({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const upBurgID = req.params.id;

    const condition = "id = " + upBurgID;

    console.log("condition", condition);

    /// === FIGURE WHAT THIS DOES!!!
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            //If nothing was changed then most likely the id said doesnt exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})



//export the router at the end of the file
module.exports = router;