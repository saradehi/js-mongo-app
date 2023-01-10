import React from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import Layout from "./layout/layout";
import Head from "next/head";

export default function () {
    // const {data: session} = useSession()
    // console.log(session)
    
    // return (
    //   <>
    //     {session ? (
    //       <div>
    //         <p>
    //           Go to{" "}
    //           <Link href={"/profile"}>
    //             <button type="button">{session.user.name}'s</button>
    //           </Link>{" "}
    //           profile.
    //         </p>
    //       </div>
    //     ) : (
    //       <div>
    //         <h1>LOG IN</h1>
    //         <div>
    //           <form>
    //             <label>
    //               User: <input type="text"></input>
    //             </label>
    //             <br />
    //             <label>
    //               Password: <input type="text"></input>
    //             </label>
    //           </form>
    //           <button type="submit">Log in</button>
    //         </div>
    //         <div>
    //           <h1>SIGN UP</h1>
    //           <p>
    //             <Link href={"/signup"}>CLICK HERE</Link>
    //           </p>
    //           <button>Sign in with Google</button>
    //           <button>Sign in with Facebook</button>
    //           <button onClick={() => signIn()}>
    //             Sign in with Google or Facebook
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </>
    // );

    return (
      <Layout>
      <Head><title>Login</title></Head>
      <h1>Login</h1>
      </Layout>
    )

}