'use strict';
const Record = require("../model/record");
const ExportData = require('../infra/exportTocsv');


module.exports = {
    exportToCsv: async (req, res) => {
        await Record.findAll()
            .then(records => {
                if(records != undefined){
                    let filename = ExportData.tocsv(records);
                    res.download("./exports/" + filename);
                }
    
            }).catch(err => res.status(500).send(err))
    },

    data: async (req, res) => {
        const data_retorno = req.params.data_retorno;
        await Record.findAll({
            where: {
            data_retorno: data_retorno
            }
        }).then(records => {
            if(records != undefined){                
                let filename = ExportData.tocsv(records);
                res.download("./exports/" + filename);
            }    
            
    
        }).catch(err => res.status(500).send(err))
    },

    status: async (req, res) => {
        const status = req.params.status;
        await Record.findAll({
            where: {
                status: status
            } 
        }).then(records => {
            if(records != undefined){                
                let filename = ExportData.tocsv(records);
                res.download("./exports/" + filename);
            }
        }).catch(err => res.status(500).send(err))
    }
}
