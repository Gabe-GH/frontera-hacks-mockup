export default function DesktopNavbar() {
  return (
    <>
      <div className="navbar-start text-lg uppercase space-x-12">
        <a className="navbar-item ml-32">about</a>
        <a className="navbar-item">schedule</a>
        <a className="navbar-item">challenges</a>
        <a className="navbar-item">prizes</a>
        <a className="navbar-item">faq</a>
      </div>
      <div className="navbar-end mr-32">
        <button type="button" className="btn btn-outline">
          Log In
        </button>
      </div>
    </>
  );
}
