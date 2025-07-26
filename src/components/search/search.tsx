import styles from '@/components/search/search.module.scss';
import Input from '../input/input';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps{
    className?: string,
    icon?: React.ReactNode,
    placeholder?: string,
    inputClassName?: string
}

const Search = ({className, icon, placeholder, inputClassName}: SearchProps) => {
    return(
        <div className={` ${styles['search-container']} ${className}`}>
            {icon}
            <Input placeholder={placeholder} className={inputClassName} />
        </div>
    )
};

export default Search;