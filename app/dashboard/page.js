import { Suspense } from "react";
import TransactionList from "./components/transaction-list";
import Skeleton from "@/components/skeleton";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "./components/trend";
import TrendFallback from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { createClient } from "@/lib/supabase/server";
import { ErrorBoundary } from "react-error-boundary";
import { types } from "@/lib/consts";
import Range from "./components/range";

export default async function Page() {

    return (
        <>
            <section className="mb-8 flex justify-between items-center">
                <h1 className="text-4xl font-semibold">Summary</h1>
                <aside>
                    <Range />
                </aside>
            </section>

            <section className="flex justify-between items-center mb-8">
                <h2 className="text-2xl">Transactions</h2>
                <Link href="/dashboard/transaction/add" className={`flex items-center space-x-1 ${variants.outline} ${sizes.sm}`}>
                    <PlusCircle className="w-4 h-4"/>
                    <div>Add</div>
                </Link>
            </section>

            <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {types.map((type) => {
                    return (
                        <ErrorBoundary key={type} fallback={<div>Cannot fetch {type} trend data</div>}>
                            <Suspense fallback={<TrendFallback />}>
                                <Trend type={type}/>
                            </Suspense>
                        </ErrorBoundary>
                    )
                })}
            </section>
            <Suspense fallback={<TransactionListFallback />}>
                <TransactionList />
            </Suspense>
        </>
    )
}