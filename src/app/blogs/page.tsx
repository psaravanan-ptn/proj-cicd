// import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Link from 'next/link'
import Error from './error';
import { ErrorBoundary } from "react-error-boundary";

export default function PostList({ posts }) {
  return (
    <ErrorBoundary fallback={<Error />}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </ErrorBoundary>
  )
}