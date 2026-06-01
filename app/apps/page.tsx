export default function Apps() {
  const apps = [
    { name: "TaskFlow", description: "Smart task management", category: "Productivity" },
    { name: "MindSpace", description: "Meditation & wellness", category: "Health" },
    { name: "BudgetWise", description: "Personal finance tracker", category: "Finance" },
    { name: "FitJourney", description: "Fitness companion", category: "Health" },
    { name: "RecipeBox", description: "Cooking made simple", category: "Lifestyle" },
    { name: "StudyHub", description: "Learning assistant", category: "Education" },
    { name: "TravelMate", description: "Trip planner", category: "Travel" },
    { name: "PetCare", description: "Pet health tracker", category: "Lifestyle" },
    { name: "CodeSnap", description: "Developer tools", category: "Productivity" },
    { name: "PhotoVault", description: "Secure photo storage", category: "Utilities" },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#0f172a',
              marginBottom: '1.5rem'
            }}>
              Our Apps
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
              Innovative applications designed to enhance your daily life
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {apps.map((app, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  borderRadius: '1rem',
                  marginBottom: '1rem'
                }}></div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  {app.name}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#64748b',
                  marginBottom: '0.75rem'
                }}>
                  {app.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  fontSize: '0.875rem',
                  borderRadius: '9999px'
                }}>
                  {app.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}