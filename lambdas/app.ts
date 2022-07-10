import * as AWS from 'aws-sdk';
export const handler = async (event: any = {},context: any = {}): Promise<any> => {
	let fakeResponse = {"items":["uno","dos","tres"] };

  try {
      return { statusCode: 200, body: JSON.stringify(fakeResponse) };
  } catch (dbError) {
    return { statusCode: 500, body: JSON.stringify(dbError) };
  }
};
