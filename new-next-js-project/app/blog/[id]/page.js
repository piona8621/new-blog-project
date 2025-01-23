import Link from "next/link";

export const metadata = {
  title: "Blog Details",
};

async function getBlogDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await getBlogDetails(id);

  return (
    <div>
      <h1 className="text-3xl text-black font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800">{post.body}</p>
      <Link href="/" className="text-blue-500 underline mt-4 block">
        Back to Home
      </Link>
    </div>
  );
}
