"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from 'next/link';
import { SelectScrollable } from './allBreedSelectList';


const PAGE_SIZE = 12; // dogs per page

export default function DogGallery() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get("page") || '1', 10);
  const selectedBreed = searchParams.get("breed") || "keeshond"
  const [images, setImages] = useState<string[]>([])
  const [allBreeds, setAllBreeds] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
      const data = await res.json()
      console.log("images",data)
      setImages(data.message)
    }
    fetchImages()
  }, [selectedBreed])

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await res.json()
      setAllBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  const totalPages = Math.ceil(images.length / PAGE_SIZE)
  const paginatedDogs = images.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const updateBreed = (breed: string) => {
    router.push(`/?breed=${breed}&page=1`)
  }

  return (
  <>
    <div className="p-10 bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-200 min-h-screen">
      <SelectScrollable breeds={allBreeds} onBreedChange={updateBreed} currentBreed={selectedBreed}/>
      <ul className="flex flex-wrap gap-6 justify-center mt-8">
        {Array.isArray(paginatedDogs) && paginatedDogs.map((dogUrl, index) => {
          const breed = dogUrl.split('/')[4];
          const encodedUrl = encodeURIComponent(dogUrl);
          
          return (
            <li key={index} className="group w-52">
              <div className="relative h-64 w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-xl backface-hidden flex flex-col items-center justify-center border border-white/20">
                  <img
                    src={dogUrl}
                    alt={breed}
                    className="w-48 h-48 object-fill rounded-[10px] shadow-md border-2 border-white/70"
                  />
                  <span className="mt-3 capitalize text-base font-semibold text-indigo-800">
                    {breed}
                  </span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-xl [transform:rotateY(180deg)] backface-hidden flex flex-col items-center justify-center border border-white/10">
                  <p className="text-sm text-gray-700 mb-2 font-medium">
                    Breed: <span className="capitalize">{breed}</span>
                  </p>
                  <a
                    href={`/dog-detail?img=${encodedUrl}`}
                    className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10 text-gray-700">
        <Link
          href={`/?breed=${selectedBreed}&page=${Math.max(1, page - 1)}`}
          className={`px-4 py-2 rounded bg-indigo-200 hover:bg-indigo-300 ${
            page === 1 ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          Previous
        </Link>

        <span className="text-md font-semibold">
          Page {page} of {totalPages}
        </span>

        <Link
          href={`/?breed=${selectedBreed}&page=${Math.min(totalPages, page + 1)}`}
          className={`px-4 py-2 rounded bg-indigo-200 hover:bg-indigo-300 ${
            page === totalPages ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  </>
);


}
