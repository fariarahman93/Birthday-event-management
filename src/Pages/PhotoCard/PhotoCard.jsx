

const PhotoCard = ({photos}) => {
 const {designation,picture,name,phone,email,facebook} = photos 
    return (
        <div className="card w-96 shadow-xl  bg-pink-100">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title  text-purple-600 font-bold">{designation}</h2>
    <p className=" text-purple-600 font-semibold">{name}</p>
    <p  className=" text-purple-500 "><span className="text-purple-700 font-bold">Phone:</span>{phone}</p>
    <p  className=" text-purple-500 "><span className="text-purple-700 font-bold">Email:</span>{email}</p>
    <p  className=" text-purple-500 "><span className="text-purple-700 font-bold">Facebook:</span>{facebook}</p>
    
  </div>
</div>
    );
};

export default PhotoCard;