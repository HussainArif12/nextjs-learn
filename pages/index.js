import CustomLayout from "../components/layout";
import Link from "next/link";
export default function Home({ info }) {
  return (
    <div>
      <CustomLayout>
        <ul>
          {info.map((item) => (
            <div key={item.id}>
              <Link href={`todo/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </div>
          ))}
        </ul>
      </CustomLayout>
    </div>
  );
}
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const info = await res.json();
  return {
    props: {
      info,
    },
  };
};
