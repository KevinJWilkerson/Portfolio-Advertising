import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Kevin Wilkerson</title>
      </Head>
      <div>
        <p>Hello world!</p>
      </div>
    </Layout>
  );
}
