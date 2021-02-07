import { useRouter } from "next/router";
import TodoComponent from "../../components/TodoComponent";
function Todo({ info }) {
  const data = useRouter();
  const { id } = data.query;
  console.log(info);
  return (
    <div>
      <TodoComponent todo={info} />
    </div>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const info = await res.json();
  //generate all ids.
  const ids = info.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
  );
  const info = await res.json();

  return {
    props: {
      info,
    },
  };
};
export default Todo;
