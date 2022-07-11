import {v4 as uuid} from "uuid";
import {format, parseISO} from 'date-fns'
import * as AWS from "/opt/nodejs/aws-sdk"
export const handler = async (event: any = {}, context: any = {}): Promise<any> => {
    let fakeResponse = {
        "items": ["uno", "dos", "tres"], "uuid": uuid(),
        "date": parseISO(new Date().toISOString())
    }

    try {
        return {statusCode: 200, body: JSON.stringify(fakeResponse)};
    } catch (dbError) {
        return {statusCode: 500, body: JSON.stringify(dbError)};
    }
};
