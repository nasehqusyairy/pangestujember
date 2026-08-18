import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

type ZoomableImageProps = React.ComponentProps<"img"> & {
    overlayClassName?: string;
    closeButtonClassName?: string;
};

export function ZoomableImage({
    className,
    overlayClassName,
    closeButtonClassName,
    ...props
}: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <img
                {...props}
                className={cn(
                    "w-full cursor-pointer object-cover transition-transform duration-200 hover:scale-105",
                    className
                )}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 grid place-items-center bg-black/70 p-4",
                        overlayClassName
                    )}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-h-full max-w-full"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={props.src}
                            alt={props.alt ?? "Zoomed preview"}
                            className="max-h-[90vh] max-w-[90vw] rounded object-contain"
                        />
                        <Button
                            className={cn("absolute right-0 top-0 m-4", closeButtonClassName)}
                            onClick={() => setIsOpen(false)}
                        >
                            Tutup
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
