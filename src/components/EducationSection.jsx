import { GraduationCap, Award, BookOpen, BadgeCheck } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science / Information Technology",
    institution: "University",
    period: "2020 - 2024",
    description: "Focused on data structures, algorithms, database systems, and software engineering fundamentals.",
    icon: GraduationCap
  }
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified",
    issuer: "Amazon Web Services",
    description: "Cloud practitioner certification covering AWS core services, security, and architecture.",
    skills: ["S3", "Lambda", "EC2", "IAM", "VPC"],
    icon: Award
  },
  {
    id: 2,
    name: "Azure Data Engineer",
    issuer: "Microsoft Azure",
    description: "Specialized in Azure data services including Data Factory, Databricks, and Synapse.",
    skills: ["ADLS", "Databricks", "Event Hub", "Cosmos DB"],
    icon: Award
  },
  {
    id: 3,
    name: "Databricks Certified",
    issuer: "Databricks",
    description: "Certified in Apache Spark and Databricks platform for big data processing.",
    skills: ["PySpark", "Delta Lake", "Spark SQL"],
    icon: BadgeCheck
  }
];

const learningPaths = [
  {
    id: 1,
    title: "Advanced Data Modeling",
    description: "Deep dive into analytics and warehouse workloads, dimensional modeling, and data vault architecture.",
    status: "In Progress",
    topics: ["Star Schema", "Snowflake Schema", "Data Vault", "Slowly Changing Dimensions"]
  },
  {
    id: 2,
    title: "Spark Internals Mastery",
    description: "Understanding Spark partitioning, broadcast joins, memory tuning, and performance optimization.",
    status: "In Progress",
    topics: ["Partitioning", "Broadcast Joins", "Memory Tuning", "Catalyst Optimizer"]
  },
  {
    id: 3,
    title: "Event-Driven Architectures",
    description: "Building reliable message queues and event streaming systems at scale.",
    status: "Continuous",
    topics: ["Kafka", "Event Sourcing", "CQRS", "Message Patterns"]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Continuous learning and professional development in data engineering and cloud technologies
        </p>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <edu.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.field}</p>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{cert.name}</h4>
                </div>
                <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Current Learning Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((goal) => (
              <div
                key={goal.id}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-foreground">{goal.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    goal.status === "In Progress" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    goal.status === "Continuous" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    "bg-secondary/50 text-secondary-foreground"
                  }`}>
                    {goal.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{goal.description}</p>
                <div className="space-y-2">
                  {goal.topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-center">
          <blockquote className="text-lg text-foreground italic mb-4">
            "I value systems that are predictable, observable, and easy to maintain. 
            Clean logs make me happy. Calm infrastructure over shiny complexity."
          </blockquote>
          <p className="text-muted-foreground">— Ankit Kumar Singh, 2026</p>
        </div>
      </div>
    </section>
  );
};
