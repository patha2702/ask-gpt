import React, { useState } from "react"

interface InitialValuesProps {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const initialValues: InitialValuesProps = {
    currentStep: 1,
    setCurrentStep: () => undefined
}

const authContext = React.createContext(initialValues)

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [currentStep, setCurrentStep] = useState(initialValues.currentStep)
    const values = {
        currentStep,
        setCurrentStep
    }
    return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export const useAuthContext = () => {
    const state = React.useContext(authContext)
    return state
}