import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default App;
