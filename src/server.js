//! open terminal write npm start and npm run watch

const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
//! HTTP logger
app.use(morgan('combined'))
//! Template Engine:
app.engine('hbs', engine({extname: '.hbs'})); //? extname: đuôi file home, info...
app.set('view engine', 'hbs');
<<<<<<< HEAD
app.set('views', path.join(__dirname, 'resources/views'));
=======
app.set('views', path.join(__dirname, './resources/views'));
>>>>>>> f980ac815c73f5067fa17fa9182fc7b051ab636c
//! Method

//? truy cập vào để lấy dữ liệu của home với đường dẫn là : http://localhost:3000/
app.get('/', (req, res) => {
  res.render('home');
})
//? truy cập vào để lấy dữ liệu của info với đường dẫn là : http://localhost:3000/info
app.get('/info', (req, res) => {
  res.render('info');
})
//? truy cập vào để lấy dữ liệu của info với đường dẫn là : http://localhost:3000/img/fox.png
app.use(express.static(path.join(__dirname, 'public')))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
