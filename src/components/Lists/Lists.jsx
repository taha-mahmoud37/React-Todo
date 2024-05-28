/* eslint-disable react/prop-types */

import DoneList from "../DoneList/DoneList";
import ListItem from "../ListItem/ListItem";
import styles from "./Lists.module.css";

export default function Lists({
  lists,
  numOfList,
  onDeleteitem,
  onDone,
  DoneLists,
  setDoneLists,
  numOfDoneList
}) {
  
  function DeleteDoneItem(id) {
    console.log(id);
    const filteredDone = lists.filter((item) => item.id != id);
    setDoneLists(filteredDone);
    localStorage.setItem("doneList", JSON.stringify(filteredDone));
  }

  console.log(lists);
  return (
    <main>
      {lists.length > 0 ? (
        <>
          <section className={styles.container}>
            <h2>task to do - {numOfList} </h2>
            <ul>
              {lists.map((item) => (
                <ListItem
                  item={item}
                  key={item.id}
                  onDeleteitem={onDeleteitem}
                  onDone={onDone}
                />
              ))}
            </ul>
          </section>
        </>
      ) : (
        ""
      )}
      {DoneLists.length > 0 ? (
        <section className={styles.container}>
          <h2>Done - {numOfDoneList} </h2>
          <ul>
            {DoneLists.map((item, index)=> <DoneList item = {item} key={index} onDelete = {DeleteDoneItem}/>)}
          </ul>
        </section>
      ) : (
        ""
      )}
    </main>
  );
}
