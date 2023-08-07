// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';

// export interface ITestPageProps {}

// interface Spell {
//     name: string;

//     desc: string[] | undefined; // Make desc optional by allowing undefined
//     // other properties of the spell
// }
// type test = {
//     desc: string;
// };

// const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [data, setData] = useState<string | null>(null);
//     // const [posts, setPosts] = useState([] as any[]);

//     // useEffect(() => {
//     //     // fetchSpells();
//     //     axios
//     //         .get('http://www.dnd5eapi.co/api/spells/acid-arrow')
//     //         .then((res) => {
//     //             console.log(res);
//     //             setPosts(res.data);
//     //         })
//     //         .catch((err) => {
//     //             console.log(err);
//     //         });
//     // }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(`http://www.dnd5eapi.co/api/spells/acid-arrow`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch spells');
//             }
//             const jsonData = await response.json();
//             setData(JSON.stringify(jsonData, null, 1));
//             // setData(JSON.stringify(jsonData, null, 2));
//         } catch (error) {
//             console.error('Error fetching spells:', error);
//         }
//     };

//     const food = searchParams.get('food');
//     const dog = searchParams.get('dog');

//     return (
//         <div>
//             <p>This is the test page.</p>
//             {food && <p>Favorite food is: {food}</p>}
//             {dog && <p>My dogs name is: {dog}</p>}
//             <button onClick={() => setSearchParams({ food: 'chicken', dog: 'kyle' })}>Change up the Params!</button>
//             <h1>Spells List</h1>
//             <button onClick={fetchData}>Fetch Data</button>
//             {data && <pre>{data}</pre>}
//         </div>
//     );
// };

// export default TestPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Spell {
    desc: string[];
}

const TestPage: React.FC = () => {
    const [spellData, setSpellData] = useState<Spell | null>(null);

    useEffect(() => {
        axios
            .get<Spell>('http://www.dnd5eapi.co/api/spells/acid-arrow')
            .then((response) => {
                setSpellData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching spell data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Acid Arrow Spell</h1>

            {spellData?.desc.map((description, index) => (
                <p key={index}>{description}</p>
            ))}
        </div>
    );
};

export default TestPage;
