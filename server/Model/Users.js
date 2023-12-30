const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto')

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUser: 
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *         type : String
 *         default : email@gmail.com
 *        password:
 *          type : String
 *          default : password
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterUser: 
 *      type: object
 *      required:
 *        - email
 *        - fullName
 *        - password
 *        - image
 *        - phone
 *      properties:
 *        fullName:
 *         type : String
 *         default : myName
 *        email:
 *         type : String
 *         default : email@gmail.com
 *        password:
 *          type : String
 *          default : password
 *        image:
 *         type : jpg, png
 *         default : img.
 *        phone:
 *          type : Number
 *          default : 909090909
 */


/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUser: 
 *      type: object
 *      required:
 *        - email
 *        - fullName
 *        - phone
 *      properties:
 *        fullName:
 *         type : String
 *         default : myName
 *        email:
 *         type : String
 *         default : email@gmail.com
 *        phone:
 *          type : Number
 *          default : 909090909
 */


/**
 * @openapi
 * components:
 *  schemas:
 *    ForgetPassword: 
 *      type: object
 *      required:
 *        - email
 *        - password
 *        - repeatpassword
 *      properties:
 *        email:
 *         type : String
 *         default : email@gmail.com
 *        password:
 *          type : String
 *          default : password
 *        repeatpassword:
 *          type : String
 *          default : password
 */


const userSchema = new mongoose.Schema({
    image:{
        type:String,
        default:null
    },
    fullName:{
        type:String,
        required:[true,'Please Enter Your Name'],
        // maxLength:[20,'Only 20 Latter'],
    },
    phone:{
        type: Number, 
        required: true,
        // maxLength: [13, "it,s enough"],
        // minLength: [10, "it,s not enough"],
        required:[true,'Please Enter Your Phone'],
        unique:true,
    },
   
    email:{
        type:String,
        required:[true,'Please Enter Your Email'],
        // minLength:[5,'Atleast your name contain 20 charchter'],  
        validator:[validator.Email,'Plese Enter a valid Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please Enter Your Name'],
        // minLength:[8,'maxLength 6 Latter'],
     
     },
    loginAt:{
        type: Date,
        default:Date.now,
    },
})


module.exports = mongoose.model('User',userSchema);