var f=require('fs');
//f.writeFileSync('./NewCreatedWriteFile.txt',"I am a demo file.\n");
//f.appendFileSync('./NewCreatedWriteFile.txt'," Bye Bye People");
console.log(f.readFileSync('./NewCreatedWriteFile.txt',{encoding:'utf-8'}));