import React from "react";
import "./Teachers.css";

// Founder
const founder = {
  name: "Sir Furqan",
  role: "Founder",
  img: "SirFurqan.jpg",
  description:
    "Founder of Usatadistan Tutor Academy, an accomplished education leader and subject specialist with extensive academic qualifications and over three decades of teaching and coaching experience. A CA Inter professional holding a Master’s degree in Public Administration (MPA) with specialization in HR and Finance, a UK Diploma in HR and Finance, and Microsoft Certified Professional credentials. He has served 10 years with The City School (TCS) and Beaconhouse School System (BSS), along with 15 years across other national and international education systems, delivering consistent academic excellence. With 30 years of group coaching experience, he is a specialist in Accounts (O & A Levels), Mathematics (O Level), Business Studies and Economics (O & A Levels), BBA Business Mathematics, Accounts and Finance, and ACCA Foundation Levels (FE 1, 2, 3 & 4), widely recognized for result-oriented teaching, conceptual clarity, and student success.",
};

// Co-Founders
const coFounders = [
  {
    name: "Sidra Furqan",
    role: "Co-Founder",
    img: "SidraFurqan.jpg",
    description:
      "Sidra Furqan is a highly qualified and experienced mathematics educator, holding an MS in Applied Mathematics from NED University and an MSc in Pure Mathematics. She is a CIE-certified Cambridge Teacher and a Distinction holder in the Reflective Professional Development Program, demonstrating strong commitment to continuous professional growth. With over 10 years of teaching experience at Foundation Public School (FPS) and the Beaconhouse School System (BSS)—and currently teaching at the PECHS campus of Beaconhouse School System—she has developed extensive expertise across diverse international curricula. She is a subject specialist in O & A Level Mathematics, including IGCSE, GCE, and Edexcel, and also teaches New Zealand, Australian, and American mathematics curricula, recognized for conceptual clarity, analytical strength, and student-focused teaching.",
  },
  {
    name: "Marium Zehra",
    role: "Technical Lead & Platform Developer",
    img: "MariumZehra.jpg",
    description:
      "Software Engineer and Educator with strong hands-on experience in Generative AI, data analytics, and full-stack web development, specializing in building AI-driven applications and scalable MERN-based platforms. I have worked as an Associate Software Engineer, collaborating with global teams to enhance conversational AI through multi-turn dialogue design, NLP workflows, and agent-based reasoning. Alongside my development work, I bring 3–4 years of teaching experience in computer science and technical subjects, enabling me to explain complex concepts with clarity and structure. My technical expertise spans LangChain, LangGraph, Hugging Face, RAG systems, Python, SQL, Power BI, and modern web technologies, with practical experience developing AI assistants, data dashboards, and full-stack applications. Holding a Bachelor’s degree in Computer Science, I am passionate about combining technology, education, and leadership to create impactful digital solutions and learner-focused platforms.",
  },
];

// Teachers
const teachers = [
  {
    name: "Raja Hasan Khan",
    img: "RajaHassan.jpg",
    description:
      "Raja Hasan Khan is an experienced and qualified O/A levels Cambridge trained and certified educationist for O and A levels Business and Economics for IGCSE, GCSE , AQA BOARD having more than 18 years of professional experience with reputable education institution like The City School, Beacon house, Foundation Public school and many others, excels in teaching students for Economics and business O/A levels with effective student focused conceptual teaching methodology and practical approach to  ensure excellent results.",
  },
  {
    name: "Syed Nasir Naeem",
    img: "SyedNasir.jpg",
    description:
      "Syed Nasir Naeem is a dedicated and results-driven teacher with more than a decade of professional teaching experience at well-established school systems including Beaconhouse and The City School. He possesses an MS in Social Sciences along with an MBA in HR, which enhances his ability to understand student psychology, curriculum planning, and educational leadership. His teaching approach emphasizes conceptual clarity, student engagement, and holistic development.",
  },
  {
    name: "Unaiza Abdul Qayyum",
    img: "MissUnaiza.jpg",
    description:
      "With a strong academic foundation in Doctor of Pharmacy (Pharm-D) and a Pre-Medical background, Unaiza brings in-depth scientific knowledge and analytical skills to her teaching practice. Her education in the biological sciences enables her to explain complex concepts with clarity and support students in developing a solid understanding of Biology. Her training has strengthened her expertise in teaching Biology and Science across multiple curricula, including Edexcel International, Cambridge O Level, IGCSE, and Pakistan’s national board. She is skilled at breaking down challenging topics, designing engaging learning experiences, and connecting classroom content to real-world applications. Unaiza is committed to nurturing curiosity, critical thinking, and confidence in her students. She strives to provide high-quality science education through clear explanations, structured guidance, and supportive learning environments. Her goal is to empower every learner to achieve academic success and build a strong foundation in science.",
  },
  {
    name: "Maira Asif",
    img: "MairaAsif.jpg",
    description:
      "Maira Arif is a highly qualified education professional with an MBA (MPhil Human Resource Management), an MBA in Marketing, and a BBA in Finance, supported by multiple professional certifications and training programs. With over thirteen years of diverse teaching experience across well-established institutions, she has taught O Level and university-level courses including Pakistan Studies, Business Studies, Global Perspectives, HRM and Business Communication. Over the years, she has served in academic leadership capacities, gaining extensive experience in curriculum planning, instructional delivery and student support. She currently works as a senior-level teacher, where she is responsible for implementing effective teaching strategies, maintaining high academic standards, and supporting student development through both instruction and guidance. Driven by a strong passion for meaningful education, she is committed to shaping confident, capable learners and ensuring that her teaching leaves a lasting impact on both academic growth and personal character.",
  },
  {
    name: "Ruqayya Rasheed",
    img: "Ruqayya.jpg",
    description:
      "M.Phil in Food Science and Technology. 17+ years Experience of Teaching Physics, Chemistry and Combined Science (O/A Level). GCE/IGCSE/AQA/EDEXCEL/American Curriculum. Disinctions: Top in the World (Physics) batch 2023, Top in Pakistan (Physics) batch 2021, Secured Highest CGPA in the region. Associated with Beaconhouse School System, Jubilee Campus since 2012.",
  },
  {
    name: "Amna Sami",
    img: "Dummy.png",
    description:
      "With over a decade of experience teaching Mathematics, Additional Mathematics, and Physics across Cambridge O/A Levels, IGCSE, and Edexcel, Amna Sami is a highly accomplished educator known for her strong subject command and student-centered approach. She has taught at leading institutions such as Beaconhouse School System, AMI Senior School, and Head Start School System, alongside providing private tuition since 2010. Holding a Master’s in Industrial & Manufacturing Engineering and a Bachelor’s in Mechanical Engineering from NED University, she brings strong analytical rigor to her teaching. A Cambridge-certified educator with distinction in Teaching with Digital Technologies, she has also completed extensive professional development including Cambridge enrichment programs, Google Certified Educator (Level 1), Visible Thinking (Harvard GSE), and Edexcel workshops. Specializing in conceptual clarity, curriculum design, and digital learning integration, she consistently prepares students for high-stakes examinations while fostering confidence and critical thinking, reflected in outstanding results such as a GPA of 4.36 in CAIE Additional Mathematics (2025)."},
    {
    name: "Maryam Faisal",
    img: "MaryamFaisal.jpg",
    description:
      "Maryam Faisal has completed her Master’s degrees in Psychology and English Linguistics from the University of Karachi and brings over 20 years of teaching experience to her profession. She currently teaches at one of Karachi’s renowned schools, where she instructs O Levels, IGCSE, and Edexcel Pearson students in English, Islamiyat, Psychology, and Sociology. An organised and dedicated professional, she demonstrates strong expertise in teaching, guidance, and counselling, with a proven record of improving student performance through clear and effective instruction. She handles challenges with professionalism and communicates complex concepts in a simple, engaging manner. Having taught a diverse range of middle and high school students, she has developed robust instructional strategies and classroom management skills. She possesses excellent communication, interpersonal, organisational, and time-management abilities. In addition, she has attended international courses and workshops, including NESA, and is currently completing the CICTL program, enabling her to remain aligned with contemporary educational practices. She is highly skilled in designing comprehensive lesson plans and creating meaningful, student-centred learning experiences that foster growth and confidence in the classroom."},
    {
    name: "Summiya Sheikh",
    img: "SummiyaSheikh.jpeg",
    description:
      "With 12+ years of experience teaching high school Chemistry, Summiya Sheikh brings a results-driven approach to instruction across international curricula such as CAIE, IGCSE, Pearson Edexcel, and the IB MYP Programme. She focuses on clear explanations, exam-oriented strategies, and strong conceptual foundations, enabling students to perform with confidence and consistency. Her teaching style is structured, supportive, and responsive to individual learning needs making her students ace their exams."},
    {
    name: "Syed Wajahat Ali",
    img: "SirWajahat.jpeg",
    description:
      "Syed Wajahat Ali is more than just a teacher; he is a dedicated mentor who inspires confidence, simplifies complex concepts, and guides students toward academic excellence. With over 20 years of experience teaching O/A Level Chemistry and Biology, he brings a powerful combination of subject mastery and educational expertise, holding both an MSc in Science and an MEd in Education. Trained by the British Council and having served at renowned institutions such as Beaconhouse, Pak Turk Maarif, and AMS, he possesses a deep understanding of diverse learning environments. Equally adept in physical and online classrooms, he is known for his consistently outstanding student results and his unwavering commitment to student success."}
];

const Teachers = () => {
  return (
    <div className="teachers-page modern-bg">

      {/* Founder + Co-Founders (Horizontal) */}
      <section className="top-leadership">
        <h2 className="fw-bold mb-4 text-center">Leadership</h2>

        <div className="leadership-row">
          {/* Founder */}
          <div className="glass-card leader-card">
            <img src={founder.img} alt={founder.name} />
            <h4>{founder.name}</h4>
            <h5 className="role">{founder.role}</h5>
            <p>{founder.description}</p>
          </div>

          {/* Co-Founders */}
          {coFounders.map((co, index) => (
            <div key={index} className="glass-card leader-card">
              <img src={co.img} alt={co.name} />
              <h4>{co.name}</h4>
              <h5 className="role">{co.role}</h5>
              <p>{co.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers List */}
      <section className="teachers-list">
        <h2 className="fw-bold mb-4 text-center">Our Teachers</h2>

        {teachers.map((teacher, index) => (
          <div key={index} className="glass-card teacher-list-item">
            <img src={teacher.img} alt={teacher.name} />
            <div>
              <h5>
                {teacher.name}
              </h5>
              <p>{teacher.description}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Teachers;
