import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useErrorHandler} from 'react-error-boundary'
import Article from "./Article";
import {Button, Col, Row, Stack} from "react-bootstrap";


export const ArticleListContainer = () => {

    const [ids, setIds] = useState();
    const [currentIds, setCurrentIds] = useState();
    const [storyType, setStoryType] = useState('topstories');
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(13);

    const handleError = useErrorHandler();


    useEffect(() => {
        // const allIds =  getIds('topstories');
        async function getIds(storyType) {
            const baseURL = "https://hacker-news.firebaseio.com/v0/";
            const endpoint = `${baseURL}${storyType}.json`;

            try {
                const {data} = await axios.get(endpoint);
                return data;
            } catch (error) {
                handleError(error);
            }
        }

        getIds(storyType).then(r => {
            setIds(r);
            const currentSlice = r.slice(start, end);
            setCurrentIds(currentSlice);
            setLoading(false);
        }).catch((error) => {
            handleError(error)
        })
        // TODO this didn't work before I added currentIds to the dependency array
    }, [handleError, storyType, currentIds, start, end]);


    const getCurrentIds = () => {
        setStart(start + 13)
        setEnd(end + 13)
        setCurrentIds(ids.slice(start, end));
    }


    return (
        <>
            {!loading &&
                <>
                    <Row>
                        <Col>
                            <div className="my-list">
                                <ol style={{"counterReset": `li ${start}`}}>
                                    <Stack gap={3}>
                                        {currentIds?.map((id) => <Article key={id} id={id}/>)}
                                    </Stack>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                    <Button onClick={getCurrentIds}>Show More</Button>
                </>
            }
        </>
    )

}

export default ArticleListContainer;
