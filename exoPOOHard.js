class LibraryItem {
    #available
    constructor(title,year){
        this.title=title;
        this.year=year;
        this.#available=true;
    }
    getAvailable(){
        return this.#available;
    }
    checkOut(){
        this.#available=false;
        return this.#available;
    }
    returnItem(){
        this.#available=true;
        return this.#available;
    }
    describe(){
        console.log('Title: '+this.title+', Year: '+this.year+', Available: '+this.#available);
    }
    static compareYears(item1, item2){
        if (item1.year < item2.year) {
            return `${item1.title} is older than ${item2.title}`;
        } else if (item1.year > item2.year) {
            return `${item1.title} is newer than ${item2.title}`;
        } else {
            return `${item1.title} and ${item2.title} are from the same year`;

}}
}
class Book extends LibraryItem {
    constructor(title,year,author){
        super(title,year);
        this.author=author;
    }
    describe(){
        console.log('Title: '+this.title+', Year: '+this.year+', Author: '+this.author+', Available: '+this.getAvailable());
    }
}
class DVD extends LibraryItem {
    constructor(title,year,duration){
        super(title,year);
        this.duration=duration;
    }
    describe(){
        console.log('Title: '+this.title+', Year: '+this.year+', Duration: '+this.duration+', Available: '+this.getAvailable());
    }
}
book = new Book('The Great Gatsby', 1925, 'F. Scott Fitzgerald');
dvd = new DVD('Inception', 2010, '148 minutes');
book.describe();
dvd.describe();
console.log(LibraryItem.compareYears(book, dvd) );
