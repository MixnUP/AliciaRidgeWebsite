import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
    return (
        <div className="min-h-screen font-sans scroll-smooth bg-gray-50">
            {/* Slim Sticky Navbar */}
            <motion.header
                className="bg-indigo-800 bg-opacity-90 text-white py-3 px-6 shadow-md fixed top-0 left-0 right-0 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Alicia&apos;s Ridge Eco Park</h1>
                    {/* Minimal navigation for future expansion */}
                    <nav className="space-x-4">
                        <a href="#overview" className="hover:underline">
                            Overview
                        </a>
                        <a href="#amenities" className="hover:underline">
                            Amenities
                        </a>
                        <a href="#booking" className="hover:underline">
                            Booking
                        </a>
                    </nav>
                </div>
            </motion.header>

            {/* Hero Section with layered animations */}
            <main className="pt-20">
                <section
                    className="relative flex items-center justify-center h-[75vh] overflow-hidden"
                    style={{
                        backgroundImage: "url('/assets/eco-park-hero.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Animated gradient overlay */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                            background: "linear-gradient(270deg, #4F46E5, #8B5CF6, #A78BFA, #C4B5FD)",
                            backgroundSize: "400% 400%",
                            opacity: 0.6,
                        }}
                    />
                    {/* Dark overlay for text contrast */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    {/* Hero content */}
                    <div className="container mx-auto relative z-10 text-center px-4">
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Escape to Nature&apos;s Embrace
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Experience the perfect blend of adventure, relaxation, and Filipino cultural charm amidst breathtaking natural landscapes.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <Button
                                variant="default"
                                size="lg"
                                className="rounded-full px-10 py-3 shadow-xl hover:scale-105 transition-transform bg-purple-600 text-white"
                            >
                                Book Now
                            </Button>
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
                            fill="#F3F4F6"
                            d="M0,192L80,197.3C160,203,320,213,480,218.7C640,224,800,224,960,202.7C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* Overview Section */}
                <section id="overview" className="py-16 container mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-bold mb-8 text-indigo-900 text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Story
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Nestled in the heart of Agusan del Norte, Alicia&apos;s Ridge Eco Park is a haven for nature lovers. Here, the serenity of lush landscapes meets the vibrant energy of Filipino culture, offering visitors an immersive experience that rejuvenates the soul.
                    </motion.p>
                </section>

                {/* Accommodations & Amenities */}
                <section id="amenities" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-10 text-indigo-900 text-center"
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
                                        "A luxurious cabin crafted from bamboo and nipa, providing a warm Filipino ambiance. Accommodates up to 3 guests with full meal inclusions.",
                                },
                                {
                                    title: "Kubo",
                                    description:
                                        "A traditional Filipino hut designed for 2 guests, delivering an intimate and authentic experience.",
                                },
                                {
                                    title: "Glamping Kubo",
                                    description:
                                        "An elevated stay in a traditional hut enhanced with modern glamping features. Ideal for couples seeking adventure.",
                                },
                            ].map((accommodation, index) => (
                                <motion.div
                                    key={accommodation.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 * index }}
                                >
                                    <Card className="shadow-xl hover:shadow-2xl transition-transform duration-300 bg-white/70 backdrop-blur-md rounded-xl">
                                        <CardHeader className="px-6 pt-6">
                                            <h4 className="text-2xl font-semibold mb-2 text-indigo-900">
                                                {accommodation.title}
                                            </h4>
                                        </CardHeader>
                                        <CardContent className="px-6 pb-6">
                                            <p className="text-gray-800">{accommodation.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-10 space-y-4 max-w-2xl mx-auto text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p>
                                <strong>Kawa Hot Bath:</strong> Immerse yourself in a traditional hot bath experience with a modern twist, set against majestic mountain backdrops.
                            </p>
                            <p>
                                <strong>Instagrammable Spots:</strong> Capture unforgettable moments at uniquely designed spots that frame nature in all its glory.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Dining Options */}
                <section className="py-16 container mx-auto px-6">
                    <motion.h3
                        className="text-3xl font-bold mb-8 text-indigo-900 text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Dining Experience
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Indulge in the signature boodle fight—an eclectic feast of grilled pork barbecue, fresh seafood, and seasonal fruits served in a communal style that celebrates togetherness.
                    </motion.p>
                </section>

                {/* Booking Information */}
                <section id="booking" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-indigo-900 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Reserve Your Stay
                        </motion.h3>
                        <motion.ul
                            className="list-disc pl-8 space-y-4 text-lg text-gray-800 max-w-lg mx-auto"
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
                        className="text-3xl font-bold mb-8 text-indigo-900 text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in Touch
                    </motion.h3>
                    <motion.div
                        className="text-lg text-gray-700 max-w-xl mx-auto text-center space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            <strong>Phone:</strong>{" "}
                            <a href="tel:09773343162" className="text-indigo-600 hover:underline">
                                0977 334 3162
                            </a>
                        </p>
                        <p>
                            <strong>Facebook Page:</strong>{" "}
                            <a
                                href="https://www.facebook.com/AliciasRidgeEcoPark"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                Alicia&apos;s Ridge Eco Park
                            </a>
                        </p>
                    </motion.div>
                </section>

                {/* Directions */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-indigo-900 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            How to Find Us
                        </motion.h3>
                        <motion.div
                            className="text-lg text-gray-700 max-w-3xl mx-auto space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p>
                                <strong>From Butuan City Domestic Airport:</strong> Approximately 35 kilometers away, roughly a 28-minute drive.
                            </p>
                            <p>
                                <strong>Public Transportation:</strong> Vans or buses bound for Nasipit; inform the driver to drop you off at the park.
                            </p>
                            <p>
                                <strong>By Car:</strong> Set your navigation to "Alicia&apos;s Ridge Eco Park" in Buenavista, Agusan del Norte. On-site parking available.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Creative Footer with Call-to-Action */}
            <motion.footer
                className="bg-indigo-800 text-white py-8 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="container mx-auto text-center">
                    <p className="text-lg">&copy; {new Date().getFullYear()} Alicia&apos;s Ridge Eco Park. All rights reserved.</p>
                    <motion.div
                        className="mt-4 inline-block"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="rounded-full px-10 py-3 shadow-lg hover:scale-105 transition-transform bg-purple-600 text-white"
                        >
                            Book Now
                        </Button>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    );
}
