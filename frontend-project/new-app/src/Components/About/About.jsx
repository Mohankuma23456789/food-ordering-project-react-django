import about from "../../assets/about.webp";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="About">
        <div>
          <img src={about} alt="" />
        </div>
        <div>
          <h2 style={{color:'red'}}> About This Food </h2>
          <p>
            Welcome to Foodie, where our passion for quality meets
            your everyday needs. Founded with a simple yet ambitious vision, we
            started our journey to bridge the gap between premium products and
            seamless accessibility. We believe that everyone deserves access to
            the best, whether it’s a nutritious meal, a handcrafted product, or
            a life-changing service, delivered right to their doorstep with just
            a few clicks. Our platform is built on the pillars of trust,
            transparency, and technology, ensuring that every interaction you
            have with us is smooth and satisfying. Over the years, we have
            evolved from a small startup into a community-driven brand, thanks
            to the unwavering support of our customers. Our team works
            tirelessly to curate the finest selections, partnering only with
            trusted local vendors and global suppliers who share our commitment
            to excellence. We don't just deliver orders; we deliver experiences,
            smiles, and the comfort of knowing that you are in good hands.

          </p>
        </div>
      </div>
    </>
  );
}
