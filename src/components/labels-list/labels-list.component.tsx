import { CircularProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { FC } from 'react'
import { useGetAllLabelsQuery } from '../../apis/labels.api';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Label } from '../../models/label.model';

interface LabelsListProps {
    setSelectedLabelId: any,
}
const LabelsList: FC<LabelsListProps> = (props): JSX.Element => {
    const [selectedLabelId, setSelectedLabelId] = React.useState('');
    const { data, isLoading } = useGetAllLabelsQuery(undefined);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: 'pointer'
    }));

    const labelSelected = (id: string) => {
        setSelectedLabelId(id);
        props.setSelectedLabelId(id);
    }
    return(
        <>
        <h1 className="mb-2 flex justify-center items-center text-xl"> Select one condition </h1>
        <div className=" bg-white overflow-auto h-66vh px-4 py-4 sm:rounded-lg">
            {isLoading && (
                <div className="flex justify-center m-6">
                    <CircularProgress />
                </div>
            )}
            <Stack spacing={2}>
            {data && data.map((label: Label) => (
                <Item 
                    onClick={() => labelSelected(label._id)}
                    className={`${label._id === selectedLabelId ? 'label-selected' : ''}`}
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