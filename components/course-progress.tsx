import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
    variant?: "success" | "default";
    value: number;
    size?: "default" | "sm";
}

const colorByVarient = {
    default: "text-sky-700",
    success: "text-emerald-700"
} 

const sizeByVarient = {
    default: "text-sm",
    sm: "test-xs"

}


const CourseProgress = (
    {variant, value,size}: CourseProgressProps
) => {
    return ( 
        <div>
            <Progress 
                className="h-2"
                value={value}
                variant={variant}
            />
            <p className={cn(
                "font-medium mt-2 text-sky-700 ",
                colorByVarient[variant || "default"],
                sizeByVarient[size || "default"]
            )}>
                {Math.round(value)}% Complete
            </p>
        </div>
     );
}
 
export default CourseProgress;