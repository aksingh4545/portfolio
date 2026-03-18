import { useState } from "react";
import { cn } from "@/lib/utils";
import { Database, Zap, Cloud, Brain, Code, Terminal } from "lucide-react";

const skills = [
  // Data Engineering
  { name: "Databricks", category: "data", level: 90, icon: Database },
  { name: "Snowflake", category: "data", level: 85, icon: Database },
  { name: "PySpark", category: "data", level: 88, icon: Database },
  { name: "DBT", category: "data", level: 82, icon: Database },
  { name: "Airflow", category: "data", level: 85, icon: Database },
  { name: "SSIS / SSMS", category: "data", level: 75, icon: Database },
  { name: "Pandas", category: "data", level: 88, icon: Database },

  // Streaming & Big Data
  { name: "Apache Kafka", category: "streaming", level: 85, icon: Zap },
  { name: "Apache Flink", category: "streaming", level: 80, icon: Zap },
  { name: "Delta Lake", category: "streaming", level: 82, icon: Zap },
  { name: "Azure Event Hub", category: "streaming", level: 78, icon: Zap },

  // Cloud & Infra
  { name: "AWS (S3, Lambda, SNS)", category: "cloud", level: 88, icon: Cloud },
  { name: "Azure (ADLS, Cosmos DB)", category: "cloud", level: 85, icon: Cloud },
  { name: "Terraform", category: "cloud", level: 75, icon: Cloud },
  { name: "Docker", category: "cloud", level: 85, icon: Cloud },
  { name: "VPC & Networking", category: "cloud", level: 72, icon: Cloud },

  // MLOps & APIs
  { name: "MLflow", category: "mlops", level: 82, icon: Brain },
  { name: "FastAPI", category: "mlops", level: 85, icon: Brain },
  { name: "Flask", category: "mlops", level: 80, icon: Brain },
  { name: "CI/CD (GitHub Actions, Jenkins)", category: "mlops", level: 78, icon: Brain },
  { name: "Ollama / LLM", category: "mlops", level: 75, icon: Brain },

  // Languages
  { name: "Python", category: "languages", level: 92, icon: Code },
  { name: "SQL", category: "languages", level: 90, icon: Code },
  { name: "C / C++", category: "languages", level: 70, icon: Code },
  { name: "Scala", category: "languages", level: 65, icon: Code },
  { name: "JavaScript / TypeScript", category: "languages", level: 75, icon: Code },

  // Tools & Others
  { name: "Git / GitHub", category: "tools", level: 88, icon: Terminal },
  { name: "Power BI", category: "tools", level: 80, icon: Terminal },
  { name: "Superset", category: "tools", level: 72, icon: Terminal },
  { name: "MySQL / PostgreSQL", category: "tools", level: 85, icon: Terminal },
  { name: "MongoDB", category: "tools", level: 70, icon: Terminal },
  { name: "Redis", category: "tools", level: 68, icon: Terminal },
];

const categories = [
  { key: "all", label: "All", icon: null },
  { key: "data", label: "Data Engineering", icon: Database },
  { key: "streaming", label: "Streaming", icon: Zap },
  { key: "cloud", label: "Cloud & Infra", icon: Cloud },
  { key: "mlops", label: "MLOps & APIs", icon: Brain },
  { key: "languages", label: "Languages", icon: Code },
  { key: "tools", label: "Tools & DB", icon: Terminal },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A comprehensive toolkit for building scalable data platforms, real-time systems, and production-ready ML pipelines
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary/70 hover:bg-secondary text-foreground/80"
              )}
            >
              {category.icon && <category.icon size={14} />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-4 bg-card border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4 text-center">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Node.js", "Express", "Django", "Streamlit", "Jenkins", "GitHub Actions", 
              "Athena", "Glue", "SNS", "SES", "Cognito", "DynamoDB", "Cosmos DB", "ADLS", 
              "EC2", "S3", "Lambda", "EMR", "NLP", "FAISS", "Sentence Transformers", "ML", 
              "ETL", "Data Modeling", "Data Governance", "REST APIs", "Microservices"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-primary/10 text-foreground/70 hover:text-primary rounded-full transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};