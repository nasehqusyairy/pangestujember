import type { Category } from '../types';

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
