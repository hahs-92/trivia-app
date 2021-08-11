interface Props {
    score: number,
    handleReStart: () => void
}

const CardResult: React.FC<Props> = ({score, handleReStart}) => {
    return(
        <article>
            <section>
                <img src="" alt="" />
            </section>
            <section>
                <h1>Results</h1>
                <h4>You got ${ score } correct answers</h4>
            </section>
            <section>
                <button onClick={ handleReStart }>Try again</button>
            </section>
        </article>
    )
}

export default CardResult