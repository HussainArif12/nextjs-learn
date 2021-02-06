import { useRouter } from "next/router";
import Head from "next/head";
import CustomLayout from "../../../components/layout";
import CoffeeComponent from "../../../components/CoffeeComponent";
const Info = ({ info }) => {
  const router = useRouter(); //contains parameters that are
  // the route
  console.log(info);
  const { type } = router.query;
  return (
    <>
      <Head>
        <title>{type}</title>
      </Head>
      <CustomLayout>
        {info.map((info) => (
          <CoffeeComponent type={type} coffee={info} key={info.id} />
        ))}
      </CustomLayout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.sampleapis.com/coffee/${context.params.type}`
  );
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};
export default Info;
