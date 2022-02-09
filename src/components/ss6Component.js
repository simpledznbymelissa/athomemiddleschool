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

const SS6Component = ({ data }) => {
  const [SS6Essay, setSS6Essay] = useLocalStorageState("SS6Essay", "")
  const [SS6Essay2, setSS6Essay2] = useLocalStorageState("SS6Essay2", "")
  const [SS6Essay3, setSS6Essay3] = useLocalStorageState("SS6Essay3", "")
  const [SS6Essay4, setSS6Essay4] = useLocalStorageState("SS6Essay4", "")
  const [SS6Essay5, setSS6Essay5] = useLocalStorageState("SS6Essay5", "")
  const [SS6Essay6, setSS6Essay6] = useLocalStorageState("SS6Essay6", "")
  const [SS6Essay7, setSS6Essay7] = useLocalStorageState("SS6Essay7", "")
  const [SS6Essay8, setSS6Essay8] = useLocalStorageState("SS6Essay8", "")
  const [SS6Essay9, setSS6Essay9] = useLocalStorageState("SS6Essay9", "")
  const [SS6Essay10, setSS6Essay10] = useLocalStorageState("SS6Essay10", "")
  // const [SS6Essay11, setSS6Essay11] = useLocalStorageState("SS6Essay11", "")
  const [SS6Essay12, setSS6Essay12] = useLocalStorageState("SS6Essay12", "")
  const [SS6Essay13, setSS6Essay13] = useLocalStorageState("SS6Essay13", "")
  const [SS6Essay14, setSS6Essay14] = useLocalStorageState("SS6Essay14", "")
  const [SS6Essay15, setSS6Essay15] = useLocalStorageState("SS6Essay15", "")
  const [SS6Essay16, setSS6Essay16] = useLocalStorageState("SS6Essay16", "")
  const [SS6Essay17, setSS6Essay17] = useLocalStorageState("SS6Essay17", "")
  const [SS6Essay18, setSS6Essay18] = useLocalStorageState("SS6Essay18", "")
  const [SS6Essay19, setSS6Essay19] = useLocalStorageState("SS6Essay19", "")
  const [SS6Essay20, setSS6Essay20] = useLocalStorageState("SS6Essay20", "")
  const [SS6Essay21, setSS6Essay21] = useLocalStorageState("SS6Essay21", "")
  const [SS6Essay22, setSS6Essay22] = useLocalStorageState("SS6Essay22", "")
  const [SS6Essay23, setSS6Essay23] = useLocalStorageState("SS6Essay23", "")
  const [SS6Essay24, setSS6Essay24] = useLocalStorageState("SS6Essay24", "")
  const [SS6Essay25, setSS6Essay25] = useLocalStorageState("SS6Essay25", "")
  const [SS6Essay26, setSS6Essay26] = useLocalStorageState("SS6Essay26", "")
  const [SS6Essay27, setSS6Essay27] = useLocalStorageState("SS6Essay27", "")
  const [SS6Essay28, setSS6Essay28] = useLocalStorageState("SS6Essay28", "")
  const [SS6Essay29, setSS6Essay29] = useLocalStorageState("SS6Essay29", "")
  const [SS6Essay30, setSS6Essay30] = useLocalStorageState("SS6Essay30", "")
  const [SS6Essay31, setSS6Essay31] = useLocalStorageState("SS6Essay31", "")
  const [SS6Essay32, setSS6Essay32] = useLocalStorageState("SS6Essay32", "")
  const [SS6Essay33, setSS6Essay33] = useLocalStorageState("SS6Essay33", "")
  const [SS6Essay34, setSS6Essay34] = useLocalStorageState("SS6Essay34", "")
  const [SS6Essay35, setSS6Essay35] = useLocalStorageState("SS6Essay35", "")
  const [SS6Essay36, setSS6Essay36] = useLocalStorageState("SS6Essay36", "")
  const [SS6Essay37, setSS6Essay37] = useLocalStorageState("SS6Essay37", "")
  const [SS6Essay38, setSS6Essay38] = useLocalStorageState("SS6Essay38", "")
  const [SS6Essay39, setSS6Essay39] = useLocalStorageState("SS6Essay39", "")
  const [SS6Essay40, setSS6Essay40] = useLocalStorageState("SS6Essay40", "")
  const [SS6Essay41, setSS6Essay41] = useLocalStorageState("SS6Essay41", "")
  const [SS6Essay42, setSS6Essay42] = useLocalStorageState("SS6Essay42", "")
  const [SS6Essay43, setSS6Essay43] = useLocalStorageState("SS6Essay43", "")
  const [SS6Essay44, setSS6Essay44] = useLocalStorageState("SS6Essay44", "")
  const [SS6Essay45, setSS6Essay45] = useLocalStorageState("SS6Essay45", "")
  const [SS6Essay46, setSS6Essay46] = useLocalStorageState("SS6Essay46", "")
  const [SS6Essay47, setSS6Essay47] = useLocalStorageState("SS6Essay47", "")
  const [SS6Essay48, setSS6Essay48] = useLocalStorageState("SS6Essay48", "")
  const [SS6Essay49, setSS6Essay49] = useLocalStorageState("SS6Essay49", "")
  const [SS6Essay50, setSS6Essay50] = useLocalStorageState("SS6Essay50", "")
  const [SS6Essay51, setSS6Essay51] = useLocalStorageState("SS6Essay52", "")
  const [SS6Essay52, setSS6Essay52] = useLocalStorageState("SS6Essay53", "")
  const [SS6Essay53, setSS6Essay53] = useLocalStorageState("SS6Essay54", "")
  const [SS6Essay54, setSS6Essay54] = useLocalStorageState("SS6Essay54", "")
  const [SS6Essay55, setSS6Essay55] = useLocalStorageState("SS6Essay5", "")
  const [SS6Essay56, setSS6Essay56] = useLocalStorageState("SS6Essay56", "")
  const [SS6Essay57, setSS6Essay57] = useLocalStorageState("SS6Essay57", "")
  const [SS6Essay58, setSS6Essay58] = useLocalStorageState("SS6Essay58", "")
  const [SS6Essay59, setSS6Essay59] = useLocalStorageState("SS6Essay59", "")
  const [SS6Essay60, setSS6Essay60] = useLocalStorageState("SS6Essay60", "")
  const [SS6Essay61, setSS6Essay61] = useLocalStorageState("SS6Essay61", "")
  const [SS6Essay62, setSS6Essay62] = useLocalStorageState("SS6Essay62", "")
  const [SS6Essay63, setSS6Essay63] = useLocalStorageState("SS6Essay63", "")
  const [SS6Essay64, setSS6Essay64] = useLocalStorageState("SS6Essay64", "")
  const [SS6Essay65, setSS6Essay65] = useLocalStorageState("SS6Essay65", "")
  const [SS6Essay66, setSS6Essay66] = useLocalStorageState("SS6Essay66", "")
  const [SS6Essay67, setSS6Essay67] = useLocalStorageState("SS6Essay67", "")
  const [SS6Essay68, setSS6Essay68] = useLocalStorageState("SS6Essay68", "")
  const [SS6Essay69, setSS6Essay69] = useLocalStorageState("SS6Essay69", "")
  const [SS6Essay70, setSS6Essay70] = useLocalStorageState("SS6Essay70", "")
  const [SS6Essay71, setSS6Essay71] = useLocalStorageState("SS6Essay71", "")
  const [SS6Essay72, setSS6Essay72] = useLocalStorageState("SS6Essay72", "")
  const [SS6Essay73, setSS6Essay73] = useLocalStorageState("SS6Essay73", "")
  const [SS6Essay74, setSS6Essay74] = useLocalStorageState("SS6Essay74", "")
  const [SS6Essay75, setSS6Essay75] = useLocalStorageState("SS6Essay75", "")
  const [SS6Essay76, setSS6Essay76] = useLocalStorageState("SS6Essay76", "")
  const [SS6Essay77, setSS6Essay77] = useLocalStorageState("SS6Essay77", "")
  const [SS6Essay78, setSS6Essay78] = useLocalStorageState("SS6Essay78", "")
  const [SS6Essay79, setSS6Essay79] = useLocalStorageState("SS6Essay79", "")
  const [SS6Essay80, setSS6Essay80] = useLocalStorageState("SS6Essay80", "")
  const [SS6Essay81, setSS6Essay81] = useLocalStorageState("SS6Essay81", "")
  const [SS6Essay82, setSS6Essay82] = useLocalStorageState("SS6Essay82", "")
  const [SS6Essay83, setSS6Essay83] = useLocalStorageState("SS6Essay83", "")
  const [SS6Essay84, setSS6Essay84] = useLocalStorageState("SS6Essay84", "")
  const [SS6Essay85, setSS6Essay85] = useLocalStorageState("SS6Essay85", "")
  const [SS6Essay86, setSS6Essay86] = useLocalStorageState("SS6Essay86", "")
  const [SS6Essay87, setSS6Essay87] = useLocalStorageState("SS6Essay87", "")
  const [SS6Essay88, setSS6Essay88] = useLocalStorageState("SS6Essay88", "")
  const [SS6Essay89, setSS6Essay89] = useLocalStorageState("SS6Essay89", "")
  const [SS6Essay90, setSS6Essay90] = useLocalStorageState("SS6Essay90", "")
  const [SS6Essay91, setSS6Essay91] = useLocalStorageState("SS6Essay91", "")
  const [SS6Essay92, setSS6Essay92] = useLocalStorageState("SS6Essay93", "")
  const [SS6Essay93, setSS6Essay93] = useLocalStorageState("SS6Essay94", "")
  const [SS6Essay94, setSS6Essay94] = useLocalStorageState("SS6Essay95", "")
  const [SS6Essay95, setSS6Essay95] = useLocalStorageState("SS6Essay96", "")
  const [SS6Essay96, setSS6Essay96] = useLocalStorageState("SS6Essay97", "")
  const [SS6Essay97, setSS6Essay97] = useLocalStorageState("SS6Essay98", "")
  const [SS6Essay98, setSS6Essay98] = useLocalStorageState("SS6Essay98", "")
  const [SS6Essay99, setSS6Essay99] = useLocalStorageState("SS6Essay99", "")
  const [SS6Essay100, setSS6Essay100] = useLocalStorageState("SS6Essay100", "")
  const [SS6Essay101, setSS6Essay101] = useLocalStorageState("SS6Essay101", "")
  const [SS6Essay102, setSS6Essay102] = useLocalStorageState("SS6Essay102", "")
  const [SS6Essay103, setSS6Essay103] = useLocalStorageState("SS6Essay103", "")
  const [SS6Essay104, setSS6Essay104] = useLocalStorageState("SS6Essay104", "")
  const [SS6Essay105, setSS6Essay105] = useLocalStorageState("SS6Essay105", "")
  const [SS6Essay106, setSS6Essay106] = useLocalStorageState("SS6Essay106", "")
  const [SS6Essay107, setSS6Essay107] = useLocalStorageState("SS6Essay107", "")
  const [SS6Essay108, setSS6Essay108] = useLocalStorageState("SS6Essay108", "")
  const [SS6Essay109, setSS6Essay109] = useLocalStorageState("SS6Essay109", "")
  const [SS6Essay110, setSS6Essay110] = useLocalStorageState("SS6Essay110", "")
  const [SS6Essay111, setSS6Essay111] = useLocalStorageState("SS6Essay111", "")
  const [SS6Essay112, setSS6Essay112] = useLocalStorageState("SS6Essay112", "")
  const [SS6Essay113, setSS6Essay113] = useLocalStorageState("SS6Essay113", "")
  const [SS6Essay114, setSS6Essay114] = useLocalStorageState("SS6Essay114", "")
  const [SS6Essay115, setSS6Essay115] = useLocalStorageState("SS6Essay115", "")
  const [SS6Essay116, setSS6Essay116] = useLocalStorageState("SS6Essay116", "")
  const [SS6Essay117, setSS6Essay117] = useLocalStorageState("SS6Essay117", "")
  const [SS6Essay118, setSS6Essay118] = useLocalStorageState("SS6Essay118", "")
  const [SS6Essay119, setSS6Essay119] = useLocalStorageState("SS6Essay119", "")
  const [SS6Essay120, setSS6Essay120] = useLocalStorageState("SS6Essay120", "")
  const [SS6Essay121, setSS6Essay121] = useLocalStorageState("SS6Essay121", "")
  const [SS6Essay122, setSS6Essay122] = useLocalStorageState("SS6Essay122", "")
  const [SS6Essay123, setSS6Essay123] = useLocalStorageState("SS6Essay123", "")
  const [SS6Essay124, setSS6Essay124] = useLocalStorageState("SS6Essay124", "")
  const [SS6Essay125, setSS6Essay125] = useLocalStorageState("SS6Essay125", "")
  const [SS6Essay126, setSS6Essay126] = useLocalStorageState("SS6Essay126", "")
  const [SS6Essay127, setSS6Essay127] = useLocalStorageState("SS6Essay127", "")
  const [SS6Essay128, setSS6Essay128] = useLocalStorageState("SS6Essay128", "")
  const [SS6Essay129, setSS6Essay129] = useLocalStorageState("SS6Essay129", "")
  const [SS6Essay130, setSS6Essay130] = useLocalStorageState("SS6Essay130", "")
  // const [SS6Essay131, setSS6Essay131] = useLocalStorageState("SS6Essay131", "")
  const [SS6Essay132, setSS6Essay132] = useLocalStorageState("SS6Essay132", "")
  const [SS6Essay133, setSS6Essay133] = useLocalStorageState("SS6Essay133", "")
  const [SS6Essay134, setSS6Essay134] = useLocalStorageState("SS6Essay134", "")
  const [SS6Essay135, setSS6Essay135] = useLocalStorageState("SS6Essay135", "")
  const [SS6Essay136, setSS6Essay136] = useLocalStorageState("SS6Essay136", "")
  const [SS6Essay137, setSS6Essay137] = useLocalStorageState("SS6Essay137", "")
  const [SS6Essay138, setSS6Essay138] = useLocalStorageState("SS6Essay138", "")
  const [SS6Essay139, setSS6Essay139] = useLocalStorageState("SS6Essay139", "")
  const [SS6Essay140, setSS6Essay140] = useLocalStorageState("SS6Essay140", "")
  const [SS6Essay141, setSS6Essay141] = useLocalStorageState("SS6Essay141", "")
  const [SS6Essay142, setSS6Essay142] = useLocalStorageState("SS6Essay142", "")
  const [SS6Essay143, setSS6Essay143] = useLocalStorageState("SS6Essay143", "")
  const [SS6Essay144, setSS6Essay144] = useLocalStorageState("SS6Essay144", "")
  const [SS6Essay145, setSS6Essay145] = useLocalStorageState("SS6Essay145", "")
  const [SS6Essay146, setSS6Essay146] = useLocalStorageState("SS6Essay146", "")
  const [SS6Essay147, setSS6Essay147] = useLocalStorageState("SS6Essay147", "")
  const [SS6Essay148, setSS6Essay148] = useLocalStorageState("SS6Essay148", "")
  const [SS6Essay149, setSS6Essay149] = useLocalStorageState("SS6Essay149", "")
  const [SS6Essay150, setSS6Essay150] = useLocalStorageState("SS6Essay150", "")
  const [SS6Essay151, setSS6Essay151] = useLocalStorageState("SS6Essay151", "")
  const [SS6Essay152, setSS6Essay152] = useLocalStorageState("SS6Essay152", "")
  const [SS6Essay153, setSS6Essay153] = useLocalStorageState("SS6Essay153", "")
  const [SS6Essay154, setSS6Essay154] = useLocalStorageState("SS6Essay154", "")
  const [SS6Essay155, setSS6Essay155] = useLocalStorageState("SS6Essay155", "")
  const [SS6Essay156, setSS6Essay156] = useLocalStorageState("SS6Essay156", "")
  const [SS6Essay157, setSS6Essay157] = useLocalStorageState("SS6Essay157", "")
  const [SS6Essay158, setSS6Essay158] = useLocalStorageState("SS6Essay158", "")
  const [SS6Essay159, setSS6Essay159] = useLocalStorageState("SS6Essay159", "")
  const [SS6Essay160, setSS6Essay160] = useLocalStorageState("SS6Essay160", "")
  const [SS6Essay161, setSS6Essay161] = useLocalStorageState("SS6Essay161", "")
  const [SS6Essay162, setSS6Essay162] = useLocalStorageState("SS6Essay162", "")
  const [SS6Essay163, setSS6Essay163] = useLocalStorageState("SS6Essay163", "")
  const [SS6Essay164, setSS6Essay164] = useLocalStorageState("SS6Essay164", "")
  const [SS6Essay165, setSS6Essay165] = useLocalStorageState("SS6Essay165", "")
  const [SS6Essay166, setSS6Essay166] = useLocalStorageState("SS6Essay166", "")
  const [SS6Essay167, setSS6Essay167] = useLocalStorageState("SS6Essay167", "")
  const [SS6Essay168, setSS6Essay168] = useLocalStorageState("SS6Essay168", "")
  const [SS6Essay169, setSS6Essay169] = useLocalStorageState("SS6Essay169", "")
  const [SS6Essay170, setSS6Essay170] = useLocalStorageState("SS6Essay170", "")
  const [SS6Essay171, setSS6Essay171] = useLocalStorageState("SS6Essay171", "")
  const [SS6Essay172, setSS6Essay172] = useLocalStorageState("SS6Essay172", "")
  const [SS6Essay173, setSS6Essay173] = useLocalStorageState("SS6Essay173", "")
  const [SS6Essay174, setSS6Essay174] = useLocalStorageState("SS6Essay174", "")
  const [SS6Essay175, setSS6Essay175] = useLocalStorageState("SS6Essay175", "")
  const [SS6Essay176, setSS6Essay176] = useLocalStorageState("SS6Essay176", "")
  const [SS6Essay177, setSS6Essay177] = useLocalStorageState("SS6Essay177", "")
  // const [SS6Essay178, setSS6Essay178] = useLocalStorageState("SS6Essay178", "")
  // const [SS6Essay179, setSS6Essay179] = useLocalStorageState("SS6Essay179", "")
  // const [SS6Essay180, setSS6Essay180] = useLocalStorageState("SS6Essay180", "")

  const onChangeSS6Listener = (event) => {
    setSS6Essay(event.target.value)
  }
  const onChangeSS6Listener2 = (event) => {
    setSS6Essay2(event.target.value)
  }
  const onChangeSS6Listener3 = (event) => {
    setSS6Essay3(event.target.value)
  }
  const onChangeSS6Listener4 = (event) => {
    setSS6Essay4(event.target.value)
  }
  const onChangeSS6Listener5 = (event) => {
    setSS6Essay5(event.target.value)
  }
  const onChangeSS6Listener6 = (event) => {
    setSS6Essay6(event.target.value)
  }
  const onChangeSS6Listener7 = (event) => {
    setSS6Essay7(event.target.value)
  }
  const onChangeSS6Listener8 = (event) => {
    setSS6Essay8(event.target.value)
  }
  const onChangeSS6Listener9 = (event) => {
    setSS6Essay9(event.target.value)
  }
  const onChangeSS6Listener10 = (event) => {
    setSS6Essay10(event.target.value)
  }
  // const onChangeSS6Listener11 = (event) => {
  //   setSS6Essay11(event.target.value)
  // }
  const onChangeSS6Listener12 = (event) => {
    setSS6Essay12(event.target.value)
  }
  const onChangeSS6Listener13 = (event) => {
    setSS6Essay13(event.target.value)
  }
  const onChangeSS6Listener14 = (event) => {
    setSS6Essay14(event.target.value)
  }
  const onChangeSS6Listener15 = (event) => {
    setSS6Essay15(event.target.value)
  }
  const onChangeSS6Listener16 = (event) => {
    setSS6Essay16(event.target.value)
  }
  const onChangeSS6Listener17 = (event) => {
    setSS6Essay17(event.target.value)
  }
  const onChangeSS6Listener18 = (event) => {
    setSS6Essay18(event.target.value)
  }
  const onChangeSS6Listener19 = (event) => {
    setSS6Essay19(event.target.value)
  }
  const onChangeSS6Listener20 = (event) => {
    setSS6Essay20(event.target.value)
  }
  const onChangeSS6Listener21 = (event) => {
    setSS6Essay21(event.target.value)
  }
  const onChangeSS6Listener22 = (event) => {
    setSS6Essay22(event.target.value)
  }
  const onChangeSS6Listener23 = (event) => {
    setSS6Essay23(event.target.value)
  }
  const onChangeSS6Listener24 = (event) => {
    setSS6Essay24(event.target.value)
  }
  const onChangeSS6Listener25 = (event) => {
    setSS6Essay25(event.target.value)
  }
  const onChangeSS6Listener26 = (event) => {
    setSS6Essay26(event.target.value)
  }
  const onChangeSS6Listener27 = (event) => {
    setSS6Essay27(event.target.value)
  }
  const onChangeSS6Listener28 = (event) => {
    setSS6Essay28(event.target.value)
  }
  const onChangeSS6Listener29 = (event) => {
    setSS6Essay29(event.target.value)
  }
  const onChangeSS6Listener30 = (event) => {
    setSS6Essay30(event.target.value)
  }
  const onChangeSS6Listener31 = (event) => {
    setSS6Essay31(event.target.value)
  }
  const onChangeSS6Listener32 = (event) => {
    setSS6Essay32(event.target.value)
  }
  const onChangeSS6Listener33 = (event) => {
    setSS6Essay33(event.target.value)
  }
  const onChangeSS6Listener34 = (event) => {
    setSS6Essay34(event.target.value)
  }
  const onChangeSS6Listener35 = (event) => {
    setSS6Essay35(event.target.value)
  }
  const onChangeSS6Listener36 = (event) => {
    setSS6Essay36(event.target.value)
  }
  const onChangeSS6Listener37 = (event) => {
    setSS6Essay37(event.target.value)
  }
  const onChangeSS6Listener38 = (event) => {
    setSS6Essay38(event.target.value)
  }
  const onChangeSS6Listener39 = (event) => {
    setSS6Essay39(event.target.value)
  }
  const onChangeSS6Listener40 = (event) => {
    setSS6Essay40(event.target.value)
  }
  const onChangeSS6Listener41 = (event) => {
    setSS6Essay41(event.target.value)
  }
  const onChangeSS6Listener42 = (event) => {
    setSS6Essay42(event.target.value)
  }
  const onChangeSS6Listener43 = (event) => {
    setSS6Essay43(event.target.value)
  }
  const onChangeSS6Listener44 = (event) => {
    setSS6Essay44(event.target.value)
  }
  const onChangeSS6Listener45 = (event) => {
    setSS6Essay45(event.target.value)
  }
  const onChangeSS6Listener46 = (event) => {
    setSS6Essay46(event.target.value)
  }
  const onChangeSS6Listener47 = (event) => {
    setSS6Essay47(event.target.value)
  }
  const onChangeSS6Listener48 = (event) => {
    setSS6Essay48(event.target.value)
  }
  const onChangeSS6Listener49 = (event) => {
    setSS6Essay49(event.target.value)
  }
  const onChangeSS6Listener50 = (event) => {
    setSS6Essay50(event.target.value)
  }
  const onChangeSS6Listener51 = (event) => {
    setSS6Essay51(event.target.value)
  }
  const onChangeSS6Listener52 = (event) => {
    setSS6Essay52(event.target.value)
  }
  const onChangeSS6Listener53 = (event) => {
    setSS6Essay53(event.target.value)
  }
  const onChangeSS6Listener54 = (event) => {
    setSS6Essay54(event.target.value)
  }
  const onChangeSS6Listener55 = (event) => {
    setSS6Essay55(event.target.value)
  }
  const onChangeSS6Listener56 = (event) => {
    setSS6Essay56(event.target.value)
  }
  const onChangeSS6Listener57 = (event) => {
    setSS6Essay57(event.target.value)
  }
  const onChangeSS6Listener58 = (event) => {
    setSS6Essay58(event.target.value)
  }
  const onChangeSS6Listener59 = (event) => {
    setSS6Essay59(event.target.value)
  }
  const onChangeSS6Listener60 = (event) => {
    setSS6Essay60(event.target.value)
  }
  const onChangeSS6Listener61 = (event) => {
    setSS6Essay61(event.target.value)
  }
  const onChangeSS6Listener62 = (event) => {
    setSS6Essay62(event.target.value)
  }
  const onChangeSS6Listener63 = (event) => {
    setSS6Essay63(event.target.value)
  }
  const onChangeSS6Listener64 = (event) => {
    setSS6Essay64(event.target.value)
  }
  const onChangeSS6Listener65 = (event) => {
    setSS6Essay65(event.target.value)
  }
  const onChangeSS6Listener66 = (event) => {
    setSS6Essay66(event.target.value)
  }
  const onChangeSS6Listener67 = (event) => {
    setSS6Essay67(event.target.value)
  }
  const onChangeSS6Listener68 = (event) => {
    setSS6Essay68(event.target.value)
  }
  const onChangeSS6Listener69 = (event) => {
    setSS6Essay69(event.target.value)
  }
  const onChangeSS6Listener70 = (event) => {
    setSS6Essay70(event.target.value)
  }
  const onChangeSS6Listener71 = (event) => {
    setSS6Essay71(event.target.value)
  }
  const onChangeSS6Listener72 = (event) => {
    setSS6Essay72(event.target.value)
  }
  const onChangeSS6Listener73 = (event) => {
    setSS6Essay73(event.target.value)
  }
  const onChangeSS6Listener74 = (event) => {
    setSS6Essay74(event.target.value)
  }
  const onChangeSS6Listener75 = (event) => {
    setSS6Essay75(event.target.value)
  }
  const onChangeSS6Listener76 = (event) => {
    setSS6Essay76(event.target.value)
  }
  const onChangeSS6Listener77 = (event) => {
    setSS6Essay77(event.target.value)
  }
  const onChangeSS6Listener78 = (event) => {
    setSS6Essay78(event.target.value)
  }
  const onChangeSS6Listener79 = (event) => {
    setSS6Essay79(event.target.value)
  }
  const onChangeSS6Listener80 = (event) => {
    setSS6Essay80(event.target.value)
  }
  const onChangeSS6Listener81 = (event) => {
    setSS6Essay81(event.target.value)
  }
  const onChangeSS6Listener82 = (event) => {
    setSS6Essay82(event.target.value)
  }
  const onChangeSS6Listener83 = (event) => {
    setSS6Essay83(event.target.value)
  }
  const onChangeSS6Listener84 = (event) => {
    setSS6Essay84(event.target.value)
  }
  const onChangeSS6Listener85 = (event) => {
    setSS6Essay85(event.target.value)
  }
  const onChangeSS6Listener86 = (event) => {
    setSS6Essay86(event.target.value)
  }
  const onChangeSS6Listener87 = (event) => {
    setSS6Essay87(event.target.value)
  }
  const onChangeSS6Listener88 = (event) => {
    setSS6Essay88(event.target.value)
  }
  const onChangeSS6Listener89 = (event) => {
    setSS6Essay89(event.target.value)
  }
  const onChangeSS6Listener90 = (event) => {
    setSS6Essay90(event.target.value)
  }
  const onChangeSS6Listener91 = (event) => {
    setSS6Essay91(event.target.value)
  }
  const onChangeSS6Listener92 = (event) => {
    setSS6Essay92(event.target.value)
  }
  const onChangeSS6Listener93 = (event) => {
    setSS6Essay93(event.target.value)
  }
  const onChangeSS6Listener94 = (event) => {
    setSS6Essay94(event.target.value)
  }
  const onChangeSS6Listener95 = (event) => {
    setSS6Essay95(event.target.value)
  }
  const onChangeSS6Listener96 = (event) => {
    setSS6Essay96(event.target.value)
  }
  const onChangeSS6Listener97 = (event) => {
    setSS6Essay97(event.target.value)
  }
  const onChangeSS6Listener98 = (event) => {
    setSS6Essay98(event.target.value)
  }
  const onChangeSS6Listener99 = (event) => {
    setSS6Essay99(event.target.value)
  }
  const onChangeSS6Listener100 = (event) => {
    setSS6Essay100(event.target.value)
  }
  const onChangeSS6Listener101 = (event) => {
    setSS6Essay101(event.target.value)
  }
  const onChangeSS6Listener102 = (event) => {
    setSS6Essay102(event.target.value)
  }
  const onChangeSS6Listener103 = (event) => {
    setSS6Essay103(event.target.value)
  }
  const onChangeSS6Listener104 = (event) => {
    setSS6Essay104(event.target.value)
  }
  const onChangeSS6Listener105 = (event) => {
    setSS6Essay105(event.target.value)
  }
  const onChangeSS6Listener106 = (event) => {
    setSS6Essay106(event.target.value)
  }
  const onChangeSS6Listener107 = (event) => {
    setSS6Essay107(event.target.value)
  }
  const onChangeSS6Listener108 = (event) => {
    setSS6Essay108(event.target.value)
  }
  const onChangeSS6Listener109 = (event) => {
    setSS6Essay109(event.target.value)
  }
  const onChangeSS6Listener110 = (event) => {
    setSS6Essay110(event.target.value)
  }
  const onChangeSS6Listener111 = (event) => {
    setSS6Essay111(event.target.value)
  }
  const onChangeSS6Listener112 = (event) => {
    setSS6Essay112(event.target.value)
  }
  const onChangeSS6Listener113 = (event) => {
    setSS6Essay113(event.target.value)
  }
  const onChangeSS6Listener114 = (event) => {
    setSS6Essay114(event.target.value)
  }
  const onChangeSS6Listener115 = (event) => {
    setSS6Essay115(event.target.value)
  }
  const onChangeSS6Listener116 = (event) => {
    setSS6Essay116(event.target.value)
  }
  const onChangeSS6Listener117 = (event) => {
    setSS6Essay117(event.target.value)
  }
  const onChangeSS6Listener118 = (event) => {
    setSS6Essay118(event.target.value)
  }
  const onChangeSS6Listener119 = (event) => {
    setSS6Essay119(event.target.value)
  }
  const onChangeSS6Listener120 = (event) => {
    setSS6Essay120(event.target.value)
  }
  const onChangeSS6Listener121 = (event) => {
    setSS6Essay121(event.target.value)
  }
  const onChangeSS6Listener122 = (event) => {
    setSS6Essay122(event.target.value)
  }
  const onChangeSS6Listener123 = (event) => {
    setSS6Essay123(event.target.value)
  }
  const onChangeSS6Listener124 = (event) => {
    setSS6Essay124(event.target.value)
  }
  const onChangeSS6Listener125 = (event) => {
    setSS6Essay125(event.target.value)
  }
  const onChangeSS6Listener126 = (event) => {
    setSS6Essay126(event.target.value)
  }
  const onChangeSS6Listener127 = (event) => {
    setSS6Essay127(event.target.value)
  }
  const onChangeSS6Listener128 = (event) => {
    setSS6Essay128(event.target.value)
  }
  const onChangeSS6Listener129 = (event) => {
    setSS6Essay129(event.target.value)
  }
  const onChangeSS6Listener130 = (event) => {
    setSS6Essay130(event.target.value)
  }
  // const onChangeSS6Listener131 = (event) => {
  //   setSS6Essay131(event.target.value)
  // }
  const onChangeSS6Listener132 = (event) => {
    setSS6Essay132(event.target.value)
  }
  const onChangeSS6Listener133 = (event) => {
    setSS6Essay133(event.target.value)
  }
  const onChangeSS6Listener134 = (event) => {
    setSS6Essay134(event.target.value)
  }
  const onChangeSS6Listener135 = (event) => {
    setSS6Essay135(event.target.value)
  }
  const onChangeSS6Listener136 = (event) => {
    setSS6Essay136(event.target.value)
  }
  const onChangeSS6Listener137 = (event) => {
    setSS6Essay137(event.target.value)
  }
  const onChangeSS6Listener138 = (event) => {
    setSS6Essay138(event.target.value)
  }
  const onChangeSS6Listener139 = (event) => {
    setSS6Essay139(event.target.value)
  }
  const onChangeSS6Listener140 = (event) => {
    setSS6Essay140(event.target.value)
  }
  const onChangeSS6Listener141 = (event) => {
    setSS6Essay141(event.target.value)
  }
  const onChangeSS6Listener142 = (event) => {
    setSS6Essay142(event.target.value)
  }
  const onChangeSS6Listener143 = (event) => {
    setSS6Essay143(event.target.value)
  }
  const onChangeSS6Listener144 = (event) => {
    setSS6Essay144(event.target.value)
  }
  const onChangeSS6Listener145 = (event) => {
    setSS6Essay145(event.target.value)
  }
  const onChangeSS6Listener146 = (event) => {
    setSS6Essay146(event.target.value)
  }
  const onChangeSS6Listener147 = (event) => {
    setSS6Essay147(event.target.value)
  }
  const onChangeSS6Listener148 = (event) => {
    setSS6Essay148(event.target.value)
  }
  const onChangeSS6Listener149 = (event) => {
    setSS6Essay149(event.target.value)
  }
  const onChangeSS6Listener150 = (event) => {
    setSS6Essay150(event.target.value)
  }
  const onChangeSS6Listener151 = (event) => {
    setSS6Essay151(event.target.value)
  }
  const onChangeSS6Listener152 = (event) => {
    setSS6Essay152(event.target.value)
  }
  const onChangeSS6Listener153 = (event) => {
    setSS6Essay153(event.target.value)
  }
  const onChangeSS6Listener154 = (event) => {
    setSS6Essay154(event.target.value)
  }
  const onChangeSS6Listener155 = (event) => {
    setSS6Essay155(event.target.value)
  }
  const onChangeSS6Listener156 = (event) => {
    setSS6Essay156(event.target.value)
  }
  const onChangeSS6Listener157 = (event) => {
    setSS6Essay157(event.target.value)
  }
  const onChangeSS6Listener158 = (event) => {
    setSS6Essay158(event.target.value)
  }
  const onChangeSS6Listener159 = (event) => {
    setSS6Essay159(event.target.value)
  }
  const onChangeSS6Listener160 = (event) => {
    setSS6Essay160(event.target.value)
  }
  const onChangeSS6Listener161 = (event) => {
    setSS6Essay161(event.target.value)
  }
  const onChangeSS6Listener162 = (event) => {
    setSS6Essay162(event.target.value)
  }
  const onChangeSS6Listener163 = (event) => {
    setSS6Essay163(event.target.value)
  }
  const onChangeSS6Listener164 = (event) => {
    setSS6Essay164(event.target.value)
  }
  const onChangeSS6Listener165 = (event) => {
    setSS6Essay165(event.target.value)
  }
  const onChangeSS6Listener166 = (event) => {
    setSS6Essay166(event.target.value)
  }
  const onChangeSS6Listener167 = (event) => {
    setSS6Essay167(event.target.value)
  }
  const onChangeSS6Listener168 = (event) => {
    setSS6Essay168(event.target.value)
  }
  const onChangeSS6Listener169 = (event) => {
    setSS6Essay169(event.target.value)
  }
  const onChangeSS6Listener170 = (event) => {
    setSS6Essay170(event.target.value)
  }
  const onChangeSS6Listener171 = (event) => {
    setSS6Essay171(event.target.value)
  }
  const onChangeSS6Listener172 = (event) => {
    setSS6Essay172(event.target.value)
  }
  const onChangeSS6Listener173 = (event) => {
    setSS6Essay173(event.target.value)
  }
  const onChangeSS6Listener174 = (event) => {
    setSS6Essay174(event.target.value)
  }
  const onChangeSS6Listener175 = (event) => {
    setSS6Essay175(event.target.value)
  }
  const onChangeSS6Listener176 = (event) => {
    setSS6Essay176(event.target.value)
  }
  const onChangeSS6Listener177 = (event) => {
    setSS6Essay177(event.target.value)
  }
  // const onChangeSS6Listener178 = (event) => {
  //   setSS6Essay178(event.target.value)
  // }
  // const onChangeSS6Listener179 = (event) => {
  //   setSS6Essay179(event.target.value)
  // }
  // const onChangeSS6Listener180 = (event) => {
  //   setSS6Essay180(event.target.value)
  // }

  return (
    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "5s",
               backgroundColor: "#64ccbc",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "5s",
          backgroundColor: "#64ccbc",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Social Studies</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/sixth" className='gradeLink'><h2 className="hero">6th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top fadeIn">
        <div className="section-content">
          <h1 className="section-title fadeIn" style={{color: "#35516e"}}>Ancient Civilizations &#38; Geography</h1>
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">6th Grade Social Studies will cover: Map Reading, The Earliest Human Societies, Ancient Mesopotamia, City-States in Mesopotamia,
            Early Empires, Ancient Egypt, Pyramids on the Nile, Kush and Other African Kingdoms, Ancient India, Ancient
            China, Ancient America, The Hebrew Kingdoms, Ancient Greece, Classical Greece, The Rise of Rome, The Birth
            of Christianity, Rome’s Decline and Legacy, Vikings, Middle Ages, Renaissance, Reformation of Christianity,
            the Vikings, and the Geography Europe, the Middle East, North & Central America.
          </p>
          <p>Educational resources used in this course include Crash Course,
            National Geography, the History Channel, TedEd, Google Maps Carmen Santiago, Geography Now! and open source
            history texts.</p>
          <br/>

          <span className="days fadeIn">LESSON 1</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/1.1_the_tools_of_history.pdf")} rel="noreferrer"
                target="_blank">Click here to read Chapter 1.1 The Tools of History</a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. How does the climate where you live affect your life?<br/>
            2. When you think about the cave paintings found in Lascaux, France, what do you think were the
            concerns of prehistoric cultures and how were these concerns expressed in their artwork?<br/>
            3. What might be the result if the climate of a region suddenly became much colder?<br/>
            4. Name three examples of landforms and three examples of bodies of water.<br/>
            4. How do the five themes of geography help geographers?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Write your answers here. Your work will automatically be saved to the Local Storage of your device.
                    -----
                    If you clear your cookies, your answers will be erased! Be sure to back up your work by saving it in another
                    location.
                    -----
                    You can 'Select All' (select your answers inside this textbox by touching/clicking on (ctrl a)) and
                    copy/paste it into Google Docs, a Word Doc or into an email  and send it to your parent or teacher.
                    -----
                    Some devices allow you to 'Select All' and then 'Share' via email or another app.
                    -----
                    You may prefer to copy/paste the questions into this textbox for easier reading by your parent or teacher.
                    -----
                    Be sure to label each assignment with the Subject and Lesson Number."

                    onChange={onChangeSS6Listener} value={SS6Essay}/>

          <span className="days">LESSON 2</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/1.2_the_tools_of_history.pdf")} rel="noreferrer"
                target="_blank">Click here to read <i>Chapter 1.2 The Tools of History</i></a></p>
          <p>Watch the video below: <b>What can you do with geography? </b></p>
          <Video videoUrl="https://www.youtube.com/embed/6Mj8MTWZX4M"/>
          <p>Answer the following questions. The first 3 are based on the reading.<br/>
            1. What do political maps show?<br/>
            2. Why have maps changed throughout history?<br/>
            3. What might be the result if the climate of a region suddenly became much colder?<br/>
            <span style={{ color: "#4f5979" }}>Based on the video:</span><br/>
            4. What did you think was the most interesting thing you learned from the video?<br/>
            5. Which careers in geography seemed the most fascinating?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener2} value={SS6Essay2}/>

          <span className="days">LESSON 3</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/mapping-the-world.pdf")} rel="noreferrer"
                target="_blank">Click here to read <i>Mapping the World</i></a></p>
          <p>Watch the video below: <b>Why All World Maps are Wrong</b></p>

          <Video videoUrl="https://www.youtube.com/embed/kIID5FDi2JQ"/>
          <p>
            1. Why did the Mercator map become so popular? Who did it help the most?<br/>
            2. When you look at a map, what are some problems, inaccuracies or misconceptions with what you see?<br/>
            <span style={{ color: "#4f5979" }}>Based on the video:</span><br/>
            3. Describe how the typical flat, rectangular map is created.<br/>
            4. Why is a book of maps known as an atlas?<br/>
            5. In the 1960's, what revolutionized maps and took them to another level?<br/>
            6. Despite its shortcomings, why might companies such as Google still use the Mercator projection
            map?<br/></p>

          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener3}
                    value={SS6Essay3}/>

          <span className="days">LESSON 4</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/1.3_the_tools_of_history.pdf")} rel="noreferrer"
                target="_blank">Click here to read <i>Chapter 1.3 The Tools of History</i></a></p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. What can archaeologists learn by studying artifacts and fossils?<br/>
            2. What kinds of changes probably encouraged the development of early hominid societies?<br/>
            3. Why is studying early people so hard?<br/>
            4. Does the idea of becoming an archaeologist appeal to you? Why or why not? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener4} value={SS6Essay4}/>

          <span className="days">LESSON 5</span>
          <p>Watch <b>What Happened Before History? Human Origins – In a Nutshell</b></p>
          <Video videoUrl="https://www.youtube.com/embed/dGiQaabX3_o"/>
          <p>After the video, complete the following questions:<br/>
            1. How were humans from 200,000 years ago different than humans of today? If you could go back in
            time and transport a baby with you to today, how would he or she be different?<br/>
            2. Describe what life was like for early humans 20,000 years ago? <br/>
            3. Do you think that humans 20,000 - 50,000 years ago could survive better in the wild than people
            today? Explain.<br/>
            4. What are some of the things we take for granted that they had no access to? (Some examples to get
            you started: grocery stores, doctors, roads.)<br/>
            5. What was the most surprising thing you learned about people during prehistoric times?<br/>
            6. Describe the ways we are superior to our distant ancestors.<br/>
            7. How were our distant ancestors superior to us? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener5} value={SS6Essay5}/>

          <span className="days">LESSON 6</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/1.4_the_tools_of_history.pdf")} rel="noreferrer"
                target="_blank">Click here to read <i>Chapter 1.4 The Tools of History</i></a></p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. How is primary source different from secondary source?<br/>
            2. What are questions historians ask themselves when they study the past?<br/>
            3. What resources do historians rely on when a society doesn't have a written history?<br/>
            4. Write two facts and two opinions about Stonehenge.<br/>
            5. Compare a historian's job with that of an archaeologist.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener6} value={SS6Essay6}/>

          <span className="days">LESSON 7</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/2.1_the_earliest_human_societies.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 2.1 The earliest human societies</i></a></p>
          <p>Watch the video <b>How Humans Migrated Across The Globe</b></p>
          <Video videoUrl="https://www.youtube.com/embed/CJdT6QcSbQ0"/>
          <p>Watch the video <b>Human Prehistory 101 (Part 1 of 3): Out of (Eastern) Africa </b></p>
          <Video videoUrl="https://www.youtube.com/embed/8183HPmA2_I"/>
          <p>Watch the video <b>Human Prehistory 101 (Part 2 of 3): Weathering The Storm </b></p>
          <Video videoUrl="https://www.youtube.com/embed/T9Nw66RCMhg?list=PLRobg9UyQGwGwVhJEUoTYQBOKF2l1YQGW"/>
          <p>After you complete the reading and watch the videos, answer the following questions:<br/>
            1. How did prehistoric people use available natural resources for food, housing, and clothing?<br/>
            2. How did the development of tools change the life of early humans?<br/>
            3. How did early humans use fire?<br/>
            4. Do you believe that the lives of most hunter-gatherers was good or very difficult? Explain.<br/>
            5. What were two interesting things you learned from the videos?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener7} value={SS6Essay7}/>

          <span className="days">LESSON 8</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/2.2_the_earliest_human_societies.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 2.2 The earliest human societies </i></a>
          </p>
          <p>Watch the video <b> Human Prehistory 101 (Part 3 of 3): Agriculture Rocks Our World</b></p>
          <Video videoUrl="https://www.youtube.com/embed/IVHD9wGlbho"/>
          <p>Watch the video <b> Mankind The Story of All of Us: Domesticating the Dog</b></p>
          <Video videoUrl="https://www.youtube.com/embed/mCLQ_8I1paY"/>
          <p>After you complete the reading and watch the videos, answer the following questions:<br/>
            1. Where did farming develop? In what geographical regions in Asia, Africa, and the Americas?<br/>
            2. What crops did early farmers raise in the Americas?<br/>
            3. What farming techniques were part of the agricultural revolution?<br/>
            4. Compare the areas in which farming developed in Asia and Africa with those in which farming
            developed in the Americas.
            How were they different and similar?<br/>
            5. How did the domestication of animals affect people’s lives?<br/>
            6.How did environmental conditions influence the locations of early farms?<br/>
            7. What advantages did humans gain by domesticating wolves?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener8} value={SS6Essay8}/>

          <span className="days">LESSON 9</span>
          <p>Watch the video <b> Mankind: The Story of All of Us: Birth of Farming</b></p>
          <Video videoUrl="https://www.youtube.com/embed/bhzQFIZuNFY"/>
          <p>Watch the video <b> The Agricultural Revolution</b></p>
          <Video videoUrl="https://www.youtube.com/embed/Yocja_N5s1I"/>
          <p>After you complete the reading, answer the following questions:<br/>
            1. Describe how and why farming got started?<br/>
            2. What are the advantages of agriculture/farming?<br/>
            3. What are the disadvantages?<br/>
            4. How did society change with agriculture?<br/>
            5. What was the most surprising thing you learned from the videos?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener9} value={SS6Essay9}/>

          <span className="days">LESSON 10</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/2.3_the_earliest_human_societies.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 2.3 The earliest human societies</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. How did farming villages develop?<br/>
            3. How did life in a complex village compare with that in a simple village?<br/>
            4. How did surpluses affect village life?<br/>
            5. What were some of the advantages of living in a village like Catal Huyuk?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener10} value={SS6Essay10}/>

          <span className="days">LESSON 11</span>
          <p className="margin-para">
            <a
              href="https://earth.google.com/web/@17.90693717,-12.41937117,-34606.55899502a,57359668.97d,35y,0.00004064h,18.19296234t,0r/data=CjwSOhIgYmU3N2ZmYzU0MTc1MTFlOGFlOGZkMzdkYTU5MmE0MmEiFnNwbC14LXgteC1zcGxhc2hzY3JlZW4"
              target="_blank" rel="noreferrer">
              Click to play the Google Maps game Carmen Santiago: Crown Jewels. The game may take a few moments to load.
              <img src={require("../../public/images/socialstudies/carmen-sandiego.png")} alt="carmen sandiego"/></a>
          </p><br/>
          {/*<textarea className="textArea" onChange={onChangeSS6Listener11} value={SS6Essay11}/>*/}

          <span className="days">LESSON 12</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/3.1_ancient_mesopotamia.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 3.1 Ancient Mesopotamia</i></a>
          </p>
          <p>Watch the video <b>Ancient Mesopotamia 101</b></p>
          <Video videoUrl="https://www.youtube.com/embed/xVf5kZA0HtQ"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. What did the Tigris and Euphrates rivers provide for ancient Mesopotamians?<br/>
            2. How did the lack of natural resources affect Mesopotamians?<br/>
            3. How did Mesopotamian farmers obtain the right amount of water for their crops?<br/>
            4. How was irrigation connected to trade?<br/>
            5. How did Mesopotamians create a successful society?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener12} value={SS6Essay12}/>

          <span className="days">LESSON 13</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/3.2_ancient_mesopotamia.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 3.2 Ancient Mesopotamia</i></a>
          </p>
          <p>Watch the video <b>The Rise of Sumer</b></p>
          <Video videoUrl="https://www.youtube.com/embed/MHpmLrWBjnM"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. How did civilization develop in the region of Sumer?<br/>
            2. Why are food surpluses necessary for civilization to develop?<br/>
            3. What did people in Sumer think their gods were like?<br/>
            4. Why was a priest’s job so important in Sumer?<br/>
            5. How did warfare change the government in Sumer?<br/>
            6. What was the most interesting thing you learned from the video?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener13} value={SS6Essay13}/>

          <span className="days">LESSON 14</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/3.3_ancient_mesopotamia.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 3.3 Ancient Mesopotamia</i></a>
          </p>

          <p>Watch the video <b>Mesopotamia: Crash Course World History</b></p>
          <Video videoUrl="https://www.youtube.com/embed/sohXPx_XZ6Y"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. What roles did women and slaves have in Sumerian religion?<br/>
            2. Why was the invention of cuneiform an important development?<br/>
            3. How did the Sumerians invent writing?<br/>
            4. What were the social classes that made up Sumerian society?<br/>
            5. How did religion affect who was in the upper class?<br/>
            6. Why do historians identify the beginning of history with the
            beginning of writing?<br/>
            7. What was the most interesting thing you learned from the video?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS6Listener14} value={SS6Essay14}/>

          <span className="days">LESSON 15</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/3b_city-states_in_mesopotamia.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 3b City-States in Mesopotamia</i></a>
          </p>

          <p>Watch the video <b>The rise and fall of history’s first empire by Soraya Field Fiorio</b></p>
          <Video videoUrl="https://www.youtube.com/embed/XBk9KywTIgk"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Which Sumerian inventions do you think was most important?<br/>
            2. Briefly describe Sumerian religion. Did they believe in one god or many gods?
            3. What did the Sumerians use as their primary building material?<br/>
            4. Although located between the Tigris and Euphrates rivers, there was almost no rainfall in the hot
            and dry climate of Sumer. What technology first allowed the Sumerians to grow grain surpluses
            without rain?<br/>
            5. The Sumerians are credited with inventing the wheel. What was the wheel first used to create?<br/>
            6. Describe what kinds of literature came out of Sumer.<br/>
            7. With larger societies came some negative traits like bureaucracy, taxes, and social
            stratification. The invention of slavery originated in Sumer as well. In your opinion, is it
            possible to build a complex civilization without social hierarchy? Explain your reasoning.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener15} value={SS6Essay15}/>

          <span className="days">LESSON 16</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/4.1_early_empires.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 4.1 Early Empires</i></a>
          </p>
          <p>Watch the video <b>Turning Points in History - Hammurabi's Code of Laws</b></p>
          <Video videoUrl="https://www.youtube.com/embed/oDALXORbtR4"/>

          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Which lands are a part of the region known as the Fertile Crescent? <br/>
            2. How do empires change the lives of the people who live in them?<br/>
            3. How did the geography of Mesopotamia affect the history of the region?
            4. Briefly describe what Hammurabi's Code established.<br/>
            5. Why did Hammurabi think his empire needed a single code of law?<br/>
            6. What opinion do you have about Hammurabi’s Code? D you think it was needed? Was it fair?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener16} value={SS6Essay16}/>

          <span className="days">LESSON 17</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/4.2_early_empires.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 4.2 Early Empires</i></a>
          </p>
          <p>Watch the video <b>The rise and fall of the Assyrian Empire </b> by Marian H Feldman</p>
          <Video videoUrl="https://www.youtube.com/embed/7pa54hWROpQ"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. What was the Assyrian king Ashurbanipal known for?<br/>
            What are some of the strategies that Assyrians devised to hold together a large territory made up of
            many different cultural groups?<br/>
            The deportation of defeated populations served several purposes, including breaking local ties. What
            other purposes might have been fulfilled by moving people around the Empire?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener17} value={SS6Essay17}/>

          <span className="days">LESSON 18</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/4.3_early_empires.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 4.3 Early Empires</i></a>
          </p>
          <p>Watch the video <b>Cyrus the Great establishes the Achaemenid Empire </b></p>
          <Video videoUrl="https://www.youtube.com/embed/EqEEndY0sT8"/>

          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. What policies did Cyrus use to keep his empire under control?<br/>
            2. Why did Darius expand his government?<br/>
            3. Why was the Persian Royal Road important?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener18} value={SS6Essay18}/>

          <span className="days">LESSON 19</span>
          <p className="topBottom">Imagine that you have a private jet at your disposal and can travel anywhere in the
            world. If you
            could travel to any destination, where would you go?</p>
          <ul className="list">
            <li>Paris to see the Eiffel Tower?</li>
            <li>Machu Pichu in Peru?</li>
            <li>Angel Falls in Venezuela?</li>
            <li>Kangaroo Island off the coast of Australia?</li>
            <li>Avatar mountains (Zhangjiajie) in China?</li>
            <li>Big Sur in California?
            </li>
          </ul>
          <p className="topBottom"> If you have no idea where to you'd like to go, get inspired by <a
            href="https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
            target="_blank" rel="noreferrer"> this site about stunning places</a> or this video showing some of the most
            beautiful places in the world.</p>

          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>

          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport.” OR “I will need to get a GPS and trek 3 days into the jungle to find it.” OR “A
            mountain bike is the best mode of transportation.”<br/>
            6. How long will you stay there and where will you stay? (Ex. I will stay in a hut on the beach OR
            …in a treehouse in the jungle OR …in a rented camper so I can tour the area.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener19} value={SS6Essay19}/>

          <span className="days">LESSON 20</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/5.1_ancient_egypt.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 5.1 Ancient Egypt</i></a>
          </p>
          <p>Watch the video <b>Ancient Egypt </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/Z3Wvw6BivVI"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. How did the Egyptians use the land around the Nile?<br/>
            2. Why was the Nile River important? How did it affect trade and innovation?<br/>
            3. Describe Egyptian houses. What were they made of?<br/>
            4. What economic activities developed in Egypt?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener20} value={SS6Essay20}/>

          <span className="days">LESSON 21</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/5.2_ancient_egypt.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 5.2 Ancient Egypt</i></a></p>

          <p>Watch the video <b>Ancient Egypt </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/Z3Wvw6BivVI"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Describe the ways learning advance in ancient Egypt.<br/>
            2. Out of all of their advancements, which in your opinion was the most important?<br/>
            3. Describe the Ancient Egyptians' religious beliefs.<br/>
            4. What economic activities developed in Egypt?<br/>
            5. How were hieroglyphs used?<br/>
            6. What duties did priests have?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener21} value={SS6Essay21}/>

          <span className="days">LESSON 22</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/5.3_ancient_egypt.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 5.3 Ancient Egypt</i></a>
          </p>

          <p>Watch the video <b>Who Built the Pyramids?</b></p>
          <Video videoUrl="https://www.youtube.com/embed/k2118KSUSF8"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Why were religion and government not separate in ancient Egypt?<br/>
            2. What were some of the main features of Egyptian art?<br/>
            3. What was the purpose of the pyramids? Why did pharaohs build them?<br/>
            4. What did the pyramids do for pharaohs while they were alive and what were they meant to do after
            they died?<br/>
            <span style={{ color: "#4f5979" }}>Based on the video <i>Who Built the Pyramids</i></span><br/>
            5. For how many years was Khufu's pyramid the largest man-made structure in the world?<br/>
            6. Why were Pyramids ideal for building large-scale monuments?<br/>
            7. Egypt's great stone pyramids were the work of how many generations of Egyptians?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener22} value={SS6Essay22}/>

          <span className="days">LESSON 23</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/5.4_ancient_egypt.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 5.4 Ancient Egypt</i></a>
          </p>

          <p>Watch the video <b>The Egyptian myth of the death of Osiris </b>by Alex Gendler </p>
          <Video videoUrl="https://www.youtube.com/embed/O5dXz1Tq_Yg"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Who was Queen Hatshepsut’s and why was she important?<br/>
            2. How did Akhenaton try to change Egyptian religion?<br/>
            3. How did Ramses II expand Egypt?<br/>
            4. Why do you think Thutmose tried to erase all records of Hatshepsut’s reign?<br/>
            <span
              style={{ color: "#4f5979" }}>Based on the video <i> The Egyptian myth of the death of Osiris </i></span><br/>
            5. Briefly describe the warrior god Set. What was he the god of?<br/>
            6. Who was Set's wife?<br/>
            7. What was used to imprison Osiris?<br/>
            8. How did Isis disguise herself?<br/>
            9. Why was the tree in the palace?<br/>
            10. How did Set keep Isis from resurrecting Osiris?<br/>
            11. Why couldn’t Osiris remain among the living?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener23} value={SS6Essay23}/>

          <span className="days">LESSON 24</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/6.1_kush_and_other_african_kingdoms.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 6.1 Kush and Other African Kingdoms</i></a>
          </p>
          <p>Watch the video <b>The Kush Empire </b>by National Geographic</p>
          <Video videoUrl="https://www.youtube.com/embed/b86XE3TbXg0"/>
          <p>
            1. What were some of the achievements of Piankhi?<br/>
            2. Why was the Kushite city of Meroë an important economic center?<br/>
            3. How was the Nile important to the relationship between Nubia and Egypt?<br/>
            4. What was the most significant achievement of Piankhi’s rule?<br/>
            5. Why did the people of Meroë learn to smelt iron?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener24} value={SS6Essay24}/>

          <span className="days">LESSON 25</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/6.2_kush_and_other_african_kingdoms.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 6.2 Kush and Other African Kingdoms</i></a>
          </p>
          <p>Watch the video <b>AD and BC Explained </b>(as well as CE and BCE)</p>
          <Video videoUrl="https://www.youtube.com/embed/kDNH4G9iacw"/>
          <p>
            1. Why did trade become important to Aksum?<br/>
            2. What was the effect of King Ezana on religion?<br/>
            3. What were some of Aksum’s achievements?<br/>
            4. What kinds of structures were built in Aksum, and what purpose did they serve?<br/>
            5. In what ways did the adoption of Christianity as the official religion affect the culture of
            Aksum?<br/>
            6. Based on the video, explain what the following abbreviations stand for: <br/>
            <ol className="assnLetters">
              <li>AD</li>
              <li>BC</li>
              <li>CE</li>
              <li>BCE</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener25} value={SS6Essay25}/>

          <span className="days">LESSON 26</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/6.3_kush_and_other_african_kingdoms.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 6.3 Kush and Other African Kingdoms</i></a>
          </p>
          <p>
            1. What were some of the environments that
            the people of west, central, and southern Africa had to adapt to? <br/>
            2. How did people live on the plains of Africa?<br/>
            3. What role did ironworking play in Nok culture?<br/>
            4. Why was the migration of Bantu speakers so slow?<br/>
            5. Why did the Bantus overwhelm the people into whose territory they migrated?<br/>
            6. Comparing Compare the importance of ironmaking in the Nok and Bantu cultures.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener26} value={SS6Essay26}/>

          <span className="days">LESSON 27</span>
          <p>Watch the video <b>Mansa Musa and Islam in Africa </b>by Crash Course World History </p>
          <Video videoUrl="https://www.youtube.com/embed/jvnU0v6hcUo"/>
          <p>
            1. What prejudices have been applied to Africa with regard to its history?<br/>
            2. What types of trade occurred between North Africans (Berbers) and West Africans? What did each
            group have to trade?<br/>
            3. Who was Mansa Musa and why is his story important?<br/>
            4. What did the Europeans assume about Africa after they traded with West Africans?<br/>
            5. What did the Bantu people bring with them to East Africa?<br/>
            6. What major religion did the Arab Merchants bring with them to Africa?<br/>
            7. Africa is bigger than which three countries put together?<br/>
            8. Why is African history so often overlooked by many scholars and historians?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener27} value={SS6Essay27}/>

          <span className="days">LESSON 28</span>
          <p>Watch the video <b>History Of Ancient China | Dynasties, Confucius, And The First Emperor </b></p>
          <Video videoUrl="https://www.youtube.com/embed/tpy5BMhMYYw"/>
          <p>
            1. Briefly describe what you learned about China's dynasties. <br/>
            2. Who was Confucius? Describe what he tried to teach people?<br/>
            3. What do you think was ancient China's most impressive invention?<br/>
            4. What was the most surprising thing you learned from the video?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener28} value={SS6Essay28}/>

          <span className="days">LESSON 29</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/8.1_ancient_china.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 8.1 Ancient China</i></a>
          </p>
          <p>
            1. Why did Shang settlements begin along the Huang He?<br/>
            2. How did the Shang develop a Chinese language?<br/>
            3. How would the Chinese people know that a ruler had lost the Mandate of Heaven?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener29} value={SS6Essay29}/>

          <span className="days">LESSON 30</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/8.2_ancient_china.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 8.2 Ancient China</i></a>
          </p>
          <p>
            1. What actions did Confucius believe would bring order to China?<br/>
            2. How did Confucius think rulers should behave?<br/>
            3. Why did Daoism teach that each human had to find an individual way to follow in life?<br/>
            4. Describe the meaning of the Yin and Yang.<br/>
            5. Compare Daoism to Confucius’ teachings. How are they different?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener30} value={SS6Essay30}/>

          <span className="days">LESSON 31</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/8.3_ancient_china.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 8.3 Ancient China</i></a>
          </p>
          <p>Watch the video <b>The incredible history of China's terracotta warriors</b> by Megan Campisi and
            Pen-Pen Chen </p>
          <Video videoUrl="https://www.youtube.com/embed/mP5p4QbvPtc"/>
          <p>
            1. Why did Shi Huangdi kill so many Confucianists? <br/>
            2. How did the Han rule China?<br/>
            3. What was life in Han China like?<br/>
            4. Why was the ruler Wudi important in the achievements of the Han Dynasty?<br/>
            5. How is the Chinese way of life today similar to that of Han China?<br/>
            6. What did you think of the Terracotta Warriors? <br/>
            7. How would you describe the soldiers and their uniforms? Were they all exactly the same?<br/>
            8. Why would some emperors wish to have “company” in the afterlife? <br/>
            9. What was the most interesting thing you learned in the video?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener31} value={SS6Essay31}/>

          <span className="days">LESSON 32</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/8.4_ancient_china.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 8.4 Ancient China</i></a>
          </p>
          <p>Watch the video <b> </b></p>
          <Video videoUrl="https://www.youtube.com/embed/vn3e37VWc0k"/>
          <p>
            1. What kinds of goods moved along the Silk Roads?<br/>
            2. In which aspects of Chinese life did the Han make great advances?<br/>
            3. What economic changes did the Silk Roads bring to China?<br/>
            4. How did the Silk Roads aid in the spread of Buddhism?<br/>
            5. Why were most of the early Chinese inventions related to agriculture?<br/>
            6. What are some ideas that reached ancient China because of the Silk Roads?<br/>
            7. Which of the following factors hindered early connections between early river valley
            civilizations?<br/>
            8. What do you think was the most significant impact of the Silk Roads?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener32} value={SS6Essay32}/>

          <span className="days">LESSON 33</span>
          <p>Watch the video <b>‎2,000 Years of Chinese History </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/ylWORyToTo4"/>
          <p>

            1. What are the periods called that Chinese history is divided into?<br/>
            2. What were reasons that dynasties usually came to an end?<br/>
            3. What happened to China during the Han dynasty?<br/>
            4. What is the Mandate of Heaven? <br/>
            5. In your own words, describe the teachings of Confucius.<br/>
            6. Much of China's wealth came from trading/selling what?<br/>
            7. What was the most interesting thing you learned from the video?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener33} value={SS6Essay33}/>

          <span className="days">LESSON 34</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/9.1_ancient_america_geography.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 9.1 Ancient America</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. How was Pacal important to his sons and to the people of Palenque? <br/>
            2. What is the physical geography of the Americas like?<br/>
            3. How do the geography and climate of Mesoamerica contrast with those of the Andes?<br/>
            4. Why are the seasons reversed in North and South America?<br/>
            5. Why is farming a challenge in the Andes?<br/>
            6. How did farmers grow crops in the rainy lowlands of Mesoamerica?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener34} value={SS6Essay34}/>

          <span className="days">LESSON 35</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/9.2_ancient_america_andean.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 9.2 Ancient America</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. What was the Chavín civilization?<br/>
            2. How did the Nazca adapt to their harsh environment?<br/>
            3. What does Moche art tell us about their civilization?<br/>
            4. How have archaeologists learned about the Moche civilization?<br/>
            5. What are the Nazca Lines?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener35} value={SS6Essay35}/>

          <span className="days">LESSON 36</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/9.3_ancient_america_olmec.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 9.3 Ancient America</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. What helped the Olmec develop the first civilization in the Americas?<br/>
            2. Why were the Olmec able to build cities?<br/>
            3. How were classes in the Olmec social structure ordered?
            4. What does Olmec art tell us about their religious beliefs?<br/>
            5. What was the effect of Olmec trade in Mesoamerica?<br/>
            6. Why did historians change their minds abouthow people lived in ancient Mesoamerica?<br/>
            7. Comparing and Contrasting How was the rise of Olmec civilization similar to that of ancient
            Egypt?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener36} value={SS6Essay36}/>

          <span className="days">LESSON 37</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/9.4_ancient_america_mayans.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 9.4 Ancient America</i></a>
          </p>
          <p>Watch the video <b>Ancient Maya 101</b> by National Geographic </p>
          <Video videoUrl="https://www.youtube.com/embed/Q6eBJjdca14"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. Where did Mayan civilization rise?<br/>
            2. How was Mayan society structured?<br/>
            3. What were Mayan achievements in art and learning?<br/>
            4. Why did the Maya develop a calendar?<br/>
            5. Why do you think archaeologists were able to find many Mayan steles?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener37} value={SS6Essay37}/>

          <span className="days">LESSON 38</span>
          <p>Watch the video <b>The Rise and Fall of the Inca empire</b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/UO5ktwPXsyM"/>
          <p>Watch the video <b>The Americas and Time Keeping</b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/dCBDUDwaeCA"/>
          <p>After you watch the videos, answer the following questions:<br/>
            1. What event led to the formation of the Inca empire?<br/>
            2. Describe the falloff the Inca Empire. What events led to this?<br/>
            3. Explain the legend of Ayar Manco and his siblings. What purpose do you think this legend
            served?<br/>
            4. What do you think were some of the most unique aspects of the Inca Empire?<br/>
            5. Briefly summarize how they were able to keep time in the ancient Americas.<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener38} value={SS6Essay38}/>

          <span className="days">LESSON 39</span>
          <p className="margin-para">
            <a
              href="https://earth.google.com/web/@1.50183132,-12.4193674,-30086.36432683a,63200085.51329613d,35y,0.00003868h,0t,0r/data=CjwSOhIgN2ZhM2Q1Njg0MDZlMTFlOTg2Y2U5OWYyYWQ2OTYwMTgiFnNwbC14LXgteC1zcGxhc2hzY3JlZW4?utm_source=referral&utm_campaign=keyword&utm_term=carmen2"
              target="_blank" rel="noreferrer">
              Play the Google Maps game Carmen Santiago: Tutankhamun’s Mask Caper. The game may take a few moments to
              load.
              <img src={require("../../public/images/socialstudies/carmen-sandiego.png")} alt="carmen sandiego"/></a>
          </p><br/>


          {/*<textarea className="textArea" onChange={onChangeSS6Listener39} value={SS6Essay39}/>*/}

          <span className="days">LESSON 40</span>
          <p className="topBottom">It's time to travel to another destination somewhere in the world. Where would you
            like to go this
            time?</p>
          <ul className="list">
            <li>The Colosseum in Rome?</li>
            <li>The Acropolis in Athens?</li>
            <li>The pyramids of Giza?</li>
            <li>The Great Wall of China?</li>
            <li>The Grand Canyon in Arizona?</li>
            <li>The vineyards of Tuscany?</li>
          </ul>
          <p className="topBottom">If you have no idea where to you'd like to go, get inspired by this video showing
            some of the most
            amazing places in the world.</p>
          <Video videoUrl="https://www.youtube.com/embed/pFoty21X370"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport." OR "I will need to get a GPS and trek 3 days into the jungle to find it." OR "A
            mountain bike is the best mode of transportation."<br/>
            6. Where will you stay and for how long? (Ex. I will stay in a hut on the beach for 3 months OR
            …in a treehouse in the jungle for the weekend OR …in a rented camper so I can tour the area for 6
            months.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener40} value={SS6Essay40}/>

          <span className="days">LESSON 41</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/10.1_the_hebrew_kingdoms.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 10.1 The Hebrew Kingdoms</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. What is the central belief of the Hebrews? <br/>
            2. Why did the Hebrews go to Egypt?<br/>
            3. Who led the Israelites in their escape from slavery in Egypt?<br/>
            4. What role did the judges play in the life of the ancient Israelites?<br/>
            5. Why did the return of the Hebrews to Canaan cause conflicts with other peoples living
            there?<br/>
            6. How did the Hebrew belief in a Promised Land affect their actions in
            Egypt and Canaan?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener41} value={SS6Essay41}/>

          <span className="days">LESSON 42</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/10.2_the_hebrew_kingdoms.pdf")} rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 10.2 The Hebrew Kingdoms</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. Who were some of the early kings of Israel?<br/>
            2. Why did the Israelites decide to choose a king?<br/>
            3. What was the outcome of the conflict among the Israelites?<br/>
            4. What hope sustained the Jews in exile?<br/>
            5. How did the exiles maintain their identity in Babylon?<br/>
            6. What were Solomon’s achievements as king of Israel?<br/>
            7. What was the role of prophets in Jewish life in the ancient world?<br/>
            8. What event ended the Babylonian Captivity?<br/>
            9. How did fighting among the tribes of Israel make it easier for their enemies to conquer
            them?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener42} value={SS6Essay42}/>

          <span className="days">LESSON 43</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/10.3_the_hebrew_kingdoms.pdf")} rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 10.3 The Hebrew Kingdoms</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. What was the relationship of Judah to Syria?<br/>
            2. What was the result of Jewish resistance to Roman rule?<br/>
            3. What happened to Jewish beliefs when the Jews were in exile? <br/>
            4. What was the goal of the revolt led by Judah Maccabeus and his brothers against the
            Syrians?<br/>
            5. How did the Romans punish the Jews of Judea for resisting Roman rule?<br/>
            6. What are three ways Jews kept their faith strong after the Diaspora?<br/>
            7. Making Inferences How did study keep the faith of the Jews alive?<br/>
            8. Why did the Diaspora change the way that the Jews practiced their
            religion?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener43} value={SS6Essay43}/>

          <span className="days">LESSON 44</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/11.1_ancient_greece.pdf")} rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 11.1 Ancient Greece</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. How were Athens and Sparta similar and different? Compare and contrast them.<br/>
            2. Suppose that the rulers of Sparta have asked your advice. Think about the reasons for
            and against
            helping Athens. Then write a short letter to the ruler explaining what you think Sparta
            should
            do.<br/>
            2. What were the main features of the geography of Greece?<br/>
            3. How did the sea affect Greek life?<br/>
            4. How did the sea help the Greek economy?<br/>
            5. How did trade with other peoples contribute to Greek civilization?<br/>
            6. How did the seas affect Greek trade patterns?<br/>
            7. How did the geography of the Greek peninsula affect the political organization of the
            region?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener44} value={SS6Essay44}/>

          <span className="days">LESSON 45</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/11.2_ancient_greece.pdf")} rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 11.2 Ancient Greece</i></a>
          </p>
          <p>Watch the video <b>Music and Creativity in Ancient Greece </b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/-1aAunaw1GA"/>
          <p>After you complete the reading and watch the video, answer the following
            questions:<br/>
            1. How were Greek myths and religion connected?<br/>
            2. How did the Greeks honor their gods?<br/>
            3. Why did the Greeks hold the Olympics?<br/>
            4. What literature did the early Greeks produce?<br/>
            5. Why are Homer’s epics important?<br/>
            6. Why was mythology important to the lives of ancient Greeks?<br/>
            7. How are the Iliad and the Odyssey connected?<br/>
            8. What lesson might the Greeks have learned from the myth of Prometheus?<br/>
            9. In what key ways were the religions of Egypt and Greece similar and
            different?<br/>
            10. Describe the Greek concept of ethos.<br/>
            11. What did Plato believe was dangerous music?<br/>
            12. Which is your favorite Muse and why? How did she influence art or science?<br/>
            13. Are there ways that we use music today that an Ancient Greek citizen would find
            strange?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener45} value={SS6Essay45}/>

          <span className="days">LESSON 46</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/11.3_ancient_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 11.3 Ancient Greece</i></a>
          </p>
          <p>Watch the video <b>A day in the life of an ancient Greek architect </b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/tuZcS2Flabw"/>
          <p>After you complete the reading and watch the video, answer the following
            questions:<br/>
            1. How was Greece organized politically?<br/>
            2. What was the role of the agora in a Greek city?<br/>
            3. How were oligarchy and aristocracy similar?<br/>
            4. How did the geography of Greece lead to the rise of city-states?<br/>
            5. What made democracy in Athens a limited democracy?<br/>
            6. What were the key factors leading to the rise of tyrants? Explain.<br/>
            7. Why was the invention of the idea of citizenship important to the
            development of democracy?<br/>
            8. Based on the video: What style of temple is the Parthenon?<br/>
            9. Who was the main statue of the parthenon dedicated to? <br/>
            10. Why do you think that many Athenians wanted to have a new temple in their
            city?<br/>
            11. To what extent did the work of Pheidias and his assistants make the Parthenon
            special?<br/>
            12. Why did the builders of the Parthenon include so much sculpture on the
            temple?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener46} value={SS6Essay46}/>

          <span className="days">LESSON 47</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/11.4_ancient_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 11.4 Ancient Greece</i></a>
          </p>
          <p>Watch the video <b>This is Sparta </b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/M7V1a1I5BL0"/>
          <p>After you complete the reading and watch the video, answer the following
            questions:<br/>
            1. What did Spartan society emphasize the most?<br/>
            2. How did Spartan education support the military?<br/>
            3. What was the government of Athens like?<br/>
            4. What happened when Persia invaded Greece?<br/>
            5. What roles did Athens and Sparta play in defeating the Persians?<br/>
            6. How did the conquest of the helots make it necessary for Sparta to be
            a military state, and how did the conquest make such a state possible?<br/>
            7. How was the role of women different in Athens and Sparta?<br/>
            8. What roles did slaves play in Sparta and Athens?<br/>
            9. Based on the video, at what age did young Spartan boys get sent to the
            Agoge?<br/>
            10. The Spartans prized physical perfection above all else. Were there things
            they taught
            Spartanboys that
            you found unethical or disturbing? Explain.<br/>
            11. Which areas of study did the Agoge focus on to help make their boys into
            better warriors?<br/>
            12. What methods were used at “Spartan School” to build up the boys' body and
            mind? Why is this mix
            important in building better warriors?<br/>
            13. Girls also received an education. What do you think was the reasoning behind
            their
            education?<br/>
            14. Why were women so important to Sparta’s success?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener47} value={SS6Essay47}/>

          <span className="days">LESSON 48</span>
          <p>Watch the video <b>Persians and Greeks </b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/Q-mkVSasZIM"/>
          <p>After you watch the video, answer the following questions:<br/>
            1. How do we know most information of about the Persians? Why might that be
            important? <br/>
            2. What are some accomplishments of Daris I? <br/>
            3. How did the Persians rule? Give some detailed characteristics.<br/>
            4. Who fought in the Persian wars? What was the significance of that War? <br/>
            5. Why do historians see Greece as the foundations of Western
            Civilization?<br/>
            6. What would have happened if the Persians had won the Persian War? <br/>
            7. At the end of the video, John Greene askes, "Did the right side win the
            Persian Wars?" What is
            your answer to this? <br/>
            8. What was the most interesting thing you learned from the video?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener48} value={SS6Essay48}/>

          <span className="days">LESSON 49</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/12.1_classical_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 12.1 Classical Greece</i></a>
          </p>
          <p>Watch the video <b> Pericles, the Golden Age of Athens</b> by NBC News</p>
          <Video videoUrl="https://www.youtube.com/embed/PoZfCO42nhA"/>
          <p>After you do the reading and watch the video, answer the following
            questions:<br/>
            1. What character trait does Pericles show when supporting the rights of a
            poor citizen to serve in
            the government?<br/>
            2. What democratic changes did Pericles bring?<br/>
            3. How did Athens become more powerful?<br/>
            4. How did Pericles beautify Athens?<br/>
            5. How did Pericles finance his program to make Athens beautiful?<br/>
            6. What trait did Pericles believe was important to qualify for public
            service?<br/>
            7. How did gaining control of the Delian League increase Athens’
            power?<br/>
            8. Why was it important to rebuild and beautify the Acropolis in
            Athens?<br/>
            9. How does the way Athenian citizens voted on laws compare with how U.S.
            citizens vote?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener49} value={SS6Essay49}/>

          <span className="days">LESSON 50</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/12.2_classical_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 12.2 Classical Greece</i></a>
          </p>
          <p>Watch the video <b> Athens versus Sparta</b></p>
          <Video videoUrl="https://www.youtube.com/embed/GjbfS8RDoYo?list=PLRynuHml5ai0UD_qe7E1sdnN6egDKgxXV"/>
          <p>After you do the reading and watch the video, answer the following
            questions:<br/>
            1. What led Athens and Sparta to fight a war?<br/>
            2. What were the causes of the war between Athens and Sparta?<br/>
            3. What caused Pericles’ strategy to fail?<br/>
            4. What was the result of the Peloponnesian War?<br/>
            5. What was the long-term effect of the Peloponnesian War?<br/>
            6. What was the Peloponnesian League and who led it?<br/>
            7. What can happen to both sides in a war when the fighting goes on
            for
            many years?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener50} value={SS6Essay50}/>

          <span className="days">LESSON 51</span>
          <p>Watch the video <b>Alexander the Great and the Situation </b>by
            Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/0LsrkWDCvxg?list=PLBDA2E52FB1EF80C9"/>
          <p>After you watch the video, answer the following questions:<br/>

            1. In your own opinion, what makes someone deserving of the title,
            “the Great”?<br/>
            2. What is wrong with viewing history as simply “the study of great
            men?”<br/>
            3. What is the difference between conquest and empire building?
            Which is a greater accomplishment in
            your opinion?
            Be sure to justify your answer with examples.<br/>
            4. What became of Alexander’s empire after his death? <br/>
            5. Define Hellenistic.<br/>
            6. What do you think of Alexander as a leader? How do you think he is remembered?<br/>
            7. How do you want to be remembered?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener51} value={SS6Essay51}/>

          <span className="days">LESSON 52</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/12.3_classical_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 12.3 Classical Greece</i></a>
          </p>
          <p>After you do the reading, answer the following questions:<br/>
            1. Who conquered the Greek city-states?<br/>
            2. Why were the Greek city-states open to an attack by Philip?<br/>
            3. How did Alexander build an empire?<br/>
            4. How did culture change under Alexander’s rule?<br/>
            5. What happened to Greek democratic practices when Philip of
            Macedonia conquered Greece?<br/>
            6. Why did Alexander’s empire include Central Asia but not
            India?<br/>
            7. How did Alexander spread Greek influence in new cities he
            founded?<br/>
            8. How did the Peloponnesian War lead to Alexander’s success as a
            conqueror?<br/>
            9. What made Hellenistic culture unique?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener52} value={SS6Essay52}/>

          <span className="days">LESSON 53</span>
          <p>Watch the video <b> The ancient origins of the Olympics - Armand
            D'Angour</b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/VdHHus8IgYA"/>
          <p>Watch the video <b> A day in the life of an ancient
            Athenian</b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/ar8S6virCwM"/>
          <p>After you watch the two videos, answer the following
            questions:<br/>
            <span style={{ color: "#4f5979" }}>Based on the video <i>The ancient origins of the
              Olympics</i></span><br/>
            1. What was the first event in the ancient Olympics?<br/>
            2. What was the profession of the first winner of the ancient
            Olympics?<br/>
            3. What main differences are there between the ancient and
            modern Olympics?<br/>
            4. Which events made up the pentathlon?<br/>
            5. The Olympics are held only every four years. What is the
            history behind this schedule?<br/>
            <span style={{ color: "#4f5979" }}>Based on the video <i> A day in the life of an ancient
              Athenian</i></span><br/>
            6. How did Archias find husbands for his daughters?<br/>
            7. Athenian women weren’t allowed to vote. What are some of the
            ways they might have been able to
            exercise influence in the home?<br/>
            8. What arguments for and against executing the entire male
            population of Mytilene might you have
            heard in the Ekklêsia in 427 BCE?<br/>
            9. Do you agree with the voting procedures in ancient Athens?
            Why or why not?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener53} value={SS6Essay53}/>

          <span className="days">LESSON 54</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/12.4_classical_greece.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 12.4 Classical Greece</i></a>
          </p>

          <p>After you do the reading, answer the following questions:<br/>
            1. What new elements did Greek art and architecture introduce?<br/>
            2. How did the Greek love of reason and logic influence the
            development of Western thought?<br/>
            3. How did Herodotus and Thucydides influence the writing of
            history today?<br/>
            4. Why is Hellenistic science so important?<br/>
            5. In what areas of math and science did Greek thinkers
            work?<br/>
            6. What teaching style is identified with Socrates, and what
            was it like?<br/>
            7. List the ways the Greeks have influenced the world.<br/>
            8. What qualities did Greek architects strive for in their
            work?<br/>
            9. What important discoveries about Earth, the planets, and
            the sun came from the scientists of
            Alexandria?<br/>
            10. What was wrong with Ptolemy’s theory?<br/>
            11. Why did both Chinese and Greek thinkers develop ideas
            about
            philosophy during times of war and disorder?<br/>
            12. What are the basic ideas in Greek philosophy?<br/></p>


          <textarea className="textArea" onChange={onChangeSS6Listener54} value={SS6Essay54}/>

          <span className="days">LESSON 55</span>
          <p>Today's lesson will focus on the philosopher Plato.<br/>
            Watch the video <b>Plato’s best (and worst) ideas </b> by
            TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/jLesc5lITvo"/>
          <p>Watch the video <b>Plato’s Allegory of the Cave</b> by
            TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/1RWOpQXTltA"/>
          <p>After you watch the two videos, answer the following
            questions:<br/>
            1. Which of Plato's ideas did you think were pretty
            good?<br/>
            2. Which did you disagree with or think were bad?<br/>
            <span style={{ color: "#4f5979" }}>Based on the video<i> Plato’s Allegory of the Cave</i> </span><br/>
            3. Briefly describe what Plato hoped to show
            people through this allegory (or story with hidden
            meaning).<br/>
            4. How do the prisoners respond to being chained?<br/>
            5. How does the prisoner respond to seeing the world
            outside the cave for the first time?<br/>
            6. Why would the other prisoners resist being freed after
            seeing the first prisoner return?<br/>
            7. Why do the other prisoners consider the first prisoner
            to have been ruined by venturing
            outside?<br/>
            8. What do the shadows on the wall versus the real objects
            symbolize in Plato's theory of forms?<br/>
            9. In 399 BC, Socrates was put on trial and found guilty
            of corrupting the minds
            of young people and for not believing in the gods. As
            punishment, he was sentenced to death by poison. Socrates
            believed he was educating people and
            trying to open their minds to the truth. How does
            this allegory relate to what happened to Socrates?
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener55} value={SS6Essay55}/>

          <span className="days">LESSON 56</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/13.1_the_rise_of_rome.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 13.1 The Rise of Rome</i></a>
          </p>
          <p>After you do the reading, answer the following
            questions:<br/>
            1. Why was Rome’s location so favorable?<br/>
            2. How did its geography help Rome grow?<br/>
            3. What was life like for the early Romans?<br/>
            4. Why was discipline important to early Romans? Why
            did they have to work hard?<br/>
            5. What is the legend of Rome’s founding? What does
            the legend tell you about what was important to
            Romans?<br/>
            6. How was Rome’s location good for defense?<br/>
            7. Compare the role of the Tiber in the development
            of ancient Rome with that of the Nile in ancient
            Egypt.<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener56} value={SS6Essay56}/>

          <span className="days">LESSON 57</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/13.2_the_rise_of_rome.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 13.2 The Rise of Rome</i></a>
          </p>
          Watch the video <b>A glimpse of teenage life in
          ancient Rome </b>by Ray Laurence

          <Video videoUrl="https://www.youtube.com/embed/juWYhMoDTN0"/>
          <p>Answer the following questions based on the
            reading and video from Lesson 57 above:<br/>
            1. How was Roman society structured? What were
            the two classes?<br/>
            2. In what ways were the Roman social classes
            unequal?<br/>
            3. How was the republican government
            organized?<br/>
            4. How did Rome expand?<br/>
            5. What was the result of Roman expansion?<br/>
            6. What is the legacy of Roman law?<br/>
            7. What lands did Rome conquer?<br/>
            8. Why do you think the Roman Republican
            government has influenced the governments of
            other
            countries?<br/>
            9. What benefits do you think the Romans
            gained from their treatment of conquered
            peoples?<br/>
            10. Based on the video, what was a common
            smell in early Roman mornings in AD 79?<br/>
            11. The streets of ancient Rome were filled
            with itinerant traders. Describe how you
            imagine that
            kind of environment. How do you think the
            traders gained access to goods? If you were a
            trader, what
            would you sell?<br/>
            12. In ancient Rome, what percentage of
            children died before reaching adulthood?<br/>
            13. Coming of age was a major event in the
            life of a child in ancient Rome. Why do you
            think there
            was such an incredible ceremony to celebrate
            adulthood? What similar celebrations exist
            today?<br/>
            14. Although he can join the military at 17,
            what is Lucius not trusted to do until he is
            25 years
            old?<br/>
            15. What are some major similarities and
            differences between ancient Roman culture and
            the culture
            of the average teenager today? Do you think
            you would have enjoyed life in ancient
            Rome?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener57} value={SS6Essay57}/>

          <span className="days">LESSON 58</span>
          <p>Watch the video <b>The Rise of Rome - How Italy Was Conquered
          </b>by Invicta</p>

          <Video videoUrl="https://www.youtube.com/embed/opT5Ux6pM-8"/>
          <textarea className="textArea" onChange={onChangeSS6Listener58} value={SS6Essay58}/>

          <span className="days">LESSON 59</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/13.3_the_rise_of_rome.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 13.3 The Rise of Rome</i></a>
          </p>
          <p>After you do the reading, answer the following questions:<br/>
            1. What led to conflict in Rome?<br/>
            2. Who fought in the civil war?<br/>
            3. Who was Julius Caesar?<br/>
            4. Why was Caesar killed?<br/>
            5. What happened to Rome after Caesar’s death?<br/>
            6. What were the contributions of the first Roman emperor?<br/>
            7. What factors encouraged economic growth during the Pax Romana? <br/>
            8. How did expansion threaten the Roman Republic?<br/>
            9. How did Caesar gain power?<br/>
            10. How did Roman government change under Augustus?<br/>
            11. What events and circumstances brought the Roman Republic to an end?<br/>
            12. Briefly describe what the life of a roman soldier was like.<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener140} value={SS6Essay140}/>

          <span className="days">LESSON 60</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/13.4_the_rise_of_rome.pdf")} rel="noreferrer"
                target="_blank">Read <i>Chapter 13.4 The Rise of Rome</i></a>
          </p>
          <p>Watch the video <b>Four sisters in Ancient Rome </b>by Ray Laurence</p>
          <Video videoUrl="https://www.youtube.com/embed/RQMgLxVxsrw"/>
          <p>After you do the reading and watch the video, answer the following questions:<br/>
            1. Describe the daily life of Romans. How were the family and society organized?<br/>
            2. What were the roles in a typical Roman family?<br/>
            3. What religious beliefs did the Romans hold?<br/>
            4. What influences helped form Roman religion?<br/>
            5. What was life like in Roman cities?<br/>
            6. How did the Roman government try to solve some of the problems of city life?<br/>
            7. Explain the importance of the aqueduct. <br/>
            8. What architectural innovations improved Roman city life?<br/>
            9. Who belonged to the main social classes during the time of the Roman Empire?<br/>
            10. What was the relationship of religion to government in ancient Rome?<br/>
            11. What was the city of Rome like?<br/>
            12. How would worshiping the emperor while he lived affect the Romans’ view of their ruler?<br/>
            13. What structures in Roman cities have influenced modern structures?<br/>
            14. What steps did the empire take to avoid another civil war between rich and poor?<br/>
            15. What was significant about the names of males in Ancient Rome, and why were the names of females
            sometimes confusing?<br/>
            16. Who wrote all the recorded history of Ancient Rome that we have today?<br/>
            17. How does the public know that a woman is betrothed to be married?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener59} value={SS6Essay59}/>

          <span className="days">LESSON 61</span>
          <p> Watch the video <b>The Roman Empire. Or Republic. Or...Which Was It?</b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/oPf27gAup9U"/>

          <p>After you watch the video, answer the following questions:<br/>
            1. Who was Cincinnatus and how would you describe his position? <br/>
            2. Which American president did Cincinnatus influence? Explain how Cincinnatus affected our
            electoral system.<br/>
            3. Describe what you think was the beginning of Julius Caesar's downfall? What do you think led to
            conspirators wanting to kill him?<br/>
            4. When the conspirators killed Julius Caesar, what did they think would happen? Instead, describe
            what happened after Caesar's death. <br/>
            5. What do you think destroyed the idea of Republican Rome? <br/>
            6. Why were there such powerful generals in Rome?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener101} value={SS6Essay101}/>
          <span className="days">LESSON 62</span>
          <p className="topBottom">It's time to travel to another destination somewhere in the world. Where will you go
            this time?</p>
          <ul className="list">
            <li>The alien landscape of Cappadocia, Turkey?</li>
            <li>The Appalachian Trial?</li>
            <li>Padar Island in Indonesia?</li>
            <li>Antarctica to visit the penguins?</li>
            <li>The Pools of Plitvice in Croatia?</li>
          </ul>
          <p className="topBottom"> If you have no idea where to you'd like to go, get inspired by this video showing
            some of the most
            dangerous places in the world.</p>
          <Video videoUrl="https://www.youtube.com/embed/X2cdi0CLrJc"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you like to see?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Ex. I will take a cab. It’s 30 minutes
            from the airport." OR "I will need to get a GPS and trek 3 days into the jungle to find it." OR "a
            mountain bike is the best mode of transportation."<br/>
            6. Where will you stay and for how long? (Ex. I will stay in a hut on the beach for 3 months OR
            …in a treehouse in the jungle for the weekend OR …in a rented camper so I can tour the area for 6
            months.<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener60} value={SS6Essay60}/>

          <span className="days">LESSON 63</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/14.1_the_birth_of_christianity.pdf")}
                rel="noreferrer" target="_blank">Click
            here
            to read <i>Chapter 14.1 The Birth of Christianity</i></a>
          </p>
          <p>After you do the reading, answer the following questions:<br/>
            1. Describe the character of the emperor Nero as revealed in his actions. <br/>
            2. How did Christianity build on Jewish beliefs about the future?<br/>
            3. What did some Jews believe the Messiah would do?<br/>
            4. Who did the disciples of Jesus believe he was?<br/>
            5. What form did Jesus’ teachings often take?<br/>
            6. What belief about Jesus did Christians think made an afterlife possible?<br/>
            7. What event made Jesus’ followers believe their leader was divine?<br/>
            8. What great power ruled over Judea in the time of Jesus? (See map on page 463 of the
            chapter.)<br/>
            9. How do we know about Jesus’ life and about his teachings?<br/>
            10. What did accounts of Jesus’ resurrection prove to his followers?<br/>
            11. What historical conditions made some Jews in Judea likely to accept Jesus as their
            Messiah?<br/>
            12. Why might Jesus have used parables to deliver his message?<br/></p>


          <textarea className="textArea" onChange={onChangeSS6Listener61} value={SS6Essay61}/>

          <span className="days">LESSON 64</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/14.2_the_birth_of_christianity.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 14.2 The Birth of Christianity</i></a>
          </p>
          <p>After you do the reading, answer the following questions:<br/>
            1. What did Jesus’ disciples do after his death?<br/>
            2. On what beliefs was the early Christian church based?<br/>
            3. What change did Saul undergo? <br/>
            4. What happened to Saul on the road to Damascus?<br/>
            5. Where did Paul travel, and why?<br/>
            6. How did Paul change Christianity?<br/>
            7. How did the Christian church change during Paul’s lifetime?<br/>
            8. Why were women and slaves particularly eager to become Christians?<br/>
            9. What qualifications did Paul possess that made him an effective missionary?<br/>
            10. What decision made Christianity appealing to Gentile converts?<br/>
            11. How did the Pax Romana contribute to the spread of Christianity?<br/>
            12. Why are the Epistles useful sources for learning about Paul’s experiences?<br/></p>


          <textarea className="textArea" onChange={onChangeSS6Listener62} value={SS6Essay62}/>

          <span className="days">LESSON 65</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/14.3_the_birth_of_christianity.pdf")}
                rel="noreferrer" target="_blank">Read <i>Chapter 14.3 The Birth of Christianity</i></a>
          </p>
          <p>After you do the reading, answer the following questions:<br/>
            1. Why was Rome hostile to Christians and Jews?<br/>
            2. Why did the Romans feel threatened by Christianity?<br/>
            3. What was Constantine’s policy toward Christianity?<br/>
            4. What was the Edict of Milan and what effect did it have?<br/>
            5. What were some of the beliefs of the early church?<br/>
            6. What is Rome’s bishop called?<br/>
            7. How did the Romans view Christianity at first?<br/>
            8. What three persons are said to make up the Trinity?<br/>
            9. What effect did Emperor Constantine have on the spread of Christianity?<br/>
            10. Why do you think the bishop of Rome became the most important of all the bishops?<br/>
            11. What beliefs did Jesus preach that might have brought him into conflict with Rome?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener63} value={SS6Essay63}/>

          <span className="days">LESSON 66</span>
          <p>Watch the video <b> Christianity from Judaism to Constantine
          </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/TG55ErfdaeY"/>
          <p>After you watch the video, answer the following questions:<br/>
            1. What does any understanding of Christianity have to start with?<br/>
            2. What was a major idea that the Hebrews developed?<br/>
            3. Why is Abraham important to Jewish people?<br/>
            4. Jesus’s message was particularly important to who? Why do you think? <br/>
            5. What is a crucifixion? Was Jesus the only person to experience this?<br/>
            6. Who killed Jesus? Why?<br/>
            7. Why would people believe that Jesus was the Messiah?<br/>
            8. Why was Paul important to Christianity? Why was his status as a
            Roman citizen important? <br/>
            9. What didn’t Roman religion promise that Christianity did?<br/>
            10. What Emperor converted to Christianity? Why is this important?<br/>
            11. What was the most interesting thing you learned in the video that you didn't know
            before?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener64} value={SS6Essay64}/>

          <span className="days">LESSON 67</span>
          <p className="margin-para">
            <a
              href="https://earth.google.com/web/@17.90693717,-12.41937117,-34606.55899502a,57359668.97d,35y,0.00004064h,18.19296234t,0r/data=CjwSOhIgZjJhMmExN2E0MDZlMTFlOTk5MGE5OWYyYWQ2OTYwMTgiFnNwbC14LXgteC1zcGxhc2hzY3JlZW4"
              target="_blank" rel="noreferrer">
              Play the Google Maps game Carmen Santiago: The keys to the Kremlin Caper. The game may take a few moments
              to load.
              <img src={require("../../public/images/socialstudies/carmen-sandiego.png")} alt="carmen sandiego"/></a>
          </p><br/>

          {/*<textarea className="textArea" onChange={onChangeSS6Listener65} value={SS6Essay65}/>*/}

          <span className="days">LESSON 68</span>
          <p>Watch the video <b>The Fall of Rome </b>by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/3PszVWZNWVA"/>
          <p>After you watch the video, answer the questions that follow. You may need to watch the
            video twice. John Green covers a lot of information quickly.<br/>
            1. What religion did constantine use to unite his empire?<br/>
            2. Who was the reigning leader at the time of the "fall"?<br/>
            3. Why did incorporating barbarians into Rome also lead to the demise of Rome?<br/>
            4. Who is Emperor Justinian and what was his relevance?<br/>
            5. Who was the Roman empire conquered by?<br/>
            6. Why was Rome doomed to fall when it spread?<br/>
            7. What did people in the Roman Empire think of pants? Did they eventually change their
            minds? Why
            or why not?<br/>
            8. Who was Theadora and what did she try to accomplish?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener66} value={SS6Essay66}/>

          <span className="days">LESSON 69</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/15.1_romes_decline_and_legacy.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 15.1 Rome's Decline and Legacy</i></a>
          </p>

          <p>After you complete the reading, answer the following questions:<br/>
            1. Based on the opening story, what do you think about how the Romans treated the
            Goths?<br/>
            2. What problems weakened Rome?<br/>
            3. What problems weakened the Roman Empire?<br/>
            4. What steps did Diocletian take to solve the empire’s problems?<br/>
            5. Why did civil war break out in the Roman Empire?<br/>
            6. How did Constantine change the empire?<br/>
            7. Why was the empire in trouble economically?<br/>
            8. What reforms did Diocletian introduce to solve the empire’s problems?<br/>
            9. What did Constantine do to try to restore the empire to greatness?<br/>
            10. How did constantly changing emperors affect the strength of the Roman Empire?<br/>
            11. Of all the problems listed in this lesson, which one was the most serious in the late
            Roman
            Empire?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener67} value={SS6Essay67}/>

          <span className="days">LESSON 70</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/15.2_romes_decline_and_legacy.pdf")}
                rel="noreferrer"
                target="_blank">Read <i>Chapter 15.2 Rome's Decline and Legacy</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. Why did the Western Roman Empire weaken?<br/>
            2. In what ways was the Western Empire weaker than the Eastern Empire?<br/>
            3. What groups moved into the Roman Empire?<br/>
            4. Why did the Germanic peoples move into Roman territory?<br/>
            5. What caused the weakening of the Western Roman Empire and how did it end?<br/>
            6. Why was the Western Empire more likely to be invaded than the Eastern Empire?<br/>
            7. What pushed the Germanic peoples south and west into Roman territory?<br/>
            8. Why is A.D. 476 considered an important date in Roman history?<br/>
            9. How was the movement of the Huns into Europe related to the fall of Rome? Give reasons
            for
            your
            answer.<br/>
            10. Why didn’t the Romans make the Germanic peoples their allies?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener68} value={SS6Essay68}/>

          <span className="days">LESSON 71</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/15.3_romes_decline_and_legacy.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 15.3 Rome's Decline and Legacy</i></a>
          </p>
          <p>Watch the video <b>The rise and fall of the Byzantime Empire </b>by Leonora Neville</p>
          <Video videoUrl="https://www.youtube.com/embed/Okph9wt8I0A"/>
          <p>After you complete the reading and watch the video, answer the following questions:<br/>
            1. In what ways did Justinian restore the Eastern Roman Empire?<br/>
            2. How did the Byzantine Empire preserve Roman culture?<br/>
            3. Why did the Christian church divide?<br/>
            4. How did governments and the Christian churches interact?<br/>
            6. What happened to the Byzantine Empire?<br/>
            7. What was a cause of the fall of the Byzantine Empire?<br/>
            8. How did Justinian preserve Roman law?<br/>
            9. In what way did the pope have a greater role in government in the west than the head of
            the
            church in the east?<br/>
            10. In what ways was the Eastern Roman Empire different from the Western Roman Empire?<br/>
            11. Why do you think Greek-speaking inhabitants of the Eastern Mediterranean continued to
            call
            themselves Romans until the early 21st century?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener69} value={SS6Essay69}/>

          <span className="days">LESSON 72</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/15.4_romes_decline_and_legacy.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here
            to read <i>Chapter 15.4 Rome's Decline and Legacy</i></a>
          </p>
          <p>After you complete the reading, answer the following questions:<br/>
            1. How did Roman culture differ from Greek culture?<br/>
            2. How did Roman culture influence the languages of Europe?<br/>
            3. How did Roman ideas about architecture and engineering influence builders throughout
            history?<br/>
            4. What elements of Roman construction are still in use?<br/>
            5. What are some examples of Roman technology?<br/>
            6. Which elements of Roman law are found in U.S. law?<br/>
            7. How did Roman writers blend Greek literary styles with their own ideas?<br/>
            8. How did the Romans influence language in modern-day Europe?<br/>
            9. What role did the Byzantine Empire play in the spread of Christianity?<br/>
            10. Which of Rome’s legacies has had the greatest influence on life in the United
            States?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener70} value={SS6Essay70}/>

          <span className="days">LESSON 73</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/Who-Were-the-Vikings.pdf")} rel="noreferrer"
                target="_blank">Read <i>Who were the Vikings? </i></a></p>

          <p>Watch the video <i>The Vikings </i>
            <Video videoUrl="https://www.youtube.com/embed/3xIy7FoiaQY"/>
            1. Where did the Vikings come from (where was their homeland)?<br/>
            2. When the British first saw the Vikings, what did they do?<br/>
            3. Would you say that all of the Vikings were bad? Explain.<br/>
            4. The Vikings were pagans, meaning that they believed in more than one god and did not
            follow the religious beliefs of much of the rest of the world. What religion were most people living in
            Britain?<br/>
            5. The Vikings preferred the land in Britain to their own in Scandinavia. WHy was this?<br/>
            6. What were some special characteristics of the Vikings' longboats that boats from other countries did not
            have?<br/>
            7. What was the most interesting thing you learned about the Vikings?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener71} value={SS6Essay71}/>

          <span className="days">LESSON 74</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/Viking-Traders-and-Explorers.pdf")}
                rel="noreferrer"
                target="_blank">Read <i>Viking Traders and Explorers </i></a>
          </p>
          <p>Watch the video <b>What is Norse Mythology? </b>
            <Video videoUrl="https://www.youtube.com/embed/TXBU9nWdq2g"/>

            1. What countries did the Vikings sail to?<br/>
            2. What items did the Vikings trade?<br/>
            3. In the year 985, which Viking explorer "discovered" America by accident?<br/>
            4. Why did Eric the Red give Greenland that name when it is not green?<br/>
            5. How did the Vikings find their way navigating at sea?<br/>
            6. Describe what longships were like. You can research online to find more
            information. <br/>
            7. From the video, who is Odin?<br/>
            8. What is Thor's weapon and what is he known for?<br/>
            9. Who is your favorite god or goddess? Why?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener72} value={SS6Essay72}/>

          <span className="days">LESSON 75</span>
          <p>Watch the video <b>The Vikings </b>by Crash Course
            <Video videoUrl="https://www.youtube.com/embed/Wc5zUK2MKNY"/>
            1. What are some countries that the Vikings came from?<br/>
            2. John Green states in the video that the Vikings were mostly "agriculturalists."
            What does that
            mean?<br/>
            3. Why did the Vikings settle in Iceland and Greenland?<br/>
            4. How are we abe to know about the Viking age?<br/>
            5. What reason does John Green give to explain why we tend to only remember Viking
            mythology and
            barbarian attacks?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener73} value={SS6Essay73}/>

          <span className="days">LESSON 76</span>
          <p>Watch the video <b>The Dark Ages... How Dark Were They, Really? </b> by Crash
            Course</p>
          <Video videoUrl="https://www.youtube.com/embed/QV7CanyzhZg"/>
          <p>
            1. Why is this period known as the Dark Ages?<br/>
            2. What did Europe lack during the Dark Ages?<br/>
            3. Why did people have a slightly longer life expectancy during the Medieval
            times?<br/>
            4. What is Feudalism?<br/>
            5. What types of classes existed in Feudalism?<br/>
            6. Why was it so horrible to be a peasant in Feudal system?<br/>
            7. Where did the Umayyad dynasty exist during this time? Where was their
            capital?<br/>
            8. Why was the Umayyad dynasty overthrown? Who took their place?<br/>
            9. Who conquered the Abbasid Dynasty?<br/>
            10. Why was the Abbasid Caliphate weaker? (politically and military)?<br/>
            11. What should you remember if you ever become an emperor?<br/>
            12. How did the Arab culture influence the world during this time?<br/>
            13. Besides Baghdad, what was another center of learning?<br/>
            14. Who stopped China from conquering all of central Asia?<br/>
            15. What influence did the Tang Dynasty have on the arts?<br/>
            16. What influence did the Song Dynasty have on the world?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener74} value={SS6Essay74}/>

          <span className="days">LESSON 77</span>
          <p>Watch the video <b>Medieval Europe</b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/rNCw2MOfnLQ"/>
          <p>
            1. What was the Black Death?<br/>
            2. The Western Schism (Great Schism) was a split within the Catholic Church
            lasting from 1378 to
            1417 in which two men (by 1410 three) simultaneously claimed to be the true
            pope, and each
            excommunicated one another. Why do you think this schism happened and what
            damage do you think it
            caused the Catholic Church?<br/>
            3. Which countries fought during the Hundreds Years War? Did they constantly
            fight throughout the
            116 year period?<br/>
            4. What was the "Little Ice Age"?<br/>
            5. Who was Joan of Arc and what about her made her exceptional?<br/>
            6. Was Charles VII of France a good or bad leader? Explain. What did he do?<br/>
            7. Was Pope Boniface VIII a good or bad leader? Explain.<br/>
            8. Where is the Hagia Sophia? What does the name Hagia Sophia translate to?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener75} value={SS6Essay75}/>

          <span className="days">LESSON 78</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.1_Early_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.1 The Early
            Middle Ages: </i>The Geography of Europe</a>
          </p>

          <p>
            1. Based on its geography, in which part of Europe would you want to live? Why
            would you want to
            live there?<br/>
            2. Where do most people in southern Europe live? <br/>
            3. Do you think Europe's major farming regions are in the north or the south?
            Why?<br/>
            4. How might the region's climate affect how people live in Scandinavia?<br/>
            5. If you were a noble living in northern Europe, what might your life be like?
            How would the
            landforms and climate affect people in your area? <br/>
            6. Why might you need the protection of knights?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener76} value={SS6Essay76}/>

          <span className="days">LESSON 79</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.2_Early_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.2 Europe After the Fall of Rome </i></a></p>
          <p>
            1. What two groups of people were largely responsible for the northern spread of
            Christianity?<br/>
            2. In what way was the empire of the Franks under Charlemagne like the Roman
            Empire?<br/>
            3. How do you think the building of new monasteries helped spread
            Christianity?<br/>
            4. Why did missionaries travel to northern Europe?<br/>
            5. What do you think Charlemagne's greatest accomplishment was? Why?<br/>
            6. Why were people in Europe so frightened of Viking raids?<br/></p>

          <textarea className="textArea" onChange={onChangeSS6Listener77} value={SS6Essay77}/>

          <span className="days">LESSON 80</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.3_Early_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.3 </i></a>
          </p>
          <p>
            1. What were women's lives like during the Middle Ages?<br/>
            2. How did knights and lords try to make their manors self-sufficient?<br/>
            3. How was feudalism related to medieval Europe's economic system?<br/>
            4. Do you think knights or lords benefited more from feudalism? Why?<br/>
            5. How did William the Conqueror help spread feudalism?<br/>
            6. What was a typical manor like?<br/>
            7. How do you think most serfs felt about the manor system?<br/>
            8. What led to the growth of Europe's population in the Middle Ages?<br/>
            9. Why do you think many peasants left their farms for cities?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener78} value={SS6Essay78}/>

          <span className="days">LESSON 81</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.4_Early_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.4 Feudal Societies</i></a>
          </p>
          <p>
            1. What were three characteristics knights and samurai shared?<br/>
            2. Why do you think feudal systems developed in both Europe and Japan?<br/>
            3. What religion were most people in medieval Europe? <br/>
            4. What religions influenced most people in Japan?<br/>
            5. In your opinion, were European and Japanese societies more similar to or
            different
            from each other? Explain your answer.<br/>
            6. Who were the Japanese counterparts of medieval knights?<br/>
            7. How did art and literature differ between Europe and Japan?<br/>
            8. Why do you think people wrote about knights and samurai in literature?<br/>
            6. Think about chivalry. What kinds of rules will you expect your knights to
            follow?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener79} value={SS6Essay79}/>

          <span className="days">LESSON 82</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.5_Later_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.5 The Later Middle Ages: Popes &amp; Kings </i></a>
          </p>
          <p>
            1. What was the pope's role in the Roman Catholic Church? <br/>
            2. How did cooperation with the pope help kings like Charlemagne and the early
            Holy Roman
            Emperors?<br/>
            2. Why did Pope Leo IX excommunicate the bishop of Constantinople?<br/>
            3. With whom did Pope Gregory VII clash?<br/>
            4. Why do you think the pope made Emperor Henry V wait for three days before
            forgiving him?<br/>
            5. What was the relationship between Charlemagne and the pope like?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener80} value={SS6Essay80}/>

          <span className="days">LESSON 83</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.6_Later_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.6 The Crusades</i></a>
          </p>
          <p>1. What was the main goal of the Crusades?<br/>
            2. Why do you think the Crusades changed the relationships between Christians
            and other groups?<br/>
            3. Which Crusade do you think was the most successful? Which was least
            successful? Why?<br/>
            4. What did Pope Urban II ask Christians to do? <br/>
            5. Why do you think so many people were willing to go on a Crusade? <br/>
            6. In which Crusade did Saladin and King Richard I fight?<br/>
            7. Why did the Crusades change relationships between
            Christians and other groups?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener81} value={SS6Essay81}/>

          <span className="days">LESSON 84</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.7_Later_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.7 Christianity and Medieval Society </i></a>
          </p>
          <p>1. How did Christianity shape art and education in the Middle
            Ages?<br/>
            2. Why was Christianity so influential in so many areas of medieval life?<br/>
            3. How were the changes that took place in the medieval church related to its
            growing power and
            wealth?<br/>
            4. Why did people go on pilgrimages?<br/>
            5. What new monastery founded in France in the 900s served as an example to
            people around
            Europe?<br/>
            6. How were friars different from monks? <br/>
            7. How did Thomas Aquinas think reason and faith could work together?<br/>
            8. What new style of religious architecture developed in Europe in the
            1100s?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener82} value={SS6Essay82}/>

          <span className="days">LESSON 85</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.8_Later_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i> 16.8 Political and Social Change </i></a>
          </p>
          <p>1. What was the Black Death, and how did it affect Europe?<br/>
            2. Why do some people consider Magna Carta to represent the beginning of
            democracy in England?<br/>
            3. How might Europe's history have been different if England had won the Hundred
            Years' War?<br/>
            4. What document did English nobles hope would limit the king's power?<br/>
            5. How was the creation of Parliament a step toward the creation of democracy in
            England?<br/>
            6. What was the Black Death?<br/>
            7. How did the Black Death contribute to the decline of the manor system?<br/>
            8. Why do you think the Black Death was able to
            spread so quickly through Europe?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener83} value={SS6Essay83}/>

          <span className="days">LESSON 86</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/16.9_Later_Middle_Ages.pdf")} rel="noreferrer"
                target="_blank">Read <i>16.9 Challenges to Church Authority </i></a>
          </p>
          <p>1. What is heresy?<br/>
            2. Why did the church send priests and friars to find heretics?<br/>
            3. Who did Spanish Christians try to drive out of their lands?<br/>
            4. What was the purpose of the Spanish Inquisition?<br/>
            5. How might Spanish history have been different if the Spanish had not defeated
            the Moors?<br/>
            6. How did kings and other rulers punish Jews in
            the Middle Ages?<br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener84} value={SS6Essay84}/>

          <span className="days">LESSON 87</span>
          <p>Watch the video <b> The Renaissance: Was it a Thing? </b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/Vufba_ZcoR0"/>
          <p>
            1. What are the basic characteristics of Renaissance art and architecture?<br/>
            2. What is meant by the term humanism in the Renaissance: What subjects did
            humanists study?<br/>
            3. Why was the Renaissance spawned in Italy?<br/>
            4. What were the two reasons why Italian Renaissance city-states were so
            wealthy?<br/>
            5. In what ways did the Islamic World help create the Renaissance?<br/>
            6. What reasons does host John Green give to argue that the Renaissance did
            not actually happen?<br/>
            7. If the Renaissance did not happen, then why do we put so much importance on
            it today?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener85} value={SS6Essay85}/>

          <span className="days">LESSON 88</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/17.1_Renaissance.pdf")} rel="noreferrer"
                target="_blank">Click here to read
            <i>17.1 The Renaissance</i></a>
          </p>
          <p>
            1. How did Florence rise to fame?<br/>
            2. Who was Marco Polo, and how did he affect trade?<br/>
            3. What road did Marco Polo travel to Asia?<br/>
            4. What were the four great trading cities of Italy and how were they similar?<br/>
            5. How were these cities important economically?<br/>
            6. Did the Black Death help bring about the Renaissance? Why or why not?<br/>
            7. What means of transportation would a trader use to get from Venice to
            Damascus?<br/>
            8. What is one reason why education was important to Cosimo de' Medici?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener86} value={SS6Essay86}/>

          <span className="days">LESSON 89</span>
          <p>Watch the video <b> Florence and the Renaissance</b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/tecocKSclwc"/>
          <p>
            1. What two cultures were “rediscovered” during the Italian Renaissance?<br/>
            2. What two areas of life or culture could we see these ancient “ideas”
            imitated?<br/>
            3. What did humanists spend their time and energy studying? (provide some
            specific examples)<br/>
            4. Why were the cities of Milan, Florence and Venice so wealthy during the
            1400 and 1500s? How
            did this promote the Renaissance?<br/>
            5. How did the Medici family get so rich, powerful and famous?<br/>
            6. Besides trade, what role did the Muslim world play in helping start the
            Renaissance?<br/>
            7. What was John Greene’s main point in his argument that the Renaissance
            didn’t occur?<br/>
            8. Do you agree or disagree with his argument? Explain. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener87} value={SS6Essay87}/>

          <span className="days">LESSON 90</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/17.2_Renaissance.pdf")} rel="noreferrer"
                target="_blank">Click here to read
            <i> 17.2 The Italian Renaissance </i></a>
          </p>
          <p>1. What contributions did Dante Alighieri and Niccolo Machiavelli
            make to the Renaissance?<br/>
            2. What are some characteristics that Michelangelo and Leonardo da Vinci
            shared?<br/>
            3. A historian has said that the Renaisance "created something new from
            something old." What does this statement mean?<br/>
            4. How did ancient texts and statues affect Renaissance scholars?<br/>
            5. What set Dante apart from earlier Italian writers?<br/>
            6. Why may a historian call Niccolo Machiavelli the first modern
            Italian?<br/>
            7. What are three techniques for showing perspective? <br/>
            8. What are some characteristics of art by Raphael, Botticelli, and
            Titian?<br/>
            9. Which artist would you rather have met in real life- Michelangelo or
            Leonardo da Vinci? What is the reason for your choice?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener88} value={SS6Essay88}/>

          <span className="days">LESSON 91</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/17.3_Renaissance.pdf")} rel="noreferrer"
                target="_blank">Click here to read
            <i> 17.3 The Renaissance beyond Italy</i></a>
          </p>
          <p>
            1. What were two inventions that helped spread the Renaissance spread beyond
            Italy?<br/>
            2. Contrast How was Northern European art different from Italian art?<br/>
            3. Evaluate William Shakespeare is often called the greatest writer in the
            English language. Why is
            this so?<br/>
            4. How did Johann Gutenberg's machine work?<br/>
            What was Desiderius Erasmus's position on church rituals?<br/>
            5. How did Christian humanism differ from the earlier form of humanism that
            developed in Italy?<br/>
            6. What is the connection between humanism and painting people working in
            the fields? <br/>
            7. What is one thing that Miguel de Cervantes and William Shakespeare had in
            common with Dante?<br/>
            8. Why have Shakespeare's works remained popular around the world for
            centuries?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener89} value={SS6Essay89}/>

          <span className="days">LESSON 92</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/WriteAStory.pdf")} rel="noreferrer"
                target="_blank"><b>Write a Historical Narrative</b></a></p>
          <p>Write a fictional historical narrative set in Europe during the
            Renaissance. <a href={require("../resources/social-studies/ss-pdfs6th/WriteAStory.pdf")} rel="noreferrer"
                            target="_blank">This attachment </a>
            will walk you through the steps on how to write your narrative. </p>
          <p>
            <ul className="list">
              <li>Think about what will happen in your story.</li>
              <li>How will you describe where and when it will take place?</li>
              <li>Who will your characters be? Which character will tell the story?</li>
              <li>What difficulty will your characters have to overcome?</li>
              <li>How will your story end?</li>
            </ul>
          </p>
          <textarea className="textArea"
                    placeholder="Write your Historical Narrative here.  Be sure to back up your work."
                    onChange={onChangeSS6Listener90} value={SS6Essay90}/>

          <span className="days">LESSON 93</span>
          <p>Watch the video <b>Luther and the Protestant Reformation</b> by Crash
            Course</p>
          <Video videoUrl="https://www.youtube.com/embed/1o8oIELbNxE"/>
          <br/>

          <p>
            1. Before the Protestant Reformation, what was the dominant or main type of Christianity in Europe? What
            made it so powerful?<br/>
            2. What were indulgences? Why did Martin Luther disagree with them, and how did he show it?<br/>
            3. How did the printing press help Luther become so influential?<br/>
            4. How did Luther's protests against the Church lead to other denominations or forms of Christianity?<br/>
            5. Why were some European political leaders, such as Kings and Dukes, attracted to Luther’s movement?<br/>
            6. How could supporting Luther benefit them?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener91} value={SS6Essay91}/>

          <span className="days">LESSON 94</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/18.1_Reformation_of_Christianity.pdf")}
                rel="noreferrer" target="_blank">Read <i>18.1 Reformation of Christianity: </i>The Protestant
            Reformation</a>
          </p>
          <p>
            1. What were three complaints people had about the Roman Catholic Church in the early 1500s?<br/>
            2. What was Martin Luther's list of complaints about the Roman Catholic Church called?<br/>
            3. How did Luther's ideas about interpreting the Bible differ from Catholics' ideas?<br/>
            4. What did King Henry VIII do that makes him a Reformation figure?<br/>
            5. How did John Calvin's ideas affect life in Geneva?<br/>
            6. How might William Tyndale's life have been different if he had lived after Henry VIII broke away from the
            Catholic Church?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener92} value={SS6Essay92}/>

          <span className="days">LESSON 95</span>
          <p>Watch the video <b>Catholic Counter-Reformation </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/xy_M4pDjafo"/>
          <br/>
          <p>
            1. What did the church do when they were faced with the challenge of Protestantism? <br/>
            2. What happened when the Catholic church made attempts to reform the church?<br/>
            3. What was the Papal Index?<br/>
            4. Describe the Jesuits and what they worked to accomplish.<br/>
            5. Describe how Jesuits tried to adapt their strategies to different parts of the world in order to convince
            people in other countries and cultures to convert.<br/>
            6. Briefly summarize your thoughts/opinions about the Catholic Counter-Reformation.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener93} value={SS6Essay93}/>

          <span className="days">LESSON 96</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/18.2_Reformation_of_Christianity.pdf")}
                rel="noreferrer" target="_blank">Read <i>18.2 The Catholic Reformation</i></a>
          </p>
          <p>
            1. Why was the Catholic Church stronger in Spain than in many other parts of Europe?<br/>
            2. What religious order did Ignatius of Loyola create?<br/>
            3. How did the Catholic Church try to fight the spread of Protestant ideas?<br/>
            4. Which do you think was a better way to reform the Catholic Church, new religious orders or the Council of
            Trent? Why?<br/>
            5. Where did Catholic missionaries travel?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener94} value={SS6Essay94}/>

          <span className="days">LESSON 97</span>
          <p><a href={require("../resources/social-studies/ss-pdfs6th/18.3_Reformation_of_Christianity.pdf")}
                rel="noreferrer" target="_blank">Read <i>18.3 Effects of Reformation </i></a>
          </p>
          <p>
            1. Why do you think the Catholic Church had more influence in southern Europe?<br/>
            2. Where did the Thirty Years' War begin?<br/>
            3. What started the wars of religion in France?<br/>
            4. What were two areas of society that changed as a result of the Reformation?<br/>
            5. How did the Reformation lead to the growth of federalism?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS6Listener95} value={SS6Essay95}/>

          <span className="days" style={{ color: "#3a4563" }}><b>GEOGRAPHY</b></span> <br/>
          <p> This next segment will focus on learning about the geography of Europe.
            After watching a short video about a European country, you will be asked to answer several questions based
            on what you learned. Read
            the questions ahead of time as it will help you take notes while watching the videos. You will then
            practice locating European countries on a map.</p>
          <br/><span className="days">LESSON 98</span>
          <p>Watch the video below about<b> Albania. </b>Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/9WZ06pTuqV0?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning behind the colors and/or the design? If the flag is not discussed in the video, research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Post your score from <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap
              Map </a>(instructions below).
          </p><br/>
          <p>After you finish questions 1-7 above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                            target="_blank">Tap
            Map to practice European geography for 20 minutes.</a><br/>
            <span style={{ color: "#4f5979" }}> a) Select Europe under 'Select Region Quiz' and play Tap Map until the timer goes off.
               Click <a href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">here to start a 20 MINUTE
                TIMER. </a><br/>
              b) Try to memorize each country's location.  When you tap on a country, the name will appear.
              After you practice, take the quiz on Europe. Each time you
              retake the quiz, your score should improve.  In a couple of weeks, you should be able to locate every European country!<br/>
               c) Record your final score below.</span></p>

          <textarea className="textArea" placeholder="Answer the questions and post your score from Tap Map."
                    onChange={onChangeSS6Listener96} value={SS6Essay96}/>

          <span className="days">LESSON 99</span>
          <p>Watch the video below about<b> Andorra.</b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/POOvmkhlUD4?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning behind the colors and/or the design? If the flag is not discussed in the video, research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map</a> score for today.
          </p>
          <p><span style={{ color: "#4f5979" }}>After you finish the questions above, go to <a
            href="https://tapmap.simpledzn.com">Tap
            Map</a> to learn where countries are located.<br/>
            Practice for about 5-10 minutes, then spend another 10 -15 minutes taking the quiz. Go back to
            practicing where countries are located after each quiz to memorize their location.
            Set a <a href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer. </a>
             Record your final score below. </span><br/></p>
          <textarea className="textArea" onChange={onChangeSS6Listener97} value={SS6Essay97}/>

          <span className="days">LESSON 100</span>
          <p>Watch the video below about<b> Austria.</b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/hKsGmyhsKFA?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p>After you finish the questions above, go to <a href="https://tapmap.simpledzn.com" rel="noreferrer"
                                                            target="_blank">Tap
            Map</a> to learn where countries are located.<br/>
            <span className='smallerFont'>Practice for about 5 minutes, then spend another 10 -15 minutes taking the quiz. Go back to
              the practice after each quiz to memorize the countries you get incorrect.<br/>
              Click here to <a href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">set a 20 minute timer. </a>
              Record your final score below.</span></p>
          <br/>
          <textarea className="textArea" onChange={onChangeSS6Listener98} value={SS6Essay98}/>

          <span className="days">LESSON 101</span>
          <p>Watch the video below about<b> Armenia. </b> Then answer the questions that follow:</p>
          <Video videoUrl="https://www.youtube.com/embed/sL4JK_bDo0A?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising. <br/>
            8. <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">TAP MAP</a> quiz score for today.
          </p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a> to memorize and quiz yourself on
              country location. Do this until the timer goes off.</span></p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener99} value={SS6Essay99}/>

          <span className="days">LESSON 102</span>
          <p>Watch the video below about<b> Azerbaijan. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/DqVPVRmRIU8?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country
              location. Do this until the timer goes off.</span></p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener100} value={SS6Essay100}/>

          <span className="days">LESSON 103</span>
          <p>Watch the video below about<b> Bulgaria. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/SlVmp7zBbKU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p> <span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>
              and then go to <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country
              location. Do this until the timer goes off.</span></p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener102} value={SS6Essay102}/>

          <span className="days">LESSON 104</span>
          <p>Watch the video below about<b> Bosnia and Herzegovina. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/KO0rEwwyB0g?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener103} value={SS6Essay103}/>

          <span className="days">LESSON 105</span>
          <p>Watch the video below about<b> Belarus. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/nASqSOtXkhk?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener104} value={SS6Essay104}/>

          <span className="days">LESSON 106</span>
          <p>Watch the video below about<b> Belgium. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/0TuMvWCbM-g?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener105} value={SS6Essay105}/>

          <span className="days">LESSON 107</span>
          <p>Watch the video below about<b> Croatia. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/Ok5LmqoromI?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener106} value={SS6Essay106}/>

          <span className="days">LESSON 108</span>
          <p>Watch the videos below about<b> Cyprus. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/4w_Vc_7irhM?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/yJ7-30I0I4o?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener107} value={SS6Essay107}/>

          <span className="days">LESSON 109</span>
          <p>Watch the videos below about the<b> Czech Republic. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/-kaF6SnSEo8?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/n7QdS-W_HYU?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener108} value={SS6Essay108}/>

          <span className="days">LESSON 110</span>
          <p>Watch the videos below about<b> Denmark. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/Hp0-YP3lADk?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/IFYkJtSnUjo?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener109} value={SS6Essay109}/>

          <span className="days">LESSON 111</span>
          <p>Watch the videos below about<b> Estonia. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/1TTPq38LyPU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/FskySq7GPEA?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>

          <textarea className="textArea" onChange={onChangeSS6Listener110} value={SS6Essay110}/>

          <span className="days">LESSON 112</span>
          <p>Watch the video below about<b> Rep. of North
            Macedonia</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/hoBQRhNbreI?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/DAIyRVxrjP4?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener111} value={SS6Essay111}/>

          <span className="days">LESSON 113</span>
          <p>Watch the videos below about<b> France. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/g0QrBphsioM?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/QrSnDl4Wowc?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener112} value={SS6Essay112}/>

          <span className="days">LESSON 114</span>
          <p>Watch the videos below about<b> Finland</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/DxxZOsfsIUM?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/Q5EtPnFHv9Y?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener113} value={SS6Essay113}/>

          <span className="days">LESSON 115</span>
          <p>Watch the videos below about<b> Georgia</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/YWXvDxovfM4?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/3pApsofDrGE?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener114} value={SS6Essay114}/>

          <span className="days">LESSON 116</span>
          <p>Watch the videos below about<b> Germany</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/wuClZjOdT30?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/WHd28MTV4cE?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener115} value={SS6Essay115}/>

          <span className="days">LESSON 117</span>
          <p>Watch the videos below about<b> Greece</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Cp3yabqF4Uw?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/cwJ4gdcArmg?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener116} value={SS6Essay116}/>

          <span className="days">LESSON 118</span>
          <p>Watch the videos below about<b> Hungary</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/omx66rFK5yM?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/GwWCepOCn-g?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener117} value={SS6Essay117}/>

          <span className="days">LESSON 119</span>
          <p>Watch the video below about<b> Ireland</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/yWZiO7YNoPQ?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/HpIPtsWH4KU"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the
            meaning behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener118} value={SS6Essay118}/>

          <span className="days">LESSON 120</span>
          <p>Watch the video below about<b> Italy</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/G_KMybIvv4c?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/jo6-0q90DZs?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener119} value={SS6Essay119}/>

          <span className="days">LESSON 121</span>
          <p>Watch the video below about<b> Latvia</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/3_kocBCsIbk?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/J6lyU-n8JbE?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is
            the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener120} value={SS6Essay120}/>

          <span className="days">LESSON 122</span>
          <p>Watch the video below about<b> Lithuania. </b></p>
          <Video videoUrl="https://www.youtube.com/embed/9Yxwjy4pvsM?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/r6IF967vlqg?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener121} value={SS6Essay121}/>

          <span className="days">LESSON 123</span>
          <p>Watch the video below about<b> Luxembourg</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Bw8g_1VEEL8?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/T779caWg1n4?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener122} value={SS6Essay122}/>

          <span className="days">LESSON 124</span>
          <p>Watch the video below about<b> Liechtenstein</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/rTiLTnWM7vQ?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/mYEdK4Jp91c?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>

          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning behind the colors and/or the design? If the flag is not research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener123} value={SS6Essay123}/>

          <span className="days">LESSON 125</span>
          <p>Watch the video below about<b> Malta</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/Qee_dxMvids?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/btNqrzqTqlg?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>   and then go to <a href="https://tapmap.simpledzn.com">Tap Map </a>to memorize and quiz yourself on where European countries are located.  Record your final score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener124} value={SS6Essay124}/>

          <span className="days">LESSON 126</span>
          <p>Watch the video below about<b> Moldova</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/cARe_1cRj6E?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/zxXoMs30kZg?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener125} value={SS6Essay125}/>

          <span className="days">LESSON 127</span>
          <p>Watch the video below about<b> Monaco</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/gZ38gYvhiZA?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/Hqs6Rzndelo?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener126} value={SS6Essay126}/>

          <span className="days">LESSON 128</span>
          <p>Watch the video below about<b> Montenegro</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/uBjUOtlnm5Y?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/J9NLqHWJ0-s?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning behind the colors and/or the design? If the flag is not discussed in the video, research it
            online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener127} value={SS6Essay127}/>

          <span className="days">LESSON 129</span>
          <p>Watch the video below about<b> Netherlands</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/f4TmQEZzsec?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <Video videoUrl="https://www.youtube.com/embed/cc3qclOhxFA?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>
          <textarea className="textArea" onChange={onChangeSS6Listener128} value={SS6Essay128}/>

          <span className="days">LESSON 130</span>
          <p>Watch the video below about<b> Norway</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/bAGhXcYc0o4?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>
          <textarea className="textArea" onChange={onChangeSS6Listener129} value={SS6Essay129}/>

          <span className="days">LESSON 131</span>
          <p>Watch the video below about<b> Poland</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Hn8XXPl1vjU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener130} value={SS6Essay130}/>

          <span className="days">LESSON 132</span>
          <p>Watch the video below about<b> Portugal</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/mq6L8CnNJXc?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener132} value={SS6Essay132}/>

          <span className="days">LESSON 133</span>
          <p>Watch the video below about<b> Romania</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/ZRMbh0wSly0?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener133} value={SS6Essay133}/>

          <span className="days">LESSON 134</span>
          <p>Watch the video below about<b> Russia</b> by Geography
            Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/K8zAbdYx9SU?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>
          <textarea className="textArea" onChange={onChangeSS6Listener134} value={SS6Essay134}/>

          <span className="days">LESSON 135</span>
          <p>Watch the video below about<b> San Marino</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/SU4W_tIFbTc?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What
            is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener135} value={SS6Essay135}/>

          <span className="days">LESSON 136</span>
          <p>Watch the video below about<b> Serbia</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/1pxrIj9Xyps?list=PLR7XO54Pktt-h8T-dtr4MXy0_MpbWukHW"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Practice until you are able to locate every country in Europe.</p>

          <textarea className="textArea" onChange={onChangeSS6Listener136} value={SS6Essay136}/>

          <span className="regions">Middle Eastern Countries</span><br/>

          <span className="days">LESSON 137</span>
          <p>Watch the video below about<b> Bahrain</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/P2gHUcwZbYk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>

          <p>- After you finish the questions above, go to <a href="https://online.seterra.com/en/vgp/3049"
                                                              rel="noreferrer" target="_blank">The Middle East:
            Countries - Map Quiz Game </a> to
            continue quizzing yourself on Middle Eastern Countries.<br/>
            - Practice for 20 minutes. <a href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">Set
              a 20 minute
              timer. </a><br/>
            - Record your final score below.</p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener137} value={SS6Essay137}/>

          <span className="days">LESSON 138</span>
          <p>Watch the video below about<b> Egypt</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/jdNw0g7SOMc?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like
            it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener138} value={SS6Essay138}/>

          <span className="days">LESSON 139</span>
          <p>Watch the video below about<b> Iran</b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/2xQM4Zy5zIk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener139} value={SS6Essay139}/>

          <span className="days">LESSON 140</span>
          <p>Watch the video below about<b> Iraq</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/YHQqsx9wsnc?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you
            like it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them
            all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener140} value={SS6Essay140}/>

          <span className="days">LESSON 141</span>
          <p>Watch the video below about<b> Israel</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/AWKmazrRIwA?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you
            like it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them
            all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If
            so, explain.<br/>
            5. List a few ways that this country is different than where you
            live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or
            surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS6Listener141} value={SS6Essay141}/>
          <span className="days">LESSON 142</span>
          <p>Watch the video below about<b> Jordan</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/aWfu0BKOZ5g?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener142} value={SS6Essay142}/>

          <span className="days">LESSON 143</span>
          <p>Watch the video below about<b> Kuwait</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/S_pUIeE4Eko?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener143} value={SS6Essay143}/>

          <span className="days">LESSON 144</span>
          <p>Watch the video below about<b> Lebanon</b> by Geography
            Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/vvgLLqpRT6s?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener144} value={SS6Essay144}/>

          <span className="days">LESSON 145</span>
          <p>Watch the video below about<b> Oman</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/mw-gmjzN4Fw?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener145} value={SS6Essay145}/>

          <span className="days">LESSON 146</span>
          <p>Watch the video below about<b> Qatar</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/oqfW7xn215o?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener146} value={SS6Essay146}/>

          <span className="days">LESSON 147</span>
          <p>Watch the video below about<b> Saudi
            Arabia</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tP68QwVvAZk?list=PLMRyiKpIukC-FPqtWyOee_dFYMeVie49H"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East: Countries - Map Quiz Game </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener147} value={SS6Essay147}/>

          <span className="days">LESSON 148</span>
          <p>Watch the video:<b> The difference between Arab Countries</b> by Geography Now. Then answer the questions
            that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/j7MiI9pZaxk"/>
          <p> 1. What new things did you learn?<br/>
            2. What were interesting things you learned about the various countries' flags?<br/>
            3. List three things you found to be very interesting or surprising in the video.<br/>
            4. Your <a href="https://online.seterra.com/en/vgp/3049" rel="noreferrer" target="_blank">The Middle East:
              Countries - Map Quiz Game </a>score for
            today.</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener148} value={SS6Essay148}/><br/>
          <span className="regions">North &amp; Central America</span><br/>

          <span className="days">LESSON 149</span>
          <p>Watch the video below about<b> Canada</b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/SxhUsPBFPkU?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener149} value={SS6Essay149}/>

          <span className="days">LESSON 150</span>
          <p>Watch the videos below about<b> Mexico</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/Kxy74EAjAec?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/oi8MDZqDh-o?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener150} value={SS6Essay150}/>

          <span className="days">LESSON 151</span>
          <p>Watch the videos below about<b> Guatemala</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/L1TSpYN0MBg?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/-ToD8fKbhiw?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener151} value={SS6Essay151}/>

          <span className="days">LESSON 152</span>
          <p>Watch the video below about<b> Honduras</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/ND8PduJlN6A?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener152} value={SS6Essay152}/>

          <span className="days">LESSON 153</span>
          <p>Watch the videos below about<b> Nicaragua</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/rr65vnslEZ0?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/QeJ_e6IxDbo?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener153} value={SS6Essay153}/>

          <span className="days">LESSON 154</span>
          <p>Watch the videos below about<b> El Salvador</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/-t5uzY77zwA?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/1NIFbbRyOfM?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener154} value={SS6Essay154}/>

          <span className="days">LESSON 155</span>
          <p>Watch the video below about<b> Panama</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/P722VC7b9iM?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/bvmOrcSzxWI?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener155} value={SS6Essay155}/>

          <span className="days">LESSON 156</span>
          <p>Watch the video below about<b> Belize</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/3MrYk3kCUGk?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener156} value={SS6Essay156}/>

          <span className="days">LESSON 157</span>
          <p>Watch the video below about<b> Costa Rica </b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/DaBEGru_IEc?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener157} value={SS6Essay157}/>

          <span className="days">LESSON 158</span>
          <p>Watch the video below about<b>Barbados </b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/uvA3DUJCxpY?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener158} value={SS6Essay158}/>

          <span className="days">LESSON 159</span>
          <p>Watch the video below about<b> the Bahamas</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/J9aV4Zn8JJE?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener159} value={SS6Essay159}/>

          <span className="days">LESSON 160</span>
          <p>Watch the video below about<b> Antigua &amp; Barbuda</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/5OpiUD3qtY8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener160} value={SS6Essay160}/>

          <span className="days">LESSON 161</span>
          <p>Watch the videos below about<b> Cuba</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/iQnhoYc2QTg?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/gFA7wpGJJiw?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener161} value={SS6Essay161}/>

          <span className="days">LESSON 162</span>
          <p>Watch the videos below about<b> Dominica</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/OGaML8Gg8JQ?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/Q5nOtEPQoqA?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener162} value={SS6Essay162}/>

          <span className="days">LESSON 163</span>
          <p>Watch the videos below about<b> Dominican Republic</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/dQv3t5VCc3U?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener163} value={SS6Essay163}/>

          <span className="days">LESSON 164</span>
          <p>Watch the video below about<b> Grenada</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/fHZ_cVHPRmM?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <Video videoUrl="https://www.youtube.com/embed/DVlvA4lyInM?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener164} value={SS6Essay164}/>

          <span className="days">LESSON 165</span>
          <p>Watch the video below about<b> Haiti</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/O0G9a2Kn6-Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener165} value={SS6Essay165}/>

          <span className="days">LESSON 166</span>
          <p>Watch the video below about<b> Jamaica</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/LaLumU4pSf8?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener166} value={SS6Essay166}/>

          <span className="days">LESSON 167</span>
          <p>Watch the video below about<b> St Kitts &amp; Nevis</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/y5FPRLgQ41Q?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener167} value={SS6Essay167}/>

          <span className="days">LESSON 168</span>
          <p>Watch the video below about<b> St Vincent &amp; the Grenadines</b> by Geography Now. Then answer the
            questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/E5DV8mD9_eQ?list=PLR7XO54Pktt8Ui5oXABHerdCzzHg9noTw"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener168} value={SS6Essay168}/>

          <span className="days">LESSON 169</span>
          <p>Watch the video below about<b> Bolivia</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/AJx1RcIO61I?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener169} value={SS6Essay169}/>

          <span className="days">LESSON 170</span>
          <p>Watch the video below about<b> Argentina</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/1U0N4SGL46A?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener170} value={SS6Essay170}/>

          <span className="days">LESSON 171</span>
          <p>Watch the video below about<b> Brazil</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/JFfcD-SkqIc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener171} value={SS6Essay171}/>

          <span className="days">LESSON 172</span>
          <p>Watch the video below about<b> Chile</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8P4Hi99hUJc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener172} value={SS6Essay172}/>

          <span className="days">LESSON 173</span>
          <p>Watch the video below about<b> Colombia</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/rTsPaAIJdnw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener173} value={SS6Essay173}/>

          <span className="days">LESSON 174</span>
          <p>Watch the videos below about<b> Ecuador</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/7jzB0YVBUOs?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <Video videoUrl="https://www.youtube.com/embed/cMEz5He5aG0?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener174} value={SS6Essay174}/>

          <span className="days">LESSON 175</span>
          <p>Watch the video below about<b> Guyana</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/tr5xeKcHGqw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <textarea className="textArea" onChange={onChangeSS6Listener175} value={SS6Essay175}/>          <p> 1.
          Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind the
          colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
          2. What language do they speak? If they speak more than one, list them all.<br/>
          3. Would you ever want to live there? Why or why not.<br/>
          4. Did you learn anything about their history, economy or government? If so, explain.<br/>
          5. List a few ways that this country is different than where you live.<br/>
          6. Describe what you learned about the land and physical geography. <br/>
          7. List three things about the country you found to be very interesting or surprising.<br/>
          8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
          today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>


          <span className="days">LESSON 176</span>
          <p>Watch the video below about<b> Paraguay</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8wbNEJjBa0k?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener176} value={SS6Essay176}/>

          <span className="days">LESSON 177</span>
          <p>Watch the videos below about<b> Peru</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/x0XCXGXGZMs?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <Video videoUrl="https://www.youtube.com/embed/0qKRinI-alU?list=PLR7XO54Pktt-YwmKtu2BLBS7jtVKRP94x"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the colors and/or the design? <br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.</p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/" rel="noreferrer" target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS6Listener177} value={SS6Essay177}/>

          {/*<span className="days">LESSON 178</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS6Listener178} value={SS6Essay178}/>*/}

          {/*<span className="days">LESSON 179</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS6Listener179} value={SS6Essay179}/>*/}

          {/*<span className="days">LESSON 180</span>*/}
          {/*<p>Watch the video below about<b> </b> by Geography Now. Then answer the questions that follow.</p>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/"/>*/}
          {/*<textarea className="textArea" onChange={onChangeSS6Listener180} value={SS6Essay180}/>*/}
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 6th Grade Social Studies! </h3>
    </form>
  )
}

export default SS6Component