import { v4 as uuidv4 } from 'uuid';

export class Quote{
    constructor(text, author, imageUrl, date, rating, bookmark) {
        this.id = uuidv4();
        this.text = text;
        this.author = author;
        this.imageUrl = imageUrl;
        this.date = date;
        this.rating = rating;
        this.bookmark = bookmark;
    }
}