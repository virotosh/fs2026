const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
   res.send('this is userRoutes');
});

const {
    registerUser,
 } = require("../controllers/userController");
 
router.post("/register", registerUser);

module.exports = router;