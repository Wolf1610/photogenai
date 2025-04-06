"use client";

import Logo from "@/public/logo";
import { User } from "lucide-react";
import Link from "next/link";


export default function NatureGallery() {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Logo />
            </Link>
            <Link href="/"><h1 className="text-2xl font-bold text-black">photogenai</h1></Link>
          </div>
          <div className="p-2 bg-purple-100 rounded-full">
          <User className="w-6 h-6 text-purple-600" />
        </div>
        </header>
  
        <main className="container mx-auto px-6 pb-12">
          <div className="gap-4 space-y-4">
          <section className="py-16 px-8 bg-white">
      <h2 className="text-center mb-12 text-[#1a2a6c] text-3xl font-bold">Members</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 max-w-[1200px] mx-auto">
        <div className="text-center p-2 bg-gray-100 rounded-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-1 ">
          <div className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4 object-cover">
            <img src="https://i.pinimg.com/564x/4c/c6/65/4cc665559ef822b3e0f72d8b9d45216b.jpg" className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4"/>
          </div>
          <h3 className="text-[#1a2a6c] mb-2 font-semibold text-lg">Soumendra Satpathy</h3>
          <p className="text-gray-600 mb-2">RegdNo-230301120400</p>
          <p className="text-gray-600 mb-2">230301120400@centurionuniv.edu.in</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4 object-cover">
            <img src="https://blazepress.com/.image/c_fit,h_600,w_600/MTcxNjM1MTQ5OTU0MzYwNjgw/funny-faces-43-1.jpg" alt="Durga" className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4"/>
          </div>
          <h3 className="text-[#1a2a6c] mb-2 font-semibold text-lg">Durgaprasad Dutta</h3>
          <p className="text-gray-600 mb-2">RegdNo-230301120367</p>
          <p className="text-gray-600 mb-2">230301120367@centurionuniv.edu.in</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4 object-cover">
            <img src="https://i.pinimg.com/474x/07/17/95/071795ba58e2cd600395cf8ecdaf10d1.jpg" className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4"/>
          </div>
          <h3 className="text-[#1a2a6c] mb-2 font-semibold text-lg">Sachin kumar Kanshi</h3>
          <p className="text-gray-600 mb-2">RegdNo-230301120400</p>
          <p className="text-gray-600 mb-2">230301120400@centurionuniv.edu.in</p>
        </div>
        <div className="text-center p-2 bg-gray-100 rounded-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4 object-cover">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn6hmw_OQg5ZWjtllDflJb1MoIszq1-j4HQ&s" alt="Ddebanshu" className="w-[150px] h-[150px] bg-[#ddd] rounded-full mx-auto mb-4"/>
          </div>
          <h3 className="text-[#1a2a6c] mb-2 font-semibold text-lg">Devanshu</h3>
          <p className="text-gray-600 mb-2">RegdNo-230301120400</p>
          <p className="text-gray-600 mb-2">230301120400@centurionuniv.edu.in</p>
        </div>
      </div>
    </section>
          </div>
        </main>
      </div>
    );
  }
  