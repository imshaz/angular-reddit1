export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes = ++this.votes;
  }
  voteDown(): void {
    this.votes = --this.votes;
  }

  domain(): string | null {
    try {
      const domainAndPath = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (error) {
      console.log('something went wrong (undefined)', error);
      return null;
    }
  }
}
