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

// constants
export const CART_STORAGE_KEY = "pangestujember_cart";
export const WHATSAPP_NUMBER = "6285855747776";

// data
export const navlinks: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Outlet', href: '/outlets' },
    // { label: 'Testimoni', href: '/testimonies' },
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

export const outlets: Outlet[] = [
    {
        id: 1,
        title: 'Pangestu Jember - Pusat',
        address: 'Jl. Merdeka No.1, Kota Jember',
        phone: '628123456789',
        hours: '09:00 - 21:00',
        location_previews: [
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
        ],
        lat: -8.1719,
        lng: 113.7034,
    },
    {
        id: 2,
        title: 'Pangestu Jember - Timur',
        address: 'Jl. Diponegoro No.45, Sumbersari',
        phone: '628987654321',
        hours: '10:00 - 22:00',
        location_previews: [
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
        ],
        lat: -8.1600,
        lng: 113.7030,
    },
    {
        id: 3,
        title: 'Pangestu Jember - Barat',
        address: 'Komplek Ruko Barat No.3, Rambipuji',
        phone: '6281122334455',
        hours: '08:00 - 20:00',
        location_previews: [
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
            '/images/ab1.png',
        ],
        lat: -8.1900,
        lng: 113.6900,
    },
];

export type Career = {
    id: number
    title: string
    outlet_id: number
    time: 'Full Time' | 'Part Time' | string
    description: string
    requirements: string[]
}

export const careers: Career[] = [
    {
        id: 1,
        title: 'Chef de Partie',
        outlet_id: 1,
        time: 'Full Time',
        description: 'Bertanggung jawab atas stasiun masakan, memastikan kualitas dan konsistensi menu.',
        requirements: [
            'Pengalaman minimal 2 tahun di posisi serupa',
            'Bisa bekerja di bawah tekanan',
            'Memahami standar kebersihan dapur',
        ],
    },
    {
        id: 2,
        title: 'Barista',
        outlet_id: 2,
        time: 'Part Time',
        description: 'Menyiapkan minuman kopi dan non-kopi serta melayani pelanggan di outlet.',
        requirements: [
            'Menyukai kopi dan hospitality',
            'Komunikatif dan ramah terhadap pelanggan',
        ],
    },
    {
        id: 3,
        title: 'Kasir / Frontliner',
        outlet_id: 3,
        time: 'Full Time',
        description: 'Mengelola transaksi, menerima pesanan, dan memastikan pengalaman pelanggan menyenangkan.',
        requirements: [
            'Teliti dan cepat menghitung',
            'Mampu menggunakan sistem kasir dasar',
        ],
    },
]

// indexes
export const favoriteMenus = [2, 3, 5, 8]