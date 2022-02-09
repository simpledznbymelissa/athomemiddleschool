import React from "react"
import "../styles/styles.css"
import Video from "./video"
import Confetti from "./confetti"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

const SpanishComponent = ({ data }) => {
  const [spanishEssay1, setspanishEssay1] = useLocalStorageState("spanishEssay1", "")
  const [spanishEssay2, setspanishEssay2] = useLocalStorageState("spanishEssay2", "")
  const [spanishEssay3, setspanishEssay3] = useLocalStorageState("spanishEssay3", "")
  const [spanishEssay4, setspanishEssay4] = useLocalStorageState("spanishEssay4", "")
  const [spanishEssay5, setspanishEssay5] = useLocalStorageState("spanishEssay5", "")
  const [spanishEssay6, setspanishEssay6] = useLocalStorageState("spanishEssay6", "")
  const [spanishEssay7, setspanishEssay7] = useLocalStorageState("spanishEssay7", "")
  const [spanishEssay8, setspanishEssay8] = useLocalStorageState("spanishEssay8", "")
  const [spanishEssay9, setspanishEssay9] = useLocalStorageState("spanishEssay9", "")
  const [spanishEssay10, setspanishEssay10] = useLocalStorageState("spanishEssay10", "")
  const [spanishEssay11, setspanishEssay11] = useLocalStorageState("spanishEssay11", "")
  const [spanishEssay12, setspanishEssay12] = useLocalStorageState("spanishEssay12", "")
  const [spanishEssay13, setspanishEssay13] = useLocalStorageState("spanishEssay13", "")
  const [spanishEssay14, setspanishEssay14] = useLocalStorageState("spanishEssay14", "")
  const [spanishEssay15, setspanishEssay15] = useLocalStorageState("spanishEssay15", "")
  const [spanishEssay16, setspanishEssay16] = useLocalStorageState("spanishEssay16", "")
  const [spanishEssay17, setspanishEssay17] = useLocalStorageState("spanishEssay17", "")
  const [spanishEssay18, setspanishEssay18] = useLocalStorageState("spanishEssay18", "")
  const [spanishEssay19, setspanishEssay19] = useLocalStorageState("spanishEssay19", "")
  const [spanishEssay20, setspanishEssay20] = useLocalStorageState("spanishEssay20", "")
  const [spanishEssay21, setspanishEssay21] = useLocalStorageState("spanishEssay21", "")
  const [spanishEssay22, setspanishEssay22] = useLocalStorageState("spanishEssay22", "")
  const [spanishEssay23, setspanishEssay23] = useLocalStorageState("spanishEssay23", "")
  const [spanishEssay24, setspanishEssay24] = useLocalStorageState("spanishEssay24", "")
  const [spanishEssay25, setspanishEssay25] = useLocalStorageState("spanishEssay25", "")
  const [spanishEssay26, setspanishEssay26] = useLocalStorageState("spanishEssay26", "")
  const [spanishEssay27, setspanishEssay27] = useLocalStorageState("spanishEssay27", "")
  const [spanishEssay28, setspanishEssay28] = useLocalStorageState("spanishEssay28", "")
  const [spanishEssay29, setspanishEssay29] = useLocalStorageState("spanishEssay29", "")
  const [spanishEssay30, setspanishEssay30] = useLocalStorageState("spanishEssay30", "")
  const [spanishEssay31, setspanishEssay31] = useLocalStorageState("spanishEssay31", "")
  const [spanishEssay32, setspanishEssay32] = useLocalStorageState("spanishEssay32", "")
  const [spanishEssay33, setspanishEssay33] = useLocalStorageState("spanishEssay33", "")
  const [spanishEssay34, setspanishEssay34] = useLocalStorageState("spanishEssay34", "")
  const [spanishEssay35, setspanishEssay35] = useLocalStorageState("spanishEssay35", "")
  const [spanishEssay36, setspanishEssay36] = useLocalStorageState("spanishEssay36", "")
  const [spanishEssay37, setspanishEssay37] = useLocalStorageState("spanishEssay37", "")
  const [spanishEssay38, setspanishEssay38] = useLocalStorageState("spanishEssay38", "")
  const [spanishEssay39, setspanishEssay39] = useLocalStorageState("spanishEssay39", "")
  const [spanishEssay40, setspanishEssay40] = useLocalStorageState("spanishEssay40", "")
  const [spanishEssay41, setspanishEssay41] = useLocalStorageState("spanishEssay41", "")
  const [spanishEssay42, setspanishEssay42] = useLocalStorageState("spanishEssay42", "")
  const [spanishEssay43, setspanishEssay43] = useLocalStorageState("spanishEssay43", "")
  const [spanishEssay44, setspanishEssay44] = useLocalStorageState("spanishEssay44", "")
  const [spanishEssay45, setspanishEssay45] = useLocalStorageState("spanishEssay45", "")
  const [spanishEssay46, setspanishEssay46] = useLocalStorageState("spanishEssay46", "")
  const [spanishEssay47, setspanishEssay47] = useLocalStorageState("spanishEssay47", "")
  const [spanishEssay48, setspanishEssay48] = useLocalStorageState("spanishEssay48", "")
  const [spanishEssay49, setspanishEssay49] = useLocalStorageState("spanishEssay49", "")
  const [spanishEssay50, setspanishEssay50] = useLocalStorageState("spanishEssay50", "")
  const [spanishEssay51, setspanishEssay51] = useLocalStorageState("spanishEssay52", "")
  const [spanishEssay52, setspanishEssay52] = useLocalStorageState("spanishEssay53", "")
  const [spanishEssay53, setspanishEssay53] = useLocalStorageState("spanishEssay54", "")
  const [spanishEssay54, setspanishEssay54] = useLocalStorageState("spanishEssay54", "")
  const [spanishEssay55, setspanishEssay55] = useLocalStorageState("spanishEssay5", "")
  const [spanishEssay56, setspanishEssay56] = useLocalStorageState("spanishEssay56", "")
  const [spanishEssay57, setspanishEssay57] = useLocalStorageState("spanishEssay57", "")
  const [spanishEssay58, setspanishEssay58] = useLocalStorageState("spanishEssay58", "")
  const [spanishEssay59, setspanishEssay59] = useLocalStorageState("spanishEssay59", "")
  const [spanishEssay60, setspanishEssay60] = useLocalStorageState("spanishEssay60", "")
  const [spanishEssay61, setspanishEssay61] = useLocalStorageState("spanishEssay61", "")
  const [spanishEssay62, setspanishEssay62] = useLocalStorageState("spanishEssay62", "")
  const [spanishEssay63, setspanishEssay63] = useLocalStorageState("spanishEssay63", "")
  const [spanishEssay64, setspanishEssay64] = useLocalStorageState("spanishEssay64", "")
  const [spanishEssay65, setspanishEssay65] = useLocalStorageState("spanishEssay65", "")
  const [spanishEssay66, setspanishEssay66] = useLocalStorageState("spanishEssay66", "")
  const [spanishEssay67, setspanishEssay67] = useLocalStorageState("spanishEssay67", "")
  const [spanishEssay68, setspanishEssay68] = useLocalStorageState("spanishEssay68", "")
  const [spanishEssay69, setspanishEssay69] = useLocalStorageState("spanishEssay69", "")
  const [spanishEssay70, setspanishEssay70] = useLocalStorageState("spanishEssay70", "")
  const [spanishEssay71, setspanishEssay71] = useLocalStorageState("spanishEssay71", "")
  const [spanishEssay72, setspanishEssay72] = useLocalStorageState("spanishEssay72", "")
  const [spanishEssay73, setspanishEssay73] = useLocalStorageState("spanishEssay73", "")
  const [spanishEssay74, setspanishEssay74] = useLocalStorageState("spanishEssay74", "")
  const [spanishEssay75, setspanishEssay75] = useLocalStorageState("spanishEssay75", "")
  const [spanishEssay76, setspanishEssay76] = useLocalStorageState("spanishEssay76", "")
  const [spanishEssay77, setspanishEssay77] = useLocalStorageState("spanishEssay77", "")
  const [spanishEssay78, setspanishEssay78] = useLocalStorageState("spanishEssay78", "")
  const [spanishEssay79, setspanishEssay79] = useLocalStorageState("spanishEssay79", "")
  const [spanishEssay80, setspanishEssay80] = useLocalStorageState("spanishEssay80", "")
  const [spanishEssay81, setspanishEssay81] = useLocalStorageState("spanishEssay81", "")
  const [spanishEssay82, setspanishEssay82] = useLocalStorageState("spanishEssay82", "")
  const [spanishEssay83, setspanishEssay83] = useLocalStorageState("spanishEssay83", "")
  const [spanishEssay84, setspanishEssay84] = useLocalStorageState("spanishEssay84", "")
  const [spanishEssay85, setspanishEssay85] = useLocalStorageState("spanishEssay85", "")
  const [spanishEssay86, setspanishEssay86] = useLocalStorageState("spanishEssay86", "")
  const [spanishEssay87, setspanishEssay87] = useLocalStorageState("spanishEssay87", "")
  const [spanishEssay88, setspanishEssay88] = useLocalStorageState("spanishEssay88", "")
  const [spanishEssay89, setspanishEssay89] = useLocalStorageState("spanishEssay89", "")
  const [spanishEssay90, setspanishEssay90] = useLocalStorageState("spanishEssay90", "")
  const [spanishEssay91, setspanishEssay91] = useLocalStorageState("spanishEssay91", "")
  const [spanishEssay92, setspanishEssay92] = useLocalStorageState("spanishEssay93", "")
  const [spanishEssay93, setspanishEssay93] = useLocalStorageState("spanishEssay94", "")
  const [spanishEssay94, setspanishEssay94] = useLocalStorageState("spanishEssay95", "")
  const [spanishEssay95, setspanishEssay95] = useLocalStorageState("spanishEssay96", "")
  const [spanishEssay96, setspanishEssay96] = useLocalStorageState("spanishEssay97", "")
  const [spanishEssay97, setspanishEssay97] = useLocalStorageState("spanishEssay98", "")
  const [spanishEssay98, setspanishEssay98] = useLocalStorageState("spanishEssay98", "")
  const [spanishEssay99, setspanishEssay99] = useLocalStorageState("spanishEssay99", "")
  const [spanishEssay100, setspanishEssay100] = useLocalStorageState("spanishEssay100", "")
  const [spanishEssay101, setspanishEssay101] = useLocalStorageState("spanishEssay101", "")
  const [spanishEssay102, setspanishEssay102] = useLocalStorageState("spanishEssay102", "")
  const [spanishEssay103, setspanishEssay103] = useLocalStorageState("spanishEssay103", "")
  const [spanishEssay104, setspanishEssay104] = useLocalStorageState("spanishEssay104", "")
  const [spanishEssay105, setspanishEssay105] = useLocalStorageState("spanishEssay105", "")
  const [spanishEssay106, setspanishEssay106] = useLocalStorageState("spanishEssay106", "")
  const [spanishEssay107, setspanishEssay107] = useLocalStorageState("spanishEssay107", "")
  const [spanishEssay108, setspanishEssay108] = useLocalStorageState("spanishEssay108", "")
  const [spanishEssay109, setspanishEssay109] = useLocalStorageState("spanishEssay109", "")
  const [spanishEssay110, setspanishEssay110] = useLocalStorageState("spanishEssay110", "")
  const [spanishEssay111, setspanishEssay111] = useLocalStorageState("spanishEssay111", "")
  const [spanishEssay112, setspanishEssay112] = useLocalStorageState("spanishEssay112", "")
  const [spanishEssay113, setspanishEssay113] = useLocalStorageState("spanishEssay113", "")
  const [spanishEssay114, setspanishEssay114] = useLocalStorageState("spanishEssay114", "")
  const [spanishEssay115, setspanishEssay115] = useLocalStorageState("spanishEssay115", "")
  const [spanishEssay116, setspanishEssay116] = useLocalStorageState("spanishEssay116", "")
  const [spanishEssay117, setspanishEssay117] = useLocalStorageState("spanishEssay117", "")
  const [spanishEssay118, setspanishEssay118] = useLocalStorageState("spanishEssay118", "")
  const [spanishEssay119, setspanishEssay119] = useLocalStorageState("spanishEssay119", "")
  const [spanishEssay120, setspanishEssay120] = useLocalStorageState("spanishEssay120", "")
  const [spanishEssay121, setspanishEssay121] = useLocalStorageState("spanishEssay121", "")
  const [spanishEssay122, setspanishEssay122] = useLocalStorageState("spanishEssay122", "")
  const [spanishEssay123, setspanishEssay123] = useLocalStorageState("spanishEssay123", "")
  const [spanishEssay124, setspanishEssay124] = useLocalStorageState("spanishEssay124", "")
  const [spanishEssay125, setspanishEssay125] = useLocalStorageState("spanishEssay125", "")
  const [spanishEssay126, setspanishEssay126] = useLocalStorageState("spanishEssay126", "")
  const [spanishEssay127, setspanishEssay127] = useLocalStorageState("spanishEssay127", "")
  const [spanishEssay128, setspanishEssay128] = useLocalStorageState("spanishEssay128", "")
  const [spanishEssay129, setspanishEssay129] = useLocalStorageState("spanishEssay129", "")
  const [spanishEssay130, setspanishEssay130] = useLocalStorageState("spanishEssay130", "")
  const [spanishEssay131, setspanishEssay131] = useLocalStorageState("spanishEssay131", "")
  const [spanishEssay132, setspanishEssay132] = useLocalStorageState("spanishEssay132", "")
  const [spanishEssay133, setspanishEssay133] = useLocalStorageState("spanishEssay133", "")
  const [spanishEssay134, setspanishEssay134] = useLocalStorageState("spanishEssay134", "")
  const [spanishEssay135, setspanishEssay135] = useLocalStorageState("spanishEssay135", "")
  const [spanishEssay136, setspanishEssay136] = useLocalStorageState("spanishEssay136", "")
  const [spanishEssay137, setspanishEssay137] = useLocalStorageState("spanishEssay137", "")
  const [spanishEssay138, setspanishEssay138] = useLocalStorageState("spanishEssay138", "")
  const [spanishEssay139, setspanishEssay139] = useLocalStorageState("spanishEssay139", "")
  const [spanishEssay140, setspanishEssay140] = useLocalStorageState("spanishEssay140", "")
  const [spanishEssay141, setspanishEssay141] = useLocalStorageState("spanishEssay141", "")
  const [spanishEssay142, setspanishEssay142] = useLocalStorageState("spanishEssay142", "")
  const [spanishEssay143, setspanishEssay143] = useLocalStorageState("spanishEssay143", "")
  const [spanishEssay144, setspanishEssay144] = useLocalStorageState("spanishEssay144", "")
  const [spanishEssay145, setspanishEssay145] = useLocalStorageState("spanishEssay145", "")
  const [spanishEssay146, setspanishEssay146] = useLocalStorageState("spanishEssay146", "")
  const [spanishEssay147, setspanishEssay147] = useLocalStorageState("spanishEssay147", "")
  const [spanishEssay148, setspanishEssay148] = useLocalStorageState("spanishEssay148", "")
  const [spanishEssay149, setspanishEssay149] = useLocalStorageState("spanishEssay149", "")
  const [spanishEssay150, setspanishEssay150] = useLocalStorageState("spanishEssay150", "")
  const [spanishEssay151, setspanishEssay151] = useLocalStorageState("spanishEssay151", "")
  const [spanishEssay152, setspanishEssay152] = useLocalStorageState("spanishEssay152", "")
  const [spanishEssay153, setspanishEssay153] = useLocalStorageState("spanishEssay153", "")
  const [spanishEssay154, setspanishEssay154] = useLocalStorageState("spanishEssay154", "")
  const [spanishEssay155, setspanishEssay155] = useLocalStorageState("spanishEssay155", "")
  const [spanishEssay156, setspanishEssay156] = useLocalStorageState("spanishEssay156", "")
  const [spanishEssay157, setspanishEssay157] = useLocalStorageState("spanishEssay157", "")
  const [spanishEssay158, setspanishEssay158] = useLocalStorageState("spanishEssay158", "")
  const [spanishEssay159, setspanishEssay159] = useLocalStorageState("spanishEssay159", "")
  const [spanishEssay160, setspanishEssay160] = useLocalStorageState("spanishEssay160", "")
  const [spanishEssay161, setspanishEssay161] = useLocalStorageState("spanishEssay161", "")
  const [spanishEssay162, setspanishEssay162] = useLocalStorageState("spanishEssay162", "")
  const [spanishEssay163, setspanishEssay163] = useLocalStorageState("spanishEssay163", "")
  const [spanishEssay164, setspanishEssay164] = useLocalStorageState("spanishEssay164", "")
  const [spanishEssay165, setspanishEssay165] = useLocalStorageState("spanishEssay165", "")
  const [spanishEssay166, setspanishEssay166] = useLocalStorageState("spanishEssay166", "")
  const [spanishEssay167, setspanishEssay167] = useLocalStorageState("spanishEssay167", "")
  const [spanishEssay168, setspanishEssay168] = useLocalStorageState("spanishEssay168", "")
  const [spanishEssay169, setspanishEssay169] = useLocalStorageState("spanishEssay169", "")
  const [spanishEssay170, setspanishEssay170] = useLocalStorageState("spanishEssay170", "")
  const [spanishEssay171, setspanishEssay171] = useLocalStorageState("spanishEssay171", "")
  const [spanishEssay172, setspanishEssay172] = useLocalStorageState("spanishEssay172", "")
  const [spanishEssay173, setspanishEssay173] = useLocalStorageState("spanishEssay173", "")
  const [spanishEssay174, setspanishEssay174] = useLocalStorageState("spanishEssay174", "")
  const [spanishEssay175, setspanishEssay175] = useLocalStorageState("spanishEssay175", "")
  const [spanishEssay176, setspanishEssay176] = useLocalStorageState("spanishEssay176", "")
  const [spanishEssay177, setspanishEssay177] = useLocalStorageState("spanishEssay177", "")
  const [spanishEssay178, setspanishEssay178] = useLocalStorageState("spanishEssay178", "")
  const [spanishEssay179, setspanishEssay179] = useLocalStorageState("spanishEssay179", "")
  const [spanishEssay180, setspanishEssay180] = useLocalStorageState("spanishEssay180", "")


  const onChangespanishListener1 = (event) => {
    setspanishEssay1(event.target.value)
  }
  const onChangespanishListener2 = (event) => {
    setspanishEssay2(event.target.value)
  }
  const onChangespanishListener3 = (event) => {
    setspanishEssay3(event.target.value)
  }
  const onChangespanishListener4 = (event) => {
    setspanishEssay4(event.target.value)
  }
  const onChangespanishListener5 = (event) => {
    setspanishEssay5(event.target.value)
  }
  const onChangespanishListener6 = (event) => {
    setspanishEssay6(event.target.value)
  }
  const onChangespanishListener7 = (event) => {
    setspanishEssay7(event.target.value)
  }
  const onChangespanishListener8 = (event) => {
    setspanishEssay8(event.target.value)
  }
  const onChangespanishListener9 = (event) => {
    setspanishEssay9(event.target.value)
  }
  const onChangespanishListener10 = (event) => {
    setspanishEssay10(event.target.value)
  }
  const onChangespanishListener11 = (event) => {
    setspanishEssay11(event.target.value)
  }
  const onChangespanishListener12 = (event) => {
    setspanishEssay12(event.target.value)
  }
  const onChangespanishListener13 = (event) => {
    setspanishEssay13(event.target.value)
  }
  const onChangespanishListener14 = (event) => {
    setspanishEssay14(event.target.value)
  }
  const onChangespanishListener15 = (event) => {
    setspanishEssay15(event.target.value)
  }
  const onChangespanishListener16 = (event) => {
    setspanishEssay16(event.target.value)
  }
  const onChangespanishListener17 = (event) => {
    setspanishEssay17(event.target.value)
  }
  const onChangespanishListener18 = (event) => {
    setspanishEssay18(event.target.value)
  }
  const onChangespanishListener19 = (event) => {
    setspanishEssay19(event.target.value)
  }
  const onChangespanishListener20 = (event) => {
    setspanishEssay20(event.target.value)
  }
  const onChangespanishListener21 = (event) => {
    setspanishEssay21(event.target.value)
  }
  const onChangespanishListener22 = (event) => {
    setspanishEssay22(event.target.value)
  }
  const onChangespanishListener23 = (event) => {
    setspanishEssay23(event.target.value)
  }
  const onChangespanishListener24 = (event) => {
    setspanishEssay24(event.target.value)
  }
  const onChangespanishListener25 = (event) => {
    setspanishEssay25(event.target.value)
  }
  const onChangespanishListener26 = (event) => {
    setspanishEssay26(event.target.value)
  }
  const onChangespanishListener27 = (event) => {
    setspanishEssay27(event.target.value)
  }
  const onChangespanishListener28 = (event) => {
    setspanishEssay28(event.target.value)
  }
  const onChangespanishListener29 = (event) => {
    setspanishEssay29(event.target.value)
  }
  const onChangespanishListener30 = (event) => {
    setspanishEssay30(event.target.value)
  }
  const onChangespanishListener31 = (event) => {
    setspanishEssay31(event.target.value)
  }
  const onChangespanishListener32 = (event) => {
    setspanishEssay32(event.target.value)
  }
  const onChangespanishListener33 = (event) => {
    setspanishEssay33(event.target.value)
  }
  const onChangespanishListener34 = (event) => {
    setspanishEssay34(event.target.value)
  }
  const onChangespanishListener35 = (event) => {
    setspanishEssay35(event.target.value)
  }
  const onChangespanishListener36 = (event) => {
    setspanishEssay36(event.target.value)
  }
  const onChangespanishListener37 = (event) => {
    setspanishEssay37(event.target.value)
  }
  const onChangespanishListener38 = (event) => {
    setspanishEssay38(event.target.value)
  }
  const onChangespanishListener39 = (event) => {
    setspanishEssay39(event.target.value)
  }
  const onChangespanishListener40 = (event) => {
    setspanishEssay40(event.target.value)
  }
  const onChangespanishListener41 = (event) => {
    setspanishEssay41(event.target.value)
  }
  const onChangespanishListener42 = (event) => {
    setspanishEssay42(event.target.value)
  }
  const onChangespanishListener43 = (event) => {
    setspanishEssay43(event.target.value)
  }
  const onChangespanishListener44 = (event) => {
    setspanishEssay44(event.target.value)
  }
  const onChangespanishListener45 = (event) => {
    setspanishEssay45(event.target.value)
  }
  const onChangespanishListener46 = (event) => {
    setspanishEssay46(event.target.value)
  }
  const onChangespanishListener47 = (event) => {
    setspanishEssay47(event.target.value)
  }
  const onChangespanishListener48 = (event) => {
    setspanishEssay48(event.target.value)
  }
  const onChangespanishListener49 = (event) => {
    setspanishEssay49(event.target.value)
  }
  const onChangespanishListener50 = (event) => {
    setspanishEssay50(event.target.value)
  }
  const onChangespanishListener51 = (event) => {
    setspanishEssay51(event.target.value)
  }
  const onChangespanishListener52 = (event) => {
    setspanishEssay52(event.target.value)
  }
  const onChangespanishListener53 = (event) => {
    setspanishEssay53(event.target.value)
  }
  const onChangespanishListener54 = (event) => {
    setspanishEssay54(event.target.value)
  }
  const onChangespanishListener55 = (event) => {
    setspanishEssay55(event.target.value)
  }
  const onChangespanishListener56 = (event) => {
    setspanishEssay56(event.target.value)
  }
  const onChangespanishListener57 = (event) => {
    setspanishEssay57(event.target.value)
  }
  const onChangespanishListener58 = (event) => {
    setspanishEssay58(event.target.value)
  }
  const onChangespanishListener59 = (event) => {
    setspanishEssay59(event.target.value)
  }
  const onChangespanishListener60 = (event) => {
    setspanishEssay60(event.target.value)
  }
  const onChangespanishListener61 = (event) => {
    setspanishEssay61(event.target.value)
  }
  const onChangespanishListener62 = (event) => {
    setspanishEssay62(event.target.value)
  }
  const onChangespanishListener63 = (event) => {
    setspanishEssay63(event.target.value)
  }
  const onChangespanishListener64 = (event) => {
    setspanishEssay64(event.target.value)
  }
  const onChangespanishListener65 = (event) => {
    setspanishEssay65(event.target.value)
  }
  const onChangespanishListener66 = (event) => {
    setspanishEssay66(event.target.value)
  }
  const onChangespanishListener67 = (event) => {
    setspanishEssay67(event.target.value)
  }
  const onChangespanishListener68 = (event) => {
    setspanishEssay68(event.target.value)
  }
  const onChangespanishListener69 = (event) => {
    setspanishEssay69(event.target.value)
  }
  const onChangespanishListener70 = (event) => {
    setspanishEssay70(event.target.value)
  }
  const onChangespanishListener71 = (event) => {
    setspanishEssay71(event.target.value)
  }
  const onChangespanishListener72 = (event) => {
    setspanishEssay72(event.target.value)
  }
  const onChangespanishListener73 = (event) => {
    setspanishEssay73(event.target.value)
  }
  const onChangespanishListener74 = (event) => {
    setspanishEssay74(event.target.value)
  }
  const onChangespanishListener75 = (event) => {
    setspanishEssay75(event.target.value)
  }
  const onChangespanishListener76 = (event) => {
    setspanishEssay76(event.target.value)
  }
  const onChangespanishListener77 = (event) => {
    setspanishEssay77(event.target.value)
  }
  const onChangespanishListener78 = (event) => {
    setspanishEssay78(event.target.value)
  }
  const onChangespanishListener79 = (event) => {
    setspanishEssay79(event.target.value)
  }
  const onChangespanishListener80 = (event) => {
    setspanishEssay80(event.target.value)
  }
  const onChangespanishListener81 = (event) => {
    setspanishEssay81(event.target.value)
  }
  const onChangespanishListener82 = (event) => {
    setspanishEssay82(event.target.value)
  }
  const onChangespanishListener83 = (event) => {
    setspanishEssay83(event.target.value)
  }
  const onChangespanishListener84 = (event) => {
    setspanishEssay84(event.target.value)
  }
  const onChangespanishListener85 = (event) => {
    setspanishEssay85(event.target.value)
  }
  const onChangespanishListener86 = (event) => {
    setspanishEssay86(event.target.value)
  }
  const onChangespanishListener87 = (event) => {
    setspanishEssay87(event.target.value)
  }
  const onChangespanishListener88 = (event) => {
    setspanishEssay88(event.target.value)
  }
  const onChangespanishListener89 = (event) => {
    setspanishEssay89(event.target.value)
  }
  const onChangespanishListener90 = (event) => {
    setspanishEssay90(event.target.value)
  }
  const onChangespanishListener91 = (event) => {
    setspanishEssay91(event.target.value)
  }
  const onChangespanishListener92 = (event) => {
    setspanishEssay92(event.target.value)
  }
  const onChangespanishListener93 = (event) => {
    setspanishEssay93(event.target.value)
  }
  const onChangespanishListener94 = (event) => {
    setspanishEssay94(event.target.value)
  }
  const onChangespanishListener95 = (event) => {
    setspanishEssay95(event.target.value)
  }
  const onChangespanishListener96 = (event) => {
    setspanishEssay96(event.target.value)
  }
  const onChangespanishListener97 = (event) => {
    setspanishEssay97(event.target.value)
  }
  const onChangespanishListener98 = (event) => {
    setspanishEssay98(event.target.value)
  }
  const onChangespanishListener99 = (event) => {
    setspanishEssay99(event.target.value)
  }
  const onChangespanishListener100 = (event) => {
    setspanishEssay100(event.target.value)
  }
  const onChangespanishListener101 = (event) => {
    setspanishEssay101(event.target.value)
  }
  const onChangespanishListener102 = (event) => {
    setspanishEssay102(event.target.value)
  }
  const onChangespanishListener103 = (event) => {
    setspanishEssay103(event.target.value)
  }
  const onChangespanishListener104 = (event) => {
    setspanishEssay104(event.target.value)
  }
  const onChangespanishListener105 = (event) => {
    setspanishEssay105(event.target.value)
  }
  const onChangespanishListener106 = (event) => {
    setspanishEssay106(event.target.value)
  }
  const onChangespanishListener107 = (event) => {
    setspanishEssay107(event.target.value)
  }
  const onChangespanishListener108 = (event) => {
    setspanishEssay108(event.target.value)
  }
  const onChangespanishListener109 = (event) => {
    setspanishEssay109(event.target.value)
  }
  const onChangespanishListener110 = (event) => {
    setspanishEssay110(event.target.value)
  }
  const onChangespanishListener111 = (event) => {
    setspanishEssay111(event.target.value)
  }
  const onChangespanishListener112 = (event) => {
    setspanishEssay112(event.target.value)
  }
  const onChangespanishListener113 = (event) => {
    setspanishEssay113(event.target.value)
  }
  const onChangespanishListener114 = (event) => {
    setspanishEssay114(event.target.value)
  }
  const onChangespanishListener115 = (event) => {
    setspanishEssay115(event.target.value)
  }
  const onChangespanishListener116 = (event) => {
    setspanishEssay116(event.target.value)
  }
  const onChangespanishListener117 = (event) => {
    setspanishEssay117(event.target.value)
  }
  const onChangespanishListener118 = (event) => {
    setspanishEssay118(event.target.value)
  }
  const onChangespanishListener119 = (event) => {
    setspanishEssay119(event.target.value)
  }
  const onChangespanishListener120 = (event) => {
    setspanishEssay120(event.target.value)
  }
  const onChangespanishListener121 = (event) => {
    setspanishEssay121(event.target.value)
  }
  const onChangespanishListener122 = (event) => {
    setspanishEssay122(event.target.value)
  }
  const onChangespanishListener123 = (event) => {
    setspanishEssay123(event.target.value)
  }
  const onChangespanishListener124 = (event) => {
    setspanishEssay124(event.target.value)
  }
  const onChangespanishListener125 = (event) => {
    setspanishEssay125(event.target.value)
  }
  const onChangespanishListener126 = (event) => {
    setspanishEssay126(event.target.value)
  }
  const onChangespanishListener127 = (event) => {
    setspanishEssay127(event.target.value)
  }
  const onChangespanishListener128 = (event) => {
    setspanishEssay128(event.target.value)
  }
  const onChangespanishListener129 = (event) => {
    setspanishEssay129(event.target.value)
  }
  const onChangespanishListener130 = (event) => {
    setspanishEssay130(event.target.value)
  }
  const onChangespanishListener131 = (event) => {
    setspanishEssay131(event.target.value)
  }
  const onChangespanishListener132 = (event) => {
    setspanishEssay132(event.target.value)
  }
  const onChangespanishListener133 = (event) => {
    setspanishEssay133(event.target.value)
  }
  const onChangespanishListener134 = (event) => {
    setspanishEssay134(event.target.value)
  }
  const onChangespanishListener135 = (event) => {
    setspanishEssay135(event.target.value)
  }
  const onChangespanishListener136 = (event) => {
    setspanishEssay136(event.target.value)
  }
  const onChangespanishListener137 = (event) => {
    setspanishEssay137(event.target.value)
  }
  const onChangespanishListener138 = (event) => {
    setspanishEssay138(event.target.value)
  }
  const onChangespanishListener139 = (event) => {
    setspanishEssay139(event.target.value)
  }
  const onChangespanishListener140 = (event) => {
    setspanishEssay140(event.target.value)
  }
  const onChangespanishListener141 = (event) => {
    setspanishEssay141(event.target.value)
  }
  const onChangespanishListener142 = (event) => {
    setspanishEssay142(event.target.value)
  }
  const onChangespanishListener143 = (event) => {
    setspanishEssay143(event.target.value)
  }
  const onChangespanishListener144 = (event) => {
    setspanishEssay144(event.target.value)
  }
  const onChangespanishListener145 = (event) => {
    setspanishEssay145(event.target.value)
  }
  const onChangespanishListener146 = (event) => {
    setspanishEssay146(event.target.value)
  }
  const onChangespanishListener147 = (event) => {
    setspanishEssay147(event.target.value)
  }
  const onChangespanishListener148 = (event) => {
    setspanishEssay148(event.target.value)
  }
  const onChangespanishListener149 = (event) => {
    setspanishEssay149(event.target.value)
  }
  const onChangespanishListener150 = (event) => {
    setspanishEssay150(event.target.value)
  }
  const onChangespanishListener151 = (event) => {
    setspanishEssay151(event.target.value)
  }
  const onChangespanishListener152 = (event) => {
    setspanishEssay152(event.target.value)
  }
  const onChangespanishListener153 = (event) => {
    setspanishEssay153(event.target.value)
  }
  const onChangespanishListener154 = (event) => {
    setspanishEssay154(event.target.value)
  }
  const onChangespanishListener155 = (event) => {
    setspanishEssay155(event.target.value)
  }
  const onChangespanishListener156 = (event) => {
    setspanishEssay156(event.target.value)
  }
  const onChangespanishListener157 = (event) => {
    setspanishEssay157(event.target.value)
  }
  const onChangespanishListener158 = (event) => {
    setspanishEssay158(event.target.value)
  }
  const onChangespanishListener159 = (event) => {
    setspanishEssay159(event.target.value)
  }
  const onChangespanishListener160 = (event) => {
    setspanishEssay160(event.target.value)
  }
  const onChangespanishListener161 = (event) => {
    setspanishEssay161(event.target.value)
  }
  const onChangespanishListener162 = (event) => {
    setspanishEssay162(event.target.value)
  }
  const onChangespanishListener163 = (event) => {
    setspanishEssay163(event.target.value)
  }
  const onChangespanishListener164 = (event) => {
    setspanishEssay164(event.target.value)
  }
  const onChangespanishListener165 = (event) => {
    setspanishEssay165(event.target.value)
  }
  const onChangespanishListener166 = (event) => {
    setspanishEssay166(event.target.value)
  }
  const onChangespanishListener167 = (event) => {
    setspanishEssay167(event.target.value)
  }
  const onChangespanishListener168 = (event) => {
    setspanishEssay168(event.target.value)
  }
  const onChangespanishListener169 = (event) => {
    setspanishEssay169(event.target.value)
  }
  const onChangespanishListener170 = (event) => {
    setspanishEssay170(event.target.value)
  }
  const onChangespanishListener171 = (event) => {
    setspanishEssay171(event.target.value)
  }
  const onChangespanishListener172 = (event) => {
    setspanishEssay172(event.target.value)
  }
  const onChangespanishListener173 = (event) => {
    setspanishEssay173(event.target.value)
  }
  const onChangespanishListener174 = (event) => {
    setspanishEssay174(event.target.value)
  }
  const onChangespanishListener175 = (event) => {
    setspanishEssay175(event.target.value)
  }
  const onChangespanishListener176 = (event) => {
    setspanishEssay176(event.target.value)
  }
  const onChangespanishListener177 = (event) => {
    setspanishEssay177(event.target.value)
  }
  const onChangespanishListener178 = (event) => {
    setspanishEssay178(event.target.value)
  }
  const onChangespanishListener179 = (event) => {
    setspanishEssay179(event.target.value)
  }
  const onChangespanishListener180 = (event) => {
    setspanishEssay180(event.target.value)
  }

  return (

    <form>

      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#f7e077",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#f7e077",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Spanish</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <h2 className="hero">Daily Lessons</h2>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <div className="section-content">
          <span className="days">LESSON 1 </span>

          <p className="topBottom fadeIn">Welcome to Beginner Spanish. For your first lesson, watch the videos
            and complete the assignments below.</p>
          <p className="topBottom">You may use a <a href="https://www.spanishdict.com/" rel="noreferrer"
                                                    target="_blank">translator (click here) </a> to
            help you with your assignments in this course.</p>

          <p className="topBottom">If the speakers in the videos talk too quickly, you can slow down the playback speed.
            Also, be sure subtitles are always showing when you watch a video so you can follow along. Both of these
            features can be adjusted in the bottom menu of each video under Settings.</p>

          <Video videoUrl="https://www.youtube.com/embed/kzWZi03KM2U?list=PL_bC0YvGkS4Qv3DswsEkYTJqAU93HU9cz"/>
          <Video videoUrl="https://www.youtube.com/embed/POdNffXOJ-o"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How common is the Spanish language in the world? Is it the 1st, 2nd, 3rd or 4th most commonly spoken
              language?
            </li>
            <li>List the reasons it's valuable to learn Spanish.</li>
            <li>In which countries is the Spanish dialect easiest to understand?</li>
            <li>How are vowels in the English language different than in the Spanish language?</li>
            <li>Write 5 Spanish words you learned and translate them to English.</li>
            <li>Go to <a href="https://www.duolingo.com/"
                         rel="noreferrer"
                         target="_blank">Duolingo </a>and complete your first lesson there.
            </li>
          </ol>
          <p className="margin-para"> You will use Duolingo for this course. If you don’t already have an account
            with <a href="https://www.duolingo.com/"
                    rel="noreferrer"
                    target="_blank"> Duolingo, set one up
              here. </a> You can also log in with a Google or Facebook account. Duolingo has free lessons and does not
            require a paid subscription. After you log in, <strong>complete the first lesson on Duolingo</strong>. If
            you already know some Spanish, you can take the placement test before you get started.</p>
          <p>Duolingo is the only account you need to create for this course. You do NOT need to sign up for any
            subscriptions or create any other accounts in order to watch the videos
            below and complete this Spanish course. </p>
          <textarea className="textArea" placeholder="Write your responses here. Your work will automatically be saved to your Local Storage. 
                    -----
                    If you clear your cookies, your answers will be erased! Be sure to back up your work by saving it in another 
                    location. 
                    -----
                    You can 'Select All' (select your answers inside this textbox by touching/clicking on (ctrl a)) and 
                    copy/paste it into Google Docs, a Word Doc or into an email  and send it to your parent or teacher. 
                    -----
                    Some devices allow you to 'Select All' and then 'Share' via email or another app.
                    -----
                    You may prefer to copy/paste the questions into this textbox for easier viewing and grading by your parent or teacher.
                    -----
                    Be sure to label each assignment with the Subject and Lesson Number."

                    onChange={onChangespanishListener1} value={spanishEssay1}/>

          <span className="days">LESSON 2 </span>
          <p className="topBottom">Watch the videos and then answer the questions below.</p>
          {/*Learn Spanish in 10 Minutes - ALL the Basics You Need*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/t7-nb1wlnyA"/>*/}
          {/*Spanish 101 SuperHolly*/}
          <Video videoUrl="https://www.youtube.com/embed/R2kMyM6Xd8Y?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p>Instead of doing a lesson today on Duolingo, you will watch a video on how to get the most out of using the
            site to learn Spanish. Watch the video below and take notes on the tips the narrator gives.</p>
          <Video videoUrl="https://www.youtube.com/embed/Vhz2HGy6Eqc"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How would you introduce yourself in Spanish?</li>
            <li>How do you say "I am going for tortillas" in Spanish?</li>
            <li>How do you say "You are a good student" in Spanish?</li>
            <li>What does "Ando llegando" mean?</li>
            <li>Write 5 phrases you learned from the video Spanish 101.</li>
            <li>What are 5 of the best tips mentioned in the video that you will start using on Duolingo?</li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener2} value={spanishEssay2}/>

          <span className="days">LESSON 3 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/oG8jLhqAiuk?list=PL_bC0YvGkS4Qv3DswsEkYTJqAU93HU9cz"/>
          <Video videoUrl="https://www.youtube.com/embed/DAp_v7EH9AA?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Is it easier to form sentences in Spanish or in English? Why is this?</li>
            <li>Give an example of how you write a question in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English. Write these phrases in Spanish and then translate to English. For
              example: <i>¿Cómo te llamas? What's your name?</i></li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener3} value={spanishEssay3}/>

          <span className="days">LESSON 4 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/3_xeBvVcXS4?list=PL_bC0YvGkS4Qv3DswsEkYTJqAU93HU9cz"/>
          <Video videoUrl="https://www.youtube.com/embed/bK4EBWp3suk?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <Video videoUrl="https://www.youtube.com/embed/ZAl_NoT2G_M"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are some things that are different when you write in Spanish?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English. Write these phrases in Spanish and then translate to English. For
              example: <i>¿Cómo te llamas? What's your name?</i></li>
            <li>Write 5 words for family member in Spanish. Examples: <i>papa, mama, hermano.</i></li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener4} value={spanishEssay4}/>

          <span className="days">LESSON 5 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/NGUncIE9hgU?list=PL_bC0YvGkS4Qv3DswsEkYTJqAU93HU9cz"/>
          <Video videoUrl="https://www.youtube.com/embed/4ehG-7v21NQ?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English. Write these phrases in Spanish and then translate to English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener5} value={spanishEssay5}/>

          <span className="days">LESSON 6 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/H0jOKhPrSAU?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/tP3HjcaqAlM?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <Video videoUrl="https://www.youtube.com/embed/Ni-YnsF72AY?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write the numbers 1-20 in spanish.</li>
            <li>List the seasons in Spanish.</li>
            <li>Write the seven days of the week in Spanish.</li>
            <li>List the months of the year in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English. Write these phrases in Spanish and then translate to English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener6} value={spanishEssay6}/>

          <span className="days">LESSON 7 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/SoPiuMh6lnQ?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/a2xGsvoW7Wk?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you greet someone in Spanish?</li>
            <li>Wite the numbers 21, 32, 43, 54, 65, 76, 87, 98, 100 in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English. Write these phrases in Spanish and then translate to English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener7} value={spanishEssay7}/>

          <span className="days">LESSON 8 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/EQ2637RI7ns?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/NNt_O6slObg?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you ask someone in Spanish if they speak English?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener8} value={spanishEssay8}/>

          <span className="days">LESSON 9 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/ppbVQZ89h20?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/6cQPHAPROnY?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you apologize in Spanish?</li>
            <li>How do you ask someone how they are feeling?</li>
            <li>How would you ask for a doctor if you were in a Spanish speaking country?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener9} value={spanishEssay9}/>

          <span className="days">LESSON 10 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/lZMMqMvY1d0?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are the names of the characters in the video?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener10} value={spanishEssay10}/>

          <span className="days">LESSON 11 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/EgJDqM3sDL8?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you ask what time it is in Spanish?</li>
            <li>Briefly describe what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener11} value={spanishEssay11}/>

          <span className="days">LESSON 12 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/F_cKEcoIHAU?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>In Spanish, state in a complete sentence where the characters go on a date in this episode of "Learn
              Spanish for Beginners."
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener12} value={spanishEssay12}/>

          <span className="days">LESSON 13 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/xPsn35IudKc?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener13} value={spanishEssay13}/>

          <span className="days">LESSON 14 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/SSjmWPgpphI?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <Video videoUrl="https://www.youtube.com/embed/6KwxK1MCMbo?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/hsLYD1Jyf3A?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 10 words you learned. Write them in both Spanish and English. For example: <i>por favor =
              please</i></li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangespanishListener14} value={spanishEssay14}/>

          <span className="days">LESSON 15 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/kJL-e2iJxHA?list=PL_bC0YvGkS4Qv3DswsEkYTJqAU93HU9cz"/>
          <p>No sign ups or subscriptions are required to watch this video or complete this course.</p>
          <Video videoUrl="https://www.youtube.com/embed/t7-nb1wlnyA?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 10 words you learned. Write them in Spanish and in English. <br/>For example: <i>1. por favor =
              please.</i></li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener15} value={spanishEssay15}/>

          <span className="days">LESSON 16 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/_ugU3pU89pY?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <Video videoUrl="https://www.youtube.com/embed/CzOmAG729Lw?list=PL_bC0YvGkS4Svpvjvpu7U-3stjplGJMR-"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write the body parts you learned in Spanish. Write them in Spanish and translate to English.</li>
            <li>Write 6 vegetables in Spanish and then translate to English.</li>


            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener16} value={spanishEssay16}/>

          <span className="days">LESSON 17 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/jHqxgPXGr-M?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What goes wrong at the concert? What did they find in the theatre? Answer in a complete sentences in
              Spanish.
            </li>
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener17} value={spanishEssay17}/>


          <span className="days">LESSON 18 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/aVNf1B0nNf4?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>What are the different flavors of ice cream shown in the video? Write them in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener18} value={spanishEssay18}/>

          <span className="days">LESSON 19 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/gMHIX9-N0kU?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener19} value={spanishEssay19}/>


          <span className=" days">LESSON 20 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/OOudFD8UNA8?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener20} value={spanishEssay20}/>

          <span className=" days">LESSON 21 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/L-4D9-s3cl0?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener21} value={spanishEssay21}/>

          <span className="days">LESSON 22 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/CsfCWudlufY?list=PLjHgrj6tC7AaUmiqReLL3VxDKKwX4QhZ2"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Learn Spanish for Beginners."</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener22} value={spanishEssay22}/>

          <span className=" days">LESSON 23 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/gOZFrwTTgok"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <p>Translate the following words from the video into Spanish: </p>
            <li>pen</li>
            <li>desk</li>
            <li>box</li>
            <li>table</li>
            <li>book</li>
            <li>chair</li>
            <li>cat</li>
            <li>dog</li>
            <li>garbage</li>
            <li>clock</li>
            <li>flower</li>
            <li>tree</li>
            <li>pie</li>
            <li>door</li>
            <li>towel</li>
            <li>car</li>
            <li>sink</li>
            <li>water</li>
            <li>restroom</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" placeholder="Copy/paste the words into this textbox and then write your translations here. Example:
          1. pen = stylo
          2. desk = la mesa" onChange={onChangespanishListener23} value={spanishEssay23}/>

          <span className="days">LESSON 24 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <p className="topBottom"> Words - 100 Most Common Words Translated - Covering 50% of Spoken Conversation! </p>
          <Video videoUrl="https://www.youtube.com/embed/Xo5Y7AHMy20"/>
          <ol className="vocab">
            <li>Write 25 words from the video as you can in Spanish and translate them to English. You may need to watch
              the video more
              than once.
            </li>
            <li>What is the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                   target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" placeholder="Example
          1. this = este/esta" onChange={onChangespanishListener24} value={spanishEssay24}/>

          <span className=" days">LESSON 25 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a>
            You can slow down the playback speed if they speak too quickly.</p>
          <Video videoUrl="https://www.youtube.com/embed/6lGEo-KXIuA?list=PLhjShqHC6R2Z7sPtji2GQtOgs7u7PxQHd"/>
          <Video videoUrl="https://www.youtube.com/embed/sQND3WdnIjg?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 20 of your favorite words from the video. Write them in Spanish, then English.
              For example: <i>el barco = the boat</i></li>
            <li>Write 5 new phrases you learned from Super Easy Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener25} value={spanishEssay25}/>

          <span className="days">LESSON 26 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/F-hu-kxZ-xc?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <Video videoUrl="https://www.youtube.com/embed/prFaX69m-wo?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What did Baruch see in the library? Answer in Spanish in complete sentences.</li>
            <li>List all the different ways to say "hot" in Spanish.</li>
            <li>Write 5 new phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener26} value={spanishEssay26}/>

          <span className=" days">LESSON 27 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/82nmyWfWBYg?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <Video videoUrl="https://www.youtube.com/embed/zqbwd3natNA?list=PL0Oc2Ifknsbw4iyT4mITzlhzLxbvY7xMa"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>What was in his bag? List the items in Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener27} value={spanishEssay27}/>

          <span className="days">LESSON 28 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/3J8_JM7Qiss?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are some tips to sound more like a native Spanish speaker?</li>
            <li>What are the most common mistakes made when speaking Spanish?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener28} value={spanishEssay28}/>

          <span className=" days">LESSON 29 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/FBWsWLiWsE0?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/yPN8nFq_CnM?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>How would you ask for directions in Spanish to get to your favorite restaurant?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener29} value={spanishEssay29}/>

          <span className="days">LESSON 30 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/h-uoWd8OaMI?list=PLhjShqHC6R2Z7sPtji2GQtOgs7u7PxQHd"/> <Video
          videoUrl="https://www.youtube.com/embed/_bYWTAbkYBs?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 20 of your favorite words from the video. Write them in Spanish, then English.
              For example: <i>el barco = the boat</i></li>
            <li>Write 3 sentences correctly using the word "por".</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className=" textArea" onChange={onChangespanishListener30} value={spanishEssay30}/>

          <span className=" days">LESSON 31 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/kHFWV-wvwCM?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/AxXvPAmP6Qc?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe when you would use Usted versus Tú.</li>
            <li>Write 3 sentences in Spanish using the word "para."</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener31} value={spanishEssay31}/>

          <span className="days">LESSON 32 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/1JLsFpqtFV8?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/bN6udn4saqk?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are the days of the week in Spanish?</li>
            <li>In Spanish, what are some things you see in the streets of Mexico City?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener32} value={spanishEssay32}/>

          <span className="days">LESSON 33 </span>
          <p className="topBottom">Watch the videos, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/4FjSyvyFmvM?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/iELHkBHiKMc?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are the 12 months of the year in Spanish?</li>
            <li>Describe in Spanish how Mexicans celebrate Christmas?</li>
            <li>Write 5 sentences you learned that include "I'm going to...".</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener33} value={spanishEssay33}/>

          <span className="days">LESSON 34 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/y0c_0rQy0Lg?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are some of the most common New Year's resolutions?</li>
            <li>What was your New Year's resolution? Write this in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener34} value={spanishEssay34}/>

          <span className="days">LESSON 35 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/BFmmvdANZl0?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/j9vRrhheCUM?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What is the differences between "ser" and "estar"?</li>
            <li>Write a sentence that uses the verb ser.</li>
            <li>Write a sentence that uses the verb estar.</li>
            <li>Write a sentence in Spanish that uses "ser" and one that uses "estar".</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener35} value={spanishEssay35}/>

          <span className="days">LESSON 36 </span>
          <p className="topBottom">Watch the videos, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/oR1XOb7zPsM?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/Giu9wFPA0Wg?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How would you write, "It is 7:00?"</li>
            <li>How would you write, "It is 8:30?"</li>
            <li>How would you write, "It is 3:15?"</li>
            <li>Write 3 sentences in Spanish using the conjugated verb "ir".</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener36} value={spanishEssay36}/>

          <span className="days">LESSON 37 </span>
          <p className="topBottom">Watch the video and answer the questions below.</p>
          <Video videoUrl="https://www.youtube.com/embed/LGMKg6MUdxI?list=PLkjyx6Il3YUZqkAN9UqsY66cvWvnIa7mF"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Which 10 phrases from the video do you believe you would use the most if you went to a
              Spanish speaking country? Be sure to write the responses in Spanish with the translation included. Also,
              number each phrase.
            </li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener37} value={spanishEssay37}/>

          <span className="days">LESSON 38 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/wA9RYnVstKo?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <Video videoUrl="https://www.youtube.com/embed/RaT1vHv_aD0?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write two different sentences in Spanish that use the past tense.</li>
            <li>Write a sentence in Spanish that uses the word "tengo'.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea"
                    onChange={onChangespanishListener38} value={spanishEssay38}/>

          <span className="days">LESSON 39 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Ip7cs1D5tTQ?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <Video videoUrl="https://www.youtube.com/embed/UctLSz971Vk?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 different ways to say goodbye in Spanish. Which one is your favorite or the one you are likely
              to use most?
            </li>
            <li>Write five sentences that use the progressive verb tense "ing." For example "I am talking to you. =
              Estoy hablando contigo."
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. Write the phrases in Spanish and then translate
              them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener39} value={spanishEssay39}/>

          <span className="days">LESSON 40 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>

          <Video videoUrl="https://www.youtube.com/embed/weK0s0NOO5k?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/trevouDeEyo?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are markets like in Mexico? What things would you find there? Be sure to answer in Spanish.</li>
            <li>What are the 4 ways to ask "How are you?" in Spanish?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write 10 items you would find at the market. Write the words in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener40} value={spanishEssay40}/>

          <span className="days">LESSON 41 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/ylKWkYVNzuk"/>
          <Video videoUrl="https://www.youtube.com/embed/0UmLNeqW39c?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you write "Children play with sand at the beach" in Spanish?</li>
            <li>Write 5 new phrases you learned from either video.</li>
            <li>Write 5 new words you learned.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener41} value={spanishEssay41}/>

          <span className="days">LESSON 42 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/REfVPiP-4Zs?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/kbLbU4jnIzo?list=PLA5UIoabheFM7agDaTy7VItg8vu_UuFs6"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are 5 ways to ask "What's up?" in Spanish?</li>
            <li>List 5 items you should have to prepare for a natural disaster.        </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener42} value={spanishEssay42}/>

          <span className="days">LESSON 43 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/MIjHG0XwZUs?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <ol className="vocab">
            <li>Explain the differences between saber and conocer.</li>
            <li>Write two sentences in Spanish using the verb saber.</li>
            <li>Write two sentences in Spanish using the verb conocer.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener43} value={spanishEssay43}/>

          <span className="days">LESSON 44 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/_94m267xLEA?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe the different meanings that the verb quedar has.</li>
            <li>Write 5 sentences that use the verb quedar. Each sentence should use a different meaning than the
              others. Number each response.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener44} value={spanishEssay44}/>

          <span className="days">LESSON 45 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/BQOPSJ67fbQ?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What is a mistake often made when someone says "I like". What is the proper way to say you like
              something in Spanish?
            </li>
            <li>How would you say, "I like cats and I also like dogs" in Spanish?</li>
            <li>Write 5 sentences in Spanish that use the verb <i>gustar.</i></li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener45} value={spanishEssay45}/>

          <span className="days">LESSON 46 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Dfb9-ZTCA-E?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Briefly summarize what happened in the first episode of Extra Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener46} value={spanishEssay46}/>

          <span className="days">LESSON 47 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>

          <Video videoUrl="https://www.youtube.com/embed/jZR9Urqs7DQ?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/by7hNcJamYI?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How would you say, "Is the cat fat?" in Spanish?</li>
            <li>How would you say, "The girl is tall" in Spanish?</li>
            <li>Write 5 phrases you learned about how to describe someone or ask how someone looks.</li>
            <li>Write 5 new phrases you learned from the Easy Spanish video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener47} value={spanishEssay47}/>

          <span className="days">LESSON 48 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/b33kXdfvf84?list=PLkjyx6Il3YUZqkAN9UqsY66cvWvnIa7mF"/>
          <Video videoUrl="https://www.youtube.com/embed/0btEK0H3B2M?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How would you order 4 tortillas and 3 drinks in Spanish?</li>
            <li>How would you ask for the bill in Spanish?</li>
            <li>Write 4 phrases you learned from the Butterfly Spanish video.</li>
            <li>Write 5 new phrases you learned from Easy Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener48} value={spanishEssay48}/>

          <span className="days">LESSON 49 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/KD28uPyLjlU?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/XcS-qKBm7UE?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are the 10 most common questions in Spanish? Number your responses.</li>
            <li>Write 5 new phrases you learned from Easy Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener49} value={spanishEssay49}/>

          <span className="days">LESSON 50 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/awswL1EMRoc?list=PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN"/>
          <Video videoUrl="https://www.youtube.com/embed/JAU3bdK2h10?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write out the number 1230 in Spanish.</li>
            <li>Write out the number 967 in Spanish.</li>

            <li>Write 5 new phrases you learned in Easy Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener50} value={spanishEssay50}/>

          <span className="days">LESSON 51 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/qEwEkpPAXkg"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.
            </li>
            <li>Write 5 new phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener51} value={spanishEssay51}/>

          <span className="days">LESSON 52 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/z7L9dYqSW1g?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What was your favorite idiom form the video?</li>
            <li>Write 5 idioms you learned in the video. Write your answer in Spanish and then translate it.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener52} value={spanishEssay52}/>

          <span className="days">LESSON 53 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/K3XN9ohrXYU?list=PLkjyx6Il3YUZqkAN9UqsY66cvWvnIa7mF"/>
          <Video videoUrl="https://www.youtube.com/embed/2UUR2665lbY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li><i>Translate the following into Spanish:</i> How is the weather?</li>
            <li>It is very cold.</li>
            <li>It is bad weather.</li>
            <li>I am very hot.</li>
            <li>Write 5 new phrases you learned to discuss the weather.</li>
            <li>Write 5 new phrases you learned from Easy Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener53} value={spanishEssay53}/>

          <span className="days">LESSON 54</span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/2SYio0mbDUw?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What is Spangish and why should you try to avoid using it.</li>
            <li>Write 2 <i>Spanglish</i> phrases you heard in the video or make up your own.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener54} value={spanishEssay54}/>

          <span className="days">LESSON 55 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/jV0f73QeM2I?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new phrases you learned from the video.</li>
            <li>What do you think the future will look like? Write your answer in Spanish. You may use a <a
              href="https://www.spanishdict.com/" rel="noreferrer" target="_blank"> translation app </a> to help if
              you need it.
            </li>

            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener55} value={spanishEssay55}/>

          <span className="days">LESSON 56 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/aWH2MpoTWU0"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What was this episode of Extra Spanish about?   You may use a <a
              href="https://www.spanishdict.com/" rel="noreferrer" target="_blank"> translation app </a> to help you if
              you need it.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener56} value={spanishEssay56}/>

          <span className="days">LESSON 57 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/PBgdwZkWVpM?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 verbs that would be useful for emailing someone.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener57} value={spanishEssay57}/>

          <span className="days">LESSON 58 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Dw7GsfcoZP4?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 8 new words you learned in the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener58} value={spanishEssay58}/>

          <span className="days">LESSON 59 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/4Er6TzleQTg?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new verbs you learned. Write the words in Spanish and then English.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener59} value={spanishEssay59}/>

          <span className="days">LESSON 60 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/zCr-CZAblYg?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <ol className="vocab"><p>Translate the following into Spanish: </p>
            <li>I owe</li>
            <li>they read</li>
            <li>you believe</li>
            <li>he understands</li>
            <li>What are three other verbs you learned? Use these verbs in sentences and translate them into English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener60} value={spanishEssay60}/>

          <span className="days">LESSON 61 </span>
          <p className="topBottom">Watch the video and complete the assignment below.</p>
          <Video videoUrl="https://www.youtube.com/embed/euQ1VaiXRoQ?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p className="topBottom">Songs are a great way to learn Spanish. Instead of Duolingo, watch the music video
            below: <i>Perro Viejo</i> by Juanes</p>
          <ul className="list">
            <li>After you watch the video, read the lyrics to the song (below). First read a line in Spanish and then
              read the translation in English.
            </li>
            <li>Are you able to match the Spanish words to the English words to understand what each word means?</li>
            <li>After you read each line of the song, replay the music video and try to sing along.</li>
          </ul>
          <Video videoUrl="https://www.youtube.com/embed/oYav1M8FUuo"/>
          <div className="songrow">
            <h4><i>Perro Viejo</i> by Juanes</h4>
            <div className="songcolumn">
              <ul>
                <li><i>&nbsp; Perro Viejo</i></li>
                <li>Las marcas en mi piel</li>
                <li>no son en vano</li>
                <li>todo lo que me dolió ayer</li>
                <li>hoy me hace mas humano</li>
                <br/>
                <li>zapatos desgastados de correr</li>
                <li>colmillos afilados</li>
                <li>queriendo morder</li>
                <br/>
                <li>si te arriesgas</li>
                <li>quédate a mi lado</li>
                <li>no podría perdonar perderte</li>
                <br/>
                <li>ni una piedra en el camino</li>
                <li>impedirá que esté contigo</li>
                <li>si te arriesgas,</li>
                <li>dímelo quiero saber</li>
                <br/>
                <li>Tengo cero preocupación</li>
                <li>mi maleta es ligera</li>
                <li>para continuar</li>
                <li>a medias no puedo amar</li>
                <li>ni ser amado</li>
                <br/>
                <li>zapatos desgastados de correr</li>
                <li>colmillos afilados</li>
                <li>queriendo morder</li>
                <br/>
                <li>si te arriesgas</li>
                <li>quédate a mi lado</li>
                <li>no podría perdonar perderte</li>
                <br/>
                <li>ni una piedra en el camino</li>
                <li>impedirá que esté contigo</li>
                <li>si te arriesgas,</li>
                <li>dímelo quiero saber</li>
              </ul>
            </div>
            <div className="songcolumn">
              <ul>
                <li><i>&nbsp; Old dog</i></li>
                <li>The scars on my skin</li>
                <li>are not in vain</li>
                <li>everything that hurt me yesterday</li>
                <li>made me more human</li>
                <br/>
                <li>worn out shoes from running</li>
                <li>sharp teeth</li>
                <li>wanting to bite</li>
                <br/>
                <li>If you dare to,</li>
                <li>stay with me</li>
                <li>I couldn't forgive myself for losing you</li>
                <br/>
                <li>No even a rock on the way</li>
                <li>will stop me from being with you</li>
                <li>if you dare to,</li>
                <li>tell me I want to know</li>
                <br/>
                <li>I have zero worries</li>
                <li>my suitcase is light</li>
                <li>to keep going</li>
                <li>I can't love half way</li>
                <li>nor be loved</li>
                <br/>
                <li>worn out shoes from running</li>
                <li>sharp teeth</li>
                <li>wanting to bite</li>
                <br/>
                <li>If you dare to,</li>
                <li>stay with me</li>
                <li>I couldn't forgive myself for losing you</li>
                <br/>
                <li>No even a rock on the way</li>
                <li>will stop me from being with you</li>
                <li>if you dare to,</li>
                <li>tell me I want to know</li>
              </ul>
            </div>
          </div>

          <ol className="vocab">In the textbox below, write the English translation for the following:<br/>
            <li>las marcas en mi piel no son en vano</li>
            <li>zapatos desgastados de correr</li>
            <li>colmillos afilados queriendo morder</li>
            <li>mi maleta es ligera</li>
            <li>dímelo quiero saber</li>
            <li>ni una piedra en el camino impedirá que esté contigo</li>
            <li>Create your own sentence in Spanish using the words you learned from the song.<br/> For example: Tengo
              zapatos, una mileta, una piedra y cero preocupación. = <i>I have shoes, a suitcase, a rock and zero worries.</i>
            </li>
          </ol>

          <textarea className="textArea" onChange={onChangespanishListener61} value={spanishEssay61}/>

          <span className="days">LESSON 62 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/SnN8VroqOfI?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What was this episode of Extra Spanish about?   You may use a <a
              href="https://www.spanishdict.com/" rel="noreferrer" target="_blank"> translation app </a> to help you if
              you need it.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener62} value={spanishEssay62}/>

          <span className="days">LESSON 63 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/0-kY_RQxuc0"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What should you not do in Spain?    </li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener63} value={spanishEssay63}/>

          <span className="days">LESSON 64 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/VRZ-2z9NIhU?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What is your favorite season?    </li>
            <li>Do you like winter? Explain why.    </li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener64} value={spanishEssay64}/>

          <span className="days">LESSON 65 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/gdZNvl7TKyY?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <Video videoUrl="https://www.youtube.com/embed/ATTlzREF7gI?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>How do you say "I must leave" in Spanish?</li>
            <li>How do you say "I have to study" in Spanish?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>What is your favorite book? Describe in Spanish why you like it.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener65} value={spanishEssay65}/>

          <span className="days">LESSON 66 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/cXBGS3lDBQo?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 adverbs in Spanish and translate them to English.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener66} value={spanishEssay66}/>

          <span className="days">LESSON 67 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/pe5p-mUFIZM?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <Video videoUrl="https://www.youtube.com/embed/BKJDlyQrHLk?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What's the difference between tomar and beber? When do you use each verb?</li>
            <li>Use the verb beber in a sentence.</li>
            <li>Use the verb tomar in a sentence.</li>
            <li>What are 6 ways to say goodbye in Spanish?</li>
            <li>Are there differences between how Spanish is pronounced in Spain versus Latin America?</li>
            <li>Write 5 new phrases you learned in Easy Spanish. In complete sentences, write your phrases in Spanish and then translate into English.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener67} value={spanishEssay67}/>

          <span className="days">LESSON 68 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/zwyhqLAknf4?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <Video videoUrl="https://www.youtube.com/embed/VhAiG4vUUXY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 ways to say "No" in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener68} value={spanishEssay68}/>

          <span className="days">LESSON 69 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/xSdwILUfKdA?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe what happens in this episode of "Extra Spanish."</li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener69} value={spanishEssay69}/>

          <span className="days">LESSON 70 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/HYDPe6gRPTk?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are the different ways to say 'I'm sorry' in Spanish?</li>
            <li>Write 5 new words you learned.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener70} value={spanishEssay70}/>

          <span className="days">LESSON 71 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/dSFC4URKaXs?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new phrases and 5 new words you learned in the video on love expressions.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener71} value={spanishEssay71}/>

          <span className="days">LESSON 72 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/borZjMtQvxY?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 funny or not so funny phrases you learned in Spanish.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener72} value={spanishEssay72}/>

          <span className="days">LESSON 73 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/9JZ8jdqOuKw?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <Video videoUrl="https://www.youtube.com/embed/bwuHgN_OKqs?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 different ways you can agree with someone in Spanish.</li>
            <li>Use the verb 'saber' in a sentence and translate it to English.</li>
            <li>Use the verb 'conocer' in a sentence and translate it to English.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener73} value={spanishEssay73}/>

          <span className="days">LESSON 74 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>

          <Video videoUrl="https://www.youtube.com/embed/Hb-vdn70f4s?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <Video videoUrl="https://www.youtube.com/embed/szFpEUW9u_s?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Explain what 'ya' means.</li>
            <li> Give 2 examples of how to use 'ya' in a sentence.</li>
            <li>In Spanish, describe what was you favorite moment from this past year?</li>
            <li>Write 5 new phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener74} value={spanishEssay74}/>

          <span className="days">LESSON 75 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/vrwROaFslII?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Which verbs are the '3 Enemigos'?</li>
            <li>Why does Jordan describe them this way in the video?</li>
            <li>Describe when you use the verb "ser" and give an example in a sentence.</li>
            <li>Describe when you use the verb "estar" and give an example in a sentence.</li>
            <li>Describe when you use the verb "ir" and give an example in a sentence.</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener75} value={spanishEssay75}/>

          <span className="days">LESSON 76 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Qh7-_sXVHlc? "/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener76} value={spanishEssay76}/>

          <span className="days">LESSON 77 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/5ZNdo5kHL-E?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are 5 words that don't exist in Spanish?</li>
            <li>Write 5 new phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener77} value={spanishEssay77}/>

          <span className="days">LESSON 78 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/mLDHG4usHMc?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <Video videoUrl="https://www.youtube.com/embed/6nuUhvOnfk4"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What would you do with $200. </li>
            <li>Write 5 new phrases you learned in Easy Spanish.</li>
            <li>What sounds does 'Y' make is Spanish?</li>
            <li>What sounds does 'LL' make is Spanish?</li>

            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener78} value={spanishEssay78}/>

          <span className="days">LESSON 79 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/RqA58k_GwnM"/>
          <Video videoUrl="https://www.youtube.com/embed/_dUjLLoTEFA?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What is the Spanish infinite? Write 2 sentences using the infinite.</li>
            <li>Describe yourself in 4-5 sentences.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener79} value={spanishEssay79}/>

          <span className="days">LESSON 80 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/VNnJ94fZXT4?list=PLCdEl60d0eroQ1M0lc-S6rD1aQCE6HRwl"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>How do you say in Spanish "Give me a Coke please."</li>
            <li>Write 5 new words you learned in the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener80} value={spanishEssay80}/>

          <span className="days">LESSON 81 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/H0ZzmAkW-2I?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 10 phrases that use the word 'Que' that you learned in the video.</li>
            <li>Write 5 new Spanish phrases you learned from the video.  </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener81} value={spanishEssay81}/>

          <span className="days">LESSON 82 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/oz8KfncJt94?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe what you would like to study in college.</li>
            <li>Write 5 new Spanish phrases you learned from the video.       </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener82} value={spanishEssay82}/>

          <span className="days">LESSON 83 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/ygM-D5sdxsM?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what the Easy Spanish video was about.</li>
            <li>Write 5 new Spanish phrases you learned from the video. </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener83} value={spanishEssay83}/>

          <span className="days">LESSON 84 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/YtJwkWHGSlw?"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what happens in this episode of "Extra Spanish."</li>
            <li>Write 5 new Spanish phrases you learned from the video.  </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener84} value={spanishEssay84}/>

          <span className="days">LESSON 85 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/qa5NdbjqtvU?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <Video videoUrl="https://www.youtube.com/embed/xs5M_XpyjvU"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What was the happiest moment of your life?</li>
            <li>Write 5 new phrases you learned from Easy Spanish.</li>
            <li>When do you use the verb "ser"? Give an example in a sentence.</li>
            <li>When do you use the verb "estar"? Give an example in a sentence.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener85} value={spanishEssay85}/>

          <span className="days">LESSON 86 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/qDbs73KuuAI"/>
          <Video videoUrl="https://www.youtube.com/embed/pEP64ab5UGE?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video.        </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener86} value={spanishEssay86}/>

          <span className="days">LESSON 87 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/exI7iHgMKRs"/>
          <Video videoUrl="https://www.youtube.com/embed/qhHW5JGhX6A?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. Using complete sentences, write your answers in Spanish and then translate them into English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener87} value={spanishEssay87}/>

          <span className="days">LESSON 88 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/K40BF2gGAqs?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What would be your ideal vacation or holiday? Where would you go and what would you do? In no less than
              5 sentences, write this in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener88} value={spanishEssay88}/>

          <span className="days">LESSON 89 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/-oCklLVmlaM?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <Video videoUrl="https://www.youtube.com/embed/PWilradvu6s"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 7 new phrases you learned from both videos.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener89} value={spanishEssay89}/>

          <span className="days">LESSON 90 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/DecSQ4fQ4DY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Do you believe in love? Why or why not? Write your response in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video.            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener90} value={spanishEssay90}/>

          <span className="days">LESSON 91 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/LlvX0GHxnH0?"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.</li>
            <li>Write 5 new Spanish phrases you learned from the video. </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener91} value={spanishEssay91}/>

          <span className="days">LESSON 92 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Ua0_D7GxNuc?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What are the five ways to use the verb 'alcanzar'?</li>
            <li>Write 5 new Spanish phrases you learned from the video. Write them in Spanish and then translate them to
              English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener92} value={spanishEssay92}/>

          <span className="days">LESSON 93 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/xMsNaa5gqYw?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe your childhood dreams in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video.  </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener93} value={spanishEssay93}/>

          <span className="days">LESSON 94 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/3TJRiTb4Di0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Which Mexican tradition you found most interesting. Explain in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener94} value={spanishEssay94}/>

          <span className="days">LESSON 95 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/XFn3y9jofUk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe your daily routine in Spanish. (3-5 sentences)</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener95} value={spanishEssay95}/>

          <span className="days">LESSON 96 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/mHUxd-3DL6Q?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Imagine you take a trip to Mexico City. Which places would you visit? Write your response in Spanish.
            </li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener96} value={spanishEssay96}/>

          <span className="days">LESSON 97 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/zcjGv4aiHoU"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener97} value={spanishEssay97}/>

          <span className="days">LESSON 98 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/h6FRAropOG4?"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener98} value={spanishEssay98}/>

          <span className="days">LESSON 99 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Fd2kIk2nI8Y?list=RDCMUCDZPuuSYxhJlKesTmnelNVw"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener99} value={spanishEssay99}/>

          <span className="days">LESSON 100 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/s6gaCDr4CPI?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are your plans for this Friday night. Write your response in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener100} value={spanishEssay100}/>

          <span className="days">LESSON 101 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/nIrNsVtVTKA?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are some myths about Mexico? Write your response in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener101} value={spanishEssay101}/>

          <span className="days">LESSON 102 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/F8gOKvZxujU?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe when you use the verb <i>tocar</i> versus jugar. What is the difference?</li>
            <li>Use the verb tocar in a sentence</li>
            <li>Use the verb jugar in a sentence.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener102} value={spanishEssay102}/>

          <span className="days">LESSON 103 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Sn_WGASxmuo?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Do you believe in any superstitions? If so, explain what they are and if not explain why you don't
              believe in them (in Spanish).
            </li>
            <li>Which superstition discussed in the video was the most interesting?</li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener103} value={spanishEssay103}/>

          <span className="days">LESSON 104 </span>
          <p className="topBottom">Watch the videos, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/a6NNpD-VZEA"/>
          <Video videoUrl="https://www.youtube.com/embed/objiwUdUHO4?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 2 different sentences using plural nouns.</li>
            <li>What do you want to do for a living when you are older?</li>
            <li>What type of job seems the worst to you. Explain why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener104} value={spanishEssay104}/>

          <span className="days">LESSON 105 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/cldgxJLRdfQ?"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener105} value={spanishEssay105}/>

          <span className="days">LESSON 106 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/oz8ZnQEc3Tw?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Do you know why your parents gave you the name they did?</li>
            <li>Does your name have a special meaning?</li>
            <li>If you had to choose another name, what name would you choose and why. Explain in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener106} value={spanishEssay106}/>

          <span className="days">LESSON 107 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/1GvJdIWDRBs?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener107} value={spanishEssay107}/>

          <span className="days">LESSON 108 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/9WDcyOI6DdM"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener108} value={spanishEssay108}/>

          <span className="days">LESSON 109</span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Py3pD4_B9lg?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are your hobbies? Answer in Spanish.</li>
            <li>How do you spend your free time?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener109} value={spanishEssay109}/>

          <span className="days">LESSON 110 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/7YGvTHQ1Ch0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Did you learn anything interesting or new about Mexico or Canada that you didn't know before?</li>
            <li>What were the differences between Canada and Mexico that were discussed in the video. Answer in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener110} value={spanishEssay110}/>

          <span className="days">LESSON 111 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Q4cLOkuCA2k?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
                    <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What is the difference between llegar and traer.</li>
            <li>Give an example of when to use llegar. Use the verb in a sentence.</li>
            <li>Give an example of when to use traer. Use the verb in a sentence.</li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener111} value={spanishEssay111}/>

          <span className="days">LESSON 112 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/jYZQdlqL13o?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.
              You may use a <a href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you if you need it.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener112} value={spanishEssay112}/>

          <span className="days">LESSON 113 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/s_sxbxsC46g?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What tense is hablaríamos?</li>
            <li>Use hablaríamos in a sentence and translate it to English.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener113} value={spanishEssay113}/>

          <span className="days">LESSON 114 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/S0BZB0d1ilc?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener114} value={spanishEssay114}/>

          <span className="days">LESSON 115 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/y5xnSO4FnWk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener115} value={spanishEssay115}/>

          <span className="days">LESSON 116 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/kQUE3FJoG30?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe who you look up to and why.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener116} value={spanishEssay116}/>

          <span className="days">LESSON 117 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/alvPHLa47h0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>If you have seen the movie "Coco", did you like it?</li>
            <li>What did people in the video think about the movie "Coco"? Discuss this in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener117} value={spanishEssay117}/>

          <span className="days">LESSON 118 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/IGvH1c532pg?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 statements in Spanish using the verb "to go". Use a different pronoun for each sentence. (Yo,
              Tu, Usted, Nosotros, Ustedes)
            </li>
            <li>Write 5 questions in Spanish using the verb "to go". Use a different pronoun for each sentence.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener118} value={spanishEssay118}/>

          <span className="days">LESSON 119 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/bjBXuCSuNf0?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.</li>
            <li>Who is your favortie character? Explain why.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener119} value={spanishEssay119}/>

          <span className="days">LESSON 120 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/C9fuvdzihPI"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener120} value={spanishEssay120}/>

          <span className="days">LESSON 121 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Hddi6sivufs?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Which traditional Mexican dish is your favorite? Describe why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener121} value={spanishEssay121}/>

          <span className="days">LESSON 122 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/oEg4GH93aCY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener122} value={spanishEssay122}/>

          <span className="days">LESSON 123 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/17TFsZFtf4E?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What would you do in Barcelona with 10 Euros? This is close to 10 US dollars. Answer in Spanish.</li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener123} value={spanishEssay123}/>

          <span className="days">LESSON 124 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/n7Ma6Vu7COs?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Which Spanish dish sounded the best? Explain why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener124} value={spanishEssay124}/>

          <span className="days">LESSON 125 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/L91nphnH6xg?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener125} value={spanishEssay125}/>

          <span className="days">LESSON 126 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/NGdxsg5PZ_M?"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What happens in this episode of Extra Spanish? Write your answer in Spanish.</li>
            <li>This was the final episode. How did you like the series? Explain in Spanish why you did or didn't like
              it.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener126} value={spanishEssay126}/>

          <span className="days">LESSON 127 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/pSdCFzplNME?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>The narrator in the video talks about his culture shock after arriving in Spain. Of the five things he
              discussed, which did you find the most interesting and why? Write your response in Spanish.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener127} value={spanishEssay127}/>

          <span className="days">LESSON 128 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/9pQuS1hCm04?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In the video, the guest being interviewed is from Ecuador. What was something she talk about that
              you found interesting? Describe this in Spanish.
            </li>
            <li> How did she say the food from Ecuador was different than food in Spain?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener128} value={spanishEssay128}/>

          <span className="days">LESSON 129 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/5_1QLQKVlbE?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener129} value={spanishEssay129}/>

          <span className="days">LESSON 130 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/TnFLuQPPoYg?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS - Write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 10 new verbs you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener130} value={spanishEssay130}/>

          <span className="days">LESSON 131 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/aEjFTuGdxKo?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener131} value={spanishEssay131}/>

          <span className="days">LESSON 132 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/O_COsMaz6Ak?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener132} value={spanishEssay132}/>

          <span className="days">LESSON 133 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/VbAsMHy6WWA?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener133} value={spanishEssay133}/>

          <span className="days">LESSON 134 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/VnzsIX0iLyY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener134} value={spanishEssay134}/>

          <span className="days">LESSON 135 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/cBmwG_jVC5Q?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener135} value={spanishEssay135}/>

          <span className="days">LESSON 136 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/KzdFSxURKvo?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What is one of the craziest <i>or</i> the most interesting dreams you have ever had? Describe this in
              Spanish.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener136} value={spanishEssay136}/>

          <span className="days">LESSON 137 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/q7717DkRdOg?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Show 10 different ways to use the verb haber.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener137} value={spanishEssay137}/>

          <span className="days">LESSON 138 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/IAfko-HpiI0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What was something the narrator in the video missed about Mexico?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener138} value={spanishEssay138}/>

          <span className="days">LESSON 139 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/8a9vlDiHEYY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In 2-3 sentences, describe in Spanish your dream job.</li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener139} value={spanishEssay139}/>

          <span className="days">LESSON 140 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/P1fAHU8HvVk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe when you would use the word muy versus mucho.</li>
            <li>Describe when you would use the word bien versus bueno.</li>
            <li>Describe when you would use the word por versus para.</li>
            <li>Write a sentence in Spanish using the word muy.</li>
            <li>Write a sentence in Spanish using the word mucho.</li>
            <li>Write a sentence in Spanish using the word bien.</li>
            <li>Write a sentence in Spanish using the word bueno.</li>
            <li>Write a sentence in Spanish using the word por.</li>
            <li>Write a sentence in Spanish using the word para.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener140} value={spanishEssay140}/>

          <span className="days">LESSON 141 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/LOPDtJofMYE?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In 2-3 sentences, describe in Spanish your goals for the future.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener141} value={spanishEssay141}/>

          <span className="days">LESSON 142 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/rx_ZtO_3yjk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In 2-3 sentences, describe in Spanish your greatest fear or phobia.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener142} value={spanishEssay142}/>

          <span className="days">LESSON 143 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/ULkojXvrUVE?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In 3-4 sentences, describe your house and where you live. </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener143} value={spanishEssay143}/>

          <span className="days">LESSON 144 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/zyLoe3k_LaI?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe at least one interesting new thing you learned about Mexico City. Write your response in
              Spanish.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener144} value={spanishEssay144}/>

          <span className="days">LESSON 145 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/zGmC_Jitwns?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe one of your best memories from childhood. Try to use the past tense in your response.</li>
            <li>What are positive aspects to using social media? Write your response in Spanish.</li>
            <li>What are negative aspects to using social media?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener145} value={spanishEssay145}/>

          <span className="days">LESSON 146 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/76jg_xxMBSY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe one of your favorite childhood memories.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener146} value={spanishEssay146}/>

          <span className="days">LESSON 147 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/rZlgsB2Jj3w?list=PLkjyx6Il3YUZlnm7Y1CzL3nwh6JJcxEfW"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Give 8 different different examples of how to use the verb <i>dejar</i> in a sentence. Make sure your
              examples are all different from each other and you translate them to English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener147} value={spanishEssay147}/>

          <span className="days">LESSON 148 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/vcilgiHdJVk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Give an example of how you would use <i> que </i>in a sentence.</li>
            <li>Give an example of how you would use <i>dónde </i>in a sentence.</li>
            <li>Give an example of how you would use <i> quién </i>in a sentence.</li>
            <li>Give an example of how you would use <i>por qué </i>in a sentence.</li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener148} value={spanishEssay148}/>

          <span className="days">LESSON 149 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/RNeBpdZxOnU?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>In Spanish, how would you ask "What do you have to do today?"</li>
            <li>In Spanish, how would you say "I must go to see my mother tomorrow."</li>
            <li>In Spanish, how would you ask "What can you do today?"</li>
            <li>Write 2 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener149} value={spanishEssay149}/>

          <span className="days">LESSON 150 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/-lWqEfhSnfY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe how the gustar, amar, and encantar are used differently (you may write this in English).</li>
            <li>Give an example of how you would use <i> gustar </i>in a sentence.</li>
            <li>Give an example of how you would use <i> amar </i>in a sentence.</li>
            <li>Give an example of how you would use <i> encantar </i>in a sentence.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener150} value={spanishEssay150}/>

          <span className="days">LESSON 151 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/08am-TIvvFc?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe the most interesting you learned in the video about Mexican culture.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener151} value={spanishEssay151}/>

          <span className="days">LESSON 152 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/JFQGeIPH3QY?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe what freedom means to you.</li>
            <li>Do you believe you are free?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener152} value={spanishEssay152}/>

          <span className="days">LESSON 153 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Ebhc1zPLMq8?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are your favorite fruits. Write your response in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener153} value={spanishEssay153}/>

          <span className="days">LESSON 154 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/fXoG9Gbe9uc?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>How do you ask someone in Spanish how old he or she is?</li>
            <li>Write in Spanish how old you are.</li>
            <li>What do you think is the perfect age to be? Answer in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener154} value={spanishEssay154}/>

          <span className="days">LESSON 155 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Na96wirrMTU?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe what you think the world's biggest problems are.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener155} value={spanishEssay155}/>

          <span className="days">LESSON 156 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/6jje84ArIOo?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write a text to a friend in Spanish (2-4 lines). Ask them how they are and share with them things you've been doing lately. </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener156} value={spanishEssay156}/>

          <span className="days">LESSON 157</span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/INzl57SF6S0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 Spanish phrases you learned to be polite.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener157} value={spanishEssay157}/>

          <span className="days">LESSON 158 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/bS2KgpE-tqs?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, list the foods you would likely find in your refrigerator.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener158} value={spanishEssay158}/>

          <span className="days">LESSON 159 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/WNH_e9_N5D0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What do you think is the most beautiful langauge? Explain in Spanish why you belive this.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener159} value={spanishEssay159}/>

          <span className="days">LESSON 160 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/vusWOJltwy8?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe a special talent you have (in Spanish).</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener160} value={spanishEssay160}/>

          <span className="days">LESSON 161 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/NSWcdPWXZQI"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Choose 5 filler words the narrator discussed in the video and give an example by using each in a
              sentence. Then translate each sentence into English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener161} value={spanishEssay161}/>

          <span className="days">LESSON 162 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/3dX6KDfHxTQ?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>The video addressed cultures around the world that Mexicans admire. In 2-3 sentences, discuss in Spanish
              the culture you most admire in the world.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener162} value={spanishEssay162}/>

          <span className="days">LESSON 163 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/CdrIfZ5SSMA?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Do you exercise? If you do, describe in Spanish what kind of exercise you enjoy most and a new exercise
              you would like to learn. If you don't exercise, describe what kind of exercise you might like to start.
              Examples include: swimming, horseback riding, snowboarding, rock climbing, etc. You may use a <a
                href="https://www.spanishdict.com/" rel="noreferrer" target="_blank">translator</a> to
              help you.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener163} value={spanishEssay163}/>

          <span className="days">LESSON 164 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/KRYYKNKiOI8?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Write 5 ways to make excuses in Spanish. You can use ones you learned in the video or make up your
              own.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener164} value={spanishEssay164}/>

          <span className="days">LESSON 165 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/H5uxfh_ff_0?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe what you think would be the most exciting profession.</li>
            <li>What do you think would be the most difficult or unappealing profession to pursue? Explain why.
            </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener165} value={spanishEssay165}/>

          <span className="days">LESSON 166 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/Tmb4aXJ_x6k?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Think about your favorite outfit. Describe in Spanish what it looks like and why it's your favorite.
            </li>

            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener166} value={spanishEssay166}/>

          <span className="days">LESSON 167 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/E_5odbq_Hlc?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Write 5 Spanish sayings you learned from the video and translate them to English.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener167} value={spanishEssay167}/>

          <span className="days">LESSON 168 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/hSc6bDiEP40?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe the flavor of an apple. How does it taste?</li>
            <li>Describe the flavor of popcorn.</li>
            <li>Describe the flavor of chocolate.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener168} value={spanishEssay168}/>

          <span className="days">LESSON 169 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/e13APANAP0I?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>In Spanish, describe yourself, on the inside and outside. Write no less than 5 sentences.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener169} value={spanishEssay169}/>


          <span className="days">LESSON 170</span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/DwbAW8G-57A?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What do you think you would like the most about living in Barcelona? 
            </li>
            <li>What do you think you would dislike the most about living in Barcelona?   </li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener170} value={spanishEssay170}/>

          <span className="days">LESSON 171 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/SCS1dJ35lig?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish what you are doing today.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener171} value={spanishEssay171}/>

          <span className="days">LESSON 172 </span>
          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/34ghjnIX3D4?list=PLhj8d_ZijD0vopuloaa0QW-OHZfD--Ntb"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>What does "Este Wey" translate to in English?</li>
            <li>What does "y lo voy a sacar" mean?</li>
            <li>Write 5 new phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener172} value={spanishEssay172}/>

          <span className="days">LESSON 173 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/F1D_L94WDJk?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">
            <li>Earlier in this course there was an Easy Spanish video where people in Mexico City (Lesson 139)
              and Parque Mexico (Lesson 165)
              were asked similar questions about their professions. What were differences between
              the people in Mexico's cities and people in Barcelona, Spain? Explain.</li>
            <li>The accents of people in Barcelona are different than people in Mexico. Which do you find easier to understand?</li>
            <li>Not everyone in the video said they pursued their dream job; for example, the nurse did not. How important do you think it is for a person to pursue their dream job? Answer in Spanish.</li>
            <li>Which job seemed the most interesting to you from this video? Explain why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener173} value={spanishEssay173}/>

          <span className="days">LESSON 174 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/alWjGM99rww?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>In Spanish, name 4 of your favorite foods.</li>
            <li>Which is you most favorite food and explain why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener174} value={spanishEssay174}/>

          <span className="days">LESSON 175 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/hVmeEgTzCYQ?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What are 2 facts about Spain you found the most interesting?</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener175} value={spanishEssay175}/>

          <span className="days">LESSON 176 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/iEmu_TfucVA?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>List two "culture shocks" mentioned in the video that you found the most interesting.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener176} value={spanishEssay176}/>

          <span className="days">LESSON 177 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/r697lVGVdic?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Describe in Spanish the superpower you would love to have and why.</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener177} value={spanishEssay177}/>

          <span className="days">LESSON 178 </span>

          <p className="topBottom">Watch the video, answer the questions below and complete a full lesson on <a
            href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/9GLutD_T_eM?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>What is the best advice you have ever received and</li>
            <li>Write 5 new Spanish phrases you learned from the video. 
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener178} value={spanishEssay178}/>

          <span className="days">LESSON 179 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/_ePLrIJk_Ow?list=PLkjyx6Il3YUYWNS7C1N_qnPS-w-NWEgD9"/>
          <p><strong>QUESTIONS</strong></p>
          <ol className="vocab">In Spanish, how would you say the following:<br/>
            <li>I am worried.</li>
            <li>You are confused.</li>
            <li>How do you feel today?</li>
            <li>He is busy.</li>
            <li>I am nervous.</li>
            <li>She is happy.</li>
            <li>He is depressed.</li>
            <li>Write 5 other Spanish phrases you learned from the video. Write them in Spanish and then translate them
              to English.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a></li>
          </ol>
          <textarea className="textArea" onChange={onChangespanishListener179} value={spanishEssay179}/>

          <span className="days">LESSON 180 </span>
          <p className="topBottom">Watch the video, answer the questions below in Spanish and complete a full lesson
            on <a
              href="https://www.duolingo.com/" rel="noreferrer" target="_blank">Duolingo.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/wHE5sYWSGiU?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>
          <p><strong>QUESTIONS - Using complete sentences, write your answers in Spanish and then translate them into English.</strong></p>
          <ol className="vocab">
            <li>Which country seemed the most interesting to you after watching the interviews?</li>
            <li>Which country do you hope to travel to one day? Explain why in Spanish.</li>
            <li>Write 5 new Spanish phrases you learned from the video.</li>
            <li>Imagine you won a free trip. You get to select from any of the Spanish speaking destinations below.
              Which place would you pick and why would you like to go there? Write your response in Spanish.
            </li>
            <li>Write the name of the lesson you completed on <a href="https://www.duolingo.com/" rel="noreferrer"
                                                                 target="_blank"> Duolingo. </a>AND the total number of
              points you have.
            </li>
          </ol>
          <div className="rowimages">
            <div className="columnimages">
              <div><img src={require("../../public/images/stories/tayronaColombia.jpg")}
                        alt=""/>
                <p className="captionTitle">Tayrona Park, Colombia</p>
              </div>
              <div><img src={require("../../public/images/stories/machupiccu.jpg")} style={{ maxWidth: "500px" }}
                        alt=""/>
                <p className="captionTitle">Machu Piccu, Peru</p></div>

              <div><img src={require("../../public/images/stories/galapagos2.jpg")} style={{ maxWidth: "500px" }}
                        alt=""/>
                <p className="captionTitle">Galapagos, Ecuador</p>
              </div>
            </div>
            <div className="columnimages">
              <div><img src={require("../../public/images/stories/barcelona.jpg")} style={{ maxWidth: "500px" }}
                        alt=""/>
                <p className="captionTitle">Barcelona, Spain</p>
              </div>

              <div><img src={require("../../public/images/stories/arenalcostarica.jpg")} style={{ maxWidth: "500px" }}
                        alt=""/>
                <p className="captionTitle">Arenal Park, Costa Rica</p>
              </div>
              <div><img src={require("../../public/images/stories/patagonia.jpg")} style={{ maxWidth: "500px" }}
                        alt=""/>
                <p className="captionTitle">Patagonia, Chile</p>
              </div>
            </div>
          </div>

          <textarea className="textArea" onChange={onChangespanishListener180} value={spanishEssay180}/>
        </div>
      </section>

      < Confetti/>
      < h3
        style={{ textAlign: "center", height: "70vh", width: "100vw" }}> You finished Middle School Spanish! </h3>
    </form>
  )
}

export default SpanishComponent