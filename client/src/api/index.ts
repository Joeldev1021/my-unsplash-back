import { PhotoInterface } from "../interface";

const createNewPhoto = async (photo: PhotoInterface) => {
    const res = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo)

    });
    return await res.json();
}

export { createNewPhoto };