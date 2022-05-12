import { useContext, useState } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import "./index.scss";

interface Props {
  type: string;
  setAlertDelete?: (value: boolean) => void;
  id?: string;
}

const ModalPassword: React.FC<Props> = ({setAlertDelete, type, id}) => {

  const [value, setValue] = useState("");
  const { createPassword, password, deletePhoto } = useContext(PhotoContext);
  const [msgIncorrect, setMsgIncorrect] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /// create password user
    if(type == "create-password"){
      createPassword(value)
    }
    // delete photo
    if(type == "delete"){
      if(value == password){
        setAlertDelete!(false);
        deletePhoto(id!)
      }else {
        setMsgIncorrect(true);
        console.log("password incorrect");
      }
    }
  };

  return ( 
    <div className="container-modal">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="form-title">
          {type== "delete" ? "Are you sure" : "Create Password"}
        </p>
        <label htmlFor="label">Password</label>
        <input
          type="password"
          id="label"
          name="label"
          onChange={(e) => setValue(e.target.value)}
          defaultValue={value}
          placeholder="password"
        />
        {msgIncorrect == true && type === "delete" && <p className="form-msg">Password incorrect</p>}
        <div className="btn-group">
          <button type="submit" style={{'opacity': `${value.length > 1 ? "1": "0.8"}`}} className={type === "delete" ? "btn btn-danger" : "btn"}
           disabled={value.length > 1 ? false : true}
          >
            { type== "delete" ? "Delete" : "Create"}
          </button>
          {type == "delete" && 
          <button
            type="button"
            className={"btn btn-cancel"}
            onClick={() => setAlertDelete!(false)}
          >
            Cancel
          </button>
          }
          
        </div>
      </form>
    </div>
  );
};

export default ModalPassword;
