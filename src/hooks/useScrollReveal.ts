import { useEffect, useRef, useState } from "react";

export function useScrollReveal(keys: readonly string[], threshold = 0.1) {
    const refs = useRef<Record<string, HTMLElement | null>>({});
    const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const observers = keys.map(key => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleMap(prev => ({ ...prev, [key]: true }));
                    observer.disconnect();
                }
            }, { threshold });

            const el = refs.current[key];
            if (el) observer.observe(el);
            return observer;
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const ref = (key: string) => (el: HTMLElement | null) => {
        refs.current[key] = el;
    };

    const visible = (key: string) => !!visibleMap[key];

    const cls = (key: string, base: string, anim = 'fade-up') =>
        `${base} ${anim}${visible(key) ? ' visible' : ''}`;

    return { ref, visible, cls };
}