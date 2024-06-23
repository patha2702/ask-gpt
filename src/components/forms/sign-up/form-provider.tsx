import { AuthContextProvider } from "@/context/use-auth-context"
import { FormProvider } from "react-hook-form"
import React from "react"

interface Props {
    children: React.ReactNode
}

const SignUpFormProvider = ({children}: Props) => {
    return (
        <AuthContextProvider>
            <FormProvider></FormProvider>
        </AuthContextProvider>
    )
}

export default SignUpFormProvider