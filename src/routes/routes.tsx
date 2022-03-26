import React from 'react';
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { CasePage } from '../pages/case.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { ProtectedRoute } from './protected-route.component';

const Routes: React.FC = () => {
    return (<ReactRouterRoutes>
        <Route path="login" element={<LoginPage /> } />
        <Route path="signup" element={<SignupPage /> } />
        <Route path="case" element={
            <ProtectedRoute>
                <CasePage /> 
            </ProtectedRoute>
        } />
    </ReactRouterRoutes>)
};

export { Routes};