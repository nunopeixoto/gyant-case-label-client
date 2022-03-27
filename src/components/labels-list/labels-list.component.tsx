import {CircularProgress, TextField} from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { FC, useState } from 'react'
import { useGetAllLabelsQuery } from '../../apis/labels.api';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Label } from '../../models/label.model';
import { Box } from '@mui/system';

interface LabelsListProps {
    setSelectedLabelId: (value: string) => void,
    currentLabelId: string
}
const LabelsList: FC<LabelsListProps> = (props): JSX.Element => {
    const { data, isLoading } = useGetAllLabelsQuery(undefined);
    const [searchTerm, setSearchTerm] = useState('');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: 'pointer'
    }));

    const labelSelected = (id: string) => {
        props.setSelectedLabelId(id);
    }
    return(
        <>
        <h1 className="mb-2 flex justify-center items-center text-xl"> Select one condition </h1>
        <div className="bg-white overflow-auto h-66vh px-4 py-4 sm:rounded-lg border-solid">
            <div className="pb-4">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <span className="material-icons">search</span>
                    <TextField 
                    size="small"
                    label="Search" 
                    variant="standard" 
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                </Box>
            </div>
            {isLoading && (
                <div className="flex justify-center m-6">
                    <CircularProgress />
                </div>
            )}
            <Stack spacing={2}>
            {data && data.filter((label: Label) => {
                if (searchTerm === '') {
                    return label;
                }

                if (label.code.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || label.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return label;
                }
                return false;
            }).map((label: Label) => (
                <Item 
                    key={label._id}
                    onClick={() => labelSelected(label._id)}
                    className={`${label._id === props.currentLabelId ? 'label-selected' : ''}`}
                >
                    {label.description} ({label.code })
                </Item>
            ))}
            </Stack>
        </div>
        </>
    )
}

export {LabelsList}