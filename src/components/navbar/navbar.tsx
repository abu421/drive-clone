import styles from '@/components/navbar/navbar.module.scss';
import { Menu, Upload, Grid3x3, List, Search as SearchIcon } from 'lucide-react';
import Button from '../button/button';
import Search from '../search/search';

const NavBar = () => {
    const classNameSearch = {
        wrapper: styles.searchWrapper,
        input: styles.input
    }
    return (
        <div className={styles['navbar-container']}>
            <div className={styles.header}>
                <div className={styles.burgerMenu}>
                    <Button className={styles.buttonMenuWrapper}><Menu size={20}/></Button>
                    <p>My Drive</p>
                </div>
                <div className={styles.upload}>
                    <div className={`${styles.searchbar} ${styles.searchbarHidden2}`}>
                        <Search className={classNameSearch} icon={<SearchIcon size={20}/>} placeholder='Search in Drive'/>
                    </div>
                    <Button className={styles.buttonWrapper}><Grid3x3 size={20} /><span>Grid</span></Button>
                    <Button className={styles.buttonWrapper}><List size={20} /><span>List</span></Button>
                    <Button className={styles.buttonUploadWrapper}><Upload color='white' size={20} /><span className={styles.uploadSpan}>Upload</span></Button>
                </div>
            </div>
            <div className={`${styles.searchbar} ${styles.searchbarHidden}`}>
                <Search className={classNameSearch} icon={<SearchIcon size={20}/>} placeholder='Search in Drive'/>
            </div>
            <div className={styles.buttons}>
                <Button className={styles.buttonWrapper}><Grid3x3 size={20} />Grid</Button>
                <Button className={styles.buttonWrapper}><List size={20} />List</Button>
            </div>
        </div>
    )
};

export default NavBar;