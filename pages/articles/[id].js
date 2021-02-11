import Meta from "../../components/Meta";
import Nav from "../../components/nav";
import { server } from "../../config/index";

function GetArticle({ info }) {
  console.log(info);
  return (
    <>
      <Meta title={info.title} />
      <Nav />
      <h1>{info.title}</h1>
      <p>{info.body}</p>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const info = await res.json();
  const ids = info.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};
export default GetArticle;
