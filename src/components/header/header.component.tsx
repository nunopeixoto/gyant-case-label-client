import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {selectCurrentUser, setAuthState} from '../../slices/auth.slice';
import {useNavigate} from 'react-router';
import {useLogoutMutation} from '../../apis/auth.api';

const Header: React.FC = () => {
    const user = useAppSelector((state) => selectCurrentUser(state));
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [logout] = useLogoutMutation();
    if (!user) {
        navigate('/login');
    }

    const handleLogout = async () => {
        await logout([]);
        dispatch(setAuthState({ user: undefined }));
        navigate('/login');
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Logged in as 
                    <small> { user?.username } </small>
                </Typography>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export {Header}
