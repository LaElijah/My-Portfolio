import dbConnection from "@/app/_utils/db/dbConnection";
import BlogPost from "@/app/_components/elements/blogPost";
import LatestPost from "@/app/_components/elements/latestPost"
import styles from "@/app/_styles/pages/blog.module.scss"
import { Post } from "@/app/_utils/models/post";
import Content from "@/app/_components/elements/content"





type Author = {
  name: string;
  imageUrl: string;
}

interface BlogData {
  title: string;
  date: string;
  description: string;
  category: string | string[];
  tags: string | string[];
  author: Author;
  _id: string; // TODO: Change to force to use _id it should expect it
  media?: string;
}






export default async function Contact() {

  await dbConnection()
  const data: any = await Post.find({})
 



  return (
    <div className={styles.container}>
    <Content className={styles.wrapper}>
     
      {<LatestPost {...data[0]._doc} />}

      <div className={styles.olderPosts}>
        {data.map(({_doc: post}: any, index: number) => {
          if (index === 0) return
          else return <BlogPost key={post._id} {...post} />
        }
        )}
      </div>

    </Content>
    </div>
  );
}
