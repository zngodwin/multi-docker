import React from 'react';
import { Link } from 'react-router-dom';

const TestPage = () => {
    return(
        <div>
            <Link to="/home"> Go back home</Link>
            <br/>
            This Is A Test Page
        </div>
    );
};

export default TestPage;