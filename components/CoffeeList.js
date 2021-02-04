import CoffeeComponent from "./CoffeeComponent";
const CoffeeList = ({ coffees }) => {
  return (
    <>
      {coffees.map((item) => (
        <CoffeeComponent coffee={item} />
      ))}
    </>
  );
};
export default CoffeeList;
