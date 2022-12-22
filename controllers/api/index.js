const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const projectRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;