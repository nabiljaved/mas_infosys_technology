const User = require("../models/User");
const Promotion = require("../models/Promotion");
const Contact = require("../models/Contact");
const Package = require("../models/Package");
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect Email or Password') {
    errors.email = 'something wrong with email or password';
  }

  // incorrect password
  if (err.message === 'incorrect Email or Password') {
    errors.password = 'something wrong with email or password';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ user: user._id, jwt:token});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.addPromotion = async(req, res) => {

  console.log("req.id     "+req.user._id)
  const promotion = new Promotion({...req.body, owner: req.user._id})
  try {
      await promotion.save()
      res.status(201).json({promotions: promotion, message:"Promotiom is addedd successfully"}) // created = 201
  } catch (e) {
      res.status(400).json({errors: e}) // bad error = 400
  }

  // console.log(req.body)
  // res.json(req.body)
}

module.exports.getPromotion = async(req, res) => {

    const promotions = await Promotion.find({})
  try {
      res.status(201).json({promotions: promotions}); // created = 201
  } catch (e) {
      res.status(400).json({errors:"could not get promotions"}) // bad error = 400
  }

  // console.log(req.body)
  // res.json(req.body)
}

module.exports.addContacts = async(req, res) => {
  
  const contacts = new Contact({...req.body})
  try {
      await contacts.save()
      res.status(201).json({contacts: contacts, message:"contact is addedd successfully"}) // created = 201
  } catch (e) {
      res.status(400).json({errors: e}) // bad error = 400
  }

}


module.exports.getContacts = async(req, res) => {
  
  const contacts = await Contact.find({})

  try {
      res.status(200).json({contacts: contacts}) // created = 201
  } catch (e) {
      res.status(400).json({errors: "could not get contacts"}) // bad error = 400
  }

}

module.exports.addPackages = async(req, res) => {
  
  const packages = new Package({...req.body})
  console.log(req.body)
  try {
      await packages.save()
      res.status(200).json({packages: packages, message:"package is addedd successfully"}) // created = 201
  } catch (e) {
      res.status(400).json({errors: "could not add package", er:e}) // bad error = 400
  }

}


module.exports.getPackages = async(req, res) => {
  
  const package = await Package.find({})

  try {
      res.status(200).json({package: package}) // created = 201
  } catch (e) {
      res.status(400).json({errors: "could not get packages"}) // bad error = 400
  }

}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  //console.log(req.body)

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, jwt:token });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}