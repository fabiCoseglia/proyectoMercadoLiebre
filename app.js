const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

//ROOTs//

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

//SERVER//

app.listen(port,()=>{
    console.log('server on in https:localhost/' + port);
});



