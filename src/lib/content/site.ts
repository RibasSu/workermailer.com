export type FeatureItem = {
	icon: string;
	title: string;
	description: string;
	note: string;
};

export type ProviderStatus = 'stable' | 'under discussion';

export type ProviderItem = {
	name: string;
	status: ProviderStatus;
	icon: string;
	description: string;
	href?: string;
};

export type NavigationItem = {
	href: string;
	label: string;
	icon: string;
};

export type LibraryItem = {
	name: string;
	slug: string;
	icon: string;
	packageName: string;
	version: string;
	description: string;
	npmUrl: string;
	githubUrl: string;
	docsHref: string;
	docsManifestUrl: string;
	rawBaseUrl: string;
	blobBaseUrl: string;
	changelogUrl: string;
	highlights: string[];
};

export type ExampleCard = {
	title: string;
	status: 'stable';
	description: string;
	language: string;
	filename: string;
	code: string;
};

export type PipelineStage = {
	title: string;
	capability: string;
	description: string;
};

const snippet = String.raw;

export const site = {
	name: 'worker-mailer',
	tagline: 'Email for the Edge. SMTP and Resend on Cloudflare Workers.',
	description:
		'SMTP and Resend email delivery for Cloudflare Workers with Bun-first docs, TypeScript, queues, hooks, and EmDash-ready sandbox bundles.',
	url: 'https://workermailer.com',
	ogImage: '/og-worker-mailer.svg',
	githubUrl: 'https://github.com/worker-mailer',
	npmUrl: 'https://www.npmjs.com/org/workermailer',
	originalGithubUrl: 'https://github.com/zou-yu/worker-mailer',
	originalNpmUrl: 'https://www.npmjs.com/package/worker-mailer',
	originalAuthor: 'zou-yu',
	emdashUrl: 'https://emdashcms.com/',
	discussionUrl: 'https://github.com/emdash-cms/emdash/discussions/245',
	releaseLine: 'SMTP v0.1.4 • Resend v0.1.0',
	license: 'MIT'
} as const;

export const navigation: NavigationItem[] = [
	{ href: '/', label: 'Home', icon: 'home' },
	{ href: '/docs', label: 'Docs', icon: 'book-open' },
	{ href: '/libs', label: 'Libraries', icon: 'library' },
	{ href: '/examples', label: 'Examples', icon: 'terminal' },
	{ href: '/changelog', label: 'Changelog', icon: 'clock' },
	{ href: '/credits', label: 'Credits', icon: 'heart' },
	{ href: '/emdash', label: 'EmDash', icon: 'plug' }
];

export const libraries: LibraryItem[] = [
	{
		name: 'SMTP',
		slug: 'smtp',
		icon: 'server',
		packageName: '@workermailer/smtp',
		version: '0.1.4',
		description: 'SMTP client for Cloudflare Workers using TCP sockets, DSN, hooks, attachments, and queues.',
		npmUrl: 'https://www.npmjs.com/package/@workermailer/smtp',
		githubUrl: 'https://github.com/worker-mailer/smtp',
		docsHref: '/docs/smtp',
		docsManifestUrl: 'https://raw.githubusercontent.com/worker-mailer/smtp/master/docs/manifest.json',
		rawBaseUrl: 'https://raw.githubusercontent.com/worker-mailer/smtp/master/',
		blobBaseUrl: 'https://github.com/worker-mailer/smtp/blob/master/',
		changelogUrl: 'https://raw.githubusercontent.com/worker-mailer/smtp/master/CHANGELOG.md',
		highlights: [
			'TCP socket SMTP from Cloudflare Workers',
			'Hooks, DSN, attachments, CID, and queues',
			'Type-safe envelopes and auth modes'
		]
	},
	{
		name: 'Resend',
		slug: 'resend',
		icon: 'paper-plane',
		packageName: '@workermailer/resend',
		version: '0.1.0',
		description: 'Resend API client for Cloudflare Workers, aligned with @workermailer/smtp patterns.',
		npmUrl: 'https://www.npmjs.com/package/@workermailer/resend',
		githubUrl: 'https://github.com/worker-mailer/resend',
		docsHref: '/docs/resend',
		docsManifestUrl: 'https://raw.githubusercontent.com/worker-mailer/resend/master/docs/manifest.json',
		rawBaseUrl: 'https://raw.githubusercontent.com/worker-mailer/resend/master/',
		blobBaseUrl: 'https://github.com/worker-mailer/resend/blob/master/',
		changelogUrl: 'https://raw.githubusercontent.com/worker-mailer/resend/master/CHANGELOG.md',
		highlights: [
			'Fetch-based Resend delivery for Workers',
			'Shared envelope and queue patterns',
			'Optional Cloudflare Queues helpers'
		]
	}
];

export function getLibraryBySlug(slug: string): LibraryItem | undefined {
	return libraries.find((library) => library.slug === slug);
}

export const featureItems: FeatureItem[] = [
	{
		icon: 'server',
		title: 'Cloudflare-native SMTP',
		description:
			'Connect directly from a Worker using Cloudflare TCP sockets instead of pushing mail through a separate Node server.',
		note: 'A tighter delivery path with fewer moving parts at the edge.'
	},
	{
		icon: 'shield',
		title: 'Type-safe envelopes',
		description:
			'Typed transport and message options cover auth modes, DSN, attachments, headers, inline images, and queue payloads.',
		note: 'Safer refactors and faster editor feedback in Bun-first projects.'
	},
	{
		icon: 'image',
		title: 'HTML + inline assets',
		description:
			'Send plain text, HTML, classic attachments, and inline CID images without bolting on a second mailer abstraction.',
		note: 'Useful for onboarding flows, invoices, and system notifications.'
	},
	{
		icon: 'radar',
		title: 'Hooks and observability',
		description:
			'Lifecycle hooks and custom SMTP errors make it easier to trace connect, send, fail, and close events.',
		note: 'Helpful for retries, logging, and production diagnostics.'
	},
	{
		icon: 'layers',
		title: 'Queue-ready delivery',
		description:
			'Optional Cloudflare Queues helpers let you move email work off the request path when throughput or latency matters.',
		note: 'Good fit for form spikes, batch sends, and webhook-heavy workloads.'
	},
	{
		icon: 'plug',
		title: 'EmDash-ready sandbox bundles',
		description:
			'Both SMTP and Resend ship with sandbox-compatible bundles so you can wire them into EmDash without guessing the API.',
		note: 'Publish bundles live alongside each package in the repo.'
	}
];

export const providers: ProviderItem[] = [
	{
		name: 'SMTP',
		status: 'stable',
		icon: 'server',
		description:
			'Available today with auth modes, HTML, attachments, CID images, DSN, hooks, and queue helpers.'
	},
	{
		name: 'Resend',
		status: 'stable',
		icon: 'paper-plane',
		description: 'Available today as a separate Worker-native package aligned to the SMTP API surface.',
		href: '/libs/resend'
	},
	{
		name: 'Postmark',
		status: 'under discussion',
		icon: 'mail',
		description:
			'Referenced only as a possible provider category in ecosystem planning, not as shipped functionality here.'
	},
	{
		name: 'SES',
		status: 'under discussion',
		icon: 'cloud',
		description:
			'Also in the future-facing conversation, but not documented as an implementation on this site.'
	}
];

export const pipelineStages: PipelineStage[] = [
	{
		title: 'beforeSend',
		capability: 'email:intercept',
		description:
			'The EmDash discussion describes a pre-delivery interception stage for validation, enrichment, or policy checks.'
	},
	{
		title: 'deliver',
		capability: 'email:provide',
		description:
			'A provider stage would choose the transport that actually sends the message, whether SMTP or something else.'
	},
	{
		title: 'afterSend',
		capability: 'email:send',
		description:
			'Post-delivery hooks would be the place for logging, analytics, follow-up automation, and result handling.'
	}
];

export const snippets = {
	install: {
		filename: 'terminal',
		language: 'bash',
		code: snippet`bun add @workermailer/smtp`
	},
	installNpm: {
		filename: 'terminal',
		language: 'bash',
		code: snippet`npm install @workermailer/smtp`
	},
	installResend: {
		filename: 'terminal',
		language: 'bash',
		code: snippet`bun add @workermailer/resend`
	},
	installResendNpm: {
		filename: 'terminal',
		language: 'bash',
		code: snippet`npm install @workermailer/resend`
	},
	devVars: {
		filename: '.dev.vars',
		language: 'bash',
		code: snippet`SMTP_USERNAME=mail@example.com
SMTP_PASSWORD=super-secret
RESEND_API_KEY=re_***`
	},
	localDev: {
		filename: 'local-dev.ts',
		language: 'typescript',
		code: snippet`export default async function sendEmail(env) {
  if (import.meta.env.DEV) {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport()
    return transporter.sendMail({ to: 'test@example.com', subject: 'Dev send' })
  }

  const { WorkerMailer } = await import('@workermailer/smtp')
  const mailer = await WorkerMailer.connect({
    host: env.SMTP_HOST,
    port: 465,
    secure: true,
    credentials: { username: env.SMTP_USERNAME, password: env.SMTP_PASSWORD }
  })
  return mailer.send({ to: 'test@example.com', subject: 'Prod send', text: 'Hello' })
}`
	},
	workerConfig: {
		filename: 'wrangler.json',
		language: 'json',
		code: snippet`{
  "compatibility_flags": ["nodejs_compat"]
}`
	},
	quickStart: {
		filename: 'send-email.ts',
		language: 'typescript',
		code: snippet`import { WorkerMailer } from '@workermailer/smtp'

const mailer = await WorkerMailer.connect({
  host: 'smtp.example.com',
  port: 465,
  secure: true,
  authType: 'plain',
  credentials: {
    username: env.SMTP_USERNAME,
    password: env.SMTP_PASSWORD
  }
})

await mailer.send({
  from: { name: 'Worker Mailer', email: 'noreply@example.com' },
  to: { name: 'Alice', email: 'alice@example.com' },
  subject: 'Hello from the edge',
  text: 'This message was sent from a Cloudflare Worker.',
  html: '<h1>Hello from the edge</h1><p>SMTP over TCP sockets.</p>'
})`
	},
	oneOffSend: {
		filename: 'send-once.ts',
		language: 'typescript',
		code: snippet`import { WorkerMailer } from '@workermailer/smtp'

await WorkerMailer.send(
  {
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    credentials: {
      username: env.SMTP_USERNAME,
      password: env.SMTP_PASSWORD
    }
  },
  {
    from: 'noreply@example.com',
    to: 'alice@example.com',
    subject: 'One-off send',
    text: 'No persistent connection required.'
  }
)`
	},
	resendQuickStart: {
		filename: 'resend.ts',
		language: 'typescript',
		code: snippet`import { ResendMailer } from '@workermailer/resend'

const mailer = await ResendMailer.connect({
  apiKey: env.RESEND_API_KEY,
  from: 'Worker Mailer <mail@acme.com>'
})

await mailer.send({
  from: 'Worker Mailer <mail@acme.com>',
  to: 'alice@acme.com',
  subject: 'Hello from Resend',
  text: 'Sent via Resend from a Cloudflare Worker.',
  html: '<h1>Hello from Resend</h1><p>Worker-native delivery.</p>'
})`
	},
	resendQueue: {
		filename: 'queue.ts',
		language: 'typescript',
		code: snippet`import { createQueueHandler } from '@workermailer/resend/queue'

export default {
  async queue(batch) {
    const handleQueue = createQueueHandler()
    await handleQueue(batch)
  }
}`
	},
	queue: {
		filename: 'queue.ts',
		language: 'typescript',
		code: snippet`import {
  createQueueHandler,
  enqueueEmail,
  type QueueEmailMessage
} from '@workermailer/smtp/queue'

interface Env {
  EMAIL_QUEUE: Queue<QueueEmailMessage>
}

export default {
  async fetch(_request: Request, env: Env) {
    await enqueueEmail(env.EMAIL_QUEUE, {
      mailerOptions: {
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        credentials: {
          username: env.SMTP_USERNAME,
          password: env.SMTP_PASSWORD
        }
      },
      emailOptions: {
        from: 'noreply@example.com',
        to: 'alice@example.com',
        subject: 'Queued email',
        text: 'Sent from Cloudflare Queues.'
      }
    })

    return new Response('queued')
  },

  async queue(batch: MessageBatch<QueueEmailMessage>) {
    const handleQueue = createQueueHandler()
    await handleQueue(batch)
  }
}`
	},
	cidTemplate: {
		filename: 'inline-image.ts',
		language: 'typescript',
		code: [
			'await mailer.send({',
			"  from: 'noreply@example.com',",
			"  to: 'alice@example.com',",
			"  subject: 'Email with inline image',",
			'  html: `',
			'    <h1>Hello</h1>',
			'    <p>Here is the logo:</p>',
			'    <img src="cid:company-logo" alt="Company logo" />',
			'  `,',
			'  attachments: [',
			'    {',
			"      filename: 'logo.png',",
			'      content: env.LOGO_BASE64,',
			"      mimeType: 'image/png',",
			"      cid: 'company-logo',",
			'      inline: true',
			'    }',
			'  ]',
			'})'
		].join('\n')
	},
	hooks: {
		filename: 'hooks.ts',
		language: 'typescript',
		code: snippet`const mailer = await WorkerMailer.connect({
  host: 'smtp.example.com',
  port: 465,
  secure: true,
  credentials: {
    username: env.SMTP_USERNAME,
    password: env.SMTP_PASSWORD
  },
  hooks: {
    onConnect: () => console.log('Connected to SMTP server'),
    onSent: (email, response) => console.log('Email sent', email.to, response),
    onError: (_email, error) => console.error('Delivery failed', error),
    onClose: (error) => console.log('Connection closed', error ?? 'cleanly')
  }
})`
	},
	htmlTemplate: {
		filename: 'welcome-email.ts',
		language: 'typescript',
		code: [
			'const html = `',
			'<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f2;padding:32px">',
			'  <tr>',
			'    <td align="center">',
			'      <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e2ded8;border-radius:24px;padding:40px;font-family:Arial,sans-serif">',
			'        <tr>',
			'          <td style="font-size:13px;letter-spacing:0.16em;text-transform:uppercase;color:#f48120">',
			'            worker-mailer',
			'          </td>',
			'        </tr>',
			'        <tr>',
			'          <td style="padding-top:18px;font-size:30px;line-height:1.1;color:#000000;font-weight:700">',
			'            Welcome to the edge',
			'          </td>',
			'        </tr>',
			'        <tr>',
			'          <td style="padding-top:14px;font-size:16px;line-height:1.7;color:#000000">',
			'            Send transactional email from Cloudflare Workers without shipping a heavy Node SMTP stack.',
			'          </td>',
			'        </tr>',
			'      </table>',
			'    </td>',
			'  </tr>',
			'</table>`',
			'',
			'await mailer.send({',
			"  from: 'noreply@example.com',",
			"  to: 'alice@example.com',",
			"  subject: 'Welcome to worker-mailer',",
			"  text: 'Welcome to worker-mailer',",
			'  html',
			'})'
		].join('\n')
	},
	apiConnect: {
		filename: 'types.ts',
		language: 'typescript',
		code: snippet`type WorkerMailerOptions = {
  host: string
  port: number
  secure?: boolean
  startTls?: boolean
  credentials?: {
    username: string
    password: string
  }
  authType?:
    | 'plain'
    | 'login'
    | 'cram-md5'
    | Array<'plain' | 'login' | 'cram-md5'>
  hooks?: WorkerMailerHooks
  dsn?: {
    RET?: { HEADERS?: boolean; FULL?: boolean }
    NOTIFY?: { DELAY?: boolean; FAILURE?: boolean; SUCCESS?: boolean }
  }
}`
	},
	apiSend: {
		filename: 'email.ts',
		language: 'typescript',
		code: snippet`type EmailOptions = {
  from: string | { name?: string; email: string }
  to:
    | string
    | string[]
    | { name?: string; email: string }
    | Array<{ name?: string; email: string }>
  cc?: string | string[]
  bcc?: string | string[]
  reply?: string | { name?: string; email: string }
  subject: string
  text?: string
  html?: string
  headers?: Record<string, string>
  attachments?: Attachment[]
  dsnOverride?: {
    envelopeId?: string
    RET?: { HEADERS?: boolean; FULL?: boolean }
    NOTIFY?: { DELAY?: boolean; FAILURE?: boolean; SUCCESS?: boolean }
  }
}`
	}
} as const;

export const exampleCards: ExampleCard[] = [
	{
		title: 'Direct SMTP delivery',
		status: 'stable',
		description: 'Connect once and send from a Worker when the request itself owns the delivery flow.',
		filename: 'smtp-basic.ts',
		language: 'typescript',
		code: snippets.quickStart.code
	},
	{
		title: 'One-off send',
		status: 'stable',
		description: 'Use the static helper when you do not need to retain a transport instance between sends.',
		filename: 'send-once.ts',
		language: 'typescript',
		code: snippets.oneOffSend.code
	},
	{
		title: 'Queue consumer',
		status: 'stable',
		description: 'Push email work into Cloudflare Queues to keep the request path thin.',
		filename: 'queue.ts',
		language: 'typescript',
		code: snippets.queue.code
	},
	{
		title: 'HTML + CID image',
		status: 'stable',
		description: 'Embed an inline image in the message body using a content ID attachment.',
		filename: 'inline-image.ts',
		language: 'typescript',
		code: snippets.cidTemplate.code
	},
	{
		title: 'Lifecycle hooks',
		status: 'stable',
		description: 'Monitor connect, sent, error, and close events with typed hooks.',
		filename: 'hooks.ts',
		language: 'typescript',
		code: snippets.hooks.code
	}
];
