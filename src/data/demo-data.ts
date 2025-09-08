export interface DemoSection {
  id: string;
  title: string;
  description: string;
  pullRequestUrl: string;
  videoUrl?: string | string[];
  imageUrl?: string | string[];
  status: "completed" | "in-progress" | "in-qa";
}

export interface SprintInfo {
  title: string;
  weekRange: string;
  sprintNumber: string;
}

export interface DemoData {
  sprintInfo: SprintInfo;
  demoSections: DemoSection[];
}

export const demoData: DemoData = {
  sprintInfo: {
    title: "Sprint Demo",
    weekRange: "Aug 25th - Sep 5th",
    sprintNumber: "Sprint 37",
  },
  demoSections: [
    {
      id: "1",
      title: "Public spaces livestream event access",
      description:
        "Allow users to see livestreams of public spaces even if they are not a member.",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/10380",
      videoUrl: ["spaces.mov", "spaces.mov"],
      imageUrl: ["spaces.png", "spaces.png"],
      status: "completed",
    },
    {
      id: "2",
      title: "Livestream Transcriptions",
      description: "Demo of livestream subtitles in English and Portuguese",
      pullRequestUrl: "https://github.com/filoliveirawv/js-fargate-trasncriber",
      videoUrl: "subs.mov",
      status: "in-progress",
    },
  ],
};
