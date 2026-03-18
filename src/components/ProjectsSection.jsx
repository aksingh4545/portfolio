import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  // Featured Projects
  {
    id: 1,
    title: "AI Data Assistant (Ollama + FastAPI)",
    description:
      "An intelligent data assistant that converts natural language questions into pandas queries using Mistral (Ollama). Built with FastAPI, it executes queries on structured datasets and returns both computed results and plain-language explanations.",
    image: "/projects/ollama.jpg",
    tags: ["FastAPI", "Ollama", "Mistral", "Pandas", "Python", "LLM", "Docker"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/ai-data-agent.git",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Real-Time Streaming Pipeline (Kafka + Flink)",
    description:
      "End-to-end real-time data processing system using Kafka for ingestion and Apache Flink for event-time processing. Containerized with Docker and designed for scalable, fault-tolerant stream analytics.",
    image: "/projects/flink.png",
    tags: ["Kafka", "Apache Flink", "Docker", "Streaming", "Event-Time", "Real-Time"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/flink-kafka.git",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "MLOps Pipeline with MLflow",
    description:
      "Production-ready ML system that predicts student performance. Includes ML pipeline training, MLflow model registry, FastAPI inference service, Dockerized deployment, and reproducible workflows.",
    image: "/projects/mlflow.jpg",
    tags: ["MLflow", "FastAPI", "Docker", "MLOps", "Python", "ML"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/mlflow_pipeline.git",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Airflow → Snowflake Automated Pipeline",
    description:
      "Automated data ingestion pipeline orchestrated with Apache Airflow. Loads data into Snowflake with CI/CD integration using GitHub Actions for automated deployment and version control.",
    image: "/projects/airflow.jpg",
    tags: ["Airflow", "Snowflake", "GitHub Actions", "ETL", "SQL", "CI/CD"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/airflow-snowflake-pipeline.git",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Azure Event Hub Real-Time Architecture",
    description:
      "Cloud-native streaming system: Azure Event Hub → ADLS → Databricks → Delta Lake → Cosmos DB. Designed for reliable event-time processing and analytics-ready data serving.",
    image: "/projects/azure.png",
    tags: ["Azure", "Databricks", "Delta Lake", "Event Hub", "Cosmos DB", "ADLS"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/Event_hub.git",
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Serverless Image Processing (AWS)",
    description:
      "Event-driven AWS architecture where images uploaded to S3 trigger Lambda-based resizing with Pillow. Processed images are stored and notifications sent via SNS.",
    image: "/projects/serverless.png",
    tags: ["AWS", "Lambda", "S3", "SNS", "Serverless", "Pillow"],
    category: "featured",
    githubUrl: "https://github.com/aksingh4545/image_resize.git",
    demoUrl: "#",
  },

  // Data Engineering Projects
  {
    id: 7,
    title: "Streamlit S3 Resume Pipeline",
    description:
      "System supporting real-world resumes (PDF, DOCX, TXT) with industry-grade data engineering practices. Integrated with AWS S3 for storage and Power BI for visualization.",
    image: "/projects/streamlit.png",
    tags: ["Streamlit", "S3", "Python", "NLP", "SpaCy", "Power BI"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/streamlit_s3_pipeline.git",
    demoUrl: "#",
  },
  {
    id: 8,
    title: "DBT + Snowflake + Power BI Pipeline",
    description:
      "Data transformation pipeline built to process sales data from raw input to analytical marts using dbt, Snowflake, and Power BI for visualization.",
    image: "/projects/dbt.jpg",
    tags: ["dbt", "Snowflake", "Power BI", "SQL", "Data Modeling"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/dbt-bi-snowflake.git",
    demoUrl: "#",
  },
  {
    id: 9,
    title: "S3 to Superset Dashboard",
    description:
      "Pipeline from S3 to on-premise PostgreSQL to Superset dashboard. Includes Athena queries, Glue crawler setup, and interactive data visualization.",
    image: "/projects/superset.jpg",
    tags: ["S3", "PostgreSQL", "Superset", "Athena", "Glue", "ETL"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/s3-superset.git",
    demoUrl: "#",
  },
  {
    id: 10,
    title: "SSIS Data Migration to S3",
    description:
      "Using SSIS to migrate data from on-premises to AWS S3 and visualize on Power BI. Enterprise-grade ETL with data validation and error handling.",
    image: "/projects/ssis.jpg",
    tags: ["SSIS", "S3", "Power BI", "Data Migration", "ETL"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/ssis-data-migrate.git",
    demoUrl: "#",
  },
  {
    id: 11,
    title: "Databricks PySpark Learning",
    description:
      "Databricks notebook codes for learning PySpark, data transformations, and storage patterns. Covers basics to advanced Spark operations.",
    image: "/projects/databricks.jpg",
    tags: ["Databricks", "PySpark", "Python", "Spark", "Data Engineering"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/databricks.git",
    demoUrl: "#",
  },
  {
    id: 12,
    title: "CSV to JSON AWS ETL",
    description:
      "AWS ETL pipeline: S3 → Lambda → Glue ETL job to convert CSV to JSON. Serverless architecture for data format transformation.",
    image: "/projects/csv-json.jpg",
    tags: ["AWS", "S3", "Lambda", "Glue", "ETL", "Serverless"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/csv-to-json.git",
    demoUrl: "#",
  },
  {
    id: 13,
    title: "MySQL Data Pipeline",
    description:
      "Basic pipelining concept to transform raw data into useful structured data stored in MySQL. Demonstrates ETL fundamentals and data cleaning.",
    image: "/projects/mysql.jpg",
    tags: ["MySQL", "Python", "ETL", "Data Pipeline"],
    category: "data",
    githubUrl: "https://github.com/aksingh4545/simple-pipeline-mysql.git",
    demoUrl: "#",
  },

  // Streaming Projects
  {
    id: 14,
    title: "Kafka EC2 Databricks ETL",
    description:
      "Kafka setup on EC2 and ETL on Databricks after storing back to DynamoDB. Real-time data ingestion and processing pipeline.",
    image: "/projects/kafka-ec2.jpg",
    tags: ["Kafka", "EC2", "Databricks", "DynamoDB", "ETL", "AWS"],
    category: "streaming",
    githubUrl: "https://github.com/aksingh4545/kafka-ec2-databricks.git",
    demoUrl: "#",
  },
  {
    id: 15,
    title: "Kafka CSV Streaming",
    description:
      "Python project that reads data from CSV and streams it to output.csv using Kafka. Demonstrates Kafka producer-consumer patterns.",
    image: "/projects/kafka.jpg",
    tags: ["Kafka", "Python", "Streaming", "Docker"],
    category: "streaming",
    githubUrl: "https://github.com/aksingh4545/kafka-project.git",
    demoUrl: "#",
  },
  {
    id: 16,
    title: "Kafka Docker Setup",
    description:
      "Working with Kafka using Docker and command prompt - producer and consumer setup. Complete documentation for local Kafka development.",
    image: "/projects/kafka-docker.jpg",
    tags: ["Kafka", "Docker", "Documentation", "Streaming"],
    category: "streaming",
    githubUrl: "https://github.com/aksingh4545/kafka-docker.git",
    demoUrl: "#",
  },

  // Cloud & DevOps Projects
  {
    id: 17,
    title: "AWS Cognito Login with Streamlit",
    description:
      "Using AWS Cognito fully managed services with Streamlit application. Includes DynamoDB integration, SES for emails, and Lambda functions.",
    image: "/projects/cognito.jpg",
    tags: ["AWS", "Cognito", "Streamlit", "DynamoDB", "SES", "Lambda"],
    category: "cloud",
    githubUrl: "https://github.com/aksingh4545/login_cognito.git",
    demoUrl: "#",
  },
  {
    id: 18,
    title: "Superset Configuration on Windows",
    description:
      "Configure Apache Superset settings on Windows without Docker, using PostgreSQL database. Complete setup guide and configuration.",
    image: "/projects/superset-config.jpg",
    tags: ["Superset", "PostgreSQL", "Windows", "BI", "Configuration"],
    category: "cloud",
    githubUrl: "https://github.com/aksingh4545/superset-configuration.git",
    demoUrl: "#",
  },
  {
    id: 19,
    title: "DBT Detailed Project",
    description:
      "HTML tutorial for building MovieLens data pipeline using Snowflake, dbt, and Power BI. Comprehensive guide for data transformation.",
    image: "/projects/dbt-detailed.jpg",
    tags: ["dbt", "Snowflake", "Power BI", "SQL", "Tutorial"],
    category: "cloud",
    githubUrl: "https://github.com/aksingh4545/dbt-detailed-project.git",
    demoUrl: "#",
  },

  // ML & AI Projects
  {
    id: 20,
    title: "Recommendation System with ML",
    description:
      "ML-based product recommendation system using NLP embeddings and vector similarity search with Sentence Transformers and FAISS.",
    image: "/projects/recommendation.jpg",
    tags: ["ML", "NLP", "FAISS", "Flask", "Recommendation", "Python"],
    category: "ml",
    githubUrl: "https://github.com/aksingh4545/recommendation-system-ml.git",
    demoUrl: "#",
  },

  // Full-Stack Projects
  {
    id: 21,
    title: "MERN Stack Practice",
    description:
      "Full stack project focusing on backend and frontend working. Includes JWT authentication, React frontend, and Node.js backend with localStorage.",
    image: "/projects/mern.jpg",
    tags: ["React", "Node.js", "JavaScript", "JWT", "MERN", "Authentication"],
    category: "fullstack",
    githubUrl: "https://github.com/aksingh4545/mern-practice.git",
    demoUrl: "#",
  },
  {
    id: 22,
    title: "Django CRUD Application",
    description:
      "Django learning project covering MVT architecture, request lifecycle, and Todo app with CRUD functionality. Python web development fundamentals.",
    image: "/projects/django.jpg",
    tags: ["Python", "Django", "HTML", "Backend", "CRUD", "MVT"],
    category: "fullstack",
    githubUrl: "https://github.com/aksingh4545/django-crud.git",
    demoUrl: "#",
  },
  {
    id: 23,
    title: "Device Coordinate Tracker",
    description:
      "Website showing live location of connected devices and connections between them. Built with React, Node.js, and Express.",
    image: "/projects/coordinate.jpg",
    tags: ["React", "Node.js", "Express", "Real-Time", "Tracking"],
    category: "fullstack",
    githubUrl: "https://github.com/aksingh4545/coordinate.git",
    demoUrl: "#",
  },

  // Learning & Practice
  {
    id: 24,
    title: "Scala Learning Guide",
    description:
      "Practical Scala learning guide covering basics, PySpark vs Scala comparison, and Spark transformations. Functional programming fundamentals.",
    image: "/projects/scala.jpg",
    tags: ["Scala", "Spark", "Functional Programming", "Learning"],
    category: "learning",
    githubUrl: "https://github.com/aksingh4545/scala-learn.git",
    demoUrl: "#",
  },
  {
    id: 25,
    title: "GitHub Profile README",
    description:
      "Hello world this is my GitHub profile. Showcases skills, data engineering expertise, and introduction using GitHub Skills.",
    image: "/projects/github.jpg",
    tags: ["GitHub", "Skills", "Data Engineering", "Profile"],
    category: "learning",
    githubUrl: "https://github.com/aksingh4545/aksingh4545.git",
    demoUrl: "https://github.com/aksingh4545",
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "featured", label: "Featured" },
  { key: "data", label: "Data Engineering" },
  { key: "streaming", label: "Streaming" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "ml", label: "ML & AI" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "learning", label: "Learning" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Production-focused data engineering, real-time streaming, cloud-native
          architectures, and MLOps systems demonstrating scalable, reliable,
          and deployment-ready solutions.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary/70 hover:bg-secondary text-foreground/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-secondary/50 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%236366f1' width='400' height='200'/%3E%3Ctext fill='%23ffffff' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24'%3EProject%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {project.category === "featured" ? "⭐ Featured" : 
                     project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aksingh4545"
          >
            View All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-3xl font-bold text-primary">{projects.length}+</div>
            <div className="text-sm text-muted-foreground mt-1">Total Projects</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground mt-1">Data Engineering</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground mt-1">Streaming</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30">
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Cloud & DevOps</div>
          </div>
        </div>
      </div>
    </section>
  );
};