import { useCallback, useRef } from "react";

type MagnetElement = HTMLElement | SVGSVGElement;

export function useMagneticRepel<T extends MagnetElement>(
    strength = 0.3,
    radius = 120
) {
    const elRef = useRef<T | null>(null);
    const animRef = useRef<number | null>(null);
    const currentOffset = useRef({ x: 0, y: 0 });
    const targetOffset = useRef({ x: 0, y: 0 });

    const animate = useCallback(() => {
        const dx = targetOffset.current.x - currentOffset.current.x;
        const dy = targetOffset.current.y - currentOffset.current.y;

        currentOffset.current.x += dx * 0.12;
        currentOffset.current.y += dy * 0.12;

        if (elRef.current) {
            elRef.current.style.setProperty('--magnet-x', `${currentOffset.current.x}px`);
            elRef.current.style.setProperty('--magnet-y', `${currentOffset.current.y}px`);
        }

        const isMoving = Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01;
        if (isMoving) {
            animRef.current = requestAnimationFrame(animate);
        } else {
            animRef.current = null;
        }
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!elRef.current) return;

        const rect = elRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
            const force = (1 - distance / radius) * strength * 100;
            targetOffset.current = {
                x: -(dx / distance) * force,
                y: -(dy / distance) * force,
            };
        } else {
            targetOffset.current = { x: 0, y: 0 };
        }

        if (!animRef.current) {
            animRef.current = requestAnimationFrame(animate);
        }
    }, [animate, strength, radius]);

    const onMouseLeave = useCallback(() => {
        targetOffset.current = { x: 0, y: 0 };
        if (!animRef.current) {
            animRef.current = requestAnimationFrame(animate);
        }
    }, [animate]);

    const ref = useCallback((el: T | null) => {
        if (elRef.current) {
            window.removeEventListener('mousemove', onMouseMove);
            elRef.current.removeEventListener('mouseleave', onMouseLeave);
        }

        elRef.current = el;

        if (el) {
            window.addEventListener('mousemove', onMouseMove);
            el.addEventListener('mouseleave', onMouseLeave);
        }
    }, [onMouseMove, onMouseLeave]);

    return ref;
}