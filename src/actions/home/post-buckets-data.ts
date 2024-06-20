import { bucketChallengApi } from "../../config/api/bucketChallengeApi";
import { BucketsAPIReponse } from "../../interfaces/buckets-api-reponse";
import { BucketsData } from "../../interfaces/buckets-data.interface";


export const postBucketsData = async (data: BucketsData): Promise<BucketsAPIReponse> => {
  try {
    
    const { data: response } = await bucketChallengApi.post('bucket-challenge', data);
    return response;

  } catch (error) {

    console.log(error);
    throw new Error('Error sending data');

  }
};