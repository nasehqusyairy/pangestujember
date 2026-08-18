import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import type { Career } from "../lib/data";

export function CareerCard(props: {
    career: Career
}) {
    return (
        <Card key={props.career.id} className="bg-white shadow-sm border border-gray-100 rounded-lg p-2">
            {/* Top Section: Header & Action Button */}
            <CardHeader className="p-6 pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-primary font-semibold">
                            {props.career.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                {props.career.outlet_title}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                {props.career.is_fulltime ? 'Full Time' : 'Part Time'}
                            </span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-wider font-medium px-6"
                    >
                        Lamar Sekarang
                    </Button>
                </div>
            </CardHeader>

            <hr className="border-t border-gray-100 mx-6 my-2" />

            {/* Bottom Section: Requirements & Role Description */}
            <CardContent className="p-6 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Requirements */}
                <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-secondary">
                        Persyaratan
                    </h4>
                    <ul className="space-y-3">
                        {props.career.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: Role Description */}
                <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-secondary">
                        Deskripsi Peran
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {props.career.description}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}