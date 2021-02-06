import Link from "next/link";

const CoffeeComponent = ({ coffee, type }) => {
  return (
    <>
      <Link href={`/coffee/[type]/[id]`} as={`/coffee/${type}/${coffee.id}`}>
        <a>{coffee.title}</a>
      </Link>
    </>
  );
};
export default CoffeeComponent;
