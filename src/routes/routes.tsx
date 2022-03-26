import React from 'react';
import { Routes as ReactRouterRoutes, Route} from "react-router-dom";
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { ProtectedRoute } from './protected-route.component';

const Routes: React.FC = () => {
    return (
    <ReactRouterRoutes>
        <Route path="login" element={<LoginPage /> } />
        <Route path="signup" element={<SignupPage /> } />
        <Route path="/" element={
            <ProtectedRoute>
                <HomePage /> 
            </ProtectedRoute>
        } />
    </ReactRouterRoutes>)
};

export { Routes};