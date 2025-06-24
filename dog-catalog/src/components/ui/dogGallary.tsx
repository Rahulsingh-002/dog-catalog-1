// app/components/DogGalleryServer.tsx

import Link from 'next/link';

interface DogGalleryServerProps {
  searchParams: { page?: string };
}

const PAGE_SIZE = 6; // dogs per page

export default async function DogGalleryServer({ searchParams }: DogGalleryServerProps) {
  const page = parseInt(searchParams?.page || '1', 10);
  const res = await fetch('https://dog.ceo/api/breed/hound/images', { next: { revalidate: 0 } });
  const data = await res.json();
  const allDogs: string[] = data.message;

  const totalPages = Math.ceil(allDogs.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const dogs = allDogs.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dogs.map((dogUrl, index) => {
          const breed = dogUrl.split('/')[4];
          const encodedUrl = encodeURIComponent(dogUrl);

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={dogUrl}
                alt="Dog"
                className="h-64 w-full object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <p className="text-gray-700 truncate">{breed}</p>
                <a
                  href={`/dog-detail?img=${encodedUrl}`}
                  className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  View More
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Link
          href={`/?page=${Math.max(1, page - 1)}`}
          className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
          aria-disabled={page === 1}
        >
          Previous
        </Link>

        <span>
          Page {page} of {totalPages}
        </span>

        <Link
          href={`/?page=${Math.min(totalPages, page + 1)}`}
          className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}
          aria-disabled={page === totalPages}
        >
          Next
        </Link>
      </div>
    </>
  );
}
