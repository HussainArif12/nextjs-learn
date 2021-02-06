import CustomLayout from "../components/layout";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <CustomLayout>
        <h1>List of coffees</h1>
        <Link href="/coffee/hot">Hot coffees</Link>
        <Link href="/coffee/iced">Iced coffees</Link>
      </CustomLayout>
    </div>
  );
}
