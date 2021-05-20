const josnDrive = require('./drive/json');
const htmlDrive = require('./drive/html');
const xmlDrive = require('./drive/xml');
const markdown = require('./drive/markdown');
const fs = require("fs-extra");
const path = require('path');
const mysql = require('./db/mysql');


function createOutputFile(output,name,data) {
    let filename = path.join(output,name);
    console.log(filename);
    if (output) fs.mkdirsSync(output);
    if (data) fs.writeFileSync(filename, data);
}

function drive(opt){
    if(!opt || opt==='undefined' || opt === 'null') return false;
    const db = new mysql(opt);
    db.getTablesInfo().then((res)=>{
        if(!res || res == 'undefined' || res == 'null'){console.log('No relevant data found');process.exit(1)}
        const data = {
            ...opt,
            tableList : db.tables,
            tablesInfo : res
        }
        let parse_str = '';
        let name = opt.database;
        switch(opt.type){
            case 'html':
                parse_str = htmlDrive(data);
                name +='.html';
                break;
            case "xml":
                parse_str = xmlDrive(data);
                name +='.xml';
                break;
            case "json":
                parse_str = josnDrive(data);
                name += '.json';
                break;
            case "markdown":
                parse_str = markdown(data);
                name += '.md';
                break;
        }
        createOutputFile(opt.output,name,parse_str);
    }).catch(err=>{
        console.log(err);
        process.exit(1);

    })

}




module.exports = drive;