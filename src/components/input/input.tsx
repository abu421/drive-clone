import styles from '@/components/input/input.module.scss';

interface InputProps{
    placeholder?: string,
    className?: string
}

const Input = ({placeholder, className}: InputProps) => {
    return (
        <input placeholder={placeholder} className={`${styles.input_container} ${className}`}></input>
    );
};

export default Input;