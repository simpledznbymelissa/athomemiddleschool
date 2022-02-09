import React from "react"
import ToggleSwitch from "./checkbox"
import "../styles/styles.css"
import Video from "./video"
import Confetti from "./confetti"

const ChessComponent = ({ data }) => {

  const [selectedChess1, setSelectedChess1] = React.useState(localStorage.getItem("chess-1") === "true")
  const [selectedChess2, setSelectedChess2] = React.useState(localStorage.getItem("chess-2") === "true")
  const [selectedChess3, setSelectedChess3] = React.useState(localStorage.getItem("chess-3") === "true")
  const [selectedChess4, setSelectedChess4] = React.useState(localStorage.getItem("chess-4") === "true")
  const [selectedChess5, setSelectedChess5] = React.useState(localStorage.getItem("chess-5") === "true")
  const [selectedChess6, setSelectedChess6] = React.useState(localStorage.getItem("chess-6") === "true")
  const [selectedChess7, setSelectedChess7] = React.useState(localStorage.getItem("chess-7") === "true")
  const [selectedChess8, setSelectedChess8] = React.useState(localStorage.getItem("chess-8") === "true")
  const [selectedChess9, setSelectedChess9] = React.useState(localStorage.getItem("chess-9") === "true")
  const [selectedChess10, setSelectedChess10] = React.useState(localStorage.getItem("chess-10") === "true")
  const [selectedChess11, setSelectedChess11] = React.useState(localStorage.getItem("chess-11") === "true")
  const [selectedChess12, setSelectedChess12] = React.useState(localStorage.getItem("chess-12") === "true")
  const [selectedChess13, setSelectedChess13] = React.useState(localStorage.getItem("chess-13") === "true")
  const [selectedChess14, setSelectedChess14] = React.useState(localStorage.getItem("chess-14") === "true")
  const [selectedChess15, setSelectedChess15] = React.useState(localStorage.getItem("chess-15") === "true")
  const [selectedChess16, setSelectedChess16] = React.useState(localStorage.getItem("chess-16") === "true")
  const [selectedChess17, setSelectedChess17] = React.useState(localStorage.getItem("chess-17") === "true")
  const [selectedChess18, setSelectedChess18] = React.useState(localStorage.getItem("chess-18") === "true")
  const [selectedChess19, setSelectedChess19] = React.useState(localStorage.getItem("chess-19") === "true")
  const [selectedChess20, setSelectedChess20] = React.useState(localStorage.getItem("chess-20") === "true")
  const [selectedChess21, setSelectedChess21] = React.useState(localStorage.getItem("chess-21") === "true")
  const [selectedChess22, setSelectedChess22] = React.useState(localStorage.getItem("chess-22") === "true")
  const [selectedChess23, setSelectedChess23] = React.useState(localStorage.getItem("chess-23") === "true")
  const [selectedChess24, setSelectedChess24] = React.useState(localStorage.getItem("chess-24") === "true")
  const [selectedChess25, setSelectedChess25] = React.useState(localStorage.getItem("chess-25") === "true")
  const [selectedChess26, setSelectedChess26] = React.useState(localStorage.getItem("chess-26") === "true")
  const [selectedChess27, setSelectedChess27] = React.useState(localStorage.getItem("chess-27") === "true")
  const [selectedChess28, setSelectedChess28] = React.useState(localStorage.getItem("chess-28") === "true")
  const [selectedChess29, setSelectedChess29] = React.useState(localStorage.getItem("chess-29") === "true")
  const [selectedChess30, setSelectedChess30] = React.useState(localStorage.getItem("chess-30") === "true")
  const [selectedChess31, setSelectedChess31] = React.useState(localStorage.getItem("chess-31") === "true")
  const [selectedChess32, setSelectedChess32] = React.useState(localStorage.getItem("chess-32") === "true")
  const [selectedChess33, setSelectedChess33] = React.useState(localStorage.getItem("chess-33") === "true")
  const [selectedChess34, setSelectedChess34] = React.useState(localStorage.getItem("chess-34") === "true")
  const [selectedChess35, setSelectedChess35] = React.useState(localStorage.getItem("chess-35") === "true")
  const [selectedChess36, setSelectedChess36] = React.useState(localStorage.getItem("chess-36") === "true")
  const [selectedChess37, setSelectedChess37] = React.useState(localStorage.getItem("chess-37") === "true")
  const [selectedChess38, setSelectedChess38] = React.useState(localStorage.getItem("chess-38") === "true")
  const [selectedChess39, setSelectedChess39] = React.useState(localStorage.getItem("chess-39") === "true")
  const [selectedChess40, setSelectedChess40] = React.useState(localStorage.getItem("chess-40") === "true")
  const [selectedChess41, setSelectedChess41] = React.useState(localStorage.getItem("chess-41") === "true")
  const [selectedChess42, setSelectedChess42] = React.useState(localStorage.getItem("chess-42") === "true")
  const [selectedChess43, setSelectedChess43] = React.useState(localStorage.getItem("chess-43") === "true")
  const [selectedChess44, setSelectedChess44] = React.useState(localStorage.getItem("chess-44") === "true")
  const [selectedChess45, setSelectedChess45] = React.useState(localStorage.getItem("chess-45") === "true")
  const [selectedChess46, setSelectedChess46] = React.useState(localStorage.getItem("chess-46") === "true")
  const [selectedChess47, setSelectedChess47] = React.useState(localStorage.getItem("chess-47") === "true")
  const [selectedChess48, setSelectedChess48] = React.useState(localStorage.getItem("chess-48") === "true")
  const [selectedChess49, setSelectedChess49] = React.useState(localStorage.getItem("chess-49") === "true")
  const [selectedChess50, setSelectedChess50] = React.useState(localStorage.getItem("chess-50") === "true")
  const [selectedChess51, setSelectedChess51] = React.useState(localStorage.getItem("chess-51") === "true")
  const [selectedChess52, setSelectedChess52] = React.useState(localStorage.getItem("chess-52") === "true")
  const [selectedChess53, setSelectedChess53] = React.useState(localStorage.getItem("chess-53") === "true")
  const [selectedChess54, setSelectedChess54] = React.useState(localStorage.getItem("chess-54") === "true")
  const [selectedChess55, setSelectedChess55] = React.useState(localStorage.getItem("chess-55") === "true")
  const [selectedChess56, setSelectedChess56] = React.useState(localStorage.getItem("chess-56") === "true")
  const [selectedChess57, setSelectedChess57] = React.useState(localStorage.getItem("chess-57") === "true")
  const [selectedChess58, setSelectedChess58] = React.useState(localStorage.getItem("chess-58") === "true")
  const [selectedChess59, setSelectedChess59] = React.useState(localStorage.getItem("chess-59") === "true")
  const [selectedChess60, setSelectedChess60] = React.useState(localStorage.getItem("chess-60") === "true")
  const [selectedChess61, setSelectedChess61] = React.useState(localStorage.getItem("chess-61") === "true")
  const [selectedChess62, setSelectedChess62] = React.useState(localStorage.getItem("chess-62") === "true")
  const [selectedChess63, setSelectedChess63] = React.useState(localStorage.getItem("chess-63") === "true")
  const [selectedChess64, setSelectedChess64] = React.useState(localStorage.getItem("chess-64") === "true")
  const [selectedChess65, setSelectedChess65] = React.useState(localStorage.getItem("chess-65") === "true")
  const [selectedChess66, setSelectedChess66] = React.useState(localStorage.getItem("chess-66") === "true")
  const [selectedChess67, setSelectedChess67] = React.useState(localStorage.getItem("chess-67") === "true")
  const [selectedChess68, setSelectedChess68] = React.useState(localStorage.getItem("chess-68") === "true")
  const [selectedChess69, setSelectedChess69] = React.useState(localStorage.getItem("chess-69") === "true")
  const [selectedChess70, setSelectedChess70] = React.useState(localStorage.getItem("chess-70") === "true")
  const [selectedChess71, setSelectedChess71] = React.useState(localStorage.getItem("chess-71") === "true")
  const [selectedChess72, setSelectedChess72] = React.useState(localStorage.getItem("chess-72") === "true")
  const [selectedChess73, setSelectedChess73] = React.useState(localStorage.getItem("chess-73") === "true")
  const [selectedChess74, setSelectedChess74] = React.useState(localStorage.getItem("chess-74") === "true")
  const [selectedChess75, setSelectedChess75] = React.useState(localStorage.getItem("chess-75") === "true")
  const [selectedChess76, setSelectedChess76] = React.useState(localStorage.getItem("chess-76") === "true")
  const [selectedChess77, setSelectedChess77] = React.useState(localStorage.getItem("chess-77") === "true")
  const [selectedChess78, setSelectedChess78] = React.useState(localStorage.getItem("chess-78") === "true")
  const [selectedChess79, setSelectedChess79] = React.useState(localStorage.getItem("chess-79") === "true")
  const [selectedChess80, setSelectedChess80] = React.useState(localStorage.getItem("chess-80") === "true")
  const [selectedChess81, setSelectedChess81] = React.useState(localStorage.getItem("chess-81") === "true")
  const [selectedChess82, setSelectedChess82] = React.useState(localStorage.getItem("chess-82") === "true")
  const [selectedChess83, setSelectedChess83] = React.useState(localStorage.getItem("chess-83") === "true")
  const [selectedChess84, setSelectedChess84] = React.useState(localStorage.getItem("chess-84") === "true")
  const [selectedChess85, setSelectedChess85] = React.useState(localStorage.getItem("chess-85") === "true")


  return (
    <>
    <section className="block-circles">
    <div className="circle one"
  style={{ animationDuration: "3s", backgroundColor: '#ee4c58', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
  <div className="circle two" style={{ animationDuration: "3s", backgroundColor: '#ee4c58', transform: "translate(0px, 0px)", opacity: 1 }}/>
  <div className="hero-wrapper pbn hero">
    <h1 className="hero intro in-left">Chess</h1>
  <div className="hero info-block info-block-line in-left" style={{ marginBottom: "4em" }}>
    <h2 className="hero in-left">Daily Lessons</h2>
  </div>
  </div>
</section>
  
      <section className="section math-section raise-top">
        <div className="section-content fadeIn">
          <form>

            <span className="days chessLesson">Lesson 1</span>
            <ToggleSwitch checked={selectedChess1}
                          id='chess-1'
                          label='Completed (Check this box after you finish the lesson below. If you clear your cookies, all of your checkmarks will be removed.)'
                          onChange={
                            (e) => {
                              localStorage.setItem("chess-1", `${e.target.checked}`)
                              setSelectedChess1(e.target.checked)
                              console.log(e.target.checked)
                            }
                          }/>
            <p className='margin-para'>Set up a free account <a href="https://www.chesskid.com/register/user-type" rel="noreferrer" target="_blank"> at ChessKid.com. </a> If you already have one, you can <a href="https://www.chesskid.com/login" rel="noreferrer" target="_blank"> log in here. None of the assignments below require a paid subscription from the sites used. </a></p>

            <p className="margin-para">Watch the videos listed below and then play a game of chess against a
              bot.</p>
            <ul className='assnList'>
              <li><Video videoUrl="https://www.youtube.com/embed/YeB-1F-UKO0"/></li>
              <li><a href="https://www.chesskid.com/videos/an-introduction-to-chess" rel="noreferrer"
                     target="_blank"> Introduction to Chess</a></li>
              <li><a href="https://www.chesskid.com/videos/the-rook" rel="noreferrer" target="_blank"> The Rook</a>
              </li>
              <li><a href="https://www.chesskid.com/videos/the-bishop" rel="noreferrer" target="_blank"> The
                Bishop </a></li>
              <li><a href="https://www.chesskid.com/videos/the-king" rel="noreferrer" target="_blank"> The King</a>
              </li>
              <li><a href="https://www.chesskid.com/videos/the-queen" rel="noreferrer" target="_blank"> The
                Queen</a></li>
              <li><a href="https://www.chesskid.com/videos/the-pawn" rel="noreferrer" target="_blank"> The Pawn</a>
              </li>
              <li><a href="https://www.chesskid.com/videos/the-knight" rel="noreferrer" target="_blank"> The
                Knight</a></li>
            </ul>
            <p className="margin-para">Play your <a href="https://www.chess.com/play/computer"
                                                    rel="noreferrer"
                                                    target="_blank"> first game </a>against a chess bot on
              Chess.com! (Instructions below).
              <ul className='assnList'>
                <li>Play for twenty minutes. <a href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank"> Set a 20 minute
                  timer </a> and play until the
                  timer sounds.
                </li>
                <li>There are multiple free computer/bot opponents to choose from. Jimmy is adaptive and will adjust
                  to your playing level. Or, you can start with a beginner opponent and level up as your skill
                  improves through this course. Most players have a specific skill they focus on.
                </li>
                <li>Next, choose your playing mode. Initially you should select Friendly (you get take backs) or
                  Assisted mode. Assisted shows you the best moves to make.
                </li>
                <li>You don't have to create an account to play against the bot on Chess.com, but doing so can help
                  you track your progress.
                </li>
              </ul></p>


            <span className='days lessonTop'>Lesson 2</span>
            <ToggleSwitch checked={selectedChess2} id='chess-2' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-2", `${e.target.checked}`)
              setSelectedChess2(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <p><a href="https://www.chesskid.com/login"
                  rel="noreferrer" target="_blank">Log in to ChessKid.</a> Then complete the lesson<a
              href='https://www.chesskid.com/lessons/review-topic/11e74f97362dcfca98797d2e40bc354f' rel='noreferrer'
              target='_blank'> Meet the Rook! (Topics 1-5) </a> Within Chess Kid you can navigate to
              the next topic by using the right arrow.
              <ul className='assnList'>
                <li>Rook Journey 1</li>
                <li>Rook Journey 2</li>
                <li>Rook Stare Down!</li>
                <li>Clash of Rooks! Part One</li>
                <li>Clash of Rooks! Part Two</li>
              </ul></p>
            <p className="margin-para">Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                target="_blank">play chess with
              the bot</a> for 20 minutes. After choosing your opponent (Adaptive or Beginner), select how much help
              you want, then click Play. Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> 20 minute timer
                here. </a>
            </p>

            <span className='days lessonTop'>Lesson 3</span>
            <ToggleSwitch checked={selectedChess3} id='chess-3' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-3", `${e.target.checked}`)
              setSelectedChess3(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <p><a href="https://www.chesskid.com/login" rel="noreferrer" target="_blank">Log in to
              ChessKid.</a> Then
              complete the lesson <a
                href='https://www.chesskid.com/lessons/review-topic/11e755e2503e526c96c6a86292af6749'
                rel='noreferrer' target="_blank"> Meet the Bishop (Topics 1-5) </a>
              <ul className='assnList'>
                <li>A Bishop Journey</li>
                <li>A Snack for the Bishop</li>
                <li> Hungry, Hungry Bishop!</li>
                <li>Cat and Mouse</li>
                <li>Bishop Stare Down</li>
              </ul>
            </p>
            <p className="margin-para">After you complete the lesson, <a href='https://www.chess.com/play/computer'
                                                                         rel='noreferrer' target="_blank">play chess
              with the bot</a> for 20 minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> Set a 20 minute
              timer.</a></p>


            <span className='days'>Lesson 4</span>
            <ToggleSwitch checked={selectedChess4} id='chess-4' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-4", `${e.target.checked}`)
              setSelectedChess4(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the lesson <a
                href='https://www.chesskid.com/lessons/review-topic/11e75b4e0bd2d44c808aa44f9422f131'
                rel='noreferrer' target='_blank'>Meet the Queen (Topics 1-5) </a></li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/checkmate-queen-vs-king'
                                          rel='noreferrer' target='_blank'> Checkmate: Queen vs. King </a></li>
              <li className="margin-para"><a href='https://www.chess.com/play/computer' rel='noreferrer'
                                             target="_blank">Play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> Set a 20 minute
                timer.</a></li>
            </ul>

            <span className=' days'>Lesson 5</span>
            <ToggleSwitch checked={selectedChess5} id='chess-5' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-5", `${e.target.checked}`)
              setSelectedChess5(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the lesson <a
                href='https://www.chesskid.com/lessons/attempt-topic/11e764d1102ad74cba80fc0f9edb2515'
                rel='noreferrer' target="_blank"> Meet the King (Topics 1-5) </a></li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/nowhere-to-hide-checkmate-with-king-and-2-rooks-against-king'
                rel='noreferrer' target='_blank'> Nowhere to Hide: Checkmate with King and 2 Rooks </a></li>
              <li><a href='https://www.chesskid.com/vision' rel='noreferrer' target='_blank'>Practice Chessboard
                Coordinates </a> 5 times. Try to get as many coordinates correct as you can in 30 seconds.
              </li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play
                with the chess bot.</a>
              </li>
            </ul>

            <span className='days'>Lesson 6</span>
            <ToggleSwitch checked={selectedChess6} id='chess-6' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-6", `${e.target.checked}`)
              setSelectedChess6(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the lesson <a href='https://www.chesskid.com/lessons/view/meet-the-pawn' rel='noreferrer'
                                         target='_blank'> Meet the Pawn (Topics 1-5) </a></li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/chesskid-curriculum-lesson-4---the-basic-mates'
                rel='noreferrer' target='_blank'> The Basic Mates </a></li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play
                with the chess bot.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 7</span>
            <ToggleSwitch checked={selectedChess7} id='chess-7' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-7", `${e.target.checked}`)
              setSelectedChess7(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the lesson <a href='https://www.chesskid.com/lessons/view/meet-the-knight'
                                         rel='noreferrer' target="_blank">Meet the Knight (Topics 1-5) </a></li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/he-shouldve-castled-early-on---part-12' rel='noreferrer'
                target='_blank'> He Should Have Castled Early On </a></li>
              <li>Knowing chessboard coordinates is an important skill. <a href='https://www.chesskid.com/vision'
                                                                           rel='noreferrer' target='_blank'>Practice
                finding coordinates </a> as quickly as you can on the chessboard. You will have 30 seconds to
                correctly click on as many squares as you can.
                <a href='https://www.chesskid.com/vision' rel='noreferrer' target='_blank'>Begin Coordinates
                  Practice
                  now </a> and play 5 times. Good luck!
              </li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play
                with the chess bot.</a>
              </li>
            </ul>

            <span className='days'>Lesson 8</span>
            <ToggleSwitch checked={selectedChess8} id='chess-8' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-8", `${e.target.checked}`)
              setSelectedChess8(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/learning-to-count'
                                          rel='noreferrer' target='_blank'>Learning to Count</a></li>
              <li>We will begin using a free chess site called <a
                href='https://lichess.org/signup' rel="noreferrer" target="_blank">>Lichess.org. </a>
                <a href='https://lichess.org/signup' rel="noreferrer" target="_blank">>Sign up here </a> and be sure to enable Kid Mode. There is no
                fee or paid subscription.
              </li>
              <li>Complete the 5 lessons from <a href="https://lichess.org/learn#/7"  rel="noreferrer" target="_blank">Capture</a> on Lichess.</li>
              <li>Your <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                          target='_blank'> Coordinates
                Practice </a>will no longer show the coordinates written on the chess board like the one below (a-h,
                1-8). IMPORTANT:
                Before you start, select the direction of the board using the orange button. Selecting the white
                king
                keeps the coordinates as they appear below, while black REVERSES the board. <a
                  href='https://lichess.org/training/coordinate' rel='noreferrer' target='_blank'> See how many
                  coordinates you
                  can guess correctly in 30 seconds! Click to get started.<img
                    src={require("../../public/images/chessCoordinates.jpg")} alt="chess coordinates"/>
                </a>
              </li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                        target='_blank'> start playing
                with the chess bot.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 9</span>
            <ToggleSwitch checked={selectedChess9} id='chess-9' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-9", `${e.target.checked}`)
              setSelectedChess9(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the 8 lessons on <a href="https://lichess.org/learn#/8">Protection </a> on Lichess.</li>
              <li>Watch a video called <a href='https://www.chesskid.com/lessons/view/first-moves-part-1'
                                          rel='noreferrer' target='_blank'> Consequences </a></li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                        target='_blank'> start playing
                with the chess bot.</a>
              </li>
            </ul>

            <span className='days'>Lesson 10</span>
            <ToggleSwitch checked={selectedChess10} id='chess-10' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-10", `${e.target.checked}`)
              setSelectedChess10(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete the <a href="https://lichess.org/learn#/9">5 Combat lessons</a> found on Lichess.</li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/when-we-were-chess-kids-learning-the-hard-way'
                rel='noreferrer' target='_blank'> Learning the Hard Way </a></li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Be sure to select black, white or both, Practice at least 5 times.
              </li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                        target='_blank'> begin playing chess with the bot.</a> If you are up for the
                challenge, increase the
                difficulty level of your opponent.
              </li>
            </ul>

            <span className=' days'>Lesson 11</span>
            <ToggleSwitch checked={selectedChess11} id='chess-11' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-11", `${e.target.checked}`)
              setSelectedChess11(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/check-the-checks'
                                          rel='noreferrer' target='_blank'>Check the Checks!</a></li>
              <li>Complete <a href="https://lichess.org/learn#/10">Check in One (1-7) </a> on Lichess.</li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                        target='_blank'> start playing
                with the chess bot.</a>
              </li>
            </ul>

            <span className='days'>Lesson 12</span>
            <ToggleSwitch checked={selectedChess12} id='chess-12' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-12", `${e.target.checked}`)
              setSelectedChess12(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href="https://lichess.org/learn#/11">Out of Check (1-7) </a> on Lichess.</li>
              <li className="margin-para">Set a <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> 20
                minute timer </a>and <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                        target='_blank'> start playing
                with the chess bot.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 13</span>
            <ToggleSwitch checked={selectedChess13} id='chess-13' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-13", `${e.target.checked}`)
              setSelectedChess13(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href="https://lichess.org/learn#/12">Mate in One (1-7) </a> on Lichess.</li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/check-the-checks' rel='noreferrer'
                                          target='_blank'> Secrets Of The Battering Ram </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set a 20 minute
                timer here.</a></li>
            </ul>

            <span className='days'>Lesson 14</span>
            <ToggleSwitch checked={selectedChess14} id='chess-14' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-14", `${e.target.checked}`)
              setSelectedChess14(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href="https://lichess.org/learn#/13">Board Set Up (1-7) </a> on Lichess.</li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/when-we-were-chess-kids-if-you-dont-know-ask' rel='noreferrer'
                target='_blank'> If You Don't Know, Ask </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target="_blank">play chess with the bot</a> for 20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 15</span>
            <ToggleSwitch checked={selectedChess15} id='chess-15' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-15", `${e.target.checked}`)
              setSelectedChess15(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/castling' rel='noreferrer'
                                          target='_blank'> Castling </a>
              </li>
              <li>Complete <a href="https://lichess.org/learn#/14">Castling (1-9). </a></li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a
                  20
                  minute timer here.</a> As your playing improves, you can increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 16</span>
            <ToggleSwitch checked={selectedChess16}
                          id='chess-16' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-16", `${e.target.checked}`)
                            setSelectedChess16(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch the following videos: <a
                href='https://www.chesskid.com/videos/the-language-of-chess-en-passant'
                rel='noreferrer' target='_blank'> The Language of Chess: En Passant </a> and <a
                href='https://www.chesskid.com/videos/player/special-pawn-moves2'
                rel='noreferrer' target='_blank'> Special Pawn Moves: En Passant </a></li>
              <li>Complete <a href="https://lichess.org/learn#/15">En Passant (1-4). </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 17</span>
            <ToggleSwitch checked={selectedChess17} id='chess-17' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-17", `${e.target.checked}`)
              setSelectedChess17(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/stalemate' rel='noreferrer'
                                          target='_blank'> Stalemate </a></li>
              <li>Complete <a href="https://lichess.org/learn#/16" rel='noreferrer' target='_blank'>Stalemate
                (1-5). </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20
                  minute timer here.</a> As your playing improves, you can increase
                the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 18</span>
            <ToggleSwitch checked={selectedChess18}
                          id='chess-18' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-18", `${e.target.checked}`)
                            setSelectedChess18(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch the following videos<a href='https://www.chesskid.com/videos/player/king-and-rook-mate'
                                               rel='noreferrer' target='_blank'> King and Rook Mate </a> and
                <a href='https://www.chesskid.com/videos/using-quotspecial-movesquot-in-your-chess-games'
                   rel='noreferrer' target='_blank'> Special Moves in your Chess Game</a></li>
              <li>Practice basic checkmates at <a
                href="https://lichess.org/practice/checkmates/piece-checkmates-i/BJy6fEDf/8K8FdT6P" rel='noreferrer'
                target='_blank'> Piece Checkmates 1 (Lessons 1-6). </a> Use the hints if you need them.
              </li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 19</span>
            <ToggleSwitch checked={selectedChess19} id='chess-19' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-19", `${e.target.checked}`)
              setSelectedChess19(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://lichess.org/video/EnXIlR_wqQI?q=chess%20mating%20patterns'
                                          rel='noreferrer' target='_blank'> Chess Mating Pattern Part 1 </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-i/fE4k21MW/9rd7XwOw'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 1: Recognize the Patterns
                (1-5)</a>
                <ul className='assnList2'>
                  <li>Back-Rank Mate #1</li>
                  <li>Back-Rank Mate #2</li>
                  <li>Back-Rank Mate #3</li>
                  <li>Back-Rank Mate #4</li>
                  <li>Hook Mate #1</li>
                </ul>
              </li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a
                  20 minute timer here.</a> As your playing improves, you can increase
                the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 20</span>
            <ToggleSwitch checked={selectedChess20}
                          id='chess-20' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-20", `${e.target.checked}`)
                            setSelectedChess20(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://lichess.org/video/Gssol4R3yMg?q=chess%20mating%20patterns'
                                          rel='noreferrer' target='_blank'> Chess Mating Pattern Part 2 </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-i/fE4k21MW/cUI6AYz4'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 1: Recognize the Patterns
                (6-12)</a>
                <ul className='assnList2'>
                  <li>Hook Mate #2</li>
                  <li>Hook Mate #3</li>
                  <li>Anastasia's Mate #1</li>
                  <li>Anastasia's Mate #2</li>
                  <li>Anastasia's Mate #3</li>
                  <li>Anastasia's Mate #4</li>
                  <li>Blind Swine Mate #1</li>
                </ul>
              </li>

              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a> If the games have become easy, increase the difficulty
                level.
              </li>
            </ul>

            <span className=' days'>Lesson 21</span>
            <ToggleSwitch checked={selectedChess21} id='chess-21' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-21", `${e.target.checked}`)
              setSelectedChess21(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-language-of-chess-development'
                                          rel='noreferrer' target='_blank'> The Language of Chess: Development </a>
              </li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-i/fE4k21MW/iBm9kQPO'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 1: Recognize the Patterns
                (13-18)</a>
                <ul className='assnList2'>
                  <li>Blind Swine Mate #2</li>
                  <li>Blind Swine Mate #3</li>
                  <li>Smothered Mate #1</li>
                  <li>Smothered Mate #2</li>
                  <li>Smothered Mate #3</li>
                  <li> Smothered Mate #4</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a
                  20 minute timer here.</a></li>
            </ul>

            <span className='days'>Lesson 22</span>
            <ToggleSwitch checked={selectedChess22}
                          id='chess-22' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-22", `${e.target.checked}`)
                            setSelectedChess22(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a videos <a href='https://www.chesskid.com/videos/the-fearsome-fork-1' rel='noreferrer'
                                    target='_blank'>The Fearsome Fork: What is a Fork? </a> and <a
                href='https://www.chesskid.com/videos/the-fearsome-fork-2' rel='noreferrer' target='_blank'>The
                Fearsome Fork: The Loose Piece </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-ii/8yadFPpU/UZ1np9Is'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 2: Recognize the Patterns
                (1-6)</a>
                <ul className='assnList2'>
                  <li>Double Bishop Mate #1</li>
                  <li>Double Bishop Mate #2</li>
                  <li>Double Bishop Mate #3</li>
                  <li>Boden's Mate #1</li>
                  <li>Boden's Mate #2</li>
                  <li>Boden's Mate #3</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set
                  a 20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 23</span>
            <ToggleSwitch checked={selectedChess23} id='chess-23' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-23", `${e.target.checked}`)
              setSelectedChess23(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>

              <li>Watch a video called <a href='https://www.chesskid.com/videos/develop-pieces-not-pawns'
                                          rel='noreferrer' target='_blank'> Develop Pieces, Not Pawns</a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-ii/8yadFPpU/XRgmISnM'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 2: Recognize the Patterns
                (7-12)</a>
                <ul className='assnList2'>
                  <li>Balestra Mate #1</li>
                  <li>Arabian Mate #1</li>
                  <li>Arabian Mate #2</li>
                  <li>Arabian Mate #3</li>
                  <li>Corner Mate #1</li>
                  <li>Corner Mate #2</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes.
                <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 24</span>
            <ToggleSwitch checked={selectedChess24}
                          id='chess-24' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-24", `${e.target.checked}`)
                            setSelectedChess24(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/language-of-chess-the-touch-move-rule' rel='noreferrer'
                target='_blank'>Touch-Move Rule.</a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-ii/8yadFPpU/X6pXG1NK'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 2: Recognize the Patterns
                (13-18)</a>
                <ul className='assnList2'>
                  <li>Morphy's Mate #1</li>
                  <li>Morphy's Mate #2</li>
                  <li>Morphy's Mate #3</li>
                  <li>Pillsbury's Mate #1</li>
                  <li>Pillsbury's Mate #2</li>
                  <li>Damiano's Mate #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute
                  timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 25</span>
            <ToggleSwitch checked={selectedChess25} id='chess-25' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-25", `${e.target.checked}`)
              setSelectedChess25(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>

              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-devastating-discovered-attack-1'
                                          rel='noreferrer' target='_blank'> Devious Discovery: Defining Discovered
                Attacks </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-ii/8yadFPpU/OKzdXWrk'
                              rel='noreferrer' target='_blank'>Checkmate Patterns 2: Recognize the Patterns
                (19-23)</a>
                <ul className='assnList2'>
                  <li>Damiano's Mate #2</li>
                  <li>Damiano's Mate #3</li>
                  <li>Lolli's Mate #1</li>
                  <li>Lolli's Mate #2</li>
                  <li>Lolli's Mate #3</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes.
                You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 26</span>
            <ToggleSwitch checked={selectedChess26}
                          id='chess-26' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-26", `${e.target.checked}`)
                            setSelectedChess26(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>

              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-devious-discovery-2-double-attack' rel='noreferrer'
                target='_blank'> The Devious Discovery 2: Double Attack" </a></li>
              <li>Complete <a
                href='https://lichess.org/practice/checkmates/checkmate-patterns-iii/PDkQDt6u/ygAaFQNc'
                rel='noreferrer' target='_blank'> Checkmate Patterns 3: Recognize the Patterns (1-6)</a>
                <ul className='assnList2'>
                  <li>Opera Mate #1</li>
                  <li>Opera Mate #2</li>
                  <li>Opera Mate #3</li>
                  <li>Anderssen's Mate #1</li>
                  <li>Anderssen's Mate #2</li>
                  <li>Anderssen's Mate #3</li>
                </ul>
              </li>
              <li className='margin-para'> Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                    target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">
                  set a 20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 27</span>
            <ToggleSwitch checked={selectedChess27} id='chess-27' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-27", `${e.target.checked}`)
                            setSelectedChess27(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>

              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-piercing-pin-1' rel='noreferrer'
                                          target='_blank'> The Piercing Pin: What is a Pin? </a></li>
              <li>Complete <a
                href='https://lichess.org/practice/checkmates/checkmate-patterns-iii/PDkQDt6u/IB4Pmsm6'
                rel='noreferrer' target='_blank'> Checkmate Patterns 3: Recognize the Patterns
                (7-12)</a>
                <ul className='assnList2'>
                  <li>Dovetail Mate #1</li>
                  <li>Dovetail Mate #2</li>
                  <li>Dovetail Mate #3</li>
                  <li>Dovetail Mate #4</li>
                  <li>Cozio's Mate #1</li>
                  <li>Swallow's Tail Mate #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer
                  here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 28</span>
            <ToggleSwitch checked={selectedChess28}
                          id='chess-28' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-28", `${e.target.checked}`)
                            setSelectedChess28(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-piercing-pin-2' rel='noreferrer'
                                          target='_blank'> The Piercing Pin: Who Can Make Pins? </a></li>
              <li>Complete <a
                href='https://lichess.org/practice/checkmates/checkmate-patterns-iii/PDkQDt6u/Nm3PDybQ'
                rel='noreferrer' target='_blank'> Checkmate Patterns 3: Recognize the Patterns
                (13-18)</a>
                <ul className='assnList2'>
                  <li>Swallow's Tail Mate #2</li>
                  <li>Epaulette Mate #1</li>
                  <li>Epaulette Mate #2</li>
                  <li>Epaulette Mate #3</li>
                  <li>Pawn Mate #1</li>
                  <li>Pawn Mate #2</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with
                the bot</a> for 20 minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20
                minute
                timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 29</span>
            <ToggleSwitch checked={selectedChess29} id='chess-29' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-29", `${e.target.checked}`)
                            setSelectedChess29(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-scintillating-skewer-1-what-is-a-skewer' rel='noreferrer'
                target='_blank'>The Scintillating Skewer: What is a Skewer? </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-iv/96Lij7wH/qr2pOlrL'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 4: Recognize the Patterns
                (1-5)</a>
                <ul className='assnList2'>
                  <li>Suffocation Mate #1</li>
                  <li>Suffocation Mate #2</li>
                  <li>Greco's Mate #1</li>
                  <li>Greco's Mate #2</li>
                  <li>Greco's Mate #3</li>
                </ul>
              </li>
              <li className='margin-para'>
                Next, <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play chess
                with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer
                here.</a> If the games have become easy, increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 30</span>
            <ToggleSwitch
              checked={selectedChess30} id='chess-30' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-30", `${e.target.checked}`)
                setSelectedChess30(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-scintillating-skewer-2-simple-skewers' rel='noreferrer'
                target='_blank'> The Scintillating Skewer 2: Simple Skewers</a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-iv/96Lij7wH/awTDCajJ'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 4: Recognize the Patterns
                (6-10)</a>
                <ul className='assnList2'>
                  <li>Max Lange's Mate #1</li>
                  <li>Max Lange's Mate #2</li>
                  <li>Blackburne's Mate #1</li>
                  <li>Réti's Mate #1</li>
                  <li>Légal's Mate #1</li>
                </ul>
              </li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with
                the bot</a> for 20 minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute
                timer
                here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 31</span>
            <ToggleSwitch checked={selectedChess31} id='chess-31' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-31", `${e.target.checked}`)
                            setSelectedChess31(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-devastating-discovered-attack-1'
                                          rel='noreferrer' target='_blank'> Devious Discovery 1: Defining Discovered
                Attacks </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/checkmate-patterns-iv/96Lij7wH/tLcHpjXr'
                              rel='noreferrer' target='_blank'> Checkmate Patterns 4: Recognize the Patterns
                (11-15)</a>
                <ul className='assnList2'>
                  <li>Kill Box Mate #1</li>
                  <li>Triangle Mate #1</li>
                  <li>Vukovic Mate #1</li>
                  <li>Vukovic Mate #2</li>
                  <li>Vukovic Mate #3</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer
                  here.</a></li>
            </ul>

            <span className='days'>Lesson 32</span>
            <ToggleSwitch
              checked={selectedChess32} id='chess-32' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-32", `${e.target.checked}`)
                setSelectedChess32(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-curious-case-of-copycat-claire'
                                          rel='noreferrer' target='_blank'> The Curious Case of Copycat Claire </a>
              </li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/piece-checkmates-ii/Rg2cMBZ6/qooQw3mQ'
                              rel='noreferrer' target='_blank'> Piece Checkmates 2: Challenging checkmates (1-3)</a>
                <ul className='assnList2'>
                  <li>Queen vs bishop mate</li>
                  <li>Queen vs knight mate</li>
                  <li>Queen vs rook mate</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20
                  minute timer here.</a> As your playing improves, you can increase
                the difficulty level.
              </li>
            </ul>

            <span className=' days'>Lesson 33</span>
            <ToggleSwitch checked={selectedChess33} id='chess-33' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-33", `${e.target.checked}`)
                            setSelectedChess33(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-devious-discovery-2-double-attack' rel='noreferrer'
                target='_blank'> The Devious Discovery 2: Double Attack! </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/piece-checkmates-ii/Rg2cMBZ6/17sHdtD6'
                              rel='noreferrer' target='_blank'> Piece Checkmates 2 (4-5)</a>
                <ul className='assnList2'>
                  <li>Two bishop mate</li>
                  <li>Knight and bishop mate #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer
                  here.</a> As your playing improves, you can increase the
                difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 34</span>
            <ToggleSwitch
              checked={selectedChess34} id='chess-34' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-34", `${e.target.checked}`)
                setSelectedChess34(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/closing-the-box-checkmate-with-king-and-rook-against-king'
                rel='noreferrer' target='_blank'> Closing the Box: Checkmate with K+R vs. K </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/piece-checkmates-ii/Rg2cMBZ6/dkyqC39B'
                              rel='noreferrer' target='_blank'> Piece Checkmates 2 (6-7)</a>
                <ul className='assnList2'>
                  <li>Knight and bishop mate #2</li>
                  <li>Two knights vs pawn</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel=' noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20
                  minute timer here.</a> As your playing improves, you can increase
                the difficulty level.
              </li>
            </ul>

            <span className=' days'>Lesson 35</span>
            <ToggleSwitch checked={selectedChess35} id='chess-35' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-35", `${e.target.checked}`)
                            setSelectedChess35(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-language-of-chess-defense'
                                          rel='noreferrer' target='_blank'> The Language of Chess: Defense </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/knight--bishop-mate/ByhlXnmM/D23EYigW'
                              rel='noreferrer' target='_blank'>
                Knight & Bishop Mate: Interactive lesson (1-4)</a>
                <ul className='assnList2'>
                  <li>Introduction</li>
                  <li>Epic Failure</li>
                  <li>Restricting the King to the First Triangle</li>
                  <li>Exercise: Restricting the King to the First Triangle</li>
                </ul>
              </li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer
                  here.</a></li>
            </ul>

            <span className='days'>Lesson 36</span>
            <ToggleSwitch
              checked={selectedChess36} id='chess-36' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-36", `${e.target.checked}`)
                setSelectedChess36(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/how-to-keep-score-algebraic-notation' rel='noreferrer'
                target='_blank'> How To Keep Score: Algebraic Notation </a></li>
              <li>Complete <a href='https://lichess.org/practice/checkmates/knight--bishop-mate/ByhlXnmM/HcO0b869'
                              rel='noreferrer' target='_blank'> Knight & Bishop Mate: Interactive lesson (5-8)</a>
                <ul className='assnList2'>
                  <li>Restricting the King to the Second Triangle</li>
                  <li>Exercise: Restricting the King to the Second Triangle</li>
                  <li>Restricting the King to the Third Triangle</li>
                  <li>Delivering Mate</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a></li>
            </ul>

            <span className=' days'>Lesson 37</span>
            <ToggleSwitch checked={selectedChess37} id='chess-37' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-37", `${e.target.checked}`)
              setSelectedChess37(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/checkmates/knight--bishop-mate/ByhlXnmM/uwXwUSHx'
                              rel='noreferrer' target='_blank'>Knight & Bishop Mate: Interactive lesson (9-12)</a>
                <ul className='assnList2'>
                  <li>Exercise: Delivering Mate</li>
                  <li>Exercise: Checkmate the Engine</li>
                  <li>Exercise: Checkmate the Engine - DSB Edition</li>
                  <li>Exercise: Checkmate the Engine - Rotated Edition</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set
                  a 20 minute timer here.</a> As your playing improves, you can increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 38</span>
            <ToggleSwitch
              checked={selectedChess38} id='chess-38' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-38", `${e.target.checked}`)
                setSelectedChess38(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-pin/9ogFv8Ac/eHgiqLYc'
                              rel='noreferrer' target='_blank'>The Pin: Pin it to win it (1-4)</a>
                <ul className='assnList2'>
                  <li>Set up an absolute pin #1</li>
                  <li>Set up an absolute pin #2</li>
                  <li>Set up a relative pin #1</li>
                  <li>Exploit the pin #1</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-language-of-chess-opening-middlegame-endgame'
                rel='noreferrer' target='_blank'> Language of Chess: Opening, Middlegame, Endgame </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer
                  here.</a></li>
            </ul>

            <span className=' days'>Lesson 39</span>
            <ToggleSwitch checked={selectedChess39} id='chess-39' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-39", `${e.target.checked}`)
              setSelectedChess39(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-pin/9ogFv8Ac/Jm0eRwG0'
                              rel='noreferrer' target='_blank'>The Pin: Pin it to win it (5-8)</a>
                <ul className='assnList2'>
                  <li>Exploit the pin #2</li>
                  <li>Exploit the pin #3</li>
                  <li>Exploit the pin #4</li>
                  <li>Exploit the pin #5</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/language-of-chess-passed-pawn'
                                          rel='noreferrer' target='_blank'> The Language of Chess: Passed Pawn</a>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set
                  a 20 minute timer here.</a> As your playing improves, you can
                increase
                the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 40</span>
            <ToggleSwitch
              checked={selectedChess40} id='chess-40' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-40", `${e.target.checked}`)
                setSelectedChess40(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-skewer/tuoBxVE5/DXc6bhG2'
                              rel='noreferrer' target='_blank'>The Skewer: Yum - skewers! (1-4)</a>
                <ul className='assnList2'>
                  <li>Relative Skewer #1</li>
                  <li>Relative Skewer #2</li>
                  <li>Relative Skewer #3</li>
                  <li>Absolute Skewer #1</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/attraction' rel='noreferrer'
                                          target='_blank'>Attraction </a></li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 41</span>
            <ToggleSwitch checked={selectedChess41} id='chess-41' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-41", `${e.target.checked}`)
              setSelectedChess41(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-skewer/tuoBxVE5/iXiO0Pju'
                              rel='noreferrer' target='_blank'>The Skewer: Yum - skewers! (5-8)</a>
                <ul className='assnList2'>
                  <li>Absolute Skewer #2</li>
                  <li>Absolute Skewer #3</li>
                  <li>Absolute Skewer #4</li>
                  <li>Absolute Skewer #5</li>
                </ul>
              </li>
              <li>Watch a videos <a
                href='https://www.chesskid.com/videos/back-rank-checkmate-1-what-is-back-rank-checkmate'
                rel='noreferrer' target='_blank'> What is Back Rank Checkmate?</a> and <a
                href='https://www.chesskid.com/videos/back-rank-checkmate-2-the-doubled-heavies' rel='noreferrer'
                target='_blank'> Back Rank Checkmate 2: the Doubled Heavies</a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set
                a 20 minute timer here.</a> As your playing improves, you can
                increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 42</span>
            <ToggleSwitch
              checked={selectedChess42} id='chess-42' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-42", `${e.target.checked}`)
                setSelectedChess42(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-fork/Qj281y1p/uAoBhXY8'
                              rel='noreferrer' target='_blank'>The Fork: Use the fork, Luke (1-4)</a>
                <ul className='assnList2'>
                  <li>Knight Fork #1</li>
                  <li>Knight Fork #2</li>
                  <li>Pawn Fork #1</li>
                  <li>Pawn Fork #2</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/more-king-and-pawn-endgames---part-1' rel='noreferrer'
                target='_blank'> More King and Pawn Endgames! - Part 1 </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 43</span>
            <ToggleSwitch checked={selectedChess43} id='chess-43' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-43", `${e.target.checked}`)
              setSelectedChess43(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-fork/Qj281y1p/Q0b0Ex4f'
                              rel='noreferrer' target='_blank'>The Fork: Use the fork, Luke (5-8)</a>
                <ul className='assnList2'>
                  <li>Rook Fork #1</li>
                  <li>Bishop Fork #1</li>
                  <li>Queen Fork #1</li>
                  <li>Double Attack #1</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/more-king-and-pawn-endgames---part-2' rel='noreferrer'
                target='_blank'>More King and Pawn Endgames! - Part 2 </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set
                a 20 minute timer here.</a> As your playing improves, you can
                increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 44</span>
            <ToggleSwitch
              checked={selectedChess44} id='chess-44' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-44", `${e.target.checked}`)
                setSelectedChess44(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-fork/Qj281y1p/dWOHvyHB'
                              rel='noreferrer' target='_blank'>The Fork: Use the fork, Luke (9-12)</a>
                <ul className='assnList2'>
                  <li>Double Attack #2</li>
                  <li>Fork Challenge #1 N</li>
                  <li>Fork Challenge #2 N</li>
                  <li>Fork Challenge #3 N</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/more-king-and-pawn-endgames---part-3' rel='noreferrer'
                target='_blank'> More King and Pawn Endgames! - Part 3 </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 45</span>
            <ToggleSwitch checked={selectedChess45} id='chess-45' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-45", `${e.target.checked}`)
              setSelectedChess45(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/the-fork/Qj281y1p/HrpTUR0F'
                              rel='noreferrer' target='_blank'>The Fork: Use the fork, Luke (13-16)</a>
                <ul className='assnList2'>
                  <li>Fork Challenge #4 Q</li>
                  <li>Fork Challenge #5 Q</li>
                  <li>Fork Challenge #6 P</li>
                  <li>Fork Challenge #7 P</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/opening-traps-scholars-mate-1'
                                          rel='noreferrer' target='_blank'>Opening Traps: Scholar's Mate 1 </a></li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play
                chess with the bot</a> for 20 minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20
                minute timer here.</a> As your playing improves, you can
                increase
                the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 46</span>
            <ToggleSwitch
              checked={selectedChess46} id='chess-46' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-46", `${e.target.checked}`)
                setSelectedChess46(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/discovered-attacks/MnsJEWnI/vV50tWGB'
                              rel='noreferrer' target='_blank'>Discovered Attacks: Including discovered checks
                (1-4)</a>
                <ul className='assnList2'>
                  <li>Discovered Attack #1</li>
                  <li>Discovered Check #1</li>
                  <li>Discovered Attack #2</li>
                  <li>Discovered Check #2</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/think-before-you-move-that-f-pawn----part-1'
                rel='noreferrer' target='_blank'>Think Before You Move That f-Pawn </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20
                  minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 47</span>
            <ToggleSwitch checked={selectedChess47} id='chess-47' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-47", `${e.target.checked}`)
              setSelectedChess47(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/discovered-attacks/MnsJEWnI/PZUjkDOd'
                              rel='noreferrer' target='_blank'>Discovered Attacks: Including discovered checks
                (5-7)</a>
                <ul className='assnList2'>
                  <li> Discovered Attack #3</li>
                  <li> Discovered Check #3</li>
                  <li> Discovered Attack #4</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-weakest-square-1'
                                          rel='noreferrer' target='_blank'> The Weakest Square 1 </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20
                  minute timer here.</a> As your playing improves, you can increase
                the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 48</span>
            <ToggleSwitch
              checked={selectedChess48} id='chess-48' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-48", `${e.target.checked}`)
              setSelectedChess48(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/discovered-attacks/MnsJEWnI/RqV1zTUB'
                              rel='noreferrer' target='_blank'>Discovered Attacks: Including discovered checks
                (8-10)</a>
                <ul className='assnList2'>
                  <li>Discovered Check #4</li>
                  <li>Discovered Attack #5</li>
                  <li>Discovered Check #5</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/watch-out-for-rook-vs-passed-pawns'
                                          rel='noreferrer' target='_blank'> Watch Out For Rook vs Passed Pawns! </a>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20
                  minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 49</span>
            <ToggleSwitch checked={selectedChess49} id='chess-49' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-49", `${e.target.checked}`)
              setSelectedChess49(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/double-check/RUQASaZm/8Chn1bVb'
                              rel='noreferrer' target='_blank'>Double Check Introduction (1-5)</a>
                <ul className='assnList2'>
                  <li>Double Check #1</li>
                  <li>Double Check #2</li>
                  <li>Double Check #3</li>
                  <li>Double Check #4</li>
                  <li>Double Check #5</li>
                </ul>
              </li>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/the-language-of-chess-promotion'
                                          rel='noreferrer' target='_blank'> The Language of Chess: Promotion </a>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20
                minutes. <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20
                  minute timer here.</a> As your playing improves, you can increase
                the
                difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 50</span>
            <ToggleSwitch
              checked={selectedChess50} id='chess-50' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-50", `${e.target.checked}`)
              setSelectedChess50(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/simplifying' rel='noreferrer'
                                          target='_blank'>Simplifying </a></li>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/overloaded-pieces/o734CNqp/TgeQz3DF'
                              rel='noreferrer' target='_blank'>Overloaded Pieces: They have too much work (1-4)</a>
                <ul className='assnList2'>
                  <li>Overloaded #1</li>
                  <li>Overloaded #2</li>
                  <li>Overloaded #3</li>
                  <li>Overloaded #4</li>
                </ul>
              </li>
              <li>Go to <a href='https://lichess.org/training/coordinate' rel='noreferrer'
                           target='_blank'> Coordinates Training </a> and see how many coordinates you can guess
                correctly in 30 seconds! Practice at least 5 times.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20
                  minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 51</span>
            <ToggleSwitch checked={selectedChess51} id='chess-51' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-51", `${e.target.checked}`)
              setSelectedChess51(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/overloaded-pieces/o734CNqp/bqmdo5fb'
                              rel='noreferrer' target='_blank'>Overloaded Pieces: They have too much work (5-7)</a>
                <ul className='assnList2'>
                  <li>Overloaded #5</li>
                  <li>Overloaded #6</li>
                  <li>Overloaded #7</li>
                </ul>
              </li>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-chess-piece-who-swallowed-a-fly---part-12'
                rel='noreferrer' target='_blank'> The Chess Piece who Swallowed a Fly </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer here.</a> As your
                playing improves, you can increase the difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 52</span>
            <ToggleSwitch
              checked={selectedChess52} id='chess-52' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-52", `${e.target.checked}`)
              setSelectedChess52(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a
                href='https://www.chesskid.com/videos/the-chess-piece-who-ate-a-fly---part-2' rel='noreferrer'
                target='_blank'> The Chess Piece Who Swallowed a Fly, Part 2 </a></li>
              <li>Complete <a href='https://lichess.org/practice/basic-tactics/overloaded-pieces/o734CNqp/Fqep6usb'
                              rel='noreferrer' target='_blank'>Overloaded Pieces: They have too much work (8-10)</a>
                <ul className='assnList2'>
                  <li>Overloaded #8</li>
                  <li>Overloaded #9</li>
                  <li>Overloaded #10</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a 20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 53</span>
            <ToggleSwitch checked={selectedChess53} id='chess-53' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-53", `${e.target.checked}`)
              setSelectedChess53(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/zwischenzug' rel='noreferrer'
                                          target='_blank'> Zwischenzug </a></li>
              <li> Complete <a href='https://lichess.org/practice/basic-tactics/zwischenzug/ITWY4GN2/CSGoTH5f'
                               rel='noreferrer' target='_blank'>Zwischenzug: In-between moves (1-3)</a>
                <ul className='assnList2'>
                  <li>Zwischenzug</li>
                  <li>Zwischenschach</li>
                  <li>Zwischenzug Challenge #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 54</span>
            <ToggleSwitch
              checked={selectedChess54} id='chess-54' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-54", `${e.target.checked}`)
              setSelectedChess54(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/ten-fancy-checkmates'
                                          rel='noreferrer' target='_blank'>Ten Fancy Checkmates
              </a></li>
              <li> Complete <a href='https://lichess.org/practice/basic-tactics/zwischenzug/ITWY4GN2/4lhuT21C'
                               rel='noreferrer' target='_blank'>Zwischenzug: In-between moves (4-5)</a>
                <ul className='assnList2'>
                  <li>Zwischenzug Challenge #2</li>
                  <li>Zwischenzug Challenge #3</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a
                  20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 55</span>
            <ToggleSwitch checked={selectedChess55} id='chess-55' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-55", `${e.target.checked}`)
              setSelectedChess55(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch a video called <a href='https://www.chesskid.com/videos/player/tactics-zugzwang'
                                          rel='noreferrer' target='_blank'>Tactics: Zugzwang </a></li>
              <li> Complete <a href='https://lichess.org/practice/intermediate-tactics/zugzwang/9cKgYrHb/ybYJ9gNa'
                               rel='noreferrer' target='_blank'>Zugzwang: Being forced to move (1-4)</a>
                <ul className='assnList2'>
                  <li>Zugzwang #1</li>
                  <li>Zugzwang #2</li>
                  <li>Zugzwang #3</li>
                  <li>Zugzwang #4</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set a
                20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 56</span>
            <ToggleSwitch
              checked={selectedChess56} id='chess-56' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-56", `${e.target.checked}`)
              setSelectedChess56(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/knight-endings'
                                            rel='noreferrer' target='_blank'> Knight Endings</a></li>
              <li> Complete <a
                href='https://lichess.org/practice/intermediate-tactics/interference/g1fxVZu9/zSpQlGkf'
                rel='noreferrer' target='_blank'> Interference : Interpose a piece to great effect
                (1-4)</a>
                <ul className='assnList2'>
                  <li>Interference #1</li>
                  <li>Interference #2</li>
                  <li>Interference #3</li>
                  <li>Interference #4</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set
                  a 20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 57</span>
            <ToggleSwitch checked={selectedChess57} id='chess-57' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-57", `${e.target.checked}`)
              setSelectedChess57(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/pawn-storms'
                                            rel='noreferrer' target='_blank'> Pawn Storms</a></li>
              <li> Complete <a
                href='https://lichess.org/practice/intermediate-tactics/interference/g1fxVZu9/BQhk3ngL'
                rel='noreferrer' target='_blank'> Interference : Interpose a piece to great effect
                (5-7)</a>
                <ul className='assnList2'>
                  <li>Interference #5</li>
                  <li>Interference #6</li>
                  <li>Interference #7</li>
                </ul>
              </li>
              <li className='margin-para'>After you
                complete the
                lesson, <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play
                  chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                    target='_blank'> set a
                  20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 58</span>
            <ToggleSwitch
              checked={selectedChess58} id='chess-58' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-58", `${e.target.checked}`)
              setSelectedChess58(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/ignoring-the-threat'
                                            rel='noreferrer' target='_blank'>Ignoring the Threat </a></li>
              <li> Complete <a href='https://lichess.org/practice/intermediate-tactics/greek-gift/s5pLU7Of/uCkLsFs1'
                               rel='noreferrer' target='_blank'>Greek Gift: Study the greek gift sacrifice (1-3)</a>
                <ul className='assnList2'>
                  <li>Greek Gift Introduction</li>
                  <li>Greek Gift Challenge #1</li>
                  <li>Greek Gift Challenge #2</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer'
                                    target="_blank"> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 59</span>
            <ToggleSwitch checked={selectedChess59} id='chess-59' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-59", `${e.target.checked}`)
              setSelectedChess59(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/two-bishops-checkmate'
                                            rel='noreferrer' target='_blank'> Two Bishops Checkmate</a></li>
              <li> Complete <a href='https://lichess.org/practice/intermediate-tactics/greek-gift/s5pLU7Of/BIsgqPgX'
                               rel='noreferrer' target='_blank'>Greek Gift: Study the greek gift sacrifice (4-6)</a>
                <ul className='assnList2'>
                  <li>Greek Gift Challenge #3</li>
                  <li>Greek Gift Challenge #4</li>
                  <li>Defend against the Greek Gift</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set a
                20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 60</span>
            <ToggleSwitch
              checked={selectedChess60} id='chess-60' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-60", `${e.target.checked}`)
              setSelectedChess60(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/bad-bishops'
                                            rel='noreferrer' target='_blank'> Bad Bishops</a></li>
              <li> Complete <a href='https://lichess.org/practice/pawn-endgames/key-squares/xebrDvFe/o3Hq4RZ0'
                               rel='noreferrer' target='_blank'> Key Squares: Reach a key square(1-3)</a>
                <ul className='assnList2'>
                  <li>Pawn on the 2nd rank</li>
                  <li>Pawn on the 3rd rank</li>
                  <li>Pawn on the 4th rank</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer'
                                    target="_blank"> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 61</span>
            <ToggleSwitch checked={selectedChess61} id='chess-61' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-61", `${e.target.checked}`)
              setSelectedChess61(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/queen-endings'
                                            rel='noreferrer' target='_blank'> Queen Endings </a></li>
              <li> Complete <a href='https://lichess.org/practice/pawn-endgames/key-squares/xebrDvFe/G2OeEr3o'
                               rel='noreferrer' target='_blank'> Key Squares: Reach a key square(4-6)</a>
                <ul className='assnList2'>
                  <li>Pawn on the 5th rank</li>
                  <li>Pawn on the 6th rank</li>
                  <li>Knight pawn on the 6th exception #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play
                chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                  target='_blank'> set a
                20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 62</span>
            <ToggleSwitch
              checked={selectedChess62} id='chess-62' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-62", `${e.target.checked}`)
              setSelectedChess62(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/common-rook-endings'
                                            rel='noreferrer' target='_blank'> Common Rook Endings</a></li>
              <li> Complete <a href='https://lichess.org/practice/pawn-endgames/key-squares/xebrDvFe/NcEt7RJK'
                               rel="noreferrer" target='_blank'> Key Squares: Reach a key square(7-9)</a>
                <ul className='assnList2'>
                  <li>Knight pawn on the 6th exception #2</li>
                  <li>Pawn on the 7th rank</li>
                  <li>Rook pawn #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20
                minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer' target='_blank'> set a 20 minute timer
                  here.</a> If you are up for the challenge, ncrease the difficulty level.
              </li>
            </ul>

            <span className=' days'>Lesson 63</span>
            <ToggleSwitch checked={selectedChess63} id='chess-63' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-63", `${e.target.checked}`)
              setSelectedChess63(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/opening-traps'
                                            rel='noreferrer' target='_blank'> Opening Traps</a></li>
              <li> Complete <a href='https://lichess.org/practice/pawn-endgames/key-squares/xebrDvFe/AVrhWm1m'
                               rel='noreferrer' target='_blank'> Key Squares: Reach a key square(10-11)</a>
                <ul className='assnList2'>
                  <li>Rook pawn #2</li>
                  <li>Any key square by any route</li>
                </ul>
              </li>
              <li className='margin-para'>After you
                complete the
                lesson, <a href='https://www.chess.com/play/computer' rel='noreferrer' target='_blank'>play
                  chess with the bot</a> for 20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer'
                                                                    target='_blank'> set a
                  20 minute timer here.</a> If the games have become easy, increase the
                difficulty level.
              </li>
            </ul>

            <span className='days'>Lesson 64</span>
            <ToggleSwitch
              checked={selectedChess64} id='chess-64' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-64", `${e.target.checked}`)
              setSelectedChess64(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/space-advantages'
                                            rel='noreferrer' target='_blank'> Space Advantages</a></li>

              <li>Complete <a href='https://lichess.org/practice/pawn-endgames/opposition/A4ujYOer/eNlmabX1'
                              rel='noreferrer' target='_blank'> Opposition: Take the opposition (1-3)</a>
                <ul className='assnList2'>
                  <li>Direct Opposition #1</li>
                  <li>Direct Opposition #2</li>
                  <li>Direct Opposition #3</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer' target='_blank'> set a 20 minute timer
                  here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 65</span>
            <ToggleSwitch checked={selectedChess65} id='chess-65' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-65", `${e.target.checked}`)
              setSelectedChess65(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <li>Watch the video called <a href='https://www.chesskid.com/videos/player/prophylaxis' rel='noreferrer'
                                          target='_blank'> Prophylaxis</a></li>
            <ul className='assnList'>
              <li>Complete <a href='https://lichess.org/practice/pawn-endgames/opposition/A4ujYOer/ZiewgR9i'
                              rel='noreferrer' target='_blank'> Opposition: Take the opposition (4-6)</a>
                <ul className='assnList2'>
                  <li>Direct Opposition #4</li>
                  <li>Direct Opposition #5</li>
                  <li>Distant Opposition #1</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 66</span>
            <ToggleSwitch
              checked={selectedChess66}
              id='chess-66' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-66", `${e.target.checked}`)
                setSelectedChess66(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/queen-vs-pawn'
                                            rel='noreferrer' target='_blank'> Queen vs Pawn</a></li>

              <li>Complete <a href='https://lichess.org/practice/pawn-endgames/opposition/A4ujYOer/ZkZ3w5gk'
                              rel='noreferrer' target='_blank'> Opposition: Take the opposition (7-8)</a>
                <ul className='assnList2'>
                  <li> Distant Opposition #2</li>
                  <li>As a means to an end</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer' target='_blank'> set a 20
                  minute
                  timer
                  here.</a></li>
            </ul>

            <span className=' days'>Lesson 67</span>
            <ToggleSwitch checked={selectedChess67} id='chess-67' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-67", `${e.target.checked}`)
              setSelectedChess67(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a
                href='https://www.chesskid.com/videos/player/opposition-part-2---advanced-king-play'
                rel='noreferrer' target='_blank'> Opposition: Advanced King Play</a></li>
              <li> Complete <a
                href='https://lichess.org/practice/pawn-endgames/7th-rank-rook-pawn/pt20yRkT/rfcRWU6x'
                rel='noreferrer' target='_blank'>7th-Rank Rook Pawn: Versus a Queen (1-4)</a>
                <ul className='assnList2'>
                  <li>Exercise: Queen in front = Win</li>
                  <li>Not a Bishop or Rook pawn = Win</li>
                  <li>Exercise: d-pawn = Win</li>
                  <li>Exercise: b-pawn = Win</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes.
                <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> Set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 68</span>
            <ToggleSwitch
              checked={selectedChess68}
              id='chess-68' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-68", `${e.target.checked}`)
                setSelectedChess68(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/which-rook'
                                            rel='noreferrer' target='_blank'> Which Rook? </a></li>
              <li> Complete <a
                href='https://lichess.org/practice/pawn-endgames/7th-rank-rook-pawn/pt20yRkT/8TJF17dT'
                rel='noreferrer' target='_blank'>7th-Rank Rook Pawn: Versus a Queen (5-8)</a>
                <ul className='assnList2'>
                  <li>Rook pawn, no King assistance = Draw</li>
                  <li>Exercise: Rook pawn, no King assistance</li>
                  <li>Bishop pawn, no King assistance = Draw</li>
                  <li>Exercise: Bishop pawn, no King assistance</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel=' noreferrer' target='_blank'> set a 20
                  minute
                  timer
                  here.</a>
              </li>
            </ul>

            <span className=' days'>Lesson 69</span>
            <ToggleSwitch checked={selectedChess69} id='chess-69' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-69", `${e.target.checked}`)
              setSelectedChess69(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a href='https://www.chesskid.com/videos/player/destroying-pawn-shelter'
                                            rel='noreferrer' target='_blank'> Destroying Pawn Shelter</a></li>
              <li> Complete <a
                href='https://lichess.org/practice/pawn-endgames/7th-rank-rook-pawn/pt20yRkT/O2aEY5v3'
                rel='noreferrer' target='_blank'>7th-Rank Rook Pawn: Versus a Queen (9-12)</a>
                <ul className='assnList2'>
                  <li>Rook pawn, King assistance on short side = Win</li>
                  <li>Exercise: Rook pawn, King assistance on short side</li>
                  <li>Rook pawn, King assistance on long side = Win</li>
                  <li>Exercise: Rook pawn, King assistance on long side</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes.
                You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 70</span>
            <ToggleSwitch
              checked={selectedChess70}
              id='chess-70' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-70", `${e.target.checked}`)
                setSelectedChess70(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Watch the video called <a
                href='https://www.chesskid.com/videos/player/tricks-with-kings-and-pawns---part-1' rel='noreferrer'
                target='_blank'> Tricks with Kings and Pawns! -- Part 1 </a></li>
              <li> Complete <a
                href='https://lichess.org/practice/pawn-endgames/7th-rank-rook-pawn/pt20yRkT/qGAvVEjx'
                rel='noreferrer' target='_blank'>7th-Rank Rook Pawn: Versus a Queen (13-16)</a>
                <ul className='assnList2'>
                  <li>Bishop pawn, defending King on long side, King assistance on short side = Win</li>
                  <li>Bishop pawn, defending King on long side, King assistance on long side = Win</li>
                  <li>Exercise: Bishop pawn, defending King on long side, King assistance on long side</li>
                  <li>Bishop pawn, defending King on short side, King assistance on short side = Win</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer'
                                                   rel='noreferrer' target='_blank'>play chess with the bot</a> for
                20 minutes. You can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank"> set a
                  20 minute timer here.</a></li>
            </ul>

            <span className=' days'>Lesson 71</span>
            <ToggleSwitch checked={selectedChess71} id='chess-71' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-71", `${e.target.checked}`)
              setSelectedChess71(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Watch the video called <a
                href='https://www.chesskid.com/videos/player/tricks-with-kings-and-pawns----part-2' rel='noreferrer'
                target='_blank'> Tricks with Kings and Pawns! -- Part 2 </a></li>
              <li> Complete <a
                href='https://lichess.org/practice/pawn-endgames/7th-rank-rook-pawn/pt20yRkT/RZ73c1eu'
                rel='noreferrer' target='_blank'>7th-Rank Rook Pawn: Versus a Queen (17-18)</a>
                <ul className='assnList2'>
                  <li>Bishop pawn, defending King on short side, King assistance on long side = Win</li>
                  <li>Exercise: Bishop pawn, defending King on short side, King assistance on long side</li>
                </ul>
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes.
                You
                can <a href='https://timer.athomemiddleschool.com/' rel='noreferrer' target='_blank'> set a 20 minute timer here.</a>
              </li>
            </ul>

            <span className='days'>Lesson 72</span>
            <ToggleSwitch
              checked={selectedChess72}
              id='chess-72' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-72", `${e.target.checked}`)
                setSelectedChess72(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a> If you sign in, you can set
                the difficulty level to your ability (bottom left).
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 73</span>
            <ToggleSwitch checked={selectedChess73} id='chess-73' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-73", `${e.target.checked}`)
              setSelectedChess73(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a> If you sign in, you can set
                the difficulty level to your ability (bottom left).
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 74</span>
            <ToggleSwitch
              checked={selectedChess74}
              id='chess-74' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-74", `${e.target.checked}`)
                setSelectedChess74(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a> Set
                the difficulty level to your ability.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 75</span>
            <ToggleSwitch checked={selectedChess75} id='chess-75' label='Completed' onChange={(e) => {
              localStorage.setItem("chess-75", `${e.target.checked}`)
              setSelectedChess75(e.target.checked)
              console.log(e.target.checked)
            }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a> Set
                the difficulty level to your ability.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 76</span>
            <ToggleSwitch
              checked={selectedChess76}
              id='chess-76' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-76", `${e.target.checked}`)
                setSelectedChess76(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess </a>and set the difficulty level to
                your ability.
              </li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 77</span>
            <ToggleSwitch checked={selectedChess77} id='chess-77' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-77", `${e.target.checked}`)
                            setSelectedChess77(e.target.checked)
                            console.log(e.target.checked)
                          }}/>

            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 78</span>
            <ToggleSwitch checked={selectedChess78} id='chess-78' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-78", `${e.target.checked}`)
                            setSelectedChess78(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 79</span>
            <ToggleSwitch checked={selectedChess79} id='chess-79' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-79", `${e.target.checked}`)
                            setSelectedChess79(e.target.checked)
                            console.log(e.target.checked)
                          }}/>

            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 80</span>
            <ToggleSwitch
              checked={selectedChess80}
              id='chess-80' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-80", `${e.target.checked}`)
                setSelectedChess80(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 81</span>
            <ToggleSwitch checked={selectedChess81} id='chess-81' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-81", `${e.target.checked}`)
                            setSelectedChess81(e.target.checked)
                            console.log(e.target.checked)
                          }}/>

            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 82</span>
            <ToggleSwitch
              checked={selectedChess82}
              id='chess-82' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-82", `${e.target.checked}`)
                setSelectedChess82(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 83</span>
            <ToggleSwitch checked={selectedChess83} id='chess-83' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-83", `${e.target.checked}`)
                            setSelectedChess83(e.target.checked)
                            console.log(e.target.checked)
                          }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className='days'>Lesson 84</span>
            <ToggleSwitch
              checked={selectedChess84}
              id='chess-84' label='Completed'
              onChange={(e) => {
                localStorage.setItem("chess-84", `${e.target.checked}`)
                setSelectedChess84(e.target.checked)
                console.log(e.target.checked)
              }}/>
            <ul className='assnList'>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>

            <span className=' days'>Lesson 85</span>
            <ToggleSwitch checked={selectedChess85} id='chess-85' label='Completed'
                          onChange={(e) => {
                            localStorage.setItem("chess-85", `${e.target.checked}`)
                            setSelectedChess85(e.target.checked)
                            console.log(e.target.checked)
                          }}/>

            <ul className='assnList'>
              <li>This is your final lesson for this course.</li>
              <li>Play <a href="https://lichess.org/training" rel='noreferrer' target='_blank'>5 puzzles at
                Lichess. </a></li>
              <li className='margin-para'>Next, <a href='https://www.chess.com/play/computer' rel='noreferrer'
                                                   target='_blank'>play chess with the bot</a> for 20 minutes. <a
                href='https://timer.athomemiddleschool.com/' rel='noreferrer' target="_blank">Set a 20 minute timer
                here.</a></li>
            </ul>
          </form>

        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "70vh", width: "100vw" }}>You are now a master chess player.<br/>
        <br/>Continue playing on your own to keep leveling up!</h3> </>
  )
}
export default ChessComponent