import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toRupiah(val: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
}

// createHashTable: transform array of items with `id` into a dictionary keyed by id
export function createHashTable<T extends { id: number }>(arr: T[]): Record<number, T> {
  return arr.reduce<Record<number, T>>((acc, item) => {
    if (typeof item.id === 'number') acc[item.id] = item
    return acc
  }, {})
}