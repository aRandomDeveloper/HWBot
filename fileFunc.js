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
const getData = function(path, query){
    try{
    var userData = fs.readFileSync(path, 'utf8', function(err){console.log(error);})
   
        
        
             //read the userData
              console.log(userData);

           
                    
var filteredData = parseInt(userData.substring(userData.indexOf(query) + query.length, userData.indexOf(div, userData.indexOf(query))));
    //console.log("balanceToPayout" + pseudobalanceToPayout)
          
                    

           return filteredData;
       
        }
        
           
 catch (err){
    console.log(err);
}}

const init = function(path){
    
   


}
exports.getData = getData;
exports.init = init;