import { Category } from '@/types/nominee';

async function getCategories(): Promise<Category[]> {
  const res = await fetch('https://tcaapi.kaba.et/api/nominee-categories', {
    next: { revalidate: 3600 } // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Nominee Categories
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Browse through different categories and vote for your favorite creators.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/tca/category/${category.id}`}
            className="block rounded-2xl bg-[#121212] border border-gray-800 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="h-48 sm:h-56 md:h-72 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">
                {category.name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base line-clamp-3">
                {category.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {category.criteria.length} criteria
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                  View Nominees
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
