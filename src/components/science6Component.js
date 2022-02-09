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

const Science6Component = ({ data }) => {

  // Local Storage
  const [sci6Essay1, setsci6Essay1] = useLocalStorageState("sci6Essay1", "")
  const [sci6Essay2, setsci6Essay2] = useLocalStorageState("sci6Essay2", "")
  const [sci6Essay3, setsci6Essay3] = useLocalStorageState("sci6Essay3", "")
  const [sci6Essay4, setsci6Essay4] = useLocalStorageState("sci6Essay4", "")
  const [sci6Essay5, setsci6Essay5] = useLocalStorageState("sci6Essay5", "")
  const [sci6Essay6, setsci6Essay6] = useLocalStorageState("sci6Essay6", "")
  const [sci6Essay7, setsci6Essay7] = useLocalStorageState("sci6Essay7", "")
  const [sci6Essay8, setsci6Essay8] = useLocalStorageState("sci6Essay8", "")
  const [sci6Essay9, setsci6Essay9] = useLocalStorageState("sci6Essay9", "")
  const [sci6Essay10, setsci6Essay10] = useLocalStorageState("sci6Essay10", "")
  const [sci6Essay11, setsci6Essay11] = useLocalStorageState("sci6Essay11", "")
  const [sci6Essay12, setsci6Essay12] = useLocalStorageState("sci6Essay12", "")
  const [sci6Essay13, setsci6Essay13] = useLocalStorageState("sci6Essay13", "")
  const [sci6Essay14, setsci6Essay14] = useLocalStorageState("sci6Essay14", "")
  const [sci6Essay15, setsci6Essay15] = useLocalStorageState("sci6Essay15", "")
  const [sci6Essay16, setsci6Essay16] = useLocalStorageState("sci6Essay16", "")
  const [sci6Essay17, setsci6Essay17] = useLocalStorageState("sci6Essay17", "")
  const [sci6Essay18, setsci6Essay18] = useLocalStorageState("sci6Essay18", "")
  const [sci6Essay19, setsci6Essay19] = useLocalStorageState("sci6Essay19", "")
  const [sci6Essay20, setsci6Essay20] = useLocalStorageState("sci6Essay20", "")
  const [sci6Essay21, setsci6Essay21] = useLocalStorageState("sci6Essay21", "")
  const [sci6Essay22, setsci6Essay22] = useLocalStorageState("sci6Essay22", "")
  const [sci6Essay23, setsci6Essay23] = useLocalStorageState("sci6Essay23", "")
  const [sci6Essay24, setsci6Essay24] = useLocalStorageState("sci6Essay24", "")
  const [sci6Essay25, setsci6Essay25] = useLocalStorageState("sci6Essay25", "")
  const [sci6Essay26, setsci6Essay26] = useLocalStorageState("sci6Essay26", "")
  const [sci6Essay27, setsci6Essay27] = useLocalStorageState("sci6Essay27", "")
  const [sci6Essay28, setsci6Essay28] = useLocalStorageState("sci6Essay28", "")
  const [sci6Essay29, setsci6Essay29] = useLocalStorageState("sci6Essay29", "")
  const [sci6Essay30, setsci6Essay30] = useLocalStorageState("sci6Essay30", "")
  const [sci6Essay31, setsci6Essay31] = useLocalStorageState("sci6Essay31", "")
  const [sci6Essay32, setsci6Essay32] = useLocalStorageState("sci6Essay32", "")
  const [sci6Essay33, setsci6Essay33] = useLocalStorageState("sci6Essay33", "")
  const [sci6Essay34, setsci6Essay34] = useLocalStorageState("sci6Essay34", "")
  const [sci6Essay35, setsci6Essay35] = useLocalStorageState("sci6Essay35", "")
  const [sci6Essay36, setsci6Essay36] = useLocalStorageState("sci6Essay36", "")
  const [sci6Essay37, setsci6Essay37] = useLocalStorageState("sci6Essay37", "")
  const [sci6Essay38, setsci6Essay38] = useLocalStorageState("sci6Essay38", "")
  const [sci6Essay39, setsci6Essay39] = useLocalStorageState("sci6Essay39", "")
  const [sci6Essay40, setsci6Essay40] = useLocalStorageState("sci6Essay40", "")
  const [sci6Essay41, setsci6Essay41] = useLocalStorageState("sci6Essay41", "")
  const [sci6Essay42, setsci6Essay42] = useLocalStorageState("sci6Essay42", "")
  const [sci6Essay43, setsci6Essay43] = useLocalStorageState("sci6Essay43", "")
  const [sci6Essay44, setsci6Essay44] = useLocalStorageState("sci6Essay44", "")
  const [sci6Essay45, setsci6Essay45] = useLocalStorageState("sci6Essay45", "")
  const [sci6Essay46, setsci6Essay46] = useLocalStorageState("sci6Essay46", "")
  const [sci6Essay47, setsci6Essay47] = useLocalStorageState("sci6Essay47", "")
  const [sci6Essay48, setsci6Essay48] = useLocalStorageState("sci6Essay48", "")
  const [sci6Essay49, setsci6Essay49] = useLocalStorageState("sci6Essay49", "")
  const [sci6Essay50, setsci6Essay50] = useLocalStorageState("sci6Essay50", "")
  const [sci6Essay51, setsci6Essay51] = useLocalStorageState("sci6Essay52", "")
  const [sci6Essay52, setsci6Essay52] = useLocalStorageState("sci6Essay53", "")
  const [sci6Essay53, setsci6Essay53] = useLocalStorageState("sci6Essay54", "")
  const [sci6Essay54, setsci6Essay54] = useLocalStorageState("sci6Essay54", "")
  const [sci6Essay55, setsci6Essay55] = useLocalStorageState("sci6Essay5", "")
  const [sci6Essay56, setsci6Essay56] = useLocalStorageState("sci6Essay56", "")
  const [sci6Essay57, setsci6Essay57] = useLocalStorageState("sci6Essay57", "")
  const [sci6Essay58, setsci6Essay58] = useLocalStorageState("sci6Essay58", "")
  const [sci6Essay59, setsci6Essay59] = useLocalStorageState("sci6Essay59", "")
  const [sci6Essay60, setsci6Essay60] = useLocalStorageState("sci6Essay60", "")
  const [sci6Essay61, setsci6Essay61] = useLocalStorageState("sci6Essay61", "")
  const [sci6Essay62, setsci6Essay62] = useLocalStorageState("sci6Essay62", "")
  const [sci6Essay63, setsci6Essay63] = useLocalStorageState("sci6Essay63", "")
  const [sci6Essay64, setsci6Essay64] = useLocalStorageState("sci6Essay64", "")
  const [sci6Essay65, setsci6Essay65] = useLocalStorageState("sci6Essay65", "")
  const [sci6Essay66, setsci6Essay66] = useLocalStorageState("sci6Essay66", "")
  const [sci6Essay67, setsci6Essay67] = useLocalStorageState("sci6Essay67", "")
  const [sci6Essay68, setsci6Essay68] = useLocalStorageState("sci6Essay68", "")
  const [sci6Essay69, setsci6Essay69] = useLocalStorageState("sci6Essay69", "")
  const [sci6Essay70, setsci6Essay70] = useLocalStorageState("sci6Essay70", "")
  const [sci6Essay71, setsci6Essay71] = useLocalStorageState("sci6Essay71", "")
  const [sci6Essay72, setsci6Essay72] = useLocalStorageState("sci6Essay72", "")
  const [sci6Essay73, setsci6Essay73] = useLocalStorageState("sci6Essay73", "")
  const [sci6Essay74, setsci6Essay74] = useLocalStorageState("sci6Essay74", "")
  const [sci6Essay75, setsci6Essay75] = useLocalStorageState("sci6Essay75", "")
  const [sci6Essay76, setsci6Essay76] = useLocalStorageState("sci6Essay76", "")
  const [sci6Essay77, setsci6Essay77] = useLocalStorageState("sci6Essay77", "")
  const [sci6Essay78, setsci6Essay78] = useLocalStorageState("sci6Essay78", "")
  const [sci6Essay79, setsci6Essay79] = useLocalStorageState("sci6Essay79", "")
  const [sci6Essay80, setsci6Essay80] = useLocalStorageState("sci6Essay80", "")
  const [sci6Essay81, setsci6Essay81] = useLocalStorageState("sci6Essay81", "")
  const [sci6Essay82, setsci6Essay82] = useLocalStorageState("sci6Essay82", "")
  const [sci6Essay83, setsci6Essay83] = useLocalStorageState("sci6Essay83", "")
  const [sci6Essay84, setsci6Essay84] = useLocalStorageState("sci6Essay84", "")
  const [sci6Essay85, setsci6Essay85] = useLocalStorageState("sci6Essay85", "")
  const [sci6Essay86, setsci6Essay86] = useLocalStorageState("sci6Essay86", "")
  const [sci6Essay87, setsci6Essay87] = useLocalStorageState("sci6Essay87", "")
  const [sci6Essay88, setsci6Essay88] = useLocalStorageState("sci6Essay88", "")
  const [sci6Essay89, setsci6Essay89] = useLocalStorageState("sci6Essay89", "")
  const [sci6Essay90, setsci6Essay90] = useLocalStorageState("sci6Essay90", "")
  const [sci6Essay91, setsci6Essay91] = useLocalStorageState("sci6Essay91", "")
  const [sci6Essay92, setsci6Essay92] = useLocalStorageState("sci6Essay93", "")
  const [sci6Essay93, setsci6Essay93] = useLocalStorageState("sci6Essay94", "")
  const [sci6Essay94, setsci6Essay94] = useLocalStorageState("sci6Essay95", "")
  const [sci6Essay95, setsci6Essay95] = useLocalStorageState("sci6Essay96", "")
  const [sci6Essay96, setsci6Essay96] = useLocalStorageState("sci6Essay97", "")
  const [sci6Essay97, setsci6Essay97] = useLocalStorageState("sci6Essay98", "")
  const [sci6Essay98, setsci6Essay98] = useLocalStorageState("sci6Essay98", "")
  const [sci6Essay99, setsci6Essay99] = useLocalStorageState("sci6Essay99", "")
  const [sci6Essay100, setsci6Essay100] = useLocalStorageState("sci6Essay100", "")
  const [sci6Essay101, setsci6Essay101] = useLocalStorageState("sci6Essay101", "")
  const [sci6Essay102, setsci6Essay102] = useLocalStorageState("sci6Essay102", "")
  const [sci6Essay103, setsci6Essay103] = useLocalStorageState("sci6Essay103", "")
  const [sci6Essay104, setsci6Essay104] = useLocalStorageState("sci6Essay104", "")
  const [sci6Essay105, setsci6Essay105] = useLocalStorageState("sci6Essay105", "")
  const [sci6Essay106, setsci6Essay106] = useLocalStorageState("sci6Essay106", "")
  const [sci6Essay107, setsci6Essay107] = useLocalStorageState("sci6Essay107", "")
  const [sci6Essay108, setsci6Essay108] = useLocalStorageState("sci6Essay108", "")
  const [sci6Essay109, setsci6Essay109] = useLocalStorageState("sci6Essay109", "")
  const [sci6Essay110, setsci6Essay110] = useLocalStorageState("sci6Essay110", "")
  const [sci6Essay111, setsci6Essay111] = useLocalStorageState("sci6Essay111", "")
  const [sci6Essay112, setsci6Essay112] = useLocalStorageState("sci6Essay112", "")
  const [sci6Essay113, setsci6Essay113] = useLocalStorageState("sci6Essay113", "")
  const [sci6Essay114, setsci6Essay114] = useLocalStorageState("sci6Essay114", "")
  const [sci6Essay115, setsci6Essay115] = useLocalStorageState("sci6Essay115", "")
  const [sci6Essay116, setsci6Essay116] = useLocalStorageState("sci6Essay116", "")
  const [sci6Essay117, setsci6Essay117] = useLocalStorageState("sci6Essay117", "")
  const [sci6Essay118, setsci6Essay118] = useLocalStorageState("sci6Essay118", "")
  const [sci6Essay119, setsci6Essay119] = useLocalStorageState("sci6Essay119", "")
  const [sci6Essay120, setsci6Essay120] = useLocalStorageState("sci6Essay120", "")
  const [sci6Essay121, setsci6Essay121] = useLocalStorageState("sci6Essay121", "")
  const [sci6Essay122, setsci6Essay122] = useLocalStorageState("sci6Essay122", "")
  const [sci6Essay123, setsci6Essay123] = useLocalStorageState("sci6Essay123", "")
  const [sci6Essay124, setsci6Essay124] = useLocalStorageState("sci6Essay124", "")
  const [sci6Essay125, setsci6Essay125] = useLocalStorageState("sci6Essay125", "")
  const [sci6Essay126, setsci6Essay126] = useLocalStorageState("sci6Essay126", "")
  const [sci6Essay127, setsci6Essay127] = useLocalStorageState("sci6Essay127", "")
  const [sci6Essay128, setsci6Essay128] = useLocalStorageState("sci6Essay128", "")
  const [sci6Essay129, setsci6Essay129] = useLocalStorageState("sci6Essay129", "")
  const [sci6Essay130, setsci6Essay130] = useLocalStorageState("sci6Essay130", "")
  const [sci6Essay131, setsci6Essay131] = useLocalStorageState("sci6Essay131", "")
  const [sci6Essay132, setsci6Essay132] = useLocalStorageState("sci6Essay132", "")
  const [sci6Essay133, setsci6Essay133] = useLocalStorageState("sci6Essay133", "")
  const [sci6Essay134, setsci6Essay134] = useLocalStorageState("sci6Essay134", "")
  const [sci6Essay135, setsci6Essay135] = useLocalStorageState("sci6Essay135", "")
  const [sci6Essay136, setsci6Essay136] = useLocalStorageState("sci6Essay136", "")
  const [sci6Essay137, setsci6Essay137] = useLocalStorageState("sci6Essay137", "")
  const [sci6Essay138, setsci6Essay138] = useLocalStorageState("sci6Essay138", "")
  const [sci6Essay139, setsci6Essay139] = useLocalStorageState("sci6Essay139", "")
  const [sci6Essay140, setsci6Essay140] = useLocalStorageState("sci6Essay140", "")
  const [sci6Essay141, setsci6Essay141] = useLocalStorageState("sci6Essay141", "")
  const [sci6Essay142, setsci6Essay142] = useLocalStorageState("sci6Essay142", "")
  const [sci6Essay143, setsci6Essay143] = useLocalStorageState("sci6Essay143", "")
  const [sci6Essay144, setsci6Essay144] = useLocalStorageState("sci6Essay144", "")
  const [sci6Essay145, setsci6Essay145] = useLocalStorageState("sci6Essay145", "")
  const [sci6Essay146, setsci6Essay146] = useLocalStorageState("sci6Essay146", "")
  const [sci6Essay147, setsci6Essay147] = useLocalStorageState("sci6Essay147", "")
  const [sci6Essay148, setsci6Essay148] = useLocalStorageState("sci6Essay148", "")
  const [sci6Essay149, setsci6Essay149] = useLocalStorageState("sci6Essay149", "")
  const [sci6Essay150, setsci6Essay150] = useLocalStorageState("sci6Essay150", "")
  const [sci6Essay151, setsci6Essay151] = useLocalStorageState("sci6Essay151", "")
  const [sci6Essay152, setsci6Essay152] = useLocalStorageState("sci6Essay152", "")
  const [sci6Essay153, setsci6Essay153] = useLocalStorageState("sci6Essay153", "")
  const [sci6Essay154, setsci6Essay154] = useLocalStorageState("sci6Essay154", "")
  const [sci6Essay155, setsci6Essay155] = useLocalStorageState("sci6Essay155", "")
  const [sci6Essay156, setsci6Essay156] = useLocalStorageState("sci6Essay156", "")
  const [sci6Essay157, setsci6Essay157] = useLocalStorageState("sci6Essay157", "")
  const [sci6Essay158, setsci6Essay158] = useLocalStorageState("sci6Essay158", "")
  const [sci6Essay159, setsci6Essay159] = useLocalStorageState("sci6Essay159", "")
  const [sci6Essay160, setsci6Essay160] = useLocalStorageState("sci6Essay160", "")
  const [sci6Essay161, setsci6Essay161] = useLocalStorageState("sci6Essay161", "")
  const [sci6Essay162, setsci6Essay162] = useLocalStorageState("sci6Essay162", "")
  const [sci6Essay163, setsci6Essay163] = useLocalStorageState("sci6Essay163", "")
  const [sci6Essay164, setsci6Essay164] = useLocalStorageState("sci6Essay164", "")
  const [sci6Essay165, setsci6Essay165] = useLocalStorageState("sci6Essay165", "")
  const [sci6Essay166, setsci6Essay166] = useLocalStorageState("sci6Essay166", "")
  const [sci6Essay167, setsci6Essay167] = useLocalStorageState("sci6Essay167", "")
  const [sci6Essay168, setsci6Essay168] = useLocalStorageState("sci6Essay168", "")
  const [sci6Essay169, setsci6Essay169] = useLocalStorageState("sci6Essay169", "")
  const [sci6Essay170, setsci6Essay170] = useLocalStorageState("sci6Essay170", "")
  const [sci6Essay171, setsci6Essay171] = useLocalStorageState("sci6Essay171", "")
  const [sci6Essay172, setsci6Essay172] = useLocalStorageState("sci6Essay172", "")
  const [sci6Essay173, setsci6Essay173] = useLocalStorageState("sci6Essay173", "")
  const [sci6Essay174, setsci6Essay174] = useLocalStorageState("sci6Essay174", "")
  const [sci6Essay175, setsci6Essay175] = useLocalStorageState("sci6Essay175", "")
  const [sci6Essay176, setsci6Essay176] = useLocalStorageState("sci6Essay176", "")
  const [sci6Essay177, setsci6Essay177] = useLocalStorageState("sci6Essay177", "")
  const [sci6Essay178, setsci6Essay178] = useLocalStorageState("sci6Essay178", "")
  const [sci6Essay179, setsci6Essay179] = useLocalStorageState("sci6Essay179", "")
  const [sci6Essay180, setsci6Essay180] = useLocalStorageState("sci6Essay180", "")
  const [sci6Essay181, setsci6Essay181] = useLocalStorageState("sci6Essay181", "")


  const onChangeSci6Listener1 = (event) => {
    setsci6Essay1(event.target.value)
  }
  const onChangeSci6Listener2 = (event) => {
    setsci6Essay2(event.target.value)
  }
  const onChangeSci6Listener3 = (event) => {
    setsci6Essay3(event.target.value)
  }
  const onChangeSci6Listener4 = (event) => {
    setsci6Essay4(event.target.value)
  }
  const onChangeSci6Listener5 = (event) => {
    setsci6Essay5(event.target.value)
  }
  const onChangeSci6Listener6 = (event) => {
    setsci6Essay6(event.target.value)
  }
  const onChangeSci6Listener7 = (event) => {
    setsci6Essay7(event.target.value)
  }
  const onChangeSci6Listener8 = (event) => {
    setsci6Essay8(event.target.value)
  }
  const onChangeSci6Listener9 = (event) => {
    setsci6Essay9(event.target.value)
  }
  const onChangeSci6Listener10 = (event) => {
    setsci6Essay10(event.target.value)
  }
  const onChangeSci6Listener11 = (event) => {
    setsci6Essay11(event.target.value)
  }
  const onChangeSci6Listener12 = (event) => {
    setsci6Essay12(event.target.value)
  }
  const onChangeSci6Listener13 = (event) => {
    setsci6Essay13(event.target.value)
  }
  const onChangeSci6Listener14 = (event) => {
    setsci6Essay14(event.target.value)
  }
  const onChangeSci6Listener15 = (event) => {
    setsci6Essay15(event.target.value)
  }
  const onChangeSci6Listener16 = (event) => {
    setsci6Essay16(event.target.value)
  }
  const onChangeSci6Listener17 = (event) => {
    setsci6Essay17(event.target.value)
  }
  const onChangeSci6Listener18 = (event) => {
    setsci6Essay18(event.target.value)
  }
  const onChangeSci6Listener19 = (event) => {
    setsci6Essay19(event.target.value)
  }
  const onChangeSci6Listener20 = (event) => {
    setsci6Essay20(event.target.value)
  }
  const onChangeSci6Listener21 = (event) => {
    setsci6Essay21(event.target.value)
  }
  const onChangeSci6Listener22 = (event) => {
    setsci6Essay22(event.target.value)
  }
  const onChangeSci6Listener23 = (event) => {
    setsci6Essay23(event.target.value)
  }
  const onChangeSci6Listener24 = (event) => {
    setsci6Essay24(event.target.value)
  }
  const onChangeSci6Listener25 = (event) => {
    setsci6Essay25(event.target.value)
  }
  const onChangeSci6Listener26 = (event) => {
    setsci6Essay26(event.target.value)
  }
  const onChangeSci6Listener27 = (event) => {
    setsci6Essay27(event.target.value)
  }
  const onChangeSci6Listener28 = (event) => {
    setsci6Essay28(event.target.value)
  }
  const onChangeSci6Listener29 = (event) => {
    setsci6Essay29(event.target.value)
  }
  const onChangeSci6Listener30 = (event) => {
    setsci6Essay30(event.target.value)
  }
  const onChangeSci6Listener31 = (event) => {
    setsci6Essay31(event.target.value)
  }
  const onChangeSci6Listener32 = (event) => {
    setsci6Essay32(event.target.value)
  }
  const onChangeSci6Listener33 = (event) => {
    setsci6Essay33(event.target.value)
  }
  const onChangeSci6Listener34 = (event) => {
    setsci6Essay34(event.target.value)
  }
  const onChangeSci6Listener35 = (event) => {
    setsci6Essay35(event.target.value)
  }
  const onChangeSci6Listener36 = (event) => {
    setsci6Essay36(event.target.value)
  }
  const onChangeSci6Listener37 = (event) => {
    setsci6Essay37(event.target.value)
  }
  const onChangeSci6Listener38 = (event) => {
    setsci6Essay38(event.target.value)
  }
  const onChangeSci6Listener39 = (event) => {
    setsci6Essay39(event.target.value)
  }
  const onChangeSci6Listener40 = (event) => {
    setsci6Essay40(event.target.value)
  }
  const onChangeSci6Listener41 = (event) => {
    setsci6Essay41(event.target.value)
  }
  const onChangeSci6Listener42 = (event) => {
    setsci6Essay42(event.target.value)
  }
  const onChangeSci6Listener43 = (event) => {
    setsci6Essay43(event.target.value)
  }
  const onChangeSci6Listener44 = (event) => {
    setsci6Essay44(event.target.value)
  }
  const onChangeSci6Listener45 = (event) => {
    setsci6Essay45(event.target.value)
  }
  const onChangeSci6Listener46 = (event) => {
    setsci6Essay46(event.target.value)
  }
  const onChangeSci6Listener47 = (event) => {
    setsci6Essay47(event.target.value)
  }
  const onChangeSci6Listener48 = (event) => {
    setsci6Essay48(event.target.value)
  }
  const onChangeSci6Listener49 = (event) => {
    setsci6Essay49(event.target.value)
  }
  const onChangeSci6Listener50 = (event) => {
    setsci6Essay50(event.target.value)
  }
  const onChangeSci6Listener51 = (event) => {
    setsci6Essay51(event.target.value)
  }
  const onChangeSci6Listener52 = (event) => {
    setsci6Essay52(event.target.value)
  }
  const onChangeSci6Listener53 = (event) => {
    setsci6Essay53(event.target.value)
  }
  const onChangeSci6Listener54 = (event) => {
    setsci6Essay54(event.target.value)
  }
  const onChangeSci6Listener55 = (event) => {
    setsci6Essay55(event.target.value)
  }
  const onChangeSci6Listener56 = (event) => {
    setsci6Essay56(event.target.value)
  }
  const onChangeSci6Listener57 = (event) => {
    setsci6Essay57(event.target.value)
  }
  const onChangeSci6Listener58 = (event) => {
    setsci6Essay58(event.target.value)
  }
  const onChangeSci6Listener59 = (event) => {
    setsci6Essay59(event.target.value)
  }
  const onChangeSci6Listener60 = (event) => {
    setsci6Essay60(event.target.value)
  }
  const onChangeSci6Listener61 = (event) => {
    setsci6Essay61(event.target.value)
  }
  const onChangeSci6Listener62 = (event) => {
    setsci6Essay62(event.target.value)
  }
  const onChangeSci6Listener63 = (event) => {
    setsci6Essay63(event.target.value)
  }
  const onChangeSci6Listener64 = (event) => {
    setsci6Essay64(event.target.value)
  }
  const onChangeSci6Listener65 = (event) => {
    setsci6Essay65(event.target.value)
  }
  const onChangeSci6Listener66 = (event) => {
    setsci6Essay66(event.target.value)
  }
  const onChangeSci6Listener67 = (event) => {
    setsci6Essay67(event.target.value)
  }
  const onChangeSci6Listener68 = (event) => {
    setsci6Essay68(event.target.value)
  }
  const onChangeSci6Listener69 = (event) => {
    setsci6Essay69(event.target.value)
  }
  const onChangeSci6Listener70 = (event) => {
    setsci6Essay70(event.target.value)
  }
  const onChangeSci6Listener71 = (event) => {
    setsci6Essay71(event.target.value)
  }
  const onChangeSci6Listener72 = (event) => {
    setsci6Essay72(event.target.value)
  }
  const onChangeSci6Listener73 = (event) => {
    setsci6Essay73(event.target.value)
  }
  const onChangeSci6Listener74 = (event) => {
    setsci6Essay74(event.target.value)
  }
  const onChangeSci6Listener75 = (event) => {
    setsci6Essay75(event.target.value)
  }
  const onChangeSci6Listener76 = (event) => {
    setsci6Essay76(event.target.value)
  }
  const onChangeSci6Listener77 = (event) => {
    setsci6Essay77(event.target.value)
  }
  const onChangeSci6Listener78 = (event) => {
    setsci6Essay78(event.target.value)
  }
  const onChangeSci6Listener79 = (event) => {
    setsci6Essay79(event.target.value)
  }
  const onChangeSci6Listener80 = (event) => {
    setsci6Essay80(event.target.value)
  }
  const onChangeSci6Listener81 = (event) => {
    setsci6Essay81(event.target.value)
  }
  const onChangeSci6Listener82 = (event) => {
    setsci6Essay82(event.target.value)
  }
  const onChangeSci6Listener83 = (event) => {
    setsci6Essay83(event.target.value)
  }
  const onChangeSci6Listener84 = (event) => {
    setsci6Essay84(event.target.value)
  }
  const onChangeSci6Listener85 = (event) => {
    setsci6Essay85(event.target.value)
  }
  const onChangeSci6Listener86 = (event) => {
    setsci6Essay86(event.target.value)
  }
  const onChangeSci6Listener87 = (event) => {
    setsci6Essay87(event.target.value)
  }
  const onChangeSci6Listener88 = (event) => {
    setsci6Essay88(event.target.value)
  }
  const onChangeSci6Listener89 = (event) => {
    setsci6Essay89(event.target.value)
  }
  const onChangeSci6Listener90 = (event) => {
    setsci6Essay90(event.target.value)
  }
  const onChangeSci6Listener91 = (event) => {
    setsci6Essay91(event.target.value)
  }
  const onChangeSci6Listener92 = (event) => {
    setsci6Essay92(event.target.value)
  }
  const onChangeSci6Listener93 = (event) => {
    setsci6Essay93(event.target.value)
  }
  const onChangeSci6Listener94 = (event) => {
    setsci6Essay94(event.target.value)
  }
  const onChangeSci6Listener95 = (event) => {
    setsci6Essay95(event.target.value)
  }
  const onChangeSci6Listener96 = (event) => {
    setsci6Essay96(event.target.value)
  }
  const onChangeSci6Listener97 = (event) => {
    setsci6Essay97(event.target.value)
  }
  const onChangeSci6Listener98 = (event) => {
    setsci6Essay98(event.target.value)
  }
  const onChangeSci6Listener99 = (event) => {
    setsci6Essay99(event.target.value)
  }
  const onChangeSci6Listener100 = (event) => {
    setsci6Essay100(event.target.value)
  }
  const onChangeSci6Listener101 = (event) => {
    setsci6Essay101(event.target.value)
  }
  const onChangeSci6Listener102 = (event) => {
    setsci6Essay102(event.target.value)
  }
  const onChangeSci6Listener103 = (event) => {
    setsci6Essay103(event.target.value)
  }
  const onChangeSci6Listener104 = (event) => {
    setsci6Essay104(event.target.value)
  }
  const onChangeSci6Listener105 = (event) => {
    setsci6Essay105(event.target.value)
  }
  const onChangeSci6Listener106 = (event) => {
    setsci6Essay106(event.target.value)
  }
  const onChangeSci6Listener107 = (event) => {
    setsci6Essay107(event.target.value)
  }
  const onChangeSci6Listener108 = (event) => {
    setsci6Essay108(event.target.value)
  }
  const onChangeSci6Listener109 = (event) => {
    setsci6Essay109(event.target.value)
  }
  const onChangeSci6Listener110 = (event) => {
    setsci6Essay110(event.target.value)
  }
  const onChangeSci6Listener111 = (event) => {
    setsci6Essay111(event.target.value)
  }
  const onChangeSci6Listener112 = (event) => {
    setsci6Essay112(event.target.value)
  }
  const onChangeSci6Listener113 = (event) => {
    setsci6Essay113(event.target.value)
  }
  const onChangeSci6Listener114 = (event) => {
    setsci6Essay114(event.target.value)
  }
  const onChangeSci6Listener115 = (event) => {
    setsci6Essay115(event.target.value)
  }
  const onChangeSci6Listener116 = (event) => {
    setsci6Essay116(event.target.value)
  }
  const onChangeSci6Listener117 = (event) => {
    setsci6Essay117(event.target.value)
  }
  const onChangeSci6Listener118 = (event) => {
    setsci6Essay118(event.target.value)
  }
  const onChangeSci6Listener119 = (event) => {
    setsci6Essay119(event.target.value)
  }
  const onChangeSci6Listener120 = (event) => {
    setsci6Essay120(event.target.value)
  }
  const onChangeSci6Listener121 = (event) => {
    setsci6Essay121(event.target.value)
  }
  const onChangeSci6Listener122 = (event) => {
    setsci6Essay122(event.target.value)
  }
  const onChangeSci6Listener123 = (event) => {
    setsci6Essay123(event.target.value)
  }
  const onChangeSci6Listener124 = (event) => {
    setsci6Essay124(event.target.value)
  }
  const onChangeSci6Listener125 = (event) => {
    setsci6Essay125(event.target.value)
  }
  const onChangeSci6Listener126 = (event) => {
    setsci6Essay126(event.target.value)
  }
  const onChangeSci6Listener127 = (event) => {
    setsci6Essay127(event.target.value)
  }
  const onChangeSci6Listener128 = (event) => {
    setsci6Essay128(event.target.value)
  }
  const onChangeSci6Listener129 = (event) => {
    setsci6Essay129(event.target.value)
  }
  const onChangeSci6Listener130 = (event) => {
    setsci6Essay130(event.target.value)
  }
  const onChangeSci6Listener131 = (event) => {
    setsci6Essay131(event.target.value)
  }
  const onChangeSci6Listener132 = (event) => {
    setsci6Essay132(event.target.value)
  }
  const onChangeSci6Listener133 = (event) => {
    setsci6Essay133(event.target.value)
  }
  const onChangeSci6Listener134 = (event) => {
    setsci6Essay134(event.target.value)
  }
  const onChangeSci6Listener135 = (event) => {
    setsci6Essay135(event.target.value)
  }
  const onChangeSci6Listener136 = (event) => {
    setsci6Essay136(event.target.value)
  }
  const onChangeSci6Listener137 = (event) => {
    setsci6Essay137(event.target.value)
  }
  const onChangeSci6Listener138 = (event) => {
    setsci6Essay138(event.target.value)
  }
  const onChangeSci6Listener139 = (event) => {
    setsci6Essay139(event.target.value)
  }
  const onChangeSci6Listener140 = (event) => {
    setsci6Essay140(event.target.value)
  }
  const onChangeSci6Listener141 = (event) => {
    setsci6Essay141(event.target.value)
  }
  const onChangeSci6Listener142 = (event) => {
    setsci6Essay142(event.target.value)
  }
  const onChangeSci6Listener143 = (event) => {
    setsci6Essay143(event.target.value)
  }
  const onChangeSci6Listener144 = (event) => {
    setsci6Essay144(event.target.value)
  }
  const onChangeSci6Listener145 = (event) => {
    setsci6Essay145(event.target.value)
  }
  const onChangeSci6Listener146 = (event) => {
    setsci6Essay146(event.target.value)
  }
  const onChangeSci6Listener147 = (event) => {
    setsci6Essay147(event.target.value)
  }
  const onChangeSci6Listener148 = (event) => {
    setsci6Essay148(event.target.value)
  }
  const onChangeSci6Listener149 = (event) => {
    setsci6Essay149(event.target.value)
  }
  const onChangeSci6Listener150 = (event) => {
    setsci6Essay150(event.target.value)
  }
  const onChangeSci6Listener151 = (event) => {
    setsci6Essay151(event.target.value)
  }
  const onChangeSci6Listener152 = (event) => {
    setsci6Essay152(event.target.value)
  }
  const onChangeSci6Listener153 = (event) => {
    setsci6Essay153(event.target.value)
  }
  const onChangeSci6Listener154 = (event) => {
    setsci6Essay154(event.target.value)
  }
  const onChangeSci6Listener155 = (event) => {
    setsci6Essay155(event.target.value)
  }
  const onChangeSci6Listener156 = (event) => {
    setsci6Essay156(event.target.value)
  }
  const onChangeSci6Listener157 = (event) => {
    setsci6Essay157(event.target.value)
  }
  const onChangeSci6Listener158 = (event) => {
    setsci6Essay158(event.target.value)
  }
  const onChangeSci6Listener159 = (event) => {
    setsci6Essay159(event.target.value)
  }
  const onChangeSci6Listener160 = (event) => {
    setsci6Essay160(event.target.value)
  }
  const onChangeSci6Listener161 = (event) => {
    setsci6Essay161(event.target.value)
  }
  const onChangeSci6Listener162 = (event) => {
    setsci6Essay162(event.target.value)
  }
  const onChangeSci6Listener163 = (event) => {
    setsci6Essay163(event.target.value)
  }
  const onChangeSci6Listener164 = (event) => {
    setsci6Essay164(event.target.value)
  }
  const onChangeSci6Listener165 = (event) => {
    setsci6Essay165(event.target.value)
  }
  const onChangeSci6Listener166 = (event) => {
    setsci6Essay166(event.target.value)
  }
  const onChangeSci6Listener167 = (event) => {
    setsci6Essay167(event.target.value)
  }
  const onChangeSci6Listener168 = (event) => {
    setsci6Essay168(event.target.value)
  }
  const onChangeSci6Listener169 = (event) => {
    setsci6Essay169(event.target.value)
  }
  const onChangeSci6Listener170 = (event) => {
    setsci6Essay170(event.target.value)
  }
  const onChangeSci6Listener171 = (event) => {
    setsci6Essay171(event.target.value)
  }
  const onChangeSci6Listener172 = (event) => {
    setsci6Essay172(event.target.value)
  }
  const onChangeSci6Listener173 = (event) => {
    setsci6Essay173(event.target.value)
  }
  const onChangeSci6Listener174 = (event) => {
    setsci6Essay174(event.target.value)
  }
  const onChangeSci6Listener175 = (event) => {
    setsci6Essay175(event.target.value)
  }
  const onChangeSci6Listener176 = (event) => {
    setsci6Essay176(event.target.value)
  }
  const onChangeSci6Listener177 = (event) => {
    setsci6Essay177(event.target.value)
  }
  const onChangeSci6Listener178 = (event) => {
    setsci6Essay178(event.target.value)
  }
  const onChangeSci6Listener179 = (event) => {
    setsci6Essay179(event.target.value)
  }
  const onChangeSci6Listener180 = (event) => {
    setsci6Essay180(event.target.value)
  }
  const onChangeSci6Listener181 = (event) => {
    setsci6Essay181(event.target.value)
  }

  return (
    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#f06a69",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#f06a69",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Life Science</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/sixth" className='gradeLink'><h2 className="hero">6th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">This course uses <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0" rel="noreferrer"
            target="_blank"> CK-12's Middle School Life Science book.</a> 6th Grade Science covers Scientific Method, Scientific Theories, Cell Biology, Molecular Biology and Genetics, Evolution, Viruses and Prokaryotes, Protists and Fungi, Plants, Animals, Invertebrates, Vertebrates, Human Biology, and Ecology.  </p>
          <p className="topBottom">The assignments for each chapter are posted in
            the lessons below so you can save your written work from this course. CK-12's site will save your progress
            from Practice sessions. </p>
          <p className="topBottom">If you don't already have an <a href="https://www.ck12.org/auth/signup/student"
                                                                   rel="noreferrer" target="_blank"> account with
            CK-12, </a> you can create one <a href="https://www.ck12.org/auth/signup/student"
                                              rel="noreferrer" target="_blank">here. </a> It is not required to complete
            this course however.</p>
          <p className="topBottom"><a
            href="https://www.ck12.org/tebook/ck-12-life-science-for-middle-school-teachers-edition/" rel="noreferrer"
            target="_blank">Lab activities </a>for the lessons can be accessed <a
            href="https://www.ck12.org/tebook/ck-12-life-science-for-middle-school-teachers-edition/" rel="noreferrer"
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
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.1/primary/lesson/scientific-ways-of-thinking-ms-ls"
            rel="noreferrer" target="_blank"> 1.1 Scientific Ways of Thinking (click here). </a></p>
          <p>
            <ul className="list">
              <li>Complete the reading and watch the videos.</li>
              <li>Answer the 'Start Practice' questions on the
                bottom right of the ck12 website.<a
                  href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.1/primary/lesson/scientific-ways-of-thinking-ms-ls"
                  rel="noreferrer" target="_blank"><img
                  style={{ margin: "0", display: "inherit", padding: "0", float: "0" }}
                  src={require("../../public/images/science/startpractice.jpg")}
                  alt='start practice button'/></a></li>
              <li>Answer the questions below based on the reading and videos. For all assignments, answer in complete
                sentences.</li>
            </ul>
          </p>
          <p className="lessons">
            1. What is modern science?<br/>
            2. How do you think scientifically?<br/>
            3. What does it mean "to observe"?<br/>
            4. What is a hypothesis?<br/>
          </p>

          <textarea className="textArea"
                    placeholder="Write your responses here. Your work will automatically be saved to your Local Storage.
                    -----
                    If you clear your cookies, your answers will be erased! Be sure to back up your work by saving it in another
                    location.
                    -----
                    You can 'Select All' (select your answers inside this textbox by touching/clicking on (ctrl a)) and
                    save it into Google Docs, a Word Doc or into an email  and send it to your parent or teacher.
                    -----
                    Some devices allow you to 'Select All' and then 'Share' via email or another app.
                    -----
                    You may prefer to save the questions into this textbox for easier viewing and grading by your parent or teacher.
                    -----
                    Be sure to label each assignment with the Subject and Lesson Number."

                    onChange={onChangeSci6Listener1} value={sci6Essay1}/>

          <span className="days">LESSON 2 </span>
          <p>Complete the reading, watch the videos, and do the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.2/primary/lesson/fields-in-the-life-sciences-ms-ls"
              rel="noreferrer" target="_blank"> 1.2 Fields in the Life Sciences. </a> Answer the questions below.
          </p>
          <p className="lessons">
            1. What is the study of reptiles and amphibians?<br/>
            2. What is the study of prehistoric life by means of fossils?<br/>
            3. What is the study of mollusks?<br/>
            4. What is the study of cells?<br/>
            5. What is the study of fungi?<br/>
            6. What is ecology?<br/>
            7. What is name of the field of the life sciences that studies insects?<br/>
            8. What is name of the field of the life sciences that studies the nervous system?<br/>
            9. What are cell biology, genetics, and molecular biology?<br/>

          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."

                    onChange={onChangeSci6Listener2} value={sci6Essay2}/>

          <span className="days">LESSON 3 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.3/primary/lesson/scientific-investigation-ms-ls"
              rel="noreferrer" target="_blank"> 1.3 Scientific Method.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the difference between a dependent and an independent variable?<br/>
            2. How many dependent variables do you want in an experiment?<br/>
            3. What are control variables?<br/>
            4. Why are control variables important?<br/>
            5. What steps are usually included in the scientific method?<br/>
            6. What are the features of a good hypothesis?<br/>
            7. Why is it important for a scientist to communicate the results and conclusions of a study?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener3}
                    value={sci6Essay3}/>

          <span className="days">LESSON 4 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.4/primary/lesson/scientific-theories-ms-ls"
              rel="noreferrer" target="_blank"> 1.4 Scientific Theories. </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What happens to scientific ideas that do not match the natural world?<br/>
            2. In science, what is meant by a fact, a hypothesis, a theory, and a law?<br/>
            3. How do scientists' views of theories differ from the everyday use of these words?<br/>
            4. What is evidence?<br/>
            5. What is a scientific theory?<br/>
            6. What is a scientific law?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener4}
                    value={sci6Essay4}/>

          <span className="days">LESSON 5 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.5/primary/lesson/basic-and-applied-science-ms-ls"
              rel="noreferrer" target="_blank"> 1.5 Basic and Applied Science.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is basic research? Give two examples of basic research.<br/>
            2. What is applied research? Give two examples of applied research.<br/>
            3. What is the relationship between basic research and applied science?<br/>
            4. Why do some scientists believe more emphasis needs to be placed on applied science?<br/>
            5. How could basic biomedical research lead to better physicians?<br/>
            6. What is BMPER?Did its discovery come from basic or applied research? Explain your reasoning fully.<br/>
            7. What is the difference between basic and applied science?<br/>
            8. What is an example of applied science?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener5} value={sci6Essay5}/>

          <span className="days">LESSON 6 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.6/primary/lesson/microscopes-ms-ls"
              rel="noreferrer" target="_blank"> 1.6 Microscope.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How should you carry a compound optical microscope?<br/>
            2. What procedure should you use when seeking to use the most powerful optical lenses?<br/>
            3. What is the purpose of a microscope?<br/>
            4. What were the findings of Hooke and van Leeuwenhoek?<br/>
            5. What are the differences between a light microscope and a scanning electron microscope?<br/>
          </p>
          <textarea className="textArea" placeholder="Copy/paste your work!" onChange={onChangeSci6Listener6}
                    value={sci6Essay6}/>

          <span className="days">LESSON 7 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.7/primary/lesson/safety-in-the-life-sciences-ms-ls"
              rel="noreferrer" target="_blank"> 1.7 Safety in the Life Sciences
            </a></p>
          <p>Take the <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit1-5275795/"
            rel="noreferrer" target="_blank"> Introduction to Life Science: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is applying cosmetics in a lab allowed?<br/>
            2. What should you do if there is an accident?<br/>
            3. How should you dispose of waste?<br/>
            4. List five lab safety rules covered in the video.<br/>
            5. What kind of clothing should you wear in a science lab?<br/>
            6. What should you wear in a science lab that you would not usually wear outside of a science lab?<br/>
            7. What is a biohazard?<br/>
            8. List three hazards found in scientific research.<br/>
            9. List three safety guidelines that you should follow in the laboratory.<br/>
            10. Write your score for the Unit Challenge.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener7} value={sci6Essay7}/>

          <span className="days">LESSON 8 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.8/primary/lesson/characteristics-of-life-ms-ls"
              rel="noreferrer" target="_blank"> 1.8 Characteristics of Life.</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are cell products? Do you think they should be included in characteristics of life? Why or why
            not?<br/>
            2. Are all responses to the environment immediately obvious? Be specific and explain your reasoning.<br/>
            3. Explain the concept of homeostasis. Give an example.<br/>
            4. At what level does life evolve?<br/>
            5. Is a crystal alive? Why or why not?<br/>
            6. What is a cell?<br/>
            7. What is homeostasis?<br/>
            8. What are the two forms of reproduction? Describe the examples in your response.<br/>

          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener8} value={sci6Essay8}/>

          <span className="days">LESSON 9 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.9/primary/lesson/organization-of-living-things-ms-ls"
              rel="noreferrer" target="_blank"> 1.9 Organization of Living Things.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Who is the inventor of the modern classification system?<br/>
            2. List the classification categories for organisms from the broadest category to the most specific.<br/>
            3. What is meant by binomial nomenclature?<br/>
            4. Define a species.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener9} value={sci6Essay9}/>

          <span className="days">LESSON 10 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.10/primary/lesson/domains-of-life-ms-ls"
              rel="noreferrer" target="_blank"> 1.10 Domain.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit2-5275795/"
            rel="noreferrer" target="_blank"> Introduction to Life Science: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the three domains of life?<br/>
            2. What category do the individual organisms that we can see with our naked eye fall into?<br/>
            3. What is an extremophile?<br/> What domain is known for these organisms?<br/> (Note: recent work has shown
            that
            extremophiles are not the only members of this domain.)
            4. How do Archaea and Bacteria differ? How are they the same?<br/>
            5. Which domain of life seems to be absent for deep-subsurface communities?<br/>
            6. Compare and contrast the domains Archaea and Bacteria.<br/>
            7. What are the four kingdoms that make up the domain Eukarya?<br/>
            8. Name three different examples of organisms in the domain Eukarya.<br/>
            9. Write your score for Challenge 2.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener10} value={sci6Essay10}/>

          <span className="days">LESSON 11 </span>
          <span className="days">Cell Biology </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.1/primary/lesson/chemistry-of-life-ms-ls"
              rel="noreferrer" target="_blank"> 2.1 Elements and Compounds.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the atomic number of nitrogen? When and where was it identified?<br/> In what state of
            matter does nitrogen exist at room temperature?<br/>
            2. What is the atomic number of oxygen?<br/> When and where was it identified?<br/> In what state of matter
            does
            oxygen exist at room temperature?<br/>
            3. What is the atomic number of carbon? When and where was it identified?<br/> In what state of matter
            does it
            exist at room temperature?<br/>
            4. What is the atomic number of phosphorus? From what was phosphorus originally isolated?<br/> In what
            state of matter does it exist at room temperature?<br/>
            5. What is an element?<br/>
            6. What is the difference between the terms molecule and compound?<br/>
            7. Describe the composition of an atom.<br/>
            8. Who is credited with developing the periodic table?<br/>

          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener11} value={sci6Essay11}/>

          <span className="days">LESSON 12 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.2/primary/lesson/organic-compounds-ms-ls"
              rel="noreferrer" target="_blank"> 2.2 Organic Compounds.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What four categories of macromolecules make up cells?<br/>
            2. What about carbon makes it valuable to organisms?<br/>
            3. What do functional groups do? How are they important to organisms?<br/>
            4. What smaller units can proteins be broken down into?<br/>
            5. What two nucleic acids are used by organisms?<br/>
            6. What are three different types of carbohydrates?<br/>
            7. What function do both lipids and carbohydrates share? How do they differ in this regard?<br/>
            8. How is the solubility of lipids different than the solubility of carbohydrates?<br/>
            9. What are the four main types of organic compounds that make up living things?<br/>
            10. What are the monomers used to make carbohydrates, proteins, and nucleic acids?<br/>
            11. What are examples of lipids?<br/>
            12. What are examples of proteins?<br/>

          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener12} value={sci6Essay12}/>

          <span className="days">LESSON 13 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.3/primary/lesson/cell-biology-ms-ls"
              rel="noreferrer" target="_blank"> 2.3 Cell Theory.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What type of microscope would be best for studying the structures found inside of cells?<br/>
            2. What are the three basic parts of the cell theory?<br/>
            3. According the cell theory, can you create a cell by combining molecules in a laboratory?<br/> Why or why
            not?<br/>
            4. Give an example of a specialized cell.<br/>
            5. What is a tissue?<br/>
            6. What is the relationship between tissues and organs?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener13} value={sci6Essay13}/>

          <span className="days">LESSON 14 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.4/primary/lesson/prokaryotic-and-eukaryotic-cells-ms-ls"
              rel="noreferrer" target="_blank"> 2.4 Prokaryotic and Eukaryotic Cells.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does "naked" DNA mean? What kinds of organisms have "naked" DNA?<br/>
            2. Where do you find membrane bound organelles? Are plasmids membrane bound organelles?<br/>
            3. What is the function of mitochondria in prokaryotes?<br/>
            4. What do all cells have in common?<br/>
            5. What are organelles?<br/>
            6. Compare the location of the genetic material of eukaryotic cells and prokaryotic cells.<br/>
            7. What are ribosomes?<br/>
            8. What are the only prokaryotes?<br/>
            9. Which prokaryotes are multicellular?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener14} value={sci6Essay14}/>

          <span className="days">LESSON 15 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.5/primary/lesson/cell-membrane-ms-ls"
              rel="noreferrer" target="_blank"> 2.5 Cell Membrane.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What makes up the "head" region of a phospholipid? Is it hydrophobic or hydrophilic?<br/>
            2. What makes up the "tail" region of a phospholipid? Is it hydrophobic or hydrophilic?<br/>
            3. What happens when you drop a phospholipid in water?<br/>
            4. How are phospholipids arranged in a plasma membrane?<br/>
            5. What is a glycoprotein? What is one of the uses of glycoproteins?<br/>
            6. What is "Brownian movement"? How is this movement related to the cell membrane?<br/>
            7. What is the plasma membrane?<br/>
            8. Describe a phospholipid.<br/>
            9. What are the components of the cytosol?<br/>
            10. What is meant by the description of the plasma membrane as “semipermeable”?<br/>
            11. What is the difference between the cytosol and the cytoplasm?<br/>

          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent or teacher or save it into another doc."
                    onChange={onChangeSci6Listener15} value={sci6Essay15}/>

          <span className="days">LESSON 16 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.6/primary/lesson/cell-nucleus-ms-ls"
              rel="noreferrer" target="_blank"> 2.6 Nucleus.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is chromatin? What molecules make up chromatin?<br/>
            2. What is the nuclear membrane? What kind of membrane is this membrane?<br/>
            3. What is the nucleolus? What molecules do you find there?<br/>
            4. How is the inside of the nucleus connected to the cytosol? Why is this connection vital for the
            cell?<br/>
            5. What is contained in the nucleus of a cell?<br/>
            6. What is a chromosome? Where are chromosomes located?<br/>
            7. How many chromosomes do humans have?<br/>
            8. What is the function of the nucleolus?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener16} value={sci6Essay16}/>

          <span className="days">LESSON 17 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.7/primary/lesson/organelles-ms-ls"
              rel="noreferrer" target="_blank"> 2.7 Organelles.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the functions of the endoplasmic reticulum? What gives the rough endoplasmic reticulum its
            "rough" appearance?<br/>
            2. What are the most abundant organelles in a cell? Where do they occur?
            What is their function?<br/>
            3. What is the appearance of the Golgi apparatus?What is the function of the Golgi apparatus?<br/>
            4. What are lysosomes? What are their functions?<br/>
            5. What is the function of mitochondria? Do all cells have the same number of mitochondria? How
            can this situation be explained?<br/>
            6. What is cytosol? How does this differ from cytoplasm?<br/>
            7. What are the primary types of protein filaments that make up the cytoskeleton?<br/>
            8. What is the function of a peroxisome?<br/>
            9. What is a secretory vesicle? Where are they made? What is their function?<br/>
            10. What is the purpose of the Golgi apparatus?<br/>
            11. What is the purpose of the mitochondria?<br/>
            12. How is the smooth ER different from the rough ER?<br/>
            13. What is a lysosome?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener17} value={sci6Essay17}/>

          <span className="days">LESSON 18 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.8/primary/lesson/plant-cell-structures-ms-ls"
              rel="noreferrer" target="_blank"> 2.8 Plant Cell Structure.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit3-5275795/"
            rel="noreferrer" target="_blank"> Cell Biology: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast the vacuoles of plant cells and the vacuoles of animal cells.<br/>
            2. How is the appearance of thylakoids similar to the appearance of the Golgi apparatus?<br/>
            3. What kind of membrane do chloroplasts have? What other organelle has a similar type of
            membrane?<br/>
            4. What features do plant cells have in common with animal cells?<br/>
            5. What are three structures that are found in plant cells but not in animal cells?<br/>
            6. What is the role of the chloroplast?<br/>
            7. What is the main role of the plant vacuole?<br/>
            8. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener18} value={sci6Essay18}/>

          <span className="days">LESSON 19 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.9/primary/lesson/cell-transport-ms-ls"
              rel="noreferrer" target="_blank"> 2.9 Cell Transport.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is passive transport different from active transport?<br/>
            2. What are three types of passive transport? What do these all have in common?<br/>
            3. What does the body use iodine for? What kind of transport is necessary to transport this molecule
            into a cell?<br/>
            4. What happens to the receptor complex in receptor mediated endocytosis?<br/>
            5. Why is the plasma membrane considered selectively permeable? Why is this important?<br/>
            6. Explain the composition of the cell membrane.<br/>
            7. Explain the arrangement of phospholipids in the membrane.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener19} value={sci6Essay19}/>

          <span className="days">LESSON 20 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.10/primary/lesson/diffusion-ms-ls"
              rel="noreferrer" target="_blank"> 2.10 Diffusion.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is osmosis?<br/>
            2. What is tonicity?<br/>
            3. How can a hypotonic solution cause a cell to rupture? Describe this process as specifically as you
            can.<br/>
            4. How would a hypertonic solution affect a cell? How could this affect cellular processes?<br/>
            5. Do water molecules leave or enter a cell in an isotonic solution?<br/>
            6. Describe the process of diffusion.<br/>
            7. Define osmosis.<br/>
            8. If a plant cell is placed in a solution and the cell shrivels up, what type of solution was it placed in?
            How do you know?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener20} value={sci6Essay20}/>

          <span className="days">LESSON 21 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.11/primary/lesson/passive-transport-ms-ls"
              rel="noreferrer" target="_blank"> 2.11 Passive Transport.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does selectively permeable mean?<br/>
            2. Can a membrane control the direction of diffusion? Explain your reasoning fully.<br/>
            3. Give two examples of phospholipid soluble molecules? How can these molecules move across a cell
            membrane?<br/>
            What affects the direction of their movement?<br/>
            4. What is the difference between simple and facilitated diffusion? What are two types of facilitated
            diffusion?<br/>
            5. Explain two ways materials can enter the cell through passive transport.<br/>
            6. Does passive transport involve an expenditure of much energy? Why or why not?<br/>
            7. How does oxygen move across the membrane?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener21} value={sci6Essay21}/>

          <span className="days">LESSON 22 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.12/primary/lesson/active-transport-ms-ls"
              rel="noreferrer" target="_blank"> 2.12 Active Transport.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit4-5275795/"
            rel="noreferrer" target="_blank"> Cell Biology: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is active transport?<br/>
            2. Where does a cell obtain the energy for active transport?<br/>
            3. How does the body prevent the loss of sugar in urine?<br/>
            4. List three factors that affect the movement of materials across a membrane. Explain how these factors
            affect the movement of matter.<br/>
            5. How is active transport different from passive transport?<br/>
            6. What form of energy is usually used in active transport?<br/>
            7. Give an example of active transport. Explain what occurs during this process.<br/>
            8. Write your score for Challenge 2.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener22} value={sci6Essay22}/>

          <span className="days">LESSON 23 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.13/primary/lesson/photosynthesis-ms-ls"
              rel="noreferrer" target="_blank"> 2.13 Photosynthesis.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where does the energy for photosynthesis come from?<br/>
            2. In photosynthesis, how does the movement of electrons along the electron transport chain affect hydrogen
            ions (H+)? How does this compare to what happens in the mitochondria during cellular respiration?<br/>
            3. Do all organisms which carry out photosynthesis have chloroplasts? Explain your answer as fully as
            you can.<br/>
            4. What is the function of mobile electron carriers? What is their relationship to the embedded protein
            complexes in the membrane?<br/>
            5. How is the process of photosynthesis central to sustaining life on Earth?<br/>
            6. What are the two products produced by photosynthesis?<br/>
            7. What two raw materials are needed by plants in order to perform photosynthesis?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener23} value={sci6Essay23}/>

          <span className="days">LESSON 24 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.14/primary/lesson/light-reactions-of-photosynthesis-ms-ls"
              rel="noreferrer" target="_blank"> 2.14 Light Reactions.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do autotrophs differ from heterotrophs? How are they the same?<br/>
            2. What do plants do with most of the sugar they produce during photosynthesis?<br/>
            3. How do decreasing levels of CO2 affect plants? How do you think increasing levels of CO2 affect
            plants?<br/>
            4. Where do plants get the raw materials for photosynthesis?<br/>
            5. What do plants take up through their roots? Which of these substances are used for
            photosynthesis?<br/>
            6. Where does the chemical reactions of photosynthesis take place?<br/>
            7. Describe the structures of the chloroplast where photosynthesis takes place.<br/>
            8. What would happen if the stomata of a plant leaf were glued shut? Would that plant be able to
            perform photosynthesis? Why or why not?<br/>
            9. What are the reactants needed to perform photosynthesis? The products?<br/>
            10. What happens to the products of photosynthesis?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener24} value={sci6Essay24}/>

          <span className="days">LESSON 25 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.15/primary/lesson/cellular-respiration-ms-ls"
              rel="noreferrer" target="_blank"> 2.15 Cellular Respiration.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is cellular respiration?<br/>
            2. Do plant cells respire?<br/>
            3. What kinds of molecules are used for cellular respiration? Give specific examples.<br/>
            4. What is the use of ATP? Give three examples of how ATP is used in the cell.<br/>
            5. What is the purpose of cellular respiration?<br/>
            6. What is ATP?<br/>
            7. How much usable energy is extracted from one glucose molecule?<br/>


          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener25} value={sci6Essay25}/>

          <span className="days">LESSON 26 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.16/primary/lesson/process-of-cellular-respiration-ms-ls"
              rel="noreferrer" target="_blank"> 2.16 Cellular Respiration Process.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Which types of cells have mitochondria?<br/>
            2. What is the cristae? Where does it occur? Why is this structure important?<br/>
            3. What high energy electron carriers are produced by the Krebs cycle? Where do they carry their
            electrons?<br/>
            4. What is the role of acetyl-CoA?<br/> Where does it fit into the Krebs cycle?<br/>
            5. How much ATP is made by the Krebs cycle for every molecule of Pyruvate that enters the cycle?<br/>
            6. What is the name of the protein complex that makes ATP?<br/>
            7. What is the final electron acceptor at the end of the electron transport chain?<br/>
            8. What is a "mobile transfer molecule"?<br/> What is their function?<br/>
            9. How is the hydrogen ion gradient formed?<br/>
            10. What is the purpose of the proton (hydrogen ion) gradient?<br/>
            11. Where is glucose broken down to form ATP? What is this process called? Does this process need
            oxygen?<br/>
            12. Write the chemical reaction for the overall process of cellular respiration.<br/>
            13. What is necessary for the Krebs cycle to proceed?<br/>
            14. What happens during the Krebs cycle?<br/>
            15. What is pyruvate?<br/>
            16. What happens during the electron transport chain?<br/>
            17. How is ATP made during the third stage of cellular respiration?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener26} value={sci6Essay26}/>

          <span className="days">LESSON 27 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.17/primary/lesson/connecting-cellular-respiration-and-photosynthesis-ms-ls"
              rel="noreferrer" target="_blank"> 2.17 Cellular Respiration and Photosynthesis.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is needed for photosynthesis to occur? Be specific.<br/>
            2. What is needed for cellular respiration to occur?<br/>
            3. What is ATP?<br/>
            4. Do autotrophs need to carry out cellular respiration? Why or why not?<br/>
            5. How are the equations for photosynthesis and cellular respiration related?<br/>
            6. What keeps atmospheric oxygen and carbon dioxide at stable levels?<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener27} value={sci6Essay27}/>

          <span className="days">LESSON 28 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.18/primary/lesson/fermentation-ms-ls"
              rel="noreferrer" target="_blank"> 2.18 Fermentation.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit5-5275795/"
            rel="noreferrer" target="_blank"> Cell Biology: Challenge 3</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where in the cell does anaerobic respiration take place?<br/>
            2. What happens to pyruvate during anaerobic respiration? How does yeast differ from other organisms
            regarding the fate of pyruvate?<br/>
            3. How can glycolysis participate in anaerobic repiration?<br/>
            4. How much ATP is produced by the breakdown of pyruvate?<br/> How much ATP is produced overall by
            fermentation? Where does this ATP come from?<br/>
            5. What is the difference between alcoholic fermentation and lactic acid fermentation?<br/>
            6. If an organism could make ATP from sugars with or without the presence of oxygen, which would be
            preferred and why?<br/>
            7. Write your score for Challenge 3.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener28} value={sci6Essay28}/>

          <span className="days">LESSON 29 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.19/primary/lesson/cell-division-ms-ls"
              rel="noreferrer" target="_blank"> 2.19 Cell Division.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Does the rate at which materials diffuse into a cell vary with the size of the cell?<br/>
            2. What does this mean for large cells?<br/>
            3. Define cell division.<br/>
            4. How does an embryo develop from a fertilized egg?<br/>
            5. List two reasons that cells must divide.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener29} value={sci6Essay29}/>

          <span className="days">LESSON 30 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.20/primary/lesson/cell-cycle-ms-ls"
              rel="noreferrer" target="_blank"> 2.20 Cell Cycle.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the major phases of the cell cycle?<br/>
            2. Why do you think it is important for a cell to grow before it replicates its DNA? Be as specific as you
            can in your answer.<br/>
            3. What happens during the S phase of the cell cycle?<br/>
            4. What happens during mitosis?<br/>
            5. What is the function of spindle fibers?<br/> Where do they attach?<br/>
            6. What is the function of meiosis?<br/>
            7. What is the cell cycle?<br/>
            8. What are the two main components of the cell cycle?<br/>
            9. What occurs during interphase?<br/>
            10. What are the three stages of interphase?<br/>
            11. What is the main purpose of the S phase?<br/>
            12. Describe the main events of the mitotic phase.<br/>
            13. Define cancer.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener30} value={sci6Essay30}/>

          <span className="days">LESSON 31 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.21/primary/lesson/mitosis-and-cytokinesis-ms-ls"
              rel="noreferrer" target="_blank"> 2.21 Mitosis.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. When does the "classic" chromosome structure of DNA appear during mitosis?<br/>
            2. What problems do you think might arise if the chromosomes did not align during metaphase?<br/>
            3. When do the nuclear envelopes reform? What problems might arise if a cell started forming the
            nuclear envelopes earlier?<br/>
            4. In what stage do cells spend most of their "life"?<br/>
            5. How long does mitosis take in the typical eukaryotic cell?<br/>
            6. What are chromosomes?<br/>
            7. What are the four phases of mitosis, in the correct order?<br/>
            8. In what phase of mitosis are chromosomes moving toward opposite sides of the cell?<br/>
            9. Compare the two nuclei that form as a result of mitosis?<br/>
            10. What is cytokinesis, and when does it occur?<br/>


          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener31} value={sci6Essay31}/>

          <span className="days">LESSON 32 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.22/primary/lesson/asexual-vs.-sexual-reproduction-ms-ls"
              rel="noreferrer" target="_blank"> 2.22 Reproduction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the production of bulbs benefit plants?<br/>
            2. How can an organism benefit from asexual reproduction?<br/>
            3. What can be a negative effect of asexual reproduction? Is this more applicable to the individual or
            the population?<br/>
            4. What is asexual reproduction?<br/>
            5. What is the advantage of sexual reproduction?<br/>
            6. Describe two types of asexual reproduction.<br/>
            7. What is a zygote?<br/>
            8. How many chromosomes are in a human zygote? How many chromosomes are in a human gamete?<br/>


          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener32} value={sci6Essay32}/>

          <span className="days">LESSON 33 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.23/primary/lesson/meiosis-ms-ls"
              rel="noreferrer" target="_blank"> 2.23 Meiosis.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is meiosis?<br/>
            2. What is diploid? How many chromosomes are in a diploid human cell?<br/>
            3. What is a zygote? How does the zygote form the organism?<br/>
            4. What is the result of crossing-over?<br/>
            5. How many cell divisions occur during meiosis?<br/>
            6. Why are you genetically distinct?<br/>
            7. Define meiosis.<br/>
            8. What is the difference between a haploid cell and a diploid cell?<br/>
            9. Describe the steps of Meiosis I and Meiosis II.<br/>
            10. Describe crossing-over. When does crossing-over occur?<br/>
            11. What is the outcome of meiosis?<br/>


          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener33} value={sci6Essay33}/>

          <span className="days">LESSON 34 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/2.24/primary/lesson/mitosis-vs.-meiosis-ms-ls"
              rel="noreferrer" target="_blank"> 2.24 Mitosis vs. Meiosis.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit6-5275795/"
            rel="noreferrer" target="_blank"> Cell Biology: Challenge 4</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are homologous chromosomes?<br/>
            2. How do the location of specific genes compare between homologous chromosomes?<br/>
            3. What is the outcome from mitosis?<br/>
            4. What is a tetrad? Why are they an important feature of meiosis?<br/>
            5. How does meiosis differ between females and males?<br/>
            6. How many daughter cells arise from mitosis? How many daughter cells are produced in meiosis?<br/>
            7. How does the attachment of spindle fibers differ between mitosis and meiosis I?<br/>
            8. Is anaphase I or anaphase II in meiosis more analogous to anaphase in mitosis?Explain your
            reasoning.<br/>
            9. How many steps are there in mitosis? How many steps are there in meiosis?<br/>
            10. How does interphase I of meiosis differ from interphase II of meiosis?<br/>
            11. What is the goal of mitosis? Of meiosis?<br/>
            12. How many cells are created from cytokinesis following mitosis? Following meiosis?<br/>
            13. Which process, mitosis to meiosis, creates genetically identical cells?<br/>
            14. "Gametes are haploid cells." What does this sentence mean?<br/>
            15. Write your score for Challenge 4.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener34} value={sci6Essay34}/>

          <span className="days">LESSON 35 </span>
          <span className="days">Molecular Biology and Genetics</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.1/primary/lesson/mendels-pea-plants-ms-ls"
              rel="noreferrer" target="_blank"> 3.1 Pea Plants</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a "simple" trait?<br/>
            2. What is a heterozygote? How is this different from a homozygote?<br/>
            3. You breed a plant with yellow wrinkled peas with a plant with yellow smooth peas. Both individuals are
            homozygous for both traits. What will the peas of the next generation look like?<br/>
            4. You breed plants with the same traits as in question 3, but this time the smooth trait is heterozygous in
            the second individual. What will the peas of the next generation look like?<br/>
            5. You breed two green wrinkled plants. What will the next generation look like?<br/>
            6. What is genetics?<br/>
            7. Why did Mendel choose to study pea plants?<br/>
            8. How did Mendel's experiments disprove the idea that we are simply a "blend" of our parents' traits?<br/>
            9. What were the results Mendel consistently identified in his experiments?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener35} value={sci6Essay35}/>

          <span className="days">LESSON 36 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.2/primary/lesson/mendels-laws-and-genetics-ms-ls"
              rel="noreferrer" target="_blank"> 3.2 Mendel's Laws.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the difference between a dominant trait and a recessive trait?<br/>
            2. Explain the law of segregation.<br/>
            3. When Mendel crossed a TT tall plant with a tt short plant, what did he observe in the F1
            generation? Why?<br/>
            4. If PP purple plants are crossed with pp white plants, what will be the possible combinations of factors
            if the F1 generation is allowed to self-pollinate?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener36} value={sci6Essay36}/>

          <span className="days">LESSON 37 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.3/primary/lesson/punnett-squares-ms-ls"
              rel="noreferrer" target="_blank"> 3.3 Punnett Squares.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit7-5275795/"
            rel="noreferrer" target="_blank"> Molecular Biology and Genetics: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are Mendel's two rules of heredity?<br/>
            2. If a pure bred black rabbit and a white rabbit mate, what will their potential offspring look like?<br/>
            3. If two hybrid Ff rabbits mate, what will the offspring look like?<br/>
            4. If you cross an Aa individual with another Aa individual, what will the genotype ratio be in the next
            generation? What will be the phenotype ratio?<br/>
            5. If you cross an AABb individual with an Aabb individual, what will the genotype ratio be in the next
            generation? What will be the phenotype ratio?<br/>
            6. If you cross an AAbb individual with an aabb individual, what will the genotype ratio be in the next
            generation? What will be the phenotype ratio?<br/>
            7. In peas, yellow seeds (Y) are dominant over green seeds (y). If a yy plant is crossed with a YY plant,
            what ratio of plants in the offspring would you predict?<br/>
            8. What ratio of plants in the offspring would you predict from a Yy x Yy cross?<br/>
            9. In guinea pigs, smooth coat (S) is dominant over rough coat (s). If an SS guinea pig is crossed with an
            ss guinea pig, what ratio of guinea pigs in the offspring would you predict?<br/>
            10. What ratio of guinea pigs in the offspring would you predict from a Ss x ss cross?<br/>
            11. Write your score from the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener37} value={sci6Essay37}/>

          <span className="days">LESSON 38 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.4/primary/lesson/dna-the-genetic-material-ms-ls"
              rel="noreferrer" target="_blank"> 3.4 DNA.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where is nuclear DNA located in a eukaryotic organism?<br/>
            2. Describe the structure of DNA.<br/>
            3. What is another name for the "sentences" that DNA encodes?<br/>
            4. What to genes tell a cell to do?<br/>
            5. How long does it take a human cell to copy the DNA in its nucleus before it divides?<br/>
            6. How many new cells does your body produce every day?<br/>
            7. What steps does the cell take to speed the rate of DNA replication?<br/>
            8. Describe the structure of DNA.<br/>
            9. What does a nucleotide consist of?<br/>
            10. What are the base-pairing rules?<br/>
            11. If one DNA strand reads CCGTAATGCAT, what will be the sequence of the complimentary strand?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener38} value={sci6Essay38}/>

          <span className="days">LESSON 39 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.5/primary/lesson/dna-structure-and-replication-ms-ls"
              rel="noreferrer" target="_blank"> 3.5 DNA Structure and Replication.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What protein molecules does DNA wrap around to form a nucleosome?<br/>
            2. What makes up chromatin?<br/>
            3. When can you see chromosomes in a cell?<br/>
            4. Are both strands of DNA copied continuously during replication? Explain your answer.<br/>
            5. Describe how DNA is replicated.<br/>
            6. Explain why DNA replication is sometimes called semiconservative.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener39} value={sci6Essay39}/>

          <span className="days">LESSON 40 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.6/primary/lesson/rna-ms-ls"
              rel="noreferrer" target="_blank"> 3.6 RNA.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does mRNA do? Where does it do this?<br/>
            2. What does tRNA do? Where does it do this?<br/>
            3. What does rRNA do? Where does it do this?<br/>
            4. Describe the structure of the ribosome.<br/>
            5. What is the role of the mRNA in the cell?<br/>
            6. Compare and contrast the composition of DNA and RNA.<br/>
            7. What are the roles of tRNA and rRNA?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener40} value={sci6Essay40}/>

          <span className="days">LESSON 41 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.7/primary/lesson/protein-synthesis-and-gene-expression-ms-ls"
              rel="noreferrer" target="_blank"> 3.7 Protein Synthesis.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a gene?<br/>
            2. What is an amino acid?<br/>
            3. If every human cell has the same genes, how can they look and function so differently?<br/>
            4. What is the relationship between DNA and proteins?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener41} value={sci6Essay41}/>

          <span className="days">LESSON 42 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.8/primary/lesson/transcription-of-dna-to-rna-ms-ls"
              rel="noreferrer" target="_blank"> 3.8 Transcription.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is RNA different from DNA?<br/> Do you think this difference is important?<br/> Why?<br/>
            2. Where is the mRNA made?<br/>
            3. Where does the mRNA go after it is produced?<br/>
            4. What is the final product of transcription?<br/>
            5. How does the genetic code in the DNA get passed on to the mRNA?<br/>
            6. What will be the mRNA sequence transcribed from a TTAAACGGCCTA template?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener42} value={sci6Essay42}/>

          <span className="days">LESSON 43 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.9/primary/lesson/translation-of-rna-to-protein-ms-ls"
              rel="noreferrer" target="_blank"> 3.9 Translation.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is translation?<br/>
            2. What is a codon?<br/>
            3. What is a stop codon?<br/>
            4. What would happen if the stop codon was mutated to encode for another amino acid?<br/>
            5. Given the DNA sequence, ATGTTAGCCGTATGC, what is the mRNA sequence?<br/> What is the amino acid sequence?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener43} value={sci6Essay43}/>

          <span className="days">LESSON 44 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.10/primary/lesson/mutations-ms-ls"
              rel="noreferrer" target="_blank"> 3.10 Mutation.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit8-5275795/"
            rel="noreferrer" target="_blank"> Molecular Biology and Genetics: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an example of a genetic disorder caused by a substitution mutation?<br/>
            2. How can a substitution mutation change a protein?<br/>
            3. Explain a frameshift mutation.<br/>
            4. What can cause a frameshift mutation?<br/>
            5. Are mutations typically beneficial to the organism?<br/>
            6. What can cause DNA to mutate?<br/>
            7. What is a frameshift mutation?<br/>
            8. Describe two types of chromosomal mutations.
            9. Write you score for the challenege.
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener44} value={sci6Essay44}/>

          <span className="days">LESSON 45 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.11/primary/lesson/modern-genetics-ms-ls"
              rel="noreferrer" target="_blank"> 3.11 Molecular Genetics Overview.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Do most of the complex phenotypes we observe come from a single gene?<br/>
            2. What has led to the rapid analysis of DNA?<br/> Where do scientists now hope to apply these tools?<br/>
            3. What are some of the phenotypic plant traits that scientists are investigating?<br/> Why do you think
            these traits were chosen?<br/>
            4. What is an allele?<br/>
            5. What is the type of allele that only affects the phenotype in the homozygous condition?<br/>
            6. If two individuals have a certain phenotype, does that mean they must have the same genotype?<br/>
            7. A tall, green plant is homozygous for each trait. If T is the tall allele, and G is the green allele,
            what is the genotype and the phenotype of this plant?<br/>


          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener45} value={sci6Essay45}/>

          <span className="days">LESSON 46 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.12/primary/lesson/pedigree-analysis-ms-ls"
              rel="noreferrer" target="_blank"> 3.12 Pedigree.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a pedigree?<br/>
            2. How might a pedigree aid a scientist?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener46} value={sci6Essay46}/>

          <span className="days">LESSON 47 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.13/primary/lesson/sex-linked-inheritance-ms-ls"
              rel="noreferrer" target="_blank"> 3.13 Sex-linked Inheritance.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the three types of color blindness?<br/> How are they caused?<br/>
            2. What is the "Law of Dominance"?<br/>
            3. Can a woman have colorblindness if her father does not?<br/> Explain your answer fully.
            4. A woman is color blind but her sister isn't. What does that tell you about their parents
            5. What are the sex chromosomes of a male and a female?<br/>
            6. Explain why the father determines the sex of the child.
            7. What is sex-linked inheritance?<br/>
            8. A son cannot inherit colorblindness from his father. Why not?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener47} value={sci6Essay47}/>

          <span className="days">LESSON 48 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.14/primary/lesson/non-mendelian-inheritance-ms-ls"
              rel="noreferrer" target="_blank"> 3.14 Non-Mendelian Inheritance.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. A dark purple flower is crossed with a white flower of the same species, and the offspring have light
            purple flowers. What type of inheritance does this describe?<br/> Explain.
            2. What is the inheritance pattern in which both alleles are expressed?<br/>
            3. What is the genotype of a person with type O blood?<br/>
            4. What is the genotype(s) of a person with type AB blood?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener48} value={sci6Essay48}/>

          <span className="days">LESSON 49 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.15/primary/lesson/polygenic-traits-ms-ls"
              rel="noreferrer" target="_blank"> 3.15 Polygenic Traits.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit9-5275795/"
            rel="noreferrer" target="_blank"> Molecular Biology and Genetics: Challenge 3.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is eye color a trait controlled by a single gene as it is often taught in schools?<br/>
            2. Do you think skin color is a polygenic trait?<br/> Explain your reasoning, and be as specific as
            possible.
            3. What is an albino? What kind of eyes would they definitely NOT have?<br/>
            4. What is known about the melanin levels in people with blue eyes?<br/>
            5. How does polygenic inheritance violate Mendel's rules?<br/>
            6. Give examples of traits governed by polygenic inheritance.<br/>
            7. Write your score for Molecular Biology and Genetics: Challenge 3.
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener49} value={sci6Essay49}/>

          <span className="days">LESSON 50 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.16/primary/lesson/genetic-disorders-ms-ls"
              rel="noreferrer" target="_blank"> 3.16 Genetic Disorders.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What do all people diagnosed with a chromosome disorder share?<br/>
            2. What is a clinical geneticist?<br/>
            3. What are they trained to do that is different from a regular doctor?<br/>
            4. What is a karyotype? Do chromosomal disorders always involve extra genetic material?<br/> Explain
            your answer.
            5. Can you be a carrier of an autosomal recessive genetic disorder?<br/>
            6. Can you be a carrier of an autosomal dominant genetic disorder?<br/>
            7. One parent is a carrier of the cystic fibrosis gene, while the other parent does not carry the allele.
            Can their child have cystic fibrosis?<br/>
            8. What is a chromosomal disorder?<br/>
            9. Explain what causes Down Syndrome.<br/>
            10. When do chromosomal defects occur?<br/>
            11. What happens to most embryos with extra chromosomes? Explain your answer.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener50} value={sci6Essay50}/>

          <span className="days">LESSON 51 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.17/primary/lesson/recombinant-dna-ms-ls"
              rel="noreferrer" target="_blank"> 3.17 Recombinant DNA.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1 .What is recombinant DNA technology?<br/>
            2. Explain the process of gene cloning.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener51} value={sci6Essay51}/>

          <span className="days">LESSON 52 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.18/primary/lesson/cloning-ms-ls"
              rel="noreferrer" target="_blank"> 3.18 Cloning.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the process of creating an animal clone.<br/>
            2. What are some reasons why human cloning is banned?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener52} value={sci6Essay52}/>

          <span className="days">LESSON 53 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.19/primary/lesson/human-genome-project-ms-ls"
              rel="noreferrer" target="_blank"> 3.19 Human Genome.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the method used by the Human Genome Project.
            2. What method was used by the Celera group?<br/>
            3. What did the Human Genome Project do with their project data within 24 hours of collection?<br/>
            4. After 3 years of sequencing, what was the status of the two group’s progress in completing the
            project? Were they ahead or behind schedule?<br/>
            5. What is the goal of the personal genome project?<br/>
            6. What information are they seeking besides a person's genome?<br/>
            7. Why participate in the PGP?<br/>
            8. What is a person's genome?<br/>
            9. Describe the Human Genome Project.<br/>
            10. Would you want to know your own genome? Why or why not?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener53} value={sci6Essay53}/>

          <span className="days">LESSON 54 </span>
          <p>Watch the video below The Century of the Gene by Crash Course.</p>
          <Video videoUrl="https://www.youtube.com/embed/TUvquCOGs3U"/>
          <p className="lessons">Write a brief summary of the video. What new things did you learn?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener54} value={sci6Essay54}/>

          <span className="days">LESSON 55 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.20/primary/lesson/gene-therapy-ms-ls"
              rel="noreferrer" target="_blank"> 3.20 Gene Therapy.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What defect causes symptoms in patients with cystic fibrosis?<br/>
            2. What are some challenges for using viruses to transfer DNA to cells?<br/>
            3. Besides viruses, what are some other methods to transfer DNA to cells?<br/>
            4. What is gene therapy?<br/>
            5. Could gene therapy someday cure the common cold? Why or why not?<br/>
            6. What's the difference between ex vivo and in vivo gene therapy?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener55} value={sci6Essay55}/>

          <span className="days">LESSON 56 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/3.21/primary/lesson/biotechnology-in-agriculture-ms-ls"
              rel="noreferrer" target="_blank"> 3.21 Agriculture.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit10-5275795/"
            rel="noreferrer" target="_blank"> Molecular Biology and Genetics: Challenge 4
          </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What approach do scientists use to disable genes in Arabidopsis?<br/> How does this work?<br/>
            2. What do scientists use to insert DNA into Arabidopsis?<br/>
            3. Can scientists insert whole genes into a plant's genome?<br/>
            4. How are the Araidopsis mutants valuable to botanists in general?<br/>
            5. What is a transgenic plant?<br/>
            6. What are three examples of how biotechnology might be used in agriculture?<br/>
            7. Write your score for Molecular Biology and Genetics: Challenge 4.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener56} value={sci6Essay56}/>

          <span className="days">LESSON 57 - Evolution</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.1/primary/lesson/theory-of-evolution-by-natural-selection-ms-ls"
              rel="noreferrer" target="_blank"> 4.1 Theory of Evolution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How long was Darwin's voyage on the HMS Beagle?<br/>
            2. Did Charles Darwin conceive of natural selection on this voyage?Explain your answer.<br/>
            3. What did Darwin notice about the finches he observed on his voyage in the Galápagos Islands?<br/>
            4. Why do the finches have differences in their beaks and claws?<br/>
            5. How might the environment influence the way in which a certain species evolves?<br/>
            6. Define biological evolution.<br/>
            7. Who was Charles Darwin?<br/>
            8. What is special about the Galápagos islands?<br/>
            9. Name an example of how animals were adapted for their specific environments on the Galápagos
            Islands.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener57} value={sci6Essay57}/>

          <span className="days">LESSON 58 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.2/primary/lesson/influences-on-darwin-ms-ls"
              rel="noreferrer" target="_blank"> 4.2 Influences on Darwin.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Who was Alfred Wallace?<br/>
            2. Where did Wallace travel?<br/> How did he pay for his trip?<br/>
            3. What happened to the collections Wallace collected in South America?<br/>
            4. How does the Malay Archipelago compare to the Galapagos Islands?<br/>
            5. What is the Wallace Line?<br/>
            6. Compare and contrast Darwin's and Lamarck's views of evolution.
            7. Why did Darwin hesitate to publish his theory?<br/>
            8. Who was Charles Lyell? What significant aspect of Lyell's influenced Darwin?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener58} value={sci6Essay58}/>

          <span className="days">LESSON 59 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.3/primary/lesson/natural-selection-ms-ls"
              rel="noreferrer" target="_blank"> 4.3 Natural Selection.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What's the difference between an acquired and inherited trait?<br/>
            2. Define natural selection.<br/>
            3. What is an adaptation?<br/>
            4. What is required for natural selection to take place?<br/>
            5. How many species are there on the planet?<br/>
            6. What's the difference between phenotype and genotype? Does natural selection act on the genotype or
            phenotype?<br/>
            7. Explain how a lethal recessive gene can stay in the gene pool.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener59} value={sci6Essay59}/>

          <span className="days">LESSON 60 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.4/primary/lesson/fossils-ms-ls"
              rel="noreferrer" target="_blank"> 4.4 Fossils.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a "tetrapod"? What question do paleontologists hope they can answer by studying them?<br/>
            2. What is special about "Boris"?<br/>
            3. What evidence is there that modern whales once had hindlimbs?<br/>
            Pakicetus and Rodhocetus are considered to be ancestors of modern whales. Scientists still argue about how
            aquatic Pakicetus was, but Rodhocetus is considered to be a largely aquatic animal.<br/>
            4. Where is the nostril located on Pakicetus?<br/>
            5. Where is the nostril located on Rodhocetus?<br/>
            6. What is the relationship in time between these two species?<br/>
            7. What modern animal is most closely related to modern whales? What is the evidence? In what kind
            of environment does this modern relation live?<br/>
            8. What is a fossil?Give three examples.<br/>
            9. What has the fossil record revealed about life on Earth?<br/>
            10. How does radioactive dating work?<br/>
            11. What is radioactive dating used for?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener60} value={sci6Essay60}/>

          <span className="days">LESSON 61 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.5/primary/lesson/structural-evidence-for-evolution-ms-ls"
              rel="noreferrer" target="_blank"> 4.5 Evolution Evidence.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a vestigial structure? Give an example.
            2. How does embryology provide evidence for evolution?<br/>
            3. Given an example of a structure that is present in human embryos, but has disappeared by birth.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener61} value={sci6Essay61}/>

          <span className="days">LESSON 62 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.6/primary/lesson/molecular-evidence-for-evolution-ms-ls"
              rel="noreferrer" target="_blank"> 4.6 Molecular Evidence.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit11-5275795/"
            rel="noreferrer" target="_blank"> Evolution: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is the genetic sequence of an organism like a blueprint of that organism?<br/>
            2. If two organisms have almost identical sequences for the same gene, are they considered closely
            related?<br/>
            3. What type of animal have scientists long thought was basal to all other animals? How has genetic
            analysis affected this view?<br/>
            4. How has genetic analysis become quicker than it once was? How has that greatly helped with the
            search for a basal organism?<br/>
            5. What is a regulatory gene?<br/> How might they explain differences between organisms?<br/>
            6. What are "hox genes"?<br/> What phase of development are they a part of? What organisms have hox
            genes?<br/>
            7. If you find a fly with a leg coming out of its head and can identify what happened genetically to cause
            this, what have you discovered?<br/>
            8. Explain how scientists use a molecular clock to determine relationships between species.
            9. What is a genome?<br/>
            10. What two species from the following should have the fewest differences in their genomes: chicken, mouse,
            duck, gorilla?<br/>
            11. What two species from the following should have the most differences in their genomes: frog, mouse, cow,
            human?<br/>
            12. Write your score from the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener62} value={sci6Essay62}/>

          <span className="days">LESSON 63 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.7/primary/lesson/microevolution-and-macroevolution-ms-ls"
              rel="noreferrer" target="_blank"> 4.7 Microevolution and Macroevolution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does microevolution differ from macroevolution with regard to species?<br/>
            2. What are four factors believed to cause microevolution? How do these four factors relate to
            macroevolution?<br/>
            3. What happens to the allele frequency of genes in a population that has undergone microevolution?<br/>
            4. What is phyletic gradualism? How does this differ from "punctuated equilibrium"?<br/>
            5. What was the Cambrian Explosion? When did it occur?<br/>
            6. Do you think the Cambrian Explosion represents microevolution or macroevolution? Explain your
            reasoning.<br/>
            7. What are some of the ideas about the cause of the Cambrian Explosion?<br/>
            8. How much similarity can be seen between the current body plans of organisms and the body plans seen in
            fossils from the Cambrian Period?<br/>
            9. How do you know if two related organisms are members of the same species?<br/>
            10. Compare and contrast microevolution and macroevolution.
            11. Does microevolution lead to a new species? Why or why not?<br/>
            12. What is the outcome of many microevolution events?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener63} value={sci6Essay63}/>

          <span className="days">LESSON 64 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.8/primary/lesson/hardy-weinberg-theorem-ms-ls"
              rel="noreferrer" target="_blank"> 4.8 Hardy-Weinberg.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an allele?<br/>
            2. What is meant by genetic equilibrium?<br/>
            3. What conditions are required for the Hardy-Weinberg model to apply?<br/>
            4. Why is Hardy-Weinberg equlilibrium unlikely?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener64} value={sci6Essay64}/>

          <span className="days">LESSON 65 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.9/primary/lesson/origin-of-species-ms-ls"
              rel="noreferrer" target="_blank"> 4.9 Origin of Species.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit12-5275795/"
            rel="noreferrer" target="_blank"> Evolution: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is allopatric speciation?<br/>
            2. Give two examples of events that can cause physical separation of members of a population?<br/>
            3. How did scientists determine if the shrimp were two different species?<br/>
            4. What is a diatom?<br/>
            5. Where is Stephanodiscus yellowstonensis found?<br/>
            6. What technique did scientists use to determine what diatoms occurred historically in the lake where
            Stephanodiscus yellowstonensis now occurs?<br/>
            7. What were the environmental conditions when Stephanodiscus niagarae lived in the lake?<br/>
            8. What has happened to the diatoms in the lake as the climate has changed over the last 14,000 years?<br/>
            9. Compare and contrast natural selection and artificial selection.<br/>
            10. What is meant by reproductive isolation?<br/>
            11. Compare and contrast allopatric speciation and sympatric speciation.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener65} value={sci6Essay65}/>

          <span className="days">LESSON 66 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.10/primary/lesson/tracing-evolution-ms-ls"
              rel="noreferrer" target="_blank"> 4.10 Tracing Evolution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Are we descended from chimpanzees? Explain your answer.<br/>
            2. When reading an evolutionary tree, what does it mean if two species are very close on the tree?<br/>
            3. What does it mean if two species are very far apart on a tree?<br/>
            4. What five species comprise the Great Apes?<br/>
            5. How fast is evolution?<br/>
            6. What is the purpose of an evolutionary tree?<br/>
            7. Who came up with the idea for the evolutionary tree?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener66} value={sci6Essay66}/>

          <span className="days">LESSON 67 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.11/primary/lesson/origins-of-life-ms-ls"
              rel="noreferrer" target="_blank"> 4.11 First Cell.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the environmental conditions like in Shark Bay? How does this differ from other oceanic
            conditions?<br/>
            2. What type of organism do scientists believe was responsible for the increase in oxygen (O2) in the
            Earth's atmosphere?<br/>
            3. What types of structures did these organisms build that scientists are studying today? How old are
            the oldest of these structures?<br/>
            4. When did the abundance of stromatolites go into decline? What else happened at this time?<br/>
            5. What are thrombolites? How do they differ from stromatolites?<br/>
            6. How did life on Earth begin?<br/>
            7. Describe how the early atmosphere of Earth was different than it is today.<br/>
            8. List three gases present in the early atmosphere.<br/>
            9. How long did it take to develop the first life forms?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener67} value={sci6Essay67}/>

          <span className="days">LESSON 68 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/4.12/primary/lesson/timeline-of-evolution-ms-ls"
              rel="noreferrer" target="_blank"> 4.12 Geologic Time Scale.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit13-5275795/"
            rel="noreferrer" target="_blank"> Evolution: Challenge 3</a>
          </p>

          <p className="lessons">Answer the questions below. <br/>
            1. Most fossils found are not of complete organisms. How have scientists responded to this
            situation? What challenges has this presented?<br/>
            2. What were some of the theories as to what type of animal Anomalocaris was? What happened to cause
            these theories to be abandoned?<br/>
            3. How is Anomalocaris an example of the scientific process?<br/>
            4. What is a significant piece of evidence that was used in the 1800s to suggest Earth is very old?<br/>
            5. Relative to the length of time life has been on Earth, have modern humans appeared recently or in the
            distant past?<br/>
            6. What types of geological events help define geological time scales?<br/>
            7. When did life on Earth begin? What was the first form of life?<br/>
            8. What was the Cambrian Explosion?<br/>
            9. Write you score from the challenege.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener68} value={sci6Essay68}/>

          <span className="days">LESSON 69 - Viruses and Prokaryotes</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.1/primary/lesson/viruses-ms-ls"
              rel="noreferrer" target="_blank"> 5.1 Viruses</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do viruses reproduce? How does this differ from other organisms?<br/>
            2. What kinds of nucleic acids can viruses have?<br/>
            3. Explain one of the theories as to how viruses came to be.
            4. What is the importance of the "envelope" to a virus? What is the envelope made of?<br/>
            5. What is a difference between the lytic cycle of a virus and the lysogenic cycle?<br/>
            6. What is one way a flu virus can kill a human?<br/>
            7. Do mutations make viruses more deadly? Why or why not?<br/>
            8. Is a virus a living thing? Why or why not?<br/>
            9. Name four examples of human diseases caused by a virus.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener69} value={sci6Essay69}/>

          <span className="days">LESSON 70 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.2/primary/lesson/bacteria-characteristics-ms-ls"
              rel="noreferrer" target="_blank"> 5.2 Bacteria Characteristics.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does the word prokaryote mean?<br/>
            2. How does bacterial DNA differ from the DNA in eukaryotic cells? What is one explanation for this
            difference?<br/>
            3. What is the bacterial capsule? Are all bacterial capsules made of the same material?<br/>
            4. How does the movement of bacterial flagella differ from the movement of eukaryotic flagella?<br/>
            5. Describe three features of a bacterial cell?<br/>
            6. What is the nucleoid?<br/>
            7. What is a plasmid?<br/>
            8. How are bacteria classified?<br/>
            9. How are bacterial cells like your cells?<br/>
            10. How are bacterial cells different from your cells?<br/>
            11. Describe the bacterial flagella.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener70} value={sci6Essay70}/>

          <span className="days">LESSON 71 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.3/primary/lesson/bacteria-nutrition-ms-ls"
              rel="noreferrer" target="_blank"> 5.3 Bacteria Nutrition.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the three nutritional types of bacteria?<br/>
            2. What is the base energy source for these three types?<br/>
            3. Give an example of a photoautotroph.<br/>
            4. What is the difference between a heterotroph and an autotroph?<br/>
            5. What is the difference between aerobic, anaerobic, and facultative anaerobic bacteria?<br/>
            6. What are two ways bacteria play important roles in the ecosystem?<br/>
            7. Describe two ways that bacteria obtain nutrients and energy?<br/>
            8. What is an example of a mutualism with a bacteria?<br/>
            9. What is an example of a photosynthetic bacteria.<br/>
            10. Describe the importance of chemosynthetic bacteria.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener71} value={sci6Essay71}/>

          <span className="days">LESSON 72 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.4/primary/lesson/bacteria-reproduction-ms-ls"
              rel="noreferrer" target="_blank"> 5.4 Bacteria Reproduction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. There are approximately 7 billion humans on the planet. How long would it take some bacteria to make 7
            billion copies of themselves?<br/>
            2. Describe how bacteria reproduce?<br/>
            3. How do bacteria exchange DNA?<br/>
            4. What is binary fission?<br/>
            5. What is transformation involving bacteria?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener72} value={sci6Essay72}/>

          <span className="days">LESSON 73 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.5/primary/lesson/helpful-bacteria-ms-ls"
              rel="noreferrer" target="_blank"> 5.5 Bacteria and Humans.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit14-5275795/"
            rel="noreferrer" target="_blank"> Viruses and Prokaryotes: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the gut bacteria differ between the small intestine and the large intestine?<br/>
            2. What can happen if something causes a reduction of "good" bacteria in your gut?<br/>
            3. How do the number of bacterial cells in your intestines compare to the total number of cells in your
            body?<br/>
            4. What is one of the uses of serotonin in the body?<br/>
            5. What have scientists discovered about the relationship between gut bacteria and serotonin?<br/>
            6. What do scientists hope to do with this information?<br/>
            7. How are bacteria helpful in ecosystems?<br/>
            8. How are bacteria beneficial to your health?<br/>
            9. List two foods produced with the help of bacteria.
            10. What are three examples of diseases caused by bacteria?<br/>
            11. How can you prevent food poisoning?<br/>
            12. How are bacterial diseases treated?<br/>
            13. Write you score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener73} value={sci6Essay73}/>

          <span className="days">LESSON 74 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.6/primary/lesson/archaea-ms-ls"
              rel="noreferrer" target="_blank"> 5.6 Archaea.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe two ways archaea are different from bacteria?<br/>
            2. How can archaea reproduction be distinct from bacterial reproduction?<br/>
            3. How do most archaea obtain energy?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener74} value={sci6Essay74}/>

          <span className="days">LESSON 75 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/5.7/primary/lesson/types-of-archaea-ms-ls"
              rel="noreferrer" target="_blank"> 5.7 Types of Archaea.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit15-5275795/"
            rel="noreferrer" target="_blank"> Viruses and Prokaryotes: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where can archaea be found? Where were they first found?<br/>
            2. How does the cell wall of archaea differ from the common cell wall of bacteria?<br/>
            3. How do the different phospholipids used by archaea allow them to withstand harsh environments?<br/>
            4. If you wanted to find a photosynthetic archaea where would be a good place to look? Why?<br/>
            5. Where do halophiles live?<br/>
            6. Why are some archaea classified as thermophiles?<br/>
            7. What is an example of a mutualistic relationship between archaea and another organism?<br/>
            8. Write your score for Challenge 2.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener75} value={sci6Essay75}/>

          <span className="days">LESSON 76 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/6.1/primary/lesson/protist-characteristics-ms-ls"
              rel="noreferrer" target="_blank"> Protists and Fungi: 6.1 Protist Characteristics</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What defines the Kingdom Protista?<br/>
            2. Are relationships between protists clearly defined? Why or why not?<br/>
            3. What are phototrophs? How do they obtain their food? Give an example.<br/>
            4. What are organotrophs?<br/>
            5. Do all protists reproduce in the same manner? Explain.<br/>
            6. What do all protists tend to have in common?<br/>
            7. How are protists generally classified?<br/>
            8. What can generally be said about the environments of protists?<br/>
            9. Why is the Kingdom Protista referred to as the "junk drawer" kingdom?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener76} value={sci6Essay76}/>

          <span className="days">LESSON 77 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/6.7/primary/lesson/fungi-ms-ls"
              rel="noreferrer" target="_blank"> 6.7 Fungi.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are two ways fungi differ from plants?<br/>
            2. How many spores can a fungi disperse per day? What methods of dispersal do they use?<br/>
            3. How do fungi benefit trees?<br/>
            4. How are fungi different from plants.
            5. What are three common types of fungi?<br/>
            6. Where might fungi live? Give two habitats.<br/>
            7. Describe how fungi absorb nutrients.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener77} value={sci6Essay77}/>

          <span className="days">LESSON 78 - Plants </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.1/primary/lesson/plant-characteristics-ms-ls"
              rel="noreferrer" target="_blank"> 7.1 Plant Characteristics.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What three characteristics do all plants share?<br/>
            2. What is the role of they plant cell wall?<br/>
            3. What allows for photosynthesis in the plant cell?<br/>
            4. What is the main difference between a sporophyte and a gametophyte?<br/>
            5. If a fern is a plant, then what are three characteristics you know to be true about ferns?<br/>
            6. Mushrooms gain their energy from decomposing dead organisms. Explain why a mushroom is not a plant.<br/>
            7. What is the organelle of photosynthesis?<br/>
            8. Describe the relationship between producers and autotrophs.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener78} value={sci6Essay78}/>

          <span className="days">LESSON 79 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.2/primary/lesson/plants-adaptations-for-life-on-land-ms-ls"
              rel="noreferrer" target="_blank"> 7.2 Plant Evolution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. In what groups of plants do you find xylem and phloem? (Refer to the Plant Classification concept if
            necessary.)<br/>
            2. What does xylem and phloem each transport? In what direction do xylem and phloem transport these
            substances?<br/>
            3. What is transpirational pull? How is it key to the functioning of xylem?<br/>
            4. How are plants different from green algae? How are they the same?<br/>
            5. What is the purpose of vascular tissue?<br/>
            6. How do plants prevent excess water loss?<br/>
            7. Compare xylem to phloem.<br/>
            8. What is the role of stomata?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener79} value={sci6Essay79}/>

          <span className="days">LESSON 80 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.3/primary/lesson/plant-reproduction-and-life-cycle-ms-ls"
              rel="noreferrer" target="_blank"> 7.3 Plant Reproduction and Life Cycle.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. When does meiosis occur during a plant's life cycle?<br/>
            2. When does mitosis occur during a plant's life cycle?<br/>
            3. How do gametophytes with both male and female parts avoid self-fertilization?<br/>
            4. Describe the fertilization process for an Angiosperm.<br/>
            5. What is the difference between a haploid and diploid cell?<br/>
            6. What does "alternation of generations" mean?<br/>
            7. What part of the plant life cycle is made of haploid cells, the sporophyte or the gametophyte?<br/>
            8. What process is used by the sporophyte to produce spores?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener80} value={sci6Essay80}/>

          <span className="days">LESSON 81 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.4/primary/lesson/plant-classification-ms-ls"
              rel="noreferrer" target="_blank"> 7.4 Plant Classification.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What plant groups are included in non-vascular plants?<br/>
            2. Give an example of a seedless vascular plant.<br/>
            3. What groups of plants have seeds?<br/>
            4. What groups of plants have fruit?<br/>
            5. Where do you usually find non-vascular plants? Why?<br/>
            6. What distinguishes the gymnosperms from other plants?<br/>
            7. What were the first types of plants to evolve?<br/>
            8. List the following major features of plants in the order they evolved: seeds, vascular tissue,
            flowers.<br/>
            9. Give two examples of seedless vascular plants.<br/>
            10. Give two examples of angiosperms.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener81} value={sci6Essay81}/>

          <span className="days">LESSON 82 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.5/primary/lesson/nonvascular-plants-ms-ls"
              rel="noreferrer" target="_blank"> 7.5 Nonvascular Plants.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do bryophytes keep their eggs from drying out?<br/>
            2. How does bryophyte sperm locate the bryophyte egg?<br/>
            3. What happens in the archegonia?<br/>
            4. What happens in the antheridium?<br/>
            5. Where does fertilization of the bryophyte egg occur?<br/>
            6. What is a bryophyte?<br/>
            7. What are examples of nonvascular plants?<br/>
            8. Why do nonvascular plants tend to be very short?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener82} value={sci6Essay82}/>

          <span className="days">LESSON 83 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.6/primary/lesson/vascular-seedless-plants-ms-ls"
              rel="noreferrer" target="_blank"> 7.6 Vascular Plants.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many species of ferns and horsetails have scientists identified today?<br/>
            2. How do scientists feel the present day diversity of ferns and horsetails compares to the diversity of
            these plants before the appearance of plants with seeds?<br/>
            3. What sex are the spores of a fern?<br/>
            4. What happens to the fertilized embryo of a fern?<br/>
            5. Why are the vascular seedless plants different from the nonvascular plants?<br/>
            6. What are two examples of vascular seedless plants?<br/>
            7. What is the role of vascular tissue in plants?<br/>
            8. What was the primary result of the evolution of vascular tissue in plants?<br/>
            9. What is the most common seedless vascular plant?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener83} value={sci6Essay83}/>

          <span className="days">LESSON 84 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.7/primary/lesson/reproduction-in-seedless-plants-ms-ls"
              rel="noreferrer" target="_blank"> 7.7 Life Cycle of Seedless Vascular Plants.</a>
          </p>          <p>Complete <a
          href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit17-5275795/"
          rel="noreferrer" target="_blank"> Plants: Challenge 1</a>
        </p>

          <p className="lessons">Answer the questions below. <br/>
            1. Where can the sorus on ferns be found?<br/>
            2. What is found in the sorus?<br/>
            3. How is the mechanism that causes spores to be released similar to the mechanism that causes water to move
            up xylem? Explain your answer.<br/>
            4. What is meant by a bisexual gametophyte?<br/>
            5. What is the affect of the plant hormone antheridiogen? Why is this hormone crucial to ferns?<br/>
            6. How do some seedless plants reproduce asexually?<br/>
            7. What is alternation of generations?<br/>
            8. Why must nonvascular plants live in moist environments?<br/>
            9. Compare and contrast the fern gametophyte and sporophyte.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener84} value={sci6Essay84}/>

          <span className="days">LESSON 85 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.8/primary/lesson/importance-of-seedless-plants-ms-ls"
              rel="noreferrer" target="_blank"> 7.8 Importance of Plants</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does coal form?<br/>
            2. Low sulfur coal produces less pollution when burned than high sulfur coal. Name one factor that affects
            the sulfur content in coal.<br/>
            3. How do scientists feel the Powder River Basin coal was formed?<br/>
            4. How was coal formed?<br/>
            5. What is one use of ferns?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener85} value={sci6Essay85}/>

          <span className="days">LESSON 86 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.9/primary/lesson/seeds-and-seed-dispersal-ms-ls"
              rel="noreferrer" target="_blank"> 7.9 Seed Dispersal.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are four mechanisms of seed and fruit dispersal?<br/>
            2. What is the difference between a true fruit and a false fruit? Give an example of each.<br/>
            3. List three ways that animals disperse fruit and seeds?<br/>
            4. What causes the "explosion" for the explosive dispersal of seeds?<br/>
            5. What is a seed?<br/>
            6. Why was the evolution of the seed so beneficial to plants?<br/>
            7. Why is the vast dispersal of seeds beneficial to plants?<br/>
            8. What are two ways that fruits are adapted to disperse seeds?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener86} value={sci6Essay86}/>

          <span className="days">LESSON 87 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.10/primary/lesson/gymnosperms-ms-ls"
              rel="noreferrer" target="_blank"> 7.10 Seed Plants.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Which division of gymnosperm has the most living species? How many species are in this
            division?<br/>
            2. Where are cycads most abundant?<br/>
            3. Where are conifers most abundant?<br/>
            4. What are the characteristics of conifers?<br/>
            5. What climate change led to conifers becoming more abundant than ferns? When did this occur?<br/>
            6. What features define the gymnosperms?<br/>
            7. What are two examples of conifers?<br/>
            8. Where are the reproductive structures of conifers located?<br/>
            9. What was the dominant plant during the Age of Dinosaurs?<br/>
            10. What gymnosperm is known as a living fossil? Explain your answer.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener87} value={sci6Essay87}/>

          <span className="days">LESSON 88 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.11/primary/lesson/angiosperms-ms-ls"
              rel="noreferrer" target="_blank"> 7.11 Angiosperm.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many species of angiosperms exist today?<br/>
            2. How many species of gymnosperm exist today?<br/>
            3. When did angiosperms become the most abundant type of plant on the planet?<br/>
            4. When do angiosperms grow fruit?<br/>
            5. Where are the sex organs of angiosperms located?<br/>
            6. What part of the plant becomes the fruit?<br/>
            7. What is the difference between a superior and inferior ovary?<br/>
            8. How are angiosperms like gymnosperms?<br/> How are they different?<br/>
            9. What makes up the female part of the flower?<br/>
            10. What part of the flower is the male gametophyte?<br/>
            11. What is self-pollination?<br/>
            12. How does pollen travel to another plant?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener88} value={sci6Essay88}/>

          <span className="days">LESSON 89 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.12/primary/lesson/plant-hormones-ms-ls"
              rel="noreferrer" target="_blank"> 7.12 Plant Hormones.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What hormones stimulate plant growth?<br/>
            2. What hormones inhibit plant growth?<br/>
            3. Why is it important for a plant to be able to both stimulate and inhibit growth? Explain your
            answer.<br/>
            4. Do you think hormones are more important to plants or mammals? Explain your thinking.<br/>
            5. What are three stimuli that plants respond to?<br/>
            6. List the roles of gibberellins.<br/>
            7. What hormone is involved in fruit ripening?<br/>
            8. What happens to an unripe fruit when placed in a paper bag with a ripe fruit?<br/>
            9. What is apical dominance?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener89} value={sci6Essay89}/>

          <span className="days">LESSON 90 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.13/primary/lesson/tropisms-ms-ls"
              rel="noreferrer" target="_blank"> 7.13 Tropisms.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Explain how scientists determined that the signal for phototropism was occurring in the growing tip of a
            plant?<br/>
            2. Explain how scientists determined the signal for phototropism migrated up and down a plant shoot but did
            not move across the plant shoot?<br/>
            3. How did an agar block help scientists determine that some substance moving through the plant was
            responsible for the phototropic response?<br/>
            4. What hormone causes the phototropic response to light?<br/>
            5. What is a tropism?<br/>
            6. If you tip a plant on its side, what will happen? Why?<br/>
            7. The tendril of a bean meets a metal pole. What will happen to the tendril? Why?<br/>
            8. Why do leaves and stems grow towards light?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener90} value={sci6Essay90}/>

          <span className="days">LESSON 91 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/7.14/primary/lesson/seasonal-changes-in-plants-ms-ls"
              rel="noreferrer" target="_blank"> 7.14 Plant Adaptations.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit18-5275795/"
            rel="noreferrer" target="_blank"> Plants: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where does leaf color come from?<br/>
            2. How do leaves change color?<br/>
            3. Do leaves change color because of weather?<br/>
            4. How does temperature affect the color of the leaves?<br/>
            5. Why do leaves fall?<br/>
            6. How do plants detect the change in seasons?<br/>
            7. What signals a tree to drop its leaves?<br/>
            8. Distinguish between long-day plants and short-day plants.<br/>
            9. Give two examples of long-day plants.<br/>
            10. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener91} value={sci6Essay91}/>

          <span className="days">LESSON 92 - Animals </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.1/primary/lesson/animal-behaviors-ms-ls"
              rel="noreferrer" target="_blank"> 8.1 Animal Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. When do animals learn innate behavior?<br/>
            2. Can you think of why "grasping" behavior would help human babies survive?<br/>
            3. A crow vending machine is associated with what type of learning?<br/>
            4. Compare and contrast "trial and error" learning and "observational" learning.<br/>
            5. How do "mirror neurons" work?<br/>
            6. What type of behavior do you think the sea anemone (Stomphia coccinea) is exhibiting? Explain your
            thinking fully and be specific.<br/>
            7. What are two examples of animal behaviors that are aimed at getting food?<br/>
            8. What are two examples of animal behaviors that are aimed at protecting the young?<br/>
            9. What is meant by fitness? What is the relationship between animal behaviors and fitness?<br/>
            10. Is there a relationship between genes and fitness? Explain your answer.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener92} value={sci6Essay92}/>

          <span className="days">LESSON 93 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.2/primary/lesson/innate-behavior-of-animals-ms-ls"
              rel="noreferrer" target="_blank"> 8.2 Innate Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many different types of behavior can you see in the crabs in this video? Which behaviors of the
            crabs do you think are innate and which are learned?<br/>
            2. How many different types of behavior can you see in the stingray? Which behaviors of the stingray do
            you feel are innate and which are learned?<br/>
            3. What is an innate behavior?<br/>
            4. What are two examples of reflex behaviors in humans?<br/>
            5. What are two examples of innate behavior in animals?<br/>
            6. Is an instinct an innate behavior? Explain your answer.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener93} value={sci6Essay93}/>

          <span className="days">LESSON 94 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.3/primary/lesson/learned-behavior-of-animals-ms-ls"
              rel="noreferrer" target="_blank"> 8.3 Learned Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. The octopuses in the two videos both opened jars. Do you think they are both displaying the same type of
            learning? Explain your reasoning fully, and be as specific as you can be.<br/>
            2. Do you think the amount of time it takes an octopus to open the jar is reflective of
            intelligence? Explain your thinking fully.<br/>
            3. What is observational learning? Give an example.<br/>
            4. What is conditioning?<br/>
            5. Why are some crows not afraid of scarecrows?<br/>
            6. Describe insight learning. Give an example.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener94} value={sci6Essay94}/>

          <span className="days">LESSON 95 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.4/primary/lesson/social-behavior-of-animals-ms-ls"
              rel="noreferrer" target="_blank"> 8.4 Social Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. In the video about the wolves, do you think they are displaying learned behavior, innate behavior, or
            both? Explain your reasoning fully.<br/>
            2. As social animals, which behavior do you think is most important to them? Explain your reasoning.<br/>
            3. Does your answer apply to all situations?<br/>
            4. What makes social animals unique?<br/>
            5. Give three examples of social animals.<br/>
            6. What is one example of how social animals cooperate?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener95} value={sci6Essay95}/>

          <span className="days">LESSON 96 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.5/primary/lesson/cyclic-behavior-of-animals-ms-ls"
              rel="noreferrer" target="_blank"> 8.5 Cyclic Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the largest migration of animals on the planet? When does this occur?<br/>
            2. Why do animals undergo this migration? What types of organisms undergo this migration?<br/>
            3. How does the timing of this migration vary throughout the year?<br/>
            4. What are two examples of yearly cycles of behavior?<br/>
            5. What is the difference between a nocturnal and a diurnal animal?<br/>
            6. What is a circadian rhythm?<br/>
            7. What controls circadian rhythms in humans?Explain how this process works.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener96} value={sci6Essay96}/>

          <span className="days">LESSON 97 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.6/primary/lesson/reproductive-behavior-of-animals-ms-ls"
              rel="noreferrer" target="_blank"> 8.6 Reproductive Behavior.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Notice the male elk (Cervus canadensis) which enters the video at the 2:05 mark. What do you think it is
            trying to do? Do you think its behavior helps or hurts the survival of elk in Yellowstone National
            Park?<br/>
            2. What sort of behavior are the male elk displaying?<br/>
            3. What is a courtship behavior. Give an example.<br/>
            4. Give an example of display behavior exhibited by a territorial animal.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener97} value={sci6Essay97}/>

          <span className="days">LESSON 98 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/8.7/primary/lesson/animal-communication-ms-ls"
              rel="noreferrer" target="_blank"> 8.7 Communication.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit19-5275795/"
            rel="noreferrer" target="_blank"> Animals: Challenge</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are some of the different ways tigers (Panthera tigris) communicate?<br/>
            2. In what sort of ways do tigers communicate through smell?<br/>
            3. Do you think using different smells to communicate is analogous to using different words? Explain
            your reasoning.<br/>
            4. What is communication?<br/>
            5. Why is communication important?<br/>
            6. Give two examples of how animals communicate with scent.<br/>
            7. Give two examples of how animals communicate through sight.<br/>
            8. Define language.<br/>
            9. Write your score for the Animals Challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener98} value={sci6Essay98}/>

          <span className="days">LESSON 99 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/9.1/primary/lesson/invertebrates-ms-ls"
              rel="noreferrer" target="_blank"> 9.1 Invertebrate Diversity</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where do invertebrates live?<br/>
            2. What do invertebrates eat?<br/>
            3. Why are invertebrates important to the environment?<br/>
            4. What are the main invertebrate groups?<br/>
            5. What are three examples of invertebrates?<br/>
            6. How do you determine if an animal is an invertebrate?<br/>
            7. About what percent of the animal kingdom is composed of invertebrates?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener99} value={sci6Essay99}/>

          <span className="days">LESSON 100  - Vertebrates </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.1/primary/lesson/chordates-ms-ls"
              rel="noreferrer" target="_blank"> 10.1 Chordates.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does the nerve cord in Amphioxus do?<br/>
            2. What is a notochord, and what characteristics does it give Amphioxus?<br/>
            3. What signs of a notochord do we see in human beings (Homo sapiens)?<br/>
            4. What is the relationship of the vertebrate backbone to the vertebrate skeleton?<br/>
            5. What is the main common feature of all chordates?<br/>
            6. Name three examples of chordates.<br/>
            7. List three characteristics of chordates.<br/>
            8. What is the dorsal hollow nerve cord?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener100} value={sci6Essay100}/>

          <span className="days">LESSON 101 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.2/primary/lesson/vertebrate-characteristics-ms-ls"
              rel="noreferrer" target="_blank"> 10.2 Vertebrate Diversity.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit26-5275795/"
            rel="noreferrer" target="_blank"> Vertebrates: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What do scientists feel was a key factor in vertebrates getting "big"?<br/>
            2. What advantages do big animals have over small animals?<br/>
            3. What advantages do small animals have over big animals?<br/>
            4. What did jaws allow vertebrates to do?<br/>
            5. What is a "larvacean"?How does it feed?<  br/>
            6. What are five examples of vertebrates?<br/>
            7. What are the primary feature shared by vertebrates? What is the role of this feature?<br/>
            8. What is the defining characteristic of the cartilaginous fish?<br/>
            9. What are the defining characteristics of reptiles?<br/>
            10. What is the defining characteristic of mammals?<br/>
            11. Write your score for the challenge.
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener101} value={sci6Essay101}/>

          <span className="days">LESSON 102 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.16/primary/lesson/birds-ms-ls"
              rel="noreferrer" target="_blank"> 10.16 Birds.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What benefits do birds gain from being able to fly?<br/>
            2. Where do you see scales on birds?<br/>
            3. What do scientists think was the first use of feathers?<br/>
            4. How are the feathers of birds similar to the fur of mammals? Consider this question in terms of form
            and function.<br/>
            5. How do the oxygen requirements of birds differ from the oxygen requirements of reptiles? Why does
            this difference exist?<br/>
            6. Where do Emperor penguins live?<br/>
            7. How do they conserve warmth?<br/>
            8. What do they eat?<br/>
            9. Can all birds fly?<br/>
            10. What are three key features of birds?<br/>
            11. What is unique about a bird's digestive system?<br/>
            12. How are birds adapted for flight?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener102} value={sci6Essay102}/>

          <span className="days">LESSON 103 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.17/primary/lesson/bird-reproduction-ms-ls"
              rel="noreferrer" target="_blank"> 10.17 Bird Reproduction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe two of the displays used by male pheasants to attract females.<br/>
            2. Why might a display be dangerous for the African widowbird?<br/>
            3. Why do you think birds maintain mating displays which are dangerous to them? What benefit do they
            seem to gain?<br/>
            4. Do you think that the complexity of birds' mating behavior is reflective of their
            intelligence? Explain your response.<br/>
            5. How long do mated bird pairs stay together?<br/>
            6. Why is parental care by both parents important for some birds?<br/>
            7. What are examples of displays used by birds to attract mates?<br/>
            8. Describe parental care of offspring in birds.<br/>
            9. Distinguish between altricial and precocial birds.<br/>
            10. Give three examples of precocial birds.<br/>
            11. What is brood parasitism?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener103} value={sci6Essay103}/>

          <span className="days">LESSON 104 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.18/primary/lesson/diversity-of-birds-ms-ls"
              rel="noreferrer" target="_blank"> 10.18 Bird Diversity</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the fastest animal on the planet? How fast is this animal?<br/>
            2. How much g-force can a diving raptor experience? How would humans respond to these forces?<br/>
            3. What is a generalist? Name one bird that is a generalist.<br/>
            4. List three carnivorous birds.<br/>
            5. Give two examples of flightless birds.<br/>
            6. Give two examples of how a bird's beak is adapted to a specific food source.<br/>
            7. Give two examples of how a bird's feet are adapted to a specific environment.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener104} value={sci6Essay104}/>

          <span className="days">LESSON 105 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.19/primary/lesson/importance-of-birds-ms-ls"
              rel="noreferrer" target="_blank"> 10.19 Importance of Birds.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit30-5275795/"
            rel="noreferrer" target="_blank"> Vertebrates: Challenge </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. For what purposes are people using guano?<br/>
            2. How does climate affect the quality of bird guano? Why is this quality important to the use of guano
            as fertilizer?<br/>
            3. What is poultry?<br/>
            4. What are two ways birds are important to humans?<br/>
            5. What are two ways birds are important to the ecosystem?<br/>
            6. How to birds disperse seeds? Give two examples of fruit-eating birds.<br/>
            7. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener105} value={sci6Essay105}/>

          <span className="days">LESSON 106 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.20/primary/lesson/mammal-characteristics-ms-ls"
              rel="noreferrer" target="_blank"> 10.20 Mammal Overview.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do mammals differ from other vertebrates?<br/>
            2. What characteristics are unique to mammals?<br/>
            3. What characteristics did the famous fossil "Ida" display?<br/>
            4. What did she probably eat based on her dentition?<br/>
            5. What do her eyes tell us about her probable behavior?<br/>
            6. What type of mammal was Ida?<br/> How is this known?<br/>
            7. What are three characteristics of mammals?<br/>
            8. What is meant by viviparous?<br/>
            9. What are monotremes?<br/> Give an example.<br/>
            10. What is the largest land mammal?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener106} value={sci6Essay106}/>

          <span className="days">LESSON 107 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.21/primary/lesson/mammal-reproduction-ms-ls"
              rel="noreferrer" target="_blank"> 10.21 Mammal Reproduction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How are monotremes more like reptiles and birds than other mammals?<br/>
            2. What's the difference between marsupial and placental animals?<br/>
            3. What are three marsupials?<br/>
            4. Define and describe the role of the placenta.<br/>
            5. What is sexual dimorphism?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener107} value={sci6Essay107}/>

          <span className="days">LESSON 108 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.22/primary/lesson/mammal-classification-ms-ls"
              rel="noreferrer" target="_blank"> 10.22 Mammal Classification.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the average size of a mammal?<br/>
            2. What groups of mammals are most abundant?<br/>
            3. How often does Dr. Healey find new species in his work?<br/>
            4. How does the diversity of bats compare to the diversity of other mammals in the Philippines?<br/> What
            does this tell you about generalized statements about species diversity?<br/>
            5. Where does the platypus (Ornithorhynchus anatinus) live?<br/>
            6. What do platypus eat?<br/>
            7. How do platypus look for food?<br/>
            8. What is the purpose of the "spur" on males?<br/>
            9. What are rodents? Give two examples.<br/>
            10. What are characteristics of primates. Give three examples of primates.<br/>
            11. What are ungulates? Give four examples.<br/>
            12. List five examples of carnivores.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener108} value={sci6Essay108}/>

          <span className="days">LESSON 109 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.23/primary/lesson/importance-of-mammals-ms-ls"
              rel="noreferrer" target="_blank"> 10.23 Importance of Mammals.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many sled dogs are there living above the Arctic Circle in Greenland?<br/>
            2. How far can a sled dog team travel in a day?<br/>
            3. What advantages do sled dogs have over snowmobiles?<br/>
            4. What are some ways in which the Inuit depend on sled dogs?<br/>
            5. How do mammals impact ecosystems? Describe two ways.<br/>
            6. Describe one symbiotic relationship between mammals.<br/>
            7. How do mammals help people? Describe two ways.<br/>
            8. Which mammals is your favorite? Why?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener109} value={sci6Essay109}/>

          <span className="days">LESSON 110 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.24/primary/lesson/primates-ms-ls"
              rel="noreferrer" target="_blank"> 10.24 Primates.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do primates differ from other animals?<br/>
            2. How do prosimians differ from monkeys?<br/>
            3. How do Old World monkeys differ from New World monkeys?<br/>
            4. How do apes differ from monkeys?<br/>
            5. What's the difference between monkeys and apes?<br/>
            6. What is an opposable thumb?<br/>
            7. What is the significance of a large cerebrum?<br/>
            8. What is meant by pentadactyl?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener110} value={sci6Essay110}/>

          <span className="days">LESSON 111 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/10.25/primary/lesson/humans-and-primates-ms-ls"
              rel="noreferrer" target="_blank"> 10.25 Primates and Humans.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit31-5275795/"
            rel="noreferrer" target="_blank"> Vertebrates: Challenge 6</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where do chimpanzees (Pan troglodytes) live geographically?<br/>
            2. What tool are the chimpanzees in the video using?<br/>
            3. What do gorillas do when they approach each other or feel other gorillas are around?<br/>
            4. Who is the leader of a gorilla family?<br/>
            5. Are the orangutans in the video displaying learned or innate behavior? Explain your answer.<br/>
            6. What organisms share the same biological family as humans?<br/>
            7. Why do chimpanzees and humans have many similar proteins?<br/>
            8. What is important about a primate culture?<br/>
            9. What are three specialized human features?<br/>
            10. Write your score to the challenge.
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener111} value={sci6Essay111}/>

          <span className="days">LESSON 112  - Human Biology </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.1/primary/lesson/organization-of-the-human-body-ms-ls"
              rel="noreferrer" target="_blank"> 11.1 Human Body.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What kind of symmetry does the human body plan show? Explain what this means.<br/>
            2. How does this symmetry extend to our senses?<br/>
            3. How much of our body is made of muscle?<br/> What does this muscle do?<br/>
            4. How are oxygen and nutrients delivered to the cells of the body?<br/>
            5. What controls all the activity on the body?<br/> How much energy does this organ use?<br/>
            6. What are the four levels of organization in an organism?<br/>
            7. List the four types of tissues that make up the human body.<br/>
            8. Describe epithelial tissue.<br/>
            9. Give two examples of connective tissue.<br/>
            10. What is the role of the nervous system?<br/>
            11. What is the role of the cardiovascular system?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener112} value={sci6Essay112}/>

          <span className="days">LESSON 113 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.2/primary/lesson/homeostasis-ms-ls"
              rel="noreferrer" target="_blank"> 11.2 Homeostasis.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit32-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is homeostasis?<br/>
            2. What is the difference between negative feedback and positive feedback?<br/>
            3. What is a hormone?<br/>
            4. Write you score from the challenge here.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener113} value={sci6Essay113}/>

          <span className="days">LESSON 114 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.3/primary/lesson/skin-ms-ls"
              rel="noreferrer" target="_blank"> 11.3 Skin.</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are the four functions of skin?<br/>
            2. What is the hypodermis?<br/> What kinds of tissue are found here? Why is it important to controlling<br/>
            homeostasis?<br/>
            3. What is the function of keratin?<br/>
            4. Is the skin an organ?<br/>
            5. What are two functions of the skin?<br/>
            6. Your skin gathers information about your environment. What is meant by this statement?<br/>
            7. Describe the structure of the skin.<br/>
            8. List three components of the dermis.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener114} value={sci6Essay114}/>

          <span className="days">LESSON 115 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.4/primary/lesson/keeping-skin-healthy-ms-ls"
              rel="noreferrer" target="_blank"> 11.4 Skin Health.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What nutrients are important for healthy skin?<br/>
            2. What are good sources for these nutrients?<br/>
            3. What is one of the roles that zinc plays in healthy skin?<br/>
            4. Why is keeping your skin clean important?<br/>
            5. Why is it important to avoid too much sun exposure?<br/>
            6. What pigment in the skin acts as a natural sunblock?<br/>
            7. What is acne? How do pimples form?<br/>
            8. What usually causes a cold sore?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener115} value={sci6Essay115}/>

          <span className="days">LESSON 116 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.5/primary/lesson/nails-and-hair-ms-ls"
              rel="noreferrer" target="_blank"> 11.5 Nails and Hair.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the function of your nails?<br/>
            2. What is the function of the oil glands in your skin?<br/>
            3. What are the functions of hair?<br/>
            4. What is keratin?<br/>
            5. What are two functions of your nails?<br/>
            6. What are two functions of your hair?<br/>
            7. What animals, other than mammals, have hair?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener116} value={sci6Essay116}/>

          <span className="days">LESSON 117 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.6/primary/lesson/human-skeletal-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.6 Skeletal System</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What makes up the axial skeleton? What makes up the appendicular skeleton?<br/>
            2. What is the scapula commonly known as? What other bone helps the scapula function? What do
            these two bones do?<br/>
            3. How many thoracic vertebrae do humans have? Where are they located in the spinal column?<br/>
            4. To which type of vertebrae do ribs attach?<br/>
            5. What is the atlas bone? What is the role of this bone?<br/>
            6. Are bones a living organ?<br/>
            7. What are the three components of the skeletal system?<br/>
            8. List four functions of the skeletal system.<br/>
            9. Name and describe the two types of tissue that make up a bone.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener117} value={sci6Essay117}/>

          <span className="days">LESSON 118 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.7/primary/lesson/keeping-bones-and-joints-healthy-ms-ls"
              rel="noreferrer" target="_blank"> 11.7 Bone Health.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How much calcium does the average person need per day? What are good sources of calcium? What
            vitamin helps you process calcium?<br/>
            2. How do weight-bearing exercises help your bones?<br/>
            3. How can table salt (NaCl) be bad for your bones?<br/>
            4. What are two good habits to keep your skeletal system healthy?<br/>
            5. Give three examples of weight-bearing activities.<br/>
            6. List three good sources of calcium.<br/>
            7. What is osteoporosis?<br/>
            8. What is osteoarthritis?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener118} value={sci6Essay118}/>

          <span className="days">LESSON 119 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.8/primary/lesson/skeletal-system-joints-ms-ls"
              rel="noreferrer" target="_blank"> 11.8 Joints.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit33-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an example of a fixed joint? How would an organism be affected if this joint was
            moveable?<br/>
            2. What are the best joints for movement?<br/>
            3. What is the function of synovial fluid? Where is it located?<br/>
            4. What is the function of the knee cap?<br/>
            5. What's the difference between a fixed joint and a movable joint? Give examples of each.
            6. Describe the four types of movable joints.<br/>
            7. What type of joint are each of the following?<br/>
            &nbsp; &nbsp; a. the shoulder <br/>
            &nbsp; &nbsp; b. the wrist <br/>
            &nbsp; &nbsp; c. the knee <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener119} value={sci6Essay119}/>

          <span className="days">LESSON 120 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.9/primary/lesson/smooth-skeletal-and-cardiac-muscles-ms-ls"
              rel="noreferrer" target="_blank"> 11.9 Muscles.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are muscle fibers? What is unique about these fibers?<br/>
            2. Describe voluntary muscle.<br/>
            3. Which two of the three types of muscles in the body are involuntary?<br/>
            4. Distinguish between skeletal muscle and smooth muscle.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener120} value={sci6Essay120}/>

          <span className="days">LESSON 121 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.10/primary/lesson/muscles-bones-and-movement-ms-ls"
              rel="noreferrer" target="_blank"> 11.10 Skeletal Muscles.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the biceps muscle move when you bend your arm? How does the triceps muscle move when you
            bend your arm?<br/>
            2. How does the triceps muscle move when you straighten your arm? How does the biceps muscle move when
            you straighten your arm?<br/>
            3. Why can muscles only pull and not push? How is this related to muscles working in pairs?<br/>
            4. How are skeletal muscles attached to the skeleton?<br/>
            5. Explain why many skeletal muscles must work in opposing pairs.<br/>
            6. List three functions of smooth muscles.<br/>
            7. What happens when cardiac muscle contracts?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener121} value={sci6Essay121}/>

          <span className="days">LESSON 122 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.11/primary/lesson/muscles-and-exercise-ms-ls"
              rel="noreferrer" target="_blank"> 11.11 Exercise.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit34-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 3</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What makes an exercise aerobic?<br/>
            2. What are some of the benefits of aerobic exercise?<br/>
            3. How does aerobic exercise benefit your heart?<br/>
            4. What makes an exercise anaerobic?<br/>
            5. What are some of the benefits of anaerobic exercise?<br/>
            6. How can anaerobic exercise affect your skeletal system?<br/>
            7. What are lifestyle diseases? Given an example.<br/>
            8. Describe muscular strength and endurance.<br/>
            9. What are the health benefits of aerobic exercise?<br/>
            10. Describe two types of muscle injuries.<br/>
            11. Write the score for your challenge here.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener122} value={sci6Essay122}/>

          <span className="days">LESSON 123 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.12/primary/lesson/food-and-nutrients-ms-ls"
              rel="noreferrer" target="_blank"> 11.12 Food and Nutrients.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is nutrition?<br/>
            2. What do organisms use "food" for?<br/>
            3. What is a heterotroph? Are humans autotrophic or heterotrophic?<br/>
            4. What are the three types of heterotrophic organisms?<br/>
            5. Why does your body need food? Give two reasons.<br/>
            6. What are nutrients?<br/>
            7. What are the five types of nutrients?<br/>
            8. Why are carbohydrates a necessary part of your diet?<br/>
            9. Why are proteins a necessary part of your diet?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener123} value={sci6Essay123}/>

          <span className="days">LESSON 124 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.13/primary/lesson/types-of-nutrients-ms-ls"
              rel="noreferrer" target="_blank"> 11.13 Types of Nutrients.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does your body use iodine for? What are good sources of iodine? What are some of the
            problems of iodine deficiency?<br/>
            2. What does your body use magnesium for? What are good sources of magnesium? What problems come
            from magnesium deficiency?<br/>
            3. What does your body use riboflavin for? What are good sources of riboflavin? What can happen if
            your diet is deficient in riboflavin?<br/>
            4. Which nutrients can be used for energy?<br/>
            5. What is starch?<br/>
            6. Why is it important that you get enough proteins in foods?<br/>
            7. What foods contain saturated fats? How much of these foods should you eat? Why? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener124} value={sci6Essay124}/>

          <span className="days">LESSON 125 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.14/primary/lesson/vitamins-and-minerals-ms-ls"
              rel="noreferrer" target="_blank"> 11.14 Vitamins and Minerals.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is calcium so important to teenagers? What are sources of calcium?<br/>
            2. Why is it important to have enough iron in your diet? What vitamin helps you utilize iron?<br/>
            3. Why is vitamin D so important to teenagers? What are good sources of vitamin D?<br/>
            4. What are vitamins?<br/>
            5. List two vitamins and their roles in the body.<br/>
            6. What are minerals?<br/>
            7. List two minerals and their roles in the body.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener125} value={sci6Essay125}/>

          <span className="days">LESSON 126 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.15/primary/lesson/choosing-healthy-foods-ms-ls"
              rel="noreferrer" target="_blank"> 11.15 Balanced Eating.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit35-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 4</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What should the biggest section of your plate be filled with?<br/>
            2. What does it mean when vegetables have bright colors?<br/>
            3. Why are whole grains better for you than refined grains?<br/>
            4. What are good five sources of whole grains?<br/>
            5. Which food group contains soybeans, kidney beans, and fish?<br/>
            6. Complete this sentence: The healthiest foods are low in nutrients such as _______ and _______, and high
            in nutrients such as _______ and _______.<br/>
            7. What happens if you take in more energy than you use, day after day?<br/>
            8. According to MyPyramid, you should eat most from what group of foods each day?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener126} value={sci6Essay126}/>

          <span className="days">LESSON 127 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.16/primary/lesson/human-digestive-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.16 Digestive System.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What type of muscles do you think you have in your esophagus?<br/>
            2. How long does food stay in your stomach?<br/> Where does it go next?<br/>
            3. What is the role of bile in the digestion process?<br/>
            4. What does the digestive system do to food?<br/>
            5. Where does digestion start? What happens during the start of digestion?<br/>
            6. Where are most of the nutrients from food absorbed? What happens to the nutrients once they are
            absorbed?<br/>
            7. What happens in the colon (large intestine)?<br/>
            8. Describe the primary structure of the digestive system.<br/>
            9. What are three functions of the digestive system?<br/>
            10. Define mechanical and chemical digestion.<br/>
            11. Describe mechanical digestion.<br/>
            12. Describe chemical digestion.<br/>
            13. What is the difference between mechanical and chemical digestion?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener127} value={sci6Essay127}/>

          <span className="days">LESSON 128 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.17/primary/lesson/digestive-system-organs-ms-ls"
              rel="noreferrer" target="_blank"> 11.17 Digestive System Organs.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What organ starts the digestion process? What does it do?<br/>
            2. What function does the liver serve in digestion? How does the liver work together with the
            gallbladder?<br/>
            3. What are the functions of the pancreas?<br/>
            4. List five organs of the digestive system.<br/>
            5. Describe peristalsis, and explain why it is necessary for digestion.<br/>
            6. Describe the stomach and its function.<br/>
            7. In which organ of the digestive system does absorption of nutrients take place?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener128} value={sci6Essay128}/>

          <span className="days">LESSON 129 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.18/primary/lesson/enzymes-in-the-digestive-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.18 Digestive System Enzymes.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an enzyme?<br/>
            2. Explain the role of enzymes in digestion. Give an example to illustrate your answer.<br/>
            3. Give an example of how a hormone affects digestion.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener129} value={sci6Essay129}/>

          <span className="days">LESSON 130 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.19/primary/lesson/bacteria-in-the-digestive-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.19 Digestive System Bacteria.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do bacteria influence our digestion?<br/>
            2. What two categories, with regard to gut bacteria, have scientists identified?<br/>
            3. What link do scientists believe may exist between gut bacteria and disease? Why is this an area of
            interest for scientists?<br/>
            4. How may clean environments affect the microbes in our bodies?<br/>
            5. How do gut microbes compare between host species (the species they live in)?<br/>
            6. What do the findings presented here say about gut bacteria and their host?<br/>
            7. What is the gut flora?<br/>
            8. Identify two roles of helpful bacteria in the intestine.<br/>
            9. When you are sick, you might be given an antibiotic to kill harmful bacteria. Antibiotics cannot
            distinguish between "good" and "bad" bacteria, however. Why might this be a problem?<br/>
            10. What type of symbiotic relationship do we have with these bacteria?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener130} value={sci6Essay130}/>

          <span className="days">LESSON 131 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.20/primary/lesson/health-of-the-digestive-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.20 Digestive System Health.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit36-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 5.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a food allergy? How does the body respond to food allergies?<br/>
            2. What does the phrase "dose related" mean? How does this relate to food intolerance?<br/>
            3. What are four common symptoms of food allergies?<br/>
            4. What are the eight most common food allergens?<br/>
            5. Do all people of all ages respond in the same way to foods?<br/>
            6. List two rules that can help prevent foodborne illness.<br/>
            7. What's the difference between a food allergy and a food intolerance?<br/>
            8. List three foods that commonly cause allergies.<br/>
            9. List three common symptoms of food allergies.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener131} value={sci6Essay131}/>

          <span className="days">LESSON 132 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.21/primary/lesson/cardiovascular-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.21 Cardiovascular System.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where does blood enter the heart? Where does it exit the heart?<br/>
            2. How does blood entering the right side of the heart differ from blood entering the left side of the
            heart?<br/>
            3. Why is it important for the heart to have one-way valves? How do you think a leaky valve affects the
            functioning of the heart?<br/>
            4. What are coronary arteries? What are their function? How are they involved in heart
            disease?<br/>
            5. List three components of the cardiovascular system.<br/>
            6. List the main functions of the cardiovascular system.<br/>
            7. Why does each cell in your body need oxygen?<br/>
            8. Complete this sentence: _______ carry blood full of oxygen _______ from the heart and _______ return
            oxygen-poor blood back to the heart.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener132} value={sci6Essay132}/>

          <span className="days">LESSON 133 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.22/primary/lesson/lymphatic-system-ms-ls"
              rel="noreferrer" target="_blank"> 11.22 Lymphatic System.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the main function of the lymphatic system?<br/>
            2. What are the tonsils?<br/>
            3. How do the lymph nodes act in the lymphatic system?<br/>
            4. What are three examples of lymph organs?<br/>
            5. What is the role of the tonsils?<br/>
            6. What are lymph nodes?<br/> What is their function?<br/>
            7. Distinguish between B and T lymphocytes.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener133} value={sci6Essay133}/>
          <span className="days">LESSON 134 </span>
          <p>Watch the videos below: The Heart - Under Pressure (Parts 1 & 2) by Crash Course.</p>
          <Video videoUrl="https://www.youtube.com/embed/X9ZZ6tcxArI"/>
          <Video videoUrl="https://www.youtube.com/embed/FLBMwcvOaEo"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the heart’s main job?<br/>
            2. How does the heart use areas of high and low pressure to move blood?<br/>
            3. What does your blood pressure actually measure?<br/>
            4. Roughly how big is your heart?<br/>
            5. Are the ventricles the high or low-pressure area?<br/>
            6. Do the valves in the heart allow for one way or two-way movement?<br/>
            7. Describe how skeletal and cardiac muscle tissues are different from each other and why this matters.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener134} value={sci6Essay134}/>

          <span className="days">LESSON 135 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.23/primary/lesson/heart-ms-ls"
              rel="noreferrer" target="_blank"> 11.23 Heart.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many chambers does a mammalian heart have? What are these chambers called?<br/>
            2. What are the smallest blood vessels in the body?<br/>
            3. What is the function of the circulatory system? What role does the heart play?<br/>
            4. What passes from the cells into the capillaries? What passes into the cells from the
            capillaries?<br/>
            5. What are the ventricles?<br/>
            6. Where does oxygen-poor blood first enter the heart?<br/>
            7. What part of the heart pumps blood to the rest of the body?<br/>
            8. What is the purpose of the valves in the heart?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener135} value={sci6Essay135}/>

          <span className="days">LESSON 136 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.24/primary/lesson/blood-vessels-ms-ls"
              rel="noreferrer" target="_blank"> 11.24 Blood Vessels.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the structure of arteries differ from the structure of veins?<br/>
            2. How is the structure of arteries related to their function?<br/>
            3. How is the structure of veins related to their function?<br/>
            4. What are the three types of circulation of the blood?<br/>
            5. What is the function of the systemic circulation system?<br/>
            6. What is the function of the pulmonary circulation system?<br/>
            7. What's the difference between veins and arteries?<br/>
            8. Why can the heart be considered to be two separate pumps?<br/>
            9. What is the systemic circulation?<br/>
            10. What is the aorta?<br/>
            11. What is a capillary? What happens in the capillaries?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener136} value={sci6Essay136}/>

          <span className="days">LESSON 137 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.25/primary/lesson/blood-pressure-ms-ls"
              rel="noreferrer" target="_blank"> 11.25 Blood Pressure.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What causes your pulse?<br/>
            2. What is systolic pressure?<br/>
            3. What is diastolic pressure?<br/>
            4. What does the first sound heard refer to when measuring blood pressure?<br/>
            5. What is the healthy range for blood pressure?<br/>
            6. What is the systolic pressure? What is the diastolic pressure?<br/>
            7. Why is hypertension sometimes called the "silent killer"?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener137} value={sci6Essay137}/>

          <span className="days">LESSON 138 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.26/primary/lesson/components-of-blood-ms-ls"
              rel="noreferrer" target="_blank"> 11.26 Blood.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is blood a tissue? Explain your answer.<br/>
            2. What is the purpose of the white blood cells?<br/>
            3. What is the purpose of the red blood cells?<br/>
            4. What are macrophages?<br/>
            5. What are platelets? What is the primary role of platelets?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener138} value={sci6Essay138}/>

          <span className="days">LESSON 139 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.27/primary/lesson/blood-types-ms-ls"
              rel="noreferrer" target="_blank"> 11.27 Blood Type.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit56-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 6</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an antigen? What are two examples of antigens?<br/>
            2. What is an antibody?<br/>
            3. What type of antigen are on type O red blood cells?<br/>
            4. What antibodies are produced by people with type O blood?<br/>
            5. What does type B blood have that type O blood does not?<br/>
            6. What is an antigen?<br/>
            7. Why is it important to match blood types when giving a blood transfusion?<br/>
            8. Why are people with type O blood called "universal donors"?<br/>
            9. Who are universal recipients? Why?<br/>
            10. Write your score for the challenge.
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener139} value={sci6Essay139}/>

          <span className="days">LESSON 140 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.28/primary/lesson/blood-diseases-ms-ls"
              rel="noreferrer" target="_blank"> 11.28 Blood Diseases.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What causes aplastic anemia? Why is it considered an autoimmune disease?<br/>
            2. Which blood cells are at reduced levels in someone with aplastic anemia?<br/>
            3. Where are blood cells produced? What cells in this area make the blood cells?<br/>
            4. How does "rebooting" the immune system treat aplastic anemia?<br/>
            5. Identify a blood disease that is inherited.<br/>
            6. What is anemia?<br/>
            7. List two good sources of iron in the diet.<br/>
            8. What are the issues associated with sickle-cell anemia?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener140} value={sci6Essay140}/>

          <span className="days">LESSON 141 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.29/primary/lesson/cardiovascular-diseases-ms-ls"
              rel="noreferrer" target="_blank"> 11.29 Cardiovascular Diseases.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is coronary artery disease? What happens to someone who has coronary artery disease?<br/>
            2. What is congestive heart failure? How does this affect your body?<br/>
            3. What is atherosclerosis?<br/>
            4. What is the result of plaque growth?<br/>
            5. How are strokes and heart attacks similar?<br/>
            6. What are the causes of atherosclerosis?<br/>
            7. What are three ways to prevent atherosclerosis?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener141} value={sci6Essay141}/>

          <span className="days">LESSON 142 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.30/primary/lesson/cardiovascular-system-health-ms-ls"
              rel="noreferrer" target="_blank"> 11.30 Cardiovascular Health.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit57-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 7</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many fruits and vegetables should be eaten daily to keep your heart healthy?<br/>
            2. How much should you move a day to help prevent heart disease?<br/>
            3. How much should you sleep a day to help prevent heart disease?<br/>
            4. How much heart disease is preventable?<br/>
            5. What is a risk factor?<br/>
            6. What are three risk factors for cardiovascular disease?<br/>
            7. What are some steps you can take to avoid cardiovascular disease?<br/>
            8. What is bad cholesterol?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener142} value={sci6Essay142}/>

          <span className="days">LESSON 143 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.31/primary/lesson/respiration-ms-ls"
              rel="noreferrer" target="_blank"> 11.31 Respiratory System.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. In what part of the lung does gas exchange occur?<br/>
            2. What causes the gases to move in the lungs during gas exchange?<br/>
            3. What is the difference between breathing and respiration?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener143} value={sci6Essay143}/>

          <span className="days">LESSON 144 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.32/primary/lesson/respiratory-system-organs-ms-ls"
              rel="noreferrer" target="_blank"> 11.32 Respiratory System Organs</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What muscle controls the process of breathing?<br/>
            2. Where is the trachea located and what is its function?<br/>
            3. What is the relationship between the bronchi, bronchial tubes, and bronchioles? What function does
            this relationship serve?<br/>
            4. Why does air funnel into smaller and smaller spaces within the lungs?<br/>
            5. Name four organs in the respiratory system.<br/>
            6. What is the trachea? What does the trachea lead into?<br/>
            7. What organ is known as the voice box?<br/>
            8. What is the diaphragm? Why is the diaphragm important?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener144} value={sci6Essay144}/>

          <span className="days">LESSON 145 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.33/primary/lesson/respiratory-system-diseases-ms-ls"
              rel="noreferrer" target="_blank"> 11.33 Respiratory System Disorders.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is COPD? What breathing conditions does it describe?<br/>
            2. What is the leading cause of COPD?<br/>
            3. Why is it important for people with COPD to keep their vaccinations up to date?<br/>
            4. How do the alveoli in a normal lung compare to those in someone with COPD?<br/>
            5. What parts of the body can be affected by respiratory system diseases?<br/>
            6. How does asthma affect the lungs?<br/>
            7. What is the most common cause of lung cancer?<br/>
            8. Identify two things besides smoking that can cause a respiratory disease.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener145} value={sci6Essay145}/>

          <span className="days">LESSON 146 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.34/primary/lesson/respiratory-system-health-ms-ls"
              rel="noreferrer" target="_blank"> 11.34 Respiratory System Health.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why are scientists studying the genetics of lung disease?<br/>
            2. What do scientists hope will come out of this research?<br/>
            3. How many areas of the genome have scientists found that are associated with COPD?<br/>
            4. Are these scientists engaged in basic or applied research? Explain your reasoning fully.<br/>
            5. How many days a year does Los Angeles have unhealthy air?<br/>
            6. What are the potential health effects of this air? Who is most at risk? Why do you think risk
            is higher for these groups?<br/>
            7. What are you supposed to do on days of unhealthy air?<br/>
            8. What are lifestyle diseases?<br/>
            9. What is the relationship between smoking and lifestyle diseases?<br/>
            10. What are two things you can do to keep your respiratory system healthy?<br/>
            11. Explain how washing your hands can help you prevent catching a cold.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener146} value={sci6Essay146}/>

          <span className="days">LESSON 147 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' qesutions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/11.35/primary/lesson/processes-of-breathing-ms-ls"
              rel="noreferrer" target="_blank"> 11.35 Breathing.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit58-5275795/"
            rel="noreferrer" target="_blank"> Human Biology: Challenge 8</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What molecule in blood cells carries oxygen?<br/>
            2. What causes oxygen to enter the blood?<br/> Where does this occur?<br/>
            3. How does hemoglobin carry oxygen through the blood?<br/>
            4. How does oxygen enter the tissues of the body?<br/>
            5. How does oxygen enter the bloodstream?<br/>
            6. What waste gas is released during exhalation?<br/>
            7. From the lungs, where does the oxygen go?<br/>
            8. Why is oxygen needed by each cell in your body?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener147} value={sci6Essay147}/>

          <span className="days">LESSON 148  -  Ecology</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.1/primary/lesson/introduction-to-ecology-ms-ls"
              rel="noreferrer" target="_blank"> 12.1 Ecology Overview.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are some of the abiotic factors that scientists monitor when dealing with stream ecosystems?<br/>
            2. What are some of the biotic factors that scientists monitor when dealing with stream ecosystems?<br/>
            3. What is a "benchmark" in ecology? Why are they essential?<br/>
            4. How does water pollution seem to be affecting diversity in some streams?<br/>
            5. What do ecologists study?<br/>
            6. In a forest, what are five biotic factors present? Five abiotic factors?<br/>
            7. What is a biome? Give an example.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener148} value={sci6Essay148}/>

          <span className="days">LESSON 149 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.2/primary/lesson/levels-of-ecological-organization-ms-ls"
              rel="noreferrer" target="_blank"> 12.2 Ecological Organization</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the relationship between an individual and a community?<br/>
            2. What characteristics define a population?<br/>
            3. Why is the distinction between a community and an ecosystem important to ecologists?<br/>
            4. Define species.<br/>
            5. What is an ecosystem?<br/>
            6. Define population. How is a population different from a community?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener149} value={sci6Essay149}/>

          <span className="days">LESSON 150 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.3/primary/lesson/features-of-populations-ms-ls"
              rel="noreferrer" target="_blank"> 12.3 Population.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Is the distribution of organisms of a species constant with time?<br/>
            2. What is the most common type of distribution? How does this distribution benefit the species?<br/>
            3. What factors make a uniform distribution pattern a beneficial strategy for a species?<br/>
            4. How do chemicals made by organisms help establish and maintain a uniform distribution pattern?<br/>
            5. What factors contribute to a random distribution pattern? Why do animals not maintain this
            distribution pattern year round?<br/>
            6. Define population.<br/>
            7. What is population dispersion? Describe the possible dispersion patterns for a population.<br/>
            8. Would all the deer and mice living in a forest be a population? Why or why not?<br/>
            9. What is the growth rate?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener150} value={sci6Essay150}/>

          <span className="days">LESSON 151 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.4/primary/lesson/population-growth-patterns-ms-ls"
              rel="noreferrer" target="_blank"> 12.4 Population Growth Patterns.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How many years did it take the human population to increase from 1 billion to 2 billion? Considering
            how long it took the human population to reach 1 billion, is this pattern consistent with an exponential
            growth model?<br/>
            2. How fast is the human population currently increasing? What kind of growth does this indicate the
            human population is experiencing currently? Does this rate represent an increase or decrease from
            previous growth rates?<br/>
            3. Is our current population level creating problems with available space? Why or why not?<br/>
            4. List three factors that affect population growth?<br/>
            5. Compare altricial organisms to precocial organisms.<br/>
            6. What is the overall equation for growth rate?<br/>
            7. Does a typical population show exponential growth? Why or why not?<br/>
            8. Define carrying capacity.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener151} value={sci6Essay151}/>

          <span className="days">LESSON 152 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.5/primary/lesson/limiting-factors-to-population-growth-ms-ls"
              rel="noreferrer" target="_blank"> 12.5 Population Growth Limits.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What type of growth is characterized by a consistent increase in growth rate? How often is this type
            of growth actually seen in nature?<br/>
            2. What factors keep populations from reaching their carrying capacity?<br/>
            3. How do you think the length of an organism's life span will affect the species' ability to reach carrying
            capacity?<br/>
            4. What would the growth equation look like for sessile populations (i.e. populations where individuals are
            fixed in space)?<br/>
            5. What is a limiting factor?<br/>
            6. What are three examples of limiting factors?<br/>
            7. When organisms face limiting factors, what type of growth do they show?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener152} value={sci6Essay152}/>

          <span className="days">LESSON 153 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.6/primary/lesson/human-population-ms-ls"
              rel="noreferrer" target="_blank"> 12.6 Human Population.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit48-5275795/"
            rel="noreferrer" target="_blank"> Ecology: Challenge 1</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How much land in the United States is lost to urban sprawl every year?<br/>
            2. How has land use around Phoenix, Arizona changed since 1912?<br/>
            3. How did urban areas change after agricultural expansion in Arizona?<br/>
            4. How does urban growth affect water usage? What problems does this present for the sustainability of
            urban environments?<br/>
            5. Describe the rate of human population growth.
            6. How long did it take for the world's population to grow from 6 billion to 7 billion?<br/>
            7. What is the predicted human population by 2050?<br/>
            8. How do the Cornucopians and Neo-Malthusians differ in their viewpoints?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener153} value={sci6Essay153}/>

          <span className="days">LESSON 154 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.7/primary/lesson/competition-ms-ls"
              rel="noreferrer" target="_blank"> 12.7 Competition.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What sort of competition are these anemones displaying?<br/>
            2. Looking at the size of the sea anemones in this video, are you surprised by the amount of space they they
            feel they need? Explain your answer.<br/>
            3. What must be true about the costs in energy of anemone fighting? What would happen to the population
            if this were not the case?<br/>
            4. What is the difference between intraspecific and interspecific competition?<br/>
            5. What is the competitive exclusion principle?<br/>
            6. How can competition contribute to evolution through natural selection?<br/>
            7. What has to be true about available resources for competition to exist?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener154} value={sci6Essay154}/>

          <span className="days">LESSON 155 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.8/primary/lesson/predation-ms-ls"
              rel="noreferrer" target="_blank"> 12.8 Predation.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What allows the stone fish to sneak up on prey?<br/>
            2. What does the stone fish eat?<br/>
            3. Where does the stone fish hide?<br/>
            4. What is predation?<br/>
            5. What's the difference between grazing and true predation?<br/>
            6. What sorts of adaptations do prey have for avoiding predators?<br/>
            7. Predators can be a keystone species. What does this mean?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener155} value={sci6Essay155}/>

          <span className="days">LESSON 156 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.9/primary/lesson/symbiosis-ms-ls"
              rel="noreferrer" target="_blank"> 12.9 Symbiosis.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit49-5275795/"
            rel="noreferrer" target="_blank"> Ecology: Challenge 2</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What defines a symbiotic relationship?<br/>
            2. Is the benefit gained by each individual in a mutualistic relationship equal?<br/>
            3. What could a mutualistic relationship, in which one organism receives little benefit, also be
            called?<br/>
            4. What type of relationship exists between the clownfish and the sea anemone?<br/>
            5. What are the two explanations for where a clownfish's protective mucus comes from?<br/>
            6. What is symbiosis?<br/>
            7. Distinguish between mutualism and commensalism.<br/>
            8. Describe an example of a symbiotic relationship.<br/>
            9. What's an example of a parasite?<br/>
            10. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener156} value={sci6Essay156}/>

          <span className="days">LESSON 157 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.10/primary/lesson/ecosystems-ms-ls"
              rel="noreferrer" target="_blank"> 12.10 Ecosystems.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do land plants generate the energy they need for their metabolic energy? What do they do with
            excess energy?<br/>
            2. Where do scavengers in an ecosystem obtain their energy from? How can scavenging be a beneficial
            strategy for an organism?<br/>
            3. What is the role of decomposers?<br/>
            4. What kind of problems can you foresee if every speck of carbon were turned into biomass? Why?<br/>
            5. Complete this statement: Energy ___________ through an ecosystem, whereas nutrients are
            ____________.<br/>
            6. Define an ecosystem.<br/>
            7. Distinguish between abiotic and biotic factors. Give examples of each.<br/>
            8. Where does the energy come from for many ecosystems?<br/>
            9. Name two nutrients that are recycled through an ecosystem.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener157} value={sci6Essay157}/>

          <span className="days">LESSON 158 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.11/primary/lesson/habitat-and-niche-ms-ls"
              rel="noreferrer" target="_blank"> 12.11 Habitat and Niche.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do you think rapid changes in the chracteristics of habitats affect the niches of animals occupying
            that habitat?<br/>
            2. Do you think rapid or gradual environmental changes have a greater potential to affect an organism's
            niche? Explain your answer.<br/>
            3. On a very broad scale, how are the niches of a carnivore and an herbivore in the same geographic area
            similar? How do they differ?<br/>
            4. What is a niche?<br/>
            5. Can two species share the same niche? Why or why not?<br/>
            6. Name three factors that can be used to describe a habitat.<br/>
            7. Distinguish between a habitat and an ecosystem.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener158} value={sci6Essay158}/>

          <span className="days">LESSON 159 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.12/primary/lesson/what-are-biomes-ms-ls"
              rel="noreferrer" target="_blank"> 12.12 Biome.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where do tundra biomes primarily occur? How much precipitation do these areas see annually?<br/>
            2. What areas are best known for having Taiga biomes? What is the temperature range this biome
            experiences?<br/>
            3. What is a behavioral adaptation that animals in desert biomes display?<br/>
            4. List three characteristics of the rainforest.<br/>
            5. How do the animals of a grassland adapt? Give two examples of animals of the grassland.<br/>
            6. What is a biome?<br/>
            7. What causes differences in the biomes?<br/>
            8. Give two examples of terrestrial biomes.<br/>
            9. What influence does the soil quality have on a biome?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener159} value={sci6Essay159}/>

          <span className="days">LESSON 160 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.13/primary/lesson/terrestrial-biomes-ms-ls"
              rel="noreferrer" target="_blank"> 12.13 Terrestrial Biomes.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Where are two locations at which tropical rainforests occur?<br/>
            2. What four physical characteristics are necessary for life to persist? Of these four, which two
            explain the pattern of terrestrial biomes?<br/>
            3. What adaptations do all desert plants share regardless of the specific desert they inhabit?<br/>
            4. How much precipitation do savannas receive annually? Over what period of time do they receive this
            precipitation? How does this affect the animals living in this biome?<br/>
            5. How do the physical characteristics of savannas lead to their dominance by grasses?<br/>
            6. How are terrestrial biomes defined?<br/>
            7. Give four examples of terrestrial biomes.<br/>
            8. What defines a desert?<br/>
            9. Where is biodiversity the highest?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener160} value={sci6Essay160}/>

          <span className="days">LESSON 161 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.14/primary/lesson/aquatic-biomes-ms-ls"
              rel="noreferrer" target="_blank"> 12.14 Aquatic Biomes.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What factors determine the distribution of life in lakes?<br/>
            2. What is a main entry point for nutrients in the littoral zone in lakes? How does this affect the
            biomass of this zone? How does it affect the species diversity?<br/>
            3. What effect do wetlands have on water quality? How does this work?<br/>
            4. What is an estuary? How and why does the salinity of estuaries vary?<br/>
            5. Aquatic biomes are defined by what factor(s)?<br/>
            6. Distinguish between freshwater and marine biomes.<br/>
            7. How do producers in the aphotic zone differ from those in the photic zone?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener161} value={sci6Essay161}/>

          <span className="days">LESSON 162 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.15/primary/lesson/the-biosphere-ms-ls"
              rel="noreferrer" target="_blank"> 12.15 Biosphere.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit50-5275795/"
            rel="noreferrer" target="_blank"> Ecology: Challenge 3</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do living organisms affect different parts of the biosphere?<br/>
            2. Where is the greatest density of plant growth found on land?<br/>
            3. Where are the highest chlorophyll (pigment in chloroplast that absorbs light energy during
            photosynthesis) levels observed?<br/>
            4. Why are measurements of chlorophyll and land vegetation important to scientists?<br/>
            5. What is the biosphere?<br/>
            6. Distinguish between the lithosphere, atmosphere and hydrosphere.<br/>
            7. Give an example of how Earth is self-regulating.<br/>
            8. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener162} value={sci6Essay162}/>

          <span className="days">LESSON 163 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.16/primary/lesson/producers-ms-ls"
              rel="noreferrer" target="_blank"> 12.16 Producer.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. Can producers function without sunlight? Why or why not?<br/>
            2. What are some examples of producers? Why are they called autotrophs?<br/>
            3. How do some producers use sunlight to make "food"? What other resources do they require?<br/>
            4. Where does all the "food" in an ecosystem ultimately come from?<br/>
            5. What is the most common method of producing energy for an ecosystem? What is the energy that is
            made?<br/>
            6. What "ingredients" are needed for the process of photosynthesis?<br/>
            7. Why are producers important to an ecosystem?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener163} value={sci6Essay163}/>

          <span className="days">LESSON 164 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.17/primary/lesson/consumers-and-decomposers-ms-ls"
              rel="noreferrer" target="_blank"> 12.17 Consumers and Decomposers.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the role of decomposers in an ecosystem? What is the source of the matter which is
            decomposed?<br/>
            2. How do the actions of earthworms improve soil quality? How does this impact the amount of biomass an
            ecosystem can support?<br/>
            3. How do gastropods function as decomposers?<br/>
            4. What is a consumer?<br/>
            5. What’s the term for a consumer that eats both leaves and fish?<br/>
            6. What are the different types of consumers?<br/>
            7. Why are decomposers important in the ecosystem?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener164} value={sci6Essay164}/>

          <span className="days">LESSON 165 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.18/primary/lesson/food-webs-ms-ls"
              rel="noreferrer" target="_blank"> 12.18 Food Chain.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What do the seals and birds have in common in the food web?<br/>
            2. What do the blue whales and the fish have in common in the food web?<br/>
            3. What species in the food web feed on algae?<br/>
            4. What is the role of bacteria in this food web?<br/>
            5. What is the difference between a food chain and a food web?<br/>
            6. Food chains always begin with what type of organism? Why?<br/>
            7. What is the herbivore in the following food chain: algae → fish → herons?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener165} value={sci6Essay165}/>

          <span className="days">LESSON 166 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.19/primary/lesson/energy-pyramids-ms-ls"
              rel="noreferrer" target="_blank"> 12.19 Energy Flow.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are three types of ecological pyramids? How do their shapes compare?<br/>
            2. Do you think it would be possible to construct a pyramid where the number of carnivores was more than the
            number of herbivores? Why or why not?<br/>
            3. Do you think it would be possible to construct a pyramid where the biomass of carnivores was more than
            the biomass of herbivores? How does this compare to a numbers pyramid.<br/>
            4. What consumes energy at each trophic level? How does this contribute to energy loss between trophic
            levels?<br/>
            5. When an herbivore eats a plant, what happens to 90% of the energy obtained from that plant?<br/>
            6. What is a trophic level?<br/>
            7. Why are the number of trophic levels limited?<br/>
            8. In a forest community, caterpillars eat leaves, and birds eat caterpillars. Draw an energy pyramid using
            this information.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener166} value={sci6Essay166}/>

          <span className="days">LESSON 167 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.20/primary/lesson/succession-ms-ls"
              rel="noreferrer" target="_blank"> 12.20 Succession.</a>
          </p>
          <p>Complete
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit51-5275795/"
              rel="noreferrer" target="_blank"> Ecology: Challenge 4</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do climax communities relate to biomes?<br/>
            2. What factors affect the characteristics of climax communities?<br/>
            3. How has cattle grazing affected the ecological balance between sage brush and grasses in the American
            Midwest?<br/>
            4. How did fire aid the spread of the American Praire? What was the source of this fire?<br/>
            5. What is a sub-climax community? How are they maintained?<br/>
            6. If people maintained the American Prairies through the use of fire, what kind of community does this make
            the American Prairie?<br/>
            7. Define ecological succession.<br/>
            8. What type of succession occurs in areas where there is no soil?<br/>
            9. Imagine a forest fire destroyed a forest. The forest will slowly reestablish itself, which is an example
            of what kind of succession? Why?<br/>
            10. How does primary succession usually begin? Give an example.<br/>
            11. What is the end result of succession? Do these communities truly exist? Why or why not?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener167} value={sci6Essay167}/>

          <span className="days">LESSON 168 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.21/primary/lesson/the-water-cycle-ms-ls"
              rel="noreferrer" target="_blank"> 12.21 Water Cycle.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a fundamental difference between the water cycle and other nutrient cycles?<br/>
            2. What drives the water cycle? Where does this process primarily occur?<br/>
            3. What happens to most of the water taken up by plants? How does this compare to most of the water
            taken up by animals?<br/>
            4. How does water's role in photosynthesis explain increased biological productivity in areas of heavy
            precipitation?<br/>
            5. What is the water cycle?<br/>
            6. What are two ways water returns to the atmosphere?<br/>
            7. How does water get from the atmosphere back to land? What are the various forms of this
            process?<br/>
            8. What is the relationship between groundwater and aquifers?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener168} value={sci6Essay168}/>

          <span className="days">LESSON 169 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.22/primary/lesson/the-carbon-cycle-ms-ls"
              rel="noreferrer" target="_blank"> 12.22 Carbon Cycle.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are two types of carbon? What type is carbon dioxide (CO2)? What is an example of the
            other type?<br/>
            2. How can carbon aid the spread of toxic substances?<br/>
            3. Why are the reactivity and binding capabilities of carbon crucial to life?<br/>
            4. What biological process releases carbon back into the atmosphere?<br/>
            5. What human activities have thrown the carbon cycle off balance?<br/>
            6. Why is carbon dioxide a greenhouse gas?<br/>
            7. What is the outcome of the increase of greenhouse gasses?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener169} value={sci6Essay169}/>

          <span className="days">LESSON 170 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.23/primary/lesson/the-nitrogen-cycle-ms-ls"
              rel="noreferrer" target="_blank"> 12.23 Nitrogen Cycle.</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit52-5275795/"
            rel="noreferrer" target="_blank"> Ecology: Challenge 5 </a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do living organisms use nitrogen?<br/>
            2. What is nitrogen fixation? Describe how it happens.<br/>
            3. How is nitrate in the soil converted back to nitrogen gas?<br/>
            4. How does acid rain form?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener170} value={sci6Essay170}/>

          <span className="days">LESSON 171 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.24/primary/lesson/outdoor-air-pollution-ms-ls"
              rel="noreferrer" target="_blank"> 12.24 Air Pollution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are pollutants?<br/>
            2. What are three sources of pollutants?<br/>
            3. What are the two main categories of pollutants?<br/>
            4. What is air pollution?<br/>
            5. What's the difference between primary and secondary pollutants? Give examples of each.<br/>
            6. What are three ways that polluting fossil fuels are burned?<br/>
            7. Why is acid rain dangerous?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener171} value={sci6Essay171}/>

          <span className="days">LESSON 172 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.25/primary/lesson/indoor-air-pollution-ms-ls"
              rel="noreferrer" target="_blank"> 12.25 Indoor Air Pollution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the way most Americans spend their time make indoor air quality a pertinent health
            concern? What other countries do you think share this problem?<br/>
            2. What are the four "Ps" in indoor air quality investigations? How does this information help solve
            problems with indoor air quality?<br/>
            3. Give three examples of pollutant sources.<br/>
            4. What are three sources of indoor air pollution?<br/>
            5. List two things you could do to minimize your exposure indoor air pollution.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener172} value={sci6Essay172}/>

          <span className="days">LESSON 173 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.26/primary/lesson/health-hazards-of-air-pollution-ms-ls"
              rel="noreferrer" target="_blank"> 12.26 Health Hazards of Air Pollution.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How has air quality improved in Southern California since the 1960s?<br/>
            2. What health issues are associated with poor air quality?<br/>
            3. Is the air quality that people currently experience in Southern California healthy?<br/>
            4. What is believed to be the primary source of cancer caused from air pollution? Where does this
            substance come from?<br/>
            5. What are direct and indirect causes of air pollution related deaths?<br/>
            6. What causes smog? What issues are associated with smog?<br/>
            7. How can you protect yourself from indoor air pollution? Give two methods.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener173} value={sci6Essay173}/>

          <span className="days">LESSON 174 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.27/primary/lesson/sources-of-water-pollution-ms-ls"
              rel="noreferrer" target="_blank"> 12.27 Water Pollution</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How can human sewage throw ecosystems out of balance? What nutrient cycle(s) are involved?<br/>
            2. How does agriculture run-off effect ecosystems? How does this change move through the food
            web? What can the result be?<br/>
            3. How can drugs excreted by humans affect aquatic organisms? How does this affect the ecosystem?<br/>
            4. What is heat pollution? What affect can this have on aquatic ecosystems? Explain your answer as
            fully as possible.<br/>
            5. Why is fresh water a limited resource?<br/>
            6. What is water pollution?<br/>
            7. What are two main sources of pollution of surface water?<br/>
            8. What are two main sources of groundwater pollution?<br/>
            9. What's the difference between a point source and nonpoint source of water pollution?<br/>
            10. What is eutrophication?<br/>
            11. Explain what causes eutrophication and how it affects the ecosystem.<br/>
            12. Explain what causes ocean acidification and how it affects the ecosystem.<br/>
            13. What are waterborne diseases? What causes waterborne diseases?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener174} value={sci6Essay174}/>

          <span className="days">LESSON 175 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.28/primary/lesson/preserving-water-sources-ms-ls"
              rel="noreferrer" target="_blank"> 12.28 Preserving Water Sources</a>
          </p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/unittest/Test-for-LSC-Unit53-5275795/"
            rel="noreferrer" target="_blank"> Ecology: Challenge 6</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What kind of material can be found in our water?<br/>
            2. What kinds of problems can algae cause to our water resources? How is algae good?<br/>
            3. What is turbidity?<br/>
            4. How is the pH of the Clackamas River related to river flow?<br/>
            5. Of all the water on Earth, how much can be used as drinking water?<br/>
            6. How has the United States government tried to preserve water sources?<br/>
            7. Why is wastewater treatment important?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener175} value={sci6Essay175}/>

          <span className="days">LESSON 176 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.29/primary/lesson/renewable-resources-and-alternative-energy-sources-ms-ls"
              rel="noreferrer" target="_blank"> 12.29 Renewable Resources.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a renewable resource?Give two examples.<br/>
            2. What does sustainable mean?<br/>
            3. What are three ways that renewable resources can be used to generate energy?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener176} value={sci6Essay176}/>

          <span className="days">LESSON 177 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.30/primary/lesson/nonrenewable-resources-ms-ls"
              rel="noreferrer" target="_blank"> 12.30 Nonrenewable Resources.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does the formation of coal differ from the formation of oil? How are these processes the
            same?<br/>
            2. Why are researchers looking for ways to speed up the production of fuel from plant matter?<br/>
            3. Where does natural gas come from?<br/>
            4. When you burn fossil fuels, they release CO2 into the atmosphere. Based on how long it takes fossil fuels
            to form, when was the last time that the carbon molecule in the CO2 was in the atmosphere? How does
            this situation differ from someone cutting down a ten-year-old tree and burning it in his/her
            fireplace? What are the consequences for the atmosphere.<br/>
            5. What is a nonrenewable resource? What are two main types?<br/>
            6. When did fossil fuels form?<br/>
            7. Why is nuclear power considered a nonrenewable resource?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener177} value={sci6Essay177}/>

          <span className="days">LESSON 178 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.31/primary/lesson/reduce-reuse-and-recycle-ms-ls"
              rel="noreferrer" target="_blank"> 12.31 Conservation.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are four examples of recyclable materials?<br/>
            2. What are two ways you can reduce the amount of waste you create?<br/>
            3. What are two ways of reusing materials?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener178} value={sci6Essay178}/>

          <span className="days">LESSON 179 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.32/primary/lesson/habitat-destruction-ms-ls"
              rel="noreferrer" target="_blank"> 12.32 Habitat Destruction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What types of trees dominate boreal forests?<br/>
            2. How is climate change affecting the amount of fires occurring in Alaska? How is this affecting the
            ecosystem?<br/>
            3. How do conifer forests differ from deciduous forest in their effect on carbon? How may this feed
            into climate change?<br/>
            4. How may the thawing of permafrost affect the Global Carbon Cycle? How is the carbon in the
            permafrost similar to the carbon in fossil fuel?<br/>
            5. What is a habitat?<br/>
            6. What are the primary ways that humans destroy habitats?<br/>
            7. Why may invasive species thrive in a new area? Why is this an issue?<br/>
            8. Describe slash-and-burn agriculture.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener179} value={sci6Essay179}/>

          <span className="days">LESSON 180 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.33/primary/lesson/importance-of-biodiversity-ms-ls"
              rel="noreferrer" target="_blank"> 12.33 Importance of Biodiversity.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. As of November 2010, about how many species have been identified on the Earth? How close do
            scientists feel this number is to the total number of species which exist?<br/>
            2. In what kinds of locations are new species being found?<br/>
            3. Can different species be identified by just looking at them? What techniques are scientists using to
            identify new species?<br/>
            4. What is biodiversity?<br/>
            5. What does it mean if a place has high biodiversity?<br/>
            6. What is an economic impact of biodiversity?<br/>
            7. How does high biodiversity help the stability of an ecosystem?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener180} value={sci6Essay180}/>

          <span className="days">LESSON 181 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/12.34/primary/lesson/mass-extinctions-ms-ls"
              rel="noreferrer" target="_blank"> 12.34 Mass Extinction.</a>
          </p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the primary cause of human-induced extinctions?<br/>
            2. What is considered the greatest contributor to the extinction of many species?<br/>
            3. What was the effect effect of the introduction of mammalian predators to New Zealand?<br/>
            4. Why do species sometimes go extinct?<br/>
            5. What is a mass extinction?<br/>
            6. Define global warming. Why is global warming an issue to organisms?<br/>
            7. How could the high human population growth rate drive further extinctions of plants and animals?<br/>
            8. Give an example of how pollution can threaten organisms.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci6Listener181} value={sci6Essay181}/>
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 6th Grade Science! </h3>
    </form>
  )
}

export default Science6Component