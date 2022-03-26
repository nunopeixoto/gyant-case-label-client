import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useAppSelector} from '../../app/hooks';
import {selectCurrentUser} from '../../slices/auth.slice';
import {useNavigate} from 'react-router';

const Header: React.FC = () => {
    const user = useAppSelector((state) => selectCurrentUser(state));
    const navigate = useNavigate();
    if (!user) {
        navigate('/login');
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hello Doctor 
                    <small> { user?.email } </small>
                </Typography>
                <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export {Header}
