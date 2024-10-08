import {Schema, model} from "mongoose";
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    password: {
        type: String,
        required: true
    },
})

// Static Signup Method
userSchema.statics.signup = async function (firstname, lastname, email, gender, password, confirmPassword){
    // Throw error if any signup form field is blank
    if (!firstname || !lastname || !email || !gender || !password || !confirmPassword) {
        throw Error('All fields are required!')
    }

    // Validate User Email
    if (!validator.isEmail(email)){
        throw Error('Use a valid email!')
    }
    // Validate gender
    if (!['male', 'female'].includes(gender)){
        throw Error('Select an appropriate gender!')
    }
    // Confirm if password and confirm password are the same
    if (password !== confirmPassword){
        throw Error('Password does not match!')
    }
    // Validate User Password
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough!')
    }
    // Ensure User is Unique and Doesn't Exist Already
    const exists = await this.findOne({email})
    if (exists){
        throw Error('User already exists!')
    }
    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create User document in DB
    const user = await this.create({firstname, lastname, email, gender, password: hashedPassword})
    // Return Created User
    return user
    
}

// Static Login Method
userSchema.statics.login = async function(email, password){
    // Check for empty fields
    if (!email || !password){
        throw Error('All fields are required!')
    }
    // Check if user exists
    const user = await this.findOne({email})
    if (!user){
        throw Error('Invalid email!')
    }
    // Check if password is correct
    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Invalid password!')
    }
    // Return user
    return user
}

const User = model('User', userSchema)
export default User
