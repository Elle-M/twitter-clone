import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {FiBell} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FaUserFriends} from 'react-icons/fa'
import {FiBookmark} from 'react-icons/fi'
import {FiMoreHorizontal} from 'react-icons/fi'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
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
    icon:FiBell
  },
  { 
    title:'Messages',
    icon:FiMail
  },
  {
    title:'Bookmarks',
    icon:FiBookmark
  },
  {
    title:'Profile',
    icon:FaUserFriends
  },
  {
    title:'More',
    icon:FiMoreHorizontal
  }
]

const Home =() => {
  return (
    <div className="w-full h-fill flex justify-center items-center bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col h-screen">
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              className="bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </section>
        <main>main content</main>
        <section>right sidebar</section>
        </div>
    </div>
  )
}

export default Home