const mongodb = require('mongodb')
   let mongoClient = mongodb.MongoClient
   let url = 'mongodb://localhost:27017'
function insertData(dbName,collName,title){
     try{
      
            
        
           mongoClient.connect(url,function(err,db){
                    let dbo =  db.db(dbName)
                    let data = {
                        title:title
                    }
                      dbo.collection(collName).insertOne(data,function(err,result){
                          if(!err){
                             console.log("insert Data SuccessFully")
                          }
                      })
           })
        
     }catch(e){
        
     }
}
function apiEndPoint(dbName,collName,res){
   mongoClient.connect(url,function(err,db){
      try{
         let dbo = db.db(dbName);
            dbo.collection(collName).find({}).toArray(function(err,result){
               if(!err){
                   res.send(result)
               }
            })
      }catch(e){

      }
   })
}

module.exports = {insertData,apiEndPoint}