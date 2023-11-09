import "../sass/Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header>
        <h2>New</h2>
        <dl>
          <div>
            <dt>Hydrogen VS Electric Cars</dt>
            <dd>Will hydrogen-fueled cars ever catch up to EVs?</dd>
          </div>

          <div>
            <dt>The Downsides of AI Artistry</dt>
            <dd>
              What are the possible adverse effects of on-demand AI image
              generation?
            </dd>
          </div>

          <div>
            <dt>Is VC Funding Drying Up?</dt>
            <dd>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </dd>
          </div>
        </dl>
      </header>
    </aside>
  );
};

export default Sidebar;
