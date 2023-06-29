import React from 'react';
import Header from "./Header";
import './App.css';
import CharactersPage from "./CharactersPage";

const App = () => (
    <div className={'app'}>
        <Header/>
        <CharactersPage/>       
    </div>
);

export default App;
