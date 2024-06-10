import { Resume } from "./resume";
import { Project } from "../projects/types";


const Preview: React.FC = () => {
    return (<Resume {...ios} />)
};

export const ios = {
    id: 'ios',
    name: "iOS Experience",
    title: "",
    iconSrc: '/apple.png',

    startDate: null,
    endDate: null,
    description: <div className="space-y-4">
    <div>Objective-C, Swift</div>

    <div>
    As a self-starting intern at Geek & Sundry who was hired to edit videos,
    I started developing python scripts during nights and weekends to
    address operational challenges.
    
    Seizing the opportunity to expand my skill set, I proposed and led the
    development of an iOS app which would allow users to meet-up at local nerdy
    events.
    </div>
    <div>
    After this experience, my friends and I developed an iOS app called Let{"'"}s,
    which was a messaging app for planning light-weight events. As the sole iOS
    developer, I worked closely with a designer and a backend developer to bring
    this project to fruition while completing my undergraduate studies.
    </div>
    <div>
    When I then interned at Nike, I lead a team of 9 interns to develop an iOS app
    for the Events Services team. I coordinated with Nike leadership in Events
    Services, Legal, and Internal Communications for design and implementation.
    Ultimately, I then presented a demo in front of a large audience of
    Nike leadership and peers.
    </div>
    <div>
    Finally, while working full-time at Nike, I was working on the Unified Login and
    Registration team, and was responsible for providing the iOS SDK for the
    all iOS apps at Nike. Swift had just been released, and I helped kick
    off the transition of the iOS SDK from Objective-C to Swift.
    </div>
    </div>,
    href: "/experience#ios",
    preview: <Preview />,
} satisfies Project;