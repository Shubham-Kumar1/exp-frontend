"use client"
import Header from '@/components/Header'
import React from 'react'

export default function HomeLayout(
    {children}:
    {children: React.ReactNode}
) {
  return (
    <div>
      
        <Header />
        {children}
      
    </div>
  )
}