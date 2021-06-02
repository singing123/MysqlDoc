# MysqlDoc
自动生成数据库文档

## Installation

`npm install @singing123/mysqlDoc`

## Example

`mysqlDoc -d mysql`

## Parameter

` 
  -V, --version              output the version number
  -h, --host <host>          MySql connection host (default: "localhost")
  -u, --user <user>          MySql connection user (default: "root")
  -p, --password <password>  Mysql connection password (default: "root")
  -P, --port <port>          Mysql connection port (default: "3306")
  -d, --database <database>  The database to generate the document
  -t, --type <type>          Type of document generated,Optional parameters html|json|xml|markdown (default: "html")
  -T, --template <template>  Template to generate HTML (default: false)
  --tables                   Whether to generate table comments (default: true)
  -o, --output <output>      Output dirname. (default: "./doc/")
  -f, --field <field>        Table information displayed, (default: "")
  -a, --author <author>      Document author  (default: "^_^")
  -e, --email <email>        Author email  (default: "^_^@singing123.com")
  --title <title>            Document title (default: "Database dictionary")
  --DocVersion <DocVersion>  Document version (default: "1.0.0")
  --help                     display help for command
`