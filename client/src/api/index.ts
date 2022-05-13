import { Photo } from "../interface";


const loadPhotosApi = async () => {
    const res = await fetch('http://localhost:4000');
    const photos = await res.json();
    return photos;
}

const createNewPhoto = async (photo: Photo) => {
    const res = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo)
    });
    return await res.json();
}


const deletePhotoApi = async (id: string ) => {
    const res = await fetch(`http://localhost:4000/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await res.json();
}

export { createNewPhoto , loadPhotosApi, deletePhotoApi };