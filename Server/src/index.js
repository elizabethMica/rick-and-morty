const server = require("./app")
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



// const http = require("http");
// const data = require("./utils/data")
// const {getCharById} = require("./controllers/getCharById")

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let urlRaM = req.url;
//     if(urlRaM.includes("/rickandmorty/character")){
//       const id = urlRaM.split("/").at(-1)
//       getCharById(res, Number(id));
//     }

// }).listen(3001, "localhost")