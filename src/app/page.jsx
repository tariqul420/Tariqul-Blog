import Link from "next/link";

const Home = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return (
    <div>
      <h1 className="text-2xl font-medium">All Posts: {posts.length}</h1>
      <ul>
        {posts.map((post, index) => (
          <Link className="block hover:text-cyan-500" href={`/blog/${post?.id}`} key={post.id}>{index + 1}: {post.title}</Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
