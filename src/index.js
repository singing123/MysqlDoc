#!/usr/bin/env node
"use strict";
const { program } = require("commander");
const drive = require('./drive');
program.version('1.0.0');
program
   .option(
        "-h, --host <host>","MySql connection host","localhost"
    )
    .option(
        "-u, --user <user>","MySql connection user","root"
    )
    .option(
        "-p, --password <password>","Mysql connection password","root"
    )
    .option(
        "-P, --port <port>","Mysql connection port","3306"
    )
    .requiredOption(
        "-d, --database <database>","The database to generate the document"
    )
    .option(
        "-t, --type <type>","Type of document generated,Optional parameters html|json|xml|markdown",'html'
    )
    .option(
        "-T, --template <template>","Template to generate HTML",false
    )
    .option(
        "--tables","Whether to generate table comments",true
    )
    .option(
        "-o, --output <output>", "Output dirname.", "./doc/"
    )
    .option(
        "-f, --field <field>","Table information displayed,",''
    )
    .option(
        "-a, --author <author>","Document author ","^_^"
    )
    .option(
        "-e, --email <email>","Author email ","^_^@singing123.com"
    )
    .option(
        "--title <title>","Document title","Database dictionary"
    ) 
    .option(
        "--DocVersion <DocVersion>","Document version","1.0.0"
    )
    .parse(process.argv)

var options = {
    host: program._optionValues.host,
    user: program._optionValues.user,
    password:program._optionValues.password,
    port:program._optionValues.port,
    database:program._optionValues.database,
    type:program._optionValues.type,
    template:program._optionValues.template,
    tables:program._optionValues.tables,
    output:program._optionValues.output,
    field:program._optionValues.field,
    author:program._optionValues.author,
    email:program._optionValues.email,
    title:program._optionValues.title,
    DocVersion:program._optionValues.DocVersion,

}


process.on('uncaughtException',(err,origin)=>{
    console.log(err,origin);
})
process.on("unhandledRejection",(err,origin)=>{
    console.log(err,origin);
})

drive(options)