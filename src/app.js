const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const {nome, email, data_retorno, status} = require("./model/record");
const mail = require("./infra/sendMail");


//rotas
const records = require("./router/recordRouter");
const filter = require("./router/filterRouter");
const file = require("./router/exportRouter");

//View engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    });

app.use('/uploads', express.static(process.cwd() + '/uploads'))
app.use('/exports', express.static(process.cwd() + '/exports'))

app.use("/", records);
app.use("/", filter);
app.use("/", file);

mail.sendMailRemember(email, nome, data_retorno);
mail.sendMailNotAttend(email, nome, data_retorno, status);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server running on localhost:8080");
});