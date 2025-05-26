import React, { useState, useEffect } from "react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('scroll-smooth');
    }, []);

    return (
        <div className="bg-gray-900 text-white font-sans min-h-screen">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-gray-800 shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Teletick Bot</h1>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
                    <a href="#features" className="hover:text-blue-400 transition duration-300">Features</a>
                    <a href="#team" className="hover:text-blue-400 transition duration-300">Team</a>
                    <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 p-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <a href="#home" className="hover:text-blue-400 transition duration-300 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#features" className="hover:text-blue-400 transition duration-300 py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
                        <a href="#team" className="hover:text-blue-400 transition duration-300 py-2" onClick={() => setIsMenuOpen(false)}>Team</a>
                        <a href="#contact" className="hover:text-blue-400 transition duration-300 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn">Teletick Bot</h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">Multifunctional bot to help you with your Steam needs.</p>
                    <a
                        href="https://t.me/TeletickBot"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Add to Telegram
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bot Functionality</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Feature 1 */}
                        <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <svg className="w-10 h-10 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2z"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Weekly Free Games</h3>
                                <p>Notify users about the weekly free games using steamdb API.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <svg className="w-10 h-10 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Sale Event Alerts</h3>
                                <p>Notify users about upcoming big sale events using a server callback 7 days before the sale.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <svg className="w-10 h-10 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Account Valuation</h3>
                                <p>Tell users their Steam account worth.</p>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <svg className="w-10 h-10 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Inventory Analysis</h3>
                                <p>Tell users their Steam inventory worth per game.</p>
                            </div>
                        </div>
                        {/* Centered Feature 5 */}
                        <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 text-center">
                            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4m0 0V5m0 0H5m14 0V5m0 0h-2m2 0H9m11 0h-2M7 5H5m14 0h-2m-2 0h-2m-2 0h-2m-2 0h-2m2 0v2m0-2v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Game Statistics</h3>
                                <p className="mx-auto max-w-md">Tells users their most played games (top 5) and most valuable inventory items (top 5).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About the Team</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Team Member 1 */}
                        <div className="text-center p-6 bg-gray-800 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/150x150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-500" />
                            <h3 className="text-xl font-bold">tickbext</h3>
                            <p className="text-gray-400">Main Programmer</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="text-center p-6 bg-gray-800 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/150x150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-500" />
                            <h3 className="text-xl font-bold">tickbext</h3>
                            <p className="text-gray-400">Project Manager</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="text-center p-6 bg-gray-800 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/150x150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-500" />
                            <h3 className="text-xl font-bold">tickbext</h3>
                            <p className="text-gray-400">Sanitation Specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-800 py-10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <p>Email: <a href="mailto:bext@national.shitposting.agency" className="hover:text-blue-400 transition duration-300">bext@national.shitposting.agency</a></p>
                        <p>Phone: <a href="tel:88005553535" className="hover:text-blue-400 transition duration-300">88005553535</a></p>
                        <p>Telegram: <a href="https://t.me/tickbext" className="hover:text-blue-400 transition duration-300">@tickbext</a></p>
                    </div>
                    <p className="opacity-75">&copy; Teletick Bot 2025. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
```