'use client'

import Alert from "@/components/alert";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { uploadAvatar } from "@/lib/actions";

export default function Page() {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Avatar</h1>
            <form action={uploadAvatar} className="space-y-4">
                <Alert icon={<div></div>} title={<span>Hello</span>}>Hello</Alert>
                <Input type="file" name="file" id="file"/>
                <SubmitButton>Upload Avatar</SubmitButton>
            </form>
        </>
        
    );
}