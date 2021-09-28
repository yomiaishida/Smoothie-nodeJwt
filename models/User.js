const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Mininum password length is 6 characters"],
  },
});

// fire a function after doc saved to db
userSchema.post('save', function(doc, next) {
  
})

userSchema.pre('save', function(next, this){

})

const User = mongoose.model("user", userSchema);

module.exports = User;
