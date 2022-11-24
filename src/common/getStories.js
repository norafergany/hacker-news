// import axios from "axios";
// import {React, useEffect, useState} from "react";
// const defaultValues = {};
//
// const useGetStories = (idList) => {
//
//     const [stories, setStories] = useState([]);
//     const [loading, setLoading] = useState(true);
//
//
//     const baseItemURL = "https://hacker-news.firebaseio.com/v0/item/";
// // only need to call id endpoint once, then keep calling story id
//
//
//     useEffect(() => {
//
//
//         const fetchData = async () => {
//             try {
//                 // const fullIdList = await axios.get(baseStoriesURL + urlParams + '.json');
//                 // const idSet = idList.slice(start, end);
//                 // console.log(idSet);
//                 let storyList = [];
//                 console.log(idList);
//                 // const urls = idList.map((id)=> axios.get(baseItemURL + id + '.json'));
//                 await Promise.all(idList.map((id) => axios.get(baseItemURL + id + '.json')))
//                     .then((res) => setStories(res.map((res) => res.data)));
//
//                 // await Promise.all(idList.map((id) => axios.get(baseItemURL + id + '.json')
//                 //     .then((story) => storyList.push(story.data))))
//                 //     .then(story => setStories(story))
//                 //
//                 // ;
//
//                 // setStories(storyList);
//                 console.log(storyList);
//
//             } catch (error) {
//                 console.error(error);
//             }
//             setLoading(false);
//         }
//
//         fetchData()
//
//     }, [idList]);
//
//     return {
//         stories,
//         loading,
//
//     };
// };
//
// export default useGetStories;