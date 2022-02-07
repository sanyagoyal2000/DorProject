const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	date: { type: String, required: true },
	month: { type: String, required: true },
	year: { type: String, required: true },
	gender: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		fname: Joi.string().required().label("First Name"),
		lname: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		date: Joi.string().required().label("Date"),
		month: Joi.string().required().label("Month"),
		year: Joi.string().required().label("Year"),
		gender: Joi.string().required().label("Gender"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };