import { NextRequest, NextResponse } from "next/server"
import Message from "@/app/_utils/models/message"
import dbConnection from "@/app/_utils/db/dbConnection"




export async function POST(req: NextRequest, res: NextResponse) {
    

    try {

        await dbConnection()


        const document = new Message({...await req.json()})
        await document.save()


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

}