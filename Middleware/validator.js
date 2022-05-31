const { check, validationResult } = require("express-validator")


exports.registerRules = () => [

 check('Username', "this filed is required").notEmpty(),
 check('Lastname', "this filed is required").notEmpty(),
 check('Email', "this filed is required").isEmail(),
 // check('Phone', "this filed is required").isNumeric(),
 check('Password', "this filed is required").isLength({ min: 8 })

]

exports.LoginRules = () => [

 check('Email', "this filed is required").isEmail(),
//  check('Password', "this filed is required").isLength({ min: 8 })    

]

exports.validator = (req, res, next) => {
 const errors = validationResult(req);
 errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};


