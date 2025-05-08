import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "University Administration Dashboard",
    description:
      "พัฒนาเว็บแอปแอดมินแดชบอร์ดแบบ Full-Stack ด้วย Next.js, React, Clerk, MongoDB และ Tailwind CSS พร้อมตรวจสอบข้อมูลด้วย React Hook Form และ Zod",
    image: "/projects/project1.png",
    tags: ["Nextjs", "TailwindCSS", "MongoDB"],
    demoUrl: "https://github.com/tarsipthislean/BruAdmin_Dashboard",
    githubUrl: "https://github.com/tarsipthislean/BruAdmin_Dashboard",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "พัฒนาแอปเดสก์ท็อปจัดการคลังสินค้าด้วย Java และ Swing เชื่อมต่อ MySQL ด้วย JDBC และใช้รูปแบบ DAO เพื่อการเข้าถึงข้อมูลที่เป็นระบบและปลอดภัย",
    image: "/projects/project2.png",
    tags: ["Java", "Swing", "MySQL"],
    demoUrl: "https://github.com/tarsipthislean/InventoryManagementSystem",
    githubUrl: "https://github.com/tarsipthislean/InventoryManagementSystem",
  },
  {
    id: 3,
    title: "Eye Disease Classification System",
    description:
      "พัฒนาเว็บทำนายโรคตาด้วย Flask และ TensorFlow โดยใช้ภาพในการทำนาย พร้อมฟังก์ชันอัปโหลดรูปภาพและแสดงผลผ่าน UI ที่ใช้งานง่ายด้วย Bootstrap",
    image: "/projects/project3.png",
    tags: ["Python", "Javascript", "HTML", "CSS"],
    demoUrl: "https://github.com/tarsipthislean/EyeDiseaseClassificationSystem",
    githubUrl:
      "https://github.com/tarsipthislean/EyeDiseaseClassificationSystem",
  },
  {
    id: 4,
    title: "Recipe Sharing and Cooking",
    description:
      "พัฒนาเว็บแชร์สูตรอาหารด้วย Laravel และ PHP ใช้ Blade สำหรับการแสดงผลและ Bootstrap สำหรับ UI เชื่อมต่อ MySQL และใช้ JavaScript/jQuery กับ AJAX สำหรับการตรวจสอบฟอร์มและแสดงตัวอย่างภาพ",
    image: "/projects/project4.png",
    tags: [" PHP (Laravel)"],
    demoUrl: "https://github.com/tarsipthislean/RecipeSharingAndCooking",
    githubUrl: "https://github.com/tarsipthislean/RecipeSharingAndCooking",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          นี่คืองานโปรเจกต์ล่าสุดบางส่วนของผม
          ทุกโปรเจกต์ได้รับการพัฒนาอย่างพิถีพิถัน โดยให้ความสำคัญกับรายละเอียด,
          ประสิทธิภาพ, และประสบการณ์ของผู้ใช้
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              <div className="h-55 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Positioning the links at the bottom-left with extra padding-top */}
                <div className="absolute bottom-4 left-4 flex space-x-3 pt-9">
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
            href="https://github.com/tarsipthislean"
          >
            Github ของฉัน <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
