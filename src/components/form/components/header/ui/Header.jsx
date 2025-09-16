import React from 'react';
import LoadUnload from '../components/LoadUnload';

const Header = () => {
  return (
    <header
      className={'flex justify-center w-full bg-[var(--form-bg-secondary)] p-1'}
    >
      <LoadUnload />
    </header>
  );
};

export default Header;
