let articles = [
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Afghanistan: Clashes as Taliban attack holdout Afghan valley",
    description:
      "Thousands of Taliban fighters take on militants in the last province resisting the Islamist takeover.",
    url: "http://www.bbc.co.uk/news/live/world-58279900",
    urlToImage:
      "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
    publishedAt: "2021-09-03T07:22:26.4252709Z",
    content:
      "A five-year-old Afghan boy evacuated from Kabul who became critically ill after eating poisonous wild mushrooms at his migrant centre in Poland has died, health ministry spokesman, Wojciech Andrusiew… [+1280 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "Islamic State 'Beatles' member pleads guilty over US hostage deaths",
    description:
      "Alexanda Kotey is on trial for his involvement in the murders of US journalists and relief workers.",
    url: "http://www.bbc.co.uk/news/world-us-canada-58427171",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/C7DF/production/_120376115_mediaitem120376114.jpg",
    publishedAt: "2021-09-03T06:37:21.8680648Z",
    content:
      "image captionAlexanda Kotey (file image)\r\nAn Islamic State (IS) group suspect from the UK has pleaded guilty in a US court to charges of conspiring to murder four American hostages.\r\nAlexanda Kotey i… [+2624 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "New Zealand police shoot man dead after supermarket stabbing incident",
    description:
      "Videos online show panicked shoppers running out of the Countdown supermarket at LynnMall.",
    url: "http://www.bbc.co.uk/news/world-asia-58405213",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/E201/production/_120375875_gettyimages-458871496.jpg",
    publishedAt: "2021-09-03T04:52:20.7808724Z",
    content:
      "image captionA file photo of a Lynnmall in Auckland\r\nPolice in New Zealand have shot dead a man after he entered an Auckland supermarket and stabbed multiple people.\r\nLocal reports say four people we… [+761 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Yoshihide Suga to step down as Japan's prime minister",
    description:
      "Mr Suga had been appointed to the role just a year ago following the resignation of Shinzo Abe.",
    url: "http://www.bbc.co.uk/news/world-asia-58405212",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/A7A4/production/_120361924_gettyimages-1234861901.jpg",
    publishedAt: "2021-09-03T04:37:22.6141414Z",
    content:
      "Japan's Yoshihide Suga prime minister has said he will not run for re-election as party leader this month, signalling the end of his tenure. \r\nMr Suga had been appointed to the role just a year ago f… [+1802 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Afghanistan crisis: How Europe soured on Joe Biden",
    description:
      "In many EU circles, the honeymoon period for Donald Trump's successor may be coming to an end.",
    url: "http://www.bbc.co.uk/news/world-europe-58416848",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/885B/production/_120370943_gettyimages-1233447987.jpg",
    publishedAt: "2021-09-02T23:22:24.6253889Z",
    content:
      "By Mark LowenBBC Europe correspondent\r\nimage sourceAnadolu Agency\r\nimage captionFrench president Emanuel Macron speaks with US president Joe Biden at the Nato summit in June 2021\r\nFrom a white-knuckl… [+6303 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "Storm Ida: Death toll climbs to 41 across four US north-east states",
    description:
      'President Biden calls for "historic investment" to tackle the climate crisis as the US reels from the storm.',
    url: "http://www.bbc.co.uk/news/world-us-canada-58429853",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/849B/production/_120374933_mediaitem120374932.jpg",
    publishedAt: "2021-09-02T23:22:21.00129Z",
    content:
      'media captionThe record rainfall caused flash flooding in New York City\r\nUS President Joe Biden says "historic investment" is needed to deal with the climate crisis, as the north-east reels from flas… [+4480 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Climate change: Arctic warming linked to colder winters",
    description:
      "A new study connects the heating of the Arctic region to extreme winter weather in the US.",
    url: "http://www.bbc.co.uk/news/science-environment-58425526",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/7D75/production/_120371123_gettyimages-1314847741.jpg",
    publishedAt: "2021-09-02T22:07:22.1193391Z",
    content:
      "By Matt McGrathEnvironment correspondent\r\nimage captionWarming in the Arctic region is being linked to extreme winter weather in the US\r\nA new study shows that increases in extreme winter weather in … [+3983 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Flash floods cause New York City state of emergency",
    description:
      'NYC Mayor Bill de Blasio said the city was "enduring an historic weather event".',
    url: "http://www.bbc.co.uk/news/world-us-canada-58418627",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/17789/production/_120373169_1_nyc_flooding_ugc.jpg",
    publishedAt: "2021-09-02T20:07:27.3221611Z",
    content:
      'A state of emergency has been declared in New York City after it was hit by record rainfall and flash flooding as a result of Tropical Storm Ida.\r\nMayor Bill de Blasio said the city was "enduring an … [+126 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "GM to idle eight North American plants amid chip shortage",
    description:
      "Output will halt at eight plants in the US, Mexico and Canada amid a global shortage of semi-conductors.",
    url: "http://www.bbc.co.uk/news/business-58416930",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/91A5/production/_120358273_gettyimages-1187783683.jpg",
    publishedAt: "2021-09-02T17:22:23.8534984Z",
    content:
      "image captionGM owns popular car brands such as Chevrolet\r\nGeneral Motors will halt output at most of its North American plants in September as the semi-conductor chip shortage continues to hit carma… [+1455 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "US states to accept driver's licence on iPhones",
    description:
      "Apple's new ID system for its Wallet will be rolled out at airports to start.",
    url: "http://www.bbc.co.uk/news/technology-58422469",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/9836/production/_120366983_apple_drivers.png",
    publishedAt: "2021-09-02T14:37:25.5109794Z",
    content:
      "Eight US states will accept driver's licences and other state IDs stored on an iPhone, Apple has announced. \r\nThe feature, first announced at a presentation in June, lets iPhone users store IDs in th… [+2305 chars]",
  },
];

export default articles;
