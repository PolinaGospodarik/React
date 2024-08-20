import React from 'react';
import './App.css';
import Title from './copmonents/Title/Title';
import Button from './copmonents/Button/Button';
import UserName from "./copmonents/UserName/UserName";
import Tabs from "./copmonents/Tabs/Tabs";
import Textarea from "./copmonents/Textarea/Textarea";
import Input from "./copmonents/Input/Input";
import PostList from "./copmonents/PostList/PostList";

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
          <Input compound = "text"
               inputType="text"
               title="Title"
               isActive={false}
               errorText="Error text"
               isError={false}
          ></Input>
          <Input compound = "email"
               inputType="email"
               title="Email"
               isActive={true}
               errorText="Error text"
               isError={false}
          ></Input>
          <Input compound = "password"
               inputType="password"
               title="Password"
               isActive={false}
               errorText="Error text"
               isError={true}
          ></Input>
          <Textarea compound = "text" placeholderText="Add your text"></Textarea>
          <PostList></PostList>
    </>
  );
}

export default App;
