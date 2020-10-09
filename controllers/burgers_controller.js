const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get(["/", "/api/burgers"], function (req, res) {
    burger.selectAll(function (data) {
        
        // console.log(data);
        // console.log(`=============`)

        //==handlebars object
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    let newBurgName = req.body.name;

    // console.log(newBurgName);

    burger.insertOne("(burger_name, devoured)", [`"${newBurgName}"`, 0], function (result) {
        //Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let upBurgID = req.params.id;

    let condition = "id = " + upBurgID;

    // console.log("condition", condition);
    //==============
    /// === SETS FROM NOT DEVOURED TO DEVOURED
    burger.updateOne(condition, function (result) {
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