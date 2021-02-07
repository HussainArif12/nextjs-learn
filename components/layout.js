import styles from "../styles/Layouts.module.css";
import Nav from "./nav";
export default function CustomLayout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>{children}</div>
    </>
  );
}
