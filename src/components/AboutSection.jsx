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
              Data Engineer | Real-Time Systems | Cloud & MLOps
            </h3>

            <p className="text-muted-foreground">
              I’m <span className="font-semibold">Ankit Kumar Singh</span>, a Data Engineer 
              specialized in building scalable data platforms, real-time streaming systems, 
              and production-ready ML pipelines. I work with technologies like 
              <b> Databricks, Snowflake, Kafka, Airflow, Flink, PySpark, DBT, and Terraform</b> 
              to design reliable ETL/ELT pipelines with strong data governance and security.
            </p>

            <p className="text-muted-foreground">
              My experience includes designing event-driven architectures on 
              <b> AWS & Azure</b>, building real-time ingestion pipelines 
              (Kafka → Flink → Delta Lake), implementing MLOps workflows using 
              <b> MLflow + FastAPI + Docker</b>, and automating deployments with 
              <b> Git & Jenkins</b>. I focus on performance, scalability, and clean architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Ak_POD.pdf"
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground">
                    End-to-end ETL/ELT pipelines using Spark, PySpark, DBT, Snowflake, 
                    Databricks, and Airflow with cloud-native architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-Time Streaming</h4>
                  <p className="text-muted-foreground">
                    Real-time systems using Kafka, Apache Flink, Event Hub, and 
                    Delta Lake with event-time processing and scalable microservices.
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
                  <h4 className="font-semibold text-lg">Cloud & MLOps</h4>
                  <p className="text-muted-foreground">
                    Production ML pipelines using MLflow, FastAPI, Docker, 
                    Terraform, CI/CD with GitHub Actions & Jenkins across AWS & Azure.
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