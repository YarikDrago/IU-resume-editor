import React, { useContext } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { ResumeContext } from './builder';

const FormCloseOpenBtn = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = () => {
    setResumeData((prev) => ({
      ...prev,
      sidebarIsCollapsed: !prev.sidebarIsCollapsed,
    }));
  };

  return (
    <button
      aria-label="Form Open/Close"
      className="exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white"
      onClick={handleChange}
    >
      {resumeData.sidebarIsCollapsed ? (
        <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" />
      ) : (
        <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />
      )}
    </button>
  );
};

export default FormCloseOpenBtn;
