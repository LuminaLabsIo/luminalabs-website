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
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6">Our Apps</h1>
          <p className="text-xl text-slate-600">
            Innovative applications designed to enhance your daily life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl mb-4"></div>
              <h3 className="mb-2">{app.name}</h3>
              <p className="text-slate-600 mb-3">{app.description}</p>
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                {app.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}