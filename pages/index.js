import CustomLayout from "../components/layout";
import Link from "next/link";
export default function Home({ info }) {
  return (
    <div>
      <CustomLayout>
        <h1>List of coffees</h1>
        <Link href="/coffee/hot">Hot coffees</Link>
        <Link href="/coffee/iced">Iced coffees</Link>
      </CustomLayout>
      {info.title}
      {info.description}
    </div>
  );
}
export const getStaticProps = async (context) => {
  const res = await fetch(`https://api.sampleapis.com/coffee/hot/4`);
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};
