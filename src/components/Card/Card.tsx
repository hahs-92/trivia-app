//ASSEST
import image from '../../assets/images/undraw_adventure_4hum 1.svg'
//styles
import {CardWrapper} from './CardStyles'
interface Props {
    chidren?: React.ReactChild  
}

const Card: React.FC<Props> = ({children}) => {
    return(
        <CardWrapper>
            <section className='Card-BG'></section>
            <section className='Card-imagen'>
                <img src={image} alt="undraw-aventure" />
            </section>
            <section className='Card-children'>
                { children }
            </section>
        </CardWrapper>
    )
}

export default Card