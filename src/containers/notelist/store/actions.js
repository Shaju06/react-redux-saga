import { GET_NOTES_LIST, GET_NOTES_LIST_FAILED, GET_NOTES_LIST_SUCCESS } from "./actionTypes";

export function getNotesList(data) {
    return {
        type: GET_NOTES_LIST,
        data
    }
}

export function getNotesListSuccess(data) {
    return {
        type: GET_NOTES_LIST_SUCCESS,
        data
    }
}

export function getNotesListFiled(data) {
    return {
        type: GET_NOTES_LIST_FAILED,
        data
    }
}