import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Single User</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    50GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    200GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-4 py-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Our Features
        </h2>
        <div class="flex flex-wrap justify-center">
          {/* <!-- Feature 1 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Feature One
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Description of feature one.
              </p>
              <button class="w-full bg-primary text-white py-2 rounded-lg transition duration-300 hover:bg-primary/70">
                Learn More
              </button>
            </div>
          </div>
          {/* <!-- Feature 2 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Feature Two
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Description of feature two.
              </p>
              <button class="w-full bg-primary text-white py-2 rounded-lg transition duration-300 hover:bg-primary/70">
                Learn More
              </button>
            </div>
          </div>
          {/* <!-- Feature 3 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Feature Three
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                Description of feature three.
              </p>
              <button class="w-full bg-primary text-white py-2 rounded-lg transition duration-300 hover:bg-primary/70">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Top Blog Posts
        </h2>
        <div class="flex flex-wrap justify-center">
          {/* <!-- Blog Post 1 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post 1" class="w-full h-64 object-cover rounded-t-lg"/>
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Blog Post One
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  A brief description of blog post one.
                </p>
                <Button class="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          {/* <!-- Blog Post 2 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post 2" class="w-full h-64 object-cover rounded-t-lg"/>
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Blog Post Two
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  A brief description of blog post two.
                </p>
                <Button class="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          {/* <!-- Blog Post 3 --> */}
          <div class="w-full md:w-1/3 p-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post 3" class="w-full h-64 object-cover rounded-t-lg"/>
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Blog Post Three
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  A brief description of blog post three.
                </p>
                <Button class="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
