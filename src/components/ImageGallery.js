import ImageCard from "./ImageCard";


const cards = [
  // Nature
  {
    id: 1,
    image: "/images/meal.jpg",
    alt: "Sunlight filtering through a peaceful green forest",
    title: "Into the Forest",
    description:
      "Escape into nature and enjoy the peaceful beauty of green forests.",
    category: "Nature",
  },
  {
    id: 2,
    image: "/images/i2.jpg",
    alt: "Majestic mountain peaks surrounded by clouds",
    title: "Mountain Serenity",
    description:
      "Find inspiration in the quiet beauty of towering mountain peaks.",
    category: "Nature",
  },
  {
    id: 3,
    image: "/images/i3.jpg",
    alt: "Beautiful colorful flowers blooming in a garden",
    title: "Blooming Beauty",
    description: "A little color and a touch of nature can brighten any day.",
    category: "Nature",
  },

  // Fitness & Wellness
  {
    id: 4,
    image: "/images/i4.jpg",
    alt: "Woman practicing yoga on a mat",
    title: "Morning Yoga",
    description:
      "Start your day with mindful movement and a peaceful moment for yourself.",
    category: "Fitness & Wellness",
  },
  {
    id: 5,
    image: "/images/i5.jpg",
    alt: "Person sitting peacefully during meditation",
    title: "Mindful Moments",
    description:
      "Slow down, breathe deeply, and reconnect with your inner calm.",
    category: "Fitness & Wellness",
  },
  {
    id: 6,
    image: "/images/i6.jpg",
    alt: "Person stretching during a fitness workout",
    title: "Move Your Body",
    description:
      "Celebrate your strength and make movement part of your daily routine.",
    category: "Fitness & Wellness",
  },

  // Cozy Moments
  {
    id: 7,
    image: "/images/i7.jpg",
    alt: "Warm cup of coffee on a cozy morning",
    title: "Coffee & Calm",
    description:
      "Enjoy a warm cup of coffee and give yourself a moment to unwind.",
    category: "Cozy Moments",
  },
  {
    id: 8,
    image: "/images/i8.jpg",
    alt: "Cozy cafe interior with a welcoming atmosphere",
    title: "A Cozy Corner",
    description:
      "Discover the simple comfort of a peaceful space and a slower day.",
    category: "Cozy Moments",
  },

  // Travel
  {
    id: 9,
    image: "/images/i9.jpg",
    alt: "Tropical beach with turquoise water and soft sand",
    title: "Ocean Escape",
    description:
      "Let the sound of the waves inspire your next peaceful getaway.",
    category: "Travel",
  },
  {
    id: 10,
    image: "/images/i10.jpg",
    alt: "Beautiful lake surrounded by mountains",
    title: "Wander Somewhere New",
    description:
      "Explore beautiful places and collect moments worth remembering.",
    category: "Travel",
  },

  // Aesthetic
  {
    id: 11,
    image: "/images/i11.jpg",
    alt: "Minimalist interior with a clean and peaceful design",
    title: "Minimal Living",
    description:
      "Find beauty in simple details, natural light, and uncluttered spaces.",
    category: "Aesthetic",
  },
  {
    id: 12,
    image: "/images/i12.jpg",
    alt: "Green indoor plants arranged in a bright space",
    title: "Green Aesthetic",
    description:
      "Bring a refreshing touch of greenery and natural beauty into your space.",
    category: "Aesthetic",
  },
];

function ImageGallery() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <ImageCard
          key={card.id}
          image={card.image}
          category={card.category}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default ImageGallery;