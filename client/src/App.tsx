import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import ListPhoto from "./components/ListPhoto/ListPhoto";
import ModalCreate from "./components/modal/ModalCreate";
import { PhotoContext } from "./context/PhotoContext";
import { Photo} from "./interface";


function App() {
  const [dataFilter, setDataFilter] = useState<Photo[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { photos } = useContext(PhotoContext);

  useEffect(() => {
    setDataFilter(photos); 
  }, [photos])

  const handleSearch = (value: string) => {
     setDataFilter(photos.filter(photo => photo.label.includes(value))) 
  }
  
  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} handleSearch={handleSearch} />
      <div className="wrapper-photo">
        {dataFilter &&
          dataFilter?.map((item: Photo) => {
            return (
              <ListPhoto key={item._id} label={item.label} url={item.url} />
            );
          })}
      </div>
      {isModalOpen && <ModalCreate setDataFilter={setDataFilter}  setIsModalOpen={setIsModalOpen} />}     
   </div>
  );
}

export default App;
