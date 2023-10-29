'use-client'
"use client"

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./searh-input";

const NavbarRoutes = () => {

    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage  = pathname?.startsWith("/teacher");
    const isPlayerPage   = pathname?.includes("/chapter")
    const isSearchPage   = pathname  === "/search"

    return ( 
        <>
            {
                isSearchPage && (
                    <div className=" hidden md:block">
                        <SearchInput />
                    </div>
                )
            }
            <div className="flex  gapx-x-2  ml-auto">
            {isTeacherPage || isPlayerPage ?(
                 <Link href="/" className="mr-1">
                    <Button  size="sm" variant="ghost"  className="mr-1">
                        <LogOut  className="h-4 w-4 mr-2"/>
                            Exit
                    </Button>
                </Link>
            ):(
                <Link href="/teacher/courses" className="mr-1">
                    <Button size="sm" variant="ghost">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/"
            />
            </div>
        </>
    );
}
 
export default NavbarRoutes;