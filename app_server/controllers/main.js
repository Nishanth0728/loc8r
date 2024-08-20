/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Express' });
  };

module.exports.signin = function(req, res){
    res.render('signin', { title: 'Express' });
  };
