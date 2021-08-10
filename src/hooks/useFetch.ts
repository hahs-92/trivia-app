import { useEffect, useState } from 'react'
//utils
import { fetchData } from '../utils/fetchData'

export interface Data {
    category: string,
    correct_answer: string,
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export const useFetch = () => {
    const [loading, setLoading ] = useState(false)
    const [ error, setError] = useState(false)
    const [ data, setData ] = useState<Data[]>([])

    const getData = async() => {
        setLoading(true)
        try {
            const info = await fetchData()
            setData(info)
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return {
        loading,
        error,
        data
    }

}