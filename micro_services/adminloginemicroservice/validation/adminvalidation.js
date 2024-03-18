const {body,validationResult}=require('express-validator');



    const loginValidation = () => {
        return [
            body('email')
                .notEmpty().withMessage('Email is required')
                .isEmail().withMessage('Invalid email format'),
            body('password')
                .notEmpty().withMessage('Password is required')
                .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
                .matches(/\d/).withMessage('Password must contain at least one digit')
                .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter')
        ];
    };
    

module.exports={loginValidation};