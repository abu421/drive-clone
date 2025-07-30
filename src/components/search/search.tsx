import styles from '@/components/search/search.module.scss';
import Input from '../input/input';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps{
    className?: {
        wrapper?: string,
        input?: string
    },
    icon?: React.ReactNode,
    placeholder?: string
}

const Search = ({className, icon, placeholder}: SearchProps) => {
    return(
        <div className={` ${styles['search-container']} ${className?.wrapper}`}>
            {icon}
            <Input placeholder={placeholder} className={className?.input} />
        </div>
    )
};

export default Search;