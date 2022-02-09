import React from "react"
import ToggleSwitch from "../components/checkbox"
import "../styles/styles.css"

const Checkboxes = ({ data }) => {

  const [selected1, setSelected1] = React.useState(localStorage.getItem("math6-1") === "true")
  const [selected2, setSelected2] = React.useState(localStorage.getItem("math6-2") === "true")
  const [selected3, setSelected3] = React.useState(localStorage.getItem("math6-3") === "true")
  const [selected4, setSelected4] = React.useState(localStorage.getItem("math6-4") === "true")
  const [selected5, setSelected5] = React.useState(localStorage.getItem("math6-5") === "true")
  const [selected6, setSelected6] = React.useState(localStorage.getItem("math6-6") === "true")
  const [selected7, setSelected7] = React.useState(localStorage.getItem("math6-7") === "true")
  const [selected8, setSelected8] = React.useState(localStorage.getItem("math6-8") === "true")
  const [selected9, setSelected9] = React.useState(localStorage.getItem("math6-9") === "true")
  const [selected10, setSelected10] = React.useState(localStorage.getItem("math6-10") === "true")
  const [selected11, setSelected11] = React.useState(localStorage.getItem("math6-11") === "true")
  const [selected12, setSelected12] = React.useState(localStorage.getItem("math6-12") === "true")
  const [selected13, setSelected13] = React.useState(localStorage.getItem("math6-13") === "true")
  const [selected14, setSelected14] = React.useState(localStorage.getItem("math6-14") === "true")
  const [selected15, setSelected15] = React.useState(localStorage.getItem("math6-15") === "true")
  const [selected16, setSelected16] = React.useState(localStorage.getItem("math6-16") === "true")
  const [selected17, setSelected17] = React.useState(localStorage.getItem("math6-17") === "true")
  const [selected18, setSelected18] = React.useState(localStorage.getItem("math6-18") === "true")
  const [selected19, setSelected19] = React.useState(localStorage.getItem("math6-19") === "true")
  const [selected20, setSelected20] = React.useState(localStorage.getItem("math6-20") === "true")
  const [selected21, setSelected21] = React.useState(localStorage.getItem("math6-21") === "true")
  const [selected22, setSelected22] = React.useState(localStorage.getItem("math6-22") === "true")
  const [selected23, setSelected23] = React.useState(localStorage.getItem("math6-23") === "true")
  const [selected24, setSelected24] = React.useState(localStorage.getItem("math6-24") === "true")
  const [selected25, setSelected25] = React.useState(localStorage.getItem("math6-25") === "true")
  const [selected26, setSelected26] = React.useState(localStorage.getItem("math6-26") === "true")
  const [selected27, setSelected27] = React.useState(localStorage.getItem("math6-27") === "true")
  const [selected28, setSelected28] = React.useState(localStorage.getItem("math6-28") === "true")
  const [selected29, setSelected29] = React.useState(localStorage.getItem("math6-29") === "true")
  const [selected30, setSelected30] = React.useState(localStorage.getItem("math6-30") === "true")
  const [selected31, setSelected31] = React.useState(localStorage.getItem("math6-31") === "true")
  const [selected32, setSelected32] = React.useState(localStorage.getItem("math6-32") === "true")
  const [selected33, setSelected33] = React.useState(localStorage.getItem("math6-33") === "true")
  const [selected34, setSelected34] = React.useState(localStorage.getItem("math6-34") === "true")
  const [selected35, setSelected35] = React.useState(localStorage.getItem("math6-35") === "true")
  const [selected36, setSelected36] = React.useState(localStorage.getItem("math6-36") === "true")
  const [selected37, setSelected37] = React.useState(localStorage.getItem("math6-37") === "true")
  const [selected38, setSelected38] = React.useState(localStorage.getItem("math6-38") === "true")
  const [selected39, setSelected39] = React.useState(localStorage.getItem("math6-39") === "true")
  const [selected40, setSelected40] = React.useState(localStorage.getItem("math6-40") === "true")
  const [selected41, setSelected41] = React.useState(localStorage.getItem("math6-41") === "true")
  const [selected42, setSelected42] = React.useState(localStorage.getItem("math6-42") === "true")
  const [selected43, setSelected43] = React.useState(localStorage.getItem("math6-43") === "true")
  const [selected44, setSelected44] = React.useState(localStorage.getItem("math6-44") === "true")
  const [selected45, setSelected45] = React.useState(localStorage.getItem("math6-45") === "true")
  const [selected46, setSelected46] = React.useState(localStorage.getItem("math6-46") === "true")
  const [selected47, setSelected47] = React.useState(localStorage.getItem("math6-47") === "true")
  const [selected48, setSelected48] = React.useState(localStorage.getItem("math6-48") === "true")
  const [selected49, setSelected49] = React.useState(localStorage.getItem("math6-49") === "true")
  const [selected50, setSelected50] = React.useState(localStorage.getItem("math6-50") === "true")
  const [selected51, setSelected51] = React.useState(localStorage.getItem("math6-51") === "true")
  const [selected52, setSelected52] = React.useState(localStorage.getItem("math6-52") === "true")
  const [selected53, setSelected53] = React.useState(localStorage.getItem("math6-53") === "true")
  const [selected54, setSelected54] = React.useState(localStorage.getItem("math6-54") === "true")
  const [selected55, setSelected55] = React.useState(localStorage.getItem("math6-55") === "true")
  const [selected56, setSelected56] = React.useState(localStorage.getItem("math6-56") === "true")
  const [selected57, setSelected57] = React.useState(localStorage.getItem("math6-57") === "true")
  const [selected58, setSelected58] = React.useState(localStorage.getItem("math6-58") === "true")
  const [selected59, setSelected59] = React.useState(localStorage.getItem("math6-59") === "true")
  const [selected60, setSelected60] = React.useState(localStorage.getItem("math6-60") === "true")
  const [selected61, setSelected61] = React.useState(localStorage.getItem("math6-61") === "true")
  const [selected62, setSelected62] = React.useState(localStorage.getItem("math6-62") === "true")
  const [selected63, setSelected63] = React.useState(localStorage.getItem("math6-63") === "true")
  const [selected64, setSelected64] = React.useState(localStorage.getItem("math6-64") === "true")
  const [selected65, setSelected65] = React.useState(localStorage.getItem("math6-65") === "true")
  const [selected66, setSelected66] = React.useState(localStorage.getItem("math6-66") === "true")
  const [selected67, setSelected67] = React.useState(localStorage.getItem("math6-67") === "true")
  const [selected68, setSelected68] = React.useState(localStorage.getItem("math6-68") === "true")
  const [selected69, setSelected69] = React.useState(localStorage.getItem("math6-69") === "true")
  const [selected70, setSelected70] = React.useState(localStorage.getItem("math6-70") === "true")
  const [selected71, setSelected71] = React.useState(localStorage.getItem("math6-71") === "true")
  const [selected72, setSelected72] = React.useState(localStorage.getItem("math6-72") === "true")
  const [selected73, setSelected73] = React.useState(localStorage.getItem("math6-73") === "true")
  const [selected74, setSelected74] = React.useState(localStorage.getItem("math6-74") === "true")
  const [selected75, setSelected75] = React.useState(localStorage.getItem("math6-75") === "true")
  const [selected76, setSelected76] = React.useState(localStorage.getItem("math6-76") === "true")
  const [selected77, setSelected77] = React.useState(localStorage.getItem("math6-77") === "true")
  const [selected78, setSelected78] = React.useState(localStorage.getItem("math6-78") === "true")
  const [selected79, setSelected79] = React.useState(localStorage.getItem("math6-79") === "true")
  const [selected80, setSelected80] = React.useState(localStorage.getItem("math6-80") === "true")
  const [selected81, setSelected81] = React.useState(localStorage.getItem("math6-81") === "true")
  const [selected82, setSelected82] = React.useState(localStorage.getItem("math6-82") === "true")
  const [selected83, setSelected83] = React.useState(localStorage.getItem("math6-83") === "true")
  const [selected84, setSelected84] = React.useState(localStorage.getItem("math6-84") === "true")
  const [selected85, setSelected85] = React.useState(localStorage.getItem("math6-85") === "true")
  const [selected86, setSelected86] = React.useState(localStorage.getItem("math6-86") === "true")
  const [selected87, setSelected87] = React.useState(localStorage.getItem("math6-87") === "true")
  const [selected88, setSelected88] = React.useState(localStorage.getItem("math6-88") === "true")
  const [selected89, setSelected89] = React.useState(localStorage.getItem("math6-89") === "true")
  const [selected90, setSelected90] = React.useState(localStorage.getItem("math6-90") === "true")
  const [selected91, setSelected91] = React.useState(localStorage.getItem("math6-91") === "true")
  const [selected92, setSelected92] = React.useState(localStorage.getItem("math6-92") === "true")
  const [selected93, setSelected93] = React.useState(localStorage.getItem("math6-93") === "true")
  const [selected94, setSelected94] = React.useState(localStorage.getItem("math6-94") === "true")
  const [selected95, setSelected95] = React.useState(localStorage.getItem("math6-95") === "true")
  const [selected96, setSelected96] = React.useState(localStorage.getItem("math6-96") === "true")
  const [selected97, setSelected97] = React.useState(localStorage.getItem("math6-97") === "true")
  const [selected98, setSelected98] = React.useState(localStorage.getItem("math6-98") === "true")
  const [selected99, setSelected99] = React.useState(localStorage.getItem("math6-99") === "true")
  const [selected100, setSelected100] = React.useState(localStorage.getItem("math6-100") === "true")
  const [selected101, setSelected101] = React.useState(localStorage.getItem("math6-101") === "true")
  const [selected102, setSelected102] = React.useState(localStorage.getItem("math6-102") === "true")
  const [selected103, setSelected103] = React.useState(localStorage.getItem("math6-103") === "true")
  const [selected104, setSelected104] = React.useState(localStorage.getItem("math6-104") === "true")
  const [selected105, setSelected105] = React.useState(localStorage.getItem("math6-105") === "true")
  const [selected106, setSelected106] = React.useState(localStorage.getItem("math6-106") === "true")
  const [selected107, setSelected107] = React.useState(localStorage.getItem("math6-107") === "true")
  const [selected108, setSelected108] = React.useState(localStorage.getItem("math6-108") === "true")
  const [selected109, setSelected109] = React.useState(localStorage.getItem("math6-109") === "true")
  const [selected110, setSelected110] = React.useState(localStorage.getItem("math6-110") === "true")
  const [selected111, setSelected111] = React.useState(localStorage.getItem("math6-111") === "true")
  const [selected112, setSelected112] = React.useState(localStorage.getItem("math6-112") === "true")
  const [selected113, setSelected113] = React.useState(localStorage.getItem("math6-113") === "true")
  const [selected114, setSelected114] = React.useState(localStorage.getItem("math6-114") === "true")
  const [selected115, setSelected115] = React.useState(localStorage.getItem("math6-115") === "true")
  const [selected116, setSelected116] = React.useState(localStorage.getItem("math6-116") === "true")
  const [selected117, setSelected117] = React.useState(localStorage.getItem("math6-117") === "true")
  const [selected118, setSelected118] = React.useState(localStorage.getItem("math6-118") === "true")
  const [selected119, setSelected119] = React.useState(localStorage.getItem("math6-119") === "true")
  const [selected120, setSelected120] = React.useState(localStorage.getItem("math6-120") === "true")
  const [selected121, setSelected121] = React.useState(localStorage.getItem("math6-121") === "true")
  const [selected122, setSelected122] = React.useState(localStorage.getItem("math6-122") === "true")
  const [selected123, setSelected123] = React.useState(localStorage.getItem("math6-123") === "true")
  const [selected124, setSelected124] = React.useState(localStorage.getItem("math6-124") === "true")
  const [selected125, setSelected125] = React.useState(localStorage.getItem("math6-125") === "true")
  const [selected126, setSelected126] = React.useState(localStorage.getItem("math6-126") === "true")
  const [selected127, setSelected127] = React.useState(localStorage.getItem("math6-127") === "true")
  const [selected128, setSelected128] = React.useState(localStorage.getItem("math6-128") === "true")
  const [selected129, setSelected129] = React.useState(localStorage.getItem("math6-129") === "true")
  const [selected130, setSelected130] = React.useState(localStorage.getItem("math6-130") === "true")
  const [selected131, setSelected131] = React.useState(localStorage.getItem("math6-131") === "true")
  const [selected132, setSelected132] = React.useState(localStorage.getItem("math6-132") === "true")
  const [selected133, setSelected133] = React.useState(localStorage.getItem("math6-133") === "true")
  const [selected134, setSelected134] = React.useState(localStorage.getItem("math6-134") === "true")
  const [selected135, setSelected135] = React.useState(localStorage.getItem("math6-135") === "true")
  const [selected136, setSelected136] = React.useState(localStorage.getItem("math6-136") === "true")
  const [selected137, setSelected137] = React.useState(localStorage.getItem("math6-137") === "true")
  const [selected138, setSelected138] = React.useState(localStorage.getItem("math6-138") === "true")
  const [selected139, setSelected139] = React.useState(localStorage.getItem("math6-139") === "true")
  const [selected140, setSelected140] = React.useState(localStorage.getItem("math6-140") === "true")
  const [selected141, setSelected141] = React.useState(localStorage.getItem("math6-141") === "true")
  const [selected142, setSelected142] = React.useState(localStorage.getItem("math6-142") === "true")
  const [selected143, setSelected143] = React.useState(localStorage.getItem("math6-143") === "true")
  const [selected144, setSelected144] = React.useState(localStorage.getItem("math6-144") === "true")
  const [selected145, setSelected145] = React.useState(localStorage.getItem("math6-145") === "true")
  const [selected146, setSelected146] = React.useState(localStorage.getItem("math6-146") === "true")
  const [selected147, setSelected147] = React.useState(localStorage.getItem("math6-147") === "true")
  const [selected148, setSelected148] = React.useState(localStorage.getItem("math6-148") === "true")
  const [selected149, setSelected149] = React.useState(localStorage.getItem("math6-149") === "true")
  const [selected150, setSelected150] = React.useState(localStorage.getItem("math6-150") === "true")
  const [selected151, setSelected151] = React.useState(localStorage.getItem("math6-151") === "true")
  const [selected152, setSelected152] = React.useState(localStorage.getItem("math6-152") === "true")
  const [selected153, setSelected153] = React.useState(localStorage.getItem("math6-153") === "true")
  const [selected154, setSelected154] = React.useState(localStorage.getItem("math6-154") === "true")
  const [selected155, setSelected155] = React.useState(localStorage.getItem("math6-155") === "true")
  const [selected156, setSelected156] = React.useState(localStorage.getItem("math6-156") === "true")
  const [selected157, setSelected157] = React.useState(localStorage.getItem("math6-157") === "true")
  const [selected158, setSelected158] = React.useState(localStorage.getItem("math6-158") === "true")
  const [selected159, setSelected159] = React.useState(localStorage.getItem("math6-159") === "true")
  const [selected160, setSelected160] = React.useState(localStorage.getItem("math6-160") === "true")
  const [selected161, setSelected161] = React.useState(localStorage.getItem("math6-161") === "true")
  const [selected162, setSelected162] = React.useState(localStorage.getItem("math6-162") === "true")
  const [selected163, setSelected163] = React.useState(localStorage.getItem("math6-163") === "true")
  const [selected164, setSelected164] = React.useState(localStorage.getItem("math6-164") === "true")
  const [selected165, setSelected165] = React.useState(localStorage.getItem("math6-165") === "true")
  const [selected166, setSelected166] = React.useState(localStorage.getItem("math6-166") === "true")
  const [selected167, setSelected167] = React.useState(localStorage.getItem("math6-167") === "true")
  const [selected168, setSelected168] = React.useState(localStorage.getItem("math6-168") === "true")
  const [selected169, setSelected169] = React.useState(localStorage.getItem("math6-169") === "true")
  const [selected170, setSelected170] = React.useState(localStorage.getItem("math6-170") === "true")
  // const [selected171, setSelected171] = React.useState(localStorage.getItem("math6-171") === "true")
  // const [selected172, setSelected172] = React.useState(localStorage.getItem("math6-172") === "true")
  // const [selected173, setSelected173] = React.useState(localStorage.getItem("math6-173") === "true")
  // const [selected174, setSelected174] = React.useState(localStorage.getItem("math6-174") === "true")
  // const [selected175, setSelected175] = React.useState(localStorage.getItem("math6-175") === "true")
  // const [selected176, setSelected176] = React.useState(localStorage.getItem("math6-176") === "true")
  // const [selected177, setSelected177] = React.useState(localStorage.getItem("math6-177") === "true")
  // const [selected178, setSelected178] = React.useState(localStorage.getItem("math6-178") === "true")
  // const [selected179, setSelected179] = React.useState(localStorage.getItem("math6-179") === "true")
  // const [selected180, setSelected180] = React.useState(localStorage.getItem("math6-180") === "true")

  return (

    <form>
      <div>
        <ToggleSwitch checked={selected1}
                      id='math6-1'
                      label='Completed (Check this box after you finish the lesson below. It will help you keep track of where you are.)'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-1", `${e.target.checked}`)
                          setSelected1(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected2}
                      id='math6-2'
                      label='Completed (Check this box after you finish the lesson below.)'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-2", `${e.target.checked}`)
                          setSelected2(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected3}
                      id='math6-3'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-3", `${e.target.checked}`)
                          setSelected3(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected4}
                      id='math6-4'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-4", `${e.target.checked}`)
                          setSelected4(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected5}
                      id='math6-5'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-5", `${e.target.checked}`)
                          setSelected5(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected6}
                      id='math6-6'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-6", `${e.target.checked}`)
                          setSelected6(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected7}
                      id='math6-7'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-7", `${e.target.checked}`)
                          setSelected7(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected8}
                      id='math6-8'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-8", `${e.target.checked}`)
                          setSelected8(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected9}
                      id='math6-9'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-9", `${e.target.checked}`)
                          setSelected9(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected10}
                      id='math6-10'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-10", `${e.target.checked}`)
                          setSelected10(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected11}
                      id='math6-11'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-11", `${e.target.checked}`)
                          setSelected11(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected12}
                      id='math6-12'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-12", `${e.target.checked}`)
                          setSelected12(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected13}
                      id='math6-13'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-13", `${e.target.checked}`)
                          setSelected13(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected14}
                      id='math6-14'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-14", `${e.target.checked}`)
                          setSelected14(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected15}
                      id='math6-15'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-15", `${e.target.checked}`)
                          setSelected15(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected16}
                      id='math6-16'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-16", `${e.target.checked}`)
                          setSelected16(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected17}
                      id='math6-17'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-17", `${e.target.checked}`)
                          setSelected17(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected18}
                      id='math6-18'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-18", `${e.target.checked}`)
                          setSelected18(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected19}
                      id='math6-19'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-19", `${e.target.checked}`)
                          setSelected19(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected20}
                      id='math6-20'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-20", `${e.target.checked}`)
                          setSelected20(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected21}
                      id='math6-21'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-21", `${e.target.checked}`)
                          setSelected21(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected22}
                      id='math6-22'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-22", `${e.target.checked}`)
                          setSelected22(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected23}
                      id='math6-23'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-23", `${e.target.checked}`)
                          setSelected23(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected24}
                      id='math6-24'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-24", `${e.target.checked}`)
                          setSelected24(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected25}
                      id='math6-25'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-25", `${e.target.checked}`)
                          setSelected25(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected26}
                      id='math6-26'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-26", `${e.target.checked}`)
                          setSelected26(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected27}
                      id='math6-27'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-27", `${e.target.checked}`)
                          setSelected27(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected28}
                      id='math6-28'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-28", `${e.target.checked}`)
                          setSelected28(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected29}
                      id='math6-29'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-29", `${e.target.checked}`)
                          setSelected29(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected30}
                      id='math6-30'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-30", `${e.target.checked}`)
                          setSelected30(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected31}
                      id='math6-31'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-31", `${e.target.checked}`)
                          setSelected31(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected32}
                      id='math6-32'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-32", `${e.target.checked}`)
                          setSelected32(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>


        <ToggleSwitch checked={selected33}
                      id='math6-33'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-33", `${e.target.checked}`)
                          setSelected33(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected34}
                      id='math6-34'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-34", `${e.target.checked}`)
                          setSelected34(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>


        <ToggleSwitch checked={selected35}
                      id='math6-35'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-35", `${e.target.checked}`)
                          setSelected35(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected36}
                      id='math6-36'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-36", `${e.target.checked}`)
                          setSelected36(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected37}
                      id='math6-37'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-37", `${e.target.checked}`)
                          setSelected37(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected38}
                      id='math6-38'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-38", `${e.target.checked}`)
                          setSelected38(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected39}
                      id='math6-39'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-39", `${e.target.checked}`)
                          setSelected39(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected40}
                      id='math6-40'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-40", `${e.target.checked}`)
                          setSelected40(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected41}
                      id='math6-41'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-41", `${e.target.checked}`)
                          setSelected41(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected42}
                      id='math6-42'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-42", `${e.target.checked}`)
                          setSelected42(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected43}
                      id='math6-43'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-43", `${e.target.checked}`)
                          setSelected43(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected44}
                      id='math6-44'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-44", `${e.target.checked}`)
                          setSelected44(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected45}
                      id='math6-45'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-45", `${e.target.checked}`)
                          setSelected45(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected46}
                      id='math6-46'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-46", `${e.target.checked}`)
                          setSelected46(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected47}
                      id='math6-47'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-47", `${e.target.checked}`)
                          setSelected47(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected48}
                      id='math6-48'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-48", `${e.target.checked}`)
                          setSelected48(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected49}
                      id='math6-49'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-49", `${e.target.checked}`)
                          setSelected49(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected50}
                      id='math6-50'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-50", `${e.target.checked}`)
                          setSelected50(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected51}
                      id='math6-51'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-51", `${e.target.checked}`)
                          setSelected51(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected52}
                      id='math6-52'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-52", `${e.target.checked}`)
                          setSelected52(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected53}
                      id='math6-53'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-53", `${e.target.checked}`)
                          setSelected53(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected54}
                      id='math6-54'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-54", `${e.target.checked}`)
                          setSelected54(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected55}
                      id='math6-55'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-55", `${e.target.checked}`)
                          setSelected55(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected56}
                      id='math6-56'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-56", `${e.target.checked}`)
                          setSelected56(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected57}
                      id='math6-57'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-57", `${e.target.checked}`)
                          setSelected57(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected58}
                      id='math6-58'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-58", `${e.target.checked}`)
                          setSelected58(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected59}
                      id='math6-59'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-59", `${e.target.checked}`)
                          setSelected59(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected60}
                      id='math6-60'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-60", `${e.target.checked}`)
                          setSelected60(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected61}
                      id='math6-61'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-61", `${e.target.checked}`)
                          setSelected61(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected62}
                      id='math6-62'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-62", `${e.target.checked}`)
                          setSelected62(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected63}
                      id='math6-63'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-63", `${e.target.checked}`)
                          setSelected63(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected64}
                      id='math6-64'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-64", `${e.target.checked}`)
                          setSelected64(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected65}
                      id='math6-65'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-65", `${e.target.checked}`)
                          setSelected65(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected66}
                      id='math6-66'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-66", `${e.target.checked}`)
                          setSelected66(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected67}
                      id='math6-67'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-67", `${e.target.checked}`)
                          setSelected67(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected68}
                      id='math6-68'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-68", `${e.target.checked}`)
                          setSelected68(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected69}
                      id='math6-69'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-69", `${e.target.checked}`)
                          setSelected69(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected70}
                      id='math6-70'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-70", `${e.target.checked}`)
                          setSelected70(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected71}
                      id='math6-71'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-71", `${e.target.checked}`)
                          setSelected71(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected72}
                      id='math6-72'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-72", `${e.target.checked}`)
                          setSelected72(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected73}
                      id='math6-73'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-73", `${e.target.checked}`)
                          setSelected73(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected74}
                      id='math6-74'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-74", `${e.target.checked}`)
                          setSelected74(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected75}
                      id='math6-75'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-75", `${e.target.checked}`)
                          setSelected75(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected76}
                      id='math6-76'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-76", `${e.target.checked}`)
                          setSelected76(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected77}
                      id='math6-77'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-77", `${e.target.checked}`)
                          setSelected77(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected78}
                      id='math6-78'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-78", `${e.target.checked}`)
                          setSelected78(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected79}
                      id='math6-79'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-79", `${e.target.checked}`)
                          setSelected79(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected80}
                      id='math6-80'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-80", `${e.target.checked}`)
                          setSelected80(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected81}
                      id='math6-81'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-81", `${e.target.checked}`)
                          setSelected81(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected82}
                      id='math6-82'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-82", `${e.target.checked}`)
                          setSelected82(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected83}
                      id='math6-83'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-83", `${e.target.checked}`)
                          setSelected83(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected84}
                      id='math6-84'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-84", `${e.target.checked}`)
                          setSelected84(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected85}
                      id='math6-85'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-85", `${e.target.checked}`)
                          setSelected85(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected86}
                      id='math6-86'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-86", `${e.target.checked}`)
                          setSelected86(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected87}
                      id='math6-87'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-87", `${e.target.checked}`)
                          setSelected87(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected88}
                      id='math6-88'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-88", `${e.target.checked}`)
                          setSelected88(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected89}
                      id='math6-89'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-89", `${e.target.checked}`)
                          setSelected89(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected90}
                      id='math6-90'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-90", `${e.target.checked}`)
                          setSelected90(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected91}
                      id='math6-91'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-91", `${e.target.checked}`)
                          setSelected91(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected92}
                      id='math6-92'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-92", `${e.target.checked}`)
                          setSelected92(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected93}
                      id='math6-93'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-93", `${e.target.checked}`)
                          setSelected93(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected94}
                      id='math6-94'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-94", `${e.target.checked}`)
                          setSelected94(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected95}
                      id='math6-95'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-95", `${e.target.checked}`)
                          setSelected95(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected96}
                      id='math6-96'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-96", `${e.target.checked}`)
                          setSelected96(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected97}
                      id='math6-97'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-97", `${e.target.checked}`)
                          setSelected97(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected98}
                      id='math6-98'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-98", `${e.target.checked}`)
                          setSelected98(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected99}
                      id='math6-99'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-99", `${e.target.checked}`)
                          setSelected99(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected100}
                      id='math6-100'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-100", `${e.target.checked}`)
                          setSelected100(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected101}
                      id='math6-101'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-101", `${e.target.checked}`)
                          setSelected101(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected102}
                      id='math6-102'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-102", `${e.target.checked}`)
                          setSelected102(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected103}
                      id='math6-103'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-103", `${e.target.checked}`)
                          setSelected103(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected104}
                      id='math6-104'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-104", `${e.target.checked}`)
                          setSelected104(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected105}
                      id='math6-105'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-105", `${e.target.checked}`)
                          setSelected105(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected106}
                      id='math6-106'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-106", `${e.target.checked}`)
                          setSelected106(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected107}
                      id='math6-107'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-107", `${e.target.checked}`)
                          setSelected107(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected108}
                      id='math6-108'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-108", `${e.target.checked}`)
                          setSelected108(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected109}
                      id='math6-109'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-109", `${e.target.checked}`)
                          setSelected109(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected110}
                      id='math6-110'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-110", `${e.target.checked}`)
                          setSelected110(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected111}
                      id='math6-111'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-111", `${e.target.checked}`)
                          setSelected111(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected112}
                      id='math6-112'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-112", `${e.target.checked}`)
                          setSelected112(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected113}
                      id='math6-113'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-113", `${e.target.checked}`)
                          setSelected113(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected114}
                      id='math6-114'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-114", `${e.target.checked}`)
                          setSelected114(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected115}
                      id='math6-115'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-115", `${e.target.checked}`)
                          setSelected115(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected116}
                      id='math6-116'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-116", `${e.target.checked}`)
                          setSelected116(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected117}
                      id='math6-117'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-117", `${e.target.checked}`)
                          setSelected117(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected118}
                      id='math6-118'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-118", `${e.target.checked}`)
                          setSelected118(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected119}
                      id='math6-119'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-119", `${e.target.checked}`)
                          setSelected119(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected120}
                      id='math6-120'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-120", `${e.target.checked}`)
                          setSelected120(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected121}
                      id='math6-121'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-121", `${e.target.checked}`)
                          setSelected121(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected122}
                      id='math6-122'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-122", `${e.target.checked}`)
                          setSelected122(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected123}
                      id='math6-123'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-123", `${e.target.checked}`)
                          setSelected123(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected124}
                      id='math6-124'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-124", `${e.target.checked}`)
                          setSelected124(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected125}
                      id='math6-125'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-125", `${e.target.checked}`)
                          setSelected125(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected126}
                      id='math6-126'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-126", `${e.target.checked}`)
                          setSelected126(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected127}
                      id='math6-127'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-127", `${e.target.checked}`)
                          setSelected127(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected128}
                      id='math6-128'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-128", `${e.target.checked}`)
                          setSelected128(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <span className="days">Lesson 129</span>
        <ToggleSwitch checked={selected129}
                      id='math6-129'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-129", `${e.target.checked}`)
                          setSelected129(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected130}
                      id='math6-130'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-130", `${e.target.checked}`)
                          setSelected130(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected131}
                      id='math6-131'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-131", `${e.target.checked}`)
                          setSelected131(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected132}
                      id='math6-132'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-132", `${e.target.checked}`)
                          setSelected132(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected133}
                      id='math6-133'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-133", `${e.target.checked}`)
                          setSelected133(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected134}
                      id='math6-134'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-134", `${e.target.checked}`)
                          setSelected134(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected135}
                      id='math6-135'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-135", `${e.target.checked}`)
                          setSelected135(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected136}
                      id='math6-136'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-136", `${e.target.checked}`)
                          setSelected136(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected137}
                      id='math6-137'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-137", `${e.target.checked}`)
                          setSelected137(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected138}
                      id='math6-138'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-138", `${e.target.checked}`)
                          setSelected138(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected139}
                      id='math6-139'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-139", `${e.target.checked}`)
                          setSelected139(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected140}
                      id='math6-140'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-140", `${e.target.checked}`)
                          setSelected140(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected141}
                      id='math6-141'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-141", `${e.target.checked}`)
                          setSelected141(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected142}
                      id='math6-142'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-142", `${e.target.checked}`)
                          setSelected142(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected143}
                      id='math6-143'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-143", `${e.target.checked}`)
                          setSelected143(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected144}
                      id='math6-144'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-144", `${e.target.checked}`)
                          setSelected144(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected145}
                      id='math6-145'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-145", `${e.target.checked}`)
                          setSelected145(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected146}
                      id='math6-146'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-146", `${e.target.checked}`)
                          setSelected146(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <span className="days">Lesson 147</span>
        <ToggleSwitch checked={selected147}
                      id='math6-147'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-147", `${e.target.checked}`)
                          setSelected147(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected148}
                      id='math6-148'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-148", `${e.target.checked}`)
                          setSelected148(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected149}
                      id='math6-149'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-149", `${e.target.checked}`)
                          setSelected149(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected150}
                      id='math6-150'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-150", `${e.target.checked}`)
                          setSelected150(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected151}
                      id='math6-151'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-151", `${e.target.checked}`)
                          setSelected151(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected152}
                      id='math6-152'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-152", `${e.target.checked}`)
                          setSelected152(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected153}
                      id='math6-153'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-153", `${e.target.checked}`)
                          setSelected153(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected154}
                      id='math6-154'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-154", `${e.target.checked}`)
                          setSelected154(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected155}
                      id='math6-155'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-155", `${e.target.checked}`)
                          setSelected155(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected156}
                      id='math6-156'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-156", `${e.target.checked}`)
                          setSelected156(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected157} id='math6-157'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-157", `${e.target.checked}`)
                          setSelected157(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected158} id='math6-158'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-158", `${e.target.checked}`)
                          setSelected158(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected159} id='math6-159'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-159", `${e.target.checked}`)
                          setSelected159(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected160}
                      id='math6-160'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-160", `${e.target.checked}`)
                          setSelected160(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected161}
                      id='math6-161'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-161", `${e.target.checked}`)
                          setSelected161(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected162}
                      id='math6-162'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-162", `${e.target.checked}`)
                          setSelected162(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected163}
                      id='math6-163'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-163", `${e.target.checked}`)
                          setSelected163(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected164}
                      id='math6-164'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-164", `${e.target.checked}`)
                          setSelected164(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected165}
                      id='math6-165'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-165", `${e.target.checked}`)
                          setSelected165(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected166}
                      id='math6-166'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-166", `${e.target.checked}`)
                          setSelected166(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        <ToggleSwitch checked={selected167}
                      id='math6-167'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-167", `${e.target.checked}`)
                          setSelected167(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected168}
                      id='math6-168'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-168", `${e.target.checked}`)
                          setSelected168(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected169}
                      id='math6-169'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-169", `${e.target.checked}`)
                          setSelected169(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>
        <ToggleSwitch checked={selected170}
                      id='math6-170'
                      label='Completed'
                      onChange={
                        (e) => {
                          localStorage.setItem("math6-170", `${e.target.checked}`)
                          setSelected170(e.target.checked)
                          console.log(e.target.checked)
                        }
                      }/>

        {/*<span className="days">Lesson 171</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 172</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 173</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 174</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 175</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 176</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 177</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 178</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 179</span> <p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
        {/*<span className="days">Lesson 180</span><p className="margin-para">Complete the <a href="">TITLE</a></p>*/}
      </div>
    </form>

  )
}

export default Checkboxes