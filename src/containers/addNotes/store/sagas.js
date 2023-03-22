import { takeEvery, call, put } from 'redux-saga/effects'
import { INIT_SAVE_NOTES_VALUE } from './actionTypes'
import axios from 'axios'
import { initSaveNotesValueFailed, initSaveNotesValueSuccessful } from './actions'


export default function* AddNotesSaga() {
    yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga)
}

function* saveNotesSaga(action) {
    const headers = {
        'content-type': 'application/json',
    }

    const payload = {
        name: action.noteValue,
        id: Math.floor(Math.random() * 100)
    }

    try {
        const response = yield call(axios.post, 'https://react-redux-saga-ff1d8-default-rtdb.firebaseio.com/noteList.json', payload, { headers })
        if (response.status === 200) {
            yield put(initSaveNotesValueSuccessful(true))
        }
    } catch (err) {
        yield put(initSaveNotesValueFailed(true))
    }

}