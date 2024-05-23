import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import PageHeader from "@/components/page-header";
import Select from "@/components/select";
import Skeleton from "@/components/skeleton";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export const metadata = {
    title: "Playground"
}

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
                <div className="space-y-4">
                    <TransactionItem type="Income" description="Salary" amount={2000}/>
                    <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29}/>
                    <TransactionItem type="Savings" description="For children" amount={500}/>
                    <TransactionItem type="Investment" description="Microsoft" amount={5000}/>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">TransactionSummary + TransactionItem</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-4">
                    <TransactionSummaryItem date="2024-05-01" amount={3500}/>
                    <TransactionItem type="Income" description="Salary" amount={2000}/>
                    <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29}/>
                    <TransactionItem type="Savings" description="For children" amount={500}/>
                    <TransactionItem type="Investment" description="Microsoft" amount={5000}/>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Buttons</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-x-4">
                    <Button>Test</Button>
                    <Button variant="outline">Test</Button>
                    <Button variant="ghost">Test</Button>

                    <Button size='xs'>Test</Button>
                    <Button size='sm'>Test</Button>
                    <Button size='lg'>Test</Button>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Forms</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label className="mb-1">Name</Label>
                        <Input type="text" placeholder="type something"/>
                    </div>
                    <div>
                        <Label className="mb-1">City</Label>
                        <Select>
                            <option>Warsaw</option>
                            <option>Berlin</option>
                            <option>London</option>
                       </Select>
                    </div>

                    <div className="flex items-center">
                    <Input type="checkbox" id="terms"/>
                        <Label htmlFor="terms" className="ml-2">Accept Terms</Label>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
                <hr className="mb-4 border-gray-200 dark:border-gray-800" />
                <div className="space-y-8">
                    <div className="flex space-x-4">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>

                    <div className="space-y-4">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        </main>
    )
}