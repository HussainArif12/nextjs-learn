//import styles from "../styles/Layouts.module.css";
export default function CustomLayout({ children }) {
  return (
    <div>
      {children}
      <h1>Rendered with the custom layout</h1>{" "}
    </div>
  );
}
