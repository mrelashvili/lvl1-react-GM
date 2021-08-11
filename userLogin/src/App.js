import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [data, setData] = useState([]);
  const handleData = (uName, uAge) => {
    setData(prevValue => {
      return [...prevValue, {username: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
    <AddUser onAdd={handleData}/>
    <UsersList users={data}/>
    </div>
  );
}

export default App;
