function login(req,res){
    const username = req.body.username
    const password =req.body.password

    console.log(username,password)
    if(username==="admin@admin.com" && password==="admin"){
        res.render('token',{user:username});
    }
    else{
        res.render('index', {error: true});
    }
}

module.exports.login=login;