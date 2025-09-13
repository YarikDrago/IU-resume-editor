import '../styles/globals.css';

export const metadata = {
  title: {
    default: 'IU Resume Editor — Free ATS Resume Builder',
    template: '%s | IU Resume Editor',
  },
  description:
    'Create an ATS‑friendly resume in minutes. Optimize your CV for Applicant Tracking Systems with templates and smart tips to get noticed by employers.',
  keywords: [
    'ATS resume builder',
    'ATS-friendly resume',
    'resume builder',
    'resume editor',
    'resume maker',
    'free resume builder',
    'resume templates',
    'CV builder',
    'optimize resume for ATS',
    'professional resume',
    'ATSResume',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'IU Resume Editor — Free ATS Resume Builder',
    description:
      'Build an ATS‑optimized resume fast. Templates and smart optimization to pass Applicant Tracking Systems and impress recruiters.',
    url: '/',
    siteName: 'IU Resume Editor',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/favicon.png', // change on /og-image.png (1200x630), when it will be available
        width: 512,
        height: 512,
        alt: 'IU Resume Editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IU Resume Editor — Free ATS Resume Builder',
    description:
      'Create an ATS‑friendly resume in minutes with templates and smart optimization.',
    images: ['/favicon.png'], // change on /og-image.png (1200x630), when it will be available
    // creator: '@your_handle',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={'content'}>{children}</div>
      </body>
    </html>
  );
}
