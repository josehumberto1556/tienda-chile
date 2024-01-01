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

//app.use(express.static('uploads'))

app.get('/', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
   res.render("index",{titulo:"titulo dinamico",sorangel:"es bonita"})
});


app.get('/ModuloUsuarios', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("usuarios/Usuarios")
});

app.get('/registrarUsuario', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("usuarios/registrarUsuario")
})

app.get('/editarUsuario', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("usuarios/editarUsuario")
})


//modulo categorias

app.get('/ModuloCategoria', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("categoria/categoria")
});

app.get('/registrarCategoria', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("categoria/registrarCategoria")
})

app.get('/editarCategoria', (req,res) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
  // res.render("index",{titulo:"titulo dinamico"})
   res.render("categoria/editarCategoria")
})




//routerApi(app);



app.use((req,res,next) => {
   // res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
   //res.status(404).sendFile(__dirname+"/public/404.html")
   res.status(404).render("404")
});


app.listen(port,()=>{
    console.log("Port ==> ", port);
});
