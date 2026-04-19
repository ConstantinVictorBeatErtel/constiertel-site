export const site = {
	name: 'Consti Ertel',
	brand: 'CE',
	tagline: 'Equity research, analytical systems, and machine learning projects.',
	description:
		'Consti Ertel is a personal site combining editorial equity research, analytics work, and a portfolio of machine learning projects.',
	email: 'constantinertel@berkeley.edu',
	footerNote:
		'A personal portfolio and publishing platform for long-form research, market notes, and analytical builds.',
	socialLinks: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/constantin-ertel/' },
		{ label: 'GitHub', href: 'https://github.com/ConstantinVictorBeatErtel' },
		{ label: 'Email', href: 'mailto:constantinertel@berkeley.edu' },
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
		title: 'Fincast',
		category: 'Fintech / AI Application',
		description:
			'A financial valuation platform built with Next.js and Claude AI. Enter any stock ticker, choose DCF or exit-multiple analysis (P/E, EV/EBITDA, EV/FCF, EV/Sales), and get AI-generated 5-year projections, fair value estimates, and upside-to-current-price calculations — all powered by real-time market data and the Anthropic API.',
		href: 'https://github.com/ConstantinVictorBeatErtel/fincast',
		liveHref: 'https://fincast-agent.vercel.app/',
	},
	{
		title: 'JEPA Experiment',
		category: 'ML / Self-Supervised Learning',
		description:
			'A PyTorch research comparison of two self-supervised vision objectives: JEPA latent prediction versus masked-patch reconstruction (MAE-style). Uses a small Vision Transformer on CIFAR-10 with evaluation across linear probing, retrieval, anomaly detection, and embedding visualization — finding JEPA yields more perturbation-invariant representations while MAE performs stronger on linear probe accuracy.',
		href: 'https://github.com/ConstantinVictorBeatErtel/jepa-experiment',
	},
	{
		title: 'Personalized Listing Photo Editing',
		category: 'ML / Generative AI',
		description:
			'A product-oriented ML prototype for personalized real-estate photo editing. Uses BLIP-2 for style discovery, FLUX.1 Kontext as a teacher model to generate content-preserving edits, and InstructPix2Pix with LoRA for student distillation — resulting in compact, photographer-specific adapters (~3 MB each) that reproduce a photographer\'s signature finish without running a heavyweight model at inference time.',
		href: 'https://github.com/ConstantinVictorBeatErtel/photo_styling',
	},
	{
		title: 'Tesla Manufacturing Cost Simulator',
		category: 'Analytics / Bayesian Modeling',
		description:
			'A Bayesian simulation (Project Aurora) comparing US, Mexico, and China manufacturing costs across raw materials, labor, logistics, FX, tariffs, and discrete risk events. Replaces hand-crafted Normal priors with data-driven Student-t and Beta posteriors fit to FRED economic series, producing wider, more realistic uncertainty intervals across all factory scenarios.',
		href: 'https://github.com/ConstantinVictorBeatErtel/Tesla_case_study',
	},
	{
		title: 'Google Churn Case Study',
		category: 'Analytics / Business Intelligence',
		description:
			'A customer churn investigation for BizGrow, a SaaS platform, using BigQuery. Identified a "Poison Group" — large enterprise customers (50+ employees) onboarded from July 2023 onward — responsible for 80% of revenue loss and $29M in revenue at risk. Root cause: sales teams overselling multi-warehousing features before the product was stable, causing a 27% productivity drop at the four-month mark.',
		href: 'https://github.com/ConstantinVictorBeatErtel/google-churn-case-study',
	},
];
