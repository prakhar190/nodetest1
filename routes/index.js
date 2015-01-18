var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/helloworld', function(req,res){
    res.render('helloworld',{title:'HELLO, WORLD'})
});
router.get('/newuser',function(req,res){
    res.render('newuser',{title:'Add New User'});
});
/*Add user  */
router.post('/adduser', function(req,res){
        var db=req.db;
        var un=req.body.username;
        var ue=req.body.useremail;
        
        
        var collection=db.get('usercollection');
       
        collection.insert({"username":un,"email":ue},function(err,data){
        	
            
             if(err)
             {
             	res.send("there was a problem");
             }
             else
             {
             	res.redirect("userlist");
             }
        });


});

router.get('/userlist', function(req, res) {
	    var db = req.db;

	    var collection = db.get('usercollection');
	    collection.find({},function(err,data){
		console.log(data);
	    res.render('userlist', {"userlist":data});
    });
});
module.exports = router;
