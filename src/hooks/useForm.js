import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [inputValues, setinputValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setinputValues({
            ...inputValues,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setinputValues(initialState)
    }

    return [inputValues, handleInputChange, reset];
}
