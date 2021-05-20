const mysql2 = require('mysql2/promise')

class mysql {
    host = "";
    user = "";
    prot = 3306;
    password = "";
    database = "";
    comm = false;
    tables = false;
    tablesInfo = false;
    constructor(opt){
        if(opt.host)this.host = opt.host;
        if(opt.user)this.user = opt.user;
        if(opt.port)this.port = opt.port;
        if(opt.password)this.password = opt.password;
        if(opt.database)this.database = opt.database;
    }

    async connection(){
        this.comm = await mysql2.createConnection({
            host:this.host,
            user:this.user,
            port:this.port,
            password:this.password,
            database:"INFORMATION_SCHEMA",
            charset: 'utf8mb4'
        })
        return this.comm;
    }

    async getTableList(){
        if(!this.comm){
            await this.connection()
        }
        const sql = "SELECT TABLE_NAME,TABLE_COMMENT FROM INFORMATION_SCHEMA.TABLES where table_schema=?";
        const [res] = await this.comm.query(sql,this.database);
        this.tables = res;
        return res;
    }

    async getTablesInfo(){
        if(!this.comm){
            await this.connection()
        }
        const table_list = await this.getTableList();
        if(!table_list){this.comm.end();return false;}
        const sql = "SELECT COLUMN_NAME,COLUMN_COMMENT,COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=? and TABLE_NAME=?";
        const result = await Promise.all(
            table_list.map(async(item)=>{
                if(!item)return;
                let [row] = await this.comm.query(sql,[this.database,item.TABLE_NAME]);
                return row;
            })
        )
        this.close()
        this.tablesInfo = result;
        return result;
    }

    close(){
        if(this.comm)this.comm.end();
    }

}

module.exports = mysql;