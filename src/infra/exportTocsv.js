const json2csv = require('json2csv').parse;
const fs = require('fs');
const uuid = require('uuid');

const fields = ['numeroSecretaria', 'nome', 'email', 'telefone', 'data_cadastro', 'data_retorno', 'status',];
const opts = { fields };


module.exports.tocsv = function (records) {
    try {

        const csv = json2csv(records, opts);
        const filename = uuid.v4() + ".csv"
        fs.writeFile('./exports/' + filename, csv, function (err) {
            if (err) throw err;
            console.log('file saved');
        });

        return filename;

    } catch (err) {
        console.error(err);
    }
}