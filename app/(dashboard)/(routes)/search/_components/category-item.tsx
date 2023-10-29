import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IconType } from 'react-icons'
import qs from "query-string"

interface CategoryItemProps {
    label: string,
    value?: string
}

const CategoryItem = ({
    label,
    value
}: CategoryItemProps) => {

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()


    const currentCategory = searchParams.get('categoryId')
    const curretTitle = searchParams.get('title')

    const isSelected  = currentCategory === value

    const onClick = () =>{
        const url = qs.stringifyUrl({
            url: pathname,
            query:{
                title: curretTitle,
                categoryId: isSelected ? null : value,
            }
        }, {skipNull: true, skipEmptyString: true});

        router.push(url)
    }

    return ( 
        <button 
            onClick={onClick}
            className={cn(
                "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
                isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
            )}

            type='button'
        >
            <div className=' truncate'>
                {label}
            </div>
        </button>
     );
}
 
export default CategoryItem;