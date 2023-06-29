import React,{ useEffect, useState } from "react";
import {getCharacters} from "../service/characters";
import './CharacterPages.css';


// <button onClick ={()=>}></button>
const TableRow = ({id, name, status})=> (
    <tr classname={"trow"} key = {id}>
    <td>{name}</td>
    <td>{status}</td>
</tr>
);

/*let newValue="";

<button onClick = {(event)=> {                
                setQuery(newValue);
            }}
            Поиск    
            </button>            
            >*/

const CharactersPage = () => {
    const[query, setQuery] = useState('');
    return (
        <div className={'characters-page'}>
            <input className={'search-input'} placeholder ="Введите имя персонажа"
                value ={query}
                onChange={(event)=> {
                    const newValue =event.target.value;  
                    setQuery(newValue);                 
                }}
            />                          
            <br/>
           
            <span>Текущее значение: {query} </span>

            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Статус</th>
                </tr> 
                </thead>
                <tbody>
                {getCharacters(query).map((character) => (<TableRow{...character}/>))}
                </tbody>
            </table>
        </div>
    );
}

/*<input className={'search-input'} onChange={(event) => {
    console.log(event.target.value);
} }
//onMouseOver={(event)}
/>*/

export default CharactersPage;