import Link from "next/link";
import { getBlogs } from "@/../libs/client";

export default async function FooterLinks() {
    const { contents }  = await getBlogs();
    return (
      <>
            <ul>
                {contents.map((blog) => (
                 <li key={blog.id}>
                    <Link href={`/${blog.id}`}>
                    <p>
                        {blog.title}
                    </p>
                    </Link>
                  </li>
                ))}
            </ul>
      </>
    );
  }
