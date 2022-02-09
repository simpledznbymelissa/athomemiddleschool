import React from "react"
import Video from "./video"

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  return [state, setState]
}

export default function Sci6() {
  const [sci6Essay, setsci6Essay] = useLocalStorageState("sci6Essay", "")
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

  const onChangeSci6Listener = (event) => {
    setsci6Essay(event.target.value)
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
    setsci6Essay13(event.target.value)
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
  return (
    <form>
      <div className="dot1"/>
      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title">Daily Lessons</h1>
          <div className="md-content">
            <span className="days">LESSON 1</span>

            <textarea className="textArea"
                      placeholder="Write your answers here. Your answers are saved to your local storage. If you clear your cookies, your work will be erased.  Be sure to BACK UP YOUR WORK or copy/paste it into an email to the person who will grade it."
                      onChange={onChangeSci6Listener} value={sci6Essay}/>

            <span className="days">LESSON 2</span>

            <textarea className="textArea" onChange={onChangeSci6Listener2} value={sci6Essay2}/>

            <span className="days">LESSON 3</span>


            <textarea className="textArea" onChange={onChangeSci6Listener3} value={sci6Essay3}/>

            <span className="days">LESSON 4</span>

              <textarea className="textArea" onChange={onChangeSci6Listener4} value={sci6Essay4}/>

              <span className="days">LESSON 5</span>

              <textarea className="textArea" onChange={onChangeSci6Listener5} value={sci6Essay5}/>

              <span className="days">LESSON 6</span>

              <textarea className="textArea" onChange={onChangeSci6Listener6} value={sci6Essay6}/>

              <span className="days">LESSON 7</span>

                <textarea className="textArea" onChange={onChangeSci6Listener7} value={sci6Essay7}/>

                <span className="days">LESSON 8</span>

                <textarea className="textArea" onChange={onChangeSci6Listener8} value={sci6Essay8}/>

                <span className="days">LESSON 9</span>

                <textarea className="textArea" onChange={onChangeSci6Listener9} value={sci6Essay9}/>

                <span className="days">LESSON 10</span>

                <textarea className="textArea" onChange={onChangeSci6Listener10} value={sci6Essay10}/>

                <span className="days">LESSON 11</span>

                <textarea className="textArea" onChange={onChangeSci6Listener11} value={sci6Essay11}/>

                <span className="days">LESSON 12</span>

                <textarea className="textArea" onChange={onChangeSci6Listener12} value={sci6Essay12}/>

                <span className="days">LESSON 13</span>

                <textarea className="textArea" onChange={onChangeSci6Listener13} value={sci6Essay13}/>

                <span className="days">LESSON 14</span>

                <textarea className="textArea" onChange={onChangeSci6Listener14} value={sci6Essay14}/>

                <span className="days">LESSON 15</span>

                <textarea className="textArea" onChange={onChangeSci6Listener15} value={sci6Essay15}/>

                <span className="days">LESSON 16</span>

                <textarea className="textArea" onChange={onChangeSci6Listener16} value={sci6Essay16}/>

                <span className="days">LESSON 17</span>

                <textarea className="textArea" onChange={onChangeSci6Listener17} value={sci6Essay17}/>

                <span className="days">LESSON 18</span>

                <textarea className="textArea" onChange={onChangeSci6Listener18} value={sci6Essay18}/>

                <span className="days">LESSON 19</span>

                <textarea className="textArea" onChange={onChangeSci6Listener19} value={sci6Essay19}/>

                <span className="days">LESSON 20</span>

                <textarea className="textArea" onChange={onChangeSci6Listener20} value={sci6Essay20}/>

                <span className="days">LESSON 21</span>

                <textarea className="textArea" onChange={onChangeSci6Listener21} value={sci6Essay21}/>

                <span className="days">LESSON 22</span>

                <textarea className="textArea" onChange={onChangeSci6Listener22} value={sci6Essay22}/>

                <span className="days">LESSON 23</span>

                <textarea className="textArea" onChange={onChangeSci6Listener23} value={sci6Essay23}/>

                <span className="days">LESSON 24</span>

                <textarea className="textArea" onChange={onChangeSci6Listener24} value={sci6Essay24}/>

                <span className="days">LESSON 25</span>

                <textarea className="textArea" onChange={onChangeSci6Listener25} value={sci6Essay25}/>

            <span className="days">LESSON 26</span>

                <textarea className="textArea" onChange={onChangeSci6Listener26} value={sci6Essay26}/>

            <span className="days">LESSON 27</span>

                <textarea className="textArea" onChange={onChangeSci6Listener27} value={sci6Essay27}/>

            <span className="days">LESSON 28</span>

                <textarea className="textArea" onChange={onChangeSci6Listener28} value={sci6Essay28}/>

            <span className="days">LESSON 29</span>

                <textarea className="textArea" onChange={onChangeSci6Listener29} value={sci6Essay29}/>

            <span className="days">LESSON 30</span>

                <textarea className="textArea" onChange={onChangeSci6Listener30} value={sci6Essay30}/>

            <span className="days">LESSON 31</span>

                <textarea className="textArea" onChange={onChangeSci6Listener31} value={sci6Essay31}/>

            <span className="days">LESSON 32</span>

                <textarea className="textArea" onChange={onChangeSci6Listener32} value={sci6Essay32}/>

            <span className="days">LESSON 33</span>

                <textarea className="textArea" onChange={onChangeSci6Listener33} value={sci6Essay33}/>

            <span className="days">LESSON 34</span>

                <textarea className="textArea" onChange={onChangeSci6Listener34} value={sci6Essay34}/>

            <span className="days">LESSON 35</span>

                <textarea className="textArea" onChange={onChangeSci6Listener35} value={sci6Essay35}/>

            <span className="days">LESSON 36</span>

                <textarea className="textArea" onChange={onChangeSci6Listener36} value={sci6Essay36}/>

            <span className="days">LESSON 37</span>

                <textarea className="textArea" onChange={onChangeSci6Listener37} value={sci6Essay37}/>

            <span className="days">LESSON 38</span>

                <textarea className="textArea" onChange={onChangeSci6Listener38} value={sci6Essay38}/>

            <span className="days">LESSON 39</span>

                <textarea className="textArea" onChange={onChangeSci6Listener39} value={sci6Essay39}/>

            <span className="days">LESSON 40</span>

                <textarea className="textArea" onChange={onChangeSci6Listener40} value={sci6Essay40}/>

            <span className="days">LESSON 41</span>

                <textarea className="textArea" onChange={onChangeSci6Listener41} value={sci6Essay41}/>

            <span className="days">LESSON 42</span>

                <textarea className="textArea" onChange={onChangeSci6Listener42} value={sci6Essay42}/>

            <span className="days">LESSON 43</span>

                <textarea className="textArea" onChange={onChangeSci6Listener43} value={sci6Essay43}/>

            <span className="days">LESSON 44</span>

                <textarea className="textArea" onChange={onChangeSci6Listener44} value={sci6Essay44}/>

            <span className="days">LESSON 45</span>

                <textarea className="textArea" onChange={onChangeSci6Listener45} value={sci6Essay45}/>

            <span className="days">LESSON 46</span>

                <textarea className="textArea" onChange={onChangeSci6Listener46} value={sci6Essay46}/>

            <span className="days">LESSON 47</span>

                <textarea className="textArea" onChange={onChangeSci6Listener47} value={sci6Essay47}/>

            <span className="days">LESSON 48</span>

                <textarea className="textArea" onChange={onChangeSci6Listener48} value={sci6Essay48}/>

            <span className="days">LESSON 49</span>

                <textarea className="textArea" onChange={onChangeSci6Listener49} value={sci6Essay49}/>

            <span className="days">LESSON 50</span>

                <textarea className="textArea" onChange={onChangeSci6Listener50} value={sci6Essay50}/>

            <span className="days">LESSON 51</span>

                <textarea className="textArea" onChange={onChangeSci6Listener51} value={sci6Essay51}/>

            <span className="days">LESSON 52</span>

                <textarea className="textArea" onChange={onChangeSci6Listener52} value={sci6Essay52}/>

            <span className="days">LESSON 53</span>

                <textarea className="textArea" onChange={onChangeSci6Listener53} value={sci6Essay53}/>

            <span className="days">LESSON 54</span>

                <textarea className="textArea" onChange={onChangeSci6Listener54} value={sci6Essay54}/>

            <span className="days">LESSON 55</span>

                <textarea className="textArea" onChange={onChangeSci6Listener55} value={sci6Essay55}/>

            <span className="days">LESSON 56</span>

                <textarea className="textArea" onChange={onChangeSci6Listener56} value={sci6Essay56}/>

            <span className="days">LESSON 57</span>

                <textarea className="textArea" onChange={onChangeSci6Listener57} value={sci6Essay57}/>

            <span className="days">LESSON 58</span>

                <textarea className="textArea" onChange={onChangeSci6Listener58} value={sci6Essay58}/>

            <span className="days">LESSON 59</span>

                <textarea className="textArea" onChange={onChangeSci6Listener140} value={sci6Essay140}/>

            <span className="days">LESSON 60</span>

                <textarea className="textArea" onChange={onChangeSci6Listener59} value={sci6Essay59}/>

            <span className="days">LESSON 61</span>

                <textarea className="textarea" onChange={onChangeSci6Listener101} value={sci6Essay101}/>

            <span className="days">LESSON 62</span>

                <textarea className="textArea" onChange={onChangeSci6Listener60} value={sci6Essay60}/>

            <span className="days">LESSON 63</span>

                <textarea className="textArea" onChange={onChangeSci6Listener61} value={sci6Essay61}/>

            <span className="days">LESSON 64</span>

                <textarea className="textArea" onChange={onChangeSci6Listener62} value={sci6Essay62}/>

            <span className="days">LESSON 65</span>

                <textarea className="textArea" onChange={onChangeSci6Listener63} value={sci6Essay63}/>

            <span className="days">LESSON 66</span>

                <textarea className="textArea" onChange={onChangeSci6Listener64} value={sci6Essay64}/>

            <span className="days">LESSON 67</span>

                <textarea className="textArea" onChange={onChangeSci6Listener65} value={sci6Essay65}/>

            <span className="days">LESSON 68</span>

                <textarea className="textArea" onChange={onChangeSci6Listener66} value={sci6Essay66}/>

            <span className="days">LESSON 69</span>

                <textarea className="textArea" onChange={onChangeSci6Listener67} value={sci6Essay67}/>

            <span className="days">LESSON 70</span>

                <textarea className="textArea" onChange={onChangeSci6Listener68} value={sci6Essay68}/>

            <span className="days">LESSON 71</span>

                <textarea className="textArea" onChange={onChangeSci6Listener69} value={sci6Essay69}/>

            <span className="days">LESSON 72</span>

                <textarea className="textArea" onChange={onChangeSci6Listener70} value={sci6Essay70}/>

            <span className="days">LESSON 73</span>

                <textarea className="textArea" onChange={onChangeSci6Listener71} value={sci6Essay71}/>

            <span className="days">LESSON 74</span>

                <textarea className="textArea" onChange={onChangeSci6Listener72} value={sci6Essay72}/>

            <span className="days">LESSON 75</span>

                <textarea className="textArea" onChange={onChangeSci6Listener73} value={sci6Essay73}/>

            <span className="days">LESSON 76</span>

                <textarea className="textArea" onChange={onChangeSci6Listener74} value={sci6Essay74}/>

            <span className="days">LESSON 77</span>

                <textarea className="textArea" onChange={onChangeSci6Listener75} value={sci6Essay75}/>

            <span className="days">LESSON 78</span>

                <textarea className="textArea" onChange={onChangeSci6Listener76} value={sci6Essay76}/>

            <span className="days">LESSON 79</span>

                <textarea className="textArea" onChange={onChangeSci6Listener77} value={sci6Essay77}/>

            <span className="days">LESSON 80</span>

                <textarea className="textArea" onChange={onChangeSci6Listener78} value={sci6Essay78}/>

            <span className="days">LESSON 81</span>

                <textarea className="textArea" onChange={onChangeSci6Listener79} value={sci6Essay79}/>

            <span className="days">LESSON 82</span>

                <textarea className="textArea" onChange={onChangeSci6Listener80} value={sci6Essay80}/>

            <span className="days">LESSON 83</span>

                <textarea className="textArea" onChange={onChangeSci6Listener81} value={sci6Essay81}/>

            <span className="days">LESSON 84</span>

                <textarea className="textArea" onChange={onChangeSci6Listener82} value={sci6Essay82}/>

            <span className="days">LESSON 85</span>

                <textarea className="textArea" onChange={onChangeSci6Listener83} value={sci6Essay83}/>

                <span className="days">LESSON 86</span>

                <textarea className="textArea" onChange={onChangeSci6Listener84} value={sci6Essay84}/>

                <span className="days">LESSON 87</span>

                <textarea className="textArea" onChange={onChangeSci6Listener85} value={sci6Essay85}/>

                <span className="days">LESSON 88</span>

                <textarea className="textArea" onChange={onChangeSci6Listener86} value={sci6Essay86}/>

                <span className="days">LESSON 89</span>

                <textarea className="textArea" onChange={onChangeSci6Listener87} value={sci6Essay87}/>

                <span className="days">LESSON 90</span>

                <textarea className="textArea" onChange={onChangeSci6Listener88} value={sci6Essay88}/>

                <span className="days">LESSON 91</span>

                <textarea className="textArea" onChange={onChangeSci6Listener89} value={sci6Essay89}/>

                <span className="days">LESSON 92</span>

                <textarea className="textArea" onChange={onChangeSci6Listener90} value={sci6Essay90}/>

                <span className="days">LESSON 93</span>

                <textarea className="textArea" onChange={onChangeSci6Listener91} value={sci6Essay91}/>

                <span className="days">LESSON 94</span>

                <textarea className="textArea" onChange={onChangeSci6Listener92} value={sci6Essay92}/>

                <span className="days">LESSON 95</span>

                <textarea className="textArea" onChange={onChangeSci6Listener93} value={sci6Essay93}/>

                <span className="days">LESSON 96</span>

                <textarea className="textArea" onChange={onChangeSci6Listener94} value={sci6Essay94}/>

                <span className="days">LESSON 97</span>

                <textarea className="textArea" onChange={onChangeSci6Listener95} value={sci6Essay95}/>

            <span className="days">LESSON 98</span>


                <textarea className="textArea" onChange={onChangeSci6Listener96} value={sci6Essay96}/>

            <span className="days">LESSON 99</span>


                <textarea className="textArea" onChange={onChangeSci6Listener97} value={sci6Essay97}/>

            <span className="days">LESSON 100</span>

                <textarea className="textArea" onChange={onChangeSci6Listener98} value={sci6Essay98}/>

            <span className="days">LESSON 101</span>


                <textarea className="textArea" onChange={onChangeSci6Listener99} value={sci6Essay99}/>

            <span className="days">LESSON 102</span>

                <textarea className="textArea" onChange={onChangeSci6Listener100} value={sci6Essay100}/>

            <span className="days">LESSON 103</span>


                <textarea className="textArea" onChange={onChangeSci6Listener102} value={sci6Essay102}/>

            <span className="days">LESSON 104</span>


                <textarea className="textArea" onChange={onChangeSci6Listener103} value={sci6Essay103}/>

            <span className="days">LESSON 105</span>

                <textarea className="textArea" onChange={onChangeSci6Listener104} value={sci6Essay104}/>

            <span className="days">LESSON 106</span>

                <textarea className="textArea" onChange={onChangeSci6Listener105} value={sci6Essay105}/>

            <span className="days">LESSON 107</span>

                <textarea className="textArea" onChange={onChangeSci6Listener106} value={sci6Essay106}/>

            <span className="days">LESSON 108</span>

                <textarea className="textArea" onChange={onChangeSci6Listener107} value={sci6Essay107}/>

            <span className="days">LESSON 109</span>

                <textarea className="textArea" onChange={onChangeSci6Listener108} value={sci6Essay108}/>

            <span className="days">LESSON 110</span>

                <textarea className="textArea" onChange={onChangeSci6Listener109} value={sci6Essay109}/>

            <span className="days">LESSON 111</span>

                <textarea className="textArea" onChange={onChangeSci6Listener110} value={sci6Essay110}/>

            <span className="days">LESSON 112</span>

                <textarea className="textArea" onChange={onChangeSci6Listener111} value={sci6Essay111}/>

            <span className="days">LESSON 113</span>

                <textarea className="textArea" onChange={onChangeSci6Listener112} value={sci6Essay112}/>

            <span className="days">LESSON 114</span>

                <textarea className="textArea" onChange={onChangeSci6Listener113} value={sci6Essay113}/>

            <span className="days">LESSON 115</span>

                <textarea className="textArea" onChange={onChangeSci6Listener114} value={sci6Essay114}/>

            <span className="days">LESSON 116</span>

                <textarea className="textArea" onChange={onChangeSci6Listener115} value={sci6Essay115}/>

            <span className="days">LESSON 117</span>

                <textarea className="textArea" onChange={onChangeSci6Listener116} value={sci6Essay116}/>

            <span className="days">LESSON 118</span>

                <textarea className="textArea" onChange={onChangeSci6Listener117} value={sci6Essay117}/>

            <span className="days">LESSON 119</span>

                <textarea className="textArea" onChange={onChangeSci6Listener118} value={sci6Essay118}/>

            <span className="days">LESSON 120</span>

                <textarea className="textArea" onChange={onChangeSci6Listener119} value={sci6Essay119}/>

            <span className="days">LESSON 121</span>

                <textarea className="textArea" onChange={onChangeSci6Listener120} value={sci6Essay120}/>

            <span className="days">LESSON 122</span>

                <textarea className="textArea" onChange={onChangeSci6Listener121} value={sci6Essay121}/>

            <span className="days">LESSON 123</span>

                <textarea className="textArea" onChange={onChangeSci6Listener122} value={sci6Essay122}/>

            <span className="days">LESSON 124</span>

                <textarea className="textArea" onChange={onChangeSci6Listener123} value={sci6Essay123}/>

            <span className="days">LESSON 125</span>

                <textarea className="textArea" onChange={onChangeSci6Listener124} value={sci6Essay124}/>

            <span className="days">LESSON 126</span>

                <textarea className="textArea" onChange={onChangeSci6Listener125} value={sci6Essay125}/>

            <span className="days">LESSON 127</span>

                <textarea className="textArea" onChange={onChangeSci6Listener126} value={sci6Essay126}/>

            <span className="days">LESSON 128</span>

                <textarea className="textArea" onChange={onChangeSci6Listener127} value={sci6Essay127}/>

            <span className="days">LESSON 129</span>

                <textarea className="textArea" onChange={onChangeSci6Listener128} value={sci6Essay128}/>

            <span className="days">LESSON 130</span>

                <textarea className="textArea" onChange={onChangeSci6Listener129} value={sci6Essay129}/>

            <span className="days">LESSON 131</span>

                <textarea className="textArea" onChange={onChangeSci6Listener130} value={sci6Essay130}/>

            <span className="days">LESSON 132</span>

                <textarea className="textArea" onChange={onChangeSci6Listener132} value={sci6Essay132}/>

            <span className="days">LESSON 133</span>

                <textarea className="textArea" onChange={onChangeSci6Listener133} value={sci6Essay133}/>

            <span className="days">LESSON 134</span>

                <textarea className="textArea" onChange={onChangeSci6Listener134} value={sci6Essay134}/>

            <span className="days">LESSON 135</span>

                <textarea className="textArea" onChange={onChangeSci6Listener135} value={sci6Essay135}/>

            <span className="days">LESSON 136</span>

                <textarea className="textArea" onChange={onChangeSci6Listener136} value={sci6Essay136}/>

                <span className="days">LESSON 137</span>

                <textarea className="textArea" onChange={onChangeSci6Listener137} value={sci6Essay137}/>

                <span className="days">LESSON 138</span>

                <textarea className="textArea" onChange={onChangeSci6Listener138} value={sci6Essay138}/>

                <span className="days">LESSON 139</span>

                <textarea className="textArea" onChange={onChangeSci6Listener139} value={sci6Essay139}/>

            <span className="days">LESSON 140</span>

            <textarea className="textArea" onChange={onChangeSci6Listener140} value={sci6Essay140}/>

            <span className="days">LESSON 141</span>

            <textarea className="textArea" onChange={onChangeSci6Listener141} value={sci6Essay141}/>
            <span className="days">LESSON 142</span>

            <textarea className="textArea" onChange={onChangeSci6Listener142} value={sci6Essay142}/>

            <span className="days">LESSON 143</span>

            <textarea className="textArea" onChange={onChangeSci6Listener143} value={sci6Essay143}/>

            <span className="days">LESSON 144</span>

            <textarea className="textArea" onChange={onChangeSci6Listener144} value={sci6Essay144}/>

            <span className="days">LESSON 145</span>

            <textarea className="textArea" onChange={onChangeSci6Listener145} value={sci6Essay145}/>

            <span className="days">LESSON 146</span>

            <textarea className="textArea" onChange={onChangeSci6Listener146} value={sci6Essay146}/>

            <span className="days">LESSON 147</span>

            <textarea className="textArea" onChange={onChangeSci6Listener147} value={sci6Essay147}/>

            <span className="days">LESSON 148</span>

            <textarea className="textArea" onChange={onChangeSci6Listener148} value={sci6Essay148}/>

            <span className="days">LESSON 149</span>

            <textarea className="textArea" onChange={onChangeSci6Listener149} value={sci6Essay149}/>

            <span className="days">LESSON 150</span>

            <textarea className="textArea" onChange={onChangeSci6Listener150} value={sci6Essay150}/>

            <span className="days">LESSON 151</span>

            <textarea className="textArea" onChange={onChangeSci6Listener151} value={sci6Essay151}/>

            <span className="days">LESSON 152</span>

            <textarea className="textArea" onChange={onChangeSci6Listener152} value={sci6Essay152}/>

            <span className="days">LESSON 153</span>

            <textarea className="textArea" onChange={onChangeSci6Listener153} value={sci6Essay153}/>

            <span className="days">LESSON 154</span>

            <textarea className="textArea" onChange={onChangeSci6Listener154} value={sci6Essay154}/>

            <span className="days">LESSON 155</span>

            <textarea className="textArea" onChange={onChangeSci6Listener155} value={sci6Essay155}/>

            <span className="days">LESSON 156</span>

            <textarea className="textArea" onChange={onChangeSci6Listener156} value={sci6Essay156}/>

            <span className="days">LESSON 157</span>

            <textarea className="textArea" onChange={onChangeSci6Listener157} value={sci6Essay157}/>

            <span className="days">LESSON 158</span>

            <textarea className="textArea" onChange={onChangeSci6Listener158} value={sci6Essay158}/>

            <span className="days">LESSON 159</span>

            <textarea className="textArea" onChange={onChangeSci6Listener159} value={sci6Essay159}/>
            <span className="days">LESSON 160</span>

            <textarea className="textArea" onChange={onChangeSci6Listener160} value={sci6Essay160}/>

            <span className="days">LESSON 161</span>

            <textarea className="textArea" onChange={onChangeSci6Listener161} value={sci6Essay161}/>
            <span className="days">LESSON 162</span>

            <textarea className="textArea" onChange={onChangeSci6Listener162} value={sci6Essay162}/>

            <span className="days">LESSON 163</span>

            <textarea className="textArea" onChange={onChangeSci6Listener163} value={sci6Essay163}/>

            <span className="days">LESSON 164</span>

            <textarea className="textArea" onChange={onChangeSci6Listener164} value={sci6Essay164}/>

            <span className="days">LESSON 165</span>

            <textarea className="textArea" onChange={onChangeSci6Listener165} value={sci6Essay165}/>

            <span className="days">LESSON 166</span>

            <textarea className="textArea" onChange={onChangeSci6Listener166} value={sci6Essay166}/>

            <span className="days">LESSON 167</span>

            <textarea className="textArea" onChange={onChangeSci6Listener167} value={sci6Essay167}/>

            <span className="days">LESSON 168</span>

            <textarea className="textArea" onChange={onChangeSci6Listener168} value={sci6Essay168}/>

            <span className="days">LESSON 169</span>

            <textarea className="textArea" onChange={onChangeSci6Listener169} value={sci6Essay169}/>

            <span className="days">LESSON 170</span>

            <textarea className="textArea" onChange={onChangeSci6Listener170} value={sci6Essay170}/>

            <span className="days">LESSON 171</span>

            <textarea className="textArea" onChange={onChangeSci6Listener171} value={sci6Essay171}/>

            <span className="days">LESSON 172</span>

            <textarea className="textArea" onChange={onChangeSci6Listener172} value={sci6Essay172}/>

            <span className="days">LESSON 173</span>

            <textarea className="textArea" onChange={onChangeSci6Listener173} value={sci6Essay173}/>

            <span className="days">LESSON 174</span>

            <textarea className="textArea" onChange={onChangeSci6Listener174} value={sci6Essay174}/>

            <span className="days">LESSON 175</span>

            <textarea className="textArea" onChange={onChangeSci6Listener175} value={sci6Essay175}/>

            <span className="days">LESSON 176</span>

            <textarea className="textArea" onChange={onChangeSci6Listener176} value={sci6Essay176}/>

            <span className="days">LESSON 177</span>

            <textarea className="textArea" onChange={onChangeSci6Listener177} value={sci6Essay177}/>

            <span className="days">LESSON 178</span>

            <textarea className="textArea" onChange={onChangeSci6Listener178} value={sci6Essay178}/>

            <span className="days">LESSON 179</span>

            <textarea className="textArea" onChange={onChangeSci6Listener179} value={sci6Essay179}/>

            <span className="days">LESSON 180</span>

            <textarea className="textArea" onChange={onChangeSci6Listener180} value={sci6Essay180}/>

          </div>
        </div>
      </section>
    </form>

  )
}