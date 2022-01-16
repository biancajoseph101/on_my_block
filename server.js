const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const logger = require('morgan');

const AppRouter = require('./routes/AppRouter');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));

app.get('/', (req, res) => res.json({ message: 'Server Works' }));
app.use('/api', AppRouter);
app.use('/auth', AuthRouter);

//I put that there so that the routes that are referenced in the controllers can be used -Calvin

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
