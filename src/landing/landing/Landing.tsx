import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

import HutLookout from "@/assets/HutLookout.jpg";
import AliciaRidge from "@/assets/AliciaRidge.jpg";
import Cottage from "@/assets/Cottage.jpg";
import Kawa from "@/assets/Kawa.jpg";
import Boodle from "@/assets/Boodle.jpg";
import Location from "@/assets/Location.png";
import Kubo from "@/assets/Kubo.jpg";
import GlampingKubo from "@/assets/GlampingKubo.jpg";

/* 
  Variants for section entrances and staggered child items.
  We keep the text & images as is, only adding animations.
*/
const sectionVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, rotate: -2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function LandingPage() {
    return (
        <div className="min-h-screen font-sans scroll-smooth">
            {/* Glassmorphic Sticky Navbar */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50
                           bg-[var(--color-brown-dark)]/80
                           backdrop-blur-md
                           text-white
                           py-3 px-6 shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Alicia&apos;s Ridge Eco Park</h1>
                    <nav className="space-x-4">
                        {/* ROUTING HERE IF ANY */}
                    </nav>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="pt-12">
                {/* Two-Column Hero Section */}
                <section className="relative pt-16 pb-24 bg-[var(--color-green-tea)]/40 overflow-hidden">
                    {/* Wave Container with a fixed height to ensure a consistent wave size */}
                    <div className="absolute top-0 left-0 w-full h-[220px] md:h-[300px] pointer-events-none -z-10 overflow-hidden">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="var(--color-green-olive)"
                                fillOpacity="0.5"
                                d="M0,128L80,160C160,192,320,256,480,261.3C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
                        {/* Left Column: Hero Text */}
                        <motion.div
                            className="flex-1 text-center md:text-left"
                            initial={{ opacity: 0, rotate: -3, scale: 0.95 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brown-dark)] mb-4">
                                Escape to a Modern Nature Retreat
                            </h2>
                            <p className="text-lg text-brown-dark max-w-xl mb-6">
                                Discover the perfect balance of adventure, comfort, and cultural charm in the lush landscapes of Agusan del Norte.
                            </p>
                            <Button
                                variant="default"
                                size="lg"
                                className="rounded-full px-8 py-3 shadow-lg
                                           bg-[var(--color-brown-cocoa)]
                                           text-white
                                           hover:scale-105 transition-transform"
                            >
                                Book Now
                            </Button>
                        </motion.div>

                        {/* Right Column: Hero Image in a Glassmorphic Container */}
                        <motion.div
                            className="flex-1 flex items-center justify-center"
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl">
                                <motion.img
                                    src={AliciaRidge}
                                    alt="Eco Park Hero"
                                    className="rounded-lg w-full h-auto object-cover"
                                    whileHover={{ scale: 1.03, rotate: 1 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="-translate-y-16 md:-translate-y-20">
                    <svg
                        className="w-full h-16 md:h-24"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="var(--color-green-tea)"
                            d="M0,192L80,197.3C160,203,320,213,480,218.7C640,224,800,224,960,202.7C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* Overview Section */}
                <motion.section
                    id="overview"
                    className="py-16 container mx-auto px-6"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-[var(--color-brown-cocoa)] text-center">
                        Our Story
                    </h3>
                    <div className="max-w-4xl mx-auto space-y-6 text-center text-brown-dark">
                        <p className="text-lg leading-relaxed">
                            Nestled in the heart of Agusan del Norte, Alicia&apos;s Ridge Eco Park is a haven for nature lovers. Here, the serenity of lush forests meets the vibrant energy of Filipino culture, offering visitors an immersive experience that rejuvenates the soul. From early morning mist over the ridges to evening bonfires under a star-studded sky, every moment promises an unforgettable escape.
                        </p>
                        <motion.img
                            src={HutLookout}
                            alt="Overview Placeholder"
                            className="mx-auto rounded-lg shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        />
                        <p className="text-lg leading-relaxed">
                            Established by local families passionate about preserving the environment, the eco park combines modern comforts with a deep respect for tradition. Embrace sustainable practices, learn about Filipino customs, and create lasting memories—all while surrounded by panoramic views of the region&apos;s natural beauty.
                        </p>
                    </div>
                </motion.section>

                {/* Accommodations & Amenities */}
                <motion.section
                    id="amenities"
                    className="py-16 bg-[var(--color-green-tea)]/40"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-10 text-brown-dark text-center">
                            Accommodations &amp; Amenities
                        </h3>

                        {/* Stagger container for cards */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {[
                                {
                                    title: "Bamboo Cabin",
                                    description:
                                        "A luxurious cabin crafted from bamboo and nipa, exuding a warm Filipino ambiance. Accommodates up to 3 guests with full meal inclusions.",
                                    imgUrl: Cottage,
                                },
                                {
                                    title: "Kubo",
                                    description:
                                        "A traditional Filipino hut designed for 2 guests, offering an intimate and authentic lodging experience.",
                                    imgUrl: Kubo,
                                },
                                {
                                    title: "Glamping Kubo",
                                    description:
                                        "Experience elevated comfort in a traditional hut with modern glamping features—perfect for couples seeking adventure.",
                                    imgUrl: GlampingKubo,
                                },
                            ].map((accommodation) => (
                                <motion.div
                                    key={accommodation.title}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Card className="shadow-xl hover:shadow-2xl transition-transform duration-300
                                                     bg-white/20 backdrop-blur-md
                                                     border border-white/20
                                                     rounded-xl">
                                        <CardHeader className="px-6 pt-6">
                                            <h4 className="text-2xl font-semibold mb-2 text-[var(--color-brown-cocoa)]">
                                                {accommodation.title}
                                            </h4>
                                        </CardHeader>
                                        <CardContent className="px-6 pb-6 space-y-4">
                                            <img
                                                src={accommodation.imgUrl}
                                                alt={accommodation.title}
                                                className="rounded-lg w-full h-auto object-cover shadow"
                                            />
                                            <p className="text-brown-dark">
                                                {accommodation.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-10 space-y-4 max-w-2xl mx-auto text-center text-brown-dark"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p>
                                <strong>Kawa Hot Bath:</strong> Immerse yourself in a traditional hot bath experience with a modern twist, set against majestic mountain backdrops. Relax under the open sky as you soak in a large cauldron of soothing warm water.
                            </p>
                            <motion.img
                                src={Kawa}
                                alt="Kawa Hot Bath"
                                className="mx-auto rounded-lg shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            />
                            <p>
                                <strong>Instagrammable Spots:</strong> Capture unforgettable moments at uniquely designed viewpoints, nest-like structures, and scenic decks that showcase nature in all its glory.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Dining Options */}
                <motion.section
                    className="py-16 container mx-auto px-6"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-brown-cocoa text-center">
                        Dining Experience
                    </h3>
                    <div className="max-w-3xl mx-auto text-center text-brown-dark space-y-6">
                        <p className="text-lg leading-relaxed">
                            Indulge in our signature boodle fight—a vibrant communal feast featuring an array of grilled pork barbecue, fresh seafood, and seasonal fruits that celebrates the spirit of togetherness. Every meal is prepared with locally sourced ingredients, ensuring both flavor and freshness.
                        </p>
                        <motion.img
                            src={Boodle}
                            alt="Dining Placeholder"
                            className="mx-auto rounded-lg shadow-lg"
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 120 }}
                        />
                        <p className="text-lg leading-relaxed">
                            Whether you prefer a quiet dinner under the stars or a lively gathering with friends, our dining areas cater to every mood. Enjoy authentic Filipino cuisine that highlights the region&apos;s culinary heritage, complemented by refreshing tropical drinks.
                        </p>
                    </div>
                </motion.section>

                {/* Booking Information */}
                <motion.section
                    id="booking"
                    className="py-16 bg-[var(--color-green-tea)]/40"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-8 text-brown-dark text-center">
                            Reserve Your Stay
                        </h3>
                        <div className="max-w-xl mx-auto text-brown-dark space-y-6">
                            <ul className="list-disc pl-8 space-y-4 text-lg">
                                <li>
                                    <strong>Bamboo Cabin:</strong> ₱3,599 (3 pax, all meals included)
                                </li>
                                <li>
                                    <strong>Kubo:</strong> ₱1,199 (2 pax with free breakfast)
                                </li>
                                <li>
                                    <strong>Glamping Kubo:</strong> ₱1,099 (2 pax with free breakfast)
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed">
                                To secure your preferred accommodation, we recommend booking at least two weeks in advance—especially during peak travel seasons. All bookings include complimentary access to our common areas, nature trails, and free Wi-Fi in select zones.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Contact Details */}
                <motion.section
                    className="py-16 container mx-auto px-6"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-brown-cocoa text-center">
                        Get in Touch
                    </h3>
                    <div className="text-lg text-brown-dark max-w-xl mx-auto text-center space-y-4">
                        <p>
                            <strong>Phone:</strong>{" "}
                            <a
                                href="tel:09773343162"
                                className="text-[var(--color-brown-cocoa)] hover:underline"
                            >
                                0977 334 3162
                            </a>
                        </p>
                        <p>
                            <strong>Facebook Page:</strong>{" "}
                            <a
                                href="https://www.facebook.com/AliciasRidgeEcoPark"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-brown-cocoa)] hover:underline"
                            >
                                Alicia&apos;s Ridge Eco Park
                            </a>
                        </p>
                        <p className="leading-relaxed">
                            Our friendly staff is ready to assist you with any inquiries about accommodations, dining, or special requests. Feel free to give us a call or send us a message on Facebook—we&apos;d love to hear from you!
                        </p>
                    </div>
                </motion.section>

                {/* Directions */}
                <motion.section
                    className="py-16 bg-[var(--color-green-tea)]/40"
                    variants={sectionVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-8 text-brown-dark text-center">
                            How to Find Us
                        </h3>
                        <div className="text-lg text-brown-dark max-w-3xl mx-auto space-y-6">
                            <p>
                                <strong>From Butuan City Domestic Airport:</strong> We are located approximately 35 kilometers away, which translates to roughly a 28-minute drive. Simply follow the national highway towards Buenavista until you see signposts for Alicia&apos;s Ridge Eco Park.
                            </p>
                            <motion.img
                                src={Location}
                                alt="Map Directions"
                                className="mx-auto rounded-lg shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            />
                            <p>
                                <strong>Public Transportation:</strong> Vans or buses bound for Nasipit in Agusan del Norte operate regularly. Inform the driver to drop you off at Alicia&apos;s Ridge Eco Park, and they&apos;ll stop at our entrance.
                            </p>
                            <p>
                                <strong>By Car:</strong> If you prefer to drive, set your navigation app to &quot;Alicia&apos;s Ridge Eco Park&quot; in Buenavista, Agusan del Norte. We offer ample on-site parking for all visitors.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </main>

            {/* Glassmorphic Footer with Call-to-Action */}
            <motion.footer
                className="bg-[var(--color-brown-dark)]/70
                           backdrop-blur-md
                           text-white
                           py-8 px-6
                           border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="container mx-auto text-center">
                    <p className="text-lg">
                        &copy; {new Date().getFullYear()} Alicia&apos;s Ridge Eco Park. All rights reserved.
                    </p>
                    <motion.div
                        className="mt-4 inline-block"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.08 }}
                    >
                        <Button
                            variant="outline"
                            className="rounded-full px-10 py-3 shadow-lg hover:scale-105 transition-transform
                                       bg-[var(--color-green-moss)]
                                       text-white"
                        >
                            Book Now
                        </Button>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    );
}
