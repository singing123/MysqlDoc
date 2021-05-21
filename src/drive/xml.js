const josnDrive = require('./json');
const Js2Xml = require("js2xml").Js2Xml;
function xmlDrive(opt){
    let data = josnDrive(opt,true);
    let xml = new Js2Xml("root", data);
    return xml.toString();
}

module.exports = xmlDrive;