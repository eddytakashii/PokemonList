import {getPokemonDetails,getPokemonAbilities,getPokemonByType,getPokemonEvolutionChain,getPokemonLists,getPokemonLocations,getPokemonTypes} from '../service/pokemonService'

export const fetchPokemonDetails=async(name)=>{
    return await getPokemonDetails(name)
}

export const fetchPokemonLists=async(limit,offset)=>{
    return await getPokemonLists(limit,offset)
}

export const fetchPokemonTypes=async()=>{
    return await getPokemonTypes()
}

export const fetchPokemonByType=async(type)=>{
    return await getPokemonByType(type)
}

export const fetchPokemonAbilities=async(name)=>{
    return await getPokemonAbilities(name)
}

export const fetchPokemonEvolutionChain=async(id)=>{
    return await getPokemonEvolutionChain(id)
}

export const fetchPokemonLocation=async(name)=>{
    return await getPokemonLocations(name)
}