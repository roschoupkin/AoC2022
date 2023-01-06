export type ArrayType<TType> = TType extends Array<infer TExtracted> ? TExtracted : TType;
