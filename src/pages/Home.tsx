import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/style.css';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h1>This is the home page.</h1>
            <p>
                <Link to="/about" className="spell-lists">
                    Go to Spell Lists
                </Link>
            </p>
            <p>{/* <Link to="/test">Go to the Test Page!</Link> */}</p>
            {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </div>
    );
};

export default HomePage;
