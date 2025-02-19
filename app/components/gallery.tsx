import Image from "next/image"

const images = [
  {
    src: "https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain",
    alt: "Weight",
  },
  {
    src: "https://th.bing.com/th/id/OIP.byoq--XdBkoZ3Q5x9mG6OAHaE8?rs=1&pid=ImgDetMain",
    alt: "Yoga, Pilates, and Barre",
  },
  {
    src: "https://th.bing.com/th/id/OIP.A7TOLVxfsMNfdhNcMewZ2wHaE8?w=302&h=201&c=7&r=0&o=5&dpr=2&pid=1.7",
    alt: "Cardio, Strength, and Conditioning",
  },
  {
    src: "https://th.bing.com/th/id/R.83b478323d3ef04c97ed4bc4e884ef37?rik=xUh5GkibANaDDg&pid=ImgRaw&r=0",
    alt: "Outdoor Course, Running Track, and Pool",
  },
]

export function Gallery() {
  return (
    <section id="gallery">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Our Facility</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

