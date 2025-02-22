export class SearchService {
  static async search(query: string, offset: number = 0) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?q=${query}&offset=${offset}`
    );

    const result = await response.json();

    return result;
  }
}
