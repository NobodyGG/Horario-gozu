const {Router} = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

router.post('/api/signup', async (req, res, next) => {
    const {username, email, password} = req.body;
    const user = new User({
        username,
        email,
        password
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    const token = jwt.sign({id: user._id}, process.env.SECRET)
    res.json({auth: true, token})
    
})

router.post('/api/signin', async(req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if(!user){
        return res.status(404).send('The email doesnt exists');
    }
    
    const passwordValid = await user.valitePassword(password);
    if(!passwordValid){
        return res.status(401).json({
            auth: false,
            token: null
        })
    }

    const token = jwt.sign({id: user._id}, process.env.SECRET);

    res.json({auth: true, token})       
})

router.get('/api/profile', verifyToken, async (req, res, next) => {
    
    const user = await User.findById(req.userId, {password: 0});
    if(!user){
        return res.status(404).send('No user found')
    }

    res.json(user)
})

router.post("/api/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("x-access-token");
      if (!token) return res.json(false);
  
      const verified = jwt.verify(token, process.env.SECRET);
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
  
      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;