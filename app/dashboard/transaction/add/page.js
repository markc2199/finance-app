import TransactionForm from "../../components/transaction-form";

export const metadata = {
    title: "Add transaction"
}


export default function Page() {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Add transaction</h1>
        
            <TransactionForm />
        </>
    );
}