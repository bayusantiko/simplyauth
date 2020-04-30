
function login(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const axios = require('axios')
    console.log(username,password)
    if(username==="opdtelkom@gmail.com" && password==="admin"){
        axios.post('http://localhost:8020/token/email', {
            user: `${username}`
          }).then(() => {
            //console.log(response);
            res.render('token',{user:username});
          }, (error) => {
            console.log(error);
          });
    }
    else{
        res.render('index', {error: true});
    }
}

module.exports.login=login;