import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr('/api/posts', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.author}</h3>
          <p>{post.location}</p>
          <img src={post.photoUrl} alt='' />
          <p>태그 : {post.tag}</p>
          <p>좋아요 : {post.likes}</p>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
