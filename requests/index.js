/* eslint-disable no-console */
import axios from "axios";
import { route_for_get_an_election, route_for_get_posts_for_an_election, route_for_get_rounds_for_a_post, route_for_start_round, route_for_vote_candidate, } from "../public/routes";

export async function get_posts_of_election(id) {
    return await axios
        .get(`${route_for_get_posts_for_an_election}/${id}`)
        .then((response) => response.data.posts)
        .catch((error) => {
            console.log(error);
        });
}

export async function get_an_election(id) {
    return await axios
        .get(`${route_for_get_an_election}/${id}`)
        .then((response) => response.data.election)
        .catch((error) => {
            console.log(error);
        });
}

export async function get_rounds_for_a_post(id) {
    return await axios
        .get(`${route_for_get_rounds_for_a_post}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}

export async function start_a_round(id) {
    return await axios
        .put(`${route_for_start_round}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}

export async function vote_candidate(data) {
    return await axios
        .put(route_for_vote_candidate, data)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}