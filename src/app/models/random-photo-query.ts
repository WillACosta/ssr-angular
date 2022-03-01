export class RandomPhotoQuery {
  constructor(
    public query: string,
    public content_filter: 'low' | 'high' = 'low',
    public username?: string,
    public count?: number,
    public orientation?: 'landscape' | 'portrait' | 'squarish'
  ) {}
}
