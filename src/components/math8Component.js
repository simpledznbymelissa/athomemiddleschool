import React from "react"
import ToggleSwitch from "../components/checkbox"
import "../styles/styles.css"
import Video from "../components/video"
import { Link } from "gatsby"
import Confetti from "./confetti"

const Math8Component = ({ data }) => {

  const [selectedMath1, setSelectedMath1] = React.useState(localStorage.getItem("math8-1") === "true")
  const [selectedMath2, setSelectedMath2] = React.useState(localStorage.getItem("math8-2") === "true")
  const [selectedMath3, setSelectedMath3] = React.useState(localStorage.getItem("math8-3") === "true")
  const [selectedMath4, setSelectedMath4] = React.useState(localStorage.getItem("math8-4") === "true")
  const [selectedMath5, setSelectedMath5] = React.useState(localStorage.getItem("math8-5") === "true")
  const [selectedMath6, setSelectedMath6] = React.useState(localStorage.getItem("math8-6") === "true")
  const [selectedMath7, setSelectedMath7] = React.useState(localStorage.getItem("math8-7") === "true")
  const [selectedMath8, setSelectedMath8] = React.useState(localStorage.getItem("math8-8") === "true")
  const [selectedMath9, setSelectedMath9] = React.useState(localStorage.getItem("math8-9") === "true")
  const [selectedMath10, setSelectedMath10] = React.useState(localStorage.getItem("math8-10") === "true")
  const [selectedMath11, setSelectedMath11] = React.useState(localStorage.getItem("math8-11") === "true")
  const [selectedMath12, setSelectedMath12] = React.useState(localStorage.getItem("math8-12") === "true")
  const [selectedMath13, setSelectedMath13] = React.useState(localStorage.getItem("math8-13") === "true")
  const [selectedMath14, setSelectedMath14] = React.useState(localStorage.getItem("math8-14") === "true")
  const [selectedMath15, setSelectedMath15] = React.useState(localStorage.getItem("math8-15") === "true")
  const [selectedMath16, setSelectedMath16] = React.useState(localStorage.getItem("math8-16") === "true")
  const [selectedMath17, setSelectedMath17] = React.useState(localStorage.getItem("math8-17") === "true")
  const [selectedMath18, setSelectedMath18] = React.useState(localStorage.getItem("math8-18") === "true")
  const [selectedMath19, setSelectedMath19] = React.useState(localStorage.getItem("math8-19") === "true")
  const [selectedMath20, setSelectedMath20] = React.useState(localStorage.getItem("math8-20") === "true")
  const [selectedMath21, setSelectedMath21] = React.useState(localStorage.getItem("math8-21") === "true")
  const [selectedMath22, setSelectedMath22] = React.useState(localStorage.getItem("math8-22") === "true")
  const [selectedMath23, setSelectedMath23] = React.useState(localStorage.getItem("math8-23") === "true")
  const [selectedMath24, setSelectedMath24] = React.useState(localStorage.getItem("math8-24") === "true")
  const [selectedMath25, setSelectedMath25] = React.useState(localStorage.getItem("math8-25") === "true")
  const [selectedMath26, setSelectedMath26] = React.useState(localStorage.getItem("math8-26") === "true")
  const [selectedMath27, setSelectedMath27] = React.useState(localStorage.getItem("math8-27") === "true")
  const [selectedMath28, setSelectedMath28] = React.useState(localStorage.getItem("math8-28") === "true")
  const [selectedMath29, setSelectedMath29] = React.useState(localStorage.getItem("math8-29") === "true")
  const [selectedMath30, setSelectedMath30] = React.useState(localStorage.getItem("math8-30") === "true")
  const [selectedMath31, setSelectedMath31] = React.useState(localStorage.getItem("math8-31") === "true")
  const [selectedMath32, setSelectedMath32] = React.useState(localStorage.getItem("math8-32") === "true")
  const [selectedMath33, setSelectedMath33] = React.useState(localStorage.getItem("math8-33") === "true")
  const [selectedMath34, setSelectedMath34] = React.useState(localStorage.getItem("math8-34") === "true")
  const [selectedMath35, setSelectedMath35] = React.useState(localStorage.getItem("math8-35") === "true")
  const [selectedMath36, setSelectedMath36] = React.useState(localStorage.getItem("math8-36") === "true")
  const [selectedMath37, setSelectedMath37] = React.useState(localStorage.getItem("math8-37") === "true")
  const [selectedMath38, setSelectedMath38] = React.useState(localStorage.getItem("math8-38") === "true")
  const [selectedMath39, setSelectedMath39] = React.useState(localStorage.getItem("math8-39") === "true")
  const [selectedMath40, setSelectedMath40] = React.useState(localStorage.getItem("math8-40") === "true")
  const [selectedMath41, setSelectedMath41] = React.useState(localStorage.getItem("math8-41") === "true")
  const [selectedMath42, setSelectedMath42] = React.useState(localStorage.getItem("math8-42") === "true")
  const [selectedMath43, setSelectedMath43] = React.useState(localStorage.getItem("math8-43") === "true")
  const [selectedMath44, setSelectedMath44] = React.useState(localStorage.getItem("math8-44") === "true")
  const [selectedMath45, setSelectedMath45] = React.useState(localStorage.getItem("math8-45") === "true")
  const [selectedMath46, setSelectedMath46] = React.useState(localStorage.getItem("math8-46") === "true")
  const [selectedMath47, setSelectedMath47] = React.useState(localStorage.getItem("math8-47") === "true")
  const [selectedMath48, setSelectedMath48] = React.useState(localStorage.getItem("math8-48") === "true")
  const [selectedMath49, setSelectedMath49] = React.useState(localStorage.getItem("math8-49") === "true")
  const [selectedMath50, setSelectedMath50] = React.useState(localStorage.getItem("math8-50") === "true")
  const [selectedMath51, setSelectedMath51] = React.useState(localStorage.getItem("math8-51") === "true")
  const [selectedMath52, setSelectedMath52] = React.useState(localStorage.getItem("math8-52") === "true")
  const [selectedMath53, setSelectedMath53] = React.useState(localStorage.getItem("math8-53") === "true")
  const [selectedMath54, setSelectedMath54] = React.useState(localStorage.getItem("math8-54") === "true")
  const [selectedMath55, setSelectedMath55] = React.useState(localStorage.getItem("math8-55") === "true")
  const [selectedMath56, setSelectedMath56] = React.useState(localStorage.getItem("math8-56") === "true")
  const [selectedMath57, setSelectedMath57] = React.useState(localStorage.getItem("math8-57") === "true")
  const [selectedMath58, setSelectedMath58] = React.useState(localStorage.getItem("math8-58") === "true")
  const [selectedMath59, setSelectedMath59] = React.useState(localStorage.getItem("math8-59") === "true")
  const [selectedMath60, setSelectedMath60] = React.useState(localStorage.getItem("math8-60") === "true")
  const [selectedMath61, setSelectedMath61] = React.useState(localStorage.getItem("math8-61") === "true")
  const [selectedMath62, setSelectedMath62] = React.useState(localStorage.getItem("math8-62") === "true")
  const [selectedMath63, setSelectedMath63] = React.useState(localStorage.getItem("math8-63") === "true")
  const [selectedMath64, setSelectedMath64] = React.useState(localStorage.getItem("math8-64") === "true")
  const [selectedMath65, setSelectedMath65] = React.useState(localStorage.getItem("math8-65") === "true")
  const [selectedMath66, setSelectedMath66] = React.useState(localStorage.getItem("math8-66") === "true")
  const [selectedMath67, setSelectedMath67] = React.useState(localStorage.getItem("math8-67") === "true")
  const [selectedMath68, setSelectedMath68] = React.useState(localStorage.getItem("math8-68") === "true")
  const [selectedMath69, setSelectedMath69] = React.useState(localStorage.getItem("math8-69") === "true")
  const [selectedMath70, setSelectedMath70] = React.useState(localStorage.getItem("math8-70") === "true")
  const [selectedMath71, setSelectedMath71] = React.useState(localStorage.getItem("math8-71") === "true")
  const [selectedMath72, setSelectedMath72] = React.useState(localStorage.getItem("math8-72") === "true")
  const [selectedMath73, setSelectedMath73] = React.useState(localStorage.getItem("math8-73") === "true")
  const [selectedMath74, setSelectedMath74] = React.useState(localStorage.getItem("math8-74") === "true")
  const [selectedMath75, setSelectedMath75] = React.useState(localStorage.getItem("math8-75") === "true")
  const [selectedMath76, setSelectedMath76] = React.useState(localStorage.getItem("math8-76") === "true")
  const [selectedMath77, setSelectedMath77] = React.useState(localStorage.getItem("math8-77") === "true")
  const [selectedMath78, setSelectedMath78] = React.useState(localStorage.getItem("math8-78") === "true")
  const [selectedMath79, setSelectedMath79] = React.useState(localStorage.getItem("math8-79") === "true")
  const [selectedMath80, setSelectedMath80] = React.useState(localStorage.getItem("math8-80") === "true")
  const [selectedMath81, setSelectedMath81] = React.useState(localStorage.getItem("math8-81") === "true")
  const [selectedMath82, setSelectedMath82] = React.useState(localStorage.getItem("math8-82") === "true")
  const [selectedMath83, setSelectedMath83] = React.useState(localStorage.getItem("math8-83") === "true")
  const [selectedMath84, setSelectedMath84] = React.useState(localStorage.getItem("math8-84") === "true")
  const [selectedMath85, setSelectedMath85] = React.useState(localStorage.getItem("math8-85") === "true")
  const [selectedMath86, setSelectedMath86] = React.useState(localStorage.getItem("math8-86") === "true")
  const [selectedMath87, setSelectedMath87] = React.useState(localStorage.getItem("math8-87") === "true")
  const [selectedMath88, setSelectedMath88] = React.useState(localStorage.getItem("math8-88") === "true")
  const [selectedMath89, setSelectedMath89] = React.useState(localStorage.getItem("math8-89") === "true")
  const [selectedMath90, setSelectedMath90] = React.useState(localStorage.getItem("math8-90") === "true")
  const [selectedMath91, setSelectedMath91] = React.useState(localStorage.getItem("math8-91") === "true")
  const [selectedMath92, setSelectedMath92] = React.useState(localStorage.getItem("math8-92") === "true")
  const [selectedMath93, setSelectedMath93] = React.useState(localStorage.getItem("math8-93") === "true")
  const [selectedMath94, setSelectedMath94] = React.useState(localStorage.getItem("math8-94") === "true")
  const [selectedMath95, setSelectedMath95] = React.useState(localStorage.getItem("math8-95") === "true")
  const [selectedMath96, setSelectedMath96] = React.useState(localStorage.getItem("math8-96") === "true")
  const [selectedMath97, setSelectedMath97] = React.useState(localStorage.getItem("math8-97") === "true")
  const [selectedMath98, setSelectedMath98] = React.useState(localStorage.getItem("math8-98") === "true")
  const [selectedMath99, setSelectedMath99] = React.useState(localStorage.getItem("math8-99") === "true")
  const [selectedMath100, setSelectedMath100] = React.useState(localStorage.getItem("math8-100") === "true")
  const [selectedMath101, setSelectedMath101] = React.useState(localStorage.getItem("math8-101") === "true")
  const [selectedMath102, setSelectedMath102] = React.useState(localStorage.getItem("math8-102") === "true")
  const [selectedMath103, setSelectedMath103] = React.useState(localStorage.getItem("math8-103") === "true")
  const [selectedMath104, setSelectedMath104] = React.useState(localStorage.getItem("math8-104") === "true")
  const [selectedMath105, setSelectedMath105] = React.useState(localStorage.getItem("math8-105") === "true")
  const [selectedMath106, setSelectedMath106] = React.useState(localStorage.getItem("math8-106") === "true")
  const [selectedMath107, setSelectedMath107] = React.useState(localStorage.getItem("math8-107") === "true")
  const [selectedMath108, setSelectedMath108] = React.useState(localStorage.getItem("math8-108") === "true")
  const [selectedMath109, setSelectedMath109] = React.useState(localStorage.getItem("math8-109") === "true")
  const [selectedMath110, setSelectedMath110] = React.useState(localStorage.getItem("math8-110") === "true")
  const [selectedMath111, setSelectedMath111] = React.useState(localStorage.getItem("math8-111") === "true")
  const [selectedMath112, setSelectedMath112] = React.useState(localStorage.getItem("math8-112") === "true")
  const [selectedMath113, setSelectedMath113] = React.useState(localStorage.getItem("math8-113") === "true")
  const [selectedMath114, setSelectedMath114] = React.useState(localStorage.getItem("math8-114") === "true")
  const [selectedMath115, setSelectedMath115] = React.useState(localStorage.getItem("math8-115") === "true")
  const [selectedMath116, setSelectedMath116] = React.useState(localStorage.getItem("math8-116") === "true")
  const [selectedMath117, setSelectedMath117] = React.useState(localStorage.getItem("math8-117") === "true")
  const [selectedMath118, setSelectedMath118] = React.useState(localStorage.getItem("math8-118") === "true")
  const [selectedMath119, setSelectedMath119] = React.useState(localStorage.getItem("math8-119") === "true")
  const [selectedMath120, setSelectedMath120] = React.useState(localStorage.getItem("math8-120") === "true")
  const [selectedMath121, setSelectedMath121] = React.useState(localStorage.getItem("math8-121") === "true")
  const [selectedMath122, setSelectedMath122] = React.useState(localStorage.getItem("math8-122") === "true")
  const [selectedMath123, setSelectedMath123] = React.useState(localStorage.getItem("math8-123") === "true")
  const [selectedMath124, setSelectedMath124] = React.useState(localStorage.getItem("math8-124") === "true")
  const [selectedMath125, setSelectedMath125] = React.useState(localStorage.getItem("math8-125") === "true")
  const [selectedMath126, setSelectedMath126] = React.useState(localStorage.getItem("math8-126") === "true")
  const [selectedMath127, setSelectedMath127] = React.useState(localStorage.getItem("math8-127") === "true")
  const [selectedMath128, setSelectedMath128] = React.useState(localStorage.getItem("math8-128") === "true")
  const [selectedMath129, setSelectedMath129] = React.useState(localStorage.getItem("math8-129") === "true")
  const [selectedMath130, setSelectedMath130] = React.useState(localStorage.getItem("math8-130") === "true")
  const [selectedMath131, setSelectedMath131] = React.useState(localStorage.getItem("math8-131") === "true")
  const [selectedMath132, setSelectedMath132] = React.useState(localStorage.getItem("math8-132") === "true")
  const [selectedMath133, setSelectedMath133] = React.useState(localStorage.getItem("math8-133") === "true")
  const [selectedMath134, setSelectedMath134] = React.useState(localStorage.getItem("math8-134") === "true")
  const [selectedMath135, setSelectedMath135] = React.useState(localStorage.getItem("math8-135") === "true")
  const [selectedMath136, setSelectedMath136] = React.useState(localStorage.getItem("math8-136") === "true")
  const [selectedMath137, setSelectedMath137] = React.useState(localStorage.getItem("math8-137") === "true")
  const [selectedMath138, setSelectedMath138] = React.useState(localStorage.getItem("math8-138") === "true")
  const [selectedMath139, setSelectedMath139] = React.useState(localStorage.getItem("math8-139") === "true")
  const [selectedMath140, setSelectedMath140] = React.useState(localStorage.getItem("math8-140") === "true")
  const [selectedMath141, setSelectedMath141] = React.useState(localStorage.getItem("math8-141") === "true")
  const [selectedMath142, setSelectedMath142] = React.useState(localStorage.getItem("math8-142") === "true")
  const [selectedMath143, setSelectedMath143] = React.useState(localStorage.getItem("math8-143") === "true")
  const [selectedMath144, setSelectedMath144] = React.useState(localStorage.getItem("math8-144") === "true")
  const [selectedMath145, setSelectedMath145] = React.useState(localStorage.getItem("math8-145") === "true")
  const [selectedMath146, setSelectedMath146] = React.useState(localStorage.getItem("math8-146") === "true")
  const [selectedMath147, setSelectedMath147] = React.useState(localStorage.getItem("math8-147") === "true")
  const [selectedMath148, setSelectedMath148] = React.useState(localStorage.getItem("math8-148") === "true")
  const [selectedMath149, setSelectedMath149] = React.useState(localStorage.getItem("math8-149") === "true")
  const [selectedMath150, setSelectedMath150] = React.useState(localStorage.getItem("math8-150") === "true")
  const [selectedMath151, setSelectedMath151] = React.useState(localStorage.getItem("math8-151") === "true")
  const [selectedMath152, setSelectedMath152] = React.useState(localStorage.getItem("math8-152") === "true")
  const [selectedMath153, setSelectedMath153] = React.useState(localStorage.getItem("math8-153") === "true")
  const [selectedMath154, setSelectedMath154] = React.useState(localStorage.getItem("math8-154") === "true")
  const [selectedMath155, setSelectedMath155] = React.useState(localStorage.getItem("math8-155") === "true")
  const [selectedMath156, setSelectedMath156] = React.useState(localStorage.getItem("math8-156") === "true")
  const [selectedMath157, setSelectedMath157] = React.useState(localStorage.getItem("math8-157") === "true")
  const [selectedMath158, setSelectedMath158] = React.useState(localStorage.getItem("math8-158") === "true")
  const [selectedMath159, setSelectedMath159] = React.useState(localStorage.getItem("math8-159") === "true")
  const [selectedMath160, setSelectedMath160] = React.useState(localStorage.getItem("math8-160") === "true")
  const [selectedMath161, setSelectedMath161] = React.useState(localStorage.getItem("math8-161") === "true")
  const [selectedMath162, setSelectedMath162] = React.useState(localStorage.getItem("math8-162") === "true")
  const [selectedMath163, setSelectedMath163] = React.useState(localStorage.getItem("math8-163") === "true")
  const [selectedMath164, setSelectedMath164] = React.useState(localStorage.getItem("math8-164") === "true")
  const [selectedMath165, setSelectedMath165] = React.useState(localStorage.getItem("math8-165") === "true")
  const [selectedMath166, setSelectedMath166] = React.useState(localStorage.getItem("math8-166") === "true")
  const [selectedMath167, setSelectedMath167] = React.useState(localStorage.getItem("math8-167") === "true")
  const [selectedMath168, setSelectedMath168] = React.useState(localStorage.getItem("math8-168") === "true")
  const [selectedMath169, setSelectedMath169] = React.useState(localStorage.getItem("math8-169") === "true")
  const [selectedMath170, setSelectedMath170] = React.useState(localStorage.getItem("math8-170") === "true")
  const [selectedMath171, setSelectedMath171] = React.useState(localStorage.getItem("math8-171") === "true")
  const [selectedMath172, setSelectedMath172] = React.useState(localStorage.getItem("math8-172") === "true")
  const [selectedMath173, setSelectedMath173] = React.useState(localStorage.getItem("math8-173") === "true")
  const [selectedMath174, setSelectedMath174] = React.useState(localStorage.getItem("math8-174") === "true")
  const [selectedMath175, setSelectedMath175] = React.useState(localStorage.getItem("math8-175") === "true")
  const [selectedMath176, setSelectedMath176] = React.useState(localStorage.getItem("math8-176") === "true")
  const [selectedMath177, setSelectedMath177] = React.useState(localStorage.getItem("math8-177") === "true")
  const [selectedMath178, setSelectedMath178] = React.useState(localStorage.getItem("math8-178") === "true")
  const [selectedMath179, setSelectedMath179] = React.useState(localStorage.getItem("math8-179") === "true")
  const [selectedMath180, setSelectedMath180] = React.useState(localStorage.getItem("math8-180") === "true")
  const [selectedMath181, setSelectedMath181] = React.useState(localStorage.getItem("math8-181") === "true")

  return (
    <form>

      <section className="block-circles">
        <div className="circle one"
             style={{ animationDuration: "3s", backgroundColor: '#98d9de', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="circle two" style={{ animationDuration: "3s", backgroundColor: '#98d9de', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro">Math</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/eighth" className='gradeLink'><h2 className="hero">8th Grade</h2></Link>
          </div>
        </div>
      </section>

    <section className="section math-section raise-top">
    <div className="section-content">
      <h1 className="section-title fadeIn">Course Summary</h1>
      <p className="fadeIn">8th Grade Math is aligned to the Common Core and covers Numbers and operations, Solving equations with one unknown, Linear equations and functions, Systems of equations, Geometry, Geometric transformations, Data and modeling, Algebra foundations, Solving equations & inequalities, Working with units, Linear equations & graphs, Forms of linear equations, and Systems of equations.  </p>
      <p className="topBottom">This course uses Khan Academy, Math Antics, TecMath, TedEd, and CK-12 Math. If you don't already have a free account on <a
          href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
          rel="noreferrer" target="_blank">Khan Academy, set one up by clicking here. </a> Khan will track your
        progress through 8th Grade Math.</p><br/>

    <h1 className="section-title daily-margin fadeIn" id="math">Daily Lessons</h1>
  <div className="md-content">

      <p className="margin-para fadeIn">If you don't already have one, <a
        href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
        rel="noreferrer" target="_blank"> set up a free account on Khan Academy </a>
        and begin the lesson below.<br/></p><br/>

      <span className="days">Lesson 1</span>
      <ToggleSwitch checked={selectedMath1}
                    id='math8-1'
                    label='Completed (Check this box after you finish the lesson below. It will help you keep track of where you are.)'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-1", `${e.target.checked}`)
                        setSelectedMath1(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of the lesson <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-repeating-decimals/v/converting-a-fraction-to-a-repeating-decimal"
        rel="noreferrer" target="_blank"> Repeating decimals</a></p>

      <span className="days">Lesson 2</span>
      <ToggleSwitch checked={selectedMath2}
                    id='math8-2'
                    label='Completed (Check this box after you finish the lesson below.)'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-2", `${e.target.checked}`)
                        setSelectedMath2(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-repeating-decimals/v/converting-a-fraction-to-a-repeating-decimal"
        rel="noreferrer" target="_blank"> Repeating decimals</a></p>
      <span className="days">Lesson 3</span>
      <ToggleSwitch checked={selectedMath3}
                    id='math8-3'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-3", `${e.target.checked}`)
                        setSelectedMath3(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete  at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-roots/v/introduction-to-square-roots"
        rel="noreferrer" target="_blank">Square roots & cube roots </a></p>
      <Video videoUrl="https://www.youtube.com/embed/nUyLnjgGumg"/>

      <span className="days">Lesson 4</span>
      <ToggleSwitch checked={selectedMath4}
                    id='math8-4'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-4", `${e.target.checked}`)
                        setSelectedMath4(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the
        remainder of <a
          href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-roots/v/introduction-to-square-roots"
          rel="noreferrer" target="_blank"> Square roots & cube roots</a></p>

      <span className="days">Lesson 5</span>
      <ToggleSwitch checked={selectedMath5}
                    id='math8-5'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-5", `${e.target.checked}`)
                        setSelectedMath5(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-irrational-numbers/v/introduction-to-rational-and-irrational-numbers"
        rel="noreferrer" target="_blank"> Irrational numbers</a></p>
      <span className="days">Lesson 6</span>
      <ToggleSwitch checked={selectedMath6}
                    id='math8-6'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-6", `${e.target.checked}`)
                        setSelectedMath6(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-irrational-numbers/v/introduction-to-rational-and-irrational-numbers"
        rel="noreferrer" target="_blank"> Irrational numbers</a></p>
      <span className="days">Lesson 7</span>
      <ToggleSwitch checked={selectedMath7}
                    id='math8-7'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-7", `${e.target.checked}`)
                        setSelectedMath7(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-approximating-irrational-numbers/v/approximating-square-roots-2"
        rel="noreferrer" target="_blank"> Approximating irrational numbers</a></p>
      <span className="days">Lesson 8</span>
      <ToggleSwitch checked={selectedMath8}
                    id='math8-8'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-8", `${e.target.checked}`)
                        setSelectedMath8(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-approximating-irrational-numbers/v/approximating-square-roots-2"
        rel="noreferrer" target="_blank"> Approximating irrational numbers</a></p>

      <span className="days">Lesson 9</span>
      <ToggleSwitch checked={selectedMath9}
                    id='math8-9'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-9", `${e.target.checked}`)
                        setSelectedMath9(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/exponents-with-negative-bases/v/exponents-with-negative-bases"
        rel="noreferrer" target="_blank"> Exponents with negative bases</a></p>
      <span className="days">Lesson 10</span>
      <ToggleSwitch checked={selectedMath10}
                    id='math8-10'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-10", `${e.target.checked}`)
                        setSelectedMath10(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/exponents-with-negative-bases/v/exponents-with-negative-bases"
        rel="noreferrer" target="_blank"> Exponents with negative bases</a></p>


      <span className="days">Lesson 11</span>
      <ToggleSwitch checked={selectedMath11}
                    id='math8-11'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-11", `${e.target.checked}`)
                        setSelectedMath11(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/exponent-properties-involving-products"
        rel="noreferrer" target="_blank"> Exponent properties intro</a></p>
      <p>Watch the video <b> An introduction to exponents and indices</b></p>
      <Video videoUrl="https://www.youtube.com/embed/n6Y9AEv6z6A"/>

      <span className="days">Lesson 12</span>
      <ToggleSwitch checked={selectedMath12}
                    id='math8-12'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-12", `${e.target.checked}`)
                        setSelectedMath12(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exponent-properties/v/exponent-properties-involving-products"
        rel="noreferrer" target="_blank"> Exponent properties intro</a></p>

      <span className="days">Lesson 13</span>
      <ToggleSwitch checked={selectedMath13}
                    id='math8-13'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-13", `${e.target.checked}`)
                        setSelectedMath13(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-pos-neg-exponents/v/negative-exponents"
        rel="noreferrer" target="_blank"> Negative exponents</a></p>

      <span className="days">Lesson 14</span>
      <ToggleSwitch checked={selectedMath14}
                    id='math8-14'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-14", `${e.target.checked}`)
                        setSelectedMath14(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-pos-neg-exponents/v/negative-exponents"
        rel="noreferrer" target="_blank"> Negative exponents</a></p>

      <span className="days">Lesson 15</span>
      <ToggleSwitch checked={selectedMath15}
                    id='math8-15'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-15", `${e.target.checked}`)
                        setSelectedMath15(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exp-prop-integers/v/multiplying-and-dividing-powers-with-integer-exponents"
        rel="noreferrer" target="_blank"> Exponent properties (integer exponents)</a></p>

      <span className="days">Lesson 16</span>
      <ToggleSwitch checked={selectedMath16}
                    id='math8-16'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-16", `${e.target.checked}`)
                        setSelectedMath16(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-exp-prop-integers/v/multiplying-and-dividing-powers-with-integer-exponents"
        rel="noreferrer" target="_blank"> Exponent properties (integer exponents)</a></p>

      <span className="days">Lesson 17</span>
      <ToggleSwitch checked={selectedMath17}
                    id='math8-17'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-17", `${e.target.checked}`)
                        setSelectedMath17(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-orders-of-magnitude/v/multiplying-multiples-of-powers-of-10"
        rel="noreferrer" target="_blank"> Working with powers of 10</a></p>

      <span className="days">Lesson 18</span>
      <ToggleSwitch checked={selectedMath18}
                    id='math8-18'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-18", `${e.target.checked}`)
                        setSelectedMath18(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-orders-of-magnitude/v/multiplying-multiples-of-powers-of-10"
        rel="noreferrer" target="_blank"> Working with powers of 10</a></p>

      <span className="days">Lesson 19</span>
      <ToggleSwitch checked={selectedMath19}
                    id='math8-19'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-19", `${e.target.checked}`)
                        setSelectedMath19(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete the first half of Math Antics - Scientific Notation,
        complete <a
          href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation/v/scientific-notation-i"
          rel="noreferrer" target="_blank"> Scientific notation intro</a></p>
      <Video videoUrl="https://www.youtube.com/embed/bXkewQ7WEdI"/>

      <span className="days">Lesson 20</span>
      <ToggleSwitch checked={selectedMath20}
                    id='math8-20'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-20", `${e.target.checked}`)
                        setSelectedMath20(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation/v/scientific-notation-i"
        rel="noreferrer" target="_blank"> Scientific notation intro</a></p>

      <span className="days">Lesson 21</span>
      <ToggleSwitch checked={selectedMath21} id='math8-21' label='Completed' onChange={
        (e) => {
          localStorage.setItem("math8-21", `${e.target.checked}`)
          setSelectedMath21(e.target.checked)
          console.log(e.target.checked)
        }}/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation-compu/v/multiplying-and-dividing-in-scientific-notation"
        rel="noreferrer" target="_blank"> Arithmetic with numbers in scientific notation</a></p>

      <span className="days">Lesson 22</span>
      <ToggleSwitch checked={selectedMath22}
                    id='math8-22'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-22", `${e.target.checked}`)
                        setSelectedMath22(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation-compu/v/multiplying-and-dividing-in-scientific-notation"
        rel="noreferrer" target="_blank"> Arithmetic with numbers in scientific notation </a></p>


      <span className="days">Lesson 23</span>
      <ToggleSwitch checked={selectedMath23}
                    id='math8-23'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-23", `${e.target.checked}`)
                        setSelectedMath23(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation-word-problems/v/calculating-red-blood-cells-in-the-body-using-scientific-notation"
        rel="noreferrer" target="_blank"> Scientific notation word problems</a></p>

      <span className="days">Lesson 24</span>
      <ToggleSwitch checked={selectedMath24}
                    id='math8-24'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-24", `${e.target.checked}`)
                        setSelectedMath24(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-scientific-notation-word-problems/v/calculating-red-blood-cells-in-the-body-using-scientific-notation"
        rel="noreferrer" target="_blank"> Scientific notation word problems</a></p>

      <span className="days">Lesson 25</span>
      <ToggleSwitch checked={selectedMath25}
                    id='math8-25'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-25", `${e.target.checked}`)
                        setSelectedMath25(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/test/cc-8th-numbers-operations-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 26</span>
      <ToggleSwitch checked={selectedMath26}
                    id='math8-26'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-26", `${e.target.checked}`)
                        setSelectedMath26(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, Simultaneous Equations, complete at least
        50% of <a
          href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/variables-on-both-sides/v/equations-3"
          rel="noreferrer" target="_blank"> Equations with variables on both sides</a></p>
      <Video videoUrl="https://www.youtube.com/embed/Lwto-lQzmec"/>
      <span className="days">Lesson 27</span>
      <ToggleSwitch checked={selectedMath27}
                    id='math8-27'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-27", `${e.target.checked}`)
                        setSelectedMath27(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/variables-on-both-sides/v/equations-3"
        rel="noreferrer" target="_blank">Equations with variables on both sides </a></p>

      <span className="days">Lesson 28</span>
      <ToggleSwitch checked={selectedMath28}
                    id='math8-28'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-28", `${e.target.checked}`)
                        setSelectedMath28(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/equations-with-parentheses/v/solving-equations-with-the-distributive-property"
        rel="noreferrer" target="_blank"> Equations with parentheses</a></p>
      <Video videoUrl="https://www.youtube.com/embed/NlpykbGDzF8"/>

      <span className="days">Lesson 29</span>
      <ToggleSwitch checked={selectedMath29}
                    id='math8-29'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-29", `${e.target.checked}`)
                        setSelectedMath29(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/equations-with-parentheses/v/solving-equations-with-the-distributive-property"
        rel="noreferrer" target="_blank"> Equations with parentheses</a></p>

      <span className="days">Lesson 30</span>
      <ToggleSwitch checked={selectedMath30}
                    id='math8-30'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-30", `${e.target.checked}`)
                        setSelectedMath30(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/number-of-solutions-to-linear-equations/v/number-of-solutions-to-linear-equations"
        rel="noreferrer" target="_blank"> Number of solutions to equations</a></p>

      <span className="days">Lesson 31</span>
      <ToggleSwitch checked={selectedMath31}
                    id='math8-31'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-31", `${e.target.checked}`)
                        setSelectedMath31(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/number-of-solutions-to-linear-equations/v/number-of-solutions-to-linear-equations"
        rel="noreferrer" target="_blank"> Number of solutions to equations</a></p>
      <Video videoUrl="https://www.youtube.com/embed/9PqygqYo0ck"/>

      <span className="days">Lesson 32</span>
      <ToggleSwitch checked={selectedMath32}
                    id='math8-32'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-32", `${e.target.checked}`)
                        setSelectedMath32(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/linear-equations-word-problems/v/sum-consecutive-integers"
        rel="noreferrer" target="_blank"> Equations word problems</a></p>

      <span className="days">Lesson 33</span>
      <ToggleSwitch checked={selectedMath33}
                    id='math8-33'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-33", `${e.target.checked}`)
                        setSelectedMath33(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/linear-equations-word-problems/v/sum-consecutive-integers"
        rel="noreferrer" target="_blank"> Equations word problems</a></p>

      <span className="days">Lesson 34</span>
      <ToggleSwitch checked={selectedMath34}
                    id='math8-34'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-34", `${e.target.checked}`)
                        setSelectedMath34(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations/test/cc-8th-solving-equations-unit-test?modal=1"
        rel="noreferrer" target="_blank">Unit Test </a></p>

      <span className="days">Lesson 35</span>
      <ToggleSwitch checked={selectedMath35}
                    id='math8-35'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-35", `${e.target.checked}`)
                        setSelectedMath35(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-graphing-prop-rel/v/comparing-proportional-relationships-exercise-2"
        rel="noreferrer" target="_blank"> Graphing proportional relationships</a></p>
      <Video videoUrl="https://www.youtube.com/embed/57aCP7Oiecs"/>

      <span className="days">Lesson 36</span>
      <ToggleSwitch checked={selectedMath36}
                    id='math8-36'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-36", `${e.target.checked}`)
                        setSelectedMath36(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-graphing-prop-rel/v/comparing-proportional-relationships-exercise-2"
        rel="noreferrer" target="_blank"> Graphing proportional relationships</a></p>

      <span className="days">Lesson 37</span>
      <ToggleSwitch checked={selectedMath37}
                    id='math8-37'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-37", `${e.target.checked}`)
                        setSelectedMath37(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete <a
        href="https://flexbooks.ck12.org/cbook/ck-12-interactive-middle-school-math-8-for-ccss/section/4.1/primary/lesson/graphing-proportional-relationships-msm8-ccss"
        rel="noreferrer" target="_blank"> Graphing Proportional Relationships</a> from CK-12's 8th Grade math. Complete the problems and "Practice."</p>

      <span className="days">Lesson 38</span>
      <ToggleSwitch checked={selectedMath38}
                    id='math8-38'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-38", `${e.target.checked}`)
                        setSelectedMath38(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete <a
        href="https://flexbooks.ck12.org/cbook/ck-12-interactive-middle-school-math-8-for-ccss/section/4.2/primary/lesson/constant-of-proportionality-in-different-representations-msm8-ccss"
        rel="noreferrer" target="_blank"> Constant of Proportionality in Different Representations </a> from CK-12's 8th Grade math. Complete the problems and "Practice."</p>

      <span className="days">Lesson 39</span>
      <ToggleSwitch checked={selectedMath39}
                    id='math8-39'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-39", `${e.target.checked}`)
                        setSelectedMath39(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-solutions-to-two-var-linear-equations/v/descartes-and-cartesian-coordinates"
        rel="noreferrer" target="_blank"> Solutions to linear equations</a></p>

      <span className="days">Lesson 40</span>
      <ToggleSwitch checked={selectedMath40}
                    id='math8-40'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-40", `${e.target.checked}`)
                        setSelectedMath40(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-solutions-to-two-var-linear-equations/v/descartes-and-cartesian-coordinates"
        rel="noreferrer" target="_blank"> Solutions to linear equations</a></p>

      <span className="days">Lesson 41</span>
      <ToggleSwitch checked={selectedMath41}
                    id='math8-41'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-41", `${e.target.checked}`)
                        setSelectedMath41(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope/v/introduction-to-slope"
        rel="noreferrer" target="_blank"> Slope</a></p>
      <Video videoUrl="https://www.youtube.com/embed/rpMu98yRk40"/>

      <span className="days">Lesson 42</span>
      <ToggleSwitch checked={selectedMath42}
                    id='math8-42'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-42", `${e.target.checked}`)
                        setSelectedMath42(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope/v/introduction-to-slope"
        rel="noreferrer" target="_blank"> Slope</a></p>

      <span className="days">Lesson 43</span>
      <ToggleSwitch checked={selectedMath43}
                    id='math8-43'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-43", `${e.target.checked}`)
                        setSelectedMath43(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/intro-slope-intercept-form/v/slope-intercept-form"
        rel="noreferrer" target="_blank"> Intro to slope-intercept form</a></p>

      <span className="days">Lesson 44</span>
      <ToggleSwitch checked={selectedMath44}
                    id='math8-44'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-44", `${e.target.checked}`)
                        setSelectedMath44(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/intro-slope-intercept-form/v/slope-intercept-form"
        rel="noreferrer" target="_blank"> Intro to slope-intercept form</a></p>

      <span className="days">Lesson 45</span>
      <ToggleSwitch checked={selectedMath45}
                    id='math8-45'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-45", `${e.target.checked}`)
                        setSelectedMath45(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope-intercept-form/v/graphing-a-line-in-slope-intercept-form"
        rel="noreferrer" target="_blank">Graphing slope-intercept form </a></p>

      <span className="days">Lesson 46</span>
      <ToggleSwitch checked={selectedMath46}
                    id='math8-46'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-46", `${e.target.checked}`)
                        setSelectedMath46(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-slope-intercept-form/v/graphing-a-line-in-slope-intercept-form"
        rel="noreferrer" target="_blank"> Graphing slope-intercept form</a></p>

      <span className="days">Lesson 47</span>
      <ToggleSwitch checked={selectedMath47}
                    id='math8-47'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-47", `${e.target.checked}`)
                        setSelectedMath47(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/write-slope-intercept-equations/v/graphs-using-slope-intercept-form"
        rel="noreferrer" target="_blank"> Writing slope-intercept equations</a></p>
      <Video videoUrl="https://www.youtube.com/embed/m9-_sxSU_WQ"/>

      <span className="days">Lesson 48</span>
      <ToggleSwitch checked={selectedMath48}
                    id='math8-48'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-48", `${e.target.checked}`)
                        setSelectedMath48(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/write-slope-intercept-equations/v/graphs-using-slope-intercept-form"
        rel="noreferrer" target="_blank">Writing slope-intercept equations </a></p>

      <span className="days">Lesson 49</span>
      <ToggleSwitch checked={selectedMath49}
                    id='math8-49'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-49", `${e.target.checked}`)
                        setSelectedMath49(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/what-is-a-function"
        rel="noreferrer" target="_blank"> Functions</a></p>

      <span className="days">Lesson 50</span>
      <ToggleSwitch checked={selectedMath50}
                    id='math8-50'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-50", `${e.target.checked}`)
                        setSelectedMath50(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/what-is-a-function"
        rel="noreferrer" target="_blank"> Functions</a></p>

      <span className="days">Lesson 51</span>
      <ToggleSwitch checked={selectedMath51}
                    id='math8-51'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-51", `${e.target.checked}`)
                        setSelectedMath51(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-linear-functions-modeling/v/interpreting-linear-graphs"
        rel="noreferrer" target="_blank"> Linear models </a></p>

      <span className="days">Lesson 52</span>
      <ToggleSwitch checked={selectedMath52}
                    id='math8-52'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-52", `${e.target.checked}`)
                        setSelectedMath52(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-linear-functions-modeling/v/interpreting-linear-graphs"
        rel="noreferrer" target="_blank"> Linear models </a></p>

      <span className="days">Lesson 53</span>
      <ToggleSwitch checked={selectedMath53}
                    id='math8-53'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-53", `${e.target.checked}`)
                        setSelectedMath53(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/compare-linear-fuctions/v/comparing-features-of-functions-1"
        rel="noreferrer" target="_blank"> Comparing linear functions</a></p>

      <span className="days">Lesson 54</span>
      <ToggleSwitch checked={selectedMath54}
                    id='math8-54'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-54", `${e.target.checked}`)
                        setSelectedMath54(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/compare-linear-fuctions/v/comparing-features-of-functions-1"
        rel="noreferrer" target="_blank"> Comparing linear functions</a></p>

      <span className="days">Lesson 55</span>
      <ToggleSwitch checked={selectedMath55}
                    id='math8-55'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-55", `${e.target.checked}`)
                        setSelectedMath55(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/constructing-linear-models-real-world/v/graphing-linear-functions-1"
        rel="noreferrer" target="_blank"> Constructing linear models for real-world relationships</a></p>

      <span className="days">Lesson 56</span>
      <ToggleSwitch checked={selectedMath56}
                    id='math8-56'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-56", `${e.target.checked}`)
                        setSelectedMath56(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/constructing-linear-models-real-world/v/graphing-linear-functions-1"
        rel="noreferrer" target="_blank"> Constructing linear models for real-world relationships</a></p>

      <span className="days">Lesson 57</span>
      <ToggleSwitch checked={selectedMath57}
                    id='math8-57'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-57", `${e.target.checked}`)
                        setSelectedMath57(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/testing-if-a-relationship-is-a-function"
        rel="noreferrer" target="_blank"> Recognizing functions</a></p>

      <span className="days">Lesson 58</span>
      <ToggleSwitch checked={selectedMath58}
                    id='math8-58'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-58", `${e.target.checked}`)
                        setSelectedMath58(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/cc-8th-function-intro/v/testing-if-a-relationship-is-a-function"
        rel="noreferrer" target="_blank"> Recognizing functions</a></p>

      <span className="days">Lesson 59</span>
      <ToggleSwitch checked={selectedMath59}
                    id='math8-59'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-59", `${e.target.checked}`)
                        setSelectedMath59(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/linear-nonlinear-functions-tut/v/recognizing-linear-functions"
        rel="noreferrer" target="_blank"> Linear and nonlinear functions </a></p>

      <span className="days">Lesson 60</span>
      <ToggleSwitch checked={selectedMath60}
                    id='math8-60'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-60", `${e.target.checked}`)
                        setSelectedMath60(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/linear-nonlinear-functions-tut/v/recognizing-linear-functions"
        rel="noreferrer" target="_blank"> Linear and nonlinear functions </a></p>

      <span className="days">Lesson 61</span>
      <ToggleSwitch checked={selectedMath61}
                    id='math8-61'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-61", `${e.target.checked}`)
                        setSelectedMath61(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/test/cc-8th-linear-equations-functions-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 62</span>
      <ToggleSwitch checked={selectedMath62}
                    id='math8-62'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-62", `${e.target.checked}`)
                        setSelectedMath62(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-overview/v/trolls-tolls-and-systems-of-equations"
        rel="noreferrer" target="_blank"> Intro to systems of equations</a></p>

      <span className="days">Lesson 63</span>
      <ToggleSwitch checked={selectedMath63}
                    id='math8-63'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-63", `${e.target.checked}`)
                        setSelectedMath63(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-overview/v/trolls-tolls-and-systems-of-equations"
        rel="noreferrer" target="_blank"> Intro to systems of equations</a></p>

      <span className="days">Lesson 64</span>
      <ToggleSwitch checked={selectedMath64}
                    id='math8-64'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-64", `${e.target.checked}`)
                        setSelectedMath64(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-graphically/a/systems-of-equations-with-graphing"
        rel="noreferrer" target="_blank"> Systems of equations with graphing</a></p>

      <span className="days">Lesson 65</span>
      <ToggleSwitch checked={selectedMath65}
                    id='math8-65'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-65", `${e.target.checked}`)
                        setSelectedMath65(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-graphically/a/systems-of-equations-with-graphing"
        rel="noreferrer" target="_blank"> Systems of equations with graphing</a></p>

      <span className="days">Lesson 66</span>
      <ToggleSwitch checked={selectedMath66}
                    id='math8-66'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-66", `${e.target.checked}`)
                        setSelectedMath66(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-with-substitution/v/the-substitution-method"
        rel="noreferrer" target="_blank">Solving systems with substitution </a></p>

      <span className="days">Lesson 67</span>
      <ToggleSwitch checked={selectedMath67}
                    id='math8-67'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-67", `${e.target.checked}`)
                        setSelectedMath67(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-with-substitution/v/the-substitution-method"
        rel="noreferrer" target="_blank"> Solving systems with substitution</a></p>

      <span className="days">Lesson 68</span>
      <ToggleSwitch checked={selectedMath68}
                    id='math8-68'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-68", `${e.target.checked}`)
                        setSelectedMath68(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>

      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-solutions/v/inconsistent-systems-of-equations"
        rel="noreferrer" target="_blank"> Number of solutions to systems of equations</a></p>


      <span className="days">Lesson 69</span>
      <ToggleSwitch checked={selectedMath69}
                    id='math8-69'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-69", `${e.target.checked}`)
                        setSelectedMath69(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-solutions/v/inconsistent-systems-of-equations"
        rel="noreferrer" target="_blank"> Number of solutions to systems of equations</a></p>

      <span className="days">Lesson 70</span>
      <ToggleSwitch checked={selectedMath70}
                    id='math8-70'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-70", `${e.target.checked}`)
                        setSelectedMath70(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-word-problems/v/ex-2-age-word-problem"
        rel="noreferrer" target="_blank">Systems of equations word problems </a></p>

      <span className="days">Lesson 71</span>
      <ToggleSwitch checked={selectedMath71}
                    id='math8-71'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-71", `${e.target.checked}`)
                        setSelectedMath71(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-word-problems/v/ex-2-age-word-problem"
        rel="noreferrer" target="_blank"> Systems of equations word problems</a></p>

      <span className="days">Lesson 72</span>
      <ToggleSwitch checked={selectedMath72}
                    id='math8-72'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-72", `${e.target.checked}`)
                        setSelectedMath72(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/test/cc-8th-systems-topic-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 73</span>
      <ToggleSwitch checked={selectedMath73}
                    id='math8-73'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-73", `${e.target.checked}`)
                        setSelectedMath73(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-angles-between-lines/v/angles-formed-by-parallel-lines-and-transversals"
        rel="noreferrer" target="_blank"> Angles between intersecting lines</a></p>

      <span className="days">Lesson 74</span>
      <ToggleSwitch checked={selectedMath74}
                    id='math8-74'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-74", `${e.target.checked}`)
                        setSelectedMath74(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-angles-between-lines/v/angles-formed-by-parallel-lines-and-transversals"
        rel="noreferrer" target="_blank"> Angles between intersecting lines</a></p>

      <span className="days">Lesson 75</span>
      <ToggleSwitch checked={selectedMath75}
                    id='math8-75'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-75", `${e.target.checked}`)
                        setSelectedMath75(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-triangle-angles/v/proof-sum-of-measures-of-angles-in-a-triangle-are-180"
        rel="noreferrer" target="_blank"> Triangle angles</a></p>
      <Video videoUrl="https://www.youtube.com/embed/z8_573LGKj4"/>

      <span className="days">Lesson 76</span>
      <ToggleSwitch checked={selectedMath76}
                    id='math8-76'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-76", `${e.target.checked}`)
                        setSelectedMath76(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-triangle-angles/v/proof-sum-of-measures-of-angles-in-a-triangle-are-180"
        rel="noreferrer" target="_blank"> Triangle angles</a></p>

      <span className="days">Lesson 77</span>
      <ToggleSwitch checked={selectedMath77}
                    id='math8-77'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-77", `${e.target.checked}`)
                        setSelectedMath77(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/the-pythagorean-theorem"
        rel="noreferrer" target="_blank"> Pythagorean theorem</a></p>
      <Video videoUrl="https://www.youtube.com/embed/WqhlG3Vakw8"/>

      <span className="days">Lesson 78</span>
      <ToggleSwitch checked={selectedMath78}
                    id='math8-78'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-78", `${e.target.checked}`)
                        setSelectedMath78(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem/v/the-pythagorean-theorem"
        rel="noreferrer" target="_blank"> Pythagorean theorem</a></p>

      <span className="days">Lesson 79</span>
      <ToggleSwitch checked={selectedMath79}
                    id='math8-79'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-79", `${e.target.checked}`)
                        setSelectedMath79(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/pythagorean-theorem-application/v/area-of-an-isosceles-triangle"
        rel="noreferrer" target="_blank"> Pythagorean theorem application</a></p>

      <span className="days">Lesson 80</span>
      <ToggleSwitch checked={selectedMath80}
                    id='math8-80'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-80", `${e.target.checked}`)
                        setSelectedMath80(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/pythagorean-theorem-application/v/area-of-an-isosceles-triangle"
        rel="noreferrer" target="_blank"> Pythagorean theorem application</a></p>

      <span className="days">Lesson 81</span>
      <ToggleSwitch checked={selectedMath81}
                    id='math8-81'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-81", `${e.target.checked}`)
                        setSelectedMath81(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/pythagorean-distance/v/distance-formula"
        rel="noreferrer" target="_blank"> Pythagorean theorem and distance between points</a></p>

      <span className="days">Lesson 82</span>
      <ToggleSwitch checked={selectedMath82}
                    id='math8-82'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-82", `${e.target.checked}`)
                        setSelectedMath82(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/pythagorean-distance/v/distance-formula"
        rel="noreferrer" target="_blank"> Pythagorean theorem and distance between points</a></p>

      <span className="days">Lesson 83</span>
      <ToggleSwitch checked={selectedMath83}
                    id='math8-83'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-83", `${e.target.checked}`)
                        setSelectedMath83(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-proofs/v/garfield-s-proof-of-the-pythagorean-theorem"
        rel="noreferrer" target="_blank"> Pythagorean theorem proofs</a></p>

      <span className="days">Lesson 84</span>
      <ToggleSwitch checked={selectedMath84}
                    id='math8-84'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-84", `${e.target.checked}`)
                        setSelectedMath84(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-proofs/v/garfield-s-proof-of-the-pythagorean-theorem"
        rel="noreferrer" target="_blank"> Pythagorean theorem proofs</a></p>

      <span className="days">Lesson 85</span>
      <ToggleSwitch checked={selectedMath85}
                    id='math8-85'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-85", `${e.target.checked}`)
                        setSelectedMath85(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/cylinder-volume-and-surface-area"
        rel="noreferrer" target="_blank"> Volume</a></p>

      <span className="days">Lesson 86</span>
      <ToggleSwitch checked={selectedMath86}
                    id='math8-86'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-86", `${e.target.checked}`)
                        setSelectedMath86(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-volume/v/cylinder-volume-and-surface-area"
        rel="noreferrer" target="_blank"> Volume</a></p>

      <span className="days">Lesson 87</span>
      <ToggleSwitch checked={selectedMath87}
                    id='math8-87'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-87", `${e.target.checked}`)
                        setSelectedMath87(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/test/cc-8th-geometry-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 88</span>
      <ToggleSwitch checked={selectedMath88}
                    id='math8-88'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-88", `${e.target.checked}`)
                        setSelectedMath88(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/identify-transformations/v/introduction-to-transformations"
        rel="noreferrer" target="_blank"> Transformations intro</a></p>

      <span className="days">Lesson 89</span>
      <ToggleSwitch checked={selectedMath89}
                    id='math8-89'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-89", `${e.target.checked}`)
                        setSelectedMath89(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/identify-transformations/v/introduction-to-transformations"
        rel="noreferrer" target="_blank"> Transformations intro</a></p>

      <span className="days">Lesson 90</span>
      <ToggleSwitch checked={selectedMath90}
                    id='math8-90'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-90", `${e.target.checked}`)
                        setSelectedMath90(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/translations-8th/v/translating-points"
        rel="noreferrer" target="_blank"> Translations</a></p>

      <span className="days">Lesson 91</span>
      <ToggleSwitch checked={selectedMath91}
                    id='math8-91'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-91", `${e.target.checked}`)
                        setSelectedMath91(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/translations-8th/v/translating-points"
        rel="noreferrer" target="_blank"> Translations</a></p>

      <span className="days">Lesson 92</span>
      <ToggleSwitch checked={selectedMath92}
                    id='math8-92'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-92", `${e.target.checked}`)
                        setSelectedMath92(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/rotations-8th/v/rotating-points"
        rel="noreferrer" target="_blank"> Rotations</a></p>

      <span className="days">Lesson 93</span>
      <ToggleSwitch checked={selectedMath93}
                    id='math8-93'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-93", `${e.target.checked}`)
                        setSelectedMath93(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/rotations-8th/v/rotating-points"
        rel="noreferrer" target="_blank"> Rotations</a></p>

      <span className="days">Lesson 94</span>
      <ToggleSwitch checked={selectedMath94}
                    id='math8-94'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-94", `${e.target.checked}`)
                        setSelectedMath94(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/reflections-8th/v/reflecting-points"
        rel="noreferrer" target="_blank"> Reflections</a></p>

      <span className="days">Lesson 95</span>
      <ToggleSwitch checked={selectedMath95}
                    id='math8-95'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-95", `${e.target.checked}`)
                        setSelectedMath95(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/reflections-8th/v/reflecting-points"
        rel="noreferrer" target="_blank"> Reflections</a></p>

      <span className="days">Lesson 96</span>
      <ToggleSwitch checked={selectedMath96}
                    id='math8-96'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-96", `${e.target.checked}`)
                        setSelectedMath96(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/transformations-properties/e/find-measures-using-rigid-transformations"
        rel="noreferrer" target="_blank"> Properties & definitions of transformations</a></p>

      <span className="days">Lesson 97</span>
      <ToggleSwitch checked={selectedMath97}
                    id='math8-97'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-97", `${e.target.checked}`)
                        setSelectedMath97(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/transformations-properties/e/find-measures-using-rigid-transformations"
        rel="noreferrer" target="_blank"> Properties & definitions of transformations</a></p>

      <span className="days">Lesson 98</span>
      <ToggleSwitch checked={selectedMath98}
                    id='math8-98'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-98", `${e.target.checked}`)
                        setSelectedMath98(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/8th-dilations/v/dilating-points-example"
        rel="noreferrer" target="_blank"> Dilations</a></p>

      <span className="days">Lesson 99</span>
      <ToggleSwitch checked={selectedMath99}
                    id='math8-99'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-99", `${e.target.checked}`)
                        setSelectedMath99(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/8th-dilations/v/dilating-points-example"
        rel="noreferrer" target="_blank"> Dilations </a></p>

      <span className="days">Lesson 100</span>
      <ToggleSwitch checked={selectedMath100}
                    id='math8-100'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-100", `${e.target.checked}`)
                        setSelectedMath100(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/congruence-similarity/v/testing-congruence-by-transformations-example"
        rel="noreferrer" target="_blank"> Congruence and similarity</a></p>

      <span className="days">Lesson 101</span>
      <ToggleSwitch checked={selectedMath101}
                    id='math8-101'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-101", `${e.target.checked}`)
                        setSelectedMath101(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/congruence-similarity/v/testing-congruence-by-transformations-example"
        rel="noreferrer" target="_blank"> Congruence and similarity</a></p>

      <span className="days">Lesson 102</span>
      <ToggleSwitch checked={selectedMath102}
                    id='math8-102'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-102", `${e.target.checked}`)
                        setSelectedMath102(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/geometric-transformations/test/geometric-transformations-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 103</span>
      <ToggleSwitch checked={selectedMath103}
                    id='math8-103'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-103", `${e.target.checked}`)
                        setSelectedMath103(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots/v/constructing-scatter-plot"
        rel="noreferrer" target="_blank"> Introduction to scatter plots</a></p>
      <Video videoUrl="https://www.youtube.com/embed/NcgRa0uotXs"/>

      <span className="days">Lesson 104</span>
      <ToggleSwitch checked={selectedMath104}
                    id='math8-104'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-104", `${e.target.checked}`)
                        setSelectedMath104(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-scatter-plots/v/constructing-scatter-plot"
        rel="noreferrer" target="_blank"> Introduction to scatter plots</a></p>

      <span className="days">Lesson 105</span>
      <ToggleSwitch checked={selectedMath105}
                    id='math8-105'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-105", `${e.target.checked}`)
                        setSelectedMath105(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-interpreting-scatter-plots/v/scatter-plot-interpreting"
        rel="noreferrer" target="_blank"> Interpreting scatter plots</a></p>

      <span className="days">Lesson 106</span>
      <ToggleSwitch checked={selectedMath106}
                    id='math8-106'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-106", `${e.target.checked}`)
                        setSelectedMath106(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-interpreting-scatter-plots/v/scatter-plot-interpreting"
        rel="noreferrer" target="_blank"> Interpreting scatter plots</a></p>

      <span className="days">Lesson 107</span>
      <ToggleSwitch checked={selectedMath107}
                    id='math8-107'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-107", `${e.target.checked}`)
                        setSelectedMath107(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-line-of-best-fit/v/estimating-the-line-of-best-fit-exercise"
        rel="noreferrer" target="_blank"> Estimating lines of best fit</a></p>

      <span className="days">Lesson 108</span>
      <ToggleSwitch checked={selectedMath108}
                    id='math8-108'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-108", `${e.target.checked}`)
                        setSelectedMath108(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/cc-8th-line-of-best-fit/v/estimating-the-line-of-best-fit-exercise"
        rel="noreferrer" target="_blank"> Estimating lines of best fit</a></p>

      <span className="days">Lesson 109</span>
      <ToggleSwitch checked={selectedMath109}
                    id='math8-109'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-109", `${e.target.checked}`)
                        setSelectedMath109(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/two-way-tables/v/two-way-frequency-tables-and-venn-diagrams"
        rel="noreferrer" target="_blank"> Two-way tables</a></p>

      <span className="days">Lesson 110</span>
      <ToggleSwitch checked={selectedMath110}
                    id='math8-110'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-110", `${e.target.checked}`)
                        setSelectedMath110(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/two-way-tables/v/two-way-frequency-tables-and-venn-diagrams"
        rel="noreferrer" target="_blank"> Two-way tables</a></p>

      <span className="days">Lesson 111</span>
      <ToggleSwitch checked={selectedMath111}
                    id='math8-111'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-111", `${e.target.checked}`)
                        setSelectedMath111(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data/test/cc-8th-data-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="regions">Head Start on Algebra</span><br/>

      <span className="days">Lesson 112</span>
      <ToggleSwitch checked={selectedMath112}
                    id='math8-112'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-112", `${e.target.checked}`)
                        setSelectedMath112(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:algebra-overview-history/v/origins-of-algebra"
        rel="noreferrer" target="_blank"> Origins of algebra</a></p>
      <Video videoUrl="https://www.youtube.com/embed/NybHckSEQBI"/>

      <span className="days">Lesson 113</span>
      <ToggleSwitch checked={selectedMath113}
                    id='math8-113'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-113", `${e.target.checked}`)
                        setSelectedMath113(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:algebra-overview-history/v/origins-of-algebra"
        rel="noreferrer" target="_blank"> Origins of algebra</a></p>

      <span className="days">Lesson 114</span> <ToggleSwitch checked={selectedMath114}
                                                             id='math8-114'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-114", `${e.target.checked}`)
                                                                 setSelectedMath114(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:intro-variables/v/what-is-a-variable"
        rel="noreferrer" target="_blank"> Introduction to variables</a></p>
      <Video videoUrl="https://www.youtube.com/embed/lsnlPHgi3ZY"/>

      <span className="days">Lesson 115</span>
      <ToggleSwitch checked={selectedMath115}
                    id='math8-115'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-115", `${e.target.checked}`)
                        setSelectedMath115(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:intro-variables/v/what-is-a-variable"
        rel="noreferrer" target="_blank"> Introduction to variables</a></p>
      <Video videoUrl="https://www.youtube.com/embed/9PqygqYo0ck"/>

      <span className="days">Lesson 116</span>
      <ToggleSwitch checked={selectedMath116}
                    id='math8-116'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-116", `${e.target.checked}`)
                        setSelectedMath116(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:substitute-evaluate-expression/v/evaluating-expressions-in-two-variables"
        rel="noreferrer" target="_blank"> Substitution and evaluating expressions</a></p>

      <span className="days">Lesson 117</span>
      <ToggleSwitch checked={selectedMath117}
                    id='math8-117'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-117", `${e.target.checked}`)
                        setSelectedMath117(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:substitute-evaluate-expression/v/evaluating-expressions-in-two-variables"
        rel="noreferrer" target="_blank"> Substitution and evaluating expressions</a></p>

      <span className="days">Lesson 118</span>
      <ToggleSwitch checked={selectedMath118}
                    id='math8-118'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-118", `${e.target.checked}`)
                        setSelectedMath118(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:combine-like-terms/v/combining-like-terms"
        rel="noreferrer" target="_blank"> Combining like terms</a></p>
      <Video videoUrl="https://www.youtube.com/embed/DKC74YKJpNY"/>

      <span className="days">Lesson 119</span>
      <ToggleSwitch checked={selectedMath119}
                    id='math8-119'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-119", `${e.target.checked}`)
                        setSelectedMath119(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:combine-like-terms/v/combining-like-terms"
        rel="noreferrer" target="_blank"> Combining like terms</a></p>

      <span className="days">Lesson 120</span>
      <ToggleSwitch checked={selectedMath120}
                    id='math8-120'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-120", `${e.target.checked}`)
                        setSelectedMath120(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:equivalent-expressions-intro/v/equivalent-algebraic-expressions-exercise"
        rel="noreferrer" target="_blank"> Introduction to equivalent expressions</a></p>
      <Video videoUrl="https://www.youtube.com/embed/v-6MShC82ow"/>

      <span className="days">Lesson 121</span>
      <ToggleSwitch checked={selectedMath121}
                    id='math8-121'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-121", `${e.target.checked}`)
                        setSelectedMath121(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:equivalent-expressions-intro/v/equivalent-algebraic-expressions-exercise"
        rel="noreferrer" target="_blank"> Introduction to equivalent expressions</a></p>

      <span className="days">Lesson 122</span>
      <ToggleSwitch checked={selectedMath122}
                    id='math8-122'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-122", `${e.target.checked}`)
                        setSelectedMath122(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:division-zero/v/why-dividing-by-zero-is-undefined"
        rel="noreferrer" target="_blank"> Division by zero</a></p>

      <span className="days">Lesson 123</span>
      <ToggleSwitch checked={selectedMath123}
                    id='math8-123'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-123", `${e.target.checked}`)
                        setSelectedMath123(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:division-zero/v/why-dividing-by-zero-is-undefined"
        rel="noreferrer" target="_blank"> Division by zero</a></p>

      <span className="days">Lesson 124</span>
      <ToggleSwitch checked={selectedMath124}
                    id='math8-124'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-124", `${e.target.checked}`)
                        setSelectedMath124(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/test/x2f8bb11595b61c86:foundation-algebra-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 125</span>
      <ToggleSwitch checked={selectedMath125}
                    id='math8-125'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-125", `${e.target.checked}`)
                        setSelectedMath125(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-equations-variables-both-sides/v/why-we-do-the-same-thing-to-both-sides-multi-step-equations"
        rel="noreferrer" target="_blank"> Linear equations with variables on both sides</a></p>
      <Video videoUrl="https://www.youtube.com/embed/tHm3X_Ta_iE"/>

      <span className="days">Lesson 126</span>
      <ToggleSwitch checked={selectedMath126}
                    id='math8-126'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-126", `${e.target.checked}`)
                        setSelectedMath126(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-equations-variables-both-sides/v/why-we-do-the-same-thing-to-both-sides-multi-step-equations"
        rel="noreferrer" target="_blank"> Linear equations with variables on both sides</a></p>

      <span className="days">Lesson 127</span>
      <ToggleSwitch checked={selectedMath127}
                    id='math8-127'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-127", `${e.target.checked}`)
                        setSelectedMath127(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-equations-parentheses/v/solving-equations-with-the-distributive-property"
        rel="noreferrer" target="_blank"> Linear equations with parentheses</a></p>

      <span className="days">Lesson 128</span>
      <ToggleSwitch checked={selectedMath128}
                    id='math8-128'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-128", `${e.target.checked}`)
                        setSelectedMath128(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-equations-parentheses/v/solving-equations-with-the-distributive-property"
        rel="noreferrer" target="_blank"> Linear equations with parentheses</a></p>

      <span className="days">Lesson 129</span>
      <ToggleSwitch checked={selectedMath129}
                    id='math8-129'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-129", `${e.target.checked}`)
                        setSelectedMath129(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:num-solutions-linear-equations/v/number-of-solutions-to-linear-equations"
        rel="noreferrer" target="_blank"> Analyzing the number of solutions to linear equations</a></p>

      <span className="days">Lesson 130</span>
      <ToggleSwitch checked={selectedMath130}
                    id='math8-130'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-130", `${e.target.checked}`)
                        setSelectedMath130(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:num-solutions-linear-equations/v/number-of-solutions-to-linear-equations"
        rel="noreferrer" target="_blank"> Analyzing the number of solutions to linear equations</a></p>

      <span className="days">Lesson 131</span>
      <ToggleSwitch checked={selectedMath131}
                    id='math8-131'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-131", `${e.target.checked}`)
                        setSelectedMath131(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-eqns-unknown-coefficients/v/linear-equations-with-unknown-coefficients"
        rel="noreferrer" target="_blank"> Linear equations with unknown coefficients</a></p>

      <span className="days">Lesson 132</span>
      <ToggleSwitch checked={selectedMath132}
                    id='math8-132'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-132", `${e.target.checked}`)
                        setSelectedMath132(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-eqns-unknown-coefficients/v/linear-equations-with-unknown-coefficients"
        rel="noreferrer" target="_blank"> Linear equations with unknown coefficients</a></p>

      <span className="days">Lesson 133 </span>
      <ToggleSwitch checked={selectedMath133}
                    id='math8-133'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-133", `${e.target.checked}`)
                        setSelectedMath133(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:multistep-inequalities/v/multi-step-inequalities-3"
        rel="noreferrer" target="_blank"> Multi-step inequalities</a></p>
      <Video videoUrl="https://www.youtube.com/embed/ONuIIvgkE3c"/>

      <span className="days"> Lesson 134 </span>
      <ToggleSwitch checked={selectedMath134}
                    id='math8-134'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-134", `${e.target.checked}`)
                        setSelectedMath134(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:multistep-inequalities/v/multi-step-inequalities-3"
        rel="noreferrer" target="_blank"> Multi-step inequalities</a></p>


      <span className="days">Lesson 135</span>
      <ToggleSwitch checked={selectedMath135}
                    id='math8-135'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-135", `${e.target.checked}`)
                        setSelectedMath135(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:compound-inequalities/v/compund-inequalities"
        rel="noreferrer" target="_blank"> Compound inequalities</a></p>

      <span className="days">Lesson 136</span>
      <ToggleSwitch checked={selectedMath136}
                    id='math8-136'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-136", `${e.target.checked}`)
                        setSelectedMath136(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:compound-inequalities/v/compund-inequalities"
        rel="noreferrer" target="_blank"> Compound inequalities</a></p>

      <span className="days">Lesson 137</span>
      <ToggleSwitch checked={selectedMath137}
                    id='math8-137'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-137", `${e.target.checked}`)
                        setSelectedMath137(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/test/x2f8bb11595b61c86:solve-equations-inequalities-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 138</span>
      <ToggleSwitch checked={selectedMath138}
                    id='math8-138'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-138", `${e.target.checked}`)
                        setSelectedMath138(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:rate-conversion/v/dimensional-analysis-units-algebraically"
        rel="noreferrer" target="_blank"> Rate conversion</a></p>

      <span className="days">Lesson 139</span>
      <ToggleSwitch checked={selectedMath139}
                    id='math8-139'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-139", `${e.target.checked}`)
                        setSelectedMath139(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:rate-conversion/v/dimensional-analysis-units-algebraically"
        rel="noreferrer" target="_blank"> Rate conversion</a></p>

      <span className="days">Lesson 140</span>
      <ToggleSwitch checked={selectedMath140}
                    id='math8-140'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-140", `${e.target.checked}`)
                        setSelectedMath140(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:appropriate-units/v/appropriate-units"
        rel="noreferrer" target="_blank"> Appropriate units</a></p>

      <span className="days">Lesson 141</span>
      <ToggleSwitch checked={selectedMath141}
                    id='math8-141'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-141", `${e.target.checked}`)
                        setSelectedMath141(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:appropriate-units/v/appropriate-units"
        rel="noreferrer" target="_blank"> Appropriate units</a></p>

      <span className="days">Lesson 142</span>
      <ToggleSwitch checked={selectedMath142}
                    id='math8-142'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-142", `${e.target.checked}`)
                        setSelectedMath142(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:word-problems-multiple-units/v/using-units-to-solve-problems-toy-factory"
        rel="noreferrer" target="_blank"> Word problems with multiple units</a></p>

      <span className="days">Lesson 143</span>
      <ToggleSwitch checked={selectedMath143}
                    id='math8-143'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-143", `${e.target.checked}`)
                        setSelectedMath143(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>

      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/x2f8bb11595b61c86:word-problems-multiple-units/v/using-units-to-solve-problems-toy-factory"
        rel="noreferrer" target="_blank"> Word problems with multiple units</a></p>
      <span className="days">Lesson 144</span>
      <ToggleSwitch checked={selectedMath144}
                    id='math8-144'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-144", `${e.target.checked}`)
                        setSelectedMath144(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:working-units/test/x2f8bb11595b61c86:working-units-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 145</span>
      <ToggleSwitch checked={selectedMath145}
                    id='math8-145'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-145", `${e.target.checked}`)
                        setSelectedMath145(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:two-variable-linear-equations-intro/v/2-variable-linear-equations-graphs"
        rel="noreferrer" target="_blank"> Two-variable linear equations intro</a></p>

      <span className="days">Lesson 146</span>
      <ToggleSwitch checked={selectedMath146}
                    id='math8-146'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-146", `${e.target.checked}`)
                        setSelectedMath146(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:two-variable-linear-equations-intro/v/2-variable-linear-equations-graphs"
        rel="noreferrer" target="_blank"> Two-variable linear equations intro</a></p>

      <span className="days">Lesson 147</span>
      <ToggleSwitch checked={selectedMath147}
                    id='math8-147'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-147", `${e.target.checked}`)
                        setSelectedMath147(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:slope/v/introduction-to-slope"
        rel="noreferrer" target="_blank"> Slope</a></p>

      <span className="days">Lesson 148</span>
      <ToggleSwitch checked={selectedMath148}
                    id='math8-148'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-148", `${e.target.checked}`)
                        setSelectedMath148(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:slope/v/introduction-to-slope"
        rel="noreferrer" target="_blank"> Slope</a></p>

      <span className="days">Lesson 149</span>
      <ToggleSwitch checked={selectedMath149}
                    id='math8-149'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-149", `${e.target.checked}`)
                        setSelectedMath149(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:horizontal-vertical-lines/v/slope-of-a-line-3"
        rel="noreferrer" target="_blank"> Horizontal & vertical lines</a></p>
      <Video videoUrl="https://www.youtube.com/embed/k5etrWdIY6o"/>

      <span className="days">Lesson 150</span>
      <ToggleSwitch checked={selectedMath150}
                    id='math8-150'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-150", `${e.target.checked}`)
                        setSelectedMath150(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:horizontal-vertical-lines/v/slope-of-a-line-3"
        rel="noreferrer" target="_blank"> Horizontal & vertical lines</a></p>

      <span className="days">Lesson 151</span>
      <ToggleSwitch checked={selectedMath151}
                    id='math8-151'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-151", `${e.target.checked}`)
                        setSelectedMath151(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:x-intercepts-and-y-intercepts/v/introduction-to-intercepts"
        rel="noreferrer" target="_blank"> x-intercepts and y-intercepts</a></p>
      <Video videoUrl="https://www.youtube.com/embed/_-LvA1xlQLs"/>

      <span className="days">Lesson 152</span>
      <ToggleSwitch checked={selectedMath152}
                    id='math8-152'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-152", `${e.target.checked}`)
                        setSelectedMath152(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:x-intercepts-and-y-intercepts/v/introduction-to-intercepts"
        rel="noreferrer" target="_blank"> x-intercepts and y-intercepts</a></p>

      <span className="days">Lesson 153</span>
      <ToggleSwitch checked={selectedMath153}
                    id='math8-153'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-153", `${e.target.checked}`)
                        setSelectedMath153(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:applying-intercepts-and-slope/v/slope-intercepts-context"
        rel="noreferrer" target="_blank"> Applying intercepts and slope</a></p>

      <span className="days">Lesson 154</span>
      <ToggleSwitch checked={selectedMath154}
                    id='math8-154'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-154", `${e.target.checked}`)
                        setSelectedMath154(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:applying-intercepts-and-slope/v/slope-intercepts-context"
        rel="noreferrer" target="_blank"> Applying intercepts and slope</a></p>

      <span className="days">Lesson 155</span>
      <ToggleSwitch checked={selectedMath155}
                    id='math8-155'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-155", `${e.target.checked}`)
                        setSelectedMath155(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/test/x2f8bb11595b61c86:linear-equations-graphs-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 156</span>
      <ToggleSwitch checked={selectedMath156}
                    id='math8-156'
                    label='Completed'
                    onChange={
                      (e) => {
                        localStorage.setItem("math8-156", `${e.target.checked}`)
                        setSelectedMath156(e.target.checked)
                        console.log(e.target.checked)
                      }
                    }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:intro-to-slope-intercept-form/v/slope-intercept-form"
        rel="noreferrer" target="_blank"> Intro to slope-intercept form</a></p>
      <Video videoUrl="https://www.youtube.com/embed/7SDiuXNsack"/>

      <span className="days">Lesson 157</span> <ToggleSwitch checked={selectedMath157}
                                                             id='math8-157'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-157", `${e.target.checked}`)
                                                                 setSelectedMath157(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:intro-to-slope-intercept-form/v/slope-intercept-form"
        rel="noreferrer" target="_blank"> Intro to slope-intercept form</a></p>

      <span className="days">Lesson 158</span> <ToggleSwitch checked={selectedMath158}
                                                             id='math8-158'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-158", `${e.target.checked}`)
                                                                 setSelectedMath158(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:graphing-slope-intercept-equations/v/graphing-a-line-in-slope-intercept-form"
        rel="noreferrer" target="_blank"> Graphing slope-intercept equations</a></p>

      <span className="days">Lesson 159</span> <ToggleSwitch checked={selectedMath159}
                                                             id='math8-159'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-159", `${e.target.checked}`)
                                                                 setSelectedMath159(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:graphing-slope-intercept-equations/v/graphing-a-line-in-slope-intercept-form"
        rel="noreferrer" target="_blank"> Graphing slope-intercept equations</a></p>

      <span className="days">Lesson 160</span> <ToggleSwitch checked={selectedMath160}
                                                             id='math8-160'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-160", `${e.target.checked}`)
                                                                 setSelectedMath160(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:writing-slope-intercept-equations/v/graphs-using-slope-intercept-form"
        rel="noreferrer" target="_blank"> Writing slope-intercept equations</a></p>

      <span className="days">Lesson 161</span> <ToggleSwitch checked={selectedMath161}
                                                             id='math8-161'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-161", `${e.target.checked}`)
                                                                 setSelectedMath161(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:writing-slope-intercept-equations/v/graphs-using-slope-intercept-form"
        rel="noreferrer" target="_blank"> Writing slope-intercept equations</a></p>

      <span className="days">Lesson 162</span> <ToggleSwitch checked={selectedMath162}
                                                             id='math8-162'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-162", `${e.target.checked}`)
                                                                 setSelectedMath162(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:point-slope-form/v/idea-behind-point-slope-form"
        rel="noreferrer" target="_blank"> Point-slope form </a></p>

      <span className="days">Lesson 163</span> <ToggleSwitch checked={selectedMath163}
                                                             id='math8-163'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-163", `${e.target.checked}`)
                                                                 setSelectedMath163(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:point-slope-form/v/idea-behind-point-slope-form"
        rel="noreferrer" target="_blank"> Point-slope form </a></p>


      <span className="days">Lesson 164</span> <ToggleSwitch checked={selectedMath164}
                                                             id='math8-164'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-164", `${e.target.checked}`)
                                                                 setSelectedMath164(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:standard-form/v/standard-form-for-linear-equations"
        rel="noreferrer" target="_blank"> Standard form</a></p>

      <span className="days">Lesson 165</span> <ToggleSwitch checked={selectedMath165}
                                                             id='math8-165'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-165", `${e.target.checked}`)
                                                                 setSelectedMath165(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:standard-form/v/standard-form-for-linear-equations"
        rel="noreferrer" target="_blank"> Standard form</a></p>

      <span className="days">Lesson 166</span> <ToggleSwitch checked={selectedMath166}
                                                             id='math8-166'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-166", `${e.target.checked}`)
                                                                 setSelectedMath166(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:summary-forms-of-two-variable-linear-equations/v/slope-from-equation"
        rel="noreferrer" target="_blank"> Summary: Forms of two-variable linear equations</a></p>

      <span className="days">Lesson 167</span> <ToggleSwitch checked={selectedMath167}
                                                             id='math8-167'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-167", `${e.target.checked}`)
                                                                 setSelectedMath167(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:summary-forms-of-two-variable-linear-equations/v/slope-from-equation"
        rel="noreferrer" target="_blank"> Summary: Forms of two-variable linear equations</a></p>

      <span className="days">Lesson 168</span> <ToggleSwitch checked={selectedMath168}
                                                             id='math8-168'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-168", `${e.target.checked}`)
                                                                 setSelectedMath168(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/test/x2f8bb11595b61c86:forms-of-linear-equations-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>

      <span className="days">Lesson 169</span> <ToggleSwitch checked={selectedMath169}
                                                             id='math8-169'
                                                             label='Completed'
                                                             onChange={
                                                               (e) => {
                                                                 localStorage.setItem("math8-169", `${e.target.checked}`)
                                                                 setSelectedMath169(e.target.checked)
                                                                 console.log(e.target.checked)
                                                               }
                                                             }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:introduction-to-systems-of-equations/v/trolls-tolls-and-systems-of-equations"
        rel="noreferrer" target="_blank"> Introduction to systems of equations</a></p>
      <Video videoUrl="https://www.youtube.com/embed/oKqtgz2eo-Y"/>

      <span className="days">LESSON 170</span> <ToggleSwitch
      checked={selectedMath170}
      id='math8-170'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-170", `${e.target.checked}`)
          setSelectedMath170(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:introduction-to-systems-of-equations/v/trolls-tolls-and-systems-of-equations"
        rel="noreferrer" target="_blank"> Introduction to systems of equations</a></p>

      <span className="days">Lesson 171</span> <ToggleSwitch
      checked={selectedMath171}
      id='math8-171'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-171", `${e.target.checked}`)
          setSelectedMath171(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-of-equations-with-substitution/v/solving-systems-with-substitution"
        rel="noreferrer" target="_blank"> Solving systems of equations with substitution</a></p>

      <span className="days">Lesson 172</span> <ToggleSwitch
      checked={selectedMath172}
      id='math8-172'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-172", `${e.target.checked}`)
          setSelectedMath172(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-of-equations-with-substitution/v/solving-systems-with-substitution"
        rel="noreferrer" target="_blank"> Solving systems of equations with substitution</a></p>

      <span className="days">Lesson 173</span> <ToggleSwitch
      checked={selectedMath173}
      id='math8-173'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-173", `${e.target.checked}`)
          setSelectedMath173(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> After you watch the video below, complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-elimination/v/king-s-cupcakes-solving-systems-by-elimination"
        rel="noreferrer" target="_blank"> Solving systems of equations with elimination</a></p>
      <Video videoUrl="https://www.youtube.com/embed/XOJgzW4P7T8"/>

      <span className="days">Lesson 174</span> <ToggleSwitch
      checked={selectedMath174}
      id='math8-174'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-174", `${e.target.checked}`)
          setSelectedMath174(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-elimination/v/king-s-cupcakes-solving-systems-by-elimination"
        rel="noreferrer" target="_blank"> Solving systems of equations with elimination</a></p>

      <span className="days">Lesson 175</span> <ToggleSwitch
      checked={selectedMath175}
      id='math8-175'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-175", `${e.target.checked}`)
          setSelectedMath175(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:equivalent-systems-equations/v/why-we-do-the-same-thing-to-both-sides-basic-systems"
        rel="noreferrer" target="_blank"> Equivalent systems of equations</a></p>

      <span className="days">Lesson 176</span> <ToggleSwitch
      checked={selectedMath176}
      id='math8-176'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-176", `${e.target.checked}`)
          setSelectedMath176(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:equivalent-systems-equations/v/why-we-do-the-same-thing-to-both-sides-basic-systems"
        rel="noreferrer" target="_blank"> Equivalent systems of equations</a></p>

      <span className="days">Lesson 177</span> <ToggleSwitch
      checked={selectedMath177}
      id='math8-177'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-177", `${e.target.checked}`)
          setSelectedMath177(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:number-of-solutions-to-systems-of-equations/v/inconsistent-systems-of-equations"
        rel="noreferrer" target="_blank"> Number of solutions to systems of equations</a></p>

      <span className="days">Lesson 178</span> <ToggleSwitch
      checked={selectedMath178}
      id='math8-178'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-178", `${e.target.checked}`)
          setSelectedMath178(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:number-of-solutions-to-systems-of-equations/v/inconsistent-systems-of-equations"
        rel="noreferrer" target="_blank"> Number of solutions to systems of equations</a></p>

      <span className="days">Lesson 179</span> <ToggleSwitch
      checked={selectedMath179}
      id='math8-179'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-179", `${e.target.checked}`)
          setSelectedMath179(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete at least 50% of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:systems-of-equations-word-problems/v/ex-2-age-word-problem"
        rel="noreferrer" target="_blank"> Systems of equations word problems</a></p>

      <span className="days">Lesson 180</span> <ToggleSwitch
      checked={selectedMath180}
      id='math8-180'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-180", `${e.target.checked}`)
          setSelectedMath180(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the remainder of <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:systems-of-equations-word-problems/v/ex-2-age-word-problem"
        rel="noreferrer" target="_blank"> Systems of equations word problems</a></p>
      <span className="days">Lesson 181</span> <ToggleSwitch
      checked={selectedMath181}
      id='math8-181'
      label='Completed'
      onChange={
        (e) => {
          localStorage.setItem("math8-181", `${e.target.checked}`)
          setSelectedMath181(e.target.checked)
          console.log(e.target.checked)
        }
      }/>
      <p className="margin-para"> Complete the <a
        href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/test/x2f8bb11595b61c86:systems-of-equations-unit-test?modal=1"
        rel="noreferrer" target="_blank"> Unit Test</a></p>
  </div>
  </div>
</section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 8th Grade Math! </h3>
</form>

)
}

export default Math8Component