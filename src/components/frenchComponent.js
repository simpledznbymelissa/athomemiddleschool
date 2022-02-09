import React from "react"
import "../styles/styles.css"
import Video from "./video"
import Confetti from "./confetti"
import { Link } from "gatsby"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

const FrenchComponent = ({ data }) => {
  const [frenchEssay1, setfrenchEssay1] = useLocalStorageState("frenchEssay1", "")
  const [frenchEssay2, setfrenchEssay2] = useLocalStorageState("frenchEssay2", "")
  const [frenchEssay3, setfrenchEssay3] = useLocalStorageState("frenchEssay3", "")
  const [frenchEssay4, setfrenchEssay4] = useLocalStorageState("frenchEssay4", "")
  const [frenchEssay5, setfrenchEssay5] = useLocalStorageState("frenchEssay5", "")
  const [frenchEssay6, setfrenchEssay6] = useLocalStorageState("frenchEssay6", "")
  const [frenchEssay7, setfrenchEssay7] = useLocalStorageState("frenchEssay7", "")
  const [frenchEssay8, setfrenchEssay8] = useLocalStorageState("frenchEssay8", "")
  const [frenchEssay9, setfrenchEssay9] = useLocalStorageState("frenchEssay9", "")
  const [frenchEssay10, setfrenchEssay10] = useLocalStorageState("frenchEssay10", "")
  const [frenchEssay11, setfrenchEssay11] = useLocalStorageState("frenchEssay11", "")
  const [frenchEssay12, setfrenchEssay12] = useLocalStorageState("frenchEssay12", "")
  const [frenchEssay13, setfrenchEssay13] = useLocalStorageState("frenchEssay13", "")
  const [frenchEssay14, setfrenchEssay14] = useLocalStorageState("frenchEssay14", "")
  const [frenchEssay15, setfrenchEssay15] = useLocalStorageState("frenchEssay15", "")
  const [frenchEssay16, setfrenchEssay16] = useLocalStorageState("frenchEssay16", "")
  const [frenchEssay17, setfrenchEssay17] = useLocalStorageState("frenchEssay17", "")
  const [frenchEssay18, setfrenchEssay18] = useLocalStorageState("frenchEssay18", "")
  const [frenchEssay19, setfrenchEssay19] = useLocalStorageState("frenchEssay19", "")
  const [frenchEssay20, setfrenchEssay20] = useLocalStorageState("frenchEssay20", "")
  const [frenchEssay21, setfrenchEssay21] = useLocalStorageState("frenchEssay21", "")
  const [frenchEssay22, setfrenchEssay22] = useLocalStorageState("frenchEssay22", "")
  const [frenchEssay23, setfrenchEssay23] = useLocalStorageState("frenchEssay23", "")
  const [frenchEssay24, setfrenchEssay24] = useLocalStorageState("frenchEssay24", "")
  const [frenchEssay25, setfrenchEssay25] = useLocalStorageState("frenchEssay25", "")
  const [frenchEssay26, setfrenchEssay26] = useLocalStorageState("frenchEssay26", "")
  const [frenchEssay27, setfrenchEssay27] = useLocalStorageState("frenchEssay27", "")
  const [frenchEssay28, setfrenchEssay28] = useLocalStorageState("frenchEssay28", "")
  const [frenchEssay29, setfrenchEssay29] = useLocalStorageState("frenchEssay29", "")
  const [frenchEssay30, setfrenchEssay30] = useLocalStorageState("frenchEssay30", "")
  const [frenchEssay31, setfrenchEssay31] = useLocalStorageState("frenchEssay31", "")
  const [frenchEssay32, setfrenchEssay32] = useLocalStorageState("frenchEssay32", "")
  const [frenchEssay33, setfrenchEssay33] = useLocalStorageState("frenchEssay33", "")
  const [frenchEssay34, setfrenchEssay34] = useLocalStorageState("frenchEssay34", "")
  const [frenchEssay35, setfrenchEssay35] = useLocalStorageState("frenchEssay35", "")
  const [frenchEssay36, setfrenchEssay36] = useLocalStorageState("frenchEssay36", "")
  const [frenchEssay37, setfrenchEssay37] = useLocalStorageState("frenchEssay37", "")
  const [frenchEssay38, setfrenchEssay38] = useLocalStorageState("frenchEssay38", "")
  const [frenchEssay39, setfrenchEssay39] = useLocalStorageState("frenchEssay39", "")
  const [frenchEssay40, setfrenchEssay40] = useLocalStorageState("frenchEssay40", "")
  const [frenchEssay41, setfrenchEssay41] = useLocalStorageState("frenchEssay41", "")
  const [frenchEssay42, setfrenchEssay42] = useLocalStorageState("frenchEssay42", "")
  const [frenchEssay43, setfrenchEssay43] = useLocalStorageState("frenchEssay43", "")
  const [frenchEssay44, setfrenchEssay44] = useLocalStorageState("frenchEssay44", "")
  const [frenchEssay45, setfrenchEssay45] = useLocalStorageState("frenchEssay45", "")
  const [frenchEssay46, setfrenchEssay46] = useLocalStorageState("frenchEssay46", "")
  const [frenchEssay47, setfrenchEssay47] = useLocalStorageState("frenchEssay47", "")
  const [frenchEssay48, setfrenchEssay48] = useLocalStorageState("frenchEssay48", "")
  const [frenchEssay49, setfrenchEssay49] = useLocalStorageState("frenchEssay49", "")
  const [frenchEssay50, setfrenchEssay50] = useLocalStorageState("frenchEssay50", "")
  const [frenchEssay51, setfrenchEssay51] = useLocalStorageState("frenchEssay52", "")
  const [frenchEssay52, setfrenchEssay52] = useLocalStorageState("frenchEssay53", "")
  const [frenchEssay53, setfrenchEssay53] = useLocalStorageState("frenchEssay54", "")
  const [frenchEssay54, setfrenchEssay54] = useLocalStorageState("frenchEssay54", "")
  const [frenchEssay55, setfrenchEssay55] = useLocalStorageState("frenchEssay5", "")
  const [frenchEssay56, setfrenchEssay56] = useLocalStorageState("frenchEssay56", "")
  const [frenchEssay57, setfrenchEssay57] = useLocalStorageState("frenchEssay57", "")
  const [frenchEssay58, setfrenchEssay58] = useLocalStorageState("frenchEssay58", "")
  const [frenchEssay59, setfrenchEssay59] = useLocalStorageState("frenchEssay59", "")
  const [frenchEssay60, setfrenchEssay60] = useLocalStorageState("frenchEssay60", "")
  const [frenchEssay61, setfrenchEssay61] = useLocalStorageState("frenchEssay61", "")
  const [frenchEssay62, setfrenchEssay62] = useLocalStorageState("frenchEssay62", "")
  const [frenchEssay63, setfrenchEssay63] = useLocalStorageState("frenchEssay63", "")
  const [frenchEssay64, setfrenchEssay64] = useLocalStorageState("frenchEssay64", "")
  const [frenchEssay65, setfrenchEssay65] = useLocalStorageState("frenchEssay65", "")
  const [frenchEssay66, setfrenchEssay66] = useLocalStorageState("frenchEssay66", "")
  const [frenchEssay67, setfrenchEssay67] = useLocalStorageState("frenchEssay67", "")
  const [frenchEssay68, setfrenchEssay68] = useLocalStorageState("frenchEssay68", "")
  const [frenchEssay69, setfrenchEssay69] = useLocalStorageState("frenchEssay69", "")
  const [frenchEssay70, setfrenchEssay70] = useLocalStorageState("frenchEssay70", "")
  const [frenchEssay71, setfrenchEssay71] = useLocalStorageState("frenchEssay71", "")
  const [frenchEssay72, setfrenchEssay72] = useLocalStorageState("frenchEssay72", "")
  const [frenchEssay73, setfrenchEssay73] = useLocalStorageState("frenchEssay73", "")
  const [frenchEssay74, setfrenchEssay74] = useLocalStorageState("frenchEssay74", "")
  const [frenchEssay75, setfrenchEssay75] = useLocalStorageState("frenchEssay75", "")
  const [frenchEssay76, setfrenchEssay76] = useLocalStorageState("frenchEssay76", "")
  const [frenchEssay77, setfrenchEssay77] = useLocalStorageState("frenchEssay77", "")
  const [frenchEssay78, setfrenchEssay78] = useLocalStorageState("frenchEssay78", "")
  const [frenchEssay79, setfrenchEssay79] = useLocalStorageState("frenchEssay79", "")
  const [frenchEssay80, setfrenchEssay80] = useLocalStorageState("frenchEssay80", "")
  const [frenchEssay81, setfrenchEssay81] = useLocalStorageState("frenchEssay81", "")
  const [frenchEssay82, setfrenchEssay82] = useLocalStorageState("frenchEssay82", "")
  const [frenchEssay83, setfrenchEssay83] = useLocalStorageState("frenchEssay83", "")
  const [frenchEssay84, setfrenchEssay84] = useLocalStorageState("frenchEssay84", "")
  const [frenchEssay85, setfrenchEssay85] = useLocalStorageState("frenchEssay85", "")
  const [frenchEssay86, setfrenchEssay86] = useLocalStorageState("frenchEssay86", "")
  const [frenchEssay87, setfrenchEssay87] = useLocalStorageState("frenchEssay87", "")
  const [frenchEssay88, setfrenchEssay88] = useLocalStorageState("frenchEssay88", "")
  const [frenchEssay89, setfrenchEssay89] = useLocalStorageState("frenchEssay89", "")
  const [frenchEssay90, setfrenchEssay90] = useLocalStorageState("frenchEssay90", "")
  const [frenchEssay91, setfrenchEssay91] = useLocalStorageState("frenchEssay91", "")
  const [frenchEssay92, setfrenchEssay92] = useLocalStorageState("frenchEssay93", "")
  const [frenchEssay93, setfrenchEssay93] = useLocalStorageState("frenchEssay94", "")
  const [frenchEssay94, setfrenchEssay94] = useLocalStorageState("frenchEssay95", "")
  const [frenchEssay95, setfrenchEssay95] = useLocalStorageState("frenchEssay96", "")
  const [frenchEssay96, setfrenchEssay96] = useLocalStorageState("frenchEssay97", "")
  const [frenchEssay97, setfrenchEssay97] = useLocalStorageState("frenchEssay98", "")
  const [frenchEssay98, setfrenchEssay98] = useLocalStorageState("frenchEssay98", "")
  const [frenchEssay99, setfrenchEssay99] = useLocalStorageState("frenchEssay99", "")
  const [frenchEssay100, setfrenchEssay100] = useLocalStorageState("frenchEssay100", "")
  const [frenchEssay101, setfrenchEssay101] = useLocalStorageState("frenchEssay101", "")
  const [frenchEssay102, setfrenchEssay102] = useLocalStorageState("frenchEssay102", "")
  const [frenchEssay103, setfrenchEssay103] = useLocalStorageState("frenchEssay103", "")
  const [frenchEssay104, setfrenchEssay104] = useLocalStorageState("frenchEssay104", "")
  const [frenchEssay105, setfrenchEssay105] = useLocalStorageState("frenchEssay105", "")
  const [frenchEssay106, setfrenchEssay106] = useLocalStorageState("frenchEssay106", "")
  const [frenchEssay107, setfrenchEssay107] = useLocalStorageState("frenchEssay107", "")
  const [frenchEssay108, setfrenchEssay108] = useLocalStorageState("frenchEssay108", "")
  const [frenchEssay109, setfrenchEssay109] = useLocalStorageState("frenchEssay109", "")
  const [frenchEssay110, setfrenchEssay110] = useLocalStorageState("frenchEssay110", "")
  const [frenchEssay111, setfrenchEssay111] = useLocalStorageState("frenchEssay111", "")
  const [frenchEssay112, setfrenchEssay112] = useLocalStorageState("frenchEssay112", "")
  const [frenchEssay113, setfrenchEssay113] = useLocalStorageState("frenchEssay113", "")
  const [frenchEssay114, setfrenchEssay114] = useLocalStorageState("frenchEssay114", "")
  const [frenchEssay115, setfrenchEssay115] = useLocalStorageState("frenchEssay115", "")
  const [frenchEssay116, setfrenchEssay116] = useLocalStorageState("frenchEssay116", "")
  const [frenchEssay117, setfrenchEssay117] = useLocalStorageState("frenchEssay117", "")
  const [frenchEssay118, setfrenchEssay118] = useLocalStorageState("frenchEssay118", "")
  const [frenchEssay119, setfrenchEssay119] = useLocalStorageState("frenchEssay119", "")
  const [frenchEssay120, setfrenchEssay120] = useLocalStorageState("frenchEssay120", "")
  const [frenchEssay121, setfrenchEssay121] = useLocalStorageState("frenchEssay121", "")
  const [frenchEssay122, setfrenchEssay122] = useLocalStorageState("frenchEssay122", "")
  const [frenchEssay123, setfrenchEssay123] = useLocalStorageState("frenchEssay123", "")
  const [frenchEssay124, setfrenchEssay124] = useLocalStorageState("frenchEssay124", "")
  const [frenchEssay125, setfrenchEssay125] = useLocalStorageState("frenchEssay125", "")
  const [frenchEssay126, setfrenchEssay126] = useLocalStorageState("frenchEssay126", "")
  const [frenchEssay127, setfrenchEssay127] = useLocalStorageState("frenchEssay127", "")
  const [frenchEssay128, setfrenchEssay128] = useLocalStorageState("frenchEssay128", "")
  const [frenchEssay129, setfrenchEssay129] = useLocalStorageState("frenchEssay129", "")
  const [frenchEssay130, setfrenchEssay130] = useLocalStorageState("frenchEssay130", "")
  const [frenchEssay131, setfrenchEssay131] = useLocalStorageState("frenchEssay131", "")
  const [frenchEssay132, setfrenchEssay132] = useLocalStorageState("frenchEssay132", "")
  const [frenchEssay133, setfrenchEssay133] = useLocalStorageState("frenchEssay133", "")
  const [frenchEssay134, setfrenchEssay134] = useLocalStorageState("frenchEssay134", "")
  const [frenchEssay135, setfrenchEssay135] = useLocalStorageState("frenchEssay135", "")
  const [frenchEssay136, setfrenchEssay136] = useLocalStorageState("frenchEssay136", "")
  const [frenchEssay137, setfrenchEssay137] = useLocalStorageState("frenchEssay137", "")
  const [frenchEssay138, setfrenchEssay138] = useLocalStorageState("frenchEssay138", "")
  const [frenchEssay139, setfrenchEssay139] = useLocalStorageState("frenchEssay139", "")
  const [frenchEssay140, setfrenchEssay140] = useLocalStorageState("frenchEssay140", "")
  const [frenchEssay141, setfrenchEssay141] = useLocalStorageState("frenchEssay141", "")
  const [frenchEssay142, setfrenchEssay142] = useLocalStorageState("frenchEssay142", "")
  const [frenchEssay143, setfrenchEssay143] = useLocalStorageState("frenchEssay143", "")
  const [frenchEssay144, setfrenchEssay144] = useLocalStorageState("frenchEssay144", "")
  const [frenchEssay145, setfrenchEssay145] = useLocalStorageState("frenchEssay145", "")
  const [frenchEssay146, setfrenchEssay146] = useLocalStorageState("frenchEssay146", "")
  const [frenchEssay147, setfrenchEssay147] = useLocalStorageState("frenchEssay147", "")
  const [frenchEssay148, setfrenchEssay148] = useLocalStorageState("frenchEssay148", "")
  const [frenchEssay149, setfrenchEssay149] = useLocalStorageState("frenchEssay149", "")
  const [frenchEssay150, setfrenchEssay150] = useLocalStorageState("frenchEssay150", "")
  const [frenchEssay151, setfrenchEssay151] = useLocalStorageState("frenchEssay151", "")
  const [frenchEssay152, setfrenchEssay152] = useLocalStorageState("frenchEssay152", "")
  const [frenchEssay153, setfrenchEssay153] = useLocalStorageState("frenchEssay153", "")
  const [frenchEssay154, setfrenchEssay154] = useLocalStorageState("frenchEssay154", "")
  const [frenchEssay155, setfrenchEssay155] = useLocalStorageState("frenchEssay155", "")
  const [frenchEssay156, setfrenchEssay156] = useLocalStorageState("frenchEssay156", "")
  const [frenchEssay157, setfrenchEssay157] = useLocalStorageState("frenchEssay157", "")
  const [frenchEssay158, setfrenchEssay158] = useLocalStorageState("frenchEssay158", "")
  const [frenchEssay159, setfrenchEssay159] = useLocalStorageState("frenchEssay159", "")
  const [frenchEssay160, setfrenchEssay160] = useLocalStorageState("frenchEssay160", "")
  const [frenchEssay161, setfrenchEssay161] = useLocalStorageState("frenchEssay161", "")
  const [frenchEssay162, setfrenchEssay162] = useLocalStorageState("frenchEssay162", "")
  const [frenchEssay163, setfrenchEssay163] = useLocalStorageState("frenchEssay163", "")
  const [frenchEssay164, setfrenchEssay164] = useLocalStorageState("frenchEssay164", "")
  const [frenchEssay165, setfrenchEssay165] = useLocalStorageState("frenchEssay165", "")
  const [frenchEssay166, setfrenchEssay166] = useLocalStorageState("frenchEssay166", "")
  const [frenchEssay167, setfrenchEssay167] = useLocalStorageState("frenchEssay167", "")
  const [frenchEssay168, setfrenchEssay168] = useLocalStorageState("frenchEssay168", "")
  const [frenchEssay169, setfrenchEssay169] = useLocalStorageState("frenchEssay169", "")
  const [frenchEssay170, setfrenchEssay170] = useLocalStorageState("frenchEssay170", "")
  const [frenchEssay171, setfrenchEssay171] = useLocalStorageState("frenchEssay171", "")
  const [frenchEssay172, setfrenchEssay172] = useLocalStorageState("frenchEssay172", "")
  const [frenchEssay173, setfrenchEssay173] = useLocalStorageState("frenchEssay173", "")
  const [frenchEssay174, setfrenchEssay174] = useLocalStorageState("frenchEssay174", "")
  const [frenchEssay175, setfrenchEssay175] = useLocalStorageState("frenchEssay175", "")
  const [frenchEssay176, setfrenchEssay176] = useLocalStorageState("frenchEssay176", "")
  const [frenchEssay177, setfrenchEssay177] = useLocalStorageState("frenchEssay177", "")
  const [frenchEssay178, setfrenchEssay178] = useLocalStorageState("frenchEssay178", "")
  const [frenchEssay179, setfrenchEssay179] = useLocalStorageState("frenchEssay179", "")
  const [frenchEssay180, setfrenchEssay180] = useLocalStorageState("frenchEssay180", "")


  const onChangefrenchListener1 = (event) => {
    setfrenchEssay1(event.target.value)
  }
  const onChangefrenchListener2 = (event) => {
    setfrenchEssay2(event.target.value)
  }
  const onChangefrenchListener3 = (event) => {
    setfrenchEssay3(event.target.value)
  }
  const onChangefrenchListener4 = (event) => {
    setfrenchEssay4(event.target.value)
  }
  const onChangefrenchListener5 = (event) => {
    setfrenchEssay5(event.target.value)
  }
  const onChangefrenchListener6 = (event) => {
    setfrenchEssay6(event.target.value)
  }
  const onChangefrenchListener7 = (event) => {
    setfrenchEssay7(event.target.value)
  }
  const onChangefrenchListener8 = (event) => {
    setfrenchEssay8(event.target.value)
  }
  const onChangefrenchListener9 = (event) => {
    setfrenchEssay9(event.target.value)
  }
  const onChangefrenchListener10 = (event) => {
    setfrenchEssay10(event.target.value)
  }
  const onChangefrenchListener11 = (event) => {
    setfrenchEssay11(event.target.value)
  }
  const onChangefrenchListener12 = (event) => {
    setfrenchEssay12(event.target.value)
  }
  const onChangefrenchListener13 = (event) => {
    setfrenchEssay13(event.target.value)
  }
  const onChangefrenchListener14 = (event) => {
    setfrenchEssay14(event.target.value)
  }
  const onChangefrenchListener15 = (event) => {
    setfrenchEssay15(event.target.value)
  }
  const onChangefrenchListener16 = (event) => {
    setfrenchEssay16(event.target.value)
  }
  const onChangefrenchListener17 = (event) => {
    setfrenchEssay17(event.target.value)
  }
  const onChangefrenchListener18 = (event) => {
    setfrenchEssay18(event.target.value)
  }
  const onChangefrenchListener19 = (event) => {
    setfrenchEssay19(event.target.value)
  }
  const onChangefrenchListener20 = (event) => {
    setfrenchEssay20(event.target.value)
  }
  const onChangefrenchListener21 = (event) => {
    setfrenchEssay21(event.target.value)
  }
  const onChangefrenchListener22 = (event) => {
    setfrenchEssay22(event.target.value)
  }
  const onChangefrenchListener23 = (event) => {
    setfrenchEssay23(event.target.value)
  }
  const onChangefrenchListener24 = (event) => {
    setfrenchEssay24(event.target.value)
  }
  const onChangefrenchListener25 = (event) => {
    setfrenchEssay25(event.target.value)
  }
  const onChangefrenchListener26 = (event) => {
    setfrenchEssay26(event.target.value)
  }
  const onChangefrenchListener27 = (event) => {
    setfrenchEssay27(event.target.value)
  }
  const onChangefrenchListener28 = (event) => {
    setfrenchEssay28(event.target.value)
  }
  const onChangefrenchListener29 = (event) => {
    setfrenchEssay29(event.target.value)
  }
  const onChangefrenchListener30 = (event) => {
    setfrenchEssay30(event.target.value)
  }
  const onChangefrenchListener31 = (event) => {
    setfrenchEssay31(event.target.value)
  }
  const onChangefrenchListener32 = (event) => {
    setfrenchEssay32(event.target.value)
  }
  const onChangefrenchListener33 = (event) => {
    setfrenchEssay33(event.target.value)
  }
  const onChangefrenchListener34 = (event) => {
    setfrenchEssay34(event.target.value)
  }
  const onChangefrenchListener35 = (event) => {
    setfrenchEssay35(event.target.value)
  }
  const onChangefrenchListener36 = (event) => {
    setfrenchEssay36(event.target.value)
  }
  const onChangefrenchListener37 = (event) => {
    setfrenchEssay37(event.target.value)
  }
  const onChangefrenchListener38 = (event) => {
    setfrenchEssay38(event.target.value)
  }
  const onChangefrenchListener39 = (event) => {
    setfrenchEssay39(event.target.value)
  }
  const onChangefrenchListener40 = (event) => {
    setfrenchEssay40(event.target.value)
  }
  const onChangefrenchListener41 = (event) => {
    setfrenchEssay41(event.target.value)
  }
  const onChangefrenchListener42 = (event) => {
    setfrenchEssay42(event.target.value)
  }
  const onChangefrenchListener43 = (event) => {
    setfrenchEssay43(event.target.value)
  }
  const onChangefrenchListener44 = (event) => {
    setfrenchEssay44(event.target.value)
  }
  const onChangefrenchListener45 = (event) => {
    setfrenchEssay45(event.target.value)
  }
  const onChangefrenchListener46 = (event) => {
    setfrenchEssay46(event.target.value)
  }
  const onChangefrenchListener47 = (event) => {
    setfrenchEssay47(event.target.value)
  }
  const onChangefrenchListener48 = (event) => {
    setfrenchEssay48(event.target.value)
  }
  const onChangefrenchListener49 = (event) => {
    setfrenchEssay49(event.target.value)
  }
  const onChangefrenchListener50 = (event) => {
    setfrenchEssay50(event.target.value)
  }
  const onChangefrenchListener51 = (event) => {
    setfrenchEssay51(event.target.value)
  }
  const onChangefrenchListener52 = (event) => {
    setfrenchEssay52(event.target.value)
  }
  const onChangefrenchListener53 = (event) => {
    setfrenchEssay53(event.target.value)
  }
  const onChangefrenchListener54 = (event) => {
    setfrenchEssay54(event.target.value)
  }
  const onChangefrenchListener55 = (event) => {
    setfrenchEssay55(event.target.value)
  }
  const onChangefrenchListener56 = (event) => {
    setfrenchEssay56(event.target.value)
  }
  const onChangefrenchListener57 = (event) => {
    setfrenchEssay57(event.target.value)
  }
  const onChangefrenchListener58 = (event) => {
    setfrenchEssay58(event.target.value)
  }
  const onChangefrenchListener59 = (event) => {
    setfrenchEssay59(event.target.value)
  }
  const onChangefrenchListener60 = (event) => {
    setfrenchEssay60(event.target.value)
  }
  const onChangefrenchListener61 = (event) => {
    setfrenchEssay61(event.target.value)
  }
  const onChangefrenchListener62 = (event) => {
    setfrenchEssay62(event.target.value)
  }
  const onChangefrenchListener63 = (event) => {
    setfrenchEssay63(event.target.value)
  }
  const onChangefrenchListener64 = (event) => {
    setfrenchEssay64(event.target.value)
  }
  const onChangefrenchListener65 = (event) => {
    setfrenchEssay65(event.target.value)
  }
  const onChangefrenchListener66 = (event) => {
    setfrenchEssay66(event.target.value)
  }
  const onChangefrenchListener67 = (event) => {
    setfrenchEssay67(event.target.value)
  }
  const onChangefrenchListener68 = (event) => {
    setfrenchEssay68(event.target.value)
  }
  const onChangefrenchListener69 = (event) => {
    setfrenchEssay69(event.target.value)
  }
  const onChangefrenchListener70 = (event) => {
    setfrenchEssay70(event.target.value)
  }
  const onChangefrenchListener71 = (event) => {
    setfrenchEssay71(event.target.value)
  }
  const onChangefrenchListener72 = (event) => {
    setfrenchEssay72(event.target.value)
  }
  const onChangefrenchListener73 = (event) => {
    setfrenchEssay73(event.target.value)
  }
  const onChangefrenchListener74 = (event) => {
    setfrenchEssay74(event.target.value)
  }
  const onChangefrenchListener75 = (event) => {
    setfrenchEssay75(event.target.value)
  }
  const onChangefrenchListener76 = (event) => {
    setfrenchEssay76(event.target.value)
  }
  const onChangefrenchListener77 = (event) => {
    setfrenchEssay77(event.target.value)
  }
  const onChangefrenchListener78 = (event) => {
    setfrenchEssay78(event.target.value)
  }
  const onChangefrenchListener79 = (event) => {
    setfrenchEssay79(event.target.value)
  }
  const onChangefrenchListener80 = (event) => {
    setfrenchEssay80(event.target.value)
  }
  const onChangefrenchListener81 = (event) => {
    setfrenchEssay81(event.target.value)
  }
  const onChangefrenchListener82 = (event) => {
    setfrenchEssay82(event.target.value)
  }
  const onChangefrenchListener83 = (event) => {
    setfrenchEssay83(event.target.value)
  }
  const onChangefrenchListener84 = (event) => {
    setfrenchEssay84(event.target.value)
  }
  const onChangefrenchListener85 = (event) => {
    setfrenchEssay85(event.target.value)
  }
  const onChangefrenchListener86 = (event) => {
    setfrenchEssay86(event.target.value)
  }
  const onChangefrenchListener87 = (event) => {
    setfrenchEssay87(event.target.value)
  }
  const onChangefrenchListener88 = (event) => {
    setfrenchEssay88(event.target.value)
  }
  const onChangefrenchListener89 = (event) => {
    setfrenchEssay89(event.target.value)
  }
  const onChangefrenchListener90 = (event) => {
    setfrenchEssay90(event.target.value)
  }
  const onChangefrenchListener91 = (event) => {
    setfrenchEssay91(event.target.value)
  }
  const onChangefrenchListener92 = (event) => {
    setfrenchEssay92(event.target.value)
  }
  const onChangefrenchListener93 = (event) => {
    setfrenchEssay93(event.target.value)
  }
  const onChangefrenchListener94 = (event) => {
    setfrenchEssay94(event.target.value)
  }
  const onChangefrenchListener95 = (event) => {
    setfrenchEssay95(event.target.value)
  }
  const onChangefrenchListener96 = (event) => {
    setfrenchEssay96(event.target.value)
  }
  const onChangefrenchListener97 = (event) => {
    setfrenchEssay97(event.target.value)
  }
  const onChangefrenchListener98 = (event) => {
    setfrenchEssay98(event.target.value)
  }
  const onChangefrenchListener99 = (event) => {
    setfrenchEssay99(event.target.value)
  }
  const onChangefrenchListener100 = (event) => {
    setfrenchEssay100(event.target.value)
  }
  const onChangefrenchListener101 = (event) => {
    setfrenchEssay101(event.target.value)
  }
  const onChangefrenchListener102 = (event) => {
    setfrenchEssay102(event.target.value)
  }
  const onChangefrenchListener103 = (event) => {
    setfrenchEssay103(event.target.value)
  }
  const onChangefrenchListener104 = (event) => {
    setfrenchEssay104(event.target.value)
  }
  const onChangefrenchListener105 = (event) => {
    setfrenchEssay105(event.target.value)
  }
  const onChangefrenchListener106 = (event) => {
    setfrenchEssay106(event.target.value)
  }
  const onChangefrenchListener107 = (event) => {
    setfrenchEssay107(event.target.value)
  }
  const onChangefrenchListener108 = (event) => {
    setfrenchEssay108(event.target.value)
  }
  const onChangefrenchListener109 = (event) => {
    setfrenchEssay109(event.target.value)
  }
  const onChangefrenchListener110 = (event) => {
    setfrenchEssay110(event.target.value)
  }
  const onChangefrenchListener111 = (event) => {
    setfrenchEssay111(event.target.value)
  }
  const onChangefrenchListener112 = (event) => {
    setfrenchEssay112(event.target.value)
  }
  const onChangefrenchListener113 = (event) => {
    setfrenchEssay113(event.target.value)
  }
  const onChangefrenchListener114 = (event) => {
    setfrenchEssay114(event.target.value)
  }
  const onChangefrenchListener115 = (event) => {
    setfrenchEssay115(event.target.value)
  }
  const onChangefrenchListener116 = (event) => {
    setfrenchEssay116(event.target.value)
  }
  const onChangefrenchListener117 = (event) => {
    setfrenchEssay117(event.target.value)
  }
  const onChangefrenchListener118 = (event) => {
    setfrenchEssay118(event.target.value)
  }
  const onChangefrenchListener119 = (event) => {
    setfrenchEssay119(event.target.value)
  }
  const onChangefrenchListener120 = (event) => {
    setfrenchEssay120(event.target.value)
  }
  const onChangefrenchListener121 = (event) => {
    setfrenchEssay121(event.target.value)
  }
  const onChangefrenchListener122 = (event) => {
    setfrenchEssay122(event.target.value)
  }
  const onChangefrenchListener123 = (event) => {
    setfrenchEssay123(event.target.value)
  }
  const onChangefrenchListener124 = (event) => {
    setfrenchEssay124(event.target.value)
  }
  const onChangefrenchListener125 = (event) => {
    setfrenchEssay125(event.target.value)
  }
  const onChangefrenchListener126 = (event) => {
    setfrenchEssay126(event.target.value)
  }
  const onChangefrenchListener127 = (event) => {
    setfrenchEssay127(event.target.value)
  }
  const onChangefrenchListener128 = (event) => {
    setfrenchEssay128(event.target.value)
  }
  const onChangefrenchListener129 = (event) => {
    setfrenchEssay129(event.target.value)
  }
  const onChangefrenchListener130 = (event) => {
    setfrenchEssay130(event.target.value)
  }
  const onChangefrenchListener131 = (event) => {
    setfrenchEssay131(event.target.value)
  }
  const onChangefrenchListener132 = (event) => {
    setfrenchEssay132(event.target.value)
  }
  const onChangefrenchListener133 = (event) => {
    setfrenchEssay133(event.target.value)
  }
  const onChangefrenchListener134 = (event) => {
    setfrenchEssay134(event.target.value)
  }
  const onChangefrenchListener135 = (event) => {
    setfrenchEssay135(event.target.value)
  }
  const onChangefrenchListener136 = (event) => {
    setfrenchEssay136(event.target.value)
  }
  const onChangefrenchListener137 = (event) => {
    setfrenchEssay137(event.target.value)
  }
  const onChangefrenchListener138 = (event) => {
    setfrenchEssay138(event.target.value)
  }
  const onChangefrenchListener139 = (event) => {
    setfrenchEssay139(event.target.value)
  }
  const onChangefrenchListener140 = (event) => {
    setfrenchEssay140(event.target.value)
  }
  const onChangefrenchListener141 = (event) => {
    setfrenchEssay141(event.target.value)
  }
  const onChangefrenchListener142 = (event) => {
    setfrenchEssay142(event.target.value)
  }
  const onChangefrenchListener143 = (event) => {
    setfrenchEssay143(event.target.value)
  }
  const onChangefrenchListener144 = (event) => {
    setfrenchEssay144(event.target.value)
  }
  const onChangefrenchListener145 = (event) => {
    setfrenchEssay145(event.target.value)
  }
  const onChangefrenchListener146 = (event) => {
    setfrenchEssay146(event.target.value)
  }
  const onChangefrenchListener147 = (event) => {
    setfrenchEssay147(event.target.value)
  }
  const onChangefrenchListener148 = (event) => {
    setfrenchEssay148(event.target.value)
  }
  const onChangefrenchListener149 = (event) => {
    setfrenchEssay149(event.target.value)
  }
  const onChangefrenchListener150 = (event) => {
    setfrenchEssay150(event.target.value)
  }
  const onChangefrenchListener151 = (event) => {
    setfrenchEssay151(event.target.value)
  }
  const onChangefrenchListener152 = (event) => {
    setfrenchEssay152(event.target.value)
  }
  const onChangefrenchListener153 = (event) => {
    setfrenchEssay153(event.target.value)
  }
  const onChangefrenchListener154 = (event) => {
    setfrenchEssay154(event.target.value)
  }
  const onChangefrenchListener155 = (event) => {
    setfrenchEssay155(event.target.value)
  }
  const onChangefrenchListener156 = (event) => {
    setfrenchEssay156(event.target.value)
  }
  const onChangefrenchListener157 = (event) => {
    setfrenchEssay157(event.target.value)
  }
  const onChangefrenchListener158 = (event) => {
    setfrenchEssay158(event.target.value)
  }
  const onChangefrenchListener159 = (event) => {
    setfrenchEssay159(event.target.value)
  }
  const onChangefrenchListener160 = (event) => {
    setfrenchEssay160(event.target.value)
  }
  const onChangefrenchListener161 = (event) => {
    setfrenchEssay161(event.target.value)
  }
  const onChangefrenchListener162 = (event) => {
    setfrenchEssay162(event.target.value)
  }
  const onChangefrenchListener163 = (event) => {
    setfrenchEssay163(event.target.value)
  }
  const onChangefrenchListener164 = (event) => {
    setfrenchEssay164(event.target.value)
  }
  const onChangefrenchListener165 = (event) => {
    setfrenchEssay165(event.target.value)
  }
  const onChangefrenchListener166 = (event) => {
    setfrenchEssay166(event.target.value)
  }
  const onChangefrenchListener167 = (event) => {
    setfrenchEssay167(event.target.value)
  }
  const onChangefrenchListener168 = (event) => {
    setfrenchEssay168(event.target.value)
  }
  const onChangefrenchListener169 = (event) => {
    setfrenchEssay169(event.target.value)
  }
  const onChangefrenchListener170 = (event) => {
    setfrenchEssay170(event.target.value)
  }
  const onChangefrenchListener171 = (event) => {
    setfrenchEssay171(event.target.value)
  }
  const onChangefrenchListener172 = (event) => {
    setfrenchEssay172(event.target.value)
  }
  const onChangefrenchListener173 = (event) => {
    setfrenchEssay173(event.target.value)
  }
  const onChangefrenchListener174 = (event) => {
    setfrenchEssay174(event.target.value)
  }
  const onChangefrenchListener175 = (event) => {
    setfrenchEssay175(event.target.value)
  }
  const onChangefrenchListener176 = (event) => {
    setfrenchEssay176(event.target.value)
  }
  const onChangefrenchListener177 = (event) => {
    setfrenchEssay177(event.target.value)
  }
  const onChangefrenchListener178 = (event) => {
    setfrenchEssay178(event.target.value)
  }
  const onChangefrenchListener179 = (event) => {
    setfrenchEssay179(event.target.value)
  }
  const onChangefrenchListener180 = (event) => {
    setfrenchEssay180(event.target.value)
  }

  return (

    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{ animationDuration: "4s", backgroundColor: '#74bce0', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="circle two" style={{ animationDuration: "4s", backgroundColor: '#74bce0', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero">
          <h1 className="hero intro in-left">French</h1>
          <div className="hero info-block info-block-line in-left" style={{ marginBottom: "4em" }}>
            <Link to="/sixth" className='gradeLink'><h2 className="hero in-left">Daily Lessons</h2></Link>
          </div>
        </div>
      </section>
      
      <section className="section raise-top">
        <div className="section-content">
          <span className="days">LESSON 1 </span>
          <p className="topBottom">When you watch the videos, take notes. A part of every assignment will be to write
            new words and phrases you learned. After you watch the videos, answer the questions below. </p>
          <p className="margin-para"> If you don’t already have an account with <a href="https://www.duolingo.com/"
                                                                                   rel="noreferrer"
                                                                                   target="_blank"> Duolingo, set one up
            here. </a> Or you can log in with a Google or Facebook account. Duolingo has free lessons and does not
            require a paid subscription. After you log in, <strong>complete the first lesson in Duolingo</strong>. If
            you already know some French, you can take the placement test before you get started.</p>



          <h4>QUESTIONS</h4>
          <ol className="vocab">
          </ol>
          <textarea className="textArea" placeholder="Write your answers here. You can copy/paste the questions into this textbox to avoid scrolling up.
          Back up your work or email it to your teacher/parent." onChange={onChangefrenchListener1} value={frenchEssay1}/>

          <span className="days">LESSON 2 </span>
          <p className="topBottom">After you watch the videos, answer the questions below. Then go to Duolingo and
            complete the next lesson.</p>

          <h4>QUESTIONS</h4>
          <ol className="vocab">
          </ol>
          <textarea className="textArea" onChange={onChangefrenchListener2} value={frenchEssay2}/>

          <span className="days">LESSON 3 </span>




          <textarea className="textArea" onChange={onChangefrenchListener3} value={frenchEssay3}/>

          <span className="days">LESSON 4 </span>




          <textarea className="textArea" onChange={onChangefrenchListener4} value={frenchEssay4}/>

          <span className="days">LESSON 5 </span>




          <textarea className="textArea" onChange={onChangefrenchListener5} value={frenchEssay5}/>

          <span className="days">LESSON 6 </span>





          <textarea className="textArea" onChange={onChangefrenchListener6} value={frenchEssay6}/>

          <span className="days">LESSON 7 </span>




          <textarea className="textArea" onChange={onChangefrenchListener7} value={frenchEssay7}/>

          <span className="days">LESSON 8 </span>




          <textarea className="textArea" onChange={onChangefrenchListener8} value={frenchEssay8}/>

          <span className="days">LESSON 9 </span>



          <textarea className="textArea" onChange={onChangefrenchListener9} value={frenchEssay9}/>

          <span className="days">LESSON 10 </span>



          <textarea className="textArea" onChange={onChangefrenchListener10} value={frenchEssay10}/>

          <span className="days">LESSON 11 </span>



          <textarea className="textArea" onChange={onChangefrenchListener11} value={frenchEssay11}/>

          <span className="days">LESSON 12 </span>



          <textarea className="textArea" onChange={onChangefrenchListener12} value={frenchEssay12}/>

          <span className="days">LESSON 13 </span>



          <textarea className="textArea" onChange={onChangefrenchListener13} value={frenchEssay13}/>

          <span className="days">LESSON 14 </span>





          <textarea className="textArea" onChange={onChangefrenchListener14} value={frenchEssay14}/>

          <span className="days">LESSON 15 </span>


          <textarea className="textArea" onChange={onChangefrenchListener15} value={frenchEssay15}/>

          <span className="days">LESSON 16 </span>



          <textarea className="textArea" onChange={onChangefrenchListener16} value={frenchEssay16}/>

          <span className="days">LESSON 17 </span>


          <textarea className="textArea" onChange={onChangefrenchListener17} value={frenchEssay17}/>


          <span className="days">LESSON 18 </span>


          <textarea className="textArea" onChange={onChangefrenchListener18} value={frenchEssay18}/>

          <span className="days">LESSON 19 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener19} value={frenchEssay19}/>


          <span className=" days">LESSON 20 </span>



          <textarea className=" textArea" onChange={onChangefrenchListener20} value={frenchEssay20}/>

          <span className=" days">LESSON 21 </span>


          <textarea className="textArea" onChange={onChangefrenchListener21} value={frenchEssay21}/>

          <span className="days">LESSON 22 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener22} value={frenchEssay22}/>

          <span className=" days">LESSON 23 </span>
          <p className="topBottom"> Words - 100 Most Common Words Translated - Covering 50% of Spoken Conversation! </p>


          <textarea className="textArea" onChange={onChangefrenchListener23} value={frenchEssay23}/>

          <span className="days">LESSON 24 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener24} value={frenchEssay24}/>

          <span className=" days">LESSON 25 </span>



          <textarea className="textArea" onChange={onChangefrenchListener25} value={frenchEssay25}/>

          <span className="days">LESSON 26 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener26} value={frenchEssay26}/>

          <span className=" days">LESSON 27 </span>



          <textarea className="textArea" onChange={onChangefrenchListener27} value={frenchEssay27}/>

          <span className="days">LESSON 28 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener28} value={frenchEssay28}/>

          <span className=" days">LESSON 29 </span>


          <textarea className="textArea" onChange={onChangefrenchListener29} value={frenchEssay29}/>

          <span className="days">LESSON 30 </span>


          <textarea className=" textArea" onChange={onChangefrenchListener30} value={frenchEssay30}/>

          <span className=" days">LESSON 31 </span>


          <textarea className="textArea" onChange={onChangefrenchListener31} value={frenchEssay31}/>

          <span className="days">LESSON 32 </span>



          <textarea className="textArea" onChange={onChangefrenchListener32} value={frenchEssay32}/>

          <span className="days">LESSON 33 </span>


          <textarea className="textArea" onChange={onChangefrenchListener33} value={frenchEssay33}/>

          <span className="days">LESSON 34 </span>


          <textarea className="textArea" onChange={onChangefrenchListener34} value={frenchEssay34}/>

          <span className="days">LESSON 35 </span>


          <textarea className="textArea" onChange={onChangefrenchListener35} value={frenchEssay35}/>

          <span className="days">LESSON 36 </span>



          <textarea className="textArea" onChange={onChangefrenchListener36} value={frenchEssay36}/>

          <span className="days">LESSON 37 </span>


          <textarea className="textArea" onChange={onChangefrenchListener37} value={frenchEssay37}/>

          <span className="days">LESSON 38 </span>



          <textarea  className="textArea"
                     onChange={onChangefrenchListener38} value={frenchEssay38}/>

          <span className="days">LESSON 39 </span>


          <textarea className="textArea" onChange={onChangefrenchListener39} value={frenchEssay39}/>

          <span className="days">LESSON 40 </span>


          <textarea className="textArea" onChange={onChangefrenchListener40} value={frenchEssay40}/>

          <span className="days">LESSON 41 </span>



          <textarea className="textArea" onChange={onChangefrenchListener41} value={frenchEssay41}/>

          <span className="days">LESSON 42 </span>



          <textarea className="textArea" onChange={onChangefrenchListener42} value={frenchEssay42}/>

          <span className="days">LESSON 43 </span>


          <textarea className="textArea" onChange={onChangefrenchListener43} value={frenchEssay43}/>

          <span className="days">LESSON 44 </span>


          <textarea className="textArea" onChange={onChangefrenchListener45} value={frenchEssay45}/>

          <span className="days">LESSON 46 </span>


          <textarea className="textArea" onChange={onChangefrenchListener46} value={frenchEssay46}/>

          <span className="days">LESSON 47 </span>


          <textarea className="textArea" onChange={onChangefrenchListener47} value={frenchEssay47}/>

          <span className="days">LESSON 48 </span>


          <textarea className="textArea" onChange={onChangefrenchListener48} value={frenchEssay48}/>

          <span className="days">LESSON 49 </span>


          <textarea className="textArea" onChange={onChangefrenchListener49} value={frenchEssay49}/>

          <span className="days">LESSON 50 </span>



          <textarea className="textArea" onChange={onChangefrenchListener50} value={frenchEssay50}/>

          <span className="days">LESSON 51 </span>



          <textarea className="textArea" onChange={onChangefrenchListener51} value={frenchEssay51}/>

          <span className="days">LESSON 52 </span>


          <textarea className="textArea" onChange={onChangefrenchListener52} value={frenchEssay52}/>

          <span className="days">LESSON 53 </span>


          <textarea className="textArea" onChange={onChangefrenchListener53} value={frenchEssay53}/>

          <span className="days">LESSON 54</span>



          <textarea className="textArea" onChange={onChangefrenchListener54} value={frenchEssay54}/>

          <span className="days">LESSON 55 </span>



          <textarea className="textArea" onChange={onChangefrenchListener55} value={frenchEssay55}/>

          <span className="days">LESSON 56 </span>


          <textarea className="textArea" onChange={onChangefrenchListener56} value={frenchEssay56}/>

          <span className="days">LESSON 57 </span>
          <iframe width="693" height="380" src="https://www.youtube.com/embed/3QKtKxaAZ6o?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>

          <textarea className="textArea" onChange={onChangefrenchListener57} value={frenchEssay57}/>

          <span className="days">LESSON 58 </span>
          <iframe width="693" height="380" src="https://www.youtube.com/embed/tEJHoAMKMvQ?list=PLQGxDRfENoxLjuS5SVOsASrAuJfakQQ13"/>

          <textarea className="textArea" onChange={onChangefrenchListener58} value={frenchEssay58}/>

          <span className="days">LESSON 59 </span>


          <textarea className="textArea" onChange={onChangefrenchListener59} value={frenchEssay59}/>

          <span className="days">LESSON 60 </span>


          <textarea className="textArea" onChange={onChangefrenchListener60} value={frenchEssay60}/>

          <span className="days">LESSON 61 </span>


          <textarea className="textArea" onChange={onChangefrenchListener61} value={frenchEssay61}/>

          <span className="days">LESSON 62 </span>


          <textarea className="textArea" onChange={onChangefrenchListener62} value={frenchEssay62}/>

          <span className="days">LESSON 63 </span>


          <textarea className="textArea" onChange={onChangefrenchListener63} value={frenchEssay63}/>

          <span className="days">LESSON 64 </span>


          <textarea className="textArea" onChange={onChangefrenchListener64} value={frenchEssay64}/>

          <span className="days">LESSON 65 </span>


          <textarea className="textArea" onChange={onChangefrenchListener65} value={frenchEssay65}/>

          <span className="days">LESSON 66 </span>


          <textarea className="textArea" onChange={onChangefrenchListener66} value={frenchEssay66}/>

          <span className="days">LESSON 67 </span>


          <textarea className="textArea" onChange={onChangefrenchListener67} value={frenchEssay67}/>

          <span className="days">LESSON 68 </span>


          <textarea className="textArea" onChange={onChangefrenchListener68} value={frenchEssay68}/>

          <span className="days">LESSON 69 </span>


          <textarea className="textArea" onChange={onChangefrenchListener69} value={frenchEssay69}/>

          <span className="days">LESSON 70 </span>


          <textarea className="textArea" onChange={onChangefrenchListener70} value={frenchEssay70}/>

          <span className="days">LESSON 71 </span>


          <textarea className="textArea" onChange={onChangefrenchListener71} value={frenchEssay71}/>

          <span className="days">LESSON 72 </span>


          <textarea className="textArea" onChange={onChangefrenchListener72} value={frenchEssay72}/>

          <span className="days">LESSON 73 </span>


          <textarea className="textArea" onChange={onChangefrenchListener73} value={frenchEssay73}/>

          <span className="days">LESSON 74 </span>


          <textarea className="textArea" onChange={onChangefrenchListener74} value={frenchEssay74}/>

          <span className="days">LESSON 75 </span>


          <textarea className="textArea" onChange={onChangefrenchListener75} value={frenchEssay75}/>

          <span className="days">LESSON 76 </span>


          <textarea className="textArea" onChange={onChangefrenchListener76} value={frenchEssay76}/>

          <span className="days">LESSON 77 </span>


          <textarea className="textArea" onChange={onChangefrenchListener77} value={frenchEssay77}/>

          <span className="days">LESSON 78 </span>


          <textarea className="textArea" onChange={onChangefrenchListener78} value={frenchEssay78}/>

          <span className="days">LESSON 79 </span>


          <textarea className="textArea" onChange={onChangefrenchListener79} value={frenchEssay79}/>

          <span className="days">LESSON 80 </span>


          <textarea className="textArea" onChange={onChangefrenchListener80} value={frenchEssay80}/>

          <span className="days">LESSON 81 </span>


          <textarea className="textArea" onChange={onChangefrenchListener81} value={frenchEssay81}/>

          <span className="days">LESSON 82 </span>


          <textarea className="textArea" onChange={onChangefrenchListener82} value={frenchEssay82}/>

          <span className="days">LESSON 83 </span>


          <textarea className="textArea" onChange={onChangefrenchListener83} value={frenchEssay83}/>

          <span className="days">LESSON 84 </span>


          <textarea className="textArea" onChange={onChangefrenchListener84} value={frenchEssay84}/>

          <span className="days">LESSON 85 </span>


          <textarea className="textArea" onChange={onChangefrenchListener85} value={frenchEssay85}/>

          <span className="days">LESSON 86 </span>


          <textarea className="textArea" onChange={onChangefrenchListener86} value={frenchEssay86}/>

          <span className="days">LESSON 87 </span>


          <textarea className="textArea" onChange={onChangefrenchListener87} value={frenchEssay87}/>

          <span className="days">LESSON 88 </span>


          <textarea className="textArea" onChange={onChangefrenchListener88} value={frenchEssay88}/>

          <span className="days">LESSON 89 </span>


          <textarea className="textArea" onChange={onChangefrenchListener89} value={frenchEssay89}/>

          <span className="days">LESSON 90 </span>


          <textarea className="textArea" onChange={onChangefrenchListener90} value={frenchEssay90}/>

          <span className="days">LESSON 91 </span>



          <textarea className="textArea" onChange={onChangefrenchListener91} value={frenchEssay91}/>

          <span className="days">LESSON 92 </span>


          <textarea className="textArea" onChange={onChangefrenchListener92} value={frenchEssay92}/>

          <span className="days">LESSON 93 </span>


          <textarea className="textArea" onChange={onChangefrenchListener93} value={frenchEssay93}/>

          <span className="days">LESSON 94 </span>


          <textarea className="textArea" onChange={onChangefrenchListener94} value={frenchEssay94}/>

          <span className="days">LESSON 95 </span>


          <textarea className="textArea" onChange={onChangefrenchListener95} value={frenchEssay95}/>

          <span className="days">LESSON 96 </span>


          <textarea className="textArea" onChange={onChangefrenchListener96} value={frenchEssay96}/>

          <span className="days">LESSON 97 </span>


          <textarea className="textArea" onChange={onChangefrenchListener97} value={frenchEssay97}/>

          <span className="days">LESSON 98 </span>


          <textarea className="textArea" onChange={onChangefrenchListener98} value={frenchEssay98}/>

          <span className="days">LESSON 99 </span>


          <textarea className="textArea" onChange={onChangefrenchListener99} value={frenchEssay99}/>

          <span className="days">LESSON 100 </span>


          <textarea className="textArea" onChange={onChangefrenchListener100} value={frenchEssay100}/>

          <span className="days">LESSON 101 </span>


          <textarea className="textArea" onChange={onChangefrenchListener101} value={frenchEssay101}/>

          <span className="days">LESSON 102 </span>



          <textarea className="textArea" onChange={onChangefrenchListener102} value={frenchEssay102}/>

          <span className="days">LESSON 103 </span>


          <textarea className="textArea" onChange={onChangefrenchListener103} value={frenchEssay103}/>

          <span className="days">LESSON 104 </span>

          <textarea className="textArea" onChange={onChangefrenchListener104} value={frenchEssay104}/>

          <span className="days">LESSON 105 </span>


          <textarea className="textArea" onChange={onChangefrenchListener105} value={frenchEssay105}/>

          <span className="days">LESSON 106 </span>

          <textarea className="textArea" onChange={onChangefrenchListener106} value={frenchEssay106}/>

          <span className="days">LESSON 107 </span>

          <textarea className="textArea" onChange={onChangefrenchListener107} value={frenchEssay107}/>

          <span className="days">LESSON 108 </span>

          <textarea className="textArea" onChange={onChangefrenchListener108} value={frenchEssay108}/>



          <span className="days">LESSON 109</span>


          <textarea className="textArea" onChange={onChangefrenchListener109} value={frenchEssay109}/>

          <span className="days">LESSON 110 </span>


          <textarea className="textArea" onChange={onChangefrenchListener110} value={frenchEssay110}/>

          <span className="days">LESSON 111 </span>


          <textarea className="textArea" onChange={onChangefrenchListener111} value={frenchEssay111}/>

          <span className="days">LESSON 112 </span>


          <textarea className="textArea" onChange={onChangefrenchListener112} value={frenchEssay112}/>

          <span className="days">LESSON 113 </span>


          <textarea className="textArea" onChange={onChangefrenchListener113} value={frenchEssay113}/>

          <span className="days">LESSON 114 </span>


          <textarea className="textArea" onChange={onChangefrenchListener114} value={frenchEssay114}/>

          <span className="days">LESSON 115 </span>


          <textarea className="textArea" onChange={onChangefrenchListener115} value={frenchEssay115}/>

          <span className="days">LESSON 116 </span>


          <textarea className="textArea" onChange={onChangefrenchListener116} value={frenchEssay116}/>

          <span className="days">LESSON 117 </span>


          <textarea className="textArea" onChange={onChangefrenchListener117} value={frenchEssay117}/>

          <span className="days">LESSON 118 </span>


          <textarea className="textArea" onChange={onChangefrenchListener118} value={frenchEssay118}/>

          <span className="days">LESSON 119 </span>


          <textarea className="textArea" onChange={onChangefrenchListener119} value={frenchEssay119}/>

          <span className="days">LESSON 120 </span>


          <textarea className="textArea" onChange={onChangefrenchListener120} value={frenchEssay120}/>

          <span className="days">LESSON 121 </span>


          <textarea className="textArea" onChange={onChangefrenchListener121} value={frenchEssay121}/>

          <span className="days">LESSON 122 </span>


          <textarea className="textArea" onChange={onChangefrenchListener122} value={frenchEssay122}/>

          <span className="days">LESSON 123 </span>


          <textarea className="textArea" onChange={onChangefrenchListener123} value={frenchEssay123}/>

          <span className="days">LESSON 124 </span>


          <textarea className="textArea" onChange={onChangefrenchListener124} value={frenchEssay124}/>

          <span className="days">LESSON 125 </span>


          <textarea className="textArea" onChange={onChangefrenchListener125} value={frenchEssay125}/>

          <span className="days">LESSON 126 </span>


          <textarea className="textArea" onChange={onChangefrenchListener126} value={frenchEssay126}/>

          <span className="days">LESSON 127 </span>


          <textarea className="textArea" onChange={onChangefrenchListener127} value={frenchEssay127}/>

          <span className="days">LESSON 128 </span>


          <textarea className="textArea" onChange={onChangefrenchListener128} value={frenchEssay128}/>

          <span className="days">LESSON 129 </span>


          <textarea className="textArea" onChange={onChangefrenchListener129} value={frenchEssay129}/>

          <span className="days">LESSON 130 </span>


          <textarea className="textArea" onChange={onChangefrenchListener130} value={frenchEssay130}/>

          <span className="days">LESSON 131 </span>


          <textarea className="textArea" onChange={onChangefrenchListener131} value={frenchEssay131}/>

          <span className="days">LESSON 132 </span>


          <textarea className="textArea" onChange={onChangefrenchListener132} value={frenchEssay132}/>

          <span className="days">LESSON 133 </span>


          <textarea className="textArea" onChange={onChangefrenchListener133} value={frenchEssay133}/>

          <span className="days">LESSON 134 </span>


          <textarea className="textArea" onChange={onChangefrenchListener134} value={frenchEssay134}/>

          <span className="days">LESSON 135 </span>


          <textarea className="textArea" onChange={onChangefrenchListener135} value={frenchEssay135}/>

          <span className="days">LESSON 136 </span>


          <textarea className="textArea" onChange={onChangefrenchListener136} value={frenchEssay136}/>

          <span className="days">LESSON 137 </span>


          <textarea className="textArea" onChange={onChangefrenchListener137} value={frenchEssay137}/>

          <span className="days">LESSON 138 </span>


          <textarea className="textArea" onChange={onChangefrenchListener138} value={frenchEssay138}/>

          <span className="days">LESSON 139 </span>

          <textarea className="textArea" onChange={onChangefrenchListener139} value={frenchEssay139}/>

          <span className="days">LESSON 140 </span>

          <textarea className="textArea" onChange={onChangefrenchListener140} value={frenchEssay140}/>

          <span className="days">LESSON 141 </span>

          <textarea className="textArea" onChange={onChangefrenchListener141} value={frenchEssay141}/>

          <span className="days">LESSON 142 </span>

          <textarea className="textArea" onChange={onChangefrenchListener142} value={frenchEssay142}/>

          <span className="days">LESSON 143 </span>


          <textarea className="textArea" onChange={onChangefrenchListener143} value={frenchEssay143}/>

          <span className="days">LESSON 144 </span>



          <textarea className="textArea" onChange={onChangefrenchListener144} value={frenchEssay144}/>

          <span className="days">LESSON 145 </span>



          <textarea className="textArea" onChange={onChangefrenchListener145} value={frenchEssay145}/>

          <span className="days">LESSON 146 </span>


          <textarea className="textArea" onChange={onChangefrenchListener146} value={frenchEssay146}/>

          <span className="days">LESSON 147 </span>



          <textarea className="textArea" onChange={onChangefrenchListener147} value={frenchEssay147}/>

          <span className="days">LESSON 148 </span>


          <textarea className="textArea" onChange={onChangefrenchListener148} value={frenchEssay148}/>

          <span className="days">LESSON 149 </span>


          <textarea className="textArea" onChange={onChangefrenchListener149} value={frenchEssay149}/>

          <span className="days">LESSON 150 </span>


          <textarea className="textArea" onChange={onChangefrenchListener150} value={frenchEssay150}/>

          <span className="days">LESSON 151 </span>


          <textarea className="textArea" onChange={onChangefrenchListener151} value={frenchEssay151}/>

          <span className="days">LESSON 152 </span>

          <textarea className="textArea" onChange={onChangefrenchListener152} value={frenchEssay152}/>

          <span className="days">LESSON 153 </span>



          <textarea className="textArea" onChange={onChangefrenchListener153} value={frenchEssay153}/>

          <span className="days">LESSON 154 </span>


          <textarea className="textArea" onChange={onChangefrenchListener154} value={frenchEssay154}/>

          <span className="days">LESSON 155 </span>


          <textarea className="textArea" onChange={onChangefrenchListener155} value={frenchEssay155}/>

          <span className="days">LESSON 156 </span>


          <textarea className="textArea" onChange={onChangefrenchListener156} value={frenchEssay156}/>

          <span className="days">LESSON 157</span>


          <textarea className="textArea" onChange={onChangefrenchListener157} value={frenchEssay157}/>

          <span className="days">LESSON 158 </span>

          <textarea className="textArea" onChange={onChangefrenchListener158} value={frenchEssay158}/>

          <span className="days">LESSON 159 </span>

          <textarea className="textArea" onChange={onChangefrenchListener159} value={frenchEssay159}/>

          <span className="days">LESSON 160 </span>

          <textarea className="textArea" onChange={onChangefrenchListener160} value={frenchEssay160}/>

          <span className="days">LESSON 161 </span>

          <textarea className="textArea" onChange={onChangefrenchListener161} value={frenchEssay161}/>

          <span className="days">LESSON 162 </span>

          <textarea className="textArea" onChange={onChangefrenchListener162} value={frenchEssay162}/>

          <span className="days">LESSON 163 </span>

          <textarea className="textArea" onChange={onChangefrenchListener163} value={frenchEssay163}/>

          <span className="days">LESSON 164 </span>

          <textarea className="textArea" onChange={onChangefrenchListener164} value={frenchEssay164}/>

          <span className="days">LESSON 165 </span>

          <textarea className="textArea" onChange={onChangefrenchListener165} value={frenchEssay165}/>

          <span className="days">LESSON 166 </span>

          <textarea className="textArea" onChange={onChangefrenchListener166} value={frenchEssay166}/>

          <span className="days">LESSON 167 </span>


          <textarea className="textArea" onChange={onChangefrenchListener167} value={frenchEssay167}/>

          <span className="days">LESSON 168 </span>

          <textarea className="textArea" onChange={onChangefrenchListener168} value={frenchEssay168}/>

          <span className="days">LESSON 169 </span>


          <textarea className="textArea" onChange={onChangefrenchListener169} value={frenchEssay169}/>


          <span className="days">LESSON 170</span>


          <textarea className="textArea" onChange={onChangefrenchListener170} value={frenchEssay170}/>

          <span className="days">LESSON 171 </span>


          <textarea className="textArea" onChange={onChangefrenchListener171} value={frenchEssay171}/>

          <span className="days">LESSON 172 </span>



          <textarea className="textArea" onChange={onChangefrenchListener172} value={frenchEssay172}/>

          <span className="days">LESSON 173 </span>


          <textarea className="textArea" onChange={onChangefrenchListener173} value={frenchEssay173}/>

          <span className="days">LESSON 174 </span>

          <textarea className="textArea" onChange={onChangefrenchListener174} value={frenchEssay174}/>

          <span className="days">LESSON 175 </span>



          <textarea className="textArea" onChange={onChangefrenchListener175} value={frenchEssay175}/>

          <span className="days">LESSON 176 </span>


          <textarea className="textArea" onChange={onChangefrenchListener176} value={frenchEssay176}/>

          <span className="days">LESSON 177 </span>


          <textarea className="textArea" onChange={onChangefrenchListener177} value={frenchEssay177}/>

          <span className="days">LESSON 178 </span>


          <textarea className="textArea" onChange={onChangefrenchListener178} value={frenchEssay178}/>

          <span className="days">LESSON 179 </span>


          <textarea className="textArea" onChange={onChangefrenchListener179} value={frenchEssay179}/>

          <span className="days">LESSON 180 </span>


          <textarea className="textArea" onChange={onChangefrenchListener180} value={frenchEssay180}/>
        </div>
      </section>

      < Confetti />
      < h3
        style={{ textAlign: "center", height: "70vh", width: "100vw"}}>  You finished Middle School French! </h3>
    </form>
  )
}

export default FrenchComponent