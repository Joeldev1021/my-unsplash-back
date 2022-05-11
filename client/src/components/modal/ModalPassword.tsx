import { useContext, useState } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import "./index.scss";

interface Props {
  type: string;
  setIsModalPasswordOpen?: (value: boolean) => void;
}

const ModalPassword: React.FC<Props> = ({setIsModalPasswordOpen,type}) => {
  const [value, setValue] = useState("");
  const { createPassword } = useContext(PhotoContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(type == "create-password"){
      createPassword(value)
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
        <div className="btn-group">
          <button
            type="submit"
            className={type === "delete" ? "btn btn-danger" : "btn"}
          >
            { type== "delete" ? "Delete" : "Create"}
          </button>
          <button
            type="button"
            className={"btn btn-danger"}
            onClick={() => setIsModalPasswordOpen!(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalPassword;
