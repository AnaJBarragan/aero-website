import { useState } from 'react';

const interestOptions = ['Financial sponsorship', 'In-kind donation', 'Both', 'Other'];

export default function PartnerForm() {
	const [company, setCompany] = useState('');
	const [contactName, setContactName] = useState('');
	const [email, setEmail] = useState('');
	const [interest, setInterest] = useState(interestOptions[0]);
	const [message, setMessage] = useState('');

	const onSend = () => {
		const subject = encodeURIComponent(`Sponsorship inquiry — ${company || 'New partner'}`);
		const bodyLines = [
			`Company: ${company}`,
			`Contact: ${contactName}`,
			`Email: ${email}`,
			`Sponsorship Interest: ${interest}`,
			'',
			message,
		];
		const body = encodeURIComponent(bodyLines.join('\n'));
		window.location.href = `mailto:aeronautics@uottawa.ca?subject=${subject}&body=${body}`;
	};

	return (
		<div className="card gap-4.5 p-8 shadow-md">
			<div className="field">
				<label>Company Name</label>
				<input
					className="input"
					type="text"
					value={company}
					onChange={(e) => setCompany(e.target.value)}
					placeholder="Acme Aerospace Inc."
				/>
			</div>
			<div className="grid grid-cols-2 gap-3.5">
				<div className="field">
					<label>Contact Person</label>
					<input
						className="input"
						type="text"
						value={contactName}
						onChange={(e) => setContactName(e.target.value)}
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
						placeholder="jane.smith@acme.com"
					/>
				</div>
			</div>
			<div className="field">
				<label>Sponsorship Interest</label>
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
					placeholder="Tell us about your organization and how you'd like to support the team..."
				/>
			</div>
			<button type="button" className="btn btn-primary btn-block" onClick={onSend}>
				Send Inquiry &rarr;
			</button>
		</div>
	);
}
