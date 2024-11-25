import Toaster from '@/providers/toast-provider'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <>
      {Toaster} 
      {children}
    </>
  )
}