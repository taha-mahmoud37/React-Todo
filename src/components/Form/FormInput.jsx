/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Buttons/Button";
import styles from "./Form.module.css";

export default function FormInput({ onlist, onSave }) {
  const [inputtext, setInputText] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (inputtext.length < 3) return;
    onlist((item) => [
      ...item,
      { title: inputtext, id: Math.floor(Math.random() * 100) },
    ]);
    onSave();
    setInputText("");
  }

  return (
    <form className={styles.form} onSubmit={handelSubmit}>
      <label htmlFor="data">Inserted Data</label>
      <input
        id="data"
        type="text"
        name="data"
        placeholder="Add a new task"
        required
        value={inputtext}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button />
    </form>
  );
}
