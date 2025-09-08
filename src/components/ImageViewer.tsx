import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ImageViewerProps {
  src: string;
  alt?: string;
  onDialogClose?: () => void;
}

export function ImageViewer({ src, alt, onDialogClose }: ImageViewerProps) {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open && typeof onDialogClose === "function") {
          onDialogClose();
        }
      }}
    >
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="cursor-zoom-in max-h-[60vh] max-w-full"
        />
      </DialogTrigger>
      <DialogContent className="bg-black p-0 flex items-center justify-center">
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 bg-black/50 text-white hover:bg-black/70 border border-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
