import Header from "./components/Header/Header";
import FormInput from "./components/Form/FormInput";
import Lists from "./components/Lists/Lists";
import { useState } from 'react';
import "./App.css";

function App() {
  const [lists, setlists] = useState([]);
  const numOfList = lists.length;
  return (
    <>
      <Header />
      <FormInput onlist = {setlists}/>
      <Lists numOfList = {numOfList} />
    </>
  );
}

export default App;
