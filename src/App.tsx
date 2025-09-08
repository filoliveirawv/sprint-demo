import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { VideoPlayer } from "./components/VideoPlayer";
import { ImageViewer } from "./components/ImageViewer";
import { ExternalLink, GitPullRequest } from "lucide-react";
import { demoData, type DemoSection } from "./data/demo-data";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/carousel";
import * as React from "react";

function StatusBadge({ status }: { status: DemoSection["status"] }) {
  const variants = {
    completed: { variant: "default" as const, label: "Completed" },
    "in-qa": { variant: "secondary" as const, label: "In QA" },
    "in-progress": { variant: "outline" as const, label: "In Progress" },
  };

  const { variant, label } = variants[status];

  return <Badge variant={variant}>{label}</Badge>;
}

export default function App() {
  const { sprintInfo, demoSections } = demoData;

  const featuresDelivered = demoSections.filter(
    (section) => section.status === "completed"
  ).length;
  const inQA = demoSections.filter(
    (section) => section.status === "in-qa"
  ).length;
  const inProgress = demoSections.filter(
    (section) => section.status === "in-progress"
  ).length;

  // Ref for carousel focus restoration
  const carouselRefs = {};

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">{sprintInfo.title}</h1>
          <p className="text-muted-foreground">
            {sprintInfo.weekRange} • {sprintInfo.sprintNumber}
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sprint Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-2xl">{featuresDelivered}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-2xl">{inQA}</div>
                <div className="text-sm text-muted-foreground">In QA</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-2xl">{inProgress}</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Sections */}
        <div className="grid gap-6">
          {demoSections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 mb-2">
                      {section.title}
                      <StatusBadge status={section.status} />
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={section.pullRequestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GitPullRequest className="h-4 w-4" />
                      View PR
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col gap-4 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View Slides</Button>
                  </DialogTrigger>
                  <DialogContent className="bg-background p-8 flex flex-col items-center justify-center">
                    {(() => {
                      // Create a ref for each section
                      if (!carouselRefs[section.id]) {
                        carouselRefs[section.id] = React.createRef();
                      }
                      const carouselRef = carouselRefs[section.id];
                      const images = Array.isArray(section.imageUrl)
                        ? section.imageUrl
                        : section.imageUrl
                        ? [section.imageUrl]
                        : [];
                      const videos = Array.isArray(section.videoUrl)
                        ? section.videoUrl
                        : section.videoUrl
                        ? [section.videoUrl]
                        : [];
                      const items = [
                        ...images.map((url) => ({ type: "image", url })),
                        ...videos.map((url) => ({ type: "video", url })),
                      ];
                      return (
                        <Carousel ref={carouselRef}>
                          <CarouselContent className="p-4">
                            {items.map((item, i) => (
                              <CarouselItem
                                key={i}
                                className="flex flex-col items-center justify-center w-full h-full"
                              >
                                <span className="mb-2 font-semibold text-lg">
                                  {i + 1} / {items.length}
                                </span>
                                {item.type === "image" ? (
                                  <ImageViewer
                                    src={`\\src\\data\\media\\${item.url}`}
                                    alt={section.title}
                                    onDialogClose={() =>
                                      carouselRef.current?.focus()
                                    }
                                  />
                                ) : (
                                  <VideoPlayer
                                    src={item.url}
                                    title={section.title}
                                  />
                                )}
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      );
                    })()}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
