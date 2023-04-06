const User = require('../models/User.model')



//Show all the users
const index = (req, res, next) =>{
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.josn({
            message: 'An error occured'
        })
    })
}



//update a user
const updateUser = (req, res, next) =>{
    let userID = req.body.userID

    let updateData= {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        
    }

    User.findByIdAndUpdate(userID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'User updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured'
        })
    })
}


//Delete a user

const deleteUser = (req, res, next)=>{
    let userID= req.body.userID

    User.findByIdAndRemove(userID)
    .then(()=>{
        res.json({
            message: 'User deleted successfully!'
        })

    })
    .catch(error =>{
        res.json({
            message:' An error occured'
        })
    })
}


module.exports = {
    index, updateUser, deleteUser
}