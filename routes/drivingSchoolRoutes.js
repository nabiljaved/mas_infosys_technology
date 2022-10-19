const { Router } = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminControllers');
const apiController = require('../controllers/apiControllers');
const { requireAuth, checkUser, protectedRoutes, redirectRoutes } = require('../middleware/authMiddleware');
const expressLayouts = require("express-ejs-layouts");
const router = Router();
const {servers, racks} = require("../data/products")





router.get('/promotions_page', (req, res) => res.render('promotions'));
router.get('/contacts-page', (req, res) => res.render('contacts-page'));
router.get('/packages-page', (req, res) => res.render('packages-page', { layout: 'dashboard' }));
router.get('/promotions', authController.getPromotion);
router.get('/contacts', authController.getContacts);
router.get('/packages', authController.getPackages);
router.post('/promotions', authController.addPromotion);
router.post('/contacts', authController.addContacts);


//Routes Canadian Digital driving School ----- API's /driving-school-jobs

router.get('/driving-school-location', apiController.getLocations);
router.get('/driving-school-contacts', apiController.getContacts);
router.get('/driving-school-promotions', apiController.getPromotions);
router.get('/driving-school-packages', apiController.getPackages);
router.get('/driving-school-bookings', apiController.getBookings);
router.get('/driving-school-jobs', apiController.getJobs);
router.get('/driving-school-jobs-people-contacted-us', apiController.getPeopleContactedUs);





//Routes Canadian Digital driving School ----- Render company-overview

router.get('/', (req, res) => res.render('home', {servers, racks}));
router.get('/home', (req, res) => res.render('home'));
router.get('/company-overview', (req, res) => res.render('masinfosysCompanyOverview'));
router.get('/about', (req, res) => res.render('masinfoabout'));
router.get('/contact-us', (req, res) => res.render('masinfocontactus'));
router.get('/server-client', (req, res) => res.render('servicesclient'));
router.get('/storage-backup', (req, res) => res.render('storagebackup'));
router.get('/network-security', (req, res) => res.render('networksecurity'));
router.get('/data-center', (req, res) => res.render('datacenter')); 
router.get('/server-virtualization', (req, res) => res.render('servervirtualization'));
router.get('/professional-installation', (req, res) => res.render('proinstall'));
router.get('/professional-support', (req, res) => res.render('prosupport'));
router.get('/professional-consulting', (req, res) => res.render('proconsult'));
router.post('/professional-contacts', authController.addContacts);
router.get('/professional-partner', (req, res) => res.render('ourpartners'));


router.get('/package', (req, res) => res.render('package'));
router.get('/job-opportunity', (req, res) => res.render('job-opportunity'));
router.get('/make-payment', (req, res) => res.render('make-payment'));
router.get('/contact-us', (req, res) => res.render('contact-us'));
router.get('/book-package-page', (req, res) => res.render('show-book-page'));
router.get('/get_emails', apiController.getEmails);


//render post routes

router.post('/contact-us-form', apiController.contactUs);
router.post('/user-booking-package', apiController.packageBooking);
router.post('/job-opportunity-form', apiController.jobOpportunity);
router.post('/driving-school-getPackageByCityName', apiController.getPackagesByCityName);

module.exports = router;