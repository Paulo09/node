var os = require('os') //node.js
var fs = require('fs');
const { error } = require('console');

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname);


fs.rename('teste.js','teste_novo.js',(err) => {
    if(err){
        console.log();
    }
})


fs.readFile('teste_novo.js',(err,data)=>{
    if(err)throw err;
    console.log('Conteudo Arquivo:',data.toString());
})

con