import { bucketChallengApi } from "../../config/api/bucketChallengeApi";
import { BucketsAPIReponse } from "../../interfaces/buckets-api-reponse";
import { BucketsData } from "../../interfaces/buckets-data.interface";


export const postBucketsData = async (data: BucketsData): Promise<BucketsAPIReponse> => {
  try {
    
    const response = await bucketChallengApi.post('bucket-challenge', data);
    return response.data;

  } catch (error) {

    console.error(error);
    throw new Error('Error sending data');

  }
};