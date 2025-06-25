'use client';

interface DogDetailPageProps {
  searchParams: { img?: string };
}

export default function DogDetailPage({ searchParams }: DogDetailPageProps) {
  const img = searchParams.img ? decodeURIComponent(searchParams.img) : null;
  const breed = img ? img.split('/')[4] : '';

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-200 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6">
        🐾 Dog Detail
      </h1>

      {img ? (
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden max-w-xl w-full border border-white/20">
          <img
            src={img}
            alt="Selected Dog"
            className="w-full h-96 object-cover rounded-t-2xl border-b border-white/20"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <p className="text-indigo-900 text-lg font-medium mb-4">
              Breed: <span className="capitalize font-semibold">{breed}</span>
            </p>
            <a
              href="/"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-md"
            >
              ⬅️ Back to Gallery
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg mt-10">Loading image...</p>
      )}
    </main>
  );
}
