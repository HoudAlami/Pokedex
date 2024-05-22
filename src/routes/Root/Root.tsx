import React from 'react';
import { Outlet } from 'react-router-dom';
import './Root.scss';
import { DataProvider } from '../../provider/DataContext';

function Root() {
  return (
    <DataProvider>
      <div className="root">
        <Outlet />
      </div>
    </DataProvider>
  );
}

export default Root;
