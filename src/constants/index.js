
import TelegramIcon from "../assets/social/telegram.svg";
import TwitterIcon from "../assets/social/twitter2.png";
import TelegramIcon2 from "../assets/social/telegram.png";
import TwitterIcon2 from "../assets/social/twitter.png";
import MediumIcon from "../assets/social/medium.svg";
import MediumIcon2 from "../assets/social/medium.png";
import YoutubeIcon from "../assets/social/youtube.svg";
import YoutubeIcon2 from "../assets/social/youtube.png";

import Blog1 from "../assets/blog/blogimg1.webp";
import Blog2 from "../assets/blog/blogimg2.webp";
import Blog3 from "../assets/blog/blogimg3.webp";
import Blog4 from "../assets/blog/blogimg4.webp";
import Cryptid1 from "../assets/cryptids/cryptid1.png";
import Cryptid2 from "../assets/cryptids/cryptid2.png";
import Cryptid3 from "../assets/cryptids/cryptid3.png";
import Cryptid4 from "../assets/cryptids/cryptid4.png";
import Cryptid5 from "../assets/cryptids/cryptid5.png";
import Cryptid6 from "../assets/cryptids/cryptid6.png";
import Cryptid7 from "../assets/cryptids/cryptid7.png";
import Cryptid8 from "../assets/cryptids/cryptid8.png";
import Cryptid9 from "../assets/cryptids/cryptid9.png";
import Cryptid10 from "../assets/cryptids/cryptid10.png";
import Cryptid11 from "../assets/cryptids/cryptid11.png";
import Cryptid12 from "../assets/cryptids/cryptid12.png";
import Cryptid13 from "../assets/cryptids/cryptid13.png";
import Cryptid14 from "../assets/cryptids/cryptid14.png";
import Cryptid15 from "../assets/cryptids/cryptid15.png";
import Cryptid16 from "../assets/cryptids/cryptid16.png";
import Cryptid17 from "../assets/cryptids/cryptid17.png";
import Cryptid18 from "../assets/cryptids/cryptid18.png";
import Cryptid19 from "../assets/cryptids/cryptid19.png";
import Cryptid20 from "../assets/cryptids/cryptid20.png";
import Fly from "../assets/types/fly.png";
import Electric from "../assets/types/electric.png";
import Grass from "../assets/types/grass.png";
import Insect from "../assets/types/ınsect.png";
import Water from "../assets/types/water.png";
import Dragon from "../assets/types/dragon.png";
import Ice from "../assets/types/ıce.png";
import Flame from "../assets/types/flame.png";
import Fairy from "../assets/types/fairy.png";
import Normal from "../assets/types/normal.png";
import Ground from "../assets/types/ground.png";
import Dark from "../assets/types/dark.png";
import Poison from "../assets/types/poison.png";
import Psychic from "../assets/types/esper.png";
 // Parnets
import IostImage from "../assets/partners/iost.png";
import AnimocaImage from "../assets/partners/animocaventures.png";
import BbcImage from "../assets/partners/bbc.png";
import CoinmarketImage from "../assets/partners/coinmarketcap.svg";
import CryptokidImage from "../assets/partners/cryptokid.png";
import HgventuresImage from "../assets/partners/hgventures.png";
import OkxImage from "../assets/partners/okx.svg";
import SlowmistImage from "../assets/partners/slowmist.png";
import SpartanImage from "../assets/partners/spartangroup.png";
import LayerOtcImage from "../assets/partners/layerotc.png";
import NoxImage from "../assets/partners/nox.png";
import Web3WavesImage from "../assets/partners/web3waves.png";
import MindfullnessImage from "../assets/partners/mindfullness.png";
import GalxeImage from "../assets/partners/galxe.png";
import SteemImage from "../assets/partners/steem.png";



const MenuList = [
  {
    id: 0,
    text: "Cryptids",
    action: "inpage",
    to: "#cryptids",
  },
  {
    id: 1,
    text: "Our Project",
    action: "inpage",
    to: "#project",
  },
  {
    id: 2,
    text: "Road Map",
    action: "inpage",
    to: "#roadmap",
  },
  {
    id: 3,
    text: "Faq",
    action: "inpage",
    to: "#faq",
  },
  {
    id: 4,
    text: "Partners",
    action: "inpage",
    to: "#partners",
  },
  {
    id: 5,
    text: "Blog",
    action: "inpage",
    to: "#blog",
  },
  {
    id: 6,
    text: "White Paper",
    action: "external",
    to: "https://docs.cryptohunter.world/",
  },
];

const SocialLinks = [
  { icon: TelegramIcon, icon2: TelegramIcon2, link: "https://t.me/Cryptohunter_ANNOUNCEMENT ", alt: "Telegram Announcement" },
  { icon: TelegramIcon, icon2: TelegramIcon2, link: "https://t.me/Cryptohunter_OFFFICIAL_COMMUNITY", alt: "Telegram Official" },
  { icon: TwitterIcon, icon2: TwitterIcon2, link: "https://x.com/CryptohunterX2E", alt: "Twitter Feed" },
  { icon: MediumIcon, icon2: MediumIcon2, link: "https://medium.com/@cryptohunterworld", alt: "Medium Feed" },
  { icon: YoutubeIcon, icon2: YoutubeIcon2, link: "https://www.youtube.com/@cryptohunterworld", alt: "Youtube Channel" },
];
const FAQData = [
  {
    question: "How do I get started with CryptoHunter World?",
    answer:
      "The CryptoHunter World app can be downloaded from Google Play Store or App Store.CryptoHunter World has a Hunter Mode for NFT holders and an Adventure Mode that can be used even if you do not own an NFT.",
  },
  {
    question: "What is Crypto Hunter World's Anti-Cheating System?",
    answer:
      "CryptoHunter World's anti-abuse system is a system created to block bots and abusing users, maintaining a stable token economy and providing a fair gaming environment for users.In particular, the GPS-based pedometer system is a system that tracks the user's activities, such as the user's moving distance and moving speed, and abusing is not possible simply by manipulating the GPS.",
  },
  {
    question: "What is the difference between Hunter Mode and Adventure Mode?",
    answer:
      "Hunter Mode is a mode available to users who own NFT shoes. During the time Hunter Mode is activated, all user activities are accumulated as scores and CHW tokens can be rewarded.In Adventure Mode, User can enjoy the game by using services and clearing missions even if user do not own NFT shoes, but it is excluded from CHW token rewards.",
  },
  {
    question: "What are Cryptids in CryptoHunter World?",
    answer:
      "Cryptids are unique creatures that exist exclusively within the world of CryptoHunter World.",
  },
  {
    question: "What is the Cryptids Cube?",
    answer:
      "Cryptids Cube is a special item that can create a Cryptid in CryptoHunter World. Cryptids cubes can be activated using various types of key items, and new Cryptids can be created through the user's 'Activity energy'. \n 'Activity energy' is accumulated through all activities in the user's daily life through the smartphone pedometer. Users can naturally accumulate activity energy in their daily lives and play an important role in creating new Cryptids.",
  },
];

const BlogData = [
  {
    date: "Jun 17, 2024",
    title: "Introducing the new M2E dApp, collectible RPG Move To Play CryptoHunter.World.",
    image: Blog1,
    link: "https://medium.com/@cryptohunterworld/introducing-the-new-m2e-dapp-collectible-rpg-move-to-play-cryptohunter-world-1faf7596e154",
  },
  {
    date: "Jul 1, 2024",
    title: "What is Crypto Hunter World’s Anti-Cheating System?",
    image: Blog2,
    link: "https://medium.com/@cryptohunterworld/cryptohunter-worlds-anti-abuse-system-127aa817cca1",
  },
  {
    date: "Jun 21, 2024",
    title: "Crypto Hunter World Game System — Cryptid PART 1",
    image: Blog3,
    link: "https://medium.com/@cryptohunterworld/crypto-hunter-world-game-system-cryptid-part-1-6acfae73833c",
  },
  {
    date: "July 11, 2024",
    title: "Crypto Hunter World Game System — Cryptid PART 2",
    image: Blog4,
    link: "https://medium.com/@cryptohunterworld/crypto-hunter-world-game-system-cryptid-part-2-905e753a40f7",
  },
];

const CryptidsData = [
  {
    name: "Thundercat",
    image: Cryptid1,
    icons: [Fly, Electric], //tipler
  },
  {
    name: "Onionmantis",
    image: Cryptid2,
    icons: [Grass, Insect], //tipler
  },
  {
    name: "Jellyflower",
    image: Cryptid3,
    icons: [Water, Grass], //tipler
  },
  {
    name: "Flowfish",
    image: Cryptid4,
    icons: [Water, Poison], //tipler
  },

  {
    name: "Blizzardra",
    image: Cryptid5,
    icons: [Dragon, Ice], //tipler
  },
  {
    name: "Flamenix",
    image: Cryptid6,
    icons: [Fly, Flame], //tipler
  },
  {
    name: "Treiry",
    image: Cryptid7,
    icons: [Fairy, Grass], //tipler
  },
  {
    name: "Hamlictirc",
    image: Cryptid8,
    icons: [Electric, Normal], //tipler
  },
  {
    name: "Beetwo",
    image: Cryptid9,
    icons: [Insect], //tipler
  },
  {
    name: "Magicpeng",
    image: Cryptid10,
    icons: [Ice], //tipler
  },
  {
    name: "Magicpeng",
    image: Cryptid11,
    icons: [Ice, Psychic], //tipler
  },

  {
    name: "Nepheles",
    image: Cryptid12,
    icons: [Fairy], //tipler
  },
  {
    name: "Bullet",
    image: Cryptid13,
    icons: [Flame], //tipler
  },
  {
    name: "Firelopex",
    image: Cryptid14,
    icons: [Flame], //tipler
  },
  {
    name: "Firelopex",
    image: Cryptid15,
    icons: [Flame, Normal], //tipler
  },
  {
    name: "Anubia",
    image: Cryptid16,
    icons: [Dark, Ground], //tipler
  },
  {
    name: "Razar",
    image: Cryptid17,
    icons: [Ground], //tipler
  },
  {
    name: "Kernos",
    image: Cryptid18,
    icons: [Dark, Flame], //tipler
  },
  {
    name: "Kernos",
    image: Cryptid19,
    icons: [Dark, Flame], //tipler
  },
  {
    name: "Tree sorcerer",
    image: Cryptid20,
    icons: [Grass, Psychic], //tipler
  },
];

const RoadmapData = [
  {
    step:1,
    title:"2023~2024 Q2 ",
    data:["CryptoHunter World World service planning and design"]
  },
  {
    step:2,
    title:"2023~2024 Q2 ",
    data:["CryptoHunter World M2E system development","Cryptids Character Design","Building a PvE battle system"]
  },
  {
    step:3,
    title:"2024.Q3",
    subtitle:"Beta Service Launch",
    data:["CryptoHunterWorld’s Ios and Android applications will enter a BETA testing phase.Hunter NFT Shoes box Sale","A limited NFT sale will be held for BETA Testers."]
  },
  {
    step:4,
    title:"2024.Q3",
    subTitle:"BETA Test Airdrop Event.",
    data:["We are holding an airdrop event of 10 Million Token for BETA test participants.CryptoHunter World Token Listing on CEX","CHW Token will be listed on major centralized exhcnages."]
  },
  {
    step:5,
    title:"2024.Q4",
    subtitle:"GLT Token Minting Start.",
    data:["GLT utility Token distribution will begin through the CryptoHunter World service and rewards will be paid to service users.","GLT Token Staking System (DeFi)"]
  },
  {
    step:6,
    title:"2025.Q1",
    subTitle:"PvP Mode + Rank System",
    data:["Users can use the Cryptids they have collected to participate in seasonal competitions and win prizes."]
  },
  {
    step:7,
    title:"2025 Q1",
    subtitle:"Q1 Multichain System",
    data:[,"2025 Q1 Multichain System CryptoHunter World will be supported and serviced on various blockchains."]
  },
  {
    step:8,
    title:"2025 Q2",
    data:["CryptoHunter World Official Service","Google Maps integration","AR Functionality","Pro-Hunter Licenses NFT System."]
  },
  
]
const PartnersData = [
  {
    name:"IOST",
    image:IostImage,
    uri:"https://iost.io/",
    type:"partner" // partner || bakers
  },
  {
    name:"Big Candle Capital",
    image:BbcImage,
    uri:"https://bigcandle.capital/",
    type:"partner" // partner || bakers
  },
  {
    name:"HG Ventures",
    image:HgventuresImage,
    uri:"https://www.hgventures.io/",
    type:"partner" // partner || bakers
  },
  {
    name:"Mindfullness Capital",
    image:MindfullnessImage,
    uri:"https://www.mindfulnesscap.com/",
    type:"partner" // partner || bakers
  },
  {
    name:"CoinMarketCap",
    image:CoinmarketImage,
    uri:"https://coinmarketcap.com/currencies/cryptohunter-world/",
    type:"partner" // partner || bakers
  },
  // {
  //   name:"Spartan Group",
  //   image:SpartanImage,
  //   uri:"https://www.spartangroup.io/",
  //   type:"partner" // partner || bakers
  // },
  {
    name:"Slowmist",
    image:SlowmistImage,
    uri:"https://www.slowmist.com/",
    type:"partner" // partner || bakers
  },
  // {
  //   name:"Okx",
  //   image:OkxImage,
  //   uri:"https://www.okx.com",
  //   type:"partner" // partner || bakers
  // },
  {
    name:"Layer OTC",
    image:LayerOtcImage,
    uri:"https://www.layer-otc.com/",
    type:"partner" // partner || bakers
  },
  // {
  //   name:"Crypto Kid",
  //   image:CryptokidImage,
  //   uri:"https://cryptokid.com/",
  //   type:"partner" // partner || bakers
  // },
  // {
  //   name:"Animaco Ventures",
  //   image:AnimocaImage,
  //   uri:"https://animoca.ventures/",
  //   type:"partner" // partner || bakers
  // },
  {
    name:"Nox Gaming Gear",
    image:NoxImage,
    uri:"https://e-nox.co.kr/",
    type:"partner" // partner || bakers
  },
  {
    name:"Web3 Waves",
    image:Web3WavesImage,
    uri:"#",
    type:"partner" // partner || bakers
  },
  {
    name:"Galxe",
    image:GalxeImage,
    uri:"https://www.galxe.com/",
    type:"partner" // partner || bakers
  },
  {
    name:"Steem Witness",
    image:SteemImage,
    uri:"#",
    type:"partner" // partner || bakers
  }

]
export { MenuList, SocialLinks, FAQData, BlogData, CryptidsData ,RoadmapData,PartnersData};
