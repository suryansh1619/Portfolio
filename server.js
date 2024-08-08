const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const morgan=require('morgan');
const portfolioRoutes = require('./routes/portfolioRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

// app.use(morgan('combined')); 
app.use(bodyparser.json());
app.use(cookieParser());
// app.use(cors({
//     origin: "https://portfolio-nine-sable-21.vercel.app",
//     credentials: true
// }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const dbConfig = require('./config/db')
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/user/', userRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})