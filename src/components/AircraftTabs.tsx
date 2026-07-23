import { useState } from 'react';

import Adv2026RenderFront from '@public/images/site/adv-2026-render-front.webp';
import Micro2026SittingOnSnow from '@public/images/site/micro-2026-sitting-on-snow.webp';
import Adv2025LongshotGlamour from '@public/images/site/adv-2025-longshot-glamour.webp';
import MicroOnTheConcrete from '@public/images/site/micro-on-the-concrete.webp';

interface Stat {
	label: string;
	value: string;
}

interface Aircraft {
	name: string;
	category: string;
	desc: string;
	img: string;
	stats: Stat[];
}

interface YearGroup {
	key: string;
	label: string;
	aircraft: Aircraft[];
}

const years: YearGroup[] = [
	{
		key: '2026',
		label: '2026',
		aircraft: [
			{
				name: 'Starling',
				category: 'Advanced Class',
				desc: 'A hybrid fixed-wing platform with vertical takeoff capability for autonomous aerial missions — the next iteration of our previous platform, Project Longshot. Starling uses a fixed-wing tilt-rotor tri-copter configuration for stable forward flight with controlled VTOL transitions.',
				img: Adv2026RenderFront.src,
				stats: [
					{ label: 'Configuration', value: 'Tilt-rotor tri-copter VTOL' },
					{ label: 'Structure', value: '3D-printed skin, wood fuselage' },
					{ label: 'Wing', value: 'Fully 3D-printed' },
					{ label: 'Predecessor', value: 'Project Longshot' },
				],
			},
			{
				name: 'SG32C',
				category: 'Micro Class',
				desc: 'Officially "Sneaky Golem 3.2 Cycle" — a high-lift payload aircraft built around a lightweight twin-boom taildragger configuration, optimized for short takeoff and maximum payload capacity. Placed 6th Overall and 3rd in Technical Presentation at SAE Aero Design East.',
				img: Micro2026SittingOnSnow.src,
				stats: [
					{ label: 'Configuration', value: 'High-wing twin-boom taildragger' },
					{ label: 'Airfoil', value: 'CH10' },
					{ label: 'Structure', value: 'Foam, carbon fibre, 3D-printed' },
					{ label: 'Result', value: '6th overall, SAE Aero Design East' },
				],
			},
		],
	},
	{
		key: '2025',
		label: '2025',
		aircraft: [
			{
				name: 'Longshot',
				category: 'Advanced Class',
				desc: 'Designed for autonomous payload delivery and capture via VTOL and conventional flight. Built around a carbon fibre rod and 3D-printed spline frame with a fully 3D-printed wing, powered by three T-Motor MN2806 units with vectored front motors for vertical lift.',
				img: Adv2025LongshotGlamour.src,
				stats: [
					{ label: 'Wingspan', value: '1.2 m' },
					{ label: 'Length', value: '0.97 m' },
					{ label: 'Empty Mass', value: '1.5 kg' },
					{ label: 'Flight Controller', value: 'Pixhawk 6C / ArduPilot' },
				],
			},
			{
				name: 'UOAN-M25',
				category: 'Micro Class',
				desc: 'A lightweight, modular platform built for performance and rapid assembly, featuring a cropped delta wing and T-tail layout. The airframe is a carbon fibre skeleton housed in a CNC-machined EPS foam body, powered by an E-flite Power 10 motor.',
				img: MicroOnTheConcrete.src,
				stats: [
					{ label: 'Wingspan', value: '1.0 m' },
					{ label: 'Length', value: '1.2 m' },
					{ label: 'Empty Mass', value: '1.3 kg' },
					{ label: 'Motor', value: 'E-flite Power 10' },
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
							<img src={a.img} alt={`${a.name} photo`} className="aspect-4/3 w-full object-cover" />
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
