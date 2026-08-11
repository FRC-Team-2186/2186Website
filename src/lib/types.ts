export interface TeamInfo {
  number: number;
  name: string;
  school: string;
  location: string;
  district: string;
  rookieYear: number;
  logo: string;
  mission: string;
  history: string;
  socials: {
    instagram?: string;
    youtube?: string;
    github?: string;
    tba?: string;
    email?: string;
  };
  contact: {
    headMentors: ContactPerson[];
    finance: ContactPerson[];
  };
}

export interface ContactPerson {
  name: string;
  role: string;
  email: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export interface CountdownEvent {
  label: string;
  targetDate: string;
  description: string;
}

export interface Subteam {
  id: string;
  name: string;
  description: string;
  icon: "wrench" | "zap" | "code" | "briefcase";
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  type: "mentor" | "student";
  bio: string;
  image?: string;
}

export interface RobotSpecs {
  drivebase: string;
  intake: string;
  endEffector: string;
  weight?: string;
  dimensions?: string;
}

export interface Robot {
  id: string;
  year: number;
  name: string;
  game: string;
  description: string;
  image?: string;
  cadRender?: string;
  specs: RobotSpecs;
  tbaUrl: string;
  awards?: string[];
}

export interface SponsorTier {
  id: string;
  name: string;
  amount: string;
  color: string;
  benefits: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze" | "partner";
  logo?: string;
  website?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: "photo" | "video";
  src: string;
  thumbnail?: string;
  tags: ("competitions" | "build-season" | "outreach" | "team")[];
  year: number;
}

export interface QuickLink {
  id: string;
  label: string;
  href: string;
  description: string;
}

export interface TeamData {
  team: TeamInfo;
  stats: Stat[];
  countdown: CountdownEvent;
  quickLinks: QuickLink[];
  subteams: Subteam[];
  leadership: Leader[];
  robots: Robot[];
  sponsorTiers: SponsorTier[];
  sponsors: Sponsor[];
  gallery: GalleryItem[];
  sponsorPacketUrl: string;
}
