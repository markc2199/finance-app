'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
    error: false
}

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState)

    return (
        <form className="space-y-2" action={formAction}>
            <Input type="email" placeholder="name@example.com" name="email" required/>
            <SubmitButton type="submit" size="sm" className="w-full">
                Sign in with email
            </SubmitButton>
            <p className={`${state?.error ? 'text-red-500' : 'text-green-500'}`}>
                {state?.message}
            </p>
        </form>
    );
}