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
      title: "Backup End",
      description: "Ended at was not being set when backup stream was enabled",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/10701",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "2",
      title: "Duplicated event",
      description: "Fix duplicated records when creating a new stream",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11142",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "3",
      title: "Livestream Redesign",
      description: "Redesign of the livestreams",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11449",
      videoUrl: [],
      imageUrl: [],
      status: "in-progress",
    },
  ],
};
