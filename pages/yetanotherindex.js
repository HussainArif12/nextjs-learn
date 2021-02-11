import { dataset } from "../dataset";

function YetIndex({ dataset }) {
  return (
    <>
      {dataset.map((item) => (
        <p>{item.title}</p>
      ))}{" "}
    </>
  );
}

export async function getServerSideProps() {
  console.log(dataset);
  return {
    props: {
      dataset,
    },
  };
}

export default YetIndex;
