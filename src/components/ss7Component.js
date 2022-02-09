import React from "react"
import "../styles/styles.css"
import Video from "../components/video"
import { Link } from "gatsby"
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

const SS7Component = ({ data }) => {

  const [SS7Essay, setSS7Essay] = useLocalStorageState("SS7Essay", "")
  const [SS7Essay2, setSS7Essay2] = useLocalStorageState("SS7Essay2", "")
  const [SS7Essay3, setSS7Essay3] = useLocalStorageState("SS7Essay3", "")
  const [SS7Essay4, setSS7Essay4] = useLocalStorageState("SS7Essay4", "")
  const [SS7Essay5, setSS7Essay5] = useLocalStorageState("SS7Essay5", "")
  const [SS7Essay6, setSS7Essay6] = useLocalStorageState("SS7Essay6", "")
  const [SS7Essay7, setSS7Essay7] = useLocalStorageState("SS7Essay7", "")
  const [SS7Essay8, setSS7Essay8] = useLocalStorageState("SS7Essay8", "")
  const [SS7Essay9, setSS7Essay9] = useLocalStorageState("SS7Essay9", "")
  const [SS7Essay10, setSS7Essay10] = useLocalStorageState("SS7Essay10", "")
  const [SS7Essay11, setSS7Essay11] = useLocalStorageState("SS7Essay11", "")
  const [SS7Essay12, setSS7Essay12] = useLocalStorageState("SS7Essay12", "")
  const [SS7Essay13, setSS7Essay13] = useLocalStorageState("SS7Essay13", "")
  const [SS7Essay14, setSS7Essay14] = useLocalStorageState("SS7Essay14", "")
  const [SS7Essay15, setSS7Essay15] = useLocalStorageState("SS7Essay15", "")
  const [SS7Essay16, setSS7Essay16] = useLocalStorageState("SS7Essay16", "")
  const [SS7Essay17, setSS7Essay17] = useLocalStorageState("SS7Essay17", "")
  const [SS7Essay18, setSS7Essay18] = useLocalStorageState("SS7Essay18", "")
  const [SS7Essay19, setSS7Essay19] = useLocalStorageState("SS7Essay19", "")
  const [SS7Essay20, setSS7Essay20] = useLocalStorageState("SS7Essay20", "")
  const [SS7Essay21, setSS7Essay21] = useLocalStorageState("SS7Essay21", "")
  const [SS7Essay22, setSS7Essay22] = useLocalStorageState("SS7Essay22", "")
  const [SS7Essay23, setSS7Essay23] = useLocalStorageState("SS7Essay23", "")
  const [SS7Essay24, setSS7Essay24] = useLocalStorageState("SS7Essay24", "")
  const [SS7Essay25, setSS7Essay25] = useLocalStorageState("SS7Essay25", "")
  const [SS7Essay26, setSS7Essay26] = useLocalStorageState("SS7Essay26", "")
  const [SS7Essay27, setSS7Essay27] = useLocalStorageState("SS7Essay27", "")
  const [SS7Essay28, setSS7Essay28] = useLocalStorageState("SS7Essay28", "")
  const [SS7Essay29, setSS7Essay29] = useLocalStorageState("SS7Essay29", "")
  const [SS7Essay30, setSS7Essay30] = useLocalStorageState("SS7Essay30", "")
  const [SS7Essay31, setSS7Essay31] = useLocalStorageState("SS7Essay31", "")
  const [SS7Essay32, setSS7Essay32] = useLocalStorageState("SS7Essay32", "")
  const [SS7Essay33, setSS7Essay33] = useLocalStorageState("SS7Essay33", "")
  const [SS7Essay34, setSS7Essay34] = useLocalStorageState("SS7Essay34", "")
  const [SS7Essay35, setSS7Essay35] = useLocalStorageState("SS7Essay35", "")
  const [SS7Essay36, setSS7Essay36] = useLocalStorageState("SS7Essay36", "")
  const [SS7Essay37, setSS7Essay37] = useLocalStorageState("SS7Essay37", "")
  const [SS7Essay38, setSS7Essay38] = useLocalStorageState("SS7Essay38", "")
  const [SS7Essay39, setSS7Essay39] = useLocalStorageState("SS7Essay39", "")
  const [SS7Essay40, setSS7Essay40] = useLocalStorageState("SS7Essay40", "")
  const [SS7Essay41, setSS7Essay41] = useLocalStorageState("SS7Essay41", "")
  const [SS7Essay42, setSS7Essay42] = useLocalStorageState("SS7Essay42", "")
  const [SS7Essay43, setSS7Essay43] = useLocalStorageState("SS7Essay43", "")
  const [SS7Essay44, setSS7Essay44] = useLocalStorageState("SS7Essay44", "")
  const [SS7Essay45, setSS7Essay45] = useLocalStorageState("SS7Essay45", "")
  const [SS7Essay46, setSS7Essay46] = useLocalStorageState("SS7Essay46", "")
  const [SS7Essay47, setSS7Essay47] = useLocalStorageState("SS7Essay47", "")
  const [SS7Essay48, setSS7Essay48] = useLocalStorageState("SS7Essay48", "")
  const [SS7Essay49, setSS7Essay49] = useLocalStorageState("SS7Essay49", "")
  const [SS7Essay50, setSS7Essay50] = useLocalStorageState("SS7Essay50", "")
  const [SS7Essay51, setSS7Essay51] = useLocalStorageState("SS7Essay52", "")
  const [SS7Essay52, setSS7Essay52] = useLocalStorageState("SS7Essay53", "")
  const [SS7Essay53, setSS7Essay53] = useLocalStorageState("SS7Essay54", "")
  const [SS7Essay54, setSS7Essay54] = useLocalStorageState("SS7Essay54", "")
  const [SS7Essay55, setSS7Essay55] = useLocalStorageState("SS7Essay5", "")
  const [SS7Essay56, setSS7Essay56] = useLocalStorageState("SS7Essay56", "")
  const [SS7Essay57, setSS7Essay57] = useLocalStorageState("SS7Essay57", "")
  const [SS7Essay58, setSS7Essay58] = useLocalStorageState("SS7Essay58", "")
  const [SS7Essay59, setSS7Essay59] = useLocalStorageState("SS7Essay59", "")
  const [SS7Essay60, setSS7Essay60] = useLocalStorageState("SS7Essay60", "")
  const [SS7Essay61, setSS7Essay61] = useLocalStorageState("SS7Essay61", "")
  const [SS7Essay62, setSS7Essay62] = useLocalStorageState("SS7Essay62", "")
  const [SS7Essay63, setSS7Essay63] = useLocalStorageState("SS7Essay63", "")
  const [SS7Essay64, setSS7Essay64] = useLocalStorageState("SS7Essay64", "")
  const [SS7Essay65, setSS7Essay65] = useLocalStorageState("SS7Essay65", "")
  const [SS7Essay66, setSS7Essay66] = useLocalStorageState("SS7Essay66", "")
  const [SS7Essay67, setSS7Essay67] = useLocalStorageState("SS7Essay67", "")
  const [SS7Essay68, setSS7Essay68] = useLocalStorageState("SS7Essay68", "")
  const [SS7Essay69, setSS7Essay69] = useLocalStorageState("SS7Essay69", "")
  const [SS7Essay70, setSS7Essay70] = useLocalStorageState("SS7Essay70", "")
  const [SS7Essay71, setSS7Essay71] = useLocalStorageState("SS7Essay71", "")
  const [SS7Essay72, setSS7Essay72] = useLocalStorageState("SS7Essay72", "")
  const [SS7Essay73, setSS7Essay73] = useLocalStorageState("SS7Essay73", "")
  const [SS7Essay74, setSS7Essay74] = useLocalStorageState("SS7Essay74", "")
  const [SS7Essay75, setSS7Essay75] = useLocalStorageState("SS7Essay75", "")
  const [SS7Essay76, setSS7Essay76] = useLocalStorageState("SS7Essay76", "")
  const [SS7Essay77, setSS7Essay77] = useLocalStorageState("SS7Essay77", "")
  const [SS7Essay78, setSS7Essay78] = useLocalStorageState("SS7Essay78", "")
  const [SS7Essay79, setSS7Essay79] = useLocalStorageState("SS7Essay79", "")
  const [SS7Essay80, setSS7Essay80] = useLocalStorageState("SS7Essay80", "")
  const [SS7Essay81, setSS7Essay81] = useLocalStorageState("SS7Essay81", "")
  const [SS7Essay82, setSS7Essay82] = useLocalStorageState("SS7Essay82", "")
  const [SS7Essay83, setSS7Essay83] = useLocalStorageState("SS7Essay83", "")
  const [SS7Essay84, setSS7Essay84] = useLocalStorageState("SS7Essay84", "")
  const [SS7Essay85, setSS7Essay85] = useLocalStorageState("SS7Essay85", "")
  const [SS7Essay86, setSS7Essay86] = useLocalStorageState("SS7Essay86", "")
  const [SS7Essay87, setSS7Essay87] = useLocalStorageState("SS7Essay87", "")
  const [SS7Essay88, setSS7Essay88] = useLocalStorageState("SS7Essay88", "")
  const [SS7Essay89, setSS7Essay89] = useLocalStorageState("SS7Essay89", "")
  const [SS7Essay90, setSS7Essay90] = useLocalStorageState("SS7Essay90", "")
  const [SS7Essay91, setSS7Essay91] = useLocalStorageState("SS7Essay91", "")
  const [SS7Essay92, setSS7Essay92] = useLocalStorageState("SS7Essay93", "")
  const [SS7Essay93, setSS7Essay93] = useLocalStorageState("SS7Essay94", "")
  const [SS7Essay94, setSS7Essay94] = useLocalStorageState("SS7Essay95", "")
  const [SS7Essay95, setSS7Essay95] = useLocalStorageState("SS7Essay96", "")
  const [SS7Essay96, setSS7Essay96] = useLocalStorageState("SS7Essay97", "")
  const [SS7Essay97, setSS7Essay97] = useLocalStorageState("SS7Essay98", "")
  const [SS7Essay98, setSS7Essay98] = useLocalStorageState("SS7Essay98", "")
  const [SS7Essay99, setSS7Essay99] = useLocalStorageState("SS7Essay99", "")
  const [SS7Essay100, setSS7Essay100] = useLocalStorageState("SS7Essay100", "")
  const [SS7Essay101, setSS7Essay101] = useLocalStorageState("SS7Essay101", "")
  const [SS7Essay102, setSS7Essay102] = useLocalStorageState("SS7Essay102", "")
  const [SS7Essay103, setSS7Essay103] = useLocalStorageState("SS7Essay103", "")
  const [SS7Essay104, setSS7Essay104] = useLocalStorageState("SS7Essay104", "")
  const [SS7Essay105, setSS7Essay105] = useLocalStorageState("SS7Essay105", "")
  const [SS7Essay106, setSS7Essay106] = useLocalStorageState("SS7Essay106", "")
  const [SS7Essay107, setSS7Essay107] = useLocalStorageState("SS7Essay107", "")
  const [SS7Essay108, setSS7Essay108] = useLocalStorageState("SS7Essay108", "")
  const [SS7Essay109, setSS7Essay109] = useLocalStorageState("SS7Essay109", "")
  // const [SS7Essay110, setSS7Essay110] = useLocalStorageState("SS7Essay110", "")
  const [SS7Essay111, setSS7Essay111] = useLocalStorageState("SS7Essay111", "")
  const [SS7Essay112, setSS7Essay112] = useLocalStorageState("SS7Essay112", "")
  const [SS7Essay113, setSS7Essay113] = useLocalStorageState("SS7Essay113", "")
  const [SS7Essay114, setSS7Essay114] = useLocalStorageState("SS7Essay114", "")
  const [SS7Essay115, setSS7Essay115] = useLocalStorageState("SS7Essay115", "")
  const [SS7Essay116, setSS7Essay116] = useLocalStorageState("SS7Essay116", "")
  const [SS7Essay117, setSS7Essay117] = useLocalStorageState("SS7Essay117", "")
  const [SS7Essay118, setSS7Essay118] = useLocalStorageState("SS7Essay118", "")
  const [SS7Essay119, setSS7Essay119] = useLocalStorageState("SS7Essay119", "")
  const [SS7Essay120, setSS7Essay120] = useLocalStorageState("SS7Essay120", "")
  const [SS7Essay121, setSS7Essay121] = useLocalStorageState("SS7Essay121", "")
  const [SS7Essay122, setSS7Essay122] = useLocalStorageState("SS7Essay122", "")
  const [SS7Essay123, setSS7Essay123] = useLocalStorageState("SS7Essay123", "")
  const [SS7Essay124, setSS7Essay124] = useLocalStorageState("SS7Essay124", "")
  const [SS7Essay125, setSS7Essay125] = useLocalStorageState("SS7Essay125", "")
  const [SS7Essay126, setSS7Essay126] = useLocalStorageState("SS7Essay126", "")
  const [SS7Essay127, setSS7Essay127] = useLocalStorageState("SS7Essay127", "")
  const [SS7Essay128, setSS7Essay128] = useLocalStorageState("SS7Essay128", "")
  const [SS7Essay129, setSS7Essay129] = useLocalStorageState("SS7Essay129", "")
  const [SS7Essay130, setSS7Essay130] = useLocalStorageState("SS7Essay130", "")
  const [SS7Essay131, setSS7Essay131] = useLocalStorageState("SS7Essay131", "")
  const [SS7Essay132, setSS7Essay132] = useLocalStorageState("SS7Essay132", "")
  const [SS7Essay133, setSS7Essay133] = useLocalStorageState("SS7Essay133", "")
  const [SS7Essay134, setSS7Essay134] = useLocalStorageState("SS7Essay134", "")
  const [SS7Essay135, setSS7Essay135] = useLocalStorageState("SS7Essay135", "")
  const [SS7Essay136, setSS7Essay136] = useLocalStorageState("SS7Essay136", "")
  const [SS7Essay137, setSS7Essay137] = useLocalStorageState("SS7Essay137", "")
  const [SS7Essay138, setSS7Essay138] = useLocalStorageState("SS7Essay138", "")
  const [SS7Essay139, setSS7Essay139] = useLocalStorageState("SS7Essay139", "")
  const [SS7Essay140, setSS7Essay140] = useLocalStorageState("SS7Essay140", "")
  const [SS7Essay141, setSS7Essay141] = useLocalStorageState("SS7Essay141", "")
  const [SS7Essay142, setSS7Essay142] = useLocalStorageState("SS7Essay142", "")
  const [SS7Essay143, setSS7Essay143] = useLocalStorageState("SS7Essay143", "")
  const [SS7Essay144, setSS7Essay144] = useLocalStorageState("SS7Essay144", "")
  const [SS7Essay145, setSS7Essay145] = useLocalStorageState("SS7Essay145", "")
  const [SS7Essay146, setSS7Essay146] = useLocalStorageState("SS7Essay146", "")
  const [SS7Essay147, setSS7Essay147] = useLocalStorageState("SS7Essay147", "")
  const [SS7Essay148, setSS7Essay148] = useLocalStorageState("SS7Essay148", "")
  const [SS7Essay149, setSS7Essay149] = useLocalStorageState("SS7Essay149", "")
  const [SS7Essay150, setSS7Essay150] = useLocalStorageState("SS7Essay150", "")
  const [SS7Essay151, setSS7Essay151] = useLocalStorageState("SS7Essay151", "")
  const [SS7Essay152, setSS7Essay152] = useLocalStorageState("SS7Essay152", "")
  const [SS7Essay153, setSS7Essay153] = useLocalStorageState("SS7Essay153", "")
  const [SS7Essay154, setSS7Essay154] = useLocalStorageState("SS7Essay154", "")
  const [SS7Essay155, setSS7Essay155] = useLocalStorageState("SS7Essay155", "")
  const [SS7Essay156, setSS7Essay156] = useLocalStorageState("SS7Essay156", "")
  const [SS7Essay157, setSS7Essay157] = useLocalStorageState("SS7Essay157", "")
  const [SS7Essay158, setSS7Essay158] = useLocalStorageState("SS7Essay158", "")
  const [SS7Essay159, setSS7Essay159] = useLocalStorageState("SS7Essay159", "")
  const [SS7Essay160, setSS7Essay160] = useLocalStorageState("SS7Essay160", "")
  const [SS7Essay161, setSS7Essay161] = useLocalStorageState("SS7Essay161", "")
  const [SS7Essay162, setSS7Essay162] = useLocalStorageState("SS7Essay162", "")
  const [SS7Essay163, setSS7Essay163] = useLocalStorageState("SS7Essay163", "")
  const [SS7Essay164, setSS7Essay164] = useLocalStorageState("SS7Essay164", "")
  const [SS7Essay165, setSS7Essay165] = useLocalStorageState("SS7Essay165", "")
  const [SS7Essay166, setSS7Essay166] = useLocalStorageState("SS7Essay166", "")
  const [SS7Essay167, setSS7Essay167] = useLocalStorageState("SS7Essay167", "")
  const [SS7Essay168, setSS7Essay168] = useLocalStorageState("SS7Essay168", "")
  const [SS7Essay169, setSS7Essay169] = useLocalStorageState("SS7Essay169", "")
  const [SS7Essay170, setSS7Essay170] = useLocalStorageState("SS7Essay170", "")
  const [SS7Essay171, setSS7Essay171] = useLocalStorageState("SS7Essay171", "")
  const [SS7Essay172, setSS7Essay172] = useLocalStorageState("SS7Essay172", "")
  const [SS7Essay173, setSS7Essay173] = useLocalStorageState("SS7Essay173", "")
  const [SS7Essay174, setSS7Essay174] = useLocalStorageState("SS7Essay174", "")
  const [SS7Essay175, setSS7Essay175] = useLocalStorageState("SS7Essay175", "")
  const [SS7Essay176, setSS7Essay176] = useLocalStorageState("SS7Essay176", "")
  const [SS7Essay177, setSS7Essay177] = useLocalStorageState("SS7Essay177", "")
  const [SS7Essay178, setSS7Essay178] = useLocalStorageState("SS7Essay178", "")
  const [SS7Essay179, setSS7Essay179] = useLocalStorageState("SS7Essay179", "")
  const [SS7Essay180, setSS7Essay180] = useLocalStorageState("SS7Essay180", "")
  const [SS7Essay181, setSS7Essay181] = useLocalStorageState("SS7Essay181", "")
  const [SS7Essay182, setSS7Essay182] = useLocalStorageState("SS7Essay182", "")

  const onChangeSS7Listener = (event) => {
    setSS7Essay(event.target.value)
  }
  const onChangeSS7Listener2 = (event) => {
    setSS7Essay2(event.target.value)
  }
  const onChangeSS7Listener3 = (event) => {
    setSS7Essay3(event.target.value)
  }
  const onChangeSS7Listener4 = (event) => {
    setSS7Essay4(event.target.value)
  }
  const onChangeSS7Listener5 = (event) => {
    setSS7Essay5(event.target.value)
  }
  const onChangeSS7Listener6 = (event) => {
    setSS7Essay6(event.target.value)
  }
  const onChangeSS7Listener7 = (event) => {
    setSS7Essay7(event.target.value)
  }
  const onChangeSS7Listener8 = (event) => {
    setSS7Essay8(event.target.value)
  }
  const onChangeSS7Listener9 = (event) => {
    setSS7Essay9(event.target.value)
  }
  const onChangeSS7Listener10 = (event) => {
    setSS7Essay10(event.target.value)
  }
  const onChangeSS7Listener11 = (event) => {
    setSS7Essay11(event.target.value)
  }
  const onChangeSS7Listener12 = (event) => {
    setSS7Essay12(event.target.value)
  }
  const onChangeSS7Listener13 = (event) => {
    setSS7Essay13(event.target.value)
  }
  const onChangeSS7Listener14 = (event) => {
    setSS7Essay14(event.target.value)
  }
  const onChangeSS7Listener15 = (event) => {
    setSS7Essay15(event.target.value)
  }
  const onChangeSS7Listener16 = (event) => {
    setSS7Essay16(event.target.value)
  }
  const onChangeSS7Listener17 = (event) => {
    setSS7Essay17(event.target.value)
  }
  const onChangeSS7Listener18 = (event) => {
    setSS7Essay18(event.target.value)
  }
  const onChangeSS7Listener19 = (event) => {
    setSS7Essay19(event.target.value)
  }
  const onChangeSS7Listener20 = (event) => {
    setSS7Essay20(event.target.value)
  }
  const onChangeSS7Listener21 = (event) => {
    setSS7Essay21(event.target.value)
  }
  const onChangeSS7Listener22 = (event) => {
    setSS7Essay22(event.target.value)
  }
  const onChangeSS7Listener23 = (event) => {
    setSS7Essay23(event.target.value)
  }
  const onChangeSS7Listener24 = (event) => {
    setSS7Essay24(event.target.value)
  }
  const onChangeSS7Listener25 = (event) => {
    setSS7Essay25(event.target.value)
  }
  const onChangeSS7Listener26 = (event) => {
    setSS7Essay26(event.target.value)
  }
  const onChangeSS7Listener27 = (event) => {
    setSS7Essay27(event.target.value)
  }
  const onChangeSS7Listener28 = (event) => {
    setSS7Essay28(event.target.value)
  }
  const onChangeSS7Listener29 = (event) => {
    setSS7Essay29(event.target.value)
  }
  const onChangeSS7Listener30 = (event) => {
    setSS7Essay30(event.target.value)
  }
  const onChangeSS7Listener31 = (event) => {
    setSS7Essay31(event.target.value)
  }
  const onChangeSS7Listener32 = (event) => {
    setSS7Essay32(event.target.value)
  }
  const onChangeSS7Listener33 = (event) => {
    setSS7Essay33(event.target.value)
  }
  const onChangeSS7Listener34 = (event) => {
    setSS7Essay34(event.target.value)
  }
  const onChangeSS7Listener35 = (event) => {
    setSS7Essay35(event.target.value)
  }
  const onChangeSS7Listener36 = (event) => {
    setSS7Essay36(event.target.value)
  }
  const onChangeSS7Listener37 = (event) => {
    setSS7Essay37(event.target.value)
  }
  const onChangeSS7Listener38 = (event) => {
    setSS7Essay38(event.target.value)
  }
  const onChangeSS7Listener39 = (event) => {
    setSS7Essay39(event.target.value)
  }
  const onChangeSS7Listener40 = (event) => {
    setSS7Essay40(event.target.value)
  }
  const onChangeSS7Listener41 = (event) => {
    setSS7Essay41(event.target.value)
  }
  const onChangeSS7Listener42 = (event) => {
    setSS7Essay42(event.target.value)
  }
  const onChangeSS7Listener43 = (event) => {
    setSS7Essay43(event.target.value)
  }
  const onChangeSS7Listener44 = (event) => {
    setSS7Essay44(event.target.value)
  }
  const onChangeSS7Listener45 = (event) => {
    setSS7Essay45(event.target.value)
  }
  const onChangeSS7Listener46 = (event) => {
    setSS7Essay46(event.target.value)
  }
  const onChangeSS7Listener47 = (event) => {
    setSS7Essay47(event.target.value)
  }
  const onChangeSS7Listener48 = (event) => {
    setSS7Essay48(event.target.value)
  }
  const onChangeSS7Listener49 = (event) => {
    setSS7Essay49(event.target.value)
  }
  const onChangeSS7Listener50 = (event) => {
    setSS7Essay50(event.target.value)
  }
  const onChangeSS7Listener51 = (event) => {
    setSS7Essay51(event.target.value)
  }
  const onChangeSS7Listener52 = (event) => {
    setSS7Essay52(event.target.value)
  }
  const onChangeSS7Listener53 = (event) => {
    setSS7Essay53(event.target.value)
  }
  const onChangeSS7Listener54 = (event) => {
    setSS7Essay54(event.target.value)
  }
  const onChangeSS7Listener55 = (event) => {
    setSS7Essay55(event.target.value)
  }
  const onChangeSS7Listener56 = (event) => {
    setSS7Essay56(event.target.value)
  }
  const onChangeSS7Listener57 = (event) => {
    setSS7Essay57(event.target.value)
  }
  const onChangeSS7Listener58 = (event) => {
    setSS7Essay58(event.target.value)
  }
  const onChangeSS7Listener59 = (event) => {
    setSS7Essay59(event.target.value)
  }
  const onChangeSS7Listener60 = (event) => {
    setSS7Essay60(event.target.value)
  }
  const onChangeSS7Listener61 = (event) => {
    setSS7Essay61(event.target.value)
  }
  const onChangeSS7Listener62 = (event) => {
    setSS7Essay62(event.target.value)
  }
  const onChangeSS7Listener63 = (event) => {
    setSS7Essay63(event.target.value)
  }
  const onChangeSS7Listener64 = (event) => {
    setSS7Essay64(event.target.value)
  }
  const onChangeSS7Listener65 = (event) => {
    setSS7Essay65(event.target.value)
  }
  const onChangeSS7Listener66 = (event) => {
    setSS7Essay66(event.target.value)
  }
  const onChangeSS7Listener67 = (event) => {
    setSS7Essay67(event.target.value)
  }
  const onChangeSS7Listener68 = (event) => {
    setSS7Essay68(event.target.value)
  }
  const onChangeSS7Listener69 = (event) => {
    setSS7Essay69(event.target.value)
  }
  const onChangeSS7Listener70 = (event) => {
    setSS7Essay70(event.target.value)
  }
  const onChangeSS7Listener71 = (event) => {
    setSS7Essay71(event.target.value)
  }
  const onChangeSS7Listener72 = (event) => {
    setSS7Essay72(event.target.value)
  }
  const onChangeSS7Listener73 = (event) => {
    setSS7Essay73(event.target.value)
  }
  const onChangeSS7Listener74 = (event) => {
    setSS7Essay74(event.target.value)
  }
  const onChangeSS7Listener75 = (event) => {
    setSS7Essay75(event.target.value)
  }
  const onChangeSS7Listener76 = (event) => {
    setSS7Essay76(event.target.value)
  }
  const onChangeSS7Listener77 = (event) => {
    setSS7Essay77(event.target.value)
  }
  const onChangeSS7Listener78 = (event) => {
    setSS7Essay78(event.target.value)
  }
  const onChangeSS7Listener79 = (event) => {
    setSS7Essay79(event.target.value)
  }
  const onChangeSS7Listener80 = (event) => {
    setSS7Essay80(event.target.value)
  }
  const onChangeSS7Listener81 = (event) => {
    setSS7Essay81(event.target.value)
  }
  const onChangeSS7Listener82 = (event) => {
    setSS7Essay82(event.target.value)
  }
  const onChangeSS7Listener83 = (event) => {
    setSS7Essay83(event.target.value)
  }
  const onChangeSS7Listener84 = (event) => {
    setSS7Essay84(event.target.value)
  }
  const onChangeSS7Listener85 = (event) => {
    setSS7Essay85(event.target.value)
  }
  const onChangeSS7Listener86 = (event) => {
    setSS7Essay86(event.target.value)
  }
  const onChangeSS7Listener87 = (event) => {
    setSS7Essay87(event.target.value)
  }
  const onChangeSS7Listener88 = (event) => {
    setSS7Essay88(event.target.value)
  }
  const onChangeSS7Listener89 = (event) => {
    setSS7Essay89(event.target.value)
  }
  const onChangeSS7Listener90 = (event) => {
    setSS7Essay90(event.target.value)
  }
  const onChangeSS7Listener91 = (event) => {
    setSS7Essay91(event.target.value)
  }
  const onChangeSS7Listener92 = (event) => {
    setSS7Essay92(event.target.value)
  }
  const onChangeSS7Listener93 = (event) => {
    setSS7Essay93(event.target.value)
  }
  const onChangeSS7Listener94 = (event) => {
    setSS7Essay94(event.target.value)
  }
  const onChangeSS7Listener95 = (event) => {
    setSS7Essay95(event.target.value)
  }
  const onChangeSS7Listener96 = (event) => {
    setSS7Essay96(event.target.value)
  }
  const onChangeSS7Listener97 = (event) => {
    setSS7Essay97(event.target.value)
  }
  const onChangeSS7Listener98 = (event) => {
    setSS7Essay98(event.target.value)
  }
  const onChangeSS7Listener99 = (event) => {
    setSS7Essay99(event.target.value)
  }
  const onChangeSS7Listener100 = (event) => {
    setSS7Essay100(event.target.value)
  }
  const onChangeSS7Listener101 = (event) => {
    setSS7Essay101(event.target.value)
  }
  const onChangeSS7Listener102 = (event) => {
    setSS7Essay102(event.target.value)
  }
  const onChangeSS7Listener103 = (event) => {
    setSS7Essay103(event.target.value)
  }
  const onChangeSS7Listener104 = (event) => {
    setSS7Essay104(event.target.value)
  }
  const onChangeSS7Listener105 = (event) => {
    setSS7Essay105(event.target.value)
  }
  const onChangeSS7Listener106 = (event) => {
    setSS7Essay106(event.target.value)
  }
  const onChangeSS7Listener107 = (event) => {
    setSS7Essay107(event.target.value)
  }
  const onChangeSS7Listener108 = (event) => {
    setSS7Essay108(event.target.value)
  }
  const onChangeSS7Listener109 = (event) => {
    setSS7Essay109(event.target.value)
  }
  // const onChangeSS7Listener110 = (event) => {
  //   setSS7Essay110(event.target.value)
  // }
  const onChangeSS7Listener111 = (event) => {
    setSS7Essay111(event.target.value)
  }
  const onChangeSS7Listener112 = (event) => {
    setSS7Essay112(event.target.value)
  }
  const onChangeSS7Listener113 = (event) => {
    setSS7Essay113(event.target.value)
  }
  const onChangeSS7Listener114 = (event) => {
    setSS7Essay114(event.target.value)
  }
  const onChangeSS7Listener115 = (event) => {
    setSS7Essay115(event.target.value)
  }
  const onChangeSS7Listener116 = (event) => {
    setSS7Essay116(event.target.value)
  }
  const onChangeSS7Listener117 = (event) => {
    setSS7Essay117(event.target.value)
  }
  const onChangeSS7Listener118 = (event) => {
    setSS7Essay118(event.target.value)
  }
  const onChangeSS7Listener119 = (event) => {
    setSS7Essay119(event.target.value)
  }
  const onChangeSS7Listener120 = (event) => {
    setSS7Essay120(event.target.value)
  }
  const onChangeSS7Listener121 = (event) => {
    setSS7Essay121(event.target.value)
  }
  const onChangeSS7Listener122 = (event) => {
    setSS7Essay122(event.target.value)
  }
  const onChangeSS7Listener123 = (event) => {
    setSS7Essay123(event.target.value)
  }
  const onChangeSS7Listener124 = (event) => {
    setSS7Essay124(event.target.value)
  }
  const onChangeSS7Listener125 = (event) => {
    setSS7Essay125(event.target.value)
  }
  const onChangeSS7Listener126 = (event) => {
    setSS7Essay126(event.target.value)
  }
  const onChangeSS7Listener127 = (event) => {
    setSS7Essay127(event.target.value)
  }
  const onChangeSS7Listener128 = (event) => {
    setSS7Essay128(event.target.value)
  }
  const onChangeSS7Listener129 = (event) => {
    setSS7Essay129(event.target.value)
  }
  const onChangeSS7Listener130 = (event) => {
    setSS7Essay130(event.target.value)
  }
  const onChangeSS7Listener131 = (event) => {
    setSS7Essay131(event.target.value)
  }
  const onChangeSS7Listener132 = (event) => {
    setSS7Essay132(event.target.value)
  }
  const onChangeSS7Listener133 = (event) => {
    setSS7Essay133(event.target.value)
  }
  const onChangeSS7Listener134 = (event) => {
    setSS7Essay134(event.target.value)
  }
  const onChangeSS7Listener135 = (event) => {
    setSS7Essay135(event.target.value)
  }
  const onChangeSS7Listener136 = (event) => {
    setSS7Essay136(event.target.value)
  }
  const onChangeSS7Listener137 = (event) => {
    setSS7Essay137(event.target.value)
  }
  const onChangeSS7Listener138 = (event) => {
    setSS7Essay138(event.target.value)
  }
  const onChangeSS7Listener139 = (event) => {
    setSS7Essay139(event.target.value)
  }
  const onChangeSS7Listener140 = (event) => {
    setSS7Essay140(event.target.value)
  }
  const onChangeSS7Listener141 = (event) => {
    setSS7Essay141(event.target.value)
  }
  const onChangeSS7Listener142 = (event) => {
    setSS7Essay142(event.target.value)
  }
  const onChangeSS7Listener143 = (event) => {
    setSS7Essay143(event.target.value)
  }
  const onChangeSS7Listener144 = (event) => {
    setSS7Essay144(event.target.value)
  }
  const onChangeSS7Listener145 = (event) => {
    setSS7Essay145(event.target.value)
  }
  const onChangeSS7Listener146 = (event) => {
    setSS7Essay146(event.target.value)
  }
  const onChangeSS7Listener147 = (event) => {
    setSS7Essay147(event.target.value)
  }
  const onChangeSS7Listener148 = (event) => {
    setSS7Essay148(event.target.value)
  }
  const onChangeSS7Listener149 = (event) => {
    setSS7Essay149(event.target.value)
  }
  const onChangeSS7Listener150 = (event) => {
    setSS7Essay150(event.target.value)
  }
  const onChangeSS7Listener151 = (event) => {
    setSS7Essay151(event.target.value)
  }
  const onChangeSS7Listener152 = (event) => {
    setSS7Essay152(event.target.value)
  }
  const onChangeSS7Listener153 = (event) => {
    setSS7Essay153(event.target.value)
  }
  const onChangeSS7Listener154 = (event) => {
    setSS7Essay154(event.target.value)
  }
  const onChangeSS7Listener155 = (event) => {
    setSS7Essay155(event.target.value)
  }
  const onChangeSS7Listener156 = (event) => {
    setSS7Essay156(event.target.value)
  }
  const onChangeSS7Listener157 = (event) => {
    setSS7Essay157(event.target.value)
  }
  const onChangeSS7Listener158 = (event) => {
    setSS7Essay158(event.target.value)
  }
  const onChangeSS7Listener159 = (event) => {
    setSS7Essay159(event.target.value)
  }
  const onChangeSS7Listener160 = (event) => {
    setSS7Essay160(event.target.value)
  }
  const onChangeSS7Listener161 = (event) => {
    setSS7Essay161(event.target.value)
  }
  const onChangeSS7Listener162 = (event) => {
    setSS7Essay162(event.target.value)
  }
  const onChangeSS7Listener163 = (event) => {
    setSS7Essay163(event.target.value)
  }
  const onChangeSS7Listener164 = (event) => {
    setSS7Essay164(event.target.value)
  }
  const onChangeSS7Listener165 = (event) => {
    setSS7Essay165(event.target.value)
  }
  const onChangeSS7Listener166 = (event) => {
    setSS7Essay166(event.target.value)
  }
  const onChangeSS7Listener167 = (event) => {
    setSS7Essay167(event.target.value)
  }
  const onChangeSS7Listener168 = (event) => {
    setSS7Essay168(event.target.value)
  }
  const onChangeSS7Listener169 = (event) => {
    setSS7Essay169(event.target.value)
  }
  const onChangeSS7Listener170 = (event) => {
    setSS7Essay170(event.target.value)
  }
  const onChangeSS7Listener171 = (event) => {
    setSS7Essay171(event.target.value)
  }
  const onChangeSS7Listener172 = (event) => {
    setSS7Essay172(event.target.value)
  }
  const onChangeSS7Listener173 = (event) => {
    setSS7Essay173(event.target.value)
  }
  const onChangeSS7Listener174 = (event) => {
    setSS7Essay174(event.target.value)
  }
  const onChangeSS7Listener175 = (event) => {
    setSS7Essay175(event.target.value)
  }
  const onChangeSS7Listener176 = (event) => {
    setSS7Essay176(event.target.value)
  }
  const onChangeSS7Listener177 = (event) => {
    setSS7Essay177(event.target.value)
  }
  const onChangeSS7Listener178 = (event) => {
    setSS7Essay178(event.target.value)
  }
  const onChangeSS7Listener179 = (event) => {
    setSS7Essay179(event.target.value)
  }
  const onChangeSS7Listener180 = (event) => {
    setSS7Essay180(event.target.value)
  }
  const onChangeSS7Listener181 = (event) => {
    setSS7Essay181(event.target.value)
  }
  const onChangeSS7Listener182 = (event) => {
    setSS7Essay182(event.target.value)
  }


  return (
    <form>

      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "3s",
               backgroundColor: "#64ccbc",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "3s",
          backgroundColor: "#64ccbc",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Social Studies</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/seventh" className='gradeLink'><h2 className="hero">7th Grade</h2></Link>
          </div>
        </div>
      </section>

      <div className="section raise-top">
        <div className="section-content">
          <h1 className="section-title fadeIn" style={{ color: "#35516e" }}>World History & Geography</h1>
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom">7th Grade Social Studies will cover: The Revolution and Enlightenment, The French
            Revolution and Napoleon, Industrialization and Nationalism, Mass Society and Democracy, The Height of
            Imperialism, East Asia Under Challenge, The Russian Revolution, The Mexican Revolution, World War I, The Great Depression, World War II, The Holocaust, The Cold War, Nationalism,
            Modern Global Culture, Arab-Israeli Conflict and Islamic Fundamentalism, Mass Genocide,
            Human Rights Violations,  and the geography of South America, Africa,
            Asia, and Oceania.</p>
          <p>Educational resources used in 7th Grade Social Studies include Crash Course, National Geography, the
            History Channel, Google Maps, Geography Now! and open source history texts.</p>
          <p className="margin-para fadeIn">Users may encounter texts or videos they consider controversial, offensive, or inappropriate. It is the responsibility of the parent, guardian or teacher to review all materials before their student views them.</p>
          <br/>

          <h1 className="section-title fadeIn">Daily Lessons</h1>
          <span className="days fadeIn">LESSON 1</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/1_TheScientificRevolution.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read about <i>The Scientific Revolution </i></a></p>
          <p className="margin-para"> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance. <br/>
            &nbsp;  &nbsp; &nbsp; &#8226;  geocentric theory <br/>
            &nbsp;  &nbsp; &nbsp; &#8226;  Scientific Revolution <br/>
            &nbsp;  &nbsp; &nbsp; &#8226;  heliocentric theory <br/>
            &nbsp;  &nbsp; &nbsp; &#8226;  Galileo Galilei <br/>
            2. What events do you think brought about the Scientific Revolution? <br/>
            3. Before the 1500s, who and what were the final authorities with regard to most knowledge? <br/>
            4. How did the heliocentric theory of the universe differ from the geocentric theory? <br/>
            5. What are the main steps of the scientific method? <br/>
            6. "If I have seen farther than others," said Newton, "it is because I have stood on the shoulders of
            giants." Could this be said of most scientific accomplishments? Explain. <br/></p>
          <textarea className="textArea"
                    placeholder=" 1.
                    2.
                    3.
                    4.
                    5.
                    6.
                    Write your responses here. Your work will automatically be saved to your Local Storage.
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

                    onChange={onChangeSS7Listener} value={SS7Essay}/>

          <span className="days">LESSON 2</span>
          <p>Watch the video below: <b>Scientific Revolution: </b> European History by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/w70BkCqgyyI"/>
          <p>Answer the following questions. <br/>
            1. Discuss the contributions Galileo Galilei made to science. What were some of his inventions? <br/>
            2. Describe the controversy that Galileo caused with the church. Why were his claims disturbing to so
            many?<br/>
            3. Which fields of science were turned upside down by new discoveries? Give examples.<br/>
            4. What was the most interesting new thing you learned?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Write your answers here. Back up your work or email it to your parent/teacher."
                    onChange={onChangeSS7Listener2} value={SS7Essay2}/>

          <span className="days">LESSON 3</span>
          <p>Watch the video below: <b> The Scientific Revolution </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/vzo8vnxSARg"/>
          <p>Answer the following questions: <br/>
            1. Why did Copernicus need to be reassured that his work is for the "well being of the Church"?<br/>
            2. Why did the work and discoveries of Galileo make people nervous?<br/>
            3. Why did it make sense that the Scientific Revolution would follow the Renaissance and continue
            alongside
            the Protestant Reformation? <br/>
            4. Why might it have been necessary to confirm the results of an experiment 30 and 100 times during the
            time
            of the Scientific Revolution? <br/>
            5. What invention would help spread the ideas the Scientific Revolution? <br/>
            6. Do you think it is important that scientists work together? Explain. <br/></p>
          <textarea className="textArea" placeholder="Back up your work." onChange={onChangeSS7Listener3}
                    value={SS7Essay3}/>

          <span className="days">LESSON 4</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/2_TheEnlightenmentInEurope.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read The Enlightenment in Europe </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance. <br/>
            <ol className="ssList">
              <li>Enlightenment</li>
              <li>social contract</li>
              <li>John Locke</li>
              <li>Voltaire</li>
              <li>Montesquieu</li>
              <li>Rousseau</li>
              <li>Mary Wollstonecraft</li>
            </ol>
            2. What are the natural rights with which people are born, according to John Locke? <br/>
            3. Who were the philosophers and what did they advocate? <br/>
            4. What was the legacy of the Enlightenment? <br/>
            5. Why might some women have been critical of the Enlightenment? <br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener4} value={SS7Essay4}/>

          <span className="days">LESSON 5</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/3_TheEnlightenmentSpreads.pdf")}
                rel="noreferrer" target="_blank">Read The Enlightenment Spreads </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li>salon</li>
              <li>baroque</li>
              <li>neoclassical</li>
              <li>enlightened despot</li>
              <li>Catherine the Great</li>
            </ol>
            2. What were the defining aspects of neoclassical art? <br/>
            3. What new form of literature emerged during the 18th century and what were its main
            characteristics? <br/>
            4. Why were several rulers in 18th century Europe known as enlightened despots? <br/>
            5. What advantages did salons have over earlier forms of communication in spreading ideas? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener5} value={SS7Essay5}/>

          <span className="days">LESSON 6</span>
          <p>Two of the most influencial writers during the Enlightenment were Voltaire and John Locke. Watch the videos
            below about these two men and then answer the questions below.</p>
          <Video videoUrl="https://www.youtube.com/embed/LAzKGkTIKpg"/>
          <Video videoUrl="https://www.youtube.com/embed/bZiWZJgJT7I"/>
          <p>
            <ol className="vocab">
              <li>Briefly describe Voltaire's background and early life.</li>
              <li>What topics did Voltaire write about?</li>
              <li>Why was Voltaire's writing so influential?</li>
              <li>How did John Locke influence our modern day views about citizens rights?</li>
              <li>What were John Locke's views on religious toleration? How did he feel about forcing people to conform
                to religious beliefs?
              </li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener6} value={SS7Essay6}/>

          <span className="days">LESSON 7</span>
          <p>Watch the video below: <b> The Enlightenment </b>by Crash Course. Then, complete the essay assignment
            that follows.</p>
          <p>The Enlightenment brought about numerous changes. Write a 5 Paragraph Essay on which impact of the
            Enlightenment you think is most important. To get started on how to write the essay, watch the video
            below: <b> Writing Ninjas: </b> How to Write a 5 Paragraph essay</p>
          <Video videoUrl="https://www.youtube.com/embed/NnoFj2cMRLY"/>
          <Video videoUrl="https://www.youtube.com/embed/5uSJEiNZ1rE"/>
          <p>Take a few minutes to think about the essay topic and then create an outline for <i> which impact of
            the Enlightenment you think is most important.</i> <a
            href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
            rel="noreferrer"
            target="_blank">Click here for an outline </a>that can help you get started.
            You may need to do some research online. This step will save you from having to rewrite your essay after you
            start.
            <br/><b> Introduction paragraph: </b><br/>&nbsp; &#8226; Write a hook to grab your reader’s
            attention. <br/>&nbsp; &#8226; Have a clear thesis statement. This statement will convey the points or
            arguments you are going to make. It is a road map for your essay and should answer the question, "What is
            this paper about?" <br/>
            &nbsp; &#8226; The final sentence for this paragraph should smoothly transition to the next
            paragraph. <br/><b>Paragraph 1</b><br/>&nbsp; &#8226; This paragraph should make your strongest
            point. You should include examples, explanations and support for your claims and ideas. Be sure to smoothly
            transition to the next paragraph. It should tie
            in to the next point you will make. 3-5 sentences. <br/><b> Paragraph
              2</b><br/>&nbsp; &#8226; Introduce your next point. Again, use examples to support
            your statements and transition to the next paragraph. 3-5 sentences. <br/><b> Paragraph
              3 </b><br/>&nbsp; &#8226; This should be your second strongest point. It should be different from the
            other
            paragraphs but also use examples and explanations for claims you make. 3-5
            sentences. <br/><b>Conclusion</b> <br/>&nbsp; &#8226; Restate your thesis in a different way,
            summarizing your essay concisely. End with a
            thoughtful conclusion. 3-5 sentences. <br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener7} value={SS7Essay7}/>

          <span className="days">LESSON 8</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/4_TheAmericanRevolution.pdf")}
                rel="noreferrer"
                target="_blank">Read The American Revolution </a></p>
          <p>Watch the video below: <b> The story behind the Boston Tea Party </b> by Ben Labaree TedEd </p>
          <Video videoUrl="https://www.youtube.com/embed/1cT_Z0KGhP8"/>
          <p>Answer the following questions: <br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Declaration of Independence</li>
              <li> Thomas Jefferson</li>
              <li> checks and balances</li>
              <li> federal system</li>
              <li> Bill of Rights</li>
            </ol>
            2. Why did the colonists criticize the Stamp Act as "taxation without representation"? <br/>
            3. How did John Locke’s notion of the social contract influence the American colonists? <br/>
            4. Why were the colonists able to achieve victory in the American Revolution? <br/>
            5. Why did Parliament impose new taxes on the American colonists after the mid-1700s? <br/>
            6. Do you think the American Revolution would have happened if there had not been an Age of
            Enlightenment? <br/>
            7. Why do you think the colonists at first created such a weak central government? <br/>
            8. How did the colonists respond to these new taxes? <br/>
            9. In response to the Tea Act, what did Bostonians do? <br/>
            10. How did the colonists respond to the so-called Coercive Acts? <br/>
            11. Why did Bostonians destroy the tea in December 1773 rather than simply refusing to buy it from those
            approved by the British? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener8} value={SS7Essay8}/>

          <span className="days">LESSON 9</span>
          <p>Watch the video below: <b> What you might not know about the Declaration of Independence </b> by Ted Ed
          </p>
          <Video videoUrl="https://www.youtube.com/embed/LKJMWHCUoiw"/>     <p>Answer the following questions: <br/>
          <br/>The questions below are based on the TedEd video. <br/>
          1. Where and when was the Declaration of Independence adopted by the Continental Congress? <br/>
          2. Who was the man most responsible for writing the Declaration of Independence.<br/>
          3. Which of these was eliminated from the Declaration of Independence? <br/>
          &nbsp; &nbsp; a. Taxes<br/>
          &nbsp; &nbsp;  b. Healthcare<br/>
          &nbsp; &nbsp;  c. Slavery<br/>
          &nbsp; &nbsp;  d. an American king<br/>
          4. On what day did John Adams think Americans would celebrate its independence? <br/>
          5. Who were some of the important men who influenced Jefferson’s ideas? <br/>
          6. What might have happened if the men in Congress who opposed slavery did not go along with the decision
          to
          remove Jefferson’s reference to slavery? <br/>
        </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener9} value={SS7Essay9}/>

          <span className="days">LESSON 10</span>
          <p>Watch the video below: <b> Taxes, Tea, and The American Revolution </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/HlUiSBXQHCw"/>     <p>Answer the following questions: <br/>
          1. When did the Seven Years’ War end? <br/>
          2. What was the Stamp Act? Why did the British government pass the Stamp Act? <br/>
          3. Why were colonists upset by the Stamp Act? <br/>
          4. What was the result of the Townsend Act? <br/>
          5. Why was the protest of throwing tea into the Boston Harbor unnecessary? <br/>
          6. Who is the Open Letter addressed to? <br/>
          7. What is in the Secret Compartment? <br/>
          8. What was the most effective way to protest British law? How did they enforce the protest? <br/>
          9. What was Continental Congress? <br/>
          10. What percentage of colonist remained loyal to Britain? <br/>
          11. Why were slaves loyal to Britain? <br/>
          12. When did the American Revolution end? <br/>
          13. What was revolutionary about the American Revolution? <br/>
          14. What were two ideas essential to the Revolution? <br/>
          15. How was the line "All men are created equal" a lie? <br/>
          16. What was the Enlightenment? <br/>
          17. What was the reason for denouncing God? <br/>
          18. What were the unalienable rights according to John Locke? <br/>
          19. What changes did the American Revolution make on the lives of the colonists? <br/>
        </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener10} value={SS7Essay10}/>

          <span className="days">LESSON 11</span>
          <p> Read <a href={require("../resources/social-studies/ss-pdfs7th/5_TheFrenchRevolutionBegins.pdf")}
                      rel="noreferrer" target="_blank"> The
            French Revolution Begins</a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Old Regime</li>
              <li> estates</li>
              <li> Louis XVI</li>
              <li> Marie Antoinette</li>
              <li> Estates-General</li>
              <li> National Assembly</li>
              <li> Tennis Court Oath</li>
              <li> Great Fear</li>
            </ol>
            2. Do you think that changes in the French government were inevitable? Explain. <br/>
            3. Why do you think some members of the First and Second Estates joined the National Assembly and worked
            to reform the government? <br/>
            4. How were the storming of the Bastille and the women’s march on Versailles
            similar? How were they different? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener11} value={SS7Essay11}/>

          <span className="days">LESSON 12</span>
          <p>Watch the video below: <b> The French Revolution </b>by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/lTTvKwCylFY"/>
          <p>Answer the following questions: <br/>
            1. According to the video, who did not pay taxes? <br/>
            2. Why was France deeply in debt? <br/>
            3. Why did food prices increase? <br/>
            4. What was the main point of Enlightenment according to Immanuel Kant? What was the impact on the
            monarchy of this idea? <br/>
            5. What are the three estates and who was in each estate? <br/>
            6. Why did the Third Estate decide to form a National Assembly? What was the king’s reaction to
            this? <br/>
            7. What was the Tennis Court Oath? Why is it called that? <br/>
            8. Why was the Bastille stormed? <br/>
            9. What was abolished in order to write the new Constitution? <br/>
            10. What was the new Constitution called? <br/>
            11. What happened in October of 1789? Why did it happen? What was the result? <br/>
            12. What was the French Revolution mostly about? <br/>
            13. Who was calling for a creation of a republic? <br/>
            14. How did the National Assembly become "The Man"? <br/>
            15. What was King Leopold II and King William Fredrick II do in response of the French
            Revolution? What was the King Louis XVI’s response? <br/>
            16. What was Louis XVI found guilty of? <br/>
            17. Who is the Open Letter addressed to? <br/>
            18. What is in the Secret Compartment? <br/>
            19. What is the Guillotine? <br/>
            20. Who led the Committee of Public Safety? <br/>
            21. How many people were killed during The Terror? <br/>
            22. What did the Committee of Public Safety do to the calendar? Why did they do this? <br/>
            23. Who helped France win the war against Prussia and Austria? <br/>
            24. How did Napoleon’s rule make the French Revolution, not a revolution? <br/>
            25. What did the French Revolution succeed in? <br/>
            26. How was the French Revolution more successful than the American Revolution? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener12} value={SS7Essay12}/>

          <span className="days">LESSON 13</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/6_RevolutionBringsReformandTerror.pdf")}
                rel="noreferrer" target="_blank">Click here
            to read Revolution Brings Reform and Terror</a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Legislative Assembly</li>
              <li> émigré</li>
              <li> sans-culotte</li>
              <li> Jacobin</li>
              <li> guillotine</li>
              <li> Maximilien Robespierre</li>
              <li> Reign of Terror</li>
            </ol>
            2. What major reforms did the National Assembly introduce? <br/>
            3. What did the divisions in the Legislative Assembly say about the differences in French society? <br/>
            4. How did the Reign of Terror come to an end? <br/>
            5. How did the slogan "Liberty, Equality, Fraternity" sum up the goals of the Revolution? <br/>
            6. What similarities and differences do you see between the political factions in the Legislative
            Assembly and those in the U.S. government today? <br/>
            7. What factors led to Robespierre becoming a dictator? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener13} value={SS7Essay13}/>

          <span className="days">LESSON 14</span>
          <p>Watch the video below: <b> Napoleon Bonaparte </b></p>
          <Video videoUrl="https://www.youtube.com/embed/Pd6E38FfuMg"/>
          <p>Answer the following questions: <br/>
            1. Describe Napoleon before he joined the military and became an emperor. What languages did he speak?
            Was
            he a typical Frenchman?<br/>
            2. How did Napoleon justify his dictatorial form of government? <br/>
            3. Under the Napoleonic Code, were women better or worse off? Explain. <br/>
            4. Napoleon’s empire was seen as paving the way for modernization and European countries tried to copy
            things he was doing. Give at least one example of this. <br/>
            5. How was Napoleon initially able to succeed in France and getting support? <br/>
            6. In what ways did Napoleon try to return to Louis XIV’s absolutism?<br/>
            7. What things did he do to help to unify Europe?<br/>
            8. How did the Russians ultimately manage to defeat Napoleon? <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS7Listener14} value={SS7Essay14}/>

          <span className="days">LESSON 15</span>
          <p><a href={require("../resources/social-studies/ss-pdfs7th/7_NapoleonForgesanEmpire.pdf")}
                rel="noreferrer"
                target="_blank">Click here
            to read Napoleon Forges an Empire</a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Napoleon Bonaparte</li>
              <li> coup d’état</li>
              <li> plebiscite</li>
              <li> lycée</li>
              <li> concordat</li>
              <li> Napoleonic Code</li>
              <li> Battle of Trafalgar</li>
            </ol>
            2. In your opinion, was Napoleon the creator or the creation of his times? <br/>
            3. How did Napoleon become a hero in France? <br/>
            4. What did Napoleon consider his greatest triumph in domestic policy? <br/>
            5. How was Napoleon able to control the countries neighboring the French Empire? <br/>
            6. Napoleon had to deal with forces both inside and outside the French Empire. In your judgment, which
            area was more important to control? <br/>
            7. If you had been a member of the bourgeoisie, would you have been satisfied with the results of
            Napoleon’s actions? Explain. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener15} value={SS7Essay15}/>

          <span className="days">LESSON 16</span>
          <p>Watch the video below: <b> History vs. Napoleon Bonaparte </b> by Alex Gendler TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/8aq_gRfmjgY"/>
          <p>Answer the following questions: <br/>
            1. Why did neighboring countries attack France following the 1789 revolution? <br/>
            2. How did Napoleon actually come to power? <br/>
            3. What were the factors that enabled Napoleon to rise to power and explained his popularity? <br/>
            4. In what ways did Napoleon uphold the ideals of the French Revolution, and how did he subvert
            them? <br/>
            5. Why was Napoleon so often at war? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener16} value={SS7Essay16}/>

          <span className="days">LESSON 17</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/8_NapoleonsEmpireCollapses.pdf")}
                     rel="noreferrer"
                     target="_blank"> Napoleon's Empire Collapses </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> blockade</li>
              <li> Continental System</li>
              <li> guerrilla</li>
              <li> Peninsular War</li>
              <li> scorched-earth policy</li>
              <li> Waterloo</li>
              <li> Hundred Days</li>
            </ol>
            2. Why did people in other European countries resist Napoleon’s efforts to build an empire? <br/>
            3. How did Great Britain combat Napoleon’s naval blockade? <br/>
            4. Why did Napoleon have trouble fighting the enemy forces in the Peninsular War? <br/>
            5. Why was Napoleon’s delay of the retreat from Moscow such a great blunder? <br/>
            6. Napoleon had no choice but to invade Russia. Do you agree with this statement? Why or why not? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener17} value={SS7Essay17}/>

          <span className="days">LESSON 18</span>
          <p className="topBottom"><span style={{ color: "#3d5e7f", fontWeight: "bold" }}>If you had lived in France during Napoleon’s rein of power, would you have supported him? </span><br/>
            In a 5 Paragraph Essay, explain why or why not. In addition to using the reading and videos, you may do
            online
            research to find examples and support. </p>
          <p><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer"
                target="_blank">Click here for a 5 Paragraph Essay outline </a>if you need help in getting
            started. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener18} value={SS7Essay18}/>

          <span className="days">LESSON 19</span>
          <p>Imagine that you have a private jet at your disposal and can travel anywhere in the world. If you
            could travel to any destination, where would you go?<br/>
            <ul className="list">
              <li>Paris to see the Eiffel Tower?</li>
              <li>Machu Pichu in Peru?</li>
              <li>Angel Falls in Venezuela?</li>
              <li>Kangaroo Island off the coast of Australia?</li>
              <li>Avatar mountains (Zhangjiajie) in China?</li>
              <li>Big Sur in California?</li>
            </ul>
          </p>
          If you have no idea where to you'd like to go, get inspired by <a
          href="https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
          target="_blank" rel="noreferrer"> this site about stunning places</a> or this video showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener19} value={SS7Essay19}/>

          <span className="days">LESSON 20</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/9_TheCongressofVienna.pdf")}
                     rel="noreferrer"
                     target="_blank"> The
            Congress of Vienna </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Congress of Vienna</li>
              <li> Klemens von Metternich</li>
              <li> balance of power</li>
              <li> legitimacy</li>
              <li> Holy Alliance</li>
              <li> Concert of Europe</li>
            </ol>
            2. From France’s point of view, do you think the Congress of Vienna’s decisions were fair? <br/>
            3. What were the three points of Metternich’s plan for Europe? <br/>
            4. Why was the Congress of Vienna considered a success? <br/>
            5. What was the long-term legacy of the Congress of Vienna? <br/>
            6. What do you think is meant by the statement that the French Revolution let the "genie out of the
            bottle"? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener20} value={SS7Essay20}/>

          <span className="days">LESSON 21</span>
          <p>Watch the video below: <b> The Congress of Vienna </b> by Crash Course European History</p>
          <Video videoUrl="https://www.youtube.com/embed/DuVw9sGpWUc"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the
            most interesting aspects. You may need to watch the video twice and take notes while watching. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener21} value={SS7Essay21}/>

          <span className="days">LESSON 22</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/10_LatinAmericanPeoplesWinIndependence.pdf")}
            rel="noreferrer"
            target="_blank"> Latin American Peoples Win Independence </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> peninsulare</li>
              <li> creole</li>
              <li> mulatto</li>
              <li> Simón Bolívar</li>
              <li> José de San Martín</li>
              <li> Miguel Hidalgo</li>
              <li> José María Morelos</li>
            </ol>
            2. Would creole revolutionaries tend to be democratic or authoritarian
            leaders? Explain. <br/>
            3. How was Spanish colonial society structured? <br/>
            4. How was the Haitian Revolution different from revolutions in the rest of Latin America? <br/>
            5. Which groups led the quest for Mexican independence? <br/>
            6. How were events in Europe related to the revolutions in Latin America? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener22} value={SS7Essay22}/>

          <span className="days">LESSON 23</span>
          <p>Watch the video below: <b> Latin American Revolutions </b> by Crash Course World History</p>
          <Video videoUrl="https://www.youtube.com/embed/ZBw35Ze3bg8"/>     <p>Answer the following questions: <br/>
          1. What are the three institutions that exercised control over the people? How did they exercise
          this control? <br/>
          2. Who was Sor Juana Ines De La Cruz? Why is she example of how patriarchy shaped Latin American
          lives? <br/>
          3. What is transculturaliztion? What are some examples of this? <br/>
          4. What are the four basic racial categories in Latin America? <br/>
          5. How did successful people become "legally white"? <br/>
          6. Who rule Brazil? <br/>
          7. How did Napoleon’s change Brazil? <br/>
          8. How did Brazil become independent? <br/>
          9. When did Brazil abandon slavery? <br/>
          10. Where did the Latin American revolutions begin? <br/>
          11. What type of government did the Pensulares want in Mexico? <br/>
          12. Who led the peasant revolt in Mexico? <br/>
          13. What made the peasant uprising very confusing and unsuccessful? <br/>
          14. Who led the second peasant revolt? When did it start? Why was unsuccessful? <br/>
          15. When was Mexico declared a republic? <br/>
          16. How did Simon Bolivar convince the people of South America to fight against Spain? <br/>
          17. Who is the Open Letter addressed to? <br/>
          18. What is in the Secret Compartment? <br/>
          19. What was the most revolutionary thing about the Latin American revolution movements? <br/>
          20. How was the Latin American revolution "not terribly revolutionary"? <br/>
        </p>
          <textarea className="textArea" onChange={onChangeSS7Listener23} value={SS7Essay23}/>

          <span className="days">LESSON 24</span>
          <p>Watch the video below: <b> War and Nation Building in Latin America </b> by Crash Course World History
          </p>
          <Video videoUrl="https://www.youtube.com/embed/v6xi8_7Fy6Y"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the
            most interesting aspects. You may need to watch the video twice and take notes while watching. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener24} value={SS7Essay24}/>

          <span className="days">LESSON 25</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/11_EuropeFacesRevolutions.pdf")}
                     rel="noreferrer"
                     target="_blank"> Europe Faces Revolutions </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> conservative</li>
              <li> liberal</li>
              <li> radical</li>
              <li> nationalism</li>
              <li> nation-state</li>
              <li> the Balkans</li>
              <li> Louis-Napoleon</li>
              <li> Alexander II</li>
            </ol>
            2. Why might liberals and radicals join together in a nationalist cause? <br/>
            3. How were radicals different from liberals? <br/>
            4. Why did France’s Third Republic fail? <br/>
            5. What was the driving force behind Russia’s industrial expansion? <br/>
            6. Why did some liberals disapprove of the way Louis-Napoleon ruled France after the uprisings of
            1848? <br/>
            7. What consequences did Alexander’s reforms have on Russia? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener25} value={SS7Essay25}/>

          <span className="days">LESSON 26</span>
          <p>Watch the video below: <b> Revolutions of 1848 </b> by Crash Course European History</p>
          <Video videoUrl="https://www.youtube.com/embed/cXTaP1BD1YY"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the
            most interesting aspects. You may need to watch the video twice and take notes while watching. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener26} value={SS7Essay26}/>

          <span className="days">LESSON 27</span>
          <p>Watch the video below: <b> The French Revolution</b> by Crash Course World History</p>
          <Video videoUrl="https://www.youtube.com/embed/lTTvKwCylFY"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the
            most interesting aspects. You may need to watch the video twice and take notes while watching. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener27} value={SS7Essay27}/>

          <span className="days">LESSON 28</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/12_Nationlism.pdf")} rel="noreferrer"
                     target="_blank"> Nationalism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Russification</li>
              <li> Camillo di Cavour</li>
              <li> Giuseppe Garibaldi</li>
              <li> Junker</li>
              <li> Otto von Bismarck</li>
              <li> realpolitik</li>
              <li> kaiser</li>
            </ol>
            2. How can nationalism be both a unifying and a disunifying force? <br/>
            3. Which aging empires suffered from the forces of nationalism? <br/>
            4. What role did Garibaldi play in the unification of Italy? <br/>
            5. What advantages did Prussia have in leading the German states to unify? <br/>
            6. Why did the Austrian, Russian, and Ottoman Empires face such great challenges to their control of
            land? <br/>
            7. Many liberals wanted
            government by elected parliaments. How was Bismarck’s
            approach to achieving his goals different? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener28} value={SS7Essay28}/>

          <span className="days">LESSON 29</span>
          <p>Watch the video below: <b> Samurai, Daimyo, Matthew Perry, and Nationalism </b> by Crash Course World
            History</p>
          <Video videoUrl="https://www.youtube.com/embed/Nosq94oCl_M"/>
          <p>Answer the following questions: <br/>
            1. What is a Nation-State? <br/>
            2. How do you become a nation? <br/>
            3. How does public education have a role in nationalism? <br/>
            4. How did the Industrial Revolution have a role in the growth of Nationalism? <br/>
            5. What does the business of nationalism create? <br/>
            6. What is "Otherness"? <br/>
            7. What are some conflicts which occurred within emerging nations? What was the effect on the
            people due to these conflicts? <br/>
            8. How was Nationalism a destabilizing force in the Ottoman Empire? <br/>
            9. How did the Tokugawa family gain power in Japan? <br/>
            10. What was the primary virtue of the Tokugawa government? <br/>
            11. How did the Daimyo keep the Samurai in line? <br/>
            12. Why did the Tokugawa have trouble controlling Japan? <br/>
            13. What was the result of the defeat of China in the Opium Wars? <br/>
            14. How did the Tokugawa see Christianity? <br/>
            15. Who was Matthew Perry? When did he arrive? What did he want? <br/>
            16. What convinced the Tokugawa to sign trade treaties with America? <br/>
            17. How did Matthew Perry’s visit led to end of Tokugawa Shognate and the rise of nationalism in
            Japan? <br/>
            18. What was the program of Japan’s conscript army? <br/>
            19. What was the education system in Japan? <br/>
            20. Who is the Open Letter addressed to? <br/>
            21. What is in the Secret Compartment? <br/>
            22. Who benefits from public education? Why should people like to pay taxes for public education
            even if they don’t have a kid in public education? <br/>
            23. What did Nationalism mean in Japan? <br/>
            24. What did the Meiji Government do to benefit Japan? What was the dark side of the Meiji
            Government in Japan due to nationalism? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener29} value={SS7Essay29}/>

          <span className="days">LESSON 30</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/13_RevolutionsintheArts.pdf")}
                     rel="noreferrer"
                     target="_blank"> Revolutions in the Arts </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> romanticism</li>
              <li> realism</li>
              <li> impressionism</li>
            </ol>
            2. How are the movements of romanticism and realism alike and different? <br/>
            3. What was the key element of romanticism? <br/>
            4. What characteristics did photography have that made it the art of the industrial age? <br/>
            5. What was the goal of impressionist painters? <br/>
            6. How might a realist novel bring about changes in society? Describe the ways by which this might
            happen.<br/>
            7. How did nationalism influence the artistic movements you read about? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener30} value={SS7Essay30}/>

          <span className="days">LESSON 31</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/14_TheBeginningsofIndustrialization.pdf")}
            rel="noreferrer"
            target="_blank"> The Beginnings of Industrialization </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Industrial Revolution</li>
              <li> enclosure</li>
              <li> crop rotation</li>
              <li> industrialization</li>
              <li> factors of production</li>
              <li> factory</li>
              <li> entrepreneur</li>
            </ol>
            2. Was the revolution in agriculture necessary
            to the Industrial Revolution? Explain. <br/>
            3. What were four factors that
            contributed to industrialization
            in Britain? <br/>
            4. How did rising population help
            the Industrial Revolution? <br/>
            5. What American invention aided
            the British textile industry? <br/>
            6. What effect did entrepreneurs have
            upon the Industrial Revolution? <br/>
            7. Do you agree or
            disagree with the statement that the steam engine was
            the greatest invention of the Industrial Revolution? Why? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener31} value={SS7Essay31}/>

          <span className="days">LESSON 32</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/15_Industrialization.pdf")}
                     rel="noreferrer"
                     target="_blank"> Industrialization </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> urbanization</li>
              <li> middle class</li>
            </ol>
            2. How did industrialization contribute to
            city growth? <br/>
            3. Why did people flock to British
            cities and towns during the
            Industrial Revolution? <br/>
            4. What social class expanded as
            a result of industrialization? <br/>
            5. What were some of the
            negative effects of the rapid
            growth of Manchester? <br/>
            6. How were class tensions affected by the
            Industrial Revolution? <br/>
            7. The Industrial
            Revolution has been described as a mixed blessing. Do
            you agree or disagree? Explain. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener32} value={SS7Essay32}/>

          <span className="days">LESSON 33</span>
          <p>Watch the video below: <b> Coal, Steam, and The Industrial Revolution </b> by Crash Course World
            History </p>
          <Video videoUrl="https://www.youtube.com/embed/zhL5DCizj5c"/>     <p>Answer the following
          questions: <br/>
          1. What is the percentage of farmers in the world today? <br/>
          2. What is John Green’s definition of the Industrial Revolution? <br/>
          3. Where did the Industrial Revolution start? <br/>
          4. What did the invention of flying shuttle led to? <br/>
          5. Who invented the steam engine and the better steam engine? <br/>
          6. What products increased in production thanks to the early industrial revolution? <br/>
          7. What are some Eurocentric reasons why the Industrial Revolution happened first in Europe? <br/>
          8. Who is the Open Letter addressed to? <br/>
          9. What is in the Secret Compartment? <br/>
          10. How was China more advanced than Europe before the start of the Industrial Revolution? <br/>
          11. What the surest sign of economic success before the Industrial Revolution? <br/>
          12. What did China invent? <br/>
          13. Why did the Industrial Revolution happen in Europe rather than China? <br/>
          14. How did high wages and cheap energy result in the Industrial Revolution? <br/>
          15. How did India cotton push Europe into the Industrial Revolution? <br/>
          16. What do we have today thanks to the Industrial Revolution according to John Green? (Name
          at least 4 things.)<br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener33} value={SS7Essay33}/>

          <span className="days">LESSON 34</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/16_IndustrializationSpreads.pdf")}
                     rel="noreferrer"
                     target="_blank"> Industrialization Spreads </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> stock</li>
              <li> corporation</li>
            </ol>
            2. Why was Britain unable to keep
            industrial secrets away from other nations? <br/>
            3. What early industries
            mechanized in the United
            States? <br/>
            4. Why did Belgium lead Europe
            in adopting industrialization? <br/>
            5. How did the Industrial
            Revolution shift the world
            balance of power? <br/>
            6. What was the
            most significant effect of the Industrial Revolution? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener34} value={SS7Essay34}/>

          <span className="days">LESSON 35</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/17_ReformingtheIndustrialWorld.pdf")}
                     rel="noreferrer"
                     target="_blank"> Reforming the Industrial World </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> laissez faire</li>
              <li> Adam Smith</li>
              <li> capitalism</li>
              <li> utilitarianism</li>
              <li> socialism</li>
              <li> Karl Marx</li>
              <li> communism</li>
              <li> union</li>
              <li> strike</li>
            </ol>
            2. What were the main problems
            faced by the unions during the 1800s and how did they
            overcome them? <br/>
            3. What were Adam Smith’s three
            natural laws of economics? <br/>
            4. What kind of society did early
            socialists want? <br/>
            5. Why did workers join together
            in unions? <br/>
            6. Why do you think that Marx’s
            "dictatorship of the proletariat" did not happen? <br/>
            7. Why did the labor reform
            movement spread to other areas of life? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener35} value={SS7Essay35}/>

          <span className="days">LESSON 36</span>
          <p className="topBottom"><span style={{ color: "#3d5e7f", fontWeight: "bold" }}>Do you believe that Industrialization was a good or bad thing? </span><br/>
            Take a position on this question and support your opinion in a 5 Paragraph Essay. In addition to using
            the readings and videos, you may do online research to find examples and support for your essay. <br/>
          </p>
          <p>Click <a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer"
                      target="_blank">here for a 5 Paragraph Essay outline </a> if you need help in getting
            started. <br/></p>

          <textarea className="textArea" onChange={onChangeSS7Listener36} value={SS7Essay36}/>

          <span className="days">LESSON 37</span>
          <p>Watch the video below: <b> Capitalism and Socialism </b> by Crash Course World History </p>
          <Video videoUrl="https://www.youtube.com/embed/B3u4EFTwprM"/>     <p>Answer the following
          questions: <br/>
          1. What types of systems are capitalism? <br/>
          2. What is mercantile capitalism? <br/>
          3. What were Joint Stock Companies? How did they increase wealth? <br/>
          4. What is Industrial Capitalism according to Joyce Appleby? <br/>
          5. What are the downsides of capitalism? <br/>
          6. Where did Industrial Capitalism begin? When? Why? <br/>
          7. Why was the civil war useful for capitalism? <br/>
          8. How did technology and increased efficiency in agriculture benefit the economy? <br/>
          9. What was the result of increased productivity in agriculture? What was the effect of
          industry? <br/>
          10. What was enclosure? What was the result of enclosure on tenant farmers? <br/>
          11. Why did private investors’ need to turn a profit develop in Britain? <br/>
          12. Why did the values of capitalism develop in Britain? <br/>
          13. What was the most important idea of capitalism in Europe? <br/>
          14. What were some problems of capitalism in the 19th century? What was the response of workers
          to these problems? <br/>
          15. What is socialism the result of according to socialists? <br/>
          16. Where did Socialism begin? <br/>
          17. Explain the two branches of Socialism. <br/>
          18. How would Socialism come about according to Auguste Blanqui? <br/>
          19. Who is the Open Letter addressed to? <br/>
          20. What is in the Secret Compartment? <br/>
          21. Why is Karl Marx considered the Father of Communism? <br/>
          22. What is Class Struggle according to Karl Marx? Who was the class struggle between according
          to Karl Marx? <br/>
          23. What is Marx’s criticism of Capitalism? <br/>
          24. Why does Marx still matter according to John Green? <br/></p>

          <textarea className="textArea" onChange={onChangeSS7Listener37} value={SS7Essay37}/>

          <span className="days">LESSON 38</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/18_DemocraticReformandActivism.pdf")}
                     rel="noreferrer"
                     target="_blank"> Democratic Reform and Activism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> suffrage</li>
              <li> Chartist movement</li>
              <li> Queen Victoria</li>
              <li> Third Republic</li>
              <li> Dreyfus affair</li>
              <li> anti-Semitism</li>
              <li> Zionism</li>
            </ol>
            2. Why was the road to democracy more
            difficult for France than for England? <br/>
            3. What were some effects of the
            Reform Bill of 1832? <br/>
            4. What was the goal of the
            WSPU in Britain? <br/>
            5. What was the Dreyfus affair? <br/>
            6. What was the connection
            between anti-Semitism and Zionism? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener38} value={SS7Essay38}/>

          <span className="days">LESSON 39</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/19_SelfRuleforBritishColonies.pdf")}
                     rel="noreferrer"
                     target="_blank"> Self-Rule for British Colonies </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> dominion</li>
              <li> Maori</li>
              <li> Aborigine</li>
              <li> penal colony</li>
              <li> home rule</li>
              <li> Irish Republican Army</li>
            </ol>
            2. How was Britain’s policy toward Canada beginning in the late 1700s similar to its policy toward
            Ireland in the 1900s? <br/>
            3. What were the two major reforms urged by the Durham report? <br/>
            4. What was unusual about the first European settlers in Australia? <br/>
            5. What are the main countries to which the Irish emigrated during the famine? <br/>
            6. What impact did the Great Famine have on the population of Ireland? <br/>
            7. Why did Britain create Upper Canada and Lower Canada, and who lived in each colony? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener39} value={SS7Essay39}/>

          <span className="days">LESSON 40</span>
          <p>It's time to travel to another destination somewhere in the world. Where would you like to go this
            time?
            <ul className="list">
              <li>The Colosseum in Rome?</li>
              <li>The Acropolis in Athens?</li>
              <li>The pyramids of Giza?</li>
              <li>The Great Wall of China?</li>
              <li>The Grand Canyon in Arizona?</li>
              <li>The vineyards of Tuscany?</li>
            </ul>
          </p>
          If you have no idea where to you'd like to go, get inspired by this video showing some of the most
          amazing places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/pFoty21X370"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener40} value={SS7Essay40}/>

          <span className="days">LESSON 41</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/20_WarandExpansion.pdf")}
                     rel="noreferrer"
                     target="_blank"> War and Expansion in the United States </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> manifest destiny</li>
              <li> Abraham Lincoln</li>
              <li> secede</li>
              <li> U.S. Civil War</li>
              <li> Emancipation Proclamation</li>
              <li> segregation</li>
            </ol>
            2. What were the relative resources of the North and South in the U.S. Civil War? <br/>
            3. What territory did the Mexican- American War open up to American settlers? <br/>
            4. What were some of the economic differences between the North and the South before the Civil
            War? <br/>
            5. How did the Civil War speed up America’s industrialization? <br/></p>

          <textarea className="textArea" onChange={onChangeSS7Listener41} value={SS7Essay41}/>

          <span className="days">LESSON 42</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/21_NineteenthCenturyProgress.pdf")}
                     rel="noreferrer"
                     target="_blank"> Nineteenth-Century Progress </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> assembly line</li>
              <li> Charles Darwin</li>
              <li> theory of evolution</li>
              <li> radioactivity</li>
              <li> psychology</li>
              <li> mass culture</li>
            </ol>
            2. How is the mass culture
            that rose at the end of the 19th century similar to mass culture today? How is it
            different? Explain your response. <br/>
            3. What effect did the assembly line have on production costs? <br/>
            4. How did Joseph Lister improve the survival rate of his patients? <br/>
            5. What effect did the spread of public education have on culture? <br/>
            6. How did the germ theory change living conditions in Europe and the United States? <br/>
            7. What changes led to the rise of mass culture around 1900? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener42} value={SS7Essay42}/>

          <span className="days">LESSON 43</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/22_TheScrambleforAfrica.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Age of Imperialism: The Scramble for Africa </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> imperialism</li>
              <li> racism</li>
              <li> Social Darwinism</li>
              <li> Berlin Conference</li>
              <li> Shaka</li>
              <li> Boer</li>
              <li> Boer War</li>
            </ol>
            2. What can you infer about the Europeans’ attitude toward Africans from the Berlin
            Conference? <br/>
            3. Why did the Europeans control
            such a small portion of Africa in the 1800s? <br/>
            4. What were some of the internal
            factors that contributed to
            imperialism in Africa? <br/>
            5. Why did the Boers and the
            British fight over southern
            Africa? <br/>
            6. Why do you think Africans weren’t
            interested in buying European products? <br/>
            7. What sort of
            problems might result from combining or splitting groups
            of people without regard for ethnic or linguistic traditions? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener43} value={SS7Essay43}/>

          <span className="days">LESSON 44</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/23_Imperialism.pdf")} rel="noreferrer"
                     target="_blank"> Imperialism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> paternalism</li>
              <li> assimilation</li>
              <li> Menelik II</li>
            </ol>
            2. How was the policy of paternalism like
            Social Darwinism? <br/>
            3. What idea is the policy of
            assimilation based on? <br/>
            4. Why were African resistance
            movements usually
            unsuccessful? <br/>
            5. How did colonial rule cause a breakdown in traditional
            African culture? <br/>
            6. Do you think Europeans could have
            conquered Africa if the Industrial Revolution had never
            occurred? Explain your answer. <br/>
            7. Why would the French and Russians
            sell arms to Ethiopia? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener44} value={SS7Essay44}/>

          <span className="days">LESSON 45</span>
          <p>Watch the video below: <b> Imperialism </b> by Crash Course World History </p>
          <Video videoUrl="https://www.youtube.com/embed/alJaltUmrGo"/>  <p>Answer the following questions: <br/>
          1. What did the Europeans discover the Chinese would buy other than silver? <br/>
          2. What negative effects did the Opium trade have on China? <br/>
          3. What was China’s response to the Opium trade? What did the British do as a result? <br/>
          4. What did the British get from China through the Treaty of Nanjing? What did the Chinese get? <br/>
          5. When did Europeans get involve in Africa? <br/>
          6. Why did colonize Africa? <br/>
          7. What stopped the Europeans from colonizing Africa in the 16th, 17th, and 18th centuries? <br/>
          8. What technology allowed the Europeans to finally able to colonize Africa in the 19th century?
          Explain in detail.<br/>
          9. Who is the Open Letter addressed to? <br/>
          10. What is in the Secret Compartment? <br/>
          11. How did European dominate Africa? <br/>
          12. What is the Mongol Exception? <br/>
          13. Who did Europeans get help from in order to rule colonies? What is an example of this? <br/>
          14. Who rule French Protectorates? <br/>
          15. Why did Imperialist nations prefer to rule indirectly? <br/>
          16. Why did native princes service imperialist nations by helping them rule? <br/>
          17. How long did it take the Britain to defeat the Maori on New Zealand? Why? <br/>
          18. Who was Menelik II? What did he do? <br/>
          19. How did Khedive Ismail of Egypt lose Egypt Suez’ Canal and its’ finances to Britain? <br/>
          20. What is Business Imperialism? <br/>
          21. How does the legacy of Imperialism survive today? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener45} value={SS7Essay45}/>

          <span className="days">LESSON 46</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/24_EuropeansClaimMuslimLands.pdf")}
                     rel="noreferrer"
                     target="_blank"> Europeans Claim Muslim Lands </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> geopolitics</li>
              <li> Crimean War</li>
              <li> Suez Canal</li>
            </ol>
            2. How were the reactions
            of African and Muslim rulers to imperialism similar? How
            were they different? <br/>
            3. What is geopolitics? <br/>
            4. Why did Great Britain want to
            control the Suez Canal? <br/>
            5. Why did the Persian people
            oppose their ruler’s policy of
            selling business concessions to
            Europeans? <br/>
            6. What do you think happened as a
            result of Muhammad Ali’s agriculture reform? <br/></p>

          <textarea className="textArea" onChange={onChangeSS7Listener46} value={SS7Essay46}/>

          <span className="days">LESSON 47</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/25_BritishImperialisminIndia.pdf")}
                     rel="noreferrer"
                     target="_blank"> British Imperialism in India </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> sepoy</li>
              <li> "jewel in the crown"</li>
              <li> Sepoy Mutiny</li>
              <li> Raj</li>
            </ol>
            2. How did imperialism contribute to unity and to the growth of nationalism in India? <br/>
            3. Why did Britain consider India its "jewel in the crown"? <br/>
            4. Why didn’t Indians unite against the British in the Sepoy Mutiny? <br/>
            5. What form did British rule take
            under the Raj? <br/>
            6. How did economic imperialism lead to India’s becoming a British colony? <br/>
            7. What might the decision to grease the sepoys’ cartridges with beef and pork fat
            reveal about the British attitude toward Indians? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener47} value={SS7Essay47}/>

          <span className="days">LESSON 48</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/26_ImperialisminSoutheastAsia.pdf")}
                     rel="noreferrer"
                     target="_blank"> Imperialism in Southeast Asia </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Pacific Rim</li>
              <li> King Mongkut</li>
              <li> Emilio Aguinaldo</li>
              <li> annexation</li>
              <li> Queen Liliuokalani</li>
            </ol>
            2. Why do you think Sanford Dole
            wanted the United States to annex Hawaii? <br/>
            3. How were the Dutch East India Trading Company and the
            British East India Company
            similar? <br/>
            4. What changes took place in
            Southeast Asia as a result of
            colonial control? <br/>
            5. Why did some groups believe
            that the United States should
            colonize like the Europeans? <br/>
            6. How did the reforms of the
            Siamese kings help Siam remain independent? <br/>
            7. What does President McKinley’s desire
            to "uplift and Christianize" the Filipinos suggest about his
            perception of the people? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener48} value={SS7Essay48}/>

          <span className="days">LESSON 49</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/27_ChinaResistsOutsideInfluence.pdf")}
                     rel="noreferrer"
                     target="_blank"> Transformations Around the Globe: China Resists Outside Influence </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Opium War</li>
              <li> extraterritorial rights</li>
              <li> Taiping Rebellion</li>
              <li> sphere of influence</li>
              <li> Open Door Policy</li>
              <li> Boxer Rebellion</li>
            </ol>
            2. What were the
            similarities and differences between the Taiping Rebellion
            and the Boxer Rebellion? <br/>
            3. Why did the Chinese have little
            interest in trading with the
            West? <br/>
            4. What internal problems did
            China face prior to the Taiping
            Rebellion? <br/>
            5. Why did Emperor Guangxu’s
            efforts at reform and
            modernization fail? <br/>
            6. Why do you think European powers
            established spheres of influence in China rather than
            colonies, as they did in Africa and other parts of Asia? <br/>
            7. What importance did spheres of
            influence have for China? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener49} value={SS7Essay49}/>

          <span className="days">LESSON 50</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/28_ModernizationinJapan.pdf")}
                     rel="noreferrer"
                     target="_blank"> Modernization in Japan </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Treaty of Kanagawa</li>
              <li> Meiji era</li>
              <li> Russo-Japanese War</li>
              <li> annexation</li>
            </ol>
            2. How did Japan’s victory in the Russo-
            Japanese War both explode and create stereotypes? <br/>
            3. How was the Treaty of
            Kanagawa similar to the
            treaties that China signed with
            various European powers? <br/>
            4. What steps did the Meiji
            emperor take to modernize
            Japan? <br/>
            5. How did Japan begin its quest
            to build an empire? <br/>
            6. What influences do you think were
            most important in motivating Japan to build its empire? <br/>
            7. In your view, was
            Japan’s aggressive imperialism justified? Support your
            answer with information from the text. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener50} value={SS7Essay50}/>

          <span className="days">LESSON 51</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/29_USEconomicImperialism.pdf")}
                     rel="noreferrer"
                     target="_blank"> U.S. Economic Imperialism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> caudillo</li>
              <li> Monroe Doctrine</li>
              <li> José Martí</li>
              <li> Spanish-American War</li>
              <li> Panama Canal</li>
              <li> Roosevelt Corollary</li>
            </ol>
            2. How was the principle of the Roosevelt
            Corollary different from that of the Monroe Doctrine? <br/>
            3. Why did the gap between rich
            and poor in Latin America grow
            after independence? <br/>
            4. What economic gains and
            setbacks did Latin American
            countries experience after
            independence? <br/>
            5. Why was the United States so
            interested in the security of
            Latin America? <br/>
            6. Why do you think upper-class Latin
            Americans favored governments run by caudillos? <br/>
            7. Do you think that U.S. imperialism
            was more beneficial or harmful to Latin American people?
            Explain. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener51} value={SS7Essay51}/>

          <span className="days">LESSON 52</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/30_TurmoilandChangeinMexico.pdf")}
                     rel="noreferrer"
                     target="_blank"> Turmoil and Change in Mexico </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Antonio López de Santa Anna</li>
              <li> Benito Juárez</li>
              <li> La Reforma</li>
              <li> Porfirio Díaz</li>
              <li> Francisco Madero</li>
              <li> "Pancho" Villa</li>
              <li> Emiliano Zapata</li>
            </ol>
            2. The revision of Mexico’s
            constitution is considered revolutionary. Do you agree
            with this characterization? Why or why not? <br/>
            3. In what ways was Santa Anna
            a typical caudillo? <br/>
            4. How did Porfirio Díaz change
            the direction of government in
            Mexico? <br/>
            5. How were "Pancho" Villa and
            Emiliano Zapata different from
            other Mexican revolutionary
            leaders? <br/>
            6. Why might Benito Juárez’s rise to
            power be considered surprising? <br/>
            7. Why did Villa and Zapata turn
            against Madero? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener52} value={SS7Essay52}/>

          <span className="days">LESSON 53</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/39a_MarchingTowardWar_TheGreatWar.pdf")}
                     rel="noreferrer"
                     target="_blank"> Marching Toward War </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> militarism</li>
              <li> Triple Alliance</li>
              <li> Kaiser Wilhelm II</li>
              <li> Triple Entente</li>
            </ol>
            2. Do you think
            World War I was avoidable? <br/>
            3. What were the three forces at
            work in Europe that helped set
            the stage for war? <br/>
            4. Who were the members of the
            Triple Alliance? the Triple
            Entente? <br/>
            5. What single event set in motion
            the start of World War I? <br/>
            6. Which of the forces at work in
            Europe played the greatest role in helping to prompt the
            outbreak of war? <br/>
            7. Was the description of the Balkans as
            the "powder keg" of Europe justified? Explain. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener53} value={SS7Essay53}/>

          <span className="days">LESSON 54</span>
          <p>Watch the video below: <b> Archdukes, Cynicism, and World War I </b> by Crash Course World History
          </p>
          <Video videoUrl="https://www.youtube.com/embed/_XPZQ0LAlR4"/>     <p>Answer the following
          questions: <br/>
          1. Why do most people think of the war as a tragedy? <br/>
          2. What was the immediate cause of the war? <br/>
          3. How did Russia get involved? <br/>
          4. What was the Schlieffen Plan? How did this cause Britain to declare on Germany? <br/>
          5. What does John Green blame for the cause of the War? <br/>
          6. Who fought on the Western Front? <br/>
          7. How long were the trenches? <br/>
          8. Who fought on the Eastern Front? <br/>
          9. What countries, colonies, nations from around the world were involved in the world? <br/>
          10. How many people died? How many were wounded? <br/>
          11. What was the most efficient killer in the war? <br/>
          12. What was the main reason the war was so deadly? <br/>
          13. What were the two most deadly technologies? <br/>
          14. How many men did British lose in the first day in the Somme Battle? <br/>
          15. What two things were the British trenches mainly? <br/>
          16. What was the biggest fear of the soldiers in the war? <br/>
          17. Why did the soldiers keep fighting? <br/>
          18. Who is the Open Letter addressed to? <br/>
          19. What is in the Secret Compartment? <br/>
          20. What did the Treaty of Versailles do to Germany? <br/>
          21. What were the two phases of the Russian Revolution? What happened in each phase? <br/>
          22. What did Lenin promise the people? <br/>
          23. What was Lenin’s biggest achievement? <br/>
          24. What did World War I do for the United States? <br/>
          25. What did the war do to the Ottoman Empire? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener54} value={SS7Essay54}/>

          <span className="days">LESSON 55</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/32_EuropePlungesintoWar_TheGreatWar.pdf")}
            rel="noreferrer"
            target="_blank"> Europe Plunges into War </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Central Powers</li>
              <li> Allies</li>
              <li> Western Front</li>
              <li> Schlieffen Plan</li>
              <li> trench warfare</li>
              <li> Eastern Front</li>
            </ol>
            2. Why might it be fair to say that neither side won the battles of the Somme or Verdun? <br/>
            3. Which countries made up the Central Powers? Which countries comprised the Allies? <br/>
            4. What were the characteristics of trench warfare? <br/>
            5. What factors contributed to Russia’s war difficulties? <br/>
            6. How was war on the Western and Eastern Fronts different? How was it the same? <br/>
            7. Why did the Schlieffen Plan
            ultimately collapse? Cite specific details from the text. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener55} value={SS7Essay55}/>

          <span className="days">LESSON 56</span>
          <p>Watch the video below: <b> World War I Battlefields </b> by Crash Course European History </p>
          <Video videoUrl="https://www.youtube.com/embed/IIiDULrXaqQ"/><p>Write a brief summary of the video (5-6
          sentences). Consider what the main points were and interesting aspects that
          John Greene discussed. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener56} value={SS7Essay56}/>

          <span className="days">LESSON 57</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/33_AGlobalConflict_TheGreatWar.pdf")}
                     rel="noreferrer" target="_blank"> A
            Global Conflict </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> unrestricted submarine warfare</li>
              <li> total war</li>
              <li> rationing</li>
              <li> propaganda</li>
              <li> armistice</li>
            </ol>
            2. Which of the non-European countries had the greatest impact on the war effort? Explain.<br/>
            3. What factors helped prompt the United States to join the war for the Allies? <br/>
            4. What role did women play in the war? <br/>
            5. What was the significance of the Second Battle of the Marne? <br/>
            6. In what ways was World War I truly a global conflict? <br/>
            7. Do you think governments are justified in censoring war news? Why or why not? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener57} value={SS7Essay57}/>

          <span className="days">LESSON 58</span>
          <p className="topBottom">In a 5 Paragraph Essay, identify and discuss the three most significant factors
            leading to the
            outbreak of World War I. </p><p>In addition to using the readings and videos, you may do online research to
          find examples and support for your essay. </p>
          <p className="topBottom">Click <a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                            rel="noreferrer"
                                            target="_blank">here for a 5 Paragraph Essay outline</a> if you need help in
            getting
            started. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener58} value={SS7Essay58}/>

          <span className="days">LESSON 59</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/34_AFlawedPeace_TheGreatWar.pdf")}
                     rel="noreferrer"
                     target="_blank"> A Flawed Peace </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Woodrow Wilson</li>
              <li> Georges Clemenceau</li>
              <li> Fourteen Points</li>
              <li> self-determination</li>
              <li> Treaty of Versailles</li>
              <li> League of Nations</li>
            </ol>
            2. Was the United States right to reject the Treaty of Versailles? Why or why not? <br/>
            3. What was the goal of Woodrow Wilson’s Fourteen Points? <br/>
            4. What was the "war guilt" clause in the Treaty of Versailles? <br/>
            5. Why did the United States reject the Treaty of Versailles? <br/>
            6. Were the Versailles treaties fair? Consider all the nations affected. <br/>
            7. Why might the European Allies have been more interested in punishing Germany than in creating a lasting
            peace? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener59} value={SS7Essay59}/>

          <span className="days">LESSON 60</span>
          <p>Watch the video below: <b> Post-World War I Recovery </b> by Crash Course European History </p>
          <Video videoUrl="https://www.youtube.com/embed/xzWL2XPBHMk"/>
          <p>Write a brief summary of the video (5-6 sentences). Consider what the main points were and interesting
            aspects that
            John Greene discussed. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener60} value={SS7Essay60}/>

          <span className="days">LESSON 61</span>
          <p>It's time to travel to another destination somewhere in the world. Where would you go this
            time?<br/>
            <ul className="list">
              <li> The alien landscape of Cappadocia, Turkey?</li>
              <li>The Appalachian Trial?</li>
              <li>Padar Island in
                Indonesia?
              </li>
              <li>Antarctica to visit the penguins?</li>
              <li>The Pools of Plitvice in Croatia?</li>
            </ul>
          </p>
          If you have no idea where to you'd like to go, get inspired by this video below showing some of the most
          dangerous places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/X2cdi0CLrJc"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener61} value={SS7Essay61}/>

          <span className="days">LESSON 62</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/35_RevolutionsinRussia.pdf")}
                     rel="noreferrer"
                     target="_blank"> Revolution and Nationalism: Revolutions in Russia </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> proletariat</li>
              <li> Bolsheviks</li>
              <li> Lenin</li>
              <li> Rasputin</li>
              <li> provisional government</li>
              <li> soviet</li>
              <li> Communist Party</li>
              <li> Joseph Stalin</li>
            </ol>
            2. Which of the events during the last phase of czarist rule do you think was most responsible for the fall
            of the czar? <br/>
            3. How did World War I help to bring about the Russian Revolution? <br/>
            4. What groups made up the Red Army and the White Army? <br/>
            5. Why did the Bolsheviks rename their party the Communist
            Party? <br/>
            6. How did the czar’s autocratic policies toward the people lead to social unrest? <br/>
            7. What do you think were Czar Nicholas II’s worst errors in judgment during his rule? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener62} value={SS7Essay62}/>

          <span className="days">LESSON 63</span>
          <p>Watch the video below: <b>Russian Revolution and Civil War </b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/U6KR4cLLVzQ"/>     <p> Write a summary (5-6
          sentences) of the video
          highlighting the main points that John Greene discussed. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener63} value={SS7Essay63}/>

          <span className="days">LESSON 64</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/36_Totalitarianism.pdf")}
                     rel="noreferrer"
                     target="_blank"> Totalitarianism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> totalitarianism</li>
              <li> Great Purge</li>
              <li> command economy</li>
              <li> Five-Year Plans</li>
              <li> collective farm</li>
            </ol>
            2. Were the Five-Year
            plans the best way to move the Soviet economy forward?
            Explain.<br/>
            3. What are the key traits of a totalitarian state? <br/>
            4. What are some ways
            totalitarian rulers keep their
            power? <br/>
            5. How did the Soviet economy
            change under the direction of
            Stalin? <br/>
            6. How do totalitarian states and
            constitutional governments differ? <br/>
            7. Summarize Joseph Stalin’s rise to power
            and how his control expanded.<br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener64} value={SS7Essay64}/>

          <span className="days">LESSON 65</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/37_ImperialChinaCollapses.pdf")}
                     rel="noreferrer"
                     target="_blank"> Imperial China Collapses </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Kuomintang</li>
              <li> Sun Yixian</li>
              <li> May Fourth Movement</li>
              <li> Mao Zedong</li>
              <li> Jiang Jieshi</li>
              <li> Long March</li>
            </ol>
            2. If the Long March had failed, do you
            think the Nationalist party would have been successful in
            uniting the Chinese? Why or why not? <br/>
            3. How did the Treaty of Versailles
            trigger the May Fourth
            Movement? <br/>
            4. How was Mao’s vision of
            communism different from that
            of Lenin? <br/>
            5. What started the civil war in
            China? <br/>
            6. What influence did foreign
            nations have on China from 1912 to 1938? <br/>
            7. What caused the Communist
            revolutionary movement in China to gain strength? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener65} value={SS7Essay65}/>

          <span className="days">LESSON 66</span>
          <p>Watch the video below: <b>Communists, Nationalists, and China's Revolutions </b> by Crash Course
            World History </p>
          <Video videoUrl="https://www.youtube.com/embed/UUCEeC4f6ts"/>     <p>Answer the following
          questions: <br/>
          1. What caused Sun Yat-Sen and others to plot the overthrown of the dynasty? <br/>
          2. Who is the Open Letter addressed to? <br/>
          3. What is in the Secret Compartment? <br/>
          4. What does the Republic of China call Sun Yat-Sen? What does the People’s
          Republic of China call him? <br/>
          5. What were Sun Yat-Sen’s three principles of the people? <br/>
          6. How did the 1911 Revolution begin? <br/>
          7. What was the 1911 Revolution successful? <br/>
          8. How did Sun Yat-Sen lose power? <br/>
          9. What is the period between 1912 and 1949 called? <br/>
          10. Who did the Nationalists ally with in order to regain power? <br/>
          11. Who won the Civil War? <br/>
          12. What was the Long March? <br/>
          13. What factors helped the Communist win the war? <br/>
          14. What was the rectification program? <br/>
          15. When did Mao declare the People’s Republic of China? <br/>
          16. What did the PRC promise the people? <br/>
          17. What did the Communist government mean for landlords? <br/>
          18. What was the result of the "Resist America and Help Korea" campaign? <br/>
          19. What happened to those accused of not being Communist enough? <br/>
          20. What was the Soviet Model? How did it effect China? <br/>
          21. Explain the Great Leap Forward.<br/> 22. How did China pay the USSR for heavy machinery? What was the
          effect on
          the Chinese? <br/>
          23. Describe the Cultural Revolution.<br/> 24. What were the "Four Olds"? What happened to those that
          representing
          them? <br/>
          25. What is the legacy of China’s Revolutions? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener66} value={SS7Essay66}/>

          <span className="days">LESSON 67</span>

          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/38_NationalisminIndiaandSWAsia.pdf")}
                     rel="noreferrer"
                     target="_blank"> Nationalism in India and Southwest Asia </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Rowlatt Acts</li>
              <li> Amritsar Massacre</li>
              <li> Mohandas K. Gandhi</li>
              <li> civil disobedience</li>
              <li> Salt March</li>
              <li> Mustafa Kemal</li>
            </ol>
            2. How did World War I create an
            atmosphere for political change in both India and
            Southwest Asia? <br/>
            3. How did Gandhi’s tactics of
            civil disobedience affect the
            British? <br/>
            4. How did Southwest Asia change as a result of
            nationalism? <br/>
            5. How did newly found
            petroleum supplies change the
            new nations in Southwest Asia? <br/>
            6. What do you think a nation might gain
            and lose by modernizing? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener67} value={SS7Essay67}/>

          <span className="days">LESSON 68</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/39b_PostwarUncertainty.pdf")}
                     rel="noreferrer"
                     target="_blank"> Years of Crisis: Postwar Uncertainty </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Albert Einstein</li>
              <li> theory of relativity</li>
              <li> Sigmund Freud</li>
              <li> existentialism</li>
              <li> Friedrich Nietzsche</li>
              <li> surrealism</li>
              <li> jazz</li>
              <li> Charles Lindbergh</li>
            </ol>
            2. Why were new medical treatments
            and inventions developed during World War I? <br/>
            3. Why were the ideas of Einstein
            and Freud revolutionary? <br/>
            4. How did literature in the 1920s
            reflect the uncertainty of the
            period? <br/>
            5. What impact did the increased
            use of the automobile have on
            average people? <br/>
            6. Why do you think writers and artists
            began exploring the unconscious? <br/>
            7. Why did some
            women begin demanding more political and social
            freedom? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener101} value={SS7Essay101}/>

          <span className="days">LESSON 69</span>
          <p>Watch the video below: <b> Post WWI Society & Economy </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/xzWL2XPBHMk"/>     <p>Answer the following
          questions: <br/>
          1. What was the Treaty of Versailles? Why was it significant?<br/>
          2. Describe Benito Mussolini. <br/>
          3. What is fascism?<br/>
          4. Who wrote Mein Kampf? What was it about?<br/>
          5. What was the League of Nations? What did it seek to promote?<br/>
          6. Describe two memorable things you learned from the video.<br/>
        </p>
          <textarea className="textArea" onChange={onChangeSS7Listener131} value={SS7Essay131}/>

          <span className="days">LESSON 70</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/40_AWorldwideDepression.pdf")}
                     rel="noreferrer"
                     target="_blank"> A Worldwide Depression </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> coalition government</li>
              <li> Weimar Republic</li>
              <li> Great Depression</li>
              <li> Franklin D. Roosevelt</li>
              <li> New Deal</li>
            </ol>
            2. Why do you think
            Roosevelt immediately established the New Deal? <br/>
            3. How did World War I change the balance of economic power in the world? <br/>
            4. What problems did the collapse of the American economy cause in other countries? <br/>
            5. How did Europe respond to the economic crisis? <br/>
            6. What did the weakness of the League of Nations in 1928 suggest about its future effectiveness? <br/>
            7. List one cause for each of the following effects: <br/>
            <ol className="assnLetters">
              <li>American market for European goods Dropped</li>
              <li>unemployment rates soared</li>
              <li>European banks and businesses closed</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener68} value={SS7Essay68}/>

          <span className="days">LESSON 71</span>
          <p>Watch the video below: <b> Economic Depression and the Dictators </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/Ojo8-GhhQcA"/>     <p>
          Write a summary of the video highlighting the main points that John Greene discussed. 5-6
          sentences. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener69} value={SS7Essay69}/>

          <span className="days">LESSON 72</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/41_FascismRises inEurope.pdf")}
                     rel="noreferrer"
                     target="_blank"> Fascism Rises in Europe </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> fascism</li>
              <li> Benito Mussolini</li>
              <li> Adolf Hitler</li>
              <li> Nazism</li>
              <li> Mein Kampf</li>
              <li> lebensraum</li>
            </ol>
            2. What emotions did both Hitler and Mussolini stir in their followers? <br/>
            3. What factors led to the rise of fascism in Italy? <br/>
            4. How did Hitler maintain power? <br/>
            5. Why did the leadership of many eastern European nations fall to dictators? <br/>
            6. Why did a movement like fascism and leaders like Mussolini and Hitler come to
            power during a period of crisis? <br/>
            7. Why do you think Hitler had German children join Nazi organizations? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener70} value={SS7Essay70}/>

          <span className="days">LESSON 73</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/42_AggressorsInvadeNations.pdf")}
                     rel="noreferrer"
                     target="_blank"> Aggressors Invade Nations </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> appeasement</li>
              <li> Axis Powers</li>
              <li> Francisco Franco</li>
              <li> isolationism</li>
              <li> Third Reich</li>
              <li> Munich Conference</li>
            </ol>
            2. Why weren’t the Czechs invited to take part in the Munich Conference? <br/>
            3. Compare the militarists in Japan with the European Fascists.<br/>
            4. Which countries formed the Axis Powers? <br/>
            5. What were the effects of isolationism and appeasement.<br/>
            6. What similar goals did Hitler, Mussolini, and Hirohito share? <br/>
            7. Do you think the Fascist nations of the Axis Powers could have been stopped? Explain. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener71} value={SS7Essay71}/>

          <span className="days">LESSON 74</span>
          <p className="topBottom">Until the U.S. was attacked at Pearl Harbor, the U.S. was reluctant to enter the
            war. <span style={{ color: "#3a4563", fontWeight: "bold" }}>What is
            your opinion about the U.S. policy of isolationism during the 1930s and waiting so long to assist
            the Allies in World War II? </span></p>
          <p>Write a 5 Paragraph Essay that addresses this question. </p>
          <p className="topBottom">After you formulate your opinion, create an
            outline that includes your thesis and three supporting points. Click <a
              href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer"
              target="_blank">here for an outline</a> that can help you get started. You may need to do some research
            online. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener72} value={SS7Essay72}/>

          <span className="days">LESSON 75</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/43_Hitler’s Lightning War.pdf")}
                     rel="noreferrer"
                     target="_blank"> World War II: Hitler's Lightning War </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            <p>Answer the following questions: <br/>
              1. For each term or name, write a sentence explaining its significance.<br/>
              <ol className="ssList">
                <li> nonaggression pact</li>
                <li> blitzkrieg</li>
                <li> Charles de Gaulle</li>
                <li> Winston Churchill</li>
                <li> Battle of Britain</li>
                <li> Erwin Rommel</li>
                <li> Atlantic Charter</li>
              </ol>
              2. How were Napoleon’s invasion of Russia and Hitler’s invasion of the Soviet Union similar? <br/>
              3. Why were the early months of World War II referred to as the "phony war"? <br/>
              4. Why was Egypt of strategic
              importance in World War II? <br/>
              5. Why did President Franklin Roosevelt want to offer help to the Allies? <br/>
              6. What do you think is meant by the statement that Winston Churchill possibly was Britain’s most
              powerful
              weapon against Hitler’s Germany? <br/>
              7. What factors do you think a country’s leaders consider when deciding whether to surrender or
              fight? <br/>
            </p>
            <textarea className="textArea" onChange={onChangeSS7Listener73} value={SS7Essay73}/>

            <span className="days">LESSON 76</span>
            <p>Watch the video below: <b>How did Hitler rise to power? </b> by Alex Gendler and Anthony Hazard</p>
            <Video videoUrl="https://www.youtube.com/embed/jFICRFKtAc4"/>
            <p>Answer the following questions: <br/>
              1. Why were Jews chosen to be the scapegoat for all of Germany’s problems?<br/>
              2. How did Hitler use the result of World War I to fuel his rise to power?<br/>
              3. Why was the Weimar Republic immediately unpopular with the German people?<br/>
              4. After Hitler’s unsuccessful attempt to overthrow the German government, what was his new strategy to
              seize power in Germany?<br/>
              5. How was the result of World War I used by Hitler and the Nazis to seize power and gain support amongst
              the German people?<br/>
              6. What role did the Great Depression of 1929 play in making the Nazi party a force in German
              politics?<br/>
              7. The fact that the Nazis had virtually no power in the German government before the Great Depression,
              how did this make Hitler’s rhetoric & promises to restore Germany’s greatness more attractive to the
              German people?<br/>
              8. Why was Germany hit harder by the Great Depression than any other European nation?<br/></p>
            <textarea className="textArea" onChange={onChangeSS7Listener74} value={SS7Essay74}/>

            <span className="days">LESSON 77</span>
            <p className="topBottom">It's time to travel again anywhere in the world. Where will you go this time?<br/>
              <ul className="list">
                <li>Denali National Park in Alaska?</li>
                <li>Wat Tum Sua Temple in Krabi, Thailand?</li>
                <li>Alligator Swamps in Florida?</li>
                <li>Mt. Fuji in Japan?</li>
              </ul>
            </p>
            If you have no idea where to you'd like to go, get inspired by this video showing some of the most
            beautiful places in the world.<br/>
            <Video videoUrl="https://www.youtube.com/embed/olboi3ttUi8"/>
            <p> Next, answer the following questions:<br/>
              1. What place would you visit?<br/>
              2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
                href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
              3. Why did you choose this place?<br/>
              4. Discuss the cultural, historical or environmental significance this place has. (In what ways do you
              think is it important?)<br/>
              5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
                minutes
                from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
                it </i>... <i>A
                helicopter is the only way to get there.</i>) <br/>
              6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
                beach</i> ...
              <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
              7. What language do they speak?<br/>
              8. What things/activities will you do when you get there?<br/>
              <br/></p>
            <textarea className="textArea" onChange={onChangeSS7Listener75} value={SS7Essay75}/>

            <span className="days">LESSON 78</span>
            <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/44_JapansPacificCampaign.pdf")}
                       rel="noreferrer"
                       target="_blank"> Japan's Pacific Campaign </a></p>
            <p> After you complete the reading, answer the following questions:<br/>
              1. For each term or name, write a sentence explaining its significance.
              <br/>
              <ol className="ssList">
                <li> Isoroku Yamamoto</li>
                <li> Pearl Harbor</li>
                <li> Battle of Midway</li>
                <li> Douglas MacArthur</li>
                <li> Battle of Guadalcanal</li>
              </ol>
              2. What problems did Japan face in building an empire in the Pacific? <br/>
              3. How did the Japanese plan to catch the European colonial powers and the United States by
              surprise? <br/>
              4. In what way was the Battle of the Coral Sea a new kind of naval warfare? <br/>
              5. What was General Douglas MacArthur’s island-hopping strategy?<br/>
              6. Did Admiral Yamamoto make a wise decision in bombing Pearl Harbor? Why or why not? <br/>
              7. Why do you think the Japanese changed their approach from trying to win the support of the
              colonized
              peoples to acting as conquerors? <br/>
            </p>
            <textarea className="textArea" onChange={onChangeSS7Listener76} value={SS7Essay76}/>

            <span className="days">LESSON 79</span>
            <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/45_TheHolocaust.pdf")} rel="noreferrer"
                       target="_blank"> The Holocaust </a></p>
            <p> After you complete the reading, answer the following questions:<br/>
              1. For each term or name, write a sentence explaining its significance.
              <br/>
              <ol className="ssList">
                <li> Aryan</li>
                <li> Holocaust</li>
                <li> Kristallnacht</li>
                <li> ghetto</li>
                <li> "Final Solution"</li>
                <li> genocide</li>
              </ol>
              2. What impact did the Holocaust have on the Jewish population of Europe? <br/>
              3. What was the new racial order proposed by the Nazis? <br/>
              4. What Nazi action marked the final stage of the "Final Solution"? <br/>
              5. How did some non-Jews oppose Hitler’s "Final Solution"? <br/>
              6. Why might people want to blame a minority group for most of their country’s problems? <br/>
              7. Why do you think the German people went along with the Nazi policy of persecution of the
              Jews? <br/>
            </p>
            <textarea className="textArea" onChange={onChangeSS7Listener77} value={SS7Essay77}/>

            <span className="days">LESSON 80</span>
            <p>Watch the video below: <b>The Holocaust,Genocides, and Mass Murder of WWII</b> by Crash Course
              European History </p>
            <Video videoUrl="https://www.youtube.com/embed/iQeDvnapdlg"/>
            Write a summary of the video highlighting the main points that John Greene discussed. 5-6
            sentences. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener78} value={SS7Essay78}/>

          <span className="days">LESSON 81</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/46_TheAlliedVictory.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Allied Victory </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Dwight D. Eisenhower</li>
              <li> Battle of Stalingrad</li>
              <li> D-Day</li>
              <li> Battle of the Bulge</li>
              <li> kamikaze</li>
            </ol>
            2. Did President
            Truman make the correct decision in using the atomic
            bomb? Why or why not? <br/>
            3. Why did Stalin want the United
            States and Britain to launch a second front in the west? <br/>
            4. How did the Allies try to
            conceal the true location for
            the D-Day landings? <br/>
            5. What brought about the
            Japanese surrender? <br/>
            6. How do governments gather support for a war effort on the home front? <br/>
            7. Should governments have the power
            to limit the rights of their citizens during wartime? Explain
            your answer. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener79} value={SS7Essay79}/>

          <span className="days">LESSON 82</span>
          <p>Watch the video below: <b>World War II </b> by Crash Course World History</p>
          <Video videoUrl=" https://www.youtube.com/embed/Q78COTwT7nE"/>     <p>Answer the following
          questions: <br/>
          1. What was Japanese role in starting World War II? <br/>
          2. What was the promise to Germany from Hitler? <br/>
          3. What was the Blitzkrieg? <br/>
          4. What countries did the Nazis take in Europe within nine months? <br/>
          5. What was the Battle of Britain? <br/>
          6. When did the desert campaign in North Africa occur? <br/>
          7. What country did the Nazis invaded which broke the Non-Aggression Pact they had signed in
          1939? <br/>
          8. What did Japan hope the United States would do as a result of its attack on PeWhy was this "a stupid
          gamble"? <br/>
          9. What did Japan invade in 1941? <br/>
          10. How was Argentina vital to the Allies during the war? <br/>
          11. What is the Mongol exception? <br/>
          12. What was the Battle of Midway? <br/>
          13. How many people died in the Battle of Stalingrad? <br/>
          14. What did the Germany do in the Battle of Stalingrad? What was the Russian response to the
          German attack? <br/>
          15. How did the Russians win the Battle of Stalingrad? <br/>
          16. What was the United States strategy in the Pacific? <br/>
          17. When was Rome liberated by Americans and Canadians? <br/>
          18. What was the beginning of the end for the Nazis? <br/>
          19. Who is Open Letter addressed to? <br/>
          20. What is in the Secret Compartment? <br/>
          21. How many Canadians died during World War I? <br/>
          22. When was Mussolini executed? When did Hitler die? <br/>
          23. How did the war end against Japan? <br/>
          24. What was Lebensraum? How was this a cause for Hitler’s decision to start the war? <br/>
          25. What was the "Hunger Plan"? What was the benefit of this plan for the Germany? Who suffered
          the most for this plan? <br/>
          26. How did Japan attempt to expand its agricultural holdings? <br/>
          27. Why can we NOT say "World War II was about the Allies fighting for democratic ideals against
          the totalitarian, militaristic, imperialism of the fascist Axis Powers"? <br/>
          28. Why is World War II so important? <br/>
          29. What was used to slaughter millions? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener80} value={SS7Essay80}/>

          <span className="days">LESSON 83</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/47_EuropeandJapaninRuins.pdf")}
                     rel="noreferrer"
                     target="_blank"> Europe and Japan in Ruins </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Nuremberg Trials</li>
              <li> demilitarization</li>
              <li> democratization</li>
            </ol>
            2. Why was demilitarization such an
            important part of the postwar program for Japan? <br/>
            3. Why did so many Europeans
            take to the roads and wander
            the countryside after the war? <br/>
            4. How did the Allies deal with
            the issue of war crimes in
            Europe? <br/>
            5. What three programs did
            General Douglas MacArthur
            introduce during the U.S.
            occupation of Japan? <br/>
            6. Why do you think that many
            Europeans favored communism after World War II? <br/>
            7. Do you think it was right for the Allies to try only Nazi and Japanese
            leaders for war crimes? Why or why not?<br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener81} value={SS7Essay81}/>

          <span className="days">LESSON 84</span>
          <p>Watch the video below: <b>Post-War Rebuilding and the Cold War</b> by Crash Course European
            History </p>
          <Video videoUrl="https://www.youtube.com/embed/-rkIqtV07HE"/>     <p>Answer the following
          questions: <br/>
          1. The USSR suffered a lot of losses in World War II, including losing approximately 47 million
          people. What were some things they did to rebuild themselves which allowed them to become a
          superpower? <br/>
          2. What do you think about US president Harry Truman’s decision to cut off aid to the USSR whose
          people were starving to death?<br/>
          3. Describe how Berlin became a divided city.<br/>
          4. What did the Soviet Union do to punish people who were not loyal communists? <br/>
          5. Did the United States also do things to dissuade people from becoming communists and
          encourage fearfulness of the Soviet Union? Explain. <br/>
          6. Describe how the average person in the United States thought life was like in the Soviet
          Union. <br/>
          7. What do you think the average person in the Soviet Union thought about capitalism? <br/>
        </p>
          <textarea className="textArea" onChange={onChangeSS7Listener82} value={SS7Essay82}/>

          <span className="days">LESSON 85</span>
          <p>Watch the video below: <b>Post World War II Recovery </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/nlp068CmQaE"/>     <p>Answer the following
          questions: <br/>
          1. What do you think were the most negative outcomes of the Cold War? <br/>
          2. Do you think there were positive things that were the result of the Cold War? Explain. <br/>
          3. Describe life for the average person living in western Europe versus eastern Europe. Who do
          you think had it better? Explain. <br/>
          4. Germans and others were forced to go through de-Nazification training and some of the leaders
          were imprisoned and hanged after the Nuremberg trials. Do you think that the Nazi’s war crimes
          were adequately punished and dealt with? Explain. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener83} value={SS7Essay83}/>

          <span className="days">LESSON 86</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/48_ColdWarSuperpowersFaceOff.pdf")}
                     rel="noreferrer"
                     target="_blank"> Cold War Superpowers Face Off </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> United Nations</li>
              <li> iron curtain</li>
              <li> containment</li>
              <li> Truman Doctrine</li>
              <li> Marshall Plan</li>
              <li> Cold War</li>
              <li> NATO</li>
              <li> Warsaw Pact</li>
              <li> brinkmanship</li>
            </ol>
            2. Why might Berlin be a likely spot for
            trouble to develop during the Cold War? <br/>
            3. What was the purpose in
            forming the United Nations? <br/>
            4. What was the goal of the
            Marshall Plan? <br/>
            5. What were the goals of NATO
            and the Warsaw Pact? <br/>
            6. What factors help to
            explain why the United States and the Soviet Union
            became rivals instead of allies? <br/>
            7. What were Stalin’s objectives in
            supporting Communist governments in Eastern Europe? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener84} value={SS7Essay84}/>

          <span className="days">LESSON 87</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/49_CommunistsTakePowerinChina.pdf")}
                     rel="noreferrer"
                     target="_blank"> Communists Take Power in China </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Mao Zedong</li>
              <li> Jiang Jieshi</li>
              <li> commune</li>
              <li> Red Guards</li>
              <li> Cultural Revolution</li>
            </ol>
            2. What circumstances prevented Mao’s Great Leap Forward from bringing economic prosperity to China <br/>
            3. How did the Chinese Communists increase their power during World War II? <br/>
            4. What actions did the Nationalists take during World War II? <br/>
            5. What was the goal of the Cultural Revolution? <br/>
            6. Why did the United States support the Nationalists in the civil war in China? <br/>
            7. What policies or actions enabled the Communists to defeat the Nationalists in their long civil war? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener85} value={SS7Essay85}/>

          <span className="days">LESSON 88</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/52a_TheCold WarDividestheWorld.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Cold War Divides the World </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Third World</li>
              <li> nonaligned nations</li>
              <li> Fidel Castro</li>
              <li> Anastasio Somoza</li>
              <li> Daniel Ortega</li>
              <li> Ayatollah Ruholla Khomeini</li>
            </ol>
            2. What were the reasons that Islamic
            fundamentalists took control of Iran? <br/>
            3. How was the Cuban Missile
            Crisis resolved? <br/>
            4. What was significant about the
            1990 elections in Nicaragua? <br/>
            5. Why did the Soviet Union
            invade Afghanistan? <br/>
            6. What advantages and
            disadvantages might being nonaligned have offered a developing nation during the Cold War? <br/>
            7. What similarities do you see among U.S.
            actions in Nicaragua, Cuba, and Iran? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener86} value={SS7Essay86}/>

          <span className="days">LESSON 89</span>
          <p>Watch the video below: <b>The Cold War </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/y9HjvHZfCUI"/>
          <p>Answer the following
            questions: <br/>
            1. Who were the two big powers in the Cold War? <br/>
            2. How did the Soviets view American rebuilding efforts? <br/>
            3. How did they fear each other? <br/>
            4. Where did the Soviets create a ‘sphere of influence’? <br/>
            5. What are the usual dates for the Cold War?<br/>
            6. Why did the US have an advantage? <br/>
            7. What was the US response to the Soviets? <br/>
            8. What was the nuclear arms race? <br/>
            9. What is the MAD strategy? <br/>
            10. What were the 2 times we came close to nuclear war? <br/>
            11. Why were capitalists concerned about Vietnam’s movement toward capitalism? <br/>
            12. Who did the US support in Nicaragua and El Salvador? <br/>
            13. Where did the Soviets crush uprisings? <br/>
            14. What were the 3 Worlds? <br/>
            15. What were some bad Soviet policies? <br/>
            16. What Soviet leader helped usher the end of the Cold War? <br/>
            17. Give 2 examples of how he did this.<br/> 18. When did the Berlin Wall come down? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener87} value={SS7Essay87}/>

          <span className="days">LESSON 90</span>
          <p>Imagine that you have a private jet at your disposal and can travel anywhere in the world. If
            you could travel to any destination, where would you go?
            <ul className="list">
              <li>Halong Bay in Vietnam?</li>
              <li>Niagra Falls in New York?</li>
              <li>Pongwe beach in Zanzibar?</li>
              <li>Tanzania's Serengeti National Park?</li>
              <li>Vallée de Mai nature reserve in Seychelles?</li>
            </ul>
          </p>
          If you have no idea where to you'd like to go, get inspired by this video showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/FZaeegCXWRg"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways
            do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener88} value={SS7Essay88}/>

          <span className="days">LESSON 91</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/50.1-The Indian Subcontinent Achieves Freedom.pdf")}
            rel="noreferrer"
            target="_blank"> The Colonies Become New Nations :The Indian Subcontinent Achieves Freedom </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Congress Party</li>
              <li> Muslim League</li>
              <li> Muhammad Ali Jinnah</li>
              <li> partition</li>
              <li> Jawaharlal Nehru</li>
              <li> Indira Gandhi</li>
              <li> Benazir Bhutto</li>
            </ol>
            2. Why has the conflict between
            India and Pakistan over Kashmir become such a concern
            to the world today? <br/>
            3. Why did British officials
            partition India into India and
            Pakistan? <br/>
            4. In what way did Pakistan also
            undergo a partition? <br/>
            5. What is the main cause today
            of civil strife in Sri Lanka? <br/>
            6. Why might India’s political and economic
            success be so crucial to the future of democracy in Asia? <br/>
            7. How did religious and cultural
            differences create problems for newly emerging nations? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener89} value={SS7Essay89}/>

          <span className="days">LESSON 92</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/50.2-Southeast Asian Nations Gain Independence.pdf")}
            rel="noreferrer"
            target="_blank"> Southeast Asian Nations Gain Independence </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Ferdinand Marcos</li>
              <li> Corazón Aquino</li>
              <li> Aung San Suu Kyi</li>
              <li> Sukarno</li>
              <li> Suharto</li>
            </ol>
            2. What was similar and
            different about the elections that brought defeat to the
            ruling governments in the Philippines and in Burma? <br/>
            3. Why did the retention of U.S.
            military bases in the
            Philippines so anger Filipinos? <br/>
            4. What was the outcome of the
            1990 Myanmar election? How
            did the government respond? <br/>
            5. How did Suharto come to
            power in Indonesia? <br/>
            6. How did World War II play a role in the
            eventual decolonization of Southeast Asia? <br/>
            7. Why do you think that the United
            States demanded a 99-year lease on military and naval
            bases in the Philippines? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener90} value={SS7Essay90}/>

          <span className="days">LESSON 93</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/50.6_New Nations in Africa.pdf")}
                     rel="noreferrer"
                     target="_blank"> New Nations in Africa </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Negritude movement</li>
              <li> Kwame Nkrumah</li>
              <li> Jomo Kenyatta</li>
              <li> Ahmed Ben Bella</li>
              <li> Mobutu Sese Seko</li>
            </ol>
            2. Why do you think revolution swept so
            many African nations following their independence from
            European rule? <br/>
            3. Who were the Mau Mau of
            Kenya? What was their goal? <br/>
            4. What sparked the present-day
            civil struggle in Algeria? <br/>
            5. What prompted Portugal to
            eventually grant Angola its
            freedom? <br/>
            6. How did the way in which
            European colonialists carved up Africa in the 1800s lead
            to civil strife in many new African nations? <br/>
            7. Why do you think the United States
            and the Soviet Union participated in Angola’s civil war? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener91} value={SS7Essay91}/>

          <span className="days">LESSON 94</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/50.4-Conflicts in the Middle East.pdf")}
                     rel="noreferrer"
                     target="_blank"> Conflicts in the Middle East </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Anwar Sadat</li>
              <li> Golda Meir</li>
              <li> PLO</li>
              <li> Yasir Arafat</li>
              <li> Camp David Accords</li>
              <li> intifada</li>
              <li> Oslo Peace Accords</li>
            </ol>
            2. Some have said that the Palestinian-
            Israeli conflict represents the struggle of right against right.
            Explain why you agree or disagree.<br/> 3. What historic claim do both
            Palestinians and Jews make to
            the land of Palestine? <br/>
            4. What land did Israel gain from
            the wars against its Arab
            neighbors? <br/>
            5. What were the terms of the
            Oslo Accords? <br/>
            6. How was the creation of Israel similar to the
            establishment of an independent India? <br/>
            7. Why do you think all the Israeli-
            Palestinian accords ultimately have failed? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener92} value={SS7Essay92}/>

          <span className="days">LESSON 95</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/50.5-Central Asia Struggles.pdf")}
                     rel="noreferrer"
                     target="_blank"> Central Asia Struggles </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Transcaucasian Republics</li>
              <li> Central Asian Republics</li>
              <li> mujahideen</li>
              <li> Taliban</li>
            </ol>
            2. Why did the new nations of
            Central Asia experience such economic difficulties? <br/>
            3. What countries make up the
            Transcaucasian Republics? the
            Central Asian Republics? <br/>
            4. Why did Afghanis oppose the
            notion of Communist rule? <br/>
            5. Why did the United States take
            military action against the Taliban? <br/>
            6. Some historians call the Soviet-
            Afghan war the Soviet Union’s "Vietnam." What do they
            mean by this reference? Do you agree with it? <br/>
            7. Why might Afghanis have been
            willing to accept Taliban rule by 1998? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener93} value={SS7Essay93}/>

          <span className="days">LESSON 96</span>
          <p>Watch the video below: <b>Decolonization by </b> by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/FlMKqRCNX9c"/>     <p>Answer the following
          questions: <br/>
          1. List examples of Empires that ended before the 20th century.<br/> 2. What makes the recent decolonization
          different from previous revolutions? <br/>
          3. How did World War II contributed to decolonization? <br/>
          4. List Asian colonies that become independent? <br/>
          5. What was the desire of the Indian National Congress? <br/>
          6. Who was Gandhi? <br/>
          7. What did Gandhi use to bring independence? <br/>
          8. Who was Muhammad Ali Jinnah? <br/>
          9. What did cause violence in India? <br/>
          10. How did Gandhi die? <br/>
          11. Who is the Open Letter addressed to? <br/>
          12. What is in the Secret Compartment? <br/>
          13. What percentage of the population of Greenland has access to the internet? <br/>
          14. What was Indonesia’s connection to the Dutch? <br/>
          15. How did colonization end in Cambodia? <br/>
          16. When did Communist take control of Vietnam? <br/>
          17. What did Nassar do for Egypt? <br/>
          18. What was one of the problematic results of colonization in Central and Southern
          Africa? Discuss an example of this? <br/>
          19. What problems were Africans left with when Europeans left? <br/>
          20. Discuss examples of signs of growth and progress in Africa.<br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener94} value={SS7Essay94}/>

          <span className="days">LESSON 97</span>
          <p>Watch the video below: <b> Middle East geopolitics explained simply</b></p>
          <Video videoUrl="https://www.youtube.com/embed/BpTDDKsdMcY"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to
            be the most interesting aspects. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener95} value={SS7Essay95}/>

          <br/><span className="days">LESSON 98</span>
          <p>Watch the video below: <b> Conflict in Israel and Palestine</b> by Crash Course World History
          </p>
          <Video videoUrl="https://www.youtube.com/embed/1wo2TLlMhiw"/>
          <p className="topBottom"><strong>Write a <i>5 Paragraph Essay</i> discussing the Palestinian-Israeli Conflict
            and which group
            you side with. </strong>You may need to do some research online. Be sure to site specific examples to
            explain your position. Click <a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                            rel="noreferrer"
                                            target="_blank">here for an outline </a>that can help you get started
            with the
            essay. </p>

          <textarea className="textArea" onChange={onChangeSS7Listener96} value={SS7Essay96}/>

          <span className="days">LESSON 99</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/50_WarsinKoreaandVietnam.pdf")}
                     rel="noreferrer"
                     target="_blank"> Struggles for Democracy: Wars in Korea and Vietnam </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> 38th parallel</li>
              <li> Douglas MacArthur</li>
              <li> Ho Chi Minh</li>
              <li> domino theory</li>
              <li> Ngo Dinh Diem</li>
              <li> Vietcong</li>
              <li> Vietnamization</li>
              <li> Khmer Rouge</li>
            </ol>
            2. Do you think U.S. involvement in Vietnam was justified? Why or why not? <br/>
            3. What role did the United
            Nations play in the Korean War? <br/>
            4. How did Vietnam become divided? <br/>
            5. What was the Khmer Rouge’s plan for Cambodia? <br/>
            6. What role did the policy of containment play in the involvement of the United States in wars in Korea
            and
            Vietnam? <br/>
            7. How might imperialism be one of the causes of the Vietnam War? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener97} value={SS7Essay97}/>

          <span className="days">LESSON 100</span>
          <p>The video below: <b> Vietnam </b> by Crash Course is age restricted. Viewing it requires parent or guardian
            permission. </p>
          <Video videoUrl="https://www.youtube.com/embed/Gk1rRqeTEOY"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the most interesting aspects. You may need to watch the video twice and take notes while watching.
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener98} value={SS7Essay98}/>

          <span className="days">LESSON 101</span>
          <p>Watch the video below: <b> The Cold War in Asia </b> by Crash Course US History </p>
          <Video videoUrl="https://www.youtube.com/embed/Y2IcmLkuhG0"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the most interesting aspects. You may need to watch the video twice and take notes while
            watching.<br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener99} value={SS7Essay99}/>

          <span className="days">LESSON 102</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/51_ChangesinCentralandEasternEurope.pdf")}
            rel="noreferrer"
            target="_blank"> Changes in Central and Eastern Europe </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Solidarity</li>
              <li> Lech Walesa</li>
              <li> reunification</li>
              <li> ethnic cleansing</li>
            </ol>
            2. What effect did economic reform have on Slovakia? <br/>
            3. How did Solidarity affect Communist rule in Poland? <br/>
            4. What effect did reunification have on Germany’s inter-
            national role? <br/>
            5. What was the main cause of the breakup of Czechoslovakia? <br/>
            6. Why did ethnic tension become such a severe problem in the Soviet Union and Yugoslavia? <br/>
            7. What are some of the problems faced in Central and Eastern Europe in the 21st century? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener100} value={SS7Essay100}/>

          <span className="days">LESSON 103</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/52_TheColdWarThaws.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Cold War Thaws </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Nikita Khrushchev</li>
              <li> Leonid Brezhnev</li>
              <li> John F. Kennedy</li>
              <li> Lyndon Johnson</li>
              <li> détente</li>
              <li> Richard M. Nixon</li>
              <li> SALT</li>
              <li> Ronald Reagan</li>
            </ol>
            2. What was the result of Reagan’s move away from détente? <br/>
            3. What effects did destalinization have on Soviet satellite countries? <br/>
            4. What changes did Alexander Dubček seek to make in Czechoslovakia in 1968, and
            what happened? <br/>
            5. Why was the policy of brinkmanship replaced? <br/>
            6. In view of Soviet policies toward Eastern Europe in the postwar era, what reasons did people in
            Eastern
            Europe have for resistance? <br/>
            7. Do you think it was a wise political move for Nixon to visit Communist China and
            the Soviet Union? Why or why not? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener102} value={SS7Essay102}/>

          <span className="days">LESSON 104</span>
          <p>Watch the video below: <b> Democracy - A short introduction</b> by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/u6jgWxkbR7A"/>
          <p>Answer the following questions: <br/>
            1. What is the meaning of the word democracy? <br/>
            2. Where did direct democracy first get its start and how did it work? <br/>
            3. Which groups of people were allowed to vote in Athens? <br/>
            4. Democracy is about protecting the best interests of the people. What are some of these
            interests? <br/>
            5. What are the three branches of power in a democracy? <br/>
            6. What does each branch do? <br/>
            7. What are checks and balances? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener103} value={SS7Essay103}/>

          <span className="days">LESSON 105</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/53_Democracy.pdf")} rel="noreferrer"
                     target="_blank"> Democracy </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Brasília</li>
              <li> land reform</li>
              <li> standard of living</li>
              <li> recession</li>
              <li> PRI</li>
            </ol>
            2. What are some of the attributes of democracy? <br/>
            3. What role did the military play in shaping the economy of Brazil? <br/>
            4. What were some of the positive benefits of one-party rule in Mexico? <br/>
            5. What effect did the Falklands war have on the military government in Argentina? <br/>
            6. Compare and contrast the roles of the military in the governments of Brazil,
            Mexico, and Argentina.<br/> 7. What have been some of the obstacles to democracy in Latin America? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener104} value={SS7Essay104}/>

          <span className="days">LESSON 106</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/54_TheChallengeofDemocracyinAfrica.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Challenge of Democracy in Africa </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> federal system</li>
              <li> martial law</li>
              <li> dissident</li>
              <li> apartheid</li>
              <li> Nelson Mandela</li>
            </ol>
            2. What were the main negative effects of the economic policies of European colonizers? <br/>
            3. What effect did old colonial boundaries have on newly independent African states? <br/>
            4. What was the outcome of the war between Nigeria and
            Biafra? <br/>
            5. What were the homelands in South Africa? <br/>
            6. What do you think is the main problem that Nigeria must overcome before it can establish a democratic
            government? <br/>
            7. What are some of the important issues facing South Africa today? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener105} value={SS7Essay105}/>

          <span className="days">LESSON 107</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/55_TheCollapseof theSovietUnion.pdf")}
                     rel="noreferrer"
                     target="_blank"> The Collapse of the Soviet Union </a></p>
          <p>Watch the video below: <b> How and Why Did The Soviet Union Collapse</b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/qZdijf1U7OY"/>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> Politburo</li>
              <li> Mikhail Gorbachev</li>
              <li> glasnost</li>
              <li> perestroika</li>
              <li> Boris Yeltsin</li>
              <li> CIS</li>
              <li> "shock therapy"</li>
            </ol>

            2. In what ways were the policies of Gorbachev, Yeltsin, and Putin similar? <br/>
            3. What are some of the changes that Gorbachev made to the Soviet economy? <br/>
            4. After the breakup of the Soviet Union, what problems did
            Yeltsin face as the president of the Russian Federation? <br/>
            5. How did Putin deal with Chechnya? <br/>
            6. How did Gorbachev’s reforms help to move the Soviet Union toward democracy? <br/>
            7. What are some of the problems that faced President Vladimir Putin in Russia? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener106} value={SS7Essay106}/>

          <span className="days">LESSON 108</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/57_ChinaReformandReaction.pdf")}
                     rel="noreferrer"
                     target="_blank"> China Reform and Reaction </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Zhou Enlai</li>
              <li> Deng Xiaoping</li>
              <li> Four Modernizations</li>
              <li> Tiananmen Square</li>
              <li> Hong Kong</li>
            </ol>
            2. Has there been greater progress in political or economic reform in China? <br/>
            3. What effect did Mao’s policies have on economic growth? <br/>
            4. What were some of Deng Xiaoping’s economic reforms? <br/>
            5. How would you describe China’s record on human rights? <br/>
            6. Judging from what you have read about the Chinese government, do you think Hong Kong will keep its
            freedoms
            under Chinese rule? Explain. <br/>
            7. What were some of the events that followed the demonstration in Tiananmen Square? <br/></p>

          <textarea className="textArea" onChange={onChangeSS7Listener107} value={SS7Essay107}/>

          <span className="days">LESSON 109</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/58_TheImpactofScienceandTechnology.pdf")}
                     rel="noreferrer"
                     target="_blank"> Global Interdependence :The Impact of Science and Technology </a>
          </p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> International Space Station</li>
              <li> Internet</li>
              <li> genetic engineering</li>
              <li> cloning</li>
              <li> green revolution</li>
            </ol>
            2. Is there a limit to how far cloning should go? Why or why not? <br/>
            3. How does the development of the International Space Station show that space exploration has become a
            cooperative endeavor? <br/>
            4. How has the development of the computer and the Internet changed the way people work? <br/>
            5. What areas of medicine have benefited from scientific and
            technological developments? <br/>
            6. Why do you think that space exploration became an arena for cooperation between the Soviet Union and
            the
            United States? <br/>
            7. How do you think the Internet will affect the world of work in the future? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener108} value={SS7Essay108}/>

          <span className="days">LESSON 110</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/59_GlobalEconomicDevelopment.pdf")}
                     rel="noreferrer"
                     target="_blank"> Global and Economic Development </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> developed nation</li>
              <li> emerging nation</li>
              <li> global economy</li>
              <li> free trade</li>
              <li> ozone layer</li>
              <li> sustainable growth</li>
            </ol>
            2. Do you think that sustainable growth is possible? Why or why not? <br/>
            3. Why are "knowledge workers"
            becoming more important in the developed nations? <br/>
            4. What impact did the economic success of the EU have on other regions of the world? <br/>
            5. How has global economic development affected the environment? <br/>
            6. In what ways has technology changed the workplace of people across the world? <br/>
            7. Why might some nations favor imposing tariffs on the imports of certain products? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener109} value={SS7Essay109}/>

          <span className="days">LESSON 111</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/60_GlobalSecurityIssues.pdf")}
                     rel="noreferrer"
                     target="_blank"> Global Security Issues </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> proliferation</li>
              <li> Universal Declaration of Human Rights</li>
              <li> political dissent</li>
              <li> gender inequality</li>
              <li> AIDS</li>
              <li> refugee</li>
            </ol>
            2. Explain how advances in science and
            technology have increased threats to global security.<br/>
            3. What steps have nations taken to control the proliferation of weapons of mass destruction? <br/>
            4. How has AIDS affected the economy of Sub-Saharan Africa? <br/>
            5. What positive effects does immigration have? <br/>
            6. Why might nations want to retain or develop an arsenal of nuclear, biological, and chemical
            weapons? <br/>
            7. How are ethnic and religious conflicts related to problems of global security? <br/>
            8. How can individuals affect social conditions around the world? Consider the example of Mother Teresa
            when
            writing your answer. <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener111} value={SS7Essay111}/>

          <span className="days">LESSON 113</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/61_Terrorism.pdf")} rel="noreferrer"
                     target="_blank"> Terrorism </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> terrorism</li>
              <li> cyberterrorism</li>
              <li> Department of Homeland Security</li>
              <li> USA Patriot Act</li>
            </ol>
            2. How are science and technology are used to combat terrorism? <br/>
            3. How has terrorism changed in over the years? <br/>
            4. What methods do terrorists use? <br/>
            5. What steps did the United States take in response to the terrorist attacks of September 11,
            2001? <br/>
            6. What might cause individuals to use terror tactics to bring about change? <br/>
            7. Is it important for the U.S. government to respect peoples’ civil rights as it wages a war against
            terrorism? Why or why not? <br/>
            8. What do you think has been the greatest impact of terrorism on American life? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener112} value={SS7Essay112}/>

          <span className="days">LESSON 114</span>
          <p>Watch the video below: <b> Terrorism, War, and Bush </b> by Crash Course US History </p>
          <Video videoUrl="https://www.youtube.com/embed/nlsnnhn3VWE"/>
          <p>Write a brief summary of the video (5-6 sentences). Discuss the main points and include what you considered
            to be the most
            interesting aspects. You may need to watch the video twice and take notes while watching.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener113} value={SS7Essay113}/>

          <span className="days">LESSON 115</span>
          <p>Read <a href={require("../resources/social-studies/ss-pdfs7th/62_CulturesBlendinaGlobalAge.pdf")}
                     rel="noreferrer"
                     target="_blank"> Cultures Blend in a Global Age </a></p>
          <p> After you complete the reading, answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.
            <br/>
            <ol className="ssList">
              <li> popular culture</li>
              <li> materialism</li>
            </ol>
            2. "Ethnocentrism—the belief in the superiority of one’s own ethnic group—has taken hold in the world."
            Do
            you
            agree or disagree with that statement? Explain. <br/>
            3. How do the mass media spread popular culture across the world? <br/>
            4. Why do Western cultures tend to dominate other cultures? <br/>
            5. What steps have governments and people taken to protect cultural diversity? <br/>
            6. Why are the mass media such an effective means of transmitting culture? <br/>
            7. Do you think that limiting the amount of foreign television programming is an effective way to
            protect
            cultural diversity? Why or why not? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener114} value={SS7Essay114}/>

          <span className="days">LESSON 116</span>
          <p>Watch the video below: <b> Globalization I - The Upside </b>by Crash Course World History </p>
          <Video videoUrl="https://www.youtube.com/embed/5SnR-e0S6Ic"/>
          <p>Answer the following questions: <br/>
            1. What are the reasons for the dramatic increase in the scale of global trade? <br/>
            2. Where did the cotton in t-shirt come from? <br/>
            3. Where did the spinning and weaving of the cotton most likely come from? <br/>
            4. Where was the shirt most likely screen printed? <br/>
            5. What is the cheapest part of making the t-shirt? <br/>
            6. Who is the Open Letter addressed to? <br/>
            7. What is in the Secret Compartment? <br/>
            8. How is Cookie Monster a symbol of contemporary consumption? <br/>
            9. How did moving manufacturing from high wage to low wage earning countries help the world? <br/>
            10. What are the side effects of globalization? <br/>
            11. Why is migration easier today than ever before? <br/>
            12. What are remittances? <br/>
            13. Give examples of culture globalization? <br/>
            14. What factors have caused the population to increase so dramatically? <br/>
            15. What does John Green say is easy and dangerous? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener115} value={SS7Essay115}/>

          <span className="days">LESSON 117</span>
          <p>Watch the video below: <b> Globalization II - Good or Bad? </b> by Crash Course World History </p>
          <Video videoUrl="https://www.youtube.com/embed/s_iwrt7D5OA"/>
          <p>Answer the following questions: <br/>
            1. What has globalization done to the world’s population? <br/>
            2. What is a Service Economy? <br/>
            3. How has the switch to a service economy affected Americans? <br/>
            4. List some examples of how collectivization limited freedoms during the first half of the 20th
            century. <br/>
            5. What do good historians do? <br/>
            6. What is John Green biased against? Why? <br/>
            7. What effect did individualism have on sex and family? <br/>
            8. What are some effects of globalization on the environment? <br/>
            9. Who is the Open Letter addressed to? <br/>
            10. What is in the Secret Compartment? <br/>
            11. What do we use more of as worldwide consumption increases? What are the consequences of this
            use? <br/>
            12. What has the world not dealt with since the 1918 flu? <br/>
            13. How many people have relocated from Chinese country sides to urban areas? <br/>
            14. What is a benefit of an economically interdependent world? <br/>
            15. What form of government had expanded the world? <br/>
            16. List examples in which economic success is not dependent on democracy.<br/> 17. What consequences (good
            and bad) can potentially be caused by globalization? <br/>
            18. What must we do in order to understand the present? <br/>
            19. What points do critics say about globalization? <br/>
            20. Who is a historical force? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener116} value={SS7Essay116}/>

          <span className="days">LESSON 118</span>
          <p>Watch the video below: <b> Democracy, Authoritarian Capitalism, and China </b>by Crash Course World
            History
          </p>
          <Video videoUrl="https://www.youtube.com/embed/k7dTDjRnBqU"/>
          <p>Answer the following questions: <br/>
            1. What century was the peak of democracy? <br/>
            2. What was the first city-state who practiced pure democracy? <br/>
            3. Who made Singapore successful? <br/>
            4. Give a drawback of an authoritarian capitalism.<br/> 5. What is the advantage of the Chinese-style
            meritocracy? <br/>
            6. What are the two new things about the welfare state? <br/>
            7. What did the Chinese do after the 2008 financial crisis? <br/>
            8. What country has the most efficient healthcare in the world? <br/>
            9. What is capitalism? <br/>
            10. What are your opinions about democracy? <br/>
            11. Do you think China's authoritarian capitalism must be followed by other countries? Why? <br/>
            12. Why do you think Singapore is considered as a successful country? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener117} value={SS7Essay117}/>

          <span className="days">LESSON 119</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/63_Worldreligionsandethicalsystems1.pdf")}
            rel="noreferrer"
            target="_blank"> World Religions and Ethical Traditions Part 1 </a></p>
          <p>Watch the video below: <b> Buddha and Ashoka </b>by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/8Nn5uqE3C9w"/>
          <p>Watch the video below: <b> Christianity </b>by Crash Course </p>
          <Video videoUrl="https://www.youtube.com/embed/TG55ErfdaeY"/>
          <p>Answer the following questions: <br/>
            1. Who was the Buddha? <br/>
            2. What is the Noble Eightfold Path? <br/>
            3. According to the Buddha, what happens when someone understand the true nature of suffering? <br/>
            4. Why was the resurrection important to early Christians? <br/>
            5. How did Christian beliefs spread? <br/>
            6. Why is Brahman important to Hindus? <br/>
            7. What is the ultimate goal of Hinduism? <br/>
            8. What concept in monotheistic religions is most like Brahman in Hinduism? <br/>
            9. Which religion is practiced by the most people in North America? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS7Listener118} value={SS7Essay118}/>

          <span className="days">LESSON 120</span>
          <p>Read <a
            href={require("../resources/social-studies/ss-pdfs7th/63_Worldreligionsandethicalsystems2.pdf")}
            rel="noreferrer"
            target="_blank"> World Religions and Ethical Traditions Part 2</a></p>
          <p>Watch the video below: <b> Islam </b> by Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/TpcbfxtdoI8"/>
          <p>Answer the following questions: <br/>
            1. What is the Qur’an? <br/>
            2. What is the hajj? <br/>
            3. Who was Abraham and why was he significant? <br/>
            4. What religions has Judaism influenced? <br/>
            5. Why is Confucius a important figure in China? <br/>
            6. What was Confucius’ golden rule? <br/>
            7. How do you know that Confucius valued family? <br/>
            8. Of the religions you learned about, which is the oldest? <br/>
            9. In what ways are Christianity, Islam and Judaism similar? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener119} value={SS7Essay119}/>

          <span className="days">LESSON 121</span>
          ‎ <p>Watch the video below: <b> 2,000 Years of Chinese History! The Mandate of Heaven and
          Confucius </b> by
          Crash Course</p>
          <Video videoUrl="https://www.youtube.com/embed/ylWORyToTo4"/>     <p>Answer the following questions: <br/>
          1. What evidence does John Green give to illustrate that China was the first modern state? <br/>
          2. What reasons does John Green give to explain the dynastic cycle (rise and fall of different Chinese
          dynasties)? <br/>
          3. What was the Mandate of Heaven? <br/>
          4. How does the Mandate of Heaven reinforce Confucian philosophy? <br/>
          5. Why was the Qin so important to Chinese history? <br/>
          6. Why might the brutality of the Qin have been exaggerated? <br/>
          7. Who was Confucius and what was his philosophy based upon? <br/>
          8. What are ren and li? <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener120} value={SS7Essay120}/>

          <span className="days">LESSON 122</span>
          <p>Watch the video below: <b> The five major world religions - </b> by John Bellaimey TedEd
          </p>
          <Video videoUrl="https://www.youtube.com/embed/m6dCxo7t_aE"/>     <p>Answer the following questions: <br/>
          1. Who could be called the "founder" of Hinduism? <br/>
          2. What is considered the Holiest Book of Islam? <br/>
          3. Who are the trinity of gods in Hinduism? <br/>
          4. Describe what the bar or bat mitzvah is in Judaism. <br/>
          5. The Five Pillars (fasting, declaration of belief, pilgrimage, alms, and daily prayer) are the principle
          religious duties in what religion? <br/>
          6. What do you think is the relationship between religious ceremonies and religious beliefs?
          Choose examples from any two of the five religions in the video. <br/>
          7. Do you notice any similarities between all five religions? Give two examples. <br/>
        </p>
          <textarea className="textArea" onChange={onChangeSS7Listener121} value={SS7Essay121}/>

          <span className="days" style={{ color: "#3a4563" }}><b>GEOGRAPHY</b></span> <br/>
          <p> This next segment will focus on learning about the geography of South America. Note: If you prefer to
            cover
            European geogrpahy, this is covered in 6th Grade geography.
            After watching a short video about a country, you will be asked to answer several questions based on
            what
            you
            learned. Read the questions ahead of time as it will help you take notes while watching the videos.</p>
          <br/><span className="regions margin-para">South America</span><br/>

          <span className="days">LESSON 123</span>
          <p>Watch the video below about<b> Argentina</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/1U0N4SGL46A?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Write your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Instructions below:
          </p>

          <p><span className='smallerFont'> Under "Select Region Quiz" select <a href="https://tapmap.simpledzn.com"
                                                                                 rel="noreferrer" target="_blank">South America. </a>Try to memorize where
            countries are located by clicking on each country. The country's name will appear. When you're ready, click on "Start Quiz." Practice memorizing country location for 20 minutes. You can <a
              href="https://timer.athomemiddleschool.com/"
              rel="noreferrer"
              target="_blank">set a 20 minute timer here</a>. Record your top score below.</span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener122} value={SS7Essay122}/>

          <span className="days">LESSON 124</span>
          <p>Watch the video below about<b> Bolivia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/AJx1RcIO61I?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located.  </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener123} value={SS7Essay123}/>

          <span className="days">LESSON 125</span>
          <p>Watch the video below about<b> Brazil</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/JFfcD-SkqIc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener124} value={SS7Essay124}/>

          <span className="days">LESSON 126</span>
          <p>Watch the video below about<b> Chile</b> by Geography Now. Then answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/8P4Hi99hUJc?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener125} value={SS7Essay125}/>

          <span className="days">LESSON 127</span>
          <p>Watch the video below about<b> Colombia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/rTsPaAIJdnw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener126} value={SS7Essay126}/>

          <span className="days">LESSON 128</span>
          <p>Watch the video below about<b> Ecuador</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/7jzB0YVBUOs?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener127} value={SS7Essay127}/>

          <span className="days">LESSON 129</span>
          <p>Watch the video below about<b> Guyana</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/tr5xeKcHGqw?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener128} value={SS7Essay128}/>

          <span className="days">LESSON 130</span>
          <p>Watch the video below about<b> Paraguay</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/8wbNEJjBa0k?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on where all the countries in South America are located. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener129} value={SS7Essay129}/>

          <span className="days">LESSON 131</span>
          <p>Watch the video below about<b> Peru</b> by Geography Now.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/x0XCXGXGZMs?list=PLR7XO54Pktt-DmLWCKF7Kc908nqX2HBjh"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener130} value={SS7Essay130}/>

          <span className="regions margin-para">Central & Western Asia</span><br/>

          <span className="days">LESSON 132</span>
          <p>Watch the video below about<b> Bahrain</b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/P2gHUcwZbYk?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a> score
            for today. Under "Select Region Quiz" click on "Asia".</p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a href="https://tapmap.simpledzn.com"
                                                                  rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on Asia. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener132} value={SS7Essay132}/>

          <span className="days">LESSON 133</span>
          <p>Watch the video below about<b> Azerbaijan</b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/DqVPVRmRIU8?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on Asia. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener133} value={SS7Essay133}/>

          <span className="days">LESSON 134</span>
          <p>Watch the video below about<b> Armenia</b> by Geography Now. </p>
          <Video videoUrl="https://www.youtube.com/embed/sL4JK_bDo0A?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener134} value={SS7Essay134}/>

          <span className="days">LESSON 135</span>
          <p>Watch the video below about<b> Afghanistan</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/ipVw772hCrM?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener135} value={SS7Essay135}/>

          <span className="days">LESSON 136</span>
          <p>Watch the video below about<b> Georgia</b> by Geography Now. Then answer the questions that follow.
          </p>

          <Video videoUrl="https://www.youtube.com/embed/YWXvDxovfM4?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning behind the colors and/or the design? If the flag is not discussed in the video,
            research
            it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener136} value={SS7Essay136}/>

          <span className="days">LESSON 137</span>
          <p>Watch the video below about<b> Iran</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/2xQM4Zy5zIk?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it?
            What is the meaning behind the colors and/or the design? If the flag is not discussed in the video,
            research
            it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener137} value={SS7Essay137}/>

          <span className="days">LESSON 138</span>
          <p>Watch the video below about<b> Iraq</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/YHQqsx9wsnc?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener138} value={SS7Essay138}/>

          <span className="days">LESSON 139</span>
          <p>Watch the video below about<b> Israel</b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/AWKmazrRIwA?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener139} value={SS7Essay139}/>

          <span className="days">LESSON 140</span>
          <p>Watch the video below about<b> Jordan</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/aWfu0BKOZ5g?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so,
            explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today. Under "Select Region Quiz" click on "Asia".
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener140} value={SS7Essay140}/>

          <span className="days">LESSON 141</span>
          <p>Watch the video below about<b> Kazakhstan</b> by Geography Now. Then answer the questions that follow.
          </p>

          <Video videoUrl="https://www.youtube.com/embed/BElOyEjTujk?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>

          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>

          <textarea className="textArea" onChange={onChangeSS7Listener141} value={SS7Essay141}/>
          <span className="days">LESSON 142</span>
          <p>Watch the video below about<b> Kuwait</b> by Geography Now. Then answer the questions that follow. </p>

          <Video videoUrl="https://www.youtube.com/embed/S_pUIeE4Eko?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener142} value={SS7Essay142}/>

          <span className="days">LESSON 143</span>
          <p>Watch the video below about<b> Kyrgyzstan</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Wo-b_MpguLo?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener143} value={SS7Essay143}/>

          <span className="days">LESSON 144</span>
          <p>Watch the video below about<b> Lebanon</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/vvgLLqpRT6s?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener144} value={SS7Essay144}/>

          <span className="days">LESSON 145</span>
          <p>Watch the video below about<b> Oman</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/mw-gmjzN4Fw?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener145} value={SS7Essay145}/>

          <span className="days">LESSON 146</span>
          <p>Watch the video below about<b> Pakistan</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/CqP2fiqlVok?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener146} value={SS7Essay146}/>

          <span className="days">LESSON 147</span>
          <p>Watch the video below about<b> Qatar</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/oqfW7xn215o?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener147} value={SS7Essay147}/>

          <span className="days">LESSON 148</span>
          <p>Watch the video:<b> Russia</b> by Geography Now. Then answer the questions that follow.</p>

          <Video videoUrl="https://www.youtube.com/embed/K8zAbdYx9SU?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener148} value={SS7Essay148}/><br/>

          <span className="days">LESSON 149</span>
          <p>Watch the video below about<b> Saudi Arabia</b> by Geography Now. Then answer the questions that
            follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/tP68QwVvAZk?list=PLR7XO54Pktt8v1Cur1RbsA6-kaj4utyKB"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener149} value={SS7Essay149}/>


          <span className="days">LESSON 150</span>
          <p>It's time to travel again anywhere in the world. Where will you go this time?</p>
          <p>
            <ul className="list">
              <li>Milford Sound in New Zealand?</li>
              <li>Zhangye Danxia Geopark, China?</li>
              <li>Venice, Italy?</li>
              <li>Banff National Park, Canada?</li>
              <li>Great Ocean Road, Australia?</li>
            </ul>
          </p>
          <p>
            If you have no idea where to you'd like to go, get inspired by this video showing some of the most
            scientifically impossible
            places in the world.</p>
          <Video videoUrl="https://www.youtube.com/embed/S3ksC_8jGuc"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do you
            think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener150} value={SS7Essay150}/>

          <span className="regions margin-para">East and South Asia</span><br/>
          <span className="days">LESSON 151</span>
          <p>Watch the videos below about<b> Cambodia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/wufWxldBWsU?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>quiz score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener151} value={SS7Essay151}/>

          <span className="days">LESSON 152</span>
          <p>Watch the video below about<b> Brunei</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/bNTTFmgbPZY?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener152} value={SS7Essay152}/>

          <span className="days">LESSON 153</span>
          <p>Watch the videos below about<b> Bhutan</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/v3_EezKE0WI?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map. from Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener153} value={SS7Essay153}/>

          <span className="days">LESSON 154</span>
          <p>Watch the videos below about<b> Bangladesh</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/ljebhxk_9ys?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener154} value={SS7Essay154}/>

          <span className="days">LESSON 155</span>
          <p>Watch the video below about<b> China</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/lzAESaVqix0?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener155} value={SS7Essay155}/>

          <span className="days">LESSON 156</span>
          <p>Watch the video below about<b> East Timor</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Yy2OZZJwbyU?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener156} value={SS7Essay156}/>

          <span className="days">LESSON 157</span>
          <p>Watch the video below about<b> India</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/vEy6tcU6eLU?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener157} value={SS7Essay157}/>

          <span className="days">LESSON 158</span>
          <p>Watch the video below about<b> Indonesia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/FsXc3FcWi3g?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener158} value={SS7Essay158}/>

          <span className="days">LESSON 159</span>
          <p>Watch the video below about<b> Japan</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/j3XpfBChLyk?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener159} value={SS7Essay159}/>

          <span className="days">LESSON 160</span>
          <p>Watch the video below about<b> North Korea</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/00QUYoZHnH8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener160} value={SS7Essay160}/>

          <span className="days">LESSON 161</span>
          <p>Watch the videos below about<b> South Korea</b> by Geography Now. Then answer the questions that
            follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/zTK119W8MBA?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener161} value={SS7Essay161}/>

          <span className="days">LESSON 162</span>
          <p>Watch the videos below about<b> Laos</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/dbmZQDySpzY?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener162} value={SS7Essay162}/>

          <span className="days">LESSON 163</span>
          <p>Watch the videos below about<b> Malaysia</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/dV-H1EKmCxA?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener163} value={SS7Essay163}/>

          <span className="days">LESSON 164</span>
          <p>Watch the video below about<b> Maldives</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/KzuWHTJWe-0?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener164} value={SS7Essay164}/>

          <span className="days">LESSON 165</span>
          <p>Watch the video below about<b> Mongolia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/TpdGIPHPBwU?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener165} value={SS7Essay165}/>

          <span className="days">LESSON 166</span>
          <p>Watch the video below about<b> Myanmar</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/xMaaUTWzv8U?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener166} value={SS7Essay166}/>

          <span className="days">LESSON 167</span>
          <p>Watch the video below about<b> Nepal</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/8gTkgfOMkTU?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener167} value={SS7Essay167}/>

          <span className="days">LESSON 168</span>
          <p>Watch the video below about<b> Pakistan</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/CqP2fiqlVok?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener168} value={SS7Essay168}/>

          <span className="days">LESSON 169</span>
          <p>Watch the video below about<b> Philippines</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/LVFvRNRTEd4?list=PLR7XO54Pktt-f5wUuqUFeyKL272PXlhmu"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Asia Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener169} value={SS7Essay169}/>

          <span className="regions margin-para">Oceania</span><br/>
          <span className="days">LESSON 170</span>
          <p>Watch the video below about<b> Australia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/ynHIlx5RgtI?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map. Under "Select Region Quiz" click on "Oceania".
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener170} value={SS7Essay170}/>

          <span className="days">LESSON 171</span>
          <p>Watch the videos below about<b> Solomon</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/8Gl6iy7OEM4?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener171} value={SS7Essay171}/>

          <span className="days">LESSON 172</span>
          <p>Watch the video below about<b> Fiji</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/AFf22L5ZZN4?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener172} value={SS7Essay172}/>

          <span className="days">LESSON 173</span>
          <p>Watch the video below about<b> Kiribati</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/ZtoZlLj8t1c?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener173} value={SS7Essay173}/>

          <span className="days">LESSON 174</span>
          <p>Watch the videos below about<b> Marshall Islands</b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/ZtoZlLj8t1c?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener174} value={SS7Essay174}/>

          <span className="days">LESSON 175</span>
          <p>Watch the video below about<b> Micronesia</b> by Geography Now. Then answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/_gSBvcYOuu4?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <textarea className="textArea" onChange={onChangeSS7Listener175} value={SS7Essay175}/>
          <p> 1.
            Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning behind
            the
            colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>


          <span className="days">LESSON 176</span>
          <p>Watch the video below about<b> Nauru</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/B5flHlEkgrU?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener176} value={SS7Essay176}/>

          <span className="days">LESSON 177</span>
          <p>Watch the videos below about<b> New Zealand</b> by Geography Now. Then answer the questions that
            follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/FtZaaKFi7RM?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener177} value={SS7Essay177}/>

          <span className="days">LESSON 178</span>
          <p>Watch the video below about<b> Palau</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/MOM09fA8miU?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener178} value={SS7Essay178}/>

          <span className="days">LESSON 179</span>
          <p>Watch the video below about<b>Papua New Guinea </b> by Geography Now. Then answer the questions that
            follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/bushHvw__Mo?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today from the Oceania Map.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener179} value={SS7Essay179}/>

          <span className="days">LESSON 180</span>
          <p>Watch the video below about<b> Samoa</b> by Geography Now. Then answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/vEt3jg2XTO4?list=PLR7XO54Pktt9eoCM3yVaglAl_D3r7hEw8"/>
          <p> 1. Describe the country's flag. On a scale of 1 to 10, how much do you like it? What is the meaning
            behind
            the colors and/or the design? If the flag is not discussed in the video, research it online.<br/>
            2. What language do they speak? If they speak more than one, list them all.<br/>
            3. Would you ever want to live there? Why or why not.<br/>
            4. Did you learn anything about their history, economy or government? If so, explain.<br/>
            5. List a few ways that this country is different than where you live.<br/>
            6. Describe what you learned about the land and physical geography. <br/>
            7. List three things about the country you found to be very interesting or surprising.<br/>
            8. Your <a href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>score for
            today.
          </p>
          <p><span className='smallerFont'> After you finish the questions above, set a <a
            href="https://timer.athomemiddleschool.com/"
            rel="noreferrer"
            target="_blank">20 minute timer </a>and then go to <a
            href="https://tapmap.simpledzn.com" rel="noreferrer" target="_blank">Tap Map </a>to memorize and quiz yourself on country  location. </span>
          </p><br/>
          <textarea className="textArea" onChange={onChangeSS7Listener180} value={SS7Essay180}/>

          <span className="days">LESSON 181</span>
          <p>It's time to travel one last time anywhere in the world. Where will you go?
            <ul className="list">
              <li>Acadia National Park, Maine?</li>
              <li>Lake Tahoe, Nevada?</li>
              <li>The Taj Mahal, Agra, India?</li>
              <li>The Amazon Rainforest, Brazil?</li>
              <li>Santorini, Greece?</li>
              <li>Bora Bora, French Polynesia?</li>
              <li>Edinburgh Castle in Scotland?</li>
            </ul>
          </p>
          If you have no idea where to you'd like to go, get inspired by this video showing some of the most beautiful
          places in the USA.<br/>
          <Video videoUrl="https://www.youtube.com/embed/JUfybRQc_1o"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do you
            think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS7Listener181} value={SS7Essay181}/>
        </div>
      </div>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 7th Grade Social Studies! </h3>
    </form>
  )
}
export default SS7Component