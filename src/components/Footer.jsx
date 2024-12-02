const Footer = () => {
  return (
    <div className="text-center ml-28">
      <div className="bg-[#FFFFFF] mr-10 py-7">
        <h2 className="text-[#09080F] text-3xl font-bold">Gadget Heaven</h2>
        <p className="text-[#09080F99] text-base font-medium">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer bg-[#FFFFFF] text-base-content text-center p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Service</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
