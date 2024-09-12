import { EdgeKV } from "./edgekv.js";

const PMUSER_103_HINTS='PMUSER_103_HINTS';

export async function onClientRequest(request){
    let hints = [];
    const kv = new EdgeKV();
    request.setVariable(PMUSER_103_HINTS,hints.join(',')); //Check variable size limits https://techdocs.akamai.com/edgeworkers/docs/request-object#setvariable
}