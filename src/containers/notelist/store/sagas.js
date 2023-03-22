import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { getNotesListFiled, getNotesListSuccess } from "./actions";
import { GET_NOTES_LIST } from "./actionTypes";


export default function* GetNotesListSaga() {
    yield takeEvery(GET_NOTES_LIST, fetchNotesSaga)
}

function* fetchNotesSaga(action) {
    try {
        const response = yield call(axios.get, 'https://react-redux-saga-ff1d8-default-rtdb.firebaseio.com/noteList.json')
        if (response.status === 200) {
            const listArr = []
            const { data } = response
            Object.keys(data).forEach((element) => {
                listArr.push(data[element])
            })

            yield put(getNotesListSuccess(listArr))
        }
    } catch (err) {
        yield put(getNotesListFiled(err?.message))
    }

}