import Footer from './navigation/Footer';
import Meta from './meta';
import Navbar from './navigation/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <div>
        {/* Disabled until project write ups are complete */}
        {/* <Navbar /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
