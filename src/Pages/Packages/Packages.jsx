import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import PackageCard from "../../Pages/Packages/Packages";




const Packages = () => {
    const packages = useLoaderData();
    console.log(packages);
    return (
        <div>
            <Navbar></Navbar>
            {
                packages.map(packages1 =><PackageCard key={packages1.id} packages={packages1}></PackageCard>)
            }
            <h2>Packages</h2>
            <Footer></Footer>
           
        </div>
    );
};

export default Packages;