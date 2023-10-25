import Content from "@/app/_components/elements/content"
import { FireStoreClient } from "firestore-client"
import ReactMarkdown from "react-markdown"
import styles from "@/app/_styles/pages/post.module.scss"




export default async function({params}: {params: {id :string}}) {
    const storeClient = new FireStoreClient({
        bucket: process.env.AWS_BUCKET || "",
        options: {
            region: process.env.AWS_REGION || "",
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
        }
    })
        

   
    

    return (
        <div className={styles.container}>
        <Content className={styles.wrapper} >
            
           
                         <ReactMarkdown>
                {await storeClient.download(params.id)}
            </ReactMarkdown>
           

        </Content>
        </div>
    )
}