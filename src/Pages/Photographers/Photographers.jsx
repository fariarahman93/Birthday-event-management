import { useLoaderData } from "react-router-dom";
import PhotoCard from "../PhotoCard/PhotoCard"





const Photographers = () => {
    const photos = useLoaderData();
    console.log(photos);
    return (
        <div>
            {
                photos.map(photo=><PhotoCard photos={photo} key={photo.id}></PhotoCard>)
            }
            <h2>Photographers</h2>

            
        </div>
    );
};

export default Photographers;