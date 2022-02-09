import React from "react"
import ToggleSwitch from "../components/checkbox"
import "../styles/styles.css"
import Video from "../components/video"
import MathPuzzle from "../components/mathPuzzle"
import { Link } from "gatsby"
import Confetti from "./confetti"

const Math6Component = ({ data }) => {

  const [selectedMath1, setSelectedMath1] = React.useState(localStorage.getItem("math6-1") === "true")
  const [selectedMath2, setSelectedMath2] = React.useState(localStorage.getItem("math6-2") === "true")
  const [selectedMath3, setSelectedMath3] = React.useState(localStorage.getItem("math6-3") === "true")
  const [selectedMath4, setSelectedMath4] = React.useState(localStorage.getItem("math6-4") === "true")
  const [selectedMath5, setSelectedMath5] = React.useState(localStorage.getItem("math6-5") === "true")
  const [selectedMath6, setSelectedMath6] = React.useState(localStorage.getItem("math6-6") === "true")
  const [selectedMath7, setSelectedMath7] = React.useState(localStorage.getItem("math6-7") === "true")
  const [selectedMath8, setSelectedMath8] = React.useState(localStorage.getItem("math6-8") === "true")
  const [selectedMath9, setSelectedMath9] = React.useState(localStorage.getItem("math6-9") === "true")
  const [selectedMath10, setSelectedMath10] = React.useState(localStorage.getItem("math6-10") === "true")
  const [selectedMath11, setSelectedMath11] = React.useState(localStorage.getItem("math6-11") === "true")
  const [selectedMath12, setSelectedMath12] = React.useState(localStorage.getItem("math6-12") === "true")
  const [selectedMath13, setSelectedMath13] = React.useState(localStorage.getItem("math6-13") === "true")
  const [selectedMath14, setSelectedMath14] = React.useState(localStorage.getItem("math6-14") === "true")
  const [selectedMath15, setSelectedMath15] = React.useState(localStorage.getItem("math6-15") === "true")
  const [selectedMath16, setSelectedMath16] = React.useState(localStorage.getItem("math6-16") === "true")
  const [selectedMath17, setSelectedMath17] = React.useState(localStorage.getItem("math6-17") === "true")
  const [selectedMath18, setSelectedMath18] = React.useState(localStorage.getItem("math6-18") === "true")
  const [selectedMath19, setSelectedMath19] = React.useState(localStorage.getItem("math6-19") === "true")
  const [selectedMath20, setSelectedMath20] = React.useState(localStorage.getItem("math6-20") === "true")
  const [selectedMath21, setSelectedMath21] = React.useState(localStorage.getItem("math6-21") === "true")
  const [selectedMath22, setSelectedMath22] = React.useState(localStorage.getItem("math6-22") === "true")
  const [selectedMath23, setSelectedMath23] = React.useState(localStorage.getItem("math6-23") === "true")
  const [selectedMath24, setSelectedMath24] = React.useState(localStorage.getItem("math6-24") === "true")
  const [selectedMath25, setSelectedMath25] = React.useState(localStorage.getItem("math6-25") === "true")
  const [selectedMath26, setSelectedMath26] = React.useState(localStorage.getItem("math6-26") === "true")
  const [selectedMath27, setSelectedMath27] = React.useState(localStorage.getItem("math6-27") === "true")
  const [selectedMath28, setSelectedMath28] = React.useState(localStorage.getItem("math6-28") === "true")
  const [selectedMath29, setSelectedMath29] = React.useState(localStorage.getItem("math6-29") === "true")
  const [selectedMath30, setSelectedMath30] = React.useState(localStorage.getItem("math6-30") === "true")
  const [selectedMath31, setSelectedMath31] = React.useState(localStorage.getItem("math6-31") === "true")
  const [selectedMath32, setSelectedMath32] = React.useState(localStorage.getItem("math6-32") === "true")
  const [selectedMath33, setSelectedMath33] = React.useState(localStorage.getItem("math6-33") === "true")
  const [selectedMath34, setSelectedMath34] = React.useState(localStorage.getItem("math6-34") === "true")
  const [selectedMath35, setSelectedMath35] = React.useState(localStorage.getItem("math6-35") === "true")
  const [selectedMath36, setSelectedMath36] = React.useState(localStorage.getItem("math6-36") === "true")
  const [selectedMath37, setSelectedMath37] = React.useState(localStorage.getItem("math6-37") === "true")
  const [selectedMath38, setSelectedMath38] = React.useState(localStorage.getItem("math6-38") === "true")
  const [selectedMath39, setSelectedMath39] = React.useState(localStorage.getItem("math6-39") === "true")
  const [selectedMath40, setSelectedMath40] = React.useState(localStorage.getItem("math6-40") === "true")
  const [selectedMath41, setSelectedMath41] = React.useState(localStorage.getItem("math6-41") === "true")
  const [selectedMath42, setSelectedMath42] = React.useState(localStorage.getItem("math6-42") === "true")
  const [selectedMath43, setSelectedMath43] = React.useState(localStorage.getItem("math6-43") === "true")
  const [selectedMath44, setSelectedMath44] = React.useState(localStorage.getItem("math6-44") === "true")
  const [selectedMath45, setSelectedMath45] = React.useState(localStorage.getItem("math6-45") === "true")
  const [selectedMath46, setSelectedMath46] = React.useState(localStorage.getItem("math6-46") === "true")
  const [selectedMath47, setSelectedMath47] = React.useState(localStorage.getItem("math6-47") === "true")
  const [selectedMath48, setSelectedMath48] = React.useState(localStorage.getItem("math6-48") === "true")
  const [selectedMath49, setSelectedMath49] = React.useState(localStorage.getItem("math6-49") === "true")
  const [selectedMath50, setSelectedMath50] = React.useState(localStorage.getItem("math6-50") === "true")
  const [selectedMath51, setSelectedMath51] = React.useState(localStorage.getItem("math6-51") === "true")
  const [selectedMath52, setSelectedMath52] = React.useState(localStorage.getItem("math6-52") === "true")
  const [selectedMath53, setSelectedMath53] = React.useState(localStorage.getItem("math6-53") === "true")
  const [selectedMath54, setSelectedMath54] = React.useState(localStorage.getItem("math6-54") === "true")
  const [selectedMath55, setSelectedMath55] = React.useState(localStorage.getItem("math6-55") === "true")
  const [selectedMath56, setSelectedMath56] = React.useState(localStorage.getItem("math6-56") === "true")
  const [selectedMath57, setSelectedMath57] = React.useState(localStorage.getItem("math6-57") === "true")
  const [selectedMath58, setSelectedMath58] = React.useState(localStorage.getItem("math6-58") === "true")
  const [selectedMath59, setSelectedMath59] = React.useState(localStorage.getItem("math6-59") === "true")
  const [selectedMath60, setSelectedMath60] = React.useState(localStorage.getItem("math6-60") === "true")
  const [selectedMath61, setSelectedMath61] = React.useState(localStorage.getItem("math6-61") === "true")
  const [selectedMath62, setSelectedMath62] = React.useState(localStorage.getItem("math6-62") === "true")
  const [selectedMath63, setSelectedMath63] = React.useState(localStorage.getItem("math6-63") === "true")
  const [selectedMath64, setSelectedMath64] = React.useState(localStorage.getItem("math6-64") === "true")
  const [selectedMath65, setSelectedMath65] = React.useState(localStorage.getItem("math6-65") === "true")
  const [selectedMath66, setSelectedMath66] = React.useState(localStorage.getItem("math6-66") === "true")
  const [selectedMath67, setSelectedMath67] = React.useState(localStorage.getItem("math6-67") === "true")
  const [selectedMath68, setSelectedMath68] = React.useState(localStorage.getItem("math6-68") === "true")
  const [selectedMath69, setSelectedMath69] = React.useState(localStorage.getItem("math6-69") === "true")
  const [selectedMath70, setSelectedMath70] = React.useState(localStorage.getItem("math6-70") === "true")
  const [selectedMath71, setSelectedMath71] = React.useState(localStorage.getItem("math6-71") === "true")
  const [selectedMath72, setSelectedMath72] = React.useState(localStorage.getItem("math6-72") === "true")
  const [selectedMath73, setSelectedMath73] = React.useState(localStorage.getItem("math6-73") === "true")
  const [selectedMath74, setSelectedMath74] = React.useState(localStorage.getItem("math6-74") === "true")
  const [selectedMath75, setSelectedMath75] = React.useState(localStorage.getItem("math6-75") === "true")
  const [selectedMath76, setSelectedMath76] = React.useState(localStorage.getItem("math6-76") === "true")
  const [selectedMath77, setSelectedMath77] = React.useState(localStorage.getItem("math6-77") === "true")
  const [selectedMath78, setSelectedMath78] = React.useState(localStorage.getItem("math6-78") === "true")
  const [selectedMath79, setSelectedMath79] = React.useState(localStorage.getItem("math6-79") === "true")
  const [selectedMath80, setSelectedMath80] = React.useState(localStorage.getItem("math6-80") === "true")
  const [selectedMath81, setSelectedMath81] = React.useState(localStorage.getItem("math6-81") === "true")
  const [selectedMath82, setSelectedMath82] = React.useState(localStorage.getItem("math6-82") === "true")
  const [selectedMath83, setSelectedMath83] = React.useState(localStorage.getItem("math6-83") === "true")
  const [selectedMath84, setSelectedMath84] = React.useState(localStorage.getItem("math6-84") === "true")
  const [selectedMath85, setSelectedMath85] = React.useState(localStorage.getItem("math6-85") === "true")
  const [selectedMath86, setSelectedMath86] = React.useState(localStorage.getItem("math6-86") === "true")
  const [selectedMath87, setSelectedMath87] = React.useState(localStorage.getItem("math6-87") === "true")
  const [selectedMath88, setSelectedMath88] = React.useState(localStorage.getItem("math6-88") === "true")
  const [selectedMath89, setSelectedMath89] = React.useState(localStorage.getItem("math6-89") === "true")
  const [selectedMath90, setSelectedMath90] = React.useState(localStorage.getItem("math6-90") === "true")
  const [selectedMath91, setSelectedMath91] = React.useState(localStorage.getItem("math6-91") === "true")
  const [selectedMath92, setSelectedMath92] = React.useState(localStorage.getItem("math6-92") === "true")
  const [selectedMath93, setSelectedMath93] = React.useState(localStorage.getItem("math6-93") === "true")
  const [selectedMath94, setSelectedMath94] = React.useState(localStorage.getItem("math6-94") === "true")
  const [selectedMath95, setSelectedMath95] = React.useState(localStorage.getItem("math6-95") === "true")
  const [selectedMath96, setSelectedMath96] = React.useState(localStorage.getItem("math6-96") === "true")
  const [selectedMath97, setSelectedMath97] = React.useState(localStorage.getItem("math6-97") === "true")
  const [selectedMath98, setSelectedMath98] = React.useState(localStorage.getItem("math6-98") === "true")
  const [selectedMath99, setSelectedMath99] = React.useState(localStorage.getItem("math6-99") === "true")
  const [selectedMath100, setSelectedMath100] = React.useState(localStorage.getItem("math6-100") === "true")
  const [selectedMath101, setSelectedMath101] = React.useState(localStorage.getItem("math6-101") === "true")
  const [selectedMath102, setSelectedMath102] = React.useState(localStorage.getItem("math6-102") === "true")
  const [selectedMath103, setSelectedMath103] = React.useState(localStorage.getItem("math6-103") === "true")
  const [selectedMath104, setSelectedMath104] = React.useState(localStorage.getItem("math6-104") === "true")
  const [selectedMath105, setSelectedMath105] = React.useState(localStorage.getItem("math6-105") === "true")
  const [selectedMath106, setSelectedMath106] = React.useState(localStorage.getItem("math6-106") === "true")
  const [selectedMath107, setSelectedMath107] = React.useState(localStorage.getItem("math6-107") === "true")
  const [selectedMath108, setSelectedMath108] = React.useState(localStorage.getItem("math6-108") === "true")
  const [selectedMath109, setSelectedMath109] = React.useState(localStorage.getItem("math6-109") === "true")
  const [selectedMath110, setSelectedMath110] = React.useState(localStorage.getItem("math6-110") === "true")
  const [selectedMath111, setSelectedMath111] = React.useState(localStorage.getItem("math6-111") === "true")
  const [selectedMath112, setSelectedMath112] = React.useState(localStorage.getItem("math6-112") === "true")
  const [selectedMath113, setSelectedMath113] = React.useState(localStorage.getItem("math6-113") === "true")
  const [selectedMath114, setSelectedMath114] = React.useState(localStorage.getItem("math6-114") === "true")
  const [selectedMath115, setSelectedMath115] = React.useState(localStorage.getItem("math6-115") === "true")
  const [selectedMath116, setSelectedMath116] = React.useState(localStorage.getItem("math6-116") === "true")
  const [selectedMath117, setSelectedMath117] = React.useState(localStorage.getItem("math6-117") === "true")
  const [selectedMath118, setSelectedMath118] = React.useState(localStorage.getItem("math6-118") === "true")
  const [selectedMath119, setSelectedMath119] = React.useState(localStorage.getItem("math6-119") === "true")
  const [selectedMath120, setSelectedMath120] = React.useState(localStorage.getItem("math6-120") === "true")
  const [selectedMath121, setSelectedMath121] = React.useState(localStorage.getItem("math6-121") === "true")
  const [selectedMath122, setSelectedMath122] = React.useState(localStorage.getItem("math6-122") === "true")
  const [selectedMath123, setSelectedMath123] = React.useState(localStorage.getItem("math6-123") === "true")
  const [selectedMath124, setSelectedMath124] = React.useState(localStorage.getItem("math6-124") === "true")
  const [selectedMath125, setSelectedMath125] = React.useState(localStorage.getItem("math6-125") === "true")
  const [selectedMath126, setSelectedMath126] = React.useState(localStorage.getItem("math6-126") === "true")
  const [selectedMath127, setSelectedMath127] = React.useState(localStorage.getItem("math6-127") === "true")
  const [selectedMath128, setSelectedMath128] = React.useState(localStorage.getItem("math6-128") === "true")
  const [selectedMath129, setSelectedMath129] = React.useState(localStorage.getItem("math6-129") === "true")
  const [selectedMath130, setSelectedMath130] = React.useState(localStorage.getItem("math6-130") === "true")
  const [selectedMath131, setSelectedMath131] = React.useState(localStorage.getItem("math6-131") === "true")
  const [selectedMath132, setSelectedMath132] = React.useState(localStorage.getItem("math6-132") === "true")
  const [selectedMath133, setSelectedMath133] = React.useState(localStorage.getItem("math6-133") === "true")
  const [selectedMath134, setSelectedMath134] = React.useState(localStorage.getItem("math6-134") === "true")
  const [selectedMath135, setSelectedMath135] = React.useState(localStorage.getItem("math6-135") === "true")
  const [selectedMath136, setSelectedMath136] = React.useState(localStorage.getItem("math6-136") === "true")
  const [selectedMath137, setSelectedMath137] = React.useState(localStorage.getItem("math6-137") === "true")
  const [selectedMath138, setSelectedMath138] = React.useState(localStorage.getItem("math6-138") === "true")
  const [selectedMath139, setSelectedMath139] = React.useState(localStorage.getItem("math6-139") === "true")
  const [selectedMath140, setSelectedMath140] = React.useState(localStorage.getItem("math6-140") === "true")
  const [selectedMath141, setSelectedMath141] = React.useState(localStorage.getItem("math6-141") === "true")
  const [selectedMath142, setSelectedMath142] = React.useState(localStorage.getItem("math6-142") === "true")
  const [selectedMath143, setSelectedMath143] = React.useState(localStorage.getItem("math6-143") === "true")
  const [selectedMath144, setSelectedMath144] = React.useState(localStorage.getItem("math6-144") === "true")
  const [selectedMath145, setSelectedMath145] = React.useState(localStorage.getItem("math6-145") === "true")
  const [selectedMath146, setSelectedMath146] = React.useState(localStorage.getItem("math6-146") === "true")
  const [selectedMath147, setSelectedMath147] = React.useState(localStorage.getItem("math6-147") === "true")
  const [selectedMath148, setSelectedMath148] = React.useState(localStorage.getItem("math6-148") === "true")
  const [selectedMath149, setSelectedMath149] = React.useState(localStorage.getItem("math6-149") === "true")
  const [selectedMath150, setSelectedMath150] = React.useState(localStorage.getItem("math6-150") === "true")
  const [selectedMath151, setSelectedMath151] = React.useState(localStorage.getItem("math6-151") === "true")
  const [selectedMath152, setSelectedMath152] = React.useState(localStorage.getItem("math6-152") === "true")
  const [selectedMath153, setSelectedMath153] = React.useState(localStorage.getItem("math6-153") === "true")
  const [selectedMath154, setSelectedMath154] = React.useState(localStorage.getItem("math6-154") === "true")
  const [selectedMath155, setSelectedMath155] = React.useState(localStorage.getItem("math6-155") === "true")
  const [selectedMath156, setSelectedMath156] = React.useState(localStorage.getItem("math6-156") === "true")
  const [selectedMath157, setSelectedMath157] = React.useState(localStorage.getItem("math6-157") === "true")
  const [selectedMath158, setSelectedMath158] = React.useState(localStorage.getItem("math6-158") === "true")
  const [selectedMath159, setSelectedMath159] = React.useState(localStorage.getItem("math6-159") === "true")
  const [selectedMath160, setSelectedMath160] = React.useState(localStorage.getItem("math6-160") === "true")
  const [selectedMath161, setSelectedMath161] = React.useState(localStorage.getItem("math6-161") === "true")
  const [selectedMath162, setSelectedMath162] = React.useState(localStorage.getItem("math6-162") === "true")
  const [selectedMath163, setSelectedMath163] = React.useState(localStorage.getItem("math6-163") === "true")
  const [selectedMath164, setSelectedMath164] = React.useState(localStorage.getItem("math6-164") === "true")
  const [selectedMath165, setSelectedMath165] = React.useState(localStorage.getItem("math6-165") === "true")
  const [selectedMath166, setSelectedMath166] = React.useState(localStorage.getItem("math6-166") === "true")
  const [selectedMath167, setSelectedMath167] = React.useState(localStorage.getItem("math6-167") === "true")
  const [selectedMath168, setSelectedMath168] = React.useState(localStorage.getItem("math6-168") === "true")
  const [selectedMath169, setSelectedMath169] = React.useState(localStorage.getItem("math6-169") === "true")
  const [selectedMath170, setSelectedMath170] = React.useState(localStorage.getItem("math6-170") === "true")
  const [selectedMath171, setSelectedMath171] = React.useState(localStorage.getItem("math6-171") === "true")
  const [selectedMath172, setSelectedMath172] = React.useState(localStorage.getItem("math6-172") === "true")
  const [selectedMath173, setSelectedMath173] = React.useState(localStorage.getItem("math6-173") === "true")
  const [selectedMath174, setSelectedMath174] = React.useState(localStorage.getItem("math6-174") === "true")
  const [selectedMath175, setSelectedMath175] = React.useState(localStorage.getItem("math6-175") === "true")
  const [selectedMath176, setSelectedMath176] = React.useState(localStorage.getItem("math6-176") === "true")
  const [selectedMath177, setSelectedMath177] = React.useState(localStorage.getItem("math6-177") === "true")
  const [selectedMath178, setSelectedMath178] = React.useState(localStorage.getItem("math6-178") === "true")
  const [selectedMath179, setSelectedMath179] = React.useState(localStorage.getItem("math6-179") === "true")
  const [selectedMath180, setSelectedMath180] = React.useState(localStorage.getItem("math6-180") === "true")

  return (
    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "3s",
               backgroundColor: "#88d1da",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "3s",
          backgroundColor: "#88d1da",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro">Math</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/sixth" className='gradeLink'><h2 className="hero">6th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section math-section raise-top">
        <div className="section-content">
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="fadeIn">6th Grade Math is aligned to the Common Core and covers ratios, rates & percentages,
            arithmetic operations, negative numbers, properties of numbers, variables & expressions, equations,
            inequalities introduction, geometry, data and statistics, negative number operations, fractions, decimals,
            proportional relationships, expressions, equations, inequalities, geometry,
            probability, and creative problem solving. </p>
          <p className="topBottom">This course uses Khan Academy, Math Antics, TecMath, TedEd and math riddles from
            various sources. If you don't already have a free account on <a
              href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
              rel="noreferrer" target="_blank">Khan Academy, set one up by clicking here. </a> Khan will track your
            progress through 6th Grade Math.</p><br/>

          <h1 className="section-title daily-margin" id="math">Daily Lessons</h1>
          <div className="md-content">


            <span className="days">Lesson 1</span>
            <ToggleSwitch checked={selectedMath1}
                          id='math6-1'
                          label='Completed (Check this box after you finish the lesson below. It will help you keep track of where you are.)'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-1", `${e.target.checked}`)
                              setSelectedMath1(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p>Watch the video below and then complete 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratios-intro"
              rel="noreferrer" target="_blank"> Intro to ratios, using this link. </a>
              <Video videoUrl="https://www.youtube.com/embed/puku5vUCOcE"/></p>

            <span className="days">Lesson 2</span>
            <ToggleSwitch checked={selectedMath2}
                          id='math6-2'
                          label='Completed (Check this box after you finish the lesson below.)'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-2", `${e.target.checked}`)
                              setSelectedMath2(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/intro-to-ratios/v/ratios-intro"
              rel="noreferrer" target="_blank"> Intro to ratios</a></p>


            <span className="days">Lesson 3</span>
            <ToggleSwitch checked={selectedMath3}
                          id='math6-3'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-3", `${e.target.checked}`)
                              setSelectedMath3(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-equivalent-ratios/v/equivalent-ratios"
              rel="noreferrer" target="_blank"> Equivalent
              ratios: Ratios, rates, &amp; percentages</a></p>

            <span className="days">Lesson 4</span>
            <ToggleSwitch checked={selectedMath4}
                          id='math6-4'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-4", `${e.target.checked}`)
                              setSelectedMath4(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/cc-6th-equivalent-ratios/v/equivalent-ratios"
              rel="noreferrer" target="_blank"> Equivalent
              ratios: Ratios, rates, &amp; percentages</a>
            </p>

            <span className="days">Lesson 5</span>
            <ToggleSwitch checked={selectedMath5}
                          id='math6-5'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-5", `${e.target.checked}`)
                              setSelectedMath5(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">If you don't already one, <a
              href="https://help.quizlet.com/hc/en-us/articles/360030555532-Signing-up-for-a-free-account"
              rel="noreferrer" target="_blank"> set up a free account at Quizlet.
            </a><br/>
              <br/>Review <a href="https://quizlet.com/519495245/ratios-flash-cards/" rel="noreferrer"
                             target="_blank"> 24
                flashcards</a> and choose whichever games and study methods work best for you. Practice until
              you're able to get the answers on the quiz correct.<br/>
              <br/>
              Practice ratios by playing
              <a href="https://www.mathplayground.com/ASB_RatioBlaster.html" rel="noreferrer"
                 target="_blank"> RatioBlaster</a> for
              10 minutes.
            </p>

            <span className="days">Lesson 6</span>
            <ToggleSwitch checked={selectedMath6}
                          id='math6-6'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-6", `${e.target.checked}`)
                              setSelectedMath6(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#visualize-ratios"
              rel="noreferrer" target="_blank"> Visualize
              ratios</a></p>

            <span className="days">Lesson 7</span>
            <ToggleSwitch checked={selectedMath7}
                          id='math6-7'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-7", `${e.target.checked}`)
                              setSelectedMath7(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#visualize-ratios"
              rel="noreferrer" target="_blank"> Visualize
              ratios</a></p>

            <span className="days">Lesson 8</span>
            <ToggleSwitch checked={selectedMath8}
                          id='math6-8'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-8", `${e.target.checked}`)
                              setSelectedMath8(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-ratio-word-problems"
              rel="noreferrer" target="_blank"> Ratio
              application</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">A baseball bat and a ball cost $1.10 in total. The bat costs $1 more than
              the ball. How much does the ball cost? </p>
            <MathPuzzle solution="The baseball bat costs $1.05 and the ball costs $0.05."/>

            <span className="days">Lesson 9</span>
            <ToggleSwitch checked={selectedMath9}
                          id='math6-9'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-9", `${e.target.checked}`)
                              setSelectedMath9(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, <i>Percent, Ratios, and Rates using the
              box method
            </i>, complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-ratio-word-problems"
              rel="noreferrer" target="_blank"> Ratio
              application </a></p>
            <Video videoUrl="https://www.youtube.com/embed/BKh3gk4j0zA"/>
            <p>
              <span className="days">Lesson 10</span>
              <ToggleSwitch checked={selectedMath10}
                            id='math6-10'
                            label='Completed'
                            onChange={
                              (e) => {
                                localStorage.setItem("math6-10", `${e.target.checked}`)
                                setSelectedMath10(e.target.checked)
                                console.log(e.target.checked)
                              }
                            }/>
            </p>
            <p className="margin-para">Review the <a
              href="https://quizlet.com/331606422/ratios-and-rates-6th-grade-flash-cards/" rel="noreferrer"
              target="_blank"> 24
              flashcards at Quizlet</a> and choose whichever games and study methods work best for you. Practice
              until
              you're able to get the answers on the quiz correct.<br/>
              <br/>Practice ratios playing
              <a href="https://www.mathplayground.com/ASB_RatioBlaster.html" rel="noreferrer"
                 target="_blank"> RatioBlaster</a> for
              10 minutes. </p>
            Watch the TedEd Video <i>Why the shape of your screen matters </i>by Brian Gervase.
            <Video videoUrl="https://www.youtube.com/embed/_1GQtAAxtX8"/>

            <span className="days">Lesson 11</span>
            <ToggleSwitch checked={selectedMath11}
                          id='math6-11'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-11", `${e.target.checked}`)
                              setSelectedMath11(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There are 9 balls that are identical. Only one ball is heavier than the
              rest. You also have a two-armed scale with which to measure the weight of the balls. How can you
              find the heavier ball by using the scale only twice? </p>
            <MathPuzzle solution="Split the balls into 3 groups with 3 balls each. Pick 2 groups and use scale to determine which group contains the heavy ball.
Once the group is determined, pick 2 balls and use the scale. If they are equal, the other ball is the heavy one."/>

            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-rates"
              rel="noreferrer" target="_blank"> Intro
              to rates </a>
            </p>

            <span className="days">Lesson 12</span>
            <ToggleSwitch checked={selectedMath12}
                          id='math6-12'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-12", `${e.target.checked}`)
                              setSelectedMath12(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-rates"
              rel="noreferrer" target="_blank"> Intro
              to rates </a></p>

            <span className="days">Lesson 13</span>
            <ToggleSwitch checked={selectedMath13}
                          id='math6-13'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-13", `${e.target.checked}`)
                              setSelectedMath13(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percentages"
              rel="noreferrer" target="_blank"> Intro
              to percents </a></p>
            <Video videoUrl="https://www.youtube.com/embed/JeVSmq1Nrpw"/>

            <span className="days">Lesson 14</span>
            <ToggleSwitch checked={selectedMath14}
                          id='math6-14'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-14", `${e.target.checked}`)
                              setSelectedMath14(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percentages"
              rel="noreferrer" target="_blank"> Intro
              to percents </a></p>

            <span className="days">Lesson 15</span>
            <ToggleSwitch checked={selectedMath15}
                          id='math6-15'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-15", `${e.target.checked}`)
                              setSelectedMath15(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-decimal-conversions"
              rel="noreferrer" target="_blank"> Percent,
              decimal, fraction conversions </a>
            </p>

            <span className="days">Lesson 16</span>
            <ToggleSwitch checked={selectedMath16}
                          id='math6-16'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-16", `${e.target.checked}`)
                              setSelectedMath16(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-decimal-conversions"
              rel="noreferrer" target="_blank"> Percent,
              decimal, fraction conversions </a>
            </p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There are two planes headed towards each other. One plane is traveling at
              15 kilometers per minute, and the other is traveling at 10 kilometers per minute. Assuming that the
              planes are exactly 1000 kilometers apart, what distance will be between them one minute before they
              meet? </p>
            <MathPuzzle
              solution="25 kilometers. The planes are traveling at a combined speed of 25 kilometers per minute. So they will be 25 kilometers apart one minute before they meet. The initial distance between the planes is irrelevant."/>

            <span className="days">Lesson 17</span>
            <ToggleSwitch checked={selectedMath17}
                          id='math6-17'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-17", `${e.target.checked}`)
                              setSelectedMath17(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-problems"
              rel="noreferrer" target="_blank"> Percent
              problems </a>
            </p>

            <span className="days">Lesson 18</span>
            <ToggleSwitch checked={selectedMath18}
                          id='math6-18'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-18", `${e.target.checked}`)
                              setSelectedMath18(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-problems"
              rel="noreferrer" target="_blank"> Percent
              problems</a>
            </p>

            <span className="days">Lesson 19</span>
            <ToggleSwitch checked={selectedMath19}
                          id='math6-19'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-19", `${e.target.checked}`)
                              setSelectedMath19(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-word-problems"
              rel="noreferrer" target="_blank"> Percent
              word problems </a>
            </p>

            <span className="days">Lesson 20</span>
            <ToggleSwitch checked={selectedMath20}
                          id='math6-20'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-20", `${e.target.checked}`)
                              setSelectedMath20(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic#cc-6th-percent-word-problems"
              rel="noreferrer" target="_blank"> Percent
              word problems</a>
            </p>

            <span className="days">Lesson 21</span>
            <ToggleSwitch checked={selectedMath21} id='math6-21' label='Completed' onChange={
              (e) => {
                localStorage.setItem("math6-21", `${e.target.checked}`)
                setSelectedMath21(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <p className="margin-para">Complete the Unit Test for Ratios, Rates and Percentages<a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic/test/cc-6th-ratios-prop-topic-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT
              TEST</a>
            </p>

            <span className="days">Lesson 22</span>
            <ToggleSwitch checked={selectedMath22}
                          id='math6-22'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-22", `${e.target.checked}`)
                              setSelectedMath22(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            Watch the TedEd Video <i>Where do math symbols come from? </i> by John David Walters
            <Video videoUrl="https://www.youtube.com/embed/eVm063xmnow"/>

            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-add-decimals"
              rel="noreferrer" target="_blank">
              Adding decimals</a></p>

            <span className="days">Lesson 23</span>
            <ToggleSwitch checked={selectedMath23}
                          id='math6-23'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-23", `${e.target.checked}`)
                              setSelectedMath23(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, <i> Adding Decimals </i>, complete the
              remainder of <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-add-decimals"
                rel="noreferrer" target="_blank">
                Adding decimals</a></p>
            <Video videoUrl="https://www.youtube.com/embed/V7EeXQaD95A"/>

            <span className="days">Lesson 24</span>
            <ToggleSwitch checked={selectedMath24}
                          id='math6-24'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-24", `${e.target.checked}`)
                              setSelectedMath24(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-sub-decimals"
              rel="noreferrer" target="_blank"> Subtracting
              decimals </a></p>

            <span className="days">Lesson 25</span>
            <ToggleSwitch checked={selectedMath25}
                          id='math6-25'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-25", `${e.target.checked}`)
                              setSelectedMath25(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-sub-decimals"
              rel="noreferrer" target="_blank"> Subtracting
              decimals </a>
            </p>

            <span className="days">Lesson 26</span>
            <ToggleSwitch checked={selectedMath26}
                          id='math6-26'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-26", `${e.target.checked}`)
                              setSelectedMath26(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-add-sub-decimals-word-problems"
              rel="noreferrer" target="_blank"> Adding
              and subtracting decimals word problems</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">If you count 20 houses on your right going to school and 20 houses on your
              left coming home, how many houses did you count? </p>
            <MathPuzzle
              solution="20 houses, since the houses on your right would be the same houses on your left while coming back."/>

            <span className="days">Lesson 27</span>
            <ToggleSwitch checked={selectedMath27}
                          id='math6-27'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-27", `${e.target.checked}`)
                              setSelectedMath27(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-add-sub-decimals-word-problems"
                rel="noreferrer" target="_blank"> Adding
                and subtracting decimals word problems </a></p>

            <span className="days">Lesson 28</span>
            <ToggleSwitch checked={selectedMath28}
                          id='math6-28'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-28", `${e.target.checked}`)
                              setSelectedMath28(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-multiplying-decimals"
              rel="noreferrer" target="_blank"> Multiplying decimals</a></p>
            <Video videoUrl="https://www.youtube.com/embed/NwqbIylayd0"/>

            <span className="days">Lesson 29</span>
            <ToggleSwitch checked={selectedMath29}
                          id='math6-29'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-29", `${e.target.checked}`)
                              setSelectedMath29(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-multiplying-decimals"
              rel="noreferrer" target="_blank"> Multiplying
              decimals</a>
            </p>

            <span className="days">Lesson 30</span>
            <ToggleSwitch checked={selectedMath30}
                          id='math6-30'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-30", `${e.target.checked}`)
                              setSelectedMath30(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-div-whole-numbers"
              rel="noreferrer" target="_blank"> Dividing
              whole numbers</a></p>
            Watch the TedEd Video <i>Why can't you divide by zero? </i>
            <Video videoUrl="https://www.youtube.com/embed/NKmGVE85GUU"/>

            <span className="days">Lesson 31</span>
            <ToggleSwitch checked={selectedMath31}
                          id='math6-31'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-31", `${e.target.checked}`)
                              setSelectedMath31(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-div-whole-numbers"
              rel="noreferrer" target="_blank"> Dividing
              whole numbers</a></p>

            <span className="days">Lesson 32</span>
            <ToggleSwitch checked={selectedMath32}
                          id='math6-32'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-32", `${e.target.checked}`)
                              setSelectedMath32(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-dividing-decimals"
              rel="noreferrer" target="_blank"> Dividing
              decimals</a></p>

            <span className="days">Lesson 33</span>
            <ToggleSwitch checked={selectedMath33}
                          id='math6-33'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-33", `${e.target.checked}`)
                              setSelectedMath33(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, <i> Decimal Multiplication and Division
            </i>, complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-dividing-decimals"
              rel="noreferrer" target="_blank"> Dividing
              decimals</a>
            </p>
            <Video videoUrl="https://www.youtube.com/embed/Htt09rY9I_A"/>

            <span className="days">Lesson 34</span>
            <ToggleSwitch checked={selectedMath34}
                          id='math6-34'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-34", `${e.target.checked}`)
                              setSelectedMath34(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-dividing-fractions"
              rel="noreferrer" target="_blank"> Dividing
              fractions by fractions</a></p>

            <span className="days">Lesson 35</span>
            <ToggleSwitch checked={selectedMath35}
                          id='math6-35'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-35", `${e.target.checked}`)
                              setSelectedMath35(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-dividing-fractions"
              rel="noreferrer" target="_blank"> Dividing
              fractions by fractions</a></p>

            <span className="days">Lesson 36</span>
            <ToggleSwitch checked={selectedMath36}
                          id='math6-36'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-36", `${e.target.checked}`)
                              setSelectedMath36(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-exponents"
              rel="noreferrer" target="_blank"> Exponents</a>
            </p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin"> You have an unreliable clock. The clock loses exactly 24 minutes every
              hour. It is now showing 3:00am and you have set it correctly at midnight. The clock stopped 1 hour
              ago, what is the correct time now? </p>
            <MathPuzzle solution="The time is 6am.
For every 1 hour that has passed, the clock will only show 36 minutes as it will lose 24 minutes.
When the clock was showing 3am, 180 clock minutes have passed since midnight. This means that 300 (180/36 x 24 minutes + 180 minutes) real minutes have passed when the clock was showing 3am. Since the clock stopped 1 hour ago, another 60 minutes have passed. Therefore a total of 360 minutes have passed.
Since 360 minutes = 6 hours, the time is 6 hours after midnight."/>

            <span className="days">Lesson 37</span>
            <ToggleSwitch checked={selectedMath37}
                          id='math6-37'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-37", `${e.target.checked}`)
                              setSelectedMath37(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-exponents"
              rel="noreferrer" target="_blank"> Exponents</a>
            </p>

            <span className="days">Lesson 38</span>
            <ToggleSwitch checked={selectedMath38}
                          id='math6-38'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-38", `${e.target.checked}`)
                              setSelectedMath38(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-order-of-operations"
              rel="noreferrer" target="_blank"> Order
              of operations</a></p>

            <span className="days">Lesson 39</span>
            <ToggleSwitch checked={selectedMath39}
                          id='math6-39'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-39", `${e.target.checked}`)
                              setSelectedMath39(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, <i>Math Antics - Order Of Operations </i>,
              complete the remainder of <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations#cc-6th-order-of-operations"
                rel="noreferrer" target="_blank"> Order
                of operations</a></p>
            <Video videoUrl="https://www.youtube.com/embed/dAgfnK528RA"/>


            <span className="days">Lesson 40</span>
            <ToggleSwitch checked={selectedMath40}
                          id='math6-40'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-40", `${e.target.checked}`)
                              setSelectedMath40(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/quiz/cc-6th-arithmetic-operations-quiz-4?modal=1"
              rel="noreferrer" target="_blank"> Quiz
              4 for Arithmetic Operations</a>
            </p>

            <span className="days">Lesson 41</span>
            <ToggleSwitch checked={selectedMath41}
                          id='math6-41'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-41", `${e.target.checked}`)
                              setSelectedMath41(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete the <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations/test/cc-6th-arithmetic-operations-unit-test?modal=1"
              rel="noreferrer" target="_blank"> Unit
              Test for Arithmetic Operations</a></p>

            <span className="days">Lesson 42</span>
            <ToggleSwitch checked={selectedMath42}
                          id='math6-42'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-42", `${e.target.checked}`)
                              setSelectedMath42(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Begin Unit: Negative Numbers and complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-neg-num-intro"
              rel="noreferrer" target="_blank"> Intro
              to negative numbers</a></p>

            <span className="days">Lesson 43</span>
            <ToggleSwitch checked={selectedMath43}
                          id='math6-43'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-43", `${e.target.checked}`)
                              setSelectedMath43(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-neg-num-intro"
              rel="noreferrer" target="_blank"> Intro
              to negative numbers</a></p>

            <span className="days">Lesson 44</span>
            <ToggleSwitch checked={selectedMath44}
                          id='math6-44'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-44", `${e.target.checked}`)
                              setSelectedMath44(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-neg-dec-frac-number-line"
                rel="noreferrer" target="_blank"> Negative
                decimals &amp; fractions on the number line</a></p>

            <span className="days">Lesson 45</span>
            <ToggleSwitch checked={selectedMath45}
                          id='math6-45'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-45", `${e.target.checked}`)
                              setSelectedMath45(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-neg-dec-frac-number-line"
                rel="noreferrer" target="_blank"> Negative
                decimals &amp; fractions on the number line</a>
            </p>

            <span className="days">Lesson 46</span>
            <ToggleSwitch checked={selectedMath46}
                          id='math6-46'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-46", `${e.target.checked}`)
                              setSelectedMath46(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-number-opposites"
                rel="noreferrer" target="_blank"> Number
                opposites</a></p>

            <span className="days">Lesson 47</span>
            <ToggleSwitch checked={selectedMath47}
                          id='math6-47'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-47", `${e.target.checked}`)
                              setSelectedMath47(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-number-opposites"
                rel="noreferrer" target="_blank"> Number
                opposites</a></p>

            <span className="days">Lesson 48</span>
            <ToggleSwitch checked={selectedMath48}
                          id='math6-48'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-48", `${e.target.checked}`)
                              setSelectedMath48(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-comparing-negative-numbers"
              rel="noreferrer" target="_blank"> Comparing
              negative numbers</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">You have two jugs. One holds exactly 3 gallons and the other 5 gallons of
              water. You have unlimited supply of water. How do you fill 4 gallons of water into the five-gallon
              jug? </p>
            <MathPuzzle solution="Fill up the three-gallon jug and pour it into the five-gallon jug.
Do it again and there will be one gallon left in the three-gallon jug.
Empty the five-gallon jug and pour in the one gallon of water from the three-gallon jug.
Fill the three-gallon jug with water again and pour it into the five-gallon jug. The five-gallon jug should now contain 4 gallons of water."/>


            <span className="days">Lesson 49</span>
            <ToggleSwitch checked={selectedMath49}
                          id='math6-49'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-49", `${e.target.checked}`)
                              setSelectedMath49(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-comparing-negative-numbers"
              rel="noreferrer" target="_blank"> Comparing
              negative numbers</a>
            </p>

            <span className="days">Lesson 50</span>
            <ToggleSwitch checked={selectedMath50}
                          id='math6-50'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-50", `${e.target.checked}`)
                              setSelectedMath50(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#negative-symbol-as-opposite"
              rel="noreferrer" target="_blank"> Negative
              symbol as opposite</a></p>

            <span className="days">Lesson 51</span>
            <ToggleSwitch checked={selectedMath51}
                          id='math6-51'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-51", `${e.target.checked}`)
                              setSelectedMath51(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#negative-symbol-as-opposite"
              rel="noreferrer" target="_blank"> Negative
              symbol as opposite</a></p>

            <span className="days">Lesson 52</span>
            <ToggleSwitch checked={selectedMath52}
                          id='math6-52'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-52", `${e.target.checked}`)
                              setSelectedMath52(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-absolute-value"
              rel="noreferrer" target="_blank"> Absolute
              value</a></p>

            <span className="days">Lesson 53</span>
            <ToggleSwitch checked={selectedMath53}
                          id='math6-53'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-53", `${e.target.checked}`)
                              setSelectedMath53(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-absolute-value"
              rel="noreferrer" target="_blank"> Absolute
              value</a>
            </p>

            <span className="days">Lesson 54</span>
            <ToggleSwitch checked={selectedMath54}
                          id='math6-54'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-54", `${e.target.checked}`)
                              setSelectedMath54(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">A half is a third of it. What is it? </p>
            <MathPuzzle solution="It is 11⁄2. Let “it” be x.  (1⁄3)x = (1⁄2). x = 3⁄2"/>

            <p className="margin-para"> Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-coordinate-plane"
              rel="noreferrer" target="_blank"> Coordinate
              plane</a></p>

            <span className="days">Lesson 55</span>
            <ToggleSwitch checked={selectedMath55}
                          id='math6-55'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-55", `${e.target.checked}`)
                              setSelectedMath55(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic#cc-6th-coordinate-plane"
              rel="noreferrer" target="_blank"> Coordinate
              plane</a></p>

            <span className="days">Lesson 56</span>
            <ToggleSwitch checked={selectedMath56}
                          id='math6-56'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-56", `${e.target.checked}`)
                              setSelectedMath56(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/test/cc-6th-negative-number-topic-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT
              TEST for Negative Numbers</a>
            </p>

            <span className="days">Lesson 57</span>
            <ToggleSwitch checked={selectedMath57}
                          id='math6-57'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-57", `${e.target.checked}`)
                              setSelectedMath57(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples#properties-of-numbers"
              rel="noreferrer" target="_blank"> Properties
              of numbers</a></p>

            <span className="days">Lesson 58</span>
            <ToggleSwitch checked={selectedMath58}
                          id='math6-58'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-58", `${e.target.checked}`)
                              setSelectedMath58(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples#properties-of-numbers"
              rel="noreferrer" target="_blank"> Properties
              of numbers</a></p>

            <span className="days">Lesson 59</span>
            <ToggleSwitch checked={selectedMath59}
                          id='math6-59'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-59", `${e.target.checked}`)
                              setSelectedMath59(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/whole-numbers-integers/a/whole-numbers-integers"
              rel="noreferrer" target="_blank"> Whole
              numbers &amp; integers</a></p>

            <span className="days">Lesson 60</span>
            <ToggleSwitch checked={selectedMath60}
                          id='math6-60'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-60", `${e.target.checked}`)
                              setSelectedMath60(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/whole-numbers-integers/a/whole-numbers-integers"
              rel="noreferrer" target="_blank"> Whole
              numbers &amp; integers</a></p>

            <span className="days">Lesson 61</span>
            <ToggleSwitch checked={selectedMath61}
                          id='math6-61'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-61", `${e.target.checked}`)
                              setSelectedMath61(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-lcm/v/least-common-multiple-exercise"
              rel="noreferrer" target="_blank"> Least
              common multiple</a></p>

            <span className="days">Lesson 62</span>
            <ToggleSwitch checked={selectedMath62}
                          id='math6-62'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-62", `${e.target.checked}`)
                              setSelectedMath62(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-lcm/v/least-common-multiple-exercise"
              rel="noreferrer" target="_blank"> Least
              common multiple</a></p>

            <span className="days">Lesson 63</span>
            <ToggleSwitch checked={selectedMath63}
                          id='math6-63'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-63", `${e.target.checked}`)
                              setSelectedMath63(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-gcf/v/greatest-common-divisor-factor-exercise"
              rel="noreferrer" target="_blank"> Greatest
              common factor</a></p>

            <span className="days">Lesson 64</span>
            <ToggleSwitch checked={selectedMath64}
                          id='math6-64'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-64", `${e.target.checked}`)
                              setSelectedMath64(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, <i> Greatest Common Factor Trick GCF
            </i>, complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-gcf/v/greatest-common-divisor-factor-exercise"
              rel="noreferrer" target="_blank"> Greatest
              common factor</a></p>
            <Video videoUrl="https://www.youtube.com/embed/7XgjqkvKHRQ"/>

            <span className="days">Lesson 65</span>
            <ToggleSwitch checked={selectedMath65}
                          id='math6-65'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-65", `${e.target.checked}`)
                              setSelectedMath65(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Begin Variables &amp; expressions. Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-evaluating-expressions/v/what-is-a-variable"
              rel="noreferrer" target="_blank"> Parts
              of algebraic
              expressions </a></p>

            <span className="days">Lesson 66</span>
            <ToggleSwitch checked={selectedMath66}
                          id='math6-66'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-66", `${e.target.checked}`)
                              setSelectedMath66(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-evaluating-expressions/v/what-is-a-variable"
              rel="noreferrer" target="_blank"> Parts
              of algebraic expressions </a></p>

            <span className="days">Lesson 67</span>
            <ToggleSwitch checked={selectedMath67}
                          id='math6-67'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-67", `${e.target.checked}`)
                              setSelectedMath67(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-substitution/v/variables-and-expressions-1"
              rel="noreferrer" target="_blank"> Substitution
              &amp; evaluating expressions</a></p>

            <span className="days">Lesson 68</span>
            <ToggleSwitch checked={selectedMath68}
                          id='math6-68'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-68", `${e.target.checked}`)
                              setSelectedMath68(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-substitution/v/variables-and-expressions-1"
              rel="noreferrer" target="_blank"> Substitution
              &amp; evaluating expressions</a></p>

            <span className="days">Lesson 69</span>
            <ToggleSwitch checked={selectedMath69}
                          id='math6-69'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-69", `${e.target.checked}`)
                              setSelectedMath69(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/expression-value-intuition/v/expression-value-change-examples"
              rel="noreferrer" target="_blank"> Expression
              value intuition</a></p>

            <span className="days">Lesson 70</span>
            <ToggleSwitch checked={selectedMath70}
                          id='math6-70'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-70", `${e.target.checked}`)
                              setSelectedMath70(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/expression-value-intuition/v/expression-value-change-examples"
              rel="noreferrer" target="_blank"> Expression
              value intuition</a></p>

            <span className="days">Lesson 71</span>
            <ToggleSwitch checked={selectedMath71}
                          id='math6-71'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-71", `${e.target.checked}`)
                              setSelectedMath71(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-7th-evaluating-expressions-word-problems/v/evaluate-a-formula-using-substitution"
              rel="noreferrer" target="_blank"> Evaluating
              expressions word problems</a></p>

            <span className="days">Lesson 72</span>
            <ToggleSwitch checked={selectedMath72}
                          id='math6-72'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-72", `${e.target.checked}`)
                              setSelectedMath72(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-7th-evaluating-expressions-word-problems/v/evaluate-a-formula-using-substitution"
              rel="noreferrer" target="_blank"> Evaluating
              expressions word problems</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">Your friend has 100 red marbles, 100 blue marbles and 2 jars.</p>
            <p className="topBottom">He proposes a game. He fills the jars with the marbles, put the two jars behind his
              back and tell
              you to pick one of them at random. You’ll then close your eyes, he’ll hand you the jar you picked,
              and you’ll pick a random marble from that jar.</p>
            <p className="topBottom">You win if the marble you pick is blue, and you lose otherwise.</p>
            <p className="topBottom">To give you the best shot at winning, your friend gives you the two jars before the
              game starts and
              says you can move the marbles around however you’d like, as long as all 200 marbles are in one of
              the 2 jars (that is, you can’t throw any marbles away).</p>
            <p className="topBottom">How should you move the marbles around to give yourself the best chance of picking
              a blue
              marble?</p>
            <MathPuzzle solution="Put one blue marble in one jar, and put the rest of the marbles in the other jar. This will give you just about a 75% chance of picking a blue marble.
Let P(blue) = probability of picking a blue marble. Jar 1 contains 1 blue marble and Jar 2 contains 99 blue marbles and 100 red marbles.
So: P(blue) = P(jar 1) * P(blue in jar 1) + P(jar 2) * P(blue in jar 2)
P(blue) = 0.5 * 1 + 0.5 * 99/199
P(blue) = 0.748
Thus, we end up with ~75% chance of picking a blue marble."/>

            <span className="days">Lesson 73</span>
            <ToggleSwitch checked={selectedMath73}
                          id='math6-73'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-73", `${e.target.checked}`)
                              setSelectedMath73(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-writing-expressions/v/writing-expressions-with-variables-examples"
              rel="noreferrer" target="_blank">
              Writing algebraic expressions introduction</a></p>

            <span className="days">Lesson 74</span>
            <ToggleSwitch checked={selectedMath74}
                          id='math6-74'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-74", `${e.target.checked}`)
                              setSelectedMath74(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-writing-expressions/v/writing-expressions-with-variables-examples"
              rel="noreferrer" target="_blank">
              Writing algebraic expressions introduction</a></p>

            <span className="days">Lesson 75</span>
            <ToggleSwitch checked={selectedMath75}
                          id='math6-75'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-75", `${e.target.checked}`)
                              setSelectedMath75(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-alg-expression-word-problems/v/writing-basic-expressions-from-word-problems-examples"
              rel="noreferrer" target="_blank"> Writing
              basic algebraic expressions word problems</a></p>

            <span className="days">Lesson 76</span>
            <ToggleSwitch checked={selectedMath76}
                          id='math6-76'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-76", `${e.target.checked}`)
                              setSelectedMath76(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-alg-expression-word-problems/v/writing-basic-expressions-from-word-problems-examples"
              rel="noreferrer" target="_blank"> Writing
              basic algebraic expressions word problems</a></p>

            <span className="days">Lesson 77</span>
            <ToggleSwitch checked={selectedMath77}
                          id='math6-77'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-77", `${e.target.checked}`)
                              setSelectedMath77(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-distributive-property/v/the-distributive-property"
              rel="noreferrer" target="_blank"> Distributive
              property with variables</a></p>

            <span className="days">Lesson 78</span>
            <ToggleSwitch checked={selectedMath78}
                          id='math6-78'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-78", `${e.target.checked}`)
                              setSelectedMath78(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-distributive-property/v/the-distributive-property"
              rel="noreferrer" target="_blank"> Distributive
              property with variables</a></p>

            <span className="days">Lesson 79</span>
            <ToggleSwitch checked={selectedMath79}
                          id='math6-79'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-79", `${e.target.checked}`)
                              setSelectedMath79(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-combining-like-terms/v/combining-like-terms"
              rel="noreferrer" target="_blank"> Combining
              like terms</a></p>

            <span className="days">Lesson 80</span>
            <ToggleSwitch checked={selectedMath80}
                          id='math6-80'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-80", `${e.target.checked}`)
                              setSelectedMath80(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-combining-like-terms/v/combining-like-terms"
              rel="noreferrer" target="_blank"> Combining
              like terms</a></p>

            <span className="days">Lesson 81</span>
            <ToggleSwitch checked={selectedMath81}
                          id='math6-81'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-81", `${e.target.checked}`)
                              setSelectedMath81(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-equivalent-expressions/v/equivalent-algebraic-expressions-exercise"
              rel="noreferrer" target="_blank"> Equivalent
              expressions</a></p>

            <span className="days">Lesson 82</span>
            <ToggleSwitch checked={selectedMath82}
                          id='math6-82'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-82", `${e.target.checked}`)
                              setSelectedMath82(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-equivalent-expressions/v/equivalent-algebraic-expressions-exercise"
              rel="noreferrer" target="_blank"> Equivalent
              expressions</a></p>

            <span className="days">Lesson 83</span>
            <ToggleSwitch checked={selectedMath83}
                          id='math6-83'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-83", `${e.target.checked}`)
                              setSelectedMath83(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Begin the unit on Equations &amp; inequalities - Introduction. Complete
              at
              least 50%
              of
              <a
                href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-intro-equations/v/variables-expressions-and-equations"
                rel="noreferrer" target="_blank"> Algebraic
                equations basics.</a></p>

            <span className="days">Lesson 84</span>
            <ToggleSwitch checked={selectedMath84}
                          id='math6-84'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-84", `${e.target.checked}`)
                              setSelectedMath84(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-intro-equations/v/variables-expressions-and-equations"
              rel="noreferrer" target="_blank"> Algebraic
              equations basics.</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There are some people on a train.<br/>
              19 get off at the first stop. 17 get on. Now there are 63 people on the train.<br/>
              How many were on the train to begin with?<br/></p>
            <MathPuzzle solution="There were 65 people to begin with.
19 people getting off the train can be represented by -19, and 17 people getting on the train as +17.
-19 + 17 = -2, meaning that there was a net loss of two people. If there are 63 people on the train now, that means there were 65 to begin with.
"/>

            <span className="days">Lesson 85</span>
            <ToggleSwitch checked={selectedMath85}
                          id='math6-85'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-85", `${e.target.checked}`)
                              setSelectedMath85(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-solving-equations/v/why-we-do-the-same-thing-to-both-sides-simple-equations"
              rel="noreferrer" target="_blank"> One-step
              equations intuition</a></p>

            <span className="days">Lesson 86</span>
            <ToggleSwitch checked={selectedMath86}
                          id='math6-86'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-86", `${e.target.checked}`)
                              setSelectedMath86(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-solving-equations/v/why-we-do-the-same-thing-to-both-sides-simple-equations"
              rel="noreferrer" target="_blank"> One-step
              equations intuition</a></p>

            <span className="days">Lesson 87</span>
            <ToggleSwitch checked={selectedMath87}
                          id='math6-87'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-87", `${e.target.checked}`)
                              setSelectedMath87(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-add-sub-equations/v/adding-and-subtracting-the-same-thing-from-both-sides"
              rel="noreferrer" target="_blank"> One-step
              addition &amp; subtraction equations</a></p>
            <Video videoUrl="https://www.youtube.com/embed/l3XzepN03KQ"/>

            <span className="days">Lesson 88</span>
            <ToggleSwitch checked={selectedMath88}
                          id='math6-88'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-88", `${e.target.checked}`)
                              setSelectedMath88(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-add-sub-equations/v/adding-and-subtracting-the-same-thing-from-both-sides"
              rel="noreferrer" target="_blank"> One-step
              addition &amp; subtraction equations</a></p>

            <span className="days">Lesson 89</span>
            <ToggleSwitch checked={selectedMath89}
                          id='math6-89'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-89", `${e.target.checked}`)
                              setSelectedMath89(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-mult-div-equations/v/simple-equations"
              rel="noreferrer" target="_blank"> One-step
              multiplication and division equations</a></p>
            <Video videoUrl="https://www.youtube.com/embed/Qyd_v3DGzTM"/>

            <span className="days">Lesson 90</span>
            <ToggleSwitch checked={selectedMath90}
                          id='math6-90'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-90", `${e.target.checked}`)
                              setSelectedMath90(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-one-step-mult-div-equations/v/simple-equations"
              rel="noreferrer" target="_blank"> One-step
              multiplication and division equations</a></p>

            <span className="days">Lesson 91</span>
            <ToggleSwitch checked={selectedMath91}
                          id='math6-91'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-91", `${e.target.checked}`)
                              setSelectedMath91(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/pre-algebra-one-step-equation-mistakes/v/finding-mistakes-in-one-step-equations"
              rel="noreferrer" target="_blank">
              Finding mistakes in one-step equations</a></p>

            <span className="days">Lesson 92</span>
            <ToggleSwitch checked={selectedMath92}
                          id='math6-92'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-92", `${e.target.checked}`)
                              setSelectedMath92(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/pre-algebra-one-step-equation-mistakes/v/finding-mistakes-in-one-step-equations"
              rel="noreferrer" target="_blank">
              Finding mistakes in one-step equations</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There is an island filled with grass and trees and plants. The only
              inhabitants are 100 lions and 1 sheep.</p>
            <img src={require("../../public/images/math/lamblion.jpg")}
                 alt='lamb and lion'/><br/>
            <p className="topBottom">The lions are special:<br/>
              They are infinitely logical, smart, and completely aware of their surroundings. They can survive by
              just eating grass (and there is an infinite amount of grass on the island). They prefer of course to eat
              the sheep.
              Their only food options are grass or sheep.</p>
            <p className="topBottom">Now, here’s the kicker:<br/>
              If a lion eats a sheep he TURNS INTO A SHEEP (and could then be eaten by other lions).
              A lion would rather eat grass all his life than be eaten by another lion (after he turned into a
              sheep).</p>
            <p className="topBottom">You can make the following assumptions:<br/>
              Assume that one lion is closest to the sheep and will get to it before all others. Assume that there
              is never an issue with who gets to the sheep first. The issue is whether the first lion will get
              eaten by other lions afterwards or not.
              The sheep cannot get away from the lion if the lion decides to eat it.</p>
            <p className="topBottom">Do not assume anything that hasn’t been stated above. </p>
            <p className="topBottom">Will that one sheep get eaten or not and why?</p>
            <MathPuzzle solution="The sheep will survive.
If there were 1 lion and 1 sheep, then the lion would simply eat the sheep. The sheep will not survive.
If there were 2 lions and 1 sheep, then no lion would eat the sheep, because if one of them would, it would surely be eaten by the other lion afterwards. The sheep will survive.
If there were 3 lions and 1 sheep, then one of the lions could safely eat the sheep, because it would turn into the scenario with 2 lions, where no one can eat the sheep. The sheep will not survive.
If there were 4 lions and 1 sheep, then no lion would eat the sheep, because it would turn into the scenario with 3 lions. The sheep will survive.
Continuing this argument, the conclusion is as follows:
If there is an even number of lions, then nothing happens and the sheep survives.
If there is an odd number of lions, then any lion could safely eat the sheep and the sheep will not survive."/>

            <span className="days">Lesson 93</span>
            <ToggleSwitch checked={selectedMath93}
                          id='math6-93'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-93", `${e.target.checked}`)
                              setSelectedMath93(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-super-yoga/v/constructing-basic-equations-examples"
              rel="noreferrer" target="_blank"> One-step
              equation word problems</a></p>

            <span className="days">Lesson 94</span>
            <ToggleSwitch checked={selectedMath94}
                          id='math6-94'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-94", `${e.target.checked}`)
                              setSelectedMath94(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-super-yoga/v/constructing-basic-equations-examples"
              rel="noreferrer" target="_blank"> One-step
              equation word problems</a></p>

            <span className="days">Lesson 95</span>
            <ToggleSwitch checked={selectedMath95}
                          id='math6-95'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-95", `${e.target.checked}`)
                              setSelectedMath95(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-inequalities/v/testing-solutions-to-inequalities"
              rel="noreferrer" target="_blank"> Intro
              to inequalities with variables</a></p>

            <span className="days">Lesson 96</span>
            <ToggleSwitch checked={selectedMath96}
                          id='math6-96'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-96", `${e.target.checked}`)
                              setSelectedMath96(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-inequalities/v/testing-solutions-to-inequalities"
              rel="noreferrer" target="_blank"> Intro
              to inequalities with variables</a></p>

            <span className="days">Lesson 97</span>
            <ToggleSwitch checked={selectedMath97}
                          id='math6-97'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-97", `${e.target.checked}`)
                              setSelectedMath97(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-dependent-independent/v/dependent-and-independent-variables-exercise-example-1"
              rel="noreferrer" target="_blank"> Dependent
              and independent variables</a></p>

            <span className="days">Lesson 98</span>
            <ToggleSwitch checked={selectedMath98}
                          id='math6-98'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-98", `${e.target.checked}`)
                              setSelectedMath98(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities/cc-6th-dependent-independent/v/dependent-and-independent-variables-exercise-example-1"
              rel="noreferrer" target="_blank"> Dependent
              and independent variables</a></p>

            <span className="days">Lesson 99</span>
            <ToggleSwitch checked={selectedMath99}
                          id='math6-99'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-99", `${e.target.checked}`)
                              setSelectedMath99(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-parallelogram-area/v/intuition-for-area-of-a-parallelogram"
              rel="noreferrer" target="_blank"> Areas of parallelograms</a></p>
            <Video videoUrl="https://www.youtube.com/embed/PKzE3OWxDfQ"/>

            <span className="days">Lesson 100</span>
            <ToggleSwitch checked={selectedMath100}
                          id='math6-100'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-100", `${e.target.checked}`)
                              setSelectedMath100(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-parallelogram-area/v/intuition-for-area-of-a-parallelogram"
              rel="noreferrer" target="_blank"> Areas
              of parallelograms</a></p>

            <span className="days">Lesson 101</span>
            <ToggleSwitch checked={selectedMath101}
                          id='math6-101'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-101", `${e.target.checked}`)
                              setSelectedMath101(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area-triangle/v/intuition-for-area-of-a-triangle"
              rel="noreferrer" target="_blank"> Area
              of a triangle</a></p>
            <Video videoUrl="https://www.youtube.com/embed/xCdxURXMdFY"/>
            <span className="days">Lesson 102</span>
            <ToggleSwitch checked={selectedMath102}
                          id='math6-102'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-102", `${e.target.checked}`)
                              setSelectedMath102(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area-triangle/v/intuition-for-area-of-a-triangle"
              rel="noreferrer" target="_blank"> Area
              of a triangle</a></p>

            <span className="days">Lesson 103</span>
            <ToggleSwitch checked={selectedMath103}
                          id='math6-103'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-103", `${e.target.checked}`)
                              setSelectedMath103(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area/v/area-comparisons"
              rel="noreferrer" target="_blank"> Area
              of composite figures</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There was a magic tree that on the first day increased its height by half,
              on the second by day by a third, on the third day by a quarter, and so on. How many days did it take
              it to grow one hundred times its original height? </p>
            <img src={require("../../public/images/math/magictree.jpg")}
                 alt='magic tree'/>
            <MathPuzzle
              solution="It will take 198 days. Let’s say the tree was originally one foot tall. On the first day, it grew half a foot; on the next day 1⁄3 of 11⁄2 feet, which is half a foot; and so on – it grew half a foot every day. So in 198 days, it grew 99 feet, and then was 100 feet tall."/>

            <span className="days">Lesson 104</span>
            <ToggleSwitch checked={selectedMath104}
                          id='math6-104'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-104", `${e.target.checked}`)
                              setSelectedMath104(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area/v/area-comparisons"
              rel="noreferrer" target="_blank"> Area
              of composite figures</a></p>

            <span className="days">Lesson 105</span>
            <ToggleSwitch checked={selectedMath105}
                          id='math6-105'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-105", `${e.target.checked}`)
                              setSelectedMath105(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/geometric-solids/v/counting-faces-and-edges-of-3d-shapes"
              rel="noreferrer" target="_blank"> Geometric
              solids (3D shapes)</a></p>

            <span className="days">Lesson 106</span>
            <ToggleSwitch checked={selectedMath106}
                          id='math6-106'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-106", `${e.target.checked}`)
                              setSelectedMath106(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/geometric-solids/v/counting-faces-and-edges-of-3d-shapes"
              rel="noreferrer" target="_blank"> Geometric
              solids (3D shapes)</a></p>

            <span className="days">Lesson 107</span>
            <ToggleSwitch checked={selectedMath107}
                          id='math6-107'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-107", `${e.target.checked}`)
                              setSelectedMath107(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-volume-with-fractions/v/volume-of-a-rectangular-prism-with-fractional-cubes"
              rel="noreferrer" target="_blank"> Volume with fractions</a></p>
            <Video videoUrl="https://www.youtube.com/embed/qJwecTgce6c"/>

            <span className="days">Lesson 108</span>
            <ToggleSwitch checked={selectedMath108}
                          id='math6-108'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-108", `${e.target.checked}`)
                              setSelectedMath108(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-volume-with-fractions/v/volume-of-a-rectangular-prism-with-fractional-cubes"
              rel="noreferrer" target="_blank"> Volume
              with fractions</a></p>

            <span className="days">Lesson 109</span>
            <ToggleSwitch checked={selectedMath109}
                          id='math6-109'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-109", `${e.target.checked}`)
                              setSelectedMath109(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-surface-area/v/nets-of-polyhedra"
              rel="noreferrer" target="_blank"> Surface
              area</a></p>

            <span className="days">Lesson 110</span>
            <ToggleSwitch checked={selectedMath110}
                          id='math6-110'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-110", `${e.target.checked}`)
                              setSelectedMath110(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-surface-area/v/nets-of-polyhedra"
              rel="noreferrer" target="_blank"> Surface
              area</a></p>

            <span className="days">Lesson 111</span>
            <ToggleSwitch checked={selectedMath111}
                          id='math6-111'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-111", `${e.target.checked}`)
                              setSelectedMath111(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-quadrilaterals-on-plane/v/constructing-polygon-on-coordinate-plane-example"
              rel="noreferrer" target="_blank"> Polygons
              on the coordinate plane</a></p>

            <span className="days">Lesson 112</span>
            <ToggleSwitch checked={selectedMath112}
                          id='math6-112'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-112", `${e.target.checked}`)
                              setSelectedMath112(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-quadrilaterals-on-plane/v/constructing-polygon-on-coordinate-plane-example"
              rel="noreferrer" target="_blank"> Polygons
              on the coordinate plane</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">Three professors were arguing over how long they have been teaching.
              Andrew and Beyonce have been teaching for a total of thirty six years. Curt and Beyonce have been
              teaching for a total of twenty two years. Curt and Andrew have been teaching for a total of twenty
              eight years.<br/>
              Can you find out how long have each of them been teaching? </p>
            <MathPuzzle solution="Andrew have been teaching for 21 years. Beyonce have been teaching for 15 years. Curt have been teaching for 7 years.
Let Andrew = A, Beyonce = B and Curt = C, then:
A + B = 36
B + C = 22
A + C = 28
From equation (2), we get: B = 22 – C
From equation (3), we get: A = 28 – C
Substitute A and B into equation (1): (28 – C) + (22 – C) = 36
Solving for C gives 7. Substitute (C = 7) into equation(2) and (3)  "/>

            <span className="days">Lesson 113</span>
            <ToggleSwitch checked={selectedMath113}
                          id='math6-113'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-113", `${e.target.checked}`)
                              setSelectedMath113(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#dot-plot"
              rel="noreferrer" target="_blank"> Dot plots &amp; frequency tables</a></p>

            <span className="days">Lesson 114</span> <ToggleSwitch checked={selectedMath114}
                                                                   id='math6-114'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-114", `${e.target.checked}`)
                                                                       setSelectedMath114(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#dot-plot"
              rel="noreferrer" target="_blank"> Dot plots &amp; frequency tables</a></p>

            <span className="days">Lesson 115</span>
            <ToggleSwitch checked={selectedMath115}
                          id='math6-115'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-115", `${e.target.checked}`)
                              setSelectedMath115(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6-statistical-questions"
              rel="noreferrer" target="_blank"> Statistical questions</a></p>

            <span className="days">Lesson 116</span>
            <ToggleSwitch checked={selectedMath116}
                          id='math6-116'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-116", `${e.target.checked}`)
                              setSelectedMath116(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6-statistical-questions"
              rel="noreferrer" target="_blank"> Statistical questions</a></p>

            <span className="days">Lesson 117</span>
            <ToggleSwitch checked={selectedMath117}
                          id='math6-117'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-117", `${e.target.checked}`)
                              setSelectedMath117(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#histograms"
              rel="noreferrer" target="_blank"> Histograms</a></p>

            <span className="days">Lesson 118</span>
            <ToggleSwitch checked={selectedMath118}
                          id='math6-118'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-118", `${e.target.checked}`)
                              setSelectedMath118(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#histograms"
              rel="noreferrer" target="_blank"> Histograms</a></p>

            <span className="days">Lesson 119</span>
            <ToggleSwitch checked={selectedMath119}
                          id='math6-119'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-119", `${e.target.checked}`)
                              setSelectedMath119(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#mean-and-median"
              rel="noreferrer" target="_blank"> Mean and median</a></p>
            <Video videoUrl="https://www.youtube.com/embed/B1HEzNTGeZ4"/>

            <span className="days">Lesson 120</span>
            <ToggleSwitch checked={selectedMath120}
                          id='math6-120'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-120", `${e.target.checked}`)
                              setSelectedMath120(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#mean-and-median"
              rel="noreferrer" target="_blank"> Mean and median</a></p>

            <span className="days">Lesson 121</span>
            <ToggleSwitch checked={selectedMath121}
                          id='math6-121'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-121", `${e.target.checked}`)
                              setSelectedMath121(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6th-mean-median-challenge"
              rel="noreferrer" target="_blank"> Mean and median challenge problems</a></p>

            <span className="days">Lesson 122</span>
            <ToggleSwitch checked={selectedMath122}
                          id='math6-122'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-122", `${e.target.checked}`)
                              setSelectedMath122(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6th-mean-median-challenge"
              rel="noreferrer" target="_blank"> Mean and median challenge problems</a></p>

            <span className="days">Lesson 123</span>
            <ToggleSwitch checked={selectedMath123}
                          id='math6-123'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-123", `${e.target.checked}`)
                              setSelectedMath123(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6th"
              rel="noreferrer" target="_blank">
              Interquartile range (IQR)</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin"> If you go to the movies and you’re paying, is it cheaper to take one
              friend to the movies twice, or two friends to the movies at the same time? </p>
            <img src={require("../../public/images/math/movies.jpg")}
                 alt='at the movies'/><br/>
            <MathPuzzle
              solution="It’s cheaper to take two friends at the same time. In this case, you would only be buying three tickets, whereas if you take the same friend twice you would need to buy four tickets."/>

            <span className="days">Lesson 124</span>
            <ToggleSwitch checked={selectedMath124}
                          id='math6-124'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-124", `${e.target.checked}`)
                              setSelectedMath124(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics#cc-6th"
              rel="noreferrer" target="_blank">
              Interquartile range (IQR)</a></p>

            <span className="days">Lesson 125</span>
            <ToggleSwitch checked={selectedMath125}
                          id='math6-125'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-125", `${e.target.checked}`)
                              setSelectedMath125(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6th-box-whisker-plots/v/reading-box-and-whisker-plots"
              rel="noreferrer" target="_blank"> Box plots</a></p>

            <span className="days">Lesson 126</span>
            <ToggleSwitch checked={selectedMath126}
                          id='math6-126'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-126", `${e.target.checked}`)
                              setSelectedMath126(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6th-box-whisker-plots/v/reading-box-and-whisker-plots"
              rel="noreferrer" target="_blank"> Box plots</a></p>

            <span className="days">Lesson 127</span>
            <ToggleSwitch checked={selectedMath127}
                          id='math6-127'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-127", `${e.target.checked}`)
                              setSelectedMath127(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6-mad/v/mean-absolute-deviation"
              rel="noreferrer" target="_blank"> Mean absolute deviation (MAD)</a></p>

            <span className="days">Lesson 128</span>
            <ToggleSwitch checked={selectedMath128}
                          id='math6-128'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-128", `${e.target.checked}`)
                              setSelectedMath128(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6-mad/v/mean-absolute-deviation"
              rel="noreferrer" target="_blank"> Mean absolute deviation (MAD)</a></p>

            <span className="days">Lesson 129</span>
            <ToggleSwitch checked={selectedMath129}
                          id='math6-129'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-129", `${e.target.checked}`)
                              setSelectedMath129(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-7th-compare-data-displays/v/comparing-dot-plots-histograms-and-box-plots"
              rel="noreferrer" target="_blank"> Comparing data displays</a></p>

            <span className="days">Lesson 130</span>
            <ToggleSwitch checked={selectedMath130}
                          id='math6-130'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-130", `${e.target.checked}`)
                              setSelectedMath130(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-7th-compare-data-displays/v/comparing-dot-plots-histograms-and-box-plots"
              rel="noreferrer" target="_blank"> Comparing data displays</a></p>

            <span className="days">Lesson 131</span>
            <ToggleSwitch checked={selectedMath131}
                          id='math6-131'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-131", `${e.target.checked}`)
                              setSelectedMath131(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete at least 50% of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6-shape-of-data/v/shapes-of-distributions"
              rel="noreferrer" target="_blank"> Shape of data distributions</a></p>

            <span className="days">Lesson 132</span>
            <ToggleSwitch checked={selectedMath132}
                          id='math6-132'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-132", `${e.target.checked}`)
                              setSelectedMath132(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the remainder of <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6-shape-of-data/v/shapes-of-distributions"
              rel="noreferrer" target="_blank"> Shape of data distributions</a></p>

            <span className="days">Lesson 133 Course Challenge</span>
            <ToggleSwitch checked={selectedMath133}
                          id='math6-133'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-133", `${e.target.checked}`)
                              setSelectedMath133(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/test/cc-6th-data-statistics-unit-test?modal=1"
              rel="noreferrer" target="_blank"> Unit Test</a></p>

            <span className="days">Get Ready for the 7th Grade</span>

            <p className="margin-para">You may have already completed some of the lessons below. Repeating them is
              meant to further strengthen your skills in these areas before you begin the 7th grade. If you feel
              confident with the material, you may wish to test out of the lessons.</p>


            <span className="days">Lesson 134 </span>
            <ToggleSwitch checked={selectedMath134}
                          id='math6-134'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-134", `${e.target.checked}`)
                              setSelectedMath134(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:intro-to-negative-numbers/v/negative-numbers-introduction"
              rel="noreferrer" target="_blank"> Intro to negative numbers</a></p>

            <span className="days">Lesson 135</span>
            <ToggleSwitch checked={selectedMath135}
                          id='math6-135'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-135", `${e.target.checked}`)
                              setSelectedMath135(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin"> You can paddle your canoe seven miles per hour through any placid lake.
              The stream flows at three miles per hour. The moment you start to paddle up stream a fisherman loses
              one of his bobbers in the water fourteen miles up stream of you.<br/>
              How many hours does it take for you and the bobber to meet? </p>
            <img src={require("../../public/images/math/canoe.jpg")}
                 alt='canoeing'/><br/>
            <MathPuzzle solution="It will take 2 hours to meet.
Method 1: Ignore the speed of the stream, as the bobber will be carried along at three miles per hour as will you. It takes two hours to travel fourteen miles, at a rate of seven miles per hour.
Method 2: As the bobber travels at 3 mph, it will be six miles closer to you in two hours. The distance between you and the bobber becomes 8 miles (14 – 6). In two hours you would have travelled 8 ( (7-3) x 2 ) miles.  "/>

            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:negative-decimals-fractions-on-the-number-line/v/positive-and-negative-decimals-on-a-number-line"
              rel="noreferrer" target="_blank"> Negative decimals &amp; fractions on the number line</a></p>

            <span className="days">Lesson 136</span>
            <ToggleSwitch checked={selectedMath136}
                          id='math6-136'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-136", `${e.target.checked}`)
                              setSelectedMath136(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:negative-symbol-as-opposite/v/opposite-of-a-number"
              rel="noreferrer" target="_blank"> Negative symbol as opposite</a></p>

            <span className="days">Lesson 137</span>
            <ToggleSwitch checked={selectedMath137}
                          id='math6-137'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-137", `${e.target.checked}`)
                              setSelectedMath137(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:absolute-value/v/absolute-value-of-integers"
              rel="noreferrer" target="_blank"> Absolute value</a></p>

            <span className="days">Lesson 138</span>
            <ToggleSwitch checked={selectedMath138}
                          id='math6-138'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-138", `${e.target.checked}`)
                              setSelectedMath138(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:adding-and-subtracting-fractions-with-unlike-denominators/v/adding-fractions-with-unlike-denominators-introduction"
              rel="noreferrer" target="_blank"> Adding and subtracting fractions with unlike denominators</a>
            </p>

            <span className="days">Lesson 139</span>
            <ToggleSwitch checked={selectedMath139}
                          id='math6-139'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-139", `${e.target.checked}`)
                              setSelectedMath139(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:multiplying-fractions/v/multiplying-fractions"
              rel="noreferrer" target="_blank"> Multiplying fractions</a></p>
            <Video videoUrl="https://www.youtube.com/embed/qmfXyR7Z6Lk"/>

            <span className="days">Lesson 140</span>
            <ToggleSwitch checked={selectedMath140}
                          id='math6-140'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-140", `${e.target.checked}`)
                              setSelectedMath140(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">After you watch the video below, complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:fraction-as-division/v/fractions-as-division"
              rel="noreferrer" target="_blank"> Fraction as division</a></p>
            <Video videoUrl="https://www.youtube.com/embed/4lkq3DgvmJo"/>

            <span className="days">Lesson 141</span>
            <ToggleSwitch checked={selectedMath141}
                          id='math6-141'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-141", `${e.target.checked}`)
                              setSelectedMath141(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/xa46d6dd638f86863:dividing-fractions/v/conceptual-understanding-of-dividing-fractions-by-fractions"
              rel="noreferrer" target="_blank"> Dividing fractions</a></p>

            <span className="days">Lesson 142</span>
            <ToggleSwitch checked={selectedMath142}
                          id='math6-142'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-142", `${e.target.checked}`)
                              setSelectedMath142(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-negative-number-operations/test/xa46d6dd638f86863:get-ready-for-negative-number-operations-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>

            <span className="days">Lesson 143</span>
            <ToggleSwitch checked={selectedMath143}
                          id='math6-143'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-143", `${e.target.checked}`)
                              setSelectedMath143(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-fractions-decimals-percentages/xa46d6dd638f86863:adding-and-subtracting-decimals-word-problems/v/adding-decimals-word-problem"
              rel="noreferrer" target="_blank"> Adding and subtracting decimals word problems</a></p>

            <span className="days">Lesson 144</span>
            <ToggleSwitch checked={selectedMath144}
                          id='math6-144'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-144", `${e.target.checked}`)
                              setSelectedMath144(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-fractions-decimals-percentages/xa46d6dd638f86863:percent-problems/v/finding-percentages-example"
              rel="noreferrer" target="_blank"> Percent Problems</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">There are two planes. One is flying from New York to Tokyo at a speed of
              800 MPH. The other is flying from Tokyo to New York at a speed of 700 MPH.<br/>
              When the planes meet, which one will be closer to Tokyo? </p>
            <MathPuzzle solution="When the planes meet, they will be at the same distance from Tokyo."/>

            <span className="days">Lesson 145</span>
            <ToggleSwitch checked={selectedMath145}
                          id='math6-145'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-145", `${e.target.checked}`)
                              setSelectedMath145(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-fractions-decimals-percentages/xa46d6dd638f86863:percent-word-problems/v/percent-word-problems"
              rel="noreferrer" target="_blank"> Percent word problems</a></p>

            <span className="days">Lesson 146</span>
            <ToggleSwitch checked={selectedMath146}
                          id='math6-146'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-146", `${e.target.checked}`)
                              setSelectedMath146(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-fractions-decimals-percentages/test/xa46d6dd638f86863:get-ready-for-fractions-decimals-percentages-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>

            <span className="days">Lesson 147</span>
            <ToggleSwitch checked={selectedMath147}
                          id='math6-147'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-147", `${e.target.checked}`)
                              setSelectedMath147(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships/xa46d6dd638f86863:equivalent-ratios/v/equivalent-ratios"
              rel="noreferrer" target="_blank"> Equivalent ratios</a></p>

            <span className="days">Lesson 148</span>
            <ToggleSwitch checked={selectedMath148}
                          id='math6-148'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-148", `${e.target.checked}`)
                              setSelectedMath148(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships/xa46d6dd638f86863:ratio-application/v/ratios-on-coordinate-plane"
              rel="noreferrer" target="_blank"> Ratio application</a></p>

            <span className="days">Lesson 149</span>
            <ToggleSwitch checked={selectedMath149}
                          id='math6-149'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-149", `${e.target.checked}`)
                              setSelectedMath149(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships/xa46d6dd638f86863:intro-to-rates/v/introduction-to-rates"
              rel="noreferrer" target="_blank"> Intro to rates</a></p>

            <span className="days">Lesson 150</span>
            <ToggleSwitch checked={selectedMath150}
                          id='math6-150'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-150", `${e.target.checked}`)
                              setSelectedMath150(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships/xa46d6dd638f86863:dependent-and-independent-variables/v/dependent-and-independent-variables-exercise-example-1"
              rel="noreferrer" target="_blank"> Dependent and independent variables</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">If you have 30 white socks, 22 black socks and 14 blue socks scattered
              across the floor in the dark, how many would you have to grab to get a matching pair? </p>
            <MathPuzzle solution="Once you grab 4 socks you will definitely have 2 of the same color."/>


            <span className="days">Lesson 151</span>
            <ToggleSwitch checked={selectedMath151}
                          id='math6-151'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-151", `${e.target.checked}`)
                              setSelectedMath151(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships/test/xa46d6dd638f86863:get-ready-for-rates-proportional-relationships-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>

            <span className="days">Lesson 152</span>
            <ToggleSwitch checked={selectedMath152}
                          id='math6-152'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-152", `${e.target.checked}`)
                              setSelectedMath152(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:distributive-property-with-variables/v/combining-like-terms"
              rel="noreferrer" target="_blank"> Distributive property with variables</a></p>

            <span className="days">Lesson 153</span>
            <ToggleSwitch checked={selectedMath153}
                          id='math6-153'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-153", `${e.target.checked}`)
                              setSelectedMath153(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:combining-like-terms/v/combining-like-terms-1"
              rel="noreferrer" target="_blank"> Combining like terms</a></p>

            <span className="days">Lesson 154</span>
            <ToggleSwitch checked={selectedMath154}
                          id='math6-154'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-154", `${e.target.checked}`)
                              setSelectedMath154(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:equivalent-expressions/v/equivalent-algebraic-expressions-exercise"
              rel="noreferrer" target="_blank"> Equivalent expressions</a></p>

            <span className="days">Lesson 155</span>
            <ToggleSwitch checked={selectedMath155}
                          id='math6-155'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-155", `${e.target.checked}`)
                              setSelectedMath155(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:one-step-addition-and-subtraction-equations/v/adding-and-subtracting-the-same-thing-from-both-sides"
              rel="noreferrer" target="_blank"> One-step addition and subtraction equations</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin"> A monk has a very specific ritual for climbing up the steps to the
              temple.</p>
            <p className="topBottom"> He climbs up to the middle step and meditates for 1 minute. Then he climbs up 8
              steps and
              faces east until he hears a bird singing. Then he walks down 12 steps and picks up a pebble. He
              takes one step up and tosses the pebble over his left shoulder. Now, he walks up the remaining steps
              three at a time which only takes him 9 paces.</p>
            <p className="topBottom"> How many steps are there? </p>
            <MathPuzzle solution="There are 49 steps.
He climbs halfway, which is step 25. He hears the bird singing on step 33. He picks up the pebble on the 21st step and tosses it on the 22nd step. The remaining 27 steps are taken three at a time which is 9 paces (3 steps x 9 paces = 27 steps)."/>

            <span className="days">Lesson 156</span>
            <ToggleSwitch checked={selectedMath156}
                          id='math6-156'
                          label='Completed'
                          onChange={
                            (e) => {
                              localStorage.setItem("math6-156", `${e.target.checked}`)
                              setSelectedMath156(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:one-step-multiplication-and-division-equations/v/simple-equations"
              rel="noreferrer" target="_blank"> One-step multiplication and division equations</a></p>

            <span className="days">Lesson 157</span> <ToggleSwitch checked={selectedMath157}
                                                                   id='math6-157'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-157", `${e.target.checked}`)
                                                                       setSelectedMath157(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:finding-mistakes-in-one-step-equations/v/finding-mistakes-in-one-step-equations"
              rel="noreferrer" target="_blank"> Finding mistakes in one-step equations</a></p>

            <span className="days">Lesson 158</span> <ToggleSwitch checked={selectedMath158}
                                                                   id='math6-158'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-158", `${e.target.checked}`)
                                                                       setSelectedMath158(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:one-step-equation-word-problems/v/constructing-basic-equations-examples"
              rel="noreferrer" target="_blank"> One-step equation word problems</a></p>

            <span className="days">Lesson 159</span> <ToggleSwitch checked={selectedMath159}
                                                                   id='math6-159'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-159", `${e.target.checked}`)
                                                                       setSelectedMath159(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/xa46d6dd638f86863:intro-to-inequalities-with-variables/v/testing-solutions-to-inequalities"
              rel="noreferrer" target="_blank"> Intro to inequalities with variables</a></p>

            <span className="days">Lesson 160</span> <ToggleSwitch checked={selectedMath160}
                                                                   id='math6-160'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-160", `${e.target.checked}`)
                                                                       setSelectedMath160(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities/test/xa46d6dd638f86863:get-ready-for-expressions-equations-inequalities-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>

            <span className="days">Lesson 161</span> <ToggleSwitch checked={selectedMath161}
                                                                   id='math6-161'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-161", `${e.target.checked}`)
                                                                       setSelectedMath161(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/xa46d6dd638f86863:decomposing-angles/v/decomposing-angles"
              rel="noreferrer" target="_blank"> Decomposing angles</a></p>

            <span className="days">Lesson 162</span> <ToggleSwitch checked={selectedMath162}
                                                                   id='math6-162'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-162", `${e.target.checked}`)
                                                                       setSelectedMath162(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/xa46d6dd638f86863:area-of-parallelograms-and-triangles/v/intuition-for-area-of-a-parallelogram"
              rel="noreferrer" target="_blank"> Area of parallelograms and triangles</a></p>

            <span className="days">Lesson 163</span> <ToggleSwitch checked={selectedMath163}
                                                                   id='math6-163'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-163", `${e.target.checked}`)
                                                                       setSelectedMath163(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/xa46d6dd638f86863:area-of-composite-figures/v/area-comparisons"
              rel="noreferrer" target="_blank"> Area of composite figures</a></p>

            <span className="days">Lesson 164</span> <ToggleSwitch checked={selectedMath164}
                                                                   id='math6-164'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-164", `${e.target.checked}`)
                                                                       setSelectedMath164(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/xa46d6dd638f86863:volume-with-fractions/v/volume-of-a-rectangular-prism-with-fractional-dimensions"
              rel="noreferrer" target="_blank"> Volume with fractions</a></p>

            <span className="days">Lesson 165</span> <ToggleSwitch checked={selectedMath165}
                                                                   id='math6-165'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-165", `${e.target.checked}`)
                                                                       setSelectedMath165(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/xa46d6dd638f86863:surface-area/v/nets-of-polyhedra"
              rel="noreferrer" target="_blank"> Surface area</a></p>
            <span className="puzzleTitle">Solve this Math Puzzle </span>
            <p className="puzzleMargin">
              A boy saw a shirt for $97 but does not have enough cash. So he borrowed $50 from his mom and another
              $50 from his dad.<br/>
              He bought the shirt, and got back $3 as change. He gave his dad $1 and his mom $1 and kept the other
              $1 for himself.<br/>
              Now mom and dad paid $50 each and got back $1 each. So they paid $49 each, totaling $98. The boy has
              another $1, adding up to $99. Where is the missing dollar?<br/></p>
            <MathPuzzle solution="The problem is that the question is cleverly phrased to conceal what is really going on.
Let’s locate all that money. There are two ways to think about how much money is out there to be found.The way that this question is tricky is that it combines that two ways.
The first way is this. How much money did mom and dad pay originally?
The second way is this. How much money did they end up paying?
So if it is the first way, then clearly the total we need to account for is the $100.
So let’s see what happens to that $100. The shirt costs $97, the boy keeps $1 and mom and dad get $1 back. That adds up fine.
Now let’s look at the second way. How much money did they end up paying? Well $98 dollars, and $97 of it went for the shirt and $1 to the boy. Now, that adds up too.
The problem with the question is that the the $1 that the boy keeps is contained in the $98 that they end up paying so we shouldn’t expect them to add to anything meaningful."/>

            <span className="days">Lesson 166</span> <ToggleSwitch checked={selectedMath166}
                                                                   id='math6-166'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-166", `${e.target.checked}`)
                                                                       setSelectedMath166(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-geometry/test/xa46d6dd638f86863:get-ready-for-geometry-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>

            <span className="days">Lesson 167</span> <ToggleSwitch checked={selectedMath167}
                                                                   id='math6-167'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-167", `${e.target.checked}`)
                                                                       setSelectedMath167(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-statistics-and-probability/xa46d6dd638f86863:statistical-questions/v/understanding-statistical-questions"
              rel="noreferrer" target="_blank"> Statistical questions</a></p>

            <span className="days">Lesson 168</span> <ToggleSwitch checked={selectedMath168}
                                                                   id='math6-168'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-168", `${e.target.checked}`)
                                                                       setSelectedMath168(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-statistics-and-probability/xa46d6dd638f86863:shape-of-data-distributions/v/shapes-of-distributions"
              rel="noreferrer" target="_blank"> Shape of data distributions</a></p>


            <span className="days">Lesson 169</span> <ToggleSwitch checked={selectedMath169}
                                                                   id='math6-169'
                                                                   label='Completed'
                                                                   onChange={
                                                                     (e) => {
                                                                       localStorage.setItem("math6-169", `${e.target.checked}`)
                                                                       setSelectedMath169(e.target.checked)
                                                                       console.log(e.target.checked)
                                                                     }
                                                                   }/>
            <p className="margin-para">Complete the <a
              href="https://www.khanacademy.org/math/get-ready-for-7th-grade/xa46d6dd638f86863:get-ready-for-statistics-and-probability/test/xa46d6dd638f86863:get-ready-for-statistics-and-probability-unit-test?modal=1"
              rel="noreferrer" target="_blank"> UNIT TEST</a></p>
            <br/>
            <span className="days" style={{ color: "#4f5979" }}>Word Problems & Riddles</span><br/>
            <span className="days">LESSON 170</span> <ToggleSwitch
            checked={selectedMath170}
            id='math6-170'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-170", `${e.target.checked}`)
                setSelectedMath170(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/9gfPZoyMyTU"/>
            <p className="puzzleMargin"> Daniel is painting his pool deck over the weekend. The area of the deck
              is 76 ½ square meters. He paints 2/3 of the deck before stopping to eat lunch. How many square
              meters does Daniel have left to paint after lunch? </p>
            <MathPuzzle solution="Daniel has 25 ½ square meters left to paint after lunch.
You need to find how many square meters Daniel has left to paint after lunch. But first, you need to know how much of the deck Daniel paints before lunch.   The area of the deck is 76 ½ square meters. Daniel paints 2/3 of the deck before lunch.
76 ½ x 2/3 = 153/2 x 2/3  = 306/6  = 51.   Daniel paints 51 square meters before lunch.
Now subtract to find how much of the deck Daniel has left to paint after lunch. The area of the deck is 76 ½ - 51 = 25 ½
 "/>
            <p className="puzzleMargin"> I’m thinking of two number, 12 and another number. 12 and my other number
              have a greatest common factor of 6 and their least common multi-ple is 36. What’s the other number
              I’m thinking of? </p>
            <MathPuzzle solution=" 18 "/>
            <p className="puzzleMargin"> Little John had $8.50. He spent $1.25 on sweets and gave to his two
              friends $1.20 each. How much money was left?</p>
            <MathPuzzle solution="$4.85.  John spent and gave to his two friends a total of
    1.25 + 1.20 + 1.20 = $3.65
    Money left
    8.50 - 3.65 = $4.85
 "/>
            <p className="puzzleMargin"> Linda spent 3/4 of her savings on furniture. She then spent 1/2 of her
              remaining savings on a fridge. If the fridge cost her $150, what were her original savings?</p>
            <MathPuzzle solution=" x = $1200.    Let x be Linda's savings. If she spent 3/4 of her savings on furniture then 1/4 of her savings are remaining and are written as    (1/4) x.      She spent 1/2 of her remaining saving on a fridge that costs 150. Hence
    (1/2) × ((1/4) x ) = 150.      Simplify the above and rewrite as    x / 8= 150.      Multiply both sides of the above equation by 8 and solve for x
    8 × (x / 8) = 8 × 150.
"/>


            <span className="days">Lesson 171</span> <ToggleSwitch
            checked={selectedMath171}
            id='math6-171'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-171", `${e.target.checked}`)
                setSelectedMath171(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish. </p>
            <Video videoUrl="https://www.youtube.com/embed/lLOALyWls2k"/>
            <p className="puzzleMargin"> Eyvie is selling water bottles at a baseball game to help raise money for
              new uniforms. Before the game, he buys 48 water bottles for a total of $18.50. At the game, he sells
              all of the bottles for $1.25 each. How much profit does Eyvie make? </p>
            <MathPuzzle solution=" Eyvie makes a profit of  $41.50 ---
You need to find how much profit Eyvie makes. But first, you need to find how much he earns by selling all of the water bottles.
Eyvie sells 48 water bottles and charges $1.25 for each one.
1.25 × 48 = 1000 + 5000 = 60.00.
Eyvie earns $60.00 by selling all of the water bottles.
Now subtract to find how much profit Eyvie makes. He earns $60.00 from selling water bottles after spending $18.50 to buy them.
60.00 – 18.50 = 41.50
"/>
            <p className="puzzleMargin"> Tom had a platter of chocolate wafers. He ate 5 of them and then gave his
              brother 3, he then handed them to his ball team of 8 members. The first player to arrive took 1, the
              second player took 3, the third player took 5 and so on. When the last player took his, the platter
              was empty. How many chocolate wafers did Tom start with? </p>
            <MathPuzzle solution=" 72 "/>
            <p className="puzzleMargin"> What is x if x + 2y = 10 and y = 3?
            </p>
            <MathPuzzle solution="     Substitute y by 3 in x + 2y = 10 --
    x + 2(3) = 10  --
    x + 6 = 10 --
    If we substitute x by 4 in x + 6 = 10, we have 4 + 6 = 10. Hence
    x = 4
"/>
            <p className="puzzleMargin"> 3000 meters. The distance between Harry and Kate is 2500 meters. Kate and
              Harry start walking toward one another and Kate' dog start running back and forth between Harry and
              Kate at a speed of 120 meters per minute. Harry walks at the speed of 40 meters per minute while
              Kate walks at the speed of 60 meters per minute. What distance will the dog have travelled when
              Harry and Kate meet each other? </p>
            <MathPuzzle solution="3000 meters.  The dog runs during all the period of time while Kate and Harry are walking. This period of time may be calculated as follows:
    2500 meters / (40 + 60) meters / minutes = 25 minutes.
    The dog runs during 25 minutes at the rate of 120 meters per minutes. Hence the total distance covered by the dog is given by     120 meters/minute × 25 minutes = 3000 meters.
 "/>


            <span className="days">Lesson 172</span> <ToggleSwitch
            checked={selectedMath172}
            id='math6-172'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-172", `${e.target.checked}`)
                setSelectedMath172(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish. </p>
            <Video videoUrl="https://www.youtube.com/embed/ukUPojrPFPA"/>
            <p className="puzzleMargin"> Georgia made fruit punch to serve at a party for her chess team. She
              mixed 1 2/5 liters of cranberry juice and 1 3/5 liters of pineapple juice together. Then, she split
              the fruit punch evenly among 9 glasses. How much fruit punch did Georgia pour into each glass? </p>
            <MathPuzzle solution=" Georgia poured 1/3 of a liter of fruit punch into each glass.
You need to find how much fruit punch Georgia poured into each glass.
First, add to find how much fruit punch Georgia made in all. She mixed
1 2/5 liters of cranberry juice and  1 3/5 liters of pineapple juice to make the fruit punch. Remember to add whole numbers to whole numbers and fractions to fractions.
1 2/5 + 1/3/5 = 2 5/5 = 3.  Georgia made 3 liters of fruit punch in all.
Now divide to find how much fruit punch Georgia poured into each glass. She split the fruit punch evenly among 9 glasses.  3/9 = 1/3.
"/>
            <p className="puzzleMargin"> Jasmine has 50 marbles in a bag. 20% of the marbles are blue. How many
              marbles are blue?
            </p>
            <MathPuzzle solution=" 10 "/>
            <p className="puzzleMargin"> A telephone company charges initially $0.50 and then $0.11 for every
              minute. Write an expression that gives the cost of a call that lasts N minutes.
            </p>
            <MathPuzzle solution=" Cost C for a call of 1 minute  --
    C = 0.50 + 0.11 --
    Cost C for a call of 2 minutes  --
    C = 0.50 + 0.11 + 0.11 = 0.50 + 2 × 0.11   --
    Cost C for a call of 3 minutes  --
    C = 0.50 + 0.11 + 0.11 + 0.11 = 0.50 + 3 × 0.11   --
    We note that the cost C is equal to   --
    C = 0.50 + (number of minutes) × 0.11   --
    If N is the number of minutes, the cost C is given by
    C = 0.50 + N × 0.11"/>


            <span className="days">Lesson 173</span> <ToggleSwitch
            checked={selectedMath173}
            id='math6-173'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-173", `${e.target.checked}`)
                setSelectedMath173(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish. </p>
            <Video videoUrl="https://www.youtube.com/embed/dh4nEuhZBgg"/>
            <p className="puzzleMargin">Bernie helped design a magician costume for a school play. He used 5.75
              feet of ribbon for the magician's wand. He used 11.75 feet of the same ribbon to decorate the
              magician's robe. If Bernie used $10.50 of ribbon in all, how much did the ribbon cost per foot? </p>
            <MathPuzzle solution="The ribbon cost $0.60 per foot.  You need to find how much the ribbon cost per foot. Since you know the total cost, start by finding how much ribbon Bernie used in all.
Bernie used 5.75 feet of ribbon for the magician's wand. He also used 11.75 feet of ribbon for the magician's robe.  5.75 + 11.75 = 17.50.    Bernie used 17.5 feet of ribbon in all.  Now divide to find how much the ribbon cost per foot. The total cost was $10.50, and Bernie used 17.5 feet of ribbon.
Start by moving the decimal point 1 place to the right in both the divisor and the dividend. This makes the divisor a whole number.  10.50/17.5 = 105/175 = .6
 "/>
            <p className="puzzleMargin"> An Olympic runner set a record for the 100m dash. The time was ten and
              sixty-two hundredths seconds. How would you write this as a number? </p>
            <MathPuzzle solution=" 10.62 seconds "/>
            <p className="puzzleMargin"> A car gets 40 kilometers per gallon of gasoline. How many gallons of
              gasoline would the car need to travel 180 kilometers?</p>
            <MathPuzzle solution=" 4.5 gallons.  Each 40 kilometers, 1 gallon is needed. We need to know how many 40 kilometers are there in 180 kilometers?
    180 ÷ 40 = 4.5 × 1 gallon = 4.5 gallons
"/>


            <span className="days">Lesson 174</span> <ToggleSwitch
            checked={selectedMath174}
            id='math6-174'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-174", `${e.target.checked}`)
                setSelectedMath174(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below.
              Check the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/YeMVoJKn1Tg"/>
            <p className="puzzleMargin">Alec and Kiara went to Freddy's Yogurt Shop for frozen yogurt. Alec got
              8.6 ounces of strawberry frozen yogurt, and Kiara got 8.2 ounces of chocolate frozen yogurt. Their
              frozen yogurt cost $0.50 per ounce. How much did they pay in all? </p>
            <MathPuzzle solution="Alec and Kiara paid $8.40 in all.  You need to find how much Alec and Kiara paid in all. Since you know how much the frozen yogurt cost per ounce, start by finding how many total ounces of frozen yogurt they got.
Alec got 8.6 ounces of frozen yogurt, and Kiara got 8.2 ounces.
8.6 + 8.2 =  16.8.  Alec and Kiara got a total of 16.8 ounces of frozen yogurt.  Now multiply to find how much Alec and Kiara paid in all. They got 16.8 ounces of frozen yogurt, and it cost $0.50 per ounce.  16.8 x 0.5 = 8.40
 "/>
            <p className="puzzleMargin"> The tables at the party are shaped like the hexagon. If you put the
              tables together, how many would you need for 50 people </p>
            <MathPuzzle solution=" 12 tables "/>
            <p className="puzzleMargin"> A machine fills 150 bottles of water every 8 minutes. How many minutes it
              takes this machine to fill 675 bottles?</p>
            <MathPuzzle solution="32 minutes.    8 minutes are needed to fill 150 bottles. How many groups of 150 bottles are there in 675 bottles?
    675 ÷ 150 = 4.5 = 4 and ½.
    For each of these groups 8 minutes are needed. For 4 groups and ½.
    8 × 4 + 4 = 32 + 4 = 36 minutes. (4 is for 1/2 a group that needs half time).
    We can also find the final answer as follows:
    4.5 x 8 = 32 minutes
 "/>


            <span className="days">Lesson 175</span> <ToggleSwitch
            checked={selectedMath175}
            id='math6-175'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-175", `${e.target.checked}`)
                setSelectedMath175(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/c18GjbnZXMw"/>
            <p className="puzzleMargin">Your brother traveled 117 miles in 2.25 hours to come home for school
              break. What’s the average speed that he was traveling? </p>
            <MathPuzzle solution="52 mph  "/>
            <p className="puzzleMargin"> At your birthday party, you had 7 8-slice pizzas. 41 slices were eaten.
              What fraction of pizza is left? </p>
            <MathPuzzle solution=" 1 7/8"/>
            <p className="puzzleMargin"> A car travels at a speed of 65 miles per hour. How far will it travel in
              5 hours?
            </p>
            <MathPuzzle
              solution=" 325 miles.    During each hour, the car travels 65 miles. For 5 hours it will travel     65 + 65 + 65 + 65 + 65 = 5 × 65 = 325 miles"/>


            <span className="days">Lesson 176</span> <ToggleSwitch
            checked={selectedMath176}
            id='math6-176'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-176", `${e.target.checked}`)
                setSelectedMath176(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/mS5eEhLN57s"/>
            <p className="puzzleMargin">You have 15 yards of ribbon for your gift boxes. Each box gets the same
              amount of ribbon. How much ribbon will each of your 20 gift boxes get? </p>
            <MathPuzzle solution=" .75 yard  "/>
            <p className="puzzleMargin"> Two numbers N and 16 have LCM = 48 and GCF = 8. Find N.
            </p>
            <MathPuzzle solution=" The product of two integers is equal to the product of their LCM and GCF.  Hence
    16 × N = 48 × 8 ==>
    N = 48 × 8 / 16 = 24
"/>
            <p className="puzzleMargin"> A rectangle A with length 10 centimeters and width 5 centimeters is
              similar to another rectangle B whose length is 30 centimeters. Find the area of rectangle B.</p>
            <MathPuzzle solution=" Two rectangles A and B are similar if their lengths and widths are proportinal.
    Let L1 = 10 cm and W1 = 5 cm be the length and width of rectangle A. Let L2 = 30 cm and W2 be the length and width of rectangle B.
    Proportionality of the dimensions of the two rectangles is written as:
    L2 / L1 = W2 / W1.
    Substitute by the known quantities and find W2.
    30 / 10 = W2 / 5.
    For the above ratios to be equal, W2 must be equal to 15. Hence the area of rectamgle B is given by
    L2 × W2 = 30 cm × 15 cm = 450 cm 2
"/>

            <span className="days">Lesson 177</span> <ToggleSwitch
            checked={selectedMath177}
            id='math6-177'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-177", `${e.target.checked}`)
                setSelectedMath177(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/KSkw7hKN_Xg"/>
            <p className="puzzleMargin"> Sam gave Jen 1/2 of his jujubes. Jen ate 1/2 of the jujubes and gave the
              rest to Kyle. Kyle kept 8 of the jujubes and gave the last 10 to Kim. How many ju-jubes did Jen
              eat? </p>
            <MathPuzzle solution="18 "/>
            <p className="puzzleMargin"> Find the greatest common factor (GFC) of 24, 40 and 60.
            </p>
            <MathPuzzle solution=" We first write the prime factorization of each given number.
    24 = 2 × 2 × 2 × 3 = 23 × 3   ==>
    40 = 2 × 2 × 2 × 5 = 23 × 5  ==>
    60 = 2 × 2 × 3 × 5 = 22 × 3 × 5 ==>
    GFC = 22 = 4
"/>
            <p className="puzzleMargin"> John gave half of his stamps to Jim. Jim gave gave half of his stamps to
              Carla. Carla gave 1/4 of the stamps given to her to Thomas and kept the remaining 12. How many
              stamps did John start with?</p>
            <MathPuzzle solution="    Let x be the number of stamps that John started with.
    John gave half of his stamps to Jim: Jim got (1/2) x.
    Jim gave gave half of his stamps to Carla: Carla got (1/2) ((1/2) x).
    Carle gave 1/4 and therefore kept 3/4 of the stamps given to her. Carla kept 3/4 of (1/2) ((1/2) x ) = (3/4) ((1/2) ((1/2) ) x).
    Simplify the expression (3/4) ((1/2) ((1/2) ) ) x .
    (3/4) ((1/2) ((1/2) ) x) = (3 × 1 × 1) / (4 × 2 × 2) x = 3 x / 16.
    The number of stamps kept by Carla is equal to 12. Hence the equation to solve
    3 x / 16 = 12.
    Mutliply both side of the above equation by 16 / 3.
    (16/3) × (3 x / 16) = (16 / 3) ×12
    Simplify and solve for x.
    x = (16 / 3) ×12 = 64
 "/>


            <span className="days">Lesson 178</span> <ToggleSwitch
            checked={selectedMath178}
            id='math6-178'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-178", `${e.target.checked}`)
                setSelectedMath178(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/BSF9s0gbJ2M"/>
            <p className="puzzleMargin">You finally get an allowance. You put $2. away in January, $4. away in
              February, $8. away in March, $16 away in April and followed this savings pattern through to
              December. How much money do you have in 12 months? </p>
            <MathPuzzle solution="$4096.00 "/>
            <p className="puzzleMargin"> In a given school, there 240 boys and 260 girls.
              a) What is the ratio of the number of girls to the number of boys?
              b) What is the ratio of the number of boys to the total number of pupils in the school?
            </p>
            <MathPuzzle solution="  a) ratio of girls to boys:
    260:240 or 13:12
    b) ratio of boys to the total number of pupils:
    240:(240+260) or 240:500 or 12:25
 "/>
            <p className="puzzleMargin"> Two balls A and B rotate along a circular track. Ball A makes 4 full
              rotations in 120 seconds. Ball B makes 3 full rotation in 60 seconds. If they start rotating now
              from the same, how long will take them to be at the same starting point again?</p>
            <MathPuzzle solution="It will take     120 / 4 = 30 seconds for ball A to make one full rotation.
    It will take.
    60 / 3 = 20 seconds for ball B to make one full rotation.
    Let us calculate the time for whole rotations of ball A and B.
    Ball A : 1 rot: 30 sec , 2 rot: 60 sec , 3 rot 90 sec, 4 rot 120 sec, .... Ball B: 1 rot: 20 sec , 2 rot: 40 sec , 3 rot 60 sec, 4 rot 80 sec, ....
    The first time that they have made a whole number of rotations and therefore be at the same starting point is after 60 seconds which is the lowest common (LCM) multiple of 30 and 20.
"/>

            <span className="days">Lesson 179</span> <ToggleSwitch
            checked={selectedMath179}
            id='math6-179'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-179", `${e.target.checked}`)
                setSelectedMath179(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/N5vJSNXPEwA"/>
            <p className="puzzleMargin">It takes 6 cubes to build a stair-case with 3 steps. How many cubes will
              be needed for 11 steps? </p>
            <MathPuzzle solution="66 "/>
            <p className="puzzleMargin"> If Tim had lunch at $50.50 and he gave 20% tip, how much did he spend?
            </p>
            <MathPuzzle solution="     $60.60.  The tip is 20% of what he paid for lunch. Hence   tip = 20% of 50.50 = (20/100)*50.50 = 101/100 = $10.10.
    Total spent      50.50 + 10.10 = $60.60
"/>
            <p className="puzzleMargin"> A segment is 3 units long. It is divided into 9 parts. What fraction of a
              unit are 2 parts of the segment?
            </p>
            <MathPuzzle solution=" To divide a 3 unit segment to make 9 parts, you need to divide each unit by 3.  Hence
    1 part = 1/3 of a unit    and therefore      2 parts = 2/3 of a unit
"/>


            <span className="days">Lesson 180</span> <ToggleSwitch
            checked={selectedMath180}
            id='math6-180'
            label='Completed'
            onChange={
              (e) => {
                localStorage.setItem("math6-180", `${e.target.checked}`)
                setSelectedMath180(e.target.checked)
                console.log(e.target.checked)
              }
            }/>
            <p className="margin-para">After you watch the video below, complete the word problems below. Check
              the Completed box above when you finish.</p>
            <Video videoUrl="https://www.youtube.com/embed/ADR7dUoVh_c"/>
            <p className="puzzleMargin"> Jeff has 1/2 pizza left in the fridge. At breakfast he at 1/3 of it. What
              fraction of the original pizza does he have left for lunch? </p>
            <MathPuzzle solution="1/3 or 2/6 "/>
            <p className="puzzleMargin"> Find k if 64 ÷ k = 4.
            </p>
            <MathPuzzle solution=" Since 64 ÷ k = 4 and 64 ÷ 16 = 4, then k = 16"/>
            <p className="puzzleMargin"> A car is traveling 75 kilometers per hour. How many meters does the car
              travel in one minute?
            </p>
            <MathPuzzle solution=" Rewrite the rate 75 kilometers per hour converting kilometers in meters and hours in minutes.
    1 kilometer = 1000 meters.      1 hour = 60 minutes.  Hence   75 kilometers per hour = 75 × 1000 meters per 60 minutes = 75 000 / 60 meters/minute = 1250 meters/minute."/>

          </div>
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 6th Grade Math! </h3>
    </form>
  )
}

export default Math6Component