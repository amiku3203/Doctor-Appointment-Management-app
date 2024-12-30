import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignIn from "./SignIN";
import SignUp from "./SignUp";

function AuthLayout() {
  const [showSignIn, setShowSignIn] = useState(true); // Toggle between SignIn and SignUp

  const slideAnimation = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const direction = showSignIn ? 1 : -1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center overflow-hidden">
      <AnimatePresence custom={direction}>
        {showSignIn ? (
          <motion.div
            key="signin"
            custom={direction}
            variants={slideAnimation}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute w-full"
          >
            <SignIn onSwitch={() => setShowSignIn(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            custom={direction}
            variants={slideAnimation}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute w-full"
          >
            <SignUp onSwitch={() => setShowSignIn(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default  AuthLayout;