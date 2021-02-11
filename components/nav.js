import Link from "next/link";
import styles from "../styles/Nav.module.css";
function Nav() {
  return (
    <div className={styles.card}>
      <h3>Navigation</h3>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/derivedLayout">To Derived Layouts</Link>
          </li>
          <li>
            <Link href="/about"> About page</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
