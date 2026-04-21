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
		{ label: 'Resume', href: '/Ertel_Constantin_Resume.pdf' },
	],
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Essays', href: '/essays' },
	{ label: 'Equity Research', href: '/research' },
	{ label: 'Projects', href: '/projects' },
];

export interface Project {
	title: string;
	category: string;
	summary: string;
	description: string;
	href: string;
	liveHref?: string;
	year: string;
	status: string;
	stack: string[];
	highlights: string[];
	metric: {
		label: string;
		value: string;
	};
	visualNote: string;
	accent: string;
	accentSoft: string;
	surface: string;
	previewImage?: string;
}

export const projects: Project[] = [
	{
		title: 'Fincast',
		category: 'Fintech / AI Application',
		summary:
			'AI-assisted valuation workflows for public equities, with scenario modeling, fair value outputs, and live market context in one interface.',
		description:
			'A financial valuation platform built with Next.js and Claude AI. Enter any stock ticker, choose DCF or exit-multiple analysis (P/E, EV/EBITDA, EV/FCF, EV/Sales), and get AI-generated 5-year projections, fair value estimates, and upside-to-current-price calculations — all powered by real-time market data and the Anthropic API.',
		href: 'https://github.com/ConstantinVictorBeatErtel/fincast',
		liveHref: 'https://fincast-agent.vercel.app/',
		year: '2026',
		status: 'Live product',
		stack: ['Next.js', 'Anthropic API', 'Market data', 'Valuation models'],
		highlights: [
			'Supports DCF and multiple-based valuation workflows without forcing users into a spreadsheet.',
			'Pairs financial logic with AI-generated forward assumptions to speed up first-pass modeling.',
			'Built as a usable investor tool rather than a demo-first AI wrapper.',
		],
		metric: {
			label: 'Core flow',
			value: 'DCF + multiples',
		},
		visualNote: 'A live workflow for moving from ticker to valuation narrative in a single pass.',
		accent: '#a96d2f',
		accentSoft: 'rgba(169, 109, 47, 0.16)',
		surface: 'linear-gradient(145deg, rgba(169, 109, 47, 0.2), rgba(255, 255, 255, 0.18))',
		previewImage: '/fincast-preview.jpg',
	},
	{
		title: 'JEPA Experiment',
		category: 'ML / Self-Supervised Learning',
		summary:
			'A research comparison of representation-learning objectives, testing whether JEPA-style prediction produces more useful embeddings than reconstruction.',
		description:
			'A PyTorch research comparison of two self-supervised vision objectives: JEPA latent prediction versus masked-patch reconstruction (MAE-style). Uses a small Vision Transformer on CIFAR-10 with evaluation across linear probing, retrieval, anomaly detection, and embedding visualization — finding JEPA yields more perturbation-invariant representations while MAE performs stronger on linear probe accuracy.',
		href: 'https://github.com/ConstantinVictorBeatErtel/jepa-experiment',
		year: '2025',
		status: 'Research build',
		stack: ['PyTorch', 'Vision Transformer', 'CIFAR-10', 'Representation learning'],
		highlights: [
			'Benchmarks JEPA against MAE-style reconstruction instead of evaluating a single objective in isolation.',
			'Measures downstream usefulness through probing, retrieval, anomaly detection, and embedding inspection.',
			'Surfaces a practical tradeoff between invariance and top-line probe accuracy.',
		],
		metric: {
			label: 'Research lens',
			value: 'JEPA vs. MAE',
		},
		visualNote: 'A controlled test bed for comparing how different self-supervised objectives shape embeddings.',
		accent: '#496f8c',
		accentSoft: 'rgba(73, 111, 140, 0.16)',
		surface: 'linear-gradient(145deg, rgba(73, 111, 140, 0.22), rgba(255, 255, 255, 0.16))',
	},
	{
		title: 'Personalized Listing Photo Editing',
		category: 'ML / Generative AI',
		summary:
			'A compact personalization pipeline for learning a photographer-specific editing style without keeping a heavyweight generation model in production.',
		description:
			'A product-oriented ML prototype for personalized real-estate photo editing. Uses BLIP-2 for style discovery, FLUX.1 Kontext as a teacher model to generate content-preserving edits, and InstructPix2Pix with LoRA for student distillation — resulting in compact, photographer-specific adapters (~3 MB each) that reproduce a photographer\'s signature finish without running a heavyweight model at inference time.',
		href: 'https://github.com/ConstantinVictorBeatErtel/photo_styling',
		liveHref: 'https://photo-styling.streamlit.app/',
		year: '2025',
		status: 'Prototype',
		stack: ['BLIP-2', 'FLUX.1 Kontext', 'InstructPix2Pix', 'LoRA'],
		highlights: [
			'Starts from style discovery and ends with distilled, lightweight adapters for deployment.',
			'Preserves scene content while transferring the photographer’s own finish and visual language.',
			'Optimizes for product practicality by shrinking inference-time requirements to a few megabytes.',
		],
		metric: {
			label: 'Adapter size',
			value: '~3 MB',
		},
		visualNote: 'Student-teacher distillation aimed at preserving signature edits without heavyweight inference.',
		accent: '#7b6956',
		accentSoft: 'rgba(123, 105, 86, 0.16)',
		surface: 'linear-gradient(145deg, rgba(123, 105, 86, 0.22), rgba(255, 255, 255, 0.14))',
		previewImage: '/photo-preview.jpg',
	},
	{
		title: 'Tesla Manufacturing Cost Simulator',
		category: 'Analytics / Bayesian Modeling',
		summary:
			'A manufacturing scenario model that treats uncertainty like a first-class citizen instead of an afterthought bolted onto a point estimate.',
		description:
			'A Bayesian simulation (Project Aurora) comparing US, Mexico, and China manufacturing costs across raw materials, labor, logistics, FX, tariffs, and discrete risk events. Replaces hand-crafted Normal priors with data-driven Student-t and Beta posteriors fit to FRED economic series, producing wider, more realistic uncertainty intervals across all factory scenarios.',
		href: 'https://github.com/ConstantinVictorBeatErtel/Tesla_case_study',
		liveHref: 'https://project-aurora.streamlit.app/',
		year: '2024',
		status: 'Analytics model',
		stack: ['Bayesian simulation', 'FRED', 'Scenario analysis', 'Economic data'],
		highlights: [
			'Compares multi-country manufacturing footprints under tariffs, FX moves, logistics shifts, and event risk.',
			'Replaces simplistic priors with empirically fit posteriors from real macro series.',
			'Produces uncertainty bands that are more decision-useful than a single “expected” answer.',
		],
		metric: {
			label: 'Modeled regions',
			value: 'US / MX / CN',
		},
		visualNote: 'A macro-aware cost engine built to expose downside, variance, and scenario sensitivity.',
		accent: '#8f5b52',
		accentSoft: 'rgba(143, 91, 82, 0.16)',
		surface: 'linear-gradient(145deg, rgba(143, 91, 82, 0.22), rgba(255, 255, 255, 0.16))',
		previewImage: '/tesla-preview.jpg',
	},
	{
		title: 'Google Churn Case Study',
		category: 'Analytics / Business Intelligence',
		summary:
			'A churn investigation that ties behavioral patterns back to revenue exposure and an operational root cause the business can actually act on.',
		description:
			'A customer churn investigation for BizGrow, a SaaS platform, using BigQuery. Identified a "Poison Group" — large enterprise customers (50+ employees) onboarded from July 2023 onward — responsible for 80% of revenue loss and $29M in revenue at risk. Root cause: sales teams overselling multi-warehousing features before the product was stable, causing a 27% productivity drop at the four-month mark.',
		href: 'https://github.com/ConstantinVictorBeatErtel/google-churn-case-study',
		year: '2024',
		status: 'Case study',
		stack: ['BigQuery', 'Churn analysis', 'BI', 'Revenue diagnostics'],
		highlights: [
			'Segments churn by cohort quality instead of treating all customer loss as the same problem.',
			'Identifies a concentrated enterprise segment behind the majority of revenue damage.',
			'Connects the outcome back to a concrete go-to-market and product-readiness mismatch.',
		],
		metric: {
			label: 'Revenue at risk',
			value: '$29M',
		},
		visualNote: 'A business-intelligence case study centered on diagnosing a high-cost customer segment.',
		accent: '#3e6c60',
		accentSoft: 'rgba(62, 108, 96, 0.16)',
		surface: 'linear-gradient(145deg, rgba(62, 108, 96, 0.22), rgba(255, 255, 255, 0.16))',
	},
];
