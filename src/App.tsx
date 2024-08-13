import React from 'react';
import './App.css';
import Title from './copmonents/Title/Title';
import Button from './copmonents/Button/Button';
import UserName from "./copmonents/UserName/UserName";
import Tabs from "./copmonents/Tabs/Tabs";

function App() {
  return (
    <>
        <Title>Sign In</Title>
        <Button
            typeButton = "primary"
            buttonState={false}
            content = "Primary"
        />
        <Button
            typeButton = "secondary"
            buttonState={false}
            content = "Secondary"
        />
        <Button
            typeButton = "secondary2"
            buttonState={true}
            content = "Secondary 2"
        />
        <UserName>Gospodarik Polina</UserName>
        <Tabs></Tabs>
    </>
  );
}

export default App;
