const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');
function htmlDrive(opt){
    let tpl = opt.template;
    if(tpl===false){
        tpl = path.join(__dirname,'./template/index.html');
    }
    let tpl_str = fs.readFileSync(tpl,{encoding:'UTF-8'});
    let str = ejs.render(tpl_str, opt);
    return str;
} 
module.exports = htmlDrive;