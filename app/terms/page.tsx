export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>

                <div className="prose prose-blue text-gray-500">
                    <p className="mb-4">Last updated: February 11, 2026</p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4">
                        By purchasing or using Profit Architect ("SaaS Boilerplate"), you agree to these Terms of Service.
                        If you do not agree, do not use our services.
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. License</h2>
                    <p className="mb-4">
                        We grant you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the source code
                        strictly in accordance with the terms of this Agreement.
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>You CAN:</strong> Use the code to build unlimited personal or commercial projects.</li>
                        <li><strong>You CANNOT:</strong> Re-sell, redistribute, or open-source the boilerplate code itself as a competing product.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Refund Policy</h2>
                    <p className="mb-4">
                        We offer a 14-day money-back guarantee. If you are not satisfied, please contact us within 14 days of purchase for a full refund.
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Disclaimer</h2>
                    <p className="mb-4">
                        The software is provided "AS IS", without warranty of any kind, express or implied.
                        In no event shall the authors or copyright holders be liable for any claim, damages, or other liability.
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at support@example.com.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">&larr; Back to Home</a>
                </div>
            </div>
        </div>
    );
}
