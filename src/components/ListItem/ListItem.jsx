import styles from './Listitem.module.css';
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
export default function ListItem() {
  return (
    <li className={styles.item}>
      <p>Ali</p> 
      <div>
        <FaCheck role='button' aria-label='Check' className={styles.btn} />
        <MdDeleteOutline role='button' aria-label='Delete' className={styles.btn}/>
      </div>
    </li>
  )
}
