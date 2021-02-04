import Link from "next/link";

const CoffeeComponent = ({ coffee }) => {
  return (
    <>
      <Link href="/coffee/[id]" as={`/coffee/${coffee.id}`}>
        <p>{coffee.title}</p>
      </Link>
    </>
  );
};
export default CoffeeComponent;
