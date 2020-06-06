const Record = require("../model/record");

module.exports = {
    data: async (req, res) => {
        const data_retorno = req.params.data_retorno;
        await Record.findAll({
            where: {
                data_retorno: data_retorno
            } 
        }).then(records => {
            if(records != undefined){
                res.render('index', {records: records});
            }else{
                res.send("Registro não encontrado!");
            }

        }).catch(erro => {
            res.send("Erro no banco de dados!");
        });
    },

    status: async (req, res) => {
        const status = req.params.status;
        await Record.findAll({
            where: {
                status: status
            } 
        }).then(records => {
            if(records != undefined){
                res.render('index', {records: records});
            }else{
                res.send("Registro não encontrado!");
            }

        }).catch(erro => {
            res.send("Erro no banco de dados!");
        });
    }
}