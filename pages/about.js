import Head from "next/head";
import CustomLayout from "../components/layout";
function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <CustomLayout>
        <p>Hello world from about piece of text</p>
      </CustomLayout>
    </div>
  );
}
export default About;
