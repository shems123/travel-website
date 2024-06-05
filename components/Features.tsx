import { FEATURES } from '@/constants'
import Image from 'next/image'
import { features } from 'process'
import React from 'react'

const Features = () => {
  return (
    <section className="flexCenter flex-col bg-feature-bg bg-center bg-no-repeat py-24 overflow-hidden">
      <div className="relative max-container padding-container w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Feature</h2>
          </div>

          <ul className="grid gap-10 mt-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feture) => (
              <FeatureItems
                key={feture.title}
                title={feture.title}
                icon={feture.icon}
                variant={feture.variant}
                description={feture.description} 
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

export const FeatureItems = ({title, icon, variant, description}: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
        />
      </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
          {title}
        </h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] bg-red-50">
          {description}
        </p>
    </li>
  )
}


export default Features;
