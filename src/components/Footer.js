// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Made With 
      <i className="fa-solid fa-heart"></i> By :){" "}
      <a href="https://www.linkedin.com/in/tapas-jyoti/" target="_blank" className="a-tag">
        Tapas Jyoti
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;
