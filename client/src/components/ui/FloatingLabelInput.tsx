/** @format */

import React from "react";

interface FloatingLabelInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: React.ReactNode;
	error?: string;
}

const FloatingLabelInput = React.forwardRef<
	HTMLInputElement,
	FloatingLabelInputProps
>(({ label, placeholder, error, className, ...props }, ref) => {
	const [isFilled, setIsFilled] = React.useState(
		!!props.value || !!props.defaultValue
	);

	return (
		<div className="space-y-1">
			<div
				className={`relative flex items-center border-[1.5px] rounded-lg transition-all duration-300 bg-white ${
					error ? "border-red-500" : "border-gray-200"
				} focus-within:border-purple-500 focus-within:shadow-[0_0_0_2px_rgba(109,40,217,0.1)] ${
					className || ""
				}`}>
				<input
					ref={ref}
					placeholder={placeholder || " "}
					className={`w-full h-14 px-4 pt-6 pb-3 bg-transparent text-gray-900 text-base focus:outline-none focus:ring-0 ${
						className || ""
					}`}
					onFocus={() => setIsFilled(true)}
					onBlur={(e) => setIsFilled(!!e.target.value)}
					onChange={(e) => {
						setIsFilled(!!e.target.value);
						props.onChange?.(e);
					}}
					{...props}
				/>
				{label && (
					<label
						className={`absolute left-4 pointer-events-none transition-all duration-300 origin-left inline-flex items-center gap-1 whitespace-nowrap z-10 ${
							isFilled
								? "-top-2.5 scale-95 text-sm font-semibold text-purple-600 px-2 py-1 border border-purple-600 rounded-full bg-white"
								: "top-1/2 -translate-y-1/2 scale-100 text-base font-normal text-gray-500"
						}`}>
						{label}
					</label>
				)}
			</div>
			{error && (
				<p className="text-red-500 text-xs font-medium pl-1">{error}</p>
			)}
		</div>
	);
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export default FloatingLabelInput;
