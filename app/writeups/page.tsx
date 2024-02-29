
import { Navigationbar } from '@/components/(navbar)/Navigationbar';
import WriteupsPage from '@/components/(writeups)/Writeups';
import { FooterPage } from '@/components/(footer)/Footer';
import React from 'react';

const Writeups = () => {
  return (
    <div>
      <Navigationbar/>
      <WriteupsPage />
      <FooterPage/>
    </div>
  )
}

export default Writeups;


