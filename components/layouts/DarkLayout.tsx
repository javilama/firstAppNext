import React from 'react';
import {FC}from 'react';
 
type Props = {
  children?: React.ReactNode
};


const DarkLayout:FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
