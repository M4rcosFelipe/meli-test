export class SearchService {
  static async search(query: string, offset: number = 0) {
    const response = await fetch(
      `http://localhost:3000/api/items?q=${query}&offset=${offset}`
    );

    const result = await response.json();

    return result;
  }
}
