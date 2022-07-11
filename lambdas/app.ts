import {v4 as uuid} from "uuid";

import hola from "/opt/nodejs/accounts"
import { something } from "/opt/nodejs/accounts";
export const handler = async (event: any = {}, context: any = {}): Promise<any> => {
    let fakeResponse = {
        "items": ["uno", "dos", "tres"], "uuid": uuid(),
        "date":"bla"
    }

    hola();
    something()
    try {
        return {statusCode: 200, body: JSON.stringify(fakeResponse)};
    } catch (dbError) {
        return {statusCode: 500, body: JSON.stringify(dbError)};
    }
};
