const express = require('express');

const UserController = require('../../controllers/user-controller');
const CaptainController = require('../../controllers/captain-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

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

module.exports = router;