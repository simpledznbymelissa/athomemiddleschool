import React from "react"
import ToggleSwitch from "./checkbox"
import "../styles/styles.css"
import Video from "./video"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

const CodingComponent = ({ data }) => {

  // Essay storage
  const [codingEssay32, setCodingEssay32] = useLocalStorageState("codingEssay32", "")
  const onChangeCodingListener32 = (event) => {
    setCodingEssay32(event.target.value)
  }

  // Checkbox Storage
  const [selectedCoding1, setSelectedCoding1] = React.useState(localStorage.getItem("coding-1") === "true")
  const [selectedCoding2, setSelectedCoding2] = React.useState(localStorage.getItem("coding-2") === "true")
  const [selectedCoding3, setSelectedCoding3] = React.useState(localStorage.getItem("coding-3") === "true")
  const [selectedCoding4, setSelectedCoding4] = React.useState(localStorage.getItem("coding-4") === "true")
  const [selectedCoding5, setSelectedCoding5] = React.useState(localStorage.getItem("coding-5") === "true")
  const [selectedCoding6, setSelectedCoding6] = React.useState(localStorage.getItem("coding-6") === "true")
  const [selectedCoding7, setSelectedCoding7] = React.useState(localStorage.getItem("coding-7") === "true")
  const [selectedCoding8, setSelectedCoding8] = React.useState(localStorage.getItem("coding-8") === "true")
  const [selectedCoding9, setSelectedCoding9] = React.useState(localStorage.getItem("coding-9") === "true")
  const [selectedCoding10, setSelectedCoding10] = React.useState(localStorage.getItem("coding-10") === "true")
  const [selectedCoding11, setSelectedCoding11] = React.useState(localStorage.getItem("coding-11") === "true")
  const [selectedCoding12, setSelectedCoding12] = React.useState(localStorage.getItem("coding-12") === "true")
  const [selectedCoding13, setSelectedCoding13] = React.useState(localStorage.getItem("coding-13") === "true")
  const [selectedCoding14, setSelectedCoding14] = React.useState(localStorage.getItem("coding-14") === "true")
  const [selectedCoding15, setSelectedCoding15] = React.useState(localStorage.getItem("coding-15") === "true")
  const [selectedCoding16, setSelectedCoding16] = React.useState(localStorage.getItem("coding-16") === "true")
  const [selectedCoding17, setSelectedCoding17] = React.useState(localStorage.getItem("coding-17") === "true")
  const [selectedCoding18, setSelectedCoding18] = React.useState(localStorage.getItem("coding-18") === "true")
  const [selectedCoding19, setSelectedCoding19] = React.useState(localStorage.getItem("coding-19") === "true")
  const [selectedCoding20, setSelectedCoding20] = React.useState(localStorage.getItem("coding-20") === "true")
  const [selectedCoding21, setSelectedCoding21] = React.useState(localStorage.getItem("coding-21") === "true")
  const [selectedCoding22, setSelectedCoding22] = React.useState(localStorage.getItem("coding-22") === "true")
  const [selectedCoding23, setSelectedCoding23] = React.useState(localStorage.getItem("coding-23") === "true")
  const [selectedCoding24, setSelectedCoding24] = React.useState(localStorage.getItem("coding-24") === "true")
  const [selectedCoding25, setSelectedCoding25] = React.useState(localStorage.getItem("coding-25") === "true")
  const [selectedCoding26, setSelectedCoding26] = React.useState(localStorage.getItem("coding-26") === "true")
  const [selectedCoding27, setSelectedCoding27] = React.useState(localStorage.getItem("coding-27") === "true")
  const [selectedCoding28, setSelectedCoding28] = React.useState(localStorage.getItem("coding-28") === "true")
  const [selectedCoding29, setSelectedCoding29] = React.useState(localStorage.getItem("coding-29") === "true")
  const [selectedCoding30, setSelectedCoding30] = React.useState(localStorage.getItem("coding-30") === "true")
  const [selectedCoding31, setSelectedCoding31] = React.useState(localStorage.getItem("coding-31") === "true")
  const [selectedCoding32, setSelectedCoding32] = React.useState(localStorage.getItem("coding-32") === "true")
  const [selectedCoding33, setSelectedCoding33] = React.useState(localStorage.getItem("coding-33") === "true")
  const [selectedCoding34, setSelectedCoding34] = React.useState(localStorage.getItem("coding-34") === "true")
  const [selectedCoding35, setSelectedCoding35] = React.useState(localStorage.getItem("coding-35") === "true")
  const [selectedCoding36, setSelectedCoding36] = React.useState(localStorage.getItem("coding-36") === "true")
  const [selectedCoding37, setSelectedCoding37] = React.useState(localStorage.getItem("coding-37") === "true")
  const [selectedCoding38, setSelectedCoding38] = React.useState(localStorage.getItem("coding-38") === "true")
  const [selectedCoding39, setSelectedCoding39] = React.useState(localStorage.getItem("coding-39") === "true")
  const [selectedCoding40, setSelectedCoding40] = React.useState(localStorage.getItem("coding-40") === "true")
  const [selectedCoding41, setSelectedCoding41] = React.useState(localStorage.getItem("coding-41") === "true")
  const [selectedCoding42, setSelectedCoding42] = React.useState(localStorage.getItem("coding-42") === "true")
  const [selectedCoding43, setSelectedCoding43] = React.useState(localStorage.getItem("coding-43") === "true")
  const [selectedCoding44, setSelectedCoding44] = React.useState(localStorage.getItem("coding-44") === "true")
  // const [selectedCoding45, setSelectedCoding45] = React.useState(localStorage.getItem("coding-45") === "true")
  // const [selectedCoding46, setSelectedCoding46] = React.useState(localStorage.getItem("coding-46") === "true")
  // const [selectedCoding47, setSelectedCoding47] = React.useState(localStorage.getItem("coding-47") === "true")
  // const [selectedCoding48, setSelectedCoding48] = React.useState(localStorage.getItem("coding-48") === "true")
  // const [selectedCoding49, setSelectedCoding49] = React.useState(localStorage.getItem("coding-49") === "true")
  // const [selectedCoding50, setSelectedCoding50] = React.useState(localStorage.getItem("coding-50") === "true")
  // const [selectedCoding51, setSelectedCoding51] = React.useState(localStorage.getItem("coding-51") === "true")
  // const [selectedCoding52, setSelectedCoding52] = React.useState(localStorage.getItem("coding-52") === "true")
  // const [selectedCoding53, setSelectedCoding53] = React.useState(localStorage.getItem("coding-53") === "true")
  // const [selectedCoding54, setSelectedCoding54] = React.useState(localStorage.getItem("coding-54") === "true")
  // const [selectedCoding55, setSelectedCoding55] = React.useState(localStorage.getItem("coding-55") === "true")
  // const [selectedCoding56, setSelectedCoding56] = React.useState(localStorage.getItem("coding-56") === "true")
  // const [selectedCoding57, setSelectedCoding57] = React.useState(localStorage.getItem("coding-57") === "true")
  // const [selectedCoding58, setSelectedCoding58] = React.useState(localStorage.getItem("coding-58") === "true")
  // const [selectedCoding59, setSelectedCoding59] = React.useState(localStorage.getItem("coding-59") === "true")
  // const [selectedCoding60, setSelectedCoding60] = React.useState(localStorage.getItem("coding-60") === "true")
  // const [selectedCoding61, setSelectedCoding61] = React.useState(localStorage.getItem("coding-61") === "true")
  // const [selectedCoding62, setSelectedCoding62] = React.useState(localStorage.getItem("coding-62") === "true")
  // const [selectedCoding63, setSelectedCoding63] = React.useState(localStorage.getItem("coding-63") === "true")
  // const [selectedCoding64, setSelectedCoding64] = React.useState(localStorage.getItem("coding-64") === "true")
  // const [selectedCoding65, setSelectedCoding65] = React.useState(localStorage.getItem("coding-65") === "true")
  // const [selectedCoding66, setSelectedCoding66] = React.useState(localStorage.getItem("coding-66") === "true")
  // const [selectedCoding67, setSelectedCoding67] = React.useState(localStorage.getItem("coding-67") === "true")
  // const [selectedCoding68, setSelectedCoding68] = React.useState(localStorage.getItem("coding-68") === "true")
  // const [selectedCoding69, setSelectedCoding69] = React.useState(localStorage.getItem("coding-69") === "true")
  // const [selectedCoding70, setSelectedCoding70] = React.useState(localStorage.getItem("coding-70") === "true")
  // const [selectedCoding71, setSelectedCoding71] = React.useState(localStorage.getItem("coding-71") === "true")
  // const [selectedCoding72, setSelectedCoding72] = React.useState(localStorage.getItem("coding-72") === "true")
  // const [selectedCoding73, setSelectedCoding73] = React.useState(localStorage.getItem("coding-73") === "true")
  // const [selectedCoding74, setSelectedCoding74] = React.useState(localStorage.getItem("coding-74") === "true")
  // const [selectedCoding75, setSelectedCoding75] = React.useState(localStorage.getItem("coding-75") === "true")
  // const [selectedCoding76, setSelectedCoding76] = React.useState(localStorage.getItem("coding-76") === "true")
  // const [selectedCoding77, setSelectedCoding77] = React.useState(localStorage.getItem("coding-77") === "true")
  // const [selectedCoding78, setSelectedCoding78] = React.useState(localStorage.getItem("coding-78") === "true")
  // const [selectedCoding79, setSelectedCoding79] = React.useState(localStorage.getItem("coding-79") === "true")
  // const [selectedCoding80, setSelectedCoding80] = React.useState(localStorage.getItem("coding-80") === "true")
  // const [selectedCoding81, setSelectedCoding81] = React.useState(localStorage.getItem("coding-81") === "true")
  // const [selectedCoding82, setSelectedCoding82] = React.useState(localStorage.getItem("coding-82") === "true")
  // const [selectedCoding83, setSelectedCoding83] = React.useState(localStorage.getItem("coding-83") === "true")
  // const [selectedCoding84, setSelectedCoding84] = React.useState(localStorage.getItem("coding-84") === "true")
  // const [selectedCoding85, setSelectedCoding85] = React.useState(localStorage.getItem("coding-85") === "true")
  // const [selectedCoding86, setSelectedCoding86] = React.useState(localStorage.getItem("coding-86") === "true")
  // const [selectedCoding87, setSelectedCoding87] = React.useState(localStorage.getItem("coding-87") === "true")
  // const [selectedCoding88, setSelectedCoding88] = React.useState(localStorage.getItem("coding-88") === "true")
  // const [selectedCoding89, setSelectedCoding89] = React.useState(localStorage.getItem("coding-89") === "true")
  // const [selectedCoding90, setSelectedCoding90] = React.useState(localStorage.getItem("coding-90") === "true")
  // const [selectedCoding91, setSelectedCoding91] = React.useState(localStorage.getItem("coding-91") === "true")
  // const [selectedCoding92, setSelectedCoding92] = React.useState(localStorage.getItem("coding-92") === "true")
  // const [selectedCoding93, setSelectedCoding93] = React.useState(localStorage.getItem("coding-93") === "true")
  // const [selectedCoding94, setSelectedCoding94] = React.useState(localStorage.getItem("coding-94") === "true")
  // const [selectedCoding95, setSelectedCoding95] = React.useState(localStorage.getItem("coding-95") === "true")
  // const [selectedCoding96, setSelectedCoding96] = React.useState(localStorage.getItem("coding-96") === "true")
  // const [selectedCoding97, setSelectedCoding97] = React.useState(localStorage.getItem("coding-97") === "true")
  // const [selectedCoding98, setSelectedCoding98] = React.useState(localStorage.getItem("coding-98") === "true")
  // const [selectedCoding99, setSelectedCoding99] = React.useState(localStorage.getItem("coding-99") === "true")
  // const [selectedCoding100, setSelectedCoding100] = React.useState(localStorage.getItem("coding-100") === "true")
  // const [selectedCoding101, setSelectedCoding101] = React.useState(localStorage.getItem("coding-101") === "true")
  // const [selectedCoding102, setSelectedCoding102] = React.useState(localStorage.getItem("coding-102") === "true")
  // const [selectedCoding103, setSelectedCoding103] = React.useState(localStorage.getItem("coding-103") === "true")
  // const [selectedCoding104, setSelectedCoding104] = React.useState(localStorage.getItem("coding-104") === "true")
  // const [selectedCoding105, setSelectedCoding105] = React.useState(localStorage.getItem("coding-105") === "true")
  // const [selectedCoding106, setSelectedCoding106] = React.useState(localStorage.getItem("coding-106") === "true")
  // const [selectedCoding107, setSelectedCoding107] = React.useState(localStorage.getItem("coding-107") === "true")
  // const [selectedCoding108, setSelectedCoding108] = React.useState(localStorage.getItem("coding-108") === "true")
  // const [selectedCoding109, setSelectedCoding109] = React.useState(localStorage.getItem("coding-109") === "true")
  // const [selectedCoding110, setSelectedCoding110] = React.useState(localStorage.getItem("coding-110") === "true")
  // const [selectedCoding111, setSelectedCoding111] = React.useState(localStorage.getItem("coding-111") === "true")
  // const [selectedCoding112, setSelectedCoding112] = React.useState(localStorage.getItem("coding-112") === "true")
  // const [selectedCoding113, setSelectedCoding113] = React.useState(localStorage.getItem("coding-113") === "true")
  // const [selectedCoding114, setSelectedCoding114] = React.useState(localStorage.getItem("coding-114") === "true")
  // const [selectedCoding115, setSelectedCoding115] = React.useState(localStorage.getItem("coding-115") === "true")
  // const [selectedCoding116, setSelectedCoding116] = React.useState(localStorage.getItem("coding-116") === "true")
  // const [selectedCoding117, setSelectedCoding117] = React.useState(localStorage.getItem("coding-117") === "true")
  // const [selectedCoding118, setSelectedCoding118] = React.useState(localStorage.getItem("coding-118") === "true")
  // const [selectedCoding119, setSelectedCoding119] = React.useState(localStorage.getItem("coding-119") === "true")
  // const [selectedCoding120, setSelectedCoding120] = React.useState(localStorage.getItem("coding-120") === "true")
  // const [selectedCoding121, setSelectedCoding121] = React.useState(localStorage.getItem("coding-121") === "true")
  // const [selectedCoding122, setSelectedCoding122] = React.useState(localStorage.getItem("coding-122") === "true")
  // const [selectedCoding123, setSelectedCoding123] = React.useState(localStorage.getItem("coding-123") === "true")
  // const [selectedCoding124, setSelectedCoding124] = React.useState(localStorage.getItem("coding-124") === "true")
  // const [selectedCoding125, setSelectedCoding125] = React.useState(localStorage.getItem("coding-125") === "true")
  // const [selectedCoding126, setSelectedCoding126] = React.useState(localStorage.getItem("coding-126") === "true")
  // const [selectedCoding127, setSelectedCoding127] = React.useState(localStorage.getItem("coding-127") === "true")
  // const [selectedCoding128, setSelectedCoding128] = React.useState(localStorage.getItem("coding-128") === "true")
  // const [selectedCoding129, setSelectedCoding129] = React.useState(localStorage.getItem("coding-129") === "true")
  // // const [selectedCoding130, setSelectedCoding130] = React.useState(localStorage.getItem("coding-130") === "true")
  // const [selectedCoding131, setSelectedCoding131] = React.useState(localStorage.getItem("coding-131") === "true")
  // const [selectedCoding132, setSelectedCoding132] = React.useState(localStorage.getItem("coding-132") === "true")
  // const [selectedCoding133, setSelectedCoding133] = React.useState(localStorage.getItem("coding-133") === "true")
  // const [selectedCoding134, setSelectedCoding134] = React.useState(localStorage.getItem("coding-134") === "true")
  // const [selectedCoding135, setSelectedCoding135] = React.useState(localStorage.getItem("coding-135") === "true")
  // const [selectedCoding136, setSelectedCoding136] = React.useState(localStorage.getItem("coding-136") === "true")
  // const [selectedCoding137, setSelectedCoding137] = React.useState(localStorage.getItem("coding-137") === "true")
  // const [selectedCoding138, setSelectedCoding138] = React.useState(localStorage.getItem("coding-138") === "true")
  // const [selectedCoding139, setSelectedCoding139] = React.useState(localStorage.getItem("coding-139") === "true")
  // const [selectedCoding140, setSelectedCoding140] = React.useState(localStorage.getItem("coding-140") === "true")
  // const [selectedCoding141, setSelectedCoding141] = React.useState(localStorage.getItem("coding-141") === "true")
  // const [selectedCoding142, setSelectedCoding142] = React.useState(localStorage.getItem("coding-142") === "true")
  // const [selectedCoding143, setSelectedCoding143] = React.useState(localStorage.getItem("coding-143") === "true")
  // const [selectedCoding144, setSelectedCoding144] = React.useState(localStorage.getItem("coding-144") === "true")
  // const [selectedCoding145, setSelectedCoding145] = React.useState(localStorage.getItem("coding-145") === "true")
  // const [selectedCoding146, setSelectedCoding146] = React.useState(localStorage.getItem("coding-146") === "true")
  // const [selectedCoding147, setSelectedCoding147] = React.useState(localStorage.getItem("coding-147") === "true")
  // const [selectedCoding148, setSelectedCoding148] = React.useState(localStorage.getItem("coding-148") === "true")
  // const [selectedCoding149, setSelectedCoding149] = React.useState(localStorage.getItem("coding-149") === "true")
  // const [selectedCoding150, setSelectedCoding150] = React.useState(localStorage.getItem("coding-150") === "true")
  // const [selectedCoding151, setSelectedCoding151] = React.useState(localStorage.getItem("coding-151") === "true")
  // const [selectedCoding152, setSelectedCoding152] = React.useState(localStorage.getItem("coding-152") === "true")
  // const [selectedCoding153, setSelectedCoding153] = React.useState(localStorage.getItem("coding-153") === "true")
  // const [selectedCoding154, setSelectedCoding154] = React.useState(localStorage.getItem("coding-154") === "true")
  // const [selectedCoding155, setSelectedCoding155] = React.useState(localStorage.getItem("coding-155") === "true")
  // const [selectedCoding156, setSelectedCoding156] = React.useState(localStorage.getItem("coding-156") === "true")
  // const [selectedCoding157, setSelectedCoding157] = React.useState(localStorage.getItem("coding-157") === "true")
  // const [selectedCoding158, setSelectedCoding158] = React.useState(localStorage.getItem("coding-158") === "true")
  // const [selectedCoding159, setSelectedCoding159] = React.useState(localStorage.getItem("coding-159") === "true")
  // const [selectedCoding160, setSelectedCoding160] = React.useState(localStorage.getItem("coding-160") === "true")
  // const [selectedCoding161, setSelectedCoding161] = React.useState(localStorage.getItem("coding-161") === "true")
  // const [selectedCoding162, setSelectedCoding162] = React.useState(localStorage.getItem("coding-162") === "true")
  // const [selectedCoding163, setSelectedCoding163] = React.useState(localStorage.getItem("coding-163") === "true")
  // const [selectedCoding164, setSelectedCoding164] = React.useState(localStorage.getItem("coding-164") === "true")
  // const [selectedCoding165, setSelectedCoding165] = React.useState(localStorage.getItem("coding-165") === "true")
  // const [selectedCoding166, setSelectedCoding166] = React.useState(localStorage.getItem("coding-166") === "true")
  // const [selectedCoding167, setSelectedCoding167] = React.useState(localStorage.getItem("coding-167") === "true")
  // const [selectedCoding168, setSelectedCoding168] = React.useState(localStorage.getItem("coding-168") === "true")
  // const [selectedCoding169, setSelectedCoding169] = React.useState(localStorage.getItem("coding-169") === "true")
  // const [selectedCoding170, setSelectedCoding170] = React.useState(localStorage.getItem("coding-170") === "true")
  // const [selectedCoding171, setSelectedCoding171] = React.useState(localStorage.getItem("coding-171") === "true")
  // const [selectedCoding172, setSelectedCoding172] = React.useState(localStorage.getItem("coding-172") === "true")
  // const [selectedCoding173, setSelectedCoding173] = React.useState(localStorage.getItem("coding-173") === "true")
  // const [selectedCoding174, setSelectedCoding174] = React.useState(localStorage.getItem("coding-174") === "true")
  // const [selectedCoding175, setSelectedCoding175] = React.useState(localStorage.getItem("coding-175") === "true")
  // const [selectedCoding176, setSelectedCoding176] = React.useState(localStorage.getItem("coding-176") === "true")
  // const [selectedCoding177, setSelectedCoding177] = React.useState(localStorage.getItem("coding-177") === "true")
  // const [selectedCoding178, setSelectedCoding178] = React.useState(localStorage.getItem("coding-178") === "true")
  // const [selectedCoding179, setSelectedCoding179] = React.useState(localStorage.getItem("coding-179") === "true")
  // const [selectedCoding180, setSelectedCoding180] = React.useState(localStorage.getItem("coding-180") === "true")

  return (
    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#9fe5c1",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#9fe5c1",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro ">Coding</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <h2 className="hero">Daily Lessons</h2>
          </div>
        </div>
      </section>

      <section className="section math-section raise-top">
        <div className="section-content">
          <span className="days">LESSON 1</span>
          <ToggleSwitch checked={selectedCoding1} id='coding-1' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-1", `${e.target.checked}`)
              setSelectedCoding1(e.target.checked)
              console.log(e.target.checked)
            }}/>

          <p>Watch the video below: <b>Is Computer Programming hard to learn?</b></p>
          <Video videoUrl="https://www.youtube.com/embed/Zwwzrynqv_o"/>
          <p>After you watch the video, go to <a href="https://codecombat.com/" target="_blank"
                                                 rel="noopener noreferrer"> Code Combat </a>and
            sign up for a free account. A paid subscription is not
            required to use the site.
          </p>
          <ul className="assnList">
            <li>Sign Up to create a new account. In the top right menu select "Sign up as an Individual." The site will
              ask that your parent or teacher sign you up since
              there's an age requirement. Sign up requires only an email address, username and password. As with your
              other usernames and passwords be sure to save these in a safe place.
            </li>
            <li>Choose your character and select Javascript for your programming language. This course will
              focus on JavaScript but if there is another language you prefer to use, select this instead. Then
              start playing the game. The course will start with basic coding concepts and become more
              complicated, developing coding skills as you go. Each level will offer tips on how to progress.
            </li>
            <li>Play for 20 to 30 minutes. You can set a <a href='https://timer.athomemiddleschool.com' rel='noreferrer'
                                                            target='_blank'>timer </a>to ensure you play at least 20
              minutes. Happy coding!
            </li>
            <li>In the future after you sign in, select PLAY from the top menu.</li>
            <li>Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className="days">LESSON 2</span>
          <ToggleSwitch checked={selectedCoding2} id='coding-2' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-2", `${e.target.checked}`)
              setSelectedCoding2(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Watch the video below: <b>The Prison Break | Think Like A Coder, Episode 1</b></li>
            <Video videoUrl="https://www.youtube.com/embed/KFVdHDMcepw"/>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for 20 to 30
              minutes. Happy coding!
            </li>
            <li>Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 3</span>
          <ToggleSwitch checked={selectedCoding3} id='coding-3' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-3", `${e.target.checked}`)
              setSelectedCoding3(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Watch the video below: <b>Computer Science is Changing Everything</b></li>
            <Video videoUrl="https://www.youtube.com/embed/QvyTEx1wyOY"/>
            <li>Create a free account with <a href="https://studio.code.org/users/sign_up"
                                              target="_blank" rel="noopener noreferrer"><b> Code.org</b> by clicking
              here. </a> You can either create a new account or sign in with a Google, Faceook or Microsoft account.
            </li>
            <li>After your account is set up and you are <a href="https://studio.code.org/users/sign_in"
                                                            target="_blank" rel="noopener noreferrer"> signed
              in,</a> complete <a href="https://studio.code.org/s/express-2021/lessons/1/levels/1?redirect_warning=true"
                                  target="_blank" rel="noopener noreferrer">1. Programming with Angry Birds Units
              1-13. </a>
            </li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for the remainder of your code class time. After you sign in, select PLAY from the top menu.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 4</span>
          <ToggleSwitch checked={selectedCoding4} id='coding-4' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-4", `${e.target.checked}`)
              setSelectedCoding4(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/2/levels/1?redirect_warning=true" target="_blank"
              rel="noopener noreferrer"> 2. Debugging in Maze 1-10.</a>
            </li>

            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for
              the remainder of your code class time. After you sign in, select PLAY from the top menu.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 5</span>
          <ToggleSwitch checked={selectedCoding5} id='coding-5' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-5", `${e.target.checked}`)
              setSelectedCoding5(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/3/levels/1" target="_blank"
              rel="noopener noreferrer"> 3. Collecting Treasure with Laurel Units 1-13.</a>
            </li>
            <li>If time allows, go to <a href="https://codecombat.com/" target="_blank"
                                         rel="noopener noreferrer"> Code Combat </a>and play for
              the remainder of your code class time. After you sign in, select PLAY from the top menu.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 6</span>
          <ToggleSwitch checked={selectedCoding6} id='coding-6' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-6", `${e.target.checked}`)
              setSelectedCoding6(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete
              <a href="https://studio.code.org/s/express-2021/lessons/3/levels/1" target="_blank"
                 rel="noopener noreferrer"> 4. Creating Art with Code Units 1-10.</a>
            </li>
            <li>If time allows, go to <a href="https://codecombat.com/" target="_blank"
                                         rel="noopener noreferrer"> Code Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className="days">LESSON 7</span>
          <ToggleSwitch checked={selectedCoding7} id='coding-7' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-7", `${e.target.checked}`)
              setSelectedCoding7(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/5/levels/1" target="_blank"
              rel="noopener noreferrer"> 5. Swimming Fish in Sprite Lab Units 1-9.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 8</span>
          <ToggleSwitch checked={selectedCoding8} id='coding-8' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-8", `${e.target.checked}`)
              setSelectedCoding8(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/6/levels/1" target="_blank"
              rel="noopener noreferrer"> 6. Making Sprites Units 1-12.</a></li>
            <li>Watch the video below: <b>The Resistance | Think Like A Coder, Ep 2. </b></li>
          </ul>
          <Video videoUrl="https://www.youtube.com/embed/axBuiB55CfA"/><br/>

          <span className="days">LESSON 9</span>
          <ToggleSwitch checked={selectedCoding9} id='coding-9' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-9", `${e.target.checked}`)
              setSelectedCoding9(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/7/levels/1" target="_blank"
              rel="noopener noreferrer"> 7. Sprites in Action Units 1-14.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 10</span>
          <ToggleSwitch checked={selectedCoding10} id='coding-10' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-10", `${e.target.checked}`)
              setSelectedCoding10(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/8/levels/1" target="_blank"
              rel="noopener noreferrer"> 8. Virtual Pet with Sprite Lab Units 1-7.</a></li>
            <li>Watch the video below: <b>What most schools don’t teach</b></li>
            <Video videoUrl="https://www.youtube.com/embed/nKIu9yen5nc"/></ul>
          <br/>

          <span className="days">LESSON 11</span>
          <ToggleSwitch checked={selectedCoding11} id='coding-11' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-11", `${e.target.checked}`)
              setSelectedCoding11(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/9/levels/1" target="_blank"
              rel="noopener noreferrer">9. Dance Party Units 1-15.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 12</span>
          <ToggleSwitch checked={selectedCoding12} id='coding-12' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-12", `${e.target.checked}`)
              setSelectedCoding12(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/10/levels/1" target="_blank"
              rel="noopener noreferrer"> 10. Loops with Rey and BB-8 Units 1-14.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 13</span>
          <ToggleSwitch checked={selectedCoding13} id='coding-13' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-13", `${e.target.checked}`)
              setSelectedCoding13(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/11/levels/1" target="_blank"
              rel="noopener noreferrer"> 11. Mini-Project: Sticker Art Units 1-9.</a></li>
            <li>Watch the video below: <b>The Furnace Bots | Think Like A Coder, Ep 3</b></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code Combat </a>and
              play for the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above when
              you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 14</span>
          <ToggleSwitch checked={selectedCoding14} id='coding-14' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-14", `${e.target.checked}`)
              setSelectedCoding14(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/12/levels/1" target="_blank"
              rel="noopener noreferrer"> 12. Nested Loops in Maze Units 1-13.</a></li>
            <li>Watch the video below: <b>The Furnace Bots | Think Like A Coder, Ep 3</b></li>
            <Video videoUrl="https://www.youtube.com/embed/wQPArC8NN5o"/></ul>
          <br/>

          <span className="days">LESSON 15</span>
          <ToggleSwitch checked={selectedCoding15} id='coding-15' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-15", `${e.target.checked}`)
              setSelectedCoding15(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/13/levels/1"
              target="_blank" rel="noopener noreferrer"> 13. Snowflakes with Anna and Elsa Units 1-6.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 16</span>
          <ToggleSwitch checked={selectedCoding16} id='coding-16' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-16", `${e.target.checked}`)
              setSelectedCoding16(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/14/levels/1" target="_blank"
              rel="noopener noreferrer"> 14. Looking Ahead with Minecraft Units 1-14.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 17</span>
          <ToggleSwitch checked={selectedCoding17} id='coding-17' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-17", `${e.target.checked}`)
              setSelectedCoding17(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/15/levels/1" target="_blank"
              rel="noopener noreferrer"> 15. If/Else with Bee Units 1-13.</a></li>
            <li>Watch the video below: <b>The Train Heist | Think Like A Coder, Ep 4</b></li>
            <Video videoUrl="https://www.youtube.com/embed/_kR93WRw31Y"/></ul>

          <span className="days">LESSON 18</span>
          <ToggleSwitch checked={selectedCoding18} id='coding-18' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-18", `${e.target.checked}`)
              setSelectedCoding18(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/16/levels/1" target="_blank"
              rel="noopener noreferrer"> 16. While Loops in Farmer Units 1-13.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 19</span>
          <ToggleSwitch checked={selectedCoding19} id='coding-19' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-19", `${e.target.checked}`)
              setSelectedCoding19(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/17/levels/1" target="_blank"
              rel="noopener noreferrer">
              17. Conditionals in Minecraft: Voyage Aquatic Units 1-16. </a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 20</span>
          <ToggleSwitch checked={selectedCoding20} id='coding-20' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-20", `${e.target.checked}`)
              setSelectedCoding20(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/18/levels/1" target="_blank"
              rel="noopener noreferrer"> 18. Until Loops in Maze Units 1-11.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 21</span>
          <ToggleSwitch checked={selectedCoding21} id='coding-21' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-21", `${e.target.checked}`)
              setSelectedCoding21(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/19/levels/1" target="_blank"
              rel="noopener noreferrer"> 19. Harvesting with Conditionals Units 1-11.</a></li>
            <li>Watch the video below: <b> The Artists | Think Like A Coder, Ep 5</b></li>
            <Video videoUrl="https://www.youtube.com/embed/7mOev8v3D1U"/></ul>

          <span className="days">LESSON 22</span>
          <ToggleSwitch checked={selectedCoding22} id='coding-22' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-22", `${e.target.checked}`)
              setSelectedCoding22(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/20/levels/1" target="_blank"
              rel="noopener noreferrer"> 20. Functions in Minecraft Units 1-16.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 23</span>
          <ToggleSwitch checked={selectedCoding23} id='coding-23' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-23", `${e.target.checked}`)
              setSelectedCoding23(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/21/levels/1" target="_blank"
              rel="noopener noreferrer"> 21. Functions with Artist Units 1-13.</a></li>
            <li>Watch the video below: <b>The Chasm | Think Like A Coder, Ep 6</b></li>
            <Video videoUrl="https://www.youtube.com/embed/bbM-zSkjvHo"/></ul>

          <span className="days">LESSON 24</span>
          <ToggleSwitch checked={selectedCoding24} id='coding-24' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-24", `${e.target.checked}`)
              setSelectedCoding24(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/22/levels/1" target="_blank"
              rel="noopener noreferrer"> 22. Functions with Harvester Units 1-13.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 25</span>
          <ToggleSwitch checked={selectedCoding25} id='coding-25' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-25", `${e.target.checked}`)
              setSelectedCoding25(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/23/levels/1" target="_blank"
              rel="noopener noreferrer"> 23. Text and Prompts Units 1-15.</a></li>
            <li>Watch the video below: <b>The Tower of Epiphany | Think Like A Coder, Ep 7</b></li>
            <Video videoUrl="https://www.youtube.com/embed/Xq-szohkAqU"/></ul>
          <br/>

          <span className="days">LESSON 26</span>
          <ToggleSwitch checked={selectedCoding26} id='coding-26' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-26", `${e.target.checked}`)
              setSelectedCoding26(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/24/levels/1"
              target="_blank" rel="noopener noreferrer">
              24. Using Variables with the Artist Units 1-7. </a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 27</span>
          <ToggleSwitch checked={selectedCoding27} id='coding-27' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-27", `${e.target.checked}`)
              setSelectedCoding27(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.clienode.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/25/levels/1"
              target="_blank" rel="noopener noreferrer"> 25. Variables with the Bee Units 1-10.</a></li>
            <li>Watch the video below: <b> The Gauntlet | Think Like A Coder, Ep 8</b></li>
            <Video videoUrl="https://www.youtube.com/embed/8dEdCea-UVU"/>
          </ul>

          <span className="days">LESSON 28</span>
          <ToggleSwitch checked={selectedCoding28} id='coding-28' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-28", `${e.target.checked}`)
              setSelectedCoding28(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/26/levels/1"
              target="_blank" rel="noopener noreferrer"> 26. For Loops with Bee Units 1-13.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 29</span>
          <ToggleSwitch checked={selectedCoding29} id='coding-29' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-29", `${e.target.checked}`)
              setSelectedCoding29(e.target.checked)
              console.log(e.target.checked)
            }}/>

          <ul>
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/27/levels/1"
              target="_blank" rel="noopener noreferrer"> 27. For Loops with Artist Units 1-8.</a></li>
            <li>Watch the video below: <b>The Factory | Think Like A Coder, Ep 9</b></li>
            <Video videoUrl="https://www.youtube.com/embed/5y0pcLkD7-I"/>
          </ul>
          <br/>

          <span className="days">LESSON 30</span>
          <ToggleSwitch checked={selectedCoding30} id='coding-30' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-30", `${e.target.checked}`)
              setSelectedCoding30(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Sign in on <a href="https://studio.code.org/users/sign_in"
                              target="_blank" rel="noopener noreferrer">Code.org</a> and then complete <a
              href="https://studio.code.org/s/express-2021/lessons/28/levels/1" target="_blank"
              rel="noopener noreferrer"> 28. End of Course Project.</a></li>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 31</span>
          <ToggleSwitch checked={selectedCoding31} id='coding-31' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-31", `${e.target.checked}`)
              setSelectedCoding31(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Watch the video below: <b>The World Machine | Think Like A Coder, Ep 10</b></li>
            <Video videoUrl="https://www.youtube.com/embed/2_CNihv5PCs"/>
            <li>Go to <a href="https://codecombat.com/" target="_blank" rel="noopener noreferrer"> Code
              Combat </a>and play for the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <br/>

          <span className="days">LESSON 32</span>
          <ToggleSwitch checked={selectedCoding32} id='coding-32' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-32", `${e.target.checked}`)

              setSelectedCoding32(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">
            <li>Watch the video below: <b>A brief history of video games by Safwat Saleem </b></li>
            <Video videoUrl="https://www.youtube.com/embed/x24KoVNliMk"/>
            <li>After you watch the video, answer the following questions in the textbox below:</li>
            <ul>
              <li>1. What kinds of people use video games?</li>
              <li>2. Is the Damsel in distress a common storyline in video games? Why do you think this is? Do you like
                this kind of storyline? Explain.
              </li>
              <li> 3. What kind of a person was most likely to develop an interest in video games in the 50s, 60s and
                70s? Why?
              </li>
              <li>4. It took a while for video games to catch on. What factors do you think contribute to whether or not
                a new technology catches on?
              </li>
            </ul>
            <li>After you answer the questions above, go to <a href="https://codecombat.com/" target="_blank"
                                                               rel="noopener noreferrer"> Code Combat </a>and play for
              the remainder of your code class time.
            </li>
            <li> Check the <i>Completed</i> checkbox above
              when you're done.
            </li>
          </ul>
          <textarea style={{ backgroundColor: "#ebeff3" }} className="textArea" placeholder="Write your answers here. Your work will automatically be saved to the Local Storage of your device.
                    -----
                    If you clear your cookies, your answers will be erased! Be sure to back up your work by saving it in another
                    location.
                    -----
                    You can 'Select All' (select your answers inside this textbox by touching/clicking on (ctrl a)) and
                    copy/paste it into Google Docs, a Word Doc or into an email  and send it to your parent or teacher."
                    onChange={onChangeCodingListener32} value={codingEssay32}/>

          <br/>

          <span className="days">LESSON 33</span>
          <ToggleSwitch checked={selectedCoding33} id='coding-33' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-33", `${e.target.checked}`)
              setSelectedCoding33(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <p className="topBottom">If you don't already have a free account on <a
            href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
            rel="noreferrer" target="_blank">Khan Academy, set one up by clicking here. </a> Khan will track your
            progress through the Javascript lessons that follow.
          </p>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro" rel="noreferrer" target="_blank">What is Programming </a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/a/learning-programming-on-khan-academy" rel="noreferrer" target="_blank">Learning programming on Khan Academy </a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pt/making-drawings-with-code" rel="noreferrer" target="_blank">Making drawings with code</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/a/quick-tip-number-scrubbing" rel="noreferrer" target="_blank">Quick tip: number scrubbing</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pc/challenge-simple-snowman" rel="noreferrer" target="_blank">Challenge: Simple snowman</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pt/drawing-more-shapes-with-code" rel="noreferrer" target="_blank">Drawing more shapes with code</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pc/challenge-waving-snowman" rel="noreferrer" target="_blank">Challenge: Waving snowman</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className="days">LESSON 34</span>
          <ToggleSwitch checked={selectedCoding34} id='coding-34' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-34", `${e.target.checked}`)

              setSelectedCoding34(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/coloring/pt/coloring-with-code" rel="noreferrer" target="_blank">Coloring with code</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/coloring/a/quick-tip-color-picking" rel="noreferrer" target="_blank">Quick tip: color picking </a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/coloring/pc/challenge-sunny-snowy-day" rel="noreferrer" target="_blank">Challenge: Sunny snowy day</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/coloring/v/the-power-of-the-docs" rel="noreferrer" target="_blank">The Power of the Docs</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/coloring/pp/project-whats-for-dinner" rel="noreferrer" target="_blank">Project: What's for dinner?</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className="days">LESSON 35</span>
          <ToggleSwitch checked={selectedCoding35} id='coding-35' label='Completed' onChange={
            (e) => {
              localStorage.setItem("coding-35", `${e.target.checked}`)

              setSelectedCoding35(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/pt/intro-to-variables" rel="noreferrer" target="_blank">Intro to Variables</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/pc/challenge-bucktooth-bunny" rel="noreferrer" target="_blank">Challenge: Bucktooth Bunny</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/pt/more-on-variables" rel="noreferrer" target="_blank">More on Variables</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/pc/challenge-funky-frog" rel="noreferrer" target="_blank">Challenge: Funky Frog</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/a/review-variables" rel="noreferrer" target="_blank">Review: Variables</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/variables/e/exercise--intro-to-variables" rel="noreferrer" target="_blank">Using variables</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className='days'>Lesson 36</span>
          <ToggleSwitch
            checked={selectedCoding36} id='coding-36' label='Completed'
            onChange={(e) => {
              localStorage.setItem("coding-36", `${e.target.checked}`)
              setSelectedCoding36(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/a/what-are-animations" rel="noreferrer" target="_blank">What are animations?</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pt/making-animations" rel="noreferrer" target="_blank">Making animations</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pc/challenge-exploding-sun" rel="noreferrer" target="_blank">Challenge: Exploding Sun</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className=' days'>Lesson 37</span>
          <ToggleSwitch checked={selectedCoding37} id='coding-37' label='Completed' onChange={(e) => {
            localStorage.setItem("coding-37", `${e.target.checked}`)
            setSelectedCoding37(e.target.checked)
            console.log(e.target.checked)
          }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pt/incrementing-shortcuts" rel="noreferrer" target="_blank">Incrementing shortcuts</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pt/a-shorter-shortcut" rel="noreferrer" target="_blank">A shorter shortcut</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pc/challenge-parting-clouds" rel="noreferrer" target="_blank">Challenge: Parting Clouds</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star" rel="noreferrer" target="_blank">Project: Shooting star</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className='days'>Lesson 38</span>
          <ToggleSwitch
            checked={selectedCoding38} id='coding-38' label='Completed'
            onChange={(e) => {
              localStorage.setItem("coding-38", `${e.target.checked}`)
              setSelectedCoding38(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/interactive-programs/pt/mouse-interaction" rel="noreferrer" target="_blank">Mouse Interaction</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/interactive-programs/pc/challenge-tasty-tomato" rel="noreferrer" target="_blank">Challenge: Tasty Tomato</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/interactive-programs/pc/challenge-mouse-movement-mania" rel="noreferrer" target="_blank">Challenge: Mouse movement mania</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/becoming-a-community-coder/a/ask-for-program-help" rel="noreferrer" target="_blank">Ask for help </a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className=' days'>Lesson 39</span>
          <ToggleSwitch checked={selectedCoding39} id='coding-39' label='Completed' onChange={(e) => {
            localStorage.setItem("coding-39", `${e.target.checked}`)
            setSelectedCoding39(e.target.checked)
            console.log(e.target.checked)
          }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/a/using-math-expressions-in-js" rel="noreferrer" target="_blank">Using math expressions in JS </a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/pt/resizing-shapes-with-variable-expressions" rel="noreferrer" target="_blank">Resizing shapes with variable expressions</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/pc/challenge-brown-bear-eyes" rel="noreferrer" target="_blank">Challenge: Brown bear eyes</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/pp/project-animal-attack" rel="noreferrer" target="_blank">Project: Animal attack</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/e/quiz--use-variable-expressions" rel="noreferrer" target="_blank">Using variable expressions</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className='days'>Lesson 40</span>
          <ToggleSwitch
            checked={selectedCoding40} id='coding-40' label='Completed'
            onChange={(e) => {
              localStorage.setItem("coding-40", `${e.target.checked}`)
              setSelectedCoding40(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pt/terrific-text-part-one" rel="noreferrer" target="_blank">Terrific Text: Part One</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pc/challenge-my-favorite-foods" rel="noreferrer" target="_blank">Challenge: My Favorite Foods</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pt/terrific-text-part-two" rel="noreferrer" target="_blank">Terrific Text: Part Two</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pc/challenge-mouse-tracker" rel="noreferrer" target="_blank">Challenge: Mouse Tracker</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className=' days'>Lesson 41</span>
          <ToggleSwitch checked={selectedCoding41} id='coding-41' label='Completed' onChange={(e) => {
            localStorage.setItem("coding-41", `${e.target.checked}`)
            setSelectedCoding41(e.target.checked)
            console.log(e.target.checked)
          }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/a/review-text-and-strings" rel="noreferrer" target="_blank">Review: text and strings</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pp/project-ad-design" rel="noreferrer" target="_blank">Project: Ad design</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className='days'>Lesson 42</span>
          <ToggleSwitch
            checked={selectedCoding42} id='coding-42' label='Completed'
            onChange={(e) => {
              localStorage.setItem("coding-42", `${e.target.checked}`)
              setSelectedCoding42(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/functions" rel="noreferrer" target="_blank">Functions </a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pc/challenge-say-your-name" rel="noreferrer" target="_blank">Challenge: Say Your Name</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/function-parameters" rel="noreferrer" target="_blank">Function Parameters</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pc/challenge-moles-in-holes" rel="noreferrer" target="_blank">Challenge: Moles in Holes</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className=' days'>Lesson 43</span>
          <ToggleSwitch checked={selectedCoding43} id='coding-43' label='Completed' onChange={(e) => {
            localStorage.setItem("coding-43", `${e.target.checked}`)
            setSelectedCoding43(e.target.checked)
            console.log(e.target.checked)
          }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/function-return-values" rel="noreferrer" target="_blank">Function Return Values</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pc/challenge-calculator" rel="noreferrer" target="_blank">Challenge: Calculator</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/local-and-global-variables" rel="noreferrer" target="_blank">Local and Global Variables</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/special-processingjs-functions" rel="noreferrer" target="_blank">Special ProcessingJS functions</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          <span className='days'>Lesson 44</span>
          <ToggleSwitch
            checked={selectedCoding44} id='coding-44' label='Completed'
            onChange={(e) => {
              localStorage.setItem("coding-44", `${e.target.checked}`)
              setSelectedCoding44(e.target.checked)
              console.log(e.target.checked)
            }}/>
          <ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/a/review-functions" rel="noreferrer" target="_blank">Review: Functions</a></li>
            <li><a href="https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank" rel="noreferrer" target="_blank">Project: Fish tank</a></li>
            <li> Check the <i>Completed</i> checkbox above when you're done.</li>
          </ul>
          <br/>

          {/*https://www.khanacademy.org/computing/computer-programming/programming#drawing-basics*/}
          {/*Logic and if Statements*/}
          {/*Teach your program to make decisions!*/}


          {/*<span className=' days'>Lesson 45</span>*/}
          {/*<ToggleSwitch checked={selectedCoding45} id='coding-45' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-45", `${e.target.checked}`)*/}
            {/*setSelectedCoding45(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}
          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 46</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding46} id='coding-46' label='Completed'*/}
            {/*onChange={(e) => {*/}
              {/*localStorage.setItem("coding-46", `${e.target.checked}`)*/}
              {/*setSelectedCoding46(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}
          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 47</span>*/}
          {/*<ToggleSwitch checked={selectedCoding47} id='coding-47' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-47", `${e.target.checked}`)*/}
            {/*setSelectedCoding47(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}


          {/*<span className='days'>Lesson 48</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding48} id='coding-48' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-48", `${e.target.checked}`)*/}
            {/*setSelectedCoding48(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}
          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 49</span>*/}
          {/*<ToggleSwitch checked={selectedCoding49} id='coding-49' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-49", `${e.target.checked}`)*/}
            {/*setSelectedCoding49(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 50</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding50} id='coding-50' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-50", `${e.target.checked}`)*/}
            {/*setSelectedCoding50(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 51</span>*/}
          {/*<ToggleSwitch checked={selectedCoding51} id='coding-51' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-51", `${e.target.checked}`)*/}
            {/*setSelectedCoding51(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 52</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding52} id='coding-52' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-52", `${e.target.checked}`)*/}
            {/*setSelectedCoding52(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 53</span>*/}
          {/*<ToggleSwitch checked={selectedCoding53} id='coding-53' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-53", `${e.target.checked}`)*/}
            {/*setSelectedCoding53(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 54</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding54} id='coding-54' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-54", `${e.target.checked}`)*/}
            {/*setSelectedCoding54(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 55</span>*/}
          {/*<ToggleSwitch checked={selectedCoding55} id='coding-55' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-55", `${e.target.checked}`)*/}
            {/*setSelectedCoding55(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 56</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding56} id='coding-56' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-56", `${e.target.checked}`)*/}
            {/*setSelectedCoding56(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
          {/*</ul>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 57</span>*/}
          {/*<ToggleSwitch checked={selectedCoding57} id='coding-57' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-57", `${e.target.checked}`)*/}
            {/*setSelectedCoding57(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 58</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding58} id='coding-58' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-58", `${e.target.checked}`)*/}
            {/*setSelectedCoding58(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 59</span>*/}
          {/*<ToggleSwitch checked={selectedCoding59} id='coding-59' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-59", `${e.target.checked}`)*/}
            {/*setSelectedCoding59(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 60</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding60} id='coding-60' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-60", `${e.target.checked}`)*/}
            {/*setSelectedCoding60(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 61</span>*/}
          {/*<ToggleSwitch checked={selectedCoding61} id='coding-61' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-61", `${e.target.checked}`)*/}
            {/*setSelectedCoding61(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 62</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding62} id='coding-62' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-62", `${e.target.checked}`)*/}
            {/*setSelectedCoding62(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 63</span>*/}
          {/*<ToggleSwitch checked={selectedCoding63} id='coding-63' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-63", `${e.target.checked}`)*/}
            {/*setSelectedCoding63(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className='days'>Lesson 64</span>*/}
          {/*<ToggleSwitch*/}
            {/*checked={selectedCoding64} id='coding-64' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-64", `${e.target.checked}`)*/}
            {/*setSelectedCoding64(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}

          {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
            {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
          {/*</ul>*/}
          {/*<br/>*/}

          {/*<span className=' days'>Lesson 65</span>*/}
          {/*<ToggleSwitch checked={selectedCoding65} id='coding-65' label='Completed' onChange={(e) => {*/}
            {/*localStorage.setItem("coding-65", `${e.target.checked}`)*/}
            {/*setSelectedCoding65(e.target.checked)*/}
            {/*console.log(e.target.checked)*/}
          {/*}}/>*/}
            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className='days'>Lesson 66</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding66}*/}
              {/*id='coding-66' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-66", `${e.target.checked}`)*/}
                {/*setSelectedCoding66(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className=' days'>Lesson 67</span>*/}
            {/*<ToggleSwitch checked={selectedCoding67} id='coding-67' label='Completed' onChange={(e) => {*/}
              {/*localStorage.setItem("coding-67", `${e.target.checked}`)*/}
              {/*setSelectedCoding67(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className='days'>Lesson 68</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding68}*/}
              {/*id='coding-68' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-68", `${e.target.checked}`)*/}
                {/*setSelectedCoding68(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className=' days'>Lesson 69</span>*/}
            {/*<ToggleSwitch checked={selectedCoding69} id='coding-69' label='Completed' onChange={(e) => {*/}
              {/*localStorage.setItem("coding-69", `${e.target.checked}`)*/}
              {/*setSelectedCoding69(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className='days'>Lesson 70</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding70}*/}
              {/*id='coding-70' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-70", `${e.target.checked}`)*/}
                {/*setSelectedCoding70(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className=' days'>Lesson 71</span>*/}
            {/*<ToggleSwitch checked={selectedCoding71} id='coding-71' label='Completed' onChange={(e) => {*/}
              {/*localStorage.setItem("coding-71", `${e.target.checked}`)*/}
              {/*setSelectedCoding71(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}

            {/*<ul className="assnList">After you sign in to Khan Academy, complete the following:<br/>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li><a href="" rel="noreferrer" target="_blank"> </a></li>*/}
              {/*<li> Check the <i>Completed</i> checkbox above when you're done.</li>*/}
            {/*</ul>*/}
            {/*<br/>*/}

            {/*<span className='days'>Lesson 72</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding72}*/}
              {/*id='coding-72' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-72", `${e.target.checked}`)*/}
                {/*setSelectedCoding72(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}


            {/*<span className=' days'>Lesson 73</span>*/}
            {/*<ToggleSwitch checked={selectedCoding73} id='coding-73' label='Completed' onChange={(e) => {*/}
              {/*localStorage.setItem("coding-73", `${e.target.checked}`)*/}
              {/*setSelectedCoding73(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}


            {/*<span className='days'>Lesson 74</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding74}*/}
              {/*id='coding-74' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-74", `${e.target.checked}`)*/}
                {/*setSelectedCoding74(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}


            {/*<span className=' days'>Lesson 75</span>*/}
            {/*<ToggleSwitch checked={selectedCoding75} id='coding-75' label='Completed' onChange={(e) => {*/}
              {/*localStorage.setItem("coding-75", `${e.target.checked}`)*/}
              {/*setSelectedCoding75(e.target.checked)*/}
              {/*console.log(e.target.checked)*/}
            {/*}}/>*/}


            {/*<span className='days'>Lesson 76</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding76}*/}
              {/*id='coding-76' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-76", `${e.target.checked}`)*/}
                {/*setSelectedCoding76(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}


            {/*<span className=' days'>Lesson 77</span>*/}
            {/*<ToggleSwitch checked={selectedCoding77} id='coding-77' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-77", `${e.target.checked}`)*/}
                            {/*setSelectedCoding77(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            {/*<span className='days'>Lesson 78</span>*/}
            {/*<ToggleSwitch checked={selectedCoding78} id='coding-78' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-78", `${e.target.checked}`)*/}
                            {/*setSelectedCoding78(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            {/*<span className=' days'>Lesson 79</span>*/}
            {/*<ToggleSwitch checked={selectedCoding79} id='coding-79' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-79", `${e.target.checked}`)*/}
                            {/*setSelectedCoding79(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            {/*<span className='days'>Lesson 80</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding80}*/}
              {/*id='coding-80' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-80", `${e.target.checked}`)*/}
                {/*setSelectedCoding80(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}


            {/*<span className=' days'>Lesson 81</span>*/}
            {/*<ToggleSwitch checked={selectedCoding81} id='coding-81' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-81", `${e.target.checked}`)*/}
                            {/*setSelectedCoding81(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            {/*<span className='days'>Lesson 82</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding82}*/}
              {/*id='coding-82' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-82", `${e.target.checked}`)*/}
                {/*setSelectedCoding82(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}


            {/*<span className=' days'>Lesson 83</span>*/}
            {/*<ToggleSwitch checked={selectedCoding83} id='coding-83' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-83", `${e.target.checked}`)*/}
                            {/*setSelectedCoding83(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            {/*<span className='days'>Lesson 84</span>*/}
            {/*<ToggleSwitch*/}
              {/*checked={selectedCoding84}*/}
              {/*id='coding-84' label='Completed'*/}
              {/*onChange={(e) => {*/}
                {/*localStorage.setItem("coding-84", `${e.target.checked}`)*/}
                {/*setSelectedCoding84(e.target.checked)*/}
                {/*console.log(e.target.checked)*/}
              {/*}}/>*/}

            {/*<span className=' days'>Lesson 85</span>*/}
            {/*<ToggleSwitch checked={selectedCoding85} id='coding-85' label='Completed'*/}
                          {/*onChange={(e) => {*/}
                            {/*localStorage.setItem("coding-85", `${e.target.checked}`)*/}
                            {/*setSelectedCoding85(e.target.checked)*/}
                            {/*console.log(e.target.checked)*/}
                          {/*}}/>*/}


            <br/>
            <br/>
            <span className="days">MORE LESSONS COMING SOON!</span>
        </div>
      </section>
    </form>

)
}
export default CodingComponent