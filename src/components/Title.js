import React from 'react';

export default function Titulo({ children, color, backgroundColor }) {
  return (
    <h1 style={{color, backgroundColor}} >{ children }</h1>
  );
}
