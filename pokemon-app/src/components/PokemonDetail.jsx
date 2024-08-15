import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../controllers/pokemonController";
import './pokemonDetail.css'
import { Card, ListGroup } from "react-bootstrap";

const PokemonDetail=()=>{
    const {name}=useParams()
    const [pokemon,setPokemon]=useState(null)
    console.log(name)
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetchPokemonDetails(name)
            setPokemon(data)
        }
        fetchData()
    },[name])
    return(
        pokemon?(
            <div className="container mt-4">
                <Card>
                    <Card.Img className="pokemon-image" variant="top" src={pokemon.sprites.front_default}/>
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            Altura:{pokemon.height} decimetros
                            <br></br>
                            Peso:{pokemon.weight} hectogramas
                        </Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                <strong>Habilidades:</strong>
                                <ul>
                                    {pokemon.abilities.map((ability,index)=>(
                                        <li key={index}>{ability.ability.name}</li>
                                    ))}
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>

                    
                </Card>
            </div>
        ):(
            <div className="container mt-4">
                Carregando...
            </div>
        )
    )
}
export default PokemonDetail