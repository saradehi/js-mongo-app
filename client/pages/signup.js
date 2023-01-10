import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <section>
        <h1>Sign Up</h1>
        <div>
          <input type="email" placeholder="Email" name="email"></input>
        </div>
        <div>
          <input type="password" placeholder="Password" name="password"></input>
        </div>
        <button type="submit">Sign Up</button>
        <button><Link href={'/login'}>Go back</Link></button>
      </section>
    </>
  );
}
