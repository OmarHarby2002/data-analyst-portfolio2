"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, BarChart3, Database, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ProjectModal } from "@/components/project-modal"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "Superstore Sales Dashboard",
      description: "Advanced retail analytics dashboard for market and product performance",
      fullDescription:
        "Developed a comprehensive retail analytics dashboard analyzing $2.3M+ in total sales across multiple regions and product categories. Features include interactive filters for date and region, profit analysis by category and month, geographic sales distribution via US state map, top/bottom 10 products analysis, and sub-category performance metrics. This dashboard demonstrates proficiency in creating actionable business intelligence visualizations that help stakeholders make data-driven decisions. The project showcases advanced data visualization techniques, user-centered design, and the ability to present complex data in an accessible format.",
      image: "/images/superstore-dashboard.png",
      tags: ["Business Intelligence", "Data Visualization", "Dashboard Design", "Excel", "Analytics"],
      icon: "BarChart3",
    },
    {
      title: "Adidas Sales Dashboard",
      description: "Comprehensive Excel dashboard analyzing Adidas sales performance",
      fullDescription:
        "Built an interactive Excel dashboard showcasing total sales ($120M+) and profit ($47M+) metrics. Features include retailer performance analysis, regional sales breakdown, product-wise distribution, sales methods analysis, and time-series trends. Utilized advanced Excel features including pivot tables, complex formulas, charts, and slicers for dynamic filtering. The dashboard provides real-time insights into sales performance across different dimensions, enabling quick identification of trends and opportunities. This project demonstrates mastery of Excel as a powerful data analysis and visualization tool.",
      image: "/images/adidas-dashboard.png",
      tags: ["Excel", "Data Visualization", "Dashboard Design", "Pivot Tables", "Business Analytics"],
      icon: "BarChart3",
    },
    {
      title: "Online Courses Database Model",
      description: "Star schema design for course analytics platform",
      fullDescription:
        "Designed a dimensional data model for analyzing online course data. Implemented a star schema architecture with a central fact table connecting to dimension tables (DimCourseInfo, DimSubject, DimLevel, DimDate) to enable efficient reporting on course enrollments, subjects, difficulty levels, and temporal trends. This design optimizes query performance for analytical workloads and supports complex reporting requirements. The model follows best practices in data warehousing and demonstrates understanding of dimensional modeling principles for business intelligence applications.",
      image: "/images/courses-database-schema.png",
      tags: ["Data Modeling", "Star Schema", "Database Design", "SQL", "Data Warehousing"],
      icon: "Database",
    },
    {
      title: "Sales Data Warehouse Schema",
      description: "Dimensional model for retail sales analysis",
      fullDescription:
        "Architected a comprehensive sales data warehouse using star schema methodology. The central fact_sales table connects to multiple dimension tables (din_product, din_date, terriotly, din_ship, din_status) enabling multi-dimensional analysis of sales transactions, customer behavior, and operational metrics. This design supports complex analytical queries while maintaining optimal performance. The schema facilitates business intelligence reporting, trend analysis, and strategic decision-making by providing a unified view of sales data across multiple business dimensions.",
      image: "/images/sales-database-schema.png",
      tags: ["SQL", "ETL", "Data Warehouse", "Star Schema", "Database Architecture"],
      icon: "Database",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-foreground">
              Omar Elsayed
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/OmarHarby2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omar-elsayed-b73b6524b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">Omar Elsayed</h1>
              <p className="text-2xl md:text-3xl text-primary font-medium">Data Analyst</p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about transforming data into meaningful insights. I work with SQL, Python, and visualization
                tools to analyze datasets and support data-driven decision making.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#contact" className="flex items-center gap-2">
                    Get In Touch
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl">
              <Image
                src="/images/omar-profile.jpg"
                alt="Omar Elsayed - Data Analyst"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a recent graduate with a passion for data analysis and visualization. I transform complex datasets
                  into actionable insights using SQL, Python, Excel, and Power BI. My goal is to help organizations make
                  data-driven decisions.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Tableau
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Power BI
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Excel
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      R
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Machine Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Statistical Analysis
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      Data Visualization
                    </Badge>
                    <Badge variant="secondary" className="bg-card text-card-foreground border border-border">
                      ETL Processes
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Education & Training</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-foreground">Bachelor's Degree</CardTitle>
                      <CardDescription className="text-muted-foreground">Arab Open University</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">Graduated 2024</div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Completed comprehensive academic program with focus on analytical and technical skills</li>
                    <li>Developed strong foundation in problem-solving and critical thinking</li>
                    <li>Participated in practical projects and collaborative learning experiences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-foreground">Data Analysis Scholarship</CardTitle>
                      <CardDescription className="text-muted-foreground">Creativa - Alexandria Branch</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">Completed 2025</div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Intensive data analysis training covering Python, SQL, and data visualization</li>
                    <li>Built real-world projects including sales dashboards and database schemas</li>
                    <li>Mastered Power BI and Excel for business intelligence and reporting</li>
                    <li>Completed capstone projects demonstrating end-to-end data analysis workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-foreground">Internship - Ministry of Communications</CardTitle>
                      <CardDescription className="text-muted-foreground">Government Sector</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">2024</div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Gained hands-on experience in the telecommunications and ICT sector</li>
                    <li>Participated in data management and analysis initiatives</li>
                    <li>Collaborated with professionals on government digital transformation projects</li>
                    <li>Developed understanding of public sector data governance and policies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-foreground">Internship - National Telecom Institute (NTI)</CardTitle>
                      <CardDescription className="text-muted-foreground">Technical Training</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">2024</div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Technical training in telecommunications and data systems</li>
                    <li>Exposure to industry-standard tools and methodologies</li>
                    <li>Learned about network data analysis and performance metrics</li>
                    <li>Enhanced technical skills through practical exercises and workshops</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Projects</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      {project.icon === "BarChart3" && <BarChart3 className="h-8 w-8 text-primary" />}
                      {project.icon === "Database" && <Database className="h-8 w-8 text-accent" />}
                    </div>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-4">{project.fullDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-border text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Data Analysis & Reporting - Static Card */}
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">Data Analysis & Reporting</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Statistical analysis and business intelligence reporting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Performed comprehensive data analysis using statistical methods to uncover business insights.
                    Created automated reports and visualizations that helped stakeholders make data-driven decisions and
                    identify key performance indicators.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      Statistical Analysis
                    </Badge>
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      Power BI
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Get In Touch</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities, collaborations, or just connecting with
                  fellow data enthusiasts. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:omarelsayed9300@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>omarelsayed9300@gmail.com</span>
                  </a>

                  <a
                    href="tel:+201273348656"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+20 127 334 8656</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/omar-elsayed-b73b6524b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span>linkedin.com/in/omar-elsayed-b73b6524b</span>
                  </a>

                  <a
                    href="https://github.com/OmarHarby2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <span>github.com/OmarHarby2002</span>
                  </a>
                </div>
              </div>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Let's Connect</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Whether you have a question, project idea, or just want to say hi, I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="mailto:omarelsayed9300@gmail.com" className="flex items-center justify-center gap-2">
                      Send Me a Message
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Omar Elsayed. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/OmarHarby2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omar-elsayed-b73b6524b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:omarelsayed9300@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      )}
    </div>
  )
}
