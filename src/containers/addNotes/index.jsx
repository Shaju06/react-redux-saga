import { useState, useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { initSaveNotesValue, initSaveNotesValueSuccessful } from './store/actions'
import { useNavigate } from "react-router-dom";

const AddNewNote = () => {

    const [notesName, setNotesName] = useState('')
    const dispatch = useDispatch()
    const { success } = useSelector(state => state?.AddNotesReducer)
    const navigate = useNavigate()

    useEffect(() => {
        if (success) {
            setNotesName('')
            dispatch(initSaveNotesValueSuccessful(false))
            navigate('/')
        }
    }, [success])

    const handleOnChange = (evt) => {
        setNotesName(evt.target.value)
    }

    const handleClick = () => {
        dispatch(initSaveNotesValue(notesName))
    }

    return (
        <div className="add-new-note-wrapper">
            <h1>Add New Note</h1>
            <div className="form-wrapper">
                <input name="addToDo" placeholder="Enter Todo Name" value={notesName} onChange={handleOnChange} />
                <button
                    disabled={notesName.trim() === ''}
                    onClick={handleClick}
                >Add ToDo</button>
            </div>
        </div>
    )
}

export default AddNewNote