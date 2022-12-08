class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newCheckOut) {
    this._isCheckedOut = newCheckOut;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    return this.ratings.reduce((currentSum, rating) => currentSum + rating) / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._director;
  }
}

class CD extends Media {
  constructor(artist, title, song) {
    super(title);
    this._artist = artist;
    this._song = song;
  }

  get artist() {
    return this._artist;
  }

  get song() {
    return this._song;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4,5,5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1,1,5);
console.log(speed.getAverageRating());

const myWay = new CD('Britney', 'My Way', ['Oops I did it again', 'Yey']);
myWay.toggleCheckOutStatus();
console.log(myWay.isCheckedOut);
myWay.addRating(1, 2, 3);
console.log(myWay.getAverageRating());







































