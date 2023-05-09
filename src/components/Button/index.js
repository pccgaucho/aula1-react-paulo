import './styles.css'

export const Button = ({ text, variant }) => {
    return (
        <button className={variant === 'secundary' ? 'buttonSecundary' : 'button'}>{text}</button>
    )
}