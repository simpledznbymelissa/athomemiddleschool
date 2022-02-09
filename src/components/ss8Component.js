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

const SS8Component = ({ data }) => {

  const [SS8Essay1, setSS8Essay1] = useLocalStorageState("SS8Essay1", "")
  const [SS8Essay2, setSS8Essay2] = useLocalStorageState("SS8Essay2", "")
  const [SS8Essay3, setSS8Essay3] = useLocalStorageState("SS8Essay3", "")
  const [SS8Essay4, setSS8Essay4] = useLocalStorageState("SS8Essay4", "")
  const [SS8Essay5, setSS8Essay5] = useLocalStorageState("SS8Essay5", "")
  const [SS8Essay6, setSS8Essay6] = useLocalStorageState("SS8Essay6", "")
  const [SS8Essay7, setSS8Essay7] = useLocalStorageState("SS8Essay7", "")
  const [SS8Essay8, setSS8Essay8] = useLocalStorageState("SS8Essay8", "")
  const [SS8Essay9, setSS8Essay9] = useLocalStorageState("SS8Essay9", "")
  const [SS8Essay10, setSS8Essay10] = useLocalStorageState("SS8Essay10", "")
  const [SS8Essay11, setSS8Essay11] = useLocalStorageState("SS8Essay11", "")
  const [SS8Essay12, setSS8Essay12] = useLocalStorageState("SS8Essay12", "")
  const [SS8Essay13, setSS8Essay13] = useLocalStorageState("SS8Essay13", "")
  const [SS8Essay14, setSS8Essay14] = useLocalStorageState("SS8Essay14", "")
  const [SS8Essay15, setSS8Essay15] = useLocalStorageState("SS8Essay15", "")
  const [SS8Essay16, setSS8Essay16] = useLocalStorageState("SS8Essay16", "")
  const [SS8Essay17, setSS8Essay17] = useLocalStorageState("SS8Essay17", "")
  const [SS8Essay18, setSS8Essay18] = useLocalStorageState("SS8Essay18", "")
  const [SS8Essay19, setSS8Essay19] = useLocalStorageState("SS8Essay19", "")
  const [SS8Essay20, setSS8Essay20] = useLocalStorageState("SS8Essay20", "")
  const [SS8Essay21, setSS8Essay21] = useLocalStorageState("SS8Essay21", "")
  const [SS8Essay22, setSS8Essay22] = useLocalStorageState("SS8Essay22", "")
  const [SS8Essay23, setSS8Essay23] = useLocalStorageState("SS8Essay23", "")
  const [SS8Essay24, setSS8Essay24] = useLocalStorageState("SS8Essay24", "")
  const [SS8Essay25, setSS8Essay25] = useLocalStorageState("SS8Essay25", "")
  const [SS8Essay26, setSS8Essay26] = useLocalStorageState("SS8Essay26", "")
  const [SS8Essay27, setSS8Essay27] = useLocalStorageState("SS8Essay27", "")
  const [SS8Essay28, setSS8Essay28] = useLocalStorageState("SS8Essay28", "")
  const [SS8Essay29, setSS8Essay29] = useLocalStorageState("SS8Essay29", "")
  const [SS8Essay30, setSS8Essay30] = useLocalStorageState("SS8Essay30", "")
  const [SS8Essay31, setSS8Essay31] = useLocalStorageState("SS8Essay31", "")
  const [SS8Essay32, setSS8Essay32] = useLocalStorageState("SS8Essay32", "")
  const [SS8Essay33, setSS8Essay33] = useLocalStorageState("SS8Essay33", "")
  const [SS8Essay34, setSS8Essay34] = useLocalStorageState("SS8Essay34", "")
  const [SS8Essay35, setSS8Essay35] = useLocalStorageState("SS8Essay35", "")
  const [SS8Essay36, setSS8Essay36] = useLocalStorageState("SS8Essay36", "")
  const [SS8Essay37, setSS8Essay37] = useLocalStorageState("SS8Essay37", "")
  const [SS8Essay38, setSS8Essay38] = useLocalStorageState("SS8Essay38", "")
  const [SS8Essay39, setSS8Essay39] = useLocalStorageState("SS8Essay39", "")
  const [SS8Essay40, setSS8Essay40] = useLocalStorageState("SS8Essay40", "")
  const [SS8Essay41, setSS8Essay41] = useLocalStorageState("SS8Essay41", "")
  const [SS8Essay42, setSS8Essay42] = useLocalStorageState("SS8Essay42", "")
  const [SS8Essay43, setSS8Essay43] = useLocalStorageState("SS8Essay43", "")
  const [SS8Essay44, setSS8Essay44] = useLocalStorageState("SS8Essay44", "")
  const [SS8Essay45, setSS8Essay45] = useLocalStorageState("SS8Essay45", "")
  const [SS8Essay46, setSS8Essay46] = useLocalStorageState("SS8Essay46", "")
  const [SS8Essay47, setSS8Essay47] = useLocalStorageState("SS8Essay47", "")
  const [SS8Essay48, setSS8Essay48] = useLocalStorageState("SS8Essay48", "")
  const [SS8Essay49, setSS8Essay49] = useLocalStorageState("SS8Essay49", "")
  const [SS8Essay50, setSS8Essay50] = useLocalStorageState("SS8Essay50", "")
  const [SS8Essay51, setSS8Essay51] = useLocalStorageState("SS8Essay52", "")
  const [SS8Essay52, setSS8Essay52] = useLocalStorageState("SS8Essay53", "")
  const [SS8Essay53, setSS8Essay53] = useLocalStorageState("SS8Essay54", "")
  const [SS8Essay54, setSS8Essay54] = useLocalStorageState("SS8Essay54", "")
  const [SS8Essay55, setSS8Essay55] = useLocalStorageState("SS8Essay5", "")
  const [SS8Essay56, setSS8Essay56] = useLocalStorageState("SS8Essay56", "")
  const [SS8Essay57, setSS8Essay57] = useLocalStorageState("SS8Essay57", "")
  const [SS8Essay58, setSS8Essay58] = useLocalStorageState("SS8Essay58", "")
  const [SS8Essay59, setSS8Essay59] = useLocalStorageState("SS8Essay59", "")
  const [SS8Essay60, setSS8Essay60] = useLocalStorageState("SS8Essay60", "")
  const [SS8Essay61, setSS8Essay61] = useLocalStorageState("SS8Essay61", "")
  const [SS8Essay62, setSS8Essay62] = useLocalStorageState("SS8Essay62", "")
  const [SS8Essay63, setSS8Essay63] = useLocalStorageState("SS8Essay63", "")
  const [SS8Essay64, setSS8Essay64] = useLocalStorageState("SS8Essay64", "")
  const [SS8Essay65, setSS8Essay65] = useLocalStorageState("SS8Essay65", "")
  const [SS8Essay66, setSS8Essay66] = useLocalStorageState("SS8Essay66", "")
  const [SS8Essay67, setSS8Essay67] = useLocalStorageState("SS8Essay67", "")
  const [SS8Essay68, setSS8Essay68] = useLocalStorageState("SS8Essay68", "")
  const [SS8Essay69, setSS8Essay69] = useLocalStorageState("SS8Essay69", "")
  const [SS8Essay70, setSS8Essay70] = useLocalStorageState("SS8Essay70", "")
  const [SS8Essay71, setSS8Essay71] = useLocalStorageState("SS8Essay71", "")
  const [SS8Essay72, setSS8Essay72] = useLocalStorageState("SS8Essay72", "")
  const [SS8Essay73, setSS8Essay73] = useLocalStorageState("SS8Essay73", "")
  const [SS8Essay74, setSS8Essay74] = useLocalStorageState("SS8Essay74", "")
  const [SS8Essay75, setSS8Essay75] = useLocalStorageState("SS8Essay75", "")
  const [SS8Essay76, setSS8Essay76] = useLocalStorageState("SS8Essay76", "")
  const [SS8Essay77, setSS8Essay77] = useLocalStorageState("SS8Essay77", "")
  const [SS8Essay78, setSS8Essay78] = useLocalStorageState("SS8Essay78", "")
  const [SS8Essay79, setSS8Essay79] = useLocalStorageState("SS8Essay79", "")
  const [SS8Essay80, setSS8Essay80] = useLocalStorageState("SS8Essay80", "")
  const [SS8Essay81, setSS8Essay81] = useLocalStorageState("SS8Essay81", "")
  const [SS8Essay82, setSS8Essay82] = useLocalStorageState("SS8Essay82", "")
  const [SS8Essay83, setSS8Essay83] = useLocalStorageState("SS8Essay83", "")
  const [SS8Essay84, setSS8Essay84] = useLocalStorageState("SS8Essay84", "")
  const [SS8Essay85, setSS8Essay85] = useLocalStorageState("SS8Essay85", "")
  const [SS8Essay86, setSS8Essay86] = useLocalStorageState("SS8Essay86", "")
  const [SS8Essay87, setSS8Essay87] = useLocalStorageState("SS8Essay87", "")
  const [SS8Essay88, setSS8Essay88] = useLocalStorageState("SS8Essay88", "")
  const [SS8Essay89, setSS8Essay89] = useLocalStorageState("SS8Essay89", "")
  const [SS8Essay90, setSS8Essay90] = useLocalStorageState("SS8Essay90", "")
  const [SS8Essay91, setSS8Essay91] = useLocalStorageState("SS8Essay91", "")
  const [SS8Essay92, setSS8Essay92] = useLocalStorageState("SS8Essay93", "")
  const [SS8Essay93, setSS8Essay93] = useLocalStorageState("SS8Essay94", "")
  const [SS8Essay94, setSS8Essay94] = useLocalStorageState("SS8Essay95", "")
  const [SS8Essay95, setSS8Essay95] = useLocalStorageState("SS8Essay96", "")
  const [SS8Essay96, setSS8Essay96] = useLocalStorageState("SS8Essay97", "")
  const [SS8Essay97, setSS8Essay97] = useLocalStorageState("SS8Essay98", "")
  const [SS8Essay98, setSS8Essay98] = useLocalStorageState("SS8Essay98", "")
  const [SS8Essay99, setSS8Essay99] = useLocalStorageState("SS8Essay99", "")
  const [SS8Essay100, setSS8Essay100] = useLocalStorageState("SS8Essay100", "")
  const [SS8Essay101, setSS8Essay101] = useLocalStorageState("SS8Essay101", "")
  const [SS8Essay102, setSS8Essay102] = useLocalStorageState("SS8Essay102", "")
  const [SS8Essay103, setSS8Essay103] = useLocalStorageState("SS8Essay103", "")
  const [SS8Essay104, setSS8Essay104] = useLocalStorageState("SS8Essay104", "")
  const [SS8Essay105, setSS8Essay105] = useLocalStorageState("SS8Essay105", "")
  const [SS8Essay106, setSS8Essay106] = useLocalStorageState("SS8Essay106", "")
  const [SS8Essay107, setSS8Essay107] = useLocalStorageState("SS8Essay107", "")
  const [SS8Essay108, setSS8Essay108] = useLocalStorageState("SS8Essay108", "")
  const [SS8Essay109, setSS8Essay109] = useLocalStorageState("SS8Essay109", "")
  // const [SS8Essay110, setSS8Essay110] = useLocalStorageState("SS8Essay110", "")
  // const [SS8Essay111, setSS8Essay111] = useLocalStorageState("SS8Essay111", "")
  const [SS8Essay112, setSS8Essay112] = useLocalStorageState("SS8Essay112", "")
  const [SS8Essay113, setSS8Essay113] = useLocalStorageState("SS8Essay113", "")
  const [SS8Essay114, setSS8Essay114] = useLocalStorageState("SS8Essay114", "")
  const [SS8Essay115, setSS8Essay115] = useLocalStorageState("SS8Essay115", "")
  const [SS8Essay116, setSS8Essay116] = useLocalStorageState("SS8Essay116", "")
  const [SS8Essay117, setSS8Essay117] = useLocalStorageState("SS8Essay117", "")
  const [SS8Essay118, setSS8Essay118] = useLocalStorageState("SS8Essay118", "")
  const [SS8Essay119, setSS8Essay119] = useLocalStorageState("SS8Essay119", "")
  const [SS8Essay120, setSS8Essay120] = useLocalStorageState("SS8Essay120", "")
  const [SS8Essay121, setSS8Essay121] = useLocalStorageState("SS8Essay121", "")
  const [SS8Essay122, setSS8Essay122] = useLocalStorageState("SS8Essay122", "")
  const [SS8Essay123, setSS8Essay123] = useLocalStorageState("SS8Essay123", "")
  const [SS8Essay124, setSS8Essay124] = useLocalStorageState("SS8Essay124", "")
  const [SS8Essay125, setSS8Essay125] = useLocalStorageState("SS8Essay125", "")
  const [SS8Essay126, setSS8Essay126] = useLocalStorageState("SS8Essay126", "")
  const [SS8Essay127, setSS8Essay127] = useLocalStorageState("SS8Essay127", "")
  const [SS8Essay128, setSS8Essay128] = useLocalStorageState("SS8Essay128", "")
  const [SS8Essay129, setSS8Essay129] = useLocalStorageState("SS8Essay129", "")
  const [SS8Essay130, setSS8Essay130] = useLocalStorageState("SS8Essay130", "")
  const [SS8Essay131, setSS8Essay131] = useLocalStorageState("SS8Essay131", "")
  const [SS8Essay132, setSS8Essay132] = useLocalStorageState("SS8Essay132", "")
  const [SS8Essay133, setSS8Essay133] = useLocalStorageState("SS8Essay133", "")
  const [SS8Essay134, setSS8Essay134] = useLocalStorageState("SS8Essay134", "")
  const [SS8Essay135, setSS8Essay135] = useLocalStorageState("SS8Essay135", "")
  const [SS8Essay136, setSS8Essay136] = useLocalStorageState("SS8Essay136", "")
  const [SS8Essay137, setSS8Essay137] = useLocalStorageState("SS8Essay137", "")
  const [SS8Essay138, setSS8Essay138] = useLocalStorageState("SS8Essay138", "")
  const [SS8Essay139, setSS8Essay139] = useLocalStorageState("SS8Essay139", "")
  const [SS8Essay140, setSS8Essay140] = useLocalStorageState("SS8Essay140", "")
  const [SS8Essay141, setSS8Essay141] = useLocalStorageState("SS8Essay141", "")
  const [SS8Essay142, setSS8Essay142] = useLocalStorageState("SS8Essay142", "")
  const [SS8Essay143, setSS8Essay143] = useLocalStorageState("SS8Essay143", "")
  const [SS8Essay144, setSS8Essay144] = useLocalStorageState("SS8Essay144", "")
  const [SS8Essay145, setSS8Essay145] = useLocalStorageState("SS8Essay145", "")
  const [SS8Essay146, setSS8Essay146] = useLocalStorageState("SS8Essay146", "")
  const [SS8Essay147, setSS8Essay147] = useLocalStorageState("SS8Essay147", "")
  const [SS8Essay148, setSS8Essay148] = useLocalStorageState("SS8Essay148", "")
  const [SS8Essay149, setSS8Essay149] = useLocalStorageState("SS8Essay149", "")
  const [SS8Essay150, setSS8Essay150] = useLocalStorageState("SS8Essay150", "")
  const [SS8Essay151, setSS8Essay151] = useLocalStorageState("SS8Essay151", "")
  const [SS8Essay152, setSS8Essay152] = useLocalStorageState("SS8Essay152", "")
  const [SS8Essay153, setSS8Essay153] = useLocalStorageState("SS8Essay153", "")
  const [SS8Essay154, setSS8Essay154] = useLocalStorageState("SS8Essay154", "")
  const [SS8Essay155, setSS8Essay155] = useLocalStorageState("SS8Essay155", "")
  const [SS8Essay156, setSS8Essay156] = useLocalStorageState("SS8Essay156", "")
  const [SS8Essay157, setSS8Essay157] = useLocalStorageState("SS8Essay157", "")
  const [SS8Essay158, setSS8Essay158] = useLocalStorageState("SS8Essay158", "")
  const [SS8Essay159, setSS8Essay159] = useLocalStorageState("SS8Essay159", "")
  const [SS8Essay160, setSS8Essay160] = useLocalStorageState("SS8Essay160", "")
  const [SS8Essay161, setSS8Essay161] = useLocalStorageState("SS8Essay161", "")
  const [SS8Essay162, setSS8Essay162] = useLocalStorageState("SS8Essay162", "")
  const [SS8Essay163, setSS8Essay163] = useLocalStorageState("SS8Essay163", "")
  const [SS8Essay164, setSS8Essay164] = useLocalStorageState("SS8Essay164", "")
  const [SS8Essay165, setSS8Essay165] = useLocalStorageState("SS8Essay165", "")
  const [SS8Essay166, setSS8Essay166] = useLocalStorageState("SS8Essay166", "")
  const [SS8Essay167, setSS8Essay167] = useLocalStorageState("SS8Essay167", "")
  const [SS8Essay168, setSS8Essay168] = useLocalStorageState("SS8Essay168", "")
  const [SS8Essay169, setSS8Essay169] = useLocalStorageState("SS8Essay169", "")
  const [SS8Essay170, setSS8Essay170] = useLocalStorageState("SS8Essay170", "")
  const [SS8Essay171, setSS8Essay171] = useLocalStorageState("SS8Essay171", "")
  const [SS8Essay172, setSS8Essay172] = useLocalStorageState("SS8Essay172", "")
  const [SS8Essay173, setSS8Essay173] = useLocalStorageState("SS8Essay173", "")
  const [SS8Essay174, setSS8Essay174] = useLocalStorageState("SS8Essay174", "")
  const [SS8Essay175, setSS8Essay175] = useLocalStorageState("SS8Essay175", "")
  const [SS8Essay176, setSS8Essay176] = useLocalStorageState("SS8Essay176", "")
  const [SS8Essay177, setSS8Essay177] = useLocalStorageState("SS8Essay177", "")
  const [SS8Essay178, setSS8Essay178] = useLocalStorageState("SS8Essay178", "")
  const [SS8Essay179, setSS8Essay179] = useLocalStorageState("SS8Essay179", "")
  const [SS8Essay180, setSS8Essay180] = useLocalStorageState("SS8Essay180", "")

  const onChangeSS8Listener1 = (event) => {
    setSS8Essay1(event.target.value)
  }
  const onChangeSS8Listener2 = (event) => {
    setSS8Essay2(event.target.value)
  }
  const onChangeSS8Listener3 = (event) => {
    setSS8Essay3(event.target.value)
  }
  const onChangeSS8Listener4 = (event) => {
    setSS8Essay4(event.target.value)
  }
  const onChangeSS8Listener5 = (event) => {
    setSS8Essay5(event.target.value)
  }
  const onChangeSS8Listener6 = (event) => {
    setSS8Essay6(event.target.value)
  }
  const onChangeSS8Listener7 = (event) => {
    setSS8Essay7(event.target.value)
  }
  const onChangeSS8Listener8 = (event) => {
    setSS8Essay8(event.target.value)
  }
  const onChangeSS8Listener9 = (event) => {
    setSS8Essay9(event.target.value)
  }
  const onChangeSS8Listener10 = (event) => {
    setSS8Essay10(event.target.value)
  }
  const onChangeSS8Listener11 = (event) => {
    setSS8Essay11(event.target.value)
  }
  const onChangeSS8Listener12 = (event) => {
    setSS8Essay12(event.target.value)
  }
  const onChangeSS8Listener13 = (event) => {
    setSS8Essay13(event.target.value)
  }
  const onChangeSS8Listener14 = (event) => {
    setSS8Essay14(event.target.value)
  }
  const onChangeSS8Listener15 = (event) => {
    setSS8Essay15(event.target.value)
  }
  const onChangeSS8Listener16 = (event) => {
    setSS8Essay16(event.target.value)
  }
  const onChangeSS8Listener17 = (event) => {
    setSS8Essay17(event.target.value)
  }
  const onChangeSS8Listener18 = (event) => {
    setSS8Essay18(event.target.value)
  }
  const onChangeSS8Listener19 = (event) => {
    setSS8Essay19(event.target.value)
  }
  const onChangeSS8Listener20 = (event) => {
    setSS8Essay20(event.target.value)
  }
  const onChangeSS8Listener21 = (event) => {
    setSS8Essay21(event.target.value)
  }
  const onChangeSS8Listener22 = (event) => {
    setSS8Essay22(event.target.value)
  }
  const onChangeSS8Listener23 = (event) => {
    setSS8Essay23(event.target.value)
  }
  const onChangeSS8Listener24 = (event) => {
    setSS8Essay24(event.target.value)
  }
  const onChangeSS8Listener25 = (event) => {
    setSS8Essay25(event.target.value)
  }
  const onChangeSS8Listener26 = (event) => {
    setSS8Essay26(event.target.value)
  }
  const onChangeSS8Listener27 = (event) => {
    setSS8Essay27(event.target.value)
  }
  const onChangeSS8Listener28 = (event) => {
    setSS8Essay28(event.target.value)
  }
  const onChangeSS8Listener29 = (event) => {
    setSS8Essay29(event.target.value)
  }
  const onChangeSS8Listener30 = (event) => {
    setSS8Essay30(event.target.value)
  }
  const onChangeSS8Listener31 = (event) => {
    setSS8Essay31(event.target.value)
  }
  const onChangeSS8Listener32 = (event) => {
    setSS8Essay32(event.target.value)
  }
  const onChangeSS8Listener33 = (event) => {
    setSS8Essay33(event.target.value)
  }
  const onChangeSS8Listener34 = (event) => {
    setSS8Essay34(event.target.value)
  }
  const onChangeSS8Listener35 = (event) => {
    setSS8Essay35(event.target.value)
  }
  const onChangeSS8Listener36 = (event) => {
    setSS8Essay36(event.target.value)
  }
  const onChangeSS8Listener37 = (event) => {
    setSS8Essay37(event.target.value)
  }
  const onChangeSS8Listener38 = (event) => {
    setSS8Essay38(event.target.value)
  }
  const onChangeSS8Listener39 = (event) => {
    setSS8Essay39(event.target.value)
  }
  const onChangeSS8Listener40 = (event) => {
    setSS8Essay40(event.target.value)
  }
  const onChangeSS8Listener41 = (event) => {
    setSS8Essay41(event.target.value)
  }
  const onChangeSS8Listener42 = (event) => {
    setSS8Essay42(event.target.value)
  }
  const onChangeSS8Listener43 = (event) => {
    setSS8Essay43(event.target.value)
  }
  const onChangeSS8Listener44 = (event) => {
    setSS8Essay44(event.target.value)
  }
  const onChangeSS8Listener45 = (event) => {
    setSS8Essay45(event.target.value)
  }
  const onChangeSS8Listener46 = (event) => {
    setSS8Essay46(event.target.value)
  }
  const onChangeSS8Listener47 = (event) => {
    setSS8Essay47(event.target.value)
  }
  const onChangeSS8Listener48 = (event) => {
    setSS8Essay48(event.target.value)
  }
  const onChangeSS8Listener49 = (event) => {
    setSS8Essay49(event.target.value)
  }
  const onChangeSS8Listener50 = (event) => {
    setSS8Essay50(event.target.value)
  }
  const onChangeSS8Listener51 = (event) => {
    setSS8Essay51(event.target.value)
  }
  const onChangeSS8Listener52 = (event) => {
    setSS8Essay52(event.target.value)
  }
  const onChangeSS8Listener53 = (event) => {
    setSS8Essay53(event.target.value)
  }
  const onChangeSS8Listener54 = (event) => {
    setSS8Essay54(event.target.value)
  }
  const onChangeSS8Listener55 = (event) => {
    setSS8Essay55(event.target.value)
  }
  const onChangeSS8Listener56 = (event) => {
    setSS8Essay56(event.target.value)
  }
  const onChangeSS8Listener57 = (event) => {
    setSS8Essay57(event.target.value)
  }
  const onChangeSS8Listener58 = (event) => {
    setSS8Essay58(event.target.value)
  }
  const onChangeSS8Listener59 = (event) => {
    setSS8Essay59(event.target.value)
  }
  const onChangeSS8Listener60 = (event) => {
    setSS8Essay60(event.target.value)
  }
  const onChangeSS8Listener61 = (event) => {
    setSS8Essay61(event.target.value)
  }
  const onChangeSS8Listener62 = (event) => {
    setSS8Essay62(event.target.value)
  }
  const onChangeSS8Listener63 = (event) => {
    setSS8Essay63(event.target.value)
  }
  const onChangeSS8Listener64 = (event) => {
    setSS8Essay64(event.target.value)
  }
  const onChangeSS8Listener65 = (event) => {
    setSS8Essay65(event.target.value)
  }
  const onChangeSS8Listener66 = (event) => {
    setSS8Essay66(event.target.value)
  }
  const onChangeSS8Listener67 = (event) => {
    setSS8Essay67(event.target.value)
  }
  const onChangeSS8Listener68 = (event) => {
    setSS8Essay68(event.target.value)
  }
  const onChangeSS8Listener69 = (event) => {
    setSS8Essay69(event.target.value)
  }
  const onChangeSS8Listener70 = (event) => {
    setSS8Essay70(event.target.value)
  }
  const onChangeSS8Listener71 = (event) => {
    setSS8Essay71(event.target.value)
  }
  const onChangeSS8Listener72 = (event) => {
    setSS8Essay72(event.target.value)
  }
  const onChangeSS8Listener73 = (event) => {
    setSS8Essay73(event.target.value)
  }
  const onChangeSS8Listener74 = (event) => {
    setSS8Essay74(event.target.value)
  }
  const onChangeSS8Listener75 = (event) => {
    setSS8Essay75(event.target.value)
  }
  const onChangeSS8Listener76 = (event) => {
    setSS8Essay76(event.target.value)
  }
  const onChangeSS8Listener77 = (event) => {
    setSS8Essay77(event.target.value)
  }
  const onChangeSS8Listener78 = (event) => {
    setSS8Essay78(event.target.value)
  }
  const onChangeSS8Listener79 = (event) => {
    setSS8Essay79(event.target.value)
  }
  const onChangeSS8Listener80 = (event) => {
    setSS8Essay80(event.target.value)
  }
  const onChangeSS8Listener81 = (event) => {
    setSS8Essay81(event.target.value)
  }
  const onChangeSS8Listener82 = (event) => {
    setSS8Essay82(event.target.value)
  }
  const onChangeSS8Listener83 = (event) => {
    setSS8Essay83(event.target.value)
  }
  const onChangeSS8Listener84 = (event) => {
    setSS8Essay84(event.target.value)
  }
  const onChangeSS8Listener85 = (event) => {
    setSS8Essay85(event.target.value)
  }
  const onChangeSS8Listener86 = (event) => {
    setSS8Essay86(event.target.value)
  }
  const onChangeSS8Listener87 = (event) => {
    setSS8Essay87(event.target.value)
  }
  const onChangeSS8Listener88 = (event) => {
    setSS8Essay88(event.target.value)
  }
  const onChangeSS8Listener89 = (event) => {
    setSS8Essay89(event.target.value)
  }
  const onChangeSS8Listener90 = (event) => {
    setSS8Essay90(event.target.value)
  }
  const onChangeSS8Listener91 = (event) => {
    setSS8Essay91(event.target.value)
  }
  const onChangeSS8Listener92 = (event) => {
    setSS8Essay92(event.target.value)
  }
  const onChangeSS8Listener93 = (event) => {
    setSS8Essay93(event.target.value)
  }
  const onChangeSS8Listener94 = (event) => {
    setSS8Essay94(event.target.value)
  }
  const onChangeSS8Listener95 = (event) => {
    setSS8Essay95(event.target.value)
  }
  const onChangeSS8Listener96 = (event) => {
    setSS8Essay96(event.target.value)
  }
  const onChangeSS8Listener97 = (event) => {
    setSS8Essay97(event.target.value)
  }
  const onChangeSS8Listener98 = (event) => {
    setSS8Essay98(event.target.value)
  }
  const onChangeSS8Listener99 = (event) => {
    setSS8Essay99(event.target.value)
  }
  const onChangeSS8Listener100 = (event) => {
    setSS8Essay100(event.target.value)
  }
  const onChangeSS8Listener101 = (event) => {
    setSS8Essay101(event.target.value)
  }
  const onChangeSS8Listener102 = (event) => {
    setSS8Essay102(event.target.value)
  }
  const onChangeSS8Listener103 = (event) => {
    setSS8Essay103(event.target.value)
  }
  const onChangeSS8Listener104 = (event) => {
    setSS8Essay104(event.target.value)
  }
  const onChangeSS8Listener105 = (event) => {
    setSS8Essay105(event.target.value)
  }
  const onChangeSS8Listener106 = (event) => {
    setSS8Essay106(event.target.value)
  }
  const onChangeSS8Listener107 = (event) => {
    setSS8Essay107(event.target.value)
  }
  const onChangeSS8Listener108 = (event) => {
    setSS8Essay108(event.target.value)
  }
  const onChangeSS8Listener109 = (event) => {
    setSS8Essay109(event.target.value)
  }
  // const onChangeSS8Listener110 = (event) => {
  //   setSS8Essay110(event.target.value)
  // }
  // const onChangeSS8Listener111 = (event) => {
  //   setSS8Essay111(event.target.value)
  // }
  const onChangeSS8Listener112 = (event) => {
    setSS8Essay112(event.target.value)
  }
  const onChangeSS8Listener113 = (event) => {
    setSS8Essay113(event.target.value)
  }
  const onChangeSS8Listener114 = (event) => {
    setSS8Essay114(event.target.value)
  }
  const onChangeSS8Listener115 = (event) => {
    setSS8Essay115(event.target.value)
  }
  const onChangeSS8Listener116 = (event) => {
    setSS8Essay116(event.target.value)
  }
  const onChangeSS8Listener117 = (event) => {
    setSS8Essay117(event.target.value)
  }
  const onChangeSS8Listener118 = (event) => {
    setSS8Essay118(event.target.value)
  }
  const onChangeSS8Listener119 = (event) => {
    setSS8Essay119(event.target.value)
  }
  const onChangeSS8Listener120 = (event) => {
    setSS8Essay120(event.target.value)
  }
  const onChangeSS8Listener121 = (event) => {
    setSS8Essay121(event.target.value)
  }
  const onChangeSS8Listener122 = (event) => {
    setSS8Essay122(event.target.value)
  }
  const onChangeSS8Listener123 = (event) => {
    setSS8Essay123(event.target.value)
  }
  const onChangeSS8Listener124 = (event) => {
    setSS8Essay124(event.target.value)
  }
  const onChangeSS8Listener125 = (event) => {
    setSS8Essay125(event.target.value)
  }
  const onChangeSS8Listener126 = (event) => {
    setSS8Essay126(event.target.value)
  }
  const onChangeSS8Listener127 = (event) => {
    setSS8Essay127(event.target.value)
  }
  const onChangeSS8Listener128 = (event) => {
    setSS8Essay128(event.target.value)
  }
  const onChangeSS8Listener129 = (event) => {
    setSS8Essay129(event.target.value)
  }
  const onChangeSS8Listener130 = (event) => {
    setSS8Essay130(event.target.value)
  }
  const onChangeSS8Listener131 = (event) => {
    setSS8Essay131(event.target.value)
  }
  const onChangeSS8Listener132 = (event) => {
    setSS8Essay132(event.target.value)
  }
  const onChangeSS8Listener133 = (event) => {
    setSS8Essay133(event.target.value)
  }
  const onChangeSS8Listener134 = (event) => {
    setSS8Essay134(event.target.value)
  }
  const onChangeSS8Listener135 = (event) => {
    setSS8Essay135(event.target.value)
  }
  const onChangeSS8Listener136 = (event) => {
    setSS8Essay136(event.target.value)
  }
  const onChangeSS8Listener137 = (event) => {
    setSS8Essay137(event.target.value)
  }
  const onChangeSS8Listener138 = (event) => {
    setSS8Essay138(event.target.value)
  }
  const onChangeSS8Listener139 = (event) => {
    setSS8Essay139(event.target.value)
  }
  const onChangeSS8Listener140 = (event) => {
    setSS8Essay140(event.target.value)
  }
  const onChangeSS8Listener141 = (event) => {
    setSS8Essay141(event.target.value)
  }
  const onChangeSS8Listener142 = (event) => {
    setSS8Essay142(event.target.value)
  }
  const onChangeSS8Listener143 = (event) => {
    setSS8Essay143(event.target.value)
  }
  const onChangeSS8Listener144 = (event) => {
    setSS8Essay144(event.target.value)
  }
  const onChangeSS8Listener145 = (event) => {
    setSS8Essay145(event.target.value)
  }
  const onChangeSS8Listener146 = (event) => {
    setSS8Essay146(event.target.value)
  }
  const onChangeSS8Listener147 = (event) => {
    setSS8Essay147(event.target.value)
  }
  const onChangeSS8Listener148 = (event) => {
    setSS8Essay148(event.target.value)
  }
  const onChangeSS8Listener149 = (event) => {
    setSS8Essay149(event.target.value)
  }
  const onChangeSS8Listener150 = (event) => {
    setSS8Essay150(event.target.value)
  }
  const onChangeSS8Listener151 = (event) => {
    setSS8Essay151(event.target.value)
  }
  const onChangeSS8Listener152 = (event) => {
    setSS8Essay152(event.target.value)
  }
  const onChangeSS8Listener153 = (event) => {
    setSS8Essay153(event.target.value)
  }
  const onChangeSS8Listener154 = (event) => {
    setSS8Essay154(event.target.value)
  }
  const onChangeSS8Listener155 = (event) => {
    setSS8Essay155(event.target.value)
  }
  const onChangeSS8Listener156 = (event) => {
    setSS8Essay156(event.target.value)
  }
  const onChangeSS8Listener157 = (event) => {
    setSS8Essay157(event.target.value)
  }
  const onChangeSS8Listener158 = (event) => {
    setSS8Essay158(event.target.value)
  }
  const onChangeSS8Listener159 = (event) => {
    setSS8Essay159(event.target.value)
  }
  const onChangeSS8Listener160 = (event) => {
    setSS8Essay160(event.target.value)
  }
  const onChangeSS8Listener161 = (event) => {
    setSS8Essay161(event.target.value)
  }
  const onChangeSS8Listener162 = (event) => {
    setSS8Essay162(event.target.value)
  }
  const onChangeSS8Listener163 = (event) => {
    setSS8Essay163(event.target.value)
  }
  const onChangeSS8Listener164 = (event) => {
    setSS8Essay164(event.target.value)
  }
  const onChangeSS8Listener165 = (event) => {
    setSS8Essay165(event.target.value)
  }
  const onChangeSS8Listener166 = (event) => {
    setSS8Essay166(event.target.value)
  }
  const onChangeSS8Listener167 = (event) => {
    setSS8Essay167(event.target.value)
  }
  const onChangeSS8Listener168 = (event) => {
    setSS8Essay168(event.target.value)
  }
  const onChangeSS8Listener169 = (event) => {
    setSS8Essay169(event.target.value)
  }
  const onChangeSS8Listener170 = (event) => {
    setSS8Essay170(event.target.value)
  }
  const onChangeSS8Listener171 = (event) => {
    setSS8Essay171(event.target.value)
  }
  const onChangeSS8Listener172 = (event) => {
    setSS8Essay172(event.target.value)
  }
  const onChangeSS8Listener173 = (event) => {
    setSS8Essay173(event.target.value)
  }
  const onChangeSS8Listener174 = (event) => {
    setSS8Essay174(event.target.value)
  }
  const onChangeSS8Listener175 = (event) => {
    setSS8Essay175(event.target.value)
  }
  const onChangeSS8Listener176 = (event) => {
    setSS8Essay176(event.target.value)
  }
  const onChangeSS8Listener177 = (event) => {
    setSS8Essay177(event.target.value)
  }
  const onChangeSS8Listener178 = (event) => {
    setSS8Essay178(event.target.value)
  }
  const onChangeSS8Listener179 = (event) => {
    setSS8Essay179(event.target.value)
  }
  const onChangeSS8Listener180 = (event) => {
    setSS8Essay180(event.target.value)
  }

  return (
    <form>

      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#6bc8b0",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#6bc8b0",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Social Studies</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/eighth" className='gradeLink'><h2 className="hero">8th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <section className="section-content">
          <h1 className="section-title" style={{ color: "#35516e" }}>US History & Geography</h1>
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">8th Grade Social Studies will cover Exploration to North America, American
            Colonization, The War for Independence, Creation and ratification of the constitution and Bill of Rights,
            Nationalism and Sectionalism, Expanding Markets and Moving West, The American Civil War and reconstruction,
            World War I, Industrialization and the Great Depression, Imperialism and America, World War II, The Cold
            War, The Great Society, Civil rights expansion and social movements, Vietnam, Modern Presidents,
            Citizenship, and US Geography.</p>
          <p>Educational resources used in 8th Grade Social Studies include Crash Course,
            National Geography, the History Channel, Google Maps, TedEd, Geography Now! and open source
            history texts.</p><br/>

          <h1 className="section-title"> Daily Lessons</h1>
          <span className="days">LESSON 1</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1.1PeoplingtheAmericas.pdf")} rel="noreferrer"
                target="_blank">Click here to read <i> Peopling the Americas</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. List the early civilizations of the Americas. Include the approximate dates they
            flourished and their locations. <br/>
            2. How did the development of agriculture affect ancient societies in the Americas? <br/>3. Evaluate the
            achievements of the ancient cultures of the Americas. Which single accomplishment do you find most
            remarkable and why? <br/>
            4. Which ancient American empire do you think was most advanced? Support your choice with details from
            the reading. <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Write your responses here. Your work will automatically be saved to your Local Storage.
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

                    onChange={onChangeSS8Listener1} value={SS8Essay1}/>


          <span className="days">LESSON 2</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1.2NorthAmericanSocietiesAround1492.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read <i> North American Societies Around 1492</i></a></p>
          <p>Watch the video below <b> The Black Legend, Native Americans, and Spaniards by Crash Course </b></p>
          <Video
            videoUrl="https://www.youtube.com/embed/6E9WU9TGrec?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. In your opinion, were the differences between Native American groups greater than their similarities?
            Cite specific examples to support your answer. <br/>
            2. Describe the relationship between the individual and his or her social group in Native American
            society.
            Use details from the text to support your description.<br/>
            3. Why did Native American societies not wish to buy and sell land?<br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener2} value={SS8Essay2}/>

          <span className="days">LESSON 3</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1.3WestAfricanSocietiesAround1492.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read <i> West African Societies Around 1492</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What factors helped the trade system flourish in West Africa? Use
            evidence from the text to support your response. <br/>
            2. What effects did Portuguese trade routes have on West Africa? <br/>3. How did West African slavery
            differ
            from the kind of slavery that developed in the Americas?<br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener3}
                    value={SS8Essay3}/>

          <span className="days">LESSON 4</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1.4EuropeanSocietiesAround1492.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read <i> European Societies Around 1492</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What changes took place in western Europe during the 1400s. How did these changes help lead to the
            European Age of Exploration?<br/>
            2. Which European event of the late 1400s to early 1500s do you think had the most far-reaching impact
            on
            European lives? Explain and support your answer.<br/>
            3. How did advances in technology open the way for world exploration?<br/>
            4. Why do you think other European nations lagged behind Portugal in the race for overseas exploration?
            Support your reasons with details from the reading.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener4} value={SS8Essay4}/>

          <span className="days">LESSON 5</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1.5TransatlanticEncounters.pdf")}
                rel="noreferrer"
                target="_blank">Click here to read <i> Transatlantic Encounters</i></a></p>
          <p>Watch the video below <b> The Natives and the English - by Crash Course </b></p>  <Video
          videoUrl="https://www.youtube.com/embed/TTYOQ05oDOI?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p>Watch the video below <b> Effects of European Colonization: Christopher Columbus and Native
            Americans</b> by
            TedEd</p>  <Video videoUrl="https://www.youtube.com/embed/wsMGICONtb8"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. How did the Americas change during Columbus’s lifetime as a result of his voyages?<br/>
            2. Why did European explorers believe they could simply claim lands for
            their home countries, even though these lands were already populated?<br/>
            3. In the centuries before Columbus’s voyages, where had Europeans gained experience in
            colonization?<br/>
            4. What do you think were three of the most important long-term consequences of Columbus’s encounters in
            the Americas? <br/></p>
          <p>Learn where the 50 states are located by playing this <a href="https://bensguide.gpo.gov/states5/game.html"
                                                                      rel="noreferrer" target="_blank"> map game by
            Ben's Guide.</a> Play for 5-10 minutes.</p>

          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener5} value={SS8Essay5}/>

          <span className="days">LESSON 6</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/2.1Spain'sEmpireintheAmericas.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Spain's Empire in the Americas</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. Do you agree or disagree with this statement: The Spanish conquest of the Aztecs, which led to the
            creation of Mexico, was neither a triumph nor a defeat? Support your opinion.<br/>
            2. State three main ideas about the Spaniards’ exploration and settlement north of Mexico and their
            interaction with Native Americans there.<br/>
            3. What can you infer from the fact that approximately 17,000 Native Americans from all over New Mexico
            took
            part in Popé’s rebellion?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener6} value={SS8Essay6}/>

          <span className="days">LESSON 7</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/2.2AnEnglishSettlementatJamestown.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> An English Settlement at Jamestown</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. During the major developments in the colonization of Virginia, which event do you think was the most
            critical turning point? Why?<br/>
            2. The success of tobacco farming in Virginia had wide-ranging effects. Describe its impact on each of
            these groups: the Jamestown colonists, indentured servants, the Powhatan, the planters.<br/>
            3. The following lines appear in Michael Drayton’s 1606 poem, <i>'To the Virginian Voyage': 'When as the
              luscious smell of that delicious land Above the sea that flows The clear wind throws, Your hearts to
              swell.’</i> What do these lines tell you about the expectations many colonists had before they arrived
            in Virginia?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener7} value={SS8Essay7}/>

          <span className="days">LESSON 8</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/2.3PuritanNewEngland.pdf")} rel="noreferrer"
                target="_blank">Read <i> Puritan New England</i></a></p>
          <p>Watch the video below <b> The Quakers, the Dutch, and the Ladies by Crash Course </b></p>    <Video
          videoUrl="https://www.youtube.com/embed/p47tZLJbdag?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Puritans</li>
              <li> John Winthrop</li>
              <li> Separatist</li>
              <li> Roger Williams</li>
              <li> Anne Hutchinson</li>
              <li> Pequot War</li>
              <li> King Philip’s War</li>
            </ol>
            2. Why do you think Puritan leaders viewed Anne Hutchinson as a threat to their society? Use evidence to
            support your answer.<br/>
            3. What were the immediate effects of King Philip’s War for Native Americans and for the settlers?<br/>
            4. Imagine you have been called upon to negotiate between the New England colonists and Native
            Americans.
            What would you tell each side about the other to help them overcome their misunderstandings?<br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener8} value={SS8Essay8}/>

          <span className="days">LESSON 9</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/2.4SettlementoftheMiddleColonies.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Settlement of the Middle Colonies</i></a></p>
          <p>Watch the video below <b> When is Thanksgiving? Colonizing America by Crash Course </b></p>  <Video
          videoUrl="https://www.youtube.com/embed/o69TvQqyGdg?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What seasonal patterns did the
            colonists in all three regions encounter? How did these patterns affect each colony?<br/>
            2. Explain the interconnections in the colonies between colonists, Native Americans, and the land
            itself. <br/>
            3. What did the colonists learned from Native Americans and how did this new knowledge help the
            colonists to
            survive. <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener9} value={SS8Essay9}/>

          <span className="days">LESSON 10</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/3.1EnglandandItsColonies.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> England and Its Colonies</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> mercantilism</li>
              <li> Parliament</li>
              <li> Navigation Acts</li>
              <li> Dominion of New England</li>
              <li> Sir Edmund Andros</li>
              <li> Glorious Revolution</li>
            </ol>
            2. What steps did England take to solve its economic and political problems with the colonists? Which
            policy
            might colonists have resented most and why?<br/>
            3. How did political events in England affect the lives of the colonists? Use evidence to support your
            response.<br/>
          </p>
          <p>Learn where the 50 states are located by playing this <a href="https://bensguide.gpo.gov/states5/game.html"
                                                                      rel="noreferrer" target="_blank"> map game by
            Ben's Guide.</a> Play for 5-10 minutes.</p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener10} value={SS8Essay10}/>

          <span className="days">LESSON 11</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/3.2TheAgriculturalSouth.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Agricultural South</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining
            its significance.<br/>
            <ol className="ssList">
              <li> cash crop</li>
              <li> triangular trade</li>
              <li> middle passage</li>
              <li> Stono Rebellion</li>
            </ol>
            2. Describe the different social classes of Southern society, ranging from most powerful at the top to
            least
            powerful.<br/>
            3. Why were so many enslaved Africans brought to the Southern colonies?<br/>
            4. Why did fewer cities develop in the South during the 1700s?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener11} value={SS8Essay11}/>

          <span className="days">LESSON 12</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/3.3TheCommercialNorth.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Commercial North</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance. <br/>
            <ol className="ssList">
              <li> Enlightenment</li>
              <li> Benjamin Franklin</li>
              <li> Jonathan Edwards</li>
              <li> Great Awakening</li>
            </ol>
            2. What positive and negative trends that emerged in the Northern colonies during the 1700s do you think
            still affect the United States today? <br/>
            3. How do you think a person who believed in the ideas of the Enlightenment might have assessed the
            Salem
            witchcraft trials? <br/>
            4. In what ways did the Northern colonies differ from the Southern
            colonies in the 1700s?<br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener12} value={SS8Essay12}/>

          <span className="days">LESSON 13</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/3.4TheFrenchandIndianWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The French and Indian War</i></a></p>
          <p>Watch the video below <b> The Seven Years War and the Great Awakening by Crash Course </b></p>
          <Video
            videoUrl="https://www.youtube.com/embed/5vKGU3aEGss?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> New France</li>
              <li> George Washington</li>
              <li> William Pitt</li>
              <li> French and Indian War</li>
              <li> Pontiac</li>
              <li> Proclamation of 1763</li>
              <li> George Grenville</li>
              <li> Sugar Act</li>
            </ol>
            2. How long was the the French and Indian War? Why do you think it lasted so long?<br/>
            3. How did the French and Indian War lead to tension between the colonists and the British
            government?<br/>
            4. If you had been a Native American living in the Northeast during the French and Indian War, would you
            have formed a military alliance with France or with Great Britain?
            Support your choice with reasons.<br/>
            5. What if the outcome of the French and Indian War had been different and France had won? How might
            this
            have affected the 13 colonies?<br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener13} value={SS8Essay13}/>

          <span className="days">LESSON 14</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/4.1TheStirringsofRebellion.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Stirrings of Rebellion</i></a></p>
          <p>Watch the video below <b> Taxes & Smuggling - Prelude to Revolution by Crash Course </b></p>
          <Video
            videoUrl="https://www.youtube.com/embed/Eytc9ZaNWyc?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Stamp Act</li>
              <li> Samuel Adams</li>
              <li> Townshend Acts</li>
              <li> Boston Massacre</li>
              <li> Boston Tea Party</li>
              <li> King George III</li>
              <li> Intolerable Acts</li>
              <li> martial law</li>
            </ol>
            2. Describe the conflicts between Great Britain and the American colonies.<br/>
            3. What opinion might a British soldier have had about the Boston Massacre?<br/>
            4. Explain whether you think the British government acted wisely in its dealings with the colonies
            between
            1765 and 1775. <br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener14} value={SS8Essay14}/>

          <span className="days">LESSON 15</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/4.2IdeasHelpStartaRevolution.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Ideas Help Start a Revolution</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TheDeclarationofIndependence.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Declaration of Independence</i></a></p>
          <p>Watch the video below <b> History of the 4th of July: Crash Course US History Special </b></p>
          <Video videoUrl="https://www.youtube.com/embed/iIoYdC1Gkq8?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Second Continental Congress</li>
              <li> Olive Branch Petition</li>
              <li> Common Sense</li>
              <li> Thomas Jefferson</li>
              <li> Declaration of Independence</li>
              <li> Patriots</li>
              <li> Loyalists</li>
            </ol>
            2. Imagine that King George had accepted the Olive Branch Petition and sought a diplomatic resolution
            with
            the Congress. Do you think colonists would still have pressed for independence? <br/>
            3. Thomas Paine wrote in the introduction to Common Sense: 'The cause of America is in a great measure
            the cause of all mankind. '
            Evaluate the significance of Paine’s statement. <br/>
            4. Write a short essay that describes the Declaration of Independence and addresses the following
            questions: <br/>
            Who wrote it, why was it written, who was meant to read it? Describe each of the three main ideas of the
            Declaration of Independence.
          </p>
          <p>Learn where the 50 states are located by playing this <a href="https://bensguide.gpo.gov/states5/game.html"
                                                                      rel="noreferrer" target="_blank"> map game by
            Ben's Guide.</a> Play for 5-10 minutes.</p>

          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSS8Listener15} value={SS8Essay15}/>

          <span className="days">LESSON 16</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/4.3StrugglingTowardSaratoga.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Struggling Toward Saratoga</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Valley Forge</li>
              <li> Trenton</li>
              <li> Saratoga</li>
              <li> inflation</li>
              <li> profiteering</li>
            </ol>
            2. List each early battle of the American Revolution, its outcome, and why it was important. <br/>
            3. Imagine that Burgoyne and the British had captured Saratoga in 1777. How might the course of the war
            have
            changed? <br/>
            4. If you were a woman civilian during the beginning of the American Revolution, what problem caused by
            the
            war do you think would affect you the most? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener16} value={SS8Essay16}/>

          <span className="days">LESSON 17</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/4.4WinningtheWar.pdf")} rel="noreferrer"
                target="_blank">Click
            here to read <i> Winning the War</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesWomenandPoliticalPower.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Tracing Themes: Women and Political Power</i></a></p>
          <p>Watch the video below <b> Who Won the American Revolution? by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/3EiSymRrKI4?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Yorktown</li>
              <li> Friedrich von Steuben</li>
              <li> Marquis de Lafayette</li>
              <li> Charles Cornwallis</li>
              <li> Treaty of Paris</li>
              <li> egalitarianism</li>
            </ol>
            2. Do you think the colonists could
            have won independence without
            aid from foreigners? Explain.<br/>
            3. What were the effects of the
            Revolutionary War on the
            American colonists?<br/>
            4. In your opinion, what was the single
            biggest challenge facing the new
            country?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener17} value={SS8Essay17}/>

          <span className="days">LESSON 18</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/5.1ExperimentingwithConfederation.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Experimenting with Confederation</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/GeographySpotlightTheLandOrdinanceof1785.pdf")}
            rel="noreferrer" target="_blank">Read <i> Geography Spotlight: The Land Ordinance of
            1785</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> republic</li>
              <li> Articles of Confederation</li>
              <li> Land Ordinance of 1785</li>
            </ol>
            2. Why did the new states prefer a republic rather than a democracy for their government? <br/>
            3. Why did the states fear a strong central government? <br/>
            4. In what ways was the confederation too weak to handle the nation’s problems?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener18} value={SS8Essay18}/>

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
          If you have no idea where to you'd like to go, get inspired by <a href="
             https://www.lifehack.org/articles/lifestyle/17-stunning-places-visit-with-google-maps.html"
                                                                            target="_blank"> this site about
          stunning
          places </a> or this video below showing some of the most
          beautiful places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/vwZBiG1_IWs"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener19} value={SS8Essay19}/>

          <span className="days">LESSON 20</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/5.2DraftingtheConstitution.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Drafting the Constitution</i></a></p>
          <p>Watch the video below <b> The Constitution, the Articles, and Federalism by Crash Course </b></p>
          <br/><Video
          videoUrl="https://www.youtube.com/embed/bO7FQsCcbD8?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Shays’s Rebellion</li>
              <li> James Madison</li>
              <li> checks and balances</li>
              <li> electoral college</li>
            </ol>
            2. What issues and events led to the Constitutional Convention?<br/>
            3. In what ways did compromise play a critical role in the drafting of the Constitution?<br/>
            4. Why was the slave trade an issue at the Constitutional Convention?<br/>
            5. Briefly explain the separation of powers established by the Constitution <br/>
          </p>
          <p>Learn where the 50 states are located by playing this <a href="https://bensguide.gpo.gov/states5/game.html"
                                                                      rel="noreferrer" target="_blank"> map game by
            Ben's Guide.</a> Play for 5-10 minutes.</p>
          <textarea className="textArea" onChange={onChangeSS8Listener20} value={SS8Essay20}/>

          <span className="days">LESSON 21</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/5.3RatifyingtheConstitution.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Ratifying the ConstitutionThe Living Constitution</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Federalist</li>
              <li> Antifederalist</li>
              <li> Bill of Rights</li>
            </ol>
            2. What were the arguments for and against ratifying the Constitution? <br/>
            3. What was The Federalist and what effect did this publication have on ratification?<br/>
            4. Why did the states ratify the Constitution once a bill of rights was promised?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener21} value={SS8Essay21}/>

          <span className="days">LESSON 22</span>

          <p><a href={require("../resources/social-studies/ss-pdfs8th/TheLivingConstitution.pdf")} rel="noreferrer"
                target="_blank">Read <i>
            The Living Constitution</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesVotingRights.pdf")}
                rel="noreferrer"
                target="_blank">Read <i>
            Tracing Themes: Voting Rights</i></a></p>
          <p>Watch the video below <b> The Making of the American Constitution </b></p>
          <Video videoUrl="https://www.youtube.com/embed/uihNc_tdGbk"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. Why does the legislative branch of the government
            represent the people most directly? What is the
            principal job of this branch?<br/>
            2. Why are there more members of the House of
            Representatives than of the Senate?<br/>
            3. Name four powers Congress has.<br/>
            4. What powers are denied to Congress? to the states?<br/>
            5. What is the main function of the executive branch? <br/>
            6. Who officially elects the president of the United States? Explain. <br/>
            7. How can the president lose his or her job before election time? <br/>
            8. Article 3. The Judiciary - How are Supreme Court justices appointed? <br/>
            9. What kinds of cases go before the Supreme Court? Why is the Court’s decision whether to hear a
            case
            important? <br/>
            10. Article 4. Relations Among States - To extradite is to send a fugitive back to the state in
            which he or she is accused of committing a crime.
            How is this an example of relations among states? <br/>
            11. Article 5. Amending the Constitution - How many states must ratify an amendment for it to become
            part of
            the Constitution? Why do you think it takes that many? <br/>
            12. Article 6. Supremacy of the National Government - How does Article 6 establish the supremacy of the
            Constitution? <br/>
            13. The Amendments - Does the First Amendment allow complete freedom of speech—the right to say anything
            you
            want at any
            time, anywhere? Explain your answer. <br/>
            14. What is the newest amendment? What protection does that amendment give to the American people? <br/>
            15. How does the Constitution reflect the fear of too strong a central government? <br/>
            16. The Bill of Rights guarantees a defendant a speedy, public trial. Do you think it is being observed
            today? Explain. <br/>
            17. Why did the framers make it so difficult to amend the Constitution? Do you agree or disagree with
            their
            philosophy? Explain. <br/>
            18. The Fifteenth, Nineteenth, and Twenty-sixth amendments give voting rights to specific groups. The
            document drafted by the Convention delegates did not originally apply to women or people of color but,
            through amendments and Supreme Court decisions, has evolved to include many such groups. How do you
            think
            the Framers would react to these changes if you could speak with them today?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener22} value={SS8Essay22}/>

          <span className="days">LESSON 23</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/6.1WashingtonHeadstheNewGovernment.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Projects for Citizenship: Applying the Constitution - Washington Heads the New Government</i></a>
          </p>
          <p>Watch the video below <b> Where US Politics Came From by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/r161cLYzuDI?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Alexander Hamilton</li>
              <li> Cabinet</li>
              <li> Judiciary Act of 1789</li>
              <li> excise tax</li>
            </ol>
            2. What were the first steps taken by the Washington administration in building a new government? <br/>
            3. Why did President Washington want both Thomas Jefferson and Alexander Hamilton to be among his
            closest
            advisers? <br/>
            4. Why was the Whiskey Rebellion a significant event in the early days of the new government?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener23} value={SS8Essay23}/>

          <span className="days">LESSON 24</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/6.2ForeignAffairsTroubletheNation.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Foreign Affairs Trouble the Nation</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> neutrality</li>
              <li> Edmond Genêt</li>
              <li> Thomas Pinckney</li>
              <li> Alien and Sedition Acts</li>
            </ol>
            2. What were three major international issues at this time, and how did the United States respond to
            them? <br/>
            3. How did the United States manage to stay out of war during this period? <br/>
            4. How did the expanding nation deal with Native Americans?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener24} value={SS8Essay24}/>

          <span className="days">LESSON 25</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/6.3JeffersonAlterstheNation'sCourse.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Jefferson Alters the Nation's Course</i></a></p>
          <p>Watch the video below <b> Thomas Jefferson & His Democracy by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/_3Ox6vGteek?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Lewis and Clark</li>
              <li> Aaron Burr</li>
              <li> Judiciary Act of 1801</li>
              <li> John Marshall</li>
              <li> Sacajawea</li>
              <li> Louisiana Purchase</li>
              <li> Marbury v. Madison</li>
            </ol>
            2. What were some of the accomplishments of Jefferson’s first administration? <br/>
            3. How did the Louisiana Purchase change the United States?<br/>
            4. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> (locate the 50 states) for 5-10 minutes and write your final score here.<br/>
          </p>

          <textarea className="textArea" onChange={onChangeSS8Listener25} value={SS8Essay25}/>

          <span className="days">LESSON 26</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/6.4TheWarof1812.pdf")} rel="noreferrer"
                target="_blank">Read
            <i> The War of 1812</i></a></p>
          <p>Watch the video below <b> The War of 1812 - by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/qMXqg2PKJZU?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> blockade</li>
              <li> William Henry Harrison</li>
              <li> Treaty of Ghen</li>
              <li> Andrew Jackson</li>
              <li> war hawk</li>
              <li> embargo</li>
            </ol>
            2. What events led to the War of 1812? <br/>
            3. What did the Treaty of Ghent accomplish?<br/>
            4. What if you had been your current age in 1800? What might have been some of the advantages and
            disadvantages of growing up in this period? Describe what you like and dislike about the U.S.
            at that time.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener26} value={SS8Essay26}/>

          <span className="days">LESSON 27</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/7.1RegionalEconomiesCreateDifferences.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Regional Economies Create Differences</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Eli Whitney</li>
              <li> mass production</li>
              <li> Henry Clay</li>
              <li> Erie Canal</li>
            </ol>
            2. What key changes in technology and methods of organizing manufacturing spurred the Industrial
            Revolution?<br/>
            3. How did people in the Northeast, the South, and the West react to the Tariff of 1816?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener27} value={SS8Essay27}/>

          <span className="days">LESSON 28</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/7.2NationalismatCenterStage.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Nationalism at Center Stage</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> John Quincy Adams</li>
              <li> nationalism</li>
              <li> Monroe Doctrine</li>
              <li> Missouri Compromise</li>
            </ol>
            2. Cite two ways in which the Gibbons v. Ogden decision
            set the stage for future Supreme Court rulings. <br/>
            3. Why did conflict arise when Missouri requested
            admission into the Union?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener28} value={SS8Essay28}/>

          <span className="days">LESSON 29</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/7.3TheAgeofJackson.pdf")} rel="noreferrer"
                target="_blank">Read
            <i> The Age of Jackson</i></a></p>
          <p>Watch the video below <b> Age of Jackson by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/beN4qE-e5O8?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Andrew Jackson</li>
              <li> Democratic-Republican Party</li>
              <li> Indian Removal Act</li>
              <li> Trail of Tears</li>
            </ol>
            2. What changes occurred in the voting population and in voting patterns between the presidential
            elections of 1824 and 1828? <br/>
            3. What alternatives did Jackson have in shaping a policy to tackle the problem of Native
            Americans?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener29} value={SS8Essay29}/>

          <span className="days">LESSON 30</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/7.4StatesRightsandtheNationalBank.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> States' Rights and the National Bank</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Daniel Webster</li>
              <li> John C. Calhoun</li>
              <li> Tariff of Abominations</li>
              <li> Martin Van Buren</li>
              <li> panic of 1837</li>
              <li> John Tyler</li>
            </ol>
            2. What measures was Jackson willing to take in response to South Carolina’s threat to secede in
            1832?<br/>
            3. Why did Jackson oppose the Bank of the United States?<br/>
            4. How do you think Jackson might have countered his critics’ accusation that he was acting like a
            king?<br/>
            5. Compare the strategy William Henry Harrison used in the 1840 presidential campaign to strategies
            used in today’s political campaigns. In what ways are they alike? Give examples.<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener30} value={SS8Essay30}/>

          <span className="days">LESSON 31</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/8.1ReligionSparksReform.pdf")}
                rel="noreferrer"
                target="_blank">Read
            <i> Religion Sparks Reform</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/AmericanLiteratureTheLiteratureoftheTranscendentalists.pdf")}
            rel="noreferrer" target="_blank">Read
            <i> American Literature: The Literature of the Transcendentalists</i></a></p>
          <p>Watch the video below <b> 19th Century Reforms by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/t62fUZJvjOs?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Second Great Awakening</li>
              <li> Ralph Waldo Emerson</li>
              <li> transcendentalism</li>
              <li> Henry David Thoreau</li>
              <li> civil disobedience</li>
            </ol>
            2. Why might the idea of utopian communities appeal to the transcendentalists? <br/>
            3. How do you think the 19th-century reform movements in schools, prisons, and asylums might have
            influenced reform movements today?<br/>
            4. What new religious ideas set the stage for the reform movements of the mid-19th century?<br/>
            5. How did Dorothea Dix contribute to reform?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener31} value={SS8Essay31}/>

          <span className="days">LESSON 32</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/8.2SlaveryandAbolition.pdf")} rel="noreferrer"
                target="_blank">Read <i> Slavery and Abolition</i></a></p>
          <p>Watch the video below <b> Slavery - by Crash Course </b></p>
          <br/><Video videoUrl="https://www.youtube.com/embed/Ajn9g5Gsv98?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> abolition</li>
              <li> emancipation</li>
              <li> Frederick Douglass</li>
              <li> David Walker</li>
              <li> antebellum</li>
              <li> gag rule</li>
            </ol>
            2. How did William Lloyd Garrison, Frederick Douglass, and David Walker each propose ending
            slavery? <br/>
            3. What steps did white Southerners take to suppress slave revolts?<br/>
            3. Compare the similarities and differences between the situations of free blacks in the North and
            slaves in
            the South.<br/>
            4. What arguments did Southern proslavery whites employ to defend slavery?<br/>
            5. Which do you think was a more effective strategy for achieving the abolitionists’ goal of eliminating
            slavery—violence or nonviolence? Why? <br/>
            6. How did William Lloyd Garrison, Frederick Douglass, and David Walker each propose ending
            slavery? <br/>
            7. What steps did white Southerners take to suppress slave revolts? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener32} value={SS8Essay32}/>

          <span className="days">LESSON 33</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/8.3WomenandReform.pdf")} rel="noreferrer"
                target="_blank">Read
            <i> Women and Reform</i></a></p>
          <p>Watch the video below <b> Women in the 19th Century by Crash Course </b></p>
          <Video videoUrl="https://www.youtube.com/embed/fM1czS_VYDI?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          texas
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Elizabeth Cady Stanton</li>
              <li> temperance movement</li>
              <li> Seneca Falls Convention</li>
              <li> Sojourner Truth</li>
            </ol>
            2. What was the cult of domesticity? <br/>
            3. What was the purpose of the Seneca Falls Convention? <br/>
            4. The Seneca Falls "Declaration of Sentiments" asserted that "Woman is man’s equal." In what ways would
            that change the status women held at that time?<br/>
            5. In what ways did the reform movements affect the lives of women—both white and African
            American? <br/>
            6. Why do you think that many of the people who fought for abolition also fought for women’s rights?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener33} value={SS8Essay33}/>

          <span className="days">LESSON 34</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/8.4TheChangingWorkplace.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Changing Workplace</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/DailyLife1820-1850WorkingatMid-Century.pdf")}
                rel="noreferrer" target="_blank">Read
            <i> Daily Life 1820-1850: Working at Mid-Century</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> cottage industr</li>
              <li> journeyman</li>
              <li> strike</li>
              <li> National Trades’ Union</li>
            </ol>
            2. Do you think the positive effects of mechanizing the manufacturing process outweighed the negative
            effects? Why or why not?<br/>
            3. If you were working in a factory during the mid-1800s, would you be a striker or a strikebreaker?
            Explain. <br/>
            4. How did the influx of new immigrants from Germany and Ireland affect circumstances in the American
            workplace?<br/>
            5. How did working conditions in the Lowell textile mills present new opportunities and new
            hazards?<br/>
            6. Describe the two waves of U.S. immigration in the mid-1800s. <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener34} value={SS8Essay34}/>

          <span className="days">LESSON 35</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/9.1TheMarketRevolution.pdf")} rel="noreferrer"
                target="_blank">Read
            <i> The Market Revolution</i></a></p>
          <p>Watch the video below <b> The Market Revolution by Crash Course </b></p>
          <br/><Video videoUrl="https://www.youtube.com/embed/RNftCCwAol0?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Samuel F. B. Morse</li>
              <li> market revolution</li>
              <li> capitalism</li>
              <li> entrepreneur</li>
              <li> John Deere</li>
            </ol>
            2. Which innovation do you think was most important between the period of 1825 and 1850, and why?<br/>
            3. Compare economies of the different regions of the United States in the mid-1800s. <br/>
            4. Why were the reaper and the steel plow important?<br/>
            5. During the 1830s and 1840s, transportation and communication linked the country more than ever
            before.
            How did these advances affect ordinary Americans?<br/>
            6. How did the inventions and innovations of the mid-19th century encourage various regions to
            specialize in
            certain industries?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener35} value={SS8Essay35}/>

          <span className="days">LESSON 36</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/9.2ManifestDestiny.pdf")} rel="noreferrer"
                target="_blank">Read <i> Manifest Destiny</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/GeographySpotlightMappingtheOregonTrail.pdf")}
                rel="noreferrer" target="_blank">Read <i> Geography Spotlight: Mapping the Oregon
            Trail</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> manifest destiny</li>
              <li> Treaty of Fort Laramie</li>
              <li> Oregon Trail</li>
              <li> Joseph Smith</li>
              <li> Brigham Young</li>
            </ol>
            2. John L. O’Sullivan, editor of the United States Magazine and Democratic Review, described manifest
            destiny as meaning that American settlers should possess the "whole of the continent" that "Providence" has
            given us for the development of the great experiment of liberty and . . . self- government." Do you think
            the same attitudes exist today? Explain.<br/>
            3. Why was the concept of manifest destiny of particular appeal to Americans in the 1840s? <br/>
            4. What were the factors that drew settlers west during the first half of the 19th century? <br/>
            5. Compare the motivations of travelers on the Oregon, Santa Fe, and Mormon trails. Which do you think was
            the
            most common motive? Explain.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener36} value={SS8Essay36}/>

          <span className="days">LESSON 37</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/9.3ExpansioninTexas.pdf")} rel="noreferrer"
                target="_blank">Read <i> Expansion in Texas</i></a></p>
          <p>Watch the video below <b> War & Expansion by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/tkdF8pOFUfI?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Texas Revolution</li>
              <li> Alamo</li>
              <li> Sam Houston</li>
              <li> annex</li>
            </ol>
            2. Compare and contrast Santa Anna and Austin as leaders. Use details.<br/>
            3. Which group or country gained the most from the entry of Texas into the United States? Who lost the
            most? <br/>
            4. Consider the relationship between Mexican authorities and Anglos settling in Texas. What other
            actions
            might Mexico or the settlers have taken to avoid conflict?<br/>
            5. What made Americans want to settle in Texas?<br/>
            6. What were the major events that led to Texas joining the
            Union? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener37} value={SS8Essay37}/>

          <span className="days">LESSON 38</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/9.4TheWarwithMexico.pdf")} rel="noreferrer"
                target="_blank">Read <i> The War with Mexico</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> James K. Polk</li>
              <li> Zachary Taylor</li>
              <li> Treaty of Guadalupe Hidalgo</li>
              <li> Gadsden Purchase</li>
              <li> forty-niners</li>
              <li> gold rush</li>
            </ol>
            2. What developments caused the United States to go to war with Mexico? <br/>
            3. What effect did the gold rush have on the growth of California?<br/>
            4. How would you evaluate President Polk’s attitude and behavior toward Mexico? <br/>
            5. What were some of the effects of the California gold rush?<br/>
            6. Would you have supported the controversial war with Mexico? Why or why not?<br/>
            7. What were America’s goals and ideals during this period of expansion and economic change?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener38} value={SS8Essay38}/>

          <span className="days">LESSON 39</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/10.1TheDivisivePoiticsofSlavery.pdf")}
                rel="noreferrer" target="_blank">Read <i> The Divisive Politics of Slavery</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Wilmot Proviso</li>
              <li> Compromise of 1850</li>
              <li> Stephen A. Douglas</li>
              <li> Millard Fillmore</li>
              <li> secession</li>
            </ol>
            2. Describe the economic differences between the North and the South in the 1850s. <br/>
            3. What were the major terms of the Compromise of 1850?<br/>
            4. Do you think there are any points at which a different action or leader might have resolved the conflict
            between the North and the South?<br/>
            5. When California applied for statehood in 1850, Mississippi senator Jefferson Davis warned,
            <i> "For the first time, we are about
              permanently to destroy the balance
              of power between the sections."</i>
            Why might Davis have felt this way?<br/>
            6. Do you think the North or the South won more significant concessions in
            the Compromise of 1850?<br/></p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener39} value={SS8Essay39}/>

          <span className="days">LESSON 40</span>
          <p>It's time to travel to another destination somewhere in the world. Where will you like to go this
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
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener40} value={SS8Essay40}/>

          <span className="days">LESSON 41</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/10.2Protest,Resistance,andViolence.pdf")}
                rel="noreferrer" target="_blank">Read <i> Protest Resistance and Violence</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Fugitive Slave Act</li>
              <li> Underground Railroad</li>
              <li> Harriet Tubman</li>
              <li> Harriet Beecher Stowe</li>
              <li> Uncle Tom’s Cabin</li>
              <li> Kansas-Nebraska Act</li>
            </ol>
            2. Explain how Uncle Tom’s Cabin affected the abolitionist cause. Use details from the section to
            support
            your answer.<br/>
            3. Discuss the impacts Harriet Tubman and Harriet Beecher Stowe had on antislavery attitudes in the
            North. <br/>
            4. What were the basic provisions and results of the Kansas- Nebraska Act?<br/>
            5. Why was the Kansas-Nebraska Act so controversial?<br/>6. Explain the concept of popular sovereignty
            and
            describe Northern and Southern reactions to it as a way of making decisions about slavery in the
            territories.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener41} value={SS8Essay41}/>

          <span className="days">LESSON 42</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/10.3TheBirthoftheRepublicanParty.pdf")}
                rel="noreferrer" target="_blank">Read <i> The Birth of the Republican Party</i></a>
          </p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesStatesRights.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Tracing Themes: States' Rights</i></a></p>
          <p>Watch the video below <b> The Election of 1860 & the Road to Disunion by Crash Course </b></p>
          <br/><Video
          videoUrl="https://www.youtube.com/embed/roNmeOOJCDY?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Franklin Pierce</li>
              <li> nativism</li>
              <li> Republican Party</li>
              <li> Horace Greeley</li>
              <li> James Buchanan</li>
            </ol>
            2. Which events led to the growth of the Republican Party in the 1850s.<br/>
            3. How did the attitudes toward slavery held by abolitionists, Free-Soilers, and Know-Nothings
            differ?<br/>
            4. How did the way in which the Republican Party was formed indicate that the party stood a good chance
            at
            success?<br/>
            5. Why might the newly formed Republican Party have chosen John C. Frémont as their first presidential
            candidate in 1856?<br/>
            6. Why did the Republican Party grow as the Whig and Know- Nothing parties declined in the 1850s?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener42} value={SS8Essay42}/>

          <span className="days">LESSON 43</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/10.4SlaveryandSecession.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Slavery and Secession</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TheSupremeCourtDredScottv.Sandford.pdf")}
                rel="noreferrer" target="_blank">Read <i> The Supreme Court: Dred Scott v. Sandford
            (1857)</i></a></p>
          <p>Watch the video below <b> How one piece of legislation divided a nation</b></p>
          <Video videoUrl="https://www.youtube.com/embed/oWww0YIf-JE"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Dred Scott</li>
              <li> Abraham Lincoln</li>
              <li> Harpers Ferry</li>
              <li> Freeport Doctrine</li>
              <li> Jefferson Davis</li>
            </ol>
            2. How did Lincoln and Douglas disagree about slavery? Which of
            their views were facts, and which were opinions?<br/>
            3. If you had been voting in the presidential election of 1860, for whom would you have voted, other than
            Abraham Lincoln? <br/>
            4. In Dred Scott v. Sandford of 1857, the Supreme Court found that: 'A free negro of the African race, whose
            ancestors were brought to this country and sold as slaves, is not a "citizen" within the meaning of the
            Constitution of the United States. ' How did the Supreme Court decision add to the tensions over slavery in
            the 1850s?<br/>
            5. Compare and contrast Abraham Lincoln’s and Stephen A. Douglas’s views about slavery in
            the territories. <br/>
            6. Why was the South so upset by Lincoln’s election? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener43} value={SS8Essay43}/>

          <span className="days">LESSON 44</span>
          <p className="topBottom"><b> 5 Paragraph Essay</b></p>
          <p>In your own words, define three different causes of the Civil War. After providing a discussion of each of
            these causes, describe how they might or might not have interacted with each other. </p>
          <p className="topBottom">Do you think that each cause played an <i>equal </i>role in leading to the war? </p>
          <p>Which, if any, of the causes that you named had the
            biggest impact, and why?</p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click here for an outline </a>that can help you get started.
            In addition to using the reading assignments and videos, you should research this topic online. </p>
          <p className="topBottom"><b> Introduction paragraph: </b></p>
          <ul className="list">
            <li> Write a hook to grab your reader’s attention.</li>
            <li> Have a clear thesis statement. This statement will convey the points or
              arguments you are going to make. It is a road map for your essay and should answer the question, "What
              is this paper about?" The final sentence for this paragraph should smoothly transition to the next
              paragraph.
            </li>
            <b>Paragraph 1</b><br/>
            <li> This paragraph should make your strongest
              point. You should include examples, explanations and support for your claims and ideas. Be sure reference
              where you found your facts.
              This paragraph should smoothly transition to the next paragraph by tying
              in to the next point you make. 3-5 sentences.
            </li>
            <b> Paragraph 2</b><br/>
            <li> Introduce your next point. Again, use examples to support
              your statements and transition to the next paragraph. 3-5 sentences.
            </li>
            <b> Paragraph 3 </b><br/>
            <li> This should be your second strongest point. It should be different from the other
              paragraphs but also use examples and explanations for claims you make. 3-5 sentences.
            </li>
            <b>Conclusion</b> <br/>
            <li> Restate your thesis in a different way, summarizing your essay concisely. End with a thoughtful
              conclusion. 3-5 sentences.
            </li>
          </ul>
          <p className="topBottom">The video below is also helpful in how to write a solid essay.
            <b> Writing Ninjas: How to Write a Five Paragraph Essay.</b></p>
          <Video videoUrl="https://www.youtube.com/embed/5uSJEiNZ1rE"/>

          <textarea className="textArea"
                    placeholder="Write your 5 paragraph essay here.  Be sure to back up your work and/or send it to your parent or teacher."
                    onChange={onChangeSS8Listener44} value={SS8Essay44}/>

          <span className="days">LESSON 45</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/11.1TheCivilWarBegins.pdf")} rel="noreferrer"
                target="_blank">Click here to
            read <i> The Civil War Begins</i></a></p>
          <p>Watch the video below <b> Battles of the Civil War by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/25HHVDOaGeE?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Fort Sumter</li>
              <li> Anaconda plan</li>
              <li> Bull Run</li>
              <li> Stonewall Jackson</li>
              <li> George McClellan</li>
              <li> Ulysses S. Grant</li>
              <li> Shiloh</li>
              <li> Robert E. Lee</li>
              <li> Antietam</li>
            </ol>
            2. What were the military strategies of the North and South at the outset of the Civil War?<br/>
            3. What advantages did the North have over the South?<br/>
            4. What if Virginia had not seceded from the Union in 1861? Speculate on how this might have affected the
            course of the war. <br/>
            5. What do you think were General McClellan’s major tactical errors?<br/>
            6. Do you think Lincoln’s decision to fire McClellan was a good one? Why or why not?<br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener45} value={SS8Essay45}/>

          <span className="days">LESSON 46</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/11.2ThePoliticsofWar.pdf")} rel="noreferrer"
                target="_blank">Click here to
            read <i> The Politics of War</i></a></p>
          <p>Watch the video below <b> The Civil War, Part I by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/rY9zHNOjGrs?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Emancipation Proclamation</li>
              <li> habeas corpus</li>
              <li> Copperhead</li>
              <li> conscription</li>
            </ol>
            2. How did different groups react to the Emancipation
            Proclamation? Give examples.<br/>
            3. Do you think that Lincoln’s measures to deal with disloyalty and dissent represented an abuse of
            power?
            Why or why not? <br/>
            4. In <i>Battle Cry of Freedom </i>Frederick Douglass said, 'To fight against slaveholders, without
            fighting
            against slavery, is but a half-hearted business, and paralyzes the hands engaged in it. ' How do you
            think
            Lincoln would have replied to Douglass?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener46} value={SS8Essay46}/>

          <span className="days">LESSON 47</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/11.3LifeDuringWartime.pdf")} rel="noreferrer"
                target="_blank">Click here to
            read <i> Life During Wartime</i></a></p>
          <p>Watch the video below <b> The Civil War Part 2 by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/GzTrKccmj_I?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Fort Pillow</li>
              <li> income tax</li>
              <li> Clara Barton</li>
              <li> Andersonville</li>
            </ol>
            2. What were the
            economic changes that occurred in the North and South as a result of the Civil War. Explain how these
            changes affected the two regions.<br/>
            3. What effects did the Civil War have on women and African Americans?<br/>
            4. What acts of protest occurred in both the North and South? <br/>
            5. Imagine you were one of the Northern women and doctors who convinced the government to establish the
            Sanitary Commission. What reasons would you have offered to justify this commission?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener47} value={SS8Essay47}/>

          <span className="days">LESSON 48</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/11.4TheNorthTakesCharge.pdf")}
                rel="noreferrer"
                target="_blank">Click here to
            read <i> The North Takes Charge</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Gettysburg</li>
              <li> Vicksburg</li>
              <li> Gettysburg Address</li>
              <li> William Tecumseh Sherman</li>
              <li> Appomattox Court House</li>
            </ol>
            2. During the last years of the Civil War, which event was the turning point?
            Why?<br/>
            3. Do you think that a general’s win- loss record on the battlefield is the best gauge of measuring
            greatness as a military leader? Why or why not? <br/>
            4. Grant and Sherman presented a logical rationale for using the strategy of total war. Do you think the
            end—defeating the Confederacy—justified the means— causing harm to civilians? Explain.<br/>
            5. In what ways did the South’s morale deteriorate? <br/>
            6. What was Grant and Sherman’s rationale for using the strategy of total war?<br/>
            7. Why do you think Lincoln urged generous terms for a Confederate surrender? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener48} value={SS8Essay48}/>

          <span className="days">LESSON 49</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/11.5TheLegacyoftheWar.pdf")} rel="noreferrer"
                target="_blank">Click here to
            read <i> The Legacy of the War</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> National Bank Act</li>
              <li> Thirteenth Amendment</li>
              <li> Red Cross</li>
              <li> John Wilkes Booth</li>
            </ol>
            2. How did the Civil War provide the economic foundation for
            the United States to become an industrial giant?<br/>
            3. Imagine that you are a member of a
            group of Southern leaders who must rebuild the South after the war. What would you recommend that the
            government do to help the South?<br/>
            4. What political and social issues from the Civil War era do you
            think are still issues today?<br/>
            5. What might have happened if the North had allowed the South to
            secede?<br/>
            6. Could the Civil War have been avoided? Explain why or why not.<br/>
            7. Did the eventual result of the war justify its cost? Explain.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener49} value={SS8Essay49}/>

          <span className="days">LESSON 50</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/12.1ThePoliticsofReconstruction.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> The Politics of Reconstruction</i></a></p>
          <p>Watch the video below <b> Reconstruction and 1876 by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/nowsS7pMApI?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Andrew Johnson</li>
              <li> Reconstruction</li>
              <li> Radical Republicans</li>
              <li> Thaddeus Stevens</li>
              <li> black codes</li>
              <li> Fourteenth Amendment</li>
              <li> Impeach</li>
              <li> Fifteenth Amendment</li>
              <li> Wade-Davis Bill</li>
            </ol>
            2. How did the Civil Rights Act of 1866 become law? <br/>
            3. How did Andrew Johnson’s plan to reconstruct the
            Confederate states differ from Lincoln’s?<br/>
            4. Why did the Radicals want to impeach Andrew Johnson? <br/>
            5. Do you think the Radical Republicans were justified in impeaching President Johnson? Why or why
            not?<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener50} value={SS8Essay50}/>

          <span className="days">LESSON 51</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/12.2ReconstructingSociety.pdf")}
                rel="noreferrer"
                target="_blank">Click here to
            read <i> Reconstructing Society</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> scalawag</li>
              <li> carpetbagger</li>
              <li> Hiram Revels</li>
              <li> sharecropping</li>
              <li> tenant farming</li>
            </ol>
            2. How did the Civil War weaken the Southern economy? Give examples.<br/>
            3. Thaddeus Stevens believed that giving land to former slaves was more important than giving them the
            vote.
            Do you agree or disagree? Why?<br/>
            4. What three groups made up the Republican Party in the South during Reconstruction? <br/>
            5. In what ways did emancipated slaves exercise their freedom? <br/>
            6. How did white landowners in the South reassert their economic power in the decade following the Civil
            War?<br/>
            7. Which accomplishment of African Americans during Reconstruction do you consider most
            significant?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener51} value={SS8Essay51}/>

          <span className="days">LESSON 52</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/12.3TheCollapseofReconstruction.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> The Collapse of Reconstruction</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Ku Klux Klan (KKK)</li>
              <li> panic of 1873</li>
              <li> redemption</li>
              <li> Rutherford B. Hayes</li>
              <li> Samuel J. Tilden</li>
              <li> Compromise of 1877</li>
            </ol>
            2. What were the positive and negative effects of Reconstruction?<br/>
            3. During Reconstruction, was the presidency weak or strong?<br/>
            4. Do you think the political deal to settle the election of 1876 was an appropriate solution? Explain
            why
            or why not. <br/>
            5. Do you think the changes in the South during Reconstruction benefited Southerners?<br/>
            6. How do you think Reconstruction could have been made more effective in rebuilding the South and
            ensuring
            the rights of the freed slaves?<br/>
            7. How did Southern whites regain political power during Reconstruction? <br/>
            8. What economic and political developments weakened the Republican Party during Grant’s second
            term? <br/>
            9. What significance did the victory by Rutherford B. Hayes in the 1876 presidential race have for
            Reconstruction? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener52} value={SS8Essay52}/>

          <span className="days">LESSON 53</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/13.1CulturesClashonthePrairie.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Cultures Clash on the Prairie</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/DailyLife1849-1900GoldMining.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> Daily Life 1849-1900: Gold Mining</i></a></p>
          <p>Watch the video below <b> Gold Rush by the History Channel </b></p>  <Video
          videoUrl="https://www.youtube.com/embed/gDkqvqqjMAA"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Great Plains</li>
              <li> Sitting Bull</li>
              <li> George A. Custer</li>
              <li> assimilation</li>
              <li> Dawes Act</li>
              <li> Battle of Wounded Knee</li>
              <li> longhorn</li>
              <li> Chisholm Trail</li>
            </ol>
            2. How effective was the Dawes Act in promoting the assimilation of Native Americans into white
            culture?<br/>
            3. Identify three differences between the culture of the Native Americans and the culture of the white
            settlers on the Great Plains.<br/>
            4. Why did the cattle industry become a big business in the late 1800s?<br/>
            5. How did cowboy culture reflect the ethnic diversity of the United States?<br/>
            6. What economic opportunities drew large numbers of people to the Great Plains beginning in the mid-
            1800s?<br/>
            7. Identify the reasons for the rise and the decline of the cattle industry.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener53} value={SS8Essay53}/>

          <span className="days">LESSON 54</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/13.2SettlingontheGreatPlains.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> Settling on the Great Plains</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Homestead Act</li>
              <li> exoduster</li>
              <li> soddy</li>
              <li> Morrill Act</li>
            </ol>
            2. Review the changes in technology that influenced the life of settlers on the Great Plains in the late
            1800s. Explain how you think settlement of the plains would have been different without these
            inventions.<br/>
            3. How did the railroads take advantage of farmers?<br/>
            4. How did settlers overcome the challenges of living on the Great Plains?<br/>
            5. What measures did the government take to support settlement of the frontier? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener54} value={SS8Essay54}/>

          <span className="days">LESSON 55</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/13.3FarmersandthePopulistMovement.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> Farmers and the Populist Movement</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/AmericanLiteratureLiteratureoftheWest.pdf")}
                rel="noreferrer" target="_blank">Click here to
            read <i> American Literature: Literature of the West</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Oliver Hudson Kelley</li>
              <li> Grange</li>
              <li> Farmers’ Alliances</li>
              <li> Populism</li>
              <li> bimetallism</li>
              <li> William McKinley</li>
            </ol>
            2. What do you think were the most
            significant factors in bringing an end to the Populist Party?<br/>
            3. How did the Grange and the Farmers’ Alliances pave the way for the Populist Party?<br/>
            4. In 1877, Nez Perce Chief Joseph said, 'My people have always been the friends of white men. Why are
            you
            in such a hurry? ' Why do you think white people hurried to settle the West, with so little regard for
            Native Americans? <br/>
            5. What economic problems confronted American farmers in the 1890s? <br/>
            6. According to farmers and other supporters of free silver, how would bimetallism help the economy<br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener55} value={SS8Essay55}/>

          <span className="days">LESSON 56</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/14.1TheExpansionofIndustry.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Expansion of Industry</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/GeographySpotlightIndustryChangestheEnvironment.pdf")}
            rel="noreferrer" target="_blank">Read <i> Geography Spotlight: Industry Changes the
            Environment</i></a></p>
          <p>Watch the video below <b> The Industrial Economy by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/r6tRp-zRUJs?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Edwin L. Drake</li>
              <li> Bessemer process</li>
              <li> Thomas Alva Edison</li>
              <li> Christopher Sholes</li>
              <li> Alexander Graham Bell</li>
            </ol>
            2. Do you think that consumers gained power as industry expanded in the late 19th century? Why or why
            not?<br/>
            3. If the U.S. had been poor in natural resources, how would industrialization have been affected?<br/>
            4. Which invention or development described in this section had the greatest impact on society?<br/>
            5. How did the growth of the steel industry influence the development of other industries?<br/>
            6. How did inventions and developments in the late 19th century change the way people worked?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener56} value={SS8Essay56}/>

          <span className="days">LESSON 57</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/14.2TheAgeofRailroads.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Age of Railroads</i></a></p>
          <p>Watch the video below <b> Westward Expansion by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/Q16OZkgSXfM?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> transcontinental railroad</li>
              <li> George M. Pullman</li>
              <li> Crédit Mobilier</li>
              <li> Munn v. Illinois</li>
              <li> Interstate Commerce Act</li>
            </ol>
            2. Do you think the government and private citizens could have done more to curb the corruption and power of
            the railroads?<br/>
            3. Why did people, particularly farmers, demand regulation of the railroads in the late 19th century? <br/>
            4. Why were attempts at railroad regulation often unsuccessful?<br/>
            5. The federal government gave land and made loans to the railroad companies. Why was the government so
            eager to promote the growth of railroads?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener57} value={SS8Essay57}/>

          <span className="days">LESSON 58</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/14.3BigBusinessandLabor.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Big Business and Labor</i></a></p>
          <p>Watch the video below <b> Why do Americans and Canadians celebrate Labor Day?</b> by Kenneth C. Davis
          </p>

          <Video videoUrl="https://www.youtube.com/embed/YqmPE2HtkyU"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Andrew Carnegie</li>
              <li> Social Darwinism</li>
              <li> John D. Rockefeller</li>
              <li> Sherman Antitrust Act</li>
              <li> Mary Harris Jones</li>
            </ol>
            2. Do you think that the tycoons of the late 19th century are best describe as ruthless robber barons or as
            effective captains of industry?<br/>
            3. Does the life of Andrew Carnegie support or counter the philosophy of Social Darwinism? <br/>
            4. If the government had supported unions instead of management in the late 19th century, how might the
            lives of workers have been different?<br/>
            5. Why were business leaders such as John D. Rockefeller called robber barons? <br/>
            6. Why did the South industrialize more slowly than the North did? <br/>
            7. Why did workers form unions in the late 19th century? <br/>
            8. What factors limited the success of unions? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener58} value={SS8Essay58}/>

          <span className="days">LESSON 59</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/15.1TheNewImmigrants.pdf")} rel="noreferrer"
                target="_blank">Read <i> The New Immigrants</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Ellis Island</li>
              <li> melting pot</li>
              <li> nativism</li>
              <li> Chinese Exclusion Act</li>
              <li> Gentlemen’s Agreement</li>
            </ol>
            2. Which group of immigrants do you
            think faced the greatest challenges
            in the United States? Why?<br/>
            3. What were the effects of the
            massive influx of immigrants to the
            U.S. in the late 1800s?<br/>
            4. What arguments can you make
            against nativism and anti-immigrant
            feeling?<br/>
            5. What trends or events in other countries prompted
            people to move to the United States in the late 19th
            and early 20th centuries?<br/>
            6. What difficulties did many of these new immigrants
            face?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener59} value={SS8Essay59}/>

          <span className="days">LESSON 60</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/15.2TheChallengesofUrbanization.pdf")}
                rel="noreferrer" target="_blank">Read <i> The Challenges of Urbanization</i></a></p>
          <p>Watch the video below <b> Growth, Cities, and Immigration by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/RRhjqqe750A?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> urbanization</li>
              <li> Americanization movement</li>
              <li> tenement</li>
              <li> Social Gospel movement</li>
              <li> settlement house</li>
              <li> Jane Addams</li>
            </ol>
            2. Why did immigrants tend to group
            together in cities?<br/>
            3. Why did cities in the United States grow rapidly in the decades following the Civil War? <br/>
            4. What problems did this rapid growth pose for cities? <br/>
            5. What solutions to urban problems did the settlement-house movement propose? <br/>
            6. What effects did the migration from rural areas to the cities in the late 19th century have on urban
            society?<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener60} value={SS8Essay60}/>

          <span className="days">LESSON 61</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/15.3PoliticsintheGuildedAge.pdf")}
                rel="noreferrer" target="_blank">Read <i> Politics in the Guilded Age</i></a></p>
          <p>Watch the video below <b> Gilded Age Politics by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/Spgdy3HkcSs?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> political machine</li>
              <li> Rutherford B. Hayes</li>
              <li> James A. Garfield</li>
              <li> Pendleton Civil Service Act</li>
              <li> Grover Cleveland</li>
              <li> Benjamin Harrison</li>
            </ol>
            2. Why do you think tariff reform failed? <br/>
            3. How do you think politics in the United States would have been different if the Pendleton Civil
            Service Act had not been passed?<br/>
            4. Why did machine politics become common in big cities in the late 19th century?<br/>
            5. What government problems arose as a result of patronage?<br/>
            6. Summarize the views of Grover Cleveland and Benjamin Harrison on tariffs. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener61} value={SS8Essay61}/>

          <span className="days">LESSON 62</span>
          <p>It's time to travel to another destination somewhere in the world. Where will you go this
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
          If you have no idea where to you'd like to go, get inspired by this video showing some of the most
          dangerous places in the world.<br/>
          <Video videoUrl="https://www.youtube.com/embed/X2cdi0CLrJc"/>
          <p> Next, answer the following questions:<br/>
            1. What place would you visit?<br/>
            2. Locate this place virtually on <a href="https://earth.google.com/web/">Google Earth</a> or <a
              href="https://www.google.com/maps">Google Maps</a> using satellite view.<br/>
            3. Why did you choose this place?<br/>
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do
            you think is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener62} value={SS8Essay62}/>

          <span className="days">LESSON 63</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/16.1ScienceandUrbanLife.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Science and Urban Life</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Louis Sullivan</li>
              <li> Daniel Burnham</li>
              <li> Frederick Law Olmsted</li>
              <li> Orville and Wilbur Wright</li>
              <li> George Eastman</li>
            </ol>
            2. If you had been an urban planner at the turn of the century, what new ideas would you have included
            in
            your plan for the ideal city?<br/>
            3. Which scientific or technological development described in this section had the greatest impact on
            American culture?<br/>
            4. How did bridge building contribute to
            the growth of cities?<br/>
            5. How did new technology promote urban growth
            around the turn of the century?<br/>
            7. In what ways did methods of communication improve
            in the late 19th and early 20th centuries?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener63} value={SS8Essay63}/>

          <span className="days">LESSON 64</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/16.2ExpandingPublicEducation.pdf")}
                rel="noreferrer" target="_blank">Read <i> Expanding Public Education</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Booker T. Washington</li>
              <li> Tuskegee Normal and Industrial Institute</li>
              <li> W.E.B. Du Bois</li>
              <li> Niagara Movement</li>
            </ol>
            2. Which educational development do you think was most important?<br/>
            3. How might the economy and cultureof the United States have been different without the expansion of
            public
            schools?<br/>
            4. Compare and contrast the views of Booker T. Washington and W.E.B. Du Bois on the subject of the
            education of African Americans. <br/>
            5. How did late 19th century public schools change? <br/>
            6. Why did some immigrants oppose sending their children to public schools?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener64} value={SS8Essay64}/>

          <span className="days">LESSON 65</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/16.3SegregationandDiscrimination.pdf")}
                rel="noreferrer" target="_blank">Read <i> Segregation and Discrimination</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/HistoricDecisionsoftheSupremeCourtPlessyv.Ferguson.pdf")}
            rel="noreferrer" target="_blank">Click here to
            read <i> Historic Decisions of the Supreme Court: Plessy v. Ferguson (1896)</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Ida B. Wells</li>
              <li> poll tax</li>
              <li> grandfather clause</li>
              <li> segregation</li>
              <li> Plessy v. Ferguson</li>
              <li> debt peonage</li>
              <li> Jim Crow laws</li>
            </ol>
            2. How did segregation and discrimination affect the lives of African Americans at the turn of the 20th
            century?<br/>
            3. What did some African-American leaders do to fight discrimination?<br/>
            4. How did the challenges and opportunities for Mexicans in theUnited States differ from those for
            African
            Americans?<br/>
            5. In what ways was racial discrimination reinforced by
            the federal government’s actions and policies?<br/>
            6. How did Mexicans help make the Southwest prosperous in the late 19th century?<br/>
            7.. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener65} value={SS8Essay65}/>

          <span className="days">LESSON 66</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/16.4TheDawnofMassCulture.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Dawn of Mass Culture</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Joseph Pulitzer</li>
              <li> William Randolph Hearst</li>
              <li> Ashcan school</li>
              <li> Mark Twain</li>
            </ol>
            2. How did American methods of
            selling goods change at the
            turn of the 20th century?<br/>
            3. Why is mass culture often described
            as a democratic phenomenon?<br/>
            4. What leisure activities flourished at the turn of the 20th century?<br/>
            5. What innovations in retail methods changed the way Americans shopped during this time period?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener66} value={SS8Essay66}/>

          <span className="days">LESSON 67</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/17.1TheOriginsofProgressivism.pdf")}
                rel="noreferrer" target="_blank">Read <i> The Origins of Progressivism</i></a></p>
          <p>Watch the video below <b> The Progressive Era by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/i0Q4zPR4G7M?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> progressive movement</li>
              <li> Florence Kelley</li>
              <li> prohibition</li>
              <li> muckraker</li>
              <li> scientific management</li>
              <li> Seventeenth Amendment</li>
            </ol>
            1. What were the four goals that various progressive reform movements struggled to achieve? <br/>
            2. What kind of state labor laws resulted from progress sives’ lobbying to protect workers? <br/>
            3. How did government change during the Progressive Era? How were these changes important?<br/>
            4. In what ways might Illinois, Wisconsin, and Oregon all be considered trailblazers in progressive
            reform?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener67} value={SS8Essay67}/>

          <span className="days">LESSON 68</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/17.2WomeninPublicLife.pdf")} rel="noreferrer"
                target="_blank">Read <i> Women in Public Life</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> NACW</li>
              <li> suffrage</li>
              <li> Susan B. Anthony</li>
              <li> NAWSA</li>
            </ol>
            2. What women and movements during the Progressive Era helped dispel the stereotype that women were
            submissive and nonpolitical?<br/>
            3. Why do you think some colleges refused to accept women in the late 19th century?<br/>
            4. Imagine you are a woman during the Progressive Era. Explain how you might recruit other
            women to support the following causes: improving education, housing reform, food and drug laws, the right to
            vote.<br/>
            5. Give two examples of national women’s organizations committed to social activism. Briefly describe their
            progressive missions. <br/>
            6. In the late 1890s, what job opportunities were available to uneducated women without industrial
            skills? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener101} value={SS8Essay101}/>

          <span className="days">LESSON 69</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/17.3TeddyRoosevelt'sSquareDeal.pdf")}
                rel="noreferrer" target="_blank">Read <i> Teddy Roosevelt's Square Deal</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/AmericanLiteratureTheMuckrakers.pdf")}
                rel="noreferrer" target="_blank">Read <i> American Literature: The Muckrakers</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Upton Sinclair</li>
              <li> The Jungle</li>
              <li> Square Deal</li>
              <li> NAACP</li>
              <li> conservation</li>
              <li> Pure Food and Drug Act</li>
            </ol>
            2. What scandalous practices did Upton Sinclair expose in his novel The Jungle? How did the American
            public,
            Roosevelt, and Congress respond? <br/>
            3. How did Roosevelt earn his reputation as a trust-buster? Give examples. <br/>
            4. Discuss two problems that Roosevelt successfully addressed during his presidency.<br/>
            5. In what ways do you think the progressive belief in using experts played a role in shaping
            Roosevelt’s
            reforms?<br/>
            6. Why did W.E.B. Du Bois oppose Booker T. Washington’s views on racial discrimination?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener131} value={SS8Essay131}/>

          <span className="days">LESSON 70</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/17.4ProgressivismUnderTaft.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Progressivism Under Taft</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Gifford Pinchot</li>
              <li> William Howard Taft</li>
              <li> Payne-Aldrich Tariff</li>
              <li> Bull Moose Party</li>
              <li> Woodrow Wilson</li>
            </ol>
            2. As a progressive, how did Taft compare with Roosevelt? <br/>
            3. Why did the Republican Party split during Taft’s administration?<br/>
            4. What if Roosevelt had won another term in office in 1912? Speculate on how this might have affected
            the
            future of progressive reforms.<br/>
            5. What were the causes Taft supported that made people question his leadership?<br/>
            6. What if Roosevelt had won another term in office in 1912? Speculate on how this might have affected
            the
            future of progressive reforms.<br/>
            7. Both Roosevelt and Taft resorted to mudslinging during the 1912 presidential campaign. Do you approve
            or
            disapprove of negative campaign tactics? <br/></p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener68} value={SS8Essay68}/>

          <span className="days">LESSON 71</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/17.5Wilson'sNewFreedom.pdf")} rel="noreferrer"
                target="_blank">Read <i> Wilson's New Freedom</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Carrie Chapman Catt</li>
              <li> Clayton Antitrust Act</li>
              <li> Federal Trade Commission (FTC)</li>
              <li> Federal Reserve System</li>
              <li> Nineteenth Amendment</li>
            </ol>
            2. Wilson said, 'Without the watchful… resolute interference of the government, there can be no fair
            play
            between individuals and the trusts. ' How does this statement reflect Wilson’s approach to reform?<br/>
            3. Why do you think Wilson failed to push for equality for African Americans, despite his progressive
            reforms?<br/>
            4. Which event do you think best demonstrates progressive reform?<br/>
            5. How did the Clayton Antitrust Act benefit labor? <br/>
            6. Cite two examples of social welfare legislation that Wilson opposed during his presidency and the
            arguments he used to defend his position.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener69} value={SS8Essay69}/>

          <span className="days">LESSON 72</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/18.1ImperialismandAmerica.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Imperialism and America</i></a></p>
          <p>Watch the video below <b> American Imperialism by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/QfsfoFqsFk4?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Queen Liliuokalani</li>
              <li> imperialism</li>
              <li> Alfred T. Mahan</li>
              <li> William Seward</li>
              <li> Pearl Harbor</li>
              <li> Sanford B. Dole</li>
            </ol>
            2. Manifest destiny greatly influenced American policy during the first half of the 19th century. How do
            you
            think manifest destiny set the stage for American imperialism at the end of the century?<br/> 3. In the
            following passage, how does Indiana Senator Albert J. Beveridge explain the need for the U.S. to acquire new
            territories? 'Fate has written our policy for us; the trade of the world must and shall be ours. We will
            establish trading posts throughout the world as distributing points for American products. Great colonies
            governing themselves, flying our flag and trading with us, will grow about our posts of trade.'<br/> 4. In
            your opinion, did Sanford B. Dole and other American planters have the right to stage a revolt in Hawaii in
            1893?<br/> 5. What three factors spurred American imperialism?<br/> 6. How did Queen Liliuokalani’s main
            goal conflict with American imperialists’ goals?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener70} value={SS8Essay70}/>

          <span className="days">LESSON 73</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/18.2TheSpanish-AmericanWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Spanish-American War</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> José Martí</li>
              <li> yellow journalism</li>
              <li> George Dewey</li>
              <li> Rough Riders</li>
              <li> San Juan Hill</li>
              <li> Treaty of Paris</li>
            </ol>
            2. What do you think were the
            unstated editorial policies of yellow
            journalism? <br/>
            3. Why was American opinion about Cuban independence divided? <br/>
            4. Briefly describe the terms of the Treaty of Paris of 1898.<br/>
            5. Many anti-imperialists worried that imperialism might threaten the American democratic system. How
            might
            this happen?<br/>
            6. In 1898 Theodore Roosevelt resigned his post as Assistant Secretary of the Navy to organize the Rough
            Riders. Why do you think Roosevelt was willing to take this risk? How do you think this decision
            affected
            his political career?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener71} value={SS8Essay71}/>

          <span className="days">LESSON 74</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/18.3AcquiringNewLands.pdf")} rel="noreferrer"
                target="_blank">Read <i> Acquiring New Lands</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Foraker Act</li>
              <li> Platt Amendment</li>
              <li> protectorate</li>
              <li> Emilio Aguinaldo</li>
              <li> John Hay</li>
              <li> Boxer Rebellion</li>
            </ol>
            2. How did American rule of Puerto Rico harm Puerto Ricans? How did it help Puerto Ricans? Do you think
            the
            benefits outweighed the harmful effects? Why or why not?<br/>
            3. How was U.S. policy toward China different from U.S. policy toward the Philippines? To what can you
            attribute the difference? <br/>
            4. How was U.S. policy toward China different from U.S. policy toward the Philippines? To what can you
            attribute the difference? <br/>
            5. Why was the U.S. interested in events in Puerto Rico? <br/>
            6. What sparked the Boxer Rebellion in 1900, and how was it crushed? <br/>
            7. What three key beliefs about America’s industrial capitalist economy were reflected in the Open Door
            policy?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener72} value={SS8Essay72}/>

          <span className="days">LESSON 75</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/18.4AmericaasaWorldPower.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> America as a World Power</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/GeographySpotlightThePanamaCanal-AFunnelforTrade.pdf")}
            rel="noreferrer" target="_blank">Read <i> Geography Spotlight: The Panama Canal - A Funnel
            for
            Trade</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Panama Canal</li>
              <li> Roosevelt Corollary</li>
              <li> dollar diplomacy</li>
              <li> Emiliano Zapata</li>
              <li> John J. Pershing</li>
              <li> Francisco "Pancho" Villa</li>
            </ol>
            2. What conflict triggered the war between Russia and Japan?<br/>
            3. Woodrow Wilson and Teddy Roosevelt both used American power around the world during their
            presidencies.
            Describe how they did this using examples.<br/>
            4. Why is the construction of the Panama Canal considered one of the world’s greatest engineering
            feats? <br/>
            5. Explain the key difference between Woodrow Wilson’s moral diplomacy and Teddy Roosevelt’s "big stick"
            diplomacy. <br/>
            6. What do you think were the similari- ties and differences between Roosevelt’s Big Stick policy and
            Wilson’s missionary diplomacy? <br/>
            7. In your opinion, should the United States have become involved in the affairs of Colombia, Nicaragua, and
            Mexico during the early 1900s? <br/>
            8. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener73} value={SS8Essay73}/>

          <span className="days">LESSON 76</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/19.1WorldWarIBegins.pdf")} rel="noreferrer"
                target="_blank">Read <i> World War I Begins</i></a></p>
          <p>Watch the video below <b> America in World War I by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/y59wErqg4Xg?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> nationalism</li>
              <li> militarism</li>
              <li> Allies</li>
              <li> Central Powers</li>
              <li> Lusitania</li>
              <li> trench warfare</li>
              <li> Archduke Franz Ferdinand</li>
            </ol>
            2. What were the main reasons for U.S. involvement in the war? <br/>
            3. Where did Germany begin its war offensive, and what happened there?<br/>
            4. Describe some ways in which World War I threatened the lives of civilians on both sides of the
            Atlantic. <br/>
            5. Why were America’s ties with the Allies stronger than its ties with the Central Powers? <br/>
            6. Why do you think Germany escalated its U-boat attacks?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener74} value={SS8Essay74}/>

          <span className="days">LESSON 77</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/19.2AmericanPowerTipstheBalance.pdf")}
                rel="noreferrer" target="_blank">Read <i> American Power Tips the Balance</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Eddie Rickenbacker</li>
              <li> Selective Service Act</li>
              <li> convoy system</li>
              <li> American Expeditionary Force</li>
              <li> conscientious objector</li>
              <li> armistice</li>
            </ol>
            2. How did the United States mobilize a strong military during World War I?<br/>
            3. What new weapons made fighting in World War I deadlier than fighting in previous wars? <br/>
            4. Do you think that the war had a positive or a negative effect on American society? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener75} value={SS8Essay75}/>

          <span className="days">LESSON 78</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/19.3TheWaratHome.pdf")} rel="noreferrer"
                target="_blank">Read <i> The War at Home</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/HistoricDecisionsoftheSupremeCourt.pdf")}
                rel="noreferrer" target="_blank">Read <i> Historic Decisions of the Supreme Court:
            Schenck
            v. The United States (1919)</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> War Industries Board</li>
              <li> propaganda</li>
              <li> Espionage and Sedition Acts</li>
              <li> Great Migration</li>
            </ol>
            2. What methods did the U.S. government use to sell the war to the nation? <br/>
            3. What events during the war undermined civil liberties? How did the war affect government power? <br/>
            4. Do you think that the war had a positive or a negative effect on American society? <br/>
            5. How did the war affect government power? <br/>
            6. Why do you think the flu spread so quickly among the troops? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener76} value={SS8Essay76}/>

          <span className="days">LESSON 79</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/19.4WilsonFightsforPeace.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Wilson Fights for Peace</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesAmericainWorldAffairs.pdf")}
                rel="noreferrer" target="_blank">Read <i> Tracing Themes: America in World Affairs</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Henry Cabot Lodge</li>
              <li> Treaty of Versailles</li>
              <li> League of Nations</li>
              <li> Fourteen Points</li>
              <li> reparations</li>
              <li> Georges Clemenceau</li>
            </ol>
            2. What were the major effects of the Treaty of Versailles? <br/>
            3. How did Wilson’s support for the League of Nations stand in the way of Senate support for the Treaty
            of
            Versailles? <br/>
            4. Between 1914 and 1920, Americans debated the role their country should have in world affairs. From
            the
            events of World War I, what might Americans have learned about intervention in the affairs of other
            nations? <br/>
            5. Why didn’t the Treaty of Versailles lay the foundations for a lasting peace?<br/>
            6. Why did so many Americans oppose the Treaty of Versailles? <br/>
            7. Predict Germany’s reaction to the Treaty of Versailles. Give reasons for your predictions.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener77} value={SS8Essay77}/>

          <span className="days">LESSON 80</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/20.1AmericansStrugglewithPostwarIssues.pdf")}
                rel="noreferrer" target="_blank">Read <i> Americans Struggle with Postwar
            Issues</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> isolationism</li>
              <li> communism</li>
              <li> anarchists</li>
              <li> John L. Lewis</li>
              <li> quota system</li>
            </ol>
            2. Explain how the Red Scare, the Sacco and Vanzetti case, and the rise of the Ku Klux Klan reflected
            concerns held by many Americans. Describe the primary goal of the immigration quota system established
            in
            1921. <br/>
            3. Do you think Americans were justified in their fear of radicals and foreigners in the decade
            following
            World War I? <br/>
            4. In the various fights between management and union members, what did each side believe?<br/>
            5. What do you think the Sacco and Vanzetti case shows about America in the 1920s?<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener78} value={SS8Essay78}/>

          <span className="days">LESSON 81</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/20.2TheHardingPresidency.pdf")}
                rel="noreferrer"
                target="_blank"> Read <i> The Harding Presidency </i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Charles Evans Hughes</li>
              <li> Teapot Dome scandal</li>
              <li> Ohio gang</li>
            </ol>
            2. What did Harding want to do to return America to "normalcy"? <br/>
            3. Summarize the Teapot Dome scandal. How do you think the Harding administration viewed the role of
            America
            in world affairs?<br/>
            4. How do you think the postwar feelings in America influenced the election of 1920?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener79} value={SS8Essay79}/>

          <span className="days">LESSON 82</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/20.3TheBusinessofAmerica.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Business of America</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesEconomicOpportunities.pdf")}
                rel="noreferrer" target="_blank">Read <i> Tracing Themes: Economic
            Opportunities</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Calvin Coolidge</li>
              <li> urban sprawl</li>
              <li> installment plan</li>
            </ol>
            2 How did changes in technology in the 1920s influence American life?. <br/>
            3. What evidence suggests that the prosperity of the 1920s was not on a firm foundation? <br/>
            4. Do you agree with President Coolidge’s statement "The man who builds a factory builds a temple—the
            man
            who works there worships there"? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener80} value={SS8Essay80}/>

          <span className="days">LESSON 83</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/21.1ChangingWaysofLife.pdf")} rel="noreferrer"
                target="_blank">Read <i> Changing Ways of Life</i></a></p>
          <p>Watch the video below <b> The Roaring 20's by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/VfOR1XCMf7A?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Prohibition</li>
              <li> speakeasy</li>
              <li> bootlegger</li>
              <li> fundamentalism</li>
            </ol>
            2. How might the overall atmosphere of the 1920s have contributed to the failure of Prohibition? <br/>
            3. Why was heavy funding needed to enforce the Volstead Act?<br/>
            4. Explain the circumstances and outcome of the trial of the biology teacher John Scopes. <br/>
            5. Why do you think organized crime spread so quickly through the cities during the 1920s?<br/>
            6. Do you think the passage of the Volstead Act and the ruling in the Scopes trial represented genuine
            triumphs for traditional values? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener81} value={SS8Essay81}/>

          <span className="days">LESSON 84</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/21.2TheTwentiesWoman.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Twenties Woman</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/DailyLifeYouthintheRoaringTwenties.pdf")}
                rel="noreferrer" target="_blank">Read <i> Daily Life: Youth in the Roaring
            Twenties</i></a></p>
          <p>Watch the video below <b> The fight for the right to vote in the United States</b></p><Video
          videoUrl="https://www.youtube.com/embed/P9VdyPbbzlI"/>
          <p>Watch the video below <b> Women's Suffrage by Crash Course </b></p>
          <Video videoUrl="https://www.youtube.com/embed/HGEMscZE5dY?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> flapper</li>
              <li> double standard</li>
            </ol>
            2. In what ways did flappers rebel against the earlier styles and attitudes of the Victorian age?<br/>
            3. What key social, economic, and technological changes of the 1920s affected women’s marriages and
            family
            life? <br/>
            4. Which popular culture events of the 1020s events interests you the most and why. <br/>
            5. During the 1920s, a double stan- dard required women to observe stricter codes of behavior than men.
            Do
            you think that some women of this decade made real progress towards equality?<br/>
            6. In 1920, veteran suffragist Anna Howard Shaw stated that equality in the workplace would be harder
            for
            women to achieve than the vote. 'You younger women will have a harder task than ours. You will want
            equality
            in business, and it will be even harder to get than the vote. ' Why do you think Shaw held this
            belief? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener82} value={SS8Essay82}/>

          <span className="days">LESSON 85</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/21.3EducationandPopularCulture.pdf")}
                rel="noreferrer" target="_blank">Read <i> Education and Popular Culture</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Charles A. Lindbergh</li>
              <li> George Gershwin</li>
              <li> Georgia O’Keeffe</li>
              <li> Sinclair Lewis</li>
              <li> F. Scott Fitzgerald</li>
              <li> Ernest Hemingway Edna St. Vincent Millay</li>
            </ol>
            2. How did high schools change in the 1920s? <br/>
            3. Cite examples of the flaws of American society that some famous 1920s authors attacked in their
            writing.<br/>
            4. Do you think the popular heroes of the 1920s were heroes in a real sense? Why or why not?<br/>
            5. In two or three sentences, summarize the effects of education and mass media on society in the
            1920s. <br/>
            6. In what ways do you think the mass media and mass culture helped Americans create a sense of national
            community in the 1920s? <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener83} value={SS8Essay83}/>

          <span className="days">LESSON 86</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/21.4TheHarlemRenaissance.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Harlem Renaissance</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/AmericanLiteratureLiteratureintheJazzAge.pdf")}
            rel="noreferrer" target="_blank">Read <i> American Literature: Literature in the Jazz
            Age</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Zora Neale Hurston</li>
              <li> Langston Hughes</li>
              <li> Paul Robeson</li>
              <li> Louis Armstrong</li>
              <li> Bessie Smith</li>
              <li> Duke Ellington</li>
              <li> Marcus Garvey</li>
            </ol>
            2. What were some of the important themes treated by African- American writers in the Harlem
            Renaissance? < br/>
            3. What do the Great Migration and the growth of the NAACP and UNIA reveal about the African-American
            experience in this period? <br/>
            4. Now that you have read about life in the 1920s, what do you think was the most significant cultural
            development during this time? Describe how this change impacted society and how it evolved.<br/>
            5. Name two outstanding African Americans and describe the impact of these achievements. <br/>
            6. Speculate on why an African- American renaissance flowered during the 1920s.<br/>
            7. How did popular culture in America change as a result of the Great Migration? <br/>
            8. What did the Harlem Renaissance contribute to both black and general American history? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener84} value={SS8Essay84}/>

          <span className="days">LESSON 87</span>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/22.2HardshipandSufferingDuringtheDepression.pdf")}
            rel="noreferrer" target="_blank">Read <i> Hardship and Suffering During the Depression</i></a>
          </p>
          <p>Watch the video below <b> The Great Depression by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/VfOR1XCMf7A?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> shantytown</li>
              <li> bread line</li>
              <li> Dust Bowl</li>
              <li> direct relief</li>
            </ol>
            2. How were shantytowns, soup kitchens, and bread lines a response to the Depression? <br/>
            3. Why did minorities often experience an increase in discrimi- nation during the Great
            Depression? <br/>
            4. What pressures did the American family experience during the Depression? <br/>
            5. Describe how the Great Depression affected farmers and city dwellers. Find the differences and the
            similarities. Which group do you think suffered less? <br/>
            6. How was what happened to men during the Great Depression different from what happened to women?
            children? <br/>
            7. How did Dust Bowl conditions in the Great Plains affect the entire country? In what ways did the
            Great
            Depression affect people’s outlook?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener85} value={SS8Essay85}/>

          <span className="days">LESSON 88</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/22.3HooverStruggleswiththeDepression.pdf")}
                rel="noreferrer" target="_blank">Read <i> Hoover Struggles with the Depression</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Herbert Hoover</li>
              <li> Boulder Dam</li>
              <li> Reconstruction Finance Corporation</li>
              <li> Bonus Army</li>
            </ol>
            2. How did Hoover’s treatment of the Bonus Army affect his standing with the public? <br/>
            3. In what ways did Hoover try to use the government to relieve the Depression? <br/>
            4. What did Hoover say and do in response to the Great Depression? Which response was most
            helpful? <br/>
            5. How did Hoover’s belief in "rugged individualism" shape his policies during the Great
            Depression?<br/>
            6. When Franklin Delano Roosevelt heard about the attack on the Bonus Army, why was he so certain that
            he
            would defeat Hoover? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener86} value={SS8Essay86}/>

          <span className="days">LESSON 89</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/23.1ANewDealFightstheDepression.pdf")}
                rel="noreferrer" target="_blank">Read <i> A New Deal Fights the Depression</i></a></p>
          <p>Watch the video below <b> The New Deal by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/6bMq9Ek6jnA?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> New Deal</li>
              <li> deficit spending</li>
              <li> Huey Long</li>
              <li> Glass-Steagall Act</li>
              <li> Federal Securities Act</li>
              <li> Agricultural Adjustment Act (AAA)</li>
              <li> Civilian Conservation Corps (CCC)</li>
              <li> National Industrial
                Recovery Act (NIRA)
              </li>
            </ol>
            2. How did Franklin Roosevelt change the role of the federal government during his first Hundred
            Days? <br/>
            3. Summarize the reasons why some people opposed the New Deal. <br/>
            4. Of the New Deal programs discussed in this section, which do you consider the most important? <br/>
            5. List the problems that President Roosevelt confronted and how he tried to solve them.<br/>
            6. Do you think Roosevelt was wrong to try to "pack" the Supreme Court with those in favor of the New
            Deal?<br/>
            7. The New Deal has often been referred to as a turning point in American history.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener87} value={SS8Essay87}/>

          <span className="days">LESSON 90</span>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/23.2TheSecondNewDealTakesHold.pdf")}
            rel="noreferrer" target="_blank"> Click
            here to read < i> The Second
              New
              Deal
              Takes
              Hold </i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Eleanor Roosevelt</li>
              <li> Works Progress</li>
              <li> Administration (WPA)</li>
              <li> National Youth Administration</li>
              <li> Wagner Act</li>
              <li> Social Security Act</li>
            </ol>
            2. In what ways did the New Deal programs extend federal aid?<br/>
            3. How did the Wagner Act help working people? Why might the Social Security Act be considered the most
            important
            achievement of the New Deal?<br/>
            4. Groups such as the unemployed, youth, and retirees were helped by Second New Deal programs. Which
            group
            do you
            think benefited the most from the Second New Deal?<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener88} value={SS8Essay88}/>

          <span className="days">LESSON 91</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/23.3TheNewDealAffectsManyGroups.pdf")}
                rel="noreferrer" target="_blank">Read <i> The New Deal Affects Many Groups</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Frances Perkins</li>
              <li> Mary McLeod Bethune</li>
              <li> John Collier</li>
              <li> New Deal coalition</li>
              <li> Congress of Industrial Organizations (CIO)</li>
            </ol>
            2. Summarize the impact the New Deal had on various ethnic groups. <br/>
            3. Why did many urban voters support Roosevelt and the Democratic party? <br/>
            4. In your opinion, did organized labor become too powerful in the 1930s? <br/>
            5. Which group do you think benefited the most from the Second New Deal? <br/>
            6. What steps did women take toward equality during the 1930s? <br/>
            7. Why might the Social Security Act be considered the most important achievement of the New Deal? <br/>
            8. Many WPA posters were created to promote New Deal programs—in this case the Rural Electrification
            Administration. How does this poster’s simplistic design convey the program’s goal? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener89} value={SS8Essay89}/>

          <span className="days">LESSON 92</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/23.4Cultureinthe1930s.pdf")} rel="noreferrer"
                target="_blank">Read <i> Culture in the 1930s</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> The Grapes of Wrath</li>
              <li> Richard Wright</li>
              <li> Grant Wood</li>
              <li> Orson Welles</li>
              <li> Gone With the Wind</li>
            </ol>
            2. What purpose did movies and radio serve during the Great Depression?<br/>
            3. Explain how the New Deal programs supported artists and writers in the 1930s.<br/>
            4. What type of movies do you think might have been produced if the government had supported moviemaking
            as
            part of the New Deal?<br/>
            5. How did the entertainment industry affect the economy? <br/>
            6. In your opinion, what were the main benefits of government support for art and literature in the
            1930s? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener90} value={SS8Essay90}/>

          <span className="days">LESSON 93</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/23.5TheImpactoftheNewDeal.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Impact of the New Deal</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Federal Deposit Insurance Corporation (FDIC)</li>
              <li> Securities and Exchange Commission (SEC)</li>
              <li> Tennessee Valley Authority (TVA)</li>
              <li> National Labor Relations Board (NLRB)</li>
              <li> parity</li>
            </ol>
            2. List five New Deal agencies that are still in place today. <br/>
            3. What benefits did the Tennessee Valley Authority provide? What negative impact did it have? <br/>
            4. Do you think President Roosevelt adequately addressed the needs of the ailing economy? Do you think
            his
            New Deal policies extended far enough to restore public confidence?<br/>
            5. Which long-term benefit from the New Deal do you think has had the most impact?<br/>
            6. Some critics have charged that the New Deal was antibusiness and anti–free enterprise.<br/>
            7. How successful do you think Franklin Roosevelt was as a president? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener91} value={SS8Essay91}/>

          <span className="days">LESSON 94</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/24.1DictatorsThreatenWorldPeace.pdf")}
                rel="noreferrer" target="_blank">Read <i> Dictators Threaten World Peace</i></a></p>
          <p>Watch the video below <b> World War II Part 1 by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/Objoad6rG6U?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Joseph Stalin</li>
              <li> totalitarian</li>
              <li> Benito Mussolini</li>
              <li> fascism</li>
              <li> Adolf Hitler</li>
              <li> Nazism</li>
              <li> Francisco Franco</li>
              <li> Neutrality Acts</li>
            </ol>
            2. Would powerful nations or weak nations be more likely to follow an isolationist policy? <br/>
            3. Why do you think Hitler found widespread support among the German people? <br/>
            4. How did the Treaty of Versailles sow the seeds of instability in Europe?<br/>
            5. What were Stalin’s goals and what steps did he take to achieve them?<br/>
            6. How did Germany’s and Italy’s involvement affect the out- come of the Spanish Civil War?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener92} value={SS8Essay92}/>

          <span className="days">LESSON 95</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/24.2WarinEurope.pdf")} rel="noreferrer"
                target="_blank">Read <i> War in Europe</i></a></p>
          <p>Watch the video below <b> World War II Part 2 - The Homefront by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/HofnGQwPgqs?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Winston Churchill</li>
              <li> appeasement</li>
              <li> nonaggression pact</li>
              <li> blitzkrieg</li>
              <li> Charles de Gaulle</li>
              <li> Neville Chamberlain</li>
            </ol>
            2. Why was the blitzkrieg effective? <br/>
            3. What terms of surrender did Hitler demand of the French after the fall of France in 1940? <br/>
            4. What was General Charles de Gaulle’s reaction? <br/>
            5. To what extent do you think lies and deception played a role in Hitler’s tactics? <br/>
            6. Review Germany’s aggressive actions between 1938 and 1945. At what point do you think Hitler
            concluded that he could take any territory without being stopped? Why? <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener93} value={SS8Essay93}/>

          <span className="days">LESSON 96</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/24.3TheHolocaust.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Holocaust</i></a></p>
          <p>Watch the video below <b> The Holocaust,Genocides, and Mass Murder of WWII by Crash Course </b></p>
          <Video
            videoUrl="https://www.youtube.com/embed/iQeDvnapdlg"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Holocaust</li>
              <li> genocide</li>
              <li> ghetto</li>
              <li> concentration camp</li>
              <li> Kristallnacht</li>
            </ol>
            2. What groups did Nazis deem unfit to belong to the Aryan "master race"? <br/>
            3. How did some Europeans show their resistance to Nazi persecution of the Jews? <br/>
            4. List at least four events that led to the Holocaust. <br/>
            5. Do you think that the United States was justified in not allowing more Jewish refugees to emigrate?
            Why
            or why not? <br/>
            6. Why do you think the Nazi system of systematic genocide was so brutally effective? <br/>
            7. How might concentration camp doctors and guards have justified to themselves the death and suffering
            they
            caused other human beings? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener94} value={SS8Essay94}/>

          <span className="days">LESSON 97</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/24.4AmericaMovesTowardsWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> America Moves Towards War</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Axis powers</li>
              <li> Lend-Lease Act</li>
              <li> Allies</li>
              <li> Hideki Tojo</li>
              <li> Atlantic Charter</li>
            </ol>
            2. What congressional measures paved the way for the U.S. entry into World War II? <br/>
            3. Why did the United States enter World War II?<br/>
            4. Compare the ways in which Hitler, Churchill, and Roosevelt used their powers as gifted speakers to
            accomplish their political aims during World War II. <br/>
            5. Do you think that the United States should have waited to be attacked before declaring war? <br/>
            6. What problem would the Japanese attack on Pearl Harbor solve for Roosevelt? What new problems would
            it
            create? <br/>
            7. Although the U.S. Congress was still unwilling to declare war early in 1941, Churchill told his war
            cabinet, 'We must have patience and trust to the tide which is flowing our way, and to events.' What do
            you
            think Churchill meant by this remark? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener95} value={SS8Essay95}/>

          <br/><span className="days">LESSON 98</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/25.1MobilizingforDefense.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Mobilizing for Defense</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> George Marshall</li>
              <li> Women’s Auxiliary Army Corp (WAAC)</li>
              <li> A. Philip Randolph</li>
              <li> War Production Board (WPB)</li>
              <li> Manhattan Project</li>
              <li> Office of Price Administration (OPA)</li>
            </ol>
            2. How did the U.S. military reflect the diversity of American society during World War II? <br/>
            3. How did the federal government’s actions influence civilian life during World War II?<br/>
            4. What role did the media play in helping the country mobilize? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener96} value={SS8Essay96}/>

          <span className="days">LESSON 99</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/25.2TheWarforEuropeandNorthAfrica.pdf")}
                rel="noreferrer" target="_blank">Read <i> The War for Europe and North Africa</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li>Dwight D. Eisenhower</li>
              <li> D-Day</li>
              <li> Omar Bradley</li>
              <li> George Patton</li>
              <li> Battle of the Bulge</li>
              <li> V-E Day</li>
              <li> Harry S. Truman</li>
            </ol>
            2. How did the Allies win control of the Atlantic Ocean between 1941 and 1943?< br/>
            3. What was the significance of the Battle of Stalingrad?<br/>
            4. How did the Battle of the Bulge signal the beginning of the end of World War II in Europe? <br/>
            5. How did natural geography contribute to Germany’s defeat in World War II?<br/>
            6. Do you agree with the decision made by Roosevelt and Churchill to require unconditional surrender by
            the
            Axis powers? Why or why not?<br/>
            7. When President Roosevelt’s body was brought by train to Washington, Betty Conrad was among the
            servicewomen
            who escorted his casket. 'The body in the casket was not only our leader but the bodies of all the men
            and
            women who had given their lives for freedom. They must not and will not have died in vain.' What did
            Roosevelt’s body symbolize to Betty Conrad?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener97} value={SS8Essay97}/>

          <span className="days">LESSON 100</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/25.3TheWarinthePacific.pdf")} rel="noreferrer"
                target="_blank">Read <i> The War in the Pacific</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesScienceandTechnology.pdf")}
                rel="noreferrer" target="_blank">Read <i> Tracing Themes: Science and
            Technology</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Douglas MacArthur</li>
              <li> Battle of Midway</li>
              <li> J. Robert Oppenheimer</li>
              <li> kamikaze</li>
              <li> Hiroshima</li>
              <li> Nagasaki</li>
              <li> Nuremberg trials</li>
              <li> Chester Nimitz</li>
            </ol>
            2. Briefly describe the island war in the Pacific. <br/>
            3. Why did President Truman decide to use atomic weapons?<br/>
            4. Why was it critical for the Allies to take the Japanese-held islands of Iwo Jima and Okinawa?<br/>
            5. Explain how the United States was able to defeat the Japanese in the Pacific.<br/>
            6. Is it legitimate to hold people accountable for crimes committed during wartime? Why or why not?<br/>
            7. At the trials, many Nazis defended themselves by saying they were only following orders. What does
            this
            rationale tell you about the German military? Why was it important to negate this justification? <br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener98} value={SS8Essay98}/>

          <span className="days">LESSON 101</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/25.4TheHomeFront.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Home Front</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> GI Bill of Rights</li>
              <li> James Farmer</li>
              <li> Congress of Racial Equality (CORE)</li>
              <li> internment</li>
              <li> Japanese American Citizens League (JACL)</li>
            </ol>
            2. How did the U.S. economy change during World War II? <br/>
            3. What events show the persistence of racial tensions?<br/>
            4. Would you support the use of nuclear weapons today, and if so, under what circumstances? <br/>
            5. How did World War II lead to one of the largest population shifts in U.S. history?<br/>
            6. What effect did World War II have on American families?<br/>
            7. How were the experiences of African Americans, Mexican Americans, and Japanese Americans similar
            during
            World War II? How were they different?<br/>
            8. List the advances and problems in the economy and in civil rights during World War II. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener99} value={SS8Essay99}/>

          <span className="days">LESSON 102</span>
          <p className="margin-para">5 Paragraph Essay<br/>
            World World II led to tremendous destruction and suffering for millions of people.<strong> What were the
              three
              worst consequences of World War II? </strong> In addition to using the reading and videos, you should do
            online research to find
            examples and support. <br/><br/><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                               rel="noreferrer"
                                               target="_blank">Click here for a 5 Paragraph Essay outline </a>for help
            getting started. </p>
          <textarea className="textArea" onChange={onChangeSS8Listener100} value={SS8Essay100}/>

          <span className="days">LESSON 103</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/26.1OriginsoftheColdWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Origins of the Cold War</i></a></p>
          <p>Watch the video below <b> The Cold War by Crash Course </b></p>
          <Video videoUrl="https://www.youtube.com/embed/9C72ISMF_D0?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/> 1. For each term or name, write a
            sentence
            explaining its significance.<br/>
            <ol className="ssList">
              <li> United Nations (UN)</li>
              <li> satellite nation</li>
              <li> containment</li>
              <li> iron curtain</li>
              <li> Truman Doctrine</li>
              <li> Marshall Plan</li>
              <li> North Atlantic Treaty Organization (NATO)</li>
              <li> Cold War</li>
            </ol>
            2. What were the goals of U.S. foreign policy in the Cold War? <br/>
            3. Describe the Truman Doctrine and how America reacted to it. <br/>
            4. What was the purpose of the NATO alliance? <br/>
            5. People who had served as aides to President Franklin Roosevelt worried that Truman was not qualified
            to
            handle world leadership. What do you think of Truman as a world leader? <br/>
            6. Which of the two superpowers do you think was more successful in achieving its aims during the period
            1945–1949? <br/>
            7. Describe the U.S. actions and the Soviet actions that contributed most to the Cold War. Explain which
            country was more responsible and why you think so. <br/>
            8. What were Stalin’s motives in supporting Communist governments in Eastern Europe?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener102} value={SS8Essay102}/>

          <span className="days">LESSON 104</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/26.2TheColdWarHeatsUp.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Cold War Heats Up</i></a></p>
          <p>Watch the video below <b> The Cold War in Asia by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/Y2IcmLkuhG0?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Chiang Kai-shek</li>
              <li> Mao Zedong</li>
              <li> Taiwan</li>
              <li> 38th parallel</li>
              <li> Korean War</li>
            </ol>
            2. What issue between General Douglas MacArthur and President Truman eventually cost MacArthur his
            job? <br/>
            3. What global events led to U.S. involvement in Korea? <br/>
            4. What might have happened if MacArthur had convinced Truman to expand the fighting into China? <br/>
            5. How might today’s world be different? <br/>
            6. Many Americans have questioned whether fighting the Korean War was worthwhile. What is your opinion?
            Why? <br/>
            7. At the end of China’s civil war, the United States refused to accept the communist People’s Republic
            of
            China as China’s true government. What were the advantages of such a policy? <br/>
            8. What were the disadvantages? Do you agree with this decision? Why or why not? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener103} value={SS8Essay103}/>

          <span className="days">LESSON 105</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/26.3TheColdWaratHome.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Cold War at Home</i></a></p>
          <p>Watch the video below <b> The Cold War - OverSimplified (Part 1) </b></p><Video
          videoUrl="https://www.youtube.com/embed/I79TpDe3t2g"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> HUAC</li>
              <li> Hollywood Ten</li>
              <li> blacklist</li>
              <li> Ethel and Julius Rosenberg</li>
              <li> Joseph McCarthy</li>
              <li> McCarthyism</li>
            </ol>
            2. What actions of Joseph McCarthy worsened the national hysteria about communism?<br/>
            3. If you had lived in this period and had been accused of being a Communist, what would you have
            done? <br/>
            4. Choose one of the following roles: Harry Truman, a member of HUAC, Judge Irving Kaufman, or Joseph
            McCarthy. As the person you have chosen, explain your motivation for opposing communism. <br/>
            5. How did the Rosenberg case fuel anti-communist feeling? <br/>
            6. What government actions during the Communist scare conflicted with the Bill of Rights? Explain. <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener104} value={SS8Essay104}/>

          <span className="days">LESSON 106</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/26.4TwoNationsLiveontheEdge.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Two Nations Live on the Edge</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/AmericanLiteratureScienceFictionReflectsColdWarFears.pdf")}
            rel="noreferrer" target="_blank">Read <i> American Literature: Science Fiction Reflects
            Cold
            War Fears</i></a></p>
          <p>Watch the video below <b> The Cold War - OverSimplified (Part 2) </b></p><Video
          videoUrl="https://www.youtube.com/embed/OIYy32RuHao"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> H-bomb</li>
              <li> Dwight D. Eisenhower</li>
              <li> John Foster Dulles</li>
              <li> brinkmanship</li>
              <li> Central Intelligence Agency (CIA)</li>
              <li> Eisenhower Doctrine</li>
              <li> Nikita Khrushchev</li>
              <li> U-2 incident</li>
              <li> Warsaw Pact</li>
            </ol>
            2. How did the U.S., including the CIA, wage the Cold War in the 1950s? <br/>
            3. List Cold War trouble spots in Iran, Guatemala, Egypt, and Hungary. For each, briefly summarize the U.S.
            role and the outcome of the situation. <br/>
            4. How might the Cold War have progressed if the U-2 incident had never occurred?<br/>
            5. Which of the two superpowers do you think contributed more to Cold War tensions during the 1950s? <br/>
            6. Should one nation have the right to remove another nation’s head of government from power? If so, when?
            If
            not, why? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener105} value={SS8Essay105}/>

          <span className="days">LESSON 107</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/27.1PostwarAmerica.pdf")} rel="noreferrer"
                target="_blank">Read <i> Postwar America</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> GI Bill of Rights</li>
              <li> suburb</li>
              <li> Harry S. Truman</li>
              <li> Dixiecrat</li>
              <li> Fair Deal</li>
            </ol>
            2. Do you think Eisenhower’s actions reflected his philosophy of dynamic conservatism? Why or why not? <br/>
            3. How did the GI Bill of Rights help World War II veterans?<br/>
            4. What domestic and foreign issues concerned voters during the 1952 presidential election? <br/>
            5. Why do you think most Americans went along with Eisenhower's conservative approach to domestic
            policy? <br/>
            6. How did Presidents Truman and Eisenhower differ regarding civil rights? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener106} value={SS8Essay106}/>

          <span className="days">LESSON 108</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/27.2TheAmericanDreamintheFifties.pdf")}
                rel="noreferrer" target="_blank">Read <i> The American Dream in the Fifties</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> conglomerate</li>
              <li> franchise</li>
              <li> baby boom</li>
              <li> Dr. Jonas Salk</li>
              <li> consumerism</li>
              <li> planned obsolescence</li>
            </ol>
            2. What shift in employment trends had occurred by the mid-1950s? <br/>
            3. In what ways do you think current environmental consciousness is related to the "throwaway society"
            of
            the
            1950s? <br/>
            4. Do you think that the life of a typical suburban homemaker during the 1950s was fulfilling or
            not? <br/>
            5. How did life in the suburbs provide the model for the American dream? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener107} value={SS8Essay107}/>

          <span className="days">LESSON 109</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/27.3PopularCulture.pdf")} rel="noreferrer"
                target="_blank">Read <i> Popular Culture</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/DailyLife1950-1960TheEmergenceoftheTeenager.pdf")}
            rel="noreferrer" target="_blank">Read <i> Daily Life 1950-1960: The Emergence of the
            Teenager</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> mass media</li>
              <li> Federal Communications Commission (FCC)</li>
              <li> beat movement</li>
              <li> rock 'n ' roll</li>
              <li> jazz</li>
            </ol>
            2. What strategies did radio stations use to counteract the mass popularity of television? <br/>
            3. How did African-American performers influence American popular culture in the 1950s? <br/>
            4. Do you agree with Newton Minow’s statement, on page 860, that TV was 'a vast wasteland '? <br/>
            5. How did radio, TV, and the movies contribute to the success of rock 'n ' roll?<br/>
            6. In what ways were the rock ‘n’ roll musicians and the beat poets of the 1950s similar and
            different?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener108} value={SS8Essay108}/>

          <span className="days">LESSON 110</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/27.4TheOtherAmerica.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Other America</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> urban renewal</li>
              <li> bracero</li>
              <li> termination policy</li>
            </ol>
            2. How did many major cities change in the 1950s? <br/>
            3. What obstacles to improving their lives did Native Americans face in the 1950s? <br/>
            4. During America’s first two centuries, the national character was marked by individualism. Why do you
            think
            conformity became the norm in the 1950s?<br/>
            5. How did Native Americans work to increase their participation in the U.S. political process? Which major
            population shift— 'white flight, ' migration from Mexico, or relocation of Native Americans—do you think had
            the greatest impact on U.S. society? Why? <br/>
            6. Do you think that urban renewal was an effective approach to the housing problem in inner cities? Why
            or
            why not?<br/>
            7. Do you agree or disagree with the following quotation from Life magazine on American culture in 1954:
            'Never before so much for so few'? <br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener109} value={SS8Essay109}/>

          <span className="days">LESSON 111</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/28.1KennedyandtheColdWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Kennedy and the Cold War</i></a></p>
          <p>Watch the video below <b> The history of the Cuban Missile Crisis by Matthew A. Jordan </b></p>
          <Video
            videoUrl="https://www.youtube.com/embed/bwWW3sbk4EU"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className=" ssList">
              <li> John F. Kennedy</li>
              <li> flexible response</li>
              <li> Fidel Castro</li>
              <li> Berlin Wall</li>
              <li> Limited Test Ban Treaty</li>
              <li> hot line</li>
            </ol>
            2. Explain the factors that led to Kennedy’s victory over Nixon in the 1960 presidential campaign. <br/>
            3. How well do you think President Kennedy handled the Cuban missile crisis? <br/>
            4. What kind of political statement was made by the United States’ support of West Berlin? <br/>
            5. Often one event leads to another. Think about the Bay of Pigs invasion, Cuban missile crisis, and
            the
            construction of the Berlin Wall. Which of these events led directly to other events? Explain and give
            examples. <br/>
            6. What were the most significant results of the Cuban missile crisis? <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener112} value={SS8Essay112}/>

          <span className=" days">LESSON 114</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/28.2TheNewFrontier.pdf")} rel="noreferrer"
                target="_blank">Read <i> The New Frontier</i></a></p>
          <p className=" margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className=" ssList">
              <li> New Frontier</li>
              <li> mandate</li>
              <li> Peace Corps</li>
              <li> Alliance for Progress</li>
              <li> Warren Commission</li>
            </ol>
            2. What was Kennedy’s New Frontier? Why did he have trouble getting his New Frontier legislation through
            Congress? <br/>
            3. Why do you think Congress was so enthusiastic about allocating funds for the space program but
            rejected
            spending in education, social services, and other pressing needs? <br/>
            4. Why do you think Kennedy lost popularity for supporting civil rights? Which of the New Frontier
            programs
            do you think was most successful? Why? <br/>
            5. Do you think President Kennedy was a successful leader? Explain. <br/>
            6. What two international aid programs were launched during the Kennedy administration? <br/>
            7. How did Kennedy’s assassination affect the public? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener113} value={SS8Essay113}/>

          <span className=" days">LESSON 115</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/28.3TheGreatSociety.pdf")} rel="noreferrer"
                target="_blank">Read <i> The Great Society</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/SupremeCourtMirandav.Arizona.pdf")}
                rel="noreferrer" target="_blank">Read <i> Historic Decisions of the Supreme Court:
            Miranda
            v. Arizona (1966)</i></a></p>
          <p className=" margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className=" ssList">
              <li> Lyndon Baines Johnson</li>
              <li> Economic Opportunity Act</li>
              <li> Great Society</li>
              <li> Medicare and Medicaid</li>
              <li> Immigration Act of 1965</li>
              <li> Warren Court</li>
            </ol>
            2. Describe ways that Great Society programs addressed the problem of poverty. <br/>
            3. How did the courts increase the political power of people in urban areas and those accused of
            crimes? <br/>
            4. John F. Kennedy said, 'My fellow Americans, ask not what your country can do for you—ask what you can
            do
            for your country.' Do you agree with his view about the relationship between individuals and the
            country?
            Explain your opinion. <br/>
            5. Do you think the Great Society helped people achieve their hopes of making life better for themselves
            and
            their children? Explain. <br/>
            6. Describe how Lyndon Johnson’s personal and political experiences might have influenced his actions as
            president. Choose one Warren Court ruling and describe its lasting effects. <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener114} value={SS8Essay114}/>

          <span className=" days">LESSON 116</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/29.1TakingonCivilRights.pdf")}
                rel="noreferrer"
                target="
               _blank">Read <i> Taking on Civil Rights</i></a></p>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/SupremeCourtBrownv.BoardofEducationofTopeka.pdf")}
            rel="
               noreferrer" target="_blank">Read <i> Historic Decisions of the Supreme Court: Brown v.
            Board of Education of Topeka (1954)</i></a></p>
          <p>Watch the video below <b> Civil Rights and the 1950s by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/S64zRnnn4Po?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Thurgood Marshall</li>
              <li> Brown v. Board of Education of Topeka</li>
              <li> Rosa Parks</li>
              <li> Martin Luther King, Jr.</li>
              <li> sit-in</li>
              <li> Student Nonviolent Coordinating Committee (SNCC)</li>
              <li> Southern Christian Leadership Conference (SCLC)</li>
            </ol>
            2. What were Jim Crow laws and how were they applied? <br/>
            3. What were the roots of Martin Luther King, Jr. 's beliefs in nonviolent resistance? <br/>
            4. Do you think the nonviolence used by civil rights activists was a good tactic? Explain. <br/>
            5. After the Brown v. Board of Education of Topeka ruling, what do you think was the most significant
            event
            of
            the civil rights movement prior to 1960? Why? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener115} value={SS8Essay115}/>

          <span className="days">LESSON 117</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/29.2TheTriumphsofaCrusade.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Triumphs of a Crusade</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> James Meredith</li>
              <li> Civil Rights Act of 1964</li>
              <li> Freedom Summer</li>
              <li> Fannie Lou Hamer</li>
              <li> Voting Rights Act of 1965</li>
            </ol>
            2. List the steps that African Americans took to desegregate buses and schools from 1962 to 1965. <br/>
            3. What assumptions and beliefs do you think guided the fierce opposition to the civil rights movement
            in
            the
            South? <br/>
            4. What was the significance of the federal court case won by James Meredith in 1962? 4. Cite three
            examples
            of violence committed between 1962 and 1964 against African Americans and civil rights activists. <br/>
            5. Just after the Civil Rights Act of 1964 was passed, white Alabama governor George Wallace said, 'It
            is
            ironical that this event occurs as we approach the celebration of Independence Day. On that day we won
            our
            freedom. On this day we have largely lost it.' What do you think Wallace meant by his statement? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener116} value={SS8Essay116}/>

          <span className="days">LESSON 118</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/29.3ChallengesandChangesintheMovement.pdf")}
                rel="noreferrer" target="_blank">Read <i> Challenges and Changes in the
            Movement</i></a>
          </p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/TracingThemesCivilRights.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Tracing Themes: Civil Rights</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> de facto segregation</li>
              <li> de jure segregation</li>
              <li> Malcolm X</li>
              <li> Nation of Islam</li>
              <li> Stokely Carmichael</li>
              <li> Kerner Commission</li>
              <li> Black Power</li>
              <li> Civil Rights Act of 1968</li>
              <li> affirmative action</li>
              <li> Black Panthers</li>
            </ol>
            2. What were some of the key beliefs advocated by Malcolm X? <br/>
            3. Why did some civil rights leaders urge Stokely Carmichael to stop using the slogan 'Black Power'? <br/>
            4. Describe four events from the civil rights movement that were broadcast on nation- wide television and
            that
            you find the most compelling. <br/>
            5. Overall, would you characterize the civil rights struggle as a unified or disunified movement?
            Explain. <br/>
            6. Of all of the key events of the civil rights movement, in your opinion, which event was most significant?
            Why? <br/>
            7. What factors contributed to the outbreak of violence in the fight for civil rights?<br/>
            8. Compare and contrast the civil rights strategies of Malcolm X and Martin Luther King, Jr. Whose
            strategies
            do you think were more effective? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener117} value={SS8Essay117}/>

          <span className="days">LESSON 119</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/30.1MovingTowardConflict.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Moving Toward Conflict</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Ho Chi Minh</li>
              <li> Vietminh</li>
              <li> domino theory</li>
              <li> Dien Bien Phu</li>
              <li> Geneva Accords</li>
              <li> Ngo Dinh Diem</li>
              <li> Vietcong</li>
              <li> Ho Chi Minh Trail</li>
              <li> Tonkin Gulf Resolution</li>
            </ol>
            2. How did the Tonkin Gulf Resolution lead to greater U.S. involvement in Vietnam? <br/>
            3. How did the United States become more involved in the war?<br/>
            4. In what ways was America’s support of the Diem government a conflict of interests? <br/>
            5. Do you think Congress was justified in passing the Tonkin Gulf Resolution? <br/>
            6. What was President Eisenhower’s explanation of the domino theory? <br/>
            7. Why do you think the Tet offensive turned so many Americans against the war? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener118} value={SS8Essay118}/>

          <span className="days">LESSON 120</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/30.2U.S.InvolvementandEscalation.pdf")}
                rel="noreferrer" target="_blank">Read <i> U.S. Involvement and Escalation</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Robert McNamara</li>
              <li> Dean Rusk</li>
              <li> William Westmoreland</li>
              <li> Army of the Republic of Vietnam (ARVN)</li>
              <li> napalm</li>
              <li> Agent Orange</li>
              <li> search-and-destroy mission</li>
              <li> credibility gap</li>
            </ol>
            2. Why did so much of the American public and many in the Johnson administration support U.S. escalation in
            Vietnam? <br/>
            3. Why did the war begin to lose support at home? What con- tributed to the sinking morale of the U.S.
            troops? <br/>
            4. The Vietcong and Americans used different weapons and tactics. Which do you think were most
            successful? <br/>
            5. Why did Americans fail to win the 'hearts and minds' of the Vietnamese? <br/>
            6. In a paragraph, contrast the morale of the U.S. troops with that of the Vietcong. Use examples from the
            reading. <br/>
            7. What were the effects of the nightly TV coverage of the Vietnam War? <br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener119} value={SS8Essay119}/>

          <span className="days">LESSON 121</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/30.3ANationDivided.pdf")} rel="noreferrer"
                target="_blank">Read <i> A Nation Divided</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> draft</li>
              <li> New Left Students for a Democratic Society (SDS)</li>
              <li> Free Speech Movement</li>
              <li> dove</li>
              <li> hawk</li>
            </ol>
            2. Imagine it is 1967. Do you think you would ally yourself with the hawks or the doves? <br/>
            3. Give reasons that support your position. Do you agree that antiwar protests were 'acts of
            disloyalty'? <br/>
            4. Why or why not? <br/>
            5. What race-related problems existed for African-American soldiers who served in the Vietnam War?<br/>
            6. Summarize the ways in which the United States was sharply divided between hawks and doves. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener120} value={SS8Essay120}/>

          <span className="days">LESSON 122</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/30.41968ATumultuousYear.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> 1968: A Tumultuous Year</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Tet offensive</li>
              <li> Clark Clifford</li>
              <li> Robert Kennedy</li>
              <li> Eugene McCarthy</li>
              <li> Hubert Humphrey</li>
              <li> George Wallace</li>
            </ol>
            2. Do you think there might have been a relationship between the violence of the Vietnam War and the growing
            climate of violence in the United States during 1968? Why or why not? <br/>
            3. What circumstances set the stage for President Johnson’s public announcement that he would not seek
            another term as president? <br/>
            4. What acts of violence occurred in the United States during 1968 that dramatically altered the mood of the
            country? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener121} value={SS8Essay121}/>

          <span className="days">LESSON 123</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/30.5TheEndoftheWarandItsLegacy.pdf")}
                rel="noreferrer" target="_blank">Read <i> The End of the War and Its Legacy</i></a>
          </p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/LiteratureoftheVietnamWar.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> American Literature: Literature of the Vietnam War</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Richard Nixon</li>
              <li> Henry Kissinger</li>
              <li> Vietnamization</li>
              <li> silent majority</li>
              <li> Kent State University</li>
              <li> Pentagon Papers</li>
              <li> War Powers Act</li>
              <li> My Lai</li>
            </ol>
            2. Briefly describe the effects of the Vietnam War on America. <br/>
            3. How would you account for the cold homecoming American soldiers received when they returned from
            Vietnam? <br/>
            4. Briefly describe the military conflict in Vietnam soon after the last U.S. combat troops departed in
            1973. <br/>
            5. In your opinion, what was the main effect of the U.S. government’s deception about its policies and
            military conduct in Vietnam? <br/>
            6. List the immediate effects and the more lasting legacies of America’s involvement in the Vietnam
            War. <br/>
            7. Why do you think so many young Americans became so vocal in their condemnation of the Vietnam War? <br/>
            8. Why do you believe the U.S. had such difficulty winning the war in Vietnam? <br/>
            9. What lessons do you think can be learned from the ways in which Americans reacted to the draft?<br/>
            10. In the end, do you think the United States’ withdrawal from Vietnam was a victory for the United States
            or a defeat? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener122} value={SS8Essay122}/>

          <span className="days">LESSON 124</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/31.1LatinosandNativeAmericansSeekEquity.pdf")}
                rel="noreferrer" target="_blank">Read <i> Latinos and Native Americans Seek Equity</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> César Chávez</li>
              <li> United Farm Workers</li>
              <li> Organizing Committee</li>
              <li> La Raza Unida</li>
              <li> American Indian Movement</li>
            </ol>
            2. What strategies did both César Chávez and the UFWOC use to achieve their goals? How did they successfully
            apply these tactics? <br/>
            3. What were the demands of the American Indian Movement (AIM) organizers who staged 'The Trail of Broken
            Treaties' march on Washington in 1972? <br/>
            4. What are the broad similarities between the issues faced by Latinos and Native Americans during the
            1960s? What were the unique concerns of the two groups? Which group do you think had more to gain by
            fighting for what they wanted? <br/>
            5. How would you judge whether an activist organization was effective? <br/>
            6. In what ways did the Latino campaign for economic and social equality affect non-Latino Americans? <br/>
            7. Vine Deloria, Jr., said, 'When you get far enough away from the reservation, you can see it’s the urban
            man who has no identity. ' What do you think he meant by this?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener123} value={SS8Essay123}/>

          <span className="days">LESSON 125</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/31.2WomenFightforEquality.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Women Fight for Equality</i></a></p>
          <p>Watch the video below <b> Sex Discrimination by Crash Course </b></p>  <Video
          videoUrl="https://www.youtube.com/embed/1uFh4GTZH-U"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Betty Friedan</li>
              <li> feminism</li>
              <li> National Organization for Women (NOW)</li>
              <li> Gloria Steinem</li>
              <li> Equal Rights Amendment (ERA)</li>
              <li> Phyllis Schlafly</li>
            </ol>
            2. What if the Equal Rights Amendment had been ratified? Speculate on how women’s lives might have been
            different. <br/>
            3. Name three changes that members of the National Organization of Women (NOW) advocated. <br/>
            4. What was the Supreme Court’s decision in the Roe v. Wade case? <br/>
            5. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener124} value={SS8Essay124}/>

          <span className="days">LESSON 126</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/31.3CultureandCounterculture.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Culture and Counterculture</i></a></p>
          <p>Watch the video below <b> The 1960s in America by Crash Course </b></p>  <Video
          videoUrl="https://www.youtube.com/embed/lkXFb1sMa38?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> counterculture</li>
              <li> Haight-Ashbury</li>
              <li> the Beatles</li>
              <li> Woodstock</li>
            </ol>
            2. Briefly explain the role Timothy Leary played in the counterculture movement. <br/>
            3. What unintended impact did the counterculture have on many mainstream Americans? <br/>
            4. Consider the organizations that Latinos, Native Americans, and women formed during the 1960s. Which
            do
            you
            think was the most influential? Why? <br/>
            5. A stereotype is a generalization made about a group. What stereotype do you think hippies might have
            formed
            about mainstream Americans?<br/>
            6. What stereotype do you think mainstream Americans might have formed about hippies? Why? <br/>
            7. In your opinion, why didn’t the hippies succeed? <br/>
            8. What role did the counterculture and antiwar movement play in helping Richard Nixon win the
            presidency? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener125} value={SS8Essay125}/>

          <span className="days">LESSON 127</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/32.1TheNixonAdministration.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Nixon Administration</i></a></p>
          <p>Watch the video below <b> The Rise of Conservatism by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/OCrxD19DHA8?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Richard M. Nixon</li>
              <li> New Federalism</li>
              <li> revenue sharing</li>
              <li> Family Assistance Plan (FAP)</li>
              <li> stagflation</li>
              <li> OPEC (Organization of Petroleum Exporting Countries)</li>
              <li> realpolitik</li>
              <li> détente</li>
              <li> SALT I Treaty</li>
              <li> Southern strategy</li>
            </ol>
            2. In what ways did President Nixon attempt to reform the federal government? <br/>
            3. In what ways do you think Nixon was most conservative? In what ways was he least
            conservative? <br/>
            4. What were the effects of the Arab OPEC oil embargo on the United States? <br/>
            5. In your opinion, did Nixon’s policy of détente help solve the country’s major foreign policy
            problems? <br/>
            6. Why was the timing of Nixon’s foreign policy achievements particularly important? Relate his
            achievements
            to other events. <br/>
            7. How did Nixon try to combat stagflation?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener126} value={SS8Essay126}/>

          <span className="days">LESSON 128</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/32.2WatergateNixon'sDownfall.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Watergate: Nixon's Downfall</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/1968-1980TelevisionReflectsAmericanLife.pdf")}
                rel="noreferrer" target="_blank">Read <i> Daily Life 1968-1980: Television Reflects
            American
            Life</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> impeachment</li>
              <li> Watergate</li>
              <li> H. R. Haldeman</li>
              <li> John Ehrlichman</li>
              <li> John Mitchell</li>
              <li> Committee to Reelect the President</li>
              <li> John Sirica</li>
              <li> Saturday Night Massacre</li>
            </ol>
            2. Which event made Nixon's downfall certain? <br/>
            3. If Nixon had admitted to and apologized for the Watergate break- in, how might subsequent events have
            been
            different? <br/>
            4. In what ways did the participants in Watergate attempt to cover up the scandal? <br/>
            5. How did the Watergate scandal create a constitutional crisis? <br/>
            6. Do you think that Nixon would have been forced to resign if the tapes had not existed? <br/>
            7. What were the results of the Watergate scandal? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener127} value={SS8Essay127}/>

          <span className="days">LESSON 129</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/32.3TheFordandCarterYears.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> The Ford and Carter Years</i></a></p>
          <p>Watch the video below <b> Ford, Carter, and the Economic Malaise by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/pyN5LPHEQ_0?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Gerald R. Ford</li>
              <li> Jimmy Carter</li>
              <li> National Energy Act</li>
              <li> human rights</li>
              <li> Ayatollah Ruhollah Khomeini</li>
              <li> Camp David Accords</li>
            </ol>
            2. How were the actions taken by Presidents Ford and Carter to address the country’s economic downturn
            similar? How did they differ? <br/>
            3. Do you agree with President Carter that human rights concerns should steer U.S. foreign policy? Why
            or
            why
            not? <br/>
            4. How did Watergate affect the presidents who followed after Richard Nixon? <br/>
            5. Do you think that Ford made a good decision in pardoning Nixon? <br/>
            6. What were Gerald Ford’s greatest successes as president? <br/>
            7. How did President Carter attempt to solve the energy crisis? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener128} value={SS8Essay128}/>

          <span className="days">LESSON 130</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/32.4EnvironmentalActivism.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Environmental Activism</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Rachel Carson</li>
              <li> Earth Day</li>
              <li> environmentalist</li>
              <li> Environmental Protection Agency (EPA)</li>
              <li> Three Mile Island</li>
            </ol>
            2. How much should the United States rely on nuclear power as a source of energy? <br/>
            3. What factors increased Americans’ concerns about environmental issues during the 1960s and
            1970s? <br/>
            4. What was the impact of the Three Mile Island incident? <br/>
            5. Why was the OPEC oil embargo in 1973 in the United States so difficult for Americans?<br/>
          </p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener129} value={SS8Essay129}/>

          <span className="days">LESSON 131</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/33.1AConservativeMovementEmerges.pdf")}
                rel="noreferrer" target="_blank">Read <i> A Conservative Movement Emerges</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> entitlement program</li>
              <li> New Right</li>
              <li> affirmative action</li>
              <li> reverse discrimination</li>
              <li> Moral Majority</li>
              <li> Ronald Reagan</li>
              <li> conservative coalition</li>
            </ol>
            2. What caused the conservative revolution of the early 1980s? <br/>
            3. What factors led to Ronald Reagan’s victory in 1980? <br/>
            4. How did the leaders of the conservative movement of the 1980s want to change government? <br/>
            5. What role did the Moral Majority play in the conservative movement of the 1970s and early
            1980s? <br/>
            6. What personal qualities in Ronald Reagan helped him to win election as president in 1980? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener130} value={SS8Essay130}/>

          <span className="days">LESSON 132</span>
          <p><a
            href={require("../resources/social-studies/ss-pdfs8th/33.2ConservativePoliciesUnderReaganandBush.pdf")}
            rel="noreferrer" target="_blank">Read <i> Conservative Policies Under Reagan and
            Bush</i></a></p>
          <p>Watch the video below <b> The Reagan Revolution by Crash Course </b></p><Video
          videoUrl="https://www.youtube.com/embed/2h4DkpFP_aw?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Reaganomics</li>
              <li> supply-side economics</li>
              <li> Strategic Defense Initiative</li>
              <li> Sandra Day O’Connor</li>
              <li> Geraldine Ferraro</li>
              <li> Environmental Protection Agency (EPA)</li>
              <li> deregulation</li>
              <li> George Bush</li>
            </ol>
            2. What principles formed the basis of 'Reaganomics'? <br/>
            3. What is deregulation, and how did it affect certain industries in the 1980s? <br/>
            4. Explain whether you think 'Reaganomics' was good or bad for the economy. <br/>
            5. Why did President Reagan and President Bush think it was important to appoint conservative justices to
            the Supreme Court? <br/>
            6. Read the following excerpt from Ronald Reagan’s speech at the 1992 Republican Convention. <i>'We mustn’t
              forget . . . the very different America that existed just 12 years ago; an America with 21 percent
              interest
              rates and . . . double-digit inflation; an America where mortgage payments doubled, paychecks plunged, and
              motorists sat in gas lines; an America whose leaders told us . . . that what we really needed was another
              good dose of government control and higher taxes.'</i><br/>
            What picture did Reagan paint of the Carter administration? In your opinion, was Reagan’s first term a
            success?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener132} value={SS8Essay132}/>

          <span className="days">LESSON 133</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/33.3SocialConcernsinthe1980s.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Social Concerns in the 1980s</i></a></p>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/Sunbelt,Rustbelt,Ecotopia.pdf")}
                rel="noreferrer"
                target="_blank">Read <i> Geography Spotlight: Sunbelt Rustbelt Ecotopia</i></a></p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> AIDS (acquired immune deficiency syndrome)</li>
              <li> pay equity</li>
              <li> L. Douglas Wilder</li>
              <li> Jesse Jackson</li>
              <li> Lauro Cavazos</li>
              <li> Antonia Coello Novello</li>
            </ol>
            2. How might improvements in the educational system help solve other social problems? <br/>
            3. Compare the political gains and losses experienced by various groups during the Reagan and Bush
            administrations. <br/>
            4. Why might a widening gap between the richest and poorest citizens of a country be a cause for concern
            about
            that country’s future? <br/>
            5. What progress and obstacles did different minority groups experience in the 1980s? <br/>
            6. What were some gains that women achieved in the 1980s? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener133} value={SS8Essay133}/>

          <span className="days">LESSON 134</span>
          <p><a href={require("../resources/social-studies/ss-pdfs8th/33.4ForeignPolicyAftertheColdWar.pdf")}
                rel="noreferrer" target="_blank">Read <i> Foreign Policy After the Cold War</i></a>
          </p>
          <p className="margin-para"> Answer the following questions:<br/>
            1. For each term or name, write a sentence explaining its significance.<br/>
            <ol className="ssList">
              <li> Mikhail Gorbachev</li>
              <li> glasnost</li>
              <li> perestroika</li>
              <li> INF Treaty</li>
              <li> Sandinistas</li>
              <li> Contras</li>
              <li> Operation Desert Storm</li>
              <li> Tiananmen Square</li>
            </ol>
            2. What caused the downfall of the Soviet Union and the founding of the Commonwealth of Independent
            States? <br/>
            3. Summarize the U.S. response to Iraq’s invasion of Kuwait. What factors caused the end of the Cold
            War? <br/>
            4. What factors do you think determined whether or not the United States intervened militarily in other
            nations? <br/>
            5. Is it possible for an authoritarian government to make economic reforms without also making political
            reforms? Support your answer with details from the text. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener134} value={SS8Essay134}/>

          <span className="days">LESSON 135</span>
          <p><a
            href="https://flexbooks.ck12.org/user:zxbpc2rzcziwmthaz21hawwuy29t/cbook/episd-2019-2020-us-history/section/11.2/primary/lesson/president-george-h.w.-bush"
            rel="noreferrer" target="_blank">Read <i> President George H.W. Bush </i></a></p>
          <p>Watch the video below <b> George HW Bush and the End of the Cold War by Crash Course </b></p>
          <Video videoUrl="https://www.youtube.com/embed/L-K19rVDxoM?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. Describe the “U.S. policy limbo” after the end of the Cold War AND the “one positive
            result”. <br/>
            2. Describe “the foreign-policy crisis that Bush handled decisively”. <br/>
            3. Describe 3 New Deal-style bills that were passed by the Democratically controlled Congress. <br/>
            4. What were the 3 possible causes of the recession that began in 1990s? <br/>
            5. What probably destroyed Bush’s reelection hopes, AND what’s his famous quote? <br/>
            6. Who were the 3 candidates in the 1992 election? <br/>
            7. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
              Game</a> for 5-10 minutes and write your final score here.<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener135} value={SS8Essay135}/>

          <span className="days">LESSON 136</span>
          <p><a
            href="https://flexbooks.ck12.org/user:zxbpc2rzcziwmthaz21hawwuy29t/cbook/episd-2019-2020-us-history/section/11.3/primary/lesson/president-william-j.-clinton"
            rel="noreferrer" target="_blank">Read <i> President William J. Clinton</i></a></p>
          <p>Watch the video below <b> The Clinton Years and the 1990s by Crash Course </b></p> <Video
          videoUrl="https://www.youtube.com/embed/rboN6F2g-k?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What were the foreign policy success’ and failures?<br/>
            2. What was “Don’t Ask, Don’t Tell” policy?<br/>
            3. Why did Clinton’s health care policy idea fail?<br/>
            4. What was the “Contact with America”?<br/>
            5. How did Clinton’s welfare reform work?<br/>
            6. What is ecommerce?<br/>
            7. How did Globaliztion effect the US/ World?<br/>
            8. Describe how wealth disparity increase during the 90’s?<br/>
            9. Where did the immigrants come from that were entering the US in the 90’s.<br/>
            10. How was the prison population changed in the 90’s.<br/>
            11. Why was Clinton impeached?<br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener136} value={SS8Essay136}/>

          <span className="days">LESSON 137</span>
          <p>Complete the reading, watch the video belows and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/user:zxbpc2rzcziwmthaz21hawwuy29t/cbook/episd-2019-2020-us-history/section/11.4/primary/lesson/president-george-w.-bush"
              rel="noreferrer" target="_blank"> President George W. Bush. </a></p>
          <p>Watch the video below <b> Terrorism, War, and Bush 43 by Crash Course </b></p> <Video
          videoUrl="https://www.youtube.com/embed/nlsnnhn3VWE?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What was the controversy with the 2000 election?<br/>
            2. What did Bush do in his first 100 days of office?<br/>
            3. What was Bush’s policy on carbon emmisions?<br/>
            4. What was No Child Left Behind?<br/>
            5. What happened September 11th, 2001?<br/>
            6. What was the Bush Doctrine?<br/>
            7. What were the Axis of Evil?<br/>
            8. Why did the US invade Iraq in 2003?<br/>
            9. What were the costs of the War?<br/>
            10. What is the Patriot Act? What did it do?<br/>
            11. What was the issue with the economy during the Bush presidency?<br/>
            12. What was the issue with Hurricane Katrina?<br/>
            13. Who was Nancy Pelosi?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener137} value={SS8Essay137}/>

          <span className="days">LESSON 138</span>
          <p>Complete the reading, watch the video belows and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/user:zxbpc2rzcziwmthaz21hawwuy29t/cbook/episd-2019-2020-us-history/section/11.5/primary/lesson/president-barack-obama"
              rel="noreferrer" target="_blank"> President Barack Obama</a></p>
          <p>Watch the video below <b> Obamanation by Crash Course </b></p> <Video
          videoUrl="https://www.youtube.com/embed/lUfh2ebjLOg?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s"/>
          <p className="margin-para"> Answer the following questions:<br/>
            1. What were the causes of the economic depression in the 2000’s?<br/>
            2. What was a NINJA loan?<br/>
            3. Why did the Housing Bubble pop?<br/>
            4. What is TARP?<br/>
            5. What have Obama’s successes and failures in foreign policy been?<br/>
            6. What was the Affordable Care Act?<br/>
            7. What is the TEA Party and what was there positions?<br/>
            8. What does Freedom really mean to you?1. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener138} value={SS8Essay138}/>

          <span className="days">LESSON 139</span>
          <p className="topBottom"> Do you think <a href="https://www.history.com/topics/us-presidents/donald-trump"
                                                    rel="noreferrer" target="_blank">Donald Trump </a>was a successful
            president? Write a 5 paragraph essay that addresses this question.</p>
          <p>Take a position and then research the topic online to find support and examples for your argument.</p>
          <p className="topBottom"><a
            href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer"
            target="_blank">Click here for a 5 Paragraph Essay outline </a> for help getting started. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener139} value={SS8Essay139}/>

          <span className="days">LESSON 140</span>
          <p>In a 5 paragraph essay, compare and contrast <a
            href="https://www.history.com/topics/us-presidents/joe-biden" rel="noreferrer" target="_blank"> Joe
            Biden </a>with another U.S. president of your choice. This will be
            similar to essays you’ve already written, but in this one you will need to identify and describe
            similarities and differences between Biden and the other president you choose. </p>
          <p className="topBottom">Their similarities and differences can include anything you
            choose. For example, you can compare and contrast their foreign policies, efforts to protect the
            environment, efforts to improve the economy, ability to persuade, ability to unify the country, what made
            each president effective (or ineffective) as a leader, etc.</p>
          <p><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                rel="noreferrer"
                target="_blank">Click here for a 5 Paragraph Essay outline </a> for help getting started. <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener140} value={SS8Essay140}/>

          <span className="days">LESSON 141</span>
          <p className="topBottom">It's time to travel again anywhere in the world. Where will you go this time?<br/>
            <ul className="list">
              <li>Denali National Park in Alaska?</li>
              <li>White Cliffs of Dover, England?</li>
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
            4. Discuss the cultural, historical or environmental significance this place has. (In what ways do you think
            is it important?)<br/>
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s 30
              minutes from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener141} value={SS8Essay141}/>

          <span className="days">LESSON 142</span>
          <p>Watch the video below <b> Inventing the American presidency </b>by Kenneth C. Davis. Then answer the
            questions that follow. </p> <br/>
          <Video videoUrl="https://www.youtube.com/embed/k3kcl2HDlww"/>
          <p> 1. Where and when was the Constitution written?<br/>
            2. What are the men who wrote the Constitution are often referred to as?<br/>
            3. In what document are the powers of the President are laid out?<br/>
            4. According to the narrator in the video, who were the men who wrote the Constitution afraid of?<br/>
            5. Under the original plan of the Constitution the president served for how many years?<br/>
            6. Should the President have any new powers? Explain why or why not. <br/>
            7. Should any presidential powers be taken away? Explain. <br/>
            8. Under the Constitution, the president is now limited to two terms. Should we go back to the original plan
            of unlimited terms? Why or why not?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener142} value={SS8Essay142}/>

          <span className="days">LESSON 143</span>
          <p>Watch the video below <b> How is power divided in the United States government? </b> by Belinda Stutzman.
            Then, answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/HuFR5XBYLfU"/>
          <p> 1. In the late 1700's, who did the Founding Fathers not want ruling the United States?<br/>
            2. Which branch of government is described in Article I of the Constitution?<br/>
            3. Which branch of the government commands the US military?<br/>
            4. Who determines if federal laws are constitutional?<br/>
            5. Besides voting, in what ways can a citizen participate in his/her government?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener143} value={SS8Essay143}/>

          <span className="days">LESSON 144</span>
          <p>Watch the video below <b> All 50 U.S. States Summarized </b> by Geography Now. Then, complete the
            assignment that follows. </p>
          <Video videoUrl="https://www.youtube.com/embed/hWpzs9QcCCY"/>
          <p>
            <ul className="vocab">
              <li>five interesting things you learned about five different states.</li>
              <li>Choose<i> one state</i> to research online and write a paragraph that describes what the state is
                like.
                Be sure to describe the physical geography, history, major cities, and economy.
              </li>
            </ul>
          </p>
          <textarea className="textArea" onChange={onChangeSS8Listener144} value={SS8Essay144}/>

          <span className="days">LESSON 145</span>
          <p>Watch the video below <b> Introduction to U.S Government & Politics</b> by Crash Course. Then, answer the
            questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/lrk4oY7UxpQ?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is government?<br/>
          2. Why study government?<br/>
          3. What is politics?<br/>
          4. What is a republic? What is a democracy?<br/>
          5. What are four ways people can participate in government?<br/>
          6. What is the most important thing a citizen can do when it comes to participating in government?<br/>
          7. What will you learn through this course?<br/>
          8. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
          Game</a> for 5-10 minutes and write your final score here.<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener145} value={SS8Essay145}/>

          <span className="days">LESSON 146</span>
          <p>Watch the video below <b> The Bicameral Congress</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/n9defOwVWS8?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Why the Federal Congress is considered the most important branch?<br/>
          2. What are the names of the two houses of Congress?<br/>
          3. What does the word bicameral mean?<br/>
          4. What are the requirements for serving in the House of Representatives?<br/>
          5. How is representation determined?<br/>
          6. What are the six states with only one Representative?<br/>
          7. What are the requirements for being a Senator?<br/>
          8. Originally how were Senators chosen? What amendment changed this? How are Senators elected
          now?<br/>
          9. What powers (3) are specific to the House of Representatives?<br/>
          10. What powers (3) are specific to the Senate?<br/>
          11. Why do we have a two house legislature (practical and historical)?<br/>
          12. What were the terms of the Connecticut Compromise?<br/>
          13. What is an intra­branch check?<br/>
          14. What are the reasons for and the powers given to each house of Congress?<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener146} value={SS8Essay146}/>

          <span className="days">LESSON 147</span>
          <p>Watch the video below <b> Separation of Powers and Checks and Balances</b> by Crash Course. Then, answer
            the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/0bf3CwYCxXw?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is main job of the Legislative Branch?<br/>
          2. What is the main job of the Executive Branch?<br/>
          3. Where does one find the power of the President?<br/>
          4. What is main job of the Judicial Branch?<br/>
          5. What is the point of the checks and balances system?<br/>
          6. What are the Legislative checks over the Executive and Judicial Branch?<br/>
          7. What are the Executive checks over the Legislative and Judicial Branch?<br/>
          8. What the Judicial checks over the Executive and Legislative Branch?<br/>
          9. Which branch has the most checks?<br/>
          10. Why do we have Checks and Balances to begin with?<br/>
          11. What Federalist Paper refers to the Checks and Balances system?<br/>
          12. What is Madison’s thought on human nature?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener147} value={SS8Essay147}/>

          <span className="days">LESSON 148</span>
          <p>Watch the video below <b> Federalism</b> by Crash Course. Then, answer the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/J0gosGXSgsI?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is Federalism?<br/>
          2. In the US Federal System, what is the Federal government responsible for?<br/>
          3. What are the state governments responsible for?<br/>
          4. Do they share any responsibilities? If so, list them here as well.<br/>
          5. What are the two types of Federalism?<br/>
          6. How long did Dual Federalism last?<br/>
          7. Discuss the characteristics of Dual Federalism.<br/>
          8. What were the national government and state government responsibilities under Dual
          Federalism?<br/>
          9. Who has more jurisdiction under Dual Federalism?<br/>
          10. What is the Commerce Clause?<br/>
          11. What “Deal” brought us Cooperative Federalism?<br/>
          12. What are Grants­in­Aid?<br/>
          13. What the two types of Categorical grants­in­aid?<br/>
          14. What is a block grant?<br/>
          15. What is Regulated Federalism?<br/>
          16. What are examples of mandates (funded or unfunded) set up the federal government?<br/>
          17. What type of Federalism do we currently live under?<br/>
          18. What form of Federalism did Nixon and Reagan popularize?<br/>
          19. What are the three forms of New Federalism?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener148} value={SS8Essay148}/><br/>

          <span className="days">LESSON 149</span>
          <p>Watch the video below <b> Constitutional Compromises </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/kCCmuftyj8A?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What was the original purpose of the Philadelphia Convention? What actually happened?<br/>
          2. What was wrong with the Articles of Confederation?<br/>
          3. What was one thing the Articles government was able to accomplish?<br/>
          4. What was the Virginia Plan?<br/>
          5. What was the New Jersey Plan?<br/>
          6. What is the Great Compromise?<br/>
          7. How were slaves counted in terms of determining representation in the House of
          Representatives?<br/>
          8. What are the characteristics and political thought differences between Federalist and AntiFederalist?<br/>
          9. What was the final “compromise” of the Federalist?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener149} value={SS8Essay149}/>

          <span className="days">LESSON 150</span>
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
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener150} value={SS8Essay150}/>

          <span className="days">LESSON 151</span>
          <p>Watch the video below <b> Congressional Elections</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/qxiD9AEX4Hc?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Why is the Congress considered the most important branch?<br/>
          2. What does the Constitution say about Congressional Elections?<br/>
          3. Who sets registration, scheduling and rules of elections?<br/>
          4. What is a single­member district? And how are the number of districts determined?<br/>
          5. What is an at­large election?<br/>
          6. What are the general characteristics (3) of a candidate?<br/>
          7. What was the average cost of a 2012 House and Senate winners?<br/>
          8. What is an incumbency advantage? What are the reasons for these advantages?<br/>
          9. What is the Franking Privilege?<br/>
          10. What is the Electoral Connection? Address the three areas of representatives’ behaviors.<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener151} value={SS8Essay151}/>

          <span className="days">LESSON 152</span>
          <p>Watch the video below <b> Congressional Committees</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/evLR90Dx79M"/>
          1. Why does Congress have committees?<br/>
          2. How many standing committees are there in the Senate and House of Representatives?<br/>
          3. What is a joint committee?<br/>
          4. What is a conference committee?<br/>
          5. Does serving on committee fall in line with the Election Connection? If yes, please explain how.<br/>
          6. Who has proposal power?<br/>
          7. What is gatekeeping authority?<br/>
          8. Who manages the actual process of mark­up?<br/>
          9. How do committees exercise oversight?<br/>
          10. How did Newt Gingrich increase the power of the Speaker?<br/>
          11. What are the two types of Congressional staff?<br/>
          12. List some of the responsibilities of Congressional staff?<br/>
          13. What is the function of the Congressional Research Service?<br/>
          14. What is the function of the Government Accountability Office?<br/>
          15. What is the function of the Congressional Budget Office?<br/>
          16. What is the caucus system?<br/>
          17. List the caucuses discussed in the video.<br/>
          18. What is the purpose of the caucus?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener152} value={SS8Essay152}/>

          <span className="days">LESSON 153</span>
          <p>Watch the video below <b> Congressional Leadership</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/L8urcMLGFyU"/>

          1. How is the leader of the House of Representatives chosen?<br/>
          2. What is the title for the leader of the House of Representatives?<br/>
          3. Who is the current leader, third in line for the President?<br/>
          4. What are titles of the two assistants to the leader? And what are their responsibilities?<br/>
          5. Who is the spokesperson for the minority party?<br/>
          6. How is leadership determined in the Senate?<br/>
          7. What is the President Pro Tempore?<br/>
          8. What are the powers of being in Congressional leadership?<br/>
          9. Specifically discuss the powers of the Speaker of the House.
          10. Why is Agenda Setting considered a negative power?<br/>
          11. What are the ways political parties matter in Congress? How do political parties influence Congress?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener153} value={SS8Essay153}/>

          <span className="days">LESSON 154</span>
          <p>Watch the video below <b> How a Bill Becomes Law</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/66f4-NKEYz4?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is the first step (formal) on how a bill becomes law? Who can help with the idea of a law?<br/>
          1. After the bill is introduced where does it go?<br/>
          2. If the mark­up bill receives a majority from the committee, where does it go?<br/>
          3. When it comes to floor debate in the Senate, what types of rules with they determine?<br/>
          4. What is an open rule and closed rule? What are their implications?<br/>
          5. What is the one difference in the step­by­step process of how a bill becomes law in the House?<br/>
          6. How many votes are needed for the House to approve a bill?<br/>
          7. If both houses are required to pass the same version of a bill, how often does that happen?<br/>
          8. What is the solution if they don’t have the same version?<br/>
          9. What are the options for the President when it comes to signing bills into law?<br/>
          10. What is the one check on the President regarding bills?<br/>
          11. Why do so few laws get passed?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener154} value={SS8Essay154}/>

          <span className="days">LESSON 155</span>
          <p>Watch the video below <b> Congressional Decisions</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/ZT9ipQdYL-s?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What are the three main factorsagents when it comes to influencing a congressman’s decisions?<br/>
          2. What are the implications to the factorsagents?<br/>
          3. What is the main thing that interest groups provide to a Congressman?<br/>
          4. When are interest groups most influential?<br/>
          5. What is logrolling?<br/>
          6. Where does logrolling occur the most?<br/>
          7. Why does a divided government work well for Congress?<br/>
          8. When are political parties most influential?<br/>
          9. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
          Game</a> for 5-10 minutes and write your final score here.<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener155} value={SS8Essay155}/>

          <span className="days">LESSON 156</span>
          <p>Watch the video below <b> Presidential Power</b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/5l02sK5LovI"/>
          1. What does the Constitution say about the President?<br/>
          2. How is the President elected? Is this democratic?<br/>
          3. What are the President’s powers?<br/>
          4. What are formal and informal powers? And where do they originate?<br/>
          5. Discuss the responsibilities as Commander­in­Chief.<br/>
          6. How many generals have served as President?<br/>
          7. Discuss the responsibilities as Chief Diplomat.
          8. Why is the State of Union important? (acting as a Chief Agenda Setter)<br/>
          9. Why did the Framers curtail the President’s powers?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener156} value={SS8Essay156}/>

          <span className="days">LESSON 157</span>
          <p>Watch the video below <b> Presidential Powers 2 </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/fnHb-zyWh14?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What are the President's informal (implied) powers? What are the President's inherent powers? <br/>
          2. What locations has the President sent troops when he did not ask for a war declaration?<br/>
          3. What is the War Powers Resolution?<br/>
          4. What is the most important difference between a treaty and an executive agreement?<br/>
          5. List the two Executive Agreements discussed in the video.<br/>
          6. Which President issued the most executive orders?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener157} value={SS8Essay157}/>

          <span className="days">LESSON 158</span>
          <p>Watch the video below <b> Congressional Delegation </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/UVboes68PkQ?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is a delegate?<br/>
          2. What is the delegate role?<br/>
          3. What is a trustee?<br/>
          4. What is delegation?<br/>
          5. What are the 3 reasons for Congress to delegate powers to the Executive Branch?<br/>
          6. What are the practical reasons?<br/>
          7. What are the historical reasons?<br/>
          8. What are the political reasons?<br/>
          9.What is the general rule when it comes to Congressional Delegation?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener158} value={SS8Essay158}/>

          <span className="days">LESSON 159</span>
          <p>Watch the video below <b> How Presidents Govern </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/5vnuFJSMYkY?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Who is at the top of the executive pyramid?<br/>
          2. Where are most policy decisions made?<br/>
          3. Who makes up the White House Staff?<br/>
          4. Which staff members do you believe are the most important?<br/>
          5. What is the Executive Office of the President?<br/>
          6. What positions within the EOP would you consider the most important?<br/>
          7. What is the Cabinet?<br/>
          8. What is the purpose of a government corporation?<br/>
          9. What are the two most well­known government corporations?<br/>
          10. What is the best known independent agency? List some others. <br/>
          11. What is the best known regulatory commission? List some others. <br/>
          12. What are the president’s three main strategies when it comes to leadership? Circle the most important
          one. <br/>
          13. What is the bully pulpit?<br/>
          14. What does the Office of Management and Budget do?<br/>
          15. List some of the most important Executive Orders
          16. Why do Presidents increasingly rely on administrative strategies?<br/>
          17. Explain the historical argument for the Founders preferred having a weak executive branch. <br/>
          18. Explain the argument for a stronger executive branch.<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener159} value={SS8Essay159}/>

          <span className="days">LESSON 160</span>
          <p>Watch the video below <b> Bureaucracy Basics</b> by Crash Course. Then, answer the questions that follow.

            <Video videoUrl="https://www.youtube.com/embed/I8EQAnKntLs?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
            1. What is a bureaucracy?<br/>
            2. Why do we have bureaucracy?<br/>
            3. What is the function of the bureaucracy?<br/>
            4. What are regulations? And how do they relate to the bureaucracy?<br/>
            5. What is administrative adjudication?<br/>
            6. What is the main argument for privatization?<br/>
            7. Why do we need bureaucracy?<br/></p>
          <p>After you answer the questions above, play the <a href="https://bensguide.gpo.gov/states5/game.html"
                                                               rel="noreferrer" target="_blank"> US Map
            Game by Ben's Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener160} value={SS8Essay160}/>

          <span className="days">LESSON 161</span>
          <p>Watch the video below <b> How Geography Gave the US Power. </b> Then, complete the essay assignment below.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/e-WO-c9xHms"/>
          <p>What were the most important ways geography gave the U.S. power? Address this question in a 5 paragraph
            essay.</p>
          <textarea className="textArea" onChange={onChangeSS8Listener161} value={SS8Essay161}/>

          <span className="days">LESSON 162</span>
          <p>Watch the video below <b> Types of Bureaucracies </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/tIvUo3bP4Eo?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is the Executive Department? And what is the general title shared by most?<br/>
          2. What are independent agencies? What are some examples?<br/>
          3. What are independent regulatory agencies? What are some examples?<br/>
          4. What are government corporations? List the examples.<br/>
          5. What is the purpose of the FDA, CDC, and NIH? List another client serving agency.<br/>
          6. How do agencies maintain the Union (5)?<br/>
          7. How do agencies collect revenue?<br/>
          8. How do agencies provide security? (internal and external) <br/>
          9. How do agencies regulate economic activities?<br/>
          10. How do agencies redistribute economic resources?<br/>
          11. What is the purpose of the Social Security Administration?<br/>
          12. How do bureaucrats get its power?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener162} value={SS8Essay162}/>

          <span className="days">LESSON 163</span>
          <p>Watch the video below <b> Controlling Bureaucracies</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/12MCVhfo4j4?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. How are federal bureaucracies funded?<br/>
          2. How do we control the federal bureaucracies?<br/>
          3. What are before­the­fact controls?<br/>
          4. What is procedural control?<br/>
          5. What are after­the­fact controls?<br/>
          6. What is government’s own watchdog agency?<br/>
          7. What are three reports mentioned in the video, commissioned for investigation?<br/>
          8. What is the best way to control the bureaucracy?<br/>
          9. What is deregulation? And what is its purpose?<br/>
          10. What is devolution? Why is it considered a bait and switch?<br/>
          11. What is privatization? And what attempts has the government made to privatize?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener163} value={SS8Essay163}/>

          <span className="days">LESSON 164</span>
          <p>Watch the video below <b> Legal System Basics </b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/mXw-hEB263k?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What are the three basic functions of the court system?<br/>
          2. Where does most legal action occur?
          3. What are the four main characteristics of the federal court system?<br/>
          4. What are statutes?<br/>
          5. What is common law?<br/>
          6. What are the two types of court which make civil law?<br/>
          7. What types of courts have original jurisdiction?<br/>
          8. What types of courts have appellate jurisdiction?<br/>
          9. What are the three types of law?<br/>
          10. What is public law?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener164} value={SS8Essay164}/>

          <span className="days">LESSON 165</span>
          <p>Watch the video below <b> Structure of the Court System </b> by Crash Course. Then, answer the questions
            that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/IGyx5UEwgtA?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H "/>
          1. Why is the American Court system hierarchical?<br/>
          2. How many federal US District Courts are there?<br/>
          3. How many federal appeals courts are there?<br/>
          4. What are the four scenarios where the federal courts have original jurisdiction?<br/>
          5. How does a case get to the Supreme Court?<br/>
          6. When does the Supreme Court have original jurisdiction?<br/>
          7. What is the criteria for an appeals case to make it to the Supreme Court?<br/>
          8. How do the justices decide to hear a case?<br/>
          9. What are the cases the courts will almost always take?<br/>
          10. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
          Game</a> for 5-10 minutes and write your final score here.<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener165} value={SS8Essay165}/>

          <span className="days">LESSON 166</span>
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
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener166} value={SS8Essay166}/>

          <span className="days">LESSON 167</span>
          <p>Watch the video below <b> Supreme Court of the United States Procedures</b> by Crash Course. Then, answer
            the questions that follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/7sualy8OiKk?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. If you have lost your appeal in the lower courts, and still think the decision is wrong, what can you do
          to appeal to the Supreme Court?<br/>
          2. Identify what that term is?<br/>
          3. What is the Rule of 4?<br/>
          4. What is an Amicus Curiae, and who writes them?<br/>
          5. What is the difference between dissenting opinion and concurring opinion?<br/>
          6. Explain the steps into getting a case chosen to be heard in the Supreme Court?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener167} value={SS8Essay167}/>

          <span className="days">LESSON 168</span>
          <p>Watch the video below <b> Judicial Review</b> by Crash Course. Then, answer the questions that follow. </p>
          <br/>
          <Video videoUrl="https://www.youtube.com/embed/mWYFwl93uCM?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is the term to declare laws unconstitutional?<br/>
          2. Where does the power to review and overturn state’s decisions come from?<br/>
          3. What do federal courts have the power to review?<br/>
          4. Which case did the Supreme Court grant itself the power of judicial review?<br/>
          5. What is precedent?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener168} value={SS8Essay168}/>

          <span className="days">LESSON 169</span>
          <p>Watch the video below <b> Civil Rights & Liberties</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/kbwsF-A2sTg?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H "/>
          1. What’s the difference between civil rights and liberties?<br/>
          2. What item established most civil liberties for the United States?<br/>
          3. What amendment provided “equal protection” and “due process” in the United States?<br/>
          4. What is selective incorporation?<br/>
          5. Give an example of a court case which used selective incorporation?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener169} value={SS8Essay169}/>

          <span className="days">LESSON 170</span>
          <p>Watch the video below <b> Freedom of Religion</b> by Crash Course. Then, answer the questions that follow.

            <Video videoUrl="https://www.youtube.com/embed/kbwsF-A2sTg?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H "/>
            1. What does Jurisprudence mean?<br/>
            2. Define the Establishment Clause.<br/>
            3. What Happened in Lemon v Kurtzmen?<br/>
            4. What is the Lemon Test?<br/>
            5. What happened in Engel v Vitale?<br/></p>
          <p>After you answer the questions above, play the <a
            href="https://bensguide.gpo.gov/states5/game.html" rel="noreferrer" target="_blank"> US Map Game by Ben's
            Guide</a> for 5-10 minutes.</p>

          <textarea className="textArea" onChange={onChangeSS8Listener170} value={SS8Essay170}/>

          <span className="days">LESSON 171</span>
          <p>Watch the video below <b> Freedom of Speech </b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/Zeeq0qaEaLw?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Why does the government only protect preferred speech not private institutions? Would they not
          have that power in the commerce clause?<br/>
          2. Why is the right of speech not absolute? Give an example of when someone should not be allowed to say
          whatever they want.<br/>
          3. Do students possess the same right to freedom of speech as adult voters?<br/>
          4. What tool is used to protect the unprotected speech?<br/>
          5. Is freedom of speech on the internet the same as in person?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener171} value={SS8Essay171}/>

          <span className="days">LESSON 172</span>
          <p>Watch the video below <b> Freedom of the Press </b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video videoUrl="https://www.youtube.com/embed/Vtpd0EbaFoQ?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is prior restraint? What Supreme Court case said it was not allowed?<br/>
          2. What can the government do to prevent newspapers from lying about officials?<br/>
          3. What is the chilling effect?<br/>
          4. What was the ruling outcome of New York Times v. Sullivan?<br/>
          5. What is one exception to the extent of First Amendment protection?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener172} value={SS8Essay172}/>

          <span className="days">LESSON 173</span>
          <p>Watch the video below <b> Search and Seizure</b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/_4O1OlGyTuU?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Which amendments can you find the civil liberties of the criminal procedure?<br/>
          2. Where do officers of the law have to go for a warrant to search? What must they have to receive a
          warrant?<br/>
          3. If an officer has a warrant to check your yard, is he able to check inside the house?<br/>
          4. When a cop pulls you over for speeding violations and finds illegal marijuana in the car with you, is he
          able to arrest you for this?<br/>
          5. What is the exclusionary rule?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener173} value={SS8Essay173}/>

          <span className="days">LESSON 174</span>
          <p>Watch the video below <b> Due Process of Law</b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/UyHWRXAAgmQ?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. For most criminal cases, who is the prosecution? Federal or State?<br/>
          2. Which amendments in the Bill of Rights deal with due process of law?<br/>
          3. What are the two types of due process? Define them.the courts.<br/>
          4. What is the 14th Amendment targeted towards?<br/>
          5. What should you do if you are approached for questions by “government agents”?<br/>
          <textarea className="textArea" onChange={onChangeSS8Listener174} value={SS8Essay174}/>

          <span className="days">LESSON 175</span>
          <p>Watch the video below <b> Equal Protection</b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/qKK5KVI9_Q8?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. Explain the differences between civil rights and civil liberties.<br/>
          2. What is a protected class? What is the government's purpose in defining them?<br/>
          3. List the 5 steps of strict scrutiny.<br/>
          4. Define rational basis scrutiny and intermediate scrutiny.<br/>
          5. What are some historical applications of the Fourteenth Amendment?<br/>
          6. Play the <a href="https://online.seterra.com/en/vgp/3003" rel="noreferrer" target="_blank"> Map Quiz
          Game</a> for 5-10 minutes and write your final score here.<br/> <textarea className="textArea"
                                                                                    onChange={onChangeSS8Listener175}
                                                                                    value={SS8Essay175}/>

          <span className="days">LESSON 176</span>
          <p>Watch the video below <b> Public Opinion</b> by Crash Course. Then, answer the questions that follow. </p>
          <br/>
          <Video videoUrl="https://www.youtube.com/embed/WJLDgb8m3K0?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. How are government and politics different?<br/>
          2. How did politicians incorporate democracy into the republic that is the United States government if
          people aren’t sure of what they want politically?<br/>
          3. What is Condorcet’s Jury Theorem and how does it apply to public opinion?<br/>
          4. How does public opinion through polling affect politicians?<br/>
          5. How can polls skew public opinion?<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener176} value={SS8Essay176}/>

          <span className="days">LESSON 177</span>
          <p>Watch the video below <b> Shaping Public Opinion</b> by Crash Course. Then, answer the questions that
            follow. </p>
          <Video
            videoUrl="https://www.youtube.com/embed/NflULVECAFQ?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8HP-yviKu8Odo?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. How does a person’s political ideology influence their opinions on politics?<br/>
          2. How does the president use the media to influence public opinion on policy?<br/>
          3. How does the economy or the general well-being of the times influence public opinion?<br/>
          4. How does the media shape public opinion?<br/>
          5. How does the media help interest groups to spread their message?<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener177} value={SS8Essay177}/>

          <span className="days">LESSON 178</span>
          <p>Watch the video below <b> Political Ideology </b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/j_k_k-bHigM?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What do Conservatives believe?<br/>
          2. What do Liberals believe?<br/>
          3. How do people acquire their political ideologies (Political Socialization)?<br/>
          4. How do social groups influence political ideology identification?<br/>
          5. How does family influence political ideology identification?<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener178} value={SS8Essay178}/>

          <span className="days">LESSON 179</span>
          <p>Watch the video below <b> Political Parties</b> by Crash Course. Then, answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/VEmOUHxessE?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"/>
          1. What is a political party and their goals?<br/>
          2. What are three reasons why we have political parties?<br/>
          3. What are the 5 main functions of political parties?<br/>
          4. What is the difference between open and closed primaries?<br/>
          5. What kind of relationship does the president have with it’s political party? Explain.<br/>

          <textarea className="textArea" onChange={onChangeSS8Listener179} value={SS8Essay179}/>

          <span className="days">LESSON 180</span>
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
            5. After your jet lands, how will you get to this place? (Examples include: <i>I will take a cab. It’s
              30 minutes
              from the airport </i>... <i>I will need to get a GPS and trek 3 days into the jungle to find
              it </i>... <i>A
              helicopter is the only way to get there.</i>) <br/>
            6. How long will you stay there and where will you stay? (Examples: I will stay <i>in a hut on the
              beach</i> ...
            <i>in a treehouse in the jungle</i> ...<i>in a rented camper so I can tour the area.</i>)<br/>
            7. What language do they speak?<br/>
            8. What things/activities will you do when you get there?<br/>
            <br/></p>
          <textarea className="textArea" onChange={onChangeSS8Listener180}
                    value={SS8Essay180}/>
        </section>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 8th Grade Social Studies! </h3>
    </form>
  )
}
export default SS8Component