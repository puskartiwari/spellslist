import React from 'react';
import { Outlet } from 'react-router-dom';

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    return (
        <div style={{ border: 2, padding: 2, borderColor: 'black', borderStyle: 'dashed', margin: 5, width: 500, height: 500 }}>
            <Outlet />
        </div>
    );
};

export default LayoutComponent;

// import React, { useState, useEffect } from 'react';
// import './style.css';

// interface Spell {
//     name: string;
//     description: string;
// }

// function LayoutComponent() {
//     const [spells, setSpells] = useState<Spell[]>([]);
//     const [favorites, setFavorites] = useState<Spell[]>([]);

//     useEffect(() => {
//         fetch('http://www.dnd5eapi.co/api/spells')
//             .then((response) => response.json())
//             .then((data) => setSpells(data.results));
//     }, []);

//     const addToFavorites = (spell: Spell) => {
//         setFavorites([...favorites, spell]);
//     };

//     return (
//         <div className="App">
//             {/* <div className="flex-container">
//                 <div className="flex-item-left">1</div>
//                 <div className="flex-item-center">3</div>
//                 <div className="flex-item-right">2</div>
//             </div> */}

//             <div className="flex-container">
//                 <div className="flex-item-left">
//                     <div className="flex-container-c">
//                         {/* <div className="flex-item-left">3</div> */}
//                         <div className="flex-item-right">
//                             2<h1>List of Spells</h1>
//                             <ul>
//                                 {spells.map((spell) => (
//                                     <li key={spell.name}>
//                                         <a href={`/spells/${spell.name}`}>{spell.name}</a> <br></br>
//                                         <button onClick={() => addToFavorites(spell)}>Add to Favorites</button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className="flex-item-center">3</div> */}
//                 <div className="flex-item-right">
//                     2<h2>Favorites</h2>
//                     <ul>
//                         {favorites.map((spell) => (
//                             <li key={spell.name}>{spell.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             {/* <h1>List of Spells</h1>
//             <ul>
//                 {spells.map((spell) => (
//                     <li key={spell.name}>
//                         <a href={`/spells/${spell.name}`}>{spell.name}</a> <br></br>
//                         <button onClick={() => addToFavorites(spell)}>Add to Favorites</button>
//                     </li>
//                 ))}
//             </ul> */}
//             {/* <h2>Favorites</h2>
//             <ul>
//                 {favorites.map((spell) => (
//                     <li key={spell.name}>{spell.name}</li>
//                 ))}
//             </ul> */}
//         </div>
//     );
// }

// export default LayoutComponent;
