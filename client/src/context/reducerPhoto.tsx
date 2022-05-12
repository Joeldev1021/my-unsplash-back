import { Photo, PhotoState } from "../interface";

type PhotoAction =
    | { type: "LOAD_PHOTO"; payload: Photo[] }
    | { type: "ADD_PHOTO", payload: Photo }
    | { type: "DELETE_PHOTO", payload: string }
    | { type: "UPDATE_PHOTO", payload: Photo }
    | { type: "CREATE_PASSWORD", payload: string }

export const reducerPhoto = (state:PhotoState , action: PhotoAction) => {
    switch (action.type) {
        case "LOAD_PHOTO":
            return {
                ...state,
                photos: action.payload
            }
        case "ADD_PHOTO":
            return {
                ...state,
                photos: [action.payload, ...state.photos ]
            }
        case "DELETE_PHOTO":
            return {
                ...state,
                photos: state.photos.filter(item => item._id !== action.payload)
            }
        case "CREATE_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}