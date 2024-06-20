export interface BucketsAPIReponse {
    isSolutionPosible: boolean;
    results:           Result[];
}

export interface Result {
    bucketX:     number;
    bucketY:     number;
    explanation: string;
}
