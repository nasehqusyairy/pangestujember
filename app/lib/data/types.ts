import type * as LucideReact from 'lucide-react';

export type NavLink = {
    label: string
    href: string
}

export type Category = {
    id: number
    value: string
    label: string
    icon: keyof typeof LucideReact
}

export type MenuItem = {
    id: number
    category_id: number
    img: string
    title: string
    description: string
    price: number
}

export type Outlet = {
    id: number
    title: string
    address: string
    phone: string
    hours: string
    location_previews: string[]
    lat: number
    lng: number
}

export type Career = {
    id: number
    title: string
    outlet_id: number
    time: 'Full Time' | 'Part Time' | string
    description: string
    requirements: string[]
}
