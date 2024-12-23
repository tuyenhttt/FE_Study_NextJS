import Link from "next/link";
import a from "@/styles/app.module.css";
import b from "@/styles/mypage.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "My Home Page",
};

export default function Home() {
  return (
    <div>
      <ul>
        <li className={a["red"]} style={{ padding: "20px" }}>
          <Link href={"/facebook"}>
            <span className={b["red"]}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0", padding: "20px" }}>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li style={{ padding: "20px" }}>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
