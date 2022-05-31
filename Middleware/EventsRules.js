const { check, validationResult} = require("express-validator")


exports.CreateEventsRules=()=>[
 check('Eventname','this filed is required').notEmpty(),
 check('date', 'this filed is required' ).isDate(),
 check('EventType', 'this filed is required').notEmpty(),
 check('NumPlaceTotal', 'this filed is required').isNumeric().notEmpty(),
 check('Prix', 'this filed is required').notEmpty(),
 check('Eventimage', 'this filed is required').notEmpty()
]


exports.validator = (req, res, next) => {
 const errors = validationResult(req);
 errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
