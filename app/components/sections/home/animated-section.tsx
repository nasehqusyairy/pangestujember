import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
};

export function AnimatedSection({
    children,
    className,
    delay = 0,
    y = 32,
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
