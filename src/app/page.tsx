import Link from "next/link";
import a from "@/styles/app.module.css";
import b from "@/styles/mypage.module.css";
import AppTable from "@/components/app.table";

export default function Home() {
  return (
    <main>
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
      <AppTable />
    </main>
  );
}
