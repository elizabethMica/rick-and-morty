let myFavorites =[];

const postFav = (req,res)=>{
    const character = req.body
    myFavorites.push(character)
    res.status(200).json(myFavorites)
};

const deleteFav = (req,res)=>{
    const {id} =req.params;

    let filteredFavs = myFavorites.filter(fav => fav.id !== +id)
    myFavorites = filteredFavs;
    res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}
