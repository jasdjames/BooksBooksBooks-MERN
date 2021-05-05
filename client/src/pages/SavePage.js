import React, { useState } from 'react';
import { InfoBox } from '../components';
import { API } from '../utils/API';
const pageName = 'Saved Pages';

export const SavePage = () => {
  return (
    <>
      <InfoBox pageName={pageName} />

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
