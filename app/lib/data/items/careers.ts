import type { Career } from '../types';

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
];
