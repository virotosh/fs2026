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
    logoutUser,
 } = require("../controllers/userController");
 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", authMiddleware, userProfile);
router.post("/logout", logoutUser);

module.exports = router;