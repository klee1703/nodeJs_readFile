  /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */
  
var fs = require('fs');

fs.readFile('LICENSE', function(error, data) {
  if (error) {
    console.log(error.stack);
    return;
  }
  else {
    console.log(data.toString());
  }
});

console.log("Program Ended");
