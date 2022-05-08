import React, { createContext, useEffect, useReducer } from "react";
import {  PhotoContextProps,Photo, PhotoState } from "../interface";
import { reducerPhoto } from "./reducerPhoto";

interface Props {
  children: React.ReactNode;
}

const initialState:PhotoState= {
  photos: [],
  completed: false
};


export const PhotoContext = createContext<PhotoContextProps>({} as PhotoContextProps);


const PhotoProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reducerPhoto, initialState);

  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ 
         type: "LOAD_PHOTO",
         payload: data
         });
      })
  } , []);

  return (
    <PhotoContext.Provider value={{
      photos: state.photos,
    }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;