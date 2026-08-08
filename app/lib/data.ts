// imports
import * as LucideReact from 'lucide-react';

// types
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

// data
export const navlinks: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Outlet', href: '/outlets' },
    { label: 'Testimoni', href: '/testimonies' },
    { label: 'Karir', href: '/careers' },
]

export const categories: Category[] = [
    {
        id: 0,
        value: 'all',
        label: 'Semua',
        icon: 'UtensilsCrossed'
    },
    {
        id: 1,
        value: 'foods',
        label: 'Makanan',
        icon: 'Salad'

    },
    {
        id: 2,
        value: 'drinks',
        label: 'Minuman',
        icon: 'Wine'
    },
    {
        id: 3,
        value: 'other',
        label: 'Lainnya',
        icon: 'CircleEllipsis'
    },
];

export const menuItems: MenuItem[] = [
    {
        id: 1,
        category_id: 1,
        img: '/images/ab1.png',
        title: 'Nasi Goreng Spesial',
        description: 'Nasi goreng dengan telur, ayam suwir, dan bumbu rahasia.',
        price: 28000,
    },
    {
        id: 2,
        category_id: 1,
        img: '/images/ab1.png',
        title: 'Ayam Bakar Madu',
        description: 'Ayam bakar lezat dengan saus madu dan sambal kecap.',
        price: 35000,
    },
    {
        id: 3,
        category_id: 1,
        img: '/images/ab1.png',
        title: 'Sate Lilit Bali',
        description: 'Sate lilit khas Bali dengan bumbu rempah lengkap.',
        price: 32000,
    },
    {
        id: 4,
        category_id: 2,
        img: '/images/ab1.png',
        title: 'Es Teh Manis',
        description: 'Minuman segar dengan teh pilihan dan gula kelapa.',
        price: 12000,
    },
    {
        id: 5,
        category_id: 2,
        img: '/images/ab1.png',
        title: 'Jus Jeruk Segar',
        description: 'Jus jeruk asli dengan es batu untuk kesegaran maksimal.',
        price: 18000,
    },
    {
        id: 6,
        category_id: 2,
        img: '/images/ab1.png',
        title: 'Kopi Tubruk',
        description: 'Kopi tubruk kuat dengan aroma rempah yang khas.',
        price: 15000,
    },
    {
        id: 7,
        category_id: 3,
        img: '/images/ab1.png',
        title: 'Keripik Kentang',
        description: 'Keripik kentang renyah sebagai cemilan ringan.',
        price: 15000,
    },
    {
        id: 8,
        category_id: 3,
        img: '/images/ab1.png',
        title: 'Pisang Goreng',
        description: 'Pisang goreng hangat dengan taburan gula aren.',
        price: 20000,
    },
    {
        id: 9,
        category_id: 3,
        img: '/images/ab1.png',
        title: 'Es Krim Vanila',
        description: 'Es krim vanila lembut dengan topping cokelat.',
        price: 22000,
    },
];