import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  ">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
