import "../app/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:'400' })

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
