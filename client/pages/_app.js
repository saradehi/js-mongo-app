import "../styles/globals.css";
import React from "react";
import { wrapper } from "../src/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import axios from "axios";
axios.defaults.baseURL = "https://js-mongo-app-production.up.railway.app/";

const MyApp = ({ Component, session, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
