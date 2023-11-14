import { useLoaderData, useParams } from "react-router-dom";


const DecorationDetail = () => {
    const {id} = useParams();
    console.log(id);
    const decorations = useLoaderData();
    const {name,image,price,description2}=decorations.find(decor=>parseInt(decor.id)===parseInt(id));
    return (
        <div className="card  shadow-xl  bg-pink-100">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-3/4 w-3/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title  text-purple-600 font-bold">{name}</h2>
          <p className=" text-purple-600 font-semibold">{description2}</p>
         
          <p className=" text-purple-700 font-bold text-xl">Price:{price}</p>
          
          
        </div>
      </div>
    );
};

export default DecorationDetail;