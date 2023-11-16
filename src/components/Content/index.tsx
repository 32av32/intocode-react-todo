import React from 'react';
import styles from './Content.module.css';
import Todo from "./Todo";
import {fakeData, ITodo} from "../fakeDatabase";


export default function Content() {
    const [todos, setTodos] = React.useState<ITodo[]>(fakeData.data)
    const [value, setValue] = React.useState('')

    const addTask = (): void => {
        setTodos([...todos, {text: value, is_favorite: false}])
        setValue('')
    }

    const handleRemove = (id: number): void => {
        setTodos(todos.filter((todo, index) => {
            return index !== id
        }))
    }

    const makeFavorite = (id: number): void => {
        setTodos(todos.map((todo, index) => {
            if (index === id) {
                return {...todo, is_favorite: !todo.is_favorite}
            }
            return todo
        }))
    }

    return (
        <div className={styles.container}>
            <form name="add_task_form" className={styles.form_todo}>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите таску...'} name="add_task_input" type="text" className={styles.add_task_input} />
                    <button name="add_task_button" type="submit" className={styles.add_task_button} onClick={(e) => {
                        e.preventDefault()
                        addTask()
                    }}>
                        <img alt="add" className="add_task_button_ico" src="/assets/add.svg" />
                    </button>
            </form>
            <div className={styles.tasks_list__container}>
                {
                    todos.map((todo, index) => {
                        return <Todo text={todo.text} is_favorite={todo.is_favorite} handleRemove={() => handleRemove(index)} makeFavorite={() => makeFavorite(index)} />
                    })
                }
            </div>
        </div>
    )
}