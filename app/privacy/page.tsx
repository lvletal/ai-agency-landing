export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-blue text-gray-500">
                    <p className="mb-4">Last updated: February 11, 2026</p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Welcome to Profit Architect ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                        This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We may collect the following types of information:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, and payment information when you purchase our boilerplate.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">We use your information to:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Process your payments and deliver the source code.</li>
                        <li>Send you important updates, such as security patches or new features.</li>
                        <li>Improve our website and customer service.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Third-Party Services</h2>
                    <p className="mb-4">We share data with trusted third-party services to operate our business:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>PayPal:</strong> For secure payment processing. We do not store your credit card details.</li>
                        <li><strong>Google Firebase:</strong> For authentication and database hosting.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Your Rights</h2>
                    <p className="mb-4">
                        You have the right to access, correct, or delete your personal information.
                        If you wish to exercise these rights, please contact us at support@example.com.
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us at support@example.com.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">&larr; Back to Home</a>
                </div>
            </div>
        </div>
    );
}
