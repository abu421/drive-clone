import styles from '@/components/search/search.module.scss';
import Input from '../input/input';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps{
    classNames?: {
        wrapper?: string,
        input?: string
    },
    icon?: React.ReactNode,
    placeholder?: string
}

const Search = ({classNames, icon, placeholder}: SearchProps) => {
    return(
        <div className={` ${styles['search-container']} ${classNames?.wrapper}`}>
            {icon}
            <Input placeholder={placeholder} className={classNames?.input} />
        </div>
    )
};

export default Search;