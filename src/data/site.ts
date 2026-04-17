export const site = {
	name: 'Consti Ertel',
	brand: 'CE',
	tagline: 'Equity research, analytical systems, and machine learning projects.',
	description:
		'Consti Ertel is a personal site combining editorial equity research, analytics work, and a portfolio of machine learning projects.',
	email: 'hello@constiertel.com',
	footerNote:
		'A personal portfolio and publishing platform for long-form research, market notes, and analytical builds.',
	socialLinks: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/constiertel/' },
		{ label: 'GitHub', href: 'https://github.com/ConstiX' },
		{ label: 'Email', href: 'mailto:hello@constiertel.com' },
	],
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Research', href: '/research' },
	{ label: 'Projects', href: '/projects' },
];

export const projects = [
	{
		title: 'Market Narrative Engine',
		category: 'NLP / Research Workflow',
		description:
			'A writing pipeline that turns earnings transcripts, company filings, and KPI tables into draft investment memos with traceable source excerpts.',
		href: 'https://github.com/ConstiX',
	},
	{
		title: 'Factor Dashboard',
		category: 'Analytics / Portfolio Tools',
		description:
			'An interactive dashboard for screening companies by quality, valuation, and revision signals with an emphasis on explainability rather than black-box scores.',
		href: 'https://github.com/ConstiX',
	},
	{
		title: 'Forecasting Sandbox',
		category: 'ML / Time Series',
		description:
			'A collection of experiments for demand, revenue, and scenario forecasting using probabilistic models and lightweight evaluation tooling.',
		href: 'https://github.com/ConstiX',
	},
];
