import { Button, TextField, Link as MuiLink } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useCreateUserMutation } from '../../../apis/users.api';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailErrored, setEmailErrored] = useState(false);
    
    const [password, setPassword] = useState('');
    const [passwordErrored, setPasswordErrored] = useState(false);
    const [createUser] = useCreateUserMutation();

    const handleSignup = async () => {
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
        
        await createUser({ email, password });
    }

    return(
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-5xl"> Sign up </h1>
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
                <Link to="/login" className="justify-self-start self-start mt-2 text-blue-600">
                    <span className="text-underline"> Login </span> 
                </Link>
            </div>
            <Button variant="contained" className="w-80" onClick={handleSignup}>
                <span className="p-1"> Sign up </span>
            </Button>
        </div>
    )
}

export {SignupForm}