import styles from "../styles/Layouts.module.css";
import Footer from "./footer";
import Nav from "./nav";
export default function CustomLayout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
