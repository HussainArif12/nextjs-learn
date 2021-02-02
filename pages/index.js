import Head from "next/head";
import styles from "../styles/Home.module.css";
import CustomLayout from "../components/layout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <CustomLayout>
        <p>Home page</p>
      </CustomLayout>
    </div>
  );
}
