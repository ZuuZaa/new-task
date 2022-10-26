import { mainFooterLinks, sosialLinks, extraFooterList } from "constants";

export const Footer = () => {
  // ------ prevting form submit ------
  const submitHandler = (e) => e.preventDefault();
  return (
    // ----- footer container ------
    <footer>
      {/* ----- upper main part of footer ----- */}
      <div className="main-part">
        {/* ------- subscription part ------- */}
        <div className="follow-us">
          <h4>Join our newsletter</h4>
          <form onSubmit={submitHandler}>
            <div className="subscribe">
              <input type="text" placeholder="Escribe aquí tu e-mail " />
              <input type="submit" value="enviar" />
            </div>
            <div className="privacy-check">
              <input type="checkbox" name="privacy" id="privacy" />
              <label htmlFor="privacy">
                He leído y acepto la <span>política de privacidad</span>.
              </label>
            </div>
          </form>
        </div>
        {/* --------- footer links --------  */}
        <div className="links">
          {mainFooterLinks.map((item) => (
            <ul className={item.title} key={item.title}>
              {item.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* --------- sosial links -------- */}
        <div className="sosial">
          <ul>
            {sosialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ---------- lower part of footer -------  */}
      <div className="extra-part">
        <ul>
          {extraFooterList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
