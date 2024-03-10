export default function HobbyLinks() {
let hobbyLinks = ["https://independentbookreview.com/2023/05/26/11-benefits-of-reading-as-a-hobby/", "https://www.npr.org/2022/11/14/1123281060/roller-skating-love"];

return (
    <div>
        <h3>My Hobbies</h3>
        <a href = {hobbyLinks[0]}>Reading</a>
        <hr></hr>
        <a href = {hobbyLinks[1]}>Roller Skating</a>
    </div>
);
}