'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [selectedDog, setSelectedDog] = useState<string | null>(null);
//   const router = useRouter();

  const fetchDogImage = async () => {
    const res = await fetch('https://dog.ceo/api/breed/hound/images');
    const data = await res.json();
    setDogs(data.message.slice(0, 12));
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  const goToDetail = (dogUrl: string) => {
    const encodedUrl = encodeURIComponent(dogUrl);
    // router.push(`/dog-detail`);
  }
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800">
        🐶 Dog Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dogs.map((dogUrl, index) => (
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
              <p className="text-gray-700 truncate">{dogUrl.split('/')[4]}</p>
              <button
                onClick={() => goToDetail(dogUrl)}
                className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}