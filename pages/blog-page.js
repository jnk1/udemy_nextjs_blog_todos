import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function BlogPage({ sortedPosts }) {
  return (
    <Layout title="Blog page">
      <ul>
        {sortedPosts &&
          sortedPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>{" "}
    </Layout>
  );
}

export async function getStaticProps() {
  const sortedPosts = await getAllPostsData();
  return {
    props: { sortedPosts }, // ページコンポーネントに props として渡されます。
    revalidate: 3, // HTMLの再生成が開始してから次に行われるまでの間隔
  };
}
