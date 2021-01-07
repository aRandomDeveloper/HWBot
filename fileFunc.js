const fs = require("fs");
const div = "**((||div||))**";
function nthIndex(str, pat, n){
    var L= str.length, i= -1;
    while(n-- && i++<L){
        i= str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}
const getData = function(path){
    try{
    var userData = fs.readFileSync(path, 'utf8', function(err){console.log(error);})
   return JSON.parse(userData)
             //read the userData
              console.log(userData);
        }
        
           
 catch (err){
    console.log(err);
}}

const saveData = function(path, data){
    fs.writeFileSync(path, JSON.stringify(data), function(e){console.log(e)})
}
exports.getData = getData;
exports.saveData = saveData;