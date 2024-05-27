/* eslint-disable react/prop-types */

import DoneList from "../DoneList/DoneList";
import ListItem from "../ListItem/ListItem";
import styles from './Lists.module.css';

export default function Lists({ lists, numOfList }) {
  if (lists < 0) return;
  return (
    <main>
      <section className={styles.container}>
        <h2>task to do - {numOfList} </h2>
        <ul>
          
          <ListItem />
        </ul>
      </section>
      <section className={styles.container}>
        <h2>Done - {0} </h2>
        <DoneList />
      </section>
    </main>
  );
}
