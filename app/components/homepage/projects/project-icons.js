import {
  FiActivity,
  FiClock,
  FiMonitor,
  FiShoppingBag,
  FiTarget,
} from "react-icons/fi";

// A glyph that reflects what each project actually is, keyed off its name.
// Order matters: the first match wins, so the watch rule must come before the
// generic store/shop rule ("Tick-Tock Store" hits both).
const PROJECT_ICONS = [
  { match: /network|analyz/i, Icon: FiActivity },
  { match: /tick|watch|clock/i, Icon: FiClock },
  { match: /game|play/i, Icon: FiTarget },
  { match: /store|shop|commerce/i, Icon: FiShoppingBag },
  { match: /portfolio|site|web/i, Icon: FiMonitor },
];

// The folder header and the project card both need this, so it lives here
// rather than being duplicated in each component.
export const getProjectIcon = (name = "") =>
  PROJECT_ICONS.find(({ match }) => match.test(name))?.Icon ?? FiMonitor;
