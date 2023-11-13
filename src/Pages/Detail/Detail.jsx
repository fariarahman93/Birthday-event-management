import { useLoaderData, useParams } from "react-router-dom";


const Detail = () => {
    const {id} = useParams();
    console.log(id);
    const packages = useLoaderData();
    const {name,photographer,description2,price,picture}=packages.find(pack=>parseInt(pack.id)===parseInt(id));
    
    return (
        <div className="card w-full  shadow-xl bg-pink-100 ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-3/4 w-3/4 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title  text-purple-600 font-bold">{name}</h2>
          <p className=" text-purple-500 font-semibold">{photographer}</p>
          <p className=" text-purple-500 ">{description2}</p>
          <p className=" text-purple-500 font-bold">${price} per event</p>
         
        </div>
      </div>
    );
};

export default Detail;