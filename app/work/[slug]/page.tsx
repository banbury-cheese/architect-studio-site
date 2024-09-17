export default function BlogPost({ params }: { params: { blogId: string[] } }) {
  console.log(params);
  return (
    <main className="page-main">
      <div className="global-head">
        <div className="global-head_layout">
          <div className="head-flex_layout">
            <a href="/" className="head-logo_holder w-inline-block pload">
              <div className="head-logo_height"></div>
              {/* <img
                src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe08f_logo-icon.svg"
                loading="eager"
                alt=""
                className="head-logo"
              ></img> */}
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
         
          </div>
        </div>
      </div>
    </main>
  );
}
