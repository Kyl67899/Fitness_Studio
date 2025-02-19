import { Card, CardContent } from "@/components/ui/card"


const testimonials = [
  {
    name: "Sarah J.",
    text: "FitLife Studio transformed my life! I've lost 30 pounds and gained so much confidence.",
  },
  {
    name: "Mike T.",
    text: "The trainers here are top-notch. They really know how to push you to your limits.",
  },
  {
    name: "Emily R.",
    text: "I love the variety of classes. There's always something new and exciting to try!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">What Our Members Say</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="mb-4 text-sm sm:text-base">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-sm sm:text-base">- {testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

