import { Photo, PhotoContextProps, PhotoState } from "../interface";

type PhotoAction =
    | { type: "LOAD_PHOTO"; payload: Photo[] }
    | { type: "ADD_PHOTO", payload: Photo }
    | { type: "DELETE_PHOTO", payload: Photo }
    | { type: "UPDATE_PHOTO", payload: Photo }

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
                photos: [...state.photos, action.payload]
            }
        case "DELETE_PHOTO":
            return {
                ...state,
                photos: state.photos.filter(item => item._id !== action.payload._id)
            }
        default:
            return state;
    }
}