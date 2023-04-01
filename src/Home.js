import React from 'react';
import Pokemon from "./components/pokemon";
import { useParams } from "react-router-dom"

export default function Home(){
    const [pokemon, setPokemon] = React.useState({});
    const {num_poke} = useParams();

    function Carregar(){
        fetch('https://pokeapi.co/api/v2/pokemon/' + num_poke)
        .then(response => response.json())
        .then(data => {
        setPokemon(data)
        });
    }
    React.useEffect(()=>{
        Carregar();
    },[num_poke]);

    React.useEffect(()=>{
        Carregar();
    },[]);

    
    if(pokemon.name){
        return(
            <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
            
            <div class = "w-75 p-3 bg-danger  border-dark border border-4">
                
                <h2>Nº {num_poke}</h2>
                <Pokemon imagem = {pokemon.sprites.front_default} nome = {pokemon.name} tipo = {pokemon.types.map(type => type.type.name).join(",")} habilidades = {pokemon.abilities.map(ability => ability.ability.name).join(",")} ataques = {pokemon.moves.slice(0,2).map(move => move.move.name).join(" / ")}  ataques_2 = {pokemon.moves.slice(2,4).map(move => move.move.name).join(" / ")}/>

            </div>
            </div>
        );
    }
    else{
        return(
        <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
            <div class="w-75 p-3 bg-danger  border-dark border border-4">
            <button class="btn  btn-secondary " onClick={Carregar}>Carregar</button>
            </div>
        </div>
        );
    }

} 