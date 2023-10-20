import {MongoClient} from "mongodb"


import BlogPost from "@/app/_components/elements/blogPost";
import LatestPost from "@/app/_components/elements/latestPost"

const uri = process.env.MONGODB_URI || ""

const client = new MongoClient(uri)

const postCollection = client.db("data").collection("posts")



export default async function Contact() {

  const data = await postCollection.find({})

  console.log(data)


  const test = [{
    date: new Date(),
    message: "Put a description here",
    media: "/assets/covers/Full_Logo_Background.jpg"
  }]

  return (
    <div>
     {test &&  <LatestPost {...test[0]} /> }

      <section>
        {test && test.map((post: any) => (
          // Change this 
          <BlogPost key={post._id } {...post} />
        ))}
      
      </section>
    </div>
  );
}
