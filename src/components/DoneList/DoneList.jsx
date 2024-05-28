/* eslint-disable react/prop-types */
import styles from './DoneList.module.css';
import { MdDeleteOutline } from "react-icons/md";
export default function DoneList({item, onDelete}) {
  return (
    <li className={styles.item}>
      <p>{item.title}</p> 
      <MdDeleteOutline onClick={() => onDelete(item.id)} role='button' aria-label='Delete' className={styles.btn}/>
    </li>
  )
}
