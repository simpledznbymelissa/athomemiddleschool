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

const Science7Component = ({ data }) => {

  // Local storage keys and values
  const [sci7Essay1, setSci7Essay1] = useLocalStorageState("sci7Essay1", "")
  const [sci7Essay2, setSci7Essay2] = useLocalStorageState("sci7Essay2", "")
  const [sci7Essay3, setSci7Essay3] = useLocalStorageState("sci7Essay3", "")
  const [sci7Essay4, setSci7Essay4] = useLocalStorageState("sci7Essay4", "")
  const [sci7Essay5, setSci7Essay5] = useLocalStorageState("sci7Essay5", "")
  const [sci7Essay6, setSci7Essay6] = useLocalStorageState("sci7Essay6", "")
  const [sci7Essay7, setSci7Essay7] = useLocalStorageState("sci7Essay7", "")
  const [sci7Essay8, setSci7Essay8] = useLocalStorageState("sci7Essay8", "")
  const [sci7Essay9, setSci7Essay9] = useLocalStorageState("sci7Essay9", "")
  const [sci7Essay10, setSci7Essay10] = useLocalStorageState("sci7Essay10", "")
  const [sci7Essay11, setSci7Essay11] = useLocalStorageState("sci7Essay11", "")
  const [sci7Essay12, setSci7Essay12] = useLocalStorageState("sci7Essay12", "")
  const [sci7Essay13, setSci7Essay13] = useLocalStorageState("sci7Essay13", "")
  const [sci7Essay14, setSci7Essay14] = useLocalStorageState("sci7Essay14", "")
  const [sci7Essay15, setSci7Essay15] = useLocalStorageState("sci7Essay15", "")
  const [sci7Essay16, setSci7Essay16] = useLocalStorageState("sci7Essay16", "")
  const [sci7Essay17, setSci7Essay17] = useLocalStorageState("sci7Essay17", "")
  const [sci7Essay18, setSci7Essay18] = useLocalStorageState("sci7Essay18", "")
  const [sci7Essay19, setSci7Essay19] = useLocalStorageState("sci7Essay19", "")
  const [sci7Essay20, setSci7Essay20] = useLocalStorageState("sci7Essay20", "")
  const [sci7Essay21, setSci7Essay21] = useLocalStorageState("sci7Essay21", "")
  const [sci7Essay22, setSci7Essay22] = useLocalStorageState("sci7Essay22", "")
  const [sci7Essay23, setSci7Essay23] = useLocalStorageState("sci7Essay23", "")
  const [sci7Essay24, setSci7Essay24] = useLocalStorageState("sci7Essay24", "")
  const [sci7Essay25, setSci7Essay25] = useLocalStorageState("sci7Essay25", "")
  const [sci7Essay26, setSci7Essay26] = useLocalStorageState("sci7Essay26", "")
  const [sci7Essay27, setSci7Essay27] = useLocalStorageState("sci7Essay27", "")
  const [sci7Essay28, setSci7Essay28] = useLocalStorageState("sci7Essay28", "")
  const [sci7Essay29, setSci7Essay29] = useLocalStorageState("sci7Essay29", "")
  const [sci7Essay30, setSci7Essay30] = useLocalStorageState("sci7Essay30", "")
  const [sci7Essay31, setSci7Essay31] = useLocalStorageState("sci7Essay31", "")
  const [sci7Essay32, setSci7Essay32] = useLocalStorageState("sci7Essay32", "")
  const [sci7Essay33, setSci7Essay33] = useLocalStorageState("sci7Essay33", "")
  const [sci7Essay34, setSci7Essay34] = useLocalStorageState("sci7Essay34", "")
  const [sci7Essay35, setSci7Essay35] = useLocalStorageState("sci7Essay35", "")
  const [sci7Essay36, setSci7Essay36] = useLocalStorageState("sci7Essay36", "")
  const [sci7Essay37, setSci7Essay37] = useLocalStorageState("sci7Essay37", "")
  const [sci7Essay38, setSci7Essay38] = useLocalStorageState("sci7Essay38", "")
  const [sci7Essay39, setSci7Essay39] = useLocalStorageState("sci7Essay39", "")
  const [sci7Essay40, setSci7Essay40] = useLocalStorageState("sci7Essay40", "")
  const [sci7Essay41, setSci7Essay41] = useLocalStorageState("sci7Essay41", "")
  const [sci7Essay42, setSci7Essay42] = useLocalStorageState("sci7Essay42", "")
  const [sci7Essay43, setSci7Essay43] = useLocalStorageState("sci7Essay43", "")
  const [sci7Essay44, setSci7Essay44] = useLocalStorageState("sci7Essay44", "")
  const [sci7Essay45, setSci7Essay45] = useLocalStorageState("sci7Essay45", "")
  const [sci7Essay46, setSci7Essay46] = useLocalStorageState("sci7Essay46", "")
  const [sci7Essay47, setSci7Essay47] = useLocalStorageState("sci7Essay47", "")
  const [sci7Essay48, setSci7Essay48] = useLocalStorageState("sci7Essay48", "")
  const [sci7Essay49, setSci7Essay49] = useLocalStorageState("sci7Essay49", "")
  const [sci7Essay50, setSci7Essay50] = useLocalStorageState("sci7Essay50", "")
  const [sci7Essay51, setSci7Essay51] = useLocalStorageState("sci7Essay52", "")
  const [sci7Essay52, setSci7Essay52] = useLocalStorageState("sci7Essay53", "")
  const [sci7Essay53, setSci7Essay53] = useLocalStorageState("sci7Essay54", "")
  const [sci7Essay54, setSci7Essay54] = useLocalStorageState("sci7Essay54", "")
  const [sci7Essay55, setSci7Essay55] = useLocalStorageState("sci7Essay5", "")
  const [sci7Essay56, setSci7Essay56] = useLocalStorageState("sci7Essay56", "")
  const [sci7Essay57, setSci7Essay57] = useLocalStorageState("sci7Essay57", "")
  const [sci7Essay58, setSci7Essay58] = useLocalStorageState("sci7Essay58", "")
  const [sci7Essay59, setSci7Essay59] = useLocalStorageState("sci7Essay59", "")
  const [sci7Essay60, setSci7Essay60] = useLocalStorageState("sci7Essay60", "")
  const [sci7Essay61, setSci7Essay61] = useLocalStorageState("sci7Essay61", "")
  const [sci7Essay62, setSci7Essay62] = useLocalStorageState("sci7Essay62", "")
  const [sci7Essay63, setSci7Essay63] = useLocalStorageState("sci7Essay63", "")
  const [sci7Essay64, setSci7Essay64] = useLocalStorageState("sci7Essay64", "")
  const [sci7Essay65, setSci7Essay65] = useLocalStorageState("sci7Essay65", "")
  const [sci7Essay66, setSci7Essay66] = useLocalStorageState("sci7Essay66", "")
  const [sci7Essay67, setSci7Essay67] = useLocalStorageState("sci7Essay67", "")
  const [sci7Essay68, setSci7Essay68] = useLocalStorageState("sci7Essay68", "")
  const [sci7Essay69, setSci7Essay69] = useLocalStorageState("sci7Essay69", "")
  const [sci7Essay70, setSci7Essay70] = useLocalStorageState("sci7Essay70", "")
  const [sci7Essay71, setSci7Essay71] = useLocalStorageState("sci7Essay71", "")
  const [sci7Essay72, setSci7Essay72] = useLocalStorageState("sci7Essay72", "")
  const [sci7Essay73, setSci7Essay73] = useLocalStorageState("sci7Essay73", "")
  const [sci7Essay74, setSci7Essay74] = useLocalStorageState("sci7Essay74", "")
  const [sci7Essay75, setSci7Essay75] = useLocalStorageState("sci7Essay75", "")
  const [sci7Essay76, setSci7Essay76] = useLocalStorageState("sci7Essay76", "")
  const [sci7Essay77, setSci7Essay77] = useLocalStorageState("sci7Essay77", "")
  const [sci7Essay78, setSci7Essay78] = useLocalStorageState("sci7Essay78", "")
  const [sci7Essay79, setSci7Essay79] = useLocalStorageState("sci7Essay79", "")
  const [sci7Essay80, setSci7Essay80] = useLocalStorageState("sci7Essay80", "")
  const [sci7Essay81, setSci7Essay81] = useLocalStorageState("sci7Essay81", "")
  const [sci7Essay82, setSci7Essay82] = useLocalStorageState("sci7Essay82", "")
  const [sci7Essay83, setSci7Essay83] = useLocalStorageState("sci7Essay83", "")
  const [sci7Essay84, setSci7Essay84] = useLocalStorageState("sci7Essay84", "")
  const [sci7Essay85, setSci7Essay85] = useLocalStorageState("sci7Essay85", "")
  const [sci7Essay86, setSci7Essay86] = useLocalStorageState("sci7Essay86", "")
  const [sci7Essay87, setSci7Essay87] = useLocalStorageState("sci7Essay87", "")
  const [sci7Essay88, setSci7Essay88] = useLocalStorageState("sci7Essay88", "")
  const [sci7Essay89, setSci7Essay89] = useLocalStorageState("sci7Essay89", "")
  const [sci7Essay90, setSci7Essay90] = useLocalStorageState("sci7Essay90", "")
  const [sci7Essay91, setSci7Essay91] = useLocalStorageState("sci7Essay91", "")
  const [sci7Essay92, setSci7Essay92] = useLocalStorageState("sci7Essay93", "")
  const [sci7Essay93, setSci7Essay93] = useLocalStorageState("sci7Essay94", "")
  const [sci7Essay94, setSci7Essay94] = useLocalStorageState("sci7Essay95", "")
  const [sci7Essay95, setSci7Essay95] = useLocalStorageState("sci7Essay96", "")
  const [sci7Essay96, setSci7Essay96] = useLocalStorageState("sci7Essay97", "")
  const [sci7Essay97, setSci7Essay97] = useLocalStorageState("sci7Essay98", "")
  const [sci7Essay98, setSci7Essay98] = useLocalStorageState("sci7Essay98", "")
  const [sci7Essay99, setSci7Essay99] = useLocalStorageState("sci7Essay99", "")
  const [sci7Essay100, setSci7Essay100] = useLocalStorageState("sci7Essay100", "")
  const [sci7Essay101, setSci7Essay101] = useLocalStorageState("sci7Essay101", "")
  const [sci7Essay102, setSci7Essay102] = useLocalStorageState("sci7Essay102", "")
  const [sci7Essay103, setSci7Essay103] = useLocalStorageState("sci7Essay103", "")
  const [sci7Essay104, setSci7Essay104] = useLocalStorageState("sci7Essay104", "")
  const [sci7Essay105, setSci7Essay105] = useLocalStorageState("sci7Essay105", "")
  const [sci7Essay106, setSci7Essay106] = useLocalStorageState("sci7Essay106", "")
  const [sci7Essay107, setSci7Essay107] = useLocalStorageState("sci7Essay107", "")
  const [sci7Essay108, setSci7Essay108] = useLocalStorageState("sci7Essay108", "")
  const [sci7Essay109, setSci7Essay109] = useLocalStorageState("sci7Essay109", "")
  const [sci7Essay110, setSci7Essay110] = useLocalStorageState("sci7Essay110", "")
  const [sci7Essay111, setSci7Essay111] = useLocalStorageState("sci7Essay111", "")
  const [sci7Essay112, setSci7Essay112] = useLocalStorageState("sci7Essay112", "")
  const [sci7Essay113, setSci7Essay113] = useLocalStorageState("sci7Essay113", "")
  const [sci7Essay114, setSci7Essay114] = useLocalStorageState("sci7Essay114", "")
  const [sci7Essay115, setSci7Essay115] = useLocalStorageState("sci7Essay115", "")
  const [sci7Essay116, setSci7Essay116] = useLocalStorageState("sci7Essay116", "")
  const [sci7Essay117, setSci7Essay117] = useLocalStorageState("sci7Essay117", "")
  const [sci7Essay118, setSci7Essay118] = useLocalStorageState("sci7Essay118", "")
  const [sci7Essay119, setSci7Essay119] = useLocalStorageState("sci7Essay119", "")
  const [sci7Essay120, setSci7Essay120] = useLocalStorageState("sci7Essay120", "")
  const [sci7Essay121, setSci7Essay121] = useLocalStorageState("sci7Essay121", "")
  const [sci7Essay122, setSci7Essay122] = useLocalStorageState("sci7Essay122", "")
  const [sci7Essay123, setSci7Essay123] = useLocalStorageState("sci7Essay123", "")
  const [sci7Essay124, setSci7Essay124] = useLocalStorageState("sci7Essay124", "")
  const [sci7Essay125, setSci7Essay125] = useLocalStorageState("sci7Essay125", "")
  const [sci7Essay126, setSci7Essay126] = useLocalStorageState("sci7Essay126", "")
  const [sci7Essay127, setSci7Essay127] = useLocalStorageState("sci7Essay127", "")
  const [sci7Essay128, setSci7Essay128] = useLocalStorageState("sci7Essay128", "")
  const [sci7Essay129, setSci7Essay129] = useLocalStorageState("sci7Essay129", "")
  const [sci7Essay130, setSci7Essay130] = useLocalStorageState("sci7Essay130", "")
  const [sci7Essay131, setSci7Essay131] = useLocalStorageState("sci7Essay131", "")
  const [sci7Essay132, setSci7Essay132] = useLocalStorageState("sci7Essay132", "")
  const [sci7Essay133, setSci7Essay133] = useLocalStorageState("sci7Essay133", "")
  const [sci7Essay134, setSci7Essay134] = useLocalStorageState("sci7Essay134", "")
  const [sci7Essay135, setSci7Essay135] = useLocalStorageState("sci7Essay135", "")
  const [sci7Essay136, setSci7Essay136] = useLocalStorageState("sci7Essay136", "")
  const [sci7Essay137, setSci7Essay137] = useLocalStorageState("sci7Essay137", "")
  const [sci7Essay138, setSci7Essay138] = useLocalStorageState("sci7Essay138", "")
  const [sci7Essay139, setSci7Essay139] = useLocalStorageState("sci7Essay139", "")
  const [sci7Essay140, setSci7Essay140] = useLocalStorageState("sci7Essay140", "")
  const [sci7Essay141, setSci7Essay141] = useLocalStorageState("sci7Essay141", "")
  const [sci7Essay142, setSci7Essay142] = useLocalStorageState("sci7Essay142", "")
  const [sci7Essay143, setSci7Essay143] = useLocalStorageState("sci7Essay143", "")
  const [sci7Essay144, setSci7Essay144] = useLocalStorageState("sci7Essay144", "")
  const [sci7Essay145, setSci7Essay145] = useLocalStorageState("sci7Essay145", "")
  const [sci7Essay146, setSci7Essay146] = useLocalStorageState("sci7Essay146", "")
  const [sci7Essay147, setSci7Essay147] = useLocalStorageState("sci7Essay147", "")
  const [sci7Essay148, setSci7Essay148] = useLocalStorageState("sci7Essay148", "")
  const [sci7Essay149, setSci7Essay149] = useLocalStorageState("sci7Essay149", "")
  const [sci7Essay150, setSci7Essay150] = useLocalStorageState("sci7Essay150", "")
  const [sci7Essay151, setSci7Essay151] = useLocalStorageState("sci7Essay151", "")
  const [sci7Essay152, setSci7Essay152] = useLocalStorageState("sci7Essay152", "")
  const [sci7Essay153, setSci7Essay153] = useLocalStorageState("sci7Essay153", "")
  const [sci7Essay154, setSci7Essay154] = useLocalStorageState("sci7Essay154", "")
  const [sci7Essay155, setSci7Essay155] = useLocalStorageState("sci7Essay155", "")
  const [sci7Essay156, setSci7Essay156] = useLocalStorageState("sci7Essay156", "")
  const [sci7Essay157, setSci7Essay157] = useLocalStorageState("sci7Essay157", "")
  const [sci7Essay158, setSci7Essay158] = useLocalStorageState("sci7Essay158", "")
  const [sci7Essay159, setSci7Essay159] = useLocalStorageState("sci7Essay159", "")
  const [sci7Essay160, setSci7Essay160] = useLocalStorageState("sci7Essay160", "")
  const [sci7Essay161, setSci7Essay161] = useLocalStorageState("sci7Essay161", "")
  const [sci7Essay162, setSci7Essay162] = useLocalStorageState("sci7Essay162", "")
  const [sci7Essay163, setSci7Essay163] = useLocalStorageState("sci7Essay163", "")
  const [sci7Essay164, setSci7Essay164] = useLocalStorageState("sci7Essay164", "")
  const [sci7Essay165, setSci7Essay165] = useLocalStorageState("sci7Essay165", "")
  const [sci7Essay166, setSci7Essay166] = useLocalStorageState("sci7Essay166", "")
  const [sci7Essay167, setSci7Essay167] = useLocalStorageState("sci7Essay167", "")
  const [sci7Essay168, setSci7Essay168] = useLocalStorageState("sci7Essay168", "")
  const [sci7Essay169, setSci7Essay169] = useLocalStorageState("sci7Essay169", "")
  const [sci7Essay170, setSci7Essay170] = useLocalStorageState("sci7Essay170", "")
  const [sci7Essay171, setSci7Essay171] = useLocalStorageState("sci7Essay171", "")
  const [sci7Essay172, setSci7Essay172] = useLocalStorageState("sci7Essay172", "")
  const [sci7Essay173, setSci7Essay173] = useLocalStorageState("sci7Essay173", "")
  const [sci7Essay174, setSci7Essay174] = useLocalStorageState("sci7Essay174", "")
  const [sci7Essay175, setSci7Essay175] = useLocalStorageState("sci7Essay175", "")
  const [sci7Essay176, setSci7Essay176] = useLocalStorageState("sci7Essay176", "")
  const [sci7Essay177, setSci7Essay177] = useLocalStorageState("sci7Essay177", "")
  const [sci7Essay178, setSci7Essay178] = useLocalStorageState("sci7Essay178", "")
  const [sci7Essay179, setSci7Essay179] = useLocalStorageState("sci7Essay179", "")
  const [sci7Essay180, setSci7Essay180] = useLocalStorageState("sci7Essay180", "")
  const [sci7Essay181, setSci7Essay181] = useLocalStorageState("sci7Essay181", "")

  const onChangeSci7Listener1 = (event) => {
    setSci7Essay1(event.target.value)
  }
  const onChangeSci7Listener2 = (event) => {
    setSci7Essay2(event.target.value)
  }
  const onChangeSci7Listener3 = (event) => {
    setSci7Essay3(event.target.value)
  }
  const onChangeSci7Listener4 = (event) => {
    setSci7Essay4(event.target.value)
  }
  const onChangeSci7Listener5 = (event) => {
    setSci7Essay5(event.target.value)
  }
  const onChangeSci7Listener6 = (event) => {
    setSci7Essay6(event.target.value)
  }
  const onChangeSci7Listener7 = (event) => {
    setSci7Essay7(event.target.value)
  }
  const onChangeSci7Listener8 = (event) => {
    setSci7Essay8(event.target.value)
  }
  const onChangeSci7Listener9 = (event) => {
    setSci7Essay9(event.target.value)
  }
  const onChangeSci7Listener10 = (event) => {
    setSci7Essay10(event.target.value)
  }
  const onChangeSci7Listener11 = (event) => {
    setSci7Essay11(event.target.value)
  }
  const onChangeSci7Listener12 = (event) => {
    setSci7Essay12(event.target.value)
  }
  const onChangeSci7Listener13 = (event) => {
    setSci7Essay13(event.target.value)
  }
  const onChangeSci7Listener14 = (event) => {
    setSci7Essay14(event.target.value)
  }
  const onChangeSci7Listener15 = (event) => {
    setSci7Essay15(event.target.value)
  }
  const onChangeSci7Listener16 = (event) => {
    setSci7Essay16(event.target.value)
  }
  const onChangeSci7Listener17 = (event) => {
    setSci7Essay17(event.target.value)
  }
  const onChangeSci7Listener18 = (event) => {
    setSci7Essay18(event.target.value)
  }
  const onChangeSci7Listener19 = (event) => {
    setSci7Essay19(event.target.value)
  }
  const onChangeSci7Listener20 = (event) => {
    setSci7Essay20(event.target.value)
  }
  const onChangeSci7Listener21 = (event) => {
    setSci7Essay21(event.target.value)
  }
  const onChangeSci7Listener22 = (event) => {
    setSci7Essay22(event.target.value)
  }
  const onChangeSci7Listener23 = (event) => {
    setSci7Essay23(event.target.value)
  }
  const onChangeSci7Listener24 = (event) => {
    setSci7Essay24(event.target.value)
  }
  const onChangeSci7Listener25 = (event) => {
    setSci7Essay25(event.target.value)
  }
  const onChangeSci7Listener26 = (event) => {
    setSci7Essay26(event.target.value)
  }
  const onChangeSci7Listener27 = (event) => {
    setSci7Essay27(event.target.value)
  }
  const onChangeSci7Listener28 = (event) => {
    setSci7Essay28(event.target.value)
  }
  const onChangeSci7Listener29 = (event) => {
    setSci7Essay29(event.target.value)
  }
  const onChangeSci7Listener30 = (event) => {
    setSci7Essay30(event.target.value)
  }
  const onChangeSci7Listener31 = (event) => {
    setSci7Essay31(event.target.value)
  }
  const onChangeSci7Listener32 = (event) => {
    setSci7Essay32(event.target.value)
  }
  const onChangeSci7Listener33 = (event) => {
    setSci7Essay33(event.target.value)
  }
  const onChangeSci7Listener34 = (event) => {
    setSci7Essay34(event.target.value)
  }
  const onChangeSci7Listener35 = (event) => {
    setSci7Essay35(event.target.value)
  }
  const onChangeSci7Listener36 = (event) => {
    setSci7Essay36(event.target.value)
  }
  const onChangeSci7Listener37 = (event) => {
    setSci7Essay37(event.target.value)
  }
  const onChangeSci7Listener38 = (event) => {
    setSci7Essay38(event.target.value)
  }
  const onChangeSci7Listener39 = (event) => {
    setSci7Essay39(event.target.value)
  }
  const onChangeSci7Listener40 = (event) => {
    setSci7Essay40(event.target.value)
  }
  const onChangeSci7Listener41 = (event) => {
    setSci7Essay41(event.target.value)
  }
  const onChangeSci7Listener42 = (event) => {
    setSci7Essay42(event.target.value)
  }
  const onChangeSci7Listener43 = (event) => {
    setSci7Essay43(event.target.value)
  }
  const onChangeSci7Listener44 = (event) => {
    setSci7Essay44(event.target.value)
  }
  const onChangeSci7Listener45 = (event) => {
    setSci7Essay45(event.target.value)
  }
  const onChangeSci7Listener46 = (event) => {
    setSci7Essay46(event.target.value)
  }
  const onChangeSci7Listener47 = (event) => {
    setSci7Essay47(event.target.value)
  }
  const onChangeSci7Listener48 = (event) => {
    setSci7Essay48(event.target.value)
  }
  const onChangeSci7Listener49 = (event) => {
    setSci7Essay49(event.target.value)
  }
  const onChangeSci7Listener50 = (event) => {
    setSci7Essay50(event.target.value)
  }
  const onChangeSci7Listener51 = (event) => {
    setSci7Essay51(event.target.value)
  }
  const onChangeSci7Listener52 = (event) => {
    setSci7Essay52(event.target.value)
  }
  const onChangeSci7Listener53 = (event) => {
    setSci7Essay53(event.target.value)
  }
  const onChangeSci7Listener54 = (event) => {
    setSci7Essay54(event.target.value)
  }
  const onChangeSci7Listener55 = (event) => {
    setSci7Essay55(event.target.value)
  }
  const onChangeSci7Listener56 = (event) => {
    setSci7Essay56(event.target.value)
  }
  const onChangeSci7Listener57 = (event) => {
    setSci7Essay57(event.target.value)
  }
  const onChangeSci7Listener58 = (event) => {
    setSci7Essay58(event.target.value)
  }
  const onChangeSci7Listener59 = (event) => {
    setSci7Essay59(event.target.value)
  }
  const onChangeSci7Listener60 = (event) => {
    setSci7Essay60(event.target.value)
  }
  const onChangeSci7Listener61 = (event) => {
    setSci7Essay61(event.target.value)
  }
  const onChangeSci7Listener62 = (event) => {
    setSci7Essay62(event.target.value)
  }
  const onChangeSci7Listener63 = (event) => {
    setSci7Essay63(event.target.value)
  }
  const onChangeSci7Listener64 = (event) => {
    setSci7Essay64(event.target.value)
  }
  const onChangeSci7Listener65 = (event) => {
    setSci7Essay65(event.target.value)
  }
  const onChangeSci7Listener66 = (event) => {
    setSci7Essay66(event.target.value)
  }
  const onChangeSci7Listener67 = (event) => {
    setSci7Essay67(event.target.value)
  }
  const onChangeSci7Listener68 = (event) => {
    setSci7Essay68(event.target.value)
  }
  const onChangeSci7Listener69 = (event) => {
    setSci7Essay69(event.target.value)
  }
  const onChangeSci7Listener70 = (event) => {
    setSci7Essay70(event.target.value)
  }
  const onChangeSci7Listener71 = (event) => {
    setSci7Essay71(event.target.value)
  }
  const onChangeSci7Listener72 = (event) => {
    setSci7Essay72(event.target.value)
  }
  const onChangeSci7Listener73 = (event) => {
    setSci7Essay73(event.target.value)
  }
  const onChangeSci7Listener74 = (event) => {
    setSci7Essay74(event.target.value)
  }
  const onChangeSci7Listener75 = (event) => {
    setSci7Essay75(event.target.value)
  }
  const onChangeSci7Listener76 = (event) => {
    setSci7Essay76(event.target.value)
  }
  const onChangeSci7Listener77 = (event) => {
    setSci7Essay77(event.target.value)
  }
  const onChangeSci7Listener78 = (event) => {
    setSci7Essay78(event.target.value)
  }
  const onChangeSci7Listener79 = (event) => {
    setSci7Essay79(event.target.value)
  }
  const onChangeSci7Listener80 = (event) => {
    setSci7Essay80(event.target.value)
  }
  const onChangeSci7Listener81 = (event) => {
    setSci7Essay81(event.target.value)
  }
  const onChangeSci7Listener82 = (event) => {
    setSci7Essay82(event.target.value)
  }
  const onChangeSci7Listener83 = (event) => {
    setSci7Essay83(event.target.value)
  }
  const onChangeSci7Listener84 = (event) => {
    setSci7Essay84(event.target.value)
  }
  const onChangeSci7Listener85 = (event) => {
    setSci7Essay85(event.target.value)
  }
  const onChangeSci7Listener86 = (event) => {
    setSci7Essay86(event.target.value)
  }
  const onChangeSci7Listener87 = (event) => {
    setSci7Essay87(event.target.value)
  }
  const onChangeSci7Listener88 = (event) => {
    setSci7Essay88(event.target.value)
  }
  const onChangeSci7Listener89 = (event) => {
    setSci7Essay89(event.target.value)
  }
  const onChangeSci7Listener90 = (event) => {
    setSci7Essay90(event.target.value)
  }
  const onChangeSci7Listener91 = (event) => {
    setSci7Essay91(event.target.value)
  }
  const onChangeSci7Listener92 = (event) => {
    setSci7Essay92(event.target.value)
  }
  const onChangeSci7Listener93 = (event) => {
    setSci7Essay93(event.target.value)
  }
  const onChangeSci7Listener94 = (event) => {
    setSci7Essay94(event.target.value)
  }
  const onChangeSci7Listener95 = (event) => {
    setSci7Essay95(event.target.value)
  }
  const onChangeSci7Listener96 = (event) => {
    setSci7Essay96(event.target.value)
  }
  const onChangeSci7Listener97 = (event) => {
    setSci7Essay97(event.target.value)
  }
  const onChangeSci7Listener98 = (event) => {
    setSci7Essay98(event.target.value)
  }
  const onChangeSci7Listener99 = (event) => {
    setSci7Essay99(event.target.value)
  }
  const onChangeSci7Listener100 = (event) => {
    setSci7Essay100(event.target.value)
  }
  const onChangeSci7Listener101 = (event) => {
    setSci7Essay101(event.target.value)
  }
  const onChangeSci7Listener102 = (event) => {
    setSci7Essay102(event.target.value)
  }
  const onChangeSci7Listener103 = (event) => {
    setSci7Essay103(event.target.value)
  }
  const onChangeSci7Listener104 = (event) => {
    setSci7Essay104(event.target.value)
  }
  const onChangeSci7Listener105 = (event) => {
    setSci7Essay105(event.target.value)
  }
  const onChangeSci7Listener106 = (event) => {
    setSci7Essay106(event.target.value)
  }
  const onChangeSci7Listener107 = (event) => {
    setSci7Essay107(event.target.value)
  }
  const onChangeSci7Listener108 = (event) => {
    setSci7Essay108(event.target.value)
  }
  const onChangeSci7Listener109 = (event) => {
    setSci7Essay109(event.target.value)
  }
  const onChangeSci7Listener110 = (event) => {
    setSci7Essay110(event.target.value)
  }
  const onChangeSci7Listener111 = (event) => {
    setSci7Essay111(event.target.value)
  }
  const onChangeSci7Listener112 = (event) => {
    setSci7Essay112(event.target.value)
  }
  const onChangeSci7Listener113 = (event) => {
    setSci7Essay113(event.target.value)
  }
  const onChangeSci7Listener114 = (event) => {
    setSci7Essay114(event.target.value)
  }
  const onChangeSci7Listener115 = (event) => {
    setSci7Essay115(event.target.value)
  }
  const onChangeSci7Listener116 = (event) => {
    setSci7Essay116(event.target.value)
  }
  const onChangeSci7Listener117 = (event) => {
    setSci7Essay117(event.target.value)
  }
  const onChangeSci7Listener118 = (event) => {
    setSci7Essay118(event.target.value)
  }
  const onChangeSci7Listener119 = (event) => {
    setSci7Essay119(event.target.value)
  }
  const onChangeSci7Listener120 = (event) => {
    setSci7Essay120(event.target.value)
  }
  const onChangeSci7Listener121 = (event) => {
    setSci7Essay121(event.target.value)
  }
  const onChangeSci7Listener122 = (event) => {
    setSci7Essay122(event.target.value)
  }
  const onChangeSci7Listener123 = (event) => {
    setSci7Essay123(event.target.value)
  }
  const onChangeSci7Listener124 = (event) => {
    setSci7Essay124(event.target.value)
  }
  const onChangeSci7Listener125 = (event) => {
    setSci7Essay125(event.target.value)
  }
  const onChangeSci7Listener126 = (event) => {
    setSci7Essay126(event.target.value)
  }
  const onChangeSci7Listener127 = (event) => {
    setSci7Essay127(event.target.value)
  }
  const onChangeSci7Listener128 = (event) => {
    setSci7Essay128(event.target.value)
  }
  const onChangeSci7Listener129 = (event) => {
    setSci7Essay129(event.target.value)
  }
  const onChangeSci7Listener130 = (event) => {
    setSci7Essay130(event.target.value)
  }
  const onChangeSci7Listener131 = (event) => {
    setSci7Essay131(event.target.value)
  }
  const onChangeSci7Listener132 = (event) => {
    setSci7Essay132(event.target.value)
  }
  const onChangeSci7Listener133 = (event) => {
    setSci7Essay133(event.target.value)
  }
  const onChangeSci7Listener134 = (event) => {
    setSci7Essay134(event.target.value)
  }
  const onChangeSci7Listener135 = (event) => {
    setSci7Essay135(event.target.value)
  }
  const onChangeSci7Listener136 = (event) => {
    setSci7Essay136(event.target.value)
  }
  const onChangeSci7Listener137 = (event) => {
    setSci7Essay137(event.target.value)
  }
  const onChangeSci7Listener138 = (event) => {
    setSci7Essay138(event.target.value)
  }
  const onChangeSci7Listener139 = (event) => {
    setSci7Essay139(event.target.value)
  }
  const onChangeSci7Listener140 = (event) => {
    setSci7Essay140(event.target.value)
  }
  const onChangeSci7Listener141 = (event) => {
    setSci7Essay141(event.target.value)
  }
  const onChangeSci7Listener142 = (event) => {
    setSci7Essay142(event.target.value)
  }
  const onChangeSci7Listener143 = (event) => {
    setSci7Essay143(event.target.value)
  }
  const onChangeSci7Listener144 = (event) => {
    setSci7Essay144(event.target.value)
  }
  const onChangeSci7Listener145 = (event) => {
    setSci7Essay145(event.target.value)
  }
  const onChangeSci7Listener146 = (event) => {
    setSci7Essay146(event.target.value)
  }
  const onChangeSci7Listener147 = (event) => {
    setSci7Essay147(event.target.value)
  }
  const onChangeSci7Listener148 = (event) => {
    setSci7Essay148(event.target.value)
  }
  const onChangeSci7Listener149 = (event) => {
    setSci7Essay149(event.target.value)
  }
  const onChangeSci7Listener150 = (event) => {
    setSci7Essay150(event.target.value)
  }
  const onChangeSci7Listener151 = (event) => {
    setSci7Essay151(event.target.value)
  }
  const onChangeSci7Listener152 = (event) => {
    setSci7Essay152(event.target.value)
  }
  const onChangeSci7Listener153 = (event) => {
    setSci7Essay153(event.target.value)
  }
  const onChangeSci7Listener154 = (event) => {
    setSci7Essay154(event.target.value)
  }
  const onChangeSci7Listener155 = (event) => {
    setSci7Essay155(event.target.value)
  }
  const onChangeSci7Listener156 = (event) => {
    setSci7Essay156(event.target.value)
  }
  const onChangeSci7Listener157 = (event) => {
    setSci7Essay157(event.target.value)
  }
  const onChangeSci7Listener158 = (event) => {
    setSci7Essay158(event.target.value)
  }
  const onChangeSci7Listener159 = (event) => {
    setSci7Essay159(event.target.value)
  }
  const onChangeSci7Listener160 = (event) => {
    setSci7Essay160(event.target.value)
  }
  const onChangeSci7Listener161 = (event) => {
    setSci7Essay161(event.target.value)
  }
  const onChangeSci7Listener162 = (event) => {
    setSci7Essay162(event.target.value)
  }
  const onChangeSci7Listener163 = (event) => {
    setSci7Essay163(event.target.value)
  }
  const onChangeSci7Listener164 = (event) => {
    setSci7Essay164(event.target.value)
  }
  const onChangeSci7Listener165 = (event) => {
    setSci7Essay165(event.target.value)
  }
  const onChangeSci7Listener166 = (event) => {
    setSci7Essay166(event.target.value)
  }
  const onChangeSci7Listener167 = (event) => {
    setSci7Essay167(event.target.value)
  }
  const onChangeSci7Listener168 = (event) => {
    setSci7Essay168(event.target.value)
  }
  const onChangeSci7Listener169 = (event) => {
    setSci7Essay169(event.target.value)
  }
  const onChangeSci7Listener170 = (event) => {
    setSci7Essay170(event.target.value)
  }
  const onChangeSci7Listener171 = (event) => {
    setSci7Essay171(event.target.value)
  }
  const onChangeSci7Listener172 = (event) => {
    setSci7Essay172(event.target.value)
  }
  const onChangeSci7Listener173 = (event) => {
    setSci7Essay173(event.target.value)
  }
  const onChangeSci7Listener174 = (event) => {
    setSci7Essay174(event.target.value)
  }
  const onChangeSci7Listener175 = (event) => {
    setSci7Essay175(event.target.value)
  }
  const onChangeSci7Listener176 = (event) => {
    setSci7Essay176(event.target.value)
  }
  const onChangeSci7Listener177 = (event) => {
    setSci7Essay177(event.target.value)
  }
  const onChangeSci7Listener178 = (event) => {
    setSci7Essay178(event.target.value)
  }
  const onChangeSci7Listener179 = (event) => {
    setSci7Essay179(event.target.value)
  }
  const onChangeSci7Listener180 = (event) => {
    setSci7Essay180(event.target.value)
  }
  const onChangeSci7Listener181 = (event) => {
    setSci7Essay181(event.target.value)
  }

  return (
    <form>

      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "3s",
               backgroundColor: "#f06a69",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "3s",
          backgroundColor: "#f06a69",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Earth Science</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/seventh" className='gradeLink'><h2 className="hero">7th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">This course uses <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0" rel="noreferrer"
            target="_blank"> CK-12's Middle School Earth Science book.</a> 7th Grade Science covers  Scientific Method, Developing Hypotheses, Introduction to Earth Science, Planet Earth, Earth's Minerals and Rocks, Plate Tectonics, Geological Activity and Earthquakes, Geological Activity and Volcanoes, Earth's Fresh Water, Earth's Oceans, Atmospheric Processes, Weather, Climate, Weathering and Soil, Erosion and Deposition, Understanding Earth's History, Earth's History, Evolution and Populations, Ecosystems, History of Life on Earth, Earth's Energy, Earth's Materials,  and The Solar System.  </p>
          <p className="topBottom">The assignments for each chapter are posted in
            the lessons below so you can save your written work from this course. CK-12's site will save your progress  from Practice sessions. </p>
          <p className="topBottom">If you don't already have an <a href="https://www.ck12.org/auth/signup/student"
                                                                   rel="noreferrer" target="_blank"> account with
            CK-12, </a> you can create one <a href="https://www.ck12.org/auth/signup/student"
                                              rel="noreferrer" target="_blank">here. </a> It is not required to complete
            this course however.</p>
          <p className="topBottom"><a
            href="https://www.ck12.org/tebook/ck-12-earth-science-for-middle-school-teachers-edition/section/1.2/" rel="noreferrer"
            target="_blank">Lab activities </a>for the lessons can be accessed <a
            href="https://www.ck12.org/tebook/ck-12-earth-science-for-middle-school-teachers-edition/section/1.2/" rel="noreferrer"
            target="_blank">here.</a> They are listed at the beginning of each chapter.</p>

          {/*CK12 Copyright logo*/}
          <div style={{ border: "1px solid #ccc", padding: "10px 12px", borderRadius: "7px", width: "220px" }}>
            <div style={{ width: "88px", float: "left" }}><a href="https://www.ck12.org/" target="_blank"><img
              src="https://www.ck12.org/media/common/images/logo_ck12.svg" style={{ marginTop: "-20%", width: "100%" }}
              alt="CK-12 Foundation"/></a>
            </div>
            <div
              style={{
                overflow: "hidden",
                fontFamily: "arial",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#72767f",
                paddingLeft: "15px",
                marginTop: "-7px"
              }}>LICENSED UNDER
              <div><a href="https://www.ck12info.org/curriculum-materials-license/" target="_new"><img
                style={{ border: "none", verticalAlign: "middle", width: "100%" }}
                title="CK-12 Foundation is licensed under CK-12 Curriculum Materials License"
                alt="CK-12 Foundation is licensed under CK-12 Curriculum Materials License"
                src="https://www.ck12.org/media/images/ck12-license.svg" width="80"/></a></div>
            </div>
          </div><br/>

          <h1 className="section-title fadeIn">Daily Lessons</h1>

          <span className="days fadeIn">LESSON 1</span>
          <p className="lessons">Begin the first Chapter: <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.1/primary/lesson/scientific-explanations-and-interpretations-ms-es"
            rel="noreferrer" target="_blank"> The Nature of Science 1.1 Scientific Explanations and Interpretations
            (click here). </a></p>
          <p>
            <ul className="list">
              <li>Complete the reading and watch the videos.</li>
              <li>Answer the 'Start Practice' questions on the bottom right of the CK-12 website.<a
                href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.1/primary/lesson/scientific-explanations-and-interpretations-ms-es"
                rel="noreferrer" target="_blank"><img
                style={{ margin: "0", display: "inherit", padding: "0", float: "0" }}
                src={require("../../public/images/science/startpractice.jpg")}
                alt='start practice button'/></a></li>
              <li>Answer the questions below (based on the reading and videos). For all assignments, answer in complete
                sentences.
              </li>
            </ul>
          </p>
          <p className="lessons">
            1. How do we use science every day?<br/>
            2. What is science?<br/>
            3. What is the difference between fact and opinion?<br/>
            4. Define science.<br/>
            5. What are the rules of science?<br/></p>
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
                    onChange={onChangeSci7Listener1} value={sci7Essay1}/>

          <span className="days">LESSON 2</span>
          <p>Complete the reading, watch the videos, and do the 'Start Practice' exercise (bottom right) for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.2/primary/lesson/scientific-method-ms-es"
              rel="noreferrer" target="_blank"> 1.2 Scientific Method. </a>
          </p>
          <p className="lessons"> Answer the questions below.<br/>
            1. What is the first rule of writing scientific questions?<br/>
            2. What is the second rule?<br/>
            3. What type of questions should NOT be used?<br/>
            4. What is the third rule?<br/>
            5. Write a good scientific question that follows the three rules.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."                    onChange={onChangeSci7Listener2} value={sci7Essay2}/>


          <span className="days">LESSON 3 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.3/primary/lesson/development-of-hypotheses-ms-es"
              rel="noreferrer" target="_blank"> 1.3 Developing Hypotheses. </a>
          </p>
          <p className="lessons">Answer the questions below using complete sentences. <br/>
            1. What is a hypothesis?<br/>
            2. Why is it important to have a specific hypothesis?<br/>
            3. How can you test a scientific hypothesis?<br/>
            4. Write an example of a hypothesis, and explain how you would test it.<br/>
          </p>
          <textarea className="textArea" placeholder="Back up your work!" onChange={onChangeSci7Listener3}
                    value={sci7Essay3}/>

          <span className="days">LESSON 4 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.4/primary/lesson/testing-hypotheses-ms-es"
              rel="noreferrer" target="_blank"> 1.4 Testing Hypotheses </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the first rule of writing scientific questions?<br/>
            2. What is the second rule?<br/>
            3. What type of questions should NOT be used?<br/>
            4. What is the third rule?<br/>
            5. Write a good scientific question that follows the three rules.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener4}
                    value={sci7Essay4}/>

          <span className="days">LESSON 5 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.5/primary/lesson/correlation-and-causation-ms-es"
              rel="noreferrer" target="_blank"> 1.5 Correlation and Causation. </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe correlation. Describe causation.<br/>
            2. Sugar consumption has been rising in the U.S. for decades. Can you think of something this might
            be positively correlated with? Could one be causal of the other?<br/>
            3. Outline the logical steps that link fossil fuel emissions to rising average global
            temperature?<br/>
            Based on the videos, answer the following questions:<br/>
            4. Why did people fear polio?<br/>
            5. Why did people think there was a correlation between ice cream and polio?<br/>
            6. Why are there more police in Washington, D.C. than in Denver? Where is there more crime? Do
            police cause crime? Then why are there more police in Washington, D.C.?
            <br/>
            7. Explain why people often confuse correlation and causation.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener5} value={sci7Essay5}/>

          <span className="days">LESSON 6 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.6/primary/lesson/observations-and-experiments-ms-es"
              rel="noreferrer" target="_blank"> 1.6 Observations and Experiments. </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an observation?<br/>
            2. What is an inference? <br/>
            3. Look around you and list an observation and then an inference. How can you tell the
            difference?<br/>
            4. When would a scientist test a hypothesis using observations? Think of an example.<br/>
            5. When would a scientist test a hypothesis using experiments?<br/>
            6. What is the difference between an independent variable and a dependent variable in an experiment? <br/>
          </p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener6}
                    value={sci7Essay6}/>

          <span className="days">LESSON 7 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.7/primary/lesson/development-of-theories-ms-es"
              rel="noreferrer" target="_blank"> 1.7 Theories. </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a scientific theory? <br/>
            2. What is a law?<br/>
            3. Can a hypothesis become a theory? <br/>
            4. Which of these, if any, is most important in science: hypothesis, theory, or law? <br/>
            5. Why is the phrase "only a theory" misleading?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener7} value={sci7Essay7}/>

          <span className="days">LESSON 8 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.8/primary/lesson/evolution-plate-tectonics-and-climate-change-hs-es"
              rel="noreferrer" target="_blank"> 1.8 Evolution, Plate Tectonics, and Climate. </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Briefly explain the theory of evolution.<br/>
            2. Scientists are reluctant to say that any theory is absolutely true. Why do you think that is?<br/>
            3. What reasons do people have outside science to think that a theory is incorrect? Are these valid
            scientific arguments?<br/>
            4. What are the three essential theories in Earth science as stated here?<br/>
            5. Is it likely that scientists will unearth something that will show the theory of evolution to be
            false?<br/>
            6. Briefly explain the theory of climate change as mentioned in the video you watched.<br/>
            7. What evidence is there for this theory?<br/>
            8. Most people, including scientists, do not call this a theory. Why not? Do you think it should be
            called a theory? Would calling it a theory saddle it with the same air of uncertainty that follows
            the theory of evolution?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener8} value={sci7Essay8}/>

          <span className="days">LESSON 9 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.9/primary/lesson/scientific-models-ms-es"
              rel="noreferrer" target="_blank"> 1.9 Scientific Models</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a model?<br/>
            2. Why do scientists use models?<br/>
            3. How are models checked for accuracy?<br/>
            4. How did Dr. Hansen check his model?<br/>
            5. Describe the types of models mentioned.<br/>
            6. Why are computers often used to make models?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener9} value={sci7Essay9}/>

          <span className="days">LESSON 10 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/1.10/primary/lesson/scientific-community-ms-es"
              rel="noreferrer" target="_blank"> 1.10 Scientific Community. </a> Be sure to complete
            The Nature of Science: Challenge 2.
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do scientists keep quality control high in scientific research?<br/>
            2. How does funding keep quality high in scientific research?<br/>
            3. What procedures are present in science to ensure scientific integrity?<br/>
            4. What was your score on The Nature of Science: Challenge 2?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener10} value={sci7Essay10}/>

          <span className="days">LESSON 11 </span>

          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.1/primary/lesson/branches-of-earth-science-ms-es"
              rel="noreferrer" target="_blank"> 2.1 Branches of Earth Science</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. The study of Earth science includes many different fields, including geology, meteorology,
            oceanography, and astronomy.<br/>
            2. Each type of Earth scientist investigates the processes and materials of the Earth. <br/>
            3. Like other scientists, Earth scientists ask questions. <br/>
            4. Describe what geologists study.<br/>
            5. Describe what oceanographers study.<br/>
            6. Describe what meteorologists study.<br/>
            7. Describe what climatologists study.<br/>
            8. Describe what environmental scientists study.<br/>
            9. Describe what astronomers study.<br/>
            6. Why is Earth science made up of all of these fields? <br/></p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener11} value={sci7Essay11}/>

          <span className="days">LESSON 12 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.2/primary/lesson/earth-science-field-work-ms-es"
              rel="noreferrer" target="_blank"> 2.2 Earth Science Field Work </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the geography of California. What features can you see in this state?<br/>
            2. Where are the arid lands in the western United States? Why are arid lands important for
            understanding geology?<br/>
            3. What is Yellowstone? How large is Yellowstone?<br/>
            4. How often has Yellowstone erupted in the past? What does this mean?<br/>
            5. What heats the geysers and supervolcano of Yellowstone?<br/>
            6. How many islands make up Hawaii?<br/>
            7. How long has Kīlauea been continuously erupting?<br/>
            8. Explain how Hawaii formed. <br/>
            9. What is the Big Island of Hawaii?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener12} value={sci7Essay12}/>

          <span className="days">LESSON 13 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.3/primary/lesson/principle-of-uniformitarianism-ms-es"
              rel="noreferrer" target="_blank"> 2.3 Uniformitarianism</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does an Earth scientist often need to answer a question about something that happened in Earth’s
            distant past?<br/>
            2. James Hutton is sometimes called the father of geology. Why does he deserve that title?<br/>
            3. How can you use the principle of uniformitarianism to figure out how a lava rock formed?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener13} value={sci7Essay13}/>

          <span className="days">LESSON 14 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.4/primary/lesson/location-on-the-earth-ms-es"
              rel="noreferrer" target="_blank"> 2.4 Location</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What would a latitude number in the Southern Hemisphere look like?<br/>
            2. Define latitude and longitude. <br/>
            3. Why are GPS devices so accurate?<br/>
            4. What is latitude and what does a measurement of latitude give?<br/>
            5. What is longitude and what does a measurement of longitude give?<br/>
            6. By looking at the latitude image, tell where the vertex of the latitude lines is?<br/>
            7. Where is the 90-degree North latitude line?<br/>
            8. How many longitude lines go through the South Pole?<br/>
            9. Is the United States in the Eastern or Western Hemisphere? What about India?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci7Listener14} value={sci7Essay14}/>

          <span className="days">LESSON 15 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.5/primary/lesson/direction-on-the-earth-ms-es"
              rel="noreferrer" target="_blank"> 2.5 Direction</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does a compass work?<br/>
            2. What is a polar coordinate system?<br/>
            3. How does someone do orienteering?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener15} value={sci7Essay15}/>

          <span className="days">LESSON 16 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.6/primary/lesson/elevation-on-the-earth-ms-es"
              rel="noreferrer" target="_blank"> 2.6 Elevation </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit3-5292199/"
            rel="noreferrer" target="_blank"> Introduction to Earth Science: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is elevation, and what is its reference point?<br/>
            2. How is topography different from relief?<br/>
            3. Why is the average, or mean, sea level used as a reference point?<br/>
            4. Why is elevation important?<br/>
            5. What is digital elevation data used for?<br/>
            6. What is the NED?<br/>
            7. What is the primary source of the NED's new elevation data?<br/>
            8. What else is LIDAR used for?<br/>
            9. Why is the continued funding of this project important?<br/>
            10. What was your score on Introduction to Earth Science: Challenge 1?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener16} value={sci7Essay16}/>

          <span className="days">LESSON 17 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.7/primary/lesson/maps-ms-es"
              rel="noreferrer" target="_blank"> 2.7 Maps </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Using the road map of Florida (Figure above), in what direction would you go to get from Fort
            Lauderdale to Tampa?<br/>
            2. Why do most maps begin with a portion of Earth's surface? When might they use something different
            as their base?<br/>
            3. What types of maps are most useful to Earth scientists?<br/>
            4. What does a geologic map show?<br/>
            5. How does a geologist (who, BTW, can also be female) begin to create a geologic map?<br/>
            6. What is a topographic map?<br/>
            7. How does a geologist make a geologic map from a topographic map?<br/>
            8. What are aerial photographs? Why does a geologist use two of the same photographs side by
            side?<br/>
            9. What do each of the colors on a geologic map represent?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener17} value={sci7Essay17}/>

          <span className="days">LESSON 18 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.8/primary/lesson/map-projections-ms-es"
              rel="noreferrer" target="_blank"> 2.8 Map Projections </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does a map projection distort Earth's features? Where does it distort the features most?<br/>
            2. Which type of projection is best for someone interested in studying Greenland? The worst?<br/>
            3. Why would the Mercator projection have been okay for use in the 16th century?<br/>
            4. How is making a map of Earth like trying to flatten an orange peel? What problems occur when
            making a map of Earth?<br/>
            5. What is the choice you need to make when you create or use a map of the world?<br/>
            6. In a Mercator Projection, what is accurate and what isn’t? What was a Mercator map made to be able
            to do?<br/>
            7. In Lambert’s Cylindrical Projection, where is the distortion greatest? What is good? What is
            distorted?<br/>
            8. In the Winkel Tripel Projection, what are the three things that need to be compromised?<br/>
            9. What is a Dymaxion Projection good at showing and what is it commonly used for?<br/>
            10. What is the best type of map?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener18} value={sci7Essay18}/>

          <span className="days">LESSON 19 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.9/primary/lesson/topographic-and-geologic-maps-ms-es"
              rel="noreferrer" target="_blank"> 2.9 Topographic and Geologic Maps </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a contour line? What is a contour interval?<br/>
            2. What will a hill look like on a topographic map? How will a basin look different from a hill?<br/>
            3. How do contour lines indicate a steep slope? How do they indicate a stream?<br/>
            4. Why might a geologic map be useful to geologists?<br/>
            5. What is sea level?<br/>
            6. How far apart are topographic lines?<br/>
            7. What do the contour lines represent?<br/>
            8. How do you know that there's a crater at the top of the volcano rather than a peak?<br/>
            9. What is the purpose of a topographic map?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener19} value={sci7Essay19}/>

          <span className="days">LESSON 20 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.10/primary/lesson/seafloor-ms-es"
              rel="noreferrer" target="_blank"> 2.10 Seafloor </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit4-5292199/"
            rel="noreferrer" target="_blank"> Introduction to Earth Science: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does an echo sounder work?<br/>
            2. Why is an ROV better for some tasks than a submersible?<br/>
            3. How do marine geologists collect rock and sediment samples?<br/>
            4. What is the only truly uncharted area of Earth?<br/>
            5. How were soundings taken in the past?<br/>
            6. List the advantages of using multi-beam sonar.
            7. How is texture captured?<br/>
            8. What is groundtruthing, and why is it necessary?<br/>
            9. Why is this project important?<br/>
            10. What was your score on Introduction to Earth Science: Challenge 2?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener20} value={sci7Essay20}/>

          <span className="days">LESSON 21 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.11/primary/lesson/telescopes-ms-es"
              rel="noreferrer" target="_blank"> 2.11 Telescopes </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What type of telescope was the first to be developed? Why was it the first?<br/>
            2. Why are most telescopes refracting telescopes?<br/>
            3. Why do scientists need space telescopes?<br/>
            4. Where were telescopes developed?<br/>
            5. What did Galileo do for the telescope?<br/>
            6. What was the old belief about the Moon and other celestial bodies?<br/>
            7. List Galileo's discoveries with the telescope.<br/>
            8. Explain Galileo's conflict with the Roman Catholic Church.
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener21} value={sci7Essay21}/>

          <span className="days">LESSON 22 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.12/primary/lesson/study-of-space-by-the-electromagnetic-spectrum-ms-es"
              rel="noreferrer" target="_blank"> 2.12 Study of Space by the Electromagnetic Spectrum </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do astronomers use light-years as a measure of distance?<br/>
            2. In the electromagnetic spectrum, which wavelengths are shorter than visible light? Which are longer
            than visible light? Which are relatively cooler? Which are relatively hotter?<br/>
            3. Why does light we see today tell us something about what happened earlier in the history of the
            Universe?<br/>
            4. What is the electromagnetic spectrum?<br/>
            5. What type of waves have the shortest wavelengths?<br/>
            6. What type of waves have the longest wavelengths?<br/>
            7. What do electromagnetic waves transmit?<br/>
            8. Define wavelength. <br/>
            9. Define frequency. <br/>
            10. What type of waves have the lowest frequency?<br/>
            11. What is the visible light region?<br/>
            12. How is color produced?<br/>
            13. What do scientists use the electromagnetic spectrum for?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener22} value={sci7Essay22}/>

          <span className="days">LESSON 23 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/2.13/primary/lesson/satellites-shuttles-and-space-stations-ms-es"
              rel="noreferrer" target="_blank"> 2.13 Satellites, Shuttles, and Space Stations </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit5-5292199/"
            rel="noreferrer" target="_blank"> Introduction to Earth Science: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does a rocket work?<br/>
            2. Why are there so many satellites orbiting Earth at this time?<br/>
            3. How do artificial satellites stay in orbit? Is this how natural satellites, like the Moon, stay in
            orbit?<br/>
            4. How do scientists study Earth from space?<br/>
            5. What does the Aqua satellite do?<br/>
            6. What does the Terra satellite do?<br/>
            7. What is Landsat?<br/>
            8. Why is it important?<br/>
            9. What has been learned from Landsat images?<br/>
            10. What was your score on Introduction to Earth Science: Challenge 3?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener23} value={sci7Essay23}/>

          <span className="days">LESSON 24 - Planet Earth  </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.1/primary/lesson/atoms-to-molecules-ms-es"
              rel="noreferrer" target="_blank"> 3.1 Atoms and Molecules </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the parts of an atom. Where are these parts located?<br/>
            2. What is an element?<br/>
            3. What is a molecule made of?<br/>
            4. How is an ion different from an atom?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener24} value={sci7Essay24}/>

          <span className="days">LESSON 25 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.2/primary/lesson/earths-shape-ms-es"
              rel="noreferrer" target="_blank"> 3.2 Earth's Shape </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Before telescopes and spaceships, how did people know that Earth is round?<br/>
            2. What would a ship sailing away from you look like if Earth were flat? If Earth were round?<br/>
            3. Define where the hemispheres are located: northern, southern, western, and eastern.<br/>
            Based on the last video in this lesson:<br/>
            4. Why are bodies in space spherical?<br/>
            5. How did the planets form?<br/>
            6. What is the only shape in nature that looks the same from all directions?<br/>
            7. Why are there odd-shaped objects in space?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener25} value={sci7Essay25}/>

          <span className="days">LESSON 26 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.3/primary/lesson/earths-magnetic-field-ms-es"
              rel="noreferrer" target="_blank"> 3.3 Earth's Magnetic Field </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does Earth have a magnetic field?<br/>
            2. Why is it important for Earth to have a magnetic field? <br/>
            3. What is a magnetic field reversal?<br/>
            Based on the video <i>Earth's magnetic field is going to flip</i><br/>
            4. What generates Earth’s magnetic field? Why is the magnetic field important?<br/>
            5. What is a magnetic field flip? Roughly how often does it happen?<br/>
            6. Why do scientists interested in Earth’s magnetic field collect cores from rocks at the
            Mid-Atlantic Ridge?<br/>
            7. When was the last major magnetic field flip?<br/>
            8. How do ancient pottery give scientists clues about Earth’s magnetic field? Why is it more precise than
            rocks?<br/>
            9. When was Earth’s magnetic field strength high and when was it lower (note that BCE means before
            current era and years correlate with the BC and AD system)?<br/>
            10. What has happened to magnetic north since it was first located in the early 19th century? How has the
            field changed in the past two centuries?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener26} value={sci7Essay26}/>

          <span className="days">LESSON 27 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.4/primary/lesson/rotation-of-earth-ms-es"
              rel="noreferrer" target="_blank"> 3.4 Earth's Rotations </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an axis of rotation? Where is Earth's axis of rotation?<br/>
            2. Why do the Sun, Moon, and stars appear to rise in the east and set in the west?<br/>
            3. What is the length of a day-night cycle? Is it the same everywhere on Earth?<br/>
            Based on the video <i>Why? Tell Me Why! Earth Spin</i><br/>
            4. What is an axis of rotation? Where is Earth's axis of rotation?<br/>
            5. Why do the Sun, Moon, and stars appear to rise in the east and set in the west?<br/>
            6. What is the length of a day-night cycle? Is it the same everywhere on Earth?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener27} value={sci7Essay27}/>

          <span className="days">LESSON 28 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.5/primary/lesson/revolutions-of-earth-ms-es"
              rel="noreferrer" target="_blank"> 3.5 Earth's Revolutions </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How long does it take for Earth to make one revolution around the Sun?<br/>
            2. Is Earth farther from the Sun in the winter and closer in the summer? Explain.<br/>
            3. Describe Earth’s orbit around the Sun. Describe the orbits of the other planets.<br/>
            Based on the video <i>How we figured out that the earth goes around the sun</i><br/>
            4. What did Aristotle and Ptolemy say about the relationship of Earth to other celestial bodies?<br/>
            5. In what ways did planets not fit their ideas?<br/>
            6. Why was the geocentric model a hypothesis that needed to be thrown out?<br/>
            7. What did Copernicus say about the solar system? What was the heliocentric model?<br/>
            8. Why was Copernicus’ model wrong?<br/>
            9. What was Kepler’s innovation?<br/>
            10. What contributions did Galileo’s telescope make to accepting the Copernicus/Keppler model of the
            solar system?<br/>
            11. What did The Church do with the heliocentric model?<br/>
            12. What is wrong with the heliocentric model?<br/>
            13. Why do we know that the geocentric model is wrong today?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener28} value={sci7Essay28}/>

          <span className="days">LESSON 29 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.6/primary/lesson/coriolis-effect-ms-es"
              rel="noreferrer" target="_blank"> 3.6 Coriolis Effect </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the Coriolis effect?<br/>
            2. How does the Coriolis effect explain the curved flight paths in the image below?<br/>
            <img style={{ height: "200px", float: "left", paddingRight: "10px" }}
                 src={require("../../public/images/science/flight-path.png")} alt="flight path"/><br/>
            3. How does Coriolis affect wind and water?<br/>
            Based on the video <i> Coriolis Effect</i><br/>
            4. What is subject to (or under the influence of) the Coriolis effect?<br/>
            5. What is the direction of deflection in the Northern Hemisphere?<br/>
            6. What is the direction of deflection in the Southern Hemisphere?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener29} value={sci7Essay29}/>

          <span className="days">LESSON 30 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.7/primary/lesson/seasons-ms-es"
              rel="noreferrer" target="_blank"> 3.7 Seasons </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit6-5292199/"
            rel="noreferrer" target="_blank"> Planet Earth Challenge </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Imagine that it is summer solstice in the Northern Hemisphere. What is the date, and where is the Sun?
            What is happening in the Southern Hemisphere?<br/>
            2. Describe why Earth has seasons. <br/>
            3. What are equinoxes? When do they come?<br/>
            4. What was your score on Planet Earth Challenge?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener30} value={sci7Essay30}/>

          <span className="days">LESSON 31 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.12/primary/lesson/earths-interior-ms-es"
              rel="noreferrer" target="_blank"> 3.12 Earth's Interior </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do scientists know that Earth's interior contains metal?<br/>
            2. What do meteorites tell us about Earth's interior?<br/>
            3. How do scientists use seismic waves to learn about Earth's interior?<br/>
            Questions below based on the video <i> Seismic waves</i><br/>
            4. What types of waves do earthquakes produce?<br/>
            5. What are the fastest body waves?<br/>
            6. What is the shadow zone?<br/>
            7. What do S-waves do?<br/>
            8. List and explain the two types of surface waves.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener31} value={sci7Essay31}/>

          <span className="days">LESSON 32 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.13/primary/lesson/earths-outer-layers-ms-es"
              rel="noreferrer" target="_blank"> 3.13 Earth's Outer Layers </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the atmosphere?<br/>
            2. What is the lithosphere?<br/>
            3. Where is the hydrosphere?<br/>
            4. How do Earth's layers interact? Give an example.<br/>
            Based on the video from this chapter <i>Big Idea: Earth's Systems Interact</i><br/>
            5. What are the four major systems of Earth?<br/>
            6. What are the components of the geosphere?<br/>
            7. What is the hydrosphere?<br/>
            8. Where does Earth's energy come from?<br/>
            9. What are ecosystems?<br/>
            10. What is feedback?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener32} value={sci7Essay32}/>

          <span className="days">LESSON 33 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.14/primary/lesson/earths-inner-layers-ms-es"
              rel="noreferrer" target="_blank"> 3.14 Earth's Inner Layers </a>
          </p>
          <Video videoUrl="https://www.youtube.com/embed/JGXi_9A__Vc"/>

          <p className="lessons">Answer the questions below. <br/>
            1. What are the the layers of Earth, based on composition? Where are they located?<br/>
            2. What is the composition of the different layers?<br/>
            3. How do the lithosphere and asthenosphere differ from each other?<br/>
            Based on the video <i>NASA SCI Files: Layers of the Earth</i><br/>
            4. What is the core?<br/>
            5. Explain the core's structure.<br/>
            6. What is the mantle?<br/>
            7. What is the crust?<br/>
            8. Why does the Earth have layers?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener33} value={sci7Essay33}/>

          <span className="days">LESSON 34 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.15/primary/lesson/earths-crust-ms-es"
              rel="noreferrer" target="_blank"> 3.15 Earth's Crust </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the properties of crust?<br/>
            2. Describe the properties of oceanic crust.<br/>
            3. Describe the properties of continental crust.<br/>
            Watch the video and read the short article
            <a href="https://www.sciencemag.org/news/2018/09/watch-hurricane-put-dent-earth-s-crust" rel="noreferrer"
               target="_blank"> Watch a
              hurricane put a dent in Earth’s crust </a> at Science Magazine. Then answer the following questions:<br/>
            4. Where did Hurricane Harvey make landfall? How much water did it dump?<br/>
            5. Where did the water go after the storm?<br/>
            6. What happened to Earth’s crust?<br/>
            7. How can scientists determine the weight of the water from Harvey?<br/>
            8. What is depression of crust called?<br/>
            9. Where did the water go after Harvey?<br/>
            10. How long did it take for the water stored on land to dissipate?<br/>
            11. Why will storms strike with increased frequency and ferocity?<br/>
            12. What does the narrator’s mom always say?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener34} value={sci7Essay34}/>

          <span className="days">LESSON 35 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.16/primary/lesson/earths-mantle-ms-es"
              rel="noreferrer" target="_blank"> 3.16 Earth's Mantle </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do scientists know what the mantle is made of?<br/>
            2. What is conduction?<br/>
            3. How does convection work in the mantle?<br/>
            Based on the video <i>Behind the expedition to the earth's mantle</i><br/>
            4. In which ocean did researchers try to drill into the mantle in 1961? In 2016?<br/>
            5. How much of Earth is made of mantle?<br/>
            6. Why did the researchers stop drilling in 1961?<br/>
            7. What noteworthy sample did researchers bring to the surface in 2016?<br/>
            8. What happens at the Moho discontinuity?<br/>
            9. What are extremophiles? Where do they live?<br/>
            10. How deep did the drilling go in 2016? How deep do they hope to get?<br/>
            11. What do scientists hope to find? Why would that sort of thing be found inside Earth?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener35} value={sci7Essay35}/>

          <span className="days">LESSON 36 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.17/primary/lesson/earths-core-ms-es"
              rel="noreferrer" target="_blank"> 3.17 Earth's Core </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What evidence is there that Earth's core is metal?<br/>
            2. What evidence is there that the outer core is molten?<br/>
            3. Why does Earth have a magnetic field?<br/>
            Based on the video <i>WSJ Scientists Find Surprising Core in Earth</i><br/>
            4. What layers does the core have within it according to the study described in this video?<br/>
            5. How deep is the core? What is its temperature?<br/>
            6. What clues to researchers use to “see” what is in Earth’s interior?<br/>
            7. What was the inner core thought to be previously?<br/>
            8. What do scientists now think is inside the core? How big is it?<br/>
            9. What is the interior made of? How do scientists know this is different from the material outside
            of it?<br/>
            10. How are crystals aligned in the inner inner and outer inner cores?<br/>
            11. Why is this information important?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener36} value={sci7Essay36}/>

          <span className="days">LESSON 37 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/3.18/primary/lesson/lithosphere-and-asthenosphere-hs-es"
              rel="noreferrer" target="_blank"> 3.18 Lithosphere and Asthenosphere </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit8-5292199/"
            rel="noreferrer" target="_blank"> Planet Earth: Challenge 3
          </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where is the lithosphere? What layers does it include?<br/>
            2. What is the asthenosphere?<br/>
            3. How do the lithosphere and asthenosphere differ?<br/>
            4. If the lithosphere is resting on the asthenosphere and you put a lot of weight on the
            lithosphere, say ice in a glacier, how would the lithosphere respond?<br/>
            Based on the video <i>Earth's Interior Isn't Quite What We Thought</i><br/>
            5. Where is the crust? What is it made of?<br/>
            6. How think is the crust?<br/>
            7. What layer is next and where is it?<br/>
            8. What is the mantle made of?<br/>
            9. Where does lava come from? What is magma?<br/>
            10. Where is the outer core? What is it made of?<br/>
            11. What is at the center of the Earth? Where is it?<br/>
            12. What is the inner core made of? Is it solid, liquid or gas? Why?<br/>
            13. How do scientists know what is below the crust?<br/>
            14. What was your score on Planet Earth Challenge 3?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener37} value={sci7Essay37}/>

          <span className="days">LESSON 38 - Plate Tectonics</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.1/primary/lesson/continental-drift-ms-es"
              rel="noreferrer" target="_blank"> 5.1 Continental Drift </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What was the scientific question that Wegener asked?<br/>
            2. What did he need to do to explore the question and make it into a hypothesis?<br/>
            3. What evidence did Wegener have to support his idea?<br/>
            4. Describe how Wegener used each type of evidence to support his idea.<br/>
            5. Who was Alfred Wegener?<br/>
            6. What evidence did Wegener find for Pangaea?<br/>
            7. What was the response to Wegener's hypothesis?<br/>
            8. What is the continental drift hypothesis?<br/>
            9. What do the continental plates consist of?<br/>
            10. What were formed when Pangaea broke apart?<br/>
            11. Is the word "theory" misused in these two videos? What is the better word?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener38} value={sci7Essay38}/>

          <span className="days">LESSON 39 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.2/primary/lesson/wegener-and-the-continental-drift-hypothesis-ms-es"
              rel="noreferrer" target="_blank"> 5.2 Wegener and the Continental Drift Hypothesis </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the continental drift hypothesis.<br/>
            2. Why did scientists reject Wegener’s idea? What was needed for them to accept it?<br/>
            3. What was Wegener's mechanism for drifting continents?<br/>
            4. What is uniformitarianism?<br/>
            5. What did Wegener write about in his book?<br/>
            6. What did Wegener think caused continental drift?<br/>
            7. Give specific examples of the response to Wegener's continental drift hypothesis. <br/>
            8. What did scientists learn after the war?<br/></p>          <textarea className="textArea"
                                                                                    onChange={onChangeSci7Listener39}
                                                                                    value={sci7Essay39}/>

          <span className="days">LESSON 40 </span>
          <p>Watch the videos below about Continental Drift. </p>
          <Video videoUrl="https://www.youtube.com/embed/Wq9kLzm36h0"/>
          <Video videoUrl="https://www.youtube.com/embed/rDKiNwTwaNw"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the mid-Atlantic Ridge?<br/>
            2. One day the continents are likely to drift back together. How many years will this take?<br/>
            3. Describe one new thing you learned from the videos.<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener40} value={sci7Essay40}/>

          <span className="days">LESSON 41 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.3/primary/lesson/magnetic-polarity-evidence-for-continental-drift-ms-es"
              rel="noreferrer" target="_blank"> 5.3 Magnetic Polarity Evidence for Continental Drift </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is apparent polar wander?<br/>
            2. Describe how magnetite indicates magnetic pole. Why does it sometimes point to a spot that is not where
            the pole is located?<br/>
            3. How did scientists use magnetic evidence to conclude that the continents moved?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener41} value={sci7Essay41}/>

          <span className="days">LESSON 42 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.4/primary/lesson/bathymetric-evidence-for-seafloor-spreading-ms-es"
              rel="noreferrer" target="_blank"> 5.4 Bathymetric Evidence for Seafloor Spreading</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does an echo sounder create a bathymetric map?<br/>
            2. What are the features of the seafloor that are elevated?<br/>
            3. What are the features of the seafloor that are very deep?<br/>
            4. What did Henry Hess use his sonar for?<br/>
            5. What did Hess discover?<br/>
            6. What was discovered in 1953?<br/>
            7. What did Hess discover was occurring at the ridge?<br/>
            8. What did Hess call his discovery?<br/>
            9. What process recycles the crust?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener42} value={sci7Essay42}/>

          <span className="days">LESSON 43 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.5/primary/lesson/magnetic-evidence-for-seafloor-spreading-ms-es"
              rel="noreferrer" target="_blank"> 5.5 Magnetic Evidence for Seafloor Spreading </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe how the magnetic stripe at the top of the mid-ocean ridge forms. <br/>
            2. Describe the pattern the magnetic stripes make on the ocean floor. <br/>
            3. How does magnetic polarity reveal the age of a piece of seafloor?<br/>
            4. What is the pattern of seafloor age in the ocean basins?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener43} value={sci7Essay43}/>

          <span className="days">LESSON 44 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.6/primary/lesson/seafloor-spreading-hypothesis-ms-es"
              rel="noreferrer" target="_blank"> 5.6 Seafloor Spreading Hypothesis </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit12-5292199/"
            rel="noreferrer" target="_blank"> Plate Tectonics: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the pattern of magnetic stripes give evidence for seafloor spreading?<br/>
            2. How does the topography of the seafloor give evidence for seafloor spreading?<br/>
            3. How does seafloor spreading fit into the idea that continents move about on Earth’s surface?<br/>
            4. What was your score for Plate Tectonics: Challenge 1?<br/></p> <textarea className="textArea"
                                                                                        onChange={onChangeSci7Listener44}
                                                                                        value={sci7Essay44}/>

          <span className="days">LESSON 45 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.7/primary/lesson/earths-tectonic-plates-ms-es"
              rel="noreferrer" target="_blank"> 5.7 Earth's Tectonic Plates </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did scientists draw boundaries around the plates?<br/>
            2. What is a plate?<br/>
            3. What is a plate made of?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener45} value={sci7Essay45}/>

          <span className="days">LESSON 46 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.8/primary/lesson/tectonic-plate-motions-ms-es"
              rel="noreferrer" target="_blank"> 5.8 Tectonic Plate Motions </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe how convection takes place in the mantle.<br/>
            2. How does mantle convection cause seafloor spreading?<br/>
            3. How does seafloor spreading move plates?<br/>
            4. What would the Earth look like without the biosphere and atmosphere?<br/>
            5. What are plates?<br/>
            6. How fast are the plates moving?<br/>
            7. What happens at the ridges?<br/>
            8. What are subduction zones?<br/>
            9. What heats Earth's interior?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener46} value={sci7Essay46}/>

          <span className="days">LESSON 47 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.9/primary/lesson/theory-of-plate-tectonics-ms-es"
              rel="noreferrer" target="_blank"> 5.9 Theory of Plate Tectonics</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a plate boundary?<br/>
            2. What three interactions can plates have? These are the three major types of plate boundaries.<br/>
            3. In general, what does the theory of plate tectonics explain?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener47} value={sci7Essay47}/>

          <span className="days">LESSON 48 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.10/primary/lesson/divergent-plate-boundaries-in-the-oceans-ms-es"
              rel="noreferrer" target="_blank"> 5.10 Divergent Plate Boundaries in the Oceans </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. In what direction are the plates moving at a divergent plate boundary?<br/>
            2. How does a convection cell in the mantle lead to volcanism at the mid-ocean ridge?<br/>
            3. How does a continent break apart to form an ocean basin?<br/>
            4. What causes divergence?<br/>
            5. How is new crust created?<br/>
            6. What erupts on the ocean floor?<br/>
            7. How fast does divergence occur?<br/>
            8. What is formed at a divergent boundary?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener48} value={sci7Essay48}/>

          <span className="days">LESSON 49 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.11/primary/lesson/divergent-plate-boundaries-hs-es"
              rel="noreferrer" target="_blank"> 5.11 Divergent Plate Boundaries </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is a divergent plate boundary on land different from one in the ocean?<br/>
            2. What is happening to the Baja California peninsula?<br/>
            3. How did continental rifting play into the breakup of Pangaea?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener49} value={sci7Essay49}/>

          <span className="days">LESSON 50 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.12/primary/lesson/transform-plate-boundaries-ms-es"
              rel="noreferrer" target="_blank"> 5.12 Transform Plate Boundaries </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit13-5292199/"
            rel="noreferrer" target="_blank"> Plate Tectonics: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the direction of plate motion at a transform plate boundary?<br/>
            2. Why are transform faults prone to massive earthquakes?<br/>
            3. Why are earthquakes at the San Andreas Fault so large?<br/>
            4. What was your score on Plate Tectonics: Challenge 2?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener50} value={sci7Essay50}/>

          <span className="days">LESSON 51 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.13/primary/lesson/ocean-continent-convergent-plate-boundaries-ms-es"
              rel="noreferrer" target="_blank"> 5.13 Ocean-Continent Convergent Plate Boundaries </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the direction of plate motion at a convergent plate boundary?<br/>
            2. What creates an island arc?<br/>
            3. How is a continental arc different from an island arc?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener51} value={sci7Essay51}/>

          <span className="days">LESSON 52 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.14/primary/lesson/ocean-ocean-convergent-plate-boundaries-hs-es"
              rel="noreferrer" target="_blank"> 5.14 Ocean-Ocean Convergent Plate Boundaries </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast the features of an ocean-ocean convergent plate boundary with the features of an
            ocean-continent convergent plate boundary. <br/>
            2. How do the Aleutian volcanoes differ from the Cascades volcanoes?<br/>
            3. How do island arcs get their name?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener52} value={sci7Essay52}/>

          <span className="days">LESSON 53 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.15/primary/lesson/continent-continent-convergent-plate-boundaries-ms-es"
              rel="noreferrer" target="_blank"> 5.15 Continent-Continent Convergent Plate Boundaries </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast these two types of convergent plate boundaries: (1) continent-continent, and (2)
            ocean-continent. <br/>
            2. What causes mountain ranges to rise at convergent plate boundaries?<br/>
            3. How did the Appalachian Mountains form?<br/>
            4. What two types of plates come together at continent-continent convergent plate boundaries?<br/>
            5. Which plate sinks into the mantle? What is the result of this?<br/>
            6. What are two examples of this type of plate boundary?<br/>
            7. At what type of plate boundary are the highest peaks on Earth located?<br/>
            8. Where is the continental crust thickest on Earth?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener53} value={sci7Essay53}/>

          <span className="days">LESSON 54 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.16/primary/lesson/continental-margins-ms-es"
              rel="noreferrer" target="_blank"> 5.16 Continental Margins </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the continental margin of Western North America.<br/>
            2. Describe the continental margin of Eastern North America.<br/>
            3. Why are there mountain ranges at passive margins?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener54} value={sci7Essay54}/>

          <span className="days">LESSON 55 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.17/primary/lesson/supercontinent-cycle-ms-es"
              rel="noreferrer" target="_blank"> 5.17 Supercontinent Cycle and Pangaea </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the plate tectonics processes that brought Pangaea together.<br/>
            2. Describe the plate tectonics processes that split Pangaea up.<br/>
            3. Why do scientists think that there will be another supercontinent in the future?<br/>
            4. How did the continents form?<br/>
            5. When did the continents get their current shape?<br/>
            6. Describe how North America will look 100 million years from now.<br/>
            7. What will happen to Africa in the future?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener55} value={sci7Essay55}/>

          <span className="days">LESSON 56 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/5.18/primary/lesson/intraplate-activity-ms-es"
              rel="noreferrer" target="_blank"> 5.18 Intraplate Activity </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit14-5292199/"
            rel="noreferrer" target="_blank"> Plate Tectonics: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a hotspot?<br/>
            2. How do scientists use hotspot volcanism to tell the direction and speed of a plate?<br/>
            3. Compare and contrast hotspots in the oceans and on continents.<br/>
            4. What was your score on Plate Tectonics Challenge 3?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener56} value={sci7Essay56}/>

          <span className="days">LESSON 57  -  Earth's Fresh Water</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.1/primary/lesson/distribution-of-water-on-earth-ms-es"
              rel="noreferrer" target="_blank"> 8.1 Distribution of Water on Earth </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Earth has a tremendous amount of water. So why is water sometimes a scarce resource?<br/>
            2. What are the reservoirs for water?<br/>
            3. What is residence time? What does it mean to say the residence time of water in the atmosphere is
            nine days?<br/>
            4. How much of Earth's surface is covered with water? What is most of this water in?<br/>
            5. What percent of Earth's water is salty? How much is fresh water?<br/>
            6. Of all of the fresh water, what percentage is ice, what is shallow groundwater, what is deep
            groundwater, what is in lakes and rivers and what is in the atmosphere as water vapor?<br/>
            7. How much of Earth's fresh water is available for human consumption?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener57} value={sci7Essay57}/>

          <span className="days">LESSON 58 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.2/primary/lesson/states-of-water-ms-es"
              rel="noreferrer" target="_blank"> 8.2 States of Water </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a polar molecule?<br/>
            2. What are the three states of matter?<br/>
            3. What are some of the remarkable properties of water?<br/>
            4. What is water made of?<br/>
            5. Explain how water becomes a solid.<br/>
            6. What happens when a solid melts?<br/>
            7. How do molecules move in a liquid?<br/>
            8. What are the major differences between a solid, a liquid, and a gas.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener58} value={sci7Essay58}/>

          <span className="days">LESSON 59 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.3/primary/lesson/processes-of-the-water-cycle-ms-es"
              rel="noreferrer" target="_blank"> 8.3 The Water Cycle </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is transpiration?<br/>
            2. How are evaporation and condensation the same? How are they different?<br/>
            3. What is the role of the major reservoirs in the water cycle?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener59} value={sci7Essay59}/>

          <span className="days">LESSON 60 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.4/primary/lesson/uses-of-water-ms-es"
              rel="noreferrer" target="_blank"> 8.4 Uses of Water </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do people use so much more water than they used to?<br/>
            2. How is water used for agriculture? How can it be used better?<br/>
            3. Why is it important to have water for fun and for the environment?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener60} value={sci7Essay60}/>

          <span className="days">LESSON 61 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.5/primary/lesson/water-distribution-ms-es"
              rel="noreferrer" target="_blank"> 8.5 Water Distribution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is Earth's water distributed?<br/>
            2. How do wealthier nations deal with water problems? How do poorer nations deal with water problems?<br/>
            3. What is a drought? What can happen during a drought?<br/>
            4. What is water scarcity?<br/>
            5. Why do people take water for granted?<br/>
            6. How much freshwater is there on Earth?<br/>
            7. How many people do not have access to clean water?<br/>
            8. What will occur by 2025?<br/>
            9. What is physical water scarcity? Where does this occur?<br/>
            10. What is economic water scarcity? Where does this occur?<br/>
            11. What are two things you can do to reduce your water consumption?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener61} value={sci7Essay61}/>

          <span className="days">LESSON 62 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.6/primary/lesson/safety-of-water-ms-es"
              rel="noreferrer" target="_blank"> 8.6 Safety of Water </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are pathogens?<br/>
            2. Why do people drink from water sources that are contaminated?<br/>
            3. Why do nations fail to provide safe drinking water for their people?<br/>
            4. Why do waterborne diseases rarely strike in the developed world?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener62} value={sci7Essay62}/>

          <span className="days">LESSON 63 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.7/primary/lesson/conserving-water-ms-es"
              rel="noreferrer" target="_blank"> 8.7 Conserving Water </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit20-5292199/"
            rel="noreferrer" target="_blank"> Earth's Fresh Water: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How can you conserve water in your garden?<br/>
            2. How can changing your personal habits conserve water?<br/>
            3. How does drip irrigation work?<br/>
            4. How much does bottled water cost compared to tap water?<br/>
            5. Besides cost, what are the reasons that drinking bottled water is harmful?<br/>
            6. What can make tap water taste better?<br/>
            7. How much water does a front-loading washer save?<br/>
            8. How long should you shower?<br/>
            9. When should you water your garden? Why?<br/>
            10. What was your score on Earth's Fresh Water: Challenge 1?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener63} value={sci7Essay63}/>

          <span className="days">LESSON 64 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.8/primary/lesson/streams-and-rivers-ms-es"
              rel="noreferrer" target="_blank"> 8.8 Streams and Rivers </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the features of a river from where it begins to where it ends.<br/>
            2. What happens to two drops of water that fall on opposite sides of a divide?<br/>
            3. Why does a tributary not cross over a divide?<br/>
            4. What is the tributary system? What does that mean in simple English?<br/>
            5. What does a tributary flow into?<br/>
            6. What do the tributaries in the Rocky Mountains near Woodland Park feed into? What does that flow into?
            And what does that flow into? And finally what does that flow into?<br/>
            7. At what point does a tributary meet a river?<br/>
            8. What is the biggest trunk river in the U.S.?<br/>
            9. What is the end of the Mississippi River in the Gulf of Mexico?<br/>
            10. What is a delta?<br/>
            11. What is found in a delta?<br/>
            12. How did a delta get its name?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener64} value={sci7Essay64}/>

          <span className="days">LESSON 65 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.9/primary/lesson/ponds-and-lakes-ms-es"
              rel="noreferrer" target="_blank"> 8.9 Ponds and Lakes </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe how different types of lakes form. <br/>
            2. How is a large lake like an ocean? How is it different?<br/>
            3. What is the difference between ponds and lakes? How are they similar?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener65} value={sci7Essay65}/>

          <span className="days">LESSON 66 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.10/primary/lesson/flooding-ms-es"
              rel="noreferrer" target="_blank"> 8.10 Flooding </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What conditions make it more likely that a river will flood?<br/>
            2. What was the role of flooding on the Nile River? What was the consequence of damming the river?<br/>
            3. Why are there floods on rivers that have dams and other protections?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener66} value={sci7Essay66}/>

          <span className="days">LESSON 67 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.11/primary/lesson/glaciers-ms-es"
              rel="noreferrer" target="_blank"> 8.11 Glaciers </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit21-5292199/"
            rel="noreferrer" target="_blank"> Earth's Fresh Water: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast alpine glaciers, continental glaciers, and ice caps.<br/>
            2. Describe how an ice sheet could become a glacier.<br/>
            3. How do glaciers serve as a water resource for people and organisms in the summertime?<br/>
            4. What determines how fast a glacier moves?<br/>
            5. How does a glacier move like a stream? Why?<br/>
            6. Where are alpine glaciers and how can you tell that one was in an area?<br/>
            7. What are the two continental glaciers that remain today? What did North America look like during the
            last Ice Age?<br/>
            8. What happens in the zone of accumulation if more snow accumulates than ice melts? What happens if there
            is more melting than snowfall?<br/>
            9. What was your score on Earth's Fresh Water: Challenge 2 ?<br/>
          </p>

          <textarea className="textArea" onChange={onChangeSci7Listener67} value={sci7Essay67}/>

          <span className="days">LESSON 68 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.12/primary/lesson/introduction-to-groundwater-ms-es"
              rel="noreferrer" target="_blank"> 8.12 Groundwater </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does rock or soil need to be permeable for there to be groundwater?<br/>
            2. How does water become groundwater?<br/>
            3. What happens if there is an impermeable rock layer underground?<br/>
            4. What can make the water table move up or down?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener68} value={sci7Essay68}/>

          <span className="days">LESSON 69 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.13/primary/lesson/groundwater-aquifers-ms-es"
              rel="noreferrer" target="_blank"> 8.13 Groundwater Aquifers </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does water enter an aquifer?<br/>
            2. What happens to the water table in an extremely wet year? In an extremely dry one?<br/>
            3. How do people get water from a well?<br/>
            4. How has irrigation changed farming?<br/>
            5. What is leading to people's demands for additional water?<br/>
            6. What is the GRACE satellite doing?<br/>
            7. How does GRACE find groundwater aquifers?<br/>
            8. How people in India know the aquifers are being depleted?<br/>
            9. What is the future of water?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener69} value={sci7Essay69}/>

          <span className="days">LESSON 70 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.14/primary/lesson/springs-and-geysers-ms-es"
              rel="noreferrer" target="_blank"> 8.14 Springs and Geysers </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit22-5292199/"
            rel="noreferrer" target="_blank"> Earth's Fresh Water: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What causes a spring?<br/>
            2. Describe how a geyser erupts. <br/>
            3. Where do the minerals in mineral springs come from?<br/>
            4. What was your score on Earth's Fresh Water: Challenge 3?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener70} value={sci7Essay70}/>

          <span className="days">LESSON 71 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.15/primary/lesson/groundwater-depletion-ms-es"
              rel="noreferrer" target="_blank"> 8.15 Groundwater Depletion </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are some of the problems that come from overuse of groundwater?<br/>
            2. Why is the Ogallala aquifer important?<br/>
            3. Why does groundwater removal cause the ground to subside?<br/>
            4. Where is the Ogallala aquifer found?<br/>
            5. What has put the Ogallala aquifer at risk?<br/>
            6. What is the danger from the pipeline?<br/>
            7. Why are people concerned about the pipeline?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener71} value={sci7Essay71}/>

          <span className="days">LESSON 72 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.16/primary/lesson/groundwater-pollution-hs-es"
              rel="noreferrer" target="_blank"> 8.16 Groundwater Pollution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is groundwater always cleaner than surface water?<br/>
            2. Is water that is advertised as spring water necessarily free of contaminants? Why or why not?<br/>
            3. How does groundwater move into and through an aquifer?<br/>
            4. What chemicals get into drinking water?<br/>
            5. How does water get into the groundwater aquifer?<br/>
            6. How does rock dissolve?<br/>
            7. How does karst aquifers groundwater get contaminated?<br/>
            8. What are the three types of contaminants?<br/>
            9. What happens to these contaminates when it rains above a karst aquifer?<br/>
            10. What do sediments increase pollution in an aquifer?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener72} value={sci7Essay72}/>

          <span className="days">LESSON 73 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.17/primary/lesson/water-pollution-ms-es"
              rel="noreferrer" target="_blank"> 8.17 Water Pollution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do large animal farms cause a lot of pollution?<br/>
            2. What are the three major sources of water pollution in the developed world?<br/>
            3. How do you and your family pollute water?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener73} value={sci7Essay73}/>

          <span className="days">LESSON 74 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.18/primary/lesson/protecting-water-from-pollution-ms-es"
              rel="noreferrer" target="_blank"> 8.18 Protecting Water From Pollution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is water treatment better than water cleanup later?<br/>
            2. How is wastewater treated?<br/>
            3. What can you do to protect water quality?<br/>
            4. What is the purpose of the Clean Water Act?<br/>
            5. How old is the Clean Water Act today?<br/>
            6. What event was one of the springboards that led to the designing of the Clean Water Act?<br/>
            7. What is a second event that was a springboard that led to the designing of the Clean Water Act?<br/>
            8. How do laws, like the Clean Water Act, pass and then evolve?<br/>
            9. Why might it be important to protect an entire watershed rather than just one location on one
            stream?<br/>
            10. What principles might a nation have that would lead it to protect its water?<br/>
            11. Why is it difficult to regulate water in a country like the United States?<br/>
            12. Besides regulation, what do you need to get communities to protect their water?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener74} value={sci7Essay74}/>

          <span className="days">LESSON 75 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/8.19/primary/lesson/cleaning-up-groundwater-ms-es"
              rel="noreferrer" target="_blank"> 8.19 Cleaning Up Groundwater </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit23-5292199/"
            rel="noreferrer" target="_blank"> Earth's Fresh Water: Challenge 4 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do contaminated soil or rock need to be cleaned in an aquifer?<br/>
            2. What are the two types of remediation that can take place in an aquifer?<br/>
            3. How do scientists monitor the contaminants in an aquifer?<br/>
            4. What was the Hanford site used for?<br/>
            5. What river needs to be protected? What is it used for?<br/>
            6. By what routes did contamination get into the groundwater?<br/>
            7. In the video, contamination decreased from 80 to 65 square miles. What was the main reason for
            that?<br/>
            8. What is the goal at Hanford?<br/>
            9. What is being done to clean the contaminated groundwater?<br/>
            10. How are barriers used to clean groundwater?<br/>
            11. What was your score on Earth's Fresh Water: Challenge 4?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener75} value={sci7Essay75}/>

          <span className="days">LESSON 76  -  Oceans</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.1/primary/lesson/importance-of-the-oceans-ms-es"
              rel="noreferrer" target="_blank"> 9.1 Importance of the Oceans </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do the oceans moderate Earth's temperature?<br/>
            2. What role do oceans play in the water cycle?<br/>
            3. Why do oceans have so much biomass?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener76} value={sci7Essay76}/>

          <span className="days">LESSON 77 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.2/primary/lesson/seawater-chemistry-ms-es"
              rel="noreferrer" target="_blank"> 9.2 Seawater Chemistry </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why are oceans important?<br/>
            2. Which dissolved gases are found in the oceans?<br/>
            3. Which dissolved salts are contained in seawater?<br/>
            4. What is salinity? What is the salinity of average seawater?<br/>
            5. Where does the salt come from?<br/>
            6. Why doesn't the ocean get saltier over time?<br/>
            7. What changes the salinity in different places in the oceans?<br/>
            8. What are the effects of salinity on water?<br/>
            9. How does the surface temperature of ocean water vary?<br/>
            10. Where is the coldest, densest ocean water?<br/>
            11. What does carbon dioxide do in the oceans?<br/>
            12. How does temperature change with depth? How does pressure change with depth?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener77} value={sci7Essay77}/>

          <span className="days">LESSON 78 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.3/primary/lesson/ocean-zones-ms-es"
              rel="noreferrer" target="_blank"> 9.3 Ocean Zones </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit24-5292199/"
            rel="noreferrer" target="_blank"> Earth's Oceans: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is there so little life at the bottom of the ocean?<br/>
            2. Compare and contrast the intertidal, neritic, and oceanic zones. <br/>
            3. What would you expect to find in the photic zone? How would you expect that to be different from the
            aphotic zone?<br/>
            4. Where can 90% of the of the ocean's life be found?<br/>
            5. Where is the twilight zone? What lives there?<br/>
            6. Where is the dark zone? What lives there?<br/>
            7. Why is little life found in the dark zone?<br/>
            8. What is the abyss? Where is it found?<br/>
            9. Why are trenches so deep?<br/>
            10. What was your score on Earth's Oceans: Challenge 1?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener78} value={sci7Essay78}/>

          <span className="days">LESSON 79 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.9/primary/lesson/coastal-pollution-ms-es"
              rel="noreferrer" target="_blank"> 9.9 Coastal Pollution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the consequences of coastal pollution?<br/>
            2. Since plastic doesn't biodegrade in the oceans, what happens to it?<br/>
            3. What can you do to help keep the oceans clean?<br/>
            4. What created the garbage patch?<br/>
            5. How much stuff does it contain?<br/>
            6. What makes up 80% of the patch?<br/>
            7. What is the problem with plastic?<br/>
            8. Where does the garbage come from?<br/>
            9. What are a few of the consequences on marine life of all this plastic?<br/>
            10. What is the best solution to stop adding to the patch?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener79} value={sci7Essay79}/>

          <span className="days">LESSON 80 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.10/primary/lesson/ocean-garbage-patch-hs-es"
              rel="noreferrer" target="_blank"> 9.10 Ocean Garbage Patch </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How can plastic kill marine organisms?<br/>
            2. Since plastic doesn't biodegrade in the oceans, what does the future hold? What can be done to make the
            future better?<br/>
            3. Some people say that the Great Pacific Garbage Patch is a hoax. What can scientists do to show people
            that it is real?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener80} value={sci7Essay80}/>

          <span className="days">LESSON 81 </span>
          <p>Watch the videos below on coastal pollution and answer the questions that follow.
            <Video videoUrl="https://www.youtube.com/embed/fsjvwQclGLo"/>
            <Video videoUrl="https://www.youtube.com/embed/vrPBYS5zzF8?list=RDCMUC9uD-W5zQHQuAVT2GdcLCvg"/>
            1. How are animals in the ocean affected by plastics dumped into the ocean? <br/>
            2. How big is the Great Pacific Garbage Patch? <br/>
            3. What are three things that you learned or found surprising in the videos?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener81} value={sci7Essay81}/>

          <span className="days">LESSON 82 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/9.11/primary/lesson/oil-spills-ms-es"
              rel="noreferrer" target="_blank"> 9.11 Oil Spills </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit26-5292199/"
            rel="noreferrer" target="_blank"> Earth's Oceans: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What happened caused the Gulf of Mexico oil spill?<br/>
            2. How can an oil spill be cleaned up? Does cleanup return the region to it's normal state?<br/>
            3. What can you do to reduce the chance of oil entering the oceans?<br/>
            4. What was your score on Earth's Oceans: Challenge 3?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener82} value={sci7Essay82}/>

          <span className="days">LESSON 83  -  Atmospheric Processes</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.1/primary/lesson/importance-of-the-atmosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.1 Importance of the Atmosphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What gases are used and expelled by photosynthesis and respiration?<br/>
            2. How does the atmosphere keep Earth's temperature moderate?<br/>
            3. How does the atmosphere play an important role in the water cycle?<br/>
            4. What is the atmosphere?<br/>
            5. Where does weather occur?<br/>
            6. What does the atmosphere protect us from? Which layer?<br/>
            7. What would happen if we didn't have the protective layer in the previous question?<br/>
            8. What happens in the mesosphere?<br/>
            9. What is made in the thermosphere?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener83} value={sci7Essay83}/>

          <span className="days">LESSON 84 </span>
          <p>Watch the videos and answer the questions below.
            <Video videoUrl="https://www.youtube.com/embed/bKoFqXoLV0Y"/>
            <Video videoUrl="https://www.youtube.com/embed/W6pPQ1TOXpY"/>
            1. Describe the troposphere.<br/>
            2. Describe the stratosphere.<br/>
            3. Describe the mesosphere.<br/>
            4. Describe the thermosphere.<br/>
            5. What is the first law of thermodynamics?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener84} value={sci7Essay84}/>

          <span className="days">LESSON 85 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.2/primary/lesson/composition-of-the-atmosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.2 Composition of the Atmosphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the two major atmospheric gases? What are the important minor gases?<br/>
            2. What are particulates? Why are they important?<br/>
            3. What is humidity? How much humidity is in the air on a tremendously hot and humid day?<br/>
            4. What does the atmosphere contain?<br/>
            5. How much nitrogen does the atmosphere contain?<br/>
            6. How much oxygen does the atmosphere contain?<br/>
            7. What does the atmosphere do?<br/>
            8. How many layers does the atmosphere have?<br/>
            9. List the layers of the atmosphere and two characteristics of each layer. <br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener85} value={sci7Essay85}/>

          <span className="days">LESSON 86 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.3/primary/lesson/pressure-and-density-of-the-atmosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.3 Pressure and Density of the Atmosphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does air density decrease with increasing altitude?<br/>
            2. Why does temperature decrease with increasing altitude in the troposphere?<br/>
            3. Why are we not crushed by the weight of the atmosphere on our shoulders?<br/>
            4. What is pressure?<br/>
            5. What causes air molecules to have pressure?<br/>
            6. Where does the atmosphere end? What is out past the atmosphere?<br/>
            7. What is air pressure?<br/>
            8. What is the elevation and air pressure in Key West, Florida?<br/>
            9. What is the elevation on Mt. Everest? Why do climbers often use extra oxygen up there?<br/>
            10. Why does air pressure change with altitude?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener86} value={sci7Essay86}/>

          <span className="days">LESSON 87 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.4/primary/lesson/temperature-of-the-atmosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.4 Temperature of the Atmosphere </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit27-5292199/"
            rel="noreferrer" target="_blank"> Atmospheric Processes: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What causes convection in the atmosphere?<br/>
            2. How are the layers of the atmosphere divided?<br/>
            3. What is temperature gradient? If you know that, then what is pressure gradient?<br/>
            10. What was your score on Atmospheric Processes: Challenge 1?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener87} value={sci7Essay87}/>

          <span className="days">LESSON 88 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.5/primary/lesson/troposphere-ms-es"
              rel="noreferrer" target="_blank"> 10.5 Troposphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is the troposphere the most important layer of the atmosphere?<br/>
            2. What is the source of heat in the troposphere?<br/>
            3. Describe the temperature gradient found in the troposphere. <br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener88} value={sci7Essay88}/>

          <span className="days">LESSON 89 </span>
          <p>Watch the videos and answer the questions below.
            <Video videoUrl="https://www.youtube.com/embed/6LkmD6B2ncs"/>
            1. Write two new things you learned from this video.<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener89} value={sci7Essay89}/>

          <span className="days">LESSON 90 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.6/primary/lesson/stratosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.6 Stratosphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why doesn't air mix much in the stratosphere?<br/>
            2. What is the ozone layer? Why is it important?<br/>
            3. Why does air temperature increase with height in the stratosphere?<br/>
            4. Where is the stratosphere located?<br/>
            5. How is ozone, the O3 molecule, created?<br/>
            6. By what process does this ozone molecule become stable?<br/>
            7. Why is ozone important?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener90} value={sci7Essay90}/>

          <span className="days">LESSON 91 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.7/primary/lesson/mesosphere-ms-es"
              rel="noreferrer" target="_blank"> 10.7 Mesosphere </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does temperature change with altitude in the mesosphere? Why?<br/>
            2. What types of clouds are found in the mesosphere?<br/>
            3. How can meteors burn in the mesosphere when the air density is so low?<br/>
            4. Where is the mesophere found?<br/>
            5. What does it protect us from? What is a shooting star?<br/>
            6. What are noctilucent clouds?<br/>
            7. When can noctilucent clouds be seen? Why?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener91} value={sci7Essay91}/>

          <span className="days">LESSON 92 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.8/primary/lesson/thermosphere-and-beyond-ms-es"
              rel="noreferrer" target="_blank"> 10.8 Thermosphere and Beyond </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit28-5292199/"
            rel="noreferrer" target="_blank"> Atmospheric Processes: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the properties of the thermosphere?<br/>
            2. Why are gas molecules so rare in the exosphere?<br/>
            3. What causes the aurora? Where in the atmosphere does it take place?<br/>
            4. What is the ultimate cause of the aurora borealis?<br/>
            5. What occurs in the Sun to release energy?<br/>
            6. What is plasma? What does it do?<br/>
            7. What is a solar storm?<br/>
            8. How long does it take a solar storm to reach Earth?<br/>
            9. What protects us from solar storms?<br/>
            10. Why do the aurora typically take place only in the polar regions?<br/>
            11. What was your score on the Atmospheric Processes: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener92} value={sci7Essay92}/>

          <span className="days">LESSON 93 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/10.14/primary/lesson/greenhouse-effect-ms-es"
              rel="noreferrer" target="_blank"> 10.14 Greenhouse Effect </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is insulation? What effect does insulation have on global temperature?<br/>
            2. What is the greenhouse effect?<br/>
            3. How does Earth's atmosphere resemble a greenhouse?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener93} value={sci7Essay93}/>

          <span className="days">LESSON 94 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.1/primary/lesson/introduction-to-weather-ms-es"
              rel="noreferrer" target="_blank"> 11.1 Introduction to Weather </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast weather and climate.<br/>
            2. What factors account for a location's weather?<br/>
            3. Describe how unequal heating causes weather.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener94} value={sci7Essay94}/>

          <span className="days">LESSON 95 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.2/primary/lesson/humidity-ms-es"
              rel="noreferrer" target="_blank"> 11.2 Humidity </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is humidity? What is relative humidity?<br/>
            2. Explain what heat index is.<br/>
            3. Why does water come out of the air at its dew point?<br/>
            4. What is humidity?<br/>
            5. What is water vapor?<br/>
            6. What is absolute humidity?<br/>
            7. What two factors does relative humidity consider?<br/>
            8. What are you likely to see when the humidity is 100%?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener95} value={sci7Essay95}/>

          <span className="days">LESSON 96 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.3/primary/lesson/clouds-ms-es"
              rel="noreferrer" target="_blank"> 11.3 Clouds </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What happens to turn water vapor into a cloud?<br/>
            2. What effects do clouds have on temperature?<br/>
            3. Compare and contrast cirrus, stratus, and cumulus clouds.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener96} value={sci7Essay96}/>

          <span className="days">LESSON 97 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.4/primary/lesson/fog-ms-es"
              rel="noreferrer" target="_blank"> 11.4 Fog </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does fog form?<br/>
            2. What makes tule fog distinctive?<br/>
            3. Compare and contrast the different types of fog.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener97} value={sci7Essay97}/>

          <span className="days">LESSON 98 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.5/primary/lesson/precipitation-ms-es"
              rel="noreferrer" target="_blank"> 11.5 Precipitation </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do raindrops form and fall to the ground?<br/>
            2. Why does hail only come from cumulonimbus clouds?<br/>
            3. How does sleet form?<br/>
            4. What is precipitation?<br/>
            5. What is the most common form of precipitation?<br/>
            6. What is hail?<br/>
            7. What is sleet?<br/>
            8. What is snow?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener98} value={sci7Essay98}/>

          <span className="days">LESSON 99 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.6/primary/lesson/air-masses-ms-es"
              rel="noreferrer" target="_blank"> 11.6 Air Masses </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>

            1. What is an air mass?<br/>
            2. Why do air masses form where the air stays in one place for a while?<br/>
            3. What happens when an air mass moves over a new region?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener99} value={sci7Essay99}/>

          <span className="days">LESSON 100 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.7/primary/lesson/weather-fronts-ms-es"
              rel="noreferrer" target="_blank"> 11.7 Fronts </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit32-5292199/"
            rel="noreferrer" target="_blank"> Weather: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What characteristics give warm fronts and cold fronts their names?<br/>
            2. Describe a warm front. What weather is found with a warm front?<br/>
            3. Describe a cold front. What weather is found with a cold front?<br/>
            4. How does an occluded front form?<br/>
            5. What is a front?<br/>
            6. How does a cold front form?<br/>
            7. What forms along a cold front?<br/>
            8. How does a warm front form?<br/>
            9. What type of clouds form at warm fronts?<br/>
            10. What type of precipitation is produced from a warm front?<br/>
            11. What is a stationary front?<br/>
            12. What type of weather can occur at an occluded front?<br/>
            13. What was your score on Weather: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener100} value={sci7Essay100}/>

          <span className="days">LESSON 101 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.8/primary/lesson/thunderstorms-ms-es"
              rel="noreferrer" target="_blank"> 11.8 Thunderstorms </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why are thunderstorms so common?<br/>
            2. What is the energy source that feeds a thunderstorm?<br/>
            3. What two atmospheric processes lead to the formation of the anvil-shaped clouds?<br/>
            4. What causes a thunderstorm to end?<br/>
            5. What causes thunderstorms to develop?<br/>
            6. What determines the severity of the storm?<br/>
            7. What causes the air to rise?<br/>
            8. What causes the air mass to cool? What happens to this rising cooler air?<br/>
            9. What causes lightning and thunder?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener101} value={sci7Essay101}/>

          <span className="days">LESSON 102 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.9/primary/lesson/tornadoes-ms-es"
              rel="noreferrer" target="_blank"> 11.9 Tornadoes </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>

            1. What causes the tornadoes of Tornado Alley?<br/>
            2. Explain why tornadoes strike the middle of the U.S.<br/>
            3. What circumstances led to all the tornadoes in April 2011?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener102} value={sci7Essay102}/>

          <span className="days">LESSON 103 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.10/primary/lesson/mid-latitude-cyclones-ms-es"
              rel="noreferrer" target="_blank"> 11.10 Cyclones </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a cyclone?<br/>
            2. What are the motions of air in a mid-latitude cyclone?<br/>
            3. What is a nor'easter?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener103} value={sci7Essay103}/>

          <span className="days">LESSON 104 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.11/primary/lesson/hurricanes-ms-es"
              rel="noreferrer" target="_blank"> 11.11 Hurricanes </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a hurricane? What is the eye of a hurricane?<br/>
            2. How does a hurricane form?<br/>
            3. Where does the storm get its energy?<br/>
            4. What is storm surge?<br/>
            5. Under what circumstances does a hurricane die?<br/>
            6. Why was Hurricane Katrina so damaging?<br/>
            7. What are hurricanes?<br/>
            8. Where do most hurricanes begin to form?<br/>
            9. How does a hurricane start and build so large?<br/>
            10. What direction do hurricanes spin?<br/>
            11. What is the eye?<br/>
            12. What are typhoons and cyclones?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener104} value={sci7Essay104}/>

          <span className="days">LESSON 105 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.12/primary/lesson/blizzards-ms-es"
              rel="noreferrer" target="_blank"> 11.12 Blizzards </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the difference between a snowstorm and a blizzard?<br/>
            2. Under what circumstances does a blizzard form?<br/>
            3. What two conditions cause the largest blizzards?<br/>
            4. What causes lake-effect snow?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener105} value={sci7Essay105}/>

          <span className="days">LESSON 106 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/11.13/primary/lesson/heat-waves-and-droughts-ms-es"
              rel="noreferrer" target="_blank"> 11.13 Heat Waves and Droughts </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit33-5292199/"
            rel="noreferrer" target="_blank"> Weather: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is a heat wave defined?<br/>
            2. How is a drought defined?<br/>
            3. How does the position of the jet stream cause a heat wave?<br/>
            4. What will happen if the world's average temperature increases by 3 degrees?<br/>
            5. What will become the norm in Europe and the Mediterranean?<br/>
            6. What happened in the summer of 2003?<br/>
            7. How many people died in Europe that summer?<br/>
            8. Why was this catastrophe, caused or exacerbated by global warming, unique?<br/>
            9. What was your score on Weather: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener106} value={sci7Essay106}/>

          <span className="days">LESSON 107 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.1/primary/lesson/weather-vs.-climate-ms-es"
              rel="noreferrer" target="_blank"> 12.1 Weather vs. Climate </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>

            1. What is climate?<br/>
            2. Why did California receive a large influx of new residents?<br/>
            3. How does climate change?<br/>
            4. What factors determine climate?<br/>
            5. What is the difference between weather and climate?<br/>
            6. Describe a temperate climate.<br/>
            7. Where are arid climates found?<br/>
            8. What creates a climate system?<br/>
            9. What drives climate?<br/>
            10. What do greenhouse gases do?<br/>
            11. What are the main greenhouse gases?<br/>
            12. What would Earth be like without the greenhouse effect?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener107} value={sci7Essay107}/>

          <span className="days">LESSON 108 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.2/primary/lesson/effect-of-latitude-on-climate-ms-es"
              rel="noreferrer" target="_blank"> 12.2 Effect of Latitude on Climate </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do you explain the variation in temperature from Austin, Texas, to Thompson, Manitoba, Canada?<br/>
            2. What are two reasons that solar radiation is different at different latitudes?<br/>
            3. Look at the map of temperature versus latitude around the globe. Why are the bands not straight
            across?<br/>
            4. What influences does the Sun have on a region's climate?<br/>
            5. Does the tilt of Earth's axis of rotation influence climate?<br/>
            6. What is latitude?<br/>
            7. What is the Equator and what is the climate there like?<br/>
            8. What is the Tropic of Cancer and the Tropic of Capricorn?<br/>
            9. What is the climate of the area between the Tropic of Cancer and Tropic of Capricorn?<br/>
            10. What are the middle latitudes? What is the climate like in this region generally?<br/>
            11. Describe the polar regions.<br/>
            12. What is elevation? How does elevation affect climate?<br/>
            13. Besides the amount of precipitation a region gets, what else about precipitation affects climate?<br/>
            14. How do wind and water currents affect climate?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener108} value={sci7Essay108}/>

          <span className="days">LESSON 109 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.3/primary/lesson/effect-of-atmospheric-circulation-on-climate-ms-es"
              rel="noreferrer" target="_blank"> 12.3 Effect of Atmospheric Circulation on Climate</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are prevailing winds? How do they affect climate?<br/>
            2. Where is there not much wind?<br/>
            3. How do atmospheric circulation cells affect precipitation?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener109} value={sci7Essay109}/>

          <span className="days">LESSON 110 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.4/primary/lesson/effect-of-continental-position-on-climate-ms-es"
              rel="noreferrer" target="_blank"> 12.4 Effect of Continental Position on Climate </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>

            1. Describe a maritime climate. What location has a maritime climate?<br/>
            2. Describe a continental climate. What location has a continental climate?<br/>
            3. San Francisco and Virginia Beach are both near an ocean. Why are their climates so different?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener110} value={sci7Essay110}/>

          <span className="days">LESSON 111 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.5/primary/lesson/effect-of-altitude-and-mountains-on-climate-ms-es"
              rel="noreferrer" target="_blank"> 12.5 Effect of Altitude and Mountains on Climate </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit35-5292199/"
            rel="noreferrer" target="_blank"> Climate: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does an increase in altitude cause a change in temperature?<br/>
            2. What is rain shadow effect?<br/>
            3. What are the two ways that a mountain range can affect climate?<br/>
            4. What does wind do as it goes up and over a mountain range?<br/>
            5. What is the climate on the windward side of a mountain range like?<br/>
            6. What is the climate on the leeward side of a mountain like?<br/>
            7. What are rain shadow deserts?<br/>
            8. What are the characteristics (wind, precipitation, vegetation) seen on the windward side of the Sierra
            Nevada Mountains?<br/>
            9. What are the characteristics (wind, precipitation, vegetation) seen on the leeward side of the Sierra
            Nevada Mountains?<br/>
            10. What was your score on Climate: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener111} value={sci7Essay111}/>

          <span className="days">LESSON 112 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.6/primary/lesson/climate-zones-and-biomes-ms-es"
              rel="noreferrer" target="_blank"> 12.6 Climate Zones and Biomes </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What factors determine a climate type?<br/>
            2. How does a biome relate to a climate zone?<br/>
            3. Why would a region have its own microclimate, different from the surrounding climate?<br/>
            4. How are altitude and latitude similar for producing life zones?<br/>
            5. What determines the characteristics of the Moab desert?<br/>
            6. Where are deserts often found?<br/>
            7. Why are the poles cold?<br/>
            8. How can the ocean heat the land?<br/>
            9. How does the mean temperature at Reykjavik, Iceland compare with a similar latitude in Alaska?<br/>
            10. What brings the warm temperatures to Iceland?<br/>
            11. How do greenhouse gases affect climate?<br/>
            12. What are the principal factors in determining climate?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener112} value={sci7Essay112}/>

          <span className="days">LESSON 113 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.7/primary/lesson/tropical-moist-climates-ms-es"
              rel="noreferrer" target="_blank"> 12.7 Tropical Moist Climates </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does atmospheric circulation lead to there being rainforests in the tropics?<br/>
            2. How does a tropical wet climate differ from a tropical wet and dry climate?<br/>
            3. How do the differences in tropical climates lead to differences in vegetation?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener113} value={sci7Essay113}/>

          <span className="days">LESSON 114 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.8/primary/lesson/dry-climates-ms-es"
              rel="noreferrer" target="_blank"> 12.8 Dry Climates </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the reason that an arid desert has so little rainfall?<br/>
            2. What is the reason that a steppe has so little rainfall?<br/>
            3. What is the difference between a desert and a steppe in vegetation?<br/>
            4. What adaptations do arid climate zone plants have to the dry conditions?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener114} value={sci7Essay114}/>

          <span className="days">LESSON 115 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.9/primary/lesson/temperate-climates-ms-es"
              rel="noreferrer" target="_blank"> 12.9 Temperate Climates </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. At what latitudes do these three climate types occur?<br/>
            2. What types of plants are found in each of the three climate types above?<br/>
            3. What is difficult about plants trying to survive in a Mediterranean climate? How do they do
            that?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener115} value={sci7Essay115}/>

          <span className="days">LESSON 116 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.10/primary/lesson/continental-climates-ms-es"
              rel="noreferrer" target="_blank"> 12.10 Continental Climates </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the main features of a continental climate?<br/>
            2. What are the temperature and precipitation conditions of the two climates described here?<br/>
            3. What is the difference in trees in the two climate types described here?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener116} value={sci7Essay116}/>

          <span className="days">LESSON 117 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.11/primary/lesson/polar-climates-ms-es"
              rel="noreferrer" target="_blank"> 12.11 Polar Climates </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit36-5292199/"
            rel="noreferrer" target="_blank"> Climate: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is permafrost? Where do you think it is found?<br/>
            2. What is tundra? Why is tundra found at the polar regions and in the high mountains?<br/>
            3. What are ice caps? How does the ice accumulate?<br/>
            4. What was your score on Polar Climates: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener117} value={sci7Essay117}/>

          <span className="days">LESSON 118 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.12/primary/lesson/climate-change-in-earth-history-ms-es"
              rel="noreferrer" target="_blank"> 12.12 Climate Change in Earth History </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How has climate changed in the past 14,000 years?<br/>
            2. How can the Sun change Earth's climate?<br/>
            3. What is an ice age? When was the most recent?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener118} value={sci7Essay118}/>

          <span className="days">LESSON 119 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.13/primary/lesson/short-term-climate-change-ms-es"
              rel="noreferrer" target="_blank"> 12.13 Short-Term Climate Change </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. In which direction does wind blow during an El Niño event?<br/>
            2. In which direction does current go during an El Niño event?<br/>
            3. How is a La Niña different from an El Niño?<br/>
            4. During an El Niño, what happens to life off the coast of South America and why?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener119} value={sci7Essay119}/>

          <span className="days">LESSON 120 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.14/primary/lesson/carbon-cycle-and-climate-hs-es"
              rel="noreferrer" target="_blank"> 12.14 Carbon Cycle and Climate </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does it mean to say that photosynthesis and respiration are gas exchange processes?<br/>
            2. How do scientists learn about carbon levels in the past?<br/>
            3. How do human activities affect the carbon cycle?<br/>
            4. What do greenhouse gases do?<br/>
            5. Where did most of the carbon dioxide that was present in the early atmosphere go?<br/>
            6. What did the early plants add to the atmosphere and why was that important? What else did they
            create?<br/>
            7. What do organisms do with the organic carbon?<br/>
            8. What are the two major things that carbon does?<br/>
            9. What is the 30 second version of the carbon cycle?<br/>
            10. What does carbon fixation do with carbon dioxide?<br/>
            11. How do organisms use the carbohydrates produced by carbon fixing reactions?<br/>
            12. What is cellular respiration the reverse of?<br/>
            13. After the organisms metabolize carbohydrates, how is the carbon released back into the
            environment?<br/>
            14. What happens when carbon dioxide mixes with water and what does it cause?<br/>
            15. What happens to the carbonate ions in the marine environment?<br/>
            16. What happens when shell building organisms die? What happens if those organisms are buried
            deeply?<br/>
            17. How much carbon is wrapped up in fossil fuels compared to the total amount of carbon?<br/>
            18. Where does the carbon dioxide go that is released from fossil fuels? Where does the excess carbon
            dioxide go?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener120} value={sci7Essay120}/>

          <span className="days">LESSON 121 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.15/primary/lesson/global-warming-ms-es"
              rel="noreferrer" target="_blank"> 12.15 Global Warming </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What have been the temperature trends in the past 1500 years?<br/>
            2. How is the rise in temperatures in the past two decades different from the rise since of the past 1500
            years?<br/>
            3. What is global warming?<br/>
            4. How much has the global temperature risen in the last century?<br/>
            5. What is the major human activity that contributes to global warming and why?<br/>
            6. What is the greenhouse effect?<br/>
            7. Is average global temperature rising? What is your evidence?<br/>
            8. Which greenhouse gases are at their highest levels in history? When was the last time they were as
            high?<br/>
            9. What do researchers predict will happen?<br/>
            10. What can we do now to slow the rise in temperatures?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener121} value={sci7Essay121}/>

          <span className="days">LESSON 122 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.16/primary/lesson/causes-and-effects-of-global-warming-ms-es"
              rel="noreferrer" target="_blank"> 12.16 Causes and Effects of Global Warming </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What do you expect to happen if you increase the amount of greenhouse gases in the atmosphere?<br/>
            2. What has happened to the level of carbon dioxide in the atmosphere in the past several decades (use
            numbers and units)?<br/>
            3. What has happened to sea level since 1870 (use numbers and units)?<br/>
            4. What are some of the effects of climate change that are already being seen?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener122} value={sci7Essay122}/>

          <span className="days">LESSON 123 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.17/primary/lesson/impact-of-continued-global-warming-ms-es"
              rel="noreferrer" target="_blank"> 12.17 Impact of Continued Global Warming </a>
            <Video videoUrl="https://www.youtube.com/embed/wbR-5mHI6bo"/></p>

          <p className="lessons">Answer the questions below. <br/>
            1. Pretend that the temperature today is 5° C (9° F) higher than yesterday. Now consider an increase of 5°
            C (9° F) in average global temperature. How are these two scenarios different?<br/>
            2. Why is a rise in sea level significant?<br/>
            3. What will plants and animals do as temperature rises?<br/>
            4. Climate has always been changing. Why is it something to worry about now?<br/>
            5. Describe the changes that could be seen if the Earth warms by one degree.<br/>
            6. Describe the effects of two degrees of warming.<br/>
            7. What changes will occur with three degrees of warming?<br/>
            8. Describe the consequences of four degrees of warming.<br/>
            9. What are some reasons that stopping climate change is complicated?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener123} value={sci7Essay123}/>

          <span className="days">LESSON 124 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/12.18/primary/lesson/reducing-greenhouse-gas-pollution-ms-es"
              rel="noreferrer" target="_blank"> 12.18 Reducing Greenhouse Gas Pollution </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit37-5292199/"
            rel="noreferrer" target="_blank"> Climate: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is a treaty between nations needed so that we can reduce greenhouse gas emissions? Why is
            there a problem getting a treaty that will work?<br/>
            2. How does a cap-and-trade system work? Could it work for cities or businesses in the same way it
            does for nations?<br/>
            3. What is carbon sequestration? Does it prevent carbon dioxide from being emitted? Does it keep
            carbon dioxide from entering the atmosphere?<br/>
            4. What is the purpose of carbon sequestration?<br/>
            5. What are the three pillars of the Global Climate Change Initiative?<br/>
            6. What is CCS?<br/>
            7. What is CCS being used for today?<br/>
            8. How is CCS done?<br/>
            9. What type of stone is carbon dioxide pumped into? Why?<br/>
            10. Why are cap rocks important? How do scientists know cap rocks work?<br/>
            11. What was your score on the Climate: Challenge 3? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener124} value={sci7Essay124}/>

          <span className="days">LESSON 125 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.1/primary/lesson/formation-of-the-sun-and-planets-ms-es"
              rel="noreferrer" target="_blank"> 16.1 Formation of the Sun and Planets </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the nebular hypothesis?<br/>
            2. What was the solar nebula?<br/>
            3. How did the material at the center of the solar system become a star?<br/>
            4. What are the categories of bodies in the solar system? In general, where can they be found?<br/>
            5. What is the evidence that supports the nebular hypothesis?<br/>
            6. What is a protostar?<br/>
            7. At what temperature did nuclear fusion begin?<br/>
            8. When was our star born? How much longer will it last?<br/>
            9. How does the Sun produce its light?<br/>
            10. What does recent research suggest about the birth of our Sun?<br/>
            11. What was the Big Bang?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener125} value={sci7Essay125}/>

          <span className="days">LESSON 126 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.2/primary/lesson/formation-of-earth-ms-es"
              rel="noreferrer" target="_blank"> 16.2 Formation of Earth </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did Earth form?<br/>
            2. How did Earth material separate into layers?<br/>
            3. How did the Moon form?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener126} value={sci7Essay126}/>

          <span className="days">LESSON 127 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.3/primary/lesson/formation-of-the-moon-hs-es"
              rel="noreferrer" target="_blank"> 16.3 Formation of the Moon </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Relay the story of how the Moon formed. Integrate as many of the Moon's features into the story as
            possible.<br/>
            2. Why are Earth and Moon roughly the same age as the rest of the solar system?<br/>
            3. Why do scientists learn a lot about the early Earth from their studies of the Moon?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener127} value={sci7Essay127}/>

          <span className="days">LESSON 128 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.4/primary/lesson/early-atmosphere-and-oceans-ms-es"
              rel="noreferrer" target="_blank"> 16.4 Early Atmosphere and Oceans </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit46-5292199/"
            rel="noreferrer" target="_blank"> Earth's History: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What were the sources of gases in Earth's early atmosphere?<br/>
            2. Where did oxygen come from? Why is oxygen so important for life on Earth?<br/>
            3. How did the first oceans form?<br/>
            4. What was your score on the Earth's History: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener128} value={sci7Essay128}/>

          <span className="days">LESSON 129 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.5/primary/lesson/precambrian-continents-ms-es"
              rel="noreferrer" target="_blank"> 16.5 Precambrian Continents </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What were the first continents like?<br/>
            2. Where do we find the oldest crust we can find? Is this what is left of the first crust? How
            do we know?<br/>
            3. What are supercontinents? How do we know of their existence (think back to the concepts in the
            Plate Tectonics chapter)?<br/>
            4. Why was plate tectonics faster in the early Earth?<br/>
            5. What did the early Earth look like?<br/>
            6. Why do some scientists think that life may have originated more than once?<br/>
            7. What landmasses existed 2.5 billion years ago?<br/>
            8. When did Arctica take shape?<br/>
            9. What was Rodinia?<br/>
            10. What came together to form Pangaea and when did this happen?<br/>
            11. What is driving the movement of the plates?<br/>
            12. What is convective flow?<br/>
            13. Where does the energy come from to drive plate movements?<br/>
            14. What material is found in the core that makes it hot?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener129} value={sci7Essay129}/>

          <span className="days">LESSON 130 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.6/primary/lesson/paleozoic-plate-tectonics-ms-es"
              rel="noreferrer" target="_blank"> 16.6 Paleozoic Plate Tectonics </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do plate tectonics processes result in orogenies?<br/>
            2. How did Pangaea come together?<br/>
            3. How is the creation of Pangaea related to events like the Taconic orogeny?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener130} value={sci7Essay130}/>

          <span className="days">LESSON 131 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.7/primary/lesson/paleozoic-and-mesozoic-seas-ms-es"
              rel="noreferrer" target="_blank"> 16.7 Paleozoic and Mesozoic Seas </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do scientists use sedimentary facies to recognize a marine transgression?<br/>
            2. How do scientists use sedimentary facies to recognize a marine regression?<br/>
            3. What are the possible causes of a marine transgression?<br/>
            4. What are the possible causes of a marine regression?<br/>
            5. How do geologists know that there were two transgressions and regressions in the Mesozoic?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener131} value={sci7Essay131}/>

          <span className="days">LESSON 132 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.8/primary/lesson/mesozoic-plate-tectonics-ms-es"
              rel="noreferrer" target="_blank"> 16.8 Mesozoic Plate Tectonics </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is Pangaea still breaking up? Why or why not?<br/>
            2. How do continents grow?<br/>
            3. How did the Sierra Nevada mountains form?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener132} value={sci7Essay132}/>

          <span className="days">LESSON 133 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/16.9/primary/lesson/cenozoic-plate-tectonics-ms-es"
              rel="noreferrer" target="_blank"> 16.9 Cenozoic Plate Tectonics </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit47-5292199/"
            rel="noreferrer" target="_blank"> Earth's History: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do we know so much more about the Cenozoic than the other eras of geologic time?<br/>
            2. How do plate tectonics processes explain the Rocky Mountains? The San Andreas Fault? The
            Himalayas?<br/>
            3. What were the Pleistocene ice ages? What did the ice ages do to the evolution of life?<br/>
            4. What was your score on Earth's History: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener133} value={sci7Essay133}/>

          <span className="days">LESSON 134 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.1/primary/lesson/modern-biodiversity-ms-es"
              rel="noreferrer" target="_blank"> 17.1 Modern Biodiversity </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Study the organisms in the photos above. For the aloe vera plant and the beetles, list the features
            that each has for successful living.<br/> 2. Study the organisms in the photos above. For the stoats and the
            crowned crane, list the features that
            each has for successful living.<br/>
            3. How does being well suited for a particular environment lead to biodiversity?<br/>
            4. What is biodiversity?<br/>
            5. How did so much biodiversity come about?<br/>
            6. How does biodiversity help people?<br/>
            7. Why is biodiversity important?<br/>
            8. Why are so many species disappearing now?<br/>
            9. How many species are disappearing from tropical rainforests each year? Why?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener134} value={sci7Essay134}/>

          <span className="days">LESSON 135 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.2/primary/lesson/characteristics-and-origins-of-life-ms-es"
              rel="noreferrer" target="_blank"> 17.2 Characteristics and Origins of Life </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the characteristics of life?<br/>
            2. What are amino acids? Why are they important?<br/>
            3. What are proteins? If something doesn't have proteins can it be alive?<br/>
            4. How do scientists learn about the origins of life?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener135} value={sci7Essay135}/>

          <span className="days">LESSON 136 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.3/primary/lesson/metabolism-and-replication-ms-es"
              rel="noreferrer" target="_blank"> 17.3 Metabolism and Replication </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the purpose of an organism's metabolism?<br/>
            2. What are metabolic pathways?<br/>
            3. Metabolic pathways are similar between very simple and very complex organisms. What do scientists think
            this means?<br/>
            4. What do nucleic acids do?<br/>
            5. What are the two nucleic acids and what does each do?<br/>
            6. If you have a gene for a purple nose, but you don't in fact have a purple nose, what do scientist say
            about that gene?<br/>
            7. Where are virtually all of your genes?<br/>
            8. What are genes?<br/>
            9. Describe the structure of a DNA molecule.<br/>
            10. What do the four bases—adenine (A), thymine (T), cytosine (C), and guanine (G)—do?<br/>
            11. What are chromosomes made of?<br/>
            12. How many chromosomes do humans have?<br/>
            13. How similar are we to chimps? How similar to other humans?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener136} value={sci7Essay136}/>

          <span className="days">LESSON 137 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.4/primary/lesson/adaptation-and-evolution-of-populations-ms-es"
              rel="noreferrer" target="_blank"> 17.4 Adaptation and Evolution of Populations </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do adaptations develop?<br/>
            2. What does it mean to say that an organism is well adapted to its environment?<br/>
            3. What is a mutation?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener137} value={sci7Essay137}/>

          <span className="days">LESSON 138 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.5/primary/lesson/theory-of-evolution-by-natural-selection-ms-es"
              rel="noreferrer" target="_blank"> 17.5 Theory of Evolution by Natural Selection </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why are some deer mice brown and some lighter colored in Nebraska?<br/>
            2. Using the example of the deer mice, how does natural selection explain the change with time of darker
            mice into lighter mice?<br/>
            3. How does biological evolution work?<br/>
            4. How do identical twins, who should have exactly the same sets of genes (genome) end up with
            differences?<br/>
            5. How are genomes changed and passed on to offspring so that the offspring aren't genetically identical
            to one or the other parent?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener138} value={sci7Essay138}/>

          <span className="days">LESSON 139 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.6/primary/lesson/population-size-ms-es"
              rel="noreferrer" target="_blank"> 17.6 Population Size </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What happens if a population exceeds its carrying capacity?<br/>
            2. Explain how a single bacterium can grow to a population of more than a million 10 hours later.<br/>
            3. What happens if the birth rate in a population is more than the death rate? What happens if it is
            less?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener139} value={sci7Essay139}/>

          <span className="days">LESSON 140 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.7/primary/lesson/extinction-and-radiation-of-life-ms-es"
              rel="noreferrer" target="_blank"> 17.7 Extinction and Radiation of Life </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit48-5292199/"
            rel="noreferrer" target="_blank"> Evolution and Populations: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is extinction considered a normal part of Earth's history?<br/>
            2. What are some of the possible causes of mass extinctions?<br/>
            3. Why do many new species evolve after a mass extinction?<br/>
            4. What was your score on Evolution and Population: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener140} value={sci7Essay140}/>

          <span className="days">LESSON 141 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.8/primary/lesson/growth-of-human-populations-ms-es"
              rel="noreferrer" target="_blank"> 17.8 Growth of Human Populations </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does it mean that the human population growth rate is increasing?<br/>
            2. What does it mean that the rate that the growth rate is increasing has declined?<br/>
            3. Looking at the graph above: When did the human population start to really grow? When did it really
            take off?<br/>
            4. What was the population in 1800?<br/>
            5. What was the population in 1930?<br/>
            6. What number did the population reach in 2011?<br/>
            7. What could the population be in 2045?<br/>
            8. What is the average lifespan of people today?<br/>
            9. What was the average lifespan of people in 1960?<br/>
            10. What is a megacity?<br/>
            11. How many megacities were there in 1975?<br/>
            12. How many megacities are there now?<br/>
            13. Explain what the world needs. What does that mean?<br/>
            14. How much of the population lacks adequate sanitation?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener141} value={sci7Essay141}/>

          <span className="days">LESSON 142 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.9/primary/lesson/agriculture-and-human-population-growth-hs-es
" rel="noreferrer" target="_blank"> 17.9 Agriculture and Human Population Growth </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Link major advances in agriculture and industry with changes in the human population.<br/>
            2. What is carrying capacity? Has the human population exceeded Earth's carrying capacity for humans? If
            so, how could this have happened?<br/>
            3. What is the Green Revolution? How has it affected human population?<br/>
            4. What do you think of Thomas Malthus' prediction? Have we proven Malthus wrong or have we just not
            gotten to that point yet?<br/>
            5. Who was Thomas Malthus?<br/>
            6. What did Malthus think would happen as population increased?<br/>
            7. What did Malthus think would limit population?<br/>
            8. What is the Malthusian limit?<br/>
            9. What is happening to population growth in some developed countries today?<br/>
            10. Malthus didn't account for what in his theory?<br/>
            11. What country is close to the Malthusian limit today?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener142} value={sci7Essay142}/>

          <span className="days">LESSON 143 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.10/primary/lesson/revolutions-in-human-population-growth-ms-es"
              rel="noreferrer" target="_blank"> 17.10 Revolutions in Human Population Growth </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What caused the first rise in human population?<br/>
            2. Why has the Industrial Revolution altered human population numbers?<br/>
            3. How has the Green Revolution increased agricultural productivity?<br/>
            4. If the birth rate doesn't change but the death rate goes down, what happens to population?<br/>
            5. Where did most people work in the late 1700s? Who did they work for?<br/>
            6. What did the new machines do?<br/>
            7. What became more affordable?<br/>
            8. Why did families move? Where did they move from and to?<br/>
            9. Who were the workers? Who did they work for?<br/>
            10. What problems did industrialization cause?<br/>
            11. Where were the worst conditions?<br/>
            12. Why were unions formed?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener143} value={sci7Essay143}/>

          <span className="days">LESSON 144 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.11/primary/lesson/overpopulation-and-over-consumption-ms-es"
              rel="noreferrer" target="_blank"> 17.11 Overpopulation and Over-Consumption </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are some of the ways that the large human population is harming the environment?<br/>
            2. What are invasive species? Why are they able to do so much damage?<br/>
            3. What is over-consumption?<br/>
            4. What was the prediction made about world population in SciShow’s early episode on Overpopulation?<br/>
            5. What will happen to the size of the human population by 2100?<br/>
            6. What is Total Fertility Rate? What has been happening to this number since the 1960s and why?<br/>
            7. What is happening to Total Fertility Rate in Africa? Why does that affect the future prediction of
            population?<br/>
            8. How could the average woman give birth to 0.8 children in her lifetime in Singapore? (What is 0.8
            child?)<br/>
            9. Why is Africa’s total fertility rate relatively high?<br/>
            10. How many people are predicted to live in sub-Saharan Africa by 2100?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener144} value={sci7Essay144}/>

          <span className="days">LESSON 145 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.12/primary/lesson/future-human-population-growth-ms-es"
              rel="noreferrer" target="_blank"> 17.12 Future Human Population Growth </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the human population exceed the natural carrying capacity of a region for humans?<br/>
            2. Are we exceeding the carrying capacity of the entire planet?<br/>
            3. Where is the human population growing the most? Where is it growing the least or not growing?<br/>
            4. Why does the population graph level out and then decline a bit? Is that pattern certain? What
            is it based on?<br/>
            5. What other population growth patterns are possible?<br/>
            6. How many people will Earth need to support by 2050?<br/>
            7. How come there will be so many?<br/>
            8. Where will most of the population growth occur?<br/>
            9. Which country's population will shrink?<br/>
            10. What country's population will triple?<br/>
            11. In terms of economic stability, where will most of the population growth be?<br/>
            12. What kept our population in check in the past?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener145} value={sci7Essay145}/>

          <span className="days">LESSON 146 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/17.13/primary/lesson/sustainable-development-ms-es"
              rel="noreferrer" target="_blank"> 17.13 Sustainable Development </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit49-5292199/"
            rel="noreferrer" target="_blank"> Evolution and Populations: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How can population growth be decreased?<br/>
            2. What are the goals of sustainable development?<br/>
            3. What are some ways that you and your family can live more sustainably?<br/>
            4. Explain sustainable development.<br/>
            5. What are renewable energy sources?<br/>
            6. Why aren't fossil fuels sustainable sources of energy?<br/>
            7. Why didn't the United States sign the Kyoto treaty?<br/>
            8. List examples of renewable energy sources.<br/>
            9. What can we do to reduce our carbon footprint?<br/>
            10. How can we reduce the demand for fossil fuels?<br/>
            11. What was your score on Evolution and Populations: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener146} value={sci7Essay146}/>

          <span className="days">LESSON 147 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.1/primary/lesson/biological-communities-ms-es"
              rel="noreferrer" target="_blank"> 18.1 Biological Communities </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define species, population, community, niche, habitat, biotic factor, and abiotic factor.<br/>
            2. Compare a lion and a deer. Which biotic and abiotic factors that each of these animals needs to live
            are the same?<br/>
            3. Which biotic and abiotic factors are different between a lion and a deer?<br/>
            4. What are the biotic components of an ecosystem?<br/>
            5. What is a species?<br/>
            6. What is a population?<br/>
            7. List two examples of populations.<br/>
            8. What is a community?<br/>
            9. What is different between the size of an ecosystem and the size of a natural community?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener147} value={sci7Essay147}/>

          <span className="days">LESSON 148 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.2/primary/lesson/roles-in-an-ecosystem-ms-es"
              rel="noreferrer" target="_blank"> 18.2 Roles in an Ecosystem </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are consumers? What are the three types of consumers and what do they eat?<br/>
            2. Compare and contrast photosynthesis and chemosynthesis.<br/>
            3. What role do decomposers play in an ecosystem? What would happen if there were no
            decomposers?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener148} value={sci7Essay148}/>

          <span className="days">LESSON 149 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.3/primary/lesson/flow-of-energy-in-ecosystems-ms-es"
              rel="noreferrer" target="_blank"> 18.3 Flow of Energy in Ecosystems </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does a food chain depict?<br/>
            2. Why do scientists usually use a food web instead of a food chain?<br/>
            3. Start with the Sun. Describe what happens to energy as it moves through ecosystems.<br/>
            4. What do all organisms require?<br/>
            5. What provides the energy required by the ecosystem?<br/>
            6. How is energy transferred from one organism to another?<br/>
            7. How is some of the energy lost?<br/>
            8. How do nutrients move through an ecosystem?<br/>
            9. How does the movement of energy and nutrients differ in ecosystems?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener149} value={sci7Essay149}/>

          <span className="days">LESSON 150 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.4/primary/lesson/flow-of-matter-in-ecosystems-ms-es"
              rel="noreferrer" target="_blank"> 18.4 Flow of Matter in Ecosystems </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the flow of matter differ from the flow of energy through an ecosystem?<br/>
            2. How do nutrients move through an ecosystem?<br/>
            3. What would happen to life on Earth if there were no decomposers? Why?<br/>
            4. What form does carbon take in the atmosphere?<br/>
            5. What do producers do with carbon?<br/>
            6. What happens to the carbon in stored in leaves?<br/>
            7. Once the carbon is on the ground, where can it be stored?<br/>
            8. Where is the carbon in a temperate, deciduous forest?<br/>
            9. Where is the carbon in a rainforest?<br/>
            10. Where is the carbon in the frigid Arctic?<br/>
            11. How much is in biomass?<br/>
            12. How does methane form in a peat bog?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener150} value={sci7Essay150}/>

          <span className="days">LESSON 151 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.5/primary/lesson/nitrogen-cycle-in-ecosystems-ms-es"
              rel="noreferrer" target="_blank"> 18.5 Nitrogen Cycle in Ecosystems </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit50-5292199/"
            rel="noreferrer" target="_blank"> Ecosystems: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is nitrogen fixing?<br/>
            2. Why is nitrogen fixing important?<br/>
            3. How do dead zones come about?<br/>
            4. Why does the Gulf of Mexico contain such a large dead zone?<br/>
            5. What percentage of the air is nitrogen?<br/>
            6. How is nitrogen removed from the air?<br/>
            7. What contributes nitrogen to the soil?<br/>
            8. What happens to soil nitrites?<br/>
            9. How is nitrogen released from the soil?<br/>
            10. Why is this called the nitrogen cycle?<br/>
            11. What was your score on Ecosystems: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener151} value={sci7Essay151}/>

          <span className="days">LESSON 152 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.6/primary/lesson/fresh-water-ecosystems-ms-es"
              rel="noreferrer" target="_blank"> 18.6 Fresh Water Ecosystems </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast the zones found in lakes.<br/>
            2. For many decades, people drained wetlands. Was this a good idea or a bad idea? Why?<br/>
            3. Compare and contrast the three main types of wetlands.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener152} value={sci7Essay152}/>

          <span className="days">LESSON 153 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.7/primary/lesson/types-of-marine-organisms-ms-es"
              rel="noreferrer" target="_blank"> 18.7 Types of Marine Organisms </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast phytoplankton and zooplankton.<br/>
            2. How are nekton adapted to life in the sea?<br/>
            3. How are benthos adapted to life in the sea?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener153} value={sci7Essay153}/>

          <span className="days">LESSON 154 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.8/primary/lesson/marine-food-chains-ms-es"
              rel="noreferrer" target="_blank"> 18.8 Marine Food Chains </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast the two types of primary production discussed here.<br/>
            2. What is a typical marine food chain like?<br/>
            3. What is the role of decomposers in a marine food chain?<br/>
            4. Why are fish valuable?<br/>
            5. What are primary producers?<br/>
            6. What is chemosynthesis?<br/>
            7. What is photosynthesis?<br/>
            8. What are the primary producers of the ocean? Which gas do they use and which do they release into the
            atmosphere?<br/>
            9. Why are the primary producers of the ocean important?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener154} value={sci7Essay154}/>

          <span className="days">LESSON 155 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/18.9/primary/lesson/ocean-ecosystems-ms-es"
              rel="noreferrer" target="_blank"> 18.9 Ocean Ecosystems </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit51-5292199/"
            rel="noreferrer" target="_blank"> Ecosystems: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is there so much biodiversity in the intertidal zone?<br/>
            2. Why is survival in the deep ocean difficult? To do this, what adaptations do organisms have?<br/>
            3. What is different about the hydrothermal vent ecosystem from a surface ocean ecosystem?<br/>
            4. What is the intertidal zone?<br/>
            5. What do organisms in an intertidal zone have to deal with each day?<br/>
            6. What is zonation?<br/>
            7. What adaptation to the algae of the mid-tidal zone have to being exposed to air about half the
            day?<br/>
            8. How have some of the organisms in the intertidal zone adapted to life there?<br/>
            9. Why is the deep sea not well explored?<br/>
            10. What is the epipelagic zone? Which organisms live there?<br/>
            11. What is the mesopelagic zone? Which organisms live there?<br/>
            12. What color are most of the animals in this zone and why?<br/>
            13. What is bioluminescence?<br/>
            14. What is the deep scattering layer?<br/>
            15. What was your score on Ecosystems: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener155} value={sci7Essay155}/>

          <span className="days">LESSON 156 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.1/primary/lesson/evolution-of-simple-cells-ms-es"
              rel="noreferrer" target="_blank"> 19.1 Evolution of Simple Cells </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the features of prokaryotes.<br/>
            2. Why was the development of photosynthesis so important to the evolution of life?<br/>
            3. What do we know about the first life forms?<br/>
            4. What are cyanobacteria?<br/>
            5. When did cyanobacteria dominate Earth?<br/>
            6. How are the features of a prokaryotic cell?<br/>
            7. What are cyanobacteria responsible for?<br/>
            8. Where are cyanobacteria found?<br/>
            9. What are stromatolites?<br/>
            10. How do we know that stromatolites flourished early in Earth history?<br/>
            11. What is a heterocyst? What does it do?<br/>
            12. What is an akinete? What is its function?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener156} value={sci7Essay156}/>

          <span className="days">LESSON 157 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.2/primary/lesson/evolution-of-eukaryotes-to-multicellular-life-ms-es"
              rel="noreferrer" target="_blank"> 19.2 Evolution of Eukaryotes to Multicellular Life </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe eukaryotic cells.<br/>
            2. Why are organelles important to cells?<br/>
            3. Describe the Ediacara fauna.<br/>
            4. What were the first life forms on Earth?<br/>
            5. What is the origin of multicellular organisms?<br/>
            6. What three traits are needed for a group of cells to be considered a multicellular life form?<br/>
            7. How many branches of complex organisms are there projected to be?<br/>
            8. What is the oldest multicellular life fossil found?<br/>
            9. What is necessary for all life that we know of?<br/>
            10. What do scientists look for when looking for life on Earth?<br/>
            11. What needed to happen for cells living in colonies to become multicellular organisms?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener157} value={sci7Essay157}/>

          <span className="days">LESSON 158 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.3/primary/lesson/life-of-the-phanerozoic-eon-ms-es"
              rel="noreferrer" target="_blank"> 19.3 Life of the Phanerozoic Eon </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. When did the Phanerozoic begin? When did it end?<br/>
            2. What are some of the major events that have occurred in the Phanerozoic?<br/>
            3. What eras make up the Phanerozoic?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener158} value={sci7Essay158}/>

          <span className="days">LESSON 159 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.4/primary/lesson/history-of-paleozoic-life-ms-es"
              rel="noreferrer" target="_blank"> 19.4 History of Paleozoic Life </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What evolved during the Cambrian that was important for the evolution of life and what is its
            purpose?<br/>
            2. What does a sea creature need to have if it's going to colonize the land?<br/>
            3. What brought about the Permian extinction?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener159} value={sci7Essay159}/>

          <span className="days">LESSON 160 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.5/primary/lesson/history-of-mesozoic-life-ms-es"
              rel="noreferrer" target="_blank"> 19.5 History of Mesozoic Life </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did life in the Mesozoic resemble life today? How did it differ from life today?<br/>
            2. What was the importance of the amniote egg for Mesozoic life?<br/>
            3. How are dinosaurs and modern birds related?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener160} value={sci7Essay160}/>

          <span className="days">LESSON 161 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.6/primary/lesson/history-of-cenozoic-life-ms-es"
              rel="noreferrer" target="_blank"> 19.6 History of Cenozoic Life </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the Pleistocene megafauna, and why were they so large?<br/>
            2. What characteristics do mammals have that allow them to fill so many niches and what do each of those
            things do?<br/>
            3. List some of the types of mammals and state how they live.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener161} value={sci7Essay161}/>

          <span className="days">LESSON 162 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.7/primary/lesson/human-evolution-ms-es"
              rel="noreferrer" target="_blank"> 19.7 Human Evolution </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is being bipedal a good thing?<br/>
            2. What is the evidence that humans evolved from apes?<br/>
            3. Why are the ice ages important for the spread of modern humans?<br/>
            4. What was Darwin's little heresy?<br/>
            5. What was "the missing link" thought to be?<br/>
            6. Why weren't the Neanderthal and Homo erectus fossils that were found thought to be the missing
            link?<br/>
            7. What was the problem with the fossil evidence from Africa? What was found to be incorrect and why?<br/>
            8. Why is it difficult to identify whether an apelike fossil is a direct human ancestor or not?<br/>
            9. List the traits that separate humans from apes.<br/>
            10. Why did the DNA of humans and apes seem as if they did not share a common evolutionary
            ancestor? How was that resolved?<br/>
            11. When was the last common ancestor between chimps and humans? When was the last between
            Neanderthal and humans?<br/>
            12. What is the scientific evidence for the creation of humans by a deity?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener162} value={sci7Essay162}/>

          <span className="days">LESSON 163 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/19.8/primary/lesson/life-and-the-geologic-time-scale-ms-es"
              rel="noreferrer" target="_blank"> 19.8 Life and the Geologic Time Scale </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit52-5292199/"
            rel="noreferrer" target="_blank"> History of Life on Earth: Challenge </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do we not know exactly when life first evolved on Earth?<br/>
            2. When did life become abundant?<br/>
            3. Where do humans appear in this graphic? Is that where you would expect them to be?<br/>
            4. What was your score on History of Life on Earth: Challenge? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener163} value={sci7Essay163}/>

          <span className="days">LESSON 164 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/20.1/primary/lesson/introduction-to-energy-resources-ms-es"
              rel="noreferrer" target="_blank"> 20.1 Energy Resources </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is energy?<br/>
            2. What does it mean to say that energy changes matter from one state to another?<br/>
            3. What are fuel and heat?<br/>
            4. Where does the lamp in the room you're in now get its energy?<br/>
            5. What is energy? Where is energy? Where is energy in the universe?<br/>
            6. Define energy. What do you apply?<br/>
            7. Where do you get your energy? What type of energy is that?<br/>
            8. What type of energy does a log have? What happens if you add heat to the log?<br/>
            9. What is nuclear energy? What would happen if you could release the nuclear energy in a log?<br/>
            10. What is the same thing as energy?<br/>
            11. What does dark energy do?<br/>
            12. Where does energy go? How is it created? What happens to energy? What is the universe
            in terms of energy?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener164} value={sci7Essay164}/>

          <span className="days">LESSON 165 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/20.2/primary/lesson/obtaining-energy-resources-hs-es"
              rel="noreferrer" target="_blank"> 20.2 Obtaining Energy Resources </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast net energy, the net-energy ratio, and energy efficiency.<br/>
            2. Since the net-energy ratio for solar energy is higher than other types of energy, why don't we use
            solar for electricity almost exclusively?<br/>
            3. Why would the energy needed to make a type of energy useful increase or decrease? In other words,
            why would the net-energy ratio change?<br/>
            4. Besides energy, what is lost when energy drips away?<br/>
            5. Why should you replace incandescent bulbs with CFLS?<br/>
            6. Why is it good to plug electronics into a power strip?<br/>
            7. Why should you use a programmable thermostat?<br/>
            8. What is the purpose of insulation?<br/>
            9. Why is an old appliance an energy sink?<br/>
            10. If you did these things, how much money would you save in a decade on average (in Minnesota)?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener165} value={sci7Essay165}/>

          <span className="days">LESSON 166 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/20.3/primary/lesson/energy-conservation-ms-es"
              rel="noreferrer" target="_blank"> 20.3 Energy Conservation </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast potential energy and kinetic energy.<br/>
            2. What does it mean to say that energy cannot be created or destroyed.<br/>
            3. Think about riding a bike up and down a hill. Where does energy change form in each step of the process
            and what type is each?<br/>
            4. What types of energy is released when a light bulb is turned on?<br/>
            5. What types of energy are involved in a baseball being hit by a bat?<br/>
            6. What types of energy are involved in releasing an arrow from a bow?<br/>
            7. What types of energy involved in making electricity?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener166} value={sci7Essay166}/>

          <span className="days">LESSON 167 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/20.4/primary/lesson/renewable-vs-non-renewable-energy-resources-ms-es"
              rel="noreferrer" target="_blank"> 20.4 Renewable vs. Nonrenewable Energy Resources </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a renewable resource? Give three examples.<br/>
            2. What is a non-renewable resource? Give three examples.<br/>
            3. Can a renewable resource become non-renewable?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener167} value={sci7Essay167}/>

          <span className="days">LESSON 168 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.1/primary/lesson/materials-humans-use-ms-es"
              rel="noreferrer" target="_blank"> 21.1 Materials Humans Use </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are natural resources?<br/>
            2. Is clean air a natural resource? Why or why not?<br/>
            3. What natural resources are important to you?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener168} value={sci7Essay168}/>

          <span className="days">LESSON 169 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.2/primary/lesson/renewable-vs.-non-renewable-resources-ms-es"
              rel="noreferrer" target="_blank"> 21.2 Renewable vs. Nonrenewable Resources </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a renewable resource?<br/>
            2. What is a non-renewable resource?<br/>
            3. How might a resource go from being renewable to non-renewable?<br/>
            4. What are the down sides of fossil fuel use?<br/>
            5. What are some of the sources of renewable energy that we could use? How much of our electricity do
            they account for now?<br/>
            6. What is a space based solar panel farm? Why would it be useful?<br/>
            7. Where do we use solar panels now? Where could we use them in the future?<br/>
            8. What are the two good things that solar panels over water reservoirs do?<br/>
            9. Explain what is expected to happen in the tallest water-solar tower that is being talked about for the
            Arizona desert.<br/>
            10. What is fusion energy? What is the earliest that a fusion plant might come online?<br/>
            11. How are fossil fuels related to nuclear fusion?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener169} value={sci7Essay169}/>

          <span className="days">LESSON 170 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.3/primary/lesson/ore-deposits-ms-es"
              rel="noreferrer" target="_blank"> 21.3 Ore Deposits </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How can an ore deposit become unprofitable to mine?<br/>
            2. How do geologists find an ore deposit?<br/>
            3. How do geologists determine the size and concentration of ore?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener170} value={sci7Essay170}/>

          <span className="days">LESSON 171 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.4/primary/lesson/mining-ores-ms-es"
              rel="noreferrer" target="_blank"> 21.4 Ore Mines </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What separates surface from underground mining? Which technique do you think is more
            expensive? More dangerous?<br/>
            2. How is a placer deposit mined?<br/>
            3. Why are some ore deposits mined by mountaintop removal?<br/>
            4. Where is iron usually found?<br/>
            5. What is iron ore?<br/>
            6. How do we get to the ore?<br/>
            7. What is overburden?<br/>
            8. What happens to the ore after it is dug up?<br/>
            9. What steps does it go through from the blast furnace to the steel that creates your refrigerator?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener171} value={sci7Essay171}/>

          <span className="days">LESSON 172 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.5/primary/lesson/extracting-ores-ms-es"
              rel="noreferrer" target="_blank"> 21.5 Ore Extraction </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit56-5292199/"
            rel="noreferrer" target="_blank"> Earth's Materials: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why does ore need to be extracted from rock?<br/>
            2. How is ore extracted from rock?<br/>
            3. Why does extracting ore from rock take a lot of energy?<br/>
            4. What was your score on Earth's Materials: Challenge 1? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener172} value={sci7Essay172}/>

          <span className="days">LESSON 173 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.6/primary/lesson/environmental-impacts-of-mining-ms-es"
              rel="noreferrer" target="_blank"> 21.6 Environmental Impacts of Mining </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What damage may be caused by mining?<br/>
            2. Why is sediment considered a problem in mined areas?<br/>
            3. How is the region where there is a surface mine reclaimed?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener173} value={sci7Essay173}/>

          <span className="days">LESSON 174 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.7/primary/lesson/hazardous-waste-ms-es"
              rel="noreferrer" target="_blank"> 21.7 Hazardous Waste </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is hazardous waste?<br/>
            2. What are the types of hazardous waste?<br/>
            3. Look around your home and garage, if you have one. Name some materials that are toxic.<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener174} value={sci7Essay174}/>

          <span className="days">LESSON 175 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.8/primary/lesson/preventing-hazardous-waste-problems-ms-es"
              rel="noreferrer" target="_blank"> 21.8 Preventing Hazardous Waste Problems </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit57-5292199/"
            rel="noreferrer" target="_blank"> Earth's Materials: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do the Superfund Act and other government regulations prevent lands from being contaminated?<br/>
            2. What can you do to prevent or lessen the generation of hazardous wastes?<br/>
            3. How should you dispose of toxic wastes?<br/>
            4. What was your score on Earth's Materials: Challenge 2? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener175} value={sci7Essay175}/>

          <span className="days">LESSON 176 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.9/primary/lesson/availability-of-natural-resources-ms-es"
              rel="noreferrer" target="_blank"> 21.9 Availability of Natural Resources </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What factors affect resource availability?<br/>
            2. Why is politics important in the availability of resources?<br/>
            3. Why do some nations consume more goods than others?<br/>
            4. What is e-waste?<br/>
            5. What is happening to the amount of e-waste being produced?<br/>
            6. Why is there so much e-waste now?<br/>
            7. Where does the e-waste come from?<br/>
            8. What needs to be done to improve the problem with e-waste?<br/>
            9. What should you do if you want to recycle a piece of electronics?<br/>
            10. How can you reduce your e-waste?<br/>
            11. What is the positive trend? What is the negative trend from that?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener176} value={sci7Essay176}/>

          <span className="days">LESSON 177 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/21.10/primary/lesson/natural-resource-conservation-ms-es"
              rel="noreferrer" target="_blank"> 21.10 Natural Resource Conservation </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit58-5292199/"
            rel="noreferrer" target="_blank"> Earth's Materials: Challenge 3 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is conservation a good thing?<br/>
            2. What are the three R's? What do they mean?<br/>
            3. Give an example of each of the three R's that you could do in your own life.<br/>
            4. In a computer, where is silver and copper? Where is gold?<br/>
            5. What do these precious metals do in a computer?<br/>
            6. How are precious metals retrieved from an old computer?<br/>
            7. How is the gold separated from a microprocessor?<br/>
            8. What does this gold become?<br/>
            9. Why is the metal in other computer parts harder to recycle?<br/>
            10. How do positive and negative charges help to recycle the metal?<br/>
            11. How are gold salts created?<br/>
            12. Are all of the metals used again in computers? What else could these metals be used for?<br/>
            13. What do satellites and the space shuttle use gold for?<br/>
            14. What was your score on Earth's Materials: Challenge 3? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener177} value={sci7Essay177}/>

          <span className="days">LESSON 178 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/22.1/primary/lesson/sun-ms-es"
              rel="noreferrer" target="_blank"> 22.1 Sun </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the major properties of the Sun?<br/>
            2. Where is the Sun located?<br/>
            3. Why is the Sun important to life on Earth?<br/>
            4. Why is it that you can't see the star closest to Earth in the night sky?<br/>
            5. Where is the Sun located?<br/>
            6. Why is our Sun special? Is it a special type of star?<br/>
            7. What is the structure of the solar system from the center to the farthest reaches?<br/>
            8. Which type of solar system bodies come from the farthest part of the solar system?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener178} value={sci7Essay178}/>

          <span className="days">LESSON 179 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/22.2/primary/lesson/interior-of-the-sun-ms-es"
              rel="noreferrer" target="_blank"> 22.2 Interior of the Sun </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the properties of the core?<br/>
            2. What is plasma?<br/>
            3. What powers the Sun?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener179} value={sci7Essay179}/>

          <span className="days">LESSON 180 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/22.3/primary/lesson/outer-layers-of-the-sun-ms-es"
              rel="noreferrer" target="_blank"> 22.3 Outer Layers of the Sun </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What layer of the Sun do you see during a total solar eclipse?<br/>
            2. What are the distinctive characteristics of the photosphere?<br/>
            3. What are the distinctive characteristics of the chromosphere?<br/>
            4. What is the corona?<br/></p>
          <textarea className="textArea" onChange={onChangeSci7Listener180} value={sci7Essay180}/>

          <span className="days">LESSON 181 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/22.4/primary/lesson/surface-features-of-the-sun-ms-es"
              rel="noreferrer" target="_blank"> 22.4 Surface Features of the Sun </a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-earth-science-flexbook-2.0/section/unittest/Test-for-ESC-Unit59-5292199/"
            rel="noreferrer" target="_blank"> The Solar System: Challenge 1 </a></p>

          <p className="lessons">Answer the questions below. <br/>
            1. What are sunspots? What is a sunspot cycle?<br/>
            2. How are solar prominences related to sunspots?<br/>
            3. What is being learned from the Solar Dynamics Observatory?<br/>
            8. What was your score on the The Solar System: Challenge 1? <br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci7Listener181} value={sci7Essay181}/>
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 7th Grade Earth Science! </h3>
    </form>

  )
}
export default Science7Component