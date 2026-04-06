import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const easeReveal = [0.16, 1, 0.3, 1] as const;

type AnimatedStatProps = {
    end: number;
    suffix: string;
    /** When true, shows one decimal before K (e.g. 2.5K+) */
    formatK?: boolean;
    className?: string;
};

export function AnimatedStat({ end, suffix, formatK, className }: AnimatedStatProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });
    const reduceMotion = useReducedMotion();
    const [value, setValue] = useState(reduceMotion ? end : 0);

    useEffect(() => {
        if (reduceMotion) {
            setValue(end);
            return;
        }
        if (!inView) return;

        const controls = animate(0, end, {
            duration: 2,
            ease: easeReveal,
            onUpdate: (v) => setValue(v),
        });
        return () => controls.stop();
    }, [inView, end, reduceMotion]);

    const text = formatK ? `${value.toFixed(1)}K${suffix}` : `${Math.round(value)}${suffix}`;

    return (
        <p ref={ref} className={className}>
            {text}
        </p>
    );
}
