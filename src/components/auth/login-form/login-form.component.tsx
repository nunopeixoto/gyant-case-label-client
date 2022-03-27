import React from 'react';
import { Button, TextField, Link as MuiLink } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from 'react';
import { useLoginMutation } from '../../../apis/auth.api';
import { User } from '../../../models/user.model';
import { useAppDispatch } from '../../../app/hooks';
import { setAuthState } from "../../../slices/auth.slice";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailErrored, setEmailErrored] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErrored, setPasswordErrored] = useState(false);
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setEmailErrored(false);
        if (!email) {
            setEmailErrored(true);
        }
        
        setPasswordErrored(false);
        if (!password) {
            setPasswordErrored(true);
        }
        
        if (emailErrored || passwordErrored) {
            return;
        }

        try {
            const response = (await login({ email, password })) as { data: User};
            dispatch(setAuthState({ user: response.data }));
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-5xl"> Login </h1>
            <div className="flex flex-col gap-2">
                <TextField
                    label="E-mail" 
                    className="w-80" 
                    type="email" 
                    required 
                    helperText={emailErrored && "Please enter a valid e-mail."}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={emailErrored}
                />
                <TextField
                    label="Password"
                    className="w-80"
                    type="password"
                    required 
                    helperText={passwordErrored && "Password can't be empty."}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={passwordErrored}
                />
                <Link to="/signup" className="justify-self-start self-start mt-2 text-blue-600 hover:underline">
                    <span className="text-underline"> Sign up </span> 
                </Link>
            </div>
            <Button variant="contained" className="w-80" onClick={handleLogin}>
                <span className="p-1"> Login </span>
            </Button>
        </div>
    )
}

export {LoginForm}