"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  breeds: string[]
  currentBreed: string
  onBreedChange: (breed: string) => void
}

export function SelectScrollable({ breeds, onBreedChange, currentBreed }: Props) {
  return (
    <div>
      <Select onValueChange={onBreedChange} defaultValue={currentBreed}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a breed" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All Dog Breeds</SelectLabel>
            {breeds.map((breed) => (
              <SelectItem key={breed} value={breed}>
                {breed.charAt(0).toUpperCase() + breed.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
