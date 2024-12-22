import "./contentStyle.css";
function Content() {
  return (
    <>
      <div id="welcome" className="container-content">
        <div className="left-section">
          <div className="img-card">
            <img
              src="/Anuphap.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="content-text">
          <p className="greeting-text">สวัสดีครับ ผมชื่อ อานุภาพ ครับ</p>
          <p className="intro-text">
            ผมเป็นนักศึกษาที่มีความสนใจในการพัฒนาเว็บแอปพลิเคชันแบบ Full-stack
            Development ทั้งในส่วนของ Front-end และ Back-end
            ปัจจุบันกำลังศึกษาและพัฒนาทักษะในด้านต่างๆ เช่น การออกแบบ UI/UX,
            การพัฒนาระบบฐานข้อมูล, การสร้าง API และการจัดการ Server-side Logic
            เพื่อที่จะเป็น Full-stack Developer ที่มีความสามารถรอบด้าน
          </p>
          <p className="skills-header">
            ปัจจุบันกำลังศึกษาและพัฒนาทักษะ Programming:
          </p>
          <ul className="skills-list">
            <li className="skill-item">C/C++</li>
            <li className="skill-item">PHP</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">Visual Basic</li>
          </ul>
          <p className="skills-header">Framework ที่ใช้:</p>
          <ul className="skills-list">
            <li className="skill-item">React</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">Laravel</li>
            <li className="skill-item">Bootstrap</li>
            <li className="skill-item">Tailwind CSS</li>
          </ul>
          <p className="skills-header">โปรแกรมที่ใช้:</p>
          <ul className="skills-list">
            <li className="skill-item">Visual Studio Code</li>
            <li className="skill-item">GitHub Desktop</li>
            <li className="skill-item">Adobe Photoshop</li>
            <li className="skill-item">Figma</li>
          </ul>
          <p className="contact-header">สามารถติดต่อผมได้ทาง:</p>
          <ul className="contact-list">
            <li className="contact-item">
              <a
                target="_blank"
                className="contact-link"
                href="mailto:anuphap.240348@gmail.com"
              >
                Email: anuphap.240348@gmail.com
              </a>
            </li>
            <li className="contact-item">
              <a
                target="_blank"
                className="contact-link"
                href="https://facebook.com/anuphappp/"
              >
                Facebook: Phukan Anuphap
              </a>
            </li>
            <li className="contact-item">
              <a
                target="_blank" 
                className="contact-link"
                href="https://line.me/ti/p/~0850352548"
              >
                LINE: 0850352548
              </a>
            </li>
            {/* <li className="contact-item">LinkedIn: linkedin.com/in/anuphap</li> */}
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="content-title">
          <h1 id="about-me">About me</h1>
        </div>
        <div className="content-text">
          <p>
            ผมเป็นนักศึกษาชั้นปีที่ 1 สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์
            มหาวิทยาลัยแม่โจ้
            ด้วยความหลงใหลในการพัฒนาเว็บแอปพลิเคชันและการเขียนโปรแกรมตั้งแต่สมัยประกาศนียบัตรวิชาชีพ
            โดยเฉพาะการพัฒนาเว็บไซต์ด้วย PHP และ MySQL
            ทำให้ผมมุ่งมั่นศึกษาและฝึกฝนด้วยตนเอง
            ผ่านคอร์สออนไลน์และการลงมือทำโปรเจกต์จริง
          </p>
          <p>
            ด้วยความกระตือรือร้นในการเรียนรู้ ผมชอบติดตามเทคโนโลยีใหม่ๆ อยู่เสมอ
            และนำมาประยุกต์ใช้ในการพัฒนาผลงานต่างๆ
            เพื่อสร้างสรรค์งานที่มีประสิทธิภาพและทันสมัย
            ปัจจุบันผมกำลังศึกษาเพิ่มเติมเกี่ยวกับ React, Next.js และ Framework
            ต่างๆ รวมถึง Data Science
            เพื่อพัฒนาทักษะให้รอบด้านและก้าวทันโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว
          </p>
        </div>
      </div>

      <div id="experience" className="experience-part">
        Experience
      </div>
      <div className="part">2024 / 2567</div>
      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1>ระบบรับสมัครนักเรียน / นักศึกษา</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้พัฒนาระบบรับสมัครนักเรียนนักศึกษาออนไลน์ให้กับวิทยาลัยเทคนิคแม่สอด
            (DBT Maesod Admission) โดยรับผิดชอบในการออกแบบและพัฒนาระบบทั้งหมด
            รวมถึงระบบจัดการข้อมูลผู้สมัคร
            ผลงานนี้ได้รับการเผยแพร่อย่างเป็นทางการ
            ทำให้ได้เรียนรู้และพัฒนาทักษะการทำงานเป็นทีม การจัดการโครงการ
            และการแก้ไขปัญหาต่างๆ ที่เกิดขึ้นระหว่างการพัฒนา
          </p>
        </div>
      </div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ระบบจัดการนิเทศการฝึกงาน</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้พัฒนาเว็บไซต์ให้กับวิทยาลัยการอาชีพแม่สอด (CVM Maesod)
            โดยรับผิดชอบในการออกแบบและพัฒนาระบบนิเทศการฝึกงานของนักศึกษา
            ระบบจัดการข้อมูลข่าวสารและประชาสัมพันธ์
            รวมถึงระบบรับสมัครนักเรียนนักศึกษาใหม่
            ผลงานนี้ได้รับการเผยแพร่และใช้งานจริงในสถานศึกษา
            ทำให้ได้เรียนรู้การพัฒนาระบบที่ตอบโจทย์ผู้ใช้งานจริง การทำงานเป็นทีม
            และการแก้ไขปัญหาต่างๆ ที่เกิดขึ้นระหว่างการพัฒนา
          </p>
        </div>
      </div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ระบบจัดการหลังบ้านร้านค้าออนไลน์</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้มีโอกาสพัฒนาระบบจัดการหลังบ้านร้านค้าออนไลน์
            โดยรับผิดชอบในการออกแบบและพัฒนาระบบทั้งหมด รวมถึงระบบจัดการภาษี
            การออกใบเสนอราคา ใบกำกับภาษี และเอกสารทางการเงินต่างๆ
            ระบบสามารถคำนวณภาษีมูลค่าเพิ่ม จัดการสต็อกสินค้า
            และออกรายงานสรุปยอดขาย
            ผลงานนี้ช่วยให้ร้านค้าสามารถบริหารจัดการงานเอกสารและการเงินได้อย่างมีประสิทธิภาพมากขึ้น
            ทำให้ได้เรียนรู้การพัฒนาระบบที่ต้องการความแม่นยำสูงและการทำงานร่วมกับผู้ประกอบการ
          </p>
        </div>
      </div>

      <div className="part">2023 / 2566</div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ฝึกงานที่โรงพยาบาลแม่สอด</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้มีโอกาสฝึกงานที่โรงพยาบาลแม่สอด โดยได้พัฒนาระบบภายในหลายส่วน
            ได้แก่ ระบบจัดการซ่อมบำรุง ระบบยื่นขอเอกสาร ระบบยืม-คืนอุปกรณ์
            และระบบจัดการเลขครุภัณฑ์
            ซึ่งช่วยเพิ่มประสิทธิภาพในการทำงานของเจ้าหน้าที่
            ลดขั้นตอนการทำงานที่ซ้ำซ้อน และช่วยในการติดตามสถานะงานต่างๆ
            ได้อย่างมีระบบ
            การฝึกงานครั้งนี้ทำให้ได้เรียนรู้การทำงานในองค์กรขนาดใหญ่
            การวิเคราะห์ความต้องการของผู้ใช้
            และการพัฒนาระบบที่ตอบโจทย์การใช้งานจริง
          </p>
        </div>
      </div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ออกแบบหน้าเว็บไซต์ข้อมูลข่าวสาร</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ในปี 2566
            ผมได้มีโอกาสเข้าร่วมพัฒนาเว็บไซต์ให้กับวิทยาลัยเทคนิคแม่สอด (Maesod
            Technical College) โดยรับผิดชอบในส่วนของการออกแบบ
            ผลงานนี้ได้รับการเผยแพร่อย่างเป็นทางการ
            ทำให้ได้เรียนรู้และพัฒนาทักษะการทำงานเป็นทีม การจัดการโครงการ
            และการแก้ไขปัญหาต่างๆ ที่เกิดขึ้นระหว่างการพัฒนา
          </p>
        </div>
      </div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ระบบจัดการการรับสมัครนักเรียน / นักศึกษา</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้พัฒนาระบบจัดการการรับสมัครนักเรียน /
            นักศึกษาเป็นโปรเจ็คจบการศึกษาระดับ ปวช.3 โดยใช้ PHP, MySQL และ
            Bootstrap 5 ในการพัฒนา ระบบนี้ช่วยให้อาจารย์และนักศึกษา
            สามารถจัดการข้อมูลการสมัครเรียน ติดตามความคืบหน้า
            และจัดเก็บเอกสารที่เกี่ยวข้องได้อย่างเป็นระบบ ผมได้พัฒนาฟีเจอร์ต่างๆ
            เช่น ระบบสมาชิก ระบบอัพโหลดไฟล์ ระบบแจ้งเตือน และหน้าแสดงผลข้อมูล
            โปรเจ็คนี้ทำให้ผมได้เรียนรู้การพัฒนาเว็บแอปพลิเคชันแบบ Full-stack
            การออกแบบฐานข้อมูล และการสร้าง UI/UX ที่ใช้งานง่าย
            ซึ่งได้รับผลตอบรับที่ดีจากผู้ใช้งานทั้งอาจารย์และนักศึกษา
          </p>
        </div>
      </div>

      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1 id="experience">ระบบรวบรวมโปรเจ็คนักศึกษาและประเมินผล</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ในปี 2566
            ผมระบบรวบรวมและจัดแสดงผลงานโปรเจ็คของนักศึกษาสาขาคอมพิวเตอร์ธุรกิจ
            วิทยาลัยเทคนิคแม่สอด
            โดยระบบนี้ช่วยให้นักศึกษาสามารถนำเสนอผลงานของตนเองได้อย่างเป็นระบบ
            และยังเป็นแหล่งความรู้สำหรับรุ่นน้องที่สนใจศึกษาต่อในสาขานี้
            ผมได้พัฒนาระบบจัดการเนื้อหา ระบบอัพโหลดไฟล์
            และระบบแสดงผลที่เป็นมิตรต่อผู้ใช้ ใช้เทคโนโลยี PHP, MySQL,
            JavaScript และ Bootstrap ในการพัฒนา
            ทำให้ได้เรียนรู้การออกแบบระบบที่ตอบโจทย์การใช้งานจริง
            และการจัดการฐานข้อมูลที่มีประสิทธิภาพ
          </p>
        </div>
      </div>

      <div className="part">2022 / 2565</div>
      <div className="container-content">
        <div className="left-section">
          <div className="content-title">
            <h1>Home Care System</h1>
          </div>
        </div>
        <div className="content-text">
          <p>
            ผมได้มีโอกาสร่วมพัฒนาระบบติดตาม Home Care สำหรับผู้ป่วยโควิด-19
            ที่รักษาตัวที่บ้าน (Home Isolation) ร่วมกับพี่ๆ เพื่อนๆ และคุณครู
            ซึ่งเป็นโครงการความร่วมมือ (MOU) กับโรงพยาบาลแม่สอด
            โดยระบบสามารถประมวลผลและแบ่งระดับความรุนแรงของโรคได้ 3 ระดับ
            ตามเกณฑ์ของสาธารณสุข ได้แก่ ระดับสีเขียว สีเหลือง และสีแดง
            ระบบนี้ช่วยให้บุคลากรทางการแพทย์สามารถติดตามอาการของผู้ป่วยได้อย่างมีประสิทธิภาพ
            มีการเชื่อมต่อกับ LINE Official Account
            เพื่อแจ้งนัดหมายการเอกซเรย์ปอดและการเข้ารับการรักษา
            ผู้ป่วยสามารถบันทึกผล ATK และรายงานอาการประจำวันผ่านระบบได้
            ภายใต้การควบคุมของแพทย์และบุคลากรทางการแพทย์
            ทำให้มีความแม่นยำในการแบ่งกลุ่มอาการและสามารถเข้าช่วยเหลือผู้ป่วยได้ทันท่วงที
          </p>
        </div>
      </div>
    </>
  );
}

export default Content;
