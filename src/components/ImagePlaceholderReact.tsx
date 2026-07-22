interface Props {
	label: string;
	className?: string;
}

export default function ImagePlaceholderReact({ label, className = '' }: Props) {
	return (
		<div
			className={`relative flex items-center justify-center overflow-hidden bg-neutral-200 grayscale ${className}`}
		>
			<svg className="absolute inset-0 h-full w-full text-neutral-300" preserveAspectRatio="none" viewBox="0 0 100 100">
				<line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
				<line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
			</svg>
			<span className="relative px-3 text-center font-heading text-[11px] font-semibold uppercase tracking-wide text-neutral-600">
				{label}
			</span>
		</div>
	);
}
