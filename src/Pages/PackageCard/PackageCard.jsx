import { Link } from "react-router-dom";

const PackageCard = ({ packages }) => {
  const { photographer, picture, name, description, price,id } = packages;
  const handleReadMore = () => {
    
    console.log('read more');
  };
  return (

   
      <div className="card w-96  shadow-xl bg-pink-100 ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-3/4 w-3/4 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title  text-purple-600 font-bold">{name}</h2>
          <p className=" text-purple-500 font-semibold">{photographer}</p>
          <p className=" text-purple-500 ">{description}</p>
          <p className=" text-purple-500 font-bold">${price} per event</p>
          <Link to={`/packages/${id}`}><button className="btn bg-gradient-to-r from-pink-500 to-purple-500 mt-2"
          onClick={handleReadMore}> <span className="text-pink-200 font-semibold">Read More</span> </button></Link>
        </div>
      </div>

   
  );
};

export default PackageCard;