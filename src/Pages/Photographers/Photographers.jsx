import { useLoaderData } from "react-router-dom";
import PhotoCard from "../PhotoCard/PhotoCard"





const Photographers = () => {
    const photos = useLoaderData();
    console.log(photos);
    return (
        <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2 ml-24">
            {
                photos.map(photo=><PhotoCard photos={photo} key={photo.id}></PhotoCard>)
            }
            

            
        </div>
    );
};

export default Photographers;