import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ marginTop: "65px" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
