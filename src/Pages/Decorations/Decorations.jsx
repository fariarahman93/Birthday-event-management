import { useLoaderData } from "react-router-dom";
import DecorationCard from "../DecorationCard/DecorationCard";


const Decorations = () => {
    const decorations = useLoaderData();
    console.log(decorations);
    return (
       <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2 ml-24">
        {
        decorations.map(decoration=><DecorationCard decorations={decoration} key={decoration.id}></DecorationCard>)
       }
       </div>
    );
};

export default Decorations;