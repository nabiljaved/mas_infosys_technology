const express = require('express');
const authRoutes = require('../routes/authRoutes');
const drivingSchoolRoutes = require('../routes/drivingSchoolRoutes');
const dashBoardRoutes = require('../routes/dashBoardRoutes');
const cookieParser = require('cookie-parser');
const { checkUser } = require('../middleware/authMiddleware');
const dotenv = require('dotenv');
const connectDB = require('../config/db.js');
const app = express();
var path = require('path');
var flash = require('connect-flash');

dotenv.config()

// //connect to mongodb
connectDB()

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(flash());


const viewPath = path.join(__dirname, '../views');
const publicDirectoryPath = path.join(__dirname, '../public')
const assets = path.join(__dirname, '../public/assets')

// view engine
app.set('view engine', 'ejs');
app.set(viewPath);
app.use(express.static(publicDirectoryPath));
app.use(express.static(assets));

// routes
app.get('*', checkUser)
app.use(authRoutes)
app.use(drivingSchoolRoutes)
app.use('/admin-dashboard', dashBoardRoutes)

// app.use('/task-manager-api-v1', routerV1);

const PORT = process.env.PORT || 5200

app.listen(
    PORT,
    console.log(
        `Server running on port ${PORT}`
    )
)