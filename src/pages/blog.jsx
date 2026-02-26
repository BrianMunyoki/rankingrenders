import { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your_id',
  dataset: 'production',
  useCdn: true,
});

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"]`).then((data) => setPosts(data));
  }, []);

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-white text-4xl font-bold mb-12">Technical Insights</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-[#0f172a] p-6 rounded-3xl border border-white/5">
            <h2 className="text-xl text-white font-bold">{post.title}</h2>
            <button className="text-blue-500 mt-4">Read Article →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;