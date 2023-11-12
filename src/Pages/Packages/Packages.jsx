import { useLoaderData } from "react-router-dom";
import PackageCard from "../packageCard/packageCard";

const Packages = () => {
    const packages = useLoaderData();
    console.log(packages);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            {
                packages.map(packages1 =><PackageCard key={packages1.id} packages={packages1}></PackageCard>)
            }
                      
        </div>
    );
};

export default Packages;