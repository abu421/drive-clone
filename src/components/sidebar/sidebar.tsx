import styles from '@/components/sidebar/sidebar.module.scss';
import Button from '../button/button';
import { Cloud, Plus, X, Home, Clock, Star, Trash2, } from 'lucide-react';

const Sidebar = () => {
    return(
        <div className={styles['sidebar-container']}>
            <div className={styles.upload_tab}>
                <div className={styles.logo}>
                    <div className={styles.header}>
                        <Cloud />
                        <p>Drive</p>
                    </div>
                    <Button className={styles.close}><X color='black' size={20}/></Button>
                </div>
                <Button className={styles.new_cta}><Plus /><span>New</span></Button>
            </div>
            <div className={styles.info}>
<               div className={styles.navbar_tab}>
                    <ul className={styles.list}>
                        <li className={styles.item}><Button className={styles.item_cta}><Home /><span>My Drive</span></Button></li>
                        <li className={styles.item}><Button className={styles.item_cta}><Clock /><span>Recent</span></Button></li>
                        <li className={styles.item}><Button className={styles.item_cta}><Star /><span>Starred</span></Button></li>
                        <li className={styles.item}><Button className={styles.item_cta}><Trash2 /><span>Trash</span></Button></li>
                    </ul>
                </div>
                <div className={styles.storage_tab}>
                    <div className={styles.summary}>
                        <p>Storage used</p>
                        <p className={styles.mb}>2.1 GB of 15 GB</p>
                    </div>
                    <input className={styles.input} type='range' style={{pointerEvents: 'none'}}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;