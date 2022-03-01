export class SearchPhotosQuery {
  constructor(
    public query: string,
    public page: number = 1,
    public per_page: number = 10,
    public content_filter: 'low' | 'high' = 'low',
    public color?:
      | 'black_and_white'
      | 'black'
      | 'white'
      | 'yellow'
      | 'orange'
      | 'red'
      | 'purple'
      | 'magenta'
      | 'green'
      | 'teal'
      | 'blue',
    public orientation?: 'landscape' | 'portrait' | 'squarish'
  ) {}
}
