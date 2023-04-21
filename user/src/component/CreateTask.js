import React, { useState } from 'react';
import styles from './CreateTask.module.css';

function CreateTask({ onCreate, setShowCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const taskData = {
      title: title,
      description: description,
      dueDate: dueDate,
      status: ['Incomplete']
    };
    console.log('Task data:', taskData);
  }

  function handleCategoryChange(event) {
    const category = event.target.value;
    setCategories(prevCategories => [...prevCategories, category]);
  }

  function handleExit() {
    setShowCreateTask(false);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Task</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Title:
          <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea className={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Due Date:
          <input className={styles.input} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <button className={styles.cancel_btn} type="button" onClick={handleExit}>Cancel</button>
        <button className={styles.create_btn} type="button" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
