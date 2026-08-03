import logo from "~/images/logo.png"

export function FooterSection() {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { name: 'Beranda', href: '#' },
        { name: 'Tentang', href: '#tentang' },
        { name: 'Menu', href: '#menu' },
        { name: 'Outlet', href: '#outlet' },
        { name: 'Testimoni', href: '#testimoni' },
        { name: 'Karir', href: '#karir' },
    ];

    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-white/10">

                    {/* Kolom 1: Branding */}
                    <div className="lg:col-span-2">
                        <img src={logo} alt="" className="size-12 inline-block me-4" />
                        <span className="text-2xl">
                            Pangestu
                        </span>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat perspiciatis laboriosam repudiandae est nesciunt voluptates tenetur fugit itaque, ad atque cupiditate vero odit adipisci ea sunt quis eius officiis. Harum!
                        </p>
                    </div>

                    <div></div>

                    {/* Kolom 2: Navigasi (Berbaris ke Bawah) */}
                    <div>
                        <h3 className="text-white font-bold text-lg">Navigasi</h3>
                        <ul>
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 3: Sosial Media Teks (Berbaris ke Bawah) */}
                    <div>
                        <h3 className="text-white font-bold text-lg">Hubungi Kami</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://wa.me/nomor-anda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/username-anda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bagian Bawah: Copyright */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm">
                    <div>
                        &copy; {currentYear} Restoran Pangestu. Seluruh hak cipta dilindungi undang-undang.
                    </div>
                    <div className="flex gap-4">
                        {/* <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat & Ketentuan</a> */}
                    </div>
                </div>

            </div>
        </footer>
    );
}