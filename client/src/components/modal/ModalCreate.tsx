import { useState } from "react";
import { createNewPhoto } from "../../api";
import {Photo} from  "../../interface"
import "./index.scss";


interface Props {
    setIsModalOpen: (value: boolean) => void;
    setDataFilter: (value: Photo[]) => void;
}

const ModalCreate:React.FC<Props> = ({setIsModalOpen, setDataFilter}) => {
    const [newPhoto, setNewPhoto] = useState<Photo>({label: "", url: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhoto({...newPhoto, [e.target.name]: e.target.value})
  } 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const savePhoto = await createNewPhoto(newPhoto)
    console.log("save =>", savePhoto)
  }

  return (
    <div className="container-modal">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Add a new photo</h2>
        <label htmlFor="label">Label</label>
        <input type="text" id="label" name="label" onChange={(e)=> handleChange(e)} defaultValue={newPhoto.label} placeholder="write some label" />
        <label htmlFor="url">Photo URL</label>
        <input type="text" id="url" name="url" onChange={(e)=> handleChange(e)} defaultValue={newPhoto.url} placeholder="URL" />
        <div className="btn-group">
          <button type="submit" className="btn">Add</button>
          <button onClick={()=> setIsModalOpen(false)} className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ModalCreate;
