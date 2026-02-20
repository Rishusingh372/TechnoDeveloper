import React from 'react'

const works = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Recent Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-100 h-60 rounded-2xl flex items-center justify-center"
              >
                Project Screenshot
              </div>
            ))}
          </div>            
        </div>
      </section>
    </>
  )
}

export default works