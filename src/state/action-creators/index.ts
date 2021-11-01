import axios from "axios";
import { ActionTypes } from "../types";
import { Action } from "../actions";
import { Dispatch } from "react";

export const searchRepositories = (term: string) => {
    return async(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES,
        });

        try{
            const {data} = await axios.get("https://registry.npmjs.org/-/v1/search", {
                params: {
                    text: term,
                }
            });
            const names = data.objects.map((item: any)=>{
                return item.package.name;
            })
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            }) 
        }catch(err){
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: "err",
            });
        }
    }
}