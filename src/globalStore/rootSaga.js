import {all, fork} from 'redux-saga/effects'
import AddNotesSaga from '../containers/addNotes/store/sagas'
import GetNotesListSaga from '../containers/notelist/store/sagas'

export default function* rootSaga() {
    yield all([fork(AddNotesSaga), fork(GetNotesListSaga)])
}