const getPokemonDetails =async(name="Pikachu")=>{
    try{
        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if(!response.ok){
            throw new Error (`pokemon not found:${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    }catch (error){
        console.log(erro)
    }
}
//getPokemonDetails()
const getPokemonList=async(limit=10,offset=0)=>{
    try{
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data= await response.json()
       // console.log(data.results)
       data.results.map((name)=>{
        console.log(name.name)
       })
    }catch (error){
        console.log(erro)
    }
}
getPokemonList(10,10)