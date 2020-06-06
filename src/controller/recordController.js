const Record = require("../model/record");
const mail = require("../infra/sendMail");


module.exports = {
    index: async (req, res) =>{
        await Record.findAll().then(records => {
            res.render('index', {records: records});
        });     
    },
    store: async(req, res) => {
        const {numeroSecretaria, nome, email, telefone, data_cadastro, data_retorno, status} = req.body;
        if(!numeroSecretaria){
            return res.status(400).send({ error: 'Dados insuficientes!' });
        }
        try{
            if(await ! Record.findOne({ numeroSecretaria })){
                return res.status(400).send({error: 'Paciente já resgistado!'});
            } 
        const record = await Record.create(req.body);

        mail.sendMail(email, nome, data_retorno);
        
        return res.status(201).send(record);

        }
        catch(err){
            if(err){
                return res.status(500).send({error: 'Erro ao buscar registro!' });
            }
        }
    }
}

        