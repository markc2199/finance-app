import Skeleton from "@/components/skeleton";

export default function TrendFallback() {
    return (
        <div className="space-y-5 w-3/5 lg:5/6">
            <div>
                <Skeleton />
            </div>
            <div className="mb-2">
                <Skeleton />
            </div>
            <div className="flex space-x-1 items-center">
                 <Skeleton />
            </div>
        </div>
    );
}