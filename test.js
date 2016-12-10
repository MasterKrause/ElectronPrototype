var loki = require('lokijs');

var db =new loki('test');
db.loadDatabase({}, function(){
    var test = db.getCollection('testCollection');
});