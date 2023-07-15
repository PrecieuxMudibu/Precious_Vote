/* eslint-disable no-console */
import axios from "axios";
// import { route_for_close_round, route_for_get_candidates_for_the_round, route_for_get_electors, route_for_get_posts_for_an_election, route_for_get_rounds_for_a_post, route_for_send_email, route_for_start_round, route_for_vote_candidate, } from "../public/routes";
import { route_for_get_an_election,route_for_close_round, route_for_get_candidates_for_the_round, route_for_get_electors, route_for_get_posts_for_an_election, route_for_get_rounds_for_a_post, route_for_send_email, route_for_start_round, route_for_vote_candidate, route_for_get_a_token, } from "../routes";

export async function get_posts_of_election(id) {
    return await axios
        .get(`${route_for_get_posts_for_an_election}/${id}`)
        .then((response) => response.data.posts)
        .catch((error) => {
            console.log(error);
        });
}



export async function get_an_election(id, token) {
    try{
        const response = await axios.get(`${route_for_get_an_election}/${id}`,
        {
            headers: { Authorization: token },
        })
        return response
    }catch(error) {
        console.log(error)
    }
}

export async function get_rounds_for_a_post(id) {
    return await axios
        .get(`${route_for_get_rounds_for_a_post}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}

export async function start_a_round(id, token) {
        try{
            const response = await axios({
                method: 'put',
                url: `${route_for_start_round}/${id}`,
                headers: { Authorization: token },
            });
            
            return response.data
        }catch(error) {
            console.log(error)
        }
}

export async function close_a_round(id, token) {
    console.log("BEFIN CLOSE")

    try{
        const response = await axios({
            method: 'put',
            url: `${route_for_close_round}/${id}`,
            headers: { Authorization: token },
        });
        return response.data
    }catch(error) {
        console.log(error)
    }
    console.log("END CLOSE")

}

export async function vote_candidate(data) {
    return await axios
        .put(route_for_vote_candidate, data)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}

export async function get_electors(election_id) {
    return await axios
        .get(`${route_for_get_electors}/${election_id}`)
        .then((response) => response.data.electors)
        .catch((error) => {
            console.log(error);
        });
}

export async function send_email(data) {
    return await axios
        .post(route_for_send_email, data)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
}

export async function get_candidates_for_the_round(round_id) {
    return await axios
        .get(`${route_for_get_candidates_for_the_round}/${round_id}`)
        .then((response) => response.data.candidates)
        .catch((error) => {
            console.log(error);
        });
}

export async function get_a_token() {
    return  axios
        .get(`${route_for_get_a_token}`)
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        });

   
     

}

// route_for_get_a_token