import {
    INIT_SAVE_NOTES_VALUE,
    SAVE_NOTES_VALUE_SUCCESSFULL,
    SAVE_NOTES_VALUE_FAILED
} from './actionTypes'

export function initSaveNotesValue(noteValue) {
    return {
        type: INIT_SAVE_NOTES_VALUE,
        noteValue
    }
}

export function initSaveNotesValueSuccessful(success) {
    return {
        type: SAVE_NOTES_VALUE_SUCCESSFULL,
        success: success
    }
}

export function initSaveNotesValueFailed(failed) {
    return {
        type: SAVE_NOTES_VALUE_FAILED,
        failed
    }
}