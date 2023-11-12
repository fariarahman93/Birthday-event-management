

const PhotoCard = ({photos}) => {
 const {designation} = photos 
    return (
        <div>
            <h2>{designation}</h2>
        </div>
    );
};

export default PhotoCard;