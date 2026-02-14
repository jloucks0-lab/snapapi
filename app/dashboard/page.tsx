export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">API Usage</h2>
                    <p className="text-gray-600">Your API usage statistics will appear here</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Your API Key</h2>
                    <p className="text-gray-600 mb-4">Use this key to authenticate your API requests</p>
                    <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                        sk_test_xxxxxxxxxxxxxxxxxxxx
                    </div>
                </div>
            </div>
        </div>
    )
}