const router = require("express").Router();

router.get(
    "/usertest",
    (req, res) => {
        res.send("User Sends a GET Request !")
    }
);

module.exports = router;