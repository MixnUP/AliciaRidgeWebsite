import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
                        {/* ADD ROUTES IF ANY */}
                    </nav>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="pt-20">
                {/* Two-Column Hero Section */}
                <section className="relative pt-16 pb-24 bg-[var(--color-green-tea)]/40">
                    {/* Subtle wave behind the hero */}
                    <div className="absolute inset-0 pointer-events-none -z-10">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="var(--color-green-olive)"
                                fillOpacity="0.3"
                                d="M0,128L80,160C160,192,320,256,480,261.3C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
                        {/* Left Column: Hero Text */}
                        <motion.div
                            className="flex-1 text-center md:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
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
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl">
                                <img
                                    src="/assets/eco-park-hero.jpg"
                                    alt="Eco Park Hero"
                                    className="rounded-lg w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="relative">
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
                <section id="overview" className="py-16 container mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-bold mb-8 text-[var(--color-brown-cocoa)] text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Story
                    </motion.h3>
                    <motion.p
                        className="text-lg text-brown-dark leading-relaxed max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Nestled in the heart of Agusan del Norte, Alicia&apos;s Ridge Eco Park is a haven for nature lovers. Here, the serenity of lush landscapes meets the vibrant energy of Filipino culture, offering visitors an immersive experience that rejuvenates the soul.
                    </motion.p>
                </section>

                {/* Accommodations & Amenities */}
                <section id="amenities" className="py-16 bg-[var(--color-green-tea)]/40">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-10 text-brown-dark text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Accommodations &amp; Amenities
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Bamboo Cabin",
                                    description:
                                        "A luxurious cabin crafted from bamboo and nipa, exuding a warm Filipino ambiance. Accommodates up to 3 guests with full meal inclusions.",
                                },
                                {
                                    title: "Kubo",
                                    description:
                                        "A traditional Filipino hut designed for 2 guests, offering an intimate and authentic lodging experience.",
                                },
                                {
                                    title: "Glamping Kubo",
                                    description:
                                        "Experience elevated comfort in a traditional hut with modern glamping features—perfect for couples seeking adventure.",
                                },
                            ].map((accommodation, index) => (
                                <motion.div
                                    key={accommodation.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 * index }}
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
                                        <CardContent className="px-6 pb-6">
                                            <p className="text-brown-dark">
                                                {accommodation.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-10 space-y-4 max-w-2xl mx-auto text-center text-brown-dark"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p>
                                <strong>Kawa Hot Bath:</strong> Immerse yourself in a traditional hot bath experience with a modern twist, set against majestic mountain backdrops.
                            </p>
                            <p>
                                <strong>Instagrammable Spots:</strong> Capture unforgettable moments at uniquely designed spots that showcase nature in all its glory.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Dining Options */}
                <section className="py-16 container mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-bold mb-8 text-brown-cocoa text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Dining Experience
                    </motion.h3>
                    <motion.p
                        className="text-lg text-brown-dark leading-relaxed max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Indulge in our signature boodle fight—a vibrant communal feast featuring an array of grilled pork barbecue, fresh seafood, and seasonal fruits that celebrates the spirit of togetherness.
                    </motion.p>
                </section>

                {/* Booking Information */}
                <section id="booking" className="py-16 bg-[var(--color-green-tea)]/40">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-brown-dark text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Reserve Your Stay
                        </motion.h3>
                        <motion.ul
                            className="list-disc pl-8 space-y-4 text-lg text-brown-dark max-w-lg mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <li>
                                <strong>Bamboo Cabin:</strong> ₱3,599 (3 pax, all meals included)
                            </li>
                            <li>
                                <strong>Kubo:</strong> ₱1,199 (2 pax with free breakfast)
                            </li>
                            <li>
                                <strong>Glamping Kubo:</strong> ₱1,099 (2 pax with free breakfast)
                            </li>
                        </motion.ul>
                    </div>
                </section>

                {/* Contact Details */}
                <section className="py-16 container mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-bold mb-8 text-brown-cocoa text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in Touch
                    </motion.h3>
                    <motion.div
                        className="text-lg text-brown-dark max-w-xl mx-auto text-center space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
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
                    </motion.div>
                </section>

                {/* Directions */}
                <section className="py-16 bg-[var(--color-green-tea)]/40">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-brown-dark text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            How to Find Us
                        </motion.h3>
                        <motion.div
                            className="text-lg text-brown-dark max-w-3xl mx-auto space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p>
                                <strong>From Butuan City Domestic Airport:</strong> Approximately 35 kilometers away, roughly a 28-minute drive.
                            </p>
                            <p>
                                <strong>Public Transportation:</strong> Vans or buses bound for Nasipit; simply inform the driver to drop you off at the park.
                            </p>
                            <p>
                                <strong>By Car:</strong> Set your navigation to &quot;Alicia&apos;s Ridge Eco Park&quot; in Buenavista, Agusan del Norte. On-site parking available.
                            </p>
                        </motion.div>
                    </div>
                </section>
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
