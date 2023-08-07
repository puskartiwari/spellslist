// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export interface IAboutPageProps {}
// interface Spell {
//     name: string;
//     desc: string[] | undefined; // Make desc optional by allowing undefined
//     // other properties of the spell
// }

// const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
//     const [message, setMessage] = useState('');
//     const [spells, setSpells] = useState<Spell[]>([]);
//     const { number } = useParams();

//     useEffect(() => {
//         if (number) {
//             setMessage('The number is ' + number);
//         } else {
//             setMessage('No number was provided');
//         }
//         fetchSpells();
//     }, []);

//     const fetchSpells = async () => {
//         try {
//             const response = await fetch('http://www.dnd5eapi.co/api/spells');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch spells');
//             }
//             const data = await response.json();
//             setSpells(data.results);
//         } catch (error) {
//             console.error('Error fetching spells:', error);
//         }
//     };

//     return (
//         <div>
//             <p>This is the about page.</p>

//             <h1>Spells List</h1>
//             <ul>
//                 {spells.map((spell) => (
//                     <li key={spell.name}>
//                         <h3>{spell.name}</h3>
//                         {/* Check if desc is defined before using the join method */}
//                         <p>{spell.desc ? spell.desc.join('\n') : 'No description available'}</p>
//                     </li>
//                 ))}
//             </ul>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default AboutPage;

import React, { useState, useEffect } from 'react';
// import '../comstyle.css';
import '../components/style.css';
import { Link, useNavigate } from 'react-router-dom';

interface Spell {
    name: string;
    description: string;
}

function AboutPage() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [favorites, setFavorites] = useState<Spell[]>([]);

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
            {/* <div className="flex-container">
                <div className="flex-item-left">1</div>
                <div className="flex-item-center">3</div>
                <div className="flex-item-right">2</div>
            </div> */}

            <div className="flex-container">
                <div className="flex-item-left">
                    <div className="flex-container-c">
                        {/* <div className="flex-item-left">3</div> */}
                        <div className="flex-item-right">
                            <h1>List of Spells</h1>
                            <ul>
                                {spells.map((spell) => (
                                    <li key={spell.name}>
                                        {/* <a href={`${spell.name}`}>{spell.name}</a> <br></br> */}
                                        <Link to="/test">{spell.name}</Link>
                                        <br></br>
                                        <br></br>
                                        <button onClick={() => addToFavorites(spell)}>Add Favorites</button>
                                    </li>
                                ))}
                            </ul>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
                {/* <div className="flex-item-center">3</div> */}
                <div className="flex-item-right">
                    <h2>Favorites</h2>
                    <ul>
                        {favorites.map((spell) => (
                            <li key={spell.name}>{spell.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <h1>List of Spells</h1>
            <ul>
                {spells.map((spell) => (
                    <li key={spell.name}>
                        <a href={`/spells/${spell.name}`}>{spell.name}</a> <br></br>
                        <button onClick={() => addToFavorites(spell)}>Add to Favorites</button>
                    </li>
                ))}
            </ul> */}
            {/* <h2>Favorites</h2>
            <ul>
                {favorites.map((spell) => (
                    <li key={spell.name}>{spell.name}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default AboutPage;
