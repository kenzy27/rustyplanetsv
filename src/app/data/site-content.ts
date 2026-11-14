export interface ArchiveImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  srcset?: string;
}

export interface CrewMember {
  name: string;
  role?: string;
  bio?: string;
  portrait?: ArchiveImage;
}

export type TeaserSource =
  | { kind: 'file'; src: string; captions?: string }
  | { kind: 'youtube' | 'vimeo'; videoId: string };

interface MissionContent {
  title: string;
  environment: ArchiveImage;
  teaser: { source: TeaserSource | null; poster: ArchiveImage };
  briefing: string[];
  survival: { icon: string; title: string; description: string }[];
  screenshots: ArchiveImage[];
  crew: CrewMember[];
  teamName: string;
  crewStory: string;
  sources: { organization: string; title: string; description: string; url: string }[];
  playUrl?: string;
}

export const navigation = [
  { label: 'The Mission', href: '#mission' },
  { label: 'Transmission', href: '#transmission' },
  { label: 'Survival', href: '#survival' },
  { label: 'Archives', href: '#archives' },
  { label: 'Crew', href: '#crew' },
] as const;

const environment: ArchiveImage = {
  src: 'assets/backgrounds/outpost.jpeg',
  alt: 'A red-lit research outpost with an aging terminal and a window overlooking Mars.',
  width: 1600,
  height: 900,
};

export const site: MissionContent = {
  title: 'The Rusty Planet: Survival Guide',
  environment,
  teaser: {
    source: { kind: 'file', src: 'assets/video/teaser.mp4' },
    poster: environment,
  },
  briefing: [
    'The Rusty Planet: Survival Guide is a Mars survival game made in Unreal Engine 5 for the NASA Space Apps hackathon. You play an astronaut trying to stay alive on Mars long enough to make it back to Earth.',
    'The mission unfolds one Martian day, or sol, at a time. Completing interactive objectives moves the story forward. Planetary research informs the setting and survival challenges, while isolation gives every task a sense of unease.',
  ],
  survival: [
    { icon: '⊞', title: 'Complete the mission', description: 'Work through interactive tasks and finish your objectives to move the mission forward.' },
    { icon: '⊕', title: 'Understand Mars', description: 'Planetary maps and observations help ground the Jezero Crater setting and put the challenges of working on Mars in context.' },
    { icon: '◇', title: 'Protect your resources', description: 'The survival design asks players to weigh essential supplies, outpost systems, and the consequences of each decision.' },
    { icon: '◷', title: 'Survive another sol', description: 'Each completed sol brings you closer to Earth. It also means facing another day on Mars.' },
  ],
  playUrl: 'https://malak-islam.itch.io/the-rusty-planet',
  screenshots: [
    { src: 'assets/screenshots/visual-001.jpeg', srcset: 'assets/screenshots/visual-001-480.jpeg 480w, assets/screenshots/visual-001-960.jpeg 960w, assets/screenshots/visual-001.jpeg 1600w', alt: 'First-person view of an outpost on the Martian surface, with survival readings and an objective on screen.', width: 1600, height: 900 },
    { src: 'assets/screenshots/visual-002.jpeg', srcset: 'assets/screenshots/visual-002-480.jpeg 480w, assets/screenshots/visual-002-960.jpeg 960w, assets/screenshots/visual-002.jpeg 1600w', alt: 'A green computer terminal inside the outpost, with a prompt to access the Orbit control terminal.', width: 1600, height: 900 },
    { src: 'assets/screenshots/visual-003.jpeg', srcset: 'assets/screenshots/visual-003-480.jpeg 480w, assets/screenshots/visual-003-960.jpeg 960w, assets/screenshots/visual-003.jpeg 1600w', alt: 'An astronaut framed by the window of a dark outpost room.', width: 1600, height: 900 },
    { src: 'assets/screenshots/visual-004.jpeg', srcset: 'assets/screenshots/visual-004-480.jpeg 480w, assets/screenshots/visual-004-960.jpeg 960w, assets/screenshots/visual-004.jpeg 1600w', alt: 'Green system diagnostics screen showing a grid and a packet counter.', width: 1600, height: 900 },
    { src: 'assets/backgrounds/main-menu.jpeg', alt: 'The game title and menu in a red-lit outpost overlooking Mars.', width: 1600, height: 900, caption: 'MAIN MENU ARCHIVE' },
  ],
  crew: [{ name: 'Kenzy' }, { name: 'Malak' }, { name: 'Shaza' }, { name: 'Salman' }, { name: 'Moaz' }],
  teamName: 'WASP-12B',
  crewStory: 'Our five-person team built The Rusty Planet for NASA Space Apps. We worked together on planetary research, game design, development, assets, testing, and the final presentation.',
  sources: [
    { organization: 'NASA', title: 'Mars 2020 raw imagery', description: 'Raw images from the Perseverance rover on Mars.', url: 'https://mars.nasa.gov/mars2020/multimedia/raw-images/' },
    { organization: 'USGS', title: 'Astrogeology Mars maps', description: 'Interactive maps for exploring Martian terrain and geology.', url: 'https://astrogeology-usgs.hub.arcgis.com/pages/interactive-maps-mars' },
    { organization: 'NASA', title: 'Curiosity’s proposed path up Mount Sharp', description: 'An animation of a proposed rover route up lower Mount Sharp.', url: 'https://science.nasa.gov/resource/curiositys-proposed-path-up-mount-sharp/' },
    { organization: 'NASA', title: 'Mars Trek', description: 'An interactive portal for exploring Mars with planetary data and maps.', url: 'https://trek.nasa.gov/mars/' },
    { organization: 'NASA', title: 'Worldview', description: 'A browser for satellite imagery and other Earth-observation data.', url: 'https://worldview.earthdata.nasa.gov/' },
  ],
};
