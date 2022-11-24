import "./App.css";
import NavBar from "./components/NavBar";
import React, {useState} from "react";
import ArticleList from "./components/ArticleList";
import useGetIds from "./common/getIds";
import useGetStories from "./common/getStories";

function App() {

    // const [more, setMore] = useState(true);
    //
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(13);
    //
    // // const[currentIds, setCurrentIds] = useState([]);
    //
    // //TODO set state of current ids here ?
    // /*
    // make 1 axios call and continually slice array?
    // or make multiple axios calls?
    // dashboard that defines current items?
    // pager to go above and
    // parent component pager that defines ids that getstories should call on and passes them down as props
    //  */
    //
    // if (end > 501) {
    //     setEnd(501-start);
    //     setMore(false);
    // }
    //
    // const params = "topstories";
    // const {ids, idLoading} = useGetIds(params);
    // console.log(ids);
    // let currIds = ids.slice(start, end);
    // // setCurrentIds(currIds);
    // console.log(currIds);
    // console.log(start);
    // console.log(end);
    // // console.log(typeof(currentIds));
    // // // const currentIds = ids.slice(start, end);
    // // console.log(currentIds);
    //
    // //
    // //
    // const {stories, loading} = useGetStories(currIds);
    //
    // // let me = stories[0];
    // // console.log(me);
    // // // console.log(stories[0].title);
    // console.log(stories);

    // Get the full list of ids from getids
    // slice the list
    // call getstories on the slicedlist

    //TODO  return objects or arrays?
    // const {ids, idLoading} = useGetIds(props.urlParams);
    // const currentIds = ids.slice(start, end);

    //
    // let myStories = stories;
    // const getHostnameFromRegex = (url) => {
    //     // run against regex
    //     const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    //     // extract hostname (will be null if no match is found)
    //     return matches && matches[1];
    // }

  return (
    <div className="App">
      <header>
      </header>
        <NavBar/>
        {/*<ArticleList idLoading={idLoading} more={more} start={start} loading={loading} stories={stories} end={end} ids={currIds}/>*/}
        <ArticleList />
        {/*<ArticleList loading={loading} idLoading={idLoading} stories={myStories} more={more} start={start} end={end}/>*/}
    </div>
  );
}

export default App;
