"use client"
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import heroPic from "@/assets/3d-business-a-group-of-cheerful-young-people.png"
import blogPic from "@/assets/blog.png"

export default function Home() {
const [loading, setLoading] = useState(true);


useEffect(() => {
  const timer = setInterval(() => {
    setLoading(false);
  }, 2000);

  // Cleanup interval on component unmount
  return () => clearInterval(timer);
}, []);


  return (
    <div>
      {loading ? <SplashScreen /> : 
      (
        <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
            <BookOpenIcon className="w-6 h-6" />
            Campus Compass
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              College Reviews
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Interview Tips
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="w-5 h-5" />
          </Button>
        </header>
        <main className="flex-1">
          <section className="bg-primary py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <h1 className="text-4xl font-bold text-primary-foreground">
                Discover the Best Colleges and Ace Your Interviews
              </h1>
              <p className="text-primary-foreground/80">
                Our blog provides in-depth reviews of top colleges and expert tips to help you succeed in your job
                interviews.
              </p>
              <Link
                href="/auth/signIn"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-primary font-medium transition-colors hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
                prefetch={false}
              >
                Subscribe Now
              </Link>
            </div>
            <Image
              src={heroPic}
              width={300}
              height={400}
              alt="Hero Illustration"
              className="max-w-[400px] md:max-w-none mr-10"
            />
          </section>
          <section className="py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-primary">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Top 10 Colleges for Computer Science in 2023
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Explore the best colleges for computer science and learn about their programs, campus life, and
                      more.
                    </p>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                  <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Ace Your Next Interview: 5 Proven Strategies
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Learn the top interview strategies to help you land your dream job.
                    </p>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                  <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      The Ultimate Guide to Choosing the Right College
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Discover the key factors to consider when selecting the perfect college for your future.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="bg-muted py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                  <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Top 10 Colleges for Computer Science
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Discover the best colleges for computer science and learn about their programs, campus life, and
                      more.
                    </p>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                  <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Common Interview Questions and How to Answer Them
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Prepare for your next interview with our expert tips and strategies.
                    </p>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="rounded-lg overflow-hidden">
                  <Image
                      src={blogPic}
                      width={400}
                      height={250}
                      alt="Blog Post 1"
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      Scholarships and Financial Aid for College
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Explore the best scholarship opportunities to help fund your college education.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 College Reviews. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </footer>
      </div>
      )
      }
      
    </div>
  );
}

function SplashScreen() {
  return (
    
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Choose Paths <br /> the right way
    </motion.h1>
  </LampContainer>
  
  )
}

function BookOpenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}