import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from "@/app/components/core/dialog";
import { XIcon } from "lucide-react";

interface DialogBasicImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function DialogBasicImage({
  src,
  alt,
  children,
}: DialogBasicImageProps) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContainer>
        <DialogContent className="relative">
          <DialogImage
            src={src}
            alt={alt}
            className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
          />
        </DialogContent>
        <DialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
}
