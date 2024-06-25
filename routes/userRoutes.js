const express = require('express');
const usercontroller = require("../controllers/userController");

const router = express.Router();

router.post("/add-user" , usercontroller.addUser );
router.get("/users", usercontroller.getUser);
router.delete("/delete-user/:userId",usercontroller.userDelete);

module.exports = router;