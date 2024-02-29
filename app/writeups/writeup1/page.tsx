import { FooterPage } from '@/components/(footer)/Footer';
import { Navigationbar } from '@/components/(navbar)/Navigationbar';
import WriteupOnePage from '@/components/(writeups)/WriteupOne';
import React from 'react';

const WriteupOne = () => {
    return (
        <div>
            <Navigationbar/>
            <WriteupOnePage/>
            <FooterPage/>   
        </div>
    );
};

export default WriteupOne;
