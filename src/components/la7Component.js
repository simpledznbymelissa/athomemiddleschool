import React from "react"
import Video from "./video"
import "../styles/styles.css"
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

const LA7Component = ({ data }) => {

  const [la7Essay1, setla7Essay1] = useLocalStorageState("la7Essay1", "")
  const [la7Essay2, setla7Essay2] = useLocalStorageState("la7Essay2", "")
  const [la7Essay3, setla7Essay3] = useLocalStorageState("la7Essay3", "")
  const [la7Essay4, setla7Essay4] = useLocalStorageState("la7Essay4", "")
  const [la7Essay5, setla7Essay5] = useLocalStorageState("la7Essay5", "")
  const [la7Essay6, setla7Essay6] = useLocalStorageState("la7Essay6", "")
  const [la7Essay7, setla7Essay7] = useLocalStorageState("la7Essay7", "")
  const [la7Essay8, setla7Essay8] = useLocalStorageState("la7Essay8", "")
  const [la7Essay9, setla7Essay9] = useLocalStorageState("la7Essay9", "")
  const [la7Essay10, setla7Essay10] = useLocalStorageState("la7Essay10", "")
  const [la7Essay11, setla7Essay11] = useLocalStorageState("la7Essay11", "")
  const [la7Essay12, setla7Essay12] = useLocalStorageState("la7Essay12", "")
  const [la7Essay13, setla7Essay13] = useLocalStorageState("la7Essay13", "")
  const [la7Essay14, setla7Essay14] = useLocalStorageState("la7Essay14", "")
  const [la7Essay15, setla7Essay15] = useLocalStorageState("la7Essay15", "")
  const [la7Essay16, setla7Essay16] = useLocalStorageState("la7Essay16", "")
  const [la7Essay17, setla7Essay17] = useLocalStorageState("la7Essay17", "")
  const [la7Essay18, setla7Essay18] = useLocalStorageState("la7Essay18", "")
  const [la7Essay19, setla7Essay19] = useLocalStorageState("la7Essay19", "")
  const [la7Essay20, setla7Essay20] = useLocalStorageState("la7Essay20", "")
  const [la7Essay21, setla7Essay21] = useLocalStorageState("la7Essay21", "")
  const [la7Essay22, setla7Essay22] = useLocalStorageState("la7Essay22", "")
  const [la7Essay23, setla7Essay23] = useLocalStorageState("la7Essay23", "")
  const [la7Essay24, setla7Essay24] = useLocalStorageState("la7Essay24", "")
  const [la7Essay25, setla7Essay25] = useLocalStorageState("la7Essay25", "")
  const [la7Essay26, setla7Essay26] = useLocalStorageState("la7Essay26", "")
  const [la7Essay27, setla7Essay27] = useLocalStorageState("la7Essay27", "")
  const [la7Essay28, setla7Essay28] = useLocalStorageState("la7Essay28", "")
  const [la7Essay29, setla7Essay29] = useLocalStorageState("la7Essay29", "")
  const [la7Essay30, setla7Essay30] = useLocalStorageState("la7Essay30", "")
  const [la7Essay31, setla7Essay31] = useLocalStorageState("la7Essay31", "")
  const [la7Essay32, setla7Essay32] = useLocalStorageState("la7Essay32", "")
  const [la7Essay33, setla7Essay33] = useLocalStorageState("la7Essay33", "")
  const [la7Essay34, setla7Essay34] = useLocalStorageState("la7Essay34", "")
  const [la7Essay35, setla7Essay35] = useLocalStorageState("la7Essay35", "")
  const [la7Essay36, setla7Essay36] = useLocalStorageState("la7Essay36", "")
  const [la7Essay37, setla7Essay37] = useLocalStorageState("la7Essay37", "")
  const [la7Essay38, setla7Essay38] = useLocalStorageState("la7Essay38", "")
  const [la7Essay39, setla7Essay39] = useLocalStorageState("la7Essay39", "")
  const [la7Essay40, setla7Essay40] = useLocalStorageState("la7Essay40", "")
  const [la7Essay41, setla7Essay41] = useLocalStorageState("la7Essay41", "")
  const [la7Essay42, setla7Essay42] = useLocalStorageState("la7Essay42", "")
  const [la7Essay43, setla7Essay43] = useLocalStorageState("la7Essay43", "")
  const [la7Essay44, setla7Essay44] = useLocalStorageState("la7Essay44", "")
  const [la7Essay45, setla7Essay45] = useLocalStorageState("la7Essay45", "")
  const [la7Essay46, setla7Essay46] = useLocalStorageState("la7Essay46", "")
  const [la7Essay47, setla7Essay47] = useLocalStorageState("la7Essay47", "")
  const [la7Essay48, setla7Essay48] = useLocalStorageState("la7Essay48", "")
  const [la7Essay49, setla7Essay49] = useLocalStorageState("la7Essay49", "")
  const [la7Essay50, setla7Essay50] = useLocalStorageState("la7Essay50", "")
  const [la7Essay51, setla7Essay51] = useLocalStorageState("la7Essay52", "")
  const [la7Essay52, setla7Essay52] = useLocalStorageState("la7Essay53", "")
  const [la7Essay53, setla7Essay53] = useLocalStorageState("la7Essay54", "")
  const [la7Essay54, setla7Essay54] = useLocalStorageState("la7Essay54", "")
  const [la7Essay55, setla7Essay55] = useLocalStorageState("la7Essay5", "")
  const [la7Essay56, setla7Essay56] = useLocalStorageState("la7Essay56", "")
  const [la7Essay57, setla7Essay57] = useLocalStorageState("la7Essay57", "")
  const [la7Essay58, setla7Essay58] = useLocalStorageState("la7Essay58", "")
  const [la7Essay59, setla7Essay59] = useLocalStorageState("la7Essay59", "")
  const [la7Essay60, setla7Essay60] = useLocalStorageState("la7Essay60", "")
  const [la7Essay61, setla7Essay61] = useLocalStorageState("la7Essay61", "")
  const [la7Essay62, setla7Essay62] = useLocalStorageState("la7Essay62", "")
  const [la7Essay63, setla7Essay63] = useLocalStorageState("la7Essay63", "")
  const [la7Essay64, setla7Essay64] = useLocalStorageState("la7Essay64", "")
  const [la7Essay65, setla7Essay65] = useLocalStorageState("la7Essay65", "")
  const [la7Essay66, setla7Essay66] = useLocalStorageState("la7Essay66", "")
  const [la7Essay67, setla7Essay67] = useLocalStorageState("la7Essay67", "")
  const [la7Essay68, setla7Essay68] = useLocalStorageState("la7Essay68", "")
  const [la7Essay69, setla7Essay69] = useLocalStorageState("la7Essay69", "")
  const [la7Essay70, setla7Essay70] = useLocalStorageState("la7Essay70", "")
  const [la7Essay71, setla7Essay71] = useLocalStorageState("la7Essay71", "")
  const [la7Essay72, setla7Essay72] = useLocalStorageState("la7Essay72", "")
  const [la7Essay73, setla7Essay73] = useLocalStorageState("la7Essay73", "")
  const [la7Essay74, setla7Essay74] = useLocalStorageState("la7Essay74", "")
  const [la7Essay75, setla7Essay75] = useLocalStorageState("la7Essay75", "")
  const [la7Essay76, setla7Essay76] = useLocalStorageState("la7Essay76", "")
  const [la7Essay77, setla7Essay77] = useLocalStorageState("la7Essay77", "")
  const [la7Essay78, setla7Essay78] = useLocalStorageState("la7Essay78", "")
  const [la7Essay79, setla7Essay79] = useLocalStorageState("la7Essay79", "")
  const [la7Essay80, setla7Essay80] = useLocalStorageState("la7Essay80", "")
  const [la7Essay81, setla7Essay81] = useLocalStorageState("la7Essay81", "")
  const [la7Essay82, setla7Essay82] = useLocalStorageState("la7Essay82", "")
  const [la7Essay83, setla7Essay83] = useLocalStorageState("la7Essay83", "")
  const [la7Essay84, setla7Essay84] = useLocalStorageState("la7Essay84", "")
  const [la7Essay85, setla7Essay85] = useLocalStorageState("la7Essay85", "")
  const [la7Essay86, setla7Essay86] = useLocalStorageState("la7Essay86", "")
  const [la7Essay87, setla7Essay87] = useLocalStorageState("la7Essay87", "")
  const [la7Essay88, setla7Essay88] = useLocalStorageState("la7Essay88", "")
  const [la7Essay89, setla7Essay89] = useLocalStorageState("la7Essay89", "")
  const [la7Essay90, setla7Essay90] = useLocalStorageState("la7Essay90", "")
  const [la7Essay91, setla7Essay91] = useLocalStorageState("la7Essay91", "")
  const [la7Essay92, setla7Essay92] = useLocalStorageState("la7Essay93", "")
  const [la7Essay93, setla7Essay93] = useLocalStorageState("la7Essay94", "")
  const [la7Essay94, setla7Essay94] = useLocalStorageState("la7Essay95", "")
  const [la7Essay95, setla7Essay95] = useLocalStorageState("la7Essay96", "")
  const [la7Essay96, setla7Essay96] = useLocalStorageState("la7Essay97", "")
  const [la7Essay97, setla7Essay97] = useLocalStorageState("la7Essay98", "")
  const [la7Essay98, setla7Essay98] = useLocalStorageState("la7Essay98", "")
  const [la7Essay99, setla7Essay99] = useLocalStorageState("la7Essay99", "")
  const [la7Essay100, setla7Essay100] = useLocalStorageState("la7Essay100", "")
  const [la7Essay101, setla7Essay101] = useLocalStorageState("la7Essay101", "")
  const [la7Essay102, setla7Essay102] = useLocalStorageState("la7Essay102", "")
  const [la7Essay103, setla7Essay103] = useLocalStorageState("la7Essay103", "")
  const [la7Essay104, setla7Essay104] = useLocalStorageState("la7Essay104", "")
  const [la7Essay105, setla7Essay105] = useLocalStorageState("la7Essay105", "")
  const [la7Essay106, setla7Essay106] = useLocalStorageState("la7Essay106", "")
  const [la7Essay107, setla7Essay107] = useLocalStorageState("la7Essay107", "")
  const [la7Essay108, setla7Essay108] = useLocalStorageState("la7Essay108", "")
  const [la7Essay109, setla7Essay109] = useLocalStorageState("la7Essay109", "")
  const [la7Essay110, setla7Essay110] = useLocalStorageState("la7Essay110", "")
  const [la7Essay111, setla7Essay111] = useLocalStorageState("la7Essay111", "")
  const [la7Essay112, setla7Essay112] = useLocalStorageState("la7Essay112", "")
  const [la7Essay113, setla7Essay113] = useLocalStorageState("la7Essay113", "")
  const [la7Essay114, setla7Essay114] = useLocalStorageState("la7Essay114", "")
  const [la7Essay115, setla7Essay115] = useLocalStorageState("la7Essay115", "")
  const [la7Essay116, setla7Essay116] = useLocalStorageState("la7Essay116", "")
  const [la7Essay117, setla7Essay117] = useLocalStorageState("la7Essay117", "")
  const [la7Essay118, setla7Essay118] = useLocalStorageState("la7Essay118", "")
  const [la7Essay119, setla7Essay119] = useLocalStorageState("la7Essay119", "")
  const [la7Essay120, setla7Essay120] = useLocalStorageState("la7Essay120", "")
  const [la7Essay121, setla7Essay121] = useLocalStorageState("la7Essay121", "")
  const [la7Essay122, setla7Essay122] = useLocalStorageState("la7Essay122", "")
  const [la7Essay123, setla7Essay123] = useLocalStorageState("la7Essay123", "")
  const [la7Essay124, setla7Essay124] = useLocalStorageState("la7Essay124", "")
  const [la7Essay125, setla7Essay125] = useLocalStorageState("la7Essay125", "")
  const [la7Essay126, setla7Essay126] = useLocalStorageState("la7Essay126", "")
  const [la7Essay127, setla7Essay127] = useLocalStorageState("la7Essay127", "")
  const [la7Essay128, setla7Essay128] = useLocalStorageState("la7Essay128", "")
  const [la7Essay129, setla7Essay129] = useLocalStorageState("la7Essay129", "")
  const [la7Essay130, setla7Essay130] = useLocalStorageState("la7Essay130", "")
  const [la7Essay131, setla7Essay131] = useLocalStorageState("la7Essay131", "")
  const [la7Essay132, setla7Essay132] = useLocalStorageState("la7Essay132", "")
  const [la7Essay133, setla7Essay133] = useLocalStorageState("la7Essay133", "")
  const [la7Essay134, setla7Essay134] = useLocalStorageState("la7Essay134", "")
  const [la7Essay135, setla7Essay135] = useLocalStorageState("la7Essay135", "")
  const [la7Essay136, setla7Essay136] = useLocalStorageState("la7Essay136", "")
  const [la7Essay137, setla7Essay137] = useLocalStorageState("la7Essay137", "")
  const [la7Essay138, setla7Essay138] = useLocalStorageState("la7Essay138", "")
  const [la7Essay139, setla7Essay139] = useLocalStorageState("la7Essay139", "")
  const [la7Essay140, setla7Essay140] = useLocalStorageState("la7Essay140", "")
  const [la7Essay141, setla7Essay141] = useLocalStorageState("la7Essay141", "")
  const [la7Essay142, setla7Essay142] = useLocalStorageState("la7Essay142", "")
  const [la7Essay143, setla7Essay143] = useLocalStorageState("la7Essay143", "")
  const [la7Essay144, setla7Essay144] = useLocalStorageState("la7Essay144", "")
  const [la7Essay145, setla7Essay145] = useLocalStorageState("la7Essay145", "")
  const [la7Essay146, setla7Essay146] = useLocalStorageState("la7Essay146", "")
  const [la7Essay147, setla7Essay147] = useLocalStorageState("la7Essay147", "")
  const [la7Essay148, setla7Essay148] = useLocalStorageState("la7Essay148", "")
  const [la7Essay149, setla7Essay149] = useLocalStorageState("la7Essay149", "")
  const [la7Essay150, setla7Essay150] = useLocalStorageState("la7Essay150", "")
  const [la7Essay151, setla7Essay151] = useLocalStorageState("la7Essay151", "")
  const [la7Essay152, setla7Essay152] = useLocalStorageState("la7Essay152", "")
  const [la7Essay153, setla7Essay153] = useLocalStorageState("la7Essay153", "")
  const [la7Essay154, setla7Essay154] = useLocalStorageState("la7Essay154", "")
  const [la7Essay155, setla7Essay155] = useLocalStorageState("la7Essay155", "")
  const [la7Essay156, setla7Essay156] = useLocalStorageState("la7Essay156", "")
  const [la7Essay157, setla7Essay157] = useLocalStorageState("la7Essay157", "")
  const [la7Essay158, setla7Essay158] = useLocalStorageState("la7Essay158", "")
  const [la7Essay159, setla7Essay159] = useLocalStorageState("la7Essay159", "")
  const [la7Essay160, setla7Essay160] = useLocalStorageState("la7Essay160", "")
  const [la7Essay161, setla7Essay161] = useLocalStorageState("la7Essay161", "")
  const [la7Essay162, setla7Essay162] = useLocalStorageState("la7Essay162", "")
  const [la7Essay163, setla7Essay163] = useLocalStorageState("la7Essay163", "")
  const [la7Essay164, setla7Essay164] = useLocalStorageState("la7Essay164", "")
  const [la7Essay165, setla7Essay165] = useLocalStorageState("la7Essay165", "")
  const [la7Essay166, setla7Essay166] = useLocalStorageState("la7Essay166", "")
  const [la7Essay167, setla7Essay167] = useLocalStorageState("la7Essay167", "")
  const [la7Essay168, setla7Essay168] = useLocalStorageState("la7Essay168", "")
  const [la7Essay169, setla7Essay169] = useLocalStorageState("la7Essay169", "")
  const [la7Essay170, setla7Essay170] = useLocalStorageState("la7Essay170", "")
  const [la7Essay171, setla7Essay171] = useLocalStorageState("la7Essay171", "")
  const [la7Essay172, setla7Essay172] = useLocalStorageState("la7Essay172", "")
  const [la7Essay173, setla7Essay173] = useLocalStorageState("la7Essay173", "")
  const [la7Essay174, setla7Essay174] = useLocalStorageState("la7Essay174", "")
  const [la7Essay175, setla7Essay175] = useLocalStorageState("la7Essay175", "")
  const [la7Essay176, setla7Essay176] = useLocalStorageState("la7Essay176", "")
  const [la7Essay177, setla7Essay177] = useLocalStorageState("la7Essay177", "")
  const [la7Essay178, setla7Essay178] = useLocalStorageState("la7Essay178", "")
  const [la7Essay179, setla7Essay179] = useLocalStorageState("la7Essay179", "")
  const [la7Essay180, setla7Essay180] = useLocalStorageState("la7Essay180", "")


  const onChangela7Listener1 = (event) => {
    setla7Essay1(event.target.value)
  }
  const onChangela7Listener2 = (event) => {
    setla7Essay2(event.target.value)
  }
  const onChangela7Listener3 = (event) => {
    setla7Essay3(event.target.value)
  }
  const onChangela7Listener4 = (event) => {
    setla7Essay4(event.target.value)
  }
  const onChangela7Listener5 = (event) => {
    setla7Essay5(event.target.value)
  }
  const onChangela7Listener6 = (event) => {
    setla7Essay6(event.target.value)
  }
  const onChangela7Listener7 = (event) => {
    setla7Essay7(event.target.value)
  }
  const onChangela7Listener8 = (event) => {
    setla7Essay8(event.target.value)
  }
  const onChangela7Listener9 = (event) => {
    setla7Essay9(event.target.value)
  }
  const onChangela7Listener10 = (event) => {
    setla7Essay10(event.target.value)
  }
  const onChangela7Listener11 = (event) => {
    setla7Essay11(event.target.value)
  }
  const onChangela7Listener12 = (event) => {
    setla7Essay12(event.target.value)
  }
  const onChangela7Listener13 = (event) => {
    setla7Essay13(event.target.value)
  }
  const onChangela7Listener14 = (event) => {
    setla7Essay14(event.target.value)
  }
  const onChangela7Listener15 = (event) => {
    setla7Essay15(event.target.value)
  }
  const onChangela7Listener16 = (event) => {
    setla7Essay16(event.target.value)
  }
  const onChangela7Listener17 = (event) => {
    setla7Essay17(event.target.value)
  }
  const onChangela7Listener18 = (event) => {
    setla7Essay18(event.target.value)
  }
  const onChangela7Listener19 = (event) => {
    setla7Essay19(event.target.value)
  }
  const onChangela7Listener20 = (event) => {
    setla7Essay20(event.target.value)
  }
  const onChangela7Listener21 = (event) => {
    setla7Essay21(event.target.value)
  }
  const onChangela7Listener22 = (event) => {
    setla7Essay22(event.target.value)
  }
  const onChangela7Listener23 = (event) => {
    setla7Essay23(event.target.value)
  }
  const onChangela7Listener24 = (event) => {
    setla7Essay24(event.target.value)
  }
  const onChangela7Listener25 = (event) => {
    setla7Essay25(event.target.value)
  }
  const onChangela7Listener26 = (event) => {
    setla7Essay26(event.target.value)
  }
  const onChangela7Listener27 = (event) => {
    setla7Essay27(event.target.value)
  }
  const onChangela7Listener28 = (event) => {
    setla7Essay28(event.target.value)
  }
  const onChangela7Listener29 = (event) => {
    setla7Essay29(event.target.value)
  }
  const onChangela7Listener30 = (event) => {
    setla7Essay30(event.target.value)
  }
  const onChangela7Listener31 = (event) => {
    setla7Essay31(event.target.value)
  }
  const onChangela7Listener32 = (event) => {
    setla7Essay32(event.target.value)
  }
  const onChangela7Listener33 = (event) => {
    setla7Essay33(event.target.value)
  }
  const onChangela7Listener34 = (event) => {
    setla7Essay34(event.target.value)
  }
  const onChangela7Listener35 = (event) => {
    setla7Essay35(event.target.value)
  }
  const onChangela7Listener36 = (event) => {
    setla7Essay36(event.target.value)
  }
  const onChangela7Listener37 = (event) => {
    setla7Essay37(event.target.value)
  }
  const onChangela7Listener38 = (event) => {
    setla7Essay38(event.target.value)
  }
  const onChangela7Listener39 = (event) => {
    setla7Essay39(event.target.value)
  }
  const onChangela7Listener40 = (event) => {
    setla7Essay40(event.target.value)
  }
  const onChangela7Listener41 = (event) => {
    setla7Essay41(event.target.value)
  }
  const onChangela7Listener42 = (event) => {
    setla7Essay42(event.target.value)
  }
  const onChangela7Listener43 = (event) => {
    setla7Essay43(event.target.value)
  }
  const onChangela7Listener44 = (event) => {
    setla7Essay44(event.target.value)
  }
  const onChangela7Listener45 = (event) => {
    setla7Essay45(event.target.value)
  }
  const onChangela7Listener46 = (event) => {
    setla7Essay46(event.target.value)
  }
  const onChangela7Listener47 = (event) => {
    setla7Essay47(event.target.value)
  }
  const onChangela7Listener48 = (event) => {
    setla7Essay48(event.target.value)
  }
  const onChangela7Listener49 = (event) => {
    setla7Essay49(event.target.value)
  }
  const onChangela7Listener50 = (event) => {
    setla7Essay50(event.target.value)
  }
  const onChangela7Listener51 = (event) => {
    setla7Essay51(event.target.value)
  }
  const onChangela7Listener52 = (event) => {
    setla7Essay52(event.target.value)
  }
  const onChangela7Listener53 = (event) => {
    setla7Essay53(event.target.value)
  }
  const onChangela7Listener54 = (event) => {
    setla7Essay54(event.target.value)
  }
  const onChangela7Listener55 = (event) => {
    setla7Essay55(event.target.value)
  }
  const onChangela7Listener56 = (event) => {
    setla7Essay56(event.target.value)
  }
  const onChangela7Listener57 = (event) => {
    setla7Essay57(event.target.value)
  }
  const onChangela7Listener58 = (event) => {
    setla7Essay58(event.target.value)
  }
  const onChangela7Listener59 = (event) => {
    setla7Essay59(event.target.value)
  }
  const onChangela7Listener60 = (event) => {
    setla7Essay60(event.target.value)
  }
  const onChangela7Listener61 = (event) => {
    setla7Essay61(event.target.value)
  }
  const onChangela7Listener62 = (event) => {
    setla7Essay62(event.target.value)
  }
  const onChangela7Listener63 = (event) => {
    setla7Essay63(event.target.value)
  }
  const onChangela7Listener64 = (event) => {
    setla7Essay64(event.target.value)
  }
  const onChangela7Listener65 = (event) => {
    setla7Essay65(event.target.value)
  }
  const onChangela7Listener66 = (event) => {
    setla7Essay66(event.target.value)
  }
  const onChangela7Listener67 = (event) => {
    setla7Essay67(event.target.value)
  }
  const onChangela7Listener68 = (event) => {
    setla7Essay68(event.target.value)
  }
  const onChangela7Listener69 = (event) => {
    setla7Essay69(event.target.value)
  }
  const onChangela7Listener70 = (event) => {
    setla7Essay70(event.target.value)
  }
  const onChangela7Listener71 = (event) => {
    setla7Essay71(event.target.value)
  }
  const onChangela7Listener72 = (event) => {
    setla7Essay72(event.target.value)
  }
  const onChangela7Listener73 = (event) => {
    setla7Essay73(event.target.value)
  }
  const onChangela7Listener74 = (event) => {
    setla7Essay74(event.target.value)
  }
  const onChangela7Listener75 = (event) => {
    setla7Essay75(event.target.value)
  }
  const onChangela7Listener76 = (event) => {
    setla7Essay76(event.target.value)
  }
  const onChangela7Listener77 = (event) => {
    setla7Essay77(event.target.value)
  }
  const onChangela7Listener78 = (event) => {
    setla7Essay78(event.target.value)
  }
  const onChangela7Listener79 = (event) => {
    setla7Essay79(event.target.value)
  }
  const onChangela7Listener80 = (event) => {
    setla7Essay80(event.target.value)
  }
  const onChangela7Listener81 = (event) => {
    setla7Essay81(event.target.value)
  }
  const onChangela7Listener82 = (event) => {
    setla7Essay82(event.target.value)
  }
  const onChangela7Listener83 = (event) => {
    setla7Essay83(event.target.value)
  }
  const onChangela7Listener84 = (event) => {
    setla7Essay84(event.target.value)
  }
  const onChangela7Listener85 = (event) => {
    setla7Essay85(event.target.value)
  }
  const onChangela7Listener86 = (event) => {
    setla7Essay86(event.target.value)
  }
  const onChangela7Listener87 = (event) => {
    setla7Essay87(event.target.value)
  }
  const onChangela7Listener88 = (event) => {
    setla7Essay88(event.target.value)
  }
  const onChangela7Listener89 = (event) => {
    setla7Essay89(event.target.value)
  }
  const onChangela7Listener90 = (event) => {
    setla7Essay90(event.target.value)
  }
  const onChangela7Listener91 = (event) => {
    setla7Essay91(event.target.value)
  }
  const onChangela7Listener92 = (event) => {
    setla7Essay92(event.target.value)
  }
  const onChangela7Listener93 = (event) => {
    setla7Essay93(event.target.value)
  }
  const onChangela7Listener94 = (event) => {
    setla7Essay94(event.target.value)
  }
  const onChangela7Listener95 = (event) => {
    setla7Essay95(event.target.value)
  }
  const onChangela7Listener96 = (event) => {
    setla7Essay96(event.target.value)
  }
  const onChangela7Listener97 = (event) => {
    setla7Essay97(event.target.value)
  }
  const onChangela7Listener98 = (event) => {
    setla7Essay98(event.target.value)
  }
  const onChangela7Listener99 = (event) => {
    setla7Essay99(event.target.value)
  }
  const onChangela7Listener100 = (event) => {
    setla7Essay100(event.target.value)
  }
  const onChangela7Listener101 = (event) => {
    setla7Essay101(event.target.value)
  }
  const onChangela7Listener102 = (event) => {
    setla7Essay102(event.target.value)
  }
  const onChangela7Listener103 = (event) => {
    setla7Essay103(event.target.value)
  }
  const onChangela7Listener104 = (event) => {
    setla7Essay104(event.target.value)
  }
  const onChangela7Listener105 = (event) => {
    setla7Essay105(event.target.value)
  }
  const onChangela7Listener106 = (event) => {
    setla7Essay106(event.target.value)
  }
  const onChangela7Listener107 = (event) => {
    setla7Essay107(event.target.value)
  }
  const onChangela7Listener108 = (event) => {
    setla7Essay108(event.target.value)
  }
  const onChangela7Listener109 = (event) => {
    setla7Essay109(event.target.value)
  }
  const onChangela7Listener110 = (event) => {
    setla7Essay110(event.target.value)
  }
  const onChangela7Listener111 = (event) => {
    setla7Essay111(event.target.value)
  }
  const onChangela7Listener112 = (event) => {
    setla7Essay112(event.target.value)
  }
  const onChangela7Listener113 = (event) => {
    setla7Essay113(event.target.value)
  }
  const onChangela7Listener114 = (event) => {
    setla7Essay114(event.target.value)
  }
  const onChangela7Listener115 = (event) => {
    setla7Essay115(event.target.value)
  }
  const onChangela7Listener116 = (event) => {
    setla7Essay116(event.target.value)
  }
  const onChangela7Listener117 = (event) => {
    setla7Essay117(event.target.value)
  }
  const onChangela7Listener118 = (event) => {
    setla7Essay118(event.target.value)
  }
  const onChangela7Listener119 = (event) => {
    setla7Essay119(event.target.value)
  }
  const onChangela7Listener120 = (event) => {
    setla7Essay120(event.target.value)
  }
  const onChangela7Listener121 = (event) => {
    setla7Essay121(event.target.value)
  }
  const onChangela7Listener122 = (event) => {
    setla7Essay122(event.target.value)
  }
  const onChangela7Listener123 = (event) => {
    setla7Essay123(event.target.value)
  }
  const onChangela7Listener124 = (event) => {
    setla7Essay124(event.target.value)
  }
  const onChangela7Listener125 = (event) => {
    setla7Essay125(event.target.value)
  }
  const onChangela7Listener126 = (event) => {
    setla7Essay126(event.target.value)
  }
  const onChangela7Listener127 = (event) => {
    setla7Essay127(event.target.value)
  }
  const onChangela7Listener128 = (event) => {
    setla7Essay128(event.target.value)
  }
  const onChangela7Listener129 = (event) => {
    setla7Essay129(event.target.value)
  }
  const onChangela7Listener130 = (event) => {
    setla7Essay130(event.target.value)
  }
  const onChangela7Listener131 = (event) => {
    setla7Essay131(event.target.value)
  }
  const onChangela7Listener132 = (event) => {
    setla7Essay132(event.target.value)
  }
  const onChangela7Listener133 = (event) => {
    setla7Essay133(event.target.value)
  }
  const onChangela7Listener134 = (event) => {
    setla7Essay134(event.target.value)
  }
  const onChangela7Listener135 = (event) => {
    setla7Essay135(event.target.value)
  }
  const onChangela7Listener136 = (event) => {
    setla7Essay136(event.target.value)
  }
  const onChangela7Listener137 = (event) => {
    setla7Essay137(event.target.value)
  }
  const onChangela7Listener138 = (event) => {
    setla7Essay138(event.target.value)
  }
  const onChangela7Listener139 = (event) => {
    setla7Essay139(event.target.value)
  }
  const onChangela7Listener140 = (event) => {
    setla7Essay140(event.target.value)
  }
  const onChangela7Listener141 = (event) => {
    setla7Essay141(event.target.value)
  }
  const onChangela7Listener142 = (event) => {
    setla7Essay142(event.target.value)
  }
  const onChangela7Listener143 = (event) => {
    setla7Essay143(event.target.value)
  }
  const onChangela7Listener144 = (event) => {
    setla7Essay144(event.target.value)
  }
  const onChangela7Listener145 = (event) => {
    setla7Essay145(event.target.value)
  }
  const onChangela7Listener146 = (event) => {
    setla7Essay146(event.target.value)
  }
  const onChangela7Listener147 = (event) => {
    setla7Essay147(event.target.value)
  }
  const onChangela7Listener148 = (event) => {
    setla7Essay148(event.target.value)
  }
  const onChangela7Listener149 = (event) => {
    setla7Essay149(event.target.value)
  }
  const onChangela7Listener150 = (event) => {
    setla7Essay150(event.target.value)
  }
  const onChangela7Listener151 = (event) => {
    setla7Essay151(event.target.value)
  }
  const onChangela7Listener152 = (event) => {
    setla7Essay152(event.target.value)
  }
  const onChangela7Listener153 = (event) => {
    setla7Essay153(event.target.value)
  }
  const onChangela7Listener154 = (event) => {
    setla7Essay154(event.target.value)
  }
  const onChangela7Listener155 = (event) => {
    setla7Essay155(event.target.value)
  }
  const onChangela7Listener156 = (event) => {
    setla7Essay156(event.target.value)
  }
  const onChangela7Listener157 = (event) => {
    setla7Essay157(event.target.value)
  }
  const onChangela7Listener158 = (event) => {
    setla7Essay158(event.target.value)
  }
  const onChangela7Listener159 = (event) => {
    setla7Essay159(event.target.value)
  }
  const onChangela7Listener160 = (event) => {
    setla7Essay160(event.target.value)
  }
  const onChangela7Listener161 = (event) => {
    setla7Essay161(event.target.value)
  }
  const onChangela7Listener162 = (event) => {
    setla7Essay162(event.target.value)
  }
  const onChangela7Listener163 = (event) => {
    setla7Essay163(event.target.value)
  }
  const onChangela7Listener164 = (event) => {
    setla7Essay164(event.target.value)
  }
  const onChangela7Listener165 = (event) => {
    setla7Essay165(event.target.value)
  }
  const onChangela7Listener166 = (event) => {
    setla7Essay166(event.target.value)
  }
  const onChangela7Listener167 = (event) => {
    setla7Essay167(event.target.value)
  }
  const onChangela7Listener168 = (event) => {
    setla7Essay168(event.target.value)
  }
  const onChangela7Listener169 = (event) => {
    setla7Essay169(event.target.value)
  }
  const onChangela7Listener170 = (event) => {
    setla7Essay170(event.target.value)
  }
  const onChangela7Listener171 = (event) => {
    setla7Essay171(event.target.value)
  }
  const onChangela7Listener172 = (event) => {
    setla7Essay172(event.target.value)
  }
  const onChangela7Listener173 = (event) => {
    setla7Essay173(event.target.value)
  }
  const onChangela7Listener174 = (event) => {
    setla7Essay174(event.target.value)
  }
  const onChangela7Listener175 = (event) => {
    setla7Essay175(event.target.value)
  }
  const onChangela7Listener176 = (event) => {
    setla7Essay176(event.target.value)
  }
  const onChangela7Listener177 = (event) => {
    setla7Essay177(event.target.value)
  }
  const onChangela7Listener178 = (event) => {
    setla7Essay178(event.target.value)
  }
  const onChangela7Listener179 = (event) => {
    setla7Essay179(event.target.value)
  }
  const onChangela7Listener180 = (event) => {
    setla7Essay180(event.target.value)
  }

  return (
    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#83cae6",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#83cae6",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Language Arts</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/seventh" className='gradeLink'><h2 className="hero">7th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <div className="section-content">          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">In 7th Grade Language Arts, students will:
            <ul className="list">
              <li>Read several novels (listed below), articles and other assigned texts.</li>
              <li>Learn about different literary genres.</li>
              <li>Answer questions using details and facts from assigned reading.</li>
              <li>Summarize main ideas from chapters.</li>
              <li>Read, analyze and write poetry.</li>
              <li>Explore character development.</li>
              <li>Learn and apply grammar rules.</li>
              <li>Learn and apply vocabulary words.</li>
              <li>Write 5 paragraph essays (persuasive, personal narrative, book review, expository, biography).</li>
              <li>Write creative stories from different genres (fantasy, mystery, dystopian, science fiction, adventure).</li>
            </ul></p>
          <span className="days fadeIn">Books</span>
          <p className="margin-para fadeIn">The books required for this course are: <i>The Little Prince </i> by Antoine
            de
            Saint Exupéry, <i> Long Walk to Water </i> by Linda Sue Park, <i> Hatchet </i> by Gary
            Paulsen, <i> Esperanza Rising </i> by Pam Muñoz, <i>The Outsiders </i> by S.E. Hinton, <i>Out of My
              Mind</i> by Sharon Draper and <i>The Hobbit</i> by J.R.R. Tolkien.</p>
          <p className="margin-para fadeIn">Until you get a copy, the first chapter of each book is linked as a PDF. The novels
            are available at your local library, local bookstore, or can be purchased online. If the books are out of copyright, they
            are provided below as PDFs. </p>

          <p className="margin-para fadeIn">Users may encounter texts, videos or poetry they consider controversial, offensive, or inappropriate. It is the responsibility of the parent, guardian or teacher to review all materials before their student views them.</p>
          <h1 className="section-title fadeIn">Daily Lessons</h1>

          <span className="days">LESSON 1 </span>
          <p className="margin-para"> The first book you will read for this course is <a
            href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer" target="_blank"> <i>The
            Little Prince.</i> </a> The full book is available <a
            href={require("../resources/books/TheLittlePrince.pdf")}
            rel="noreferrer" target="_blank"> here as a PDF. </a> If you
            prefer a hard copy, it is available at your local library, local bookstore, and can be purchased online.
          </p>
          <p className="topBottom"> The Little Prince is a fable and modern classic by French aviator and writer Antoine
            de Saint-Exupéry, published in 1943. The tale tells the story of a child, the little prince, who travels the
            universe gaining wisdom. </p>

          <a href={require("../resources/books/TheLittlePrince.pdf")}
             rel="noreferrer"
             target="_blank"><img src={require("../../public/images/bookCovers/littlePrince.jpg")}
                                  alt="The Alchemist novel"/></a>
          <br/>
          <p>After you watch the video below, read <a href={require("../resources/books/TheLittlePrince.pdf")}
                                                      rel="noreferrer"
                                                      target="_blank">CHAPTER 1 of <i> The Little Prince. </i> </a> Then
            answer the questions that follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/FGAtsGgyzw4"/>
          <p>
            <ol className="vocab">
              <li>Who is the narrator of The Little Prince and what type of narration is used? Example: 1st person, 2nd
                person, etc.
              </li>
              <li>What year was this novel written?</li>
              <li>What did the narrator once draw as a child?</li>
              <li>What did the adults think the child’s drawing looked like?</li>
              <li>What did the child ask the adults when he showed them the picture?</li>
              <li>How many drawings did the child make?</li>
              <li>What career did the narrator give up in order to become a pilot?</li>
              <li>The pilot tells us that throughout his life, when he met a clear-sighted adult he would always show
                them what?
              </li>
              <li>What does the narrator think of adults?</li>
              <li> What should a person who flies planes study, according to the narrator?</li>
              <li>How old was the narrator of this book when he gave up his magnificent painting career?</li>
              <li>The pilot (as a child) drew an animal eating another animal. What was being eaten?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word. Below is an example.<br/>
            <ol className="vocab">
              <li>indulgence: <i style={{ color: "#4f5979" }}> the act of doing something that you enjoy but that is
                usually thought of as wrong or
                unhealthy. "Chocolate is my only indulgence."</i>
              </li>
              <li>dedicate</li>
              <li>magnificent</li>
            </ol>
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

                    onChange={onChangela7Listener1} value={la7Essay1}/>

          <span className="days">LESSON 2 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapter 2 of <i>The Little Prince and watch the video. </i>
          </a> Then answer the
            questions below.</p>
          <Video videoUrl="https://www.youtube.com/embed/ihi491RQo5A"/>

          <p>
            <ol className="vocab">
              <li>What is the setting or where does the plane crash happen?</li>
              <li>The morning after the plane crash, who does the pilot meet?</li>
              <li>How does the reader know that the little prince is an alien?</li>
              <li>What does the little prince ask the pilot to draw?</li>
              <li>What is the first picture that the narrator actually draws for the little prince?</li>
              <li>The pilot has to make quite a few drawings before the little prince is satisfied. What picture
                Does he like?
              </li>
              <li>Which picture is the little prince most pleased with? Why?</li>
              <li>After the plane crash, what does the pilot do?</li>
              <li>Why did the pilot get angry with the little prince?</li>
              <li>How far are the pilot and the little prince from civilization?</li>
              <li>When the pilot and the little prince first meet, what time of day is it?</li>
              <li>Describe how you like or don’t like the novel so far.</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>primeval</li>
              <li>ponder</li>
              <li>adventure</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener2} value={la7Essay2}/>

          <span className="days">LESSON 3 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 3 and 4 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When the little prince sees the airplane for the first time, what does he say?</li>
              <li>How does the little prince reveal that he might be from another planet?</li>
              <li>What does the pilot give the little prince that the little prince treasures and puts in his pocket for
                safe keeping?
              </li>
              <li>Compare the size of the little prince’s planet to the size of earth.</li>
              <li>Why is it hard to learn where the little prince came from?</li>
              <li>Why does the little prince like the drawing of the box?</li>
              <li>Why does the little prince laugh at the notion of the airplane falling from the sky?</li>
              <li>Why does the pilot decide not to draw his airplane in the book?</li>
              <li>Describe the little prince. How do you like the little prince so far?</li>
              <li>Why does the laughter of the little prince annoy the pilot so much?</li>
              <li>The little prince is proud of his flower. What is the pilot proud of?</li>
              <li>What size is the little prince’s planet? How big is it in comparison to Earth?</li>
              <li>What name does a human scholar give the little prince’s planet?</li>
              <li>What name did a Turkish scholar give to the little prince’s planet?</li>
              <li>The pilot believe grownups are mostly interested in what?</li>
              <li>What does the little prince inspire the pilot to start doing again after they becomes?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>masterpiece</li>
              <li>disheartened</li>
              <li>distinguish</li>
              <li>encounter</li>
              <li>consequence</li>
              <li>scarcely</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener3} value={la7Essay3}/>

          <span className="days">LESSON 4 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 5 and 6 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Describe what a Baobab tree looks like.</li>
              <li>How are these trees putting the little prince’s planet in danger?</li>
              <li>What is the little prince’s plan to safeguard his planet from baobabs?</li>
              <li>There is one drawing that the pilot is very proud of. Which one is it?</li>
              <li>Explain the good and bad seeds on the little prince’s planet. What do you think good and bad seeds
                symbolize?
              </li>
              <li>Why does the little prince weed his planet every morning?</li>
              <li>What is wrong with the soil on the little prince’s planet?</li>
              <li>What does the little prince love to always watch? Why do you think this is?</li>
              <li>How many times in one day does the sun set on the little prince’s planet?</li>
              <li>How did the little prince increase the number of sunsets he saw every day?</li>
              <li>How does the little prince feel most of the time? How does this compare to the pilot?</li>
              <li>The author wrote The Little Prince during WWII when Germany took over France. Because of this, he
                moved from France to New York. What do you think France symbolizes in this chapter?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>thunderstruck</li>
              <li>apparition</li>
              <li>astonishment</li>
              <li>inhabit</li>
              <li>astound</li>
              <li>acquaintance</li>
            </ol>
          </p>

          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener4} value={la7Essay4}/>

          <span className="days">LESSON 5 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 7 and 8 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>In the desert, what is the pilot’s primary worry?</li>
              <li>What is the tone of the story?</li>
              <li>What does the pilot work on so he can get out of the desert?</li>
              <li>Why does the little prince become enraged at the pilot?</li>
              <li>At one point, the little prince is afraid. Why?</li>
              <li>What does the little prince call the red-faced gentleman who is the businessman?</li>
              <li>What is The Land of Tears?</li>
              <li>On the fifth day that the pilot and the little prince are together, the secret of the little
                prince’s
              </li>
              <li>What time of day does the rose first bloom?</li>
              <li>Describe the duties the little prince performs for the rose. Why do you think he does this?</li>
              <li>How many thorns does the prince’s unique flower have?</li>
              <li>How many petals do the ordinary flowers on the prince’s planet have?</li>
              <li>Describe the rose’s personality. Would you describe her as kind? Why or why not?</li>
              <li>What is the rose afraid of?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>impenetrable</li>
              <li>abruptly</li>
              <li>reverie</li>
              <li>contemplation</li>
              <li>earnestly</li>
              <li>astronomical</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener5} value={la7Essay5}/>

          <span className="days">LESSON 6 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 9 and 10 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How does the little prince cook his breakfast on his planet?</li>
              <li>Why does the little prince want to leave his planet? What does the rose have to do with his
                decision?
              </li>
              <li>When the rose realizes the little prince is leaving, what does she ask for?</li>
              <li>Why did the rose say she did not need the glass globe anymore?</li>
              <li>Why is the flower not afraid of large animals?</li>
              <li>The little prince wants to go on a journey to discover the meaning of life and find some answers about
                the rose. How is he planning on finding these answers?
              </li>
              <li>When the little prince leaves his planet, does he plan to ever return? Why do you think this is?</li>
              <li>What do you think this chapter says about adults?</li>
              <li>How many asteroid planets does the little prince visit in total? Do they have regular names?</li>
              <li>What does the king of the first asteroid planet the prince visits call the prince?</li>
              <li>On the first asteroid planet he visits, why can’t the prince sit down?</li>
              <li>What does the king of the first asteroid planet the prince visits believe he rules over?</li>
              <li>How does the king react when he discovers that the little prince wants to leave?</li>
              <li>What is the little prince’s opinion of the king?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>essential</li>
              <li>obliged</li>
              <li>infest</li>
              <li>distinguished</li>
              <li>tedious</li>
              <li>twilight</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener6} value={la7Essay6}/>

          <span className="days">LESSON 7 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 11 and 12 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Describe the conceited man. What does he want the little prince to do?</li>
              <li>What does the conceited man want to be admired as?</li>
              <li>How does the little prince feel about the conceited man?</li>
              <li>How long is the little prince willing to applaud the conceited man?</li>
              <li>What does the conceited man use his hat for?</li>
              <li>Why do you suppose the conceited man is so shallow?</li>
              <li>How many people live on the conceited man’s planet?</li>
              <li>How adults are depicted in this chapter?</li>
              <li>Why does the tippler drink? Is this ironic? Why or why not.</li>
              <li>What is the tippler surrounded by?</li>
              <li>What explains why he doesn’t make much sense to the little prince?</li>
              <li>Is the tippler ashamed of something? Explain.</li>
              <li>What is another word that the translator might have used instead of tippler?</li>
              <li>The visit to the planet of the tippler plunged the little prince into what?</li>
              <li>What do you think this chapter is trying to say about adults?</li>
              <li>What is the conflict in the story the prince is trying to work out?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>meditation</li>
              <li>spite</li>
              <li>naive</li>
              <li>rage</li>
              <li>blunder</li>
              <li>radiance</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener7} value={la7Essay7}/>

          <span className="days">LESSON 8 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 13 and 14 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What is the businessman doing when the prince first comes across him? Why do you suppose he is doing
                this?
              </li>
              <li>What does the little prince point out to the businessman when he first meets him?</li>
              <li>What does the businessman believe he owns? Why do you think he believes this?</li>
              <li>The little prince is not impressed with what the businessman owns. Why is this?</li>
              <li>What does the little prince tell the businessman he owns?</li>
              <li>How many times in 54 years has the businessman been disturbed?</li>
              <li>What does the businessman symbolize and what do you think this chapter says about adults?</li>
              <li>What is unique about the fifth planet, the lamplighter’s planet? How does it compare to the other
                planets?
              </li>
              <li>What is on the lamplighter’s planet?</li>
              <li>The lamplighter says a day on his planet is how long?</li>
              <li>How many strides does it take to circle his planet?</li>
              <li>Of all the people the little prince meets on the asteroids, which one does he think he could be
                friends with?
              </li>
              <li>What does the lamplighter love to do most, which he is never able to do?</li>
              <li>Does the little prince feel differently about the lamplighter than he does for other adults?
                Explain.
              </li>
              <li>What does the lamplighter symbolize?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className=" vocab">
              <li>coquettish</li>
              <li>painstaking</li>
              <li>abashed</li>
              <li>verge</li>
              <li>remorse</li>
              <li>inseparable</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener8} value={la7Essay8}/>

          <span className="days">LESSON 9 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 15 and 16 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How would the geographer best be described? What knowledge does he have? The</li>
              <li>What does the little prince think is so odd about the geographer? What is ironic about what the
                geographer knows and does not know? Explain.
              </li>
              <li>Why does the geographer think someone who drinks too much is not a reliable source?</li>
              <li>Why does the geographer refuse to record the little prince’s flower?</li>
              <li>Define ephemeral. How does the geographer define ephemeral?</li>
              <li>Where does the geographer advise the little prince to visit next?</li>
              <li>What does the geographer symbolize? What does he represent about adults?</li>
              <li>What is the tone of chapter 16 (ex. gloomy, upbeat, etc.) ?</li>
              <li>About how many people does the pilot say live on the earth?</li>
              <li>What does the army of lamplighters on earth get compared to?</li>
              <li>Which does the pilot say there are more of on earth, geographers or conceited men?</li>
              <li>How many kings are on earth, according to the pilot?</li>
              <li>There would be two lamplighters who would be able to rest for most of the year. Where do
                they live?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>inconsistent</li>
              <li>migration</li>
              <li>dejection</li>
              <li>clad</li>
              <li>majestic</li>
              <li>consuming</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener9} value={la7Essay9}/>

          <span className="days">LESSON 10 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 17 and 18 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>If all humanity were to stand upright and crowd together, how much space would they take up,
                according to Chapter XVII?
              </li>
              <li>When the little prince arrives on the earth, why doesn’t he see ant people?</li>
              <li>What is the first creature the little prince meets on earth?</li>
              <li>How does the little prince feel when he first arrives on the earth?</li>
              <li>What does the first creature the prince meets on earth say he is more powerful than?</li>
              <li>What does the first creature the prince meets on earth offer the little prince?</li>
              <li>After arriving on the earth and meeting his first earth creature, what does the little prince do?</li>
              <li>Describe the flower which the little prince meets in the desert.</li>
              <li>What does the flower in the desert know of men?</li>
              <li>How many men does the flower think there are on earth?</li>
              <li>Why does the flower in the desert think men are hard to find?</li>
              <li>How many flowers does the little prince meet in the desert?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>obstruct</li>
              <li>etiquette</li>
              <li>monarch</li>
              <li>vexed</li>
              <li>absolute</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener10} value={la7Essay10}/>

          <span className="days">LESSON 11 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 19 and 20 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When the little prince emerges from the desert, where does he go?</li>
              <li>On his own planet, what does the little prince use the extinct volcano for?</li>
              <li>When the little prince is up on the high peak in Chapter XIX, who does he speak with?</li>
              <li>What does the little prince hope to see from the high peak in Chapter XIX?</li>
              <li>From his perch on the mountain, what does the little prince think of the world?</li>
              <li>On the little prince’s planet, who would speak first, himself or his flower?</li>
              <li>The little prince walks through sand, rock and snow and at last comes to a road. Where does the road
                lead them?
              </li>
              <li>The little prince discovers a rose garden. What is it about this rose garden that makes him so sad?
              </li>
              <li>How many roses are in the garden that the little prince discovers?</li>
              <li>In the rose garden, the little prince has to face a difficult fact about himself. What is it?</li>
              <li>What do the flowers in the rose garden remind him of?</li>
              <li>In the rose garden, when the little prince realizes the truth of his life and of the things he loves,
                what does he do?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>timid</li>
              <li>hasten</li>
              <li>simplicity</li>
              <li>universal</li>
              <li>insubordination</li>
              <li>forsake</li>
              <li>obedience</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener11} value={la7Essay11}/>

          <span className="days">LESSON 12 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 21 and 22 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Where does the little prince find the fox?</li>
              <li>The little prince wants the fox to play with him. What does the fox say?</li>
              <li>What does the little prince tell the fox he is looking for?</li>
              <li>How does the fox define the word "tame"?</li>
              <li>Why is the fox so interested in the little prince’s planet?</li>
              <li>Why does the fox want to be tamed?</li>
              <li>What do you think the fox symbolizes?</li>
              <li>What is the job of the railway switchman?</li>
              <li>What does the railway switchmen think of children?</li>
              <li>According to the switchman, what are the adults in the trains pursuing?</li>
              <li>When the little prince watches the trains, he remembers something the fox said. What does he
                remember?
              </li>
              <li>What do the children on the trains waste their time over?</li>
              <li>How does the author use light imagery in the chapter about trains?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>almanac</li>
              <li>ambassador</li>
              <li>acclaim</li>
              <li>monotony</li>
              <li>lugubrious</li>
              <li>balderdash</li>
              <li>giddy</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener12} value={la7Essay12}/>

          <span className="days">LESSON 13 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 23 and 24 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How many thirst-quenching pills would one need in order to feel full of liquid?</li>
              <li>What is the selling point which the pill merchant offers the little prince?</li>
              <li>How much time per week can a person save by taking the thirst quenching pills?</li>
              <li>Who does the allegorical character of the pill merchant represent (what does he symbolize)?</li>
              <li>The imagery of water is used in The Little Prince to represent the life-giving force, whether it</li>
              <li>is physical or spiritual. What then does this thirst-quenching pill represent?</li>
              <li>Is the little prince interested in buying the pills?</li>
              <li>How many days have the pilot and little prince been together when the pilot drinks the last of</li>
              <li>his water supply?</li>
              <li>Who is dying of thirst in the desert?</li>
              <li>What does the little prince decide that they should look for to quench their thirst?</li>
              <li>Night falls and the pilot and little prince are walking in the dark. What do they think of the</li>
              <li>desert in the moonlight?</li>
              <li>What does the little prince believe that the desert hides?</li>
              <li>What moves the pilot so much about the little prince whom he carries in his arms across the
                dark desert?
              </li>
            </ol>
            <h4>Vocabulary</h4> After you watch the video, for each vocabulary word below, write a SYNONYM
            for it.<br/>
            <Video videoUrl="https://www.youtube.com/embed/thf0XGOXE6w?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
            <ol className="vocab">
              <li>rheumatism</li>
              <li>retort</li>
              <li>scorn</li>
              <li>voluminous</li>
              <li>intoxicate</li>
              <li>eternal</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener13} value={la7Essay13}/>

          <span className="days">LESSON 14 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapters 25 and 26 of <i>The Little Prince. </i> </a> Then
            answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>At what time of day does the pilot find the well?</li>
              <li>Why does the pilot think he is dreaming when he finds the well?</li>
              <li>What sound does the well in the desert make?</li>
              <li>Who hoists the bucket up from the bottom of the well to the surface?</li>
              <li>Who drinks from the well first?</li>
              <li>What is the final drawing which the little prince requests from the pilot?</li>
              <li>What structure is near the well?</li>
              <li>Where must the snake bite the little prince?</li>
              <li>What does the little prince ask about the poison which the snake has within it?</li>
              <li>When the pilot sees the snake, what does he do?</li>
              <li>What color is the muffler which the little prince wears around his neck?</li>
              <li>What does the little prince know about the pilot’s engine?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>veritable</li>
              <li>spectacle</li>
              <li>regulate</li>
              <li>monotonous</li>
              <li>immensity</li>
              <li>trudge</li>
              <li>asunder</li>
            </ol>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangela7Listener14} value={la7Essay14}/>

          <span className="days">LESSON 15 </span>
          <p className="topBottom"> Read <a href={require("../resources/books/TheLittlePrince.pdf")} rel="noreferrer"
                                            target="_blank">Chapter 27 <i>The Little Prince. </i> </a> Then answer the
            questions below.</p>
          <p>
            <ol className="vocab">
              <li>What do you believe is the moral of The Little Prince?</li>
              <li>How many years have gone by before the pilot tells his story?</li>
              <li>Is the pilot able to find his way out of the desert?</li>
              <li>What does the pilot regret most about his drawing of the sheep’s muzzle?</li>
              <li>Does the pilot wonder about the little prince and the flower and the sheep? How so?</li>
              <li>If one is ever in the African desert and sees a little man with golden hair, what should one do?</li>
              <p className="topBottom"><strong>Deeper Thinking about The Little Prince</strong></p>
              <li>Discuss the little prince and his relationship with the flower.</li>
              <li>What can readers learn from the prince?</li>
              <li>What was your reaction to the final statement from the pilot: "Then, if a little man</li>
              <li>appears who laughs, who has golden hair and who refuses to answer questions,</li>
              <li>you will know who he is. If this should happen, please comfort me. Send me</li>
              <li>word that he has come back." Did you think it was a good ending or would have chosen something
                different?
              </li>
              <li>There are many moral lessons in The Little Prince. Which two are most significant to you?</li>
              <li>What is the difference between children and adults in the Little Prince?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>abyss</li>
              <li>irreparable</li>
              <li>malicious</li>
              <li>resolute</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener15} value={la7Essay15}/>

          <span className="days">LESSON 16 </span>
          <h4> Deeper thinking on Symbolism</h4>
          <p>
            <ol className="vocab">
              <li>What does the sheep in The Little Prince symbolize?</li>
              <li>What does the snake in "The Little Prince" story symbolize?</li>
              <li>What do the planets visited by the little prince symbolize?</li>
              <li>What does the Little Prince symbolize for the pilot?</li>
              <li>Symbolism was used throughout the novel. Which one</li>
              <li>What does it mean to "see with the heart"? Do you think you can see accurately with your heart? Why or
                why not?
              </li>
              <li>Are there times when you should rely on your heart to guide you? Explain.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener16} value={la7Essay16}/>

          <span className="days">LESSON 17 </span>
          <h4> Create your own book cover design for <i> The Little Prince</i>. </h4>
          <img src={require("../../public/images/bookCovers/littlePrince2.jpg")} alt="Little Prince"/>

          <p className="topBottom">A book cover often helps a person decide if they will buy a book. Think about the
            impression you want the images, colors and text to create for viewers. Create a cover for <i> The Little
              Prince</i> that gives viewers a glimpse of the content and mood of the book. Ideas can include how you
            imagined the little prince on one of the planets or an image of how you imagined the main characters. </p>
          <p className="topBottom">You can use any medium you like: collage, Photoshop, paper and markers, or <a
            href="https://www.canva.com/create/book-covers/" rel="noreferrer" target="_blank"> Canva’s online book
            cover
            creation tool. </a>You choose how you want to design it. Your cover should include:<br/>
            1. A clear title and the author’s name. <br/>
            2. A graphic design that reflects the books themes. <br/>
            3. A summary of the plot without giving away the ending. Write this in the textbox below. For an idea of
            what's expected, read the summary of
            a book you have, usually found on the inside of the book jacket/cover. Or, you can find a summary doing an
            online search.<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener17} value={la7Essay17}/>

          <span className="days">LESSON 18 </span>
          <h4> Write a Five Paragraph Essay </h4>
          <p>5 Steps of the Writing Process</p>
          <Video videoUrl="https://www.youtube.com/embed/I9wygIVAxqg?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
          <p className="topBottom"><strong>Do you think <i>The Little Prince </i>was written for children, adults, or
            both?</strong></p>
          <p className="topBottom">In a five paragraph essay, write a response to the question above. Take a few minutes
            to think about the question and then create an outline. Each paragraph should be 3-5 sentences.</p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>to help you get started. </p>
          <p className="topBottom"><strong>Introduction: </strong>Your first paragraph should grab your reader’s
            attention. It
            also needs a clear thesis statement that conveys the points or arguments you are going to make. </p>
          <p className="topBottom"><strong>Body: </strong> In your three supporting paragraphs (paragraphs 2, 3 and 4),
            use at least three different examples from
            the novel. </p>
          <p className="topBottom"><strong>Conclusion: </strong> Your final paragraph should restate your thesis in a
            different way. End with a thoughtful
            summary.</p>

          <textarea className="textArea" onChange={onChangela7Listener18} value={la7Essay18}/>

          <span className="days">LESSON 19 </span>
          <p className="topBottom">In many ways <i>The Little Prince</i> is an autobiography. Read the articles below.
            Then write a five paragraph essay explaining how the fable reflects Antoine de Saint-Exupéry’s own life
            and experiences.</p>
          <p className="topBottom">Many of the people, objects and events in <i> The Little Prince</i> represent people
            and events from the author’s life. For example, Saint-Exupéry searched for the meaning of life, he was a
            pilot who crashed in
            the desert and the rose is said to be his wife, Consuelo.</p>
          <p className="topBottom">In your essay, you must explain how the examples you select from the fable symbolize
            things or people in Saint-Exupéry’s life. It’s not enough to state that the rose was his wife. You must
            explain how you know
            this by referring to specific passages in the novel and the articles posted below. You can do further
            research
            online to help support the points you make.</p>
          <p className="topBottom"><a href={require("../resources/languagearts/littlePrinceArticle.pdf")}
                                      rel="noreferrer" target="_blank">Love
            letters that inspired 'The Little Prince’ </a></p>
          <p className="topBottom"><a
            href="https://www.nationalww2museum.org/war/articles/the-little-prince-antoine-de-saint-exupery"
            rel="noreferrer" target="_blank"> The Little Prince's Last Flight: The Story of Antoine de
            Saint-Exupéry. </a></p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click here for a 5 Paragraph Essay outline </a>to help you get
            started. </p>
          <textarea className="textArea"
                    placeholder="Be sure to back up your work and send it to your teacher or parent."
                    onChange={onChangela7Listener19} value={la7Essay19}/>

          <span className="days">LESSON 20 </span>
          <h4>12 Types of Fiction </h4>
          <p>After you watch the two videos below, answer the questions that follow.</p>
          <Video videoUrl="https://www.youtube.com/embed/-_DN7l53J_c?list=PLvJNSf-7NfrNSQl8ICXACg0XNUVM1dF2d"/>
          <Video videoUrl="https://www.youtube.com/embed/niZosUpuSyU?list=PLvJNSf-7NfrNSQl8ICXACg0XNUVM1dF2d"/>
          <ol className="vocab">
            <li>List the 12 different genres of fiction.</li>
            <li>Of the 12 types listed, which is your favorite to read? Why?</li>
            <li>Which genre is your least favorite to read? Explain why.</li>
            <li>If you were asked to write a novel, which type (genre) of fiction would you choose?</li>
            <li>If you could be the protagonist or hero in a novel, which type of fiction would you want to star in?
              Explain.
            </li>
            <li>Which type of fiction to do you think sells the most? Why do you think that is?</li>
            <li>If you were a writer, which type of fiction do you think would be the most difficult to write about?
              Explain your answer.
            </li>
            <li>What is your favorite novel and what type of fiction (genre) is it?</li>
          </ol>

          <textarea className="textArea" onChange={onChangela7Listener20} value={la7Essay20}/>

          <span className="days">LESSON 21 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women: reading informational text. </p>

          <p>
            <Video videoUrl="https://www.youtube.com/embed/gUW2jit3uvo"/>
            <Video videoUrl="https://www.youtube.com/embed/GvWH9ZXy9gY"/>
            <Video videoUrl="https://www.youtube.com/embed/l3yWmXbC36s"/>
            <p>Review the <a
              href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:building-knowledge/a/trailblazing-women-unit-vocabulary?modal=1"
              rel="noreferrer" target="_blank"> vocabulary for this unit. (Click here)</a></p>
            <p>Complete the <a
              href="
              https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:close-reading/e/trailblazing-women--reading-informational-text--katherine-johnson-7"
              rel="noreferrer" target="_blank">four problems linked here from Khan Academy. </a>Then in the textbox
              below, write a brief summary about Katherine Johnson based on the reading.</p>            <p>If you don't
            already
            have a free account
            set up with Khan Academy, <a
              href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
              rel="noreferrer" target="_blank"> click here </a>to create one.</p>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener21} value={la7Essay21}/>

          <span className="days">LESSON 22 </span>
          <p className="topBottom"><a href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer"
                                      target="_blank"> <i>A
            Long Walk to Water</i></a> is based on the true story of Salva Dut, one of the Lost Boys from Sudan during a
            civil war in 1985. The book also includes a second perspective from a girl named Nya, which begins in 2008.
            The book is available at your local library, local bookstore, or can be
            purchased online. Until you get a copy, you can begin reading it <a
              href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer"
              target="_blank"> here. <img src={require("../../public/images/bookCovers/longwalktowater.jpg")}
                                          alt="Long Walk to Water novel"/></a></p>
          <p>Read Chapter 1, answer the questions and complete the vocabulary assignment below. <br/>
            1. Why does the author use different styles of print and different time periods in the same Chapter? What
            can be learned from this style of writing?<br/>
            2. Describe Salva as a student, his school and what he learns. Can you make any
            connections? <br/>
            3. Describe Salva’s family and home life. Is it anything like your own?<br/>
            4. What are the issues for which the rebels are fighting the government? What does it
            mean for Sudan to become Muslim?<br/>
            5. Why does the teacher urge them to "run into the bush?"<br/>
            6. What are you wondering about as this Chapter ends?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>droned Example: <i>droned: to talk in a dull, monotonous manner. "The teacher droned on with a lesson
                about the Arabic language." </i></li>
              <li>responsibilities</li>
              <li>thorn</li>
              <li>panic</li>
              <li>bush</li>
              <li>rebels</li>
              <li>independence</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener22} value={la7Essay22}/>

          <span className="days">LESSON 23 </span>
          <p>Read <a href={require("../resources/books/ALongWalktoWaterChapter1.pdf")} rel="noreferrer"
                     target="_blank"><i>Chapter 2,</i></a> answer the questions and complete the vocabulary assignment
            below. <br/>
            <strong>YEAR 2008</strong><br/>
            1. In this chapter, how does Nya spend her time?<br/>
            <strong>YEAR 1985</strong><br/>
            2. What is happening around Salva as he runs away from the school?<br/>
            3. What three questions occupy Salva’s thoughts?<br/>
            4. When they organize by village, what does Salva discover?<br/>
            5. Describe the rebels. How does their appearance and actions affect the people?<br/>
            6. Does Salva consider himself a man? Do the rebels consider Salva a man?<br/>
            7. Why does the group leave the rebels? Why do they leave Salva in the barn the next
            morning?<br/>
            8. Can you imagine how Salva is feeling at the end of this Chapter? Where is he?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>shrouded</li>
              <li> relief</li>
              <li> model</li>
              <li> terror</li>
              <li> mortars</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener23} value={la7Essay23}/>

          <span className="days">LESSON 24 </span>
          <p className="topBottom">Read Chapter 3, answer the questions and complete the vocabulary assignment
            below.</p>
          <p className="topBottom"><strong>2008</strong><br/>
            1. In each of the Chapters so far, the author tells Nya’s story first. Why do you think
            she does this?<br/>
            2. What has been the purpose of Nya’s journey every day?<br/>
            <strong>1985</strong><br/>
            3. What is Salva’s situation? Why doesn’t he return to his school?<br/>
            4. How does the woman from the Jur-chol tribe help him? What is the history
            between the Nuers and the Dinka tribe? Why is Salva insulted to be called an
            orphan?<br/>
            5. Why must the old woman move on? Couldn’t she take Salva along?<br/>
            6. How do tribes tell themselves apart from one another?<br/>
            7. Salva’s hopes rise and then fall. Do you think finding other Dinkas will be the
            answer he is looking for?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>gourd</li>
              <li>tribe</li>
              <li>artillery</li>
              <li> sympathy</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener24} value={la7Essay24}/>

          <span className="days">LESSON 25 </span>
          <p>Read Chapter 4, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What additional information did you learn about Nya in this Chapter?<br/>
            <strong>1985</strong><br/>
            2. Why doesn’t the group want Salva along? Why is he ultimately taken along by the
            man and woman?<br/>
            3. What does it mean they are "walking to nowhere"? <br/>
            4. Why do the boys, Buksa and Salva, fall behind? What have they discovered? Can an entire group of people
            exist on this?<br/>
            5. What do you think of the two main characters, Nya and Salva, so far?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>scanned</li>
              <li>doubt</li>
              <li>daze</li>
              <li>feast</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener25} value={la7Essay25}/>

          <span className="days">LESSON 26 </span>
          <p>Read Chapter 5, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. Explain how water dictates Nya’s life.
            <strong>1985</strong><br/>
            2. How was the honey worth it for Salva and the others in his group? What was the
            cost?<br/>
            3. What do Salva and Marial have in common? What does it mean that Salva "heard
            that sigh all the way to his heart?"<br/>
            4. Why is Salva dismayed that they are walking to Ethiopia, east? How are the boys
            good for each other?<br/>
            5. Describe the Atuot people. Would you fear them? Explain.<br/>
            6. Salva is amazed at the end of this Chapter. What do you think is the cause of his speechlessness?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>gingerly</li>
              <li>honeycomb</li>
              <li> accent</li>
              <li>strides</li>
              <li> inhabited</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener26} value={la7Essay26}/>

          <span className="days">LESSON 27 </span>
          <p>Read Chapter 6, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. Nya and her mother think differently about the camp. Explain. Would Nya and
            Salva have been friends if they knew each other in the same time?<br/>
            <strong>1985</strong><br/>
            2. Finally, something good happens for Salva. Explain. How does this make a
            difference for the group?<br/>
            3. Why does everyone in the group become nauseous? Could they have avoided this
            problem?<br/>
            4. List all the elements working against their survival.<br/>
            5. What does it mean: "A cold fist seemed to grip
            Salva’s heart?" What has happened?<br/>
            6. If you had to choose to be Nya or Salva, explain whose shoes you would rather
            walk in. Why?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>makeshift</li>
              <li> solemn</li>
              <li> rebelled</li>
              <li> nausea</li>
              <li> exhausted</li>
              <li> wailing</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener27} value={la7Essay27}/>

          <span className="days">LESSON 28 </span>
          <p>Read Chapter 7, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What is wrong with Akeer? What are her symptoms? What is the choice facing the
            family? What would you do?<br/>
            <strong>1985</strong><br/>
            2. How do they know a lion took Marial? How is it possible that no one heard
            anything?<br/>
            3. How does the loss of his friend affect Salva? How does uncle soothe him?<br/>
            4. What changes as the group approaches the Nile? How do they get across?<br/>
            5. What is the secret of making the canoes?<br/>
            6. What would you like to learn in the next Chapter?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>steady</li>
              <li>reeds</li>
              <li>papyrus</li>
              <li>prow</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener28} value={la7Essay28}/>

          <span className="days">LESSON 29 </span>
          <p>Read Chapter 8, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. Explain how Akeer’s laugh "was like music." Why did she become sick?<br/>
            <strong>1985</strong><br/>
            2. What 'wonders' were found on the island?<br/>
            3. How do the villagers get food without any money?<br/>
            4. Why don’t they become nauseous again with this food?<br/>
            5. Describe Salva’s good memories.<br/>
            6. What do the fishermen know about the night that the travelers do not? How are
            they affected?<br/>
            7. Of all the elements Salva has faced, which do you think is the worst? How could
            the Akobo desert that lies ahead be the worst?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>monotonous</li>
              <li> gauge</li>
              <li> mangoes</li>
              <li> ferried</li>
              <li> desperate</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener29} value={la7Essay29}/>

          <span className="days">LESSON 30 </span>
          <p>Read Chapter 9, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. How does the village chief welcome strangers? What do you think of this?<br/>
            <strong>1985</strong><br/>
            2. How is the Akobo the worst thing yet for the villagers to survive?<br/>
            3. How does uncle encourage Salva to keep walking? What might have happened to
            Salva without his uncle? How could you apply Uncle’s strategy in your own life?<br/>
            4. What do they find when they reach other people in the desert?<br/>
            5. Would you give water to the men? What is the right
            thing to do?<br/>
            6. Do you think some will have to die for the others to survive?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>relentless</li>
              <li>arid</li>
              <li> parched</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener30} value={la7Essay30}/>

          <span className="days">LESSON 31 </span>
          <p>Read Chapter 10, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What do the two strangers want from Nya’s chief? If they find water, how will it
            change lives?<br/>
            <strong>1985</strong><br/>
            2. Did Salva give his water to the men? Did anyone? What were the results? Who was
            right?<br/>
            3. What happened to the village of Lou Ariik?<br/>
            4. What will happen when the group reaches Ethiopia? What are uncle’s plans?<br/>
            5. What are the chances that Salva will ever find his family?<br/>
            6. Where did the six men come from? Why did they single out uncle? What does it
            mean, "There was something evil in their laughter."
            7. What does the ending of this Chapter mean for Salva?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>translated</li>
              <li> revived</li>
              <li> vultures</li>
              <li>refugee camp</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener31} value={la7Essay31}/>

          <span className="days">LESSON 32 </span>
          <p>Read Chapter 11, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What will it mean if water is not found in the land between the trees?<br/>
            <strong>1985</strong><br/>
            2. What happened to uncle? How does this affect Salva? How does the group attitude
            change?<br/>
            3. What are the positive and negative aspects of the refugee camp? Is Salva happy to
            finally quit walking?<br/>
            4. What does the orange scarf mean to Salva?<br/>
            5. How would you like this Chapter to end for Salva?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>scythed</li>
              <li> numbness</li>
              <li> grudgingly</li>
              <li> emaciated</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener32} value={la7Essay32}/>

          <span className="days">LESSON 33 </span>
          <p>Read Chapter 12, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What is the red, iron giraffe? What part do the villagers play in the progress?<br/>
            <strong>1985</strong><br/>
            2. How does it feel to Salva to be without a family? What has he lost?<br/>
            3. What does Salva decide to do to survive?<br/>
            4. How does school look in the refugee camp? Why does he go?<br/>
            <strong>1991</strong><br/>
            5. How have things changed in the camp in six years? Why is it closing?<br/>
            6. What is the purpose of any government? What will be the outcome of the
            government’s actions?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>despair</li>
              <li> scavenging</li>
              <li> chaos</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener33} value={la7Essay33}/>

          <span className="days">LESSON 34 </span>
          <p>Read Chapter 13, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2008</strong><br/>
            1. What things make drilling so difficult? What do you think keeps people motivated in times of
            adversity?<br/>
            <strong>1991-1992</strong><br/>
            2. What is the government trying to do by driving the people into the water?<br/>
            3. Why are the soldiers shooting? What are all the obstacles to survival for these
            people?<br/>
            4. Does Salva have a duty to the others, especially the boy clinging to him? Why was
            Salva one of the lucky ones and not one of the thousands who died?<br/>
            5. Would you follow Salva? Why did he become a leader? What do the boys hope to
            find in Kenya?<br/>
            6. How do they find the strength to go on? How do they last a year and a half?<br/>
            7. What do you expect their life to be like in Kenya?<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>earnestly</li>
              <li> prodding</li>
              <li>welter</li>
              <li> peril</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener34} value={la7Essay34}/>

          <span className="days">LESSON 35 </span>
          <p>Read Chapter 14 and then answer the questions below. <br/>
            <strong>2009</strong><br/>
            1. Why does the village celebrate in this chapter? What could it mean that the new water is full of
            mud?<br/>
            <strong> 1992- 1997</strong><br/>
            2. Describe the misery at Kakuma. How does the population of Kakuma compare to
            the population in your own community?<br/>
            3. How were conditions different at the camp in Ifo?<br/>
            4. What must it have been like with nothing to do day after day but wait?<br/>
            5. Ideally what does Salva want?<br/>
            6. What are the restrictions to a boy "getting on the list' to go to America?<br/>
            7. What does the author mean "sometimes he felt he was being torn in two by the
            hoping and the not-hoping?"<br/>
            8. What does it mean to Salva that he will go to America?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener35} value={la7Essay35}/>

          <span className="days">LESSON 36 </span>
          <p>Read Chapter 15, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2009</strong><br/>
            1. Why can’t the boys drink the water spraying from the hole? When will Nya lose her
            job?<br/>2. What was involved in the Lost Boys coming to America? Do you think that is a
            good name for them?<br/>
            3. Would you want to be able to help boys like Salva who come to America? <br/>
            4. Describe Salva’s experiences with clothes, Coca-Cola, the plane, and winter.<br/>
            5. Would this be easier if Salva really was a boy instead of an adult?<br/>
            6. Will it ever be possible for Salva to reconnect with any of his birth family? Explain.<br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>terminal</li>
              <li> frigid</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener36} value={la7Essay36}/>

          <span className="days">LESSON 37 </span>
          <p>Read Chapter 16, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2009</strong><br/>
            1. What is your best guess on what the men are going to build?<br/>
            <strong>1997-2003</strong><br/>
            2. By opening his email, what does this show you about Salva’s development in
            America?<br/>
            3. What are the difficulties involved in Salva reconnecting with his father?<br/>
            4. What are the many risks Salva is taking in order to find his father?<br/>
            5. Write as many "what if’s" as you can at the end of this Chapter. (Example: What if
            Salva’s father has died? What if Salva is not allowed to return to the US?)<br/>
            <br/>
            <strong>Vocabulary</strong><br/>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>aquifer</li>
              <li> vague</li>
              <li> relief</li>
              <li> clinic</li>
              <li> remote</li>
              <li> arrangements</li>
              <li> frantic</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener37} value={la7Essay37}/>

          <span className="days">LESSON 38 </span>
          <p>Read Chapter 17, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2009</strong><br/>
            1. Were you able to predict which building would be put up first? <br/>
            2. Why does Nya ask if the girls can go to school too?
            3. How does having water change everything for her people?<br/>
            <strong>2003-2007</strong><br/>
            4. Was the reunion of Salva and his father what you expected? Explain.
            5. How is it possible that so much of his family is still alive? Why didn’t they give up
            hope?<br/>
            6. Should Salva take the risk and return to Lou Ariik? Would you?<br/>
            7. What do you believe his idea is to help his people?<br/>
            8. Why is Salva the best person to speak about his idea? Does his audience care
            about his speaking skills?<br/>
            9. What do you think would make people donate money to Salva?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener38} value={la7Essay38}/>

          <span className="days">LESSON 39 </span>
          <p>Read Chapter 18, answer the questions and complete the vocabulary assignment below. <br/>
            <strong>2009</strong><br/>
            1. Describe Nya’s experience of the water. <br/>
            2. What does the well mean to the people of southern Sudan? How did it get its
            name? <br/>
            3. In every Chapter until now, the story structure included two time periods. Why is
            this last Chapter set only in 2009? Why is the Chapter printed only in regular print
            instead of starting with italics?<br/>
            4. Why was the boss of the workers not identified as Dinka earlier?<br/>
            5. "Why would a Dinka bring water to us?" How would you answer Nya’s question?<br/>
            6. Do you expect any changes between the Nuer and Dinka because of this?<br/>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener39} value={la7Essay39}/>

          <span className="days">LESSON 40 </span>
          <h4>Create a new book cover for <i> A Long Walk to Water.</i></h4>
          <p>Make a cover that gives viewers a glimpse of the content and mood of
            the book. Think about the impression you want the images, colors and text to create for viewers. You can use
            whatever medium you choose: collage, Photoshop, paper and markers, or <a
              href="https://www.canva.com/create/book-covers/" rel="noreferrer" target="_blank"> Canva’s online book
              cover creation tool. </a>You choose how you want to design it. Your cover should include: <br/>
            1. A clear title and the author’s name. <br/>
            2. A graphic design that reflects the novel's themes. <br/>
            3. A summary of the plot without giving away the ending (write 3 and 4 in the textbox below). <br/>
            4. A review (your opinion) about the book. <br/></p>
          <Video videoUrl="https://www.youtube.com/embed/0t78opcFHAM"/>

          <textarea className="textArea" onChange={onChangela7Listener40} value={la7Essay40}/>

          <span className="days">LESSON 41 </span>
          <p>Five Paragraph Essay</p>
          <p> In a five paragraph essay, address one of the questions below. </p>
          <p>
            <ul className="list">
              <li>In <i>The Long Walk to Water </i> Salva faced may challenges. How did these challenges shape the
                person he became?
              </li>
              <li>There were several themes in the book, including hope, family, social strife, war, resilience, helping
                others and survival. What do you think is the most important theme in the book?
              </li>
              <li>Who had more struggles: Nya or Salva?</li>
              <li>Salva experienced culture shock when he moved to the U.S. What do you think are the greatest
                challenges for immigrants when they move to the U.S.?
              </li>
            </ul>
          </p>
          <p className="topBottom">Your five paragraph essay should follow the format below: </p>
          <ul className="assnList">
            <li>Write a hook to grab your reader's attention.</li>
            <li>Your first paragraph should have a clear thesis statement (main idea of your essay). This
              statement should convey the points or arguments you are going to
              make.
            </li>
            <li>Paragraphs 2-4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use a different example. Using direct
              quotes from the novel can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-5 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea" onChange={onChangela7Listener41} value={la7Essay41}/>

          <span className="days">LESSON 42 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women - Close reading: speech and drama - Sojourner Truth 7. </p>
          <Video videoUrl="https://www.youtube.com/embed/Tq_BoPJsv-4"/>
          <Video videoUrl="https://www.youtube.com/embed/msHjgIsYOkU"/>
          <Video videoUrl="https://www.youtube.com/embed/Q4I9ht7wHsk"/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:close-reading-speech-and-drama/e/trailblazing-women--speech-and-drama--sojourner-truth-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox below,
            write a brief summary about Sojourner Truth’s Speech at the Women’s Rights Convention.</p>
          <textarea className="textArea" onChange={onChangela7Listener42} value={la7Essay42}/>

          <span className="days">LESSON 43 </span>
          <p className="margin-para"> Watch the videos below and then complete the assignment from Khan Academy:
            Trailblazing Women: Applying vocabulary knowledge. </p>
          <Video videoUrl="https://www.youtube.com/embed/CiNggzdWkIo"/>
          <Video videoUrl="https://www.youtube.com/embed/lzKj-bLvrYQ"/>
          <Video videoUrl="https://www.youtube.com/embed/XRt1N0sJJQo"/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:applying-knowledge/e/trailblazing-women--applying-knowledge--katherine-johnson-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox
            below, summarize what you learned in this unit.</p>
          <textarea className="textArea" onChange={onChangela7Listener43} value={la7Essay43}/>

          <span className="days">LESSON 44 </span>
          <p className="margin-para"> Watch the video below and then complete the assignment from Khan Academy:
            Trailblazing Women: Reading informational text and creating objective summaries - Mae Jemison. </p>
          <Video videoUrl="https://www.youtube.com/embed/5Eepm6Px5pc "/>
          <p>Complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-trailblazing-women/x4aa9073b12675eb1:reading-for-understanding/e/trailblazing-women--reading-informational-text--mae-jemison-7"
            rel="noreferrer" target="_blank"> questions linked here from Khan Academy. </a>Then in the textbox
            below, write a brief summary about Mae Jemison, Astronaut.</p>
          <textarea className="textArea" onChange={onChangela7Listener44} value={la7Essay44}/>

          <span className="days">LESSON 45 </span>
          <p>The novel <strong>Hatchet </strong> by Gary Paulsen is a wilderness survival story. Brian Robeson is a
            thirteen
            year old boy traveling in a small airplane to Canada to spend the summer with his father. When the
            plane crashes in an uninhabited part of the Canadian woods, he must find a way to survive on his own.
          </p>
          <p className="topBottom"><strong>Hatchet </strong> is available at your local library, local bookstore and
            online for purchase. Until
            your copy arrives, <a href={require("../resources/books/HatchetChapter1.pdf")} rel="noreferrer"
                                  target="_blank"> Chapter 1 is provided here. </a></p>
          <p className="topBottom"><a href={require("../resources/books/HatchetChapter1.pdf")} rel="noreferrer"
                                      target="_blank"><img src={require("../../public/images/bookCovers/hatchet.jpg")}
                                                           alt="Hatchet novel"/></a><br/>
            <ol className="vocab">After you read Chapter 1, answer the questions below using complete sentences.<br/>
              <li>Who is narrating the story?</li>
              <li>Why was Brian traveling in a small bush plane by himself?</li>
              <li>Explain why Brian is having a tough time accepting his parents’ divorce.</li>
              <li>What did Brian’s mother give him as a gift before he leaves? How does Brian feel about the
                gift?
              </li>
              <li>Do you believe it says something about his relationship with his mother that he wore the hatchet
                instead of just putting it in a bag?
              </li>
              <li>Why was Brian "stricken with a white-flash of horror."</li>
              <li>What tips about flying a plane did the pilot give to Brian?</li>
              <li>What happens to the pilot while they are flying over the Canadian woods? Describe Brian’s
                reaction when this happens.
              </li>
              <li>By the end of the chapter, describe how Brian is feeling. How do you think you’d be feeling if
                you were in a similar situation?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> audible</li>
              <li> grimacing</li>
              <li> spasm</li>
              <li> tundra</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener45} value={la7Essay45}/>

          <span className="days">LESSON 46 </span>
          <p> Read <i> Chapter 2 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How did Brian react after the pilot’s heart attack? If you were in a similar situation, how do
                you think you would have reacted to losing the pilot?
              </li>
              <li>Did Brian know anything about how to fly a plane? Explain.</li>
              <li>Why does he start to panic when he radios for help?</li>
              <li>What do you think about Brian’s decision to wait for the plane to run out of gas? What would you
                have done?
              </li>
              <li>Brian thought his best chance for a safe landing was to land where?</li>
              <li>Describe how Brian is feeling as he is trying to figure out what to do next.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> turbulence</li>
              <li> lurch</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener46} value={la7Essay46}/>

          <span className="days">LESSON 47 </span>
          <p> Read <i> Chapter 3 of Hatchet</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Why is Brian hoping to find a lake directly in front of him?</li>
              <li>Do you think it’s realistic that Brian would be able to control the plane as he did? Why or why
                not?
              </li>
              <li>Describe, with as many details as you can, the crash landing.</li>
              <li>What animal does Brian see when he is about to crash land on the lake?</li>
              <li>The author states that Brian hears screaming. Who do you think is screaming?</li>
              <li>What happened to Brian at the end of the chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener47} value={la7Essay47}/>

          <span className="days">LESSON 48 </span>
          <p> Read <i> Chapter 4 of Hatchet</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What is the mood of this chapter? (Is it sad, suspenseful, joyful, depressing, anxious, angry, sad,
                tense, lonely, suspicious?)
              </li>
              <li>Describe the setting with as many details as you can remember.</li>
              <li>Imagine you are in Brian’s place. You are stranded in a forest in the north with no one to help
                you. What’s your plan? What steps would you take next?
              </li>
              <li>What secret has Brian keeping to himself? Why is so upsetting to him?</li>
              <li>Give a detailed description of the lake.</li>
              <li>Brian faces a problem with the rising of the sun. How is the problem solved?</li>
              <li>How did Brian get lucky with where he landed? Could it have gone much worse for him? How so?
              </li>
              <li>Describe how the lake and woods of Canada are different from the city Brian lived in.</li>
              <li>If you had to give this chapter a name, what would it be?</li>
              <li>What should Brian’s next steps be? If you could step into the book and give him advice, what
                would you tell him?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> spiraling</li>
              <li> abated</li>
              <li> keening</li>
              <li> hoarse</li>
              <li> hummock</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener48} value={la7Essay48}/>

          <span className="days">LESSON 49 </span>
          <p> Read <i> Chapter 5 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>When Brian wakes up, what new problem does he face?</li>
              <li>Is Brian afraid to drink the lake water? Why? What happens when he finally drinks it? What would
                you have done?
              </li>
              <li>You learn about the lesson his English teacher, Perpich, taught him. What is it? How did he start to
                apply this lesson to his situation?
              </li>
              <li>It dawns on Brian that he might never be found. What had he done that would make it difficult for
                search and rescue crews to find him? He decides it take at least how long for someone to find him?
              </li>
              <li>Did Brian stay in a panicked state? Do you think he is behaving reasonably?</li>
              <li>Can you relate to how he is behaving or do you think you would behave differently? Explain.</li>
              <li>What things does he need the most to survive, but does not have?</li>
              <li>What does Brian have that you think will be useful to him in survival?</li>
              <li>What is the theme or main idea of this chapter?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> amphibious</li>
              <li> asset</li>
              <li> diminish</li>
              <li> frantic</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener49} value={la7Essay49}/>

          <span className="days">LESSON 50 </span>
          <p> Read <i> Chapter 6 of Hatchet</i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab">
              <li>Why did Brian chose to make his shelter close to the lake? Would you have done the same thing or moved
                elsewhere?
              </li>
              <li>Describe his shelter.</li>
              <li>Brian decides to get some food. What does he do? Was this a good move? Explain.</li>
              <li>When he thinks about cause and effect, he determines there is someone to blame for the situation he’s
                in. Who does he blame and why? Do you think Brian is correct?
              </li>
              <li>What is the tone or mood of this chapter? (Is it sad, suspenseful, joyful, depressing, anxious, angry,
                sad, tense, lonely, suspicious?)
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> interlaced</li>
              <li> jumbled</li>
              <li> pulverize</li>
              <li> viciously</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener50} value={la7Essay50}/>

          <span className="days">LESSON 51 </span>
          <p> Read <i> Chapter 7 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Brian is forced to learn a lot of lessons about survival quickly. There are lessons he should have
                learned the <i>first</i> time. List at least one.
              </li>
              <li>How is Brian doing after eating so many berries?</li>
              <li>Brian remembers something that is painful. What is it?</li>
              <li>He sees somethings that makes him "do nothing, think nothing." What does he see? Is he harmed? How do
                you think you would have reacted?
              </li>
              <li>Do you agree with Brian when he thinks that a city park at night was more dangerous than the woods he
                was in? Explain.
              </li>
              <li>What would be a good title for this chapter?</li>
              <li>How do you like Brian? What characteristics/qualities do you like or dislike about him?</li>
              <li>Overall, how well do you think he is managing the difficulties coming his way?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener51} value={la7Essay51}/>

          <span className="days">LESSON 52 </span>
          <p>Watch the video <strong> Types of Conflict </strong> and then complete the assignment below.</p>
          <Video videoUrl="https://www.youtube.com/embed/6IHUuZ8Evag"/>
          <p>Stories generally move forward through conflict. <br/>
            There are several types of conflict in <i> Hatchet.</i><br/>
            List three types and describe what is happening with each (use examples from the novel and write in complete
            sentences).<br/>
            <ol className="vocab">After you state the type of conflict, explain how the conflict is playing out in the
              novel. <br/>
              <li>Person vs. _________</li>
              <li>Person vs. _________</li>
              <li>Person vs. _________</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener52} value={la7Essay52}/>

          <span className="days">LESSON 53 </span>
          <p> Read <i> Chapter 8 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Does it seem like things keep getting worse for Brian? How so?</li>
              <li>With this in mind, what title would you give to this chapter?</li>
              <li>What caused Brian to cry until he could cry no more? What dawns on him afterward?</li>
              <li>Brian believes one rule of survival is the most important. What is it?</li>
              <li>What came into his shelter at night and what injury did he suffer?</li>
              <li>Who did Brian dream about?</li>
              <li>Was Brian able to quickly figure out how to start a fire? Describe the process Brian goes through
                before he
                successfully starts a fire? What problems did he run into and how did he problem solve? How did his
                dream help
                him figure things out?
              </li>
              <li>Brian makes a mistake when using his hatchet. What does he do and how could this have really cost
                him?
              </li>
              <li>What was the tone or mood of this chapter? What do you think the author is trying to get you to
                feel?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li>apparent</li>
              <li>crude</li>
              <li>doze</li>
              <li>fierce</li>
              <li>imbed</li>
              <li> gorge</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener53} value={la7Essay53}/>

          <span className="days">LESSON 54 </span>
          <p> Read <i> Chapter 9 of Hatchet </i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab">
              <li>Why did Brian’s first attempts to start a fire fail?</li>
              <li>Why do you think the author included Brian’s thoughts about whether he had learned anything in his
                science
                classes that could be useful to him now? <i>"Did a teacher ever stand up there and say, 'This is what
                  makes a
                  fire.'" </i> Was there a point for the author to include this? Explain.
              </li>
              <li>How does Brian feel after he starts a fire? Why do you think this is?</li>
              <li>Brian calls the fire something more than just fire. What does he call it and why do you believe he
                chose
                this word?
              </li>
              <li>What title would you give to this chapter and explain why.</li>
              <li>How has Brian changed so far? Do you think these changes are for the better or worse? Explain.</li>
              <li>Brian has considered leaving his shelter close to the lake and moving elsewhere. What are the pros and
                cons
                of staying? What are the pros and cons of moving? After looking at your list, do you think he should
                stay or
                leave?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> blaze</li>
              <li> convulse</li>
              <li> depression</li>
              <li> dormant</li>
              <li> enormous</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener54} value={la7Essay54}/>

          <span className="days">LESSON 55 </span>
          <p> Read <i> Chapter 10 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>About how long has Brian been in the Canadian wilderness?</li>
              <li>Brian felt "he had never felt so rich somehow." What made him feel this way?</li>
              <li>What were the advantages and disadvantages of having the fire?</li>
              <li>Brian tries to read the tracks in the sand and thinks to himself, <i>"City boy with your city ways
                sitting in the sand trying to read the tracks and not knowing, not understanding. Why would anything
                wild come up from the water to play in the sand?"</i> What does this mean? Why do you think the author
                included this?
              </li>
              <li>Brian didn’t like the eggs, but he ate them anyway. Why?</li>
              <li>Brian had stopped thinking about his rescue. He became very upset with himself for doing this. Why?
              </li>
              <li>What would be a good title for this chapter?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> exasperation</li>
              <li> focus</li>
              <li> gratified</li>
              <li> ignite</li>
              <li> smoldered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener55} value={la7Essay55}/>

          <span className="days">LESSON 56 </span>
          <p> Read <i> Chapter 11 of Hatchet </i> and then answer the questions below in complete sentences.</p>
          <p>
            <ol className="vocab">
              <li>Brian has changed since he crash landed; both his body and way of thinking are different. What changes
                may he not notice about himself?
              </li>
              <li>Describe how he feels about his mind and body.</li>
              <li>What do think about his survival skills and ability to hunt and gather?</li>
              <li>Brian has things he tells himself he has to do. Do you think it’s important he always has things to
                keep him occupied? Explain.
              </li>
              <li>Describe how Brian plans to make a signal fire.</li>
              <li>What do you think would be the best way for Brian to get a fish?</li>
              <li>What title would you give this chapter? Explain why you chose this title.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> abrupt</li>
              <li> gnarled</li>
              <li> lunged</li>
              <li> fainter</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener56} value={la7Essay56}/>

          <span className="days">LESSON 57 </span>
          <p> Read <i> Chapter 12 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Brian made his fishing spear, but it didn’t work very well. Explain why.</li>
              <li>As Brian is moving out of the water, he decides he needs to make a bow and arrow. Then he thinks,
                "Maybe it was always that way, discoveries happened because they needed to happen." What does he mean by
                this?
              </li>
              <li>What happens that leaves Brian disappointed? By the end of the chapter, how does Brian feel?</li>
              <li>What is the main conflict in chapter 12? Explain why.</li>
              <li>Think of a few times when you had to deal with disappointment. How did you handle it? Do you prefer to
                get away from others, do you get angry and vent, or do you have a different way of dealing with it?
              </li>
              <li>What do you think is the best way to deal with disappointment?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> tapered</li>
              <li> staggering</li>
              <li> lunged</li>
              <li> initially</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener57} value={la7Essay57}/>

          <span className="days">LESSON 58 </span>
          <p> Read <i> Chapter 13 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>What title would you give to this chapter. Why?</li>
              <li>Brian feels like a new person. Explain how and where this happened.</li>
              <li>Brian says to himself that he is full of 'tough hope'. What does that mean?</li>
              <li>Do you think Brian is still changing? Explain why or why not.</li>
              <li>How much time has passed since the plane passed over him in chapter 12? How
                are you able to guess this?
              </li>
              <li>How does he feel about the fact he missed signaling the plane?</li>
              <li>When Brian sees the wolf, does that tell us anything?</li>
              <li>Describe what refraction is. How is Brian’s understanding of refraction help him finally catch a
                <li>What is the mood or tone of this chapter?</li>
                fish?
              </li>
              <li>Give an example where Brian shows his cleverness or resourcefulness.</li>
              <li>Give an example that shows he has grit and persistence.</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> verify</li>
              <li> exulted</li>
              <li> vital</li>
              <li> refracted</li>
              <li> corrosive</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener58} value={la7Essay58}/>

          <span className="days">LESSON 59 </span>
          <p> Read <i> Chapter 14 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Brian believes that mistakes he makes in the woods are far more serious than mistakes he makes in the
                city. Do you agree? Why or why not?
              </li>
              <li>What does Brian believe is the "great, single driving influence in nature"?</li>
              <li>What lessons did the skunk teach Brian?</li>
              <li>How was Brian able to store fish?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> carp</li>
              <li> impaired</li>
              <li> rectify</li>
              <li> sear</li>
              <li> sulfurous</li>
              <li> corrosive</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener59} value={la7Essay59}/>

          <span className="days">LESSON 60 </span>
          <p> Read <i> Chapter 15 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How much has Brian thought about going home in this chapter? Why do you think this is?</li>
              <li>Describe how living in the wild has taught Brian to see, smell, and hear differently than when he
                lived in the city.
              </li>
              <li>When Brian makes a mistake, the consequences feel serious to him. List two mistakes he made, the
                consequences he suffered for the mistakes and what he learned from
                them.
              </li>
              <li>How does Brian keep track of time?</li>
              <li>Why did the foolbirds drive Brian crazy? What was a trick that allowed him to find the foolbirds more
                easily? What let him know they were about to take flight?
              </li>
              <li>Why do you think the author reminds readers of the fact that it is much easier to get chicken from a
                store than to catch wild game?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> flurry</li>
              <li> bellowed</li>
              <li> stabilize</li>
              <li> camouflage</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener60} value={la7Essay60}/>

          <span className="days">LESSON 61 </span>
          <p> Read <i> Chapter 16 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Write a 4-5 sentence summary of this chapter. Describe what happens to Brian and what two dangerous
                things happen.
              </li>
              <li>Why did Brian believe that dipping his hands in the water was nearly the last act of his life?</li>
              <li>Brian was able to feel more lighthearted than usual and show some humor. Explain when this happened.
              </li>
              <li>Who do you think Brian is talking to when he says, "Is this the best you can do?"</li>
              <li>When he was assessing how much damage the tornado caused, what did he discover?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> stabilize</li>
              <li> bounded</li>
              <li> retrieved</li>
              <li> stymied</li>
              <li> sputtered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener61} value={la7Essay61}/>

          <span className="days">LESSON 62 </span>
          <p> Read <i> Chapter 17 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Why does Brian build a raft? What does he call it?</li>
              <li>He’s building the raft to get to something. What is he trying to find? Explain why.</li>
              <li>After the tornado, Brian thinks about home. What does he think he might be doing if he were back home?
                What do you think you’d be feeling if you were him?
              </li>
              <li>Brian used to be out of place living in the wilderness. Do you think he has grown to become more a
                part of the wilderness? Explain why or why not?
              </li>
              <li>How do you think Brian has been dealing with the difficulties that have come his way?</li>
              <li>What did Brian do to get his life back to normal?</li>
              <li>Do you think Brian is learning patience? Give an example to support your answer.</li>
              <li>What did it mean when the author says Brian slept a "healing sleep"?</li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> eddy</li>
              <li> stabilizer</li>
              <li> fuselage</li>
              <li> ruefully</li>
              <li> incessant</li>
              <li>hordes</li>
              <li>naturalist</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener62} value={la7Essay62}/>

          <span className="days">LESSON 63 </span>
          <p> Read <i> Chapter 18 of Hatchet </i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>How did Brian discover than he could cut his way through the aluminum skin of the plane?</li>
              <li>He made a mistake when he tried to bend the aluminum back from the braces. Describe what happened and
                how he solved the problem.
              </li>
              <li>Why did he bother to save the aluminum he cut away?</li>
              <li>Describe Brian’s attempts to get down to the plane.</li>
              <li>What was the outcome of his trip to the plane? Was he able to recover anything?</li>
              <li>What did Brian see that made him scream in horror?</li>
              <li>What was your reaction when Brian dropped his hatchet in the water?</li>
              <li>He knew he had to get his hatchet back because it was one of the things that had been keeping him
                alive. Write a list of all the things he used
                the hatchet for in his survival since he crash landed.
              </li>
              <li>You are getting close to the end of the book. There are a few ways things could go for Brian. He could
                be rescued, he could live out the rest of his life in the woods, or he could die. How do you think it
                will go for him? Can you think of an alternate ending not mentioned here?
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> frenzied</li>
              <li> propel</li>
              <li> formers</li>
              <li> reconsidered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener63} value={la7Essay63}/>

          <span className="days">LESSON 64 </span>
          <p> Read <i> Chapter 19 and Epilogue</i> and then answer the questions below.</p>
          <p>
            <ol className="vocab">
              <li>Do you remember the first thing Brian said to the pilot?</li>
              <li>Why did Brian not like having a rifle and lighter?</li>
              <li>What did Brian decide to do with the food that was in the survival bag?</li>
              <li>How did Brian think the items in the survival bag changed him?</li>
              <li>Think about Brian and how he acted when he first crash-landed in the wilderness. Describe how Brian
                changed in a permanent way.
              </li>
              <li>What became of the secret about his mother that he had been keeping?</li>
              <li>What is the main conflict in <i>Hatchet</i> and how is it resolved?</li>
              <li>Was Brian fortunate to be rescued when he was? How so?</li>
              <li>What did Brian think about the hatchet when his mother first gave it to him? How did he feel about it
                by the end of the story?
              </li>
              <li>Was there ever in point in the novel you would have wanted to change places with Brian? Explain why or
                why not.
              </li>
              <li>After Brian is rescued, do you think he will have a difficult time adjusting to being at home again?
              </li>
              <li>Did you feel that Brian’s story was believable and could have happened as the author described it?
                Explain your answer.
              </li>
            </ol>
            <h4>Vocabulary</h4>
            For each vocabulary word below, write a definition and then write a sentence using the word.<br/>
            <ol className="vocab">
              <li> sheath</li>
              <li> antiseptic</li>
              <li> pitch</li>
              <li> surge</li>
              <li> furor</li>
              <li> oblivious</li>
              <li> unwittingly</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener64} value={la7Essay64}/>

          <span className="days">LESSON 65 </span>
          <h4>Five Paragraph Essay</h4>
          <p className="topBottom"> Do you think Brian is better or worse off for having experienced surviving alone in
            the Canadian
            wilderness? Before answering this question for your essay, think about the qualities he develops during
            that time and how these qualities may affect Brian for the rest of his life.</p>
          <p> Essay Requirements</p>
          <ul className="list">
            <li>Your first paragraph should begin with a hook to grab your reader’s attention. This should be followed
              by a clear thesis statement (main idea of your essay). This statement should convey the points or
              arguments you are going to make.
            </li>
            <li>Paragraphs 2 through 4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use a different example. Using direct quotes from the
              novel can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-6 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer" target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help in getting started. </p>
          <textarea className="textArea" onChange={onChangela7Listener65} value={la7Essay65}/>

          <span className="days">LESSON 66 </span>
          <h4>Survival Kit</h4>
          <p className="topBottom">Shortly before Brian gets rescued, you are given clues that summer is ending and it
            will be cold soon. Winter in the Canadian wilderness would have presented new problems
            for Brian to deal with. List what you
            think these problems would have been. </p>
          <p className="topBottom">If you could prepare a survival kit to successfully get Brian through the winter,
            what would you include in the kit? List at least ten items you would place in the kit.
            You may research this online.</p>
          <p className="topBottom">Now imagine you are the one who is trying to survive in the Canadian wilderness in
            the middle of winter. Are there any items you would place in the survival kit for yourself that you didn’t
            include for
            Brian? </p>
          <textarea className="textArea" onChange={onChangela7Listener66} value={la7Essay66}/>

          <span className="days">LESSON 67 </span>
          <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy: Close
            reading - Informational text - Mysteries of the Past. </p>
          <p className="topBottom">Read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-44/a/welcome-to-the-mysteries-of-the-past-unit?modal=1"
            rel="noreferrer" target="_blank"> an
            overview <i>(click here)</i> </a> of what you will cover in this unit.</p>
          <p className="topBottom">Review the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-44/a/mysteries-of-the-past-unit-vocabulary?modal=1"
            rel="noreferrer" target="_blank"> Vocabulary </a>for this Unit.</p>
          <Video videoUrl="https://www.youtube.com/embed/5Eepm6Px5pc"/>
          <Video videoUrl="https://www.youtube.com/embed/-GY2Cj1w_PY"/>
          <Video videoUrl="https://www.youtube.com/embed/msHjgIsYOkU"/>
          <p className="topBottom">After you read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-45/e/mysteries-of-the-past--reading-informational-text--the-roanoke-voyages-7?modal=1"
            rel="noreferrer" target="_blank"> The Roanoke Voyages 7, </a>
            answer the practice questions at the bottom of the article linked here from Khan Academy.
            Then in the textbox below, write a brief summary about what you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener67} value={la7Essay67}/>

          <span className="days">LESSON 68 </span>
          <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy: Close
            reading: argumentative text. </p>
          <Video videoUrl="https://www.youtube.com/embed/GvWH9ZXy9gY"/>
          <Video videoUrl="https://www.youtube.com/embed/XRt1N0sJJQo"/>
          <Video videoUrl="https://www.youtube.com/embed/NXO3KT8bne4"/>
          <p>After you read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:close-reading-argumentative-text/e/mysteries-of-the-past--reading-informational-text--wanted--more-research-for-roanoke-7?modal=1"
            rel="noreferrer" target="_blank">WANTED: More Research For Roanoke, </a>
            complete the questions that follow. Then in the textbox below, write a brief summary about what you
            read.</p>
          <textarea className="textArea" onChange={onChangela7Listener68} value={la7Essay68}/>

          <span className="days">LESSON 69 </span>
          <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy:
            Mysteries of the Past: Applying vocabulary knowledge. </p>
          <Video videoUrl="https://www.youtube.com/embed/CiNggzdWkIo"/>
          <Video videoUrl="https://www.youtube.com/embed/fiaPqgwJFo4"/>
          <Video videoUrl="https://www.youtube.com/embed/l3yWmXbC36s"/>
          <p>After you read <a href=" " rel="noreferrer" target="_blank"> "The Roanoke Voyages," </a>complete the
            questions that follow the article. Then in the textbox below, write a brief summary about what you
            read.</p>
          <textarea className="textArea" onChange={onChangela7Listener69} value={la7Essay69}/>

          <span className="days">LESSON 70 </span>
          <p className="topBottom">Watch the video and complete the assignments posted below from Khan Academy:
            Reading for understanding: fiction. </p>
          <Video videoUrl="https://www.youtube.com/embed/gUW2jit3uvo"/>
          <p>After you read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:untitled-47/e/mysteries-of-the-past--reading-informational-text--the-mystery-child-7?modal=1"
            rel="noreferrer" target="_blank"> "The Mystery Child," </a>complete
            the questions that follow the article. Then in the textbox below, write a brief summary about what
            you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener70} value={la7Essay70}/>

          <span className="days">LESSON 71 </span>
          <p className="topBottom">Watch the videos and complete the assignments posted below from Khan Academy:
            Close reading - Informational text - Mysteries of the Past. </p>
          <Video videoUrl="https://www.youtube.com/embed/Zr1xLtSMMLo"/>
          <Video videoUrl="https://www.youtube.com/embed/ZASEsKwEvqE"/>
          <p>After you read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-mysteries-of-the-past/x4aa9073b12675eb1:reading-for-understanding-fiction/e/mysteries-of-the-past--reading-historical-fiction-7?modal=1"
            rel="noreferrer" target="_blank"> "A View from the Walnut Tree," </a>complete the questions that
            follow the article. Then in the textbox below, write a brief summary about what you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener71} value={la7Essay71}/>

          <span className="days">LESSON 72</span>
          <p>Watch the the video below about <strong>Figurative Language</strong> and then answer the questions that
            follow.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/rW4DtZGxjq0"/>
          <p className="topBottom">Figurative language refers to any use of language that goes beyond the literal
            meaning of the words themselves.</p>

          <p className="topBottom">We most often associate figurative language with poetry, but figurative language
            widely is found in everything from fiction and folk music to drama and our daily speech. It's a
            sophisticated, creative use
            of language to convey meaning and mood. It's an important tool in the writer's toolbox. </p>

          <p className="topBottom"><strong>Hyperbole</strong> uses extreme exaggeration and is not meant to be taken
            literally. Examples: I'm so hungry I could eat a horse. I could have died of embarrassment.</p>

          <p className="topBottom"><strong>Idioms</strong> are figures of speech that cannot be understood from a
            literal
            understanding of the words
            alone. Examples: <span style={{ color: "#4f5979" }}><i>The cat is out of the bag. Stop beating around the bush.</i></span>
            <br/>Someone visiting from
            another country would not understand these phrases without someone explaining the meaning.</p>

          <p className="topBottom"><strong>Similes </strong>make comparisons between two unrelated elements by using
            'like' or 'as' to highlight a
            common quality both things share. Examples: Her eyes shone like diamonds. He was as strong as a horse.
          </p>

          <p className="topBottom"><strong>Metaphors</strong> make comparisons between two unrelated things by
            stating one thing is the other thing. Example: Life is a rollercoaster.</p>

          <p className="topBottom"><strong>Oxymorons </strong>combine two opposing elements into a single phrase to be
            thought provoking or funny. Example: Deafening silence. A known secret.</p>

          <p className="topBottom"><strong>Personification</strong> is a metaphor where human actions, feelings or
            traits are given to a non-human. Examples: Books were her constant companions. That car's a beauty. An angry
            sky.</p>

          <p className="topBottom"><strong>Alliteration </strong>is the repetition of the same letter sound across the
            start of several words in a line of text. The word comes from the Latin "littera," meaning "letter of the
            alphabet". Example: The
            slithering snake slid sideways silently. </p>

          <p className="topBottom"><strong>Assonance </strong>is the repetition of vowel <i>sounds</i> within a group of
            words. Example: Fleet feet
            sweep by sleeping geese. Dr. Suess often used alliteration and assonance in his books: Through three
            cheese trees three free fleas flew. While these fleas flew, freezy breeze blew. </p>

          <p className="topBottom"><strong>Allusion</strong> is an <i>implied </i>reference to a person, event, or thing
            based on the
            assumption that you
            know what the person is talking about. The author assumes the reader will understand the reference.
            Example: <i> You're acting like such a Scrooge! </i>This assumes the reader is familiar with the Scrooge
            character from Dickens's A Christmas Carol. This means that the person is being selfish, like the
            character from the story.</p>

          <p className="topBottom">State which type of figurative language is used in each example below:<br/>
            1. "Her face is like a sunbeam." <br/>
            2. "The tropical storm slept for two days." <br/>
            3. "I had so much homework, I needed a pickup truck to carry all my books home!" <br/>
            4. What is a literary technique in which two contradictory words come together for a special effect? For
            example, <i>original copy</i> or <i>jumbo shrimp</i>?<br/>
            5. "Let us go forth and lead the land we love" contains an example of what type of figurative
            language?<br/>
            6. "We real cool. We Left school. We Lurk late. We Strike straight. We Sing sin. We Thin gin. We Jazz
            June. We Die soon." In this poem by Gwendolyn Brooks, what poetic device is used?</p>
          <p>
            <ol className="vocab">Give an example for each of the following. <br/>
              <li>Hyperbole</li>
              <li>Idiom</li>
              <li>Simile</li>
              <li>Metaphor</li>
              <li>Oxymorons</li>
              <li>Personification</li>
              <li>Alliteration</li>
              <li>Assonance</li>
              <li>Allusion</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener72} value={la7Essay72}/>

          <img src={require("../../public/images/poems/poetry.jpg")} alt="poetry"/>
          <span className="days">LESSON 73 </span>
          <h4> What makes a poem … a poem?</h4>
          <p className="topBottom">What exactly makes a poem … a poem? Poets themselves have struggled with this
            question, often using metaphors to approximate a definition. Is a poem a little machine? A firework? An
            echo? A dream? </p>
          <p> What makes a poem a poem is its ability to make the reader feel something. It may rhyme, but doesn’t have
            to. Using few words, it creates a picture in the reader's mind and transports them to another place and
            time. </p>
          <Video videoUrl="https://www.youtube.com/embed/JwhouCNq-Fc"/>
          <p className="margin-para">
            <ol className="vocab">
              <li> What are characteristics traditionally associated with poetry?</li>
              <li> In what way was Joanna Smith’s tweet like a poem?</li>
              <li> The word poetry comes from the Greek "poiesis." What does this word mean?</li>
              <li> What is a haiku?</li>
              <li> What does Reinhard Dohl’s "Apfel" have in common with e.e. cummings’ "l(a)"?</li>
              <li> What does the Dartmouth study mentioned in the video suggest about the nature of poetry? Were you
                surprised by the results of the study?
              </li>
              <li> William Carlos Williams described poetry as a machine made of words. Lilian Moore described poetry as
                a firework. After watching the video, think of another metaphor that represents poetry well.
              </li>
              <li> Find an example from a novel or short story that reads like poetry. What makes it sound poetic?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener73} value={la7Essay73}/>

          <span className="days">LESSON 74 </span>
          <h4>The art of the metaphor</h4> <p>How do metaphors help us better understand the world? And, what makes a
          good metaphor? Explore these questions with writers like Langston Hughes and Carl Sandburg, who have mastered
          the art of bringing a scene or emotion to life.</p>
          <Video videoUrl="https://www.youtube.com/embed/A0edKgL9EgM"/>
          <h4>Fog</h4>
          <p>BY CARL SANDBURG</p>
          <img style={{ width: "600px" }} src={require("../../public/images/poems/fog.jpg")} alt="fog poem"/><br/>

          <p className="topBottom"><h4>Mother to Son</h4>
            <ul style={{ color: "#4f5979" }}>
              <li>BY LANGSTON HUGHES</li>
              <li>Well, son, I’ll tell you:</li>
              <li>Life for me ain’t been no crystal stair.</li>
              <li>It’s had tacks in it,</li>
              <li>And splinters,</li>
              <li>And boards torn up,</li>
              <li>And places with no carpet on the floor—</li>
              <li>Bare.</li>
              <li>But all the time</li>
              <li>I’se been a-climbin’ on,</li>
              <li>And reachin’ landin’s,</li>
              <li>And turnin’ corners,</li>
              <li>And sometimes goin’ in the dark</li>
              <li>Where there ain’t been no light.</li>
              <li>So boy, don’t you turn back.</li>
              <li>Don’t you set down on the steps</li>
              <li>’Cause you finds it’s kinder hard.</li>
              <br/>
              <li>Don’t you fall now—</li>
              <li>For I’se still goin’, honey,</li>
              <li> I’se still climbin’,</li>
              <li>And life for me ain’t been no crystal stair.</li>
            </ul>
          </p>
          <p className="topBottom"><strong>Answer the following questions based on the video and poems above.</strong>
            <ol className="vocab">
              <li> What is a metaphor? Define it using your own words.</li>
              <li> What is a simile?</li>
              <li> "An elephant in the room" is a way of saying what?</li>
              <li> In the video, the speaker says that a metaphor is almost never factually true, but still can be
                "right" or not. Her example is that "We know what it feels like to be a square wheel but not what it
                feels like
                to be a tired whale." What do you think it means to say "I feel like a square wheel"? Can you describe
                that
                feeling in ordinary language, without using any images?
              </li>
              <li> Langston Hughes’s poem "Mother to Son" uses a house as a metaphor for a hard life. If you had to
                describe your own life right now with a metaphor, what object would you compare your life to? (You can
                use
                a simile if that’s easier, and write the phrase "My life feels like a _______" as a way to get started.)
                Once you’ve picked the object, describe the object for a few sentences. (What you’re doing here is
                making
                up and exploring a new extended metaphor of your own.)
              </li>
              <li> Do you think that a description of a cricket would be read the same way or mean the same thing if it
                had been in a science paper about crickets instead of a poem? Do we read things in different ways at
                different times, and can you say why a person might want to read a poem (or listen to the words of a
                song)
                at all?
              </li>
              <li> How would you describe the mother in Langston Hughes' poem "Mother to Son"? What kind of life has she
                had?
              </li>
              <li> Why do you think poets enjoy using metaphors so much?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener74} value={la7Essay74}/>

          <span className="days">LESSON 75 </span>
          <h4>Become a slam poet in five steps</h4>
          <p className="topBottom">With enough passion and practice, becoming a slam poet is within your reach. Explore
            a distant memory on paper, then read it out loud. Edit. Try reading it out loud again, and add your
            finishing touches. In this TedEd video, Gayle Danley offers five steps to being a slam poet — while being
            downright poetic in the process.</p>
          <Video videoUrl="https://www.youtube.com/embed/9f8VcV8v2LE"/>
          <img src={require("../../public/images/poems/wildgeese.jpg")} alt="wild geese poem"/><br/>
          <Video videoUrl="https://www.youtube.com/embed/zIEXGgQi3T8"/>
          <ol className="vocab">
            <li>What is the yellow paper Tyler is writing about?</li>
            <li>What is Ms. Gayle's step 2?</li>
            <li>When Ms. Gayle says, "Cut the fat," what does she mean?</li>
            <li>Which step gets repeated?</li>
            <li>What is Tyler writing about?</li>
            <li>If you had to write a poem, what would it be about?</li>
            <p style={{padding: "15px 30px 5px"}}>In Mary Oliver's poem <i>Wild Geese,</i> the poet demonstrates her understanding of people needing a
              sense of purpose. She also understands how many people feel like they are an outsider. In simple
              words, she encourages her readers to look to nature for answers to life's questions. </p>
            <li>How does the poem <i> Wild Geese </i> make you feel? (sad? hopeful? melancholy? Why?</li>
            <li> The poet uses words like "despair" and "lonely" and creates an image of someone walking on his/her
              knees. Is this poem hopeful or hopeless? Both at once? Or somewhere in between?</li>
            <li> In <i>Wild Geese, </i> what is the poet's message? What is she trying to convince us of? Are you
              convinced?</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener75} value={la7Essay75}/>

          <span className="days">LESSON 76 </span>
          <h4>Why Shakespeare loved iambic pentameter</h4>
          <p>Shakespeare sometimes gets a bad rap for his complex plots and antiquated language. But a quick peek into
            the rhythm of his words reveals a poet deeply rooted in the way people spoke in his time — and still speak
            today.</p>
          <p className="topBottom">Why do Shakespeare’s words have such staying power? In the first video, David T.
            Freeman and Gregory Taylor uncover the
            power of iambic pentameter. In the second video, Crash Course covers Shakespeare’s Sonnets, including <i>Shall
              I Compare Thee to a Summer’s Day.</i></p>
          <Video videoUrl="https://www.youtube.com/embed/I5lsuyUNu_4"/>
          <Video videoUrl="https://www.youtube.com/embed/bDpW1sHrBaU"/>
          <ul style={{ color: "#4f5979", fontStyle: "italic" }}>
            <li><strong> Shall I compare thee to a summer's day?</strong></li>
            <li> Thou art more lovely and more temperate:</li>
            <li> Rough winds do shake the darling buds of May,</li>
            <li> Sometime too hot the eye of heaven shines,</li>
            <li> And often is his gold complexion dimm'd;</li>
            <li> And every fair from fair sometime declines,</li>
            <li> By chance or nature's changing course untrimm'd;</li>
            <li> But thy eternal summer shall not fade</li>
            <li> Nor lose possession of that fair thou owest;</li>
            <li> Nor shall Death brag thou wander'st in his shade,</li>
            <li> When in eternal lines to time thou growest:</li>
            <li> So long as men can breathe or eyes can see,</li>
            <li> So long lives this and this gives life to thee.</li>
          </ul>
          <br/>
          <p className="topBottom">The following questions are based on the videos and poem above.</p>
          <ol className="vocab">
            <li> What is the stress pattern of an iamb?</li>
            <li> (Fill in the blank) Iambic pentameter contains _____ feet, each of which contains _____ syllables.</li>
            <li> Give an example of iambic pentameter.</li>
            <li> Shakespeare's characters often speak in iambic pentameter when they are feeling what?</li>
            <li> Think about how you speak when you are feeling a strong emotion: anger, happiness, sadness, and
              disappointment. In trying to express yourself, do you use specific kinds of words? Do you use short
              sentences or long sentences? And does your language change depending on the kind of emotion you’re
              feeling?
            </li>
            <li> Review the definitions of "trochee" and "dactyl." To which kinds of moods or tones might these types of
              feet be suited, based on the way they sound in verse?
            </li>
            <li> What is the message of the sonnet?</li>
            <li> In "Sonnet 18," is the "beloved" ultimately better or worse than a summer's day?</li>
          </ol>
          <br/>
          <textarea className="textArea" onChange={onChangela7Listener76} value={la7Essay76}/>

          <span className="days">LESSON 77 </span>
          <h4>Insults by Shakespeare</h4> <p className="topBottom">"You’re a fishmonger!" By taking a closer look at
          Shakespeare’s
          words–specifically his insults–we see why he is known as a master playwright whose works transcend time
          and appeal to audiences all over the world.</p>
          <p className="topBottom"> Along with writing some of most famous quotes in literature, Shakespeare’s insults,
            put-downs, and
            cussing were second to none. After you watch the video and read the poem below, answer the questions in
            the textbox below. </p>
          <Video videoUrl="https://www.youtube.com/embed/vdCjKH5IKJ8"/>
          <p className='margin-para'>Sometimes Shakepeare’s insults were ironic; they were meant to have the opposite
            effect and be a
            compliment. He did this in <strong> Sonnet 130: My Mistress Eyes are Nothing Like the
              Sun.</strong> Shakespeare
            shows irony through different metaphors and similes.</p>
          <ul>
            <li className="poem">My mistress' eyes are nothing like the sun;</li>
            <li>Coral is far more red than her lips' red;</li>
            <li className="interpret">Translation: Her lips aren’t even a pale orange, much less red.</li>
            <li>If snow be white, why then her breasts are dun;</li>
            <li className="interpret">Translation: Compared to snow, her breasts are grayish-brown.</li>
            <li>If hairs be wires, black wires grow on her head;</li>
            <li>I have seen roses damasked, red and white,</li>
            <li className="interpret">Translation: I have seen a mix of red and white roses</li>
            <li>But no such roses see I in her cheeks;</li>
            <li className="interpret">But I don’t see those colors in her cheeks.</li>
            <li>And in some pérfumes is there more delight</li>
            <li>Than in the breath that from my mistress reeks.</li>
            <li className="interpret"> And some perfumes smell more delightful than my mistress’ reeking
              breath.
            </li>
            <li>I love to hear her speak, yet well I know</li>
            <li>That music hath a far more pleasing sound.</li>
            <li className="interpret"> Her voice isn’t much to listen to.</li>
            <li>I grant I never saw a goddess go;</li>
            <li>My mistress, when she walks, treads on the ground.</li>
            <li className="interpret"> Although I’ve never seen a goddess, I know my mistress is not one.</li>
            <li> &nbsp; And yet, by heaven, I think my love as rare</li>
            <li> &nbsp; As any she belied with false compare.</li>
            <li className="interpret"> &nbsp; I think my beloved is as special as any she is compared to with lies.
            </li>
          </ul>
          <br/>
          <h4>Questions</h4>
          <ol className="vocab">
            <li className="poem"><i>Based on the video: </i>How do you think audience reactions to Shakespeare's
              work has changed over the years? How have his audiences changed over time?
            </li>
            <li> According to Gudenrath, what is one of Shakespeare's most impressive accomplishments?</li>
            <li> What is the purpose of dialogue in drama?</li>
            <li> What does fishmonger mean in the context of Shakespeare's play Hamlet?</li>
            <li> What happens in Romeo and Juliet that is akin to giving someone the finger?</li>
            <li>Why do you think Shakespeare uses insults?</li>
            <li> Based on sonnet 130 - The sonnet shifts at line 13 (near the bottom). The shift is indicated by the
              indented lines, the change in rhyme scheme, and the change in tone. In lines 1-12, describe how
              Shakespeare compares the mistress with nature's beauties (like snow and roses).
            </li>
            <li>The last two lines (concluding couplet) are unexpected. Why is this? Describe how Shakespeare
              unexpectedly takes readers in a different direction.
            </li>
            <li>How did you like the sonnet? Explain why.</li>
            <li>How would you feel if someone you were close to wrote something like this about you? After pointing
              out all of your flaws, they nonetheless are able to see in an honest way how rare and special you are?
              Would it still be insulting? Explain.
            </li>
          </ol>
          <br/>
          <textarea className="textArea" onChange={onChangela7Listener77} value={la7Essay77}/>

          <span className="days">LESSON 78 </span>
          <h4>Everything you need to know to read Homer’s "Odyssey"</h4>
          <p>An encounter with a man-eating giant. A sorceress who turns men into pigs. A long-lost king taking back
            his throne. On their own, any of these make great stories. But each is just one episode in the
            "Odyssey," a 12,000-line poem spanning years of ancient Greek history and legend. So how do we make
            sense of this massive text? Jill Dash shares everything you need to know to read Homer’s "Odyssey."</p>
          <Video videoUrl="https://www.youtube.com/embed/8Z9FQxcCAZ0"/>
          <Video videoUrl="https://www.youtube.com/embed/MS4jk5kavy4"/>
          <h4>Based on the video <i>Everything you need to know to read Homer’s "Odyssey"</i></h4>
          <ol className="vocab">
            <li>When did the Greek alphabet first appear?</li>
            <li>What helped the rhapsodes remember and recite the poem?</li>
            <li>What is xenia?</li>
            <li>Which god has hindered Odysseus’ journey home?</li>
            <li>Recall that the poem begins in medias res, in the middle of things. From a narrative standpoint,
              what are some benefits of beginning in this fashion?
            </li>
            <li>In addition to the ancient Greeks, the ancient Romans also had a code of hospitality like xenia,
              called hospitium. What do you think were some of the challenges of such a code, and do you think a
              code like this would benefit our society today?
            </li>
            <li>The oral tradition of "Iliad" and "Odyssey" make these stories cultural, communal, entertainment
              experiences. Since Homer’s time, in what ways has public, communal entertainment changed?
            </li>
            <h4>Based on the second video <i>A Long and Difficult Journey, or The Odyssey: Crash Course Literature</i>
            </h4>
            <li>What is an "Epic Poem"?</li>
            <li>Who is Telemachus?</li>
            <li>Who is Penelope?</li>
            <li>What are the "Heroic Characteristics" of a Greek Hero?</li>
            <li>What is the epic's "Double Standard" for women?</li>
            <li> How many years is Odysseus' voyage?</li>
            <li> How did the blind author, Homer, compose the Odyssey?</li>
            <li> When did Homer create the Iliad?</li>
            <li> How long after Homer's creation were the Iliad and the Odyssey written down?</li>
            <li> At what time in history does the Odyssey begin?</li>
            <li> Why does Odysseus kill the suitors?</li>
            <li> How does Odysseus get all his men killed?</li>
            <li> How does Odysseus get home?</li>
            <li> Why does Odysseus kill the suitors?</li>
            <li> What is the Odyssey about, if not war?</li>
          </ol>
          <p className="topBottom">If you’d like to read the Odyssey, a great version of it is the Graphic Novel "The
            Odyssey" by Gareth
            Hinds.</p>
          <textarea className="textArea" onChange={onChangela7Listener78} value={la7Essay78}/>

          <span className="days">LESSON 79 </span>
          <h4><i style={{ color: "#4f5979" }}>From TedEd </i> The poet who painted with his words</h4> <p>Among the
          great poets of literary history, certain names
          like Homer, Shakespeare and Whitman are instantly recognizable. However, there’s an early 20th century
          great poet whose name you may not know: Guillaume Apollinaire. During Apollinaire’s short lifetime he
          created poetry that combined text and image in a way that seemingly predicted an artistic revolution to
          come. Watch the video below and then answer the questions about Apollinaire.</p>
          <Video videoUrl="https://www.youtube.com/embed/YJ0x1YOuMwQ"/>
          <h4> Ocean of Earth </h4>
          <ul style={{ color: "#4f5979"}}>
            <li>by GUILLAUME APOLLINAIRE</li>
            <li className="poem">I have built a house in the middle of the Ocean</li>
            <li>Its windows are the rivers flowing from my eyes</li>
            <li>Octopi are crawling all over where the walls are</li>
            <li>Hear their triple hearts beat and their beaks peck against the windowpanes</li>
            <br/>
            <li>House of dampness</li>
            <li>House of burning</li>
            <li>Season’s fastness</li>
            <li>Season singing</li>
            <li>The airplanes are laying eggs</li>
            <li>Watch out for the dropping of the anchor</li>
            <br/>
            <li>Watch out for the shooting black ichor</li>
            <li>It would be good if you were to come from the sky</li>
            <li>The sky’s honeysuckle is climbing</li>
            <li>The earthly octopi are throbbing</li>
            <li>And so very many of us have become our own gravediggers</li>
            <li>Pale octopi of the chalky waves O octopi with pale beaks</li>
            <li>Around the house is this ocean that you know well</li>
            <li> And is never still</li>
          </ul><br/>
          <p><strong>Questions</strong></p>
          <ol className="vocab"><i>Based on the video:</i><br/>
            <li className="poem">Which new form of liberty does Apollinaire experiment with in his poetry?</li>
            <li> Which parts of the poem "Lettre Océan" could best be described as traditional poetry? Explain your answer.</li>
            <li> In addition to being a poet, Guillaume Apollinaire was also what?</li>
            <li> What painter was Guillaume Apollinaire close to?</li>
            <li> Guillaume Apollinaire wanted to push the "quest of another reality." This is not defined by science
              and reason, so he created a new word. What was it?</li>
            <li> What is a calligram?</li>
            <li> How could you explain "avant-garde" in France during the early 20th century?</li>
            <li> Which parts of the poem "Lettre-Océan" could best be described as traditional poetry? Explain your
              answer.</li>
            Based on the poem <i>Ocean of Earth:</i> <br/>
            <li>What is the imagery in the poem? </li>
            <li> What is the mood of the poem? (How does it make you feel?)</li>
            <li> What is the message of the poem?</li>
            <li> Were you intrigued by the title of the piece? Explain what you thought of it.</li>
          </ol>
          <img src={require("../../public/images/poems/apollinaire.jpg")} alt="apollinaire"/><br/>
          <textarea className="textArea" onChange={onChangela7Listener79} value={la7Essay79}/>

          <span className="days">LESSON 80 </span>
          <h4> A poetic experiment: Walt Whitman, interpreted by three animators</h4> <p>Take a journey through Walt
          Whitman’s poem ‘A Noiseless Patient Spider’ with the help of three animators who each used a different
          animation style to bring this beautiful poem to life.</p>
          <Video videoUrl="https://www.youtube.com/embed/6jCw8ydqkrg"/>
          <h4>A Noiseless Patient Spider</h4>
          <ul style={{ color: "#4f5979"}}>
            <li>BY WALT WHITMAN</li>
            <li className="poem">A noiseless patient spider,</li>
            <li>I mark’d where on a little promontory it stood isolated,</li>
            <li>Mark’d how to explore the vacant vast surrounding,</li>
            <li>It launch’d forth filament, filament, filament, out of itself,</li>
            <li>Ever unreeling them, ever tirelessly speeding them.</li>
            <br/>
            <li>And you O my soul where you stand,</li>
            <li>Surrounded, detached, in measureless oceans of space,</li>
            <li>Ceaselessly musing, venturing, throwing, seeking the spheres to connect them,</li>
            <li>Till the bridge you will need be form’d, till the ductile anchor hold,</li>
            <li>Till the gossamer thread you fling catch somewhere, O my soul.</li>
          </ul>
          <br/>
          <h4>Questions</h4>
          <ol className="vocab">
            <li>Whitman uses alliteration (the occurrence of the same letter or sound at the beginning of closely
              connected or adjacent words) in this poem. Read the poem and list the phrases that contain
              alliteration below. Why would a writer use alliteration?
            </li>
            <li>Find the words that describe both the spider and the soul in similar ways.</li>
            <li>What specific words or phrases does Walt Whitman use to personify the spider and thus create a
              metaphor between the spider and the soul?
            </li>
            <li>Whitman repeats the phrase "till the," twice at the beginning of each of the last two lines of the
              poem. Why might he have done this?
            </li>
            <li>How would you describe the mood or tone of the piece?</li>
            <li>How does Whitman let his readers know the spider is lonely?</li>
            <li>Were you reminded of any of your own life experiences with loneliness?</li>
            <li>Does anything about the poem’s similarities or dissimilarities to those things surprise you?</li>
            <li>What is the message of the poem?</li>
          </ol>
          <h4>Define these vocabulary words found in the poem: </h4>
          <ol className="vocab">
            <li> promontory</li>
            <li> filament</li>
            <li> unreeling</li>
            <li> musing</li>
            <li> ductile</li>
            <li> gossamer</li>
            <li> venturing</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener80} value={la7Essay80}/>

          <span className="days">LESSON 81 </span>
          <h4>Robert Frost (1874- 1963)</h4>
          <p className="topBottom">Robert Frost was an American poet known for his poems about life in New England’s
            countryside. When his
            father died in 1885, Frost and his sister lived with their grandparents while his mother pursued work as
            a teacher in the northeast. </p>
          <p className="topBottom">After graduating high school, he briefly attended Dartmouth College but quit to
            pursue becoming a poet.
            Until he was unable to earn money as a poet, he farmed and taught school. Shortly after getting married
            and starting a family, he moved to England and published collections of his poems. When he moved back to
            the United States three years later he was famous. </p>
          <h4>"The Road Not Taken" by Robert Frost</h4>
          <Video videoUrl="https://www.youtube.com/embed/yGB_K_xlHdI?list=PLJicmE8fK0Egxi0hgy5Tw-NFyLcpJ4bzJ"/>
          <p>Analysis of "The Road Not Taken" </p>
          <Video videoUrl="https://www.youtube.com/embed/fMcsadmTPoE"/>
          <p><strong>All-In for Allegory</strong><br/>
            The Road Not Taken is an example of an allegory.  An allegory is a story or poem that has two meanings: a
            literal meaning and a figurative one. </p>
          <Video videoUrl="https://www.youtube.com/embed/4IOsFCieGQA"/>
          Analysis of Fire and Ice
          <Video videoUrl="https://www.youtube.com/embed/p0YjUfmwBC0"/>
          <h4 className="topBottom">BY ROBERT FROST</h4>
          <ul style={{ color: "#4f5979" }}><strong> Fire and Ice</strong><br/>
            <li>Some say the world will end in fire,</li>
            <li>Some say in ice.</li>
            <li>From what I’ve tasted of desire</li>
            <li>I hold with those who favor fire.</li>
            <li>But if it had to perish twice,</li>
            <li>I think I know enough of hate</li>
            <li>To say that for destruction ice</li>
            <li>Is also great</li>
            <li>And would suffice.</li>
          </ul>
          <br/>
          <h4>Questions</h4>
          <ol className="vocab"><i>Based on the poem "The Road Not Taken" </i><br/>
            <li>What is the message of the poem? What is it about?</li>
            <li>What does the "road less traveled" mean?</li>
            <li>Are there clues that Frost believes one road was not necessarily much better than another?
              Explain.
            </li>
            <li>Are there clues that show Robert Frost is glad he took one path over the other? Explain.</li>
            <li>What is the imagery in the poem?</li>
            <li>What is the mood of the poem? (How does it make you feel?)</li>
            <li>Write about a time you had to make a tough decision. Did you choose the easy road or the hard
              road.
            </li>Based on the poem <i>"Fire and Ice": </i><br/>
            <li>What is your interpretation of the poem? Summarize what you think it means.</li>  </ol>
          <textarea className="textArea" onChange={onChangela7Listener81} value={la7Essay81}/>

          <span className="days">LESSON 82 </span>
          <h4><i>If </i>by Rudyard Kipling </h4>
          <Video videoUrl="https://www.youtube.com/embed/sqOgyNfHl1U"/>
          <h4><i>First Kiss</i> by Tim Seibles </h4>
          <Video videoUrl="https://www.youtube.com/embed/dv9sgFHS2Do?list=PLJicmE8fK0Egxi0hgy5Tw-NFyLcpJ4bzJ"/>
          <ol className="vocab">
            <p>Based on the poem <i>"If "</i>by Rudyard Kipling: </p>
            <li>Why is Kipling’s poem titled "If"?</li>
            <li> Qualities which ‘make a man’ according to the poet in ‘If’.</li>
            <li> What does the poet say about lies and hate?</li>
            <li>Why does the poet call triumph and disaster two impostors?</li>
            <li> What poetic devices, structural or stylistic techniques are used in the poem?</li>
            <li> How can power of Will help a person?</li>
            <li> Why should people keep their calm in difficult situations?</li>
            <li> Do you think the poem ‘If’ is relevant in today’s world?</li>
            <li> What is ‘pitch and toss’? What does it signify in the poem?</li>
            <li> What was the poem’s purpose. What it achieved? Explain.</li>
            <p> Based on the poem <i>"First Kiss"</i> by Tim Seibles: </p>
            <li> What did you think of the poem?</li>
            <li> What were some metaphors used in this poem? Which did you think was the best use of metaphor?</li>
            <li> What is the mood of the poem?</li>
            <li> Did the poet do a good job of expressing what he was trying to say? Explain why or why not.</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener82} value={la7Essay82}/>

          <span className="days">LESSON 83 </span>
          <h4>How do you read a poem? </h4>
          <p>Excerpts taken from the SPL Poetry Handbook </p>
          <p className="margin-para" style={{ color: "#4f5979", fontSize: "110%", lineHeight: "1.7" }}> Slow down. Read
            it slowly.<br/>
            A good poet will have made every word in the poem count. <br/>Step into the poem
            and wander around. Take your time. <br/>
            See where the encounter takes you. <br/>
            You might not like the poem. It might do nothing for you. <br/>
            Don’t feel under any pressure to like every
            poem you meet. You won’t. <br/>
            Relax. Hmmm… the poem has got you intrigued? But you don’t understand it. <br/>
            Not to worry. Poems aren’t
            crossword puzzles. There’s no correct answer. <br/>
            A good poem will offer many paths to meander along.<br/>
            <i style={{ fontSize: "80%" }}>An excerpt from "The Scottish Poetry Library"</i></p>
          <h4><i>Summer’s Day </i> by Mary Oliver</h4>
          <Video videoUrl="https://www.youtube.com/embed/rBPHUE961zI"/>
          <p> William Butler Yeats is considered one of the greatest poets of the 1900’s.</p>
          <Video videoUrl="https://www.youtube.com/embed/IY2oIsA4c7k"/>
          <h4>Analysis of "The Second Coming"</h4>
          <Video videoUrl="https://www.youtube.com/embed/1S8WWWHl3JE"/>
          <h4><i> Ode to the Only Black Kid in the Class</i> poem by Clint Smith</h4>
          <Video videoUrl="https://www.youtube.com/embed/OGoehR_k0Xk"/>
          <ol className="vocab">
            <li className="poem"><i>Based on Summer’s Day: </i> Select one line that you enjoyed the most or was the
              most meaningful to you. Explain why you chose this line.
            </li>
            <li> Describe how the writer uses imagery throughout the poem. Give an example that you think was her
              best use of imagery.
            </li>
            <li> What was the writer’s purpose with the poem? Do you think she achieved her purpose? Why or why
              not.
            </li>
            <li><i>Based on The Second Coming: </i>Why was Yeats so fearful of the future?</li>
            <li> What does the falcon represent?</li>
            <li> Did Yeats seem like a happy guy? Explain.</li>
            <li> What was your overall impression of the poem?</li>
            <li> What is the mood of the poem? How does it make you feel?</li>
            <li><i>Based on Ode to the Only Black Kid in the Class:</i> What was your reaction to the title of the
              poem?
            </li>
            <li> Was the poem as you expected it would be or did it surprise you in some way? Explain.</li>
            <li> Which parts of the poem are lingering in your mind?</li>
            <li> What are the questions that it makes you want to ask?</li>
            <li> What is the message or theme of the poem?</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener83} value={la7Essay83}/>

          <span className="days">LESSON 84 </span>
          <h4>Thinking Like a Poet</h4>
          <p>The following exercise is from Steve Bowkett’s <i>Countdown to Poetry.</i> Take a few moments to study
            the image below.</p>
          <img src={require("../../public/images/poems/bwimage1.jpg")}
               alt="black and white of boy running to tree with birds"/><br/>
          <ol className="vocab">
            <li> What are four things that you find the most intriguing or captivating about this image?</li>
            <li> Close your eyes and imagine the picture is in color. Describe what you see and describe the colors
              in detail.
            </li>
            <li> Now focus on the sound and imagine what sounds you can hear.</li>
            <li> Now imagine you can step into the picture. Describe what it is like. Is there a breeze? Do you
              smell anything? What do things feel like? Is it warm or cold? What do you see when you turn around? IS
              there anything surprising there that isn’t in the picture?
            </li>
            <li> If this picture could tell a story, what is the story about? What will about to happen next?</li>
            <li> Describe this picture in 12 words or less. Twelve is not many words so choose each one carefully.
            </li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener84} value={la7Essay84}/>

          <span className="days">LESSON 85 </span>
          <p><strong> All the World's a Stage </strong> by William Shakespeare is a monologue (or speech) given by a
            character named Jaques in Shakespeare's play <strong>As You Like
              It.</strong></p>
          <Video videoUrl="https://www.youtube.com/embed/_jaSFtcDEiE?list=PLJicmE8fK0Egxi0hgy5Tw-NFyLcpJ4bzJ"/>
          <h4>Analysis of William Shakespeare's <i> All the World's a Stage </i></h4>
          <Video videoUrl="https://www.youtube.com/embed/BsD9u2BO2rM"/>
          <ul>
            <li>All the world’s a stage,</li>
            <li>And all the men and women merely players;</li>
            <li>They have their exits and their entrances;</li>
            <li>And one man in his time plays many parts,</li>
            <li>His acts being seven ages. At first the infant,</li>
            <li>Mewling and puking in the nurse’s arms;</li>
            <li>And then the whining school-boy, with his satchel</li>
            <li>And shining morning face, creeping like snail</li>
            <li>Unwillingly to school. And then the lover,</li>
            <li>Sighing like furnace, with a woeful ballad</li>
            <li>Made to his mistress’ eyebrow. Then a soldier,</li>
            <li>Full of strange oaths, and bearded like the pard,</li>
            <li>Jealous in honour, sudden and quick in quarrel,</li>
            <li>Seeking the bubble reputation</li>
            <li>Even in the cannon’s mouth. And then the justice,</li>
            <li>In fair round belly with good capon lin’d,</li>
            <li>With eyes severe and beard of formal cut,</li>
            <li>Full of wise saws and modern instances;</li>
            <li>And so he plays his part. The sixth age shifts</li>
            <li>Into the lean and slipper’d pantaloon,</li>
            <li>With spectacles on nose and pouch on side;</li>
            <li>His youthful hose, well sav’d, a world too wide</li>
            <li>For his shrunk shank; and his big manly voice,</li>
            <li>Turning again toward childish treble, pipes</li>
            <li>And whistles in his sound. Last scene of all,</li>
            <li>That ends this strange eventful history,</li>
            <li>Is second childishness and mere oblivion;</li>
            <li>Sans teeth, sans eyes, sans taste, sans everything.</li>
          </ul>
          <br/>
          <p><strong>Answer the questions below in complete sentences.</strong></p>
          <ol className="vocab">
            <li> Jaques’ speech is a metaphor. What are the two main things he’s comparing?</li>
            <li> What is the first "stage" of a man.</li>
            <li> Why do you think the speaker calls the last stage second childhood?</li>
            <li> What does he mean by oblivion when he says: "mere oblivion, / Sans teeth, sans eyes, sans taste,
              sans everything"?
            </li>
            <li> Give an example of alliteration used in the monologue. Alliteration is repetition of a letter/sound
              at the beginning of words. Example: <i>Sheep should sleep in a shed. </i>
            </li>
            <li> The words ‘exits’ and ‘entrances’ are metaphors for what? What do those two words really mean?</li>
            <li> The speech is full of metaphors and similes. Give at least one example of each.</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener85} value={la7Essay85}/>

          <span className="days">LESSON 86 </span>
          <h4>Before I Got My Eye Put Out - The Poetry of Emily Dickinson</h4>
          <Video videoUrl="https://www.youtube.com/embed/R4WwhOdk_Eg"/>
          <h4>HOPE IS THE THING WITH FEATHERS by Emily Dickinson </h4>
          <img src={require("../../public/images/poems/hope.jpg")} alt="Hope poem"/><br/><br/>

          <h4> Analysis of the Poem <i>HOPE IS THE THING WITH FEATHERS</i></h4>
          <Video videoUrl="https:www.youtube.com/embed/j3VWZJmuvhg"/>
          <h4>I'M NOBODY! by Emily Dickinson</h4>
          <img src={require("../../public/images/poems/imNobody.jpg")} alt="I'm Nobody poem"/><br/><br/>
          <h4>How Emily Dickinson Writes A Poem</h4>
          <Video videoUrl="https://www.youtube.com/embed/55kqNg88JqI"/>
          <h4>Finding Emily Dickinson in the power of her poetry</h4>
          <Video videoUrl="https://www.youtube.com/embed/BLeMZ5WIdrI"/>
          <ol className="vocab">
            <p>Based on the Crash Course video: </p>
            <li>Dickinson often makes references to "eyes" and "sight". What do these
              references most likely symbolize.
            </li>
            <li> Why do you think Dickinson only wore white?</li>
            <li> Name two stylistic choices that Dickinson makes when she wants to avoid closure in her poetry.</li>
            <li> Emily Dickinson's personal life receives as much attention, or even more attention, than her poetry.
              Why do you think this is so?
            </li>
            <li> To what extent was Emily Dickinson the eccentric recluse she is often portrayed as being?</li>
            <li> Describe some of the reasons that Dickinson did not gain fame as a poet during her lifetime.</li>
            <li>What did you think of the poem "Hope" is the Thing with Feathers? If you had to summarize it for someone
              who has never read it, what would you say?
            </li>
            <li>In the poem "Hope" what do you think these lines mean: <i>Yet - never - in Extremity, It asked a crumb -
              of me. </i></li>
            <li> "I’m nobody – who are you?" is an invitation to loneliness. How does this poem invite the reader
              into a kind of shared strangeness? Do you feel separated
              or connected by the language?
            </li>
            <li>Does Dickinson seem to be writing for other people or only for herself?</li>
            <li>Which Emily Dickinson poem is your favorite? Explain why.</li>
            <li>Based on the poem you chose, what is the imagery in the poem?</li>
            <li> What is the mood of the poem? Or how does it make you feel?</li>
            <li> What is the message of the poem?</li>
            <li> Which parts of it are lingering in your mind?</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener86} value={la7Essay86}/>

          <span className="days">LESSON 87 </span>
          <h4><i>Still I Rise</i> by Maya Angelou</h4>
          <Video videoUrl="https://www.youtube.com/embed/fthuqMaPe0Y"/>
          <h4><i> Alone </i> by Edgar Allan Poe</h4>
          <Video videoUrl="https://www.youtube.com/embed/SS_YShPMYdM"/>
          <p>Based on the poem: <a href="https://www.poetryfoundation.org/poems/46446/still-i-rise"
                                   rel="noreferrer" target="_blank"> <i>Still I Rise</i></a> by Maya Angelou:</p>

          <ol className="vocab">
            <li> Most of Maya Angelou's stanzas begin with questions. Who do you think the Angelou is addressing and
              how do her questions change as the poem progresses?
            </li>
            <li> How does the repetition of the phrase, "I rise," affect the tone and overall impact of the poem?
            </li>
            <li> What literary devices does Angelou use?</li>
            <li> What is the theme or primary message of the poem?</li>
            <li> Give an examples of imagery used.</li>
            <li> Give an example of a metaphor used.</li>
            <li> Give an example of a simile used.</li>
            <li>What does Angelou mean when she says, "Out of the hut of history's shame / I rise. "</li>
            <li> How do we know the narrator has hope of the future?</li>
            <li> List two phrases from the final stanzas that suggest the horrors of slavery.</li>
            <li> How did the poem impact you or make you feel?</li>
            <span className="topBottom"> Based on the poem <a
              href=" https://www.poetryfoundation.org/poems/46477/alone-56d2265f2667d"
              rel="noreferrer" target="_blank"> <strong> Alone </strong> </a>by Edgar Allan Poe</span>
            <li> What is the "mystery" that the speaker describes? What is the effect of the speaker's refusal to
              tell us more about it?
            </li>
            <li> Why do you think Poe declined to publish this poem? Does it seem unfinished in any way to you? Why
              or why not?
            </li>
            <li> How did the piece make you feel?</li>
            <li> Even though it was written long ago, do you think it is still relevant today? Why or why not?</li>
            <li> Were you intrigued by the title of the piece? Explain.</li>
            <li> Do you think the "demon" has any meaning?</li>
            <li> In what way did Poe state he loves?</li>
            <li> What does he say about his passions?</li>
            <li> Did the poem remind you of any of your own life experiences?</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener87} value={la7Essay87}/>

          <span className="days">LESSON 88 </span>
          <h4>The Poetry of Sylvia Plath</h4>
          <Video videoUrl="https://www.youtube.com/embed/iJn0ZPd6mYo"/>
          <h4>Why should you read Sylvia Plath? by Iseult Gillespie</h4>
          <Video videoUrl="https://www.youtube.com/embed/wCWl8ZIgCHk"/>
          <h4>The Fig Tree by Sylvia Plath</h4>
          <Video videoUrl="https://www.youtube.com/embed/FAtvKkpYe_4"/>
      <p className="topBottom" style={{ color: "#4f5979", fontSize: "110%", lineHeight: "1.7" }}><i>I saw my
            life branching out before me like the green fig tree in the story. From the tip of every
            branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy
            home and children, and another fig was a famous poet and another fig was a brilliant professor, and
            another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and
            another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and
            offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs
            were many more figs I couldn’t quite make out. I saw myself sitting in the crotch of this fig tree,
            starving to death, just because I couldn’t make up my mind which of the figs I would choose. I wanted
            each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to
            decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my
            feet.</i></p>
          <h4> Answer the questions below:</h4>
          <ol className="vocab">
            <li> Briefly describe Sylvia Plath and her background.</li>
            <li> Based on <i>The Fig Tree</i>: What does the fig tree and each of the figs symbolize?</li>
            <li> What is the mood of the poem? How does Plath get this mood across to reader?</li>
            <li> Describe the imagery Plath creates of the figs.</li>
            <li> What sense do you get about how the author is feeling as she writes about the fig tree? (Example:
              Is she hopeful, desperate, or indifferent?)
            </li>
            <li> How does the poem make you feel about your future and the decisions you will have to make?</li>
            <li> Do you see life and the choices you make in the same way that Plath sees the fig tree? Explain.
            </li>
            <li> What was the Plath’s purpose with the poem? Do you think she achieved it? Why or why not?</li>
            <li>In comparison to other poems you’ve read, did you like it more or less? Explain why. What makes work
              by Plath different to that of other poets?
            </li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener88} value={la7Essay88}/>

          <span className="days">LESSON 89 </span>
          <h4>The pleasure of poetic pattern</h4> <p>Humans are creatures of rhythm and repetition. From our breath to
          our gait: rhythm is central to our experience, and often brings us pleasure. We can find pleasure in the
          rhythm of a song, or even the rows of an orchard. Of course, too much repetition can also backfire. David
          Silverstein describes what poetic repetition is and why it works.</p>
          <Video videoUrl="https://www.youtube.com/embed/URuMb15CWJs"/>
          <h4> Dr. Maya Angelou Recites Her Poem "Phenomenal Woman"</h4>
          <Video videoUrl="https://www.youtube.com/embed/VeFfhH83_RE"/>
          <ol className="vocab">
            <li> We are creatures of repetition within our own bodies. Which bodily functions involve rhythm and
              repetition?
            </li>
            <li> What is an example of repetition in language?</li>
            <li> A repeated pattern of stressed syllables is known as what?</li>
            <li> What is the repetition of vowel sounds called.</li>
            <li> Think of song lyrics that employs repetition. What is the name of the song? How does the singer use
              poetic devices such as rhyme, assonance, consonance, or alliteration?
            </li>
            <li> Have you noticed some lines/lyrics are more fun to sing along with than others? Does repetition of
              sound appear more or less in those lines/lyrics? If so, which kinds of repetition do they use?
            </li>
            <li> Can you find a visual representation of repetition in your world? Maybe repeated rows of desks? Or
              roads lined with trees? How might you capture that repetition in language, so someone might visualize the
              patterns without physically seeing them?
            </li>
          </ol>
          <br/>
          <textarea className="textArea" onChange={onChangela7Listener89} value={la7Essay89}/>

          <span className="days">LESSON 90 </span>
          <h4>How to Write a Poem</h4>
          <p>This lesson is a segment from <a
            href="https://www.hmhco.com/blog/how-to-write-a-poem-with-glenis-redmond?fbclid=IwAR19e-2fVoWsLiBxH2OG1s7yEG7m-kVCuvYlSstk1cGpfs8pfCpx5QECd2I"
            rel="noreferrer" target="_blank"><i>Literacy at Work: How to Write a Poem with Glenis Redmond.</i></a> For
            the full lesson and additional resources, click above. Glenis Redmond is a poet, teaching artist and
            imagination activist. You can view more of her work at <a href="http://www.glenisredmond.com/" rel="noreferrer" target="_blank">her site.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/0w8PLcYP0sU"/>
          <p> After you watch the video, complete the lists below. Then, use the lists to write
            your Self-Portrait Poem.</p>
          <h4>Write a list that describes your:</h4>
          <ol className="vocab">
            <li>Outer self - how you look (Example: Brown eyes, Mahogany skin, Tomboy, Graceful swagger, Pigtails)
            </li>
            <li>Inner self - feelings and emotions (Example: Joy, Introvert, Shame, Focused, Popular, Lonely)</li>
            <li>Talents or strengths (Example: Athletic, Graceful, Reader)</li>
            <li>Challenges or things you find difficult (Being alone, Math, Racism)</li>
          </ol>
          <p className="topBottom">This example is from the poet Glenis Redmond </p>
          <h4>Self-Portrait: Bard in the Making
          </h4>
          <ul style={{ color: "#4f5979", fontStyle: "italic"  }}>
            <li>When I was in the fifth grade</li>
            <li>I was the biggest tomboy</li>
            <li>always in t-shirt and jeans</li>
            <li>baseball cap turned sideways</li>
            <li>complete with ashy elbows, skinned knees</li>
            <li>and a mouthful of bubble gum</li>
            <li>I made popping and blowing bubbles (alliteration)</li>
            <li>into an art form</li>
            <br/>
            <li>I was the princess of the playground (alliteration)</li>
            <li>ruled at Prison Ball, handball, and tetherball</li>
            <li>I could pummel, smash, catch, and throw</li>
            <li>I was the fastest sprinter in the school</li>
            <li>I could stop on a dime</li>
            <li>and give you nine cents change.</li>
          </ul><br/>
          <p className="topBottom"> Now use your lists to help you tell your story. Use at least one of the following
            poetry devices:<br/>
            <strong>alliteration:</strong> repetition of initial consonant sounds -
            "The <b>sh</b>epherd <b>sh</b>ook <b>h</b>is <b>h</b>ead"-<br/>
            <strong>assonance:</strong> repetition of <b>vowel</b> sounds - "I'm reminded
            to line the lid of my eye"<br/>
            <strong>anaphora: </strong> repetition of words - <i style={{ color: "#4f5979"}}>Still I Rise by Maya
              Angelou<br/>
              "I rise<br/>
              Bringing the gifts that my ancestors gave,<br/>
              I am the dream and the hope of the slave.<br/>
              I rise<br/>
              I rise<br/>
              I rise." </i></p>
          <p className="topBottom">It's best if you can create your own poem, but if you want, you can use the sentences below as a model.</p>
          <ul>
            <li>When I was in _____________________, I looked like _____________________.</li>
            <li>I liked to play _____________________ with _____________________.</li>
            <li>I was happy to _____________________ but felt scared when _____________________.</li>
          </ul>

          <textarea className="textArea" onChange={onChangela7Listener90} value={la7Essay90}/>

          <span className="days">LESSON 91 - The American Dream</span>
          <Video videoUrl="https://www.youtube.com/embed/ir0URpI9nKQ"/>
          <Video videoUrl="https://www.youtube.com/embed/ v6JXHzyX60M "/>

          <p className="topBottom">Read the articles <a
            href={require("../resources/languagearts/a-better-life-creating-the-american-dream.pdf")}
            rel="noreferrer" target="_blank"><i> A Better Life: Creating the American
            Dream </i></a> and <a
            href="https://web.archive.org/web/20160131231231/https://priceonomics.com/the-great-migration-the-african-american-exodus/"
            rel="noreferrer" target="_blank"> The Great Migration: The African American Exodus from The South </a></p>
          <p className="topBottom"><h4 style={{ color: "#4f5979" }}><i>Harlem </i>by Langston
            Hughes</h4></p>
          <ul style={{ color: "#4f5979" }}>
            <li> What happens to a dream deferred?</li>
            <li>Does it dry up</li>
            <li>like a raisin in the sun?</li>
            <li>Or fester like a sore—</li>
            <li>And then run?</li>
            <li>Does it stink like rotten meat?</li>
            <li>Or crust and sugar over—</li>
            <li>like a syrupy sweet?</li>
            <br/>
            <li>Maybe it just sags</li>
            <li>like a heavy load.</li>
          </ul>
          <br/>
          <p>Answer the questions below: </p>
          <p className="margin-para">
            <ol className="vocab">
              <li> Define <i>double consciousness of the African American experience</i>.</li>
              <li> What was the Harlem Renaissance?</li>
              <li> Briefly describe who Langston Hughes was. What makes him an important poet? What impact did his work
                have?
              </li>
              <li> What does the American Dream mean to you? Do you think it is different than what it means to other
                people?
              </li>
              <li> Do you believe that race, gender, and economic status plays a role in the ability of someone to
                achieve their dreams?
              </li>
              <li> Now that you have read the poem above, what do you believe happens to a dream deferred?</li>
              <li>List all the things Langston Hughes compares a dream to in his poem "Harlem"? Describe the imagery
                he creates for readers. What things can you clearly see and smell?
              </li>
              <li>Hughes was strongly influenced by jazz music. Do you think his writing has a musical quality to it?
              </li>
              <li>What is the poet's message to readers?</li>
              <li>What is the mood of the poem?</li>
              <li>How does it make you feel to think about your own dreams being deferred?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener91} value={la7Essay91}/>

          <span className="days">LESSON 92</span>
          <h4><i><a href="https://www.poetryfoundation.org/poems/45081/the-cremation-of-sam-mcgee" rel="noreferrer"
                    target="_blank"> Cremation of Sam McGee</a></i> by Robert W. Service </h4>
          <Video videoUrl="https://www.youtube.com/embed/yJNZwuamwj0"/>
          <h4><i><a href="https://poets.org/poem/do-not-go-gentle-good-night">Do Not Go Gentle into that Good
            Night</a></i> by Dylan Thomas</h4>
          <Video videoUrl="https://www.youtube.com/embed/w1JJ5actiUM"/>

          <ol className="vocab">Answer the questions below based on the two poems from this lesson.<br/>
            <li><strong>The Cremation of SamMcGee:</strong> Why was Sam traveling in the Arctic? Describe what happens
              in the poem.
            </li>
            <li>Why couldn't Cap cremate Sam’s remains in the wilderness?</li>
            <li>After putting Sam’s body in the boiler, Cap looked inside. What did he see?</li>
            <li>What message is the poet trying to get across?</li>
            <li>How did you like the ending? Explain why or why not.</li>
            <li>Which of the 3 poems did you like the most? Explain why?</li>
            <li><strong>Do Not Go Gentle into that Good Night:</strong> Dylan Thomas wrote this poem for his dying
              father. How does the poem make you feel? What was your gut reaction?
            </li>
            <li> What is the poem about? What does Thomas mean when he says to "rage against the dying of the light"?
            </li>
            <li>Did the poem match your expectation after reading the title?</li>
            <li>What is the message of the poem?</li>
            <li>Which lines are repeated? Do you think this is effective? Explain.</li>
            <li>Do you agree Thomas that we should rage against death? Or, do you think we should die calmly? Explain.
            </li>
            <li>Of all the poems you've read so far, which is your favorite? Explain why.</li>
          </ol>
          <br/>
          <textarea className="textArea" onChange={onChangela7Listener92} value={la7Essay92}/>

          <span className="days">LESSON 93 </span>
          <p className="topBottom">Begin reading the novel <strong>Esperanza Rising </strong> by Pam Munoz Ryan.
            Esperanza is a young girl in Mexico, living the life of a princess. She's forced to leave her country with
            her
            mother and everything she's known and tries to figure out life and how to survive as an immigrant in
            American society.</p>
          <p className="topBottom">The novel is available at your local library, local bookstore and online for
            purchase. Until your copy
            arrives, <a href={require("../resources/books/EsperanzaRisingChapter1.pdf")} rel="noreferrer"
                        target="_blank"> Aguascalientes, Mexico and Las Uvas - Grapes (Chapter 1) is provided here. </a>
          </p>
          <a href={require("../resources/books/EsperanzaRisingChapter1.pdf")} rel="noreferrer" target="_blank"><img
            src={require("../../public/images/bookCovers/esperanza.jpg")} alt="Esperanza Rising"/></a><br/>
          <p className="topBottom">
            <ol className="vocab">Answer the questions below in complete sentences.<br/>
              <li>Based on the book title and cover, what impression do you have about the novel so far? What do you
                think it may be about?
              </li>
              <li>The title and image of Esperanza on the cover serve as metaphors. What do you think they mean will
                happen to her?
              </li>
              <li>Who is the narrator of the story?</li>
              <li>Describe Esperanza.</li>
              <li>Describe the setting.</li>
              <li>What does Esperanza's father teach her about the land?</li>
              <li>Esperanza believes bandits want to attack her papa. Why does she believe this? Why was there
                resentment
                toward Mexican land owners?
              </li>
              <li>Did Papa keep his promise to Esperanza? What was the promise?</li>
              <li>Describe Abuelita. Do you like her? Explain why or why not.</li>
              <li>What two lessons did Abuelita teach Esperanza about life?</li>
              <li>Why do you think Miguel stop talking to Esperanza?</li>
              <li>What is Esperanza about to celebrate?</li>
              <li>Tío Luis brought back Papa’s belt buckle and this causes everyone to worry. Why is this?</li>
              <li>What was brought in the wagon?</li>
              <li>What do you believe has happened to Esperanza’s father?</li>
              <li>Every chapter is named after a fruit or vegetable and has special meaning to Esperanza. The title of
                the
                first chapter is Las Uvas or Grapes. Why are grapes special to her? What do they symbolize?
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener93} value={la7Essay93}/>

          <span className="days">LESSON 94 </span>
          <p className="topBottom"> Read Las Papayas - Papayas and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Esperanza dreams that her papa and others are doing what for her? When she wakes up, how does she
                feel?
              </li>
              <li>Why is the harvest Esperanza’s favorite time of year?</li>
              <li>Esperanza received many birthday gifts, but she only treasures the doll. Why is this?</li>
              <li>What did Esperanza do that she believes was bad luck?</li>
              <li>Describe the setting in the house after Esperanza’s father is killed. Describe how it feels to her
                when he’s gone.
              </li>
              <li>How do you like Miguel?</li>
              <li>How does Esperanza feel about Miguel?</li>
              <li>Describe Tío Luis and Tío Marco. What kind of men do you think they are? What did they do after papa
                was killed? What did Tío Luis want Esperanza’s mother to do?
              </li>
              <li>Why does Miguel believe that the United States would be a better place for him and his father than
                Mexico?
              </li>
              <li>Why is this chapter entitled Papayas. What do papayas symbolize for Esperanza?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener94} value={la7Essay94}/>

          <span className="days">LESSON 95 </span>
          <p className="topBottom"> Read <i> Las Guayabas - Guavas</i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>How did Esperanza and her mother leave Mexico?</li>
              <li>While in the wagon, Hortensia tells a story to Esperanza and talks about the bandits, Miguel and the
                mouse, and going on a train ride. Why does she do this?
              </li>
              <li>How did Esperanza feel when she saw the train car they were riding in? Describe the train car from
                Esperanza’s perspective.
              </li>
              <li>When Esperanza’s didn’t let the little girl hold her doll, what did her mother do for the girl?</li>
              <li>How did Esperanza feel when the girl got off the train?</li>
              <li>What did Carmen mean when she said, "I am poor, but I am rich"?</li>
              <li>How does Miguel describe the wealthiest people in Mexico? Specifically, he says their skin is what
                color?
              </li>
              <li>How has Esperanza’s life changed so far?</li>
              <li>Do you think Miguel and Esperanza are experiencing the journey very differently? How so? In what ways
                are they behaving differently?
              </li>
              <li>Why is Miguel excited to go to the United States?</li>
              <li>Why is this chapter entitled guayabas? What do guavas symbolize for Esperanza?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener95} value={la7Essay95}/>

          <span className="days">LESSON 96 </span>
          <p className="topBottom"> Read <i> Los Melones - Cantelopes </i> and then answer the questions below in
            complete sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Why was Esperanza so worried that Miguel’s family wouldn’t board the train?</li>
              <li>Which two people made it possible for Esperanza and her mother to go to the United States?</li>
              <li>Esperanza wanted to hear the earth’s heartbeat? Why?</li>
              <li>Where did Esperanza and her mother get off of the train?</li>
              <li>Do you think Isabel is impressed with Esperanza? Why do you think this?</li>
              <li>Describe the San Joaquin Valley.</li>
              <li>Esperanza isn’t able to hear the heartbeat of the earth. Why is this?</li>
              <li>What do you think of Marta? How does she treat Esperanza? What does she think about papa? What kinds
                of things does she say?
              </li>
              <li>How did Esperanza feel about Miguel talking to Marta? Why does she feel this way?</li>
              <li>Why does Marta believe the workers should stop working?</li>
              <li>What do melones symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener96} value={la7Essay96}/>

          <span className="days">LESSON 97 </span>
          <p className="topBottom"> Read <i>Las Cebollas - Onions </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Describe the camp Esperanza now lives in.</li>
              <li>How is her new home different from her old home?</li>
              <li>What were the two choices Ramona gave Esperanza when she was angry about their cabin?</li>
              <li>Esperanza still feels she is rich. Was it hard for Esperanza to accept the fact they are peasants
                now?
              </li>
              <li>What jobs does Esperanza have to do?</li>
              <li>How had Ramona changed to Esperanza?</li>
              <li>Who taught Esperanza how to sweep?</li>
              <li>Isabel teaches Esperanza several things. What do you believe were the three most important things for
                Esperanza to learn?
              </li>
              <li>Describe what happened when Esperanza went to sweep the platform.</li>
              <li>In the novel, you are reading many new Spanish words. Esperanza has to learn English. What do you
                think it would be like to move toa country and not know the language?
              </li>
              <li>What do las cebollas (onions) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener97} value={la7Essay97}/>

          <span className="days">LESSON 98 </span>
          <p className="topBottom"> Read <i>Las Almendras - Almonds </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>What did Alfonso and Miguel bring with them from Mexico that was a surprise?</li>
              <li>What was Esperanza old enough to do as the ladies got hot water ready?</li>
              <li>How was Esperanza hurt after her first day at work?</li>
              <li>Why was it important for Esperanza to go to the jamaica? Why was she afraid? Why did she finally
                decide to go?
              </li>
              <li>Why is it important to Marta that everyone in the camp go on strike? Do you think this would be a good
                idea? Explain.
              </li>
              <li>What animal does Marta compare the workers to? What did they tell her to do?</li>
              <li>Do you think Esperanza understands Marta better than others at the camp? Explain.</li>
              <li>What was the fiesta like?</li>
              <li>Esperanza plans to pray for what? What do you think this says about her?</li>
              <li>What do Almendras (almonds) symbolize in this chapter?</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener98} value={la7Essay98}/>

          <span className="days">LESSON 99 </span>
          <p className="topBottom"> Read <i> Las Ciruelas - Plums </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Describe Esperanza’s morning alone with Pepe and Lupe.</li>
              <li>Describe Esperanza’s daily schedule.</li>
              <li>Why did the babies get sick? When the babies get sick, what did Esperanza do? How did she know to do
                this?
              </li>
              <li>Why is a dust storm so terrible?</li>
              <li>What was the consequence of Ramona being out in the dust storm?</li>
              <li>Why was mama coughing? What causes the Valley Fever?</li>
              <li>Describe what a dust storm is like.</li>
              <li>What is Esperanza afraid may happen to her mother?</li>
              <li>What do las ciruelas (plums) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener99} value={la7Essay99}/>

          <span className="days">LESSON 100 </span>
          <p className="topBottom"> Read <i> Las Papas - Potatoes </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Why did Abuelita and Esperanza knit their hairs into the blanket?</li>
              <li>What trial did the valley symbolize Esperanza was in?</li>
              <li>Why did Esperanza want to work so badly?</li>
              <li>Why was Esperanza worried the strikers might turn on her?</li>
              <li>What did the people who were going to strike threaten to do to the people who kept working?</li>
              <li>What does Esperanza believe will help cure her mother? Explain.</li>
              <li>Her mother is depressed. Why is this?</li>
              <li>What does Esperanza decide to do to help her mother and herself?</li>
              <li>Why is Marta not allowed to stay with her aunt and uncle? What does Marta plan to do?</li>
              <li>What does is Esperanza’s wish for Christmas?</li>
              <li>What do las papas (potatoes) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener100} value={la7Essay100}/>

          <span className="days">LESSON 101 </span>
          <p className="topBottom"> Read <i> Los Aguacates - Avocados </i> and then answer the questions below in
            complete sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>What is the significance of avocados in this chapter? What did Hortensia do with them?</li>
              <li>Describe what Esperanza’s life is like now.</li>
              <li>What did the doctor tell Esperanza about her mama. What is she suffering from now? How would you have
                felt if you were Esperanza when she heard this news?
              </li>
              <li>When Esperanza is told she cannot visit her mother for several weeks, she describes her life as going
                through "the motions of living." Have you ever felt this way? If so, describe how. What does Esperanza
                do to increase the amount of joy in her life?
              </li>
              <li>What were some things Esperanza was missing about her mother?</li>
              <li>Why does the family only go to Mr. Yakota’s store?</li>
              <li>Esperanza buys something special for her mama. What is it?</li>
              <li>After Ramona had been in the hospital, why wasn’t Esperanza able to visit her?</li>
              <li>Esperanza did not want to give Marta and her mother a ride? Explain why. Where do they live?</li>
              <li>Why was Miguel so excited after talking to the railroad?</li>
              <li>Marta changes her mind about Esperanza. Explain why.</li>
              <li>Miguel shares news with the family that he is happy about. Do you also think it’s a good thing?
                Explain.
              </li>
              <li>What do aguacates (avocados) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener101} value={la7Essay101}/>

          <span className="days">LESSON 102 </span>
          <p className="topBottom"> Read <i> Los Esparragos - Asparagus </i> and then answer the questions below in
            complete sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Why did Esperanza feel bad about working when the strike began?</li>
              <li>What did the strikers do to the armed guards protecting the workers?</li>
              <li>What harmful things did the strikers do to the workers who did not go on strike with them? Why are the
                strikers so angry at those who did not go on strike?
              </li>
              <li>Based on the things they did, would you have gone on strike with them if you had been at that camp?
              </li>
              <li>How were the strikers eventually stopped? What happened to them? Do you think this was fair?</li>
              <li>Why do you think Esperanza did not tell the police about Marta hiding in the shed?</li>
              <li>Have you ever helped someone you didn’t really like?</li>
              <li>Were things different in the camp after the deportation? Describe what the camp looks like now.</li>
              <li>What do esparragos (asparagus) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener102} value={la7Essay102}/>

          <span className="days">LESSON 103 </span>
          <p className="topBottom"> Read <i> Los Duraznos - Peaches </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Why does Isabel pray so frequently?</li>
              <li>Do you think she will get her wish? Why or why not?</li>
              <li>Esperanza gave her doll to Isabel. Why did she do this?</li>
              <li>Have you ever given something you cherished to someone? Describe why.</li>
              <li>The workers from Oklahoma were from the United States. How do you think they felt when they had to
                compete for jobs with workers from another country?
              </li>
              <li>What nice things were going to be at the camp for the Oklahoma people?</li>
              <li>What happened to Miguel at work and how did he get muddy?</li>
              <li>How did Esperanza react when she finds out what happened to Miguel? Why do you think she reacted this
                way? What happened to Miguel after?
              </li>
              <li>How is the camp for the Oklahoma people different from Esperanza’s camp?</li>
              <li>Why did white Americans treat Mexicans differently?</li>
              <li>What news does Esperanza receive about Mama?</li>
              <li>What do Esperanza and Hortensia do to prepare for Mama’s return?</li>
              <li>What happened to Esperanza’s money orders? How would you have reacted in this situation?</li>
              <li>What do los duraznos (peaches) symbolize in this chapter?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener103} value={la7Essay103}/>

          <span className="days">LESSON 104 </span>
          <p className="topBottom"> Read <i> Las Uvas - Grapes </i> and then answer the questions below in complete
            sentences.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>Which part of this chapter did you like the best? Which part did you like the least?</li>
              <li>What did Miguel take from Esperanza? How did she feel about what he did with the money? How did you
                feel about this part of the story?
              </li>
              <li>Who did Miguel go get for Esperanza and her mother? How did they react to the surprise?</li>
              <li>Was it all right that Miguel took the money to get Abuelita?</li>
              <li>What is Esperanza’s favorite fruit? Explain why.</li>
              <li>How did Esperanza tell Abuelita her story?</li>
              <li>How was Esperanza’s life like the zigzag in the blanket? Is your life like a zigzag or a straight
                line? Why?
              </li>
              <li>Uvas was the title of the first chapter and the last chapter. Why do you think the author gave both
                chapters the same name?
              </li>
              <li>Instead of using months to help her remember when things happened, what things did Esperanza use?</li>
              <li>Even though Esperanza didn’t receive any fancy gifts for her birthday, was she still happy? Explain
                how you know.
              </li>
              <li>How did the end of the book make you feel? Why?</li>
              <li>In the beginning of the book, Abuelita talks about the phoenix. Then in this chapter, you find out
                what Esperanza thought about it. Do you think Esperanza is like the phoenix? Explain your answer.
              </li>
              <li>Does the title and image of Esperanza from the book cover seem fitting? Why or why not?</li>
              <li>For a long time, Esperanza could not hear the heartbeat of the earth. By the end of the story, she
                could feel it again. Why do you think this is?
              </li>
              <li>What did Esperanza learn as she traveled through the challenging mountains and valleys of life?</li>
              <li>Do you believed she changed? Give examples from the novel in your answer.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener104} value={la7Essay104}/>

          <span className="days">LESSON 105 </span>
          <p className="topBottom">Five Paragraph Essay</p>
          <p className="topBottom"> Select ONE of the prompts below and write a five paragraph essay on it. </p>
          <ul className="list">
            <li>Esperanza grows and changes over the course of the novel. She was a phoenix who was able to rise from
              the ashes.
            </li>
            <li>Papa and Miguel are very similar, especially in how they relate to Esperanza.</li>
            <li>In the first chapter, Esperanza’s father shapes her relationship with nature and how she sees the
              world.
            </li>
            <li>Abuelita tells Esperanza, "do not be afraid to start over." How is Esperanza better off for having
              overcoming her fear and beginning again?
            </li>
            <li>How is Esperanza's doll symbolic of Esperanza's growth throughout the novel?</li>
          </ul>
          <h4> Essay Requirements</h4>
          <ul className="list">
            <li>Your first paragraph should begin with a hook to grab your reader’s attention. This should be followed
              by a clear thesis statement (main idea of your essay). This statement should convey the points or
              arguments you are going to make.
            </li>
            <li>Paragraphs 2 through 4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use a different example. Using direct quotes from the novel
              can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-6 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer" target="_blank">Click here for a 5 Paragraph Essay outline </a>if
            you need help in getting started. </p>
          <textarea className="textArea" onChange={onChangela7Listener105} value={la7Essay105}/>

          <span className="days">LESSON 106 </span>
          <h4>Close reading: informational text</h4>
          <p className="margin-para">Read the articles linked below from Khan Academy's Living Tongues Unit. Then watch
            the videos below and complete the multiple choice assignment. </p>
          <p>Read <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:untitled-57/a/welcome-to-the-living-tongues-unit?modal=1"
            rel="noreferrer" target="_blank">Intro to the Unit Living Tongues </a> and <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:untitled-57/a/living-tongues-unit-vocabulary?modal=1"
            rel="noreferrer" target="_blank"> Review the vocabulary. </a></p>
          <Video videoUrl="https://www.youtube.com/embed/INFWXZ_tl4M"/>
          <Video videoUrl="https://www.youtube.com/embed/R_bgo8j6jxc"/>
          <Video videoUrl="https://www.youtube.com/embed/NXO3KT8bne4"/>
          <Video videoUrl="https://www.youtube.com/embed/lcXgSEF4iCM"/>
          <p>Read the article linked here and then complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:close-reading-informational-text/e/living-tongues-reading-informational-text-saving-dying-languages-7"
            rel="noreferrer" target="_blank"> questions. </a>Then in the textbox below, write a brief summary about what
            you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener106} value={la7Essay106}/>

          <span className="days">LESSON 107 </span>
          <h4>Close Reading: Poetry</h4>
          <p className="margin-para"> Watch the videos below and complete the multiple choice assignment. </p>
          <Video videoUrl="https://www.youtube.com/embed/D2FFijvA00I"/>
          <Video videoUrl="https://www.youtube.com/embed/lzKj-bLvrYQ"/>
          <Video videoUrl="https://www.youtube.com/embed/LO21tYrTD8Y"/>
          <Video videoUrl="https://www.youtube.com/embed/ZASEsKwEvqE"/>
          <p>Read the poem <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:close-reading-poetry/e/living-tongues-reading-poetry-languages-7"
            rel="noreferrer" target="_blank"> Languages by Carl Sandburg linked here and then answer the
            questions that follow the poem. </a>In the textbox below, write a brief summary about what you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener107} value={la7Essay107}/>

          <span className="days">LESSON 108 </span>
          <h4>Applying vocabulary knowledge</h4>
          <p>Read the article, Saving Dying Languages 7, linked here and then complete the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:applying-vocabulary-knowledge/e/living-tongues-vocabulary-saving-dying-languages-7?modal=1"
            rel="noreferrer" target="_blank"> questions. </a>Then in the textbox below, write a brief summary of the
            poem. What message or meaning is the author trying to get across to his readers?</p>
          <br/> <h4>Reading for understanding: informational text</h4>
          <p>Read the article <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:reading-for-understanding-informational-text/e/living-tongues-reading-informational-text-the-code-that-was-never-broken-7"
            rel="noreferrer" target="_blank">linked here, The Code that Was Never Broken, and then complete the
            questions that follow. </a> In the textbox below, write a brief summary about what you learned.</p>
          <textarea className="textArea" onChange={onChangela7Listener108} value={la7Essay108}/>

          <span className="days">LESSON 109 </span>
          <p className="margin-para"> Watch the video below and complete the assignment that follows. </p>
          <Video videoUrl="https://www.youtube.com/embed/XIfYK4tpl2Y"/>
          <p>Read the <a
            href="https://www.khanacademy.org/ela/cc-7th-reading-vocab/x4aa9073b12675eb1:cc-7th-living-tongues/x4aa9073b12675eb1:reading-for-understanding-realistic-fiction/e/living-tongues-reading-realistic-fiction-direct-translation-7"
            rel="noreferrer" target="_blank">article linked here, Direct Translation, and then complete the
            questions. </a>Then in the textbox below, write a brief summary about what you read.</p>
          <textarea className="textArea" onChange={onChangela7Listener109} value={la7Essay109}/>

          <span className="days">LESSON 110 </span>
          <h4><i>Seventh Grade</i> by Gary Soto</h4>
          <p className="topBottom">Read the short story <a href={require("../resources/books/seventhGrade.pdf")}
                                                           rel="noreferrer" target="_blank">Seventh Grade </a> (attached
            a s PDF) and then answer the questions below.</p>
          <p className="topBottom"><i>Seventh Grade</i> is narrative fiction. Narrative can be fiction or nonfiction and
            has story elements – plot, theme,
            characters, setting, and point of view. The purpose of a narrative, or story, is to
            inform and to entertain. A good story has conflict and follows an organizational
            pattern that includes an exposition, rising action, falling action, a resolution, and
            denouement. Conflict and events are usually told in chronological order with
            literary devices that help to make the story come alive.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li>What is the theme of the story? Why do you think so?</li>
              <li>Read paragraphs 7-10 (a) Who is speaking? (b) How do you know?</li>
              <li>Analyze a character. How do his/her words and actions influence the thoughts and/or
                actions of another character?
              </li>
              <li>What is the author’s attitude towards Mr. Bueller as shown through his words and actions?</li>
              <li>How does the author show the readers how much Victor likes Theresa? Use evidence from
                the text to support your answer.
              </li>
              <li>This story is told from whose point of view? Why would the author choose to tell this story
                using this point of view?
              </li>
              <li>In paragraph #62, the author says, "The rosebuds of shame on his face became bouquets of
                love." What are the actions that led to this change of feeling in Victor?
              </li>
              <li>Did you like this story? Explain why or why not.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener110} value={la7Essay110}/>

          <span className="days">LESSON 111 </span>
          <p><span className="title"> Drivers? Be Very Afraid </span> Bruce Feiler</p>
          <p className="topBottom">Read the <a href={require("../resources/books/teenDrivers.pdf")}
                                               rel="noreferrer" target="_blank">short article </a> (attached
            as PDF) and then answer the questions below.</p>
          <p className="topBottom"><i>Teenage Drivers? Be Very Afraid </i> is a persuasive text. A persuasive text is a
            nonfiction text that argues a point with the purpose of
            changing the audience’s opinion or calling the audience to action. It states the
            writer’s position on an issue and gives supporting evidence, using facts and
            examples. A persuasive text addresses readers' concerns and gives
            counterarguments.</p>
          <p className="topBottom">
            <ol className="vocab">
              <li> How is a persuasive text different from a narrative?</li>
              <li>What is the main idea of this article? Use evidence from the text to support your answer.</li>
              <li>What is the author’s perspective on this issue? How do you know this?</li>
              <li>Does the author address opposing viewpoints or counterarguments?</li>
              <li>What persuasive techniques does the author use to convince the reader? Cite examples from the
                text. <i>(Persuasive techniques include use of strong language, expert opinion,
                  statistics/facts, or appealing to the reader's emotions)</i></li>
              <li>Do you think the author has a bias? Why or why not?</li>
              <li>What are two of the author's strongest arguments?</li>
              <li>What was the author's intention or goal with the article? Did he achieve his goal?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener111} value={la7Essay111}/>

          <span className="days">LESSON 112 </span>
          <p>The next novel you will read is <strong>The Outsiders </strong> by S.E. Hinton. It is a story about Ponyboy
            Curtis, a teenager who his struggles with right and wrong in a world where he believes that he is an
            outsider.
          </p>
          <p className="topBottom"><strong>The Outsiders </strong> is available at your local library, local bookstore
            and online for purchase. Until your copy arrives, <a
              href={require("../resources/books/TheOutsidersChapter1.pdf")} rel="noreferrer"
              target="_blank"> Chapter 1 is provided here. </a></p>
          <p className="topBottom"><a href={require("../resources/books/TheOutsidersChapter1.pdf")} rel="noreferrer"
                                      target="_blank"><img src={require("../../public/images/bookCovers/outsiders.jpg")}
                                                           alt="The Outsiders novel"/></a></p>
          <p className="topBottom">After you read Chapter 1, answer the questions below using complete sentences. Then
            complete the vocabulary assignment.<br/>
            1. From what point of view is this novel told? Why would Hinton (the author) choose to use this point of
            view?<br/>
            2. How does the narrator describe himself?<br/>
            3. Why does he like to go to the movies alone? What character trait does this preference
            reveal in him?<br/>
            4. What happened to the narrator’s parents?<br/>
            5. What happens to him on the way home from the movies?<br/>
            6. Quote text from the novel that best supports the inference that the attack on Johnny was
            a turning point for him.<br/>
            7. Infer how the narrator feels as he is being followed. What signs does he exhibit that tell
            you this is how he feels? <i>Infer means to conclude or to assume something based on evidence. </i> <br/>
            8. What do we learn is the name of the narrator?<br/>
            9. Why is Ponyboy so reluctant to tell Darry how he really feels after the incident with the
            Socs?<br/>
            10. Why would Ponyboy want to be in a Greaser gang? What is he attempting to find in the
            gang that is missing from his life?<br/>
            11. Why do the Greasers dress the way they do? What image are they attempting to
            convey? Why do they want to portray this image?<br/>
            12. Although it is not stated directly, why is Darry so strict with Ponyboy? What might
            happen if Ponyboy were to get into trouble?<br/>
            13. What do you think the Greasers might do as a result of the attack?<br/>
            14. Why might the author have dedicated several paragraphs from the chapter to tell about
            each of the boys in Ponyboy’s life?<br/>
            15. How did Two-Bit get his nickname? What is his real name?<br/>
            16. According to Ponyboy, what is different about Dally from the rest of the guys?<br/>
            17. Why does Darry work so hard?<br/>
            18. What does Sodapop tell Ponyboy about his plans for Sandy and himself?<br/>
            19. Describe Ponyboy, Soda, and Darry’s relationship with each other.<br/>
            20. Do any of the brothers remind you of characters within your own family or circle of
            friends? Explain.<br/>
            21. What is the time period (what year is it)?<br/>

            <strong>Vocabulary</strong> For each vocabulary word below, write a definition and then write a sentence
            using the word. Below is an example.<br/>
            <ol className="vocab">
              <li>unfathomable - <i style={{ color: "#4f5979" }}> unfathomable: impossible to understand or
                incomprehensible. "For some unfathomable reason, he could not get through the assignment."</i></li>
              <li>asset</li>
              <li>rivalry</li>
              <li>gingerly</li>
              <li>sagely</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener112} value={la7Essay112}/>

          <span className="days">LESSON 113 </span>
          <p className="topBottom"> Read Chapter 2 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. How do the boys get into the Nightly Double? Why do they choose to do that?<br/>
            2. Why does Dally use vulgar and abrasive language with the girls at the movies?<br/>
            3. How do the girls respond to the insults? From their reactions, what can you deduce or assume about
            their personalities?<br/>
            4. What does Cherry mean when she calls Sodapop a "doll"?<br/>
            5. Why is Ponyboy embarrassed about Sodapop dropping out of school and working at a
            gas station? In your opinion, should he be embarrassed?<br/>
            6. Why is Ponyboy uncomfortable about Dally’s behavior?<br/>
            7. Explain why the girls are okay with Johnny and Pony, but not Dally.<br/>
            8. Why are the girls alone and without a car?<br/>
            9. What does Two-Bit do that scares Johnny and Pony? Why it is especially
            frightening to Johnny?<br/>
            10. What rule do the Greasers follow, besides "stick together"? How do you think these rules
            came to be?<br/>
            11. Describe the attack on Johnny. Why do you think the attack was so traumatic to him?<br/>
            12. What theme does the conflict between the Socs and the Greasers reveal?<br/>

            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>roguishly</li>
              <li>incredulous</li>
              <li>nonchalantly</li>
              <li>abiding</li>
              <li>digested</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener113} value={la7Essay113}/>

          <span className="days">LESSON 114 </span>
          <p className="topBottom"> Read Chapter 3 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. What does Cherry tell Ponyboy about the Socs?<br/>
            2. What do the Socs and the Greasers have in common? What would their constant
            fighting suggest about their differences and similarities?<br/>
            3. Relate the story of Mickey Mouse and Soda. Why do you think it was included in the
            novel?<br/>
            4. The reference to watching the sunset is important to developing the
            relationship between Cherry Valance and Ponyboy. Why is it important?<br/>
            5. After all the vulgar language and abuse at the movies, evaluate why Cherry would "fall in
            love" with Dally. Considering the characters, how realistic does this seem?<br/>
            6. When the blue Mustang rolls up, what are its occupants hoping to do? What do the
            Greasers think they want?<br/>
            7. Compare the way the Greasers and the Socs treat the girls. Which
            group treats them better? Give examples.<br/>
            8. What did you think of Cherry saying, "...if I see you in the hall at school or someplace and
            don’t say hi, well, it’s not personal..." What did you think of this?<br/>
            9. What do Pony and Johnny do instead of going home after the movies? What is the result
            of their decision?<br/>
            10. When Ponyboy doesn’t arrive home until 2:00 a.m., why doesn’t Darry call the police?<br/>
            11. After Darry slaps Ponyboy, Ponyboy concludes that Darry does not want him around.<br/>
            Do you think this is actually how Darry feels, or is Ponyboy overreacting? Provide
            evidence for your opinion.<br/>
            12. Why do Ponyboy and Johnny run away?<br/>
            13. Infer why Johnny says he likes it better when his father is hitting him.<br/>
            14. Paraphrase why Darry seems like such an angry person.<br/>
            15. Ponyboy and Johnny walk through the park trying to decide whether or not they are
            going to run away for real. What deeper symbolism has Hinton incorporated here by
            deciding to have the boys walk through a park instead of somewhere else?<br/>

            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>sophisticated</li>
              <li>aloofness</li>
              <li>elite</li>
              <li>resignedly</li>
              <li>ember</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener114} value={la7Essay114}/>

          <span className="days">LESSON 115 </span>
          <p className="topBottom"> Read Chapter 4 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. What happens to Ponyboy at the park?<br/>
            2. Ponyboy says that he and Johnny would "never let them have the satisfaction of
            knowing" that the Socs scared them to death. Why? What does it say about the value
            that Johnny and Ponyboy place on the Greasers’ reputation?<br/>
            3. Why does Johnny go after Bob? What is the result?<br/>
            4. Why does Johnny react so violently to the Socs?<br/>
            5. Johnny reacts with calmness after the incident with Bob, while Ponyboy becomes
            hysterical. Why do you think they react differently?<br/>
            6. As Ponyboy becomes sick, why does Johnny tell Ponyboy that he won’t look at him?<br/>
            7. To whom do Ponyboy and Johnny go for help? What does he give them? What does he
            tell them to do?<br/>
            8. How do the boys get to where they are going? Where do they plan to stay?<br/>
            9. On the way there, Johnny says he "couldn’t shoot anybody" despite just having stabbed
            someone. How do we explain this? What is the difference between these two acts?<br/>
            10. Ponyboy wishes to go to the country in the earlier chapters of the novel, but once he
            gets there, he doesn’t like it and says that "there are worse things than being a greaser."
            Why is his experience so different from his dream of visiting it? What is the main thing
            that is missing from the reality that was present in his fantasy?<br/>
            11. Why do you think the author included the flashback to when all the guys went to church
            together? Do you think it was important to include that scene? Why?<br/>
            12. Make a prediction about Ponyboy’s "premonition." How could this be a hint of something
            that is being foreshadowed?<br/>

            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>apprehensive</li>
              <li>definace</li>
              <li>contemptuous</li>
              <li>sheepish</li>
              <li>premonition</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener115} value={la7Essay115}/>

          <span className="days">LESSON 116 </span>
          <p className="topBottom"> Read Chapter 5 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. When Pony wakes up, why is he alone? What does Johnny bring back?<br/>
            2. What different things would you buy as supplies? Remember, they did their shopping at
            a grocery store, so keep your answers realistic to things that you could find there.<br/>
            3. What do the boys do to disguise themselves? Why is Pony so reluctant to do anything<br/>
            with his hair?<br/>
            4. Johnny states that when people go to jail, the authorities cut their hair to "break" them.
            Why would he think this? What does this say about his opinion of authority? Why is hair
            really cut when people are sent to jail?<br/>
            5. How did the boys show their feelings as emotion overcame them? Do you think their
            behavior was "in character" or did it deviate from the image the writer was trying to
            create? Explain.<br/>
            6. Read the following quote, which took place after the boys cried. "...for the first time since
            Dally and I had sat down behind those girls at the Nightly Double, I relaxed. We could
            take whatever was coming now." Based on this passage, what we can infer about how
            Ponyboy is feeling?<br/>
            7. How do they pass the time over the next few days? What do they eat?<br/>
            8. Ponyboy realizes he likes Soda, Two-Bit, and Darry’s qualities that are like heroes in
            novels, while Johnny likes Dally because he is "real." What does this mean? Why would
            Ponyboy relate more to people who portray the characteristics of a character in a novel,
            while Johnny is enamored with characters who are realistic?<br/>
            9. Why does Ponyboy get sick on the fifth day at the church?<br/>
            10. What does Dally bring to Ponyboy from Sodapop? What does Pony learn from it about
            Darry’s feelings?<br/>
            11. How was Dally able to mislead the police?<br/>
            12. Dally tells Johnny and Ponyboy not to pick up his bad habits. What does he mean by
            this? Is it a little late, now, to be telling the two boys this? Why or why not?<br/>
            13. Where do they go in Buck’s car?<br/>
            14. When Dally says that his heater "sure does help a bluff..." what does he mean?<br/>
            15. Who is the "spy" Dally speaks of?<br/>
            16. Interpret what Ponyboy means when he says, "things are happening too quick. Too fast."
            Do you ever get a similar feeling in your own life? Explain.<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>imploringly</li>
              <li>sullenly</li>
              <li>hue</li>
              <li>subside</li>
              <li>elude</li>
              <li>wistfully</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener116} value={la7Essay116}/>

          <span className="days">LESSON 117 </span>
          <p className="topBottom"> Read Chapter 6 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. "The spy" thinks the whole mess is her fault. Dally agrees that it is. Thinking back on the
            story, do you believe the trouble they are all in is because of her? Explain.<br/>
            2. What does Johnny announce that he and Pony are going to do? Why does he think it is
            best? Do you agree or disagree with their decision. Why?<br/>
            3. What does Dally tell Johnny when he asks about his parents? How does Johnny react?
            How is his reaction different from how Dally would react?<br/>
            4. After Johnny asks about his parents, Ponyboy says that he feels bad for Dally. Why
            would he feel bad for Dally instead of Johnny?<br/>
            5. Ponyboy outlines the different functions within their group. Do you think there is a
            hierarchy within the group? Where does Ponyboy fit into this? Where does Dally fit?<br/>
            6. What is happening at the church when they return? Describe what they do about it.<br/>
            7. Why does Ponyboy feel so inclined to risk his life?<br/>
            8. While in the church, Johnny appears to act completely differently from how he normally
            does. Why do you think he does so?<br/>
            9. What is Dally’s motivation for clubbing Pony across the back?<br/>
            10. Discuss how Pony and Johnny’s decision to help the children changes the action of the
            story. Cite textual evidence to support your response.<br/>
            11. Where are they headed when Pony wakes up? Where are Johnny and Dally? Describe
            each of the boys’ injuries.<br/>
            12. When in the ambulance, Ponyboy disputes it when the stranger tells him that he passed
            out. Why is this? What does this say about how Ponyboy believes in the Greaser image?<br/>
            13. How do Soda and Darry react when they see Ponyboy?<br/>
            14. Cite evidence from the novel that shows Ponyboy was wrong all along about the way
            Darry feels about him. How does Pony come to this realization?<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>doggedly</li>
              <li>conviction</li>
              <li>detached</li>
              <li>racking</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener117} value={la7Essay117}/>

          <span className="days">LESSON 118 </span>
          <p className="topBottom"> Read Chapter 7 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. Describe what Soda is doing while the police are trying to interview Ponyboy.<br/>
            2. What is the extent of Johnny’s injuries? How are the boys able to get the doctor to tell
            them of Johnny’s prognosis?<br/>
            3. Explain why Ponyboy says to himself, "If? Please, no, I thought. Please not ‘if’"?<br/>
            4. After the boys talk to the doctor, they decide to go home and get some sleep. What do
            Darry’s actions in that scene reveal about his true character?<br/>
            5. Explain the reference to chocolate cake.<br/>
            6. Why do the Curtis boys always leave their door unlocked? What does this reveal about
            the character of the gang members?<br/>
            7. How did Two-Bit and Steve react when they saw Ponyboy? Is this a normal reaction for
            them? What does this say about the way that their group functions?<br/>
            8. What does the newspaper say about the "heroes"? What does Two-Bit have to say
            about the wording the reporter chose?<br/>
            9. The article does not use the word Socs. Ponyboy states this is because "most grownups
            don’t know about the battles that go on between us." What does this say about the
            parental role in all of the boys’ lives (both Socs and Greasers)? How do you think the
            scenario would be different if the parents were different?<br/>
            10. How real, in your opinion, is the threat of putting Pony in a boys’ home? Justify your
            answer, citing the text.<br/>
            11. Recount the story of Pony’s recurring dream.<br/>
            12. What has happened to Soda’s girlfriend, Sandy? Why? What do you think is the "real"
            story?<br/>
            13. To what is Pony referring when he says, "...it’s time for those guys from the state to
            come by and check up on us."<br/>
            14. Briefly describe the conversation between Randy and Ponyboy.<br/>
            15. Why does Randy decide to not go to the rumble?<br/>
            16. From their conversation, what did you learn about the privileged class to which the Socs
            belong? How do you think some people come to feel entitlement?<br/>
            17. Is there a way in which someone could be rich, but not have a sense of entitlement as a
            child? How can this be accomplished?<br/>
            18. Randy says, "You get a little money and the whole world hates you." Pony replies, "No,
            you hate the whole world." Which of these statements, in your opinion, is true? Explain
            your answer.<br/>

            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>radiate</li>
              <li>delinquents</li>
              <li>manslaughter</li>
              <li>brawn</li>
              <li>recurring</li>
              <li>aghast</li>
              <li>exploit</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener118} value={la7Essay118}/>

          <span className="days">LESSON 119 </span>
          <p className="topBottom"> Read Chapter 8 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. What do you think the doctor means when he says to the nurse, "Let them go in. He’s
            been asking for them. It can’t hurt now"?<br/>
            2. Why do you think that Johnny asks for another copy of Gone with the Wind?<br/>
            3. Ponyboy realizes that the gang needs Johnny. What is Johnny’s greatest contribution to
            the gang?<br/>
            4. Johnny has thought of suicide in the past. Why does he want to live, even though he
            knows he would never be able to walk again?<br/>
            5. When the nurse announces to Johnny that his mother is there to see him, how does he
            react? When Two-Bit and Ponyboy see Johnny’s mother, what happens? How do they
            react? Why?<br/>
            6. When Dally asks Two-Bit about his "fancy black-handled switch," what do you think was
            his reason for asking? Why do you think Two-Bit hands it over to him "without
            hesitation"?<br/>
            7. Two-Bit says that the boys were the only thing keeping Darry from being a Soc. What
            does he mean? Do you think this is true? Why?<br/>
            8. Pony had a sick feeling in his stomach about the rumble that night. Infer what you think
            he was worried about.<br/>
            9. When Two-Bit calls him a chicken, Ponyboy says, "Ain’t I a Curtis, same as Soda and
            Darry?" What can you infer from this statement?<br/>
            10. Cherry tells Ponyboy about the kind of person Bob "really" was. How does she describe
            him?<br/>
            11. Cherry says about Bob, "He could be sweet sometimes, and friendly. But when he got
            drunk...it was that part of him that beat up Johnny." Explain the differences between
            reason and excuse. Do you believe that if someone has been drinking, it is an excuse, or
            is it a reason, for inappropriate behavior? Try to use examples in your answer.<br/>
            12. What was the author’s purpose for writing at the end of Chapter 8, "She had green
            eyes"?<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>faltered</li>
              <li>jet</li>
              <li>divert</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener119} value={la7Essay119}/>

          <span className="days">LESSON 120 </span>
          <p className="topBottom"> Read Chapter 9 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. What is Hinton’s purpose for including Pony fussing over his beard before the rumble?<br/>
            2. In the middle of stating that Greasers are proud of their Greaser reputation, Pony says
            that he doesn’t want to be a hood. What does this say about Pony? Why does he
            continue to "rep" his Greaser status?<br/>
            3. Pony and Curly once played chicken by holding cigarettes to each other’s fingers. Why
            would they do that? Do you think it is worth whatever is to be gained?<br/>
            4. How do the boys show their excitement about the rumble when they are at the Curtis
            house getting ready to head out?<br/>
            5. Pony thinks there is only one good reason to fight. What is it?<br/>
            6. Pony believes that he and Darry are both going to "get somewhere." What does that
            mean to him? Do you believe they have any choice in the matter? Discuss in detail.<br/>
            7. Pony states that the Burmly boys have weird vocabularies. Why is this ironic? Cite
            examples from the text to support your answer.<br/>
            8. Why, according to Ponyboy, do people usually think that any trouble is the fault of the
            Greasers, not the Socs? In your opinion, is that a fair assumption? Explain.<br/>
            9. What are the rules for the rumble?<br/>
            10. Who actually steps up to start the rumble? Who is his opponent and how does it happen
            that he is able to take the first swing? What is ironic about these two boys fighting
            against each other?<br/>
            11. Pony says, " That’s stupid... They’ve both come here to fight and they’re both supposed
            to be smarter than that." Why would they show up anyway?<br/>
            12. Which side wins the rumble? How is the winner determined?<br/>
            13. Where do the boys go when the rumble ends? Convey what happens as they are on
            their way in Buck’s car. How do they manage to be let off by the police?<br/>
            14. What were Johnny’s last words to Ponyboy? What do you think he meant?<br/>
            15. Cite evidence from the novel that best supports the inference that Johnny’s death was a
            turning point for Dally.<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>underprivileged</li>
              <li>conformity</li>
              <li>ruefully</li>
              <li>leery</li>
              <li>taut</li>
              <li>contract</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener120} value={la7Essay120}/>

          <span className="days">LESSON 121 </span>
          <p className="topBottom"> Read Chapter 10 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. Dally runs out "like the devil was after him" when he finds out Johnny is dead. According
            to Pony, why is Dally having so much trouble handling Johnny’s death?<br/>
            2. Infer why Pony didn’t want his brothers to touch him after he told them about Johnny’s
            death.<br/>
            3. When Dally calls them on the phone, what is his message?<br/>
            4. Without even talking about it, the group decides to help Dally. How does this
            demonstration reveal an important theme of the novel?<br/>
            5. According to Ponyboy, Johnny died gallant. What does he mean? How does he feel this
            is different from the death of Dally?<br/>
            6. Why do you think Ponyboy becomes so sick? What are his symptoms?<br/>
            7. The narrator writes, "And the ground rushed up to meet me very suddenly." What had
            really happened?<br/>
            8. Pony wants to know if Darry is sorry that he is sick. Why?<br/>
            9. Pony says that he and Darry go all-out for athletics and studying, but Soda does not.
            Why would these things be important to them, in particular? Why would Soda not
            understand it?<br/>
            10. Ponyboy is very concerned about whether or not he asked for Darry while he was in the
            hospital. What can the reader infer about what Ponyboy is feeling?<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>stupor</li>
              <li>stricken</li>
              <li>delirious</li>
              <li>clad</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener121} value={la7Essay121}/>

          <span className="days">LESSON 122 </span>
          <p className="topBottom"> Read Chapter 11 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. After Ponyboy studies the picture of Bob in the yearbook, what conclusions does he
            make about him?<br/>
            2. Why is Ponyboy uncomfortable with his classmates visiting his house?<br/>
            3. Why do you think Ponyboy doesn’t care what Randy thinks of their house?<br/>
            4. What was Randy’s purpose in visiting Pony? What was the outcome of their
            conversation?<br/>
            5. During the conversation, Randy believes that if he tells the truth no one will get hurt and
            all he will have to do is pay a fine, while Ponyboy is worried about being put in a foster
            home. How do their different perspectives mirror their positions within society? Do you
            think Randy is sheltered from the harshness of the world? Explain your answer.<br/>
            6. What do you think was Randy’s purpose in visiting Ponyboy? Do you think he just
            wanted to talk to Ponyboy or something else? Do you think he got what he was looking
            for?<br/>
            7. What is the author’s purpose in having Ponyboy say that he is the one who killed Bob
            and insist that Johnny isn’t dead?<br/>
            8. Darry calls Ponyboy "little buddy." Why is this important to Pony? What does it indicate
            about their changing relationship?<br/>

            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>idolized</li>
              <li>hearing</li>
              <li>guardian</li>
              <li>liable</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangela7Listener122} value={la7Essay122}/>

          <span className="days">LESSON 123 </span>
          <p className="topBottom"> Read Chapter 12 of <i>The Outsiders</i> and then answer the questions below using
            complete sentences.</p>
          <p className="topBottom">
            1. Even when facing possibly being split up, the boys say that Dally was their friend. Why is
            this so important? How could this have negatively affected the judge’s decision?<br/>
            2. Why do you think the judge’s line of questioning is so easy on Ponyboy? Why is he
            acquitted?<br/>
            3. Do you think the judge made the right choice in leaving the boys together? Explain your
            answer.<br/>
            4. What happens to Ponyboy’s schoolwork, memory, and attitude about himself after the
            hearing? What opportunity does his teacher give him to make up for his problems in
            school?<br/>
            5. Ponyboy states that his teacher was a good guy and interested in him as a person. Do
            you feel this way about any of your teachers? Does this make you want to work harder
            for them?<br/>
            6. Why do you think Greasers didn’t eat in the cafeteria?<br/>
            7. When the Socs show up, Ponyboy says he feels nothing. Why? Do you think this change
            in Ponyboy will be permanent? Do you think he would have used the bottle?<br/>
            8. Why does Ponyboy pick up the glass? Why is this strange behavior, considering the
            surrounding events? Why is this action a relief to Two-Bit?<br/>
            9. Why does Soda bolt out the door?<br/>
            10. What do we find out about the real reason that Sandy went to Florida?<br/>
            11. After Pony and Darry go find Soda, the three of them talk. What is the result of their
            conversation?<br/>
            12. Summarize what was in the note from Johnny that Ponyboy found when it fell out of his<br/>
            book.<br/>
            13. What does Ponyboy finally decide to write about in his theme?<br/>
            14. What is significant about the last sentence of the novel? Why would Hinton choose to
            end her book like this?<br/>
            15. In your opinion, what is the most likely reason that the author chose to write the novel
            from Ponyboy’s point of view?<br/>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using the
            word.<br/>
            <ol className="vocab">
              <li>flinching</li>
              <li>acquitted</li>
              <li>vacuum</li>
              <li>veered</li>
              <li>welled</li>
              <li>vast</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener123} value={la7Essay123}/>

          <span className="days">LESSON 124 </span>
          <p className="topBottom"><strong>Write a Five Paragraph Essay</strong> based on one of the questions
            below.</p>
          <ul className="list">
            <li>Did you think any of the Greasers were heroes? Provide your own definition of a hero and then explain,
              using examples, how the character (or characters) you chose meet that definition.
            </li>
            <li>Were the Socs or the Greasers more of menace to society.</li>
            <li>Which gang from <i>The Outsiders </i> would you want to belong to? Be sure to describe the differences
              between the two groups.
            </li>
            <li>Although the author never uses the word outsider in her novel, it is the title of the book. Who do you
              think the outsiders were? Be sure to define what you mean by "outsiders" in your essay and use examples
              from
              the book to support your essay.
            </li>
          </ul>
          <p className="topBottom">Take a few minutes to think about your topic and then create an outline. You must
            use examples from the novel to support your statement. Each paragraph should be 3-5 sentences.</p>
          <p className="topBottom">Your introduction paragraph should grab your reader’s
            attention. It also needs a clear thesis statement that conveys the points or arguments you are going to
            make. </p>
          <p className="topBottom">For your three supporting paragraphs (paragraphs 2, 3 and 4), use three different
            examples or support from
            the novel. </p>
          <p className="topBottom">Your conclusion should restate your thesis in a different way. End with a
            thoughtful summary. </p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started. </p>
          <textarea className="textArea" onChange={onChangela7Listener124} value={la7Essay124}/>

          <span className="days">LESSON 125 </span>
          <p className="topBottom">Write a <strong>Persuasive Argument.</strong></p>
          <p className="topBottom">In <i>The Outsiders,</i> Johnny and Pony Boy got into a tragic fight and Bob, a
            member of the Socs, is killed. Do you think Johnny is guilty or innocent of murder? </p>
          <p className="topBottom">Choose to be either the <strong>defense attorney</strong> or the <strong>prosecuting
            attorney</strong> for Johnny's court case. Write your argument from the perspective of an attorney and
            use evidence from the book to support your case. </p>
          <img src={require("../../public/images/stories/court.jpg")} alt="courtroom"/><br/>
          <p className="topBottom">If you are Johnny's defense attorney, you must convince a jury through your
            persuasive argument that he is innocent. If you are the prosecuting attorney for the case, you must
            convince a jury through your persuasive argument that he is guilty of murder.</p>
          <p className="topBottom">Your introduction paragraph should grab the jury’s
            attention. Briefly describe what led up to the fight. Then give 2 or 3 reasons or arguments why
            Johnny is innocent or guilty. </p>
          <p className="topBottom">The body of your essay (7-10 sentences), should cover your arguments in detail. Use
            quotes from the book and show how the "evidence" supports your argument.</p>
          <p className="topBottom">Your final paragraph should summarize your points. Restate
            the most convincing evidence. Your argument should have a call to action for your jury: find Johnny innocent
            or find him guilty (depending on which side you take).</p>
          <textarea className="textArea" onChange={onChangela7Listener125} value={la7Essay125}/>

          <span className="days">LESSON 126 - Identity</span>
          <p className="topBottom">Identity and fitting in are major themes in <i>The Outsiders</i> and in the next
            novel you will read, <i>Out of My Mind</i>. </p>
          <p className="topBottom">For this lesson, complete the following:<br/>
            <ol className="vocab">
              <li>Write at least 10 things that are important parts of your identity. Example: <i>American, daughter,
                runner, guitar player, good sense of humor, loyal friend, good listener, avid reader, impatient,
                persistent, artistic, lover of travel, etc.</i></li>

              <li>Describe when you feel like an outsider. What are the circumstances? Where are you and who are you
                usually with? What are the things that make you feel you don't fit in? Which things about your identity
                are at odds with the place or people you're with?
              </li>

              <li>Describe when you feel you fit in the most. This can include being in a particular place with certain
                people (examples: at school, church, home, hanging out with a close friend, playing videos games with
                friends online). Which things about your identity do you feel are most appreciated?
              </li>

              <li>Picture yourself 5 years ago. Think about what you looked like, your personality, and the dreams you
                had.
                Think about how your personality traits and dreams have changed since you were a small child. <br/><br/>
                Write a story (2-3 paragraphs) telling how your identity has developed over the past five years.
                Describe how
                your experiences, life-changing events, moments of revelation, interests and dreams have shaped your
                identity.
                Your story should answer the question <strong> What made you the person you are today?</strong>
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener126} value={la7Essay126}/>

          <span className="days">LESSON 127 </span>
          <p>The novel <strong>Out of My Mind, </strong> by Sharon Draper, is a story about an eleven-year-old girl
            named Melody. She can’t walk, talk or write because she has cerebral palsy. But she also has a photographic
            memory; she can remember every detail of everything she has ever seen or experienced. She’s the smartest kid
            in her
            school, but no one knows it. But she's determined to let them know somehow.
          </p>
          <p className="topBottom"><strong>Out of My Mind </strong> is available at your local library, local bookstore
            and online for purchase. Until your copy arrives, <a
              href={require("../resources/books/OutofMyMindExcerpt.pdf")} rel="noreferrer"
              target="_blank"> an excerpt is provided here so you can complete the first
              assignment. </a></p>
          <p className="topBottom"><a href={require("../resources/books/OutofMyMindExcerpt.pdf")} rel="noreferrer"
                                      target="_blank"><img
            src={require("../../public/images/bookCovers/outOfMyMind.jpg")}
            alt="Out of My Mind novel"/></a></p>
          <p className="topBottom">Read Chapters 1-3. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>Describe what you know about Melody so far. Describe her physical appearance, age, personality, type
                of music she likes, etc.
              </li>
              <li>She lists her strengths as her smile and dimples. Do you think she has any other strengths?</li>
              <li>How do you like her?</li>
              <li>How does she describe words?</li>
              <li>What do you think it would be like to not be able to speak a single word?</li>
              <li>Describe Melody’s "tornado explosions." Why do they happen?</li>
              <li>How does Melody feel about her wheelchair?</li>
              <li>Why do you think others see her problems first?</li>
              <li>Why is Melody so aware of all the smells and sounds around her?</li>
              <li>Do you think Melody has a right to be angry? Why or why not.</li>
              <li>Are her parents able to understand her?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener127} value={la7Essay127}/>

          <span className="days">LESSON 128 </span>
          <p className="topBottom">Read Chapters 4 & 5. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> How does Melody describe her classmates at her new school?</li>
              <li>What does Melody think about school so far?</li>
              <li>Why do people assume Melody is stupid?</li>
              <li>Why does she put on her "handicapped face"?</li>
              <li>Do you think Melody’s parents think she is only a burden? Explain.</li>
              <li>Why do you think children in Melody’s school ignore her?</li>
              <li>How does Melody communicate?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener128} value={la7Essay128}/>

          <span className="days">LESSON 129 </span>
          <p className="topBottom">Read Chapters 6 & 7. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>What do you think about Mrs. Valencia? Do you think she’ll be good for Melody? Explain.</li>
              <li> Melody says she would rather be able to talk than walk. Do you feel the same? Explain.</li>
              <li>What do you think about Melody’s mother and father? Does her mother see Melody differently than her
                father does? Explain whether you think they are good parents.
              </li>
              <li>Describe Melody’s dreams.</li>
              <li>What do you think about the students in Melody’s class?</li>
              <li>Mrs. Billups seems to be confused about the class. Why do you think this is?</li>
              <li>How did Melody feel when her mom snapped Mrs. Billups’ cd in half?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener129} value={la7Essay129}/>

          <span className="days">LESSON 130 </span>
          <p className="topBottom">Read Chapters 8 & 9. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>Melody thinks Ollie (her goldfish) has is worse than her. How does she compare her life to Ollie’s?
              </li>
              <li>What kind of pet did Melody get and why did she love it so much?</li>
              <li>What does Melody feel about Penny?</li>
              <li>What would Melody’s wish be if she were blown to Oz and met the Wizard? What would your wish be? How
                are they different?
              </li>
              <li>Why was Melody’s mother scared when she was pregnant?</li>
              <li>Why were mornings tough for Melody?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener130} value={la7Essay130}/>

          <span className="days">LESSON 131 </span>
          <p className="topBottom">Read Chapters 10 & 11. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>How do you think Melody’s parents know what she is saying or feeling when she can’t talk? Is her mom a
                good mom?
              </li>
              <li>Why? Do you think Melody’s parents get frustrated when she is trying to communicate with them?
                Explain.
              </li>
              <li>How are Melody’s parents able to figure out what Melody is feeling or wat she needs?</li>
              <li>Are you able to relate to the experience of not being able to express to others what you’re feeling or
                why you’re frustrated? Explain.
              </li>
              <li>What does Melody envy about Garfield the cat?</li>
              <li>Why did she get angry at her father?</li>
              <li>What do you think about Molly and Claire? If you were their teacher, what would you say to them?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener131} value={la7Essay131}/>

          <span className="days">LESSON 132 </span>
          <p className="topBottom">Read Chapters 12-14. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>Melody starts to attend regular classes like math and history. Do you think this will benefit
                everyone, just certain people, only Melody or no one? Explain.
              </li>
              <li>What happened that pleased Melody’s mother?</li>
              <li>Why did Rose act the way she did at the aquarium? What did you think about her behavior?</li>
              <li>Why was Melody allowed to go to the aquarium?</li>
              <li>Rose has something that Melody wants. What is it?</li>
              <li>How do you think Molly and Claire feel about Melody? What about Rose? Why do you believe this?</li>
              <li>Do you think a computer could change Melody’s life? How so?</li>
              <li>Who was Stephen Hawking and why could his life experience be significant for Melody?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener132} value={la7Essay132}/>

          <span className="days">LESSON 133 </span>
          <p className="topBottom">Read Chapters 15 & 16. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>Describe how you think Melody’s life has changed.</li>
              <li>Describe Melody’s frustration and whether you think her frustrations are likely to lessen or increase.
                Explain.
              </li>
              <li>What name does Melody give her computer? Why do you think she gives it this name?</li>
              <li>What does Melody realize when the computer communicates in other languages?</li>
              <li>Does it make a difference that Melody’s father has a camcorder? Explain.</li>
              <li>Describe how Melody and her parents are feeling at this point in the story.</li>
              <li>How do you think the computer may change her life?</li>
              <li>What are your thoughts about Claire’s comment?</li>
              <li>Could Elvira cause any problems for Melody? How will Elvira change Melody’s life?</li>
              <li>Has Melody managed to feel a part of a group yet? If so, explain when.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener133} value={la7Essay133}/>

          <span className="days">LESSON 134 </span>
          <p className="topBottom">Read Chapters 17 & 18. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>Things feel better for Melody at school now. Why is this?</li>
              <li>What did Melody win and how did she win it? How did you feel when she won the prize?</li>
              <li>Do you believe Melody can fit in at her school or elsewhere?</li>
              <li>What did Mr. Dimming say? What did you think about this?</li>
              <li>Melody skips her inclusion classes and does what instead?</li>
              <li> Do you think Catherine and Mrs. V are the right people to help Melody? Explain.</li>
              <li>In Chapter 18, Melody gets angry. Explain why and discuss whether her anger was justified.</li>
              <li>Melody uses imagery to describe how words and numbers function in her head. While words float easily,
                numbers float to the bottom like rocks. What do you think this means?
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener134} value={la7Essay134}/>

          <span className="days">LESSON 135 </span>
          <p className="topBottom">Read Chapters 19-21. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> Why are people at Melody’s school surprised that she made the Whiz Kids Team?</li>
              <li>What question do people ask Melody the most?</li>
              <li> How would you feel if you were Melody’s parents and realized Melody’s abilities were not appreciated
                at her school?
              </li>
              <li>Melody would be afraid if she could fly. Explain why this is.</li>
              <li>What do you think about Melody’s ability to now be able to stand up for herself?</li>
              <li>Is Rose still her friend at this point in the story? Why didn’t Melody tell her what she plans to do
                after school?
              </li>
              <li>Why do you think Claire has a problem with Melody using a computer?</li>
              <li>Mr. Dimming warns that Melody will be harmed if she isn’t successful at the competition. Do you think
                he is right in what he is trying to argue? Explain.
              </li>
              <li>How did Mr. Dimming feel about Melody after he graded the tryout test?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener135} value={la7Essay135}/>

          <span className="days">LESSON 136 </span>
          <p className="topBottom">Read Chapters 22-24. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> How does Melody feel about the quiz team? Does she feel included or feel like an outsider? Explain
                how you know this.
              </li>
              <li>If you were a part of the team, would you say or do anything differently from the other kids on the
                team? Explain.
              </li>
              <li>Why does it matter to Melody that she behave like the other students when they study?</li>
              <li> Do you think she’s ready for the competition?</li>
              <li>What do you think about Claire?</li>
              <li>How did Melody like the TV studio?</li>
              <li>Describe how Paul, the station manager at the television station, interacts with Melody. Why is this
                significant?
              </li>
              <li>What do you think of Mr. Dimming at this point in the novel? How important is it to him that his team
                win the competition?
              </li>
              <li>If you had been Melody when the announcer singled her out, how would you have felt?</li>
              <li>What do you think of Connor? Do you like him? Explain why or why not.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener136} value={la7Essay136}/>

          <span className="days">LESSON 137 </span>
          <p className="topBottom">Read Chapters 25 & 26. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> Melody wants to introduce herself at the competition. Why did it matter that she do this?</li>
              <li>Was it a surprise that Melody got the last question correct at the competition?</li>
              <li>What was Melody’s reaction to her team winning?</li>
              <li>After the competition, Claire says she is good friends with Melody. What did you think about her
                saying this?
              </li>
              <li>How do you think winning the competition may change how things are at her school?</li>
              <li>Describe Melody’s experience regarding the restaurant. How did she feel about getting invited? When
                she arrived, did they save a spot for her? Did she have a nice time?
              </li>
              <li>How did the students feel about Melody being at the restaurant? Did they have a fun time or were they
                uncomfortable?
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener137} value={la7Essay137}/>

          <span className="days">LESSON 138 </span>
          <p className="topBottom">Read Chapters 27 & 28. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> How did the students react to the story about Melody in the newspaper? Why do you believe they
                reacted this way?
              </li>
              <li>Why do you think the article focused on her?</li>
              <li>How did Melody react to hearing the news from her mother?</li>
              <li>Why is Melody worried about the trip to Washington, D.C.?</li>
              <li>Melody believes Claire doesn’t know much about things not being fair. Is this a reasonable
                statement?
              </li>
              <li>When Melody shows up at the airport, she learns she was left behind. Do you believe this was
                intentional? Why or why not?
              </li>
              <li>"The morning started out like crystal, but the day has turned to broken glass." What is Melody talking
                about when she says this?
              </li>
              <li>How do you think the team will do at the competition without Melody?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener138} value={la7Essay138}/>

          <span className="days">LESSON 139 </span>
          <p className="topBottom">Read Chapters 29-31. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> Why do you think the Whiz Kids and Mr. Dimming decided not to include Melody in the trip to
                Washington, D.C.?
              </li>
              <li>If you were Melody, would you be able to forgive Mr. Dimming and the team? Explain why.</li>
              <li>Do you think the accident with Penny is Melody’s fault? Why or why not?</li>
              <li> Why is Melody so fearful about Penny?</li>
              <li>Did Melody believe that what happened to Penny was her fault? How did she feel about herself? How did
                Mrs. V respond to Melody regarding what happened?
              </li>
              <li>She has been thinking about Jill, her classmate in H5. Why?</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener139} value={la7Essay139}/>

          <span className="days">LESSON 140 </span>
          <p className="topBottom">Read Chapters 32 & 33. Then answer the questions below using complete sentences.<br/>
            <ol className="vocab">
              <li> How do you think the quiz team students and Mr. Dimming feel when they see Melody after the
                competition?
              </li>
              <li>What happens when the team tries to give Melody the trophy?</li>
              <li>What do you think about how Melody confronted the situation?</li>
              <li>Do you think Melody is much like other 5th graders or is she mostly different from them? Explain your
                answer.
              </li>
              <li>What was your opinion about Melody’s autobiography?</li>
              <li>Think back to what Melody was like at the beginning of the novel. How has she changed? Use examples
                from the novel.
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener140} value={la7Essay140}/>

          <span className="days">LESSON 141 </span>
          <h4>Research Paper</h4>
          <p className="topBottom">Research Cerebral Palsy. Then write an essay (minimum 5 paragraphs) that describes
            cerebral palsy and tells what it would be like to be Melody for a day. </p>
          <p className="topBottom">Explain the disability and how it affects someone socially, academically, emotionally
            and personally.</p>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click here for a 5 Paragraph Essay outline </a>if you need help
            getting started. </p>
          <textarea className="textArea" placeholder="As always, be sure to back up your work!"
                    onChange={onChangela7Listener141} value={la7Essay141}/>

          <span className="days">LESSON 142</span>
                      <p>Read the short story <strong><a href={require("../resources/books/to-build-a-fire.pdf")} rel="noreferrer"
                                                                     target="_blank">To Build a Fire</a></strong> by Jack London.</p>
            <p className="topBottom">Write a brief summary of the short story (1-2 paragraphs). Your summary should cover the "who, what,
              when, where, why and how."</p>
          <a href={require("../resources/books/to-build-a-fire.pdf")} rel="noreferrer"
             target="_blank"><img src={require("../../public/images/bookCovers/tobuildafire.jpg")} alt="To Build a Fire"/></a>
          <textarea className="textArea" placeholder="Write your summary here. Be sure to back up your work."
                    onChange={onChangela7Listener142} value={la7Essay142}/>

          <span className="days">LESSON 143 </span>
          <p className="topBottom">Watch the short film <i>To Build a Fire</i>. Then answer the questions below based on
            the short story and film.</p>
          <Video videoUrl="https://www.youtube.com/embed/LzRrPQJlUwM"/>
          <p>
            <ol className="vocab">
              <li>Using details from the short story, describe the setting.</li>
              <li>Describe the protagonist. What are his strengths, weaknesses and character traits?</li>
              <li>Describe the dog and his traits. Are there ways in which the dog seems to have more sense than the
                man?
              </li>
              <li>Before the man sets off down the trail, when was the trail last used? Why may this be important?</li>
              <li>What precaution has the man failed to take?</li>
              <li>Describe when the man decides to accept death with dignity? What do you think this says about his
                character?
              </li>
              <li>One of the themes of ‘To Build A Fire’ is man’s struggle against the forces of nature. Describe the
                challenges the man faces and the forces of nature he confronts. Use examples from the story.
              </li>
              <li>What do you think is the message that the writer wants to convey in ‘To Build a Fire’?</li>
              <li>Discuss the mistakes the man makes that ultimately leads to him losing his struggle against the forces
                of nature.
              </li>
              <li>Do you think overconfidence, pride or rashness was a part of his downfall?</li>
              <li>How is the dog’s reaction to the cold different than the man’s? Why is it different?</li>
              <li>Describe happens to the dog at the end? What does he do?</li>
              <li>If you had to choose a companion for a trip to the Arctic, would you choose to have the man or the dog
                accompany you?
              </li>
              <li>How did you like the short film? Did you think if accurately reflected the setting, characters and
                plot of the short story?
              </li>
              <li>Did you enjoy the short <i>story</i> or the short <i>film</i> more? Explain why.</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener143} value={la7Essay143}/>

          <span className="days">LESSON 144 </span>
          <p className="topBottom">Begin reading the novel <a href={require("../resources/books/TheHobbit.pdf")}
                                                              rel="noreferrer"
                                                              target="_blank">The Hobbit </a>by J.R.R. Tolkien.
            The Hobbit is a tale of high adventure, undertaken by a company of
            dwarves, in search of dragon-guarded gold. A reluctant partner in this
            perilous quest is Bilbo Baggins, a comfort-loving, unambitious hobbit, who
            surprises even himself by his resourcefulness and his skill as a burglar.</p>
          <p className="topBottom">The novel is available at your local library, local bookstore and online for
            purchase. Until your copy arrives, <a href={require("../resources/books/TheHobbit.pdf")} rel="noreferrer"
                                                  target="_blank"> Chapter 1 is provided here. </a></p>
          <a href={require("../resources/books/TheHobbit.pdf")} rel="noreferrer" target="_blank">
            <img src={require("../../public/images/bookCovers/hobbit.jpg")} alt="The Hobbit"/><br/>
            Read Chapter 1  "An Unexpected Party". </a>Then answer the questions below using
          complete sentences.
          <p className="topBottom">
            <ol className="vocab">
              <li>What are hobbits like?</li>
              <li>Describe Bilbo Baggins, Gandalf and Thorin.</li>
              <li>Why aren’t the dwarves in possession of their treasure? How does this make them feel?</li>
              <li>How does the dwarves’ music affect Bilbo?</li>
              <li>Gandalf says Bilbo is "as fierce as a dragon in a pinch." Why does he say this? Do you think this
                is true?
              </li>
              <li>What story did Thorin tell Bilbo?</li>
              <li>Why does Gandalf choose Bilbo? How can Gandalf’s word make Bilbo a burglar? How can Gandalf know
                things about Bilbo that Bilbo doesn’t even know?
              </li>
              <li>Does Thorin have faith in Bilbo? How can you tell?</li>
              <li>What is Smaug?</li>
              <li>What in this Chapter is imaginary or impossible in this world? What is realistic or possible?</li>
              <li>What story did Thorin tell Bilbo?</li>
              <li>How did Gandalf get the map and key?</li>
              <li>Summarize Read Chapter 1, describing events in the order that they happened.</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>scuttled</li>
              <li>throng</li>
              <li>audacious</li>
              <li>renumeration</li>
              <li>necromancer</li>
              <li>haughty</li>
              <li>depredation</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener144} value={la7Essay144}/>

          <span className="days">LESSON 145 </span>
          <p className="topBottom">Read Chapter 2  "Roast Mutton". Then answer the questions below using complete
            sentences.<br/>
            <ol className="vocab">
              <li>Sometimes in novels a change of clothing is symbolic of a new role. What do you think Bilbo’s
                change of clothes might mean in the story?
              </li>
              <li>What had Bilbo forgotten to bring with him?</li>
              <li>How does life on the trail differ from the life Bilbo is accustomed to? How does he cope?</li>
              <li>Why do you think it is significant that people in the area in which they camp haven’t heard of the
                king?
              </li>
              <li>What did William catch Bilbo doing?</li>
              <li>What saves the dwarves from the trolls?</li>
              <li>How do the others react to Bilbo’s mention of the key?</li>
              <li>Compare and contrast the speech of the dwarves with the speech of the trolls.</li>
              <li>What does Bilbo argue about with himself when he sees the trolls?</li>
              <li>What do you think of the dwarves’ ability to make strategic plans?</li>
              <li>In this Chapter, what important help does Bilbo provide toward attaining the dwarves’ goal?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>fluster</li>
              <li>defrayed</li>
              <li>repose</li>
              <li>purloined</li>
              <li>incantations</li>
              <li>scabbard</li>
              <li>waylaid</li>
              <li>trifle</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener145} value={la7Essay145}/>

          <span className="days">LESSON 146 </span>
          <p className="topBottom">Read Chapter 3  "A Short Rest". Then answer the questions below using complete
            sentences.<br/>
            <ol className="vocab">
              <li>1. What kind of creatures inhabited the valley of Rivendell?</li>
              <li>Who is Elrond? Describe what he is like.</li>
              <li>What important information did Elrond give the travelers?</li>
              <li>An elf gives the group a choice of singing or eating. How do their reactions fit their characters?
                What would you have done? Why?
              </li>
              <li>What coincidence helps the dwarves during their stay in Rivendell?</li>
              <li>What does Elrond think of the dwarves? What would you say to him about this?</li>
              <li>How does the stop in Rivendell help the dwarves move toward attaining their goal?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>reeking</li>
              <li>bannocks</li>
              <li>vexed</li>
              <li>cunning</li>
              <li>forded</li>
              <li>parapet</li>
              <li>venerable</li>
              <li>palpitating</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener146} value={la7Essay146}/>

          <span className="days">LESSON 147 </span>
          <p className="topBottom">Read Chapter 4  "Over Hill and Under Hill". Then answer the questions below
            using complete sentences.<br/>
            <ol className="vocab">
              <li>What mistake do the dwarves make about Durin’s Day? What does this tell you about them?</li>
              <li>What hints does the narrator give that the cave will not be the safe shelter for which they
                hope?
              </li>
              <li>Why did the travelers go into the cave?</li>
              <li>How does Bilbo help the group this time?</li>
              <li>What was waiting for them in the cave?</li>
              <li>How does Thorin deal with the Great Goblin? Is he effective?</li>
              <li>How were the dwarves able to get away from the Goblins when they run faster?</li>
              <li>What happened to Dori and Bilbo?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>astray</li>
              <li>guffaw</li>
              <li>yammer</li>
              <li>ingenious</li>
              <li>hordes shirk</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener147} value={la7Essay147}/>

          <span className="days">LESSON 148 </span>
          <p className="topBottom">Read Chapter 5  "Riddles in the Dark". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>How did Gollum get his name? What does he call himself and why?</li>
              <li>Describe the surroundings where Bilbo found himself.</li>
              <li>How did Bilbo win the riddle game with Gollum? Was it a fair win?</li>
              <li>What special properties does Bilbo discover in the dagger and ring? How does he find out?</li>
              <li>Gollum concludes that Bilbo’s first statement to him was a lie. Why?</li>
              <li>How does Bilbo treat Gollum? How does Gollum treat Bilbo? Do they like or trust each other?</li>
              <li>What aspect of Gollum’s character was the most striking/strange to you? Why?</li>
              <li>How did Bilbo discover the power of the ring?</li>
              <li>Do you like Gollum as a character? Explain why or why not.</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>groped</li>
              <li>subterranean</li>
              <li>antiquity</li>
              <li>smote</li>
              <li>ventured</li>
              <li>scrumptious</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener148} value={la7Essay148}/>

          <span className="days">LESSON 149 </span>
          <p className="topBottom">Read Chapter 6  "Out of the Frying-Pan and into the Fire". Then answer the
            questions below using complete sentences.<br/>
            <ol className="vocab">
              <li>How has Bilbo changed since Chapter 1?</li>
              <li>After his adventure with Gollum, Bilbo rejoins the dwarves. Do the dwarves see him differently
                now? Explain why or why not.
              </li>
              <li>What detail about his adventures with Gollum did Bilbo leave out when he told the dwarves the
                story?
              </li>
              <li>Why did the dwarves and Bilbo climb up into the trees?</li>
              <li>Describe what wargs are.</li>
              <li>How were the travelers saved from the wargs, goblins, and fire?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>abominable</li>
              <li>tumult</li>
              <li>glade</li>
              <li>tumult</li>
              <li>precipice</li>
              <li>benighted</li>
              <li>trudged</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener149} value={la7Essay149}/>

          <span className="days">LESSON 150 </span>
          <p className="topBottom">Read Chapter 7  "Queer Lodgings". Then answer the questions below using complete
            sentences.<br/>
            <ol className="vocab">
              <li>Explain Gandalf’s trick. Why does he choose this particular way of bringing the dwarves and Bilbo
                to Beorn’s house?
              </li>
              <li>What did Beorn warn the group about in Mirkwood.</li>
              <li>How does Beorn’s attitude towards the group change over time?</li>
              <li>Compare and contrast Beorn and Elrond.</li>
              <li>How does Beorn help the group?</li>
              <li>What did Gandalf say to the dwarves and Bilbo before he left them at Mirkwood?</li>
              <li>What trust does Gandalf lay on Bilbo? Do you think Bilbo can fulfill it? Why or why not?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>pinnacles</li>
              <li>plight</li>
              <li>thatched</li>
              <li>perils</li>
              <li>gnarled</li>
              <li>veranda</li>
              <li>glowered</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener150} value={la7Essay150}/>

          <span className="days">LESSON 151 </span>
          <p className="topBottom">Read Chapter 8  "Flies and Spiders". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>Describe Mirkwood. What is it like?</li>
              <li>What dangers does the group encounter in Mirkwood?</li>
              <li>What happened to Bombur at the black river crossing?</li>
              <li>What strategies does Bilbo use to outwit the spiders?</li>
              <li>What change happens in Bilbo when he kills the first spider?</li>
              <li>What secret does Bilbo share with the dwarves? Why?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>lichen</li>
              <li>bulbous</li>
              <li>lamented</li>
              <li>stealthily</li>
              <li>blunder</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener151} value={la7Essay151}/>

          <span className="days">LESSON 152 </span>
          <p className="topBottom">Read Chapter 9  "Barrels Out of Bond". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>What leads the Elvenking to imprison the dwarves? How might they have avoided imprisonment? Do you
                feel their behavior was foolish? Explain.
              </li>
              <li>How did Bilbo keep from getting captured by the wood elves?</li>
              <li>Were the dwarves glad or disappointed to be captured by the wood elves? Explain.</li>
              <li>Describe Bilbo’s initial reaction to the group’s imprisonment. How does his reaction change?</li>
              <li>How do luck and planning combine to make the escape possible?</li>
              <li>This is the second time Bilbo has freed the dwarves. How were the two rescues different?</li>
              <li>Compare the elves’ song with the goblin’s song. Describe both and how they were different.
                Consider the purpose, audience, and the sound of the poetry.
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>haste</li>
              <li>surly</li>
              <li>nimble</li>
              <li>plight</li>
              <li>portcullis</li>
              <li>flagons</li>
              <li>jostling</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener152} value={la7Essay152}/>

          <span className="days">LESSON 153 </span>
          <p className="topBottom">Read Chapter 10  "A Warm Welcome". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>How does luck play a role in the plot?</li>
              <li>Describe the release of the dwarves from the barrels.</li>
              <li>Explain the guards’ reaction to the group.</li>
              <li>Characterize the Master.</li>
              <li>Why did Thorin demand to be taken to the Master of the Men of the Lake?</li>
              <li>Explain the townspeople’s reaction to the dwarves and Bilbo.</li>
              <li>In what way is the Elvenking wrong about the dwarves’ plans?</li>
              <li>What do you think is the meaning of the Chapter title, "A Warm Welcome?". Then answer the
                questions below using complete sentences.
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>alluding</li>
              <li>ominous</li>
              <li>moored</li>
              <li>vagabond</li>
              <li>solemnities</li>
              <li>enmity</li>
              <li>circuitous</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener153} value={la7Essay153}/>

          <span className="days">LESSON 154 </span>
          <p className="topBottom">Read Chapter 11  "On the Doorstep". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>What is the setting in this chapter?</li>
              <li>Why did the men of the town leave the travelers at the end of the third day?</li>
              <li>How do some of the dwarves react to the closed door?</li>
              <li>Give some examples of advice the dwarves have not taken so far in the book.</li>
              <li>Find an example of foreshadowing in this chapter. What do you make of it?</li>
              <li>Describe the relationship of the dwarves and the hobbit in this Chapter.</li>
              <li>What do you make of the thrush? What is so special about it?</li>
              <li>How did the dwarves get the secret door open?</li>
              <li>When you read the description of what happens when the door opens, how did it affect you?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>laden</li>
              <li>waning</li>
              <li>cavernous</li>
              <li>marauding</li>
              <li>toiled</li>
              <li>mishap</li>
              <li>trill</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener154} value={la7Essay154}/>

          <span className="days">LESSON 155 </span>
          <p className="topBottom">Read Chapter 12  "Inside Information". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>What did Bilbo see at the end of the tunnel?</li>
              <li>Why did Bilbo to steal the cup?</li>
              <li>What was Smaug’s weakness that Bilbo discovered?</li>
              <li>Describe Smaug: his voice, smell, appearance, and actions.</li>
              <li>Explain how Bilbo tries to trick Smaug and how Smaug tries to influence Bilbo. Is either
                successful? Explain.
              </li>
              <li>What mistakes does Bilbo make in dealing with Smaug, in your opinion?</li>
              <li>Why did the dwarves move their camp to within the tunnel?</li>
              <li>What effect does the hoard of gold have on some of the dwarves?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>perplexed</li>
              <li>skulking</li>
              <li>dubious</li>
              <li>strategems</li>
              <li>foreboding</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener155} value={la7Essay155}/>

          <span className="days">LESSON 156 </span>
          <p className="topBottom">Read Chapter 13  "Not At Home"<br/>
            <ol className="vocab">
              <li>How does the Chapter title create dramatic irony?</li>
              <li>Compare and contrast Bilbo’s attitude about going down the tunnel and exploring Smaug’s hoard with
                the dwarves’ attitude.
              </li>
              <li>What effects does the treasure have on the various characters?</li>
              <li>What did Bilbo put in his deepest pocket?</li>
              <li>How does Bilbo react to Thorin’s gift?</li>
              <li>How does the setting change in this Chapter? How do they affect mood?</li>
              <li>What is the group’s situation at the end of the Chapter?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>tinged</li>
              <li>pallid</li>
              <li>confound</li>
              <li>fleeting</li>
              <li>adornments</li>
              <li>furtive</li>
              <li>dominion</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener156} value={la7Essay156}/>

          <span className="days">LESSON 157 </span>
          <p className="topBottom">Read Chapter 14  "Fire and Water". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>What different interpretations did the townspeople make of the lights visible on the mountain?
              </li>
              <li>Describe Bard. What is he like?</li>
              <li>Describe the Master. How are Bard and the Master different?</li>
              <li>How is the setting of the town important in this Chapter?</li>
              <li>Why did the wood-elves travel east?</li>
              <li> How did Bard know where to aim when he shot Smaug?</li>
              <li> What was Bard’s reward for killing the dragon?</li>
              <li>What do you predict will happen in the next Chapter? What
                indications do you have that this is possible?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>gilded</li>
              <li>waxing</li>
              <li>eminent</li>
              <li>benefactors</li>
              <li>depose</li>
              <li>recompense</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener157} value={la7Essay157}/>

          <span className="days">LESSON 158 </span>
          <p className="topBottom">Read Chapter 15  "The Gathering Clouds." Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>What did Thorin ask Roäc to do?</li>
              <li>What did Bard ask of Thorin, and what was Thorin’s response?</li>
              <li>What roles have talking animals played in the plot of this story so far?</li>
              <li>Bilbo thought "that the adventure was, properly speaking, over with the death of the dragon." Is
                he correct? Explain.
              </li>
              <li>What enemies might the group have? What do you think might happen?</li>
              <li>What did the group do while they waited for the armies to approach?</li>
              <li>How did Thorin react to the elves and men? How did the rest of the group feel? How do you know
                this?
              </li>
              <li>Bard and Thorin each present their view of the situation. How do you judge the situation?</li>
              <li>What causes Thorin’s hardness of heart?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>carrion</li>
              <li>coveted</li>
              <li>decrepit</li>
              <li>caper</li>
              <li>parley</li>
              <li>succor</li>
              <li>alight</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener158} value={la7Essay158}/>

          <span className="days">LESSON 159 </span>
          <p className="topBottom">Read Chapter 16  "A Thief in the Night". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>Why did Bilbo offer to take Bombur’s watch?</li>
              <li>What did Bilbo give Bard? Explain why.</li>
              <li>Who praised Bilbo for his meeting with Bard?</li>
              <li>How does Thorin react to Roäc’s advise?</li>
              <li>What motivates Bilbo to give the Arkenstone to Bard and the Elvenking?</li>
              <li>Why do you think Bilbo shudders when he hands Bard the stone?</li>
              <li>What motivates the Elvenking’s reaction to Bilbo?</li>
              <li>Do you think the Elvenking’s predictions about Thorin’s reaction will prove to be correct? Why or
                why not?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>siege</li>
              <li>hasten</li>
              <li>spluttering</li>
              <li>sentinels</li>
              <li>thrice</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener159} value={la7Essay159}/>

          <span className="days">LESSON 160 </span>
          <p className="topBottom">Read Chapter 17  "The Clouds Burst". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>Why did Thorin throw Bilbo out of his camp?</li>
              <li>Summarize the events of the battle.</li>
              <li>What powers does Gandalf have in battle? What powers does he lack?</li>
              <li> When all seemed lost against the goblins, what appeared on the scene?</li>
              <li>What happened to Bilbo during the battle?</li>
              <li>What do you think the eagle’s arrival signifies? What do you think will happen now that the eagles
                have arrived?
              </li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>heirloom</li>
              <li>astir</li>
              <li>plaited</li>
              <li>tarry</li>
              <li>scimitars</li>
              <li>vanguard</li>
              <li>hurtling</li>
              <li>helm</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener160} value={la7Essay160}/>

          <span className="days">LESSON 161 </span>
          <p className="topBottom">Read Chapter 18  "The Return Journey". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>How does Bilbo end up alone on Ravenhill?</li>
              <li>What apology does Thorin make to Bilbo? Why do you think Thorin calls Bilbo a thief, not a
                burglar?
              </li>
              <li>Summarize the events that ended the war while Bilbo was unconscious. How do these events tie the
                episodes of the plot together?
              </li>
              <li>How is the treasure divided in the end?</li>
              <li>Who led the dwarves after Thorin’s death?</li>
              <li>What did Bilbo give the Elvenking? Why?</li>
              <li>What change occurs in Bilbo as he travels home?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence using
            the word. <br/>
            <ol className="vocab">
              <li>mustering</li>
              <li>dislodged</li>
              <li>abode</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener161} value={la7Essay161}/>

          <span className="days">LESSON 162 </span>
          <p className="topBottom">Read Chapter 19  "The Last Stage". Then answer the questions below using
            complete sentences.<br/>
            <ol className="vocab">
              <li>Compare and contrast the elves’ songs with the dwarves’ songs throughout the book.</li>
              <li>When Bilbo arrived home, what did he find?</li>
              <li>How was the journey at the beginning of the story different than the journey back home?</li>
              <li>What does Bilbo’s poem reveal about him?</li>
              <li>What is ironic in Bilbo’s homecoming?</li>
              <li>Who came to visit Bilbo a few years after his return home?</li>
              <li>What does it mean that Bilbo had "lost his reputation?". Then answer the questions below using
                complete sentences.
              </li>
              <li>How did the adventure change Bilbo?</li>
              <li>What did Bilbo learn from Balin’s and Gandalf’s visit?</li>
              <li>Why does Bilbo find the prophecies hard to believe? How does Gandalf respond? Were the
                prophecies based more on Bilbo’s abilities or the luck he had along the way?
              </li>
              <li>What were Gandalf’s last words to Bilbo in this book?</li>
            </ol>
            <h4>Vocabulary</h4> For each vocabulary word below, write a definition and then write a sentence
            using the word. <br/>
            <ol className="vocab">
              <li>brink</li>
              <li>lore</li>
              <li>gloaming</li>
              <li>extravagant</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener162} value={la7Essay162}/>

          <span className="days">LESSON 163 </span>
          <p className="topBottom">Do you think there is a moral to this story? What did you learn by reading it? Address
            these questions in a five paragraph essay.</p>
          <ul className="assnList">
            <li>Spend a few minutes to think about the questions. Then write an outline for your essay.</li>
            <li>Your first paragraph should have a hook to grab your reader's attention. It should also have a clear
              thesis statement (main idea of your essay). This statement should convey the points or arguments you are
              going to
              make.
            </li>
            <li>Paragraphs 2-4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use a different example. Using direct
              quotes from the novel can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-5 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                                      rel="noreferrer"
                                      target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea" onChange={onChangela7Listener163} value={la7Essay163}/>

          <span className="days">LESSON 164 </span>
          <p className="topBottom">Create a new book jacket for <i> The Hobbit.</i></p>
          <p className="topBottom"> A book cover often helps a person decide if he or she will buy a book. Think about
            the impression you want the images, colors and text to create for viewers. Create a cover for <i> The
              Hobbit </i> that gives viewers a glimpse of the content and mood of the book. You can use whatever
            medium you choose: sketch, PhotoShop, collage, paper and markers, or <a
              href="https://www.canva.com/create/book-covers/"
              rel="noreferrer"
              target="_blank"> Canva's online book cover creation
              tool. </a>You choose how you want to design it.</p>
          <p className="topBottom"> Your cover (or jacket) should include:<br/>
            1. A clear title and the author's name. <br/>
            2. A graphic design that reflects the book's theme. <br/>
            3. A summary of the plot without giving away the ending. <br/>
            4. A review (your opinion) about the book.
          </p>

          <textarea className="textArea" onChange={onChangela7Listener164} value={la7Essay164}/>

          <span className="days">LESSON 165 </span>
          <h4>Research paper</h4>
          <p className="topBottom">Choose from one of the topics below and write a research paper based on the Hobbit.
            It must be at least five paragraphs. You can use the <a href={ require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer" target="_blank"> Five Paragraph Essay outline </a> to help
            you get started.</p>
          <ul className="list">
            <li>Tolkien includes traditional creatures such as elves, dwarves, dragons, trolls, goblins, and
              wizards in his story. Choose one of these creatures. Then research and discuss its appearance in world
              myths, legends, and folktales. Include an illustration of the creature you decide to use.
            </li>
            <li>Explore the significance of birds in The Hobbit. What types of birds play a role in
              the story? The eagles, for example, have heavy symbolic significance in world
              legends and mythology. Why do you think the author chose these specific birds to play the roles that they did?
            </li>
            <li>Does Bilbo Baggins fit the description of an archetypal hero? Compare this story to another classical or
              modern adventure story. How is Bilbo similar to other heroes in literature? How is he different?
            </li>
            <li>If you have seen the movie, analyze the book in relation to the movie adaptation of <i>The Hobbit</i>.
             Think about the following questions before writing your research paper: How does the movie compare to the book? What did the director choose to leave in? What did he omit?
              Did you like the book or the movie more?
            </li>
          </ul>
          <br/>
          <textarea className="textArea" onChange={onChangela7Listener165} value={la7Essay165}/>

          <span className="days">LESSON 166 - GRAMMAR</span>
          <p className="topBottom">Watch the videos below and then answer the questions that follow.</p>
          <p><strong>Does grammar matter?</strong> by Andreea S. Calude</p>
          <Video videoUrl="https://www.youtube.com/embed/Wn_eBrIDUuc"/>

          <div><strong>How to use Colons and Semicolons</strong> by Miacademy Learning Channel</div>
          <Video videoUrl="https://www.youtube.com/embed/8L48L7IqJ4A?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>

          <p><strong>5-Minute Latin and Greek Roots</strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/jWyX8vl6kMs?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>

          <p><strong>What are Antonyms?</strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/QZ9CMRkBeuk?list=PLvJNSf-7NfrMpDB6lRYvsLJoR-NZq7pZS"/>

          <p>
            <ol className="vocab">
              <li>Can you think of any ways or situations in which prescriptivism is unhelpful?</li>
              <li>Grammar is a set of recurrent word patterns that helps speakers and writers to both understand and
                express concepts. What are some of the ways in which grammar tells us something about how we think?
              </li>
              <li>How does the video define grammar?</li>
              <li>Why does a dialect of a given language become the standard variety of that language?</li>
              <li>Describe what descriptivism and prescriptivism are and why they matter.</li>
              <li>Write a sentence that shows when to correctly use a colon. For example: <i
                style={{ color: "#4f5979" }}>There are three choices for dinner: lasagna, pizza or Pad Thai.</i></li>
              <li>Write a sentence that shows when to correctly use a semicolon.</li>
              <li>Give five examples of Latin or Greek roots. Define what each root means and give an example used in a
                word.
              </li>
              <li>Write antonyms for the following words:</li>
              <ul className="list">
                <li>abdicate</li>
                <li> connotation</li>
                <li>legendary</li>
                <li>punctual</li>
                <li> exposition</li>
              </ul>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener166} value={la7Essay166}/>

          <span className="days">LESSON 167 </span>
          <p className="topBottom">Watch the videos below and then answer the questions that follow.</p>
          <p><strong>What are Prefixes? </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/w7oGNyHX81I?list=PLvJNSf-7NfrMpDB6lRYvsLJoR-NZq7pZS"/>
          <p><strong>What are Suffixes? </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/635oQTY61J8?list=PLvJNSf-7NfrMpDB6lRYvsLJoR-NZq7pZS"/>
          <p><strong>What are Adjectives and Articles? </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/orvKz8pAiBY?list=PLvJNSf-7NfrNCqu7NxaQO3h6ANfgd6VKl"/>
          <p><strong>What are Adverbs and Pronouns? </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/r2WIKUNUfJ8?list=PLvJNSf-7NfrNCqu7NxaQO3h6ANfgd6VKl"/>
          <p><strong>4 Word Types </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/jTsYuE_T0UQ?list=PLvJNSf-7NfrNCqu7NxaQO3h6ANfgd6VKl"/>
          <textarea className="textArea" onChange={onChangela7Listener167} value={la7Essay167}/>
          <ol className="vocab">
            <li>Give 3 different examples of prefixes and use them in a word. For example: <i
              style={{ color: "#4f5979" }}> extra- extraterrestrial, inter- international, mega- megabyte </i></li>
            <li>Give 3 different examples of suffixes and use them in a word.</li>
            <li>Give three examples of adjectives.</li>
            <li>Give three examples of articles.</li>
            <li>Give three examples of adverbs.</li>
            <li>Give three examples of pronouns.</li>
            <li>List the four word types and give an example of each one. For example: <i
              style={{ color: "#4f5979" }}>Noun: boat</i></li>
          </ol>
          <br/>

          <span className="days">LESSON 168 - WRITING</span>
          <p className="topBottom">Watch the videos below and then answer the questions that follow.</p>
          <p><strong>4 Forms of Writing </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/cqHPhH2bFWM?list=PLvJNSf-7NfrOhpAW-PqosXbrjTx7B0fjH"/>
          <p><strong>4 Nonfiction Literary Genres </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/mQINQAxu-5k?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
          <p><strong>How to use Quotation Marks when Referencing </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/_FT-277ivWE?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
          <p><strong>How to use Quotation Marks in Dialogue</strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/VLFCkiwyl4s?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>
          <ol className="vocab">
            <li>List the four forms of writing and give an example of each one.</li>
            <li>List the four nonfiction literary genres and give and example of each.</li>
            <li>Give an example of how you would properly reference a source using quotation marks.</li>
            <li>Give an example of how you would use quotation marks to show a dialogue is taking place in a story.</li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener168} value={la7Essay168}/>

          <span className="days">LESSON 169 </span>
          <p className="topBottom">Watch the videos below and then answer the questions that follow.</p>
          <p><strong>Learn to Write: Basic Story Elements </strong> by Miacademy Learning Channel</p>
          <Video videoUrl="https://www.youtube.com/embed/PKakqB0hhXA"/>
          <p><strong>What is the Writing Process? </strong> by Miacademy Learning Channel </p>
          <Video videoUrl="https://www.youtube.com/embed/Y8-_Sj3C5dY?list=PLvJNSf-7NfrMYswXp-E4UFPStmLlzy0QH"/>

          <p><strong>First person vs. Second person vs. Third person </strong> by Rebekah Bergman </p>
          <Video videoUrl="https://www.youtube.com/embed/B5vEfuLS2Qc"/>
          <ol className="vocab">
            <li>What are the basic story elements?</li>
            <li>Summarize the steps of the writing process.</li>
            <li>What does the point of view tell you?</li>
            <li>If the narrator is a character inside the story and uses the pronoun me and I then it is first, second
              or third person?
            </li>
            <li>This passage is told in which point of view (first, second or third)?<br/>
              <i> Your mother tells you to go visit your sick grandmother. You’re annoyed because you had plans to go to
                the mall this afternoon, and you’ll probably be late now. Even though you’re supposed to stay on the
                path, you take the shortcut through the woods. </i></li>
            <li>This passage is told in which point of view (first, second or third)?<br/>
              <i> The girl knocks on her grandmother’s door and, when no one answers, she enters. Her sick grandmother
                lies in the bed. “My,” the girl thinks, “everything about Grandma’s face looks...so big.”</i></li>
            <li>Describe how you know if the narrator is of a third person omniscient story.</li>
            <li>Which point of view do you currently use most often in your writing? Why?</li>
            <li>Traditionally, fairy tales have a third person point of view. Choose a fairy tale character you would
              like to make a first-person narrator of their story.
            </li>
            <li>An unreliable first-person narrator cannot be trusted to tell their whole story. Why is this the case?
            </li>
          </ol>
          <textarea className="textArea" onChange={onChangela7Listener169} value={la7Essay169}/>


          <span className="days" style={{ color: "#4f5979", fontSize: "130%" }}>WRITING STORIES </span>
          <h4 style={{ color: "#4f5979" }}>The remainder of this class will focus on writing stories and non-fiction
            essays
            within different genres.</h4>
          <p className="topBottom">For each fictional writing assignment, address the items below to develop
            your story:</p>
          <p>POINT OF VIEW: Whose story are you telling? Using "I" is first person. Using
            "you" is second person. Third person uses he or she. The third-person omniscient point of view tells the
            thoughts and feelings of all the characters. </p>
          <p className="topBottom">PLOT: What happens in the story? What are the sequence of events? </p>
          <p>SETTING: Where and when is it (past, present or future)? </p>
          <p className="topBottom">CONFLICT: What is the challenge the main character must face in order to grow and
            change? What obstacles must be overcome? Most stories contain several small conflicts and one large or
            major conflict. </p>
          <p>RESOLUTION: How does the problem get solved? </p>
          <p className="topBottom">CHARACTERS: Who is in your story? Who is the main character (protagonist)? Who
            are the supporting characters? </p>
          <p><strong>Developing your characters</strong> is important because your readers must
            care about what
            happens to them. They don’t have to be likable, but they must be credible. Your readers should be feel
            the characters are real and be able to picture them clearly in their heads. You should describe what they
            look like and their personality. </p>
          <p className="topBottom">Include character traits (ex. humor, wit, introversion), strengths (ex.
            intelligence, stamina, humor) and flaws (ex. short-temper, physical disability). The main character
            (protagonist) is the most important because the story tends to revolve around them. They determine the
            way the plot will develop and must solve a problem or solve a mystery. </p>
          <p className="topBottom" >Supporting characters are also important because they often help the main
            character or serve as their enemy, creating obstacles. It’s your job to get the readers to feel
            something for all of your characters; like them, hate them, root for them, feel devastated when they are
            harmed and happy when they triumph.</p>
          <p style={{paddingBottom:"1.5em"}}>You can print out the <a
            href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to help you get started on a rough draft for your stories. It includes the
            following:<br/>
            <ul className="assnList2">
              <li>Title of your story:</li>
              <li>In 1-2 sentences, say what your story is about:</li>
              <li>Main character:</li>
              <li>Supporting characters:</li>
              <li>Setting:</li>
              <li>Write the first few lines of your story. Set the scene and introduce your characters.</li>
              <li>Try to grab your readers’ attention in the first paragraph.</li>
              <li>The first thing that happens and conflict introduced:</li>
              <li>Next (build up):</li>
              <li>Finally (resolution):</li>
            </ul>
          </p>
          <span className="days">LESSON 170 - Write a Mystery</span>
          <p>Watch the the videos below and then complete the writing assignment that follows.</p>
          <Video videoUrl="https://www.youtube.com/embed/RSoRzTtwgP4"/>
          <Video videoUrl="https://www.youtube.com/embed/xjKruwAfZWk"/>
          <h4> Write a Mystery</h4>

          <p className="topBottom">Select one of the images below to base your mystery on. Read the title and
            caption and let the story unfold in
            your imagination. Write your mystery in the textbox (below the images). This assignment is based on the
            book <i>The Mysteries of Harris Burdick.</i></p>
          <div className="rowimages">
            <div className="columnimages">
              <div><img src={require("../../public/images/stories/dog.jpg")}
                        alt="girl with dog"/>
                <p className="captionTitle">By the River</p>
                <p className="caption">When the dog beckoned for her to follow, she quickly jumped on her bike. If she
                  didn't get there by sunset, it would be too late.</p>
              </div>
              <div><img src={require("../../public/images/stories/throwingstone.jpg")} style={{ maxWidth: "500px" }}
                        alt="child throwing a stone"/>
                <p className="captionTitle">No Ordinary Day</p>
                <p className="caption">She threw with all her might, but the stone came back and, once again, landed at
                  her feet.</p></div>

              <div><img src={require("../../public/images/stories/twokeys.jpg")} style={{ maxWidth: "500px" }}
                        alt="two keys"/>
                <p className="captionTitle">Unlocking Secrets</p>
                <p className="caption">He had a hunch about what the keys would unlock. He grabbed both keys and
                  ran.</p>
              </div>
            </div>
            <div className="columnimages">
              <div><img src={require("../../public/images/stories/traintracks.jpg")} style={{ maxWidth: "500px" }}
                        alt="train tracks"/>
                <p className="captionTitle">Final Destination </p>
                <p className="caption">As the train passed by, you noticed one of the passengers staring at you. The
                  face you saw was yours. </p>
              </div>
              <div><img src={require("../../public/images/stories/pathinwoods.jpg")} style={{ maxWidth: "500px" }}
                        alt="path through the woods"/>
                <p className="captionTitle">Off the Beaten Path</p>
                <p className="caption">You are lost in the woods and it's getting late. Suddenly, a bright light
                  appears in front of you. </p>
              </div>
              <div><img src={require("../../public/images/stories/maninthefog.jpg")} style={{ maxWidth: "500px" }}
                        alt="man walking through the fog"/>
                <p className="captionTitle">Man in the Fog</p>
                <p className="caption">The man slowly walks towards your house. He stops, looks up at your window and
                  says, "It's time." </p>
              </div>
            </div>
          </div>
          <p> A good mystery should include all of the elements listed above under "WRITING STORIES". It also
            requires that you address these questions:</p>
          <ul className="assnList">
            <li>What is the mystery to solve? Is there a secret to uncover, an unexplained or supernatural event,
              has something gone
              missing?
            </li>
            <li>Clues - What are some hints that will help the reader figure things out?</li>
            <li><i>Optional:</i> Are there ways you can throw the reader off the trail?</li>
            <li>How will you set up your story? Use your main character to unravel the mystery and solve it.</li>
          </ul>
          <p className="topBottom">You can use the <a href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story Outline Worksheet</a> to get started.
          </p>
          <textarea className="textArea" onChange={onChangela7Listener170} value={la7Essay170}/>

          <span className="days">LESSON 171 </span>
          <p>After you watch the video <strong> How to build a fictional world, </strong> you will write a fantasy
            story.</p>
          <Video videoUrl="https://www.youtube.com/embed/ZQTQSbjecLg"/>
          <p className="topBottom"><strong>Fantasy </strong> is a genre that has magical and
            supernatural elements. Many novels have a real-world setting, like Twilight, while other novels are set
            in an imaginary world. This genre has no connection to reality or science. For example, Lord of the
            Rings is set in Middle Earth, with races and creatures the author created.</p>
          <p>There are numerous subgenres of fantasy fiction. A few include high or epic fantasy (Lord of the Rings),
            low fantasy (Indian in the Cupboard), dark fantasy (Twilight), contemporary fantasy (Harry Potter),
            sword and sorcery (The Sorcerer's Apprentice), fables (The Alchemist), fairy
            tales (Cinderella), and superhero fiction (Spiderman). </p>
          <p className="topBottom"><strong>Select one of the images below as your book cover and then write a fantasy story
            based on the image.</strong></p>
          <p>What story unfolds in your imagination when you look at the image? Write your
            story (5 paragraph minimum) in the textbox below. </p>
          <div className="rowimages">
            <div className="columnimages">
              <img src={require("../../public/images/stories/balloon.jpg")}
                   alt="fantasy hot air balloon"/>
              <img src={require("../../public/images/stories/dragon.jpg")}
                   alt=""/>
              <img src={require("../../public/images/stories/elephant.jpg")}
                   alt="Young man approaching elephant on the beach"/>
            </div>
            <div className="columnimages">
              <img src={require("../../public/images/stories/snowstatue.jpg")}
                   alt="A team of people walking upmountain next to enormous statue"/>
              <img src={require("../../public/images/stories/greeneyes.jpg")}
                   alt="fantasy image of green eyes"/>
              <img src={require("../../public/images/stories/wolf.jpg")}
                   alt="young girl with a wolf"/>
            </div>
          </div>
          <textarea className="textArea" onChange={onChangela7Listener171} value={la7Essay171}/>

          <span className="days">LESSON 172 </span>
          <p>Watch the video <strong> The Importance of Setting in a Story</strong> and then complete the writing
            assignment that follows.</p>
          <Video videoUrl="https://www.youtube.com/embed/30CPmgVQNks"/>
          <Video videoUrl="https://www.youtube.com/embed/6a6kbU88wu0"/>
          <p className="topBottom"><strong>Dystopian fiction</strong> describes a fictional place where things have gone
            horribly wrong and life is terrible. The characters suffer oppression, terror or deprivation. Dystopian
            fiction includes novels like<i> The Hunger Games, The Giver, Divergent, and The Handmaid's Tale.</i></p>
          <p className="topBottom">Select one of the images below as your book cover. Then write a dystopian story
            based on the picture. What story unfolds in your imagination when you look at the image? Write your
            story in the textbox below the images. You may also choose to write a story based on your own concept
            versus using one of the images below.</p>
          <div className="rowimages">
            <div className="columnimages">
              <img src={require("../../public/images/stories/burningcity.jpg")}
                   alt="city in distress"/>
              <img src={require("../../public/images/stories/mermaid.jpg")}
                   alt="underwater city"/>
              <img src={require("../../public/images/stories/robot.jpg")}
                   alt="child robot"/>
            </div>
            <div className="columnimages">
              <img src={require("../../public/images/stories/swamp.jpg")}
                   alt="man walking through swamp"/>
              <img src={require("../../public/images/stories/train.jpg")}
                   alt="girl waiting for train"/>
              <img src={require("../../public/images/stories/vr.jpg")}
                   alt="young person using virtual reality"/>
            </div>
          </div>
          <textarea className="textArea" onChange={onChangela7Listener172} value={la7Essay172}/>

          <span className="days">LESSON 173 </span>
          <h4>Write a BIOGRAPHY of someone who inspires you.</h4>
          <p className="topBottom"> If you don't have anyone in mind, there is a list below of a few inspirational
            people. Take plenty of notes when you research this person's life and accomplishments.</p>
          <Video videoUrl="https://www.youtube.com/embed/q7abluGwup8"/>
          <p>You can use the <a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer" target="_blank">
                                rel="noreferrer"
                                target="_blank">Five Paragraph Essay outline</a> to help you get started. Be sure to
            include the following elements in your biography:</p>
          <p className="margin-para">
            <ul className="list">
              <li><strong>Introduction:</strong> state the person you chose and why you chose them.  Your thesis statement should cover the reasons why he/she inspires you and what this person has
                taught us.
              </li>
              <li><strong>Body:</strong> Paragraphs 2 - 4 should include:</li>
              <ul className="list" style={{paddingLeft:"20px"}}>
                <li>date and place of birth (date of death if appropriate)</li>
                <li>description of childhood and early adulthood</li>
                <li>people and events that influenced them and helped them develop into the person they became</li>
                <li>accomplishments and greatest achievements</li>
                <li>their impact on society, historical significance</li>
                <li>when appropriate use quotes and significant details from your research</li>
              </ul>
              <li><strong>Conclusion:</strong> the final paragraph should summarize the most important points of your biography.
              </li>
            </ul>
          </p>
          <p style={{color:"#35516e"}}><strong>Inspiring People</strong><br/>
            <ul className="assnList" style={{paddingLeft:"10px"}}>
              <li>Malala Yousafzai</li>
              <li>Thomas Jefferson</li>
              <li>Nelson Mandela</li>
              <li>Mother Teresa</li>
              <li>Albert Einstein</li>
              <li>Amelia Earhart</li>
              <li>Martin Luther King, Jr.</li>
              <li>Mahatma Gandhi</li>
              <li>George Washington</li>
              <li>Eleanor Roosevelt</li>
              <li>Elon Musk</li>
              <li>Wolfgang Amadeus Mozart</li>
              <li>Abraham Lincoln</li>
              <li>Helen Keller</li>
            </ul>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener173} value={la7Essay173}/>

          <span className="days">LESSON 174 </span>
          <p className="topBottom"><strong>Science Fiction</strong><br/>
            Science fiction themes include futuristic stories, space travel, time travel, and life on other planets.
            They imagine how life would be different with technological and scientific advances. Science fiction
            includes novels like<i> Ready Player One, Mad Max and The Martian.</i></p>
          <p className="topBottom">Select one of the images below to base your own science fiction story on.
            After you watch the video below, <strong> The power of a great introduction</strong>, write your story in the textbox. Be sure to back up your work and send a copy to your parent or teacher. If you prefer to write a story not based on an image, this is fine. </p>
          <p className="topBottom">You can use the <a
            href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to get started.</p>
          <div className="rowimages">
            <div className="columnimages">
              <img src={require("../../public/images/stories/scifi1.jpg")}
                   alt="cyborg girl"/>
              <img src={require("../../public/images/stories/scifi2.jpg")}
                   alt="Scifi planet "/>
              <img src={require("../../public/images/stories/scifi3.jpg")}
                   alt="Futuristic world "/>
              <img src={require("../../public/images/stories/scifi4.jpg")}
                   alt="Floating spaceship"/>
            </div>
            <div className="columnimages">
              <img src={require("../../public/images/stories/scifi9.jpg")}
                   alt="Lighted tunnel into space"/>
              <img src={require("../../public/images/stories/scifi6.jpg")}
                   alt="Robots on another planet"/>
              <img src={require("../../public/images/stories/scifi7.jpg")}
                   alt="Children approaching UFO"/>
              <img src={require("../../public/images/stories/scifi8.jpg")}
                   alt="Astronauts on another planet"/>
            </div>
          </div>
          <Video videoUrl="https://www.youtube.com/embed/j0_u-lourd0"/>
          <textarea className="textArea" onChange={onChangela7Listener174} value={la7Essay174}/>

          <span className="days">LESSON 175 </span>
          <h4>Non-fiction Science Essay</h4>
          <img src={require("../../public/images/stories/science.jpg")} alt="The Giver novel"/><br/>
          <p className="topBottom">Write a five paragraph essay based on one of the questions below.
            <ol className="vocab">
              <li>What do you think is the most important invention of the last 100 years?</li>
              <li>Should we colonize other planets? Why or why not?</li>
              <li>If you could meet one famous inventor, who would it be?</li>
              <li>What is a new invention you would like to create? For inspiration, check out the article <a
                href="https://www.sciencefocus.com/future-technology/future-technology-22-ideas-about-to-change-our-world/"
                rel="noreferrer" target="_blank"> Future technology: 25 ideas about to change our world</a></li>
              <li>What will the world be like 1,000 years from now?</li>
            </ol>
          </p>
          <p>Your essay should follow the format below: </p>
          <ul className="assnList">
            <li>Write a hook to grab your reader's attention.  Your first paragraph should have a clear thesis statement (main idea of your essay). This
              statement should convey the points or arguments you are going to
              make.</li>
            <li>Paragraphs 2-4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use different examples. Using direct
              quotes from the novel can be effective in proving your point.</li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-5 sentences.</li>
          </ul>
          <p className="topBottom"><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")} rel="noreferrer" target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea" onChange={onChangela7Listener175} value={la7Essay175}/>

          <span className="days">LESSON 176 </span>
          <h4> Write an Adventure Story</h4>
          <p className="topBottom">Stories in the adventure genre involve a hero who goes on an
            exciting journey to some place very different than what he is used to. It is
            also usually a journey of personal growth in which the protagonist grows into a hero. These stories are
            usually fast-paced, with elements of danger, obstacles to overcome, and a
            villain to defeat.
          </p>
          <p className="topBottom"> Examples include The Adventures of Tom Sawyer, Gulliver's Travels, and Treasure
            Planet.</p>

          <p className="topBottom">Base your adventure on one of the images below. Write your story in the textbox
            below and be sure to back up your work.</p>

          <p> A good adventure should include all of the elements listed above under "WRITING STORIES". It should also
            have the follow elements:
            <ul className="assnList">
              <li>A hero</li>
              <li>A quest</li>
              <li>A journey to a new and strange land</li>
              <li>A villain</li>
              <li>The hero is changed</li>
            </ul></p>
          <p className="topBottom">You can use the <a href={require ("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story Outline Worksheet</a> to get started.</p>
          <div className="rowimages">
            <div className="columnimages">
              <img src={require("../../public/images/stories/adventure1.jpg")}
                   alt="old sailing ship"/>
              <img src={require("../../public/images/stories/adventure2.jpg")}
                   alt="astronaut in space"/>
              <img src={require("../../public/images/stories/adventure3.jpg")}
                   alt="pyramids"/>
              <img src={require("../../public/images/stories/adventure4.jpg")}
                   alt="girl in ice tunnel"/>
            </div>
            <div className="columnimages">
              <img src={require("../../public/images/stories/adventure5.jpg")}
                   alt="hot air balloon over desert"/>
              <img src={require("../../public/images/stories/adventure6.jpg")}
                   alt="ruins in the jungle"/>
              <img src={require("../../public/images/stories/adventure7.jpg")}
                   alt="grim reaper on boat with passengers"/>
              <img src={require("../../public/images/stories/adventure8.jpg")}
                   alt="castle"/>
            </div>
          </div>
          <textarea className="textArea" onChange={onChangela7Listener176} value={la7Essay176}/>

          <span className="days">LESSON 177 </span>
          <h4> Character and Story Development</h4>
          <p>No matter how exciting your plot may be, readers won't want to keep reading unless
            you have great characters. Watch the videos below to learn how to develop characters your readers will fall
            in love with and believe are real. Then complete the assignment posted after the videos.</p>
          {/*Introduction to Character */}
          <Video videoUrl="https://www.youtube.com/embed/ngZQUebMSEg"/>
          {/*Internal vs. external features */}
          <Video videoUrl="https://www.youtube.com/embed/Yl_okKqVXKo"/>
          {/*Wants vs. needs */}
          <Video videoUrl="https://www.youtube.com/embed/RgRfbvLkvnI"/>
          {/*Obstacles */}
          <Video videoUrl="https://www.youtube.com/embed/ZyNvgFmBQTs"/>
          {/*Character arc */}
          <Video videoUrl="https://www.youtube.com/embed/figcC-ANUu4"/>
          {/*Stakes */}
          <Video videoUrl="https://www.youtube.com/embed/WJ_iNkkgdCA"/>
          {/*Advice on characters */}
          <Video videoUrl="https://www.youtube.com/embed/SgGARYH2vRg"/>
          <p className="topBottom">Your next two lessons will be to develop two great characters your readers will care
            about: a protagonist and an antagonist. Start thinking about what they are like. Consider their:
            personality, physical appearance, strengths, weaknesses, special abilities (optional) and what they value.</p>
          <p> Develop these characters in your mind and think about the following questions: </p>
          <ul className="list">
            <li>What does your character want or want to achieve?</li>
            <li>Where do you want your protagonist to travel to?</li>
            <li>What are the obstacles they will face?</li>
            <li>What do they risk losing if they fail in their quest?</li>
            <li> What will they gain if they achieve their quest?</li>
            <li>How do you want them to grow and change as a person?</li>
            <li>Which fictional genre best suits your characters? You can choose from any that you've learned about:
              adventure, fantasy, mythology, horror, mystery, fairy tale, etc.
            </li>
          </ul>
          <p className="topBottom">Complete the assignment below. Your responses can be short bullet points. The main point of this assignment is to generate ideas.

            <ol className="vocab">
              <li>Close your eyes and imagine the protagonist for your next story. Briefly describe their external and
                internal traits (physical appearance and character traits).
              </li>
              <li>List at least one place the protagonist will travel to. If you're not sure, where would <i>you </i>travel
                to
                if there were no limitations? This can be a real place or a setting of your own creation.
              </li>
              <li>What ideas do you have for the quest the protagonist will embark on? Are they chasing after an
                artifact? Are they on a mission of some kind? Jot down any ideas you have.
              </li>
              <li> Picture the villain. What are they like?</li>
              <li>Create a book cover design for your next story. Think about the impression and mood
                you want the images and colors to create for your readers. You can use whatever
                medium you choose: pencil sketch, collage, paper and markers, or <a
                  href="https://www.canva.com/create/book-covers/"
                  rel="noreferrer"
                  target="_blank"> Canva's online book cover creation
                  tool. </a>You choose how you want to design it. Your book cover should include a title.
              </li>
            </ol></p>
          <p>Below are examples of book covers.</p>
          <img src={require("../../public/images/bookCovers/bookcover2.jpg")} alt="Book Covers"/><br/>

          <textarea className="textArea" onChange={onChangela7Listener177} value={la7Essay177}/>

          <span className="days">LESSON 178 </span>
          <h4> Character Development - The Protagonist</h4>
          <p>It's time to fully develop the protagonist for your next story. Address the questions
            below using complete sentences.</p>
          <p>
            <ol className="vocab">
              <li> What is your protagonist's name, age, gender and where do they live?</li>
              <li>Briefly describe your protagonist's background or childhood. Is there something about their background
                or childhood that is important and shaped who they are as a
                person? Examples: Their parents died and left them a fortune, they are poor growing up, they were
                bullied, or they were raised in China and are fluent in Mandarin.
              </li>
              <li>Do they have any special abilities (optional). These can be supernatural or magical powers or worldly
                abilities like a high IQ or exceptional jiu-jitsu skills.
              </li>
              <li>What are your character's strengths? Examples: Confidence, strong moral compass, problem solving
                skills, loyalty, or persistence.
              </li>
              <li>What are your character's weaknesses? Are there any weaknesses or fears the villain can use against
                them? Examples: Short temper, conflict avoidant, fear of snakes or a
                physical handicap.
              </li>
              <li>Where will your protagonist to travel to? Describe how this is dramatically different than where they
                live now.
              </li>
              <li>What is a quest they were meant to pursue? Are they chasing after an
                artifact? Are they on a mission of some kind?
              </li>
              <li>What does your character want to achieve?</li>
              <li>What are the obstacles they will face?</li>
              <li>What do they risk losing if they fail in their quest?</li>
              <li>How do you want them to grow and change as a person?</li>
              <li>What will they gain if they achieve their quest?</li>
              <li>What do does your protagonist look like? Be specific, including height, facial features, and how they
                dress.
              </li>
              <li>Create a picture of your protagonist. You can sketch a picture or create your character on <a
                href="https://charactercreator.org/#" rel="noreferrer" target="_blank">Character Creator </a> (you do NOT need to download a photo or sign up) online. Be
                sure to take a screen shot and save this to your device so you can include it with your story later.
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener178} value={la7Essay178}/>

          <span className="days">LESSON 179 </span>
          <h4> Character Development - The Antagonist</h4>
          <p className="topBottom">Create the villain your protagonist will have to fight. <br/>
              <ol className="vocab">
                <li>What is your villain's name, gender and age?</li>
                <li>What makes your villain a villain? What motivates them to do what they do? What is his backstory?
                  Example: Lord
                  Voldemort wanted to become the supreme leader of wizards and rid the wizarding world of Muggles. His
                  mother had tricked his father
                  into loving her. He was not born from love and didn't know love as a child.
                </li>
                <li>What makes your villain powerful? What skills, abilities and traits make them <i>nearly</i> impossible
                  for your protagonist to defeat? They can have supernatural abilities, but this isn't required. For
                  example, think about the Joker in Batman. The Joker has no superhuman abilities, but
                  he is clever and uses chemical engineering to make poisonous weapons.
                </li>
                <li>What are their weaknesses? Will your hero be able to use a weakness against the villain to win?</li>
                <li>What does your protagonist look like? Be specific, including height, facial features, and how they
                  dress.
                </li>
                <li>Create a picture of your villain. You can sketch a picture or create your character on <a
                  href="https://charactercreator.org/#" rel="noreferrer" target="_blank">Character Creator </a> (you do NOT need to download a photo or sign up) online. Be
                  sure to take a screen shot and save this to your device so you can include it with your story later.
                </li>
              </ol>
          </p>
          <textarea className="textArea" onChange={onChangela7Listener179} value={la7Essay179}/>

          <span className="days">LESSON 180 </span>
          <h4> Final Fictional Story</h4>
          <p>It's time to write your final story for this class! Before you start writing it, consider the following
            questions:</p>
          <p>
            <ul className="assnList">
              <li>What point of view will you use?</li>
              <li>What type of fiction or genre did you choose?</li>
              <li>What is the title of your story?</li>
              <li>How will you grab your readers’ attention in the first paragraph?</li>
              <li>What is the setting? Where and when is it (past, present or future)?</li>
              <li>Who are your characters?</li>
              <li>How will you set the scene and introduce your characters?</li>
              <li>What are the sequence events?</li>
              <li>What will be the first thing that happens?</li>
              <li>What is the challenge the main character must face in order to grow and
                change? What obstacles must be overcome?
              </li>
              <li>How will you introduce the conflict?</li>
              <li>How will build up the story to its climax?</li>
              <li>Finally, what will the resolution be? How will the problem be solved?</li>
            </ul></p>
            <p className="topBottom">You can use the <a href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story Outline Worksheet</a> to help you get started.</p>
            <textarea className="textArea" placeholder="Write your story here. Be sure to back up your work."  onChange={onChangela7Listener180} value={la7Essay180}/>
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 7th Grade Language Arts! </h3>
    </form>
  )
}
export default LA7Component