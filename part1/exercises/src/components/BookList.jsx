export default function BookList() {
   let pageTitle = "Books of the Month";
   let book1 = "https://m.media-amazon.com/images/I/61vBJ41AO5L._SL1200_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71tQ71QaNML._SL1500_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81i7Yxg-X5L._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="No Longer Human" />
         <img src={book2} alt="If Cats Disappeared From The World" />
         <img src={book3} alt="The Town With No Mirrors" />
      </div>      
   );
}