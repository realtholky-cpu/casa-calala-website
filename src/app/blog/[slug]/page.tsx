// For Visual Reference - The complete code for: src/app/blog/[slug]/page.tsx
'use client';

import Link from 'next/link';
import ImageSlideshow from '../../components/ImageSlideshow';
import InteractivePostSection from '../../components/InteractivePostSection';

// This is our complete "database" for all full blog posts.
const posts: { [key: string]: { title: string; mainContent: React.ReactNode; sections?: any[] } } = {
  'food-guide-granada': {
    title: "A Food Lover's Guide to Granada",
    mainContent: <p className="text-xl text-gray-600">Granada is a feast for the senses, and its culinary scene is no exception. While here, you must indulge in the local flavors that define the taste of the city. Here are five essential dishes for any visitor.</p>,
    sections: [
      {
        type: 'interactive', title: '1. Vigorón',
        description: <p>Vigorón is a bold Nicaraguan street food classic made for the adventurous eater, a vibrant mix of yuca (cassava) topped with crispy chicharrón (fried pork rind) and a zesty cabbage slaw dressed with vinegar and lime. Served on a banana leaf, &it&s a perfect balance of crunch, tang, and hearty comfort, bursting with authentic Central American flavor.</p>,
        images: ['/images/blog/food/vigoron-1.png', '/images/blog/food/vigoron-2.png', '/images/blog/food/vigoron-3.png'], rating: 5, price: 1, locationName: "Refresqueria Don Joel",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.3405344991393!2d-85.95665954825782!3d11.925187989805648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740d005fd9c98d%3A0x7bc20ed261733f88!2sRefresqueria%20Don%20Joel!5e0!3m2!1sen!2sni!4v1762901270450!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '2. Moronga',
        description: <p>Moronga, sizzling in the heart of Granada&apos;s old market, is a savory mix of rice, blood, and local herbs, fried in rich pork fat and full of character. Made by a family perfecting it for over 85 years, it&apos;s a true taste of Nicaraguan tradition.</p>,
        images: ['/images/blog/food/moronga-1.png', '/images/blog/food/moronga-2.png', '/images/blog/food/moronga-3.png'], rating: 4, price: 1, locationName: "Mercado Granada",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.98069939597522!2d-85.95473787714069!3d11.926566062268764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740ceb6e9d0b4d%3A0x194770eae10ba0f!2sMercado%20en%20Granada!5e0!3m2!1sen!2sni!4v1762908246067!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '3. Guapote Whole Fish',
        description: <p>Guapote, Lake Nicaragua&apos;s prized fish, is served whole and golden-fried, crispy on the outside, tender and flaky within. Caught fresh and seasoned simply to let its rich flavor shine, it&apos;s best enjoyed by the lakeside with a squeeze of lime.</p>,
        images: ['/images/blog/food/guapote-1.jpeg', '/images/blog/food/guapote-2.jpeg'], rating: 5, price: 2, locationName: "El Rinconcito",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.175259408555!2d-85.93163942517738!3d11.89288158833207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7473dbf01c59e1%3A0x39e0d082bc634648!2sEl%20Rinc%C3%B3ncito!5e0!3m2!1sen!2sni!4v1762908658228!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '4. Quesillo',
        description: <p>ChatGPT Plus

Quesillo, a Nicaraguan classic, is pure comfort in a tortilla, soft cheese wrapped with pickled onions and rich cream, usually served warm in a plastic bag for the full roadside experience. Salty, tangy, and perfectly messy, it&apos;s a must-try for cheese lovers.</p>,
        images: ['/images/blog/food/quesillo-1.png', '/images/blog/food/quesillo-2.png','/images/blog/food/quesillo-3.png'], rating: 4, price: 1, locationName: "Quesería Don Chepe",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.1294040634416!2d-85.95562048868301!3d11.933217705739352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740dacff5bc4a3%3A0xbb1f3c2f69c13a13!2sQueser%C3%ADa%20Don%20Chepe!5e0!3m2!1sen!2sni!4v1762960774846!5m2!1sen!2sni" 
      },
      {
        type: 'interactive', title: '5. Asados',
        description: <p>Asados are the soul of Nicaraguan street nights — juicy grilled meats sizzling over charcoal, served with gallo pinto, fried cheese, and sweet plantains. The smoky aroma fills the air, drawing locals and travelers alike to the late-night grills. Hearty, authentic, and full of Nica flavor.</p>,
        images: ['/images/blog/food/asados-1.png', '/images/blog/food/asados-2.png', '/images/blog/food/asados-3.png'], rating: 5, price: 1, locationName: "Asados Caña de Castilla",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.03537408137424!2d-85.95240257321646!3d11.930842101520003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740d0050d04981%3A0x647584c83186b2fa!2sAsados%20Ca%C3%B1a%20de%20Castilla!5e0!3m2!1sen!2sni!4v1762961887697!5m2!1sen!2sni"
      },
    ]
  },
  'best-restaurants-granada-2025': {
    title: "The 5 Best Restaurants in Granada (2025 Edition)",
    mainContent: <p className="text-xl text-gray-600">As food lovers ourselves, we're often asked where to find the best meals in the city. After much delicious research, here is our definitive list for 2025.</p>,
    sections: [
      {
        type: 'interactive', title: '1. El Garaje',
        description: <p>Restaurante El Garaje is Granada&apos;s hidden gem, an intimate, home-style spot where fresh, locally grown ingredients inspire a small but ever-changing menu. Each dish feels personal, blending Nicaraguan roots with global creativity. Inventive, and full of heart.</p>,
        images: ['/images/blog/restaurants/garaje-1.png', '/images/blog/restaurants/garaje-2.png', '/images/blog/restaurants/garaje-3.png', '/images/blog/restaurants/garaje-4.png'], rating: 5, price: 2, locationName: "El Garaje",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.9015277905686!2d-85.95076587948626!3d11.932476706168762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740cbe24a3dedb%3A0xb7389e402ee89ee5!2sRestaurante%20El%20Garaje!5e0!3m2!1sen!2sni!4v1762967051785!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '2. Monna Lisa',
        description: <p>Monna Lisa on Calle La Calzada is my go-to when the pizza craving hits in Granada. The wood-fired oven gives every pie that perfect crispy edge and smoky flavor, and the pastas are just as good — simple, fresh, and comforting. The vibe is relaxed, the service friendly, and it all feels effortlessly authentic. A slice of Italy in Granada.</p>,
        images: ['/images/blog/restaurants/monna-1.png', '/images/blog/restaurants/monna-2.png', '/images/blog/restaurants/monna-3.png', '/images/blog/restaurants/monna-4.png'], rating: 5, price: 3, locationName: "Monna Lisa",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.9114734772646!2d-85.94932295447725!3d11.92971326739967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740cbfdd7e7ab9%3A0x8c31fceb5e2cc758!2sMonna%20Lisa!5e0!3m2!1sen!2sni!4v1762968646281!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '3. El Zaguán',
        description: <p>El Zaguán, just behind Granada&apos;s cathedral, is the city&apos;s go-to grillhouse, smoky, lively, and full of local flavor. Known for its tender steaks and the famous fried guapote from Lake Nicaragua, it blends Nicaraguan tradition with a touch of elegance. Classic, flavorful, and perfectly Granada.</p>,
        images: ['/images/blog/restaurants/zahuan-1.png', '/images/blog/restaurants/zahuan-2.png', '/images/blog/restaurants/zahuan-4.png', '/images/blog/restaurants/zahuan-4.png'], rating: 4, price: 3, locationName: "El Zaguan Restaurant",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.1475598962031!2d-85.9537370489307!3d11.929650697771955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c953b02f3e5%3A0x2b3c6bcda8025dec!2sRestaurante%20El%20Zagu%C3%A1n!5e0!3m2!1sen!2sni!4v1762964680155!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '4. The Garden Cafe',
        description: <p>The Garden Café is Granada&apos;s leafy escape — a laid-back spot where fresh, colorful dishes meet a breezy courtyard vibe. Perfect for breakfast or a light lunch, it&apos;s known for its smoothies, wraps, and great coffee amid tropical calm. Fresh, vibrant, and effortlessly charming.</p>,
        images: ['/images/blog/restaurants/garden-1.png', '/images/blog/restaurants/garden-2.png', '/images/blog/restaurants/garden-3.png'], rating: 4, price: 3, locationName: "The Garden Cafe",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.8153497203316!2d-85.95320882891276!3d11.930768798965607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740ced47f22a79%3A0x3dd7db604132cab8!2sThe%20Garden%20Cafe!5e0!3m2!1sen!2sni!4v1762965242325!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '5. Pan de Vida',
        description: <p>Pan de Vida is one of those places that instantly feels like home — warm, welcoming, and filled with the smell of freshly baked bread. Their pastries, sandwiches, and hearty breakfasts are made with care, using fresh, wholesome ingredients. It&apos;s the perfect spot to slow down with a good coffee and watch Granada wake up. Cozy, genuine, and baked with love.</p>,
        images: ['/images/blog/restaurants/pandevida-1.png', '/images/blog/restaurants/pandevida-2.png', '/images/blog/restaurants/pandevida-3.png', '/images/blog/restaurants/pandevida-4.png'], rating: 4, price: 2, locationName: "Pan de vida",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.9114734772646!2d-85.94932295447725!3d11.92971326739967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740cbfbfe6855f%3A0x3ba1b8e0324f62e!2sPan%20De%20Vida%20Granada!5e0!3m2!1sen!2sni!4v1762968769216!5m2!1sen!2sni"
      },
    ]
  },
  'day-trips-from-granada': {
    title: "The 5 Best Day Trips from Granada",
    mainContent: <p className="text-xl text-gray-600">Granada's prime location makes it the perfect hub for exploring Nicaragua's natural wonders. Here are our top 5 recommended day trips, all easily accessible.</p>,
    sections: [
      {
        type: 'interactive', title: '1. Mombacho Volcano Cloud Forest',
        description: <p>Hike through a lush cloud forest atop a dormant volcano. The views are breathtaking. You can hike trails or even take a zip-line tour through the canopy.</p>,
        images: ['/images/blog/trips/mombacho-1.png', '/images/blog/trips/mombacho-2.png', '/images/blog/trips/mombacho-3.png', '/images/blog/trips/mombacho-4.png'], rating: 5, price: 2, locationName: "Mombacho Volcano Nature Reserve",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.603357599026!2d-86.031952!3d11.83446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f742d4103138b3d%3A0xb3e12f6f2a8b8d2b!2sMombacho%20Volcano%20Nature%20Reserve!5e0!3m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '2. Laguna de Apoyo',
        description: <p>Laguna de Apoyo is a natural wonder, a stunning volcanic crater lake with crystal-clear, warm waters perfect for swimming, kayaking, or simply floating the day away. Surrounded by lush forest and echoing with the sounds of tropical birds, it&apos;s the ultimate escape from Granada&apos;s heat and bustle. Peaceful, refreshing, and absolutely unforgettable.</p>,
        images: ['/images/blog/trips/laguna-1.png', '/images/blog/trips/laguna-2.png', '/images/blog/trips/laguna-3.png', '/images/blog/trips/laguna-4.png'], rating: 5, price: 2, locationName: "Paradiso Nicaragua",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.59038261333!2d-86.0569549251767!3d11.933569088294437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740f205090fccd%3A0xe906e9b82248aafd!2sParadiso%20Hostel%20%26%20Restaurante!5e0!3m2!1sen!2sni!4v1762981363829!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '3. Masaya Volcano Night Tour',
        description: <p>One of the most accessible active volcanoes in the world. A night tour allows you to drive right up to the crater's edge and peer down at the glowing, bubbling lava.</p>,
        images: ['/images/blog/trips/volcan-4.png', '/images/blog/trips/volcan-1.png', '/images/blog/trips/volcan-2.png', '/images/blog/trips/volcan-3.png'], rating: 5, price: 1, locationName: "Masaya Volcano National Park",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26253.076147300093!2d-86.16940518629924!3d12.006083513402325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7407201f44c605%3A0xd00b97c1d674be3!2sParque%20Nacional%20Volc%C3%A1n%20Masaya!5e0!3m2!1sen!2sni!4v1762982098271!5m2!1sen!2sni" 
      },
      {
        type: 'interactive', title: '4. Isletas de Granada Boat Tour',
        description: <p>Las Isletas de Granada are a breathtaking maze of tiny tropical islands scattered across Lake Nicaragua — each one lush, serene, and rich with wildlife. A boat tour here offers peaceful views, glimpses of howler monkeys, and a front-row seat to the lake&apols;s natural beauty. Tranquil, scenic, and uniquely Granadino.</p>,
        images: ['/images/blog/trips/isletas-1.png', '/images/blog/trips/isletas-2.png', '/images/blog/trips/isletas-3.png', '/images/blog/trips/isletas-4.png'], rating: 5, price: 1, locationName: "Marina Cocibolca",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6565.844872016999!2d-85.9300507249766!3d11.89988554095373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7472d35b18e5d3%3A0x22201524ac230cc3!2sMarina%20Cocibolca!5e0!3m2!1sen!2sni!4v1762982255907!5m2!1sen!2sni"
      },
      {
        type: 'interactive', title: '5. The White Towns (Pueblos Blancos)',
        description: <p>Visit the charming artisan villages in the hills above Masaya, known for their handmade pottery, wooden furniture, and beautiful nurseries.</p>,
        images: ['/images/blog/trips/pueblos-1.png', '/images/blog/trips/pueblos-2.png', '/images/blog/trips/pueblos-3.png', '/images/blog/trips/pueblos-4.png'], rating: 4, price: 1, locationName: "Catarina",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.88035252876!2d-86.08272!3d11.91671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7405e3f4b4f5d1%3A0x6e9f291351119b93!2sCatarina!5e0!3m2!1sen!2sni"
      },
      {
        type: 'inquireButton', text: 'We can help arrange any of these tours for you. All tours pick up directly from Casa Calala.',
        buttonText: 'Inquire About a Tour', email: 'realtholky@gmail.com', emailSubject: 'Day Trip Inquiry from Casa Calala Website',
      }
    ]
  },
  'is-granada-safe': {
    title: "Is Granada, Nicaragua Safe for Solo Travelers?",
   
    mainContent: (
      <div className="space-y-6 text-lg text-gray-700">
        <p>This is one of the most common questions we get, especially from solo travelers and first-time visitors to Central America. The short answer is: **yes, Granada is widely considered one of the safest cities in Nicaragua and a welcoming destination for solo travelers.**</p>
        <p>Like any city, it requires common sense and awareness. The main tourist areas, especially around Calle La Calzada and the central park, are well-policed and bustling with activity day and night. People are friendly and accustomed to international visitors.</p>
        <h3 className="text-2xl font-bold pt-4">Our Practical Tips for a Safe Stay:</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Be Aware of Your Surroundings:</strong> Don't flash expensive jewelry or large amounts of cash. Keep your phone and wallet secure, especially in crowded markets.</li>
          <li><strong>Use Trusted Transportation:</strong> We can help you arrange reliable taxis or shuttles. Avoid unmarked cabs, especially at night.</li>
          <li><strong>Stay in Well-Lit Areas at Night:</strong> While Granada is generally safe, it's always wise to stick to the main, populated streets after dark.</li>
          <li><strong>Trust Your Instincts:</strong> If a situation feels uncomfortable, simply remove yourself from it.</li>
        </ul>
        <p>By taking these simple precautions, solo travelers can confidently enjoy the immense beauty, history, and warmth that Granada has to offer. We've hosted many solo guests who have had wonderful, incident-free experiences.</p>
      </div>
    )
  },
  'our-story-casa-calala': {
    title: "Our Story: The Passion Behind the Fruit",
   
    mainContent: (
      <div className="space-y-6 text-lg text-gray-700">
                <p>Many of our guests ask, "What is a Calala?" The Calala, or passion fruit, is a vibrant, resilient fruit that grows on a beautiful vine. For us, it's the perfect symbol for our guesthouse and our love for Granada.</p>
        <p>Like the vine, we wanted to create a place that was deeply rooted in the local community, offering support and a foundation for a beautiful experience. Like the fruit, we wanted that experience to be vibrant, unique, and full of passion.</p>
        <p>We discovered Granada on a trip years ago and were captivated by its colonial charm, its warm people, and its incredible energy. We built Casa Calala not just as a business, but as our home and our way of sharing the magic of this city with travelers from around the world. Every detail, from the local art on the walls to the welcome drink we offer, is a reflection of that passion. We are so glad you're here to share it with us.</p>
      </div>
    )
  },
};

const proseClasses = "prose-lg lg:prose-xl max-w-none";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return <div className="text-center p-12"><h1 className="text-3xl font-bold">Post Not Found</h1></div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-12">
          <Link href="/blog" className="text-yellow-500 font-semibold hover:text-yellow-600">&larr; Back to The Granada Journal</Link>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">{post.title}</h1>
        </div>

        <div className={proseClasses}>{post.mainContent}</div>

        <div className="mt-12 space-y-16">
          {post.sections?.map((section, index) => {
            if (section.type === 'interactive') {
              return <InteractivePostSection key={index} {...section} />;
            }
            if (section.type === 'inquireButton') {
              const mailto = `mailto:${section.email}?subject=${encodeURIComponent(section.emailSubject)}`;
              return (
                <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
                  <p className="text-lg text-gray-700 mb-6">{section.text}</p>
                  <Link href={mailto} className="inline-block bg-green-600 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                    {section.buttonText}
                  </Link>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}