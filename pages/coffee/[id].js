import { useRouter } from "next/router";
import CustomLayout from "../../components/layout";
const Info = ({ info }) => {
  const router = useRouter(); //contains parameters that are
  // the route.
  const { id } = router.query;
  return (
    <>
      <CustomLayout>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <p>{info.ingredients}</p>
      </CustomLayout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.sampleapis.com/coffee/hot/${context.params.id}`
  );
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};
export default Info;
