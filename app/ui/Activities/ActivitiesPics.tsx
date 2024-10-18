"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ActivityPicturesProps {
  image1: string;
  image2: string;
  image3: string;
}

export default function ActivityPictures({
  image1,
  image2,
  image3,
}: ActivityPicturesProps) {
  return (
    <>
      <div className="w-full h-52 lg:h-64">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-full h-52 lg:h-64"
        >
          <Image
            src={image1}
            alt="AKCSE"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-52 lg:h-64"
          />
        </motion.div>
      </div>
      <div className="flex mt-1.5 w-full h-32 lg:h-44 gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-2/3 h-full"
        >
          <Image
            src={image2}
            alt="AKCSE"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="cursor-grab w-1/3 h-full"
        >
          <Image
            src={image3}
            alt="AKCSE"
            width={200}
            height={200}
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>
      </div>
    </>
  );
}


