import React, { useState } from "react";
import Link from "next/link";
import Layout from "./layout/layout";
import Head from "next/head";
import styles from '../styles/form.module.css'
import Image from "next/image";
import imageGoogle from '../public/img/google.png'
import imageFacebook from '../public/img/facebook.png'
import {HiAtSymbol, HiFingerPrint} from 'react-icons/hi'
import { signIn } from "next-auth/react";
import {useFormik} from 'formik'

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
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit
  })

  async function onSubmit (values) {
    console.log(values)
  }

  async function handleGoogleSignIn () {
    signIn("google", { callbackUrl: "https://js-mongo-app-126f.vercel.app/" });
  }

  async function handleFacebookSignIn () {
    signIn("facebook", {
      callbackUrl: "https://js-mongo-app-126f.vercel.app/",
    });
  }
  

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <h1>
        <Link href={"/"}>
          <a>Go back home</a>
        </Link>
      </h1>
      <Layout>
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gay-800 text-4xl font-bold py-4">Log in</h1>
            <p className="w-3/4 mx-auto text-gray-400">
              Login with your user and password
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className={styles.input_text}
                // onChange={formik.handleChange}
                // value={formik.values.email}
                {...formik.getFieldProps("email")}
              ></input>
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25}></HiAtSymbol>
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                name="password"
                className={styles.input_text}
                // onChange={formik.handleChange}
                // value={formik.values.password}
                {...formik.getFieldProps("password")}
              ></input>
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25}></HiFingerPrint>
              </span>
            </div>
            <div className="input-button">
              <button className={styles.button} type="submit">
                Log in
              </button>
            </div>
            <div>
              <button
                className={styles.button_custom}
                onClick={handleGoogleSignIn}
                type="button"
              >
                Sign in with Google
                <Image
                  src={imageGoogle}
                  alt="logoGoogle"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>
            <div>
              <button
                onClick={handleFacebookSignIn}
                className={styles.button_custom}
                type="button"
              >
                Sign in with Facebook{" "}
                <Image
                  src={imageFacebook}
                  alt="logoFacebook"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>
          </form>
          <div>
            <p className="text-center text-gray-400">
              Don't have an account?
              <Link href={"/signup"}>
                <a className="text-blue-700">Sign Up</a>
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
