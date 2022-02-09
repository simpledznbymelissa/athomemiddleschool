import React from "react"
import ToggleSwitch from "./checkbox"
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

const LA6Component = ({ data }) => {

  const [la6Essay, setla6Essay] = useLocalStorageState("la6Essay", "")
  const [la6Essay2, setla6Essay2] = useLocalStorageState("la6Essay2", "")
  const [la6Essay3, setla6Essay3] = useLocalStorageState("la6Essay3", "")
  const [la6Essay4, setla6Essay4] = useLocalStorageState("la6Essay4", "")
  const [la6Essay5, setla6Essay5] = useLocalStorageState("la6Essay5", "")
  const [la6Essay6, setla6Essay6] = useLocalStorageState("la6Essay6", "")
  const [la6Essay7, setla6Essay7] = useLocalStorageState("la6Essay7", "")
  const [la6Essay8, setla6Essay8] = useLocalStorageState("la6Essay8", "")
  const [la6Essay9, setla6Essay9] = useLocalStorageState("la6Essay9", "")
  const [la6Essay10, setla6Essay10] = useLocalStorageState("la6Essay10", "")
  const [la6Essay11, setla6Essay11] = useLocalStorageState("la6Essay11", "")
  const [la6Essay12, setla6Essay12] = useLocalStorageState("la6Essay12", "")
  const [la6Essay13, setla6Essay13] = useLocalStorageState("la6Essay13", "")
  const [la6Essay14, setla6Essay14] = useLocalStorageState("la6Essay14", "")
  const [la6Essay15, setla6Essay15] = useLocalStorageState("la6Essay15", "")
  const [la6Essay16, setla6Essay16] = useLocalStorageState("la6Essay16", "")
  const [la6Essay17, setla6Essay17] = useLocalStorageState("la6Essay17", "")
  const [la6Essay18, setla6Essay18] = useLocalStorageState("la6Essay18", "")
  const [la6Essay19, setla6Essay19] = useLocalStorageState("la6Essay19", "")
  const [la6Essay20, setla6Essay20] = useLocalStorageState("la6Essay20", "")
  const [la6Essay21, setla6Essay21] = useLocalStorageState("la6Essay21", "")
  const [la6Essay22, setla6Essay22] = useLocalStorageState("la6Essay22", "")
  const [la6Essay23, setla6Essay23] = useLocalStorageState("la6Essay23", "")
  const [la6Essay24, setla6Essay24] = useLocalStorageState("la6Essay24", "")
  const [la6Essay25, setla6Essay25] = useLocalStorageState("la6Essay25", "")
  const [la6Essay26, setla6Essay26] = useLocalStorageState("la6Essay26", "")
  const [la6Essay27, setla6Essay27] = useLocalStorageState("la6Essay27", "")
  const [la6Essay28, setla6Essay28] = useLocalStorageState("la6Essay28", "")
  const [la6Essay29, setla6Essay29] = useLocalStorageState("la6Essay29", "")
  const [la6Essay30, setla6Essay30] = useLocalStorageState("la6Essay30", "")
  const [la6Essay31, setla6Essay31] = useLocalStorageState("la6Essay31", "")
  const [la6Essay32, setla6Essay32] = useLocalStorageState("la6Essay32", "")
  const [la6Essay33, setla6Essay33] = useLocalStorageState("la6Essay33", "")
  const [la6Essay34, setla6Essay34] = useLocalStorageState("la6Essay34", "")
  const [la6Essay35, setla6Essay35] = useLocalStorageState("la6Essay35", "")
  const [la6Essay36, setla6Essay36] = useLocalStorageState("la6Essay36", "")
  const [la6Essay37, setla6Essay37] = useLocalStorageState("la6Essay37", "")
  const [la6Essay38, setla6Essay38] = useLocalStorageState("la6Essay38", "")
  const [la6Essay39, setla6Essay39] = useLocalStorageState("la6Essay39", "")
  const [la6Essay40, setla6Essay40] = useLocalStorageState("la6Essay40", "")
  const [la6Essay41, setla6Essay41] = useLocalStorageState("la6Essay41", "")
  const [la6Essay42, setla6Essay42] = useLocalStorageState("la6Essay42", "")
  const [la6Essay43, setla6Essay43] = useLocalStorageState("la6Essay43", "")
  const [la6Essay44, setla6Essay44] = useLocalStorageState("la6Essay44", "")
  const [la6Essay45, setla6Essay45] = useLocalStorageState("la6Essay45", "")
  const [la6Essay46, setla6Essay46] = useLocalStorageState("la6Essay46", "")
  const [la6Essay47, setla6Essay47] = useLocalStorageState("la6Essay47", "")
  const [la6Essay48, setla6Essay48] = useLocalStorageState("la6Essay48", "")
  const [la6Essay49, setla6Essay49] = useLocalStorageState("la6Essay49", "")
  const [la6Essay50, setla6Essay50] = useLocalStorageState("la6Essay50", "")
  const [la6Essay51, setla6Essay51] = useLocalStorageState("la6Essay52", "")
  const [la6Essay52, setla6Essay52] = useLocalStorageState("la6Essay53", "")
  const [la6Essay53, setla6Essay53] = useLocalStorageState("la6Essay54", "")
  const [la6Essay54, setla6Essay54] = useLocalStorageState("la6Essay54", "")
  const [la6Essay55, setla6Essay55] = useLocalStorageState("la6Essay5", "")
  const [la6Essay56, setla6Essay56] = useLocalStorageState("la6Essay56", "")
  const [la6Essay57, setla6Essay57] = useLocalStorageState("la6Essay57", "")
  const [la6Essay58, setla6Essay58] = useLocalStorageState("la6Essay58", "")
  const [la6Essay59, setla6Essay59] = useLocalStorageState("la6Essay59", "")
  const [la6Essay60, setla6Essay60] = useLocalStorageState("la6Essay60", "")
  const [la6Essay61, setla6Essay61] = useLocalStorageState("la6Essay61", "")
  const [la6Essay62, setla6Essay62] = useLocalStorageState("la6Essay62", "")
  const [la6Essay63, setla6Essay63] = useLocalStorageState("la6Essay63", "")
  const [la6Essay64, setla6Essay64] = useLocalStorageState("la6Essay64", "")
  const [la6Essay65, setla6Essay65] = useLocalStorageState("la6Essay65", "")
  const [la6Essay66, setla6Essay66] = useLocalStorageState("la6Essay66", "")
  const [la6Essay67, setla6Essay67] = useLocalStorageState("la6Essay67", "")
  const [la6Essay68, setla6Essay68] = useLocalStorageState("la6Essay68", "")
  const [la6Essay69, setla6Essay69] = useLocalStorageState("la6Essay69", "")
  const [la6Essay70, setla6Essay70] = useLocalStorageState("la6Essay70", "")
  const [la6Essay71, setla6Essay71] = useLocalStorageState("la6Essay71", "")
  const [la6Essay72, setla6Essay72] = useLocalStorageState("la6Essay72", "")
  const [la6Essay73, setla6Essay73] = useLocalStorageState("la6Essay73", "")
  const [la6Essay74, setla6Essay74] = useLocalStorageState("la6Essay74", "")
  const [la6Essay75, setla6Essay75] = useLocalStorageState("la6Essay75", "")
  const [la6Essay76, setla6Essay76] = useLocalStorageState("la6Essay76", "")
  const [la6Essay77, setla6Essay77] = useLocalStorageState("la6Essay77", "")
  const [la6Essay78, setla6Essay78] = useLocalStorageState("la6Essay78", "")
  const [la6Essay79, setla6Essay79] = useLocalStorageState("la6Essay79", "")
  const [la6Essay80, setla6Essay80] = useLocalStorageState("la6Essay80", "")
  const [la6Essay81, setla6Essay81] = useLocalStorageState("la6Essay81", "")
  const [la6Essay82, setla6Essay82] = useLocalStorageState("la6Essay82", "")
  const [la6Essay83, setla6Essay83] = useLocalStorageState("la6Essay83", "")
  const [la6Essay84, setla6Essay84] = useLocalStorageState("la6Essay84", "")
  const [la6Essay85, setla6Essay85] = useLocalStorageState("la6Essay85", "")
  const [la6Essay86, setla6Essay86] = useLocalStorageState("la6Essay86", "")
  const [la6Essay87, setla6Essay87] = useLocalStorageState("la6Essay87", "")
  const [la6Essay88, setla6Essay88] = useLocalStorageState("la6Essay88", "")
  const [la6Essay89, setla6Essay89] = useLocalStorageState("la6Essay89", "")
  const [la6Essay90, setla6Essay90] = useLocalStorageState("la6Essay90", "")
  const [la6Essay91, setla6Essay91] = useLocalStorageState("la6Essay91", "")
  const [la6Essay92, setla6Essay92] = useLocalStorageState("la6Essay93", "")
  const [la6Essay93, setla6Essay93] = useLocalStorageState("la6Essay94", "")
  const [la6Essay94, setla6Essay94] = useLocalStorageState("la6Essay95", "")
  const [la6Essay95, setla6Essay95] = useLocalStorageState("la6Essay96", "")
  const [la6Essay96, setla6Essay96] = useLocalStorageState("la6Essay97", "")
  const [la6Essay97, setla6Essay97] = useLocalStorageState("la6Essay98", "")
  const [la6Essay98, setla6Essay98] = useLocalStorageState("la6Essay98", "")
  const [la6Essay99, setla6Essay99] = useLocalStorageState("la6Essay99", "")
  const [la6Essay100, setla6Essay100] = useLocalStorageState("la6Essay100", "")
  const [la6Essay101, setla6Essay101] = useLocalStorageState("la6Essay101", "")
  const [la6Essay102, setla6Essay102] = useLocalStorageState("la6Essay102", "")
  const [la6Essay103, setla6Essay103] = useLocalStorageState("la6Essay103", "")
  const [la6Essay104, setla6Essay104] = useLocalStorageState("la6Essay104", "")
  const [la6Essay105, setla6Essay105] = useLocalStorageState("la6Essay105", "")
  const [la6Essay106, setla6Essay106] = useLocalStorageState("la6Essay106", "")
  const [la6Essay107, setla6Essay107] = useLocalStorageState("la6Essay107", "")
  const [la6Essay108, setla6Essay108] = useLocalStorageState("la6Essay108", "")
  const [la6Essay109, setla6Essay109] = useLocalStorageState("la6Essay109", "")
  const [la6Essay110, setla6Essay110] = useLocalStorageState("la6Essay110", "")
  const [la6Essay111, setla6Essay111] = useLocalStorageState("la6Essay111", "")
  const [la6Essay112, setla6Essay112] = useLocalStorageState("la6Essay112", "")
  const [la6Essay113, setla6Essay113] = useLocalStorageState("la6Essay113", "")
  const [la6Essay114, setla6Essay114] = useLocalStorageState("la6Essay114", "")
  const [la6Essay115, setla6Essay115] = useLocalStorageState("la6Essay115", "")
  const [la6Essay116, setla6Essay116] = useLocalStorageState("la6Essay116", "")
  const [la6Essay117, setla6Essay117] = useLocalStorageState("la6Essay117", "")
  const [la6Essay118, setla6Essay118] = useLocalStorageState("la6Essay118", "")
  const [la6Essay119, setla6Essay119] = useLocalStorageState("la6Essay119", "")
  const [la6Essay120, setla6Essay120] = useLocalStorageState("la6Essay120", "")
  const [la6Essay121, setla6Essay121] = useLocalStorageState("la6Essay121", "")
  const [la6Essay122, setla6Essay122] = useLocalStorageState("la6Essay122", "")
  const [la6Essay123, setla6Essay123] = useLocalStorageState("la6Essay123", "")
  const [la6Essay124, setla6Essay124] = useLocalStorageState("la6Essay124", "")
  const [la6Essay125, setla6Essay125] = useLocalStorageState("la6Essay125", "")
  const [la6Essay126, setla6Essay126] = useLocalStorageState("la6Essay126", "")
  const [la6Essay127, setla6Essay127] = useLocalStorageState("la6Essay127", "")
  const [la6Essay128, setla6Essay128] = useLocalStorageState("la6Essay128", "")
  const [la6Essay129, setla6Essay129] = useLocalStorageState("la6Essay129", "")
  const [la6Essay130, setla6Essay130] = useLocalStorageState("la6Essay130", "")
  // const [la6Essay131, setla6Essay131] = useLocalStorageState("la6Essay131", "")
  const [la6Essay132, setla6Essay132] = useLocalStorageState("la6Essay132", "")
  const [la6Essay133, setla6Essay133] = useLocalStorageState("la6Essay133", "")
  const [la6Essay134, setla6Essay134] = useLocalStorageState("la6Essay134", "")
  const [la6Essay135, setla6Essay135] = useLocalStorageState("la6Essay135", "")
  const [la6Essay136, setla6Essay136] = useLocalStorageState("la6Essay136", "")
  const [la6Essay137, setla6Essay137] = useLocalStorageState("la6Essay137", "")
  const [la6Essay138, setla6Essay138] = useLocalStorageState("la6Essay138", "")
  const [la6Essay139, setla6Essay139] = useLocalStorageState("la6Essay139", "")
  const [la6Essay140, setla6Essay140] = useLocalStorageState("la6Essay140", "")
  const [la6Essay141, setla6Essay141] = useLocalStorageState("la6Essay141", "")
  const [la6Essay142, setla6Essay142] = useLocalStorageState("la6Essay142", "")
  const [la6Essay143, setla6Essay143] = useLocalStorageState("la6Essay143", "")
  const [la6Essay144, setla6Essay144] = useLocalStorageState("la6Essay144", "")
  const [la6Essay145, setla6Essay145] = useLocalStorageState("la6Essay145", "")
  const onChangeLA6Listener = (event) => {
    setla6Essay(event.target.value)
  }
  const onChangeLA6Listener2 = (event) => {
    setla6Essay2(event.target.value)
  }
  const onChangeLA6Listener3 = (event) => {
    setla6Essay3(event.target.value)
  }
  const onChangeLA6Listener4 = (event) => {
    setla6Essay4(event.target.value)
  }
  const onChangeLA6Listener5 = (event) => {
    setla6Essay5(event.target.value)
  }
  const onChangeLA6Listener6 = (event) => {
    setla6Essay6(event.target.value)
  }
  const onChangeLA6Listener7 = (event) => {
    setla6Essay7(event.target.value)
  }
  const onChangeLA6Listener8 = (event) => {
    setla6Essay8(event.target.value)
  }
  const onChangeLA6Listener9 = (event) => {
    setla6Essay9(event.target.value)
  }
  const onChangeLA6Listener10 = (event) => {
    setla6Essay10(event.target.value)
  }
  const onChangeLA6Listener11 = (event) => {
    setla6Essay11(event.target.value)
  }
  const onChangeLA6Listener12 = (event) => {
    setla6Essay12(event.target.value)
  }
  const onChangeLA6Listener13 = (event) => {
    setla6Essay13(event.target.value)
  }
  const onChangeLA6Listener14 = (event) => {
    setla6Essay14(event.target.value)
  }
  const onChangeLA6Listener15 = (event) => {
    setla6Essay15(event.target.value)
  }
  const onChangeLA6Listener16 = (event) => {
    setla6Essay16(event.target.value)
  }
  const onChangeLA6Listener17 = (event) => {
    setla6Essay17(event.target.value)
  }
  const onChangeLA6Listener18 = (event) => {
    setla6Essay18(event.target.value)
  }
  const onChangeLA6Listener19 = (event) => {
    setla6Essay19(event.target.value)
  }
  const onChangeLA6Listener20 = (event) => {
    setla6Essay20(event.target.value)
  }
  const onChangeLA6Listener21 = (event) => {
    setla6Essay21(event.target.value)
  }
  const onChangeLA6Listener22 = (event) => {
    setla6Essay22(event.target.value)
  }
  const onChangeLA6Listener23 = (event) => {
    setla6Essay23(event.target.value)
  }
  const onChangeLA6Listener24 = (event) => {
    setla6Essay24(event.target.value)
  }
  const onChangeLA6Listener25 = (event) => {
    setla6Essay25(event.target.value)
  }
  const onChangeLA6Listener26 = (event) => {
    setla6Essay26(event.target.value)
  }
  const onChangeLA6Listener27 = (event) => {
    setla6Essay27(event.target.value)
  }
  const onChangeLA6Listener28 = (event) => {
    setla6Essay28(event.target.value)
  }
  const onChangeLA6Listener29 = (event) => {
    setla6Essay29(event.target.value)
  }
  const onChangeLA6Listener30 = (event) => {
    setla6Essay30(event.target.value)
  }
  const onChangeLA6Listener31 = (event) => {
    setla6Essay31(event.target.value)
  }
  const onChangeLA6Listener32 = (event) => {
    setla6Essay32(event.target.value)
  }
  const onChangeLA6Listener33 = (event) => {
    setla6Essay33(event.target.value)
  }
  const onChangeLA6Listener34 = (event) => {
    setla6Essay34(event.target.value)
  }
  const onChangeLA6Listener35 = (event) => {
    setla6Essay35(event.target.value)
  }
  const onChangeLA6Listener36 = (event) => {
    setla6Essay36(event.target.value)
  }
  const onChangeLA6Listener37 = (event) => {
    setla6Essay37(event.target.value)
  }
  const onChangeLA6Listener38 = (event) => {
    setla6Essay38(event.target.value)
  }
  const onChangeLA6Listener39 = (event) => {
    setla6Essay39(event.target.value)
  }
  const onChangeLA6Listener40 = (event) => {
    setla6Essay40(event.target.value)
  }
  const onChangeLA6Listener41 = (event) => {
    setla6Essay41(event.target.value)
  }
  const onChangeLA6Listener42 = (event) => {
    setla6Essay42(event.target.value)
  }
  const onChangeLA6Listener43 = (event) => {
    setla6Essay43(event.target.value)
  }
  const onChangeLA6Listener44 = (event) => {
    setla6Essay44(event.target.value)
  }
  const onChangeLA6Listener45 = (event) => {
    setla6Essay45(event.target.value)
  }
  const onChangeLA6Listener46 = (event) => {
    setla6Essay46(event.target.value)
  }
  const onChangeLA6Listener47 = (event) => {
    setla6Essay47(event.target.value)
  }
  const onChangeLA6Listener48 = (event) => {
    setla6Essay48(event.target.value)
  }
  const onChangeLA6Listener49 = (event) => {
    setla6Essay49(event.target.value)
  }
  const onChangeLA6Listener50 = (event) => {
    setla6Essay50(event.target.value)
  }
  const onChangeLA6Listener51 = (event) => {
    setla6Essay51(event.target.value)
  }
  const onChangeLA6Listener52 = (event) => {
    setla6Essay52(event.target.value)
  }
  const onChangeLA6Listener53 = (event) => {
    setla6Essay53(event.target.value)
  }
  const onChangeLA6Listener54 = (event) => {
    setla6Essay54(event.target.value)
  }
  const onChangeLA6Listener55 = (event) => {
    setla6Essay55(event.target.value)
  }
  const onChangeLA6Listener56 = (event) => {
    setla6Essay56(event.target.value)
  }
  const onChangeLA6Listener57 = (event) => {
    setla6Essay57(event.target.value)
  }
  const onChangeLA6Listener58 = (event) => {
    setla6Essay58(event.target.value)
  }
  const onChangeLA6Listener59 = (event) => {
    setla6Essay59(event.target.value)
  }
  const onChangeLA6Listener60 = (event) => {
    setla6Essay60(event.target.value)
  }
  const onChangeLA6Listener61 = (event) => {
    setla6Essay61(event.target.value)
  }
  const onChangeLA6Listener62 = (event) => {
    setla6Essay62(event.target.value)
  }
  const onChangeLA6Listener63 = (event) => {
    setla6Essay63(event.target.value)
  }
  const onChangeLA6Listener64 = (event) => {
    setla6Essay64(event.target.value)
  }
  const onChangeLA6Listener65 = (event) => {
    setla6Essay65(event.target.value)
  }
  const onChangeLA6Listener66 = (event) => {
    setla6Essay66(event.target.value)
  }
  const onChangeLA6Listener67 = (event) => {
    setla6Essay67(event.target.value)
  }
  const onChangeLA6Listener68 = (event) => {
    setla6Essay68(event.target.value)
  }
  const onChangeLA6Listener69 = (event) => {
    setla6Essay69(event.target.value)
  }
  const onChangeLA6Listener70 = (event) => {
    setla6Essay70(event.target.value)
  }
  const onChangeLA6Listener71 = (event) => {
    setla6Essay71(event.target.value)
  }
  const onChangeLA6Listener72 = (event) => {
    setla6Essay72(event.target.value)
  }
  const onChangeLA6Listener73 = (event) => {
    setla6Essay73(event.target.value)
  }
  const onChangeLA6Listener74 = (event) => {
    setla6Essay74(event.target.value)
  }
  const onChangeLA6Listener75 = (event) => {
    setla6Essay75(event.target.value)
  }
  const onChangeLA6Listener76 = (event) => {
    setla6Essay76(event.target.value)
  }
  const onChangeLA6Listener77 = (event) => {
    setla6Essay77(event.target.value)
  }
  const onChangeLA6Listener78 = (event) => {
    setla6Essay78(event.target.value)
  }
  const onChangeLA6Listener79 = (event) => {
    setla6Essay79(event.target.value)
  }
  const onChangeLA6Listener80 = (event) => {
    setla6Essay80(event.target.value)
  }
  const onChangeLA6Listener81 = (event) => {
    setla6Essay81(event.target.value)
  }
  const onChangeLA6Listener82 = (event) => {
    setla6Essay82(event.target.value)
  }
  const onChangeLA6Listener83 = (event) => {
    setla6Essay83(event.target.value)
  }
  const onChangeLA6Listener84 = (event) => {
    setla6Essay84(event.target.value)
  }
  const onChangeLA6Listener85 = (event) => {
    setla6Essay85(event.target.value)
  }
  const onChangeLA6Listener86 = (event) => {
    setla6Essay86(event.target.value)
  }
  const onChangeLA6Listener87 = (event) => {
    setla6Essay87(event.target.value)
  }
  const onChangeLA6Listener88 = (event) => {
    setla6Essay88(event.target.value)
  }
  const onChangeLA6Listener89 = (event) => {
    setla6Essay89(event.target.value)
  }
  const onChangeLA6Listener90 = (event) => {
    setla6Essay90(event.target.value)
  }
  const onChangeLA6Listener91 = (event) => {
    setla6Essay91(event.target.value)
  }
  const onChangeLA6Listener92 = (event) => {
    setla6Essay92(event.target.value)
  }
  const onChangeLA6Listener93 = (event) => {
    setla6Essay93(event.target.value)
  }
  const onChangeLA6Listener94 = (event) => {
    setla6Essay94(event.target.value)
  }
  const onChangeLA6Listener95 = (event) => {
    setla6Essay95(event.target.value)
  }
  const onChangeLA6Listener96 = (event) => {
    setla6Essay96(event.target.value)
  }
  const onChangeLA6Listener97 = (event) => {
    setla6Essay97(event.target.value)
  }
  const onChangeLA6Listener98 = (event) => {
    setla6Essay98(event.target.value)
  }
  const onChangeLA6Listener99 = (event) => {
    setla6Essay99(event.target.value)
  }
  const onChangeLA6Listener100 = (event) => {
    setla6Essay100(event.target.value)
  }
  const onChangeLA6Listener101 = (event) => {
    setla6Essay101(event.target.value)
  }
  const onChangeLA6Listener102 = (event) => {
    setla6Essay102(event.target.value)
  }
  const onChangeLA6Listener103 = (event) => {
    setla6Essay103(event.target.value)
  }
  const onChangeLA6Listener104 = (event) => {
    setla6Essay104(event.target.value)
  }
  const onChangeLA6Listener105 = (event) => {
    setla6Essay105(event.target.value)
  }
  const onChangeLA6Listener106 = (event) => {
    setla6Essay106(event.target.value)
  }
  const onChangeLA6Listener107 = (event) => {
    setla6Essay107(event.target.value)
  }
  const onChangeLA6Listener108 = (event) => {
    setla6Essay108(event.target.value)
  }
  const onChangeLA6Listener109 = (event) => {
    setla6Essay109(event.target.value)
  }
  const onChangeLA6Listener110 = (event) => {
    setla6Essay110(event.target.value)
  }
  const onChangeLA6Listener111 = (event) => {
    setla6Essay111(event.target.value)
  }
  const onChangeLA6Listener112 = (event) => {
    setla6Essay112(event.target.value)
  }
  const onChangeLA6Listener113 = (event) => {
    setla6Essay113(event.target.value)
  }
  const onChangeLA6Listener114 = (event) => {
    setla6Essay114(event.target.value)
  }
  const onChangeLA6Listener115 = (event) => {
    setla6Essay115(event.target.value)
  }
  const onChangeLA6Listener116 = (event) => {
    setla6Essay116(event.target.value)
  }
  const onChangeLA6Listener117 = (event) => {
    setla6Essay117(event.target.value)
  }
  const onChangeLA6Listener118 = (event) => {
    setla6Essay118(event.target.value)
  }
  const onChangeLA6Listener119 = (event) => {
    setla6Essay119(event.target.value)
  }
  const onChangeLA6Listener120 = (event) => {
    setla6Essay120(event.target.value)
  }
  const onChangeLA6Listener121 = (event) => {
    setla6Essay121(event.target.value)
  }
  const onChangeLA6Listener122 = (event) => {
    setla6Essay122(event.target.value)
  }
  const onChangeLA6Listener123 = (event) => {
    setla6Essay123(event.target.value)
  }
  const onChangeLA6Listener124 = (event) => {
    setla6Essay124(event.target.value)
  }
  const onChangeLA6Listener125 = (event) => {
    setla6Essay125(event.target.value)
  }
  const onChangeLA6Listener126 = (event) => {
    setla6Essay126(event.target.value)
  }
  const onChangeLA6Listener127 = (event) => {
    setla6Essay127(event.target.value)
  }
  const onChangeLA6Listener128 = (event) => {
    setla6Essay128(event.target.value)
  }
  const onChangeLA6Listener129 = (event) => {
    setla6Essay129(event.target.value)
  }
  const onChangeLA6Listener130 = (event) => {
    setla6Essay130(event.target.value)
  }
  // const onChangeLA6Listener131 = (event) => {
  //   setla6Essay131(event.target.value)
  // }
  const onChangeLA6Listener132 = (event) => {
    setla6Essay132(event.target.value)
  }
  const onChangeLA6Listener133 = (event) => {
    setla6Essay133(event.target.value)
  }
  const onChangeLA6Listener134 = (event) => {
    setla6Essay134(event.target.value)
  }
  const onChangeLA6Listener135 = (event) => {
    setla6Essay135(event.target.value)
  }
  const onChangeLA6Listener136 = (event) => {
    setla6Essay136(event.target.value)
  }
  const onChangeLA6Listener137 = (event) => {
    setla6Essay137(event.target.value)
  }
  const onChangeLA6Listener138 = (event) => {
    setla6Essay138(event.target.value)
  }
  const onChangeLA6Listener139 = (event) => {
    setla6Essay139(event.target.value)
  }
  const onChangeLA6Listener140 = (event) => {
    setla6Essay140(event.target.value)
  }
  const onChangela6Listener141 = (event) => {
    setla6Essay141(event.target.value)
  }
  const onChangela6Listener142 = (event) => {
    setla6Essay142(event.target.value)
  }
  const onChangela6Listener143 = (event) => {
    setla6Essay143(event.target.value)
  }
  const onChangela6Listener144 = (event) => {
    setla6Essay144(event.target.value)
  }
  const onChangela6Listener145 = (event) => {
    setla6Essay145(event.target.value)
  }
  const [selectedLA160, setSelectedLA160] = React.useState(localStorage.getItem("la6-160") === "true")
  const [selectedLA161, setSelectedLA161] = React.useState(localStorage.getItem("la6-161") === "true")
  const [selectedLA162, setSelectedLA162] = React.useState(localStorage.getItem("la6-162") === "true")
  const [selectedLA163, setSelectedLA163] = React.useState(localStorage.getItem("la6-163") === "true")
  const [selectedLA164, setSelectedLA164] = React.useState(localStorage.getItem("la6-164") === "true")
  const [selectedLA165, setSelectedLA165] = React.useState(localStorage.getItem("la6-165") === "true")
  const [selectedLA166, setSelectedLA166] = React.useState(localStorage.getItem("la6-166") === "true")
  const [selectedLA167, setSelectedLA167] = React.useState(localStorage.getItem("la6-167") === "true")
  const [selectedLA168, setSelectedLA168] = React.useState(localStorage.getItem("la6-168") === "true")
  const [selectedLA169, setSelectedLA169] = React.useState(localStorage.getItem("la6-169") === "true")
  const [selectedLA170, setSelectedLA170] = React.useState(localStorage.getItem("la6-170") === "true")
  const [selectedLA171, setSelectedLA171] = React.useState(localStorage.getItem("la6-171") === "true")
  const [selectedLA172, setSelectedLA172] = React.useState(localStorage.getItem("la6-172") === "true")
  const [selectedLA173, setSelectedLA173] = React.useState(localStorage.getItem("la6-173") === "true")
  const [selectedLA174, setSelectedLA174] = React.useState(localStorage.getItem("la6-174") === "true")
  const [selectedLA175, setSelectedLA175] = React.useState(localStorage.getItem("la6-175") === "true")


  return (

    <form>
      <section className="block-circles">
        <div className="circle one"
             style={{
               animationDuration: "4s",
               backgroundColor: "#89d4f0",
               transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)",
               opacity: "0.9881"
             }}/>
        <div className="circle two" style={{
          animationDuration: "4s",
          backgroundColor: "#89d4f0",
          transform: "translate(0px, 0px)",
          opacity: 1
        }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro ">Language Arts</h1>
          <div className="hero info-block info-block-line " style={{ marginBottom: "4em" }}>
            <Link to="/sixth" className='gradeLink'><h2 className="hero">6th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top fadeIn">
        <div className="section-content">
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="margin-para fadeIn">In 6th Grade Language Arts, students will:
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
          <p className="margin-para fadeIn">The books required for this course are: D'Aulaires <i>Book of Greek Myths,
            The Egypt Game</i> by Zilpha Keatley Snyder, <i> The Golden Compass</i> by Philip Pullman, <i> The Hunger Games</i> by Suzanne Collins, and <i>Stargirl</i> by
            Jerry Spinelli. They are all available at your local library, local bookstore, or can be
            purchased online. Until you get a copy, the first chapter for each book is linked as a PDF. The entire book
            is posted if it is out of copyright.</p>

          <p className="margin-para fadeIn">Users may encounter texts, videos or poetry they consider controversial, offensive, or inappropriate. It is the responsibility of the parent, guardian or teacher to review all materials before their student views them.</p>
          <h1 className="section-title fadeIn">Daily Lessons</h1>

          <span className="days">LESSON 1</span>
          <p>The first book you will read is D'Aulaires <i>Book of Greek Myths.</i> Begin reading <a
            href={require("../resources/books/Daulaires/1_olden_times.pdf")} rel="noreferrer" target="_blank">
            <i> Olden Times. </i></a> You can zoom in or out by using the + - icons. You can also enable fullscreen
            viewing. </p>
          <p>When you complete the reading, answer the following questions to your best ability, using complete
            sentences:</p>
          <p>1. According to Greek mythology how was the universe created?<br/>
            2. There was a god who controlled lightning, another who controlled the seas, another who controlled
            agriculture, another who controlled the sun, etc. Why do you think the ancient Greeks created so many
            different
            gods? <br/>
            3. Based on their mythology, describe how ancient Greeks saw the world. If you lived back then, do you think
            you would have believed in so many gods and seen the world like the ancient Greeks did?<br/>
            4. Compare how Ancient Greeks saw the world and how they practiced religion compared to how people today see
            the world and practice religion.
            <br/> 5. Describe how Uranus upset Mother Earth.
            <br/> 6. What do you think about Cronus as a leader? What did he do to his children? Why did he do
            this? <br/></p>

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

                    onChange={onChangeLA6Listener} value={la6Essay}/>
          <p>If you don’t already have an account with Quizlet, <a
            href="https://help.quizlet.com/hc/en-us/articles/360030555532-Signing-up-for-a-free-account"
            rel="noreferrer" target="_blank"> click here to set one up for free.</a></p>
          <p>Then <a
            href="https://quizlet.com/519237574/lesson-1-olden-times-gaea-the-titans-cronus-pp-9-15-flash-cards/"
            rel="noreferrer" target="_blank"> review
            the flashcards and take the test for Olden Times, Gaea, The Titans, Cronus</a>.
            You can take the test as many times as you like so you can do your best.</p><br/>

          <span className="days">LESSON 2</span>
          <p><a href={require("../resources/books/Daulaires/2_zeus_and_his_family.pdf")} rel="noreferrer"
                target="_blank">
            Read <i>Zeus and his Family </i></a> from D'Aulaire's Book of Greek Myths.</p>
          <p> Watch the video The Greek Gods</p>
          <Video videoUrl="https://www.youtube.com/embed/eJCm8W5RZes"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe how Zeus and his siblings managed to become rulers of the world.<br/>
            2. Zeus’ children were not born in an ordinary way. Describe how they were born.<br/>
            3. What did you find the most interesting about the video?</p>

          <textarea className="textArea" onChange={onChangeLA6Listener2} value={la6Essay2}
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
          />

          <p>Go to <a href="https://quizlet.com/519237427/lesson-2-zeus-and-his-family-pp-16-21-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for Lesson 2</a>.
            You can take the test as many times as like so you can do your best.</p>
          <br/>
          <span className="days">LESSON 3</span>
          <p><a href={require("../resources/books/Daulaires/3_twelve_golden_thrones.pdf")} rel="noreferrer"
                target="_blank"> Read <i> Twelve Golden Thrones</i></a> from D'Aulaire's Book of Greek Myths.</p>
          <br/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Which god or goddess do you think would make the best president? Explain your answer.<br/>
            2. The gods and goddesses of ancient Greece could never die. How do you think this affects how they live
            their lives and
            make decisions?<br/>
            3. Would you choose to live forever if you could? Why or why not?</p>
          <textarea className="textArea"
                    placeholder="Write your answers here. Back up your work or email it to your teacher/parent."
                    onChange={onChangeLA6Listener3} value={la6Essay3}/>

          <p>Go to <a href="https://quizlet.com/519237145/lesson-3-twelve-golden-thrones-pp-22-23-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for Lesson 3.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 4</span>
          <p><a href={require("../resources/books/Daulaires/4_hera_hephaestus.pdf")} rel="noreferrer"
                target="_blank"> Read <i>Hera and Hephaestus</i> </a>from D'Aulaire's Book of Greek Myths.</p>
          <p>After you finish the reading, answer the following questions to the
            best of your ability:<br/>
            1. Describe Hera. Who is she and what is she like?<br/>
            2. What do you think the things she does out of jealousy. Are they justified? Why or why not?<br/>
            3. Describe Hephaestus. What was he known for? Describe what happened to him.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener4} value={la6Essay4}/>

          <p>Go to <a href="https://quizlet.com/519236864/lesson-4-hera-hephaestus-pp24-29-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet </a>, review the flashcards on Hera and Hephaestus, then take the test.
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 5</span>
          <p>Watch the TedEd Video <i>What makes a hero?</i> by Matthew Winkler. </p>

          <Video videoUrl="https://www.youtube.com/embed/Hhk4N9A0oCA"/>

          <p>In complete sentences, answer the following questions based on the TedEd lesson:<br/>
            1. What is the hero’s journey pattern? Think of your favorite book or movie. Do you think it follow the
            hero’s journey pattern?
            Explain.<br/>
            2. When does the hero realize that he/she is changed (or has outgrown his/her old life)? <br/>
            3. Can you think of an episode from your own life that fits the hero’s journey formula?<br/>
            4. In many stories, the hero must cross a physical barrier that separates the ordinary world from
            the special world, but the two worlds aren’t always physical places. Can you think of a story that
            follows a hero’s journey through a “special world” of unfamiliar emotional territory?<br/>
            5. According to the hero’s journey, the treasure you seek lies where?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener5} value={la6Essay5}/>

          <span className="days">LESSON 6</span>
          <p><a href={require("../resources/books/Daulaires/5_aphrodite_ares_athena.pdf")} rel="noreferrer"
                target="_blank"> Read
            <i> Aphrodite, Ares and Athena </i></a> from D'Aulaire's Book of Greek Myths.</p>
          {/*Watch the Crash Course video <i> The Greeks and Romans - World Mythology</i>*/}
          {/*<Video videoUrl="https://www.youtube.com/embed/XNCQ9w59I7M"/>*/}
          <p>In complete sentences, answer the following questions:<br/>
            1. What is Aphrodite’s greatest power? <br/>
            2. Would you like to have this ability? Explain why or why not. <br/>
            3. What is your opinion about Ares? What do you think of him as a God?<br/>
            4. Compare Cronus and Ares, the god of war. How are Cronus and Ares the same?
            How are they different? Who do you dislike more and why? Who
            do you believe caused more suffering? <br/>
            5. How is Athena different from other goddesses?<br/>
            6. Numerous statues, monuments, paintings and athletic games were created to honor Athena. What
            qualities do you think make her special?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener6} value={la6Essay6}/>

          <p>Go to <a href="https://quizlet.com/519236672/lesson-5-aphrodite-ares-athena-pp-30-37-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 7</span>
          <p>Watch the TedEd Video <i>The Myth of Arachne and Athena</i> by Iseult Gillespie. </p>
          <Video videoUrl="https://www.youtube.com/embed/XvUHcsZOhJ8"/>
          <p>In complete sentences, answer the following questions based on the TedEd video:<br/>
            1. In "The Myth of Arachne" why did Athena disguise herself and sneak in amongst the mortals? What
            was she trying to do?<br/>
            2. Why did Athena punish Arachne?<br/>
            3. In Greek mythology, human skills were generally thought of as gifts from the gods. What was so
            radical about Arachne claiming full credit for her talents?<br/>
            4. What do you think about Arachne's punishment? Do you think it was reasonable based on what she
            did?<br/>
            5. Do you think Athena also suffers from pride? Why or why not?<br/>
            6. Do you think Arachne is right when she states that she is solely responsible for her success
            as a weaver? Who else might have contributed to Arachne’s success?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener7} value={la6Essay7}/>
          <br/>
          <span className="days">LESSON 8</span>
          <p> Read <i>Poseidon
            and Apollo</i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the video <i>Poseidon: Lord of the Sea</i>
          <Video videoUrl="https://www.youtube.com/embed/o1iN2dQeS_s?list=PLgZdqfi4SZ0oAuzDDVjPVYJMQvfij88QQ"/>
          Watch the video <i>Apollo: The God of Light and Music</i>
          <Video videoUrl="https://www.youtube.com/embed/695TunhNpuw"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe Poseidon. What is he known for and what things does he control? <br/>
            2. Do you believe Poseidon had any weaknesses? If so, what were they? If not, why do you believe
            this?<br/>
            3. What are 3 facts about Apollo?<br/>
            4. Are there any qualities Apollo has that you would want for yourself? Explain.<br/>
            5. Who would you prefer to have as a brother, Poseidon or Apollo? Explain why.</p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener8} value={la6Essay8}/>

          <p>Go to <a href="https://quizlet.com/519236422/lesson-6-poseidon-apollo-pp-38-43-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 9</span>
          <p> Read <i>Artemis
            and Hermes</i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the video <i>Artemis: Goddess of the Hunt and Moon</i>
          <Video videoUrl="https://www.youtube.com/embed/H3fq1c-sy7s?list=PLgZdqfi4SZ0oAuzDDVjPVYJMQvfij88QQ"/>
          Watch the video <i>Hermes: The Messenger and Divine Trickster</i>
          <Video videoUrl="https://www.youtube.com/embed/H-zh8A99hiQ?list=PLgZdqfi4SZ0oAuzDDVjPVYJMQvfij88QQ"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe Artemis and her abilities? How do you like her?<br/>
            2. Zeus promised Artemis something. What was it?<br/>
            3. What does Artemis care about? Explain why you think she cares about this so much.<br/>
            4. Every god or goddess has weaknesses. What weaknesses does Artemis have? Explain.<br/>
            5. Describe what Hermes was like as a child?<br/>
            6. Why is Hermes considered to be a master thief? Why does Zeus welcome him to Mt. Olympus?<br/>
            7. Would you like to have Hermes as a close friend? Why or why not?
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener9} value={la6Essay9}/>

          <p>Go to <a href=" https://quizlet.com/519236155/lesson-7-artemis-and-hermes-pp-44-55-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 10</span>
          <p> Read <i>Hades and Persephone</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>Watch the video <i>Hades: God of the Underworld - Lord of the Dead</i></p>
          <Video videoUrl="https://www.youtube.com/embed/BMeNMdLMVN0?list=PLgZdqfi4SZ0oAuzDDVjPVYJMQvfij88QQ"/>
          <p>Watch the video <i>Hades and Persephone: The Abduction Goddess of Spring and Queen of the Underworld</i></p>
          <Video videoUrl="https://www.youtube.com/embed/khpjQZ693Q4"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe Hades. What do you think of him? Do you think he is good, evil or somewhere in between? Use examples from the reading and videos to support your opinion.<br/>
            2. What happened to Persephone and what was your reaction to it?<br/>
            3. The story of Persephone and Demeter explained to the ancient Greeks why there were seasons. How would you
            describe this story to someone who has never heard it before?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener10} value={la6Essay10}/>

          <p>Go to <a href="https://quizlet.com/519235827/lesson-8-hades-persephone-pp56-63-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 11</span>
          <p>Read <i>Dionysus </i> from D'Aulaire's Book of Greek Myths.<br/>
          </p>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe Dionysus and his good and bad qualities. What was he known for? <br/>
            2. Dionysus was said to have a "dual nature." This means he had two very different sides to him. Describe
            his "dual nature."</p>
          3. What did you think of him as a god?<br/>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener11} value={la6Essay11}/>

          <p>Go to <a href="https://quizlet.com/519235399/lesson-9-dionysus-pp-64-69-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 12</span>

          <p> Read <i>Prometheus
            and the Minor Gods</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>Watch the video <i>The Myth of Prometheus</i> by Iseult Gillespie</p>
          <Video videoUrl="https://www.youtube.com/embed/U_u91SjrEOE"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Briefly describe what Prometheus did for humans.<br/>
            2. Why did why Zeus punish him for doing this? <br/>
            3. Do you think his punishment was fair? Explain.<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener12} value={la6Essay12}/>

          <p>Go to <a href="https://quizlet.com/519235192/lesson-10-minor-gods-prometheus-pp-70-73-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 13</span>
          <p> Read
            <i> Pandora and Deucalion</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>Watch the video <i>The Myth of Pandora’s box</i> by Iseult Gillespie</p>
          <Video videoUrl="https://www.youtube.com/embed/pMdJxVjZMRI"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. What gift did Zeus give to Pandora?<br/>
            2. What was Pandora warned not to do?<br/>
            3. Who did Pandora fall in love with?<br/>
            4. What was Pandora hoping to find when she looked inside the box?<br/>
            5. What was at the bottom of Pandora's box?<br/>
            6. Why do you think Zeus gave Pandora the box?<br/>
            7. Why is it so important that hope was also in the box?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener13} value={la6Essay13}/>

          <p>Go to <a href="https://quizlet.com/519234960/lesson-11-pandora-and-deucalion-pp-74-79-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 14</span>
          <p> Read
            <i> Eos, Helios and Selene</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>In complete sentences, answer the following questions:<br/>
            1. Briefly describe Eos, Helios and Selene.<br/>
            2. What are their strengths and weaknesses? <br/>
            3. What promise did Helios regret and what happened to his son?<br/>
          </p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener14} value={la6Essay14}/>

          <p>Go to <a href="https://quizlet.com/519233976/lesson-12-eos-helios-and-selene-pp-80-89-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 15</span>
          <p> Read <i>Pan,
            Echo and Syrinx</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>In complete sentences, answer the following questions:<br/>
            1. What kind of creature was Pan and what did he look like?<br/>
            2. Briefly explain what happened to Echo. Why could Echo only repeat the words of others?<br/>
            3. Describe Syrinx and who she is.</p>
          <textarea className="textArea"
                    placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeLA6Listener15} value={la6Essay15}/>

          <p>Go to <a href="https://quizlet.com/519233587/lesson-13-pan-echo-and-syrinx-pp-90-95-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 16</span>
          <p> Read
            <i> Centaurs and Asclepius</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>Watch the video <i>The Centaurs of Greek Mythology</i></p>
          <Video videoUrl="https://www.youtube.com/embed/tJtJPKKAwhc?list=PLgZdqfi4SZ0oAuzDDVjPVYJMQvfij88QQ"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe what centaurs are.<br/>
            2. Who is Asclepius and what is he like? Does he have any special traits or abilities?
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener16} value={la6Essay16}/>

          <p>Go to <a href="https://quizlet.com/519233349/lesson-14-centaurs-and-asclepius-pp-96-99-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 17</span>
          <p>Read <i>The Nine Muses</i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the video <i>Muses: The 9 Inspirational Goddesses of Greek Mythology</i>
          <Video videoUrl="https://www.youtube.com/embed/ORKCWfbrY8k?list=PLY7BFnOZ_ONSGH0Mg0XRwMv9K41eawUvp"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe the nine muses. What were they known for and why were they special?<br/>
            2. Do you think they were important? Explain.<br/>
            3. What is the meaning of the word "muse"? You can look this up if you're not sure.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener17} value={la6Essay17}/>

          <p>Go to <a href="https://quizlet.com/519228173/lesson-15-the-nine-muses-pp100-107-flash-cards/
                " rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 18</span>
          <p>Imagine that Zeus has come to you and said that Olympus is lacking a god or goddess, and he needs
            you to help. Invent a new Olympian and describe him or her below.<br/>
            1. Name <br/>
            2. Do they have a connection to Olympus? For example are they related to another god or goddess? Are
            they married to a god or goddess?<br/>
            3. Special powers<br/>
            4. Personality traits<br/>
            5. Strengths<br/>
            6. Weaknesses<br/>
            7. Friends <br/>
            8. Enemies <br/>
            9. Write a short story about your god/goddess. This can be similar to the stories you've been
            reading about the other gods and goddesses in which you learn about their background, struggles,
            strengths and weaknesses.<br/>
          </p>
          <p>You can use the <a
            href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to help you get started.
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener18} value={la6Essay18}/>

          <span className="days">LESSON 19</span>
          <p> Read <i>Europa and Cadmus</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>In complete sentences, answer the following questions:<br/>
            1. What happened to Europa at the beginning of the story?<br/>
            2. What is Cadmus’ task?<br/>
            3. What are some achievements of Cadmus?<br/>
            4. What do we learn about Europa at the end of the story?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener19} value={la6Essay19}/>

          <p>Go to <a href="https://quizlet.com/519227798/lesson-16-europa-and-cadmus-pp108-113-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 20</span>
          <p> Click here to read <i>Danaus, Perseus, and the Gorgon</i> from D'Aulaire's Book of Greek Myths.</p>
          <p>In complete sentences, answer the following questions:<br/>
            1. Describe what Danaus did to his daughter and her child, Perseus?<br/>
            2. Why did he do this?<br/>
            3. What did the king ask Perseus to bring him as a gift?<br/>
            4. What is Medusa like? What does she do to those who come to see her?<br/>
            4. Describe how was Perseus was able to defeat Medusa.<br/>
            5. How did it come about that Perseus became the king of Argos?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener20} value={la6Essay20}/>

          <p>Go to <a
            href="https://quizlet.com/519227504/lesson-17-danaus-perseus-and-the-gorgon-pp-114-122-flash-cards/"
            rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 21</span>
          <p>You have just discovered another planet in our solar system. You must look at its characteristics and
            then decide what name you will give it, following the tradition of naming the planets after
            characters from Roman mythology.<br/>
            <img src={require("../../public/images/stories/planets.jpg")}
                 alt='solar system'/><br/>
            1. Where does your planet lie in the solar system? How many other planets are between it and the
            sun?<br/>
            2. How big is your planet? Compare it in size to one of the other planets.<br/>
            3. What is your planet made of? Is it a gas giant? Does it have water? What kinds of rocks and
            minerals
            are found there? Does it have an atmosphere? <br/>
            4. If you look at the planet from Earth, what color (or colors) does it appear?<br/>
            5. How many satellites (moons) does your planet have? <br/>
            6. Would it be possible for people from Earth to colonize your planet? Explain <br/>
            7. What else is special about your planet? Be as detailed as you can. <br/>
            8. What is the name of this newly discovered planet?<br/>
            9. Who was it discovered by?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener21} value={la6Essay21}/>

          <span className="days">LESSON 22</span>
          <p> Click here
            to read <i>Midas, Sisyphus, Bellerophon, and Melampus</i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the video <i>The myth of Sisyphus</i> by TedEd
          <Video videoUrl="https://www.youtube.com/embed/q4pDUxth5fQ"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. What were the moral lessons you learned? <br/>
            2. Why was Midas punished? Do you think the punishment was fair? Why or why not? <br/>
            3. Explain why the author described Sisyphus as clever. How did he trick the gods?<br/>
            4. Did you enjoy the story of Bellerophon? Briefly summarize what happens.<br/>
            5. How did Melampus win great fame as a healer?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener22} value={la6Essay22}/>

          <p>Go to <a
            href="https://quizlet.com/519227153/lesson-18-midas-sisyphus-bellerophon-melampus-pp-123-131-flash-cards/"
            rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test</a> for this lesson.
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 23</span>
          <p> Read <i>Hercules
            Part 1 </i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the video <i>Hercules: A Problematic Hero</i> by Crash Course
          <Video videoUrl="https://www.youtube.com/embed/R0qkSTvRQa8?list=PLEb6sGT7oD8G8nPbyvObaZUNdfV6kitZQ"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. Why did Hercules have to serve the labors?<br/>
            2. Describe two of the labors.<br/>
            3. What do you think about Hercules as a hero?<br/>
            4. Do you believe the challenge he was given was fair? Explain<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener23} value={la6Essay23}/>
          <p>Go to <a href="https://quizlet.com/519226911/lesson-19-hercules-part-1-pp-132-139-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 24</span>
          <p>Read <i>Hercules Part 2</i> from D'Aulaire's Book of Greek Myths.</p>
          Watch the Video <i>The Myth of Hercules</i> by Alex Gendler. <br/>
          <Video videoUrl="https://www.youtube.com/embed/nIIjhAuC76g"/>
          <p>In complete sentences, answer the following questions:<br/>
            3. What was Eurystheus’s relationship to Hercules?<br/>
            4. Why didn’t Hercules give the Ceryneian Hind to Eurystheus?<br/>
            5. What special item did Hercules need to defeat the Stymphalian birds?<br/>
            6. Which god helped Hercules reach Geryon’s island? Explain<br/>
            7. Which labor was deemed invalid by Eurystheus?<br/>
            8. Why did Hera hate Hercules?<br/>
            9. Why did the labors increase from 10 to 12?<br/>
            10. What were the results of Hercules completing his labors?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener24} value={la6Essay24}/>

          <p>Go to <a href="https://quizlet.com/519225603/lesson-20-hercules-part-2-pp140-147-flash-cards/"
                      rel="noreferrer" target="_blank">
            Quizlet. Review the flashcards and take the test for this lesson.</a>
            You can take the test as many times as like so you can do your best. </p>
          <br/>
          <span className="days">LESSON 25</span>
          <p>Go to Quizlet to take <a href="https://quizlet.com/519222850/final-test-of-terms-flash-cards/"
                                      rel="noreferrer" target="_blank"> the final test </a>on all of the terms
            you've been learning
            for D'Aulaire's Book of Greek Myths. Spend some time reviewing the flashcards. When you are ready, take the
            test.
            You can take the test as many times as like so you can do your best. Share with your parent or teacher how
            many you got correct out of 120.</p>
          <br/>
          <span className="days">LESSON 26</span>
          <p><b>Create Your Own Myth</b><br/>
            Myths were often used to explain natural phenomena. Your challenge is to create your
            own myth to explain some natural phenomenon or land formation you find interesting. It can
            be anything from the origin
            of hurricanes to how the Grand Canyon was formed. Tell this myth in a story
            format, similar to how D’Aulaire wrote his stories about Greek gods and goddesses.<br/>
            <br/>Here are the guidelines:<br/>
            1. Your story must involve at least two Olympian Gods or Goddesses. You may involve more than two if
            you like.<br/>
            2. Your story must explain some natural phenomenon (such as a weather event) or some geological
            feature (a mountain range, a large valley, a sea, an ocean, a polar ice cap, etc.). <br/>
            3. Your story should be at least 350 words. <br/>
            4. Your story must have a clear beginning, middle and end. <br/>
            5. Your story should clearly show that you know something about Greek mythology. You will do this by
            including details about the Olympian gods and goddesses that show you know their powers and
            personalities. <br/>
            <br/> <b>Below are some ideas to get you thinking:</b> <br/>
            Where did the Andes Mountains come from? <br/>
            Where did the Seine River come from? <br/>
            What made the North and/or South Pole(s)? <br/>
            Why is Earth the third planet from the sun? <br/>
            What causes a solar eclipse? <br/>
          </p>
          <p>You can use the <a href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to help you get started.</p>
          <textarea className="textArea" onChange={onChangeLA6Listener25} value={la6Essay25}/>

          <span className="days">LESSONS 27 &amp; 28</span>
          <p>The work below is the equivalent of two lessons. You may choose to complete it all at once or you can
            complete half today and the second half tomorrow. </p>
          <p> The next book you will read is <i>The Egypt Game</i> by Zilpha Keatley Snyder. After you watch the
            video below, read <a href={require("../resources/books/TheEgyptGameChapter1.pdf")} rel="noreferrer"
                                 target="_blank"> <i>Chapter 1 ~ The Discovery of Egypt. </i></a>
            You can zoom in or out by using the + - icons at the bottom right. You can also enable fullscreen viewing.
          </p>
          <Video videoUrl="https://www.youtube.com/embed/hO1tzmi1V5g"/>
          <p>Complete the vocabulary assignment below and then answer the questions that follow.<br/>
            <b>Vocabulary:</b> For each vocabulary word below, write a definition and then write a sentence using the
            word. Below is an example.<br/>
            1. taut <i style={{ color: "#4f5979" }}>stretched or pulled tight; not slack. "His muscles were taut from
              the strain of the weight he was
              pulling."</i><br/>
            2. dingy <br/>
            3. improvise<br/>
            4. inspiration<br/>
            5. innovation<br/>
            6. ornate<br/>
            <br/><strong>Questions</strong><br/>
            1. What are your first impressions of the Professor? Why?<br/>
            2. How did the Professor stumble upon the Egypt Game?<br/>
            3. Why is “Security” a good name for Marshall’s octopus?<br/>
            4. Melanie came up with a new innovation. What innovations have you come up
            with in the past? <br/>
            5. Why do you think the Professor is so interested in watching the beginning of the Egypt Game?<br/>
            6. Summarize the main points from the National Geographic video on Ancient Egypt. What was the
            most interesting thing you learned?
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener26} value={la6Essay26}/>
          <span className="days">LESSONS 29 &amp; 30</span>
          <p>After you watch the video below, read <i>Chapter 2 ~ Enter April </i> from<i> The
            Egypt Game</i>. Complete the vocabulary assignment and then answer the questions that follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/-_DN7l53J_c?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>
            <b>Vocabulary:</b> For each vocabulary word below, write a definition and then write a sentence using the
            word. <strong>Be sure to do this for all the vocabulary words for this course. </strong><br/>
            1. splendor <i>(you may use the internet to help you define these words)</i><br/>
            2. façade<br/>
            3. craggy<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did April move to the Casa Rosada? How would you feel if you were in the
            same situation?<br/>
            2. Who was Dorothea?<br/>
            3. April won’t call Caroline, Grandmother. What does this show about April?<br/>
            4. April bought eyelashes and other items at the drugstore. Why do you think she
            feels she needs all of this stuff?<br/>
            Based on the video:<br/>
            5. List the different genres of fiction.<br/>
            6. Of the types listed, which genre is your favorite to read? Why?<br/>
            7. Which genre is your least favorite to read? Explain why.<br/>
            8. If you were asked to write a novel, which type (genre) of fiction would you choose?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener27} value={la6Essay27}/>

          <span className="days">LESSONS 31 &amp; 32</span>
          <p>After you watch the video, read <i>Chapter 3 ~ Enter Melanie and Marshall</i> from
            <i> The Egypt Game</i>. Complete the vocabulary assignment below and then answer the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/niZosUpuSyU?list=PLvJNSf-7NfrNSQl8ICXACg0XNUVM1dF2d"/>
            <i>Vocabulary</i><br/>
            1. teeter <br/>
            2. haughty<br/>
            3. occupation<br/>
            4. escapades<br/>
            <br/><strong>Questions</strong><br/>
            1. If you were Melanie, what would your thoughts be about April at that first
            meeting?<br/>
            2. Why does April lie to Melanie about where April’s mom is?<br/>
            3. Why does April always show off? What made April stop trying to show off?<br/>
            4. Why do you think April only played imagining games?<br/>
            5. Based on the video: If you could be the protagonist or hero in a novel, which type of fiction would you
            want to star in? Explain. <br/>
            6. Which type of fiction to do you think sells the most? Why do you think that is?<br/>
            7. If you were a writer, which type of fiction do you think would be the most difficult to write about?
            Explain your answer.<br/>
            8. What is your favorite novel and what type of fiction (genre) is it?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener28} value={la6Essay28}/>

          <span className="days">LESSONS 33 &amp; 34</span>
          <p>After you watch the video, read <i>Chapter 4 ~ The Egypt Girls</i> from
            <i> The Egypt Game</i>. Complete the vocabulary assignment below and then answer the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/jTsYuE_T0UQ?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>

            <b>Vocabulary:</b> For each vocabulary word below, write a definition and then write a sentence using the
            word. <br/>
            1. sympathetic<br/>
            2. accumulate<br/>
            3. reluctant<br/>
            4. sheer<br/>
            5. integrate<br/>
            6. evasive<br/>
            <br/><strong>Questions</strong><br/>
            1. April and Melanie are very focused on Egypt. When have you been really focused
            on something? Explain.<br/>
            2. What was the one thing April didn’t know about? Why doesn’t she?<br/>
            3. Who were the “worst enemies of Egypt” according to Melanie?<br/>
            4. Based on the video: List the four word types and give an example of each.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener29} value={la6Essay29}/>

          <span className="days">LESSON 35</span>
          <p>Read <i>Chapter 5 ~ The Evil God and the Secret Spy</i> from
            <i> The Egypt Game</i> and watch the video below. Write definitions for
            the vocabulary words below. Then, answer the questions that follow.<br/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. corrugate<br/>
            2. oblige<br/>
            3. warily<br/>
            <br/><strong>Questions</strong><br/>
            1. What did April think the Professor would do if he caught them in his backyard?
            Why does she think that?<br/>
            2. What do you think would happen if the Professor caught them in his backyard?<br/>
            3. What was the Egyptian name they gave Marshall? Why?<br/>
            4. Why was the game postponed?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener30} value={la6Essay30}/>

          <br/>
          <span className="days">LESSON 36</span>
          <p>Read <i>Chapter 6 ~ Eyelashes and Ceremony</i> from
            <i> The Egypt Game</i> and watch the video. Complete the vocabulary assignment below and then answer the
            questions
            that follow.<br/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. triumphant<br/>
            2. treacherous<br/>
            3. crinoline<br/>
            4. figurine<br/>
            5. leer<br/>
            6. mystic<br/>
            7. prostrations<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did Melanie hide April’s eyelashes? What would you have done if you were
            in a similar situation with a friend?<br/>
            2. Why did Toby and Ken give April a nickname? What was it?<br/>
            3. Look back at the bottom of page 53 and the top of 54. How is Set described? Draw
            a sketch.<br/>
            4. How did the girls keep track of the rituals they came up with? If the story was set
            during the present time, what might be some ways the girls could keep track of
            their rituals?<br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener31} value={la6Essay31}/>

          <br/>
          <span className="days">LESSONS 37 &amp; 38</span>
          <p>Read <i>Chapter 7 ~ Neferbeth</i> from
            <i> The Egypt Game</i> and watch the video below. <br/>Complete the vocabulary assignment below and then
            answer
            the questions that follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/jWyX8vl6kMs?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. ambush<br/>
            2. pang<br/>
            3. fink<br/>
            4. profile<br/>
            5. resemblance<br/>
            <br/><strong>Questions</strong><br/>
            1. What did Mr. Ross mean when he said, “Melanie! The cruelest month is here”?<br/>
            2. Why did April and Melanie decide to let Elizabeth play in the Egypt Game?<br/>
            Based on the video: <br/>
            3. Write a definition for <i>bi</i> and give three examples of it used in a word. <br/>
            For example: <i>bi means two or twice = bicycle, bifocal, biweekly.</i><br/>
            4. Write a definition for <i>inter</i> and give three examples of it used in a word. <br/>
            5. Write a definition for <i> ist </i> and give three examples of it used in a word. <br/>

          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener32} value={la6Essay32}/>

          <br/>
          <span className="days">LESSONS 39 &amp; 40</span>
          <p>Read <i>Chapter 8 ~ Prisoners of Fear</i> from
            <i> The Egypt Game</i> and watch the video. <br/>Complete the vocabulary assignment below and then answer
            the questions that follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/tOb5motawPU?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. dungeon<br/>
            2. clutches<br/>
            3. languish<br/>
            4. remedial<br/>
            5. suspicion<br/>
            6. circumstance<br/>
            <br/><strong>Questions</strong><br/>
            1. How can someone be a “prisoner of fear”?<br/>
            2. How did they get the name Neferbeth?<br/>
            3. What happened in the neighborhood to put the Egypt Game on hold for a while?<br/>
            4. What did the children make for the Egypt Game while they were stuck inside?<br/>
            5. Who do think is guilty? Why?<br/>
            6. Based on the video: Describe when you would use an apostrophe and give examples.
          </p>          <br/>

          <textarea className="textArea" onChange={onChangeLA6Listener33} value={la6Essay33}/>

          <span className="days">LESSON 41</span>
          <p>Read <i>Chapter 9 ~ Summoned by the Mighty One</i> from
            <i> The Egypt Game</i>. <br/>Complete the vocabulary assignment below and then answer the questions that
            follow.<br/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. nag<br/>
            2. chaperone<br/>
            3. scheme<br/>
            4. tendency<br/>
            5. tunic<br/>
            6. rapt<br/>
            7. monolith<br/>
            <br/><strong>Questions</strong><br/>
            1. Why were the children allowed to go trick-or-treating? Do you think this was a good decision?
            Why/why not?<br/>
            2. What was April’s plan for the Egypt group on Halloween night? Is it a good plan?
            Explain.<br/>
            3. What did Set and Isis send to the four Egyptians?<br/>
            4. What sort of sign did Melanie say they should look for?<br/>
          </p>          <br/>

          <textarea className="textArea" onChange={onChangeLA6Listener34} value={la6Essay34}/>

          <span className="days">LESSON 42</span>
          <p>Read <i>Chapter 10 ~ The Return to Egypt </i> from
            <i> The Egypt Game</i>. <br/>Complete the vocabulary assignment below and then answer the questions that
            follow.<br/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. sturdy<br/>
            2. wilt<br/>
            3. astonishment<br/>
            4. liable<br/>
            5. ignorance<br/>
            6. swagger<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did Marshall want to carry a sign? How is his sign different from what
            Melanie meant?<br/>
            2. What was the secret omen?<br/>
            3. How were the Egyptians able to get away from the group so easily?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener35} value={la6Essay35}/>

          <br/>
          <span className="days">LESSONS 43 &amp; 44</span>
          <p>Read <i>Chapter 11 ~ Egypt Invaded</i> from
            <i> The Egypt Game</i> and watch the video. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/ioHMvicIOPY?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. inspiration<br/>
            2. sacrifice<br/>
            3. sacred<br/>
            4. stalk<br/>
            5. coax<br/>
            6. humanity<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did April say they needed to make a sacrifice?<br/>
            2. Where did Elizabeth get the idea about cutting their fingers and writing a letter to
            Set with their own blood?<br/>
            3. What did April say they should sacrifice that made Marshall so upset?<br/>
            4. Based on the video: Give 4 examples (using complete sentences) that show when it's appropriate to use
            parenthesis. </p>
          <textarea className="textArea" onChange={onChangeLA6Listener36} value={la6Essay36}/>

          <br/>
          <span className="days">LESSONS 45 &amp; 46</span>
          <p>Read <i>Chapter 12 ~ Elizabethan Diplomacy</i> from
            <i> The Egypt Game</i> and watch the video. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/8L48L7IqJ4A?list=PLvJNSf-7NfrO4ECq1tyS1SI9HlXMOKXZ7"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. angular<br/>
            2. fiend<br/>
            3. consideration<br/>
            4. phony<br/>
            5. falter<br/>
            6. console<br/>
            <br/><strong>Questions</strong><br/>
            1. What did Elizabeth tell the boys they could do if they didn’t tell?<br/>
            2. Why did Toby have a tough time getting out of the yard?<br/>
            3. Why is the title “Elizabethan Diplomacy” a good title for the chapter?<br/>
            4. Based on the video: Describe when you would use a colon and provide an example in a sentence.<br/>
            5. Describe when you would use a semi-colon and provide an example in a sentence.<br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener37} value={la6Essay37}/>

          <br/>
          <span className="days">LESSONS 47 &amp; 48</span>
          <p>Read <i>Chapter 13 ~ Moods and Maybes</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/7fXyx7kkx-8?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/yqzDtHXGA-o?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/-eFt1EMezJE?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>

            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. sidle<br/>
            2. devastated<br/>
            3. reluctant<br/>
            4. hollow<br/>
            <br/><strong>Questions</strong><br/>
            1. Why couldn’t Toby go to Egypt before Friday?<br/>
            2. Why was April in such a bad mood? How would you feel if you were April?<br/>
            3. Describe the boys’ reaction to Egypt.<br/>
            4. What did the girls think about the boys’ visit to Egypt?<br/>
            Based on the Videos:<br/>
            5. Write a definition for <i>voc</i> and give three examples of it used in a word. <br/>
            For example: <i>voc means calling or call back = advocate, provocative, vocabulary</i> <br/>
            6. Write a definition for <i>scrib</i> and <i> script </i> and give three examples of each root used in a
            word. <br/>
            7. Write a definition for <i> gram </i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener38} value={la6Essay38}/>

          <br/>
          <span className="days">LESSONS 49 &amp; 50</span>
          <p>Read <i>Chapter 14 ~ Hieroglyphics</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/sMC_pAm3gl4?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/uDuawOsaMIQ?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/P_sGcWJfCPo?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. dagger<br/>
            2. balefully<br/>
            3. decipher<br/>
            4. adorn<br/>
            <br/><strong>Questions</strong><br/>
            1. What did the boys bring with them to Egypt?<br/>
            2. What did they end up doing with the owl?<br/>
            3. What was Toby’s idea for the Egypt Game?<br/>
            4. The Egyptians raised money to buy colored pencils. Have you or anyone else you
            know raised money for something? Explain.<br/>
            5. Toby and Ken went back to playing basketball for a couple of days. What would
            happen if the other boys found out that Toby and Ken were playing the Egypt
            Game? Give three different possibilities.<br/>
            Based on the videos:<br/>
            6. Write a definition for <i>sub </i> and give three examples of it used in a word. <br/>
            7. Write a definition for <i>dis </i> and give three examples of it used in a word. <br/>
            8. Write a definition for <i>nym </i> and give three examples of it used in a word. <br/>

          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener39} value={la6Essay39}/>

          <br/>
          <span className="days">LESSONS 51 &amp; 52</span>
          <p>Read <i>Chapter 15 ~ The Ceremony for the Dead</i> from
            <i> The Egypt Game</i>.</p>
          Watch the video <i>How to make a mummy</i> by TedEd
          <Video videoUrl="https://www.youtube.com/embed/9gD0K7oH92U"/>
          <p>After you complete the chapter and video, write definitions for
            the vocabulary words below. Then answer the questions that follow.<br/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. rendezvous<br/>
            2. solemn<br/>
            3. loot<br/>
            4. populace<br/>
            5. bier<br/>
            6. brine<br/>
            <br/><strong>Questions</strong><br/>
            1. What happened that gave April and Melanie the idea for the Ceremony for the
            Dead?<br/>
            2. How did Toby and Ken get to be the High Priests of the ceremony?<br/>
            3. Why didn’t they remove Pete-ho-tep’s internal organs before starting the
            mummification process?<br/>
            4. What secret was Marshall keeping? Do you think he should keep this secret?
            Explain.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener40} value={la6Essay40}/>

          <br/>
          <span className="days">LESSONS 53 &amp; 54</span>
          <p>Read <i>Chapter 16 ~ The Oracle of Thoth</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/uvTxc970aZM?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/Btr7dA867xI?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/LXs0jWIYsZ4?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>

            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. oracle<br/>
            2. grotto<br/>
            3. trance<br/>
            4. deliberately<br/>
            5. consternation<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did Toby ask Mrs. Granger to explain what an oracle was? What happened
            as a result?<br/>
            2. Why did Toby think it was a bad idea to throw the questions into the fire?<br/>
            3. What was Toby’s idea for the “oracle”?<br/>
            4. Who got to give the first question to Thoth?<br/>
            5. Why did Toby say they should all leave Egypt right after he gave the question to
            Thoth?<br/>
            Based on the videos:<br/>
            6. Write a definition for <i>astro </i> and give three examples of it used in a word. <br/>
            7. Write a definition for <i>bio </i> and use it in a sentence. <br/>
            8. Write a definition for <i>audi </i> and give three examples of it used in a word. <br/>

          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener41} value={la6Essay41}/>

          <br/>
          <span className="days">LESSON 55</span>
          <p>Watch the video <i>The Egyptian Book of the Dead: A guidebook for the underworld</i> by Tejal Gala with
            TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/1yv_MXNYbAo"/>
          <p>In complete sentences, answer the following questions:<br/>
            1. During the mummification process, which organ was the only one not removed?<br/>
            2. Who is the winged goddess of truth and justice?<br/>
            3. During the Weighing of the Heart Ceremony, what is the heart is weighed against? <br/>
            4. What form of work must people undertake in the afterlife?<br/>
            5. After mummification is complete, the spirit first passes through the Underworld. What are some of
            the dangers that a person, such as Ani, must face here?<br/>
            6. Explain the ways in which a person demonstrates virtue and righteousness in the Hall of
            Ma’at.<br/>
            7. How does a "Book of the Dead" help someone reach the afterlife?<br/>
            8. Imagine that you are an important figure in ancient Egypt.<br/>
            Make a list of grave goods that you would have with you when
            you are buried in your tomb.<br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener42} value={la6Essay42}/>

          <br/>
          <span className="days">LESSONS 56 &amp; 57</span>
          <p>Read <i>Chapter 17 ~ The Oracle Speaks</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/HTndjs_EjpY?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/bdjQxguandM?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/OIKDkx3OhK0?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the word. <br/>
            1. pilgrimage<br/>
            2. meditate<br/>
            3. wail<br/>
            4. accusations<br/>
            <br/><strong>Questions</strong><br/>
            1. What happens when April removes the slip of paper from the stuffed owl's beak and reads it?<br/>
            2. Do you believe they trust each other? Explain.<br/>
            3. As soon as they finish the ceremony, they hear thunder and feel the first drops of rain.
            How do you think this reflects their moods?<br/>
            Based on the videos:<br/>
            4. Write a definition for <i>bene </i> and give three examples of it used in a word. <br/>
            5. Write a definition for <i>chrono </i> and give three examples of it used in a word. <br/>
            6. Write a definition for <i> cred</i> and give three examples of it used in a word. <br/>
            <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener43} value={la6Essay43}/>

          <br/>
          <span className="days">LESSONS 58 &amp; 59</span>
          <p>Read <i>Chapter 18 ~ Where is Security?</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/0jtBganeo98?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/Smk5CvcC_zI?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/_FGsf_VJmVs?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. impatient<br/>
            2. pester<br/>
            3. scarce<br/>
            4. limp<br/>
            5. gracious<br/>
            <br/><strong>Questions</strong><br/>
            1. Why did Marshall want to go back to Egypt?<br/>
            2. Why didn’t Melanie ask her mom or dad to take them back to Egypt to get
            Security?<br/>
            3. Why did a couple of the Egyptians want to stop playing Egypt?<br/>
            4. What question did Marshall ask the oracle?<br/>
            5. What do you think the Egyptians will do in response to Marshall’s question?<br/>
            Based on the videos:<br/>
            6. Write a definition for <i>geo </i> and give three examples of it used in a word. <br/>
            7. Write a definition for <i> gen</i> and give three examples of it used in a word. <br/>
            8. Write a definition for <i> flex</i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener44} value={la6Essay44}/>

          <br/>
          <span className="days">LESSONS 60 &amp; 61</span>
          <p>Read <i>Chapter 19 ~ Confession and Confusion</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/wvpR3jjg9q0?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/Eny0oDUOmk4?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/KhQHMVm0iIQ?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. midst<br/>
            2. sober<br/>
            3. indignant<br/>
            4. flourish<br/>
            5. incredulous<br/>
            <br/><strong>Questions</strong><br/>
            1. How did Toby get out of playing basketball with the guys at recess?<br/>
            2. What did Toby confess to April and Melanie?<br/>
            3. What happened to Toby that scared him the night he went to Egypt?<br/>
            4. What was the girls’ idea on what to say about Security?<br/>
            5. Why didn’t April have to use the story they made up about Security?<br/>
            Based on the videos:<br/>
            6. Write a definition for <i>fid </i> and give three examples of it used in a word. <br/>
            7. Write a definition for <i>duc </i> and give three examples of it used in a word. <br/>
            8. Write a definition for <i> dict</i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener45} value={la6Essay45}/>

          <br/>
          <span className="days">LESSONS 62 &amp; 63</span>
          <p>Read <i>Chapter 20 ~ Fear Strikes</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/YpWUPKZ3hsI?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/E-ONTDXRUGA?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/I2NZOM68zhA?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. consult<br/>
            2. gloat<br/>
            3. loom<br/>
            4. fume<br/>
            5. steadfast<br/>
            6. drone<br/>
            <br/><strong>Questions</strong><br/>
            1. Who was the only person NOT to tell about a story or strange experience they’d
            had? Why?<br/>
            2. Describe the sequences the events of the night when April goes
            to babysit Marshall.<br/>
            Based on the videos:<br/>
            3. Write a definition for <i>graph </i> and give three examples of it used in a word. <br/>
            4. Write a definition for <i>auto </i> and give three examples of it used in a word. <br/>
            5. Write a definition for <i>logue </i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener46} value={la6Essay46}/>

          <br/>
          <span className="days">LESSONS 64 &amp; 65</span>
          <p>Read <i>Chapter 21 ~ The Hero</i> from
            <i> The Egypt Game</i> and watch the videos. <br/>Complete the vocabulary assignment below and then answer
            the questions that
            follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/BBbsFsN8lkA?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/8wBEql1STj4?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/vkXIWwSCeDE?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>

            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. hazy<br/>
            2. commotion<br/>
            3. vivid<br/>
            4. alibi<br/>
            5. tension<br/>
            <br/><strong>Questions</strong><br/>
            1. Why does Marshall say he couldn’t yell for help?<br/>
            2. What did Marshall mean by “he was spotted”?<br/>
            3. Who was the person that yelled for help?<br/>
            4. Who grabbed April?<br/>
            5. Why did Marshall stop taking Security places with him? What does this show
            about him?<br/>
            Based on the videos:<br/>
            6. Write a definition for <i> phil</i> and give three examples of it used in a word. <br/>
            7. Write a definition for <i> path</i> and give three examples of it used in a word. <br/>
            8. Write a definition for <i>port </i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener47} value={la6Essay47}/>

          <br/>
          <span className="days">LESSONS 66 &amp; 67</span>
          <p>Read <i>Chapter 21 ~ The Hero</i> from <i> The Egypt Game</i> and watch the videos. <br/>Complete the
            vocabulary assignment
            below and then answer the questions that follow.<br/>
            <Video videoUrl="https://www.youtube.com/embed/bju7cqHSTIE?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/tTSQ9r-2w9Q?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <Video videoUrl="https://www.youtube.com/embed/IJzQNoRQPLs?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the word. <br/>
            1. hazy<br/>
            2. commotion<br/>
            3. vivid<br/>
            4. alibi<br/>
            5. tension<br/>
            <br/><strong>Questions</strong><br/>
            1. Why does Marshall say he couldn’t yell for help?<br/>
            2. What did Marshall mean by “he was spotted”?<br/>
            3. Who was the person that yelled for help?<br/>
            4. Who grabbed April?<br/>
            5. Why did Marshall stop taking Security places with him? What does this show
            about him?<br/>
            Based on the videos:<br/>
            6. Write a definition for <i>luc </i> and <i>lum</i> and give three examples for each used in a word. <br/>
            7. Write a definition for <i> spect</i> and give three examples of it used in a word. <br/>
            8. Write a definition for <i> pend</i> and give three examples of it used in a word. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener48} value={la6Essay48}/>

          <br/>
          <span className="days">LESSONS 68 &amp; 69</span>
          <p>Read <i>Chapter 23 ~ Christmas Keys</i> from
            <i> The Egypt Game</i> and watch the videos. </p>
          <Video videoUrl="https://www.youtube.com/embed/2bgkj7iidoc?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
          <Video videoUrl="https://www.youtube.com/embed/vEEezjwnpgY?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
          <Video videoUrl="https://www.youtube.com/embed/eo0yg--Sreo?list=PLLQh1KcEsatLzrxMxwbUacD68qcPh6FOc"/>
          <p>Complete the vocabulary assignment below and then answer the questions that
            follow.
            <strong>Vocabulary:</strong> For each vocabulary word, write a definition and then write a sentence using
            the
            word. <br/>
            1. intrigue<br/>
            2. primitive<br/>
            3. speculate<br/>
            4. extravagant<br/>
            5. rebellion<br/>
            <br/><strong>Questions</strong><br/>
            1. Who wanted to see the Egyptians on Christmas Eve?<br/>
            2. Summarize the story of the Professor and his wife.<br/>
            3. What did the Professor give to the six children?<br/>
            4. What did the Professor say that the children gave him?<br/>
            5. Why did the Professor decide to put more time and energy into his store again?<br/>
            6. What do you think will happen to the Egyptians and the Egypt Game?<br/>
            Based on the videos:<br/>
            7. Write a definition for <i>sacr </i> and <i>sanct</i> and give three examples for each used in a
            word. <br/>
            8. Write a definition for <i>mort </i> and <i>necro </i> and use each term in a sentence. <br/>
            9. Write a definition for <i> terr</i> and give three examples of it used in a word. <br/>

          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener49} value={la6Essay49}/>
          <br/>
          <span className="days">LESSON 70</span>
          <p><b>Further Exploration of The Egypt Game</b><br/>Now that you've finished the novel and
            had a chance to reflect on it and the characters, answer the following questions.<br/>
            1. How does April feel about living with her grandmother, Caroline? Does she listen to her and
            follow her instruction? Why or why not? How does their relationship change over the course of the
            novel?<br/>
            2. Why do you think the children chose to create Egypt? Why do they decide to use the lot behind the
            Professor's store?<br/>
            3. Marshall insists that he must have Security with him at all times. WHat happens when Security
            isn't with him? What does this show about the character of Marshall?<br/>
            4. How do Toby and Ken change what happens in Egypt? Do you think the changes make Egypt better or
            worse? Explain.<br/>
            5. What does the Professor use as his reasoning for watching the children play in Egypt? How do the
            children react to learning more about the Professor?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener50} value={la6Essay50}/>

          <br/>
          <span className="days">LESSON 71</span>
          <p><b>Further Exploration of Characters</b><br/>
            1. Why does Melanie at first have a problem understanding and dealing with April? How does their
            relationship develop over the course of the book?<br/>
            2. Why do Melanie and April agree to allow Elizabeth to join Egypt? What role does Elizabeth come to
            play?<br/>
            3. What does the creation of Egypt tell us about the character of April and her relationships with
            others? How does April change over the course of the book? How are these changes reflected in the
            evolution of Egypt?<br/>
            4. How does the author use the character of the Professor to create suspense? Were you surprised at
            what was revealed about the Professor? Why or why not?<br/>
            5. How does April's relationships with her mother change over the course of the novel? Do the
            changes surprise you? Why or why not?<br/>
            6. Why does Marshall give April "one of his rate starry smiles" when they are at the police
            station?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener51} value={la6Essay51}/>

          <br/>
          <span className="days">LESSON 72</span>
          <p><b>Further Exploration of The Egypt Game</b><br/>
            1. Why does April refuse the invitation to spend Christmas with her mother and Nick?<br/>
            2. April's new home, the Casa Rosada, is referred to as "The Petrified Birthday Cake." What else in
            April's life might also be adequately defined using this metaphor? Why?<br/>
            3. Toward the end of the story the Professor is described as follows: "he looked pretty much as
            April remembered him and his voice was still gravelly and grave, but he seemed younger, somehow, and
            more lively." What does this reveal about the Professor and his experiences and feelings?<br/>
            4. What is meant by the comment that April "gave an internal nod of approval"? <br/>
            5. Explain what is meant by the comment that "When somebody saves your life, it makes him sort of
            your property." What is your opinion about this statement?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener52} value={la6Essay52}/>

          <br/>
          <span className="days">LESSON 73</span>
          <p>How does The Egypt Game connect to you?<br/>
            1. At one point in the story April, Elizabeth, Melanie, and Marshall become petrified with fear.
            Page 104 describes their feelings: "In all four Egyptians frozen fear boiled at once into a choking
            mixture of anger and relief." Describe a time when you were full of fear. What generated this fear,
            and how did you overcome it?<br/>
            2. When the questions for the oracle are returned with answers, nobody will claim responsibility for
            the answers. All the children accuse each other, but nobody will take the blame. Analyze this
            occurrence and relate it to a time in your life when someone you knew wouldn't admit responsibility
            for some action or outcome. What happened in the end?<br/>
            3. The Professor told the children that his late wife was an artist while he was an anthropologist.
            She defined anthropologists as "only interested in people in general while she liked people in
            particular and she did, too." Do you like people more in general or in particular? What qualities do
            you admire? What qualities disturb you? Think of your best friend. Why do you like him or her so
            much?<br/>
            4. In what directions does your imagination take you? Do you like elaborate games, or do you write
            stories, or do you explore imaginary worlds in some other way? Please explain.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener53} value={la6Essay53}/>

          <br/>
          <span className="days">LESSON 74</span>
          <p>Begin reading <b>The Golden Compass by Philip Pullman.</b> The novel is available at your local
            library, local bookstore and online for purchase. Until your copy arrives, excerpts are provided
            here.<br/>
            <a href={require("../resources/books/GoldenCompassChapter1.pdf")}
               rel="noreferrer" target="_blank"> Click here
              to read Chapter One: The Decanter
              of Tokay</a></p>
          <img src={require("../../public/images/bookCovers/the-golden-compass.jpg")}
               alt='Golden Compass'/><br/>
          <p><i>Complete the the questions and vocabulary assignment below:</i></p>
          <p>1. Describe the main characters and what they are like. What are important traits they possess? Who
            is the protagonist (positive main character) and who is the antagonist ( the person who opposes the
            main character)? Describe other characters if they are significant to the chapter (2-4
            sentences).<br/>
            2. What is the setting: when and where the events take place (1-4 sentences).<br/>
            3. Describe the main events for the chapter. This usually involves a problem or
            conflict the main character is trying to solve. Include supporting details. This will help explain
            the how and why something happened. There should be a beginning, middle and end (2-4 sentences).<br/>
            4. What are daemons? (1-3 sentences)<br/>
            5. What does the title mean "The Decanter of Tokay"?<br/>
            6. What is a wardrobe and why is Lyra hiding there?<br/>
            7. Why did the Master put poison into Lord Asriel's drink?
          </p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and then
            use the word in a sentence. An example is below.<br/>
            <ol className="vocab">
              <li>solemn: <i> marked by the invocation of a religious sanction, solemn
                oath, or ceremony. Gloomy. <br/>She had a solemn expression on her face. </i></li>
              <li>laboriously</li>
              <li>somber</li>
              <li>righteously</li>
              <li>hastily</li>
              <li>agog</li>
              <li>languid</li>
              <li>earnestly</li>
              <li>disposed</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener54} value={la6Essay54}/>
          <br/>
          <span className="days">LESSON 75</span>
          <p>Read Chapter 2 <i> The Idea of the North</i></p>
          <p><i>Complete the the questions and vocabulary assignment below:</i></p>
          <p>1. What are new insights about the characters (new traits or important information about them).
            Include other characters if they played a significant role. If there is a character you particularly
            liked or disliked, describe them. (2-5 sentences).<br/>
            2. What is the setting: where and when the events take place (1-3 sentences).<br/>
            3. Describe the main events for the chapter (2-4 sentences). This usually involves a problem or
            conflict the main character is trying to solve. Include supporting details. There should be a
            beginning, middle and end (2-4 sentences).<br/>
            4. What are all of the things you know about dust? <br/>
            5. Compare and contrast Lyra's world to your own. What are 3 things that are the same? What are 5 things
            that are different?
          </p>
          <p><strong>VOCABULARY</strong><br/>For each word below, write the definition and then use the word in a
            sentence. <br/>
            <ol className="vocab">
              <li> tawny</li>
              <li>impassive</li>
              <li>chastise</li>
              <li>eloquence</li>
              <li>array</li>
              <li>emulsion</li>
              <li>incredulity</li>
              <li>severed</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener55} value={la6Essay55}/>

          <span className="days">LESSON 76</span>
          <p>Read Chapter 3 <i> Lyra's Jordan</i></p>
          <p><i>Complete the the questions and vocabulary assignment below:</i></p>
          <Video videoUrl="https://www.youtube.com/embed/5alYLJS4OrE"/>
          <p>1. In the novel, humans have dæmons, creatures that take animal forms. Imagine that you have a daemon you are connected to. What kind of daemon do you think you would
            have? Describe this creature in detail.<br/>
            2.  If it were possible to have a dæmon of your own, would you want one? Explain why or why not.<br/>
            3. What are new insights you have about the characters (new traits or important information about them).
            Include any characters that played a significant role. (2-5 sentences).<br/>
            4. What is the setting: where and when the events take place (1-3 sentences).<br/>
            5. Describe the main events for the chapter (2-4 sentences). This usually involves a problem or
            conflict the main character is trying to solve. Include supporting details. There should be a
            beginning, middle and end (2-4 sentences).<br/>
            6. What was your favorite part of this chapter and why? (1-3 sentences)<br/>
            7. Describe the Gobblers. What are they?
            8. Lyra decides to fight the Gobblers. Why do you think this is?
          </p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and then
            use the word in a sentence. <br/>
            <ol className="vocab">
              <li> festooned</li>
              <li>luminous</li>
              <li>treatises</li>
              <li>venerable</li>
              <li>affectations</li>
              <li>relics</li>
              <li>postulated</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener56} value={la6Essay56}/>


          <span className="days">LESSON 77</span>
          <p>Read Chapter 4 <i> The Alethiometer</i></p>
          <p><i>Complete the the questions and vocabulary assignment below:</i></p>
          <p>1. What are new insights about the characters (new traits or important information about them).
            Include
            other characters if they played a significant role. If there is a character you particularly liked
            or
            disliked, describe them. (2-5 sentences).<br/>
            2. What is the setting (where and when the events in this chapter take place).<br/>
            3. What did Mrs. Coulter do to entrance Lyra?<br/>
            4. What is an alethiometer? What does it do?<br/>
            5. What was your favorite part of this chapter and why? (1-3 sentences)
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li> piecemeal</li>
              <li>squalid</li>
              <li>eminence</li>
              <li>loftily</li>
              <li>permutations</li>
              <li>enmity</li>
              <li>mutinously</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener57} value={la6Essay57}/>

          <span className="days">LESSON 78</span>
          <p>Read Chapter 5 <i> The Cocktail Party</i></p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What are new insights about the characters (new traits or important information about them).
            Include other characters if they played a significant role. If there is a character you particularly liked
            or disliked, describe them. (2-5 sentences).<br/>
            2. What is the setting: where and when the events take place (1-3 sentences).<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. Lyra thought it broke a "taboo" for Pan to be captured by the golden monkey. What does it mean to break a
            taboo and why does Lyra feel this way?<br/>
            5. The novel talks about "experimental theology." What does this mean?<br/>
            6. Lyra leaves Mrs. Coulter. What happened at the party that made her do this?</p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and then
            use the word in a sentence. <br/>
            <ol className="vocab">
              <li>sardonically</li>
              <li>breviary</li>
              <li>stolid</li>
              <li>malodorous</li>
              <li>inevitably</li>
              <li>fervent</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener58} value={la6Essay58}/>

          <span className="days">LESSON 79</span>
          <p>Read Chapter 6 The Throwing Nets </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What are new insights about the characters (new traits or important information about them).
            Include
            other characters if they played a significant role. If there is a character you particularly liked
            or
            disliked, describe them. (2-5 sentences).<br/>
            2. What happened to the dead men's daemons?<br/>
            3. Describe the main events for the chapter(2-4 sentences).<br/>
            4. Why was Lyra netted by the Gyptians?<br/>
            5. Describe Panserbjorne.</p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and then
            use the word in a sentence. <br/>
            <ol className="vocab">
              <li>copiously</li>
              <li>propitiate</li>
              <li>ostentiously</li>
              <li>derision</li>
              <li>torpid</li>
              <li>rapt</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener140} value={la6Essay140}/>

          <span className="days">LESSON 80</span>
          <p>Read Chapter 7 John Faa </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. The gyptians decide to fight the Gobblers in war. Why do you think they decided to go when other groups
            did not?<br/>
            2. What is the setting?<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. What was your favorite part of this chapter and why? (1-3 sentences)
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>pique</li>
              <li>errant</li>
              <li>raucous</li>
              <li>gaunt</li>
              <li>loathsome</li>
              <li>mercenaries</li>
              <li>incessant</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener59} value={la6Essay59}/>

          <span className="days">LESSON 81</span>
          <p>Read Chapter 8 The Frustration </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What does Lyra do to win the attention of the gyptian children? Where did she learn to do this?<br/>
            2. What is the setting: where and when the events take place (1-3 sentences).<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. Predict what Lyra will do next. Will she go to the North? If so, how will she get there? (2-3
            sentences)
            5. Do any of the characters show leadership qualities? Explain.
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li> rescind</li>
              <li>enthralled</li>
              <li>recompense</li>
              <li>obstinately</li>
              <li>interceded</li>
              <li>dispositions</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener101} value={la6Essay101}/>

          <span className="days">LESSON 82</span>
          <p>Read Chapter 9 The Spies </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Did you anticipate any of the plot twists that have occurred so far? Or did they all take you by
            complete surprise? (2-5 sentences).<br/>
            2) What’s the rule about human-daemon physical contact?<br/>
            3) What did Mrs. Coulter send?<br/>
            4) Why is Lyra in more danger now?<br/>
            5) It is not allowed to touch someone else's daemon. Why is this?<br/>
            6) Why did John Faa change his mind about Lyra going to Bolvangar? <br/>

          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>delude</li>
              <li>despondency</li>
              <li>reproach</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener60} value={la6Essay60}/>

          <span className="days">LESSON 83</span>
          <p>Read Chapter 10 The Consul and the Bear </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Summarize how and why daemons settle into one form. <br/>
            2. What does it mean to be “discontented” in this society? Do you agree with this? Explain.
            3. Do you think Jerry would be a good teacher for Lyra? Why or why not?<br/>
            4. The novel discusses fate and destiny; the idea that what happens in our lives is predetermined? Do you
            believe this is true? Explain why or why not. <br/>
          </p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
            then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>abated</li>
              <li>repugnant</li>
              <li>placid</li>
              <li>malevolent</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener61} value={la6Essay61}/>

          <span className="days">LESSON 84</span>
          <p>Read Chapter 11 Amor </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What is anbaric force?<br/>
            2. There is a new character in this chapter; Lee Scoresby. Describe what he is like?
            How do you like him so far?<br/>
            3. Describe how daemons serve the people they are connected to?<br/>
            4. What is the setting: where and when the events take place (1-3 sentences).<br/>
            5. Describe the main events for the chapter. There should be a beginning, middle and end (2-4
            sentences).<br/>
            6. What was your favorite part and why? (1-3 sentences)
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>conjure</li>
              <li>formidable</li>
              <li>indignant</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener62} value={la6Essay62}/>
          <br/>
          <span className="days">LESSON 85</span>
          <p>Read Chapter 12 The Lost Boy </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Tony Makarios is referred to as a ghost. Why? When Lyra found him, what was he holding?<br/>
            2. What does Ioreck compare his armor to?<br/>
            3. Who saves the armor when Ioreck goes into the water?<br/>
            4. Who is Ioreck loyal to? How do you know?<br/>
            5. Describe the main events for this chapter. This usually involves a problem or
            conflict the main character is trying to solve. Include supporting details. This will help explain
            the how and why something happened. There should be a beginning, middle and end (2-4 sentences).
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>pallid</li>
              <li>gesticulating</li>
              <li>hastening</li>
              <li>taboo</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener63} value={la6Essay63}/>
          <br/>
          <span className="days">LESSON 86</span>
          <p>Read Chapter 13 Fencing </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What happened to Tony?<br/>
            2. What have we learned about the Bears?<br/>
            3. Describe the main events for the chapter. (2-4 sentences).<br/>
            4. What was your favorite part?<br/>
            5. Describe the steps involved when Lee Scoresby makes gas.<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>suffused</li>
              <li>pedantic</li>
              <li>feinting</li>
              <li>impassive</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener64} value={la6Essay64}/>
          <br/>
          <span className="days">LESSON 87</span>
          <p>Read Chapter 14 Bolvangar Lights </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What are new insights about the characters (new traits or important information about them).
            Include
            other characters if they played a significant role. If there is a character you particularly liked
            or
            disliked, describe them. (2-5 sentences).<br/>
            2. What is the setting?<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. Who do you think has a dull daemon? Why is it so dull?</p><p className="topBottom">
          <strong>VOCABULARY</strong><br/>For each word below, write the definition and then use the word in a sentence.
        <br/>
            <ol className="vocab">
              <li>meticulous</li>
              <li>forlorn</li>
              <li>perpetual</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener65} value={la6Essay65}/>

          <span className="days">LESSON 88</span>
          <p>Read Chapter 15 The Daemon Cages </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What does Lyra discover during the fire drill?<br/>
            2. Why might Lyra be so interested in how witches can fly?<br/>
            3. Who arrives at the end of the chapter?<br/>
            4. Describe Lyra's relationship with Roger. <br/>
            5. Why are the children at Bolvanger approximately the same age?<br/>
            6. Who took away Bridget McGinn? Is this significant?<br/>
            7. The chapter is called The Daemon Cages? Explain this.<br/>
           </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition
          and then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>enveloping</li>
              <li>sanguine</li>
              <li>conspicuous</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener66} value={la6Essay66}/>

          <span className="days">LESSON 89</span>
          <p>Read Chapter 16 The Silver Guillotine </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What are things about Mrs. Coulter that the children at Bolvanger find scary?<br/>
            2. What is the setting?<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. What was your favorite part and why? (1-3 sentences)</p>
          <p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and then
            use the word in a sentence. <br/>
            <ol className="vocab">
              <li>banished</li>
              <li>apparatus</li>
              <li>maelstrom</li>
              <li>resigned</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener67} value={la6Essay67}/>

          <span className="days">LESSON 90</span>
          <p>Read Chapter 17 The Witches </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What new things did you learn about Lyra and Mrs. Coulter during their conversation?<br/>
            2. What is the setting?<br/>
            3. Describe the main events for the chapter (2-4 sentences).<br/>
            4. Do you think Lyra is clever when she lies? Explain why or why not?<br/>
            5. What do you think about how Lyra gets others to do what she tells them? Explain.<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>rectified</li>
              <li>haggard</li>
              <li>innocuous</li>
              <li>lithe</li>
              <li>querulously</li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener68} value={la6Essay68}/>

          <span className="days">LESSON 91</span>
          <p>Read Chapter 18 Fog and Ice </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Describe the main events for the chapter. There should be a beginning, middle and end.<br/>
            2. Describe Lee Scoresby’s personality. What does he want out of life? (4-6 sentences)<br/>
            3. Describe the life of a witch. (4-6 sentences)<br/>
            4. Serafina Pekkala believes priests are afraid of dust. Why?<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>inflammable</li>
              <li>buoyancy</li>
              <li>abominable</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener69} value={la6Essay69}/>
          <br/>
          <span className="days">LESSON 92</span>
          <p>Read Chapter 19 Captivity </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. How does Lyra get Jotham Santelia to give her the information that she wants?<br/>
            2. How is Iofur Raknison “playing both sides”?<br/>
            3. What does Lyra convince Iofur to do? How does she do this?<br/>
            4. Describe the main events for the chapter. There should be a beginning, middle and end.<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>perceptive</li>
              <li>besotted</li>
              <li>exploit</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener70} value={la6Essay70}/>
          <br/>
          <span className="days">LESSON 93</span>
          <p>Read Chapter 20 Mortal Combat </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What are new insights about the characters (new traits or important information about them).
            Include other characters if they played a significant role. If there is a character you
            particularly liked
            or disliked, describe them. (2-5 sentences).<br/>
            2. List the things you know about Dust. <br/>
            3. Describe the main events for the chapter.<br/>
            4. What does Iorek Byrnison mean when he calls Lyra “Lyra Silvertongue”?<br/>
            5. Why does Mrs. Coulter want to kill Lord Asriel?<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>preposterous</li>
              <li>vulnerable</li>
              <li>obligation</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener71} value={la6Essay71}/>

          <span className="days">LESSON 94</span>
          <p>Read Chapter 21 Lord Asriel's Welcome </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. What is Lord Asriel’s reaction when he sees Lyra?<br/>
            2. What is Roger’s view on knowing the future?<br/>
            3. What is Lord Asriel’s plan?<br/>
            4. What is the setting?<br/>
            5. Describe the main events for the chapter. <br/>
            6. Describe how Dust makes the alethiometer work.<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>wary</li>
              <li>imperious</li>
              <li>eloquent</li>
              <li>bemused</li>
              <li>confused</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener72} value={la6Essay72}/>
          <br/>
          <span className="days">LESSON 95</span>
          <p>Read Chapter 22 Betrayal </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Thoroid is a new character. What is he like? Why does he wake Lyra up? <br/>
            2. Describe the main events for the chapter (2-4 sentences).<br/>
            3. Who does Lord Asriel take with him to do his experiment?<br/>
            4. What does Lyra do at the end of the chapter? What does Iorek Byrnison do? Explain why they did this?<br/>
          </p><p className="topBottom"><strong>VOCABULARY</strong><br/>For each word below, write the definition and
          then use the word in a sentence. <br/>
            <ol className="vocab">
              <li>gaunt</li>
              <li>lavish</li>
              <li>appalled</li>
              <li>bleak</li>
              <li>interrogate</li>
            </ol>
          </p>

          <textarea className="textArea" onChange={onChangeLA6Listener73} value={la6Essay73}/>
          <br/>
          <span className="days">LESSON 96</span>
          <p>Read Chapter 23 The Bridge to the Stars </p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Describe the main events for the chapter (2-4 sentences).<br/>
            2. Where does Lyra go at the end of the book?<br/>
            3. Why do you think Mrs. Coulter decided not to go with Lord Asriel?<br/>
            4. How did you like the book? Do you think you would like to read the other books in the series? Why or why
            not? </p>
          <textarea className="textArea" onChange={onChangeLA6Listener74} value={la6Essay74}/>
          <br/>
          <span className="days">LESSON 97</span>
          <p><i>Now that you've completed the novel, answer the questions below as thoughtfully as you
            can and in complete sentences:</i><br/>
            1. Do you think humans are inherently good? Explain your answer.<br/>
            2. There is a quote that says that absolute power corrupt absolutely. What does this mean? Do you believe
            this is true? <br/>
            3. Is "Dust" good or bad? What does Lyra think? What do you think?<br/>
            4. Are you the master of your own destiny, or does fate guide your course?<br/>
            5. Is Lord Asriel a hero or a villain? Is this a trick question?<br/>
            6. Could Lyra have saved Roger? Why or why not?<br/>
            7. Do you like Lyra? Did you like her through out the whole book, or did she grow on you over
            time?
            <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener75} value={la6Essay75}/>
          <br/>
          <span className="days">LESSON 98</span>
          <p>Further exploration of the novel and characters.<br/><i>Answer the
            questions below.</i><br/>
            1. When spreading news of the escape plan to the children at Bolvangar, Lyra “marvels at the
            effect
            that hope can have.” Using examples, discuss the effect that hope has had on Lyra’s own
            journey.<br/>
            2. Why does Lyra feel that she could never accept Mrs. Coulter as her mother? Would you have felt
            the same way if you were in her shoes?<br/>
            3. Serafina Pekkala explains to Lee Scoresby that whether they know it or not, the whole world is
            involved in a deadly war. She says “We have no more choice in that than in whether or not to be
            born.” Did Lyra have a choice to follow her destiny? Why or why not?<br/>
            4. Lyra often lies, and eventually lying becomes a matter of habit for her. Is lying always wrong,
            according to The Golden Compass? Use examples.<br/>
            5. What do you believe are the qualities of a hero? <br/>
            6. Who are the heroes in the Golden Compass? <br/>
            7. Who is your favorite hero in the novel? What traits make him/her a hero in your mind? What actions did
            you
            find heroic? <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener76} value={la6Essay76}/>
          <br/>
          <span className="days">LESSON 99</span>
          <p>The next book you'll read is <b> <a href={require("../resources/books/TheHungerGamesChapter1.pdf")}
                                                 rel="noreferrer" target="_blank"> The Hunger Games </a></b>by
            Suzanne Collins. The novel is available at your local library and online for purchase. Until your copy
            arrives, Chapter 1 is provided here. Read <a href={require("../resources/books/TheHungerGamesChapter1.pdf")}
                                                         rel="noreferrer" target="_blank">Chapter 1. <br/>
              <br/>
              <img src={require("../../public/images/bookCovers/hungergames.jpg")} alt=""/><br/></a></p>
          <p><i>Complete the the questions and vocabulary assignment below:</i><br/>
            1. Describe District 12.<br/>
            2. What illegal activity does Katniss participate in doing? Why does she need to do this?<br/>
            3. Describe the relationship between Gale and Katniss. Do you have a relationship like this in
            your
            own life? Explain.<br/>
            4. What is the reaping? Do you think this practice is fair? Explain.<br/>
            5. Who is selected at the reaping?</p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. reaping <br/>
            2. apothecary <br/>
            3. racketeering <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener77} value={la6Essay77}/>
          <br/>
          <span className="days">LESSON 100</span>
          <p>Read Chapter 2 from <i>The Hunger Games</i> and answer the
            questions below:<br/>
            1. How does Katniss save her sister from the reaping?<br/>
            2. How does Katniss know Peeta? What kind of person do you think Peeta is? What evidence from the book led
            you to come to this conclusion?<br/>
            3. Describe Gale. What do you think of him?<br/>
            4. What do you know so far about Katniss's mother. How would you describe her mental state?<br/>
            5. When some holds three middle fingers to their mouth and then holds them out, what does this mean?<br/>
            6. What is the significance of the dandelion?<br/>

          </p>
          <p>Write definitions for the vocabulary words below and use each word in a sentence. <br/>
            1. condone <br/>
            2. tenuous <br/>
            3. mesmerized <br/>
            4. treason <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener78} value={la6Essay78}/>
          <br/>
          <span className="days">LESSON 101</span>
          <p>Read Chapter 3 from <i> The Hunger Games </i>and answer the
            questions below: <br/>1. What instructions does Katniss leave for her mother?<br/>
            2. What act of kindness does Peeta’s dad show to Katniss? What do you think Peeta thought of this?<br/>
            3. What advice does Gale give Katniss about surviving the games?<br/>
            4. What happens after the anthem? <br/>
            5. Before Katniss has to leave, what does she tell her family?<br/>
            6. Describe what you know about the competitors Katniss and Peeta will face.<br/>
            7. What is a mockingjay? Who does the mockinjay make Katniss think of?<br/>
            8. Describe Effie. What things does she value? How do you like her?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. compensation <br/>
            2. insurmountable <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener79} value={la6Essay79}/>
          <br/>
          <span className="days">LESSON 102</span>
          <p>Read Chapter 4 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. Do you think Haymitch will be helpful as a mentor? Why or why
            not?<br/>
            2. What does Katniss mean when she says: “A kind Peeta Mellark is far more dangerous to me than an
            unkind one”? Why does she think Peeta's kindness is a threat?<br/>
            3. Haymitch starts to believe that Peeta and Katniss may be fighters. What changes his mind about them?<br/>
            4. Is Katniss close to her mother? Explain why or why not.<br/>
            5. Haymitch makes a deal with Peeta and Katniss. What is it? What advice does he give them?<br/>
            6. Why does Katniss not like Haymitch?<br/>
          </p>
          <p><i>Write definitions for the vocabulary word below and use each word in a sentence. </i><br/>
            1. gawking <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener80} value={la6Essay80}/>
          <br/>
          <span className="days">LESSON 103</span>
          <p>Read Chapter 5 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. The presentation of the tributes seems to be greatly focused on visual
            presentation and looks — what does this reveal about the belief systems of the Capitol?<br/>
            2. Compare and contrast life in the Capitol to life in District 12.<br/>
            3. Why do newcomers like Cinna get assigned District 12?<br/>
            4. How is Katniss's life different than the lives of those who live in the Capitol?<br/>
            5. How are the costumes for Katniss and Peeta dofferent than the costumes usually worn by tributes from
            District 12?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. sustenance <br/>
            2. demeanor <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener81} value={la6Essay81}/>
          <br/>
          <span className="days">LESSON 104</span>
          <p>Read Chapter 6 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What is an Avox? <br/>
            2. What prevents tributes from jumping off the roof? Why do you think this is in place? <br/>
            3. What do you think Peeta is curious about Gale? <br/></p>
          4. Why does Effie Trinket stay with Peeta and Katniss?<br/> ...
          5. What is Katniss's room like?<br/>
          6. Do you agree with the advice that Haymitch has been giving Katniss and Peeta so far?<br/>
          7. Katniss feels she is in Peeta's debt again. Why? What did he do?<br/>

          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. corral <br/>
            2. barbarism <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener82} value={la6Essay82}/>
          <br/>
          <span className="days">LESSON 105</span>
          <p>Read Chapter 7 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. Do you think it's a good idea for Peeta and Katniss to be coached
            together? Explain.<br/>
            2. Why does Peeta believe Katniss will be better than him in the arena?<br/>
            3. What does Katniss do before the judges? Why might this act be considered controversial?
            4. What does Katniss think of the twins?<br/>
            5. Why does Katniss hate meeting the other Tributes?<br/>
            6. What do you think Peeta means by “she has no idea the effect she can have” <br/>
            7. Who are the Gamemakers? What did Katniss do in her private session with them?<br/>
            8. How does Haymitch want Katniss and Peeta to behave when they ae in public together? Why does he want
            this?<br/>
            9. Who is Rue? What skill does she have that may serve her well in the Games?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. emaciated <br/>
            2. arbitrary <br/>
            3. deluge <br/>
            4. amiable <br/>
            5. arrogance <br/>
            6. surly <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener83} value={la6Essay83}/>
          <br/>
          <span className="days">LESSON 106</span>
          <p>Read Chapter 8 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What does Katniss fear will happen as a result of her behavior before
            the
            judges? <br/>
            2. Why do you think Peeta asked to be coached separately? <br/>
            3. Why does the score given to each tribute matter?<br/>
            4. Describe how Gale and Katniss first met.<br/>
            5. Haymitch tells Katniss that plans have changed. What does he tell her?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. leniency <br/>
            2. arduous <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener84} value={la6Essay84}/>
          <br/>
          <span className="days">LESSON 107</span>
          <p>Read Chapter 9 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. Describe Katniss and Peeta’s costumes. Why do you think Cinna dressed
            them like this? <br/>
            2. What surprising secret does Peeta reveal during his interview?<br/>
            3. How does Katniss feel about Peeta?<br/>
            4. Katniss is trying to help Katniss become better at what?<br/>
            5. Why does the Capitol bother with interviewing the Tributes?<br/>
            6. What new things have you learned about people in the Capitol?<br/>
            7. How does the interview go for Katniss? Do people like her?<br/>
            8. Describe the costume Cinna makes for Katniss.<br/>

          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. pretense <br/>
            2. banal <br/>
            3. sullen <br/>
            4. prestigious <br/>
            5. elusive <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener85} value={la6Essay85}/>
          <br/>
          <span className="days">LESSON 108</span>
          <p>Read Chapter 10 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. How does Katniss react to Peeta’s declaration once they are
            alone? <br/>
            2. What does Peeta mean when he says: “I want to die as myself.” <br/>
            3. Cinna makes sure Katniss brings what into the arena with her?<br/>
            4. What effect does Peeta's interview have on people in the Capitol? <br/>
            5. When the Games ended, what happened to the arenas?<br/>
            6. Before they leave for the Games, what final advice does Haymitch give?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. entourage <br/>
            2. hysteria <br/>
            3. ruminate <br/>
            4. patronizing <br/>
            5. catacombs <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener86} value={la6Essay86}/>
          <br/>
          <span className="days">LESSON 109</span>
          <p>Read Chapter 11 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. Describe the Cornucopia.<br/>
            2. How are the tributes notified that someone has died in the arena? <br/>
            3. How do you think Katniss feels when she hears Peeta planning with the Careers?<br/>
            4. Who is the first person to die in the arena? How do they die? <br/>
            5. What does Katniss see in the Cornucopia that she wants the most?<br/>
            6. How would you describe the games when they first begin?<br/>
            7. What woke up Katniss that first night and what happened to the Tribute who woke her?<br/>
          </p>

          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. equidistant <br/>
            2. devise <br/>
            3. assent <br/>
            4. brutish <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener87} value={la6Essay87}/>
          <br/>
          <span className="days">LESSON 110</span>
          <p>Read Chapter 12 from <i> The Hunger Games </i> and answer the
            question below:<br/>
            1. What are some of the conflicts Katniss has to face2? <br/>
            2. Describe Peeta's physical condition in this chapter.<br/>
            3. What are Katniss's feelings for Peeta? <br/>
            4. Peeta has been with the Career Tributes> They didn't kill him. Why?<br/>
            5. Katniss is aware of the cameras. Does this change how she behaves in front of them? Explain.<br/>
            6. Describe how the chapter ends.<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. disgrace <br/>
            2. perplexed <br/>
            3. foliage <br/>
            4. imprudent <br/>
            5. abstain <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener88} value={la6Essay88}/>
          <br/>
          <span className="days">LESSON 111</span>
          <p>Read Chapter 13 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. Describe the attack that occurs in this chapter. <br/>
            2. What kind of injury does Katniss receive and how did she get it?<br/>
            3. Who does Katniss believe started the fire?<br/>
            4. Why is Katniss temporarily safe from the Tributes while she's in the tree? Why can't they get to
            her? <br/>
            5. Who does Katniss see up in the trees with her? <br/>
            6. Do you have any ideas for how Katniss might escape from teh Tributes?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. manipulate <br/>
            2. garment <br/>
            3. conspiracy <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener89} value={la6Essay89}/>
          <br/>
          <span className="days">LESSON 112</span>
          <p>Read Chapter 14 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What does Haymitch send to Katniss? <br/>
            2. Who does Katniss team up with? Why do you think she chose this person? <br/>
            3. Who saves Katniss’ life?<br/>
            4. The wasps in the Games are not normal. What is different about them?<br/>
            5. How does Katniss manage to get awa from the Career Tributes? What happened to them and what does
            Katniss manage to take before she runs away?<br/>
            6. What happened to Katniss and what does she realize before she passes out?
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. precarious <br/>
            2. persevere <br/>
            3. sated <br/>
            4. astronomical <br/>
            5. eradicate <br/>
            6. putrid <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener90} value={la6Essay90}/>
          <br/>
          <span className="days">LESSON 113</span>
          <p>Read Chapter 15 from <i> The Hunger Games </i> and answer the questions below.</p>
          <ol className="vocab">
            <li>Why do Katniss and Rue think Peeta saved Katniss’s life? What did he do?</li>
            <li>How do things change for Katniss after she has a bow? Does her perspective about the Games change?</li>
            <li>Citizens are not allowed to eat crops in District 11. Why is this?</li>
            <li>Describe what the poison did to Katniss.</li>
            <li>Katniss forms an alliance. Who is it with?</li>
            <li>Katniss believes her conversation with Rue will be blocked. Why would the Gamemakers block it?</li>
          </ol>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. wracked <br/>
            2. feeble <br/>
            3. evasion <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener91} value={la6Essay91}/>
          <br/>
          <span className="days">LESSON 114</span>
          <p>Read Chapter 16 from <i> The Hunger Games </i> and answer the questions below.</p>
          <ol className="vocab">
            <li>Summarize the major events of chapter 16. What were the main problems or conflicts Katniss was trying to
              solve?
            </li>
            <li>Describe the relationship between Katniss and Rue.</li>
            <li>Katniss and Rue have an advantage over many other players. What is it?</li>
            <li>What has happened to Peeta in this chapter.</li>
            <li>Describe the role “Foxface” played in this chapter? How is she clever?</li>
          </ol>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. ordeal <br/>
            2. poised <br/>
            3. rendezvous <br/>
            4. copse <br/>
            5. replicate <br/>
            6. meticulous <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener92} value={la6Essay92}/>
          <br/>
          <span className="days">LESSON 115</span>
          <p>Read Chapter 17 from <i> The Hunger Games </i> and answer the questions below.</p>
          <ol className="vocab">
            <li>Summarize the major events of chapter 17. What were the main problems or conflicts Katniss was trying to
              solve?
            </li>
            <li>What happened to Katniss because of the explosion? Was she hurt?</li>
            <li>What happened to the boy from District 3?</li>
            <li>Why doesn't Katniss think "Foxface" would be a good ally?</li>
            <li>What do you think are Katniss's greatest strengths as a Tribute? What are her greatest weaknesses?</li>
            <li>If you were a Tribute in the Games, how well do you think you would be doing at this point in the Games? What would be
              your greatest strengths? What would be your greatest weaknesses?
            </li>
          </ol>

          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. famished <br/>
            2. decadent <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener93} value={la6Essay93}/>
          <br/>
          <span className="days">LESSON 116</span>
          <p>Read Chapter 18 from <i> The Hunger Games </i> and answer the
            questions below:<br/>
            1. How does Katniss mourn Rue? Why does she place wild flowers on her body?<br/>
            2. How does Rue’s district show their gratitude for the way Katniss honored Rue? <br/>
            3. Who does Katniss blame for Rue's death? <br/>
            4. Does Katniss feel differently about killing now?<br/>
            5. What rule change happens at the end of this chapter? <br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. gore <br/>
            2. despondent <br/>
            3. lethargy <br/>
            4. consolidate </p>
          <textarea className="textArea" onChange={onChangeLA6Listener94} value={la6Essay94}/>
          <br/>
          <span className="days">LESSON 117</span>
          <p>Read Chapter 19 from <i> The Hunger Games </i> and answer the
            questions below:<br/>
            1. Where does Katniss find Peeta? Is he hurt? Explain. <br/>
            2. Compare Katniss’s reaction to an injury with how she describes how her mother and
            Prim can manage an injury. Why would Prim be better in the arena than Katniss while trying to help
            Peeta? <br/>
            3. What does Katniss do in order to receive a gift from Haymitch? How does she figure out that she
            needs to do this? <br/>
            4. How do you think Haymitch feels about Katniss and Peeta? Who do you think he believes to be the
            stronger competitor? Explain. <br/>
            5. What does Katniss realize about Peeta and what he is trying to do in the Games?<br/>
            6. Does anyone else benefit from the Games rule change?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. assailant <br/>
            2. dissipate <br/>
            3. pariah <br/>
            4. scrupulous <br/>
            5. levity <br/>
            6. festering <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener95} value={la6Essay95}/>
          <br/>
          <span className="days">LESSON 118</span>
          <p>Read Chapter 20 from <i> The Hunger Games </i> and answer the
            questions below:<br/>
            1. What story does Katniss tell Peeta? What parts of the real story does she have to leave out because the Capitol is listening? <br/>
            2. What is the purpose of the feast? Why does Katniss want to go? <br/>
            3. How is Peeta's leg wound doing? Is it getting better or worse?  <br/>
            4. Why does Katniss change the story of how she got Prim's goat?  <br/>
            5. How significant is it to have a goat if you live in District 12? <br/>
            6. What is delivered in the latest parachute? Is it something that will save Peeta? <br/>
            7. How does Katniss trick Peeta so she can leave?  <br/></p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. tethered <br/>
            2. scowl <br/>
            3. potent <br/>
            4. intervene <br/>
            5. incompetent <br/>
            6. exertion <br/>
            7. stalemate <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener96} value={la6Essay96}/>
          <br/>
          <span className="days">LESSON 119</span>
          <p>Read Chapter 21 from <i> The Hunger Games </i> and answer the
            questions below:<br/>
            1. Why would Katniss worry what Gale would think about her kissing Peeta? <br/>
            2. How does Foxface outsmart the rest of the tributes at the feast? <br/>
            3. Who saves Katniss from Clove and why? Do you think this might upset the Capitol? <br/>
            4. How are the Gamemakers still influencing the Games? <br/>
            5. Why does Katniss need the District 12 backpack so badly? What is in it?</p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. forte <br/>
            2. dignity <br/>
            3. defiance <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener97} value={la6Essay97}/>
          <br/>
          <span className="days">LESSON 120</span>
          <p>Read Chapter 22 from <i> The Hunger Games </i> and answer the
            questions below:</p>
          1. Describe the story Peeta tells Katniss. What does this reveal about both Peeta and his father? <br/>
          2. What did you discover about Katniss’ father?<br/>
          3. How is Peeta doing after Katniss returns with the medicine?<br/>
          4. How is Katniss doing? Is she still in good shape?<br/>
          5. Why did the Gamemakers send the Thunderstorm? Who were they targeting?<br/>
          6. How does Katniss feel about Thresh?<br/>
          7. What does Katniss admit to Peeta?<br/>
          8. Describe how Peeta's crush on Katniss first started.<br/>

          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. irreverent <br/>
            2. fabricated <br/>
            3. exorbitant <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener98} value={la6Essay98}/>
          <br/>
          <span className="days">LESSON 121</span>
          <p>Read Chapter 23 from <i> The Hunger Games </i> and answer the
            questions below:<br/>
            1. Who do you find out is dead? Why does this upset Katniss and Peeta? <br/>
            2. What are Katniss’ fears about surviving the games? What did she decide she will never do if
            she survives. Why? <br/>
            3. How does Peeta compare to Gale as a hunting partner?<br/>
            4. How do Peeta and Katniss assume Haymitch won the Games?<br/>
            5. Why do you think Haymitch drinks so much?<br/>
           6. When Katniss thinks about winning the Games, what does she imagine for her future? Is what she imagines hopeful or gloomy?  <br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. repellent <br/>
            2. peevish <br/>
            3. exasperation <br/>
            4. extricate <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener99} value={la6Essay99}/>
          <br/>
          <span className="days">LESSON 122</span>
          <p>Read Chapter 24 from <i> The Hunger Games </i> and answer the
            question below:<br/>
            1. Summarize the main events that happened in this chapter. <br/>
            2. How does "Foxface" die? Why does Peeta feel responsible for her death? <br/>
            3. Describe Cato’s state of mind at this point in the book. Katniss seems to understand him better now than she did at the beginning.  What did she learn about him?<br/>
          4. The Gamemakers have changed the Game again. What have they done to make things tougher?<br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. dissonant <br/>
            2. intersperse <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener100} value={la6Essay100}/>
          <br/>
          <span className="days">LESSON 123</span>
          <p>Read Chapter 25 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What are Muttations? <br/>
            2. What is chasing after the final three tributes?<br/>
            3. What does Cato say to Katniss that she thinks about? <br/>
            4. How is Cato knocked off the Cornucopia? <br/>
            5. The dogs don't try to kill Cato right away. Why would they keep him alive?<br/>
            6.  The Games were supposed to end after Cato died. What happened instead?<br/>
            7. What announcement does Claudius make? Compare and contrast Peeta and Katniss’s reactions. <br/>
            8. Katniss and Peeta outsmart the game makers. How do they do this? <br/></p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. callous <br/>
            2. tourniquet <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener102} value={la6Essay102}/>
          <br/>
          <span className="days">LESSON 124</span>
          <p>Read Chapter 26 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What advice does Haymitch give to Katniss? <br/>
           2. Why is everyone keeping their distance from Katniss? <br/>
           3. What does Katniss realize as she watches the doctors operate on Peeta? <br/>
           4. Why is there a delay between the Games and the presentation of the victor? <br/>
           5. Who is missing from the team reunion? <br/>
           6. What did the Gamemakers want to do to Katniss? What was the compromise? <br/>
          7. Describe how Cinna presented Katniss. <br/>
           8. Is it all over or do Katniss and Peeta still face danger from the Capitol? Explain. <br/>
          </p>
          <p><i>Write definitions for the vocabulary word below and use each word in a sentence. </i><br/>
            1. benign <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener103} value={la6Essay103}/>
          <br/>
          <span className="days">LESSON 125</span>
          <p>Read Chapter 27 from <i> The Hunger Games </i> and answer the
            questions below:<br/>1. What startling discovery does Katniss make about Peeta during the
            interview?
            <br/>
            2. How does Katniss explain the use of the berries during the interview? <br/>
            3. Describe the reunion of Peeta and Katniss. <br/>
            4. Do you think Katniss was acting the whole time that she was in love with Peeta? Why or why not? <br/>
            5. What was the reason for Cinna’s choice of dress for Katniss? <br/>
            6. What power do the people who select the highlights possess? <br/>
            7. What was omitted from the highlights? <br/>
            8. What has happened to Peeta’s leg? <br/>
            9. What do you think is the significance of the berries moment? <br/>
            10. Will Peeta and Katniss see Portia and Cinna again? <br/>
            11. On the train, what is the significance of Katniss washing off her makeup and changing her hair and clothes? <br/>
            12. What do the pink and white flowers given by Peeta remind Katniss of? <br/>
            13. Does Peeta come to any realizations about Katniss’s actions during the Games? Explain. <br/>
          </p>
          <p><i>Write definitions for the vocabulary words below and use each word in a sentence. </i><br/>
            1. insidious <br/>
            2. segue <br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener104} value={la6Essay104}/>
          <br/>
          <span className="days">LESSON 126</span>
          <p><i>End of novel discussion questions.</i><br/>
            1. Who is your favorite character in The Hunger Games? Why? What made
            you like this character?<br/>
            2. Who was your least favorite character in The Hunger Games? Why? What did this
            character do to make you dislike him/her?<br/>
            3. Which character reminds you of someone you know? Why? Explain why the
            character reminds you of that particular person.<br/>
            4. Which character can you most relate to in The Hunger Games? Give specific
            examples from the novel.<br/>
            5. If you could be any character in the novel, which character would you choose
            to be and why?<br/>
            6. What quality or trait of that particular character (in #5) is one that you would like to
            develop within yourself? Why? How does that character demonstrate that
            trait/quality in the novel?<br/>
            7. What happened in The Hunger Games that reminds you of your own life or
            something you have experienced? Explain by telling what happened in the book,
            then what happened to you (or how it reminds you of something in your life).<br/>
            8. What is the most important choice made by a character in the novel? Why
            does that character make that choice? Would you make the same choice?
            Why or why not.<br/>
            9. Would you change the ending of The Hunger Games? If yes, tell your ending and
            why you would change it. If no, explain why the ending is perfect the way it is.<br/>
            10. Which character matures the most in The Hunger Games? Give specific
            examples of how that character changes. <br/>
            11. How we behave when we are placed into uncomfortable or
            terrible situations says a lot about our character. Which tributes
            showed humanity toward others, showed they had good
            character, in the arena? Which tributes gave in to cruelty and
            went along with the inhumanity of the Games? How did they
            show their true colors?<br/>
            12. At the end of the novel, what are some things you believe will happen next? Will Katniss and
            Peeta begin a relationship? How will Gale react to Peeta and Katniss's relationship? How will their lives change?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener105} value={la6Essay105}/>

          <br/>
          <span className="days">LESSON 127</span>
          <p>Begin reading <b><a href={require("../resources/books/StargirlChapter1.pdf")} rel="noreferrer"
                                 target="_blank"> Stargirl by Jerry
            Spinelli. </a></b> Until you receive a copy of the book, the reading for the first assignment
            is posted <a href={require("../resources/books/StargirlChapter1.pdf")} rel="noreferrer"
                         target="_blank"> here, Porcupine Necktie and Chapters 1-2, pages 1-10.<br/>
              <img src={require("../../public/images/bookCovers/stargirl.jpg")} alt="Stargirl"/></a></p>
          <p><i>For each vocabulary word below, a) write the definition and b) write a sentence using the
            word. </i><br/>
            1. ukulele <br/>
            <span style={{ color: "darkgray" }}> &nbsp; a) definition<br/>
              &nbsp; b) use the word in a sentence <br/></span>
            2. noteworthy <br/>
            3. strumming <br/>
            4. disbelief <br/>
            5. gawked <br/>
            6. rouge<br/>
            7. noncomformity<br/>
            8. kimono<br/>
            9. isosceles triangle<br/>
            10. acquired<br/>
            11. variants<br/>
            12. scam<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/></p>
          <p> 1. Is Stargirl Caraway an appropriate name for this character? <br/>
            2. Is Leo Borlock an appropriate name for this character?<br/>
            3. What is a narrator? You may look this up online to help you with a complete definition.<br/>
            4. The narrator of Stargirl is Leo Borlock. What do we learn about him in this chapter of the
            novel?<br/>
            5. What good deeds do we see in this chapter of the novel?<br/>
            6. What did you think about the ending of “Porcupine Necktie”? “Porcupine Necktie” is the prologue
            that came just before chapter/Chapter 1.<br/>
            7. What kind of an impact does Stargirl make on the students of Mica High School on her first day
            of school?<br/>
            8. What do we find out about Stargirl Caraway in Chapter 1?<br/>
            9. Which song does Stargirl sing on her first day of high school?<br/>
            10. What is a ukulele? Is it a “cool” musical instrument? <br/>
            11. What is Kevin like? Write a short character analysis of Kevin.<br/>
            12. What is Hot Seat?<br/>
            13. The name of the high school is Mica Area High School. What is Mica? <br/>
            14. Write a short character analysis of Hillari Kemble. Which conspiracy theory does she say
            she believes? <br/>
            15. How does Stargirl celebrate other people’s birthdays? <br/>
            16. What new things did you learn about Stargirl? <br/>
            17. Does Stargirl always do the right thing? <br/>
            18. Kevin says, <q>How long do you think somebody who’s really like that is going to
              last around here?</q> This is foreshadowing. Define <q>foreshadowing.</q> <br/>
            19. What are the students at Mica Area High School like? <br/>
            20. What would a hotbed of conformity look like? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener106} value={la6Essay106}/>
          <br/>
          <span className="days">LESSON 128</span>
          <p>Read Chapters 3 and 4 of Stargirl, pages 10-16. </p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. producer<br/>
            2. saguaros<br/>
            3. balking<br/>
            4. vague<br/>
            5. astonishment<br/>
            6. pestered<br/>
            7. aviary<br/>
            8. resumed<br/>
            9. stifled<br/>
            10. hoax<br/>
            11. stunned<br/>
            12. disdainful<br/>
            13. chiseled<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What are the three things that Hillari Kimble is known for? Are these things worth being
            known for? <br/>
            2. Compare and contrast Hillari Kimble and Stargirl. What are the difference between them? <br/>
            3. Write a short character analysis of Wayne Parr. <br/>
            4. Is Wayne Parr a good name for this character? Why are why not. <br/>
            5. Compare and contrast Wayne Parr and Stargirl. <br/>
            6. Wayne Parr is a foil for Stargirl. What is a foil? <br/>
            7. What are the three things that you would like to be known for? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener107} value={la6Essay107}/>
          <br/>
          <span className="days">LESSON 129</span>
          <p>Read Chapters 5 and 6 of Stargirl, pages 16-21.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. bolted<br/>
            2. pranced<br/>
            3. gaped<br/>
            4. linger<br/>
            5. reluctantly<br/>
            6. bristle<br/>
            7. glared<br/>
            8. ferociously<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What does Stargirl do at the football game? <br/>
            2. How do the people at the football game react to Stargirl’s antics? <br/>
            3. What happens at the next football game? <br/>
            4. How do the cheerleaders react to Stargirl’s nonappearance at halftime? <br/>
            5. How does Stargirl celebrate Halloween? <br/>
            6. What is your opinion of the ending? <br/>
            7. In your opinion, why doesn’t Hillari Kimble want Stargirl to sing to her on her
            birthday? <br/>
            8. Stargirl promises not to sing <q>Happy Birthday</q> to Hillari Kimble on Hillari’s
            birthday. <br/>
            9. What does Stargirl do instead? How does Hillari react? <br/>
            10. Why does Stargirl sing to Leo? <br/>
            11. What is your opinion of the ending for this chapter? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener108} value={la6Essay108}/>
          <br/>
          <span className="days">LESSON 130</span>
          <p>Read Chapters 7 and 8 of Stargirl, pages 21-28.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. acrobatic<br/>
            2. standing ovation<br/>
            3. backlash<br/>
            4. sneer<br/>
            5. embrace<br/>
            6. oratorical<br/>
            7. confer<br/>
            8. aftermath<br/></p>
          9. morbid<br/>
          10. paleontologist<br/>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. Write a short character analysis of A. H. (Archibald Hapwood) Brubaker. <br/>
            2. Write a description of Señor Saguaro. <br/>
            3. Does A. H. (Archibald Hapwood) Brubaker always act ethically? <br/>
            4. Is A. H. (Archibald Hapwood) Brubaker a nonconformist? <br/>
            5. Did A. H. (Archibald Hapwood) Brubaker create Stargirl? <br/>
            6. What do we learn about Stargirl in this chapter? <br/>
            7. How is Stargirl as a cheerleader for the football team? <br/>
            8. Why could there a backlash against Hillari Kimble? <br/>
            9. Write a character analysis of Dori Dilson. <br/>
            10. The student population of Mica Area High School honor Stargirl <q>by imitation</q>? How do
            they
            start imitating her? Is this good or bad? <br/>
            11. What film is shown after the annual oratorical contest? <br/>
            12. Why is Stargirl popular? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener109} value={la6Essay109}/>
          <br/>
          <span className="days">LESSON 131</span>
          <p>Read Chapters 9 and 10 of Stargirl, pages 28-33.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. vanished<br/>
            2. yielded<br/>
            3. lure<br/>
            4. elated<br/>
            5. courtyard<br/>
            6. patriotic<br/>
            7. mourners<br/>
            8. squabble<br/>
            9. dormant<br/>
            10. sullenly<br/>
            11. peering<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What effects does Stargirl have on the students of Mica Area High School? Are these<br/>
            2. effects positive or negative? <br/>
            3. How is Leo affected by the change at Mica Area High School? <br/>
            4. What is the ironic thing that happens? <br/>
            5. According to Archie, what is the problem with miracles? <br/>
            6. What is your opinion of the end of this chapter? <br/>
            7. Is Stargirl normal? <br/>
            8. What is the purpose of the roadrunner at Mica Area High School? <br/>
            9. How does Stargirl allegedly say the Pledge of Allegiance? <br/>
            10. What happens when Anna Grisdale’s grandfather dies? <br/>
            11. What happens when Danny Pike goes bicycle riding? What is the aftermath? <br/>
            12. What is the significance of the Pledge of Allegiance, the Grisdale funeral, and the Danny
              Pike affair?<br/></p>
          <textarea className="textArea" onChange={onChangeLA6Listener110} value={la6Essay110}/>

          <span className="days">LESSON 132</span>
          <p>Read Chapters 11 and 12 of Stargirl, pages 33-42.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. glumly<br/>
            2. suppress<br/>
            3. oblivious<br/>
            4. indifferent<br/>
            5. fanatics<br/>
            6. detested<br/>
            7. infamous<br/>
            8. verdict<br/>
            9. mingled<br/>
            10. grim<br/>
            11. pantomime<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. How does Stargirl act as a cheerleader at basketball games? <br/>
            2. How does Stargirl act as a cheerleader at school? <br/>
            3. How does the success of the basketball team affect the students at Mica Area High
            School? <br/>
            4. What does Leo regard as Stargirl’s <q>most remarkable</q> feature? <br/>
            5. Why does Stargirl leave a game in which the Electrons are ahead, 78-29? <br/>
            6. Why would the coach of Mica Area High School run up the score against the opposing
            team? Do you think this is wrong to do?<br/>
            7. What trick do the cheerleaders play on Stargirl? <br/>
            8. What has happened to Stargirl’s popularity? <br/>
            9. How does Stargirl act while appearing on Hot Seat? Which pantomime does she perform? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener111} value={la6Essay111}/>

          <br/>
          <span className="days">LESSON 133</span>
          <p>Read Chapters 13 and 14 of Stargirl, pages 43-51.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. traitor<br/>
            2. meddle<br/>
            3. impish<br/>
            4. timid<br/>
            5. pushover<br/>
            6. devastated<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. How does Stargirl respond to the various questions and charges leveled against her? <br/>
            2. When asked if she loves her country, Stargirl answers that yes, she does love her country.
            She also asks, <q>Do you love yours?</q> How would you feel and how would you respond to being asked all the questions that Stargirl was asked? <br/>
            3. Why did Stargirl quit homeschooling? <br/>
            4. Why does faculty adviser Mr. Robineau stop Hot Seat? <br/>
            5. Does Stargirl change after Hot Seat?<br/>
            6. What does she do on Valentine’s Day?  <br/>
            7. After Sun Valley basketball star Ron Kovac is injured, what does Stargirl do? <br/>
            8. Why does the Mica Area High School basketball team lose to Glendale? <br/>
            9. Why does Stargirl’s face get <q>bloody</q>?<br/>
            10. What do you think of the ending of this chapter? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener112} value={la6Essay112}/>
          <br/>
          <span className="days">LESSON 134</span>
          <p>Read Chapters 15 and 16 of Stargirl, pages 51-60.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. trembling<br/>
            2. treason<br/>
            3. intensely<br/>
            4. ordinary<br/>
            5. crouching<br/>
            6. detached<br/>
            7. rodent<br/>
            8. mourning<br/>
            9. subdued<br/>
            10. lurked<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. How does Leo react to getting a love note from Stargirl? <br/>
            2. Does Stargirl still have friends? <br/>
            3. How does Archie react to Stargirl getting hit in the face with a tomato? <br/>
            4. Why do you suppose Archie talks about the Eocene skull? <br/>
            5. What happens when Stargirl tells Leo, <q>You’re welcome</q>?<br/>
            6. What decision does the cheerleading squad make? Is it the right decision to make? <br/>
            7. Why do a group of girls call Leo <q>Starboy</q>?<br/>
            8. Why does Leo spy, for the second time, on Stargirl? <br/>
            9. What do Leo and Stargirl talk about? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener113} value={la6Essay113}/>
          <br/>
          <span className="days">LESSON 135</span>
          <p>Read Chapters 17 and 18 of Stargirl, pages 60-72.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. atop<br/>
            2. smitten<br/>
            3. mica<br/>
            4. ordinary<br/>
            5. dilapidated<br/>
            6. serenity<br/>
            7. interrogate<br/>
            1. impulsively<br/>
            2. escort<br/>
            3. veer<br/>
            4. screech<br/>
            5. jabbered<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. How does Leo feel about Stargirl? <br/>
            2. What is the desert like? <br/>
            3. Does Stargirl have the time? <br/>
            4. What is Stargirl’s enchanted place? <br/>
            5. What happens when Stargirl and Leo meditate? <br/>
            6. How alone are Stargirl and Leo? <br/>
            7. Does everyone ignore Stargirl and Leo? <br/>
            8. How does the shunning start? <br/>
            9. What do students blame Stargirl for? Are the students justified in blaming her for
            that? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener114} value={la6Essay114}/>
          <br/>
          <span className="days">LESSON 136</span>
          <p>Read Chapters 19 and 20 of Stargirl, pages 72-76.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. shunning<br/>
            2. excommunicated<br/>
            3. repents<br/>
            4. predator<br/>
            5. seducer<br/>
            6. derelict<br/>
            7. dignitary<br/>
            8. revel<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What is <q>shunning</q>?<br/>
            2. What does Stargirl have to repent? <br/>
            3. What does Archie mean when he says, <q>Poor dolphin. Caught in a tuna net</q>?<br/>
            4. Why does Archie believe in enchanted places? <br/>
            5. What does Leo want Stargirl to do? <br/>
            6. What does Archie think of Stargirl? <br/>
            7. What happens when Archie and Leo consult Señor Saguaro? <br/>
            8. How is Glendale, the basketball team that defeated Mica Area High School, doing in the
            state basketball tournament? <br/>
            9. How is Stargirl doing as an oratorical contestant? <br/>
            10. What does Stargirl see? <br/>
            11. What do Stargirl and Leo want to do with their lives? <br/>
            12. Why doesn’t Stargirl want credit for her good deeds? <br/>
            13. Who gave Leo the porcupine necktie? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener115} value={la6Essay115}/>
          <br/>
          <span className="days">LESSON 137</span>
          <p>Read Chapters 21 and 22 of Stargirl, pages 81-91.</p>
          <p><i>For the vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. facetiously<br/>
            2. obsessed
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. Where do the cards that Stargirl gives away come from? <br/>
            2. Stargirl loves fillers. What are fillers? <br/>
            3. How does Stargirl know what is going on in people’s lives? <br/>
            4. What card game do Stargirl and Leo play? <br/>
            5. Stargirl is observant. What does Leo see that Stargirl doesn’t? Why do you think Leo, not
            Stargirl, sees this? <br/>
            6. What does it mean to say that Stargirl is <q>the Johnny Appleseed of loose change</q>?<br/>
            7. The reference to <q>Johnny Appleseed</q> is an allusion. What is an allusion? <br/>
            8. Are Stargirl’s parents <q>normal</q> parents?<br/>
            9. Is Stargirl’s home a <q>normal</q>  home? <br/>
            10. Is Stargirl’s room a <q>normal</q>  room? <br/>
            11. What is Stargirl’s <q>happy wagon</q>? How many stones are in it? <br/>
            12. Is Stargirl affected by the shunning at school? <br/>
            13. What new things do we learn about Stargirl? <br/>
            14. Why is Stargirl upset when Leo asks her, <q>Are you running for saint?</q>.<br/>
            15. Why are 18 stones in Stargirl’s happy wagon? <br/>
            16. Is Stargirl a saint? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener116} value={la6Essay116}/>
          <br/>
          <span className="days">LESSON 138</span>
          <p>Read Chapters 23 and 24 of Stargirl, pages 91-96. </p>
          <p><i>For the vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. badgered </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What things do Stargirl and Leo do on the weekends? <br/>
            2. How does the shunning affect Leo? <br/>
            3. What accusations are made against Stargirl? <br/>
            4. What makes Leo angry? <br/>
            5. What does Stargirl do that makes <q>pretending impossible</q>?<br/>
            6. How many people sit with Stargirl at lunch now? <br/>
            7. How does Leo react to Stargirl’s sign? <br/>
            8. How do the students of Mica Area High School react to Stargirl’s sign? <br/>
            9. What does Renshaw do in this chapter? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener117} value={la6Essay117}/>
          <br/>
          <span className="days">LESSON 139</span>
          <p>Read Chapters 25 and 26 of Stargirl, pages 96-105.</p>
          <p><i>For the vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. palmetto
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. Why does Leo avoid Stargirl? <br/>
            2. Does anyone talk to Stargirl? <br/>
            3. What does Leo want Stargirl to do? <br/>
            4. Is Leo correct in his belief of <q>what jails and mental hospitals are for</q>?<br/>
            5. What is your opinion of the end of this chapter? <br/>
            6. What is Susan like? <br/>
            7. How does Leo react to Susan? <br/>
            8. Is it true that nobody eats anchovies? <br/>
            9. How does Susan choose which clothing to buy? <br/>
            10. Who is Evelyn Everybody? <br/>
            11. Why is Susan sad for herself? <br/>
            12. How many stones are in Susan’s happy wagon? <br/>
            13. Is Stargirl still present in Susan? <br/>
            14. What is the importance to Susan of winning the state oratorical contest? <br/>
            15. What is Susan’s main goal in life? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener118} value={la6Essay118}/>
          <br/>
          <span className="days">LESSON 140</span>
          <p>Read Chapters 27 and 28 of Stargirl, pages 105-114.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. manikins<br/>
            2. sprightly<br/>
            3. pirouette<br/>
            4. titters<br/>
            5. subsided<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. Why is Dori Dilson mad at Susan/Stargirl? <br/>
            2. When Susan/Stargirl is away from Mica Area High School, is she more like Susan or like
            Stargirl?<br/>
            3. Is Susan/Stargirl confident that she will win the state oratorical contest? <br/>
            4. What does Susan think will happen when she returns to Mica Area High School, as
            winner of the state oratorical contest? <br/>
            5. What does Mr. McShane mean when he asks, <q>Susan, did you ever hear of counting your
              chickens [before they hatch]?</q><br/>
            6. What does Susan/Stargirl do when they stop for a moment in the desert? <br/>
            7. This novel pays attention to dead things: fossils, decaying cacti, extinct birds. Why? <br/>
            8. Does Susan have any good points? <br/>
            9. At the state oratorical contest, is Susan/Stargirl acting more like Stargirl or like
            Susan? <br/>
            10. How does Stargirl’s speech <q>I Thought I Heard a Moa</q> go over at the state oratorical
            contest? <br/>
            11. How many people from Mica witness Stargirl’s speeches? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener119} value={la6Essay119}/>
          <br/>
          <span className="days">LESSON 141</span>
          <p>Read Chapters 29 and 30 of Stargirl, pages 114-120.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. vacantly<br/>
            2. infinite<br/>
            3. disparaged<br/>
            4. flamenco<br/>
            5. castanets<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. Stargirl wins the state oratorical contest. Why? <br/>
            2. Is Stargirl popular at the state oratorical contest? <br/>
            3. How does Susan/Stargirl feel after the state oratorical contest, while she is still in
            Phoenix?
            <br/>
            4. Are people in Mica aware of Susan’s/Stargirl’s accomplishment? <br/>
            5. What happens when Susan returns to Mica Area High School? Who greets her? <br/>
            6. How do Susan’s/Stargirl’s parents react to the very few people greeting Susan/Stargirl? <br/>
            7. How does Susan react to the very few people greeting Susan/Stargirl? <br/>
            8. What happens to Susan? What happens to Stargirl? <br/>
            9. Who supports Stargirl? <br/>
            10. Does Leo support Stargirl? <br/>
            11. Why does Stargirl give up on being <q>popular and normal</q>?<br/>
            12. Why does Stargirl say to Leo, <q>I know you’re not going to ask me to the Ocotillo Ball. It’s
              okay</q>?<br/>
            13. Is Leo a needy soul? <br/>
            14. Who wants to be a member of the musical group the Ukee Dooks? <br/>
            15. Why does Kevin think it is <q>now okay to say bad things about Stargirl</q>?<br/>
            16. Why aren’t the after-school performances of the Ukee Dooks magical times? <br/>
            17. Who is braver: Leo or Dori Dilson? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener120} value={la6Essay120}/>
          <br/>
          <span className="days">LESSON 142</span>
          <p>Read Chapters 31 and 32 of Stargirl, pages 120-130.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. festooned<br/>
            2. Cantonese
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. How does Leo answer Señor Saguaro’s question: Whose affection do you value more, hers or the
            others? <br/>
            2. Why does Leo reject Stargirl? <br/>
            3. How popular is Wayne Parr? <br/>
            4. Why doesn’t Leo go to the Ocotillo Ball? <br/>
            5. What does Leo miss by not going to the Ocotillo Ball? <br/>
            6. What happens when some students — not all — open themselves up to Stargirl? <br/>
            7. Is Raymond Studemacher braver than Leo? <br/>
            8. Are Guy Greco and the Serenaders more open to Stargirl than Leo? <br/>
            9. How does Hillari Kimble react to the Bunny Hop? <br/>
            10. What kind of an exit does Stargirl make? <br/>
            11. Does Glendale win the state basketball tournament? <br/>
            12. What time is it now? How many years have passed since the Bunny Hop? <br/>
            13. Where did Stargirl go after she left Mica, Arizona? <br/>
            14. Do star people exist real life? Explain.<br/>
            15. What happens to Stargirl’s scrapbook about the life of Peter Sinkowitz? <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener121} value={la6Essay121}/>
          <br/>
          <span className="days">LESSON 143</span>
          <p>Read Chapter 33 of Stargirl, pages 130-133.</p>
          <p><i>For each vocabulary word below, write the definition and then write a sentence using the
            word. </i><br/>
            1. baffle <br/>
            2. resurface<br/>
          </p>
          <p><i>After you complete the reading, answer the questions below:</i><br/>
            1. What kind of work does Leo do? <br/>
            2. What are the things that Archie says about Stargirl? <br/>
            3. Why does Archie bury the skull of Barney, the Paleocene rodent? <br/>
            4. What is written on the scrap of paper that Archie buries with the skull of Barney? <br/>
            5. What changes occur in Mica over the years? <br/>
            6. What happens to Kevin, Hillari Kimble, and Wayne Parr? <br/>
            7. What do people talk about at school reunions? <br/>
            8. In what ways does Stargirl still affect Mica Area High School? <br/>
            9. In what ways does Stargirl still affect Leo? <br/>
            10. What did you think about the ending? <br/>
            11. Do you think Leo could become a better person? Explain. <br/>
            12. Is Stargirl ordinary or extraordinary? Explain your answer.</p> <br/>
          <textarea className="textArea" onChange={onChangeLA6Listener122} value={la6Essay122}/>
          <br/>
          <span className="days">LESSON 144 - Persuasive Essay</span>
          <p>After being homeschooled for most of her life, Stargirl enters the 10th grade with a
            big splash. At first everyone at the school thinks she is amazing. She is different from anyone they have ever met. She has
            a pet rat, plays the ukelele, and doesn't conform to be like everyone else. Leo falls in love with her. </p>
          <p className="topBottom">Then, everyone turns on Stargirl. Suddenly, everything that once made her special now makes her an outcast. She knows
            that Leo sees himself as part of the group. He needs to fit in and needs her to fit in as well. So Stargirl
            changes her personality and her appearance to try to make him happy.</p>
          <p>In a 5 paragraph Persuasive Essay, answer the following question:</p>
          <p><strong>Should Stargirl have changed to try to fit it and become popular?</strong></p>
          <p>Think about the question and form a clear opinion about it. Watch the video and read
            the outline below. Then write a persuasive essay that supports your opinion. Be sure to use examples from
            the book.</p>
          <Video videoUrl="https://www.youtube.com/embed/5uSJEiNZ1rE"/>
          <p>Your five paragraph essay should follow the format below: </p>
          <ul className="assnList">
            <li><strong>Title</strong></li>
            <li><strong>Introduction paragraph: </strong>Write a hook to grab your reader's attention. Your first
              paragraph should have a clear thesis statement (main idea of your essay). This
              statement should convey the points or arguments you are going to
              make. It is a road map for your essay and should answer the question, "What
              is this paper about?" The final sentence for this paragraph should smoothly transition to the next
              paragraph.
            </li>
            <li><strong>Body:</strong> Paragraphs 2-4 should provide examples from the book that support your thesis
              statement. Each
              paragraph should discuss a different point and use different examples, explanations and support. Using
              direct quotes from the novel can be effective. Try to think of an argument someone might use against you
              and
              address this in a paragraph.
            </li>
            <li><strong>Conclusion:</strong> Your conclusion should restate your thesis in a different way. End with a
              thoughtful
              summary of what you covered.
            </li>
            <li>Each paragraph should be 3-5 sentences.</li>
          </ul>
          <p><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea"
                    placeholder="Write your essay here.  Be sure to back up your work. Copy/paste it into another document or email it to your parent or teacher."
                    onChange={onChangeLA6Listener123} value={la6Essay123}/>
          <br/>
          <span className="days">LESSON 145 - Personal Narrative</span>
          <p>Most people believe we are molded by our environment. Like Stargirl, we are
            influenced by the people we meet and changed by the experiences we have.</p>

          <p>Write a personal narrative based on one of the following:<br/>
            (1) A past <i>experience </i> you feel influenced you to be the person you are today.<br/>

            (2) A <i>person </i> you feel influenced you to be the person you are today.</p>
          <p>Your personal narrative should be 5 paragraphs long and follow the following
            format:<br/>
            <ul className="assnList">
              <li><strong>Title</strong></li>
              <li><strong>Introduction paragraph: </strong>Write a hook to grab your reader's attention. Your first
                paragraph should have a clear thesis or main idea. It should answer the question, "What
                is this essay about?" If you are writing about an experience, you should concisely state 3 ways the
                experience changed and/or shaped you and how it did this.
              </li>
              <li><strong>Body:</strong> Paragraphs 2-4 should provide examples to support your thesis
                statement. Each of these three paragraphs should elaborate on the three points you said you were going
                to cover in your introduction paragraph - the ways an experience (or a person) shaped you.
              </li>
              <li><strong>Conclusion: </strong>Your conclusion should restate your thesis in a different way. End with a
                thoughtful
                summary.
              </li>
              <li>Each paragraph should be 3-5 sentences.</li>
            </ul>
          </p>
          <p><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>

          <textarea className="textArea" onChange={onChangeLA6Listener124} value={la6Essay124}/>
          <br/>
          <span className="days">LESSON 146 - Book Review</span>
          <h4>Write a book review for Stargirl.</h4>
          <ul className="assnList">
            <li>Your book review should be four to five paragraphs.</li>
            <li>Begin with a brief summary of the novel that introduces the main character, the main
              conflict and the question the novel tries to answer.
            </li>
            <li>Then, give an overview of how you liked the novel. Discuss what you didn't enjoy, followed
              by the aspects you liked most and why.
            </li>
            <li>Include at least one excerpt or direct quote from the novel that will give your readers a
              feel for the novel and the author's writing style.
            </li>
            <li>Conclude with a summary of your recommendation. The video below can help you get started.</li>
          </ul>
          <Video videoUrl="https://www.youtube.com/embed/0t78opcFHAM"/>
          <textarea className="textArea" onChange={onChangeLA6Listener125} value={la6Essay125}/>
          <br/>
          <span className="days">LESSON 147</span>
          <p>Create a new book cover design for <i> Stargirl</i>. <br/>
            A book cover often helps a person decide if he or she will buy a book. Think about the impression you
            want the images, colors and text to create for readers. Create a cover for <i> Stargirl </i> that gives
            viewers a glimpse of the content and mood of the book. You can use whatever
            medium
            you choose: collage, paper and markers, or <a href="https://www.canva.com/create/book-covers/"
                                                          rel="noreferrer"
                                                          target="_blank"> Canva's online book cover creation
              tool. </a>You
            choose how you want to design it.</p>
          <img src={require("../../public/images/bookCovers/bookcover.jpg")}
               alt="The Old Man and the Sea creative book cover"/><br/>
          <p> Your cover (or jacket) should include:<br/>
            1. A clear title and the author's name. <br/>
            2. A graphic design that reflects the book's theme. <br/>
            3. A summary of the plot without giving away the ending. <br/>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener126} value={la6Essay126}/>
          <br/>
          <span className="days">LESSON 148 - Expository Writing</span>
          <p>An expository essay explains or describes a topic by presenting only facts,
            statistics, and examples. It is meant to be informative versus persuasive or entertaining. Expository
            writing can be a description,
            sequence, comparison, cause and effect or problem and solution.</p>
          <p>Write a 5 paragraph expository essay based on <strong>one </strong>of the prompts below:<br/>
            <ul className="list"><strong>Description:</strong> describe a topic by listing characteristics, features,
              and examples. Do not give opinions or try to persuade the reader.<br/>
              <li>Describe your neighborhood to someone house shopping in your area.</li>
              <li>Describe your favorite, sport, book, movie or TV show.</li>
              <li>Describe your best memory.</li>
              <li>Describe your pet.</li>
            </ul>
            <ul className="list"><strong>Sequence: </strong> list items or events in numerical or chronological order.
              First, second, third; next; then; finally<br/>
              <li>Describe your process for getting ready in the morning.</li>
              <li>The steps in cooking your favorite meal or baking your favorite dessert.</li>
              <li>Describe the sequence of eventsin your favorite movie or book.</li>
            </ul>
            <ul className="list"><strong>Comparison:</strong> explain how two or more things/people/places are alike
              and/or how they are different.<br/>
              <li>Compare and contrast two cities you have been to.</li>
              <li>Compare and contrast the characters Katniss and Stargirl.</li>
              <li>Compare and contrast two different restaurants.</li>
              <li>Compare cats to dogs.</li>
            </ul>

            <ul className="list"><strong>Cause and Effect: </strong>list one or more causes and the resulting effect or
              effects.<br/>
              <li>Discuss the causes and effects of bullying.</li>
              <li>Discuss the causes and effects of not getting a good education.</li>
              <li>Discuss the causes and effects of eating well and exercising.</li>
              <li>Discuss the causes and effects of someone not being a good friend.</li>
            </ul>

            <ul className="list"><strong>Problem and Solution: </strong>state a problem and list one or more solutions
              for the
              problem.<br/>
              <li>Animal abuse and neglect is a problem. What are solutions?</li>
              <li>Pressures of materialism is a problem people face. What are solutions?</li>
              <li>Is there a problem your generation is facing now? What is it and what is a solution/solutions?</li>
              <li>Is there a problem your generation will have to face in the future? What are solutions?</li>
            </ul>
          </p>
          <textarea className="textArea" onChange={onChangeLA6Listener127} value={la6Essay127}/>

          <span className="days" style={{ color: "#4f5979", fontSize: "130%" }}>WRITING STORIES </span>
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
              <li>Write the first few lines of your story. Set the scene and introduce your characters:</li>
              <li>Try to grab your readers’ attention in the first paragraph:</li>
              <li>Write the first thing that happens and introduce the conflict:</li>
              <li>Next (build up):</li>
              <li>Finally (resolution):</li>
            </ul>
          </p><br/>
          <span className="days">LESSON 149 - Write a Mystery</span>
          <p>Watch the the videos below and then complete the writing assignment that follows.</p>
          <Video videoUrl="https://www.youtube.com/embed/RSoRzTtwgP4"/>
          <Video videoUrl="https://www.youtube.com/embed/xjKruwAfZWk"/>
          <h4> Write a Mystery</h4>
          <p>Select one of the images below to base your mystery on. Read the title and
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
                <p className="caption">She threw with all her might, but the stone came back once again, landing at
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
                  face you saw was your own. </p>
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
          <p>You can use the <a href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to get started.</p>
          <textarea className="textArea" onChange={onChangeLA6Listener128} value={la6Essay128}/>
          <br/>
          <span className="days">LESSON 150</span>
          <p>After you watch the video <strong> How to build a fictional world, </strong> you will write a fantasy
            story.</p>
          <Video videoUrl="https://www.youtube.com/embed/ZQTQSbjecLg"/>
          <p><strong>Fantasy </strong> is a genre that has magical and
            supernatural elements. Many novels have a real-world setting, like Twilight, while other novels are set
            in an imaginary world. This genre has no connection to reality or science. For example, Lord of the
            Rings is set in Middle Earth, with races and creatures the author created.
            There are numerous subgenres of fantasy fiction. A few include high or epic fantasy (Lord of the Rings),
            low fantasy (Indian in the Cupboard), dark fantasy (Twilight), contemporary fantasy (Harry Potter),
            sword and sorcery (The Sorcerer's Apprentice), fables (The Alchemist), fairy
            tales (Cinderella), and superhero fiction (Spiderman). </p>
          <p>Select one of the images below as your book cover and then write a fantasy story
            based on the image. What story unfolds in your imagination when you look at the image? Write your
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
          <textarea className="textArea" onChange={onChangeLA6Listener129} value={la6Essay129}/>

          <span className="days">LESSON 151</span>
          <p>Watch the video <strong> The importance of setting in a story</strong> and then complete the writing
            assignment that follows.</p>
          <Video videoUrl="https://www.youtube.com/embed/30CPmgVQNks"/>
          <Video videoUrl="https://www.youtube.com/embed/6a6kbU88wu0"/>
          <p><strong>Dystopian fiction</strong> describes a fictional place where things have gone
            horribly wrong and life is terrible. The characters suffer oppression, terror or deprivation. Dystopian
            fiction includes novels like<i> The Hunger Games, The Giver, Divergent, and The Handmaid's Tale.</i></p>
          <p>Select one of the images below as your book cover. Then write a dystopian story
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
          <textarea className="textArea" onChange={onChangeLA6Listener130} value={la6Essay130}/>
          <br/>
          <span className="days">LESSON 152</span>
          <h4>Write a BIOGRAPHY of someone who inspires you.</h4>
          <p> If you don't have anyone in mind, there is a list below of a few inspirational
            people. Take plenty of notes when you research this person's life and accomplishments.</p>
          <Video videoUrl="https://www.youtube.com/embed/q7abluGwup8"/>
          <p>You can use the <a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
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
          <textarea className="textArea" onChange={onChangeLA6Listener132} value={la6Essay132}/>

          <span className="days">LESSON 153</span>
          <p><strong>Science Fiction</strong><br/>
            Science fiction themes include futuristic stories, space travel, time travel, and life on other planets.
            They imagine how life would be different with technological and scientific advances. Science fiction
            includes novels like<i> Ready Player One, Mad Max and The Martian.</i></p>
          <p>Select one of the images below to base your own science fiction story on.
            After you watch the video below, <strong> The power of a great introduction</strong>, write your story in the textbox. Be sure to back up your work and send a copy to your parent or teacher. If you prefer to write a story not based on an image, this is fine. </p>
          <p className="topBottom">You can use the <a
            href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to get started.</p>    <div className="rowimages">
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
          <textarea className="textArea" onChange={onChangeLA6Listener133} value={la6Essay133}/>
          <br/>
          <span className="days">LESSON 154</span>
          <h4>Non-fiction Science Essay</h4>
          <img src={require("../../public/images/stories/science.jpg")} alt="The Giver novel"/><br/>
          <p>Write a five paragraph essay based on ONE of the questions below.
            <ol className="vocab">
              <li>What do you think is the most important invention of the last 100 years?</li>
              <li>Should we colonize other planets? Why or why not?</li>
              <li>If you could meet one famous inventor, who would it be?</li>
              <li>What is a new invention you would like to create? For inspiration, check out the article <a
                href="https://www.sciencefocus.com/future-technology/future-technology-22-ideas-about-to-change-our-world/"
                rel="noreferrer" target="_blank"> Future technology: 25 ideas about to change our world.</a></li>
              <li>Try to imagine what the world will be like 500 years from now. How is technology likely to change how
                people live?
              </li>
            </ol>
          </p>
          <p>Your essay should follow the format below: </p>
          <ul className="assnList">
            <li>Write a hook to grab your reader's attention.  Your first paragraph should have a clear thesis statement (main idea of your essay). This
              statement should convey the points or arguments you are going to make.
            </li>
            <li>Paragraphs 2-4 should provide examples from the book that support your thesis statement. Each
              paragraph should discuss a different point and use different examples. Using direct
              quotes from the novel can be effective in proving your point.
            </li>
            <li>Your conclusion should restate your thesis in a different way. End with a thoughtful summary.</li>
            <li>Each paragraph should be 3-5 sentences.</li>
          </ul>
          <p><a href={require("../resources/languagearts/FiveParagraphEssayOutline.pdf")}
                rel="noreferrer"
                target="_blank">Click
            here for a 5 Paragraph Essay outline </a>if you need help getting started.</p>
          <textarea className="textArea" onChange={onChangeLA6Listener134} value={la6Essay134}/>

          <span className="days">LESSON 155</span>
          <h4> Write an Adventure Story</h4>
          <p>Stories in the adventure genre involve a hero who goes on an
            exciting journey to some place very different than what he or she is used to. It is
            also usually a journey of personal growth in which the protagonist grows into a hero. These stories are
            usually fast-paced, with elements of danger, obstacles to overcome, and a
            villain to defeat.
          </p>
          <p> Examples include The Adventures of Tom Sawyer, Gulliver's Travels, and Treaure
            Planet.</p>

          <p>Base your adventure on one of the images below. Write your story in the textbox
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
          <textarea className="textArea" onChange={onChangeLA6Listener135} value={la6Essay135}/>

          <span className="days">LESSON 156</span>
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
            personality, physical appearance, strengths, weaknesses, special abilities (optional) and what they
            value.</p>
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
          <p className="topBottom">Complete the assignment below. Your responses can be short bullet points. The main
            point of this assignment is to generate ideas.
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
                medium you choose: pencil sketch, Photoshop, collage, paper and markers, or <a
                  href="https://www.canva.com/create/book-covers/"
                  rel="noreferrer"
                  target="_blank"> Canva's online book cover creation
                  tool. </a>You choose how you want to design it. Your book cover should include a title.
              </li>
            </ol></p>
          <p>Below are examples of book covers.</p>
          <img src={require("../../public/images/bookCovers/bookcover2.jpg")} alt="Book Covers"/><br/>

          <textarea className="textArea" placeholder="Write your responses here." onChange={onChangeLA6Listener136}
                    value={la6Essay136}/>

          <span className="days">LESSON 157</span>
          <h4> Character Development - The Protagonist</h4>
          <p>It's time to fully develop the protagonist for your next story. Address the questions
            below using complete sentences.<br/>
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
              <li>What does your character want or want to achieve?</li>
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
          <textarea className="textArea" onChange={onChangeLA6Listener137} value={la6Essay137}/>
          <br/>
          <span className="days">LESSON 158</span>
          <h4> Character Development - The Antagonist</h4>
          <p>Create the villain your protagonist will have to fight. <br/>
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
          <textarea className="textArea" onChange={onChangeLA6Listener138} value={la6Essay138}/>
          <br/>
          <span className="days">LESSON 159</span>
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
            </ul>
            <br/> Write your story in the textbox below. Be sure to back up your work.
          </p>
          <p>You can use the <a
            href={require("../resources/languagearts/StoryOutlineWorksheet.pdf")} rel="noreferrer" target="_blank">Story
            Outline Worksheet</a> to help you get started.</p>
          <textarea className="textArea" onChange={onChangeLA6Listener139} value={la6Essay139}/>

          <h4> Vocabulary and Reading</h4>
          <p>If you don't already have one, <a
            href="https://support.khanacademy.org/hc/en-us/articles/204451324-How-do-I-create-my-account-"
            rel="noreferrer" target="_blank"> set up a free account on Khan Academy </a> and then begin the lesson
            below.</p><br/>

          <span className="days">Lesson 160</span> <ToggleSwitch checked={selectedLA160}
                                                                 id='la6-160'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-160", `${e.target.checked}`)
                                                                     setSelectedLA160(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. Your work will be saved in Khan Academy's
            website.<br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:building-knowledge/a/welcome-to-the-banning-behavior-unit"
              rel="noreferrer" target="_blank"> Building knowledge: Banning Behavior
            </a>
            <ul className='assnList'>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:building-knowledge/a/welcome-to-the-banning-behavior-unit"
                rel="noreferrer" target="_blank"> Welcome to the Banning Behavior unit!</a></li>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:building-knowledge/a/banning-behavior-unit-vocabulary"
                rel="noreferrer" target="_blank"> Banning Behavior: unit vocabulary</a></li>
            </ul>
            <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/making-inferences-in-informational-texts-reading-khan-academy"
              rel="noreferrer" target="_blank"> Close reading: informational text: Banning Behavior
            </a>
            <ul className='assnList'>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/making-inferences-in-informational-texts-reading-khan-academy"
                rel="noreferrer" target="_blank"> Making inferences in informational texts | Reading</a></li>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/creating-objective-summaries-reading-khan-academy"
                rel="noreferrer" target="_blank">Creating objective summaries | Reading</a></li>
            </ul>
          </p>


          <span className="days">Lesson 161</span> <ToggleSwitch checked={selectedLA161}
                                                                 id='la6-161'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-161", `${e.target.checked}`)
                                                                     setSelectedLA161(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/>
            <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/making-inferences-in-informational-texts-reading-khan-academy"
              rel="noreferrer" target="_blank"> Close reading: informational text: Banning Behavior
            </a>
            <ul className='assnList'>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/two-or-more-main-ideas-reading"
                rel="noreferrer" target="_blank">How can a text have two or more main ideas? | Reading</a></li>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/v/using-examples-reading"
                rel="noreferrer" target="_blank"> How do writers use examples to get their points across?| Reading</a>
              </li>
              <li><a
                href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading/e/banning-behavior--reading-informational-text--are-we-a-nation-of-addicts--6"
                rel="noreferrer" target="_blank">Practice: Banning Behavior: reading informational text; Are We a Nation
                of Addicts? 6</a></li>
            </ul>
          </p>


          <span className="days">Lesson 162</span> <ToggleSwitch checked={selectedLA162}
                                                                 id='la6-162'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-162", `${e.target.checked}`)
                                                                     setSelectedLA162(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:close-reading-argumentative-text/v/the-structures-of-informational-texts-reading"
              rel="noreferrer" target="_blank"> Close reading: argumentative text: Banning Behavior </a>
            <ul className='assnList'>
              <li>The structures of informational texts | Reading</li>
              <li>Analyzing an author's purpose | Reading</li>
              <li>What is an argument? | Reading</li>
              <li>Quantitative information in texts | Reading</li>
              <li>Practice: Banning Behavior: reading argumentative text; Soda Tax 6</li>
            </ul>
          </p>


          <span className="days">Lesson 163</span> <ToggleSwitch checked={selectedLA163}
                                                                 id='la6-163'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-163", `${e.target.checked}`)
                                                                     setSelectedLA163(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:applying-knowledge/v/using-context-clues-to-figure-out-new-words-reading"
              rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Banning Behavior</a>
            <ul className='assnList'>
              <li>Using context clues to figure out new words | Reading</li>
              <li>Figurative language | Reading</li>
              <li>Analyzing tone through word choice | Reading</li>
              <li>Connotation | Reading</li>
              <li>Practice: Banning Behavior: vocabulary; Are We a Nation of Addicts? 6</li>
            </ul>
          </p>


          <span className="days">Lesson 164</span> <ToggleSwitch checked={selectedLA164}
                                                                 id='la6-164'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-164", `${e.target.checked}`)
                                                                     setSelectedLA164(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:reading-for-understanding/v/making-inferences-in-literary-texts-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: fiction: Banning Behavior</a>
            <ul className='assnList'>
              <li>Making inferences in literary texts | Reading</li>
              <li>Character change | Reading</li>
              <li>The elements of a story | Reading</li>
              <li>Practice: Banning Behavior: reading creative fiction; Inscribing Rebellion 6</li>
            </ul>
          </p>


          <span className="days">Lesson 165</span> <ToggleSwitch checked={selectedLA165}
                                                                 id='la6-165'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-165", `${e.target.checked}`)
                                                                     setSelectedLA165(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>

          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-banning-behavior/x8c8165c7dcd5e900:reading-for-understanding-drama/v/the-elements-of-a-drama-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: drama: Banning Behavior</a>
            <ul className='assnList'>
              <li>The elements of a drama | Reading</li>
              <li>How POV affects readers | Reading</li>
              <li>Different mediums and the tone of the text</li>
              <li>Practice: Banning Behavior: reading drama; Hands Off My Phone!</li>
            </ul>
          </p>


          <span className="days">Lesson 166</span> <ToggleSwitch checked={selectedLA166}
                                                                 id='la6-166'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-166", `${e.target.checked}`)
                                                                     setSelectedLA166(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:untitled-51/a/welcome-to-the-identity-unit"
              rel="noreferrer" target="_blank"> Building knowledge: Identity</a>
            <ul className='assnList'>
              <li>Welcome to the Identity unit!</li>
              <li>Identity: unit vocabulary</li>
            </ul>
            <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:untitled-52/v/creating-objective-summaries-reading-khan-academy"
              rel="noreferrer" target="_blank"> Close reading: informational text: Identity </a>
            <ul className='assnList'>
              <li>Creating objective summaries | Reading</li>
              <li>How can a text have two or more main ideas? | Reading</li>
              <li>How do writers use examples to get their points across? | Reading</li>
              <li>Analyzing an author's purpose | Reading</li>
              <li>Practice: Identity: reading informational text; Marley Dias 6</li>
            </ul>
          </p>

          <span className="days">Lesson 167</span> <ToggleSwitch checked={selectedLA167}
                                                                 id='la6-167'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-167", `${e.target.checked}`)
                                                                     setSelectedLA167(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:close-reading-fiction/v/figurative-language-reading"
              rel="noreferrer" target="_blank"> Close reading: fiction: Identity</a>
            <ul className='assnList'>
              <li>Figurative language | Reading</li>
              <li>How POV affects readers | Reading</li>
              <li>Different mediums and the tone of the text</li>
              <li>Practice: Identity: reading realistic fiction; Oscar's Musical Odyssey 6</li>
            </ul>
          </p>


          <span className="days">Lesson 168</span> <ToggleSwitch checked={selectedLA168}
                                                                 id='la6-168'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-168", `${e.target.checked}`)
                                                                     setSelectedLA168(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:untitled-53/v/using-context-clues-to-figure-out-new-words-reading"
              rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Identity</a>
            <ul className='assnList'>
              <li>Using context clues to figure out new words | Reading</li>
              <li>Connotation | Reading</li>
              <li>Practice: Identity: vocabulary; Marley Dias 6</li>
            </ul>
          </p>


          <span className="days">Lesson 169</span> <ToggleSwitch checked={selectedLA169}
                                                                 id='la6-169'
                                                                 label='Completed'
                                                                 onChange={
                                                                   (e) => {
                                                                     localStorage.setItem("la6-169", `${e.target.checked}`)
                                                                     setSelectedLA169(e.target.checked)
                                                                     console.log(e.target.checked)
                                                                   }
                                                                 }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:reading-for-understanding-fiction/v/making-inferences-in-literary-texts-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: fiction: Identity</a>
            <ul className='assnList'>
              <li>Making inferences in literary texts | Reading</li>
              <li>Character change | Reading</li>
              <li>The elements of a story | Reading</li>
              <li>Practice: Identity: reading creative fiction; The Assignment 6</li>
            </ul>
          </p>


          <span className="days">LESSON 170</span> <ToggleSwitch
          checked={selectedLA170}
          id='la6-170'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-170", `${e.target.checked}`)
              setSelectedLA170(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-identity/x8c8165c7dcd5e900:untitled-84/v/the-elements-of-a-drama-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: drama: Identity</a>
            <ul className='assnList'>
              <li>The elements of a drama | Reading</li>
              <li>Practice: Identity: reading drama; Got Spirit? 6</li>
            </ul>
          </p>


          <span className="days">Lesson 171</span> <ToggleSwitch
          checked={selectedLA171}
          id='la6-171'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-171", `${e.target.checked}`)
              setSelectedLA171(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:untitled-68/a/welcome-to-the-ocean-conservation-unit"
              rel="noreferrer" target="_blank"> Building knowledge: Ocean Conservation </a>
            <ul className='assnList'>
              <li>Welcome to the Ocean Conservation unit!</li>
              <li>Ocean Conservation: unit vocabulary</li>
            </ul>
            <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:close-reading-informational-text/v/creating-objective-summaries-reading-khan-academy"
              rel="noreferrer" target="_blank"> Close reading: informational text: Ocean Conservation</a>
            <ul className='assnList'>
              <li>Creating objective summaries | Reading</li>
              <li>Part-to-whole relationships in text structure | Reading</li>
              <li>Analyzing an author's purpose | Reading</li>
              <li>What is an argument? | Reading</li>
              <li>Practice: Ocean Conservation: reading informational text; Our Oceans, Our Planet 6</li>
            </ul>
          </p>


          <span className="days">Lesson 172</span> <ToggleSwitch
          checked={selectedLA172}
          id='la6-172'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-172", `${e.target.checked}`)
              setSelectedLA172(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:close-reading-poetry/v/developing-themes-reading"
              rel="noreferrer" target="_blank"> Close reading: poetry: Ocean Conservation</a>
            <ul className='assnList'>
              <li>Developing themes | Reading</li>
              <li>The elements of a poem | Reading</li>
              <li>Analyzing tone through word choice | Reading</li>
              <li>Reading within and across genres | Reading</li>
              <li>Practice: Ocean Conservation: reading poetry, The World Below the Brine 6</li>
            </ul>
          </p>


          <span className="days">Lesson 173</span> <ToggleSwitch
          checked={selectedLA173}
          id='la6-173'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-173", `${e.target.checked}`)
              setSelectedLA173(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:applying-vocabulary-knowledge/v/using-context-clues-to-figure-out-new-words-reading"
              rel="noreferrer" target="_blank"> Applying vocabulary knowledge: Ocean Conservation</a>
            <ul className='assnList'>
              <li>Using context clues to figure out new words | Reading</li>
              <li>Latin and Greek roots and affixes | Reading</li>
              <li>Figurative language | Reading</li>
              <li>Connotation | Reading</li>
              <li>Practice: Ocean Conservation: vocabulary; Our Oceans, Our Planet 6</li>
            </ul>
          </p>
          <span className="days">Lesson 174</span> <ToggleSwitch
          checked={selectedLA174}
          id='la6-174'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-174", `${e.target.checked}`)
              setSelectedLA174(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:reading-for-understanding-informational-text-boyan-slat/v/two-or-more-main-ideas-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: informational text; Boyan Slat: Ocean
              Conservation</a>
            <ul className='assnList'>
              <li>How can a text have two or more main ideas? | Reading</li>
              <li>How do writers use examples to get their points across? | Reading</li>
              <li>Reading more than one source on a topic | Reading</li>
              <li>Practice: Ocean Conservation: reading informational text; Boyan Slat and Plastic Pollution 6</li>
            </ul>
          </p>


          <span className="days">Lesson 175</span> <ToggleSwitch
          checked={selectedLA175}
          id='la6-1753'
          label='Completed'
          onChange={
            (e) => {
              localStorage.setItem("la6-175", `${e.target.checked}`)
              setSelectedLA175(e.target.checked)
              console.log(e.target.checked)
            }
          }/>
          <p className="margin-para"> Complete all assignments listed below for this unit (readings, videos and
            practice). Check the "Completed" box above when you finish. <br/> <a
              href="https://www.khanacademy.org/ela/cc-6th-reading-vocab/x8c8165c7dcd5e900:cc-6th-ocean-conservation/x8c8165c7dcd5e900:reading-for-understanding-informational-text/v/part-to-whole-relationships-in-text-structure-reading"
              rel="noreferrer" target="_blank"> Reading for understanding: informational text</a>
            <ul className='assnList'>
              <li>Part-to-whole relationships in text structure | Reading</li>
              <li>Practice: Ocean Conservation: reading informational text; The Underwater Sea Train 6</li>
            </ul>
          </p>

          <span className="days">LESSON 176 </span>
          <h4> What makes a poem … a poem?</h4>
          <p className="topBottom">What exactly makes a poem … a poem? Poets themselves have struggled with this
            question, often using
            metaphors to approximate a definition. Is a poem a little machine? A firework? An echo? A dream? </p>
          <p> What makes a poem a poem is its ability to make the reader feel something. It may rhyme, but doesn’t have
            to. Using few words, it creates a picture in the reader's mind and transports them to another place and
            time. </p>
          <Video videoUrl="https://www.youtube.com/embed/JwhouCNq-Fc"/>
          <ol className="vocab">
            <li> What are characteristics traditionally associated with poetry?</li>
            <li> In what way was Joanna Smith’s tweet like a poem?</li>
            <li> The word poetry comes from the Greek “poiesis.” What does this word mean?</li>
            <li> What is a haiku?</li>
            <li> What does Reinhard Dohl’s “Apfel” have in common with e.e. cummings’ “l(a)”?</li>
            <li> What does the Dartmouth study mentioned in the video suggest about the nature of poetry? Were you
              surprised by the results of the study?
            </li>
            <li> William Carlos Williams described poetry as a machine made of words. Lilian Moore described poetry as a
              firework. After watching the video, think of another metaphor that represents poetry well.
            </li>
            <li> Find an example from a novel or short story that reads like poetry. What makes it sound poetic? You may
              use the internet to help you research this.
            </li>
          </ol>
          <textarea className="textArea" onChange={onChangela6Listener141} value={la6Essay141}/>

          <span className="days">LESSON 177 </span>
          <h4>Before I Got My Eye Put Out - The Poetry of Emily Dickinson</h4>
          <Video videoUrl="https://www.youtube.com/embed/R4WwhOdk_Eg"/>
          <img src={require("../../public/images/poems/hope.jpg")} alt="Poem"/>
          <Video videoUrl="https:www.youtube.com/embed/j3VWZJmuvhg"/>
          <img src={require("../../public/images/poems/imNobody.jpg")} alt="Poem"/>

          <Video videoUrl="https://www.youtube.com/embed/55kqNg88JqI"/>
          <Video videoUrl="https://www.youtube.com/embed/BLeMZ5WIdrI"/>
          <ol className="vocab">
            <li> Based on the Crash Course video: Dickinson often makes references to "eyes" and "sight". What do these
              references most likely symbolize.
            </li>
            <li> Why do you think Dickinson only wore white?</li>
            <li> Name two stylistic choices that Dickinson makes when she wants to avoid closure in her poetry.</li>
            <li> Emily Dickinson's personal life receives as much attention, or even more attention, than her poetry.
              Why do you think this is so?
            </li>
            <li> To what extent was Emily Dickinson the eccentric recluse she is often portrayed as being?</li>
            <li> Describe some of the reasons that Dickinson did not gain fame as a poet during her lifetime.</li>
            <li> What did you think of the poem "Hope" is the Thing with Feathers? If you had to summarize it for
              someone who has never read it, what wouduld you say?
            </li>
            <li> In the poem "Hope" what do you think these lines mean: <i>Yet - never - in Extremity, It asked a crumb
              - of me. </i></li>
            <li> "I’m nobody – who are you?" is an invitation to loneliness. How does this poem invite the reader
              into a kind of shared strangeness? Do you feel separated
              or connected by the language?
            </li>
            <li> Does Dickinson seem to be writing for other people or only for herself?</li>
            <li> Which Emily Dickinson poem is your favorite? Explain why.</li>
            <li> Based on the poem you chose, what is the imagery in the poem?</li>
            <li> What is the mood of the poem? How does it make you feel?</li>
            <li> What is the message of the poem?</li>
            <li> Which parts of it are lingering in your mind?</li>
          </ol>


          <textarea className="textArea" onChange={onChangela6Listener142} value={la6Essay142}/>

          <span className="days">LESSON 178 </span>
          <h4>Thinking Like a Poet</h4>
          <p>The following exercise is from Steve Bowkett’s <i>Countdown to Poetry.</i> Take a few moments to study the
            image below.</p>
          <p><img src={require("../../public/images/poems/wolves.jpg")} alt="black and white of wolves"/><br/><br/>
            <ol className="vocab">
              <li> What are four things that you find the most intriguing or captivating about this image?</li>
              <li> Close your eyes and imagine the picture is in color. Describe what you see and describe the colors in
                detail.
              </li>
              <li> Now focus on the sound and imagine what sounds you can hear.</li>
              <li> Now imagine you can step into the picture. Describe what it is like. Is there a breeze? Do you smell
                anything? What do things feel like? Is it warm or cold? What do you see when you turn around? IS there
                anything surprising there that isn’t in the picture?
              </li>
              <li> If this picture could tell a story, what is the story about? What will about to happen next?</li>
              <li> Describe this picture in 12 words or less. Twelve is not many words so choose each one carefully.
              </li>
            </ol>
          </p>
          <textarea className="textArea" onChange={onChangela6Listener143} value={la6Essay143}/>

          <span className="days">LESSON 179 </span>
          <h4>How do you read a poem? </h4>
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
          <p> William Butler Yeats is considered one of the greatest poets of the 1900’s.
            <h4><i>The Second Coming</i> by William Butler Yeats</h4>
            <Video videoUrl="https://www.youtube.com/embed/IY2oIsA4c7k"/>
            <h4>Analysis of William Butler Yeats's "The Second Coming"</h4>
            <Video videoUrl="https://www.youtube.com/embed/1S8WWWHl3JE"/>
            <h4><i> Ode to the Only Black Kid in the Class</i> poem by Clint Smith</h4>
            <Video videoUrl="https://www.youtube.com/embed/OGoehR_k0Xk"/>
            <ol className="vocab">
              <li><i>Based on Summer’s Day: </i> Select one line that you enjoyed the most or was the most meaningful to
                you. Explain why you chose this line.
              </li>
              <li> Describe how the writer uses imagery throughout the poem. Give an example that you think was her best
                use of imagery.
              </li>
              <li> What was the writer’s purpose with the poem? Do you think she achieved her purpose? Why or why not.
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
          </p>
          <textarea className="textArea" onChange={onChangela6Listener144} value={la6Essay144}/>

          <span className="days">LESSON 180 </span>
          <h4>How to Write a Poem</h4>
          <p>This lesson is a segment from <a
            href="https://www.hmhco.com/blog/how-to-write-a-poem-with-glenis-redmond?fbclid=IwAR19e-2fVoWsLiBxH2OG1s7yEG7m-kVCuvYlSstk1cGpfs8pfCpx5QECd2I"
            rel="noreferrer" target="_blank"><i>Literacy at Work: How to Write a Poem with Glenis Redmond.</i></a> For
            the full lesson and additional resources, click above. Glenis Redmond is a poet, teaching artist and
            imagination activist. You can view more of her work at <a href="http://www.glenisredmond.com/" rel="noreferrer" target="_blank">her site.</a></p>
          <Video videoUrl="https://www.youtube.com/embed/0w8PLcYP0sU"/>
          <p className="topBottom"> After you watch the video, complete the lists below. Then, use the lists to write
            your Self-Portrait Poem.</p>
          <h4>Write a list that describes your:</h4>
          <ol className="vocab">
            <li>Outer self - how you look (Example: Brown eyes, Mahogany skin, Tomboy, Graceful swagger, Pigtails)
            </li>
            <li>Inner self - feelings and emotions (Example: Joy, Shame, Focused, Popular, Lonely)</li>
            <li>Talents or strengths (Example: Athletic, Graceful, Reader)</li>
            <li>Challenges or things you find difficult (Being alone, Math, Racism)</li>
          </ol>
          <p className="topBottom">This example is from the poet Glenis Redmond </p>
          <h4><i>Self-Portrait: Bard in the Making</i>
          </h4>
          <ul style={{ color: "#4f5979", fontStyle: "italic" }}>
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
          </ul>
          <br/>
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
          <p className="topBottom">It's best if you can create your own poem, but if you want, you can use the sentences
            below as a model.</p>
          <p>
            <ul>
              <li>When I was in _____________________, I looked like _____________________.</li>
              <li>I liked to play _____________________ with _____________________.</li>
              <li>I was happy to _____________________ but felt scared when _____________________.</li>
            </ul>
          </p>


          <textarea className="textArea" onChange={onChangela6Listener145} value={la6Essay145}/>
        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "70vh", width: "100vw" }}>You finished 6th Grade Language Arts!</h3>
    </form>
  )
}

export default LA6Component
