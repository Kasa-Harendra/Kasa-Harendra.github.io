import React, { useState } from 'react';
import BounceCards from './ui/BounceCards';
import FadeInSection from './ui/FadeInSection';

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/certifications/cs50p-harvard.png",
        "/certifications/gen-ai-google-cloud.png",
        "/certifications/data-science-101.png",
        "/certifications/competitive-programming-nptel.png"
    ];

    return (
        <section id="certifications" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Certifications & <span className="text-purple-400">Achievements</span>
                    </h2>
                </FadeInSection>
                <div className="flex justify-center">
                    <FadeInSection delay={0.2}>
                        <BounceCards 
                            className="custom-bounceCards"
                        images={images}
                        containerWidth={1200}
                        containerHeight={350}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        enableHover
                            onImageClick={(src) => setSelectedImage(src)}
                        />
                    </FadeInSection>
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-10 right-10 md:top-14 md:right-14 text-white hover:text-gray-300 p-2 transition-colors z-[10000] bg-black/50 hover:bg-black/80 rounded-full"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div 
                        className="relative max-w-5xl w-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage} 
                            alt="Certificate" 
                            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                        
                        <a 
                            href={selectedImage} 
                            download 
                            className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Certificate
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;