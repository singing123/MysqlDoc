function josnDrive(opt,out=false){

    let tableList = [];
    let tablesInfo = [];
    if(opt.tableList){

        tableList = opt.tableList.map((item)=>{
            return {Name:item.TABLE_NAME,Description:item.TABLE_COMMENT}
        })
    }
    if(opt.tablesInfo){
        tablesInfo = opt.tablesInfo.map((item)=>{
            return item.map((i)=>{
                return {Name:i.COLUMN_NAME,Description:i.COLUMN_COMMENT,Type:i.COLUMN_TYPE}
            })
        })
    }
    const data = {
        version:opt.DocVersion,
        time:new Date().toLocaleString(),
        author: opt.author,
        email: opt.email,
        title: opt.title,
        tableList: tableList,
        tablesInfo: tablesInfo
    }
    if(out) return data;
    return JSON.stringify(data);
}


module.exports = josnDrive;