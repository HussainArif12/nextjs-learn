import Link from "next/link";
function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/derivedLayout">To Derived Layouts</Link>
          </li>
          <li>
            <Link href="/about"> About page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
