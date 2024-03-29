import PrimaryNav from "./Navigation/PrimaryNav";

function Header() {
  return (
    <header className="hdr">
      <div className="hdr-row hdr-info">
        Call Us: <a href="tel:817-870-0330">817-870-0330</a> 
      </div>
      <div className="hdr-row hdr-main">
        <PrimaryNav />
      </div>
    </header>
  );
}

export default Header;