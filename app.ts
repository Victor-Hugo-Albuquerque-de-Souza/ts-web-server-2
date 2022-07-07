import express, {Response, Request, Express} from 'express';
import sequelize from "./database/sequelize";
import films from "./app/controllers/FilmController";
import bodyParser from 'body-parser';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json())

app.use('/films', films);

app.get('/', (req : Request, res:Response)=>{
    res.send('Hello world express + typescript!!');
})

app.listen(port,
     () =>{
        console.log(`Servidor Rodando na porta ${port}`);
});

sequelize();