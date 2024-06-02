
import { Project } from "./types";

export const digitalCampfire = {
    name: "Google Digital Campfire",
    employer: 'Iontank',
    title: "Lead Software Developer",
    iconSrc: '/iontank.png',
    startDate: null,
    endDate: null,
    description: `
    The Google Digital Campfire is an interactive art-object designed to evoke the feeling of sharing stories with friends around a glowing fire. Today Google hosts conversations with their clients around Digital Campfires in multiple cities around the world.

    Each Campfire uses 56 synchronized Android devices, thousands of LED's, and a variety of supporting components to create a highly polished, interactive system.
    
    The design encourages users to gather around and engage with the Campfire from all sides. It can be controlled with simple voice commands like “show me images of Pittsburgh” or “let’s get back to work”. These commands seamlessly transition the Campfire through various states while the client is presenting. Choreographed modes allow the Campfire to be the focus of attention, or to recede quietly to crackling embers in the background as needed. Any interactions light up LEDs throughout the structure to simulate the welcoming warmth of a fire, or to display changes in state. The custom software suite allows video playback mapped across all devices, image searches, and animations - all synced within milliseconds.
    `.trim(),
    href: "https://iontank.com/projects/campfire"
} satisfies Project;