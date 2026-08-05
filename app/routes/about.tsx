import { Salad, Sprout, Utensils } from "lucide-react";
import { Jumbotron } from "~/components/jumbotron";

export default function About() {
    return (
        <>
            <Jumbotron title="Tentang Kami" />

            <section className="container mx-auto pt-24 pb-12">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="col-span-2 hidden lg:block">
                        <img src='/images/about.png' alt="About Image" className="w-full rounded-lg" />
                    </div>
                    <div className="col-span-3">
                        <h2 className="uppercase text-secondary text-xl mb-4">Ringkasan</h2>
                        <h3 className="text-primary text-4xl mb-8">Tradisi yang Tetap Terjaga</h3>
                        <p className=" mb-8 text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eaque nisi? Quis fugiat perspiciatis molestiae rem corrupti vitae commodi quo! Eaque aliquam sed illo voluptates nesciunt eius molestias placeat eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eaque nisi? Quis fugiat perspiciatis molestiae rem corrupti vitae commodi quo! Eaque aliquam sed illo voluptates nesciunt eius molestias placeat eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eaque nisi? Quis fugiat perspiciatis molestiae rem corrupti vitae commodi quo! Eaque aliquam sed illo voluptates nesciunt eius molestias placeat eos.
                        </p>
                        <p className="mb-8 text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut sed ex non, a vitae nihil aliquid neque placeat est harum eos repellendus cum tenetur nesciunt. Ipsam commodi aperiam repellendus?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut sed ex non, a vitae nihil aliquid neque placeat est harum eos repellendus cum tenetur nesciunt. Ipsam commodi aperiam repellendus?
                        </p>
                        <p className="mb-8 text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut sed ex non, a vitae nihil aliquid neque placeat est harum eos repellendus cum tenetur nesciunt. Ipsam commodi aperiam repellendus?
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="uppercase text-secondary text-xl mb-4">Motivasi</h2>
                        <h3 className="text-primary text-4xl mb-8">The Roots of Pangestu</h3>
                        <p className="text-xl mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde quo assumenda quos id vero pariatur, ipsum iste at possimus esse repellendus nam corporis laboriosam quibusdam atque voluptas aut ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dolor nisi? Est neque quam vero distinctio itaque quaerat deleniti necessitatibus possimus sit temporibus, eius enim, nemo magni laudantium impedit aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt similique qui eaque error earum, laudantium quam eum harum quasi voluptatibus provident aut neque reprehenderit, sapiente beatae dolore iste laborum accusamus?
                        </p>
                        <p className="text-xl text-foreground/80 border-secondary border-s-4 italic ps-4">
                            "
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque pariatur laborum officiis odit deleniti ratione sit quam omnis! Corporis quidem saepe aliquid cum fugit? Commodi natus maxime iusto odio libero.
                            "
                        </p>
                    </div>
                    <div className="hidden lg:flex gap-4 items-center w-full">
                        <img className="rounded-lg w-full" src="/images/ab2.png" alt="ab2" />
                        <img className="rounded-lg w-full" src="/images/ab1.png" alt="ab1" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-card">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="uppercase text-secondary text-xl mb-4">Komitmen</h2>
                        <h3 className="text-primary text-4xl mb-12">Memberikan yang Terbaik</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white border rounded grid gap-8 lg:grid-cols-7 p-12 items-center">
                            <div className="col-span-4">
                                <Sprout className="text-primary size-8 mb-4" />
                                <h4 className="text-primary mb-4 text-2xl">Lorem Ipsum Dolor</h4>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum voluptatum optio. Assumenda non delectus debitis nesciunt eos, omnis ex molestias ut totam, fugit facere qui, nostrum magni id!
                                </p>
                            </div>
                            <div className="col-span-3">
                                <img src="/images/ab3.png" alt="ab3" className="w-full rounded" />
                            </div>
                        </div>
                        <div className="bg-primary text-primary-foreground border border-primary rounded p-12">
                            <div>
                                <Utensils className="text-secondary-foreground size-8 mb-4" />
                                <h4 className="mb-4 text-2xl">Lorem Ipsum Dolor</h4>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum voluptatum optio. Assumenda non delectus debitis nesciunt eos, omnis ex molestias ut totam, fugit facere qui, nostrum magni id!
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border rounded p-12">
                            <div>
                                <Salad className="text-primary size-8 mb-4" />
                                <h4 className="text-primary mb-4 text-2xl">Lorem Ipsum Dolor</h4>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum voluptatum optio. Assumenda non delectus debitis nesciunt eos, omnis ex molestias ut totam, fugit facere qui, nostrum magni id!
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-secondary-foreground text-secondary border border-secondary/20 rounded grid gap-8 lg:grid-cols-7 p-12 items-center">
                            <div className="col-span-3">
                                <img src="/images/ab4.png" alt="ab3" className="w-full rounded" />
                            </div>
                            <div className="col-span-4">
                                <h4 className="mb-4 text-2xl">Lorem Ipsum Dolor</h4>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum voluptatum optio. Assumenda non delectus debitis nesciunt eos, omnis ex molestias ut totam, fugit facere qui, nostrum magni id!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}