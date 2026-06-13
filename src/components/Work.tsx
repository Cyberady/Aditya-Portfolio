import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "AI Resume Checker",
    category: "AI-Powered Resume Analysis",
    tools: "React, Node.js, Gemini AI, ATS Scoring",
    image: "/images/resume-checker.webp",
    link: "https://ai-resume-checker-mu.vercel.app/",
  },
  {
    title: "Roomify",
    category: "Room Booking Platform",
    tools: "TypeScript, React, Authentication, Database",
    image: "/images/roomify.webp",
    link: "https://roomify-8gu8.onrender.com/",
  },
  {
    title: "FluxWorker",
    category: "Background Task Management",
    tools: "JavaScript, HTML, Web Workers",
    image: "/images/fluxworker.webp",
    link: "https://cyberady.github.io/FluxWorker/",
  },
  {
    title: "NeuroMeet AI",
    category: "AI Meeting Assistant",
    tools: "React, AI Integration, Real-Time Processing",
    image: "/images/neuromeet.webp",
    link: "https://neuromeet-ai.onrender.com/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;