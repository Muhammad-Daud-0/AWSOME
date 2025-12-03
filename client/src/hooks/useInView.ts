/** @format */

import { useRef, useEffect, useState } from "react";

interface UseInViewOptions {
	threshold?: number | number[];
	rootMargin?: string;
	triggerOnce?: boolean;
}

export const useInView = ({
	threshold = 0.1,
	rootMargin = "0px",
	triggerOnce = false,
}: UseInViewOptions) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);
	const [hasBeenInView, setHasBeenInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					setHasBeenInView(true);

					if (triggerOnce) {
						observer.unobserve(entry.target);
					}
				} else {
					if (!triggerOnce) {
						setIsInView(false);
					}
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [threshold, rootMargin, triggerOnce]);

	return {
		ref,
		isInView: triggerOnce ? hasBeenInView : isInView,
	};
};

export default useInView;
