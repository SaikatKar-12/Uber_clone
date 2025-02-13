const { response } = require('express');
const CaptainService = require('../services/captain-service');

const captainService = new CaptainService();

const create = async (req, res) => {
    try {
        //console.log(req.body.email)
        //console.log(req.body.password)
        const response = await captainService.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            v_color:req.body.v_color,
            v_plate:req.body.v_plate,
            v_capacity:req.body.v_capacity,
            v_model:req.body.v_model,
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
         //console.log(req.body.email);
         //console.log(req.body.password);
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await captainService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await captainService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'user is authenticated and token is valid'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}



module.exports = {
    create,
    signIn,
    isAuthenticated,
}