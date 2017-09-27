import React from 'react';

const Title = ({text}) => {
  return <h2>{text}</h2>
};

const Main = () => {
  return <Title text="Simple ReactJS App"/>
};

export default Main;