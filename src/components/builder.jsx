'use client';

import React, { createContext, useState } from 'react';
import FormCloseOpenBtn from '../components/FormCloseOpenBtn';
import Preview from '../components/preview/ui/Preview';
import DefaultResumeData from '../components/utility/DefaultResumeData';
import dynamic from 'next/dynamic';
import Form from '../components/form/ui/Form';

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import('../components/utility/WinPrint'), {
  ssr: false,
});

export default function Builder() {
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          // handleChange,
        }}
      >
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!resumeData.sidebarIsCollapsed && <Form />}
          <Preview />
        </div>
        <FormCloseOpenBtn />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
