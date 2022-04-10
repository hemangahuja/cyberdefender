import initFirebase from "../firebase/init";
import "../styles/form.css";

function MyApp({ Component, pageProps }) {
  initFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;
