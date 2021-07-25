const express = require('express')
const cors = require('cors')

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        //miiddlewares
        this.middlewares();
        //rutas de mi app
        this.routes();
    }

    middlewares(){

        this.app.use(cors());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/', (req, res) =>{
            res.send('Hello World')
          });
    }

    listen(){
         
        this.app.listen(process.env.PORT, ()=>{
            console.log('Servidor corriendo en puerto',this.port)
        });
    }
}

module.exports= Server;