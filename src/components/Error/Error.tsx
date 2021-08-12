//assets
import imageError from '../../assets/images/navegador.svg'

const Error = () => (
    <article>
        <section>
            <img style={{height:'50%'}} src={ imageError } alt="error" />
        </section>
        <section>
            <h2 style={{textAlign: 'center'}}>Something went wrong¡¡</h2>
        </section>
    </article>
)

export default Error