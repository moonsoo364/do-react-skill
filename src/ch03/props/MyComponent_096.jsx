import React from 'react';

const MyComponent = props => {
    const {name, children} = props;
    return (
      <div>
          안녕하세요 제 이름은 {name} 입니다. <br />
          
      </div>
    );
};

export default MyComponent;