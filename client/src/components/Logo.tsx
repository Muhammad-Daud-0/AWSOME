/** @format */

interface LogoProps {
	size?: "sm" | "md" | "lg" | "xl";
	className?: string;
}

const sizeMap = {
	sm: "w-8 h-8",
	md: "w-10 h-10",
	lg: "w-12 h-12",
	xl: "w-14 h-14",
};

export const Logo = ({ size = "md", className = "" }: LogoProps) => {
	return (
		<div className={`${sizeMap[size]} ${className}`}>
			<img src="/favicon.ico" alt="AWSOME Logo" className="w-full h-full" />
		</div>
	);
};

export default Logo;
