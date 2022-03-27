import * as React from 'react';
import { Header} from '../header/header.component';
import { LabelsList} from '../labels-list/labels-list.component';
import { Button, TextField, Link as MuiLink } from '@mui/material';
import {Link} from 'react-router-dom';
import { Label } from '../../models/label.model';

const Home: React.FC = () => {
    const selectedLabel: Label|null = null;
    return(
        <>
        <Header></Header>
        <div className="grid grid-cols-3 gap-4 py-12 bg-gray-100">
            <div className="col-span-2  ml-24">
                this is the case
            </div>
            <div className="ml-4 mr-24">
                <LabelsList></LabelsList>
                <div className="block mt-12 flex justify-center items-center">
                    <Button variant="contained" disabled={selectedLabel === null}>
                        Go to next
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}

export {Home}