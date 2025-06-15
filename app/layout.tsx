import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolas-portfolio.vercel.app'),
  title: 'Nicolas Ribeiro de Paula - Designer Gráfico',
  description: 'Portfólio de Nicolas Ribeiro de Paula - Designer Gráfico especializado em branding, design editorial, web design e produção gráfica.',
  keywords: 'designer gráfico, branding, design editorial, web design, São Paulo, portfólio',
  authors: [{ name: 'Nicolas Ribeiro de Paula' }],
  openGraph: {
    title: 'Nicolas Ribeiro de Paula - Designer Gráfico',
    description: 'Portfólio de Nicolas Ribeiro de Paula - Designer Gráfico especializado em branding, design editorial, web design e produção gráfica.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nicolas-portfolio.vercel.app',
    siteName: 'Nicolas Ribeiro de Paula - Portfólio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolas Ribeiro de Paula - Designer Gráfico',
    description: 'Portfólio de Nicolas Ribeiro de Paula - Designer Gráfico especializado em branding, design editorial, web design e produção gráfica.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800`}>
        {children}
      </body>
    </html>
  )
} 