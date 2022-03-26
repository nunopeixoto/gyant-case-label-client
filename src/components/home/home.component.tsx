import * as React from 'react';
import { Header} from '../header/header.component';

const Home: React.FC = () => {
    return(
        <>
        <Header></Header>
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            Content goes here
        </div>
        </>
    )
}

export {Home}