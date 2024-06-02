import { Project } from "./types";

export const drumbar = {
    name: "5-Story Cylindrical LED Display for Rivers Casino",
    employer: 'Iontank',
    title: "Lead Software Developer",
    iconSrc: '/iontank.png',
    startDate: null,
    endDate: null,
    description: `
    Flying over downtown Pittsburgh at night reveals a brilliant wash of color along the Ohio River that emanates from an Iontank installation inside the Rivers Casino complex. The Drum Bar lighting feature is the focal point of the Rivers Casino and it stands over 80 feet tall. Before the Rivers commissioned Iontank for an evaluation and overhaul, the original Drum Bar system was running off aging electronics and was in dire need of an upgrade. Iontank replaced the entire heart of the sculpture, providing all new LED lights, electronics and custom software designed and written from the ground up.
    The Drum Bar installation now runs 24 hours a day, 7 days a week displaying light shows and video content across all 74,220 LEDs. 43 networked microcomputers dispatch synchronized content at a consistent 30 frames per second and integrated monitoring tracks the status of the entire system. Iontank even designed a palette of custom light shows, animated compositions and videos including ones for special events and major holidays. The Drum Bar installation has successfully been given a really, really bright new life.
    `.trim(),
    href: "https://iontank.com/projects/drumbar"
} satisfies Project;