import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Data Assistant (Ollama + FastAPI)",
    description:
      "An intelligent data assistant that converts natural language questions into pandas queries using Mistral (Ollama). Built with FastAPI, it executes queries on structured datasets and returns both computed results and plain-language explanations.",
    image: "/projects/ai-agent.jpg",
    tags: ["FastAPI", "Ollama", "Mistral", "Pandas", "Python", "LLM"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/ai-data-agent.git",
  },
  {
    id: 2,
    title: "Real-Time Streaming Pipeline (Kafka + Flink)",
    description:
      "End-to-end real-time data processing system using Kafka for ingestion and Apache Flink for event-time processing. Containerized with Docker and designed for scalable, fault-tolerant stream analytics.",
    image: "/projects/flink-kafka.jpg",
    tags: ["Kafka", "Apache Flink", "Docker", "Streaming", "Event-Time"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/flink-kafka.git",
  },
  {
    id: 3,
    title: "MLOps Pipeline with MLflow",
    description:
      "Production-ready ML system that predicts student performance. Includes ML pipeline training, MLflow model registry, FastAPI inference service, Dockerized deployment, and reproducible workflows.",
    image: "/projects/mlops.jpg",
    tags: ["MLflow", "FastAPI", "Docker", "MLOps", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/mlflow_pipeline.git",
  },
  {
    id: 4,
    title: "Airflow → Snowflake Automated Pipeline",
    description:
      "Automated data ingestion pipeline orchestrated with Apache Airflow. Loads data into Snowflake with CI/CD integration using GitHub Actions for automated deployment and version control.",
    image: "/projects/airflow.jpg",
    tags: ["Airflow", "Snowflake", "GitHub Actions", "ETL", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/airflow-snowflake-pipeline.git",
  },
  {
    id: 5,
    title: "Azure Event Hub Real-Time Architecture",
    description:
      "Cloud-native streaming system: Azure Event Hub → ADLS → Databricks → Delta Lake → Cosmos DB. Designed for reliable event-time processing and analytics-ready data serving.",
    image: "/projects/azure.jpg",
    tags: ["Azure", "Databricks", "Delta Lake", "Event Hub", "Cosmos DB"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/Event_hub.git",
  },
  {
    id: 6,
    title: "Serverless Image Processing (AWS)",
    description:
      "Event-driven AWS architecture where images uploaded to S3 trigger Lambda-based resizing with Pillow. Processed images are stored and notifications sent via SNS.",
    image: "/projects/aws-serverless.jpg",
    tags: ["AWS", "Lambda", "S3", "SNS", "Serverless"],
    demoUrl: "#",
    githubUrl: "https://github.com/aksingh4545/image_resize.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Production-focused data engineering, real-time streaming, cloud-native
          architectures, and MLOps systems demonstrating scalable, reliable,
          and deployment-ready solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aksingh4545"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};