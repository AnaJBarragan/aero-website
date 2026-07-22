import { useState } from 'react';
import ImagePlaceholderReact from './ImagePlaceholderReact';

interface Stat {
	label: string;
	value: string;
}

interface Aircraft {
	name: string;
	category: string;
	desc: string;
	stats: Stat[];
}

interface YearGroup {
	key: string;
	label: string;
	aircraft: Aircraft[];
}

const years: YearGroup[] = [
	{
		key: '2026-2027',
		label: '2026–2027',
		aircraft: [
			{
				name: 'Talon III',
				category: 'Advanced Class',
				desc: "In development: targeting a further weight reduction and a new high-lift wing for next season's mission.",
				stats: [
					{ label: 'Target Wingspan', value: '2.5 m' },
					{ label: 'Target Empty Weight', value: '3.5 kg' },
					{ label: 'Target Payload', value: '8.0 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
			{
				name: 'Kestrel I',
				category: 'Regular Class',
				desc: 'Our new Regular Class program: a foundational airframe for building manufacturing and testing experience.',
				stats: [
					{ label: 'Target Wingspan', value: '2.1 m' },
					{ label: 'Target Empty Weight', value: '3.0 kg' },
					{ label: 'Target Payload', value: '4.5 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
		],
	},
	{
		key: '2025-2026',
		label: '2025–2026',
		aircraft: [
			{
				name: 'Talon II',
				category: 'Advanced Class',
				desc: 'A refined successor with a redesigned wing structure and lighter composite fuselage for improved payload efficiency.',
				stats: [
					{ label: 'Wingspan', value: '2.5 m' },
					{ label: 'Empty Weight', value: '3.8 kg' },
					{ label: 'Payload Capacity', value: '7.5 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
			{
				name: 'Wren II',
				category: 'Micro Class',
				desc: 'Second-generation Micro entry with a simplified assembly process and improved control authority.',
				stats: [
					{ label: 'Wingspan', value: '0.85 m' },
					{ label: 'Empty Weight', value: '0.55 kg' },
					{ label: 'Payload Capacity', value: '0.45 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
		],
	},
	{
		key: '2024-2025',
		label: '2024–2025',
		aircraft: [
			{
				name: 'Talon I',
				category: 'Advanced Class',
				desc: 'Our first Advanced Class entry: a high-wing monoplane optimized for maximum payload carriage within the mission weight limits.',
				stats: [
					{ label: 'Wingspan', value: '2.4 m' },
					{ label: 'Empty Weight', value: '4.1 kg' },
					{ label: 'Payload Capacity', value: '6.8 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
			{
				name: 'Wren I',
				category: 'Micro Class',
				desc: 'A compact Micro Class airframe engineered to squeeze maximum performance out of a tight size and weight envelope.',
				stats: [
					{ label: 'Wingspan', value: '0.9 m' },
					{ label: 'Empty Weight', value: '0.6 kg' },
					{ label: 'Payload Capacity', value: '0.4 kg' },
					{ label: 'Powerplant', value: 'Electric, single motor' },
				],
			},
		],
	},
];

export default function AircraftTabs() {
	const [activeYear, setActiveYear] = useState(years[0].key);
	const current = years.find((y) => y.key === activeYear) ?? years[0];

	return (
		<>
			<div className="inline-flex border border-divider">
				{years.map((y) => {
					const isActive = y.key === activeYear;
					return (
						<button
							key={y.key}
							type="button"
							onClick={() => setActiveYear(y.key)}
							className={`border-r border-divider px-5.5 py-2.5 font-heading text-sm font-extrabold last:border-r-0 ${
								isActive ? 'bg-accent text-bg' : 'bg-transparent text-ink'
							}`}
						>
							{y.label}
						</button>
					);
				})}
			</div>

			<div className="mt-2">
				{current.aircraft.map((a) => (
					<div
						key={a.name}
						className="grid grid-cols-1 items-start gap-10 border-t-2 border-divider py-9 md:grid-cols-2"
					>
						<div className="grayscale">
							<ImagePlaceholderReact label={`${a.name} photo`} className="aspect-4/3 w-full" />
						</div>
						<div>
							<span className="tag tag-accent">{a.category}</span>
							<h3 className="mb-1.5 mt-3">{a.name}</h3>
							<p className="mb-5.5 max-w-[56ch] text-[15px] text-ink/60">{a.desc}</p>
							<div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4.5">
								{a.stats.map((s) => (
									<div key={s.label}>
										<p className="m-0 text-[11px] uppercase tracking-wide text-ink/60">{s.label}</p>
										<p className="mt-0.5 font-heading text-lg font-extrabold">{s.value}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
