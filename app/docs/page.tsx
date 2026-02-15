export default function Docs() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

                {/* Introduction */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-600 mb-4">
                        SnapAPI is a powerful screenshot generation service that allows you to capture any webpage as a high-quality image.
                        Our API is designed to be simple, fast, and reliable.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                        <p className="text-blue-900">
                            <strong>Base URL:</strong> <code className="bg-blue-100 px-2 py-1 rounded">https://api.snapapi.io/v1</code>
                        </p>
                    </div>
                </div>

                {/* Authentication */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
                    <p className="text-gray-600 mb-4">
                        All API requests require authentication using your API key. Include your key in the Authorization header:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
                        <code className="text-sm">
                            Authorization: Bearer YOUR_API_KEY
                        </code>
                    </div>
                    <p className="text-gray-600">
                        You can find your API key in your <a href="/dashboard" className="text-blue-600 hover:underline">dashboard</a>.
                    </p>
                </div>

                {/* Quick Start */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                    <p className="text-gray-600 mb-4">
                        Here's a simple example to capture a screenshot:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                            {`curl -X POST https://api.snapapi.io/v1/screenshot \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "width": 1920,
    "height": 1080,
    "fullPage": false
  }'`}
                        </pre>
                    </div>
                </div>

                {/* API Endpoints */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">API Endpoints</h2>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">POST</span>
                            /screenshot
                        </h3>
                        <p className="text-gray-600 mb-4">Generate a screenshot of a webpage.</p>

                        <h4 className="font-semibold mb-2">Request Body:</h4>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2">Parameter</th>
                                        <th className="text-left py-2">Type</th>
                                        <th className="text-left py-2">Required</th>
                                        <th className="text-left py-2">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2"><code>url</code></td>
                                        <td>string</td>
                                        <td>Yes</td>
                                        <td>The URL to capture</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2"><code>width</code></td>
                                        <td>integer</td>
                                        <td>No</td>
                                        <td>Viewport width (default: 1920)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2"><code>height</code></td>
                                        <td>integer</td>
                                        <td>No</td>
                                        <td>Viewport height (default: 1080)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2"><code>fullPage</code></td>
                                        <td>boolean</td>
                                        <td>No</td>
                                        <td>Capture full page (default: false)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2"><code>format</code></td>
                                        <td>string</td>
                                        <td>No</td>
                                        <td>Image format: png, jpeg, webp (default: png)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2"><code>quality</code></td>
                                        <td>integer</td>
                                        <td>No</td>
                                        <td>Image quality 1-100 (default: 90)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="font-semibold mb-2">Response:</h4>
                        <div className="bg-gray-900 text-white p-4 rounded-lg">
                            <pre className="text-sm">
                                {`{
  "success": true,
  "screenshotUrl": "https://cdn.snapapi.io/screenshots/abc123.png",
  "width": 1920,
  "height": 1080,
  "fileSize": 245678,
  "timestamp": "2024-02-14T10:30:00Z"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Code Examples */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">JavaScript (Node.js)</h3>
                        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                                {`const axios = require('axios');

const response = await axios.post(
  'https://api.snapapi.io/v1/screenshot',
  {
    url: 'https://example.com',
    width: 1920,
    height: 1080,
    fullPage: false
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data.screenshotUrl);`}
                            </pre>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Python</h3>
                        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                                {`import requests

response = requests.post(
    'https://api.snapapi.io/v1/screenshot',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'url': 'https://example.com',
        'width': 1920,
        'height': 1080,
        'fullPage': False
    }
)

data = response.json()
print(data['screenshotUrl'])`}
                            </pre>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">PHP</h3>
                        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                                {`<?php
$ch = curl_init('https://api.snapapi.io/v1/screenshot');

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'url' => 'https://example.com',
    'width' => 1920,
    'height' => 1080,
    'fullPage' => false
]));

$response = curl_exec($ch);
$data = json_decode($response, true);
echo $data['screenshotUrl'];
?>`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Error Handling */}
                <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
                    <p className="text-gray-600 mb-4">
                        The API uses standard HTTP response codes:
                    </p>
                    <table className="w-full text-sm mb-4">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="text-left py-2 px-4">Code</th>
                                <th className="text-left py-2 px-4">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4"><code>200</code></td>
                                <td>Success</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4"><code>400</code></td>
                                <td>Bad Request - Invalid parameters</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4"><code>401</code></td>
                                <td>Unauthorized - Invalid API key</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4"><code>429</code></td>
                                <td>Rate Limit Exceeded</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4"><code>500</code></td>
                                <td>Server Error</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="font-semibold mb-2">Error Response Format:</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg">
                        <pre className="text-sm">
                            {`{
  "success": false,
  "error": {
    "code": "invalid_url",
    "message": "The provided URL is invalid or unreachable"
  }
}`}
                        </pre>
                    </div>
                </div>

                {/* Rate Limits */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
                    <p className="text-gray-600 mb-4">
                        Rate limits depend on your subscription plan:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Starter:</strong> 1,000 requests/month, 10 requests/minute</li>
                        <li><strong>Professional:</strong> 10,000 requests/month, 50 requests/minute</li>
                        <li><strong>Enterprise:</strong> 100,000 requests/month, 200 requests/minute</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-4">
                        <p className="text-yellow-900">
                            <strong>Tip:</strong> Check the <code>X-RateLimit-Remaining</code> header in responses to monitor your usage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
