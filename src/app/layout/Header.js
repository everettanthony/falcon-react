import PrimaryNav from "./Navigation/PrimaryNav";

function Header() {
  return (
    <header className="hdr">
      <div class="hdr-row hdr-info">
        Fort Worth: <a href="tel:817-870-0330">817-870-0330</a> 
        Dallas: <a href="tel:214-420-0030">214-420-0030</a>
      </div>
      <div class="hdr-row hdr-main">
        <PrimaryNav />
      </div>
    </header>
  );
}

export default Header;