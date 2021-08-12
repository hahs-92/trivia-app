//assets
import imageError from '../../assets/images/navegador.svg'

const Error = () => (
    <article>
        <section>
            <img src={ imageError } alt="error" />
        </section>
        <section>
            <h2 style={{color: "#ffffff"}}>Something went wrong¡¡</h2>
        </section>
    </article>
)

export default Error