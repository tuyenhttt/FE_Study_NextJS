"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/blogs");
  };

  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button className="mt-3" variant="success" onClick={() => handleBtn()}>
        Go Back
      </Button>
      <h1 className="mb-3 mt-3">View Detail Blog {data?.id}</h1>
      <h3> Title: {data?.title}</h3>
      <h4> Author: {data?.author}</h4>
      <p> Content: {data?.content}</p>
    </div>
  );
};
export default ViewDetailBlog;
