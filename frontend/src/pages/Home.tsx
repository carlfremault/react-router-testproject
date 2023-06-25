import { useEffect, useState } from 'react';

const getText = async () => {
  const response = await fetch('http://localhost:8080/');
  const data = await response.text();
  return data;
};

const Home = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const res = await getText();
      setText(res);
    };
    loadData();
  }, []);

  return (
    <section>
      <h1>{text}</h1>
    </section>
  );
};

export default Home;
