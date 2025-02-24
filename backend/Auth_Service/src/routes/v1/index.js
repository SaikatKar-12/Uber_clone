const express = require('express');

const UserController = require('../../controllers/user-controller');
const CaptainController = require('../../controllers/captain-controller');
const {AuthRequestValidators} = require('../../middlewares/index');
const MapController= require('../../controllers/maps.controller');
const rideController= require('../../controllers/ride-controller');
const { query } = require('express-validator');

const router = express.Router();

router.post(
    '/signup', 
    AuthRequestValidators.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthRequestValidators.validateIsAdminRequest,
    UserController.isAdmin
);

router.post(
    '/captain_signup', 
    AuthRequestValidators.validateUserAuth,
    CaptainController.create
);
router.post(
    '/captain_signin',
    AuthRequestValidators.validateUserAuth,
    CaptainController.signIn
);

router.get(
    '/captain_isAuthenticated',
    CaptainController.isAuthenticated
);

router.get('/get-coordinates',
    //query('address').isString().isLength({ min: 3 }),
    //authMiddleware.authUser,
    MapController.getCoordinates
);

router.get('/get-distance-time',
    //query('origin').isString().isLength({ min: 3 }),
    //query('destination').isString().isLength({ min: 3 }),
    //authMiddleware.authUser,
    MapController.getDistanceTime
)

router.get('/get-suggestions',
    //query('input').isString().isLength({ min: 3 }),
    //authMiddleware.authUser,
    MapController.getAutoCompleteSuggestions
)

router.post('/rides/create',
    //authMiddleware.authUser,
    // body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    // body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    // body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
    rideController.createRide
)
router.get('/rides/get-fare',
    rideController.getFare
)
module.exports = router;