const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


router.get('/', (req, res) => {
   res.send('this is userRoutes');
});

const {
    registerUser,
    loginUser,
    userProfile,
 } = require("../controllers/userController");
 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", authMiddleware, userProfile);

module.exports = router;