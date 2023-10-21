import { MongoClient } from "mongodb"


import BlogPost from "@/app/_components/elements/blogPost";
import LatestPost from "@/app/_components/elements/latestPost"
import styles from "@/app/_styles/pages/blog.module.scss"

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



const uri = process.env.MONGODB_URI || ""

const client = new MongoClient(uri)

const postCollection = client.db("data").collection("posts")



export default async function Contact() {

  const data = await postCollection.find({})


  const posts: BlogData[] = [
    {
      title: "This is a blog title",
    date: `10/20/23`,
    description: "Put a description here",
    media: "/assets/covers/Full_Logo_Background.jpg",
    category: "Initial",
    tags: "",
    author: {
      name: "Elijah Allotey",
      imageUrl: "/assets/covers/Full_Logo_Background.jpg",
    },
    _id: "hi"
  },
   {
    title: "this is a new blog post",
    date: `8/10/23`,
    description: "try this too",
    media: "/assets/avatar.png",
    category: "Initial",
    tags: "old",
    author: {
      name: "Elijah Allotey",
      imageUrl: "/assets/covers/Full_Logo_Background.jpg",
    },
    _id: "hey"
  },
   {
    title: "this is the oldest blog post",
    date: `7/10/23`,
    description: "the first",
    media: "/assets/avatar.png",
    category: "True",
    tags: "oldest",
    author: {
      name: "Elijah Allotey",
      imageUrl: "/assets/covers/Full_Logo_Background.jpg",
    },
    _id: "hru"
  },
]

  return (
    <Content className={styles.container}>
      {<LatestPost {...posts[0]} />}

      <div>
        {posts.map((post: BlogData, index: number) => {
          if (index === 0) return
          else return <BlogPost key={post._id} {...post} />
        }
        )}
      </div>

    </Content>
  );
}
