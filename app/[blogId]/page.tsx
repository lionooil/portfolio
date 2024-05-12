import { getDetail,getBlogs } from "@/../libs/client";

import Footer from "@/../components/footer";
import "@/../styles/PrivacyPolicy.css";

export async function generateStaticParams(){
  const { contents } = await getBlogs();

  const paths = contents.map((blog)=>{
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params : { blogId },
}: {
  params: { blogId : string};
}) {
  const blog = await getDetail(blogId);

  return(
    <>
      <div className="min-h-screen content">
          <h1 className="text-4xl font-bold mb-4 mt-8 text-center">{blog.title}</h1>
          <div
            className ="xl:w-8/12 w-11/12 mx-auto my-32"
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
      </div>
      <Footer />
    </>
  )
}
