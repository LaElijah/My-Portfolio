import { NextResponse } from "next/server";
import { Post } from "@/app/_utils/models/post";
import dbConnection from "@/app/_utils/db/dbConnection";


export async function GET() {
    try {
        await dbConnection()
         


        return NextResponse.json({
            status: "success",
            payload: {
                posts: await Post.find({})
            }
        })

    }
    catch (error) {
        console.log(error)
        NextResponse.json({
            status: "failure"
        })
    }

}

