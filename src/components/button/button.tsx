import styles from '@/components/button/button.module.scss';

interface ButtonProps{
    children: React.ReactNode,
    className?: string,
    onClick?: ()=>void
}

const Button = ({ children, className, onClick }:ButtonProps) => {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            onClick={onClick} 
        >
            {children}
        </button>
    );
}

export default Button;