import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Play, X } from "lucide-react";
import { Key } from "react";

interface VideoPlayerProps {
  key?: Key;
  src: string;
  title: string;
}

export function VideoPlayer({ key, src, title }: VideoPlayerProps) {
  // ...existing code...

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group cursor-pointer">
          <video
            src={`\\src\\data\\media\\${src}`}
            className="w-full h-full object-cover"
            preload="metadata"
            muted
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="bg-white/90 rounded-full p-4 scale-90 group-hover:scale-100 transition-transform duration-200">
              <Play className="h-6 w-6 text-gray-800" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Click to play
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent" hideCloseButton>
        <DialogTitle className="sr-only">Video Demo: {title}</DialogTitle>
        <div className="flex items-center justify-center">
          <video
            src={`\\src\\data\\media\\${src}`}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain"
            style={{ maxWidth: "98vw", maxHeight: "98vh" }}
          />
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer absolute top-6 right-6 bg-black/50 text-white hover:bg-white/70 hover:text-white/70 border border-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
