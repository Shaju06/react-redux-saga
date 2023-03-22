import { GET_NOTES_LIST, GET_NOTES_LIST_FAILED, GET_NOTES_LIST_SUCCESS } from "./actionTypes"

const initialState = {
    notesList: [],
    isFetchingNoteList: false,
    isFetchingSuccess: false,
    isFetchingFailed: false
}

const GetNotesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES_LIST:
            return {
                ...state,
                isFetchingNoteList: true
            }

        case GET_NOTES_LIST_SUCCESS:
            return {
                ...state,
                notesList: action.data,
                isFetchingNoteList: false,
                isFetchingSuccess: true
            }
            case GET_NOTES_LIST_FAILED:
                return {
                    ...state,
                    isFetchingFailed: true,
                    isFetchingNoteList: false,
                }
        default:
            return {
                ...state,
                isFetchingFailed: true
            }
    }
}

export default GetNotesListReducer

