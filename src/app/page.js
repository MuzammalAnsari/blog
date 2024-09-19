"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["coding", "debugging", "testing", "reviewing"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Sarah Johnson
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CEO, Tech Innovators Inc.
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  David Lee
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Marketing Director, Creative Solutions Ltd.
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Exceptional service and support. We couldn't be happier with
                  the results."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Emily Davis
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CTO, Future Tech Enterprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Welcome to My Blog
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Insights, stories, and tips from my journey
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Latest Post */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Latest Post
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Discover the latest insights and stories
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <Link href="/blog" className="underline">
                      Read More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Popular Post */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Popular Post
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Most read and loved by the community
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Trending
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <Link href="/blog" className="underline">
                      Read More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Featured Post */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Featured Post
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Handpicked content just for you
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <Link href="/blog" className="underline">
                      Read More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
