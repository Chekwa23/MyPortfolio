import React, { Component } from 'react';
import { Button, Container, ProgressBar, Row, Col} from 'react-bootstrap';
import headshot from "./images/headshot.jpg"
import spaceStars from "./images/spaceStars.jpg"

class App extends Component{
  constructor(){
    super();

    const schoolIcon = "fas fa-graduation-cap fa-3x position-absolute";
    const workIcon = "fas fa-briefcase fa-3x position-absolute";
    this.state = {
      skills: {
        "Java": 80,
        "C/C++": 70,
        "Python": 50,
        "HTML/CSS": 60,
        "React.js": 80,
        "Spring Boot framework": 30,
        "mySQL (DBMS)": 70,
        "Bootstrap and ReactBootstrap framework": 90,
        "Node.js": 10
      },

      school: {
        1: {
          position: "Bachelor of Science in Software Engineering",
          duration: "Jan 2019 — Present",
          icon: schoolIcon,
          name: "Iowa State University",
          description: "CGPA: 3.68/4.0 Expected graduation date: August 2023"
        },
        2: {
          position: "High School",
          duration: "September 2009 — July 2015",
          icon: schoolIcon,
          name: "Unique Heights Junior and Senior High School",
          description: "Graduated on the Honors Roll as an A student "
        }
      },

      work: {
        1: {
          position: "Software Developer (Intern)",
          duration: "December 2020 — Present",
          icon: workIcon,
          name: "Seecking",
          description: "Developing front end website architecture. |Designing user interactions on web pages. |Seeing through a project from conception to finished product. |Meeting both technical and consumer needs"
        },
        2: {
          position: "COMS228 Teacher's Assistant (Data Structures and algorithms) ",
          duration: "August 2020 — Present",
          icon: workIcon,
          name: "ISU Faculty of Engineering",
          description: "Organize and handle recitations for the course. |Understand the material in order to explain better to the students. |Grade assignments and exams."
        },
        3: {
          position: "Hall Desk Assistant",
          duration: "August 2019 — Present",
          icon: workIcon,
          name: "Department of Residence ISU",
          description: "Filling and sorting of documents and Logging in of mails and packages. |Attending and offering needed services to residents when necessary."
        },
        4: {
          position: "Student Supervisor",
          duration: "January 2019 — October 2019",
          icon: workIcon,
          name: "ISU Dining",
          description: "Develop my leadership skills while training and supervising students who work with me. |Improve my customer relations skills, through attending and communicating to various guests and customers"
        }
      }
    }
  }
  
  render(){
    return (
      <>
        {/* landing */}
        <div className="vh-100" style={{backgroundImage:`url(${headshot})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
          <div className="vh-100 d-flex justify-content-center align-items-center flex-column" style={{background:"linear-gradient(247.82deg, #692424 -8.45%, rgba(0, 0, 0, 0.25) 125.9%), linear-gradient(45.68deg, #0B141A 41.68%, rgba(0, 0, 0, 0.25) 70.84%)", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
            {/* intro */}
            <div className="text-center">
              <p className="" style={{fontSize:"28px", fontWeight:"700"}}>/*HELLO, WORLD*/</p>
              <p className="" style={{fontSize:"72px", fontWeight:"900", color:"white"}}><span style={{fontSize:"28px", fontWeight:"700"}}>{"<h1>"}</span> I'm Lucas Chekwa <span style={{fontSize:"28px", fontWeight:"700"}}>{"</h1>"}</span></p>
              <p className="" style={{fontSize:"24px", fontWeight:"600"}}>| Web Developer | Software Engineer | Student |</p>
              <Button className="mt-4" variant="outline-danger"><i className="fas fa-angle-down"/><span className="mx-4">Interested?</span><i className="fas fa-angle-down"/></Button>
            </div>
            {/* socials */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
              <a href="https://github.com/Chekwa23" style={{color:"#1f1e1e"}}><i className="fab fa-github fa-3x mx-4"/></a> 
              <a href="https://www.instagram.com/_chekwa/" style={{color:"#1f1e1e"}}><i className="fab fa-instagram fa-3x mx-4"/></a>
              <a href="https://www.linkedin.com/in/lucas-onwuchekwa-4938201a3/" style={{color:"#1f1e1e"}}><i className="fab fa-linkedin-in fa-3x mx-4"/></a>
              <a href="https://www.snapchat.com/add/lucstar_chekwa" style={{color:"#1f1e1e"}}><i class="fab fa-snapchat-ghost fa-3x mx-4"/></a>
            </div>
          </div>
        </div>
        {/* about me */}
        <div className="">
          <Container className="text-center">
            <div>
              <p style={{color:"red"}}>About Me</p>
              <p className="m-0">Linkedin</p>
              <p>Software Engineering student looking for opportunities to forge connections with bright minds through internships or volunteering and possibly long term jobs. </p>
              <p className="m-0">Github</p>
              <p>A Software Engineer with bigger dreams... keep up!</p>
              <p className="m-0">Instagram </p>
              <p> Software Engineer #Perfectionist... #OVO to #OPO... #Cyclone !</p>
              <hr/>
              <p>So yea... I am a student, majoring in Software Engineering with a minor in Cyber Security at Iowa State University. Currently a Junior but I would definitely keep you updated!</p>
              <hr/>
            </div>
            {/* info */}
            <div>
              <p>FULL NAME: Lucas Onwuchekwa</p>
              <p>PREFERRED NAME: #Chekwa</p>
              <p>BIRTHDAY: 23rd October</p>
              <p>PROFFESION: Software Engineering Student</p>
              <p>EMAIL: lucaso@iastate.edu</p>
            </div>
            {/* skills */}
            <div>
              <p>Skills</p>
              <Container className="" style={{padding:"0 20%"}}>
                {
                  Object.keys(this.state.skills).map((skill, index) => (
                    <SkillBar key={index} skillName={skill} level={this.state.skills[skill]}></SkillBar>
                  ))
                }
              </Container>
            </div>
          </Container>
        </div>
        {/* history */}
        <div className="">
          <Container>
            <div className="text-center">
              <p>Resume</p>
              <p>While gathering knowledge through various activities I have...</p>
            </div>
            {/* school */}
            <div>
              <p className="text-center"><i className="fas fa-angle-down"/> Studied at <i className="fas fa-angle-down"/></p>
              <div className="mb-5">
                <div style={{background:""}}>
                  {
                    Object.keys(this.state.school).map((school, index) => (
                      <SchoolAndWork key={index} position={this.state.school[school].position} duration={this.state.school[school].duration} icon={this.state.school[school].icon} name={this.state.school[school].name} description={this.state.school[school].description} />
                    ))
                  }
                </div>
              </div>
            </div>
            {/* work experience */}
            <div>
              <p className="text-center"><i className="fas fa-angle-down"/> Worked at <i className="fas fa-angle-down"/></p>
              <div className="mb-5">
                <div style={{background:""}}>
                  {
                    Object.keys(this.state.work).map((work, index) => (
                      <SchoolAndWork key={index} position={this.state.work[work].position} duration={this.state.work[work].duration} icon={this.state.work[work].icon} name={this.state.work[work].name} description={this.state.work[work].description} />
                    ))
                  }
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* projects */}
        <div>
          <Container className="text-center mb-5">
            <p>I'm sure by now you'd be thinking I'm all talk. Why dont you check out my projects.</p>
            <Button className="mt-4" variant="outline-danger"><i className="fas fa-angle-down"/><span className="mx-4">Projects</span><i className="fas fa-angle-down"/></Button>
          </Container>
        </div>
        {/* footer */}
        <div className="" style={{backgroundColor:"#692424", bottom:"0", height:"20vh"}}>
          hello
        </div>
      </>
    );
  }
}

export default App;


function SkillBar(props) {
  return (
    <>
      <div className="text-start">
        <p className="m-0">{props.skillName}</p>
        <ProgressBar animated variant="danger" now={props.level} label={props.level+"%"} />
      </div>
    </>
  )
}

function SchoolAndWork(props) {
  return (
    <>
      <div className="px-4">
        {/* <Row className="pb-5 position-relative">
          <Col className="text-end" >
            <p>{props.position}</p>
            <p>{props.duration}</p>
          </Col>
          <Col >
            <div className="position-absolute start-50 translate-middle-x" style={{width:"2px", height:"100%", backgroundColor:"grey", zIndex:"0"}}></div>
            <i className={props.icon} style={{zIndex:"5"}}></i>
          </Col>
          <Col className="text-start">
            <p>{props.name}</p>
            <p>{props.description}</p>
          </Col>
        </Row> */}
        <Row className="pb-5 position-relative">
          <Col sm={3} md={3} xs={3} lg={3}>
            <div className="position-absolute" style={{width:"2px", height:"100%", backgroundColor:"grey", zIndex:"0", left:"32px"}}></div>
            <i className={props.icon} style={{zIndex:"5"}}></i>
          </Col>
          <Col className="text-start">
            <p>{props.duration}</p>
            <p>{props.name}</p>
            <p>{props.position}</p>
            <p className="">{props.description}</p>
            <hr/>
          </Col>
        </Row>
      </div>
    </>
  )
}
