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

export type SidebarLink = {
	href: string;
	label: string;
};

export type ConfigRow = {
	option: string;
	type: string;
	defaultValue: string;
	description: string;
};

export type ChangelogEntry = {
	version: string;
	date?: string;
	breaking: string[];
	features: string[];
	fixes: string[];
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
	tagline: 'Email for the Edge. Built for Cloudflare Workers.',
	description:
		'SMTP delivery for Cloudflare Workers with Bun-first docs, TypeScript, queues, hooks, and a careful eye on emerging CMS integrations.',
	url: 'https://workermailer.com',
	ogImage: '/og-worker-mailer.svg',
	githubUrl: 'https://github.com/RibasSu/worker-mailer',
	npmUrl: 'https://www.npmjs.com/package/@workermailer/smtp',
	emdashUrl: 'https://emdashcms.com/',
	discussionUrl: 'https://github.com/emdash-cms/emdash/discussions/245',
	version: '1.3.3',
	license: 'MIT'
} as const;

export const navigation = [
	{ href: '/', label: 'Home' },
	{ href: '/docs', label: 'Docs' },
	{ href: '/examples', label: 'Examples' },
	{ href: '/changelog', label: 'Changelog' },
	{ href: '/emdash', label: 'EmDash' }
] as const;

export const featureItems: FeatureItem[] = [
	{
		icon: 'SMTP',
		title: 'Cloudflare-native SMTP',
		description:
			'Connect directly from a Worker using Cloudflare TCP sockets instead of pushing mail through a separate Node server.',
		note: 'A tighter delivery path with fewer moving parts at the edge.'
	},
	{
		icon: 'TYPES',
		title: 'Type-safe envelopes',
		description:
			'Typed transport and message options cover auth modes, DSN, attachments, headers, inline images, and queue payloads.',
		note: 'Safer refactors and faster editor feedback in Bun-first projects.'
	},
	{
		icon: 'CID',
		title: 'HTML + inline assets',
		description:
			'Send plain text, HTML, classic attachments, and inline CID images without bolting on a second mailer abstraction.',
		note: 'Useful for onboarding flows, invoices, and system notifications.'
	},
	{
		icon: 'HOOKS',
		title: 'Hooks and observability',
		description:
			'Lifecycle hooks and custom SMTP errors make it easier to trace connect, send, fail, and close events.',
		note: 'Helpful for retries, logging, and production diagnostics.'
	},
	{
		icon: 'QUEUE',
		title: 'Queue-ready delivery',
		description:
			'Optional Cloudflare Queues helpers let you move email work off the request path when throughput or latency matters.',
		note: 'Good fit for form spikes, batch sends, and webhook-heavy workloads.'
	},
	{
		icon: 'DISCUSS',
		title: 'Watching EmDash carefully',
		description:
			'The project is following the EmDash email-provider discussion, but this site only documents worker-mailer features that exist today.',
		note: 'No guessed plugin API, no speculative setup steps.'
	}
];

export const providers: ProviderItem[] = [
	{
		name: 'SMTP',
		status: 'stable',
		icon: 'SM',
		description:
			'Available today with auth modes, HTML, attachments, CID images, DSN, hooks, and queue helpers.'
	},
	{
		name: 'Resend',
		status: 'under discussion',
		icon: 'RS',
		description:
			'Not part of worker-mailer core. Any EmDash-facing provider shape is still under discussion.'
	},
	{
		name: 'Postmark',
		status: 'under discussion',
		icon: 'PM',
		description:
			'Referenced only as a possible provider category in ecosystem planning, not as shipped functionality here.'
	},
	{
		name: 'SES',
		status: 'under discussion',
		icon: 'SE',
		description:
			'Also in the future-facing conversation, but not documented as an implementation on this site.'
	}
];

export const docsSidebar: SidebarLink[] = [
	{ href: '#introduction', label: 'Introduction' },
	{ href: '#installation', label: 'Installation' },
	{ href: '#quick-start', label: 'Quick Start' },
	{ href: '#providers', label: 'Providers' },
	{ href: '#configuration', label: 'Configuration' },
	{ href: '#emdash-discussion', label: 'EmDash Discussion' },
	{ href: '#api-reference', label: 'API Reference' }
];

export const configRows: ConfigRow[] = [
	{
		option: 'host',
		type: 'string',
		defaultValue: 'required',
		description: 'SMTP hostname, such as `smtp.example.com`.'
	},
	{
		option: 'port',
		type: 'number',
		defaultValue: 'required',
		description: 'SMTP port. Cloudflare Workers commonly pair well with `465` or `587`, depending on your provider.'
	},
	{
		option: 'secure',
		type: 'boolean',
		defaultValue: 'false',
		description: 'Start the connection over TLS immediately.'
	},
	{
		option: 'startTls',
		type: 'boolean',
		defaultValue: 'true',
		description: 'Upgrade to TLS when the SMTP server supports it.'
	},
	{
		option: 'credentials',
		type: '{ username, password }',
		defaultValue: 'undefined',
		description: 'SMTP authentication credentials.'
	},
	{
		option: 'authType',
		type: "'plain' | 'login' | 'cram-md5' | array",
		defaultValue: "'plain'",
		description: 'Choose a specific auth mode or provide a preferred order.'
	},
	{
		option: 'hooks',
		type: 'WorkerMailerHooks',
		defaultValue: 'undefined',
		description: 'Lifecycle hooks for connect, send, error, and close events.'
	},
	{
		option: 'dsn',
		type: 'DSN options',
		defaultValue: 'undefined',
		description: 'Adds delivery status notifications at the envelope level.'
	},
	{
		option: 'socketTimeoutMs',
		type: 'number',
		defaultValue: 'runtime default',
		description: 'Socket timeout guard for slow SMTP connections.'
	},
	{
		option: 'responseTimeoutMs',
		type: 'number',
		defaultValue: 'runtime default',
		description: 'How long to wait for a reply from the server before aborting.'
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

export const changelogEntries: ChangelogEntry[] = [
	{
		version: 'Unreleased',
		breaking: [],
		features: ['a6ab686: migrate project metadata to Bun and remove `pnpm-lock.yaml`'],
		fixes: []
	},
	{
		version: '1.3.3',
		breaking: [],
		features: [],
		fixes: ['533e299: dependency update', 'c2bd1f4: release v1.3.3']
	},
	{
		version: '1.3.2',
		breaking: [],
		features: [],
		fixes: [
			'183ccf0: update library versions',
			'0c4652e: add LICENSE file',
			'a0d7742: update LICENSE contents',
			'e0d0d2d: release v1.3.2'
		]
	},
	{
		version: '1.3.1',
		breaking: [],
		features: [],
		fixes: ['2681406: update documentation with new features', 'bf60489: release v1.3.1']
	},
	{
		version: '1.3.0',
		breaking: [],
		features: [
			'2224ada: add email validation with RFC 5322 compliant regex',
			'2224ada: add custom error classes (InvalidEmailError, SmtpAuthError, SmtpConnectionError, SmtpRecipientError, SmtpTimeoutError, InvalidContentError)',
			'2224ada: add support for inline attachments with Content-ID (CID) for embedding images in HTML emails',
			'2224ada: add lifecycle hooks (onConnect, onSent, onError, onClose) for monitoring email operations',
			'2224ada: add optional Cloudflare Queues integration for async email processing (`@workermailer/smtp/queue`)',
			'b6ea3d8: fix duplicated `types` field in `package.json`',
			'2068ddf: configure npm registry URL in publish workflow'
		],
		fixes: []
	},
	{
		version: '1.2.12',
		breaking: [],
		features: [],
		fixes: ['fe014cd: AAAAA', 'b066e03: release v1.2.12']
	},
	{
		version: '1.2.11',
		breaking: [],
		features: [],
		fixes: ['0d51c7f: And that?', 'b706884: release v1.2.11']
	},
	{
		version: '1.2.10',
		breaking: [],
		features: [],
		fixes: ['daef139: add `--provenance`', '1a6506c: release v1.2.10']
	},
	{
		version: '1.2.9',
		breaking: [],
		features: [],
		fixes: ['731f782: If I have to run one more of these tests, I\'ll go crazy!', '189976c: release v1.2.9']
	},
	{
		version: '1.2.8',
		breaking: [],
		features: [],
		fixes: ['38ea0d9: Use Bun', 'e91d939: release v1.2.8']
	},
	{
		version: '1.2.7',
		breaking: [],
		features: [],
		fixes: ['b8fe749: Fiix', 'b953bed: Fix?', '941d986: release v1.2.7']
	},
	{
		version: '1.2.6',
		breaking: [],
		features: [],
		fixes: ['53695f0: Fix?', '74ce7d4: release v1.2.6']
	},
	{
		version: '1.2.5',
		breaking: [],
		features: [],
		fixes: ['8bc025e: fix', '5d283df: release v1.2.5']
	},
	{
		version: '1.2.4',
		breaking: [],
		features: [],
		fixes: [
			'c9c9953: Fix publish npm',
			'cc7895b: Changing the npm version pointer',
			'e2f583a: release v1.2.4'
		]
	},
	{
		version: '1.2.3',
		breaking: [],
		features: [],
		fixes: ['6ccdd9a: Up GitHub Actions', '7ad0b82: Updated package name', '2ebaf1b: release v1.2.3']
	},
	{
		version: '1.2.2',
		breaking: [],
		features: [],
		fixes: ['bbec754: Init', '9c3fa7b: release v1.2.2']
	},
	{
		version: '1.2.1',
		breaking: [],
		features: [],
		fixes: ['18cd709: fix: implement SMTP dot-stuffing (rfc 5321)']
	},
	{
		version: '1.2.0',
		breaking: [],
		features: ['f3a7fb2: Implement quoted-printable encoding'],
		fixes: []
	},
	{
		version: '1.1.5',
		breaking: [],
		features: [],
		fixes: ['02cc185: fix: Email headers override']
	},
	{
		version: '1.1.4',
		breaking: [],
		features: [],
		fixes: ['159934d: fix: Mime boundary length too long.']
	},
	{
		version: '1.1.3',
		breaking: [],
		features: [],
		fixes: [
			'55259f1: fix: Socket close timeout by ignoring promise result',
			'c385ba1: fix #23: some servers replied 550 MIME boundary length exceeded (see RFC 2046) to messages that were too long'
		]
	},
	{
		version: '1.1.2',
		breaking: [],
		features: [],
		fixes: [
			'cb77d2b: fix: Socket close timeout by ignoring promise result',
			'90d0631: fix #23: some servers replied 550 MIME boundary length exceeded (see RFC 2046) to messages that were too long'
		]
	},
	{
		version: '1.1.1',
		breaking: [],
		features: [],
		fixes: ['e14a156: fix: Add missing space before NOTIFY=NEVER']
	},
	{
		version: '1.1.0',
		breaking: [],
		features: [
			'15a2961: Add DSN & attachment features',
			'15a2961: Add startTls options(default: true), upgrade to TLS if SMTP server supported.'
		],
		fixes: []
	},
	{
		version: '1.0.1',
		breaking: [],
		features: [],
		fixes: ['248bb4a: Export LogLevel Enum while packaging']
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
			'          <td style="padding-top:18px;font-size:30px;line-height:1.1;color:#404041;font-weight:700">',
			'            Welcome to the edge',
			'          </td>',
			'        </tr>',
			'        <tr>',
			'          <td style="padding-top:14px;font-size:16px;line-height:1.7;color:#5f5e5a">',
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
