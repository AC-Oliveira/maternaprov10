import React, { useState } from 'react';
import { StatusBar } from 'react-native';
// import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

export default function App() {
  return (
    <>
      <StatusBar style="light-theme" />
      <Navigator />
    </>
  );
}