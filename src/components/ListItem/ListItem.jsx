/* eslint-disable react/prop-types */
import styles from './Listitem.module.css';
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
export default function ListItem({item, onDelete}) {

  
  return (
    <li className={styles.item}>
      <p>{item.title}</p> 
      <div>
        <FaCheck role='button' aria-label='Check' className={styles.btn} />
        <MdDeleteOutline onClick={() => onDelete(item.id)} role='button' aria-label='Delete' className={styles.btn}/>
      </div>
    </li>
  )
}
