import React from 'react'
import Image from 'next/image'


export default function TreatmentCard({post}) {
  return (
    <div>
        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg p-4">
              <Image
                src={post.frontmatter.img}
                alt=""
                className="mx-auto"
                width={360}
                height={240}
              />

              <h4 className="text-xl font-bold mt-4">{post.frontmatter.title}</h4>
              <p className="mt-1">{post.frontmatter.subtitle}</p>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </div>
          </div>
          
        {/* <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="/images/teeth-whitening.svg"
                alt=""
                className="h-20 mx-auto"
                width={100}
                height={100}
              />

              <h4 className="text-xl font-bold mt-4">Teeth Whitening</h4>
              <p className="mt-1">Let us show you how our experience.</p>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="/images/oral-surgery.svg"
                alt=""
                className="h-20 mx-auto"
                width={100}
                height={100}
              />

              <h4 className="text-xl font-bold mt-4">Oral Surgery</h4>
              <p className="mt-1">Let us show you how our experience.</p>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="/images/painless-dentistry.svg"
                alt=""
                className="h-20 mx-auto"
                width={100}
                height={100}
              />

              <h4 className="text-xl font-bold mt-4">Painless Dentistry</h4>
              <p className="mt-1">Let us show you how our experience.</p>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="/images/periodontics.svg"
                alt=""
                className="h-20 mx-auto"
                width={100}
                height={100}
              />

              <h4 className="text-xl font-bold mt-4">Periodontics</h4>
              <p className="mt-1">Let us show you how our experience.</p>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </div>
        </div> */}
    </div>
  )
}
