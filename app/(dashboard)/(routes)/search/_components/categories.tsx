"use client"

import { Category } from "@prisma/client";

import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode
} from 'react-icons/fc'

import { IconType } from 'react-icons'
import CategoryItem from "./category-item";

interface CategoriesProps {
    items : Category[]
}


const Categories = ({items}: CategoriesProps) => {
    return ( 
        <div
            data-te-perfect-scrollbar-init 
            className="flex items-center gap-x-2 overflow-x-auto scroll-bar-width pb-2 "
        >
            {items.map((item)=>(
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    value={item.id}
                />
            ))}
        </div>
     );
}
 
export default Categories;