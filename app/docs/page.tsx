export default function Docs() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                    <p className="text-gray-600 mb-4">
                        Welcome to SnapAPI documentation. Generate screenshots of any webpage with our simple REST API.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 mt-6">Authentication</h3>
                    <p className="text-gray-600 mb-4">
                        Include your API key in the Authorization header:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                        <code>Authorization: Bearer YOUR_API_KEY</code>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Generate Screenshot</h3>
                    <p className="text-gray-600 mb-4">
                        POST request to generate a screenshot:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-lg">
                        <code className="whitespace-pre">
                            {`POST /api/screenshot

{
  "url": "https://example.com",
  "width": 1920,
  "height": 1080,
  "fullPage": false
}`}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    )
}