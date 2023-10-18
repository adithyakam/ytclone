var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

var finalName = "";

export function genName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

export function genMsg(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const searchres = {
  kind: "youtube#searchListResponse",
  etag: "ojtd-hvsT4tgiBFTF1JMBbR5-xw",
  nextPageToken: "CAUQAA",
  regionCode: "IN",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "YAlYtJeyNK3VrdCSIgnE9ezvgB4",
      id: {
        kind: "youtube#video",
        videoId: "AXSlxJ3Y2xM",
      },
      snippet: {
        publishedAt: "2023-10-18T01:39:00Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title:
          "Iran Vs Israel LIVE News: महायुद्ध में Iran के कूदने से होगा बवाल ? देखिए Anjana Om Kashyap के साथ",
        description:
          "Iran गाजा पट्टी (Gaza Strip) पर हो रहे इजरायली हमलों से परेशान है. वह इसका ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/AXSlxJ3Y2xM/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/AXSlxJ3Y2xM/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/AXSlxJ3Y2xM/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2023-10-18T01:39:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "pIGY_cQ2k3CkxiHdULA4-L1JNn4",
      id: {
        kind: "youtube#video",
        videoId: "qQ0JrCyLMZI",
      },
      snippet: {
        publishedAt: "2023-10-17T14:30:51Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title:
          "Iran अगर जंग में कूदा तो क्या होगा World War: Israel-Palestine War Updates | BJP Vs Congress",
        description:
          "इजरायल और फिलिस्तीन के बीच जंग छिड़ गई है. फिलिस्तीन ने जहां इजराइल ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qQ0JrCyLMZI/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qQ0JrCyLMZI/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qQ0JrCyLMZI/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2023-10-17T14:30:51Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "LzZwoPYnuXv7e0_P3y-qZEk44rA",
      id: {
        kind: "youtube#video",
        videoId: "Nq2wYlWFucg",
      },
      snippet: {
        publishedAt: "2022-11-16T12:42:23Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title:
          "Aaj Tak LIVE TV: Israel-Palestine War News LIVE | Hamas Attack | Assembly Election 2023 | Congress",
        description:
          "इजरायल और हमास की लड़ाई का सबसे वीभत्स रूप देखने को मिला है। गाजा के ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2022-11-16T12:42:23Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "V6YP65VWyCrNmCvvYPMzZBzeid4",
      id: {
        kind: "youtube#channel",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
      },
      snippet: {
        publishedAt: "2009-08-27T11:54:24Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title: "Aaj Tak",
        description:
          "Watch Aaj Tak Live TV and stay tuned for all the breaking news in Hindi ! Aaj Tak is India's leading Hindi News Channel. Aaj Tak ...",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/ytc/APkrFKZKgGzdubzPHWv93ioZkQ1FGX4HhMOZGEsoHQrc_5U=s88-c-k-c0xffffffff-no-rj-mo",
          },
          medium: {
            url: "https://yt3.ggpht.com/ytc/APkrFKZKgGzdubzPHWv93ioZkQ1FGX4HhMOZGEsoHQrc_5U=s240-c-k-c0xffffffff-no-rj-mo",
          },
          high: {
            url: "https://yt3.ggpht.com/ytc/APkrFKZKgGzdubzPHWv93ioZkQ1FGX4HhMOZGEsoHQrc_5U=s800-c-k-c0xffffffff-no-rj-mo",
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2009-08-27T11:54:24Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "4XiYFrnI00vlZdtcJ7Ibk0eXHo0",
      id: {
        kind: "youtube#video",
        videoId: "EBrfJmW7LAA",
      },
      snippet: {
        publishedAt: "2023-10-18T01:22:23Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title:
          "Morning Top 100 News LIVE: आज सुबह की सबसे बड़ी 100 खबरें फटाफट अंदाज में देखिए | Aaj Tak | LIVE",
        description:
          "इजरायल-हमास के बीच जंग का 11वां दिन, रेड अलर्ट से सहमा तेल अवीव, मिसाइल ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/EBrfJmW7LAA/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/EBrfJmW7LAA/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/EBrfJmW7LAA/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2023-10-18T01:22:23Z",
      },
    },
  ],
};
