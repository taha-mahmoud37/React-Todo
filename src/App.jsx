import Header from "./components/Header/Header";
import FormInput from "./components/Form/FormInput";
import Lists from "./components/Lists/Lists";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lists, setlists] = useState(function () {
    const storedValue = localStorage.getItem("dataList");
    return JSON.parse(storedValue);
  });
  const [DoneLists, setDoneLists] = useState(function () {
    const storedValue = localStorage.getItem("doneList");
    return JSON.parse(storedValue);
  });
  const numOfList = lists.length;
  const numOfDoneList = DoneLists.length;

  function DoneList(item) {
    setDoneLists((curItem) => [...curItem, item]);
    handleDeleteItem(item.id);
  }
  function handleDeleteItem(id) {
    const filteredList = lists.filter((item) => item.id != id);
    setlists(filteredList);
    localStorage.setItem("dataList", JSON.stringify(filteredList));
  }

  useEffect(
    function () {
      localStorage.setItem("dataList", JSON.stringify(lists));
    },
    [lists]
  );
  useEffect(
    function () {
      localStorage.setItem("doneList", JSON.stringify(DoneLists));
    },
    [DoneLists]
  );
  return (
    <>
      <Header />
      <FormInput onlist={setlists} />
      <Lists
        numOfList={numOfList}
        lists={lists}
        setlists={setlists}
        onDeleteitem={handleDeleteItem}
        onDone={DoneList}
        DoneLists={DoneLists}
        numOfDoneList={numOfDoneList}
        setDoneLists={setDoneLists}
      />
    </>
  );
}

export default App;
