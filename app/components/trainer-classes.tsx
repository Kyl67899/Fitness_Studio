import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trainersClasses = [
  {
    name: "John Doe",
    specialty: "Strength Training",
    description: "Expert in powerlifting and bodybuilding techniques.",
  },
  {
    name: "Jane Smith",
    specialty: "Yoga & Pilates",
    description: "Certified instructor with 10 years of experience.",
  },
  {
    name: "HIIT Class",
    specialty: "High Intensity Interval Training",
    description: "Burn calories and improve endurance in this fast-paced class.",
  },
  {
    name: "Spin Class",
    specialty: "Indoor Cycling",
    description: "High-energy cardio workout on stationary bikes.",
  },
]

export function TrainersClasses() {
  return (
    <section id="trainers-classes">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Our Trainers & Classes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {trainersClasses.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2 text-sm sm:text-base">{item.specialty}</p>
              <p className="text-sm sm:text-base">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

