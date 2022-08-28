import { useState, useEffect } from 'react'

// calls API with created hook useFetch
export function useFetch(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true) 
    const [error, setError] = useState(false)

    useEffect(() => {

        if (!url) return

        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url) 
                const data = await response.json()            
                setData(data)    
            } catch (err) {               
                console.log(err)                
                setError(true)    
            } finally {            
                setLoading(false)    
            }
        }
        fetchData()
    }, [url])

    if (error) {
        return <span>Il y a un problème</span>    
    }

    return { isLoading, data, error }
};

// Pour utiliser notre nouveau hook on commence par importer notre hook avec :
// import { useFetch } from '../utils/hooks'
// const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
// const { surveyData } = data