const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-6 bg-[#0D1B2A] p-6 rounded-xl"
      data-aos="flip-down"
    >
      {/* Image Section */}
      <div className="flex-1">
        <img
          className="w-full h-auto rounded-xl shadow-lg"
          src="https://i.ibb.co.com/v12kxXS/ava-ai-chat-bot-mobile-app-figma-template-428921-original.webp"
          alt="Gadget Showcase"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-[#00AEEF] text-3xl font-bold text-center md:text-left">
          Innovating the World of Gadgets
        </h2>
        <p className="text-lg text-[#A9A9A9] font-normal mt-4 text-justify">
          Welcome to GadgetHeaven, where innovation meets reliability. Our
          e-commerce platform is dedicated to providing the latest gadgets with
          unmatched quality and service. From cutting-edge smartphones to
          state-of-the-art accessories, we bring technology closer to you.
          Explore our wide range of products designed to elevate your lifestyle.
          With a seamless shopping experience, transparent pricing, and prompt
          delivery, GadgetHeaven is your trusted partner in staying ahead of the
          tech curve. Join us and discover how we redefine gadget shopping with
          excellence and care.
        </p>
      </div>
    </div>
  );
};

export default About;
