/* eslint-disable react/prop-types */
import styles from './Listitem.module.css';
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
export default function ListItem({item, onDeleteitem, onDone}) {

  
  return (
    <li className={styles.item}>
      <p>{item.title}</p> 
      <div>
        <FaCheck onClick={() => onDone(item)} role='button' aria-label='Check' className={styles.btn} />
        <MdDeleteOutline onClick={() => onDeleteitem(item.id)} role='button' aria-label='Delete' className={styles.btn}/>
      </div>
    </li>
  )
}
