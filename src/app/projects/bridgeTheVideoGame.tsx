import { Experience } from "@/types/PagePreview";
import { Resume } from "../experience/resume";

const Preview: React.FC = () => {
    return (<Resume {...bridgeTheVideoGame} />)
};

export const bridgeTheVideoGame = {
    id: 'bridge-game',
    name: "Bridge: The Card Game: The Video Game",
    title: "Developed with Dan Wilkerson",
    iconSrc: '/bridgei.png',
    startDate: null,
    endDate: null,
    heroImageSrc: '/bridge.png',
    description: <>
        <div className="mb-4">
            Bridge: The Card Game: The Video Game is a turn based strategy game that
            has nothing to do with Bridge (the card game).

            As a peaceful bridge troll, you must destroy bridges connecting two warring nations to prevent the loss of innocents!

            It was developed in 48 hours for the Miz Jam 1 game jam.
        </div>
        <div>- <a href="https://itch.io/jam/miz-jam-1/rate/738711" target='_blank'>See our game jam entry</a></div>
        <div>- <a href="https://heysweet.itch.io/bridge-the-card-game-the-video-game" target='_blank'>Play the game</a></div>
        <div>- <a href="https://www.youtube.com/watch?v=lj866DtYVlo" target='_blank'>Watch the dev vlog</a></div>
    </>,
    href: "/projects#bridge-game",
    preview: <Preview />,
} satisfies Experience;