const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const passport= require('passport');
const path = require('path');
const session = require('express-session');
const router = require('./controllers');

require('./config/passport-google');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Passport authentication using google strategy
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// Authenticate user's google credentials
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

// Callback function
app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});


// turn on routes
app.use(router);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

