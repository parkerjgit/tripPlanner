const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  // res.send('hi');
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500: Internal error');
})

app.use((req, res) => {
  res.status(404).send('404: page not found')
})


const PORT = 3000;
const init = () => {
  // connect
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });

}

init();
