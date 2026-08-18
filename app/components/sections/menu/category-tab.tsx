import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { LucideIcon } from '~/components/icon';
import { MenuItemCard } from '~/components/menu-item-card';
import type { Category, MenuItem } from '~/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export function CategoryTab(props: {
    menuItems: MenuItem[]
    categories: Category[]
}) {
    // 1. Buat state untuk melacak tab mana yang sedang aktif
    const [activeTab, setActiveTab] = useState(props.categories[0]?.label || 'Semua Kategori');

    if (!props.categories || props.categories.length === 0) {
        return <div>Data kategori tidak ditemukan.</div>;
    }

    // 2. Cari data kategori terpilih
    const currentCategory = props.categories.find((c) => c.label === activeTab);

    // 3. Filter items HANYA untuk kategori yang sedang aktif
    const categoryItems = activeTab === 'Semua Kategori'
        ? props.menuItems
        : props.menuItems.filter((item) => item.category_id === currentCategory?.id);

    return (
        <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
        >
            <div className="block lg:hidden mb-4">
                <Select value={activeTab} onValueChange={(val) => setActiveTab(val || 'Semua Kategori')}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                        {props.categories.map((el, i) => (
                            <SelectItem key={i} value={el.label}>
                                <div className="flex items-center gap-2">
                                    <LucideIcon icon={el.icon} className="size-4" />
                                    <span>{el.label}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* --- UI TABSLIST (Tampil di Layar Besar: >= lg) --- */}
            <TabsList
                variant={'line'}
                className={'hidden lg:flex gap-x-0 w-auto h-auto! border-b'}
            >
                {props.categories.map((el, i) => (
                    <TabsTrigger
                        key={i}
                        value={el.label}
                        className={'after:bg-primary data-active:text-primary! uppercase not-first:border-l-input rounded-none'}
                    >
                        <LucideIcon icon={el.icon} className="size-6" />
                        <span>{el.label}</span>
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* 5. Cukup gunakan SATU TabsContent dinamis */}
            <TabsContent value={activeTab} className="pt-4 w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
                    {categoryItems.map((item) => (
                        <MenuItemCard
                            key={item.id}
                            id={item.id}
                            img_url={item.img_url}
                            price={item.price}
                            description={item.description}
                            title={item.title}
                        />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}