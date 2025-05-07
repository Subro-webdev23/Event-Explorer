import React from 'react';
import Navber from '../../Component/Header/Navber';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error Page</title>

            </Helmet>
            <Navber></Navber>
            <p>Error - 404</p>
        </div>
    );
};

export default ErrorPage;