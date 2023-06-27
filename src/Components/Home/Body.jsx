import RecentPosts from "./props/RecentPosts";
import { blogData } from "./props/data";
export default function Body() {
  return (
    <main className="main">
        <h3 className="recent-post__header">
          Recent blog posts
        </h3>
        <section className="recent-posts">
          {blogData.map((blogItem, i)=> <RecentPosts {...blogItem} key={i}/>)
          }
        </section>
    </main>
  )
}
