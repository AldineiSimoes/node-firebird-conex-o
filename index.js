import express from 'express';
import bodyParser from 'body-parser';
// import userRoute from './routes/userRoutes';
import corretor from './routes/corretorRoutes.js';
const app = express();
const port = 3000; 
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// userRoute(app)
corretor(app);

app.get('/',(req, res) => res.send('Servidor administração de imóveis Apta Brasil'));
app.listen(port ,() => {console.log('servidor rodando na porta : '+port)});