// ============================================================
//  Service-area location pages — one entry per city.
//  Each entry powers /valet-parking/[slug]/ via
//  src/pages/valet-parking/[city].astro.
//
//  To add a city later: copy an entry, write UNIQUE copy
//  (never reuse paragraphs — Google treats near-duplicate
//  location pages as doorway pages), commit, done.
// ============================================================

export const locations = [
  // ---------------------------------------------------------- PALM BEACH
  {
    slug: 'palm-beach',
    city: 'Palm Beach',
    county: 'Palm Beach County',
    lat: 26.7056,
    lng: -80.0364,
    metaTitle: 'Valet Parking in Palm Beach, FL | PAM Executive Parking',
    metaDescription:
      'White-glove private valet parking in Palm Beach, Florida — estates, private clubs, Worth Avenue events, and charity galas. Absolute discretion, zero wait. Request a quote.',
    h1: 'Valet Parking in Palm Beach',
    lede:
      'On the island, an arrival is never merely an arrival. It is the opening note of the evening — and we make certain it is played perfectly.',
    paragraphs: [
      'Palm Beach is where PAM Executive Parking was forged. Our attendants understand the island\u2019s particular rhythm: the season\u2019s calendar of galas and benefit dinners, the standards of its legendary private clubs, and the expectations of families whose estates line South Ocean Boulevard and the Intracoastal. Here, valet is not a convenience — it is part of the etiquette of the evening.',
      'From intimate dinner parties in the Estate Section to full-scale charity benefits during the height of season, we choreograph every arrival and departure with the discretion the island demands. Vehicles are handled with museum-level care, keys are managed with strict chain-of-custody protocols, and our attendants present themselves to the standard of the households and institutions they serve.',
      'We are equally at home supporting Worth Avenue\u2019s luxury retailers, the island\u2019s storied clubs, and private residences hosting everything from trunk shows to weddings. Whatever the occasion, our promise is the same: your guests step out of their vehicles and into the event — never into a line.',
    ],
    highlightsTitle: 'Where we serve in Palm Beach',
    highlights: [
      'Private estates in the Estate Section and along South Ocean Boulevard',
      'Charity galas and benefit dinners throughout the winter season',
      'Private club events, member arrivals, and tournament days',
      'Worth Avenue boutiques, trunk shows, and luxury retail events',
      'Weddings and private celebrations at island residences',
    ],
    faqs: [
      {
        q: 'Do you provide valet for private residences in Palm Beach?',
        a: 'Yes — estate and residential valet is the heart of what we do in Palm Beach. We routinely staff dinner parties, holiday gatherings, weddings, and season events at private homes across the island, scaling from a two-attendant team for an intimate dinner to full crews for hundred-plus-guest benefits.',
      },
      {
        q: 'How far in advance should we book for the Palm Beach season?',
        a: 'For events falling between Thanksgiving and Easter, we recommend reserving as early as possible — the island\u2019s gala calendar fills our rosters quickly. That said, we always try to accommodate short-notice requests, and we encourage you to call even if your event is days away.',
      },
      {
        q: 'Are your attendants insured and vetted?',
        a: 'Fully. Every PAM Executive Parking attendant is background-checked, professionally trained, and covered under our comprehensive garage liability and garage keepers insurance. Certificates of insurance are available to your property manager, club, or planner upon request.',
      },
    ],
  },

  // ---------------------------------------------------------- WEST PALM BEACH
  {
    slug: 'west-palm-beach',
    city: 'West Palm Beach',
    county: 'Palm Beach County',
    lat: 26.7153,
    lng: -80.0534,
    metaTitle: 'Valet Parking in West Palm Beach, FL | PAM Executive Parking',
    metaDescription:
      'Professional luxury valet parking in West Palm Beach — restaurants, hotels, the Kravis Center district, Rosemary Square, waterfront events, and corporate functions. Request a quote.',
    h1: 'Valet Parking in West Palm Beach',
    lede:
      'From the waterfront to Rosemary Square, West Palm Beach moves quickly. We make sure your guests never feel it.',
    paragraphs: [
      'West Palm Beach is our home base — our operation is headquartered at 700 S Rosemary, in the center of the city\u2019s dining, arts, and business district. That proximity matters: it means deep familiarity with downtown\u2019s traffic patterns, curb constraints, and parking infrastructure, and the ability to deploy additional attendants on short notice when an event runs larger than planned.',
      'We provide valet for the full spectrum of the city\u2019s life: fine-dining restaurants and rooftop venues, boutique hotels, gallery openings and performances in the Kravis Center district, corporate functions in the office towers along the waterfront, and private celebrations along Flagler Drive. High-density, time-compressed arrivals are our specialty — curbs stay clear, lines stay short, and the city keeps moving around your event, not through it.',
      'For restaurants and hospitality partners, we offer ongoing nightly valet programs in addition to single-event service — a consistent, impeccably presented arrival experience your regulars will come to recognize as part of your brand.',
    ],
    highlightsTitle: 'Where we serve in West Palm Beach',
    highlights: [
      'Restaurants and nightlife in Rosemary Square and along Clematis Street',
      'Performances and galas in the Kravis Center arts district',
      'Corporate events and office towers in the downtown business core',
      'Waterfront events and private parties along Flagler Drive',
      'Boutique hotels and museum functions citywide',
    ],
    faqs: [
      {
        q: 'Do you offer nightly valet programs for West Palm Beach restaurants?',
        a: 'Yes. Beyond single events, we run recurring valet programs for restaurants and hotels — fixed schedules, consistent attendants, and a service standard that becomes part of your guest experience. Contact us to discuss a program tailored to your covers and peak hours.',
      },
      {
        q: 'Can you handle large downtown events with limited parking?',
        a: 'This is precisely our strength. Operating from our Rosemary Avenue headquarters, we know downtown\u2019s garages, lots, and curb rules intimately. We build a parking plan in advance — including satellite parking and shuttle-style vehicle staging when needed — so guest arrivals stay effortless even when on-site parking is scarce.',
      },
      {
        q: 'What does valet service in West Palm Beach cost?',
        a: 'Pricing depends on guest count, duration, date, and parking logistics. We provide fast, precise quotes — submit the inquiry form or call (561) 377-7704 and we will typically respond the same day.',
      },
    ],
  },

  // ---------------------------------------------------------- PALM BEACH GARDENS
  {
    slug: 'palm-beach-gardens',
    city: 'Palm Beach Gardens',
    county: 'Palm Beach County',
    lat: 26.8234,
    lng: -80.1387,
    metaTitle: 'Valet Parking in Palm Beach Gardens, FL | PAM Executive Parking',
    metaDescription:
      'Luxury valet parking in Palm Beach Gardens — country club communities, golf tournaments, private events in Old Palm, Mirasol, Frenchman\u2019s Creek, and North Palm Beach. Request a quote.',
    h1: 'Valet Parking in Palm Beach Gardens',
    lede:
      'In the Gardens, life is organized around the club and the course. So is our service.',
    paragraphs: [
      'Palm Beach Gardens is defined by its country club communities — Old Palm, Mirasol, BallenIsles, Frenchman\u2019s Creek, and the fairways of PGA National among them. PAM Executive Parking provides valet built for this world: member-guest tournaments, club galas, charity golf days, and private celebrations inside gated communities where access protocols, resident sensitivities, and HOA requirements must be handled as flawlessly as the vehicles themselves.',
      'Our teams are experienced with gatehouse coordination, guest-list management at the point of arrival, and the particular flow of golf and tennis event days — early surges, long middles, and compressed departures. We stage vehicles for fast retrieval so that when the awards dinner ends, the goodbye takes minutes, not half an hour.',
      'We also serve the wider North County corridor from the Gardens — including North Palm Beach and Juno Beach — for residential events, restaurant partnerships, and functions at venues along the PGA Boulevard corridor.',
    ],
    highlightsTitle: 'Where we serve in Palm Beach Gardens',
    highlights: [
      'Country club communities including Old Palm, Mirasol, BallenIsles, and Frenchman\u2019s Creek',
      'Golf tournaments, member-guest events, and club galas',
      'Private residences inside gated communities',
      'Restaurants and venues along the PGA Boulevard corridor',
      'North Palm Beach and Juno Beach residential events',
    ],
    faqs: [
      {
        q: 'Can you work inside gated communities in Palm Beach Gardens?',
        a: 'Yes — it is a core part of our North County work. We coordinate directly with gatehouses and property management in advance, provide attendant rosters for community access, and operate within each community\u2019s vendor rules so your event proceeds without a single call to the HOA.',
      },
      {
        q: 'Do you staff golf tournaments and club events?',
        a: 'Frequently. Tournament days have a distinctive arrival pattern — a concentrated morning surge and a compressed post-dinner departure. We staff and stage specifically for that rhythm, keeping bag drop, arrival, and retrieval running simultaneously without congestion.',
      },
      {
        q: 'Do you also cover North Palm Beach and Juno Beach?',
        a: 'Yes. Our Palm Beach Gardens operations extend throughout the North County corridor, including North Palm Beach, Juno Beach, and Singer Island. The same teams, standards, and equipment serve the entire area.',
      },
    ],
  },

  // ---------------------------------------------------------- JUPITER
  {
    slug: 'jupiter',
    city: 'Jupiter',
    county: 'Palm Beach County',
    lat: 26.9342,
    lng: -80.0942,
    metaTitle: 'Valet Parking in Jupiter, FL | PAM Executive Parking',
    metaDescription:
      'Private luxury valet parking in Jupiter, Florida — Admirals Cove, the Bear\u2019s Club, Jupiter Island events, waterfront weddings, and Harbourside functions. Request a quote.',
    h1: 'Valet Parking in Jupiter',
    lede:
      'Where the Intracoastal meets the inlet, arrivals deserve the same calm precision as the water at first light.',
    paragraphs: [
      'Jupiter anchors the northern end of our service area, and it holds some of South Florida\u2019s most exclusive addresses — Admirals Cove, the Bear\u2019s Club, the Loxahatchee Club, and the quiet estates of Jupiter Island just across the inlet. PAM Executive Parking serves this community with the discretion it is known for: professional, low-profile valet that protects both your guests\u2019 vehicles and your event\u2019s privacy.',
      'Waterfront properties present their own logistics — narrow private drives, limited turning radii, seawall-adjacent staging, and guest arrivals by both car and tender. Our site walks before every Jupiter event map exactly where vehicles will stage, how the queue will flow, and how attendants will move, so that on the evening itself everything simply works.',
      'We also support Jupiter\u2019s public-facing luxury: restaurant and event valet at Harbourside Place, functions at the area\u2019s golf and yacht clubs, and seasonal celebrations from Abacoa to the beach road.',
    ],
    highlightsTitle: 'Where we serve in Jupiter',
    highlights: [
      'Admirals Cove, the Bear\u2019s Club, and the Loxahatchee Club',
      'Jupiter Island private estates and events',
      'Waterfront weddings and Intracoastal properties',
      'Harbourside Place restaurants and functions',
      'Golf and yacht club events throughout north county',
    ],
    faqs: [
      {
        q: 'Can you handle valet at waterfront homes with tight driveways?',
        a: 'Yes — it is one of our specialties in Jupiter. We conduct a site visit before the event to plan vehicle staging, often arranging nearby overflow parking with a smooth attendant relay, so even estates with room for only a handful of cars can host a full guest list gracefully.',
      },
      {
        q: 'Do you serve Jupiter Island?',
        a: 'We do. Jupiter Island events receive our most senior teams, with strict attention to the island\u2019s privacy expectations, quiet operations, and coordination with household staff and security.',
      },
      {
        q: 'What size events do you staff in Jupiter?',
        a: 'Everything from a six-car dinner party to club events with hundreds of arrivals. Staffing is scaled precisely to your guest count and arrival window — never understaffed, never crowded with unnecessary attendants.',
      },
    ],
  },

  // ---------------------------------------------------------- WELLINGTON
  {
    slug: 'wellington',
    city: 'Wellington',
    county: 'Palm Beach County',
    lat: 26.6618,
    lng: -80.2684,
    metaTitle: 'Valet Parking in Wellington, FL | PAM Executive Parking',
    metaDescription:
      'Luxury event valet parking in Wellington, Florida — Winter Equestrian Festival season, polo events, Grand Prix Village estates, and equestrian community celebrations. Request a quote.',
    h1: 'Valet Parking in Wellington',
    lede:
      'For three months a year, Wellington is the center of the equestrian world. Its arrivals should look the part.',
    paragraphs: [
      'No town in America concentrates more world-class events into a single season than Wellington. From January through March, the Winter Equestrian Festival and the polo calendar draw international riders, patrons, and sponsors — and with them, an unbroken run of viewing parties, sponsor dinners, barn celebrations, and charity evenings. PAM Executive Parking staffs this season with teams who understand its tempo and its clientele.',
      'Equestrian properties ask something particular of a valet operation: long private drives, horse-safe vehicle movement, quiet operations near barns, and arrival windows that stretch as guests come from ringside. We plan for all of it — staging away from stabling, headlights managed after dark, and attendants briefed on each property\u2019s specific protocols.',
      'Beyond the season, we serve Wellington\u2019s year-round life: weddings and private celebrations in Grand Prix Village and Palm Beach Point, club functions, and community galas throughout the village.',
    ],
    highlightsTitle: 'Where we serve in Wellington',
    highlights: [
      'Winter Equestrian Festival season events and sponsor hospitality',
      'Polo viewing parties and post-match celebrations',
      'Grand Prix Village and Palm Beach Point estates',
      'Barn parties and equestrian community events',
      'Weddings and galas throughout the village',
    ],
    faqs: [
      {
        q: 'Do you have experience working around horses and barns?',
        a: 'Yes. Our Wellington teams are briefed on equestrian-property protocols: staging vehicles away from stabling, minimizing engine and door noise near barns, managing headlights after dark, and following each farm\u2019s specific movement rules. Your barn manager will find us easy guests.',
      },
      {
        q: 'How early should we book for WEF season?',
        a: 'As early as your date is fixed. The January-through-March calendar is the densest of our year, and season-long clients reserve recurring dates well in advance. For marquee weekends, earlier is always better — though we will always try to accommodate a late request.',
      },
      {
        q: 'Can you handle recurring weekly events during the season?',
        a: 'Absolutely. Many Wellington clients book us for a standing weekly slot through the season — the same lead attendants each week, familiar with your property, your guests, and your preferences.',
      },
    ],
  },

  // ---------------------------------------------------------- DELRAY BEACH
  {
    slug: 'delray-beach',
    city: 'Delray Beach',
    county: 'Palm Beach County',
    lat: 26.4615,
    lng: -80.0728,
    metaTitle: 'Valet Parking in Delray Beach, FL | PAM Executive Parking',
    metaDescription:
      'Professional valet parking in Delray Beach — Atlantic Avenue restaurants, beachfront weddings, private estates, and events from Pineapple Grove to the barrier island. Request a quote.',
    h1: 'Valet Parking in Delray Beach',
    lede:
      'Atlantic Avenue on a season evening is a beautiful kind of chaos. We are the calm at the curb.',
    paragraphs: [
      'Delray Beach runs on energy — a packed Atlantic Avenue dining scene, a barrier island of elegant homes, and an event calendar that barely pauses between season and summer. PAM Executive Parking brings order to that energy: restaurant valet that keeps the Avenue\u2019s curbs flowing, private-event service for the estates east of the Intracoastal, and wedding valet for the town\u2019s beachfront and club venues.',
      'Downtown Delray presents real parking pressure, and solving it is where a professional operation shows its worth. We secure and manage satellite parking, choreograph tight curb windows with the timing of a pit crew, and keep guest walk-time to effectively zero — guests hand off the car mid-block and step straight into dinner.',
      'For the quieter neighborhoods — the beach estates, Seagate, and the enclaves just south toward Gulf Stream and Highland Beach — we deliver the same discreet residential valet we provide on Palm Beach island: unhurried, polished, and invisible until the moment a guest needs us.',
    ],
    highlightsTitle: 'Where we serve in Delray Beach',
    highlights: [
      'Atlantic Avenue restaurants and nightlife valet',
      'Beachfront and club weddings',
      'Barrier island estates and the Seagate neighborhood',
      'Gulf Stream and Highland Beach residences',
      'Galas and community events from Pineapple Grove to the beach',
    ],
    faqs: [
      {
        q: 'How do you handle parking scarcity near Atlantic Avenue?',
        a: 'We plan it in advance. Before your event we secure satellite parking capacity, map the fastest attendant routes, and structure the curb operation so cars are received and retrieved in a continuous flow. Guests never see the logistics — only a swift, gracious hand-off.',
      },
      {
        q: 'Do you do wedding valet in Delray Beach?',
        a: 'Often, and happily. Beach and club weddings are a Delray specialty for us — we coordinate with your planner on timeline, manage vendor and guest vehicles separately, and make the send-off as seamless as the arrival.',
      },
      {
        q: 'Do you cover Gulf Stream and Highland Beach?',
        a: 'Yes. The residential corridor from Delray\u2019s barrier island south through Gulf Stream and Highland Beach is fully within our service area, and its private events receive our senior residential teams.',
      },
    ],
  },

  // ---------------------------------------------------------- BOCA RATON
  {
    slug: 'boca-raton',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    lat: 26.3683,
    lng: -80.1289,
    metaTitle: 'Valet Parking in Boca Raton, FL | PAM Executive Parking',
    metaDescription:
      'Luxury valet parking in Boca Raton — country club galas, Mizner Park events, Royal Palm Yacht & Country Club area estates, corporate functions, and weddings. Request a quote.',
    h1: 'Valet Parking in Boca Raton',
    lede:
      'Boca Raton has never confused abundance with excess. Its valet should carry the same discipline.',
    paragraphs: [
      'Boca Raton pairs one of South Florida\u2019s deepest concentrations of wealth with an event culture to match — club galas, museum benefits, corporate summits, and private celebrations across communities from Royal Palm Yacht & Country Club to the estates of the northeast neighborhoods. PAM Executive Parking serves all of it with the same measured, white-glove standard we built on Palm Beach island.',
      'The city\u2019s scale demands operational range. A Mizner Park gallery evening, a two-hundred-guest country club gala, and an intimate dinner on the Intracoastal each call for a different staffing model, staging plan, and tempo — and we build each event\u2019s operation from the ground up rather than stretching a single template across them.',
      'For Boca\u2019s corporate community, we provide executive event valet — board dinners, client entertainment, and product events where the arrival experience is part of the impression your company makes. Attendants are briefed on your guest list\u2019s cadence and your brand\u2019s standard of presentation.',
    ],
    highlightsTitle: 'Where we serve in Boca Raton',
    highlights: [
      'Country club galas and member events citywide',
      'Royal Palm Yacht & Country Club area estates',
      'Mizner Park functions and downtown events',
      'Corporate dinners and executive entertainment',
      'Weddings and private celebrations on the Intracoastal',
    ],
    faqs: [
      {
        q: 'Do you serve Boca Raton country clubs?',
        a: 'Yes — club work is central to our Boca operation. We integrate with each club\u2019s existing standards and staff structure, whether supplementing an in-house team for a marquee gala or providing the complete valet operation for a tournament or member event.',
      },
      {
        q: 'Can you support corporate events in Boca Raton?',
        a: 'Certainly. We regularly staff board dinners, client entertainment evenings, and corporate functions where presentation matters. We can coordinate directly with your executive assistant or event team and provide certificates of insurance to your venue without delay.',
      },
      {
        q: 'How is pricing structured for Boca Raton events?',
        a: 'By the specifics: guest count, hours, arrival pattern, and parking logistics. Submit the quote form with your date and venue and we will return a precise proposal, typically the same day.',
      },
    ],
  },

  // ---------------------------------------------------------- FORT LAUDERDALE
  {
    slug: 'fort-lauderdale',
    city: 'Fort Lauderdale',
    county: 'Broward County',
    lat: 26.1224,
    lng: -80.1373,
    metaTitle: 'Valet Parking in Fort Lauderdale, FL | PAM Executive Parking',
    metaDescription:
      'Luxury valet parking in Fort Lauderdale — Las Olas events, yacht club functions, boat show season, waterfront estates, and Harbor Beach celebrations. Request a quote.',
    h1: 'Valet Parking in Fort Lauderdale',
    lede:
      'In the yachting capital of the world, the standard for arrival is set on the water. We meet it at the curb.',
    paragraphs: [
      'Fort Lauderdale\u2019s luxury runs along its waterways — the estates of Harbor Beach, Rio Vista, and Coral Ridge; the yacht clubs; the marinas whose docks host some of the largest private vessels in the world. PAM Executive Parking extends our Palm Beach standard into this market with valet built for the city\u2019s maritime calendar and waterfront geography.',
      'Boat show season is the sharpest test of any valet operation in Broward County. During the Fort Lauderdale International Boat Show and the private events that orbit it — broker dinners, owner receptions, shipyard celebrations — arrival volumes spike and street access tightens. We plan these events weeks out, with staging maps, satellite capacity, and attendant counts sized for the surge.',
      'Year-round, we serve Las Olas Boulevard\u2019s restaurants and galleries, weddings and private events at waterfront residences, and club functions from Coral Ridge to Lauderdale-by-the-Sea. Isles homes with single-lane bridges and tight motor courts are familiar territory — we walk every challenging site before the event.',
    ],
    highlightsTitle: 'Where we serve in Fort Lauderdale',
    highlights: [
      'Harbor Beach, Rio Vista, and Coral Ridge waterfront estates',
      'Yacht club functions and marina events',
      'Boat show season receptions and broker dinners',
      'Las Olas Boulevard restaurants and galleries',
      'Weddings and private celebrations on the Isles',
    ],
    faqs: [
      {
        q: 'Do you staff events during the Fort Lauderdale boat show?',
        a: 'Yes — boat show week is a fixture of our calendar. Because demand across the city spikes simultaneously, we encourage clients to reserve as soon as their event date is set. We build a bespoke staging and traffic plan for each show-week event.',
      },
      {
        q: 'Can you manage valet at Isles homes with narrow streets?',
        a: 'Routinely. The finger-isle neighborhoods have limited turning space and single points of access, so we stage vehicles off-island and run a continuous attendant relay. Guests experience a normal, effortless valet — the complexity stays invisible.',
      },
      {
        q: 'Is Fort Lauderdale within your standard service area?',
        a: 'Fully. Broward County is served by the same teams, training, and insurance coverage as our Palm Beach operation, with no difference in standard or availability.',
      },
    ],
  },

  // ---------------------------------------------------------- POMPANO BEACH
  {
    slug: 'pompano-beach',
    city: 'Pompano Beach',
    county: 'Broward County',
    lat: 26.2379,
    lng: -80.1248,
    metaTitle: 'Valet Parking in Pompano Beach, FL | PAM Executive Parking',
    metaDescription:
      'Professional valet parking in Pompano Beach — oceanfront residences, Hillsboro Mile estates, new luxury towers, restaurants, and private events. Request a quote.',
    h1: 'Valet Parking in Pompano Beach',
    lede:
      'Pompano Beach is writing a new chapter on the oceanfront. Its arrivals should read like the rest of the story.',
    paragraphs: [
      'Few stretches of South Florida\u2019s coast are transforming as quickly as Pompano Beach. A generation of luxury oceanfront towers, a revitalized beachfront village, and the storied estates of the Hillsboro Mile just to the north have made the city a genuine luxury market — and PAM Executive Parking serves it with the same standard we bring to Palm Beach.',
      'We provide valet for private events in oceanfront residences and penthouses, functions at the city\u2019s waterfront restaurants, and celebrations at homes along the Intracoastal and the Hillsboro corridor. Tower events carry their own logistics — porte-coch\u00e8re coordination, building management requirements, resident traffic that must keep flowing around your guests — and our teams handle all of it in step with your building\u2019s staff.',
      'For the Hillsboro Mile\u2019s gated oceanfront estates, we deliver quiet, senior-team residential valet: precise staging on properties that run ocean-to-Intracoastal, careful handling on A1A, and the discretion these addresses have always required.',
    ],
    highlightsTitle: 'Where we serve in Pompano Beach',
    highlights: [
      'Luxury oceanfront towers and penthouse events',
      'Hillsboro Mile estates and Hillsboro Beach residences',
      'Waterfront restaurants and the beachfront village',
      'Intracoastal homes and dock parties',
      'Private celebrations throughout the city',
    ],
    faqs: [
      {
        q: 'Can you coordinate with condo building management for tower events?',
        a: 'Yes — it is standard practice for us. We handle certificates of insurance, attendant rosters for building security, loading-dock and porte-coch\u00e8re scheduling, and resident traffic flow, all arranged with your building\u2019s management before the first guest arrives.',
      },
      {
        q: 'Do you serve the Hillsboro Mile?',
        a: 'We do. Hillsboro Beach\u2019s ocean-to-Intracoastal estates are within our service area and receive our senior residential teams, with careful attention to A1A traffic handling and each property\u2019s privacy expectations.',
      },
      {
        q: 'What types of events do you staff in Pompano Beach?',
        a: 'Private dinners, penthouse receptions, milestone celebrations, restaurant partnerships, and community galas. If guests are arriving by car and the impression matters, it is our kind of event.',
      },
    ],
  },

  // ---------------------------------------------------------- AVENTURA
  {
    slug: 'aventura',
    city: 'Aventura',
    county: 'Miami-Dade County',
    lat: 25.9565,
    lng: -80.1392,
    metaTitle: 'Valet Parking in Aventura, FL | PAM Executive Parking',
    metaDescription:
      'Luxury valet parking in Aventura, Florida — Williams Island, Turnberry area events, high-rise residences, private functions, and upscale retail. Request a quote.',
    h1: 'Valet Parking in Aventura',
    lede:
      'Aventura lives vertically — towers, terraces, and views. Its valet has to work beautifully at ground level.',
    paragraphs: [
      'Aventura concentrates extraordinary residential wealth into a few square miles of towers, golf frontage, and marina — Williams Island, the Turnberry corridor, and the high-rises overlooking the ocean and the Intracoastal. PAM Executive Parking brings white-glove valet to this vertical city: private events in residences and amenity spaces, functions at the area\u2019s clubs, and upscale retail and restaurant service.',
      'High-rise event valet is a discipline of its own. Porte-coch\u00e8res shared with resident traffic, strict building vendor rules, elevator and loading logistics, and guest arrivals compressed into narrow windows — we choreograph all of it with building management so your event layer sits smoothly on top of the building\u2019s daily rhythm.',
      'We also serve the private clubs and golf communities of the Turnberry area, marina events at the harbors, and celebrations in the gated enclaves that ring the city — the same teams and standards our Palm Beach clients know.',
    ],
    highlightsTitle: 'Where we serve in Aventura',
    highlights: [
      'Williams Island and gated waterfront enclaves',
      'Turnberry area clubs and golf community events',
      'High-rise residences and amenity-deck functions',
      'Marina events and dockside celebrations',
      'Upscale retail and restaurant valet',
    ],
    faqs: [
      {
        q: 'Do you handle events in Aventura high-rise buildings?',
        a: 'Yes — tower events are a core competency. We coordinate insurance certificates, security rosters, porte-coch\u00e8re scheduling, and resident traffic management with your building in advance, so the valet operation integrates seamlessly with the building\u2019s own staff.',
      },
      {
        q: 'Do you serve Williams Island?',
        a: 'We do. Williams Island functions — residential events, club occasions, and marina gatherings — are within our standard Miami-Dade coverage, with gatehouse and management coordination handled well before event day.',
      },
      {
        q: 'How far south does your service area extend?',
        a: 'Our full-service area runs from Jupiter to Miami, with Aventura squarely inside it. The same attendants, training standard, and insurance coverage apply across the entire corridor.',
      },
    ],
  },

  // ---------------------------------------------------------- MIAMI BEACH
  {
    slug: 'miami-beach',
    city: 'Miami Beach',
    county: 'Miami-Dade County',
    lat: 25.7907,
    lng: -80.13,
    metaTitle: 'Valet Parking in Miami Beach, FL | PAM Executive Parking',
    metaDescription:
      'Luxury private valet parking in Miami Beach — oceanfront estates, Art Basel week, penthouse events, Bal Harbour functions, and celebrations from South Beach to Surfside. Request a quote.',
    h1: 'Valet Parking in Miami Beach',
    lede:
      'On Miami Beach, the world is watching the arrival. We make certain it is worth watching.',
    paragraphs: [
      'Miami Beach hosts some of the most photographed arrivals in America — and behind every one of them is an operation that either works or visibly does not. PAM Executive Parking provides the former: precise, polished, camera-ready valet for oceanfront estates, penthouse receptions, brand events, and the private dinners that fill the calendar from Art Basel week through the winter season.',
      'The Beach\u2019s geography demands mastery of compression: Collins Avenue traffic, minimal staging space, city curb regulations, and guest lists that arrive all at once. Our teams pre-position, secure off-site capacity, and run continuous retrieval cycles so the operation absorbs the surge without a visible ripple.',
      'From the estates of North Bay Road and the Venetian Islands to functions near Bal Harbour and Surfside, we serve the full island and its neighbors — with the discretion required when the guest list itself is confidential.',
    ],
    highlightsTitle: 'Where we serve in Miami Beach',
    highlights: [
      'North Bay Road and Venetian Islands estates',
      'Art Basel week events and brand activations',
      'Penthouse and oceanfront receptions',
      'Bal Harbour and Surfside functions',
      'Private dinners and season celebrations island-wide',
    ],
    faqs: [
      {
        q: 'Do you staff events during Art Basel?',
        a: 'Yes — Basel week is one of the most demanding stretches of our year, and we plan for it accordingly. Book as early as your date firms up; citywide demand and street restrictions make advance staging plans essential.',
      },
      {
        q: 'Can you operate with the confidentiality high-profile guests require?',
        a: 'Discretion is the foundation of our brand. Attendants are trained on privacy protocols — no photographs, no social media, no discussion of guests — and we are comfortable working alongside personal security teams and publicists.',
      },
      {
        q: 'How do you deal with limited staging space on the Beach?',
        a: 'With planning. We secure off-site parking capacity in advance, model the arrival curve of your specific guest list, and run continuous vehicle cycles so the curb in front of your event stays clear and composed all night.',
      },
    ],
  },

  // ---------------------------------------------------------- MIAMI
  {
    slug: 'miami',
    city: 'Miami',
    county: 'Miami-Dade County',
    lat: 25.7617,
    lng: -80.1918,
    metaTitle: 'Valet Parking in Miami, FL | PAM Executive Parking',
    metaDescription:
      'Luxury valet parking in Miami — Coconut Grove and Coral Gables estates, Brickell events, Design District functions, gala venues, and private celebrations. Request a quote.',
    h1: 'Valet Parking in Miami',
    lede:
      'Miami is a city of grand entrances. We handle the part of yours that involves keys.',
    paragraphs: [
      'Miami closes the southern end of our Jupiter-to-Miami service corridor, and it may be the most varied market we serve: waterfront estates in Coconut Grove and Gables Estates, penthouse events above Brickell, Design District brand functions, and gala evenings at the city\u2019s museums and historic venues. PAM Executive Parking brings one consistent standard to all of it — the white-glove discipline we built for Palm Beach, applied to Miami\u2019s scale.',
      'The city\u2019s marquee venues and estates each carry unique logistics: historic properties with protected grounds and fixed staging areas, Brickell towers with shared porte-coch\u00e8res, and gated enclaves like Gables Estates and Tahiti Beach with strict access control. We walk every significant site in advance and build the operation around the property, never the reverse.',
      'For Miami\u2019s corporate and cultural calendar — openings, benefits, brand launches — we deliver event valet that treats the arrival as part of the production: attendants styled to your event\u2019s standard, timing rehearsed against your run-of-show, and departures managed as carefully as arrivals.',
    ],
    highlightsTitle: 'Where we serve in Miami',
    highlights: [
      'Coconut Grove and Coral Gables waterfront estates',
      'Gables Estates, Tahiti Beach, and gated enclaves',
      'Brickell penthouse and tower events',
      'Design District functions and brand launches',
      'Museum galas and historic-venue celebrations',
    ],
    faqs: [
      {
        q: 'Do you cover Coral Gables and Coconut Grove?',
        a: 'Yes — the Gables, the Grove, and their gated waterfront enclaves are fully within our service area. Estate events there receive our senior residential teams and a pre-event site walk as standard.',
      },
      {
        q: 'Can you valet at historic or protected venues?',
        a: 'We can, and we respect what those properties require: fixed staging zones, protected landscape and hardscape, and coordination with venue staff on every vehicle movement. Our plan conforms to the venue — never the other way around.',
      },
      {
        q: 'Do you charge extra for Miami-area events?',
        a: 'Every quote reflects the specifics of the event — staffing, hours, and logistics — rather than a flat geographic surcharge. Submit your date and venue through the quote form and we will price it precisely.',
      },
    ],
  },
];

/** Convenience lookup used by the dynamic route. */
export function getLocation(slug) {
  return locations.find((l) => l.slug === slug);
}
