import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Router = ({ routes }) => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.id} path={route.path} element={route.component} />
            ))}
        </Routes>
    );
};

export default Router;
