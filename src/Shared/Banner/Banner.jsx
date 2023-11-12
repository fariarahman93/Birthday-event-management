import banner from '../../assets/banner.jpg';


const Banner = () => {

    return (
        
            <div className="relative text-center flex flex-col items-center">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-800 pb-4 ">
            Welcome to Birthday Bash
        </h2>
        <img   className='w-3/4 opacity-6 transition-opacity duration-1000 ease-in-out group-hover:opacity-30' src={banner} alt="Birthday Banner" />
    </div>

        
    );
};

export default Banner;