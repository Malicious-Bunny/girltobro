export function Testimonials() {
  const testimonials = [
    {
      name: "Marcus",
      age: 28,
      story: "I was stuck in a pattern of failed first dates and ghosting. Sarah helped me understand that I was trying too hard to impress instead of just being myself. Now I'm in a 6-month relationship with an amazing woman who loves me for who I am.",
      result: "Found lasting relationship"
    },
    {
      name: "David",
      age: 34,
      story: "After my divorce, I had no idea how to date again. The coaching helped me rebuild my confidence and understand what I actually wanted in a partner. I learned to communicate better and set healthy boundaries.",
      result: "Rebuilt confidence after divorce"
    },
    {
      name: "James",
      age: 26,
      story: "I was shy and awkward around women. Through the program, I learned that confidence isn't about being loud or aggressive – it's about being comfortable with yourself. My whole social life has improved.",
      result: "Overcame social anxiety"
    },
    {
      name: "Ryan",
      age: 31,
      story: "I thought I needed to be someone else to attract women. The coaches showed me that authenticity is actually more attractive than any persona. I stopped trying to be the 'cool guy' and just started being me.",
      result: "Embraced authentic self"
    },
    {
      name: "Alex",
      age: 29,
      story: "My dating app conversations always died out. Learning proper texting and conversation skills from a woman's perspective was a game-changer. Now I actually look forward to dating.",
      result: "Improved communication skills"
    },
    {
      name: "Tyler",
      age: 33,
      story: "I kept attracting the wrong type of women. The coaching helped me understand my patterns and set better standards. Now I'm dating someone who shares my values and life goals.",
      result: "Found compatible partner"
    }
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real men, real transformations, real relationships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">Age {testimonial.age}</p>
                  </div>
                </div>
                <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-border">
                  {testimonial.result}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                "{testimonial.story}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-28 grid sm:grid-cols-3 gap-8 lg:gap-12">
          {[
            { stat: "85%", description: "Enter meaningful relationships" },
            { stat: "97%", description: "Report increased confidence" },
            { stat: "92%", description: "Would recommend to friends" }
          ].map((item, index) => (
            <div key={index} className="text-center bg-background border border-border rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">{item.stat}</div>
              <div className="text-gray-600 leading-relaxed text-lg">{item.description}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-28">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ready to write your own success story?
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ring">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
