export interface BucketsAPIReponse {
    ok: boolean;
    isSolutionPossible: boolean;
    results:           Result[];
}

export interface Result {
    bucketX:     number;
    bucketY:     number;
    explanation: string;
}
