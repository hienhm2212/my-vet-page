import React from 'react'
import Image from '../../node_modules/next/image'

const people = [
  {
    name: 'Trần Thị Huỳnh Như',
    role: 'Bác sĩ Thú Y',
    imageUrl: 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/107666155_1705205206315902_8060589537275508435_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUOaNaH6X2QqLe_sHXcI8XkCXY7g6jEJiQJdjuDqMQmGgJrIURoHmJgqZY9MEGwqJDd5Ti8PxAF57S9Txi4q4K&_nc_ohc=ruq0adnJqEoQ7kNvgGLF2gI&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYBZC5CwcNc2zsX281UlfRZ_uHxvLz-K3T3TzprulTV_aQ&oe=668EA9CB'
  },
]

const Staff = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đội ngũ bác sĩ</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p> */}
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {/* <Image
                  width={16}
                  height={16}
                  src={person.imageUrl}
                  alt=''
                /> */}
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Staff