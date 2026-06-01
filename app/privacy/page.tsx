export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Information We Collect</h2>
          <p>
            Lumina Labs is committed to protecting your privacy. This policy 
            outlines how we collect, use, and safeguard your information.
          </p>

          <h2>Data Usage</h2>
          <p>
            We only collect data necessary to provide and improve our services. 
            We do not sell or share your personal information with third parties.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{' '}
            <a href="mailto:hello@luminalabs.com" className="text-blue-500 hover:text-blue-600">
              hello@luminalabs.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}