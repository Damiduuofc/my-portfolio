"use client";

import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

const LottieClient = ({ copied }: { copied: boolean }) => {
  if (!copied) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
        
      <Lottie
        animationData={animationData}
        loop={false}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LottieClient;
