export interface Photo {
  _id?: string;
  url: string;
  label: string;
}

export interface PhotoState {
  photos: Photo[];
  password: string;
}


export type PhotoContextProps = {
  photos: Photo[];
  password: string;
  addPhoto: (photo: Photo) => void;
  deletePhoto: (id: string) => void;
  createPassword: (password: string) => void;
}