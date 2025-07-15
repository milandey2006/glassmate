import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
import React from 'react'


const cardsData = [
  {
    title: "Video Production & Editing",
    category: " From reels to corporate films, we deliver stunning edits.",
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div>
        <p>This is a placeholder description for the beautiful scenery. You can add more detailed content, components, or anything you want here.</p>
      </div>
    ),
  },
  {
    title: "Graphic Design & Branding",
    category: "Logos, pitch decks, brand books — built to impress",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d136b1b?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div>
        <p>A stunning view of the city lights as they sparkle in the darkness. The content for each card can be unique and rich with details.</p>
      </div>
    ),
  },
  {
    title: "Social Media Strategy & Management",
    category: "We post. You grow.",
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div>
        <p>Wander through a serene forest with towering trees and a carpet of green moss. This is the content area for the forest card.</p>
      </div>
    ),
  },
    {
    title: "Digital Marketing & SEO",
    category: "Drive traffic that matters.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: " Photography & Event Coverage",
    category: "Product, corporate, and candid storytelling.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: "Motion Graphics & Animation",
    category: " Add magic with dynamic visual storytelling",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: "Website & App Design",
    category: "Design that works. UX that converts",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: "Content Creation & Copywriting",
    category: " Say the right thing. Always.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: "Influencer Collaborations",
    category: "Partner with creators your audience trusts.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
  {
    title: "Ad Campaign Management",
    category: "Google, Meta, LinkedIn, YouTube: we manage all.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Exploring the clean lines and innovative structures of modern architecture. The modal view allows for expanded text and imagery.</p>
      </div>
    ),
  },
];

const page = () => {

    const carouselItems = cardsData.map((card, index) => (
    <Card 
      key={index} 
      card={card} 
      index={index} 
      layout={true} // Enable the layout animation
    />
  ));
  return (
    <div>
        <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white dark:text-white">
          Sercvies We Offer
        </h1>
        
        {/* 3. RENDER THE CAROUSEL */}
        <Carousel items={carouselItems} />
        
      </div>
    </div>
  )
}

export default page