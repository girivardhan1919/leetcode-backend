const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
// const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.get('/ping', (req, res) => {
  return res.json({ message: 'Problem service is live' });
});

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB");

  //dummy code
  // const Cat = mongoose.model('Cat', { name: String });

  // const kitty = new Cat({ name: 'Zildjian' });
  // kitty.save().then(() => console.log('meow'));

});