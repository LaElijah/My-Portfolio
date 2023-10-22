import Content from "@/app/_components/elements/content"
import { FireStoreClient } from "firestore-client"
import ReactMarkdown from "react-markdown"

const storeClient = new FireStoreClient({
    bucket: process.env.AWS_BUCKET || "",
    options: {
        region: process.env.AWS_REGION || "",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
    }

})


export default async function({params}: {params: string}) {

    const data = await storeClient.download('noway')

    console.log(data)


    return (
        <Content>
            <ReactMarkdown>
                {data}
            </ReactMarkdown>
        </Content>
    )
}