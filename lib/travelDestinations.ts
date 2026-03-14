// Where are you being called? — Travel Quiz destinations & postcard inscriptions

export type TravelAnswer = string;

export interface TravelDestination {
  id: string;
  name: string;
  tagline: string;
  inscription: string;
  postcardVibe: "beach" | "historic" | "urban" | "tropical" | "arts" | "coastal";
  /** Moonpartyof6 affiliated links — Hidden Honey Homes (code: MOON), etc. */
  affiliateLinks?: { label: string; href: string; note?: string }[];
}

const HIDDEN_HONEY = "https://www.hiddenhoneyhomes.com/?ref=MOON";

export const DESTINATIONS: Record<string, TravelDestination> = {
  orlando: {
    id: "orlando",
    name: "Orlando",
    tagline: "Where magic meets your table",
    inscription: "Wish you were here — and you will be. Orlando is calling: good food, good company, and the kind of magic that happens when you're not looking for it. Save a seat for us. ✨",
    postcardVibe: "urban",
    affiliateLinks: [
      { label: "Orlando Date Nights Guide", href: "/resources#orlando" },
      { label: "Winter Park — Park Avenue", href: "https://www.explorewinterpark.com/", note: "Stroll, shop, gelato" },
    ],
  },
  winterPark: {
    id: "winterPark",
    name: "Winter Park",
    tagline: "Art, gardens, and the two of you",
    inscription: "The oaks are whispering. Park Avenue is waiting. Winter Park says: slow down, hold hands, and let the afternoon unfold. Your next chapter starts here. 🌳",
    postcardVibe: "arts",
    affiliateLinks: [
      { label: "Park Avenue", href: "https://www.explorewinterpark.com/" },
      { label: "Orlando Date Nights", href: "/resources#orlando" },
    ],
  },
  stAugustine: {
    id: "stAugustine",
    name: "St. Augustine",
    tagline: "America's oldest romance",
    inscription: "Centuries of love stories live in these cobblestones. St. Augustine knows how to hold a secret — and how to make new ones. Come write yours. 💌",
    postcardVibe: "historic",
    affiliateLinks: [
      { label: "Hidden Honey Homes — St. Augustine", href: HIDDEN_HONEY, note: "Code: MOON · Couples retreat" },
      { label: "St. George Street", href: "https://www.floridashistoriccoast.com/" },
    ],
  },
  keyWest: {
    id: "keyWest",
    name: "Key West",
    tagline: "Where the road ends and the adventure begins",
    inscription: "Sunset. Salt air. The kind of freedom that only happens when you've driven to the edge of the map. Key West doesn't rush. Neither should you. 🌅",
    postcardVibe: "tropical",
    affiliateLinks: [
      { label: "Mallory Square Sunset", href: "https://www.mallorysquare.com/" },
      { label: "Weekend Getaways Guide", href: "/resources#getaways" },
    ],
  },
  miami: {
    id: "miami",
    name: "Miami",
    tagline: "Heat, art, and after dark",
    inscription: "Miami doesn't do half-measures. Neither do you. Art, ocean, night — this city was built for lovers who aren't afraid of the spotlight. See you there. 🌴",
    postcardVibe: "urban",
    affiliateLinks: [
      { label: "Travel Guides", href: "/resources#travel" },
      { label: "Weekend Getaways", href: "/resources#getaways" },
    ],
  },
  savannah: {
    id: "savannah",
    name: "Savannah",
    tagline: "Spanish moss and slow kisses",
    inscription: "Savannah moves at the speed of a porch swing. The squares remember everything. The ghosts are friendly. Your love story fits right in. 💕",
    postcardVibe: "historic",
    affiliateLinks: [
      { label: "Visit Savannah", href: "https://www.visitsavannah.com/" },
      { label: "Weekend Getaways", href: "/resources#getaways" },
    ],
  },
  ameliaIsland: {
    id: "ameliaIsland",
    name: "Amelia Island",
    tagline: "Quiet shores, loud hearts",
    inscription: "Thirteen miles of beach. No crowds. Just you, the waves, and the kind of quiet that lets you hear each other again. Amelia Island is holding your spot. 🏖️",
    postcardVibe: "beach",
    affiliateLinks: [
      { label: "Hidden Honey Homes", href: HIDDEN_HONEY, note: "Code: MOON · Couples retreat" },
      { label: "Amelia Island Tourism", href: "https://www.ameliaisland.com/" },
    ],
  },
  tampa: {
    id: "tampa",
    name: "Tampa Bay",
    tagline: "Riverwalk, rooftops, and romance",
    inscription: "The Riverwalk was made for strolling. The rooftops were made for toasts. Tampa Bay says: come hungry, come curious, come together. We'll be here. 🥂",
    postcardVibe: "coastal",
    affiliateLinks: [
      { label: "Tampa Riverwalk", href: "https://www.thetampariverwalk.com/" },
      { label: "Florida Date Night Guide", href: "/resources#florida" },
    ],
  },
};

// Quiz questions — fun, playful, romance-focused
export const TRAVEL_QUESTIONS = [
  {
    id: "energy",
    question: "What's your ideal date energy?",
    options: [
      { id: "cozy", label: "Cozy & intimate", emoji: "🕯️", scores: { ameliaIsland: 2, stAugustine: 1, savannah: 2 } },
      { id: "adventure", label: "Adventurous & playful", emoji: "🎢", scores: { orlando: 2, keyWest: 2, miami: 1 } },
      { id: "luxe", label: "Luxe & romantic", emoji: "✨", scores: { miami: 2, savannah: 2, winterPark: 1 } },
      { id: "spontaneous", label: "Spontaneous & free", emoji: "🌊", scores: { keyWest: 2, tampa: 1, orlando: 1 } },
    ],
  },
  {
    id: "calls",
    question: "What's calling to you?",
    options: [
      { id: "ocean", label: "Ocean waves", emoji: "🌊", scores: { ameliaIsland: 2, keyWest: 2, miami: 1 } },
      { id: "historic", label: "Historic charm", emoji: "🏛️", scores: { stAugustine: 2, savannah: 2 } },
      { id: "arts", label: "Arts & culture", emoji: "🎨", scores: { winterPark: 2, miami: 1, tampa: 1 } },
      { id: "food", label: "Food & wine", emoji: "🍷", scores: { orlando: 2, tampa: 2, winterPark: 1 } },
    ],
  },
  {
    id: "style",
    question: "What's your getaway style?",
    options: [
      { id: "weekend", label: "Weekend escape", emoji: "📦", scores: { winterPark: 2, stAugustine: 2, tampa: 1 } },
      { id: "vacation", label: "Full vacation mode", emoji: "✈️", scores: { keyWest: 2, miami: 2, ameliaIsland: 1 } },
      { id: "daytrip", label: "Day trip vibes", emoji: "🚗", scores: { orlando: 2, winterPark: 2 } },
      { id: "staycation", label: "Staycation with flair", emoji: "🏠", scores: { orlando: 2, tampa: 2 } },
    ],
  },
];

export function computeDestination(answers: Record<string, string>): TravelDestination {
  const scores: Record<string, number> = {};
  for (const q of TRAVEL_QUESTIONS) {
    const answerId = answers[q.id];
    const opt = q.options.find((o) => o.id === answerId);
    if (opt?.scores) {
      for (const [dest, pts] of Object.entries(opt.scores)) {
        scores[dest] = (scores[dest] || 0) + pts;
      }
    }
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topId = sorted[0]?.[0] || "orlando";
  return DESTINATIONS[topId] || DESTINATIONS.orlando;
}
