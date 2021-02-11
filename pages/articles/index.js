import Link from "next/link";
import Meta from "../../components/Meta";
import Nav from "../../components/nav";
import { server } from "../../config";

function Articles({ info }) {
  console.log(info);
  return (
    <>
      <Meta />
      <Nav />
      {info.map((item) => (
        <>
          <Link href={`/articles/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        </>
      ))}
    </>
  );
}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/`);
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};

export default Articles;
