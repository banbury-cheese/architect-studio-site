export default function BlogPost({ params }: { params: { blogId: string[] } }) {
  console.log(params);
  return (
    <main className="page-main">
      <div className="global-head">
        <div className="global-head_layout">
          <div className="head-flex_layout">
            <a href="/" className="head-logo_holder w-inline-block pload">
              <div className="head-logo_height"></div>
              <img
                src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe08f_logo-icon.svg"
                loading="eager"
                alt=""
                className="head-logo"
              ></img>
            </a>
          </div>
          <div className="single-work_page-name pload">
            <div className="page-name_text">Work -&nbsp;</div>
            <div className="page-name_text">SP/ARC_05</div>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="single-info_btn">
          <div className="single-info_btn-holder pload h-effect">
            <div h-item="" className="single-info_btn-text">
              <span className="word">
                <span className="char">
                  i
                </span>
                <span className="char">
                  n
                </span>
                <span className="char" style="display: inline-block;">
                  f
                </span>
                <span className="char" style="display: inline-block;">
                  o
                </span>
              </span>
            </div>
            <div h-item="" className="single-info_btn-text">
              <span className="word" style="display: inline-block;">
                <span
                  className="char"
                  style="display: inline-block; translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0%, 100%);"
                >
                  i
                </span>
                <span
                  className="char"
                  style="display: inline-block; translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0%, 100%);"
                >
                  n
                </span>
                <span
                  className="char"
                  style="display: inline-block; translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0%, 100%);"
                >
                  f
                </span>
                <span
                  className="char"
                  style="display: inline-block; translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0%, 100%);"
                >
                  o
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
