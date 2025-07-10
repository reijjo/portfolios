import Image from "next/image";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="tape tape-top-left">
            {/* <Image
              src="/assets/images/tape.png"
              alt="tape"
              title="Tape"
              className="tape-image"
              width={24}
              height={100}
              priority
            /> */}
          </div>
          <div className="tape tape-top-right"></div>
          <div className="tape tape-bottom-left"></div>
          <div className="tape tape-bottom-right"></div>
          <Image
            className="hero-image"
            src="/assets/images/mina.jpg"
            alt="Teemu"
            title="That's me"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            priority
            fill
          />
        </div>
        <div className="hero-titles">
          <h1 className="hero-title">Hi, I am Teemu.</h1>
          <h4 className="hero-subtitle">
            {" "}
            Your favorite Full Stack Developer who builds the kind of tools I
            actually want to use. I learn by doing, and staying curious along
            the way.
          </h4>
        </div>
      </div>
    </section>
  );
};
