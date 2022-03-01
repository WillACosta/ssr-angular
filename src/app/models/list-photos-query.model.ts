export class ListPhotosQuery {
  constructor(
    public page: number = 1,
    public per_page: number = 10,
    public order_by?: 'latest' | 'oldest' | 'popular'
  ) {}

  public get toQueryParams(): string {
    return `&page=${this.page}&per_page=${this.per_page}&order_by=${this.order_by}`;
  }
}