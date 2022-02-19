import "./Header.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
</style>;
function Header() {
  return (
    <div className="top-container">
      <div className="title-text">
        <h1>Thamarai Selvan</h1>
        <h2>
          A <span>Web</span> Developer.
        </h2>
      </div>
      <img
        className="ux"
        src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        alt="my"
      ></img>
    </div>
  );
}

export default Header;
