
import { Resume } from "../experience/resume";
import { Project } from "./types";

const Preview: React.FC = () => {
    return (<Resume {...digitalCampfire} />)
};

export const digitalCampfire = {
    id: 'digital-campfire',
    name: "Google Digital Campfire",
    employer: 'Iontank',
    title: "Software Developer",
    iconSrc: '/iontank.png',

    heroImageSrc: '/campfire.png',

    startDate: null,
    endDate: null,
    description: <div className="space-y-4">
    <div>Java, 56 synchronized Android Devices, Google Assistant API, Mac Mini, LEDs, and more</div>
    <div>
    The Google Digital Campfire is an interactive art-object designed to evoke the
    feeling of sharing stories with friends around a glowing fire. Today, Google hosts
    conversations with their clients around Digital Campfires in multiple cities
    around the world.

    It can be controlled with simple voice commands like “show me images of Pittsburgh”
    or “let&apos;s get back to work”. These commands seamlessly transition the Campfire
    through various states while the client is presenting.
    </div>
    <div>
    Some of the main technical challenges were synchronizing video feeds on 56 Android
    devices, creating a custom voice interface with Google Assistant, creating
    choreographed animations, distributing image search results across devices,
    and creating a custom software suite to control the entire system.
    </div>
    <div><a href="https://iontank.com/projects/campfire" target="_blank">See videos and photos</a></div>
    </div>,
    href: "/projects#digital-campfire",
    preview: <Preview />,
} satisfies Project;