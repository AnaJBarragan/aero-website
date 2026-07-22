import { useState } from 'react';

const interestOptions = [
	'Aerodynamics',
	'Structures',
	'Propulsion',
	'Avionics',
	'Manufacturing',
	'Business & Outreach',
];

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [university, setUniversity] = useState('University of Ottawa');
	const [degree, setDegree] = useState('');
	const [interest, setInterest] = useState(interestOptions[0]);
	const [message, setMessage] = useState('');

	const onSend = () => {
		const subject = encodeURIComponent(`Interested in uOAeronautics — ${name || 'New contact'}`);
		const bodyLines = [
			`Name: ${name}`,
			`Email: ${email}`,
			`University: ${university}`,
			`Degree/Program: ${degree}`,
			`Area of Interest: ${interest}`,
			'',
			message,
		];
		const body = encodeURIComponent(bodyLines.join('\n'));
		window.location.href = `mailto:aeronautics@uottawa.ca?subject=${subject}&body=${body}`;
	};

	return (
		<div className="card gap-4.5 p-8 shadow-md">
			<div className="field">
				<label>Name</label>
				<input
					className="input"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Jane Smith"
				/>
			</div>
			<div className="field">
				<label>Email</label>
				<input
					className="input"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="jane.smith@uottawa.ca"
				/>
			</div>
			<div className="grid grid-cols-2 gap-3.5">
				<div className="field">
					<label>University</label>
					<input className="input" type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
				</div>
				<div className="field">
					<label>Degree / Program</label>
					<input
						className="input"
						type="text"
						value={degree}
						onChange={(e) => setDegree(e.target.value)}
						placeholder="e.g. Mechanical Engineering"
					/>
				</div>
			</div>
			<div className="field">
				<label>Area of Interest</label>
				<select className="input" value={interest} onChange={(e) => setInterest(e.target.value)}>
					{interestOptions.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
			<div className="field">
				<label>Message</label>
				<textarea
					className="input"
					rows={4}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Tell us a bit about yourself..."
				/>
			</div>
			<button type="button" className="btn btn-primary btn-block" onClick={onSend}>
				Send Email &rarr;
			</button>
		</div>
	);
}
