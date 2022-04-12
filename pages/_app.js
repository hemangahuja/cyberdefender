import initFirebase from "../firebase/init";
import { useEffect } from 'react';
import "../styles/form.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = "CYSCOM | Cyber Defender";
  }, [])


  initFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;
