import { useState } from "react"

export const useForm = (initialState={}) => {

    const [value, setValue] = useState(initialState)

    const reset = ()=>{
        setValue(initialState)
    }

    // NOTA: Es imporntante desestructurar el valor de value con el mismo
    //        nombre que tiene el "name"  del input :
    
    //  const [{desc},handleInputChange, reset ] = useForm({desc: ''})
 
    const handleInputChange = ({target})=>{
        setValue({
            ...value,
            [target.name]: target.value
        })
    }

    return [value, handleInputChange, reset]
}
