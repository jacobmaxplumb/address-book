import { useState } from "react"
import { useLocalStorage } from "./localstorage.hook"

export const useForm = (formname, initialValues) => {
    const [values, setValues] = useLocalStorage(formname, initialValues);
    const updateFormValue = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return [values, setValues, updateFormValue];
}