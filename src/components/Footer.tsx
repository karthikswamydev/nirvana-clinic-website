import { Link } from "@tanstack/react-router";

export const Footer = () => {
    return (
        <>
        
        <section
            className="py-16 lg:py-20 px-4 sm:px-6"
            style={{ backgroundColor: "#2d545e" }}
            aria-labelledby="prefooter-cta-heading"
        >
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 id="prefooter-cta-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Begin your path to balanced, natural healing
                </h2>
                <p className="text-lg text-white/85 leading-relaxed">
                    Book a consultation or reach out with questions—we&apos;re here to help you take the next step.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 sm:py-4 text-base font-semibold text-brand-forest shadow-lg shadow-black/15 transition hover:bg-brand-sage"
                >
                    Contact Us
                </Link>
            </div>
        </section>
        <footer
            className="text-slate-300 py-12 border-t border-white/10"
            style={{ backgroundColor: "#15282e" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                        <img 
            className='max-w-[200px] h-auto object-contain'
            src="/brand/nirvana-emblem.png"/>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Join us on a transformative journey towards holistic wellness—naturopathic care that honors the body&apos;s innate ability to heal.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </div>
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </div>
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6">Navigation</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="/treatments" className="hover:text-blue-400 transition-colors">Treatments</a></li>
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="/#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6">Useful links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
                            <li><a href="/facilities" className="hover:text-blue-400 transition-colors">Facilities</a></li>
                            <li><a href="/gallery" className="hover:text-blue-400 transition-colors">Vlogs</a></li>
                            <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our services</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Specialized wellness programs</a></li>
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Customized health packages</a></li>
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Workshops &amp; training</a></li>
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Online &amp; teleconsultation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5   mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Nirvana Integrated Clinic<br />Paribalan Complex,<br />East Coast Road, Near Bus stand,<br />Manamelkudi,<br />Pudukkottai (dt) – 614620<br />Tamil Nadu</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5   shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>7448811001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5   shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>contact@nirvanaclinic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Nirvana Clinic. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

