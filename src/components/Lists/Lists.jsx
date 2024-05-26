/* eslint-disable react/prop-types */

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
    </main>
  );
}
