'use client'

import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import FooterCustom from '@/app/components/Footer/footer'
import HeaderCustom from '@/app/components/Header/header'
import { StoreProvider } from '@/app/redux/storeProvider';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free to Play Games',
  description: 'App by Darya Skvortsova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Layout className='mainContainer'>
            <HeaderCustom/>
            <Layout className='mainContent'>
              <Content className="flex-grow">{children}</Content>
            </Layout>
            <FooterCustom />
          </Layout>
        </StoreProvider>
        </body>
    </html>
  )
}
