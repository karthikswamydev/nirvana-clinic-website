import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Ease curve similar to common clinic / Elementor-style reveals */
const easeReveal = [0.16, 1, 0.3, 1] as const;

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    /** Stagger index for sibling reveals */
    delay?: number;
    /** Vertical travel in px — Priyam-style sections use a noticeable lift */
    y?: number;
};

export function ScrollReveal({
    children,
    className,
    delay = 0,
    y = 44,
}: ScrollRevealProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: easeReveal }}
            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.15 }}
        >
            {children}
        </motion.div>
    );
}
