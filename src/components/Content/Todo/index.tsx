import React from 'react';
import styles from '../Content.module.css';
// import { ITodo } from "../../fakeDatabase";
interface IProps {
    text: string,
    is_favorite: boolean,
    handleRemove: Function,
    makeFavorite: Function
}

export default function Todo({ text, is_favorite, handleRemove, makeFavorite }: IProps) {
    return (
        <div className={`${styles.todo_item} + ${is_favorite && styles.favorite}`}>
            <div className={styles.star} onClick={() => makeFavorite()}>★</div>
            <div className={styles.task_item_text}>{text}</div>
            <div className={styles.task_item_delete} onClick={() => handleRemove()}>
                <img alt='delete_button' src='/assets/icons8-delete-48.svg' />
            </div>
        </div>
    )
}