const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const databaseUrl = 'mongodb://localhost:27017';
const databaseName = 'medicallib';

async function connect(){
    let client = await MongoClient.connect(databaseUrl, {useNewUrlParser: true});
    let db = client.db(databaseName);
    return {client, db};
}

async function workAll(colName, callback){
    let {client, db} = await connect();
    let collection = db.collection(colName);
    let res = await callback(collection);
	// console.log('res:', res)
    client.close();
    return res;
}

// 查询操作
exports.find = function(colName, query, page, limit){
    return workAll(colName, async (collection)=>{
        if(page && limit){
            return await collection.find(query).skip((page-1)*limit).limit(limit).toArray();
        }else{
            return await collection.find(query).toArray();
        }
    });
}

// 增加操作
exports.insert = function(colName, query){
    return workAll(colName, async (collection)=>{
        return await collection[Array.isArray(query) ? 'insertMany' : 'insertOne'](query);
    });
}

// 更新操作
exports.update = function(colName, query, newQuery){
    return workAll(colName, async (collection)=>{
        return await collection['updateMany'](query, newQuery);
    });
}

// 删除操作
exports.delete = function(colName, query){
    return workAll(colName, async (collection)=>{
        return await collection['deleteMany'](query);
    });
}
