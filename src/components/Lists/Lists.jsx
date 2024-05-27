/* eslint-disable react/prop-types */

import DoneList from "../DoneList/DoneList";
import ListItem from "../ListItem/ListItem";
import styles from './Lists.module.css';

export default function Lists({ lists, numOfList, setlists }) {

  function handleDeleteItem(id) {
    console.log(id);
    const filteredList =  lists.filter((item)=> item.id != id);
    setlists(filteredList);
    localStorage.setItem("dataList", JSON.stringify(filteredList));
  }
 console.log(lists)
  return (
    <main>
     {lists.length > 0 ?  <><section className={styles.container}>
        <h2>task to do - {numOfList} </h2>
        <ul>
          {lists.map((item) => <ListItem item = {item} key={item.id} onDelete = {handleDeleteItem} />)}
        </ul>
      </section></> : ''}
      <section className={styles.container}>
          <h2>Done - {0} </h2>
          <DoneList />
        </section>
    </main>
  );
}
