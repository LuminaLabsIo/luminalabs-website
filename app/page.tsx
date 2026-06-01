export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Building exceptional mobile experiences
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Lumina Labs crafts innovative iOS applications that combine 
            elegant design with powerful functionality.
          </p>
          <a 
            href="/apps" 
            className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Explore Our Apps
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="mb-3">iOS Development</h3>
              <p className="text-slate-600">
                Native iOS apps built with Swift and SwiftUI for optimal performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="mb-3">Design</h3>
              <p className="text-slate-600">
                Beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="mb-3">Innovation</h3>
              <p className="text-slate-600">
                Pushing boundaries with creative solutions to real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to work together?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Get in touch to discuss your next project.
          </p>
          <a 
            href="mailto:hello@luminalabs.com"
            className="inline-block px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-lg hover:bg-slate-800 transition"
          >
            hello@luminalabs.com
          </a>
        </div>
      </section>
    </main>
  );
}