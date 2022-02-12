const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type:String,
    require:[true, 'Please add a name']
  },
  email: {
    type:String,
    unique: true,
    require:[true, 'Please add a email']
  },
  password: {
    type:String,
    require:[true, 'Please add a password']
  }
},
{
  timestamps:true
})

module.exports = mongoose.model('User', userSchema)