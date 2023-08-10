import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Work_Sans } from "@next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from "../store";
import { setProducts } from "../store/slices/product-slice";
import products from "../data/products.json";
import Preloader from "../components/Preloader";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'swiper/swiper-bundle.min.css';
import "../assets/scss/styles.scss";
import {getAllProducts} from "./api/products";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
})

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  useEffect(() => {
      store.dispatch(setProducts(products));
      // getAllProducts().then((result) => store.dispatch(setProducts(result.data.products.edges))).catch((error) => console.error(error))
  }, []);

  return (
    <Fragment>
      <Head>
        <title>SR Bats</title>
        <link rel="icon" href="https://cdn.shopify.com/s/files/1/0413/2542/8896/files/sr_bats_updated_logo_1_180x.png?v=1683140696" />
      </Head>
      <style jsx global>{`
          :root {
            --ff-body: ${workSans.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader/>}>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
