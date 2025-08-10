import styles from "@/components/folder/folder.module.scss"

interface FolderProps {
    icon: React.ReactNode,
    title: string,
    lastModified: string,
    size?: string
    className?: string
}

const Folder = ({icon, title, lastModified, size, className}:FolderProps) => {
    return (
        <div className={`${styles.folder} ${className}`}>
            {icon}
            <p className={styles.title}>{title}</p>
            <p className={styles.lastModified}>{lastModified}</p>
            {size && <p className={styles.size}>{size}</p>}
        </div>
    )
}

export default Folder;