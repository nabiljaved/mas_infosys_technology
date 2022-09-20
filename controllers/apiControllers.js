const Package = require('../models/Package');
const Promotion = require('../models/Promotion')
const Contact = require('../models/Contact')
const ContactUs = require('../models/ContactUs')
const Booking = require('../models/Booking')
const JobOpportunity = require('../models/JobOpportunity')




module.exports.getLocations = async(req, res) => {

    const packages = await Package.find({}, 'location')
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages location" }) // bad error = 400
    }

}

module.exports.getContacts = async(req, res) => {

    const contacts = await Contact.find({})
    try {
        res.status(201).json(contacts); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages location" }) // bad error = 400
    }

}

module.exports.getPromotions = async(req, res) => {

    const promotions = await Promotion.find({})
    try {
        res.status(201).json(promotions); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get promotions" }) // bad error = 400
    }

}


module.exports.getPackages = async(req, res) => {


    const packages = await Package.find({})
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages" }) // bad error = 400
    }
}


module.exports.getPackagesByCityName = async(req, res) => {

    const { location } = req.body;

    const packages = await Package.find({ location: location })
    try {
        res.status(201).json(packages); // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "could not get packages" }) // bad error = 400
    }

    console.log(location)

}

module.exports.jobOpportunity = async(req, res) => {

    const { name, email, phone, subject, message } = req.body;

    try {
        const jobs = new JobOpportunity({ name, email, phone, subject, message })
        await jobs.save()
            // response.redirect('/admin-dashboard');
        res.status(200).json({ jobs: jobs, message: "job is sent successfully" }) // created = 201
        console.log(jobs)
    } catch (e) {
        res.status(400).json({ errors: "could not sent message", er: e }) // bad error = 400
        console.log(e.message)
    }

}

module.exports.contactUs = async(req, res) => {

    const { name, email, phone, subject, message } = req.body;



    try {
        const contactus = new ContactUs({ name, email, phone, subject, message })
        await contactus.save()
            // response.redirect('/admin-dashboard');
        res.status(200).json({ contactus: contactus, message: "message is sent successfully" }) // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "could not sent message", er: e }) // bad error = 400
        console.log(e.message)
    }


}

module.exports.packageBooking = async(req, res) => {


    const { name, email, phone, package, location, message, date } = req.body

    try {
        const booking = new Booking({ name, email, phone, package, location, message, date })
        await booking.save()
        res.status(200).json({ booking: booking, message: "package is booked successfully" }) // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "package could not booked", er: e }) // bad error = 400
        console.log(e.message)
    }

}

module.exports.getBookings = async(req, res) => {

    const bookings = await Booking.find({})

    try {
        res.status(201).json(bookings); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get bookings" }) // bad error = 400
    }

}

module.exports.getJobs = async(req, res) => {

    const jobs = await JobOpportunity.find({})

    try {
        res.status(201).json(jobs); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get bookings" }) // bad error = 400
    }

}

module.exports.getPeopleContactedUs = async(req, res) => {

    const contacts = await ContactUs.find({})

    res.json(contacts)


}