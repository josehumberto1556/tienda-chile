const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//dotenv.config();
const app = express();

//motor de plantllas
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

//const routerApi = require('./routes');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname+"/public/"))
app.use(cors());
app.use(express.json());



app.get('/', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
   res.render("index",{titulo:"titulo dinamico",sorangel:"es bonita"})
});


app.get('/', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.send("me gusta sorangel")
});

//routerApi(app);



app.use((req,res,next) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
   //res.status(404).sendFile(__dirname+"/public/404.html")
   res.status(404).render("404")
});


app.listen(port,()=>{
    console.log("Port ==> ", port);
});
