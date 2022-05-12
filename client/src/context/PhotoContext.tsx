import React, { createContext, useEffect, useReducer } from "react";
import { createNewPhoto, deletePhotoApi, loadPhotosApi } from "../api";
import {  PhotoContextProps,Photo, PhotoState } from "../interface";
import { reducerPhoto } from "./reducerPhoto";

interface Props {
  children: React.ReactNode;
}

const initialState:PhotoState= {
  photos: [],
  password: ""
};

export const PhotoContext = createContext<PhotoContextProps>({} as PhotoContextProps);

const PhotoProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reducerPhoto, initialState);
/* 
* load  is an async function that will load the photos from the api
* and then dispatch the action to the reducer
 */
  const loadPhoto = async () => {
    const photo = await loadPhotosApi()
    console.log(photo)
    dispatch({type: "LOAD_PHOTO", payload: photo})
  }
  
/**
 * AddPhoto is an async function that takes a photo as an argument, and then calls createNewPhoto,
 * which returns a newPhoto, which is then dispatched to the reducer.
 * @param {Photo} photo - Photo
 */

  const addPhoto = async(photo:Photo) => {
   try {
     const newPhoto = await createNewPhoto(photo);
     console.log(newPhoto);
     dispatch({type: "ADD_PHOTO", payload: newPhoto.photo})
    } catch (error) {
      console.log(error);
    }
  }

/**
 * DeletePhoto is a function that takes an id as an argument and returns a promise that deletes a photo
 * from the database and dispatches an action to the reducer.
 * @param {string} id - the id of the photo to be deleted
 */
  const deletePhoto = async(id:string) => {
    try {
      const deletePhoto = await deletePhotoApi(id); 
      dispatch({type: "DELETE_PHOTO", payload: deletePhoto.photo._id})
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * create password initializes the password state
   * @param {string} value - string - this is the value of the input field
   */
  const createPassword = (value: string) => {
    dispatch({type: "CREATE_PASSWORD", payload: value}) 
  }

  useEffect(() => {
    loadPhoto()
  } , []);

  return (
    <PhotoContext.Provider value={{
      photos: state.photos,
      password: state.password,
      addPhoto,
      deletePhoto,
      createPassword
    }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;