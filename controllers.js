const User = require('./models');

const rootDir = require('./util/path');
const path = require('path');

exports.getAppointmentApp = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'public', 'index.html'));
}

exports.PostUsers = async (req, res, next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    try{
    const data = await User.create({
        name: name,
        email: email,
        phone: phone
    });
    res.send(data);
}
catch(error){
    console.log(error);
}
}

exports.getUsers = async (req, res, next)=>{
    try{
    const users = await User.findAll();
    res.json(users);
    }
    catch(error){
        console.log(error);
    }
}

exports.deleteUsers = async(req, res, next)=>{
    const Userid = req.params.userid;
    try{
    const deleteuser = await User.destroy({where: {id: Userid}});
    res.json(deleteuser);
    }
    catch(error){
        console.log(error);
    }
}