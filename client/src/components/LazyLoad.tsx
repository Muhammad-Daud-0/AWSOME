/** @format */

import { Suspense, ReactNode } from "react";

interface LazyLoadProps {
	children: ReactNode;
	fallback?: ReactNode;
}

/**
 * LazyLoad Component - Wraps pages with Suspense for code splitting
 * Provides a loading state while the page component is being loaded
 */
export const LazyLoad = ({
	children,
	fallback = (
		<div className="flex items-center justify-center h-screen">
			<div className="space-y-4 text-center">
				<div className="inline-flex gap-2">
					<div
						className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
						style={{ animationDelay: "0ms" }}
					/>
					<div
						className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
						style={{ animationDelay: "150ms" }}
					/>
					<div
						className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
						style={{ animationDelay: "300ms" }}
					/>
				</div>
				<p className="text-gray-500 text-sm font-medium">Loading page...</p>
			</div>
		</div>
	),
}: LazyLoadProps) => {
	return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazyLoad;
