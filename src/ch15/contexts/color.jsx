import React, { createContext, useState } from 'react';
import Proptypes from 'prop-types';
const ColorContext = createContext({
  state: {
    color: 'black',
    subcolor: 'red'
  },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

ColorProvider.propTypes = {
  children: Proptypes.object
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
export default ColorContext;
