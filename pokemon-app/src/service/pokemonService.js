export const getPokemonDetails=async(name)=>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if(!response.ok){
            throw new Error("erro ao encontrar pokemon",response.status)
        }
        const data= await response.json()
        return data
    }catch(error){
        console.log(error)
    }
    
}
export const getPokemonLists=async(limit=200,offset=0)=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        console.error("erro ao buscar lista", error)
    }
}
export const getPokemonTypes=async()=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/`)
        const data = await response.json()
        return data.results
    } catch (error) {
        console.error("erro ao buscar lista", error)
    }
}
export const getPokemonByType=async(type)=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`)
        if(!response.ok){
            throw new Error("erro ao encontrar tipos",response.status)
        }
        const data = await response.json()
        return data.pokemon.map(p=>p.pokemon)
    } catch (error) {
        console.error("erro ao buscar lista", error)
    }
}
export const getPokemonAbilities=async(name)=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if(!response.ok){
            throw new Error("erro ao encontrar tipos",response.status)
        }
        const data = await response.json()
        const abilities=data.abilities.map(a=>a.ability.name)
        return abilities
    } catch (error) {
        console.error("erro ao buscar lista", error)
    }
}
export const getPokemonEvolutionChain=async(id)=>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
        if(!response.ok){
            throw new Error("erro ao encontrar evolução",response.status)
        }
        const data= await response.json()
        return data.chain
    }catch(error){
        console.log(error)
    }
    
}
export const getPokemonLocations=async(name)=>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase}/encounters`)
        if(!response.ok){
            throw new Error("erro ao encontrar localizações",response.status)
        }
        const data= await response.json()
        return data
    }catch(error){
        console.log(error)
    }
    
}
