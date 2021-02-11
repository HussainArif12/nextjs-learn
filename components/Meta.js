import Link from "next/link";
import Head from "next/head";

function Meta({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}

Meta.defaultProps = {
  title: "WebDev NEWS",
};
export default Meta;
