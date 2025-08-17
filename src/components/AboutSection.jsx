import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
  Aspiring Full Stack Developer
</h3>

<p className="text-muted-foreground">
  I’m <span className="font-semibold">Ankit Kumar Singh</span>, a Computer
  Science & Engineering student at SISTec-R (Bhopal). Passionate about
  building complete web solutions — from intuitive front-end interfaces with{" "}
  <b>React.js</b> to secure, scalable back-end systems using{" "}
  <b>Node.js, Express.js, and MongoDB</b>. I aim to craft applications that
  are responsive, performant, and impactful.
</p>


            <p className="text-muted-foreground">
              I enjoy solving real-world problems, contributing to open-source,
              and continuously learning new technologies to grow into a skilled
              backend engineer. Experienced in full-stack development through
              projects like <b>Web Chat App</b> using React.js, Node.js, Express.js,
              MongoDB, and Socket.IO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Ak_POD.pdf" // you can replace with Google Drive link
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Full-stack projects using React.js, Node.js, Express, and
                    Socket.IO with modern JavaScript practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">
                    Skilled in MongoDB & MySQL for designing scalable databases
                    and implementing secure data operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in C, C++, OOPs, and data structures with
                    problem-solving skills honed through hackathons &
                    bootcamps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
