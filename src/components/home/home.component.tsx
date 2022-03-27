import * as React from 'react';
import { Header} from '../header/header.component';
import { LabelsList} from '../labels-list/labels-list.component';
import { Button, Link as MuiLink, CircularProgress } from '@mui/material';
import { useGetNextEhrQuery } from '../../apis/ehrs.api';
import {useAppSelector} from '../../app/hooks';
import {selectCurrentUser} from '../../slices/auth.slice';
import { useCreateDiagnosisMutation } from '../../apis/diagnoses.api';
import {CreateDiagnosisRequest} from '../../dto/create-diagnosis-request.dto';

const Home: React.FC = () => {
    const [selectedLabelId, setSelectedLabelId] = React.useState('');
    const { data, isLoading, refetch, error} = useGetNextEhrQuery(undefined);
    const user = useAppSelector((state) => selectCurrentUser(state));
    const [createDiagnosis] = useCreateDiagnosisMutation();
    const label = async () => {
        if (!user || !user._id) {
            return;
        }

        let labelId = selectedLabelId;
        let doctorId = user._id;
        let ehrId = data._id;
        let date = new Date;
        await createDiagnosis({ doctorId, labelId,ehrId: ehrId, date });
        setSelectedLabelId('');
        refetch();
    }

    const buttonShouldBeDisabled = () : boolean => {
        return selectedLabelId === '' || error !== undefined;
    }
    return(
        <>
        <Header></Header>
        <div className="grid grid-cols-3 gap-4 py-12">
            <div className="col-span-2 ml-24">
                <h1 className="mb-2 flex justify-center items-center text-xl"> Please review this case </h1>
                <div className="bg-white overflow-auto max-h-66vh h-min px-4 py-4 sm:rounded-lg">
                    {isLoading && (
                        <div className="flex justify-center m-6">
                            <CircularProgress />
                        </div>
                    )}
                    {error && (
                        <div className="flex justify-center m-6">
                            You are done. 
                        </div>
                    )}
                    {!error && data &&  (
                        <span> {data.text} </span>
                    )}
                </div>
            </div>
            <div className="ml-4 mr-24">
                <LabelsList 
                    currentLabelId={selectedLabelId}
                    setSelectedLabelId={setSelectedLabelId}
                ></LabelsList>
                <div className="block mt-12 flex justify-center items-center">
                    <Button variant="contained" disabled={buttonShouldBeDisabled()} onClick={label}>
                        Go to next
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}

export {Home}