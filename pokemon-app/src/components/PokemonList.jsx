import React,{useEffect, useState} from "react";
import { ListGroup,Form, FormGroup} from "react-bootstrap";
import { fetchPokemonLists, fetchPokemonTypes, fetchPokemonByType } from "../controllers/pokemonController";

const PokemonList=()=>{
    const [pokemon,setPokemons]=useState([])
    const [types,setTypes]=useState([])
    const [selectedType,setSelectedType]=useState('rock')
    const[searchTerm,setSearchTerm]=useState('')
    const[filteredPokemons,setFilteredPokemons]=useState([])

    useEffect(()=>{
        const fetchData=async ()=>{
            const typesData=await fetchPokemonTypes()
            setTypes(typesData)
            const pokemonsData= await fetchPokemonLists(500,0)
            setPokemons(pokemonsData)
            
        };
        fetchData()
    },[])
    useEffect(()=>{
        if(selectedType){
            const fetchPokemonSelected= async()=>{
                const pokemonsByType=await fetchPokemonByType(selectedType)
                setFilteredPokemons(pokemonsByType)
            }
                fetchPokemonSelected()
            }else{
                setFilteredPokemons(pokemon)
            }
        },[selectedType,pokemon])
    useEffect(()=>{
        if(searchTerm){
            setFilteredPokemons(pokemon.filter(pokemon=>pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }else{
            setFilteredPokemons(pokemon)
        }
    },[searchTerm,pokemon])
return(
    <div className="container text-center mt-4">
        <h1>Lista Pokemon</h1>
        <Form.Group controlId="searchBar" className="mb-4">
            <Form.Control type="text" placeholder="Digite um pokemon" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </Form.Group>

        <FormGroup controlId="typeFilter" className="mb-4">
            <Form.Control as="select" value={selectedType} onChange={(e)=>setSelectedType(e.target.value)}>
                <option value=''>todos os tipos</option>
                {
                    types.map(type=>(
                        <option key={type.name} value={type.name}>{type.name}</option>
                    ))
                }
            </Form.Control>
        </FormGroup>

        <ListGroup>
            {filteredPokemons.map((pokemon,index)=>(
                <ListGroup.Item key={index}>
                    <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
                </ListGroup.Item>
            )
        )}
        </ListGroup>
    </div>
)}
export default PokemonList;