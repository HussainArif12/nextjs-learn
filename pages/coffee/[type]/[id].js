import { useRouter } from "next/router";
import Head from "next/head";
import CustomLayout from "../../../components/layout";
const Info = ({ info }) => {
  const router = useRouter(); //contains parameters that are
  // the route
  console.log(info);
  return (
    <>
      <Head>
        <title>{info.title}</title>
      </Head>
      <CustomLayout>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </CustomLayout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.sampleapis.com/coffee/${context.params.type}/${context.params.id}`
  );
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};
export default Info;
