import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListPhoto from "./components/ListPhoto/ListPhoto";
import ModalPassword from "./components/modal/ModalPassword";
import { PhotoContext } from "./context/PhotoContext";
import { Photo} from "./interface";

function App() {
  const [dataFilter, setDataFilter] = useState<Photo[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState<boolean>(false);
  const { photos, password } = useContext(PhotoContext);

  useEffect(() => {
    setDataFilter(photos); 
  }, [photos!]);

  const handleSearch = (value: string) => {
     setDataFilter(photos.filter(photo => photo.label.includes(value))) 
  }
   
  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} handleSearch={handleSearch} isModalOpen={isModalOpen} />
      <div className="wrapper-photo">
        {dataFilter &&
          dataFilter?.map((item: Photo) => {
            return (
              <ListPhoto key={item._id} 
               photo={item} 
                />
            );
          })}
      </div>
      {password.length < 1 && <ModalPassword  type="create-password" />}
      <Footer />
   </div>
  );
}

export default App;