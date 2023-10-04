// const mongoose=require('mongoose');


// const schemaModel1=new mongoose.Schema({
//     name:{
//         type:String,
//         require: true
//     },

//     email:{
//         type:String,
//         require: true,
//         unique: true
//     },


//     message:{
//         type:String,
//         require: true
//     }
    
// });

// const schemaModel2 = new mongoose.Schema({
//     name:{
//         type:String,
//         require: true,
        
//     },


//     email:{
//         type:String,
//         require: true,
//         unique: true
//     },
//     phone:{
//         type: Number,
//         require:true
//     },
//     password:{
//         type:String,
//         require:true
//     },
//     cpassword:{
//         type:String,
//         require:true
//     }



// })

// const contactuserData= new mongoose.model('contactusdata',schemaModel);

// const signUpData= new mongoose.model('SignUpData',schemaModel2);


// module.exports={
//     collection1: contactuserData,
//     collection2: signUpData
// };









const mongoose = require('mongoose');

const schemaModel1 = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    message: {
        type: String,
        require: true
    }
});

const schemaModel2 = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    }
});

const contactuserData = new mongoose.model('contactusdata', schemaModel1);
const signUpData = new mongoose.model('SignUpData', schemaModel2);

module.exports = {
    collection1: contactuserData,
    collection2: signUpData
};
