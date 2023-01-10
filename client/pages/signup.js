import React, { useState } from "react";
import Link from "next/link";
import Layout from "./layout/layout";
import Head from "next/head";
import styles from "../styles/form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

export default function Login() {

    const [show, setShow] = useState({password: false, cpassword: false})

  return (
    <Layout>
      <Head>
        <title>SignUp</title>
      </Head>
      {/* <section>
        <h1>Sign Up</h1>
        <div>
          <input type="email" placeholder="Email" name="email"></input>
        </div>
        <div>
          <input type="password" placeholder="Password" name="password"></input>
        </div>
        <button type="submit">Sign Up</button>
        <button><Link href={'/login'}>Go back</Link></button>
      </section> */}
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gay-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">Register as a new user</p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className={styles.input_text}
            ></input>
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25}></HiOutlineUser>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={styles.input_text}
            ></input>
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25}></HiAtSymbol>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              className={styles.input_text}
            ></input>
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({...show, password: !show.password})}
            >
              <HiFingerPrint size={25}></HiFingerPrint>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              placeholder="Confirm Password"
              name="cpassword"
              className={styles.input_text}
            ></input>
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({...show, cpassword: !show.cpassword})}
            >
              <HiFingerPrint size={25}></HiFingerPrint>
            </span>
          </div>
          <div className="input-button">
            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="text-center text-gray-400">
            Already have an account?
            <Link href={"/login"}>
              <a className="text-blue-700">Sign In</a>
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
