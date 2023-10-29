import { Button } from "@/components/ui/button";


import {  columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";




const Courses =async () => {

    const {userId} = auth();

    if(!userId){
        return redirect("/")
    }

    const data = await db.course.findMany({
        where:{
            userId,
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    return ( 
        <div  className="p-6">
            <DataTable columns={columns} data={data} />
        </div>
     );
}
 
export default Courses;
