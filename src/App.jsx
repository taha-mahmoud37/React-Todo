import Header from "./components/Header/Header";
import FormInput from "./components/Form/FormInput";
import Lists from "./components/Lists/Lists";
import { useEffect, useState } from 'react';
import "./App.css";


function App() {
  const [lists, setlists] = useState(function() {
    const storedValue = localStorage.getItem("dataList");
    return JSON.parse(storedValue);
  });
  const numOfList = lists.length;
  function savadata() {
    
  }

  useEffect(function() {
    localStorage.setItem("dataList", JSON.stringify(lists))
  }, [lists])
  return (
    <>
      <Header />
      <FormInput onlist = {setlists} onSave = {savadata}/>
      <Lists numOfList = {numOfList} lists={lists} setlists = {setlists}/>
    </>
  );
}

export default App;
