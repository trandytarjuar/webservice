
const Customer = require('../model/customerModel')


exports.postDataCustomer = (req, res) =>{

    let {nama,email,phone,address} = req.body;
    
     
        let addCustomer = new Customer({
            nama : nama,
            email : email,
            phone : phone,
            address : address
          })
          
       addCustomer.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
    exports.getAllDataCustomer = async(req, res) =>{

   
    let dataHasil = await Customer.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

exports.getAllDataCustomerByNama = async(req, res) =>{

   
    let Nama = req.params.id;

    let dataHasil = await Customer.find({nama: {$regex: Nama, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.getAllDataCustomerByAddress = async(req, res) =>{

   
    let Alamat = req.params.address;

    let Hasil =  Customer.find({address: {$regex: Alamat, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
         
        timestamp : req.requestTime,
        data : Hasil
        
        });
    
}


exports.updateDataCustomerById = async(req, res) =>{

    console.log(req.body)
    await Customer.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDataCustomerById = async(req, res) =>{


    await Customer.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }