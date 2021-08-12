import { useEffect, useState } from 'react'
//utils
import { fetchData } from '../utils/fetchData'
//interfaces
import { QuestionState } from '../utils/fetchData'


export const useFetch = () => {
    const [loading, setLoading ] = useState(false)
    const [ error, setError] = useState(false)
    const [ data, setData ] = useState<QuestionState[]>([])

    const getData = async() => {
        setLoading(true)
        try {
            // const info = await fetchData()
            // setData(info)
            setLoading(false)
            setError(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        if(data.length === 0) getData()
    },[data])

    return {
        loading,
        error,
        data
    }

}