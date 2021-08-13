
//styles
import { ButtonStyles, ButtonActionStyles} from './ButtonStyles'

interface Props {
    title: string,
    handleClick: () => void
    isDisable?: boolean | undefined
}

const Button:React.FC<Props> = ({title, handleClick}) => {
    return(
        <ButtonStyles onClick={handleClick}>
            { title }
        </ButtonStyles>
    )
}

export const ButtonAction:React.FC<Props> = ({title, handleClick, isDisable}) => {
    return(
        <ButtonActionStyles onClick={handleClick} isDisable={isDisable}>
            { title }
        </ButtonActionStyles>
    )
}



export default Button