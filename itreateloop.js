
var json = [{
    "id" : "vignesh",
    "msg"   : "Hello World",
    "task" : "zen portal task",
    "mail": "vickyjasper84@gmail.com",
},
{
    "id" : "vignesh", 
    "msg"   : "Hello World",
    "task" : "zen portal task",
    "mail": "vickyjasper84@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
  
  