var Handlebars = require("handlebars");
var fs = require("fs");

Handlebars.registerPartial("examplePartial", fs.readFileSync("examplePartial.hbs", 'utf8'));
fs.readFile("exampleTemplate.hbs", "utf8", function (err,data) {
  
  if (err) {
    return console.log(err);
  }

  output(data);
});


function output(data) {
  var template = Handlebars.compile(data);
  var str = template({});
  console.log(str);
}