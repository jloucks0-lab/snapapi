export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

                {/* API Key Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Your API Key</h2>
                    <p className="text-gray-600 mb-3">Use this key to authenticate your API requests</p>
                    <div className="bg-gray-100 p-4 rounded font-mono text-sm flex items-center justify-between">
                        <span>sk_test_4eC39HqLyjWDarjtT1zdp7dc</span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs">
                            Copy
                        </button>
                    </div>
                </div>

                {/* Usage Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">This Month</h3>
                        <p className="text-3xl font-bold text-blue-600">247</p>
                        <p className="text-gray-500 text-sm">screenshots generated</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">Plan Limit</h3>
                        <p className="text-3xl font-bold text-gray-900">1,000</p>
                        <p className="text-gray-500 text-sm">screenshots/month</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">Remaining</h3>
                        <p className="text-3xl font-bold text-green-600">753</p>
                        <p className="text-gray-500 text-sm">screenshots left</p>
                    </div>
                </div>

                {/* Current Plan */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xl font-bold">Starter Plan</p>
                            <p className="text-gray-600">$19/month • 1,000 screenshots</p>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Upgrade Plan
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between border-b pb-3">
                            <div>
                                <p className="font-medium">Screenshot: example.com</p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                            <span className="text-green-600 font-semibold">Success</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                            <div>
                                <p className="font-medium">Screenshot: github.com</p>
                                <p className="text-sm text-gray-500">5 hours ago</p>
                            </div>
                            <span className="text-green-600 font-semibold">Success</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                            <div>
                                <p className="font-medium">Screenshot: news.ycombinator.com</p>
                                <p className="text-sm text-gray-500">1 day ago</p>
                            </div>
                            <span className="text-green-600 font-semibold">Success</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}