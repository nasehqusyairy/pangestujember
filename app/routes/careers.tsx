import { Jumbotron } from "~/components/jumbotron";
import type { Career } from "../lib/data";
import { CareerCard } from "~/components/career-card";
import { fetchSheet } from "~/.server/utils";

export const loader = async () => {
    const careers = await fetchSheet<Career>('careers')
    return { careers }
}

export default function Careers(props: {
    loaderData: Awaited<ReturnType<typeof loader>>
}) {

    return (
        <>
            <Jumbotron title="Karir" />
            <section className="py-8">
                <div className="container mx-auto space-y-4">
                    {props.loaderData.careers.map((c) => <CareerCard career={c} key={c.id} />)}
                </div>
            </section>
        </>
    );
}