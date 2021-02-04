import Link from "next/link";

const CoffeeComponent = ({ coffee }) => {
  return (
    <>
      <Link href="/coffee/[id]" as={`/coffee/${coffee.id}`}>
        <a>{coffee.title}</a>
      </Link>
    </>
  );
};
export default CoffeeComponent;
