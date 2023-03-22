import React, { useEffect } from "react";
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNotesList } from "./store/actions";

const NoteList = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state?.GetNotesListReducer)

    useEffect(() => {
        dispatch(getNotesList())
    }, [])

    return (
        <div className="notes-list-wrapper">
            <h1>Note Lists</h1>
            <ul>
                {
                    state.notesList && state.notesList.map(item =>
                    (
                        <li key={item.id}>{item.name}</li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default NoteList