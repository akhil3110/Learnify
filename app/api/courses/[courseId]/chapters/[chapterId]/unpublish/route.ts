import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
    req: Request,
    {params}: {params: {courseId: string; chapterId: string}}
){
    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const ownCourse = await db.course.findUnique({
            where:{
                id: params.courseId,
                userId
            }
        })

        if(!ownCourse){
            return new NextResponse("Unauthorized", {status: 404});
        }


        const unPublishedChapter = await db.chapter.update({
            where:{
                id: params.chapterId,
                courseId: params.courseId
            },
            data:{
                isPublished: false
            }
        })

        const onlyUnPublishedChapter = await db.chapter.findMany({
            where:{
                id: params.chapterId,
                courseId: params.courseId,
                isPublished: false
            }
        
        })

        if(!onlyUnPublishedChapter.length){
            await db.course.update({
                where:{
                    id: params.courseId
                },
                data:{
                    isPublished: false
                }
            })
        }

        return NextResponse.json(unPublishedChapter)

    } catch (error) {
        console.log("Course unPublish", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}