import {combineReducers} from 'redux'
import AddNotesReducer from '../containers/addNotes/store/reducers'
import GetNotesListReducer from '../containers/notelist/store/reducers'


const rootReducer = combineReducers({
    AddNotesReducer,
    GetNotesListReducer
})

export default rootReducer