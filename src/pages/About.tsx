import React, { useState, useEffect } from 'react';
import '../components/style.css';
import { Link, useNavigate } from 'react-router-dom';

interface Spell {
    name: string;
    description: string;
}

function AboutPage() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [favorites, setFavorites] = useState<Spell[]>([]);

    const [spellData, setSpellData] = useState<Spell | null>(null);

    useEffect(() => {
        fetch('http://www.dnd5eapi.co/api/spells')
            .then((response) => response.json())
            .then((data) => setSpells(data.results));
    }, []);

    const addToFavorites = (spell: Spell) => {
        setFavorites([...favorites, spell]);
    };

    return (
        <div className="App">
            <div className="flex-container">
                <div className="flex-item-left">
                    <div className="flex-container-c">
                        <div className="flex-item-right">
                            <h1>List of Spells</h1>
                            <ul>
                                {spells.map((spell) => (
                                    <li key={spell.name}>
                                        <Link to="/test" className="list-name">
                                            {spell.name}
                                        </Link>
                                        <br></br>
                                        <button className="btn-tab" onClick={() => addToFavorites(spell)}>
                                            Add Favorites
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-item-right">
                    <h2>MY Favorites</h2>
                    <ul>
                        {favorites.map((spell) => (
                            <li key={spell.name}>{spell.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
