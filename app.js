const express=require('express');    //实例化
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database-users');
const session = require('express-session');
const MongoStore=require('connect-mongo')(session);
//连接到database
mongoose.connect(config.database);
mongoose.connection.on('connected',() =>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err) =>{
    console.log('Database error '+err);
});

const app=express();

require("./models/user");
require("./models/product");

const users = require('./routes/users');

const products=require('./routes/products');

const carts=require("./routes/carts");

const bookmarks=require("./routes/bookmarks");

const orders=require("./routes/orders");
//Port num
const port=3000;

app.use(session({
        secret:'mysecret',
        resave:false,
        saveUninitialized:false,
        store:new MongoStore({mongooseConnection:mongoose.connection}),
        cookie:{maxAge:180*60*1000}
}));
//CORS Middleware
app.use(cors());

//middleware(make auth status available
app.use(function(req, res, next) {
    //res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});

//Set public(static) folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);
app.use('/products',products);
app.use('/carts',carts);
app.use('/bookmarks',bookmarks);
app.use('/orders',orders);

//use view engine
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('views', path.join(__dirname, '/angular-src/src/app/components/cart'));
app.set('view engine', 'html');


//Index Route
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () =>{
    console.log('Server started on port '+port+'...')
});