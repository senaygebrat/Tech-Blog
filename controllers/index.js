const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');
const dashboardRoute = require('./dashboard-route.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);


module.exports = router;