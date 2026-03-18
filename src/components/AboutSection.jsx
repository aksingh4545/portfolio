import { Briefcase, Code, Database, TrendingUp, Users, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Building calm data systems • One reliable pipeline at a time
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Data Engineer | Real-Time Systems | Cloud & MLOps
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Ankit Kumar Singh</span>, a passionate 
                Data Engineer specialized in building <span className="text-primary font-medium">scalable data platforms</span>, 
                <span className="text-primary font-medium"> real-time streaming systems</span>, and 
                <span className="text-primary font-medium"> production-ready ML pipelines</span>.
              </p>

              <p>
                With expertise in technologies like <span className="font-semibold">Databricks, Snowflake, Kafka, 
                Airflow, Flink, PySpark, DBT, and Terraform</span>, I design reliable ETL/ELT pipelines with 
                strong data governance and security. My work spans across <span className="font-semibold">AWS & Azure</span> 
                cloud platforms, building event-driven architectures and real-time ingestion pipelines.
              </p>

              <p>
                I focus on building systems that are <span className="text-primary font-medium">predictable, 
                observable, and easy to maintain</span>. I believe in clean architecture over shiny complexity, 
                and I'm committed to creating data solutions that are both powerful and sustainable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Ak_POD.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
              >
                Download CV
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <div className="text-2xl font-bold text-primary">37+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>

          {/* Right Side - Expertise Cards */}
          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    End-to-end ETL/ELT pipelines using Spark, PySpark, DBT, Snowflake,
                    Databricks, and Airflow with cloud-native architecture and data modeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-Time Streaming</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Real-time systems using Kafka, Apache Flink, Event Hub, and
                    Delta Lake with event-time processing, windowing, and scalable microservices.
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
                  <p className="text-muted-foreground text-sm mt-1">
                    Production ML pipelines using MLflow, FastAPI, Docker,
                    Terraform, CI/CD with GitHub Actions & Jenkins across AWS & Azure.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics & BI</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Business intelligence solutions with Power BI, Superset, and 
                    advanced analytics using SQL, Pandas, and data visualization tools.
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
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Web applications using React, Node.js, Express, Django, and 
                    modern JavaScript/TypeScript with MERN stack architecture.
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