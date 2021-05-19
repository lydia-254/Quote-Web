// export class Quote {
//     quote!: string;
//     author!: string;
//     name!: string;
// }
export class Quote {
    showDescription: boolean;
    constructor(public quote: string,public author: string,public name: string,public upvote: number,public downvote: number){
      this.showDescription=true;
      this.upvote=0
      this.downvote=0
    //   this.description=false;
    }
  }