"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
export default function Facebook() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Facebook Page
      <div>
        <Button variant="success">My Page</Button>
        <Button variant="danger" onClick={() => handleBtn()}>
          Back Home
        </Button>
      </div>
    </div>
  );
}
