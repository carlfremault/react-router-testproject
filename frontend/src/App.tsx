import { useEffect, useState } from 'react';

const getText = async () => {
  const response = await fetch('http://localhost:8080/');
  const data = await response.text();
  return data;
};

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const res = await getText();
      setText(res);
    };
    loadData();
  }, []);

  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default App;
