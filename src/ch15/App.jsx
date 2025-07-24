import React from 'react';
import ColorBox from '@/ch15/components/ColorBox';
import { ColorProvider } from '@/ch15/contexts/color';
import SelectColors from '@/ch15/components/SelectColors';
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
