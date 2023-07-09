import React from 'react';
import img from '../src/istockphoto-455302535-612x612.jpg';
import BasicForm from '../src/components/BasicForm'

export default function App() {
  return (
    <div>
      <BasicForm />

      <img style={{ width: '100%', height: '100%' }} src={img} alt="" />
    </div>
  );
}