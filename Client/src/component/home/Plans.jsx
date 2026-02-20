import React from 'react'
import { CheckCircle } from 'lucide-react'

const Plans = () => {
  return (
    <>
     <section className="bg-[#0b1b34] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {["Website Development", "Ads Management"].map((plan, i) => (
              <div key={i} className="bg-white text-black p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">{plan}</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle size={16} /> High Conversion Focus
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle size={16} /> Expert Team Support
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle size={16} /> Monthly Optimization
                  </li>
                </ul>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Plans