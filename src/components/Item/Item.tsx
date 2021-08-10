interface Props  {
    answer: string
}

const Item: React.FC<Props> = ({answer}) => {
    return(
        <li>{answer}</li>
    )
}

export default Item