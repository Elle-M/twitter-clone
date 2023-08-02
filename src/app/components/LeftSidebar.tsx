import React from 'react'
import Link from 'next/link'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {CiCircleMore} from 'react-icons/ci'
import {BsThreeDots, BsTwitter, BsBell, BsBookmark, BsEnvelope} from 'react-icons/bs'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon:BsTwitter
  },
  {
    title: 'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon:BsBell
  },
  { 
    title:'Messages',
    icon:BsEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  },
  {
    title:'More',
    icon:CiCircleMore
  }
]

const LeftSidebar = () => {
  return (
    <section className="w-[23%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
    <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
      {NAVIGATION_ITEMS.map((item) => (
      <Link 
        className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
        href={`/${item.title.toLowerCase()}`}
        key={item.title}
      >
        <div>
          <item.icon />
        </div>
        <div>
          {item.title !== "Twitter" && <div>{item.title}</div>}
        </div>
      </Link>
    ))}
    <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
      Tweet
    </button>
    </div>
    <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
      <div className="flex item-center space-x-2">
        {/* insert photo below */}
        <div className="rounded-full bg-slate-400 w-10 h-10"></div>
        <div className= "text-left text-sm">
          <div className="font-semibold">Elle Majors</div>
          <div className="">@ellemajors</div>
        </div>
      </div>
      <div>
        <BsThreeDots/>
      </div>
    </button>
  </section>
  );
};

export default LeftSidebar