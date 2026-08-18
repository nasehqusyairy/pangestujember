import type * as LucideReact from 'lucide-react';

export type NavLink = {
    label: string
    href: string
}

export type Category = {
    id: number
    label: string
    icon: keyof typeof LucideReact
}

export type MenuItem = {
    id: number
    category_id: number
    img_url: string
    is_favorite: boolean
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
    previews: string[]
    lat: number
    lng: number
}

export type Career = {
    id: number
    title: string
    outlet_title: string
    is_fulltime: boolean
    description: string
    requirements: string[]
}
