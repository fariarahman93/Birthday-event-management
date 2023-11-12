

const PackageCard = ({ packages }) => {
  const { photographer, picture, name, description, price } = packages;
  return (

   
      <div className="card w-96  shadow-xl bg-pink-200 ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-3/4 w-3/4 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title  text-purple-600 font-bold">{name}</h2>
          <p className=" text-purple-500 font-semibold">{photographer}</p>
          <p className=" text-purple-500 ">{description}</p>
          <p className=" text-purple-500 font-bold">${price} per event</p>

        </div>
      </div>

   
  );
};

export default PackageCard;