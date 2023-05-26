const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req,res)=>{
   const {id} = req.params
   const {data}= await axios.get(`${URL}${id}`)
   try {
      if(data){
        res.status(200).json({
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
         })
      }else{
         res.status(404).send({error: "Not found"})
      }
   } catch (error) {
      res.status(500).end(error.message)
   }
      
}


module.exports ={
    getCharById
}

// const getCharById = (res, id)=>{
//    axios(`https://rickandmortyapi.com/api/character/${id}`)
//    .then((response)=> response.data)
//    .then(({name, gender, species, origin, image, status})=>{
//       const character = {
//         id,
//         name,
//         origin,
//         gender,
//         status,
//         species,
//         image
//       }
//       return res
//             .writeHead(200, {"Content-type":"application/json"})
//             .end(JSON.stringify(character))
//    })
//    .catch(error =>{
//       return res
//             .writeHead(500,{"Content-type":"text/plain"})
//             .end(error.message)
//    })
// }




// const getCharById = (req,res)=>{
//    const {id} = req.params
//    axios.get(`${URL}${id}`)
//    .then((response)=> response.data)
//    .then((data)=>{
//       if(!id){
//          res.status(404).send({error: "Not found"})
//       }else{
//          if(data){
//             res.status(200).json({
//                id: data.id,
//                status: data.status,
//                name: data.name,
//                species: data.species,
//                origin: data.origin,
//                image: data.image,
//                gender: data.gender
//             })
//          }else{
//             res.status(500).end(error.message)
//          }
//       }
//    })
// }