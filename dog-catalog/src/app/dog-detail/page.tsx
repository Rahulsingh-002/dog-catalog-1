'use client';

interface DogDetailPageProps {
  searchParams: { img?: string };
}

export default function DogDetailPage({ searchParams }: DogDetailPageProps) {
  const img = searchParams.img ? decodeURIComponent(searchParams.img) : null;

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
        🐾 Dog Detail
      </h1>

      {img ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xl w-full">
          <img
            src={img}
            alt="Selected Dog"
            className="w-full h-96 object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-600 mb-4">
              Breed: <strong>{img.split('/')[4]}</strong>
            </p>
            <a
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              ⬅️ Back to Gallery
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading image...</p>
      )}
    </main>
  );
}
