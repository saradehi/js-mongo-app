import Head from "next/head";
import Pets from './components/Pets/Pets'

export default function () {
  return (
    <>
      <Head>
        <title>Pets</title>
      </Head>
      <Pets></Pets>
    </>
  );
}
