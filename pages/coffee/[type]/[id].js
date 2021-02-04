import { useRouter } from "next/router";
import Head from "next/head";
import CustomLayout from "../../../components/layout";
const Info = ({ info }) => {
  const router = useRouter(); //contains parameters that are
  // the route
  return (
    <>
      <CustomLayout>
        <p>
          Your choosing:
          {router.query.id}
        </p>
      </CustomLayout>
    </>
  );
};
/* export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.sampleapis.com/coffee/hot/${context.params.id}`
  );
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
}; */
export default Info;
