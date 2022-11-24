import ArticleList from "./ArticleList";
import {render, screen, waitFor} from "@testing-library/react";
import NavBar from "./NavBar";
import React from "react";
import axios from 'axios';

jest.mock('axios');
test('homepage shows list of articles',async () => {
    const idList = [
        33732969,
        33735101,
        33734360,
        33734846,
        33735105,
        33732071,
        33731342,
        33716928,
        33731626,
        33732913,
        33735252,
        33731739,
        33729345
    ];
    // const resp = {data: idList};
    // axios.get.mockResolvedValue(resp);
    // return ArticleList.then(data => expect(data).toEqual(idList));
    // const {getByRole} = render(<ArticleList/>);
    // // const listElement = screen.getByRole('ol');
    // await waitFor(() => expect(getByRole('ol')).toBeInTheDocument());
    // // expect(listElement).toHaveLength(13);

    const { findByRole } = render(<ArticleList ids={idList}/>)
    // expect(getByText('Loading...')).toBeInTheDocument()
    expect(await (findByRole('list'))).toBeInTheDocument()
})


