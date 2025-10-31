// Helper function to format date range
function getWeekRange(): string {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 11);

  const formatDate = (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    return `${month} ${day}${suffix}`;
  };

  return `${formatDate(startDate)} - ${formatDate(today)}`;
}

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
    weekRange: getWeekRange(),
    sprintNumber: "Sprint 41",
  },
  demoSections: [
    {
      id: "1",
      title: "Subtitle Option",
      description: "Option to enable subtitles was showing for native",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11857",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "2",
      title: "Security Vulnerability",
      description: "Users could delete livestreams from any organization",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11869",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "3",
      title: "Native Streams Not Working",
      description: "Tokens became invalid with hours going back",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11818",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "4",
      title: "Subtitles Not Displaying On Recordings",
      description: "Redesign work moved the captions to a different location",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11646",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "5",
      title: "Livestream Recorded Subtitles",
      description:
        "Subtitles not showing on recorded livestreams after redesign work",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11646",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "6",
      title: "Front Camera Mirror",
      description:
        "Previously in QA - Now completed - Live stream front camera is mirrored",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11627",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "7",
      title: "RTMPs Subtitles",
      description: "Plug our app into RTMPs subtitles task",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11740",
      videoUrl: [],
      imageUrl: [],
      status: "completed",
    },
    {
      id: "8",
      title: "Livestream Recorded Subtitles",
      description:
        "Our livestreams will now run through the same flow as video uploads to generate subtitles",
      pullRequestUrl: "https://github.com/workvivo/workvivo/pull/11796",
      videoUrl: ["recording-subs-demo.mov"],
      imageUrl: [],
      status: "in-qa",
    },
  ],
};
