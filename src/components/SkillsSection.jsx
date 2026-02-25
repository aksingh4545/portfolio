import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Engineering
  { name: "Databricks", category: "data" },
  { name: "Snowflake", category: "data" },
  { name: "PySpark", category: "data" },
  { name: "DBT", category: "data" },
  { name: "Airflow", category: "data" },
  { name: "SSIS / SSMS", category: "data" },

  // Streaming & Big Data
  { name: "Apache Kafka", category: "streaming" },
  { name: "Apache Flink", category: "streaming" },
  { name: "Delta Lake", category: "streaming" },
  { name: "Azure Event Hub", category: "streaming" },

  // Cloud & Infra
  { name: "AWS (S3, Lambda, SNS)", category: "cloud" },
  { name: "Azure (ADLS, Cosmos DB)", category: "cloud" },
  { name: "Terraform", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "VPC & Networking", category: "cloud" },

  // MLOps & APIs
  { name: "MLflow", category: "mlops" },
  { name: "FastAPI", category: "mlops" },
  { name: "Flask", category: "mlops" },
  { name: "CI/CD (GitHub Actions, Jenkins)", category: "mlops" },

  // Languages
  { name: "Python", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "C / C++", category: "languages" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "data", label: "Data Engineering" },
  { key: "streaming", label: "Streaming" },
  { key: "cloud", label: "Cloud & Infra" },
  { key: "mlops", label: "MLOps & APIs" },
  { key: "languages", label: "Languages" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-card border rounded-full text-sm shadow-sm"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};