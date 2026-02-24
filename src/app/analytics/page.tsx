import AnalyticsDashboard from "@/components/Visitor/AnalyticsDashboard";
import DailyVisitsChart from "@/components/Visitor/DailyVisitsChart";
import HourlyVisitsChart from "@/components/Visitor/HourlyVisitsChart";

export default function AnalyticsPage() {
    return (
        <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-xl font-semibold mb-4">Visitor Analytics</h1>

        <AnalyticsDashboard />
        <DailyVisitsChart />
        <HourlyVisitsChart />
        </div>
    );
}
