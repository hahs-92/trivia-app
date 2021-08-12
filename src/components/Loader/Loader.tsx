//styles
import {LoaderWrapper} from './LoaderStyles'

const Loader = () => (
    <LoaderWrapper>
        <div className="lds-ring">
            <div></div><div></div><div></div><div></div>
        </div>
    </LoaderWrapper>
)

export default Loader