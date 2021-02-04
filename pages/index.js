import CustomLayout from "../components/layout";
import CoffeeList from "../components/CoffeeList";
import Link from "next/link";
export default function Home({ coffee }) {
  //console.log(coffee);
  return (
    <div>
      <CustomLayout>
        <h1>List of coffees</h1>
        <CoffeeList coffees={coffee} />
      </CustomLayout>
    </div>
  );
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const coffee = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      coffee,
    },
  };
}
