"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70), 100);
    setTimeout(() => setProgress(100), 200);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 250);
  });

  useEffect(() => {
    setIsClient(true); // Ensure this component is rendered only on the client
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold">
          <Link href="/" className="italic">
            MuziBlog
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:font-bold">
            Home
          </Link>
          <Link href="/about" className="hover:font-bold">
            About
          </Link>
          <Link href="/blog" className="hover:font-bold">
            Blog
          </Link>
          <Link href="/contact" className="hover:font-bold">
            Contact
          </Link>
          <div className="flex space-x-4 items-center">
            {/* <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              SignUp
            </Button> */}
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          {isClient && (
            <Sheet>
              <SheetTrigger>
                <button className="text-2xl">☰</button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="flex justify-between items-center">
                    <SheetTitle className="font-bold my-6 italic">
                      MuziBlog
                    </SheetTitle>
                    <div>
                      <ModeToggle />
                    </div>
                  </div>
                  <SheetDescription>
                    <div className="flex flex-col gap-6">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/blog">Blog</Link>
                      <Link href="/contact">Contact</Link>
                    </div>
                    {/* <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        SignUp
                      </Button>
                    </div> */}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
