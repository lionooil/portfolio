import Link from "next/link";
import { getBlogs } from "@/../libs/client";

export default async function FooterLinks() {
    const { contents }  = await getBlogs();
    return (
      <>
            <ul className="flex justify-center gap-8">
            <li>
               <Link href={`/`} className="underline-motion">
               <p>Home</p>
               </Link>
             </li>
                {contents.map((blog) => (
                 <li key={blog.id}>
                    <Link href={`/${blog.id}`} className="underline-motion">
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
