import { Link } from "react-router-dom";


const PhotoCard = ({photos}) => {
 const {designation,picture,name,phone,email,facebook,id} = photos
 const handleReadMore = () => {
    
  console.log('read more');
};
    return (
        <div className="card w-96 shadow-xl  bg-pink-100">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title  text-purple-600 font-bold">{designation}</h2>
    <p className=" text-purple-600 font-semibold">{name}</p>
    
    <Link to={`/photo/${id}`}><button className="btn bg-gradient-to-r from-pink-500 to-purple-500 mt-2"
          onClick={handleReadMore}> <span className="text-pink-200 font-semibold">Read More</span> </button></Link>
  </div>
</div>
    );
};

export default PhotoCard;