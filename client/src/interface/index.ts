export interface Photo {
  _id?: string;
  url: string;
  label: string;
}

export interface PhotoState {
  photos: Photo[];
}


export type PhotoContextProps = {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
}