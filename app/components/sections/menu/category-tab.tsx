import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { LucideIcon } from '~/components/icon';
import { MenuItemCard } from '~/components/menu-item-card';
import { categories, menuItems } from '~/lib/data';

export function CategoryTab() {
    // 1. Buat state untuk melacak tab mana yang sedang aktif
    const [activeTab, setActiveTab] = useState(categories[0]?.value || 'all');

    if (!categories || categories.length === 0) {
        return <div>Data kategori tidak ditemukan.</div>;
    }

    // 2. Cari data kategori terpilih
    const currentCategory = categories.find((c) => c.value === activeTab);

    // 3. Filter items HANYA untuk kategori yang sedang aktif
    const categoryItems = activeTab === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category_id === currentCategory?.id);

    return (
        <Tabs
            value={activeTab}
            onValueChange={setActiveTab} // 4. Update state saat tab diklik
            className={'w-full items-center'}
        >
            <TabsList variant={'line'} className={'gap-4 w-full lg:w-auto grid grid-cols-2 lg:flex h-auto!'}>
                {categories.map((el) => (
                    <TabsTrigger
                        key={el.value}
                        value={el.value}
                        className={'after:bg-primary data-active:text-primary! uppercase'}
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
                            img={item.img}
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