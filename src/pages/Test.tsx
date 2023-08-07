import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
            <p>
                <Link to="/about" className="spell-lists">
                    Go to Spell Page
                </Link>
            </p>
            <h1>Acid Arrow Spell</h1>

            {spellData?.desc.map((description, index) => (
                <p key={index}>{description}</p>
            ))}
        </div>
    );
};

export default TestPage;
