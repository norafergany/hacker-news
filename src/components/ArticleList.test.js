import renderer from 'react-test-renderer';
import ArticleList from "./ArticleList";
import { render, cleanup, waitForElement, fireEvent, act } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import fetchData from "./ArticleList";
const axios = require('axios');
jest.mock('axios');


// afterEach(cleanup);
//
// let mockResp = [
//     {
//         "by": "jmillikin",
//         "descendants": 4,
//         "id": 33705209,
//         "kids": [
//             33705968,
//             33705760
//         ],
//         "score": 41,
//         "time": 1669121603,
//         "title": "Please restore our registers when you’re done with them",
//         "type": "story",
//         "url": "https://randomascii.wordpress.com/2022/11/21/please-restore-our-registers-when-youre-done-with-them/"
//     },
//     {
//         "by": "alymurray",
//         "id": 33704804,
//         "score": 1,
//         "time": 1669118443,
//         "title": "UPchieve (YC W21 EdTech Nonprofit) Is Hiring Engineers and a Head of Engineering",
//         "type": "job",
//         "url": "https://upchieve.welcomekit.co/"
//     },
//     {
//         "by": "zegl",
//         "descendants": 167,
//         "id": 33704297,
//         "kids": [
//             33705326,
//             33705026,
//             33706349,
//             33706352,
//             33706722,
//             33706449,
//             33704649,
//             33706813,
//             33705068,
//             33706663,
//             33704931,
//             33704575,
//             33706586,
//             33704686,
//             33706665,
//             33706654,
//             33706709,
//             33704656,
//             33705879,
//             33706658,
//             33704518,
//             33704542,
//             33705172,
//             33705134,
//             33704700,
//             33704729,
//             33705825,
//             33706398,
//             33706279,
//             33705818,
//             33705851,
//             33705910,
//             33705119,
//             33705384,
//             33705093,
//             33705781,
//             33704504,
//             33704798,
//             33706692,
//             33704655,
//             33705812,
//             33705127,
//             33705410,
//             33704924,
//             33704736,
//             33705179,
//             33704638,
//             33704658,
//             33704521,
//             33706329,
//             33704568
//         ],
//         "score": 270,
//         "time": 1669113810,
//         "title": "Extremely Linear Git History",
//         "type": "story",
//         "url": "https://westling.dev/b/extremely-linear-git"
//     },
//     {
//         "by": "alixanderwang",
//         "descendants": 55,
//         "id": 33704254,
//         "kids": [
//             33704381,
//             33704875,
//             33706090,
//             33705124,
//             33705778,
//             33706576,
//             33705371,
//             33705449,
//             33705039,
//             33706552,
//             33705122,
//             33705291,
//             33706138,
//             33705498,
//             33705190,
//             33705285,
//             33704803,
//             33704708,
//             33705845,
//             33705395,
//             33704900
//         ],
//         "score": 244,
//         "time": 1669113431,
//         "title": "D2 is a modern diagram scripting language that turns text to diagrams",
//         "type": "story",
//         "url": "https://github.com/terrastruct/d2"
//     },
//     {
//         "by": "thunderbong",
//         "descendants": 64,
//         "id": 33704801,
//         "kids": [
//             33706167,
//             33706879,
//             33705589,
//             33705251,
//             33706243,
//             33705625,
//             33706511,
//             33705529,
//             33705676,
//             33705438,
//             33706276,
//             33705227,
//             33705735,
//             33705489,
//             33705354,
//             33705720,
//             33705429,
//             33706209
//         ],
//         "score": 124,
//         "time": 1669118424,
//         "title": "Self Hosting a Google Maps Alternative with OpenStreetMap",
//         "type": "story",
//         "url": "https://wcedmisten.fyi/post/self-hosting-osm/"
//     },
//     {
//         "by": "mariuz",
//         "descendants": 30,
//         "id": 33704054,
//         "kids": [
//             33706195,
//             33705906,
//             33705952,
//             33705850,
//             33706465,
//             33705815,
//             33705881,
//             33706714
//         ],
//         "score": 82,
//         "time": 1669111526,
//         "title": "Considering C99 for Curl",
//         "type": "story",
//         "url": "https://daniel.haxx.se/blog/2022/11/17/considering-c99-for-curl/"
//     },
//     {
//         "by": "jodosha",
//         "descendants": 13,
//         "id": 33705249,
//         "kids": [
//             33706111,
//             33706521,
//             33705723,
//             33706553,
//             33705923,
//             33706812
//         ],
//         "score": 87,
//         "time": 1669121849,
//         "title": "Hanami 2.0",
//         "type": "story",
//         "url": "https://hanamirb.org/blog/2022/11/22/announcing-hanami-200/"
//     },
//     {
//         "by": "tuzongyu",
//         "descendants": 1,
//         "id": 33706750,
//         "kids": [
//             33706752
//         ],
//         "score": 14,
//         "time": 1669130657,
//         "title": "Human-Level Play in Diplomacy Combining Language Models with Strategic Reasoning",
//         "type": "story",
//         "url": "https://ai.facebook.com/blog/cicero-ai-negotiates-persuades-and-cooperates-with-people/"
//     },
//     {
//         "by": "gmays",
//         "descendants": 9,
//         "id": 33680493,
//         "kids": [
//             33706515,
//             33706856,
//             33706523,
//             33706319,
//             33706525,
//             33706204
//         ],
//         "score": 47,
//         "time": 1668948407,
//         "title": "Pristine meteorite found within hours of hitting Earth",
//         "type": "story",
//         "url": "https://astronomy.com/news/2022/11/pristine-meteorite-found-within-hours-of-hitting-earth"
//     },
//     {
//         "by": "niutech",
//         "descendants": 10,
//         "id": 33705087,
//         "kids": [
//             33706867,
//             33705521,
//             33705621,
//             33705576
//         ],
//         "score": 54,
//         "time": 1669120654,
//         "title": "Show HN: JXL.js – JPEG XL Decoder in JavaScript Using WebAssembly in Web Worker",
//         "type": "story",
//         "url": "https://github.com/niutech/jxl.js"
//     },
//     {
//         "by": "graderjs",
//         "descendants": 5,
//         "id": 33706197,
//         "kids": [
//             33706408
//         ],
//         "score": 17,
//         "time": 1669127649,
//         "title": "Cobalt – a stripped down Chromium for apps, Linux and embedded systems",
//         "type": "story",
//         "url": "https://cobalt.dev/overview.html"
//     },
//     {
//         "by": "kitebive",
//         "descendants": 54,
//         "id": 33703979,
//         "kids": [
//             33705928,
//             33705513,
//             33706716,
//             33706599,
//             33705428,
//             33706039,
//             33706834,
//             33706141,
//             33706018,
//             33704915,
//             33706529,
//             33705995,
//             33704770,
//             33704886
//         ],
//         "score": 126,
//         "time": 1669110878,
//         "title": "Mycroft – open source voice assistant",
//         "type": "story",
//         "url": "https://mycroft.ai/"
//     }
// ];
//
//
// it('component renders', async() => {
//
//     await fetchData(async () => {
//         const component = renderer.create(<ArticleList urlParams="topstories"/>);
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//
//
//     });
//
// })


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleList urlParams="topstories" />, div);
});

// TODO test asynchronous code
it('matches the snapshot', () => {
    const component = renderer.create(<ArticleList urlParams="topstories"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

const props = {
    urlParams: "topstories"
}

afterEach(cleanup);
let stories = [
    {
        "by": "jmillikin",
        "descendants": 4,
        "id": 33705209,
        "kids": [
            33705968,
            33705760
        ],
        "score": 41,
        "time": 1669121603,
        "title": "Please restore our registers when you’re done with them",
        "type": "story",
        "url": "https://randomascii.wordpress.com/2022/11/21/please-restore-our-registers-when-youre-done-with-them/"
    },
    {
        "by": "alymurray",
        "id": 33704804,
        "score": 1,
        "time": 1669118443,
        "title": "UPchieve (YC W21 EdTech Nonprofit) Is Hiring Engineers and a Head of Engineering",
        "type": "job",
        "url": "https://upchieve.welcomekit.co/"
    },
    {
        "by": "zegl",
        "descendants": 167,
        "id": 33704297,
        "kids": [
            33705326,
            33705026,
            33706349,
            33706352,
            33706722,
            33706449,
            33704649,
            33706813,
            33705068,
            33706663,
            33704931,
            33704575,
            33706586,
            33704686,
            33706665,
            33706654,
            33706709,
            33704656,
            33705879,
            33706658,
            33704518,
            33704542,
            33705172,
            33705134,
            33704700,
            33704729,
            33705825,
            33706398,
            33706279,
            33705818,
            33705851,
            33705910,
            33705119,
            33705384,
            33705093,
            33705781,
            33704504,
            33704798,
            33706692,
            33704655,
            33705812,
            33705127,
            33705410,
            33704924,
            33704736,
            33705179,
            33704638,
            33704658,
            33704521,
            33706329,
            33704568
        ],
        "score": 270,
        "time": 1669113810,
        "title": "Extremely Linear Git History",
        "type": "story",
        "url": "https://westling.dev/b/extremely-linear-git"
    },
    {
        "by": "alixanderwang",
        "descendants": 55,
        "id": 33704254,
        "kids": [
            33704381,
            33704875,
            33706090,
            33705124,
            33705778,
            33706576,
            33705371,
            33705449,
            33705039,
            33706552,
            33705122,
            33705291,
            33706138,
            33705498,
            33705190,
            33705285,
            33704803,
            33704708,
            33705845,
            33705395,
            33704900
        ],
        "score": 244,
        "time": 1669113431,
        "title": "D2 is a modern diagram scripting language that turns text to diagrams",
        "type": "story",
        "url": "https://github.com/terrastruct/d2"
    },
    {
        "by": "thunderbong",
        "descendants": 64,
        "id": 33704801,
        "kids": [
            33706167,
            33706879,
            33705589,
            33705251,
            33706243,
            33705625,
            33706511,
            33705529,
            33705676,
            33705438,
            33706276,
            33705227,
            33705735,
            33705489,
            33705354,
            33705720,
            33705429,
            33706209
        ],
        "score": 124,
        "time": 1669118424,
        "title": "Self Hosting a Google Maps Alternative with OpenStreetMap",
        "type": "story",
        "url": "https://wcedmisten.fyi/post/self-hosting-osm/"
    },
    {
        "by": "mariuz",
        "descendants": 30,
        "id": 33704054,
        "kids": [
            33706195,
            33705906,
            33705952,
            33705850,
            33706465,
            33705815,
            33705881,
            33706714
        ],
        "score": 82,
        "time": 1669111526,
        "title": "Considering C99 for Curl",
        "type": "story",
        "url": "https://daniel.haxx.se/blog/2022/11/17/considering-c99-for-curl/"
    },
    {
        "by": "jodosha",
        "descendants": 13,
        "id": 33705249,
        "kids": [
            33706111,
            33706521,
            33705723,
            33706553,
            33705923,
            33706812
        ],
        "score": 87,
        "time": 1669121849,
        "title": "Hanami 2.0",
        "type": "story",
        "url": "https://hanamirb.org/blog/2022/11/22/announcing-hanami-200/"
    },
    {
        "by": "tuzongyu",
        "descendants": 1,
        "id": 33706750,
        "kids": [
            33706752
        ],
        "score": 14,
        "time": 1669130657,
        "title": "Human-Level Play in Diplomacy Combining Language Models with Strategic Reasoning",
        "type": "story",
        "url": "https://ai.facebook.com/blog/cicero-ai-negotiates-persuades-and-cooperates-with-people/"
    },
    {
        "by": "gmays",
        "descendants": 9,
        "id": 33680493,
        "kids": [
            33706515,
            33706856,
            33706523,
            33706319,
            33706525,
            33706204
        ],
        "score": 47,
        "time": 1668948407,
        "title": "Pristine meteorite found within hours of hitting Earth",
        "type": "story",
        "url": "https://astronomy.com/news/2022/11/pristine-meteorite-found-within-hours-of-hitting-earth"
    },
    {
        "by": "niutech",
        "descendants": 10,
        "id": 33705087,
        "kids": [
            33706867,
            33705521,
            33705621,
            33705576
        ],
        "score": 54,
        "time": 1669120654,
        "title": "Show HN: JXL.js – JPEG XL Decoder in JavaScript Using WebAssembly in Web Worker",
        "type": "story",
        "url": "https://github.com/niutech/jxl.js"
    },
    {
        "by": "graderjs",
        "descendants": 5,
        "id": 33706197,
        "kids": [
            33706408
        ],
        "score": 17,
        "time": 1669127649,
        "title": "Cobalt – a stripped down Chromium for apps, Linux and embedded systems",
        "type": "story",
        "url": "https://cobalt.dev/overview.html"
    },
    {
        "by": "kitebive",
        "descendants": 54,
        "id": 33703979,
        "kids": [
            33705928,
            33705513,
            33706716,
            33706599,
            33705428,
            33706039,
            33706834,
            33706141,
            33706018,
            33704915,
            33706529,
            33705995,
            33704770,
            33704886
        ],
        "score": 126,
        "time": 1669110878,
        "title": "Mycroft – open source voice assistant",
        "type": "story",
        "url": "https://mycroft.ai/"
    }
];
let mockResp = {
    stories: [
    {
        "by": "jmillikin",
        "descendants": 4,
        "id": 33705209,
        "kids": [
            33705968,
            33705760
        ],
        "score": 41,
        "time": 1669121603,
        "title": "Please restore our registers when you’re done with them",
        "type": "story",
        "url": "https://randomascii.wordpress.com/2022/11/21/please-restore-our-registers-when-youre-done-with-them/"
    },
    {
        "by": "alymurray",
        "id": 33704804,
        "score": 1,
        "time": 1669118443,
        "title": "UPchieve (YC W21 EdTech Nonprofit) Is Hiring Engineers and a Head of Engineering",
        "type": "job",
        "url": "https://upchieve.welcomekit.co/"
    },
    {
        "by": "zegl",
        "descendants": 167,
        "id": 33704297,
        "kids": [
            33705326,
            33705026,
            33706349,
            33706352,
            33706722,
            33706449,
            33704649,
            33706813,
            33705068,
            33706663,
            33704931,
            33704575,
            33706586,
            33704686,
            33706665,
            33706654,
            33706709,
            33704656,
            33705879,
            33706658,
            33704518,
            33704542,
            33705172,
            33705134,
            33704700,
            33704729,
            33705825,
            33706398,
            33706279,
            33705818,
            33705851,
            33705910,
            33705119,
            33705384,
            33705093,
            33705781,
            33704504,
            33704798,
            33706692,
            33704655,
            33705812,
            33705127,
            33705410,
            33704924,
            33704736,
            33705179,
            33704638,
            33704658,
            33704521,
            33706329,
            33704568
        ],
        "score": 270,
        "time": 1669113810,
        "title": "Extremely Linear Git History",
        "type": "story",
        "url": "https://westling.dev/b/extremely-linear-git"
    },
    {
        "by": "alixanderwang",
        "descendants": 55,
        "id": 33704254,
        "kids": [
            33704381,
            33704875,
            33706090,
            33705124,
            33705778,
            33706576,
            33705371,
            33705449,
            33705039,
            33706552,
            33705122,
            33705291,
            33706138,
            33705498,
            33705190,
            33705285,
            33704803,
            33704708,
            33705845,
            33705395,
            33704900
        ],
        "score": 244,
        "time": 1669113431,
        "title": "D2 is a modern diagram scripting language that turns text to diagrams",
        "type": "story",
        "url": "https://github.com/terrastruct/d2"
    },
    {
        "by": "thunderbong",
        "descendants": 64,
        "id": 33704801,
        "kids": [
            33706167,
            33706879,
            33705589,
            33705251,
            33706243,
            33705625,
            33706511,
            33705529,
            33705676,
            33705438,
            33706276,
            33705227,
            33705735,
            33705489,
            33705354,
            33705720,
            33705429,
            33706209
        ],
        "score": 124,
        "time": 1669118424,
        "title": "Self Hosting a Google Maps Alternative with OpenStreetMap",
        "type": "story",
        "url": "https://wcedmisten.fyi/post/self-hosting-osm/"
    },
    {
        "by": "mariuz",
        "descendants": 30,
        "id": 33704054,
        "kids": [
            33706195,
            33705906,
            33705952,
            33705850,
            33706465,
            33705815,
            33705881,
            33706714
        ],
        "score": 82,
        "time": 1669111526,
        "title": "Considering C99 for Curl",
        "type": "story",
        "url": "https://daniel.haxx.se/blog/2022/11/17/considering-c99-for-curl/"
    },
    {
        "by": "jodosha",
        "descendants": 13,
        "id": 33705249,
        "kids": [
            33706111,
            33706521,
            33705723,
            33706553,
            33705923,
            33706812
        ],
        "score": 87,
        "time": 1669121849,
        "title": "Hanami 2.0",
        "type": "story",
        "url": "https://hanamirb.org/blog/2022/11/22/announcing-hanami-200/"
    },
    {
        "by": "tuzongyu",
        "descendants": 1,
        "id": 33706750,
        "kids": [
            33706752
        ],
        "score": 14,
        "time": 1669130657,
        "title": "Human-Level Play in Diplomacy Combining Language Models with Strategic Reasoning",
        "type": "story",
        "url": "https://ai.facebook.com/blog/cicero-ai-negotiates-persuades-and-cooperates-with-people/"
    },
    {
        "by": "gmays",
        "descendants": 9,
        "id": 33680493,
        "kids": [
            33706515,
            33706856,
            33706523,
            33706319,
            33706525,
            33706204
        ],
        "score": 47,
        "time": 1668948407,
        "title": "Pristine meteorite found within hours of hitting Earth",
        "type": "story",
        "url": "https://astronomy.com/news/2022/11/pristine-meteorite-found-within-hours-of-hitting-earth"
    },
    {
        "by": "niutech",
        "descendants": 10,
        "id": 33705087,
        "kids": [
            33706867,
            33705521,
            33705621,
            33705576
        ],
        "score": 54,
        "time": 1669120654,
        "title": "Show HN: JXL.js – JPEG XL Decoder in JavaScript Using WebAssembly in Web Worker",
        "type": "story",
        "url": "https://github.com/niutech/jxl.js"
    },
    {
        "by": "graderjs",
        "descendants": 5,
        "id": 33706197,
        "kids": [
            33706408
        ],
        "score": 17,
        "time": 1669127649,
        "title": "Cobalt – a stripped down Chromium for apps, Linux and embedded systems",
        "type": "story",
        "url": "https://cobalt.dev/overview.html"
    },
    {
        "by": "kitebive",
        "descendants": 54,
        "id": 33703979,
        "kids": [
            33705928,
            33705513,
            33706716,
            33706599,
            33705428,
            33706039,
            33706834,
            33706141,
            33706018,
            33704915,
            33706529,
            33705995,
            33704770,
            33704886
        ],
        "score": 126,
        "time": 1669110878,
        "title": "Mycroft – open source voice assistant",
        "type": "story",
        "url": "https://mycroft.ai/"
    }
],
    message: "",
    status: 200,
};

jest.mock('axios');
test("Renders component", async () => {
    axios.get = jest.fn();

    axios.get.mockResolvedValueOnce(mockResp);

    const mockedData = await ArticleList((props) => {
        props.urlParams = "topstories"
    });
    expect(mockedData).toEqual(stories);
    // const { getByTestId } = render(<ArticleList />);
    // expect(getByTestId("loading")).toHaveTextContent("Loading");
    // const currentPostSpan = await waitForElement(() => getByTestId("article-list"));
    // expect(currentPostSpan).toHaveTextContent("Article List");
    //
    // expect(fetchData).toHaveBeenCalledTimes(1);
    // expect(fetchData).toHaveBeenCalledWith("topstories");
});