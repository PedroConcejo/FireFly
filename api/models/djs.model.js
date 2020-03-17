const mongoose = require('mongoose')

const djsSchema = new mongoose.Schema({
  nickname: 
    {type: String,},

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'},
    
  style: {
    type: String,
    required: [true, 'Style is required']
  },
  debut: {
    type: Date,
    required: [true, 'Debut is required']
  },
  phonenumber: {
    type: Number,
    required: [true, 'Phone number is required']
    
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    // TODO: Make sure unique index works from Mongoose
    unique: [true, 'This is email is registered']    
  },
  favoriteslocals: {
    type: [mongoose.Schema.Types.ObjectId]
    },
    favoritesusers: {
      type: [mongoose.Schema.Types.ObjectId]
      },


})

const todoModel = mongoose.model('djs', djsSchema)
module.exports = todoModel


//type: mongoose.Schema.Types.ObjectId