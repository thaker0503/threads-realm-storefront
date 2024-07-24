import React from 'react'

const PrivacyPage = () => {
    return (
        <div className="flex flex-col justify-center p-4 gap-4">
            <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>
            <p className="mt-4">At Threads Realm, safeguarding your privacy and ensuring the security of your personal information is our utmost priority. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website, products, and services. By accessing or using our platform, you consent to the terms outlined in this Privacy Policy.</p>
            <h2 className="text-2xl font-bold mt-4">Information Collection and Use</h2>
            <p>We collect various types of information to provide and improve our services:</p>
            <ul className="list-disc ml-4">
                <li><b>Personal Information:</b> When you create an account, place an order, or interact with our website, we may collect personal information such as your name, email address, shipping address, and design preferences.</li>
                <li><b>Design Data:</b> When you use our custom T-shirt design tools, we may collect information about the designs you create, including images, text, and other content.</li>
                <li><b>Usage Data:</b> We may collect information about your interactions with our website, such as pages visited, time spent on each page, and other browsing activities.</li>
                <li><b>Cookies:</b> Like many websites, we use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Data Usage and Disclosure</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc ml-4">
                <li>Fulfilling orders and providing customer support</li>
                <li>Personalizing your experience and improving our products and services</li>
                <li>Communicating with you about promotions, updates, and other relevant information</li>
                <li>Preventing fraud and ensuring the security of our platform</li>
                <li>Complying with legal obligations and enforcing our policies</li>
            </ul>
            <p>We do not store your payment details. All payment transactions are processed through a direct payment gateway authorized by the Reserve Bank of India (RBI). Your payment information is encrypted and securely transmitted to the payment processor for authorization and settlement.</p>
            <h2 className="text-2xl font-bold mt-4">Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            <h2 className="text-2xl font-bold mt-4">Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have any questions about our Privacy Policy, please contact us using the information provided below.</p>
            <h2 className="text-2xl font-bold mt-4">Changes to This Policy</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website. Your continued use of our platform after the changes become effective constitutes acceptance of the revised policy.</p>
            <h2 className="text-2xl font-bold mt-4">Contact Us</h2>
            <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:contact@threadsrealm.in">
                contact@threadsrealm.in
            </a>
                . We are committed to addressing your inquiries promptly and transparently.</p>
        </div>
    )
}

export default PrivacyPage
