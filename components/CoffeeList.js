import CoffeeComponent from "./CoffeeComponent";
const CoffeeList = ({ coffees }) => {
  return (
    <>
      {coffees.map((item) => (
        <CoffeeComponent key={item.id} coffee={item} />
      ))}
    </>
  );
};
export default CoffeeList;
