import PageHeader from "@/components/page-header";
import TransactionItem from "@/components/transaction-item";
import Trend from "@/components/trend";

export default function Page() {
    return (
        <main className="space-y-8">
            <h1 className="text-4xl mt-8">Playground</h1>

            <div>
                <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div>
                    <PageHeader />
                </div>
            </div>


            <div>
                <h2 className="mb-4 text-lg font-mono">Trend</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="flex space-x-8">
                    <Trend type="Income" amount={1000} prevAmount={500}/>
                    <Trend type="Expense" amount={500} prevAmount={900}/>
                    <Trend type="Investment" amount={6000} prevAmount={500}/>
                    <Trend type="Savings" amount={1500} prevAmount={500}/>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="">
                    <TransactionItem type="Income" description="Salary" amount={2000}/>
                    <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29}/>
                    <TransactionItem type="Savings" description="For children" amount={500}/>
                    <TransactionItem type="Investment" description="Microsoft" amount={5000}/>
                </div>
            </div>

        </main>
    )
}