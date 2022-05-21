import { useContext, useState } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import {Photo} from  "../../interface"
import "./index.scss";


interface Props {
    setIsModalOpen: (value: boolean) => void;
}

const ModalCreate:React.FC<Props> = ({setIsModalOpen }) => {

  const { addPhoto } = useContext(PhotoContext);

  const [newPhoto, setNewPhoto] = useState<Photo>({label: "", url: ""});
  const rx =new RegExp('(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhoto({...newPhoto, [e.target.name]: e.target.value})
  } 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     setIsModalOpen(false);
    if( newPhoto.label.length> 0 && newPhoto.label.length > 0){
      if(rx.test(newPhoto.url)) addPhoto(newPhoto);
      else alert("Url is not valid");
    }else alert("Please fill all the fields");
 }

  return (
    <div className="container-modal">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="form-title">Add a new photo</p>
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
