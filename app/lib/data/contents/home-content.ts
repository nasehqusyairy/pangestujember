import { aboutContent } from "./about-content";

export const homeContent = {
    hero: {
        title: 'Cita Rasa Otentik di Jember',
        paragraph: `Nikmati keajaiban bumbu tradisional yang diracik dengan penuh
                            cinta, membawa Anda ke dalam perjalanan rasa melintasi sejarah dan
                            tradisi Jawa Timur.`,
        backgroundImage: '/images/hero.png',
        actionButton: 'Pesan Sekarang',
    },
    aboutSection: {
        headingSmall: 'Tentang Kami',
        heading: aboutContent.sections[0].heading,
        paragraphs: aboutContent.sections[0].paragraphs,
        image: aboutContent.sections[0].image!
    },
    testimony: [
        {
            quote: 'Rawon Jember di sini benar-benar mengingatkan saya pada masakan nenek. Rempahnya begitu meresap dan dagingnya sangat empuk.',
            name: 'Andini Puspita',
            role: 'Food Blogger, Surabaya'
        },
        {
            quote: 'Pelayanan ramah dan suasana hangat membuat setiap kunjungan jadi berkesan.',
            name: 'Budi Santoso',
            role: 'Customer'
        },
        {
            quote: 'Rasa autentik dan porsi pas, selalu kembali setiap mudik.',
            name: 'Siti Aminah',
            role: 'Teacher'
        }
    ]
}
