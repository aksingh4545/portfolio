import { Briefcase, Building, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Data Engineer",
    company: "Cloudnexus",
    type: "Organization",
    period: "2024 - Present",
    description: "Building scalable data platforms and real-time streaming architectures using AWS, Azure, Kafka, and Databricks.",
    achievements: [
      "Designed and implemented event-driven architectures on AWS & Azure",
      "Built real-time ingestion pipelines (Kafka → Flink → Delta Lake)",
      "Implemented MLOps workflows using MLflow + FastAPI + Docker",
      "Automated deployments with Git & Jenkins CI/CD"
    ],
    technologies: ["AWS", "Azure", "Kafka", "Databricks", "Airflow", "Snowflake"]
  },
  {
    id: 2,
    role: "Data Engineering Projects",
    company: "Personal & Open Source",
    type: "Projects",
    period: "2023 - Present",
    description: "Developing production-focused data engineering, real-time streaming, and MLOps systems as personal and open-source projects.",
    achievements: [
      "Created 37+ projects demonstrating data engineering expertise",
      "Built serverless image processing pipeline on AWS (4 stars)",
      "Developed Streamlit S3 pipeline for resume parsing (3 stars)",
      "Implemented real-time Kafka + Flink streaming systems"
    ],
    technologies: ["Python", "PySpark", "Kafka", "Flink", "Docker", "Terraform"]
  },
  {
    id: 3,
    role: "Full-Stack Development",
    company: "Learning & Practice",
    type: "Learning",
    period: "2022 - Present",
    description: "Expanding skillset into full-stack development with MERN stack, Django, and modern web technologies.",
    achievements: [
      "Built MERN stack applications with JWT authentication",
      "Developed Django CRUD applications with MVT architecture",
      "Created real-time device coordinate tracking system",
      "Learned Scala for advanced Spark development"
    ],
    technologies: ["React", "Node.js", "Express", "Django", "JavaScript", "Scala"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A journey of building reliable data systems, one pipeline at a time
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-6 hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}>
                  <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : "md:text-left"}>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}>
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 mb-3 text-sm ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium">{exp.period}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs">{exp.type}</span>
                    </div>

                    <p className={`text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`text-sm text-foreground/80 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}>
                          <span className="text-primary mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years of Learning</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-4xl font-bold text-primary mb-2">37+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};
