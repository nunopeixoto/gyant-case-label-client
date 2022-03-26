import { Button, TextField } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
    return(
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-5xl"> Case Label </h1>
            <div className="flex flex-col gap-2">
                <TextField label="Emal" className="w-80" type="email" required />
                <TextField label="Password" className="w-80" type="password" required />
            </div>
            <Button variant="contained" className="w-80">
                <span className="p-1"> Login </span>
            </Button>
        </div>
    )
}

export {LoginForm}