import React, { useContext, useEffect } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { ResumeContext } from './builder';

const FormCloseOpenBtn = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (newValue) => {
    setResumeData((prev) => ({
      ...prev,
      sidebarIsCollapsed: newValue,
    }));
  };

  useEffect(() => {
    resizeForm();
    window.addEventListener('resize', resizeForm);
    return () => window.removeEventListener('resize', resizeForm);
  }, []);

  function resizeForm() {
    console.log('resize', window.innerWidth);
    if (window.innerWidth < 768) {
      handleChange(false);
    }
  }

  return (
    <button
      type="button"
      aria-label="Form Open/Close"
      className={
        'absolute  top-[5px] right-0 translate-x-1/2 ' +
        'font-bold rounded-full ' +
        'bg-white text-fuchsia-600 shadow-lg border-2 border-white ' +
        'hidden md:block'
      }
      onClick={() => {
        handleChange(!resumeData.sidebarIsCollapsed);
      }}
    >
      {resumeData.sidebarIsCollapsed ? (
        <BsFillArrowRightCircleFill className="w-6 h-6" title="Form Open" />
      ) : (
        <BsFillArrowLeftCircleFill className="w-6 h-6" title="Form Close" />
      )}
    </button>
  );
};

export default FormCloseOpenBtn;
