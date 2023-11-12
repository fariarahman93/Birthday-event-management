

const PackageCard = ({packages}) => {
    const {photographer} = packages;
    return (
        <div>
            <h2>{photographer}</h2>
        </div>
    );
};

export default PackageCard;