import { NextRequest, NextResponse } from "next/server"
import {MongoClient} from "mongodb"


  const uri = process.env.MONGO_URI || ""
        const client = new MongoClient(uri, {
        
        })

export async function POST(req: NextRequest, res: NextResponse) {
    try {

        const { name, email, message } = await req.json()
       
      

        await client.connect()
        
        const messages = client.db("data").collection("messages")
        
        console.log(await messages.insertOne({
            name,
            email,
            message
        }))

        return NextResponse.json({
            status: "success"
        })

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            status: "failure",
            message: "error"
        })
    }
    finally {
        await client.close()
    }

}