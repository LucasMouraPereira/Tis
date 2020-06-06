const nodemailer =require("nodemailer");
const CronJob = require('cron').CronJob;

module.exports.sendMail = function (email, nome, data_retorno) {
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "24b9e34c2a7af9",
            pass: "3597b973031ea3"
    }
    });

    transporter.sendMail({
        from: "Hospital São Francisco de Assis <24b9e34c2a7af9>",
        to: `${email}`,
        subject: 'Procedimento Agendado',
        html:`Olá, Sr(a) ${nome},
            informamos que seu procedimento foi agendado para a data ${data_retorno},
            se por algum motivo não puder comparecer,
            você poderá entrar em contato com o hospital para reagendar.
            Att,
            Hospital São Francisco de Assis`
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })
}

module.exports.sendMailRemember = function(email, nome, data_retorno){
    if(data_retorno - 1){
        const job = new CronJob('0 0 0 * * *', () => {
            let transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "24b9e34c2a7af9",
                    pass: "3597b973031ea3"
            }
        });
        
            transporter.sendMail({
                from: "Hospital São Francisco de Assis <24b9e34c2a7af9>",
                to: `${email}`,
                subject: 'Lembrete de Agendado',
                html:`Olá, Sr(a) ${nome},
                    informamos que amanha, ${data_retorno},
                    seu procedimento está agendado.
                    Se por algum motivo não puder comparecer,
                    você poderá entrar em contato com o hospital para reagendar.
                    Att,
                    Hospital São Francisco de Assis`
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err);
            })
    
        }, null, true, 'America/São_Paulo')
    } 
}

module.exports.sendMailNotAttend = function(email, nome, data_retorno, status){
    if(data_retorno + 1 && status == " "){
        const job = new CronJob('0 0 0 * * *', () => {
            let transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "24b9e34c2a7af9",
                    pass: "3597b973031ea3"
            }
            });
        
            transporter.sendMail({
                from: "Hospital São Francisco de Assis <24b9e34c2a7af9>",
                to: `${email}`,
                subject: 'Não comparecomento do procedimento',
                html:`Olá, Sr(a) ${nome},
                    seu procedimento era para acontecer na ${data_retorno},
                    porém notamos que Sr(a) não compareceu.
                    Gostariamos de saber o motivo, favor,
                    entrar em contato por email ou telefone.
                    Lembramos também que você poderá entrar em contato
                    com o hospital para reagendar.
                    Att,
                    Hospital São Francisco de Assis`
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err);
            })
    
        }, null, true, 'America/São_Paulo')
    } 
}