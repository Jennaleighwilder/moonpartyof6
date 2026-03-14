/**
 * Date Night Spark Generator — date ideas by vibe, spice, time, and area.
 * Area-specific ideas for Orlando, Florida, etc. (Jukebox "While You're in [City]" concept)
 */

export type DateIdea = {
  title: string;
  tagline: string;
  desc: string;
  text: string;
  wisdom: string;
  tip: string;
  areaHint?: string; // e.g. "Orlando" — shown when area-specific
};

export const AREAS = [
  { id: "anywhere", label: "Anywhere", desc: "Works no matter where you are" },
  { id: "orlando", label: "Orlando, FL", desc: "Moon-approved Orlando date spots" },
  { id: "florida", label: "Florida", desc: "Weekend getaways, beaches, FL vibes" },
  { id: "athome", label: "At Home", desc: "No travel needed" },
];

const BASE_IDEAS: Record<string, DateIdea> = {
  stayIn_tender_15: {
    title: "Candlelit Conversation",
    tagline: "15 minutes of undivided attention",
    desc: "Light a candle, put phones away, and ask each other one deep question. No distractions, just presence.",
    text: "Hey babe… put your phone down for 15 min tonight. I want to actually talk to you. Just us. 💕",
    wisdom: "Micro-moments of focused attention build trust and emotional safety. Gottman research shows that 'turning toward' your partner in small ways compounds into lasting connection.",
    tip: "Pick a question neither of you has asked before. 'What's one dream you've never told me?' works magic.",
  },
  stayIn_tender_60: {
    title: "Blanket Fort Reconnection",
    tagline: "Build something together",
    desc: "Grab every blanket and pillow. Build a fort. Get cozy inside with snacks and no screens. Talk, laugh, or just be.",
    text: "I'm building a blanket fort tonight and you're invited. Bring snacks. And your undivided attention. 🏠✨",
    wisdom: "Playful co-creation releases oxytocin and reduces stress. Building something silly together reminds you you're on the same team.",
    tip: "Add fairy lights inside the fort. The soft glow changes everything.",
  },
  stayIn_flirty_30: {
    title: "Kitchen Dance Party",
    tagline: "30 minutes of silly + sexy",
    desc: "Put on a playlist that makes you both move. Cook something simple together while dancing. Feed each other. Flirt.",
    text: "Dance party in the kitchen in 30. Your move. Or mine. 😏",
    wisdom: "Shared physical movement and playfulness increase attraction. Cooking together is foreplay when you make it fun.",
    tip: "Pick a song that means something to you both. When it plays, pull them close.",
  },
  stayIn_heated_60: {
    title: "Sensory Slow-Down",
    tagline: "Touch, taste, presence",
    desc: "Blindfold one person. The other feeds them something sweet, guides their hands, plays with texture. Trade. Take your time.",
    text: "Tonight I want to slow down. Really slow. No phones. Just us. And maybe some chocolate. You in? 🔥",
    wisdom: "Reducing visual input heightens other senses. Anticipation and delayed gratification increase desire.",
    tip: "Use ice, honey, or a feather. Contrast in temperature and texture is powerful.",
  },
  goOut_flirty_60: {
    title: "Mystery Reservation",
    tagline: "Surprise them with a date",
    desc: "Make a reservation somewhere new. Don't tell them where. Text them the time and 'dress nice.' Build anticipation all day.",
    text: "7pm. Dress nice. I'm not telling you where we're going. See you there. 😘",
    wisdom: "Surprise and novelty activate dopamine. The unknown creates anticipation that carries through the whole day.",
    tip: "Send a hint at lunch: 'Think Italian' or 'Wear something you can dance in.'",
  },
  goOut_tender_120: {
    title: "Sunset Stroll + Dessert",
    tagline: "Walk, talk, share something sweet",
    desc: "Find a scenic spot. Walk as the sun sets. Hold hands. Stop for dessert somewhere with a view. No agenda.",
    text: "Sunset walk tonight? Just us. I'll find the spot. You bring your best conversation. 🌅",
    wisdom: "Walking side-by-side reduces eye contact pressure and often leads to deeper conversation. Shared beauty creates shared memory.",
    tip: "Pick a place neither of you has been. New environment = new energy.",
  },
  reconnect_tender_30: {
    title: "Apology + Appreciation",
    tagline: "Repair and reconnect",
    desc: "Sit facing each other. Each person shares: one thing they're sorry for, one thing they appreciate. Hold hands. No defending.",
    text: "Can we just talk tonight? I want to fix this. No blame. Just us. 💕",
    wisdom: "Gottman's repair attempts are critical. Acknowledging hurt and expressing appreciation in the same moment creates safety for both.",
    tip: "Start with 'I appreciate that you...' before 'I'm sorry for...' It softens the space.",
  },
  reconnect_flirty_60: {
    title: "Do-Over Date",
    tagline: "Pretend you're meeting again",
    desc: "Meet at a bar or café as if you're on a first date. Flirt. Ask 'getting to know you' questions. Remember why you chose each other.",
    text: "First date tonight. Same place, different energy. Let's pretend we just met. 7pm? 💫",
    wisdom: "Role-play and novelty reset negative patterns. Acting 'as if' you're new creates space for fresh attraction.",
    tip: "Dress up. Order a drink. Ask 'So, what do you do for fun?' with a real smile.",
  },
  surpriseMe_flirty_60: {
    title: "Dealer's Choice Adventure",
    tagline: "One person plans, the other enjoys",
    desc: "One person plans the entire date in secret. The other shows up ready for anything. Trust the process.",
    text: "I'm planning something for us tonight. Your only job: show up at 7 and say yes to whatever I have in mind. Deal? 🎲",
    wisdom: "Surrendering control can be deeply intimate. Being planned for signals 'I pay attention to you.'",
    tip: "Include one small surprise within the surprise. A handwritten note, a favorite snack, a song.",
  },
  surpriseMe_heated_overnight: {
    title: "Secret Getaway",
    tagline: "Escape together",
    desc: "Book a room somewhere—hotel, Airbnb, cabin. Pack a bag for them. Pick them up. No work, no kids, just 24 hours of us.",
    text: "Pack a bag. I'm stealing you tonight. We're not coming back until tomorrow. No questions. Just trust me. 🌙",
    wisdom: "Physical removal from daily life creates psychological space for reconnection. Novel environment = novel energy.",
    tip: "Leave a note on their pillow: 'I'd choose you again.'",
  },
};

// Orlando-specific overrides (Jukebox "While You're in Orlando" style)
const ORLANDO_IDEAS: Record<string, DateIdea> = {
  goOut_flirty_60: {
    ...BASE_IDEAS.goOut_flirty_60,
    desc: "Reserve at The Ravenous Pig, Prato, or Canvas Restaurant. Orlando's best kept secrets for a surprise dinner. Don't tell them where.",
    tip: "The Ravenous Pig's intimate bar or Prato's patio — both Moon-approved.",
    areaHint: "Orlando",
  },
  goOut_tender_120: {
    ...BASE_IDEAS.goOut_tender_120,
    desc: "Lake Eola at sunset. Walk the loop, rent a swan boat, then dessert at Se7en Bites or The Glass Knife. Hold hands. No agenda.",
    tip: "Swan boats close at dusk — go an hour before for golden hour.",
    areaHint: "Orlando",
  },
  goOut_flirty_120: {
    title: "Winter Park Stroll + Wine",
    tagline: "Park Ave energy",
    desc: "Winter Park's Park Avenue. Browse shops, stop for wine at The Wine Room or Eola Wine Company, people-watch, flirt. End with dinner at Luma or Prato.",
    text: "Park Ave tonight. Wine, walk, and you. Dress cute. 6pm? 🍷",
    wisdom: "Walkable, romantic, and full of options. The variety keeps conversation flowing.",
    tip: "Park at the garage on New England — free after 6.",
    areaHint: "Orlando",
  },
};

// Florida-wide (beaches, getaways)
const FLORIDA_IDEAS: Record<string, DateIdea> = {
  goOut_tender_120: {
    ...BASE_IDEAS.goOut_tender_120,
    desc: "Drive to the coast. Clearwater, St. Pete Beach, or New Smyrna. Sunset on the sand, toes in the water, then a casual dinner by the water.",
    tip: "Weekday sunsets = fewer crowds. Pack a blanket.",
    areaHint: "Florida",
  },
  surpriseMe_flirty_60: {
    ...BASE_IDEAS.surpriseMe_flirty_60,
    desc: "Book a last-minute room in St. Augustine, Anna Maria Island, or Key West. Florida's got secret gems. One tank of gas, 24 hours of us.",
    tip: "Anna Maria = quiet. Key West = energy. St. Augustine = history + romance.",
    areaHint: "Florida",
  },
};

const FALLBACK: DateIdea = {
  title: "Intentional Connection",
  tagline: "Quality over quantity",
  desc: "Put phones away. Sit facing each other. Ask: 'What's one thing you need from me right now?' Listen. Respond.",
  text: "Can we just be together tonight? No distractions. I want to hear you. 💕",
  wisdom: "Presence is the foundation. When we slow down and listen, we signal that our partner matters.",
  tip: "Start with 10 minutes. It often turns into more when you're both fully there.",
};

export function getDateIdea(vibe: string, spice: string, time: string, area?: string): DateIdea {
  const key = `${vibe}_${spice}_${time}`;
  const areaMap = area === "orlando" ? ORLANDO_IDEAS : area === "florida" ? FLORIDA_IDEAS : BASE_IDEAS;
  return areaMap[key] || areaMap[`${vibe}_${spice}_60`] || areaMap[`${vibe}_tender_60`] || BASE_IDEAS[key] || BASE_IDEAS[`${vibe}_${spice}_60`] || FALLBACK;
}

export function buildShareUrl(params: { vibe: string; spice: string; time: string; area?: string }, baseUrl?: string): string {
  const origin = baseUrl || (typeof window !== "undefined" ? window.location.origin : "");
  const search = new URLSearchParams({ vibe: params.vibe, spice: params.spice, time: params.time });
  if (params.area) search.set("area", params.area);
  return `${origin}/date-night?${search.toString()}`;
}
