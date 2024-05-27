'use server'
import { revalidatePath } from "next/cache"
import { createClient } from "./supabase/server"
import { transactionSchema } from "./validation"
import { redirect } from "next/navigation"

export async function createTransaction(formData) {
    const validated = transactionSchema.safeParse(formData)

    if (!validated.success) {
        throw new Error('Invalid data')
    }

    const { error } = await createClient().from('transactions')
        .insert(validated.data)

    if (error) {
        throw new Error('Failed to create transaction')
    }

    revalidatePath('/dashboard')
}

export async function fetchTransactions(range, offset = 0, limit = 10) {
    const supabase = createClient()
    
    let { data, error } = await supabase
    .rpc('fetch_transactions', {
    limit_arg: limit, 
    offset_arg: offset,
    range_arg: range
    })
    if (error) throw new Error("Cannot fetch transactions")
    return data
}

export async function deleteTransaction(id) {
    const supabase = createClient()
    const { error } = await supabase.from('transactions')
        .delete()
        .eq('id', id)

    if (error) throw new Error(`Could not delete transaction ${id}`)

    revalidatePath('/dashboard')
}

export async function updateTransaction(id, formData) {
    const validated = transactionSchema.safeParse(formData)

    if (!validated.success) {
        throw new Error('Invalid data')
    }

    const { error } = await createClient().from('transactions')
        .update(formData)
        .eq('id', id)

    if (error) {
        throw new Error('Failed to edit transaction')
    }

    revalidatePath('/dashboard')
}

export async function login(prevState, formData) {
    const supabase = createClient()
    const email = formData.get('email')
    const {error} = supabase.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: true
        }
    })

    if (error) {
        return {
        error: true,
        message: "Error authenticating"
    }
    }

    return {
        message: `Email sent to ${email}`
    }
}

export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    redirect('/login')
}

export async function uploadAvatar(formData) {
    const supabase = createClient()
    const file = formData.get('file')

    // Original extension
    // File name would be generated
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`

    const { error } = await supabase.storage
        .from('avatars')
        .upload(fileName, file)

    if (error) throw new Error('Upload failed')

    const {error: dataUpdateError} = await supabase.auth
        .updateUser({
            data: {
                avatar: fileName
            }
        })

    if(dataUpdateError) {
        throw new Error('Error associating avatar with user')
    }

}