
const Users = require('../model/usersModel')


exports.addUsers = (req, res) =>{

    let {nama,email,phone,address} = req.body;
    
     
        let user = new Users({
            nama : nama,
            email : email,
            phone : phone,
            address : address
          })
          
          user.save().then (doc => {
       
            res.status(200).send("Berhasil memasukan data " + doc);
           }).catch(err =>{
            res.status(500).send("Gagal Insert Data "+err)
           })
     
       
    }
    
    exports.getAllUser = async(req, res) =>{

   
        let dataHasil = await Users.find();
        res.status(200).json({
        
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    }

exports.getAllDataUserById = async(req, res) =>{

   
    let nama = req.params.id;

    let dataHasil = await user.find({nama: {$regex: nama, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDataUserById = async(req, res) =>{

    console.log(req.body)
    await User.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDataUserById = async(req, res) =>{


    await User.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }