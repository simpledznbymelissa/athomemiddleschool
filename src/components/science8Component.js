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

const Science8Component = ({ data }) => {

  const [sci8Essay1, setSci8Essay1] = useLocalStorageState("sci8Essay1", "")
  const [sci8Essay2, setSci8Essay2] = useLocalStorageState("sci8Essay2", "")
  const [sci8Essay3, setSci8Essay3] = useLocalStorageState("sci8Essay3", "")
  const [sci8Essay4, setSci8Essay4] = useLocalStorageState("sci8Essay4", "")
  const [sci8Essay5, setSci8Essay5] = useLocalStorageState("sci8Essay5", "")
  const [sci8Essay6, setSci8Essay6] = useLocalStorageState("sci8Essay6", "")
  const [sci8Essay7, setSci8Essay7] = useLocalStorageState("sci8Essay7", "")
  const [sci8Essay8, setSci8Essay8] = useLocalStorageState("sci8Essay8", "")
  const [sci8Essay9, setSci8Essay9] = useLocalStorageState("sci8Essay9", "")
  const [sci8Essay10, setSci8Essay10] = useLocalStorageState("sci8Essay10", "")
  const [sci8Essay11, setSci8Essay11] = useLocalStorageState("sci8Essay11", "")
  const [sci8Essay12, setSci8Essay12] = useLocalStorageState("sci8Essay12", "")
  const [sci8Essay13, setSci8Essay13] = useLocalStorageState("sci8Essay13", "")
  const [sci8Essay14, setSci8Essay14] = useLocalStorageState("sci8Essay14", "")
  const [sci8Essay15, setSci8Essay15] = useLocalStorageState("sci8Essay15", "")
  const [sci8Essay16, setSci8Essay16] = useLocalStorageState("sci8Essay16", "")
  const [sci8Essay17, setSci8Essay17] = useLocalStorageState("sci8Essay17", "")
  const [sci8Essay18, setSci8Essay18] = useLocalStorageState("sci8Essay18", "")
  const [sci8Essay19, setSci8Essay19] = useLocalStorageState("sci8Essay19", "")
  const [sci8Essay20, setSci8Essay20] = useLocalStorageState("sci8Essay20", "")
  const [sci8Essay21, setSci8Essay21] = useLocalStorageState("sci8Essay21", "")
  const [sci8Essay22, setSci8Essay22] = useLocalStorageState("sci8Essay22", "")
  const [sci8Essay23, setSci8Essay23] = useLocalStorageState("sci8Essay23", "")
  const [sci8Essay24, setSci8Essay24] = useLocalStorageState("sci8Essay24", "")
  const [sci8Essay25, setSci8Essay25] = useLocalStorageState("sci8Essay25", "")
  const [sci8Essay26, setSci8Essay26] = useLocalStorageState("sci8Essay26", "")
  const [sci8Essay27, setSci8Essay27] = useLocalStorageState("sci8Essay27", "")
  const [sci8Essay28, setSci8Essay28] = useLocalStorageState("sci8Essay28", "")
  const [sci8Essay29, setSci8Essay29] = useLocalStorageState("sci8Essay29", "")
  const [sci8Essay30, setSci8Essay30] = useLocalStorageState("sci8Essay30", "")
  const [sci8Essay31, setSci8Essay31] = useLocalStorageState("sci8Essay31", "")
  const [sci8Essay32, setSci8Essay32] = useLocalStorageState("sci8Essay32", "")
  const [sci8Essay33, setSci8Essay33] = useLocalStorageState("sci8Essay33", "")
  const [sci8Essay34, setSci8Essay34] = useLocalStorageState("sci8Essay34", "")
  const [sci8Essay35, setSci8Essay35] = useLocalStorageState("sci8Essay35", "")
  const [sci8Essay36, setSci8Essay36] = useLocalStorageState("sci8Essay36", "")
  const [sci8Essay37, setSci8Essay37] = useLocalStorageState("sci8Essay37", "")
  const [sci8Essay38, setSci8Essay38] = useLocalStorageState("sci8Essay38", "")
  const [sci8Essay39, setSci8Essay39] = useLocalStorageState("sci8Essay39", "")
  const [sci8Essay40, setSci8Essay40] = useLocalStorageState("sci8Essay40", "")
  const [sci8Essay41, setSci8Essay41] = useLocalStorageState("sci8Essay41", "")
  const [sci8Essay42, setSci8Essay42] = useLocalStorageState("sci8Essay42", "")
  const [sci8Essay43, setSci8Essay43] = useLocalStorageState("sci8Essay43", "")
  const [sci8Essay44, setSci8Essay44] = useLocalStorageState("sci8Essay44", "")
  const [sci8Essay45, setSci8Essay45] = useLocalStorageState("sci8Essay45", "")
  const [sci8Essay46, setSci8Essay46] = useLocalStorageState("sci8Essay46", "")
  const [sci8Essay47, setSci8Essay47] = useLocalStorageState("sci8Essay47", "")
  const [sci8Essay48, setSci8Essay48] = useLocalStorageState("sci8Essay48", "")
  const [sci8Essay49, setSci8Essay49] = useLocalStorageState("sci8Essay49", "")
  const [sci8Essay50, setSci8Essay50] = useLocalStorageState("sci8Essay50", "")
  const [sci8Essay51, setSci8Essay51] = useLocalStorageState("sci8Essay52", "")
  const [sci8Essay52, setSci8Essay52] = useLocalStorageState("sci8Essay53", "")
  const [sci8Essay53, setSci8Essay53] = useLocalStorageState("sci8Essay54", "")
  const [sci8Essay54, setSci8Essay54] = useLocalStorageState("sci8Essay54", "")
  const [sci8Essay55, setSci8Essay55] = useLocalStorageState("sci8Essay5", "")
  const [sci8Essay56, setSci8Essay56] = useLocalStorageState("sci8Essay56", "")
  const [sci8Essay57, setSci8Essay57] = useLocalStorageState("sci8Essay57", "")
  const [sci8Essay58, setSci8Essay58] = useLocalStorageState("sci8Essay58", "")
  const [sci8Essay59, setSci8Essay59] = useLocalStorageState("sci8Essay59", "")
  const [sci8Essay60, setSci8Essay60] = useLocalStorageState("sci8Essay60", "")
  const [sci8Essay61, setSci8Essay61] = useLocalStorageState("sci8Essay61", "")
  const [sci8Essay62, setSci8Essay62] = useLocalStorageState("sci8Essay62", "")
  const [sci8Essay63, setSci8Essay63] = useLocalStorageState("sci8Essay63", "")
  const [sci8Essay64, setSci8Essay64] = useLocalStorageState("sci8Essay64", "")
  const [sci8Essay65, setSci8Essay65] = useLocalStorageState("sci8Essay65", "")
  const [sci8Essay66, setSci8Essay66] = useLocalStorageState("sci8Essay66", "")
  const [sci8Essay67, setSci8Essay67] = useLocalStorageState("sci8Essay67", "")
  const [sci8Essay68, setSci8Essay68] = useLocalStorageState("sci8Essay68", "")
  const [sci8Essay69, setSci8Essay69] = useLocalStorageState("sci8Essay69", "")
  const [sci8Essay70, setSci8Essay70] = useLocalStorageState("sci8Essay70", "")
  const [sci8Essay71, setSci8Essay71] = useLocalStorageState("sci8Essay71", "")
  const [sci8Essay72, setSci8Essay72] = useLocalStorageState("sci8Essay72", "")
  const [sci8Essay73, setSci8Essay73] = useLocalStorageState("sci8Essay73", "")
  const [sci8Essay74, setSci8Essay74] = useLocalStorageState("sci8Essay74", "")
  const [sci8Essay75, setSci8Essay75] = useLocalStorageState("sci8Essay75", "")
  const [sci8Essay76, setSci8Essay76] = useLocalStorageState("sci8Essay76", "")
  const [sci8Essay77, setSci8Essay77] = useLocalStorageState("sci8Essay77", "")
  const [sci8Essay78, setSci8Essay78] = useLocalStorageState("sci8Essay78", "")
  const [sci8Essay79, setSci8Essay79] = useLocalStorageState("sci8Essay79", "")
  const [sci8Essay80, setSci8Essay80] = useLocalStorageState("sci8Essay80", "")
  const [sci8Essay81, setSci8Essay81] = useLocalStorageState("sci8Essay81", "")
  const [sci8Essay82, setSci8Essay82] = useLocalStorageState("sci8Essay82", "")
  const [sci8Essay83, setSci8Essay83] = useLocalStorageState("sci8Essay83", "")
  const [sci8Essay84, setSci8Essay84] = useLocalStorageState("sci8Essay84", "")
  const [sci8Essay85, setSci8Essay85] = useLocalStorageState("sci8Essay85", "")
  const [sci8Essay86, setSci8Essay86] = useLocalStorageState("sci8Essay86", "")
  const [sci8Essay87, setSci8Essay87] = useLocalStorageState("sci8Essay87", "")
  const [sci8Essay88, setSci8Essay88] = useLocalStorageState("sci8Essay88", "")
  const [sci8Essay89, setSci8Essay89] = useLocalStorageState("sci8Essay89", "")
  const [sci8Essay90, setSci8Essay90] = useLocalStorageState("sci8Essay90", "")
  const [sci8Essay91, setSci8Essay91] = useLocalStorageState("sci8Essay91", "")
  const [sci8Essay92, setSci8Essay92] = useLocalStorageState("sci8Essay93", "")
  const [sci8Essay93, setSci8Essay93] = useLocalStorageState("sci8Essay94", "")
  const [sci8Essay94, setSci8Essay94] = useLocalStorageState("sci8Essay95", "")
  const [sci8Essay95, setSci8Essay95] = useLocalStorageState("sci8Essay96", "")
  const [sci8Essay96, setSci8Essay96] = useLocalStorageState("sci8Essay97", "")
  const [sci8Essay97, setSci8Essay97] = useLocalStorageState("sci8Essay98", "")
  const [sci8Essay98, setSci8Essay98] = useLocalStorageState("sci8Essay98", "")
  const [sci8Essay99, setSci8Essay99] = useLocalStorageState("sci8Essay99", "")
  const [sci8Essay100, setSci8Essay100] = useLocalStorageState("sci8Essay100", "")
  const [sci8Essay101, setSci8Essay101] = useLocalStorageState("sci8Essay101", "")
  const [sci8Essay102, setSci8Essay102] = useLocalStorageState("sci8Essay102", "")
  const [sci8Essay103, setSci8Essay103] = useLocalStorageState("sci8Essay103", "")
  const [sci8Essay104, setSci8Essay104] = useLocalStorageState("sci8Essay104", "")
  const [sci8Essay105, setSci8Essay105] = useLocalStorageState("sci8Essay105", "")
  const [sci8Essay106, setSci8Essay106] = useLocalStorageState("sci8Essay106", "")
  const [sci8Essay107, setSci8Essay107] = useLocalStorageState("sci8Essay107", "")
  const [sci8Essay108, setSci8Essay108] = useLocalStorageState("sci8Essay108", "")
  const [sci8Essay109, setSci8Essay109] = useLocalStorageState("sci8Essay109", "")
  const [sci8Essay110, setSci8Essay110] = useLocalStorageState("sci8Essay110", "")
  const [sci8Essay111, setSci8Essay111] = useLocalStorageState("sci8Essay111", "")
  const [sci8Essay112, setSci8Essay112] = useLocalStorageState("sci8Essay112", "")
  const [sci8Essay113, setSci8Essay113] = useLocalStorageState("sci8Essay113", "")
  const [sci8Essay114, setSci8Essay114] = useLocalStorageState("sci8Essay114", "")
  const [sci8Essay115, setSci8Essay115] = useLocalStorageState("sci8Essay115", "")
  const [sci8Essay116, setSci8Essay116] = useLocalStorageState("sci8Essay116", "")
  const [sci8Essay117, setSci8Essay117] = useLocalStorageState("sci8Essay117", "")
  const [sci8Essay118, setSci8Essay118] = useLocalStorageState("sci8Essay118", "")
  const [sci8Essay119, setSci8Essay119] = useLocalStorageState("sci8Essay119", "")
  const [sci8Essay120, setSci8Essay120] = useLocalStorageState("sci8Essay120", "")
  const [sci8Essay121, setSci8Essay121] = useLocalStorageState("sci8Essay121", "")
  const [sci8Essay122, setSci8Essay122] = useLocalStorageState("sci8Essay122", "")
  const [sci8Essay123, setSci8Essay123] = useLocalStorageState("sci8Essay123", "")
  const [sci8Essay124, setSci8Essay124] = useLocalStorageState("sci8Essay124", "")
  const [sci8Essay125, setSci8Essay125] = useLocalStorageState("sci8Essay125", "")
  const [sci8Essay126, setSci8Essay126] = useLocalStorageState("sci8Essay126", "")
  const [sci8Essay127, setSci8Essay127] = useLocalStorageState("sci8Essay127", "")
  const [sci8Essay128, setSci8Essay128] = useLocalStorageState("sci8Essay128", "")
  const [sci8Essay129, setSci8Essay129] = useLocalStorageState("sci8Essay129", "")
  const [sci8Essay130, setSci8Essay130] = useLocalStorageState("sci8Essay130", "")
  const [sci8Essay131, setSci8Essay131] = useLocalStorageState("sci8Essay131", "")
  const [sci8Essay132, setSci8Essay132] = useLocalStorageState("sci8Essay132", "")
  const [sci8Essay133, setSci8Essay133] = useLocalStorageState("sci8Essay133", "")
  const [sci8Essay134, setSci8Essay134] = useLocalStorageState("sci8Essay134", "")
  const [sci8Essay135, setSci8Essay135] = useLocalStorageState("sci8Essay135", "")
  const [sci8Essay136, setSci8Essay136] = useLocalStorageState("sci8Essay136", "")
  const [sci8Essay137, setSci8Essay137] = useLocalStorageState("sci8Essay137", "")
  const [sci8Essay138, setSci8Essay138] = useLocalStorageState("sci8Essay138", "")
  const [sci8Essay139, setSci8Essay139] = useLocalStorageState("sci8Essay139", "")
  const [sci8Essay140, setSci8Essay140] = useLocalStorageState("sci8Essay140", "")
  const [sci8Essay141, setSci8Essay141] = useLocalStorageState("sci8Essay141", "")
  const [sci8Essay142, setSci8Essay142] = useLocalStorageState("sci8Essay142", "")
  const [sci8Essay143, setSci8Essay143] = useLocalStorageState("sci8Essay143", "")
  const [sci8Essay144, setSci8Essay144] = useLocalStorageState("sci8Essay144", "")
  const [sci8Essay145, setSci8Essay145] = useLocalStorageState("sci8Essay145", "")
  const [sci8Essay146, setSci8Essay146] = useLocalStorageState("sci8Essay146", "")
  const [sci8Essay147, setSci8Essay147] = useLocalStorageState("sci8Essay147", "")
  const [sci8Essay148, setSci8Essay148] = useLocalStorageState("sci8Essay148", "")
  const [sci8Essay149, setSci8Essay149] = useLocalStorageState("sci8Essay149", "")
  const [sci8Essay150, setSci8Essay150] = useLocalStorageState("sci8Essay150", "")
  const [sci8Essay151, setSci8Essay151] = useLocalStorageState("sci8Essay151", "")
  const [sci8Essay152, setSci8Essay152] = useLocalStorageState("sci8Essay152", "")
  const [sci8Essay153, setSci8Essay153] = useLocalStorageState("sci8Essay153", "")
  const [sci8Essay154, setSci8Essay154] = useLocalStorageState("sci8Essay154", "")
  const [sci8Essay155, setSci8Essay155] = useLocalStorageState("sci8Essay155", "")
  const [sci8Essay156, setSci8Essay156] = useLocalStorageState("sci8Essay156", "")
  const [sci8Essay157, setSci8Essay157] = useLocalStorageState("sci8Essay157", "")
  const [sci8Essay158, setSci8Essay158] = useLocalStorageState("sci8Essay158", "")
  const [sci8Essay159, setSci8Essay159] = useLocalStorageState("sci8Essay159", "")
  const [sci8Essay160, setSci8Essay160] = useLocalStorageState("sci8Essay160", "")
  const [sci8Essay161, setSci8Essay161] = useLocalStorageState("sci8Essay161", "")
  const [sci8Essay162, setSci8Essay162] = useLocalStorageState("sci8Essay162", "")
  const [sci8Essay163, setSci8Essay163] = useLocalStorageState("sci8Essay163", "")
  const [sci8Essay164, setSci8Essay164] = useLocalStorageState("sci8Essay164", "")
  const [sci8Essay165, setSci8Essay165] = useLocalStorageState("sci8Essay165", "")
  const [sci8Essay166, setSci8Essay166] = useLocalStorageState("sci8Essay166", "")
  const [sci8Essay167, setSci8Essay167] = useLocalStorageState("sci8Essay167", "")
  const [sci8Essay168, setSci8Essay168] = useLocalStorageState("sci8Essay168", "")
  const [sci8Essay169, setSci8Essay169] = useLocalStorageState("sci8Essay169", "")
  const [sci8Essay170, setSci8Essay170] = useLocalStorageState("sci8Essay170", "")
  const [sci8Essay171, setSci8Essay171] = useLocalStorageState("sci8Essay171", "")
  const [sci8Essay172, setSci8Essay172] = useLocalStorageState("sci8Essay172", "")
  const [sci8Essay173, setSci8Essay173] = useLocalStorageState("sci8Essay173", "")
  const [sci8Essay174, setSci8Essay174] = useLocalStorageState("sci8Essay174", "")
  const [sci8Essay175, setSci8Essay175] = useLocalStorageState("sci8Essay175", "")
  const [sci8Essay176, setSci8Essay176] = useLocalStorageState("sci8Essay176", "")
  const [sci8Essay177, setSci8Essay177] = useLocalStorageState("sci8Essay177", "")
  const [sci8Essay178, setSci8Essay178] = useLocalStorageState("sci8Essay178", "")
  const [sci8Essay179, setSci8Essay179] = useLocalStorageState("sci8Essay179", "")
  const [sci8Essay180, setSci8Essay180] = useLocalStorageState("sci8Essay180", "")
  const [sci8Essay181, setSci8Essay181] = useLocalStorageState("sci8Essay181", "")
  const [sci8Essay182, setSci8Essay182] = useLocalStorageState("sci8Essay182", "")
  const [sci8Essay183, setSci8Essay183] = useLocalStorageState("sci8Essay183", "")


  const onChangeSci8Listener1 = (event) => {
    setSci8Essay1(event.target.value)
  }
  const onChangeSci8Listener2 = (event) => {
    setSci8Essay2(event.target.value)
  }
  const onChangeSci8Listener3 = (event) => {
    setSci8Essay3(event.target.value)
  }
  const onChangeSci8Listener4 = (event) => {
    setSci8Essay4(event.target.value)
  }
  const onChangeSci8Listener5 = (event) => {
    setSci8Essay5(event.target.value)
  }
  const onChangeSci8Listener6 = (event) => {
    setSci8Essay6(event.target.value)
  }
  const onChangeSci8Listener7 = (event) => {
    setSci8Essay7(event.target.value)
  }
  const onChangeSci8Listener8 = (event) => {
    setSci8Essay8(event.target.value)
  }
  const onChangeSci8Listener9 = (event) => {
    setSci8Essay9(event.target.value)
  }
  const onChangeSci8Listener10 = (event) => {
    setSci8Essay10(event.target.value)
  }
  const onChangeSci8Listener11 = (event) => {
    setSci8Essay11(event.target.value)
  }
  const onChangeSci8Listener12 = (event) => {
    setSci8Essay12(event.target.value)
  }
  const onChangeSci8Listener13 = (event) => {
    setSci8Essay13(event.target.value)
  }
  const onChangeSci8Listener14 = (event) => {
    setSci8Essay14(event.target.value)
  }
  const onChangeSci8Listener15 = (event) => {
    setSci8Essay15(event.target.value)
  }
  const onChangeSci8Listener16 = (event) => {
    setSci8Essay16(event.target.value)
  }
  const onChangeSci8Listener17 = (event) => {
    setSci8Essay17(event.target.value)
  }
  const onChangeSci8Listener18 = (event) => {
    setSci8Essay18(event.target.value)
  }
  const onChangeSci8Listener19 = (event) => {
    setSci8Essay19(event.target.value)
  }
  const onChangeSci8Listener20 = (event) => {
    setSci8Essay20(event.target.value)
  }
  const onChangeSci8Listener21 = (event) => {
    setSci8Essay21(event.target.value)
  }
  const onChangeSci8Listener22 = (event) => {
    setSci8Essay22(event.target.value)
  }
  const onChangeSci8Listener23 = (event) => {
    setSci8Essay23(event.target.value)
  }
  const onChangeSci8Listener24 = (event) => {
    setSci8Essay24(event.target.value)
  }
  const onChangeSci8Listener25 = (event) => {
    setSci8Essay25(event.target.value)
  }
  const onChangeSci8Listener26 = (event) => {
    setSci8Essay26(event.target.value)
  }
  const onChangeSci8Listener27 = (event) => {
    setSci8Essay27(event.target.value)
  }
  const onChangeSci8Listener28 = (event) => {
    setSci8Essay28(event.target.value)
  }
  const onChangeSci8Listener29 = (event) => {
    setSci8Essay29(event.target.value)
  }
  const onChangeSci8Listener30 = (event) => {
    setSci8Essay30(event.target.value)
  }
  const onChangeSci8Listener31 = (event) => {
    setSci8Essay31(event.target.value)
  }
  const onChangeSci8Listener32 = (event) => {
    setSci8Essay32(event.target.value)
  }
  const onChangeSci8Listener33 = (event) => {
    setSci8Essay33(event.target.value)
  }
  const onChangeSci8Listener34 = (event) => {
    setSci8Essay34(event.target.value)
  }
  const onChangeSci8Listener35 = (event) => {
    setSci8Essay35(event.target.value)
  }
  const onChangeSci8Listener36 = (event) => {
    setSci8Essay36(event.target.value)
  }
  const onChangeSci8Listener37 = (event) => {
    setSci8Essay37(event.target.value)
  }
  const onChangeSci8Listener38 = (event) => {
    setSci8Essay38(event.target.value)
  }
  const onChangeSci8Listener39 = (event) => {
    setSci8Essay39(event.target.value)
  }
  const onChangeSci8Listener40 = (event) => {
    setSci8Essay40(event.target.value)
  }
  const onChangeSci8Listener41 = (event) => {
    setSci8Essay41(event.target.value)
  }
  const onChangeSci8Listener42 = (event) => {
    setSci8Essay42(event.target.value)
  }
  const onChangeSci8Listener43 = (event) => {
    setSci8Essay43(event.target.value)
  }
  const onChangeSci8Listener44 = (event) => {
    setSci8Essay44(event.target.value)
  }
  const onChangeSci8Listener45 = (event) => {
    setSci8Essay45(event.target.value)
  }
  const onChangeSci8Listener46 = (event) => {
    setSci8Essay46(event.target.value)
  }
  const onChangeSci8Listener47 = (event) => {
    setSci8Essay47(event.target.value)
  }
  const onChangeSci8Listener48 = (event) => {
    setSci8Essay48(event.target.value)
  }
  const onChangeSci8Listener49 = (event) => {
    setSci8Essay49(event.target.value)
  }
  const onChangeSci8Listener50 = (event) => {
    setSci8Essay50(event.target.value)
  }
  const onChangeSci8Listener51 = (event) => {
    setSci8Essay51(event.target.value)
  }
  const onChangeSci8Listener52 = (event) => {
    setSci8Essay52(event.target.value)
  }
  const onChangeSci8Listener53 = (event) => {
    setSci8Essay53(event.target.value)
  }
  const onChangeSci8Listener54 = (event) => {
    setSci8Essay54(event.target.value)
  }
  const onChangeSci8Listener55 = (event) => {
    setSci8Essay55(event.target.value)
  }
  const onChangeSci8Listener56 = (event) => {
    setSci8Essay56(event.target.value)
  }
  const onChangeSci8Listener57 = (event) => {
    setSci8Essay57(event.target.value)
  }
  const onChangeSci8Listener58 = (event) => {
    setSci8Essay58(event.target.value)
  }
  const onChangeSci8Listener59 = (event) => {
    setSci8Essay59(event.target.value)
  }
  const onChangeSci8Listener60 = (event) => {
    setSci8Essay60(event.target.value)
  }
  const onChangeSci8Listener61 = (event) => {
    setSci8Essay61(event.target.value)
  }
  const onChangeSci8Listener62 = (event) => {
    setSci8Essay62(event.target.value)
  }
  const onChangeSci8Listener63 = (event) => {
    setSci8Essay63(event.target.value)
  }
  const onChangeSci8Listener64 = (event) => {
    setSci8Essay64(event.target.value)
  }
  const onChangeSci8Listener65 = (event) => {
    setSci8Essay65(event.target.value)
  }
  const onChangeSci8Listener66 = (event) => {
    setSci8Essay66(event.target.value)
  }
  const onChangeSci8Listener67 = (event) => {
    setSci8Essay67(event.target.value)
  }
  const onChangeSci8Listener68 = (event) => {
    setSci8Essay68(event.target.value)
  }
  const onChangeSci8Listener69 = (event) => {
    setSci8Essay69(event.target.value)
  }
  const onChangeSci8Listener70 = (event) => {
    setSci8Essay70(event.target.value)
  }
  const onChangeSci8Listener71 = (event) => {
    setSci8Essay71(event.target.value)
  }
  const onChangeSci8Listener72 = (event) => {
    setSci8Essay72(event.target.value)
  }
  const onChangeSci8Listener73 = (event) => {
    setSci8Essay73(event.target.value)
  }
  const onChangeSci8Listener74 = (event) => {
    setSci8Essay74(event.target.value)
  }
  const onChangeSci8Listener75 = (event) => {
    setSci8Essay75(event.target.value)
  }
  const onChangeSci8Listener76 = (event) => {
    setSci8Essay76(event.target.value)
  }
  const onChangeSci8Listener77 = (event) => {
    setSci8Essay77(event.target.value)
  }
  const onChangeSci8Listener78 = (event) => {
    setSci8Essay78(event.target.value)
  }
  const onChangeSci8Listener79 = (event) => {
    setSci8Essay79(event.target.value)
  }
  const onChangeSci8Listener80 = (event) => {
    setSci8Essay80(event.target.value)
  }
  const onChangeSci8Listener81 = (event) => {
    setSci8Essay81(event.target.value)
  }
  const onChangeSci8Listener82 = (event) => {
    setSci8Essay82(event.target.value)
  }
  const onChangeSci8Listener83 = (event) => {
    setSci8Essay83(event.target.value)
  }
  const onChangeSci8Listener84 = (event) => {
    setSci8Essay84(event.target.value)
  }
  const onChangeSci8Listener85 = (event) => {
    setSci8Essay85(event.target.value)
  }
  const onChangeSci8Listener86 = (event) => {
    setSci8Essay86(event.target.value)
  }
  const onChangeSci8Listener87 = (event) => {
    setSci8Essay87(event.target.value)
  }
  const onChangeSci8Listener88 = (event) => {
    setSci8Essay88(event.target.value)
  }
  const onChangeSci8Listener89 = (event) => {
    setSci8Essay89(event.target.value)
  }
  const onChangeSci8Listener90 = (event) => {
    setSci8Essay90(event.target.value)
  }
  const onChangeSci8Listener91 = (event) => {
    setSci8Essay91(event.target.value)
  }
  const onChangeSci8Listener92 = (event) => {
    setSci8Essay92(event.target.value)
  }
  const onChangeSci8Listener93 = (event) => {
    setSci8Essay93(event.target.value)
  }
  const onChangeSci8Listener94 = (event) => {
    setSci8Essay94(event.target.value)
  }
  const onChangeSci8Listener95 = (event) => {
    setSci8Essay95(event.target.value)
  }
  const onChangeSci8Listener96 = (event) => {
    setSci8Essay96(event.target.value)
  }
  const onChangeSci8Listener97 = (event) => {
    setSci8Essay97(event.target.value)
  }
  const onChangeSci8Listener98 = (event) => {
    setSci8Essay98(event.target.value)
  }
  const onChangeSci8Listener99 = (event) => {
    setSci8Essay99(event.target.value)
  }
  const onChangeSci8Listener100 = (event) => {
    setSci8Essay100(event.target.value)
  }
  const onChangeSci8Listener101 = (event) => {
    setSci8Essay101(event.target.value)
  }
  const onChangeSci8Listener102 = (event) => {
    setSci8Essay102(event.target.value)
  }
  const onChangeSci8Listener103 = (event) => {
    setSci8Essay103(event.target.value)
  }
  const onChangeSci8Listener104 = (event) => {
    setSci8Essay104(event.target.value)
  }
  const onChangeSci8Listener105 = (event) => {
    setSci8Essay105(event.target.value)
  }
  const onChangeSci8Listener106 = (event) => {
    setSci8Essay106(event.target.value)
  }
  const onChangeSci8Listener107 = (event) => {
    setSci8Essay107(event.target.value)
  }
  const onChangeSci8Listener108 = (event) => {
    setSci8Essay108(event.target.value)
  }
  const onChangeSci8Listener109 = (event) => {
    setSci8Essay109(event.target.value)
  }
  const onChangeSci8Listener110 = (event) => {
    setSci8Essay110(event.target.value)
  }
  const onChangeSci8Listener111 = (event) => {
    setSci8Essay111(event.target.value)
  }
  const onChangeSci8Listener112 = (event) => {
    setSci8Essay112(event.target.value)
  }
  const onChangeSci8Listener113 = (event) => {
    setSci8Essay113(event.target.value)
  }
  const onChangeSci8Listener114 = (event) => {
    setSci8Essay114(event.target.value)
  }
  const onChangeSci8Listener115 = (event) => {
    setSci8Essay115(event.target.value)
  }
  const onChangeSci8Listener116 = (event) => {
    setSci8Essay116(event.target.value)
  }
  const onChangeSci8Listener117 = (event) => {
    setSci8Essay117(event.target.value)
  }
  const onChangeSci8Listener118 = (event) => {
    setSci8Essay118(event.target.value)
  }
  const onChangeSci8Listener119 = (event) => {
    setSci8Essay119(event.target.value)
  }
  const onChangeSci8Listener120 = (event) => {
    setSci8Essay120(event.target.value)
  }
  const onChangeSci8Listener121 = (event) => {
    setSci8Essay121(event.target.value)
  }
  const onChangeSci8Listener122 = (event) => {
    setSci8Essay122(event.target.value)
  }
  const onChangeSci8Listener123 = (event) => {
    setSci8Essay123(event.target.value)
  }
  const onChangeSci8Listener124 = (event) => {
    setSci8Essay124(event.target.value)
  }
  const onChangeSci8Listener125 = (event) => {
    setSci8Essay125(event.target.value)
  }
  const onChangeSci8Listener126 = (event) => {
    setSci8Essay126(event.target.value)
  }
  const onChangeSci8Listener127 = (event) => {
    setSci8Essay127(event.target.value)
  }
  const onChangeSci8Listener128 = (event) => {
    setSci8Essay128(event.target.value)
  }
  const onChangeSci8Listener129 = (event) => {
    setSci8Essay129(event.target.value)
  }
  const onChangeSci8Listener130 = (event) => {
    setSci8Essay130(event.target.value)
  }
  const onChangeSci8Listener131 = (event) => {
    setSci8Essay131(event.target.value)
  }
  const onChangeSci8Listener132 = (event) => {
    setSci8Essay132(event.target.value)
  }
  const onChangeSci8Listener133 = (event) => {
    setSci8Essay133(event.target.value)
  }
  const onChangeSci8Listener134 = (event) => {
    setSci8Essay134(event.target.value)
  }
  const onChangeSci8Listener135 = (event) => {
    setSci8Essay135(event.target.value)
  }
  const onChangeSci8Listener136 = (event) => {
    setSci8Essay136(event.target.value)
  }
  const onChangeSci8Listener137 = (event) => {
    setSci8Essay137(event.target.value)
  }
  const onChangeSci8Listener138 = (event) => {
    setSci8Essay138(event.target.value)
  }
  const onChangeSci8Listener139 = (event) => {
    setSci8Essay139(event.target.value)
  }
  const onChangeSci8Listener140 = (event) => {
    setSci8Essay140(event.target.value)
  }
  const onChangeSci8Listener141 = (event) => {
    setSci8Essay141(event.target.value)
  }
  const onChangeSci8Listener142 = (event) => {
    setSci8Essay142(event.target.value)
  }
  const onChangeSci8Listener143 = (event) => {
    setSci8Essay143(event.target.value)
  }
  const onChangeSci8Listener144 = (event) => {
    setSci8Essay144(event.target.value)
  }
  const onChangeSci8Listener145 = (event) => {
    setSci8Essay145(event.target.value)
  }
  const onChangeSci8Listener146 = (event) => {
    setSci8Essay146(event.target.value)
  }
  const onChangeSci8Listener147 = (event) => {
    setSci8Essay147(event.target.value)
  }
  const onChangeSci8Listener148 = (event) => {
    setSci8Essay148(event.target.value)
  }
  const onChangeSci8Listener149 = (event) => {
    setSci8Essay149(event.target.value)
  }
  const onChangeSci8Listener150 = (event) => {
    setSci8Essay150(event.target.value)
  }
  const onChangeSci8Listener151 = (event) => {
    setSci8Essay151(event.target.value)
  }
  const onChangeSci8Listener152 = (event) => {
    setSci8Essay152(event.target.value)
  }
  const onChangeSci8Listener153 = (event) => {
    setSci8Essay153(event.target.value)
  }
  const onChangeSci8Listener154 = (event) => {
    setSci8Essay154(event.target.value)
  }
  const onChangeSci8Listener155 = (event) => {
    setSci8Essay155(event.target.value)
  }
  const onChangeSci8Listener156 = (event) => {
    setSci8Essay156(event.target.value)
  }
  const onChangeSci8Listener157 = (event) => {
    setSci8Essay157(event.target.value)
  }
  const onChangeSci8Listener158 = (event) => {
    setSci8Essay158(event.target.value)
  }
  const onChangeSci8Listener159 = (event) => {
    setSci8Essay159(event.target.value)
  }
  const onChangeSci8Listener160 = (event) => {
    setSci8Essay160(event.target.value)
  }
  const onChangeSci8Listener161 = (event) => {
    setSci8Essay161(event.target.value)
  }
  const onChangeSci8Listener162 = (event) => {
    setSci8Essay162(event.target.value)
  }
  const onChangeSci8Listener163 = (event) => {
    setSci8Essay163(event.target.value)
  }
  const onChangeSci8Listener164 = (event) => {
    setSci8Essay164(event.target.value)
  }
  const onChangeSci8Listener165 = (event) => {
    setSci8Essay165(event.target.value)
  }
  const onChangeSci8Listener166 = (event) => {
    setSci8Essay166(event.target.value)
  }
  const onChangeSci8Listener167 = (event) => {
    setSci8Essay167(event.target.value)
  }
  const onChangeSci8Listener168 = (event) => {
    setSci8Essay168(event.target.value)
  }
  const onChangeSci8Listener169 = (event) => {
    setSci8Essay169(event.target.value)
  }
  const onChangeSci8Listener170 = (event) => {
    setSci8Essay170(event.target.value)
  }
  const onChangeSci8Listener171 = (event) => {
    setSci8Essay171(event.target.value)
  }
  const onChangeSci8Listener172 = (event) => {
    setSci8Essay172(event.target.value)
  }
  const onChangeSci8Listener173 = (event) => {
    setSci8Essay173(event.target.value)
  }
  const onChangeSci8Listener174 = (event) => {
    setSci8Essay174(event.target.value)
  }
  const onChangeSci8Listener175 = (event) => {
    setSci8Essay175(event.target.value)
  }
  const onChangeSci8Listener176 = (event) => {
    setSci8Essay176(event.target.value)
  }
  const onChangeSci8Listener177 = (event) => {
    setSci8Essay177(event.target.value)
  }
  const onChangeSci8Listener178 = (event) => {
    setSci8Essay178(event.target.value)
  }
  const onChangeSci8Listener179 = (event) => {
    setSci8Essay179(event.target.value)
  }
  const onChangeSci8Listener180 = (event) => {
    setSci8Essay180(event.target.value)
  }
  const onChangeSci8Listener181 = (event) => {
    setSci8Essay181(event.target.value)
  }
  const onChangeSci8Listener182 = (event) => {
    setSci8Essay182(event.target.value)
  }
  const onChangeSci8Listener183 = (event) => {
    setSci8Essay183(event.target.value)
  }

  return (
    <form>


      <section className="block-circles">
        <div className="circle one"
             style={{ animationDuration: "3s", backgroundColor: '#f16d7b', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
        <div className="circle two" style={{ animationDuration: "3s", backgroundColor: '#f16d7b', transform: "translate(0px, 0px)", opacity: 1 }}/>
        <div className="hero-wrapper pbn hero animated animatedFadeInUp fadeInUp">
          <h1 className="hero intro animated">Physical Science</h1>
          <div className="hero info-block info-block-line" style={{ marginBottom: "4em" }}>
            <Link to="/eighth" className='gradeLink'><h2 className="hero">8th Grade</h2></Link>
          </div>
        </div>
      </section>

      <section className="section raise-top">
        <div className="section-content">
          <h1 className="section-title fadeIn">Course Summary</h1>
          <p className="topBottom fadeIn">This course uses <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0" rel="noreferrer"
            target="_blank"> CK-12's Middle School Physical Science book.</a> 8th Grade Science covers Scientific Theory, Matter and Change, Atomic Structure, The Periodic Table, Chemical Interactions, Carbon Chemistry, Solutions, Acids, and Bases, Nuclear Chemistry, Objects in Motion, Forces, Newton's Laws of Motion, Fluid Forces, Work and Machines, Introduction to Energy, Thermal Energy and Heat, Waves, Sound, Electromagnetic Radiation, Visible Light, Electricity, and Magnetism.  </p>
          <p className="topBottom">The assignments for each chapter are posted in
            the lessons below so you can save your written work from this course. CK-12's site will save your progress  from Practice sessions. </p>
          <p className="topBottom">If you don't already have an <a href="https://www.ck12.org/auth/signup/student" rel="noreferrer" target="_blank"> account with
                                                                   CK-12, </a> you can create one <a href="https://www.ck12.org/auth/signup/student"
                                                                                                     rel="noreferrer" target="_blank">here. </a> It is not required to complete
          this course however.</p>
        <p className="topBottom"><a
          href="https://www.ck12.org/tebook/ck-12-physical-science-for-middle-school-teachers-edition/" rel="noreferrer"
          target="_blank">Lab activities </a>for the lessons can be accessed <a
          href="https://www.ck12.org/tebook/ck-12-physical-science-for-middle-school-teachers-edition/" rel="noreferrer"
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

        <h1 className="section-title">Daily Lessons</h1>

          <span className="days">LESSON 1</span>
          <p className="lessons">Begin the first Chapter: <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.1/primary/lesson/nature-of-science-ms-ps"
            rel="noreferrer" target="_blank"> 1.1 Scientific Ways of Thinking (click here). </a></p>
          <p>
            <ul className="list">
              <li>Complete the reading and watch the videos.</li>
              <li>Answer the 'Start Practice' questions on the
                bottom right of the ck12 website.<a
                  href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.1/primary/lesson/nature-of-science-ms-ps"
                  rel="noreferrer" target="_blank"><img style={{ margin: "0", display: "inherit", padding: "0", float: "0" }}
                                                        src={require("../../public/images/science/startpractice.jpg")}
                                                        alt='start practice button'/></a></li>
              <li>Answer the questions below (based on the reading and videos). For all assignments, answer in complete sentences.</li>
            </ul>
          </p>
          <p className="lessons">
                 1. Define science.<br/>
            2. What is the goal of science?<br/>
            3. Use examples to show how science may advance.<br/></p>
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
                    Be sure to label each assignment with the Subject and Lesson Number."               onChange={onChangeSci8Listener1} value={sci8Essay1}/>

          <span className="days">LESSON 2 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.2/primary/lesson/scientific-induction-ms-ps"
              rel="noreferrer" target="_blank"> 1.2 Inductive Reasoning</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is inductive reasoning?<br/>
            2. Describe how inductive reasoning is used in science.<br/>
            3. Rayna studied rats in a lab. She observed that all 50 rats in her sample preferred to eat brand A rat
            food and would eat brand B food only when brand A was not available. Can she correctly conclude that all
            rats prefer brand A rat food over brand B food? Why or why not?<br/></p>
          <textarea className="textArea"
                    placeholder="Save your work! Copy/paste into Google docs or email to your teacher/parent."
                    onChange={onChangeSci8Listener2} value={sci8Essay2}/>

          <span className="days">LESSON 3 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.3/primary/lesson/scientific-theory-ms-ps"
              rel="noreferrer" target="_blank"> 1.3 Scientific Theory </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a scientific theory?<br/>
            2. Compare and contrast how the term theory is used in science and in everyday language.<br/>
            3. Identify two physical science theories.<br/>
            4. Relate scientific theories to the law of parsimony.<br/>
            5. How does Dr. Scott define scientific theory?<br/>
            6. From most to least important in science, how would Dr. Scott rank the following concepts? theory, fact,
            law, hypothesis.<br/>
            7. Based on the presentation, explain the importance of theories in science.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener3} value={sci8Essay3}/>

          <span className="days">LESSON 4 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.4/primary/lesson/scientific-law-ms-ps"
              rel="noreferrer" target="_blank"> 1.4 Scientific Law </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define scientific law.<br/>
            2. Identify three laws in physical science.<br/>
            3. Which of these statements could be a scientific law?<br/>
            4. Metals such as copper conduct electric current.<br/>
            5. Metals can conduct electricity because they have free electrons.<br/>
            6. How is a scientific law different from a scientific theory?<br/>
            7. Contrast scientific laws with traffic laws or other laws devised by people.<br/>
            8. Do well-supported scientific theories eventually become scientific laws? Why or why not?<br/>
            9. How are theories and laws related?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci8Listener4} value={sci8Essay4}/>

          <span className="days">LESSON 5 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.5/primary/lesson/history-of-science-ms-ps"
              rel="noreferrer" target="_blank"> 1.5 History of Science</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is Thales called the “father of science”?<br/>
            2. What is empiricism? Who “invented” this important idea?<br/>
            3. Describe Geber’s role in the history of science.<br/>
            4. Relate Copernicus’ ideas about the solar system to the scientific revolution.<br/>
            5. How did Einstein rock science?<br/>
            6. How did Newton prove his ideas about gravity?<br/>
            7. Why did Galileo get into trouble?<br/>
            8. Why were the late 1600s and the 1700s called the Age of Enlightenment?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc."
                    onChange={onChangeSci8Listener5} value={sci8Essay5}/>

          <span className="days">LESSON 6 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.6/primary/lesson/ethics-in-science-ms-ps"
              rel="noreferrer" target="_blank"> 1.6 Ethics in Science</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit1-5306536/"
            rel="noreferrer" target="_blank">Introduction to Physical Science: Challenge 1 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is ethics?<br/>
            2. List two ethical rules in science.<br/>
            3. Think of a personal decision a young person might have to make. Identify the “rights” and “wrongs” of
            possible choices, and explain which choice you think is more ethical.<br/>
            4. What was your score for the challenge?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc." onChange={onChangeSci8Listener6} value={sci8Essay6}/>

          <span className="days">LESSON 7 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.17/primary/lesson/scientific-process-ms-ps"
              rel="noreferrer" target="_blank"> 1.17 Scientific Method </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the role of investigation in science?<br/>
            2. List the steps of the scientific method.<br/>
            3. Assume that Cody used a weak magnet and the flake of cereal was not attracted to it. What conclusion
            might he have drawn then?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc." onChange={onChangeSci8Listener7} value={sci8Essay7}/>

          <span className="days">LESSON 8 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.18/primary/lesson/observation-ms-ps"
              rel="noreferrer" target="_blank"> 1.18 Observation </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an observation?<br/>
            2. What senses can we use to make observations?<br/>
            3. Why are observations important to scientific investigations?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc." onChange={onChangeSci8Listener8} value={sci8Essay8}/>

          <span className="days">LESSON 9 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.19/primary/lesson/hypothesis-ms-ps"
              rel="noreferrer" target="_blank"> 1.19 Hypothesis </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Identify the role of the hypothesis in science.<br/>
            2. State two criteria of a scientific hypothesis.<br/>
            3. Which of these two statements meets the criteria of a scientific hypothesis?<br/>
            4. Acids turn red litmus paper blue.<br/>
            5. All life in the universe exists on Earth.<br/>
            6. Why is it usually impossible to prove that a hypothesis is true?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc." onChange={onChangeSci8Listener9} value={sci8Essay9}/>

          <span className="days">LESSON 10 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.20/primary/lesson/scientific-experiments-ms-ps"
              rel="noreferrer" target="_blank"> 1.20 Experiment </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an experiment?<br/>
            2. Distinguish between the manipulated variable and the responding variable in an experiment.<br/>
            3. Why is it important for other variables in an experiment to be controlled?<br/></p>
          <textarea className="textArea" placeholder="Copy/paste questions into this textbox and then write your answers here. Back up your work! Email it to your parent/teacher or copy/paste it into another doc." onChange={onChangeSci8Listener10} value={sci8Essay10}/>

          <span className="days">LESSON 11 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.21/primary/lesson/field-study-ms-ps"
              rel="noreferrer" target="_blank"> 1.21 Field Study </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a field study?<br/>
            2. When is a field study more appropriate than a laboratory experiment? Give an example of a problem that
            might be investigated with a field study.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener11} value={sci8Essay11}/>

          <span className="days">LESSON 12 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.22/primary/lesson/communication-in-science-ms-ps"
              rel="noreferrer" target="_blank"> 1.22 Communication in Science </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is communication important in science?<br/>
            2. Identify three different ways that scientists may communicate about their research.<br/>
            3. Why do some scientists have difficulty communicating about their research to nonscientists?<br/>
            4. What is the role of science writers in scientific communication?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener12} value={sci8Essay12}/>

          <span className="days">LESSON 13 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.23/primary/lesson/replication-in-science-ms-ps"
              rel="noreferrer" target="_blank"> 1.23 Replication in Science</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit4-5306536/"
            rel="noreferrer" target="_blank"> Introduction to Physical Science: Challenge 4</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is replication?<br/>
            2. Why is replication important in science?<br/>
            3. Scientists do not try to replicate every investigation, but some are repeated many times. For example,
            many researchers tried to replicate the vaccine-autism study described above. Why do you think so much
            effort was made to replicate this particular study? What was the outcome of the additional research?<br/>
            4. What was your score for the challenge?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener13} value={sci8Essay13}/>

          <span className="days">LESSON 14 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.24/primary/lesson/international-system-of-units-ms-ps"
              rel="noreferrer" target="_blank"> 1.24 International System of Units (SI)</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What does SI stand for?<br/>
            2. Why is it important for scientists and engineers to adopt a common system of measurement units?<br/>
            3. How many grams equal 1 kilogram?<br/>
            4. What fraction of a meter is a millimeter?<br/>
            5. How many pounds equal 5 kilograms?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener14} value={sci8Essay14}/>

          <span className="days">LESSON 15 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.25/primary/lesson/scientific-measuring-devices-ms-ps"
              rel="noreferrer" target="_blank"> 1.25 Scientific Measuring Devices</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Using the enlarged metric ruler segment shown below, what is the length of the blue line in
            centimeters?<br/>
            <img alt="metric ruler" src={require("../../public/images/science/1-28Figure7.jpg")}/>
            2. Assume that an object has been placed in the pan of a triple beam balance. The scales of the balance are
            shown below. What is the mass of the object?<br/>
            <img alt="triple beam balance" src={require("../../public/images/science/1-28Figure8.jpg")}/>
            3. How much liquid does this graduated cylinder contain?<br/>
            <img alt="cylinder" src={require("../../public/images/science/1-28Figure9.jpg")}/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener15} value={sci8Essay15}/>

          <span className="days">LESSON 16 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.26/primary/lesson/accuracy-and-precision-ms-ps"
              rel="noreferrer" target="_blank"> 1.26 Accuracy and Precision</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Complete this statement: A measurement is accurate when it is __________.<br/>
            2. What makes two measurements precise?<br/>
            3. Kami measured the volume of a liquid three times and got these results: 66.71 mL, 66.70 mL, 66.69 mL. The
            actual volume of the liquid is 69.70 mL. Are Kami’s measurements precise? Are they accurate? Explain your
            answers.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener16} value={sci8Essay16}/>

          <span className="days">LESSON 17 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.27/primary/lesson/calculating-derived-quantities-ms-ps"
              rel="noreferrer" target="_blank"> 1.27 Calculating Derived Quantities</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a derived quantity? Give an example.<br/>
            2. What are the dimensions of a square that has an area of 4 cm2?<br/>
            3. Explain how you would calculate the volume of a cube.<br/>
            4. Which derived quantity is used to calculate density?<br/>
            5. Which derived quantity might be measured in mm3?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener17} value={sci8Essay17}/>

          <span className="days">LESSON 18 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.28/primary/lesson/significant-figures-ms-ps"
              rel="noreferrer" target="_blank"> 1.28 Significant Figures</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do you determine the number of significant figures when you make a measurement?<br/>
            2. Measure the width of a sheet of standard-sized (8.5 in x 11.0 in) loose-leaf notebook paper. Make the
            measurement in centimeters and express the answer with the correct number of significant figures.<br/>
            3. How many significant figures do each of these measurements have?<br/>
            &nbsp;&nbsp; a. 0.04<br/>
            &nbsp;&nbsp; b. 500<br/>
            &nbsp;&nbsp; c. 1.50<br/>
            4. In this calculation, how many significant figures should there be in the answer? 1.0234 + 1.1 +
            0.0056<br/>
            5. Round each of these numbers to three significant figures: <br/>
            &nbsp;&nbsp; a. 1258<br/>
            &nbsp;&nbsp; b. 3274<br/>&nbsp;&nbsp; c. 6845<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener18} value={sci8Essay18}/>

          <span className="days">LESSON 19 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/1.29/primary/lesson/scientific-notation-ms-ps"
              rel="noreferrer" target="_blank"> 1.29 Scientific Notation</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit5-5306536/"
            rel="noreferrer" target="_blank"> Introduction to Physical Science: Challenge 5</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is scientific notation? Why are numbers written in scientific notation?<br/>
            2. Write 0.0045 in scientific notation.<br/>
            3. What number is written as 6.0 × 106 in scientific notation?<br/>
            4. What was your score for the challenge?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener19} value={sci8Essay19}/>

          <span className="days">LESSON 20 </span>
          <span className="days">Matter and Change</span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.1/primary/lesson/matter-mass-and-volume-ms-ps"
              rel="noreferrer" target="_blank"> 2.1 Matter, Mass, and Volume</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How do scientists define matter?<br/>
            2. What is mass? What is the basic SI unit of mass?<br/>
            3. What does volume measure? Name two different units that might be used to measure volume.<br/>
            4. Explain how to use the displacement method to find the volume of an irregularly shaped object.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener20} value={sci8Essay20}/>

          <span className="days">LESSON 21 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.2/primary/lesson/physical-properties-of-matter-ms-ps"
              rel="noreferrer" target="_blank"> 2.2 Physical Properties of Matter</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a physical property of matter?<br/>
            2. List three examples of physical properties.<br/>
            3. Compare and contrast two physical properties of apples and oranges.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener21} value={sci8Essay21}/>

          <span className="days">LESSON 22 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.3/primary/lesson/density-ms-ps"
              rel="noreferrer" target="_blank"> 2.3 Density </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is density?<br/>
            2. Find the density of an object that has a mass of 5 kg and a volume of 50 cm3.<br/>
            3. Describe the particles of matter in two substances that differ in density. Which substance has greater density and how do you know this?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener22} value={sci8Essay22}/>

          <span className="days">LESSON 23 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.4/primary/lesson/chemical-properties-of-matter-ms-ps"
              rel="noreferrer" target="_blank"> 2.4 Chemical Properties of Matter</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit7-5306536/"
            rel="noreferrer" target="_blank"> Matter and Change: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a chemical property?<br/>
            2. Define the chemical property called reactivity.<br/>
            3. What is flammability? Identify examples of flammable matter.<br/>
            4. What was your score for the challenge?<br/></p>

          <textarea className="textArea" onChange={onChangeSci8Listener23} value={sci8Essay23}/>

          <span className="days">LESSON 24 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.5/primary/lesson/elements-ms-ps"
              rel="noreferrer" target="_blank"> 2.5 Element</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an element?<br/>
            2. Why can an element be identified by its properties?<br/>
            3. Explain why the following statement is either true or false: The idea that all matter consists of the
            elements was first introduced a few hundred years ago.<br/>
            4. How are atoms related to elements?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener24} value={sci8Essay24}/>

          <span className="days">LESSON 25 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.6/primary/lesson/compounds-ms-ps"
              rel="noreferrer" target="_blank"> 2.6 Compound</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are compounds? List three examples.<br/>
            2. How do the properties of compounds compare with the properties of the elements that form them?<br/>
            3. Compare and contrast crystals and molecules.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener25} value={sci8Essay25}/>

          <span className="days">LESSON 26 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.7/primary/lesson/mixtures-ms-ps"
              rel="noreferrer" target="_blank"> 2.7 Mixture</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a mixture?<br/>
            2. What is the difference between a homogeneous and a heterogeneous mixture?<br/>
            3. Compare and contrast solutions, colloids, and suspensions. Give an example of each
            type of mixture.<br/>
            4. Iron filings are attracted by a magnet. This is a physical property of iron but not of most other
            materials, including sand. How could you use this difference in physical properties to separate a mixture of
            iron filings and sand?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener26} value={sci8Essay26}/>

          <span className="days">LESSON 27 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.8/primary/lesson/physical-change-ms-ps"
              rel="noreferrer" target="_blank"> 2.8 Physical Change</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define physical change.<br/>
            2. What are some examples of physical change?<br/>
            3. When a piece of wood is cut by a chainsaw, is this a physical change? Why or why not?<br/>
            4. Describe an example of temperature causing a change in the size of matter.<br/>
            5. How is temperature related to changes in the state of matter?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener27} value={sci8Essay27}/>

          <span className="days">LESSON 28 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.9/primary/lesson/chemical-change-ms-ps"
              rel="noreferrer" target="_blank"> 2.9 Chemical Change</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit8-5306536/"
            rel="noreferrer" target="_blank"> Matter and Change: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What happens in any chemical change?<br/>
            2. List three signs that a chemical change has occurred.<br/>
            3. Give an example of a chemical change. Explain why you think it is a chemical change.<br/>
            4. Why can chemical changes often not be reversed?<br/>
            5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener28} value={sci8Essay28}/>

          <span className="days">LESSON 29 </span>
          <p>Watch the video below: <b>Physical and Chemical Changes </b></p>
          <Video videoUrl="https://www.youtube.com/embed/VWSqD2L8BLs"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What were three interesting things you learned?<br/>
            2. Was there anything new you learned in the video that surprised you?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener29} value={sci8Essay29}/>

          <span className="days">LESSON 30 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.10/primary/lesson/conservation-of-mass-ms-ps"
              rel="noreferrer" target="_blank"> 2.10 Conservation of Mass</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the law of conservation of mass?<br/>
            2. Describe an example of the law of conservation of mass.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener30} value={sci8Essay30}/>

          <span className="days">LESSON 31 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.11/primary/lesson/states-of-matter-ms-ps"
              rel="noreferrer" target="_blank"> 2.11 States of Matter</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define state of matter.<br/>
            2. List four states of matter. Which states of matter are most common on Earth?<br/>
            3. What type of property is state of matter? How could you demonstrate this?<br/>
            4. Compare and contrast solids, liquids, and gases. Describe what each element shares in common with the others and how each is different from the others.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener31} value={sci8Essay31}/>

          <span className="days">LESSON 32 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.12/primary/lesson/solids-ms-ps"
              rel="noreferrer" target="_blank"> 2.12 Solid</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a solid?<br/>
            2. Why does a solid have a fixed shape and fixed volume?<br/>
            3. Compare and contrast crystalline and amorphous solids. Give an example of each
            type of solid in your table.<br/>
            4. Diamonds are the hardest of all minerals. Is a diamond a crystalline or an amorphous solid? How do you
            know?<br/>
            5. Summarize what you learned from the videos.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener32} value={sci8Essay32}/>

          <span className="days">LESSON 33 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.13/primary/lesson/liquids-ms-ps"
              rel="noreferrer" target="_blank"> 2.13 Liquid</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. If you were to draw a line graph of temperature and viscosity, what would it look like? How does one affect the other?<br/>
            2. Write a hypothesis to explain the relationship between temperature and viscosity of water.<br/>
            3. Summarize what you learned from the videos.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener33} value={sci8Essay33}/>

          <span className="days">LESSON 34 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.14/primary/lesson/gases-ms-ps"
              rel="noreferrer" target="_blank"> 2.14 Gas</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a gas?<br/>
            2. Why does a gas not have a fixed shape or a fixed volume?<br/>
            3. Explain why a gas exerts force.<br/>
            4. What does pressure measure?<br/>
            5. Air pressure affects how high a cake rises when it bakes. Directions for cake mixes often have special
            high altitude instructions. Explain why.<br/>
            6. How does a balloon change as a child blows more air into it?<br/>
            7. How does air cause this change in the balloon?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener34} value={sci8Essay34}/>

          <span className="days">LESSON 35 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.15/primary/lesson/plasma-ms-ps"
              rel="noreferrer" target="_blank"> 2.15 Plasma</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is plasma?<br/>
            2. What are some properties of plasma?<br/>
            3. Explain why plasma can conduct electricity and respond to magnetism.<br/>
            4. Give examples of plasma in nature.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener35} value={sci8Essay35}/>

          <span className="days">LESSON 36 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.16/primary/lesson/kinetic-theory-of-matter-ms-ps"
              rel="noreferrer" target="_blank"> 2.16 Kinetic Theory of Matter</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit9-5306536/"
            rel="noreferrer" target="_blank"> Matter and Change: Challenge 3</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Use the kinetic molecular theory of matter to describe the motion of particles in ice, liquid water, and
            water vapor.<br/>
            2. What is the relationship between the kinetic energy of particles and the forces of attraction between
            particles?<br/>
            3. Describe the motion of particles in ice, liquid water, and water vapor.<br/>
            4. Apply the kinetic theory of matter to explain the differences in your answer to the question above.<br/>
            5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener36} value={sci8Essay36}/>

          <span className="days">LESSON 37 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.17/primary/lesson/changes-of-state-ms-ps"
              rel="noreferrer" target="_blank"> 2.17 Change of State</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define change of state, and give an example.<br/>
            2. Identify processes that change matter to a liquid state.<br/>
            3. Why must energy be absorbed to change a liquid to a gas?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener37} value={sci8Essay37}/>

          <span className="days">LESSON 38 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.18/primary/lesson/freezing-ms-ps"
              rel="noreferrer" target="_blank"> 2.18 Freezing</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define freezing.<br/>
            2. What happens to the particles of matter when it changes from a liquid to a solid?<br/>
            3. What is the freezing point of a substance? What is the freezing point of water?<br/>
            4. Adding antifreeze to water lowers its freezing point. Based on this statement, what can you infer about
            the freezing point of antifreeze?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener38} value={sci8Essay38}/>

          <span className="days">LESSON 39 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.19/primary/lesson/melting-ms-ps"
              rel="noreferrer" target="_blank"> 2.19 Melting</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define melting.<br/>
            2. What happens to particles of matter when it changes from a solid to a liquid?<br/>
            3. What is the melting point of a substance? What is the melting point of ice?<br/>
            4. What conclusion could you draw about the melting points of alloys relative to the
            melting points of the metals they contain?<br/>
            5. Bronze is another alloy. It is a mixture that contains mainly copper with some added tin. The melting
            point of copper is 1084°C, and the melting point of tin is 232°C. What might be a reasonable prediction for
            the melting point of bronze?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener39} value={sci8Essay39}/>

          <span className="days">LESSON 40 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.20/primary/lesson/boiling-ms-ps"
              rel="noreferrer" target="_blank"> 2.20 Boiling</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is vaporization?<br/>
            2. Outline how vaporization occurs.<br/>
            3. Describe vaporization and evaporation. How are they similar to each other? How are they different?<br/>
            4. Define boiling point. What is the boiling point of pure water?<br/>
            5. Suppose you place an aluminum pot containing water over the flame on a stovetop. Before long, the water
            starts boiling and turning to water vapor. The pot becomes very hot but otherwise appears to be unchanged by
            the increase in temperature. Based on these observations, what can you conclude about the boiling point of
            aluminum?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener40} value={sci8Essay40}/>

          <span className="days">LESSON 41 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.21/primary/lesson/evaporation-ms-ps"
              rel="noreferrer" target="_blank"> 2.21 Evaporation</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define evaporation, and describe how it occurs.<br/>
            2. List four factors that influence the rate of evaporation.<br/>
            3. What is evaporative cooling? Why does it happen?<br/>
            4. Dorrance mopped the floor and now it is wet. She wants the floor to dry more quickly, so she plugs in an
            electric fan, aims it at the floor, and turns it on. Do you think this will help the floor dry faster? Why
            or why not?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener41} value={sci8Essay41}/>

          <span className="days">LESSON 42 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.22/primary/lesson/condensation-ms-ps"
              rel="noreferrer" target="_blank"> 2.22 Condensation</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is condensation? Give an example.<br/>
            2. Define dew point. What factors influence dew point?<br/>
            3. In the water cycle, how does water vapor in the atmosphere change to liquid water on the ground?<br/>
            4. Summarize the videos from this chapter.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener42} value={sci8Essay42}/>

          <span className="days">LESSON 43 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.23/primary/lesson/sublimation-ms-ps"
              rel="noreferrer" target="_blank"> 2.23 Sublimation </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is sublimation? Give an example.<br/>
            2. Describe conditions under which snow or ice is most likely to undergo sublimation.<br/>
            3. Imagine a plastic container filled with solid air freshener. The solid gradually shrinks after the holes
            in the top of the container are opened. Explain why this occurs.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener43} value={sci8Essay43}/>

          <span className="days">LESSON 44 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/2.24/primary/lesson/deposition-ms-ps"
              rel="noreferrer" target="_blank"> 2.24 Deposition</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit10-5306536/"
            rel="noreferrer" target="_blank"> Matter and Change: Challenge 4</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is deposition, as defined in chemistry?<br/>
            2. Describe an example of deposition in nature.<br/>
            3. Imagine scraping the frost off of a windshield in the winter on a cold morning. Then you decide the car's
            defroster can do the work instead. What conditions caused the windshield to become covered with frost, and
            how does the defroster clear the frost from the windshield?<br/>
            4. What is dry ice? What gas is used to make dry ice?<br/>
            5. In making dry ice with a fire extinguisher, why is it necessary to have a bag to collect the dry
            ice?<br/>
            6. How can dry ice be changed back to a gas?<br/>
          5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener44} value={sci8Essay44}/>

          <span className="days">LESSON 45 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.1/primary/lesson/atoms-ms-ps"
              rel="noreferrer" target="_blank"> 3.1 Atom</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an atom?<br/>
            2. Which of the following statement(s) are true about the atoms of any element?<br/>
            &nbsp;&nbsp; a. The number of protons in an atom of an element is unique to each element.<br/>
            &nbsp;&nbsp; b. The number of protons and neutrons in an atom of an element is unique to each element.<br/>
            &nbsp;&nbsp; c. A proton is an atom of one element that is identical to a proton in an atom of another
            element.<br/>
            &nbsp;&nbsp; d. The number of protons in an atom of an element is the same for all elements.<br/>
            3. Which of the following statements explains why atoms are always neutral in charge.<br/>
            &nbsp;&nbsp; a. They have the same number of protons as the atoms of all other elements.<br/>
            &nbsp;&nbsp; b. They have protons that are identical to the protons of all other elements.<br/>
            &nbsp;&nbsp; c. They have the same size as the atoms of all other elements.<br/>
            &nbsp;&nbsp; d. They have the same number of protons as electrons.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener45} value={sci8Essay45}/>

          <span className="days">LESSON 46 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.2/primary/lesson/atomic-nucleus-ms-ps"
              rel="noreferrer" target="_blank"> 3.2 Nucleus of the Atom</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the nucleus of the atom.<br/>
            2. Why is the nucleus positive in charge?<br/>
            3. Explain why the nucleus is very dense.<br/>
            4. Outline the forces that act on particles in the nucleus.<br/>
            5. If you made a three-dimensional model of an atom and its nucleus, how would you represent the atom? How
            would you represent nucleus? Explain your choices.<br/>
            6. Describe the scientific procedure that was used to discover the nucleus.<br/>
            7. What evidence led scientists to conclude that atoms consist mostly of empty space with a very small,
            positively charged mass at the center?<br/>
            8. Reflect on the method used in the experiment. Why was it important to send positive—as opposed to neutral
            or negative—particles toward the gold foil?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener46} value={sci8Essay46}/>

          <span className="days">LESSON 47 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.3/primary/lesson/protons-ms-ps"
              rel="noreferrer" target="_blank"> 3.3 Proton</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the relationship between protons and elements?<br/>
            2. Atoms, which are always neutral in electric charge, contain electrons as well as protons and neutrons. An
            electron has an electrical charge of -1. If an atom has three electrons, infer how many protons it has.<br/>
            3. Identify the fundamental particles that make up a proton.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener47} value={sci8Essay47}/>

          <span className="days">LESSON 48 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.4/primary/lesson/neutrons-ms-psWhat is a neutron?<br/>"
              rel="noreferrer" target="_blank"> 3.4 Neutron</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast neutrons and protons.<br/>
            2. Explain how isotopes of an element differ from one another. Give an example.<br/>
            3. Identify the fundamental particles that make up a neutron.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener48} value={sci8Essay48}/>

          <span className="days">LESSON 49 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.5/primary/lesson/electrons-ms-ps"
              rel="noreferrer" target="_blank"> 3.5 Electron</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are electrons?<br/>
            2. Compare and contrast electrons and protons.<br/>
            3. What are valence electrons? Why are they so important? How many valence electrons does a beryllium atom
            have (see question 3)?<br/>
            4. Who discovered electrons? When were they discovered?<br/>
            5. Outline how electrons were discovered.<br/>
            6. What was the significance of the discovery of electrons?<br/>
            7. Where did Thomson think electrons were located in the atom? How does this differ from the modern view of
            electrons presented above?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener49} value={sci8Essay49}/>

          <span className="days">LESSON 50 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.6/primary/lesson/fundamental-particles-ms-ps"
              rel="noreferrer" target="_blank"> 3.6 Fundamental Particles</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit12-5306536/"
            rel="noreferrer" target="_blank"> Atomic Structure: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Outline the order in which fundamental particles were discovered.<br/>
            2. Compare and contrast the three types of fundamental particles. Include an example of
            each type in your table.<br/>
            3. Describe a hydrogen atom so that a child could picture what it looked like. How many
            protons and electrons are there? <br/>
            4. What is the standard model? In what ways is it incomplete?<br/>
            5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener50} value={sci8Essay50}/>

          <span className="days">LESSON 51 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.7/primary/lesson/atomic-forces-ms-ps"
              rel="noreferrer" target="_blank"> 3.7 Atomic Forces</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Which subatomic particles are affected by electromagnetic force? How does this force affect them?<br/>
            2. What is the strong nuclear force? How does it hold the nucleus together?<br/>
            3. How does the weak nuclear force differ from the other fundamental forces inside the atom? How can it
            change an atom of one element to an atom of a different element?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener51} value={sci8Essay51}/>

          <span className="days">LESSON 52 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.8/primary/lesson/atomic-number-ms-ps"
              rel="noreferrer" target="_blank"> 3.8 Atomic Number and Mass Number</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the atomic number of an atom? Why is this number important?<br/>
            2. Describe the atomic mass unit. What does it represent and what does it equal?<br/>
            3. The symbol below represents an isotope of helium. How many protons and neutrons does it have?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener52} value={sci8Essay52}/>

          <span className="days">LESSON 53 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.9/primary/lesson/ions-ms-ps"
              rel="noreferrer" target="_blank"> 3.9 Ion</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why are atoms neutral in electric charge?<br/>
            2. Define ion.<br/>
            3. Compare and contrast cations and anions, and give an example of each.<br/>
            4. Describe how ions form.<br/>
            5. List properties of ions.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener53} value={sci8Essay53}/>

          <span className="days">LESSON 54 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/3.10/primary/lesson/isotopes-ms-ps"
              rel="noreferrer" target="_blank"> 3.10 Isotope</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit13-5306536/"
            rel="noreferrer" target="_blank"> Atomic Structure: Challenge 2 </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are isotopes?<br/>
            2. Why do different isotopes of an element generally have the same physical and chemical properties?<br/>
            3. Describe the three isotopes of hydrogen.<br/>
            4. Relate the concepts of isotope and mass number.<br/>
            5. All oxygen atoms have eight protons, and most have eight neutrons as well. What is the mass number of an
            oxygen isotope that has nine neutrons? What is the name of this isotope?<br/>
            6. Why are many isotopes radioactive?<br/>
            7. How does carbon-14 form?<br/>
            8. Carbon-14 slowly decays over time because it is radioactive. Why does the percent of carbon-14 remain the
            same in living organisms?<br/>
            9. How can the percent of carbon-14 in a dead organism be used to estimate the amount of time that has
            passed since the organism died?<br/>
          10. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener54} value={sci8Essay54}/>

          <span className="days">LESSON 55 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/4.1/primary/lesson/mendeleevs-periodic-table-ms-ps"
              rel="noreferrer" target="_blank"> 4.1 Mendeleev's Periodic Table</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did Mendeleev develop his periodic table of the elements?<br/>
            2. What are the groups in Mendeleev’s table?<br/>
            3. Describe the periods in Mendeleev’s table.<br/>
            4. Why was Mendeleev’s periodic table a good model?<br/>
            5. Many great thinkers have made discoveries that have gone unnoticed until after their deaths. Name a few
            examples and explain their importance.<br/>
            6. How do you think Mendeleev was able to so accurately estimate the properties of undiscovered
            elements?<br/>
            7. Lots of scientists had worked on the periodic table other than Mendeleev. What do you think would have
            changed had they all worked closely together to figure out the best way to arrange the periodic table? Do
            you think collaboration is always the best answer?<br/>
            8. What did Dmitri Mendeleev do that set him apart?<br/>
            9. What is the English translation for the Sanskrit word 'eka'?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener55} value={sci8Essay55}/>

          <span className="days">LESSON 56 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/4.2/primary/lesson/modern-periodic-table-ms-ps"
              rel="noreferrer" target="_blank"> 4.2 Modern Periodic Table</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the modern periodic table?<br/>
            2. Compare and contrast the periods and groups of the modern periodic table.<br/>
            3. Which groups of the modern periodic table contain elements that are classified as metalloids?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener56} value={sci8Essay56}/>

          <span className="days">LESSON 57 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/4.3/primary/lesson/metals-ms-ps"
              rel="noreferrer" target="_blank"> 4.3 Metals</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are metals?<br/>
            2. List several properties of metals.<br/>
            3. Explain why metals can conduct electricity.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener57} value={sci8Essay57}/>

          <span className="days">LESSON 58 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/4.4/primary/lesson/nonmetals-ms-ps"
              rel="noreferrer" target="_blank"> 4.4 Nonmetals</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are nonmetals?<br/>
            2. List properties of nonmetals.<br/>
            3. Explain why nonmetals vary in their reactivity.<br/>
            4. Sulfur cannot conduct electricity. Why not?<br/>
            5. The science teacher in the video does an experiment in which he tests the reactivity of four nonmetal
            gases. How does he test them?<br/>
            6. What is the outcome of the experiment?<br/>
            7. Based on this outcome, what conclusion(s) can you draw?<br/>
            8. Why do the gases differ in reactivity?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener58} value={sci8Essay58}/>

          <span className="days">LESSON 59 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/4.5/primary/lesson/metalloids-ms-ps"
              rel="noreferrer" target="_blank"> 4.5 Metalloids</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit15-5306536/"
            rel="noreferrer" target="_blank"> The Periodic Table: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are metalloids? Which elements are placed in this class of elements?<br/>
            2. Identify physical properties of metalloids that resemble those of metals.<br/>
            3. Which physical property of metalloids is like that of nonmetals?<br/>
            4. Explain the variation in how metalloids react with other elements.<br/>
            5. Use the internet to find some examples of semiconductors being used in electronics. Summarize your
            findings in a poster.<br/>
          6. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener59} value={sci8Essay59}/>

          <span className="days">LESSON 60 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.1/primary/lesson/chemical-bond-ms-ps"
              rel="noreferrer" target="_blank"> 5.1 Chemical Bond</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a chemical bond?<br/>
            2. Explain why hydrogen and oxygen atoms are more stable when they form bonds in a water molecule.<br/>
            3. How do ionic bonds and covalent bonds differ?<br/>
            4. Which types of elements can form covalent bonds?<br/>
            5. How can you tell the number of covalent bonds an element can form?<br/>
            6. Why does one atom of nitrogen form bonds with three atoms of hydrogen?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener60} value={sci8Essay60}/>

          <span className="days">LESSON 61 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.2/primary/lesson/chemistry-of-compounds-ms-ps"
              rel="noreferrer" target="_blank"> 5.2 Chemistry of Compounds</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a compound?<br/>
            2. A mixture is a combination of two or more substances in any proportions. An example of a mixture is
            lemonade, which contains water, lemon juice, and sugar. How do compounds differ from mixtures such as
            lemonade?<br/>
            3. Compare and contrast ionic and covalent.<br/>
            4. What force holds together atoms in compounds?<br/>
            5. Identify at least one property of water that differs from the properties of the elements that form
            it.<br/>
            6. Which two elements make up the compound named butane? What is the ratio of these two elements in butane?
            How would you use chemical symbols to represent butane?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener61} value={sci8Essay61}/>

          <span className="days">LESSON 62 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.3/primary/lesson/chemical-formula-ms-ps"
              rel="noreferrer" target="_blank"> 5.3 Chemical Formula</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Complete the following analogy: A chemical symbol is to an element as a chemical formula is to a(n)
            __________.<br/>
            2. The compound sodium sulfide consists of a ratio of two sodium ions (Na+) to one sulfide ion (S2-). Write
            the chemical formula for this compound.<br/>
            3. A molecule of sulfur dioxide consists of one sulfur atom (S) and two oxygen atoms (O). What is the
            chemical formula for this compound?<br/>
            4. Identify the ratio of atoms in the compound represented by the following chemical formula: N2O5.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener62} value={sci8Essay62}/>

          <span className="days">LESSON 63 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.4/primary/lesson/ionic-bonding-ms-ps"
              rel="noreferrer" target="_blank"> 5.4 Ionic Bond</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an ionic bond? How does it form?<br/>
            2. Why do metals lose electrons and nonmetals gain electrons in the formation of ionic bonds?<br/>
            3. Atoms of lithium (Li) and cesium (Cs) both lose electrons and become positive ions when they from ionic
            bonds. Which type of atom requires more energy to become an ion? Why?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener63} value={sci8Essay63}/>

          <span className="days">LESSON 64 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.5/primary/lesson/ionic-compounds-ms-ps"
              rel="noreferrer" target="_blank"> 5.5 Ionic Compound</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an ionic compound?<br/>
            2. Which classes of elements make up ionic compounds?<br/>
            3. What are crystals?<br/>
            4. How are ionic compounds named? Give an example.<br/>
            5. Describe properties of ionic compounds.<br/>
            6. The ionic compound sodium fluoride is added to toothpaste to prevent tooth decay. Describe the
            composition and structure of this compound.<br/>
            7. How can you predict the ions and their charges that different elements will form?<br/>
            8. What type of formula is used to represent an ionic compound? How is it written? Give an example.<br/>
            9. What ions form when calcium reacts with bromine? What is the name of the ionic compound that results?
            What is the formula for this compound?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener64} value={sci8Essay64}/>

          <span className="days">LESSON 65 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.6/primary/lesson/covalent-bonding-ms-ps"
              rel="noreferrer" target="_blank"> 5.6 Covalent Bond</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a covalent bond?<br/>
            2. Nitrogen is a diatomic element with five valence electrons. Create a model of a molecule of
            nitrogen.<br/>
            3. Which of the following represents a covalent compound?<br/>
            &nbsp;&nbsp; a. O2 <br/>
            &nbsp;&nbsp; b. CO2<br/>
            &nbsp;&nbsp; c. Cl2<br/>
            &nbsp;&nbsp; d. NaCl<br/>
            4. How can you tell the number covalent bonds the atoms of an element can form?<br/>
            5. How many covalent bonds can nitrogen form? How many covalent bonds can chlorine form?<br/>
            6. Why are covalent bonds stronger than ionic bonds?<br/>
            7. Why can’t molecules of a covalent compound conduct electricity?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener65} value={sci8Essay65}/>

          <span className="days">LESSON 66 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.7/primary/lesson/molecular-compounds-ms-ps"
              rel="noreferrer" target="_blank"> 5.7 Molecular Compounds</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit17-5306536/"
            rel="noreferrer" target="_blank"> Chemical Interactions: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are covalent compounds? Give two examples.<br/>
            2. What is the name of the covalent compound that consists of two atoms of silicon and six atoms of bromine?
            What is its chemical formula?<br/>
            3. Compare and contrast the properties of ionic and covalent compounds.<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener66} value={sci8Essay66}/>

          <span className="days">LESSON 67 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.8/primary/lesson/bond-polarity-ms-ps"
              rel="noreferrer" target="_blank"> 5.8 Polarity</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are polar covalent bonds? Give an example.<br/>
            2. When does a polar covalent bond always produce a polar covalent compound?<br/>
            3. If a covalent compound has polar bonds and more than two atoms, what determines whether the compound is
            polar?<br/>
            4. Is water a polar compound? Why or why not?<br/>
            5. Which of the following compounds are polar?<br/>
            &nbsp;&nbsp; a. BF3<br/>
            &nbsp;&nbsp; b. NH3<br/>
            &nbsp;&nbsp; c. CCl4<br/>
            &nbsp;&nbsp; d. CHCl3<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener67} value={sci8Essay67}/>

          <span className="days">LESSON 68 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.9/primary/lesson/hydrogen-bonding-ms-ps"
              rel="noreferrer" target="_blank"> 5.9 Hydrogen Bond</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are polar covalent compounds?<br/>
            2. Define hydrogen bond.<br/>
            3. Explain why hydrogen bonds increase melting and boiling points of polar covalent compounds such as water.<br/>
            4. What is electronegativity?<br/>
            5. In water molecules, why do shared electrons spend more time orbiting the oxygen atom than the hydrogen
            atoms?<br/>
            6. Hydrogen forms hydrogen bonds with oxygen. What is another element besides oxygen that may be involved in
            hydrogen bonds?<br/>
            7. Water has the properties of cohesion and adhesion. Define these two properties, and explain why they
            occur in water.<br/>
            8. Why are hydrogen bonds extremely important in biology?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener68} value={sci8Essay68}/>

          <span className="days">LESSON 69 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.10/primary/lesson/metallic-bonding-ms-ps"
              rel="noreferrer" target="_blank"> 5.10 Metallic Bond</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What are metallic bonds?<br/>
            2. How do metallic bonds relate to the properties of metals?<br/>
            3. What is electricity? Why can metals conduct electricity?<br/>
            4. What can metals conduct besides electricity?<br/>
            5. How could you use an empty pop can to demonstrate that metals can bend without breaking?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener69} value={sci8Essay69}/>

          <span className="days">LESSON 70 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/5.11/primary/lesson/alloys-ms-ps"
              rel="noreferrer" target="_blank"> 5.11 Alloys </a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit18-5306536/"
            rel="noreferrer" target="_blank"> Chemical Interactions: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an alloy? Describe an example.<br/>
            2. What are some useful ways alloys may differ from pure metals?<br/>
          3. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener70} value={sci8Essay70}/>

          <span className="days">LESSON 71 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.1/primary/lesson/solutions-ms-ps"
              rel="noreferrer" target="_blank"> 7.1 Solution</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a solution?<br/>
            2. Identify and describe the two parts of a solution.<br/>
            3. Give an example of a substance that is soluble in water and a substance that is insoluble in water.<br/>
            4. Which of the following statements about solutions is false?<br/>
            &nbsp;&nbsp; a. All solutions are mixtures.<br/>
            &nbsp;&nbsp; b. All solutions are homogeneous.<br/>
            &nbsp;&nbsp; c. All solutions contain two or more compounds.<br/>
            &nbsp;&nbsp; d. All solutions contain at least two substances.<br/>
            1. What state(s) of matter can form a solution?<br/>
            2. The term that means the same throughout is __________.<br/>
            3. A solution in which the solvent is water is called a(n) __________ solution.<br/>
            4. The lesser portion of a solution is the __________.<br/>
            5. The greater portion of a solution is the __________.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener71} value={sci8Essay71}/>

          <span className="days">LESSON 72 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.2/primary/lesson/solute-and-solvent-ms-ps"
              rel="noreferrer" target="_blank"> 7.2 Solute and Solvent</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast the solute and solvent of a solution.<br/>
            2. Describe an example of a gaseous solute dissolved in a liquid solvent.<br/>
            3. Explain the expression “like dissolves like,” and give an example.<br/>
            4. Outline how sodium chloride dissolves in water.<br/>
            5. The majority component of a solution is the __________.<br/>
            6. The minority component of a solution is the __________.<br/>
            7. Decide whether the following statement is true or false, and then explain why: There is no such thing as
            a universal solvent.<br/>
            8. An aqueous solution is a solution in which the solvent is __________.<br/>
            9. A solution in which there is a lot of solute relative to the solvent is __________.<br/>
            10. A solution in which there is little solute relative to the solvent is __________.<br/>
            11. How is the concentration of solute in a solution measured?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener72} value={sci8Essay72}/>

          <span className="days">LESSON 73 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.3/primary/lesson/rate-of-dissolving-ms-ps"
              rel="noreferrer" target="_blank"> 7.3 Rate of Dissolving</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. List three factors that affect the rate at which a solute dissolves in a solvent.<br/>
            2. Gina is trying to dissolve bath salts in her bathwater. How could she speed up the rate of
            dissolving?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener73} value={sci8Essay73}/>

          <span className="days">LESSON 74 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.4/primary/lesson/properties-of-solutions-ms-ps"
              rel="noreferrer" target="_blank"> 7.4 Properties of Solutions</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is freezing point depression?<br/>
            2. Give an example of boiling point elevation.<br/>
            3. Assume you are going to boil water to cook spaghetti. If you add salt to the water, how will this affect
            the temperature at which the water boils? How might it affect the time it takes the spaghetti to cook?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener74} value={sci8Essay74}/>

          <span className="days">LESSON 75 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.5/primary/lesson/solubility-ms-ps"
              rel="noreferrer" target="_blank"> 7.5 Solubility</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is solubility?<br/>
            2. For a given solute and solvent, what factors affect solubility?<br/>
            3. You open a can of room temperature soda and pour it into a glass. Why does the soda go flat? Will it go
            flat faster or slower if you add ice? Why?<br/>
            4. How does Mr. Anderson define solubility in the video?<br/>
            5. What is the solubility of talc in 100 mL of 25 °C water? Explain why talc has this solubility.<br/>
            6. Describe how increasing temperature affects the solubility of solid and liquid solutes.<br/>
            7. Why is there less oxygen in ocean water near the equator than in water at higher latitudes?<br/>
            8. A factory discharges clean, warm water into a nearby stream. Fish keep dying in this part of stream.
            Explain why.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener75} value={sci8Essay75}/>

          <span className="days">LESSON 76 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.6/primary/lesson/saturation-ms-ps"
              rel="noreferrer" target="_blank"> 7.6 Saturation</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Contrast saturated and unsaturated solutions.<br/>
            2. Describe an example of an unsaturated solution of table salt in 1 liter of 20 °C water.<br/>
            3. Miguel added 150 grams of baking soda to a liter of water at 20 °C. No matter how long he keeps stirring
            the solution, he can’t get all of the baking soda to dissolve. Explain why.<br/>
            4. Describe how particles of solute behave when a solution is saturated.<br/>
            5. What is a supersaturated solution? How does it form?<br/>
            6. How is a supersaturated solution used to make rock candy?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener76} value={sci8Essay76}/>

          <span className="days">LESSON 77 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.7/primary/lesson/solution-concentration-ms-ps"
              rel="noreferrer" target="_blank"> 7.7 Concentration</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit25-5306536/"
            rel="noreferrer" target="_blank"> Solutions, Acids, and Bases: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the difference between a dilute and a concentrated solution?<br/>
            2. What is the concentration of a 500 mL solution that contains 5 mL of solute?<br/>
          3. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener77} value={sci8Essay77}/>

          <span className="days">LESSON 78 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.8/primary/lesson/properties-of-acids-ms-ps"
              rel="noreferrer" target="_blank"> 7.8 Acid</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an acid?<br/>
            2. List properties of acids.<br/>
            3. How can you tell whether a compound is an acid?<br/>
            4. Milk is a very weak acid. What might its pH value be?<br/>
            5. Based on your knowledge of the properties of acids, which one of the following substances do you think is
            an acid?<br/>
            &nbsp;&nbsp; a. vinegar<br/>
            &nbsp;&nbsp; b. salt<br/>
            &nbsp;&nbsp; c. sugar<br/>
            &nbsp;&nbsp; d. baking soda<br/>
            6. What is hydrochloric acid?<br/>
            7. Everyone carries around a sample of hydrochloric acid. Where is the hydrochloric acid, and what is its
            function?<br/>
            8. Describe what happens when a cheeseburger and then a goose skull are placed in hydrochloric acid.<br/>
            9. When zinc metal is added to hydrochloric acid, how can you tell that hydrogen gas is produced?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener78} value={sci8Essay78}/>

          <span className="days">LESSON 79 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.9/primary/lesson/properties-of-bases-ms-ps"
              rel="noreferrer" target="_blank"> 7.9 Base</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a base?<br/>
            2. What are some properties of bases?<br/>
            3. How can you use litmus paper to detect a base?<br/>
            4. Ocean water is slightly basic. What might its pH value be?<br/>
            5. Considering the properties of bases, which of the following do you think is a base?<br/>
            &nbsp;&nbsp; a. orange juice<br/>
            &nbsp;&nbsp; b. lemonade<br/>
            &nbsp;&nbsp; c. vinegar<br/>
            &nbsp;&nbsp; d. baking soda<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener79} value={sci8Essay79}/>

          <span className="days">LESSON 80 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.10/primary/lesson/ph-concept-ms-ps"
              rel="noreferrer" target="_blank"> 7.10 pH</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What determines how acidic or basic a solution is?<br/>
            2. What is pH? What is the pH of a neutral substance?<br/>
            3. Why is the pH of the environment important for living things?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener80} value={sci8Essay80}/>

          <span className="days">LESSON 81 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/7.11/primary/lesson/acid-base-neutralization-ms-ps"
              rel="noreferrer" target="_blank"> 7.11 Neutralization Reaction</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit26-5306536/"
            rel="noreferrer" target="_blank"> Solutions, Acids, and Bases: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe a neutralization reaction.<br/>
            2. What is a salt? Give an example.<br/>
            3. Fill in the missing products in the chemical equation below. It represents a neutralization reaction
            between solutions of nitric acid (HNO3) and potassium hydroxide<br/>
            (KOH): HNO3 + KOH → ____ + _____<br/>
4. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener81} value={sci8Essay81}/>

          <span className="days">LESSON 82 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.1/primary/lesson/motion-ms-ps"
              rel="noreferrer" target="_blank"> 9.1 Motion</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is motion defined in science?<br/>
            2. Describe an original example that shows how frame of reference influences the perception of motion.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener82} value={sci8Essay82}/>

          <span className="days">LESSON 83 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.2/primary/lesson/distance-ms-ps"
              rel="noreferrer" target="_blank"> 9.2 Distance</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define distance.<br/>
            2. What is the SI unit for distance? Give an example of something you might measure in this unit.<br/>
            3. Runners in different lanes on an oval racetrack have different starting marks. Explain why.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener83} value={sci8Essay83}/>

          <span className="days">LESSON 84 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.3/primary/lesson/direction-ms-ps"
              rel="noreferrer" target="_blank"> 9.3 Direction</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Think of a short route you commonly take, such as the route from your home to a friend’s house or your
            school. Describe the direction(s) and distance(s) you travel over this route.<br/>
            2. What is a vector? How can an arrow represent distance and direction of motion?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener84} value={sci8Essay84}/>

          <span className="days">LESSON 85 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.4/primary/lesson/speed-ms-ps"
              rel="noreferrer" target="_blank"> 9.4 Speed</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit29-5306536/"
            rel="noreferrer" target="_blank"> Objects in Motion: Challenge 3</a></p>
                    <Video videoUrl="https://www.youtube.com/embed/lXqymrK1Whk?list=PLat8Jejmdx1vp2yUSilEEXBNEffnnLoYh"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is speed?<br/>
            2. If you walk 3 kilometers in 30 minutes, what is your average speed in kilometers per hour?<br/>
            3. Compare and contrast instantaneous and average speed.<br/>
            4. What distance will a truck travel in 3 hours at an average speed of 50 miles per hour?<br/>
          5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener85} value={sci8Essay85}/>

          <span className="days">LESSON 86 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.5/primary/lesson/position-time-graphs-ms-ps"
              rel="noreferrer" target="_blank"> 9.5 Position vs. Time Graphs</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe how to make a position-time graph.<br/>
            2. What is the slope of a line graph? What does the slope of a position-time graph represent?<br/>
            3. Can a line on a position-time graph have a negative slope, that is, can it slope downward from left to
            right? Why or why not?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener86} value={sci8Essay86}/>

          <span className="days">LESSON 87 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.6/primary/lesson/velocity-ms-ps"
              rel="noreferrer" target="_blank"> 9.6 Velocity</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is velocity?<br/>
            2. How does velocity differ from speed? Why is velocity a vector?<br/>
            3. Explain how an arrow can be used to represent velocity. Another car travels northwest for 2 hours and
            covers a distance of 90 miles. What is the average velocity of the car?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener87} value={sci8Essay87}/>

          <span className="days">LESSON 88 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.7/primary/lesson/acceleration-ms-ps"
              rel="noreferrer" target="_blank"> 9.7 Acceleration</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define acceleration. Describe an example of acceleration and explain how velocity is changing.<br/>
            2. When a skydiver opens her parachute, how will her velocity change when the parachute first opens?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener88} value={sci8Essay88}/>

          <span className="days">LESSON 89 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.8/primary/lesson/calculating-acceleration-from-velocity-and-time-ms-ps"
              rel="noreferrer" target="_blank"> 9.8 Calculating Acceleration from Velocity and Time</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Write the equation for acceleration without a change in direction.<br/>
            2. What is the SI unit for acceleration?<br/>
            3. During the final 5 seconds of a race, a cyclist increased her velocity from 4 m/s to 7 m/s. What was her
            average acceleration during those last 5 seconds?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener89} value={sci8Essay89}/>

          <span className="days">LESSON 90 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/9.9/primary/lesson/velocity-time-graphs-ms-ps"
              rel="noreferrer" target="_blank"> 9.9 Velocity vs. Time Graphs</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit30-5306536/"
            rel="noreferrer" target="_blank"> Objects in Motion: Challenge 4</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe a velocity-time graph. What does the slope of the graph line represents?<br/>
            2. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener90} value={sci8Essay90}/>

          <span className="days">LESSON 91 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.1/primary/lesson/force-ms-ps"
              rel="noreferrer" target="_blank"> 10.1 Force</a></p>
          <Video videoUrl="https://www.youtube.com/embed/_LdcxCdB-s8?list=PLat8Jejmdx1vp2yUSilEEXBNEffnnLoYh"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is force?<br/>
            2. Relate force and motion. What forces control the motion of everyday objects?<br/>
            3. Identify and define the SI unit for force. Imagine kicking a soccer ball.<br/>
            4. Describe the force applied to the ball and how the ball will move after it is kicked.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener91} value={sci8Essay91}/>

          <span className="days">LESSON 92 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.2/primary/lesson/combining-forces-ms-ps"
              rel="noreferrer" target="_blank"> 10.2 Combining Forces</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1.What is the net force acting on an object?<br/>
            2. If an object has two forces acting on it, how can the net force equal 0?<br/>
            3. Under what conditions does the net force acting on an object equal the sum of the individual forces?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener92} value={sci8Essay92}/>

          <span className="days">LESSON 93 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.3/primary/lesson/elastic-force-ms-ps"
              rel="noreferrer" target="_blank"> 10.3 Elastic Force</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is elasticity?<br/>
            2. How does an elastic material exert elastic force?<br/>
            3. Explain how elastic force is used to shoot an arrow from a bow.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener93} value={sci8Essay93}/>

          <span className="days">LESSON 94 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.4/primary/lesson/friction-ms-ps"
              rel="noreferrer" target="_blank"> 10.4 Friction</a></p>
                    <Video videoUrl="https://www.youtube.com/embed/wwO2KQ7uZxY?list=PLat8Jejmdx1vp2yUSilEEXBNEffnnLoYh"/>
          <p className="lessons">Answer the questions below. <br/>
            1. Define friction, and explain why it occurs.<br/>
            2. Identify two factors that affect friction. Why does friction warm your hands when you rub them together?<br/>
            3. Outside wooden steps may get slippery when they are wet. How could you make them less slippery?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener94} value={sci8Essay94}/>

          <span className="days">LESSON 95 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.5/primary/lesson/types-of-friction-ms-ps"
              rel="noreferrer" target="_blank"> 10.5 Types of Friction</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit31-5306536/"
            rel="noreferrer" target="_blank"> Forces: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. List four types of friction.<br/>
            2. You can move heavy boxes by sliding them over the ground. Or you can put them on a dolly and then roll
            them over the ground. Explain which way makes it easier to move the boxes. <br/>
            3. What is a fluid? Give an original example of fluid friction.<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener95} value={sci8Essay95}/>

          <span className="days">LESSON 96 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.6/primary/lesson/gravity-ms-ps"
              rel="noreferrer" target="_blank"> 10.6 Gravity</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the traditional definition of gravity?<br/>
            2. Identify factors that influence the strength of gravity between two objects.<br/>Define weight. What is
            the SI unit for weight?<br/>
            3. Explain why an astronaut would weigh less on the moon than on Earth.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener96} value={sci8Essay96}/>

          <span className="days">LESSON 97 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.7/primary/lesson/newtons-law-of-gravity-ms-ps"
              rel="noreferrer" target="_blank"> 10.7 Newton's Law of Gravity</a></p>
                    <Video videoUrl="https://www.youtube.com/embed/3TJZX6JY3JA?list=PLat8Jejmdx1vp2yUSilEEXBNEffnnLoYh"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is Newton’s law of universal gravitation?<br/>
            2. Describe the relationship between the masses of two objects and the force of gravity between them.<br/>
            3. If two objects each have a mass of 10 kg, then the force of gravity between them is<br/>
            &nbsp;&nbsp; a. 100 kg.<br/>&nbsp;&nbsp; b. is constant.<br/>&nbsp;&nbsp; c. depends only on their
            masses.<br/>&nbsp;&nbsp; d. is greater when they are closer together.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener97} value={sci8Essay97}/>

          <span className="days">LESSON 98 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.8/primary/lesson/einsteins-concept-of-gravity-ms-ps"
              rel="noreferrer" target="_blank"> 10.8 Einstein's Theory of Gravity</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did Newton describe gravity?<br/>
            2. How did Einstein explain gravity?<br/>
            3. Why is Einstein’s theory of gravity widely accepted today?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener98} value={sci8Essay98}/>

          <span className="days">LESSON 99 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.9/primary/lesson/acceleration-due-to-gravity-ms-ps"
              rel="noreferrer" target="_blank"> 10.9 Acceleration Due to Gravity</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why do objects fall faster the longer they fall toward Earth?<br/>
            2. What is the rate of acceleration due to gravity?<br/>
            3. How does mass affect acceleration due to gravity?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener99} value={sci8Essay99}/>

          <span className="days">LESSON 100 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.10/primary/lesson/projectile-motion-ms-ps"
              rel="noreferrer" target="_blank"> 10.10 Projectile Motion</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is projectile motion? When does it occur?<br/>
            2. How might knowledge of projectile motion help you shoot baskets in basketball?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener100} value={sci8Essay100}/>

          <span className="days">LESSON 101 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/10.11/primary/lesson/orbital-motion-ms-ps"
              rel="noreferrer" target="_blank"> 10.11 Orbital Motion</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit32-5306536/"
            rel="noreferrer" target="_blank"> Forces: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define orbit and orbital motion, and explain why orbital motion occurs. <br/>
            2. In addition to the moon, artificial satellites also orbit Earth.  What factors do you think must be taken into account to ensure that
            a satellite keeps orbiting Earth rather than falling back to Earth’s surface?<br/>
            3. Earth is closer to nearby planets including Venus and Mars than it is to the sun. Why don’t these other
            planets pull Earth toward them and cause it to veer off its orbit around the sun.<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener101} value={sci8Essay101}/>

          <span className="days">LESSON 102 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.1/primary/lesson/newtons-first-law-ms-ps"
              rel="noreferrer" target="_blank"> 11.1 Newton's First Law</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. State Newton’s first law of motion.<br/>
            2. You don’t need to push off with a foot against the ground to
            start a skateboard rolling down a bank. Does this violate Newton’s first law of motion? Why or why not?<br/>
            3. Nina ran into a rough patch of pavement, but she thought she could ride right over it. Instead, the
            skateboard stopped suddenly and Nina ended up on the ground. Explain what happened. Now that you know about
            Newton’s first law of motion, how might you use it to ride a skateboard more safely?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener102} value={sci8Essay102}/>

          <span className="days">LESSON 103 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.2/primary/lesson/inertia-ms-ps"
              rel="noreferrer" target="_blank"> 11.2 Inertia</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is inertia?<br/>
            2. How does inertia affect the motion of an object?<br/>
            3. What is the relationship between inertia and mass?<br/>
            4. In the photo of the skateboarder from the chapter, gravity is exerting a downward force on the
            skateboard. Why doesn’t it tip over the edge and start rolling down the side of the half-pipe?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener103} value={sci8Essay103}/>

          <span className="days">LESSON 104 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.3/primary/lesson/newtons-second-law-ms-ps"
              rel="noreferrer" target="_blank"> 11.3 Newton's Second Law</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. State Newton’s second law of motion.<br/>
            2. How can Newton’s second law of motion be represented with an equation?<br/>
            3. If the net force acting on an object doubles, how will the object’s acceleration be affected?<br/>
            4. Tony has a mass of 50 kg, and his friend Sam has a mass of 45 kg. Assume that both friends push off on
            their rollerblades with the same force. Explain which boy will have greater acceleration.<br/>
            5. How is force proportional to acceleration?<br/>
            6. How is force proportional to mass?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener104} value={sci8Essay104}/>

          <span className="days">LESSON 105 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.4/primary/lesson/calculating-acceleration-from-force-and-mass-ms-ps"
              rel="noreferrer" target="_blank"> 11.4 Calculating Acceleration from Force and Mass</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the equation for calculating the acceleration of an object when its mass and the net force acting
            on it are known?<br/>
            2. Corey is a skateboard rider. The combined mass of Corey and his skateboard is 60 kg. At the top of a
            jump, the net force acting on him is 30 Newtons. What is his acceleration at that moment?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener105} value={sci8Essay105}/>

          <span className="days">LESSON 106 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.5/primary/lesson/mass-vs-weight-ms-ps"
              rel="noreferrer" target="_blank"> 11.5 Weight</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is weight? What is the SI unit for weight?<br/>
            2. Explain how to calculate an object’s weight on Earth from its mass.<br/>
            3. Sam’s older sister Nina, has a mass of 52 kilograms. How much does Nina weigh in Newtons? How much does
            she weigh in pounds?<br/>
            4. The moon has less gravity than Earth. If you were on the moon, how would your weight be different than it
            is on Earth?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener106} value={sci8Essay106}/>

          <span className="days">LESSON 107 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.6/primary/lesson/newtons-third-law-ms-ps"
              rel="noreferrer" target="_blank"> 11.6 Newton's Third Law</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. State Newton’s third law of motion.<br/>
            2. Describe an example of an action and reaction. Identify the forces and their directions.<br/>
            3. Explain why action and reaction forces are not balanced forces.<br/>
            4. Describe all the forces acting on the coffee mug as it is resting on the coffee table.Describe
            protons.<br/>
            5. Identify one action and reaction force pair involving the coffee mug resting on the coffee table.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener107} value={sci8Essay107}/>

          <span className="days">LESSON 108 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.7/primary/lesson/momentum-ms-ps"
              rel="noreferrer" target="_blank"> 11.7 Momentum</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define momentum.<br/>
            2. Write the equation for calculating momentum from mass and velocity.<br/>
            3. What is the SI unit for momentum?<br/>
            4. Which skateboarder has greater momentum?<br/>
            &nbsp;&nbsp; a. Skateboarder A: mass = 60 kg; velocity = 1.5 m/s<br/>
            &nbsp;&nbsp; b. Skateboarder B: mass = 50 kg; velocity = 2.0 m/s<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener108} value={sci8Essay108}/>

          <span className="days">LESSON 109 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/11.8/primary/lesson/law-of-conservation-of-momentum-ms-ps"
              rel="noreferrer" target="_blank"> 11.8 Conservation of Momentum</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit33-5306536/"
            rel="noreferrer" target="_blank"> Newton's Laws of Motion: Challenge</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. State the law of conservation of momentum.<br/>
            2. Write your score for the challenge.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener109} value={sci8Essay109}/>

          <span className="days">LESSON 110 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.1/primary/lesson/work-ms-ps"
              rel="noreferrer" target="_blank"> 13.1 Work</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is work defined in physics?<br/>
            2. Write the equation that relates work to force and distance.<br/>
            3. Assume that a friend hands you a heavy book to hold as he turns the combination lock on his locker. Which
            of you does more work?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener110} value={sci8Essay110}/>

          <span className="days">LESSON 111 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.2/primary/lesson/calculating-work-ms-ps"
              rel="noreferrer" target="_blank"> 13.2 Calculating Work </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Write the equation for calculating work when force and distance are known.<br/>
            2. What is the SI unit for work? What does it represent?<br/>
            3. Clarissa helps her mom put the 200-Newton lawn mower in the back of her mom’s truck. They lift the mower
            up from the ground to the truck bed, which is 1.1 meters above the ground. How much work do Clarissa and her
            mom do?<br/>
            4. Clarissa climbs into the back of the truck to tie the lawn mower in place. If she does 528 joules of work
            raising herself to the truck bed, how much force did she apply?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener111} value={sci8Essay111}/>

          <span className="days">LESSON 112 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.3/primary/lesson/power-ms-ps"
              rel="noreferrer" target="_blank"> 13.3 Power</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is power? What is the SI unit for power?<br/>
            2. How much power does a toaster have if it does 1,000 joules of work in 30 seconds?<br/>
            3. How much work can be done in 30 seconds by a 1000-watt microwave oven?<br/>
            4. Lamar’s mom has a car with a 182-horsepower engine. How many watts of power is that?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener112} value={sci8Essay112}/>

          <span className="days">LESSON 113 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.4/primary/lesson/simple-machines-ms-ps"
              rel="noreferrer" target="_blank"> 13.4 Machine</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a machine?<br/>
            2. List three ways that machines may change a force.<br/>
            3. Can a machine increase both the force and the distance over which the force is applied? Why or why
            not?<br/>
            4. A broom is an example of a machine. Where are the input and output forces applied?<br/>
            5. Which type of simple machine is represented by each of the following tools?<br/>
            &nbsp;&nbsp; a. hammer<br/>
            &nbsp;&nbsp; b. ladder<br/>
            &nbsp;&nbsp; c. knife<br/>
            &nbsp;&nbsp; d. doorknob<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener113} value={sci8Essay113}/>

          <span className="days">LESSON 114 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.5/primary/lesson/efficiency-ms-ps"
              rel="noreferrer" target="_blank"> 13.5 Efficiency</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Why is the output work of a machine always less than the input work done on the machine?<br/>
            2. What is the efficiency of a machine?<br/>
            3. If a machine requires an input of 5000 joules of work to put out 4000 joules of work, what is the
            machine’s efficiency?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener114} value={sci8Essay114}/>

          <span className="days">LESSON 115 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.6/primary/lesson/mechanical-advantage-ms-ps"
              rel="noreferrer" target="_blank"> 13.6 Mechanical Advantage</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit35-5306536/"
            rel="noreferrer" target="_blank"> Work and Machines: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the mechanical advantage of a machine?<br/>
            2. How is the actual mechanical advantage of a machine calculated?<br/>
            3. How does ideal mechanical advantage differ from actual mechanical advantage? Why is the ideal mechanical
            advantage of a machine always greater than the actual mechanical advantage of the machine?<br/>
            4. A hammer has an input distance of 9 cm and an output distance of 3 cm. What is its ideal mechanical
            advantage?<br/>
          5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener115} value={sci8Essay115}/>

          <span className="days">LESSON 116 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.7/primary/lesson/inclined-plane-ms-ps"
              rel="noreferrer" target="_blank"> 13.7 Inclined Plane</a></p>

          <Video videoUrl="https://www.youtube.com/embed/5c4J_PW9wsg?list=PLat8Jejmdx1tsFo72_p159DE5-2-oW_qJ"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an inclined plane?<br/>
            2. How does an inclined plane make work easier? How does it change the force that is applied to the inclined
            plane?<br/>
            3. Why is the mechanical advantage of an inclined plane greater than 1?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener116} value={sci8Essay116}/>

          <span className="days">LESSON 117 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.8/primary/lesson/wedge-ms-ps"
              rel="noreferrer" target="_blank"> 13.8 Wedge</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a wedge?<br/>
            2. How does a wedge change the force applied to it?<br/>
            3. Which of the following machines includes a wedge?<br/>
            &nbsp;&nbsp; a. axe<br/>
            &nbsp;&nbsp; b. hammer<br/>
            &nbsp;&nbsp; c. bolt<br/>
            &nbsp;&nbsp; d. chisel<br/>
            4. Explain why the mechanical advantage of a wedge is greater than 1.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener117} value={sci8Essay117}/>

          <span className="days">LESSON 118 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.9/primary/lesson/screw-ms-ps"
              rel="noreferrer" target="_blank"> 13.9 Screw</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a screw?<br/>
            2. How are screws used?<br/>
            3. Give an example of a screw that is not mentioned in the article.<br/>
            4. Why is the mechanical advantage of a screw always greater than 1?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener118} value={sci8Essay118}/>

          <span className="days">LESSON 119 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.10/primary/lesson/lever-ms-ps"
              rel="noreferrer" target="_blank"> 13.10 Lever
            </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a lever?<br/>
            2. Where is the fulcrum of a broom and where are the input and output forces applied?<br/>
            3. If you use a screwdriver to pry the lid off a paint can, which class of lever is the screwdriver? How
            does the screwdriver change the force that is applied to it? What is its ideal mechanical advantage?<br/>
            4. Give an example of a lever that isn’t mentioned in the article. What is its class?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener119} value={sci8Essay119}/>

          <span className="days">LESSON 120 </span>

          <p>Watch the videos and answer the questions below from Andy Peterson and Zack Patterson with TedEd.
            <Video videoUrl="https://www.youtube.com/embed/YlYEi0PgG1g"/>
            <Video videoUrl="https://www.youtube.com/embed/jAPxALm9fZA"/>

            1. Billy weighs twice as much as Jasmine. Where should they place the fulcrum if they want to balance out the teeter-totter? <br/>
            2. Give examples of levers.<br/>
            3. Do levers pivot on the fulcrum or the resistance arm?<br/>
            4. Define what a machine is.  Define what work is.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener120} value={sci8Essay120}/>

          <span className="days">LESSON 121 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.11/primary/lesson/wheel-and-axle-ms-ps"
              rel="noreferrer" target="_blank"> 13.11 Wheel and Axle</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe a wheel and axle.<br/>
            2. Give an example of a wheel and axle that isn’t mentioned in the article.<br/>
            3. When you pedal a bicycle, you apply force to the back wheel and axle. Is the force applied to the wheel
            or to the axle? What is the mechanical advantage of the bicycle wheel and axle?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener121} value={sci8Essay121}/>

          <span className="days">LESSON 122 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.12/primary/lesson/pulley-ms-ps"
              rel="noreferrer" target="_blank"> 13.12 Pulley</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a pulley? What work do pulleys do?<br/>
            2. Compare and contrast pulleys A and B in the illustration below.<br/>
            <img alt="cylinder" src={require("../../public/images/science/13-1Figure1.jpg")}/>
            3. In the compound pulley pictured below, how many Newtons of force are applied to the load if 200 Newtons
            of effort force are applied to the pulley?<br/>
            <img alt="cylinder" src={require("../../public/images/science/13-1Figure2.jpg")}/>
            4. How would you construct a compound pulley with an ideal mechanical advantage of 6?<br/></p>
           <textarea className="textArea" onChange={onChangeSci8Listener122} value={sci8Essay122}/>

          <span className="days">LESSON 123 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/13.13/primary/lesson/compound-machine-ms-ps"
              rel="noreferrer" target="_blank"> 13.13 Compound Machine</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit36-5306536/"
            rel="noreferrer" target="_blank"> Work and Machines: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a compound machine? Give an example.<br/>
            2. What simple machines are found in a wheelbarrow? How do they make it easier to carry heavy objects?<br/>
            3. Why do compound machines tend to have lower efficiency but greater mechanical advantage than simple
            machines?<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener123} value={sci8Essay123}/>

          <span className="days">LESSON 124 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.1/primary/lesson/energy-ms-ps"
              rel="noreferrer" target="_blank"> 14.1 Energy</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is energy defined in science?<br/>
            2. What is the SI unit for energy?<br/>
            3. Name two forms that energy may take.<br/>
            4. Which type of energy is the energy of a moving tennis ball? Is it kinetic energy or potential
            energy?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener124} value={sci8Essay124}/>

          <span className="days">LESSON 125 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.2/primary/lesson/kinetic-energy-ms-ps"
              rel="noreferrer" target="_blank"> 14.2 Kinetic Energy</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is kinetic energy?<br/>
            2. The kinetic energy of a moving object depends on its mass and its
            &nbsp;&nbsp; a. volume.<br/>
            &nbsp;&nbsp; b. velocity.<br/>
            &nbsp;&nbsp; c. distance.<br/>
            &nbsp;&nbsp; d. acceleration.<br/>
            3. Imagine a bowling ball is whizzing down a bowling lane at 4.0 m/s. If the mass of the bowling ball is 7.0
            kg, what is its kinetic energy?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener125} value={sci8Essay125}/>

          <span className="days">LESSON 126 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.3/primary/lesson/potential-energy-ms-ps"
              rel="noreferrer" target="_blank"> 14.3 Potential Energy</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is potential energy?<br/>
            2. Compare and contrast gravitational and elastic potential energy, and give an example of each.<br/>
            3. The diver on the diving board in the opening picture weighs 500 Newtons. The diving board is 5 meters
            above the ground. What is the diver’s gravitational potential energy?<br/>
            4. Why does food have potential energy?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener126} value={sci8Essay126}/>

          <span className="days">LESSON 127 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.4/primary/lesson/forms-of-energy-ms-ps"
              rel="noreferrer" target="_blank"> 14.4 Forms of Energy</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. List and describe five different forms of energy. Include an example of each form.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener127} value={sci8Essay127}/>

          <span className="days">LESSON 128 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.5/primary/lesson/energy-conversion-ms-ps"
              rel="noreferrer" target="_blank"> 14.5 Energy Conversion</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit37-5306536/"
            rel="noreferrer" target="_blank"> Introduction to Energy: Challenge 1</a></p>   <p
          className="lessons">Answer the questions below. <br/>
          1. Define energy conversion.<br/>
          2. Relate energy conversion to the law of conservation of energy.<br/>
          3. Describe an original example of energy changing from one form to two other forms.<br/>
          4. Explain how energy changes back and forth between kinetic and potential energy when you jump on a
          trampoline. <br/>
        5. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener128} value={sci8Essay128}/>

          <span className="days">LESSON 129 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.6/primary/lesson/non-renewable-energy-resources-ms-ps"
              rel="noreferrer" target="_blank"> 14.6 Nonrenewable Energy Resources </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define natural resource. What are nonrenewable natural resources?<br/>
            2. List four commonly used nonrenewable energy resources.<br/>
            3. Explain how fossil fuels formed.<br/>
            4. Compare and contrast the three types of fossil fuels in terms of the pollution they produce.<br/>
            5. Present the pros and cons of nuclear energy use.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener129} value={sci8Essay129}/>

          <span className="days">LESSON 130 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.7/primary/lesson/renewable-energy-resources-ms-ps"
              rel="noreferrer" target="_blank"> 14.7 Renewable Energy Resources</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a renewable resource?<br/>
            2. List five renewable energy sources. What form of energy does each resource supply?<br/>
            3. Why are renewable energy resources needed?<br/>
            4. Give two examples of renewable energy resources.<br/>
            5. What is one main advantage of the examples given in this video?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener130} value={sci8Essay130}/>

          <span className="days">LESSON 131 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.8/primary/lesson/energy-use-ms-ps"
              rel="noreferrer" target="_blank"> 14.8 Energy Use</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. List energy resources in the U.S. and how much of each resource is used.<br/>
            2. What percentage of this use is renewable energy?<br/>
            3. What kind of energy does the US use the most. It accounts for what percentage f our energy use?<br/>
            4. Compare and contrast the use of oil in the U.S. with oil use in other nations.<br/>
          5. How does the use of oil and other fossil fuels relate to pollution?</p>
          <textarea className="textArea" onChange={onChangeSci8Listener131} value={sci8Essay131}/>

          <span className="days">LESSON 132 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/14.9/primary/lesson/energy-conservation-ms-ps"
              rel="noreferrer" target="_blank"> 14.9 Energy Conservation</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is energy conservation?<br/>
            2. Describe one practical way that you could save transportation energy in your own life.<br/>
            3. Describe the various ways energy is wasted in a house. Then explain how energy could be conserved
            instead.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener132} value={sci8Essay132}/>

          <span className="days">LESSON 133 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/15.1/primary/lesson/thermal-energy-ms-ps"
              rel="noreferrer" target="_blank"> 15.1 Thermal Energy</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast thermal energy and temperature.<br/>
            2. Explain how an object with a higher temperature can have less thermal energy than an object with a lower
            temperature.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener133} value={sci8Essay133}/>

          <span className="days">LESSON 134 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/15.2/primary/lesson/temperature-ms-ps"
              rel="noreferrer" target="_blank"> 15.2 Temperature</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is temperature?<br/>
            2. Explain how the thermometer pictured in this article measures temperature.<br/>
            3. Assume that the temperature outside is 293 Kelvin but you’re familiar only with the Fahrenheit scale. Do
            you need to wear a hat and gloves when you go outside? To find out, convert the Kelvin temperature to
            Fahrenheit. (Hint: Convert the Kelvin temperature to Celsius first.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener134} value={sci8Essay134}/>

          <span className="days">LESSON 135 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/15.3/primary/lesson/heat-ms-ps"
              rel="noreferrer" target="_blank"> 15.3 Heat</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define heat.<br/>
            2. Describe how thermal energy is transferred.<br/>
            3. Hot cocoa is poured into a cold mug. Apply the concept of heat to explain what happens next.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener135} value={sci8Essay135}/>

          <span className="days">LESSON 136 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/15.4/primary/lesson/specific-heat-ms-ps"
              rel="noreferrer" target="_blank"> 15.4 Specific Heat</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit39-5306536/"
            rel="noreferrer" target="_blank"> Thermal Energy and Heat: Challenge 1</a></p> <p className="lessons">Answer
          the questions below. <br/>
          1. What is specific heat?<br/>
          2. Water in a lake always warms up in the summer more slowly than the adjacent land. Use the concept of
          specific heat to explain why.<br/>
        3. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener136} value={sci8Essay136}/>

          <span className="days">LESSON 137 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.1/primary/lesson/mechanical-wave-ms-ps"
              rel="noreferrer" target="_blank"> 16.1 Mechanical Wave
            </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define mechanical wave.<br/>
            2. What is the medium of a mechanical wave?<br/>
            3. List three types of mechanical waves.<br/>
            4. If you shake one end of a rope up and down, a wave passes through the rope. Which type of wave is
            it?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener137} value={sci8Essay137}/>

          <span className="days">LESSON 138 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.2/primary/lesson/transverse-wave-ms-ps"
              rel="noreferrer" target="_blank"> 16.2 Transverse Wave
            </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a transverse wave? <br/>
            2. Where are the crests and troughs in a transverse wave?<br/>
            3. Infer how S waves might affect structures such as buildings.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener138} value={sci8Essay138}/>

          <span className="days">LESSON 139 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.3/primary/lesson/longitudinal-wave-ms-ps"
              rel="noreferrer" target="_blank"> 16.3 Longitudinal Wave</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a longitudinal wave?<br/>
            2. Describe a longitudinal wave, the direction of the wave, and the direction of
            the vibrating particles of the medium. What are compressions and rarefactions?<br/>
            3. Describe P waves and protons.<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener139} value={sci8Essay139}/>

          <span className="days">LESSON 140 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.4/primary/lesson/surface-wave-ms-ps"
              rel="noreferrer" target="_blank"> 16.4 Surface Wave</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit41-5306536/"
            rel="noreferrer" target="_blank"> Waves: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a surface wave?<br/>
            2. Describe how particles of the medium move in a surface wave.<br/>
            3. Explain how surface waves change when they reach shallow water near shore.<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener140} value={sci8Essay140}/>

          <span className="days">LESSON 141 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.5/primary/lesson/wave-amplitude-ms-ps"
              rel="noreferrer" target="_blank"> 16.5 Wave Amplitude</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define wave amplitude.<br/>
            2. How does wave amplitude relate to wave energy.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener141} value={sci8Essay141}/>

          <span className="days">LESSON 142 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.6/primary/lesson/wavelength-ms-ps"
              rel="noreferrer" target="_blank"> 16.6 Wavelength</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the wavelength of a wave?<br/>
            2. How do you measure the wavelength of a transverse wave?<br/>
            3. How do you measure the wavelength of a longitudinal wave?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener142} value={sci8Essay142}/>

          <span className="days">LESSON 143 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.7/primary/lesson/wave-frequency-ms-ps"
              rel="noreferrer" target="_blank"> 16.7 Wave Frequency</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is wave frequency?<br/>
            2. What is the SI unit for wave frequency?<br/>
            3. Assume that 10 waves pass a fixed point in 5 seconds. What is the frequency of the waves in hertz?<br/>
            4. Relate wave frequency to the energy of waves.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener143} value={sci8Essay143}/>

          <span className="days">LESSON 144 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.8/primary/lesson/wave-speed-ms-ps"
              rel="noreferrer" target="_blank"> 16.8 Wave Speed</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is wave speed?<br/>
            2. What is the speed of a wave that has a wavelength of 2 m and a frequency of 1.5 Hz?<br/>
            3. Calculate the frequency of a wave that is traveling at a speed of 3.0 m/s and has a wavelength of 1.2
            m.<br/>
            4. Sound energy travels through matter in waves. Do sound waves travel faster through air or water? Explain
            your answer.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener144} value={sci8Essay144}/>

          <span className="days">LESSON 145 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.9/primary/lesson/wave-interactions-ms-ps"
              rel="noreferrer" target="_blank"> 16.9 Wave Interactions</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is reflection? What happens if waves strike a reflective surface at an angle other than 90°?<br/>
            2. Define refraction. Why does refraction occur?<br/>
            3. When does diffraction occur? How is wavelength related to diffraction?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener145} value={sci8Essay145}/>

          <span className="days">LESSON 146 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/16.10/primary/lesson/wave-interference-ms-ps"
              rel="noreferrer" target="_blank"> 16.10 Wave Interference</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit42-5306536/"
            rel="noreferrer" target="_blank"> Waves: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is wave interference?<br/>
            2. What is constructive and destructive interference? Compare and contrast them.<br/>
            3. What are standing waves? How do they form?<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener146} value={sci8Essay146}/>

          <span className="days">LESSON 147 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.1/primary/lesson/sound-waves-ms-ps"
              rel="noreferrer" target="_blank"> 17.1 Sound Wave</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is sound defined in science? How does this definition differ from the common meaning of the
            word?<br/>
            2. Hitting a drum generates sound waves. Create a diagram to show how the sound waves begin and how they
            reach a person’s ears.<br/>
            3. How do you think earplugs work?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener147} value={sci8Essay147}/>

          <span className="days">LESSON 148 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.2/primary/lesson/speed-of-sound-ms-ps"
              rel="noreferrer" target="_blank"> 17.2 Speed of Sound</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the speed of sound in dry air at 20 °C?<br/>
            2. Describe variation in the speed of sound through various media.<br/>
            3. Explain how temperature affects the speed of sound.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener148} value={sci8Essay148}/>

          <span className="days">LESSON 149 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.3/primary/lesson/intensity-and-loudness-of-sound-ms-ps"
              rel="noreferrer" target="_blank"> 17.3 Intensity and Loudness of Sound</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define loudness and intensity of sound. How are the two concepts related?<br/>
            2. What is the unit of intensity of sound?<br/>
            3. At what decibel level do sounds start to become harmful to the ears and hearing?<br/>
            4. Relate amplitude and distance to the intensity and loudness of sound.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener149} value={sci8Essay149}/>

          <span className="days">LESSON 150 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.4/primary/lesson/frequency-and-pitch-of-sound-ms-ps"
              rel="noreferrer" target="_blank"> 17.4 Frequency and Pitch of Sound</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is the pitch of sound?<br/>
            2. How is the pitch of sound related to the frequency of sound waves?<br/>
            3. Define infrasound and ultrasound.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener150} value={sci8Essay150}/>

          <span className="days">LESSON 151 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.5/primary/lesson/doppler-effect-ms-ps"
              rel="noreferrer" target="_blank"> 17.5 Doppler Effect</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit43-5306536/"
            rel="noreferrer" target="_blank"> Sound: Challenge 3</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define the Doppler effect.<br/>
            2. Explain why the Doppler effect occurs.<br/>
            3. Does the siren of a moving police car seem to change pitch to the police officers inside the car? Why or
            why not?<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener151} value={sci8Essay151}/>

          <span className="days">LESSON 152 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.6/primary/lesson/hearing-and-the-ear-ms-ps"
              rel="noreferrer" target="_blank"> 17.6 Hearing and the Ear</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Summarize how we hear sounds.<br/>
            2. Identify the structures of the outer ear and state their functions.<br/>
            3. The three tiny bones of the middle ear work together as a lever. A lever is a simple machine that may
            increase the force applied to it. How does this relate to the function of the middle ear?<br/>
            4. Loud sounds can damage the hair cells lining the cochlea of the inner ear. Explain how this might affect
            the ability to hear sound.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener152} value={sci8Essay152}/>

          <span className="days">LESSON 153 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.7/primary/lesson/hearing-loss-ms-ps"
              rel="noreferrer" target="_blank"> 17.7 Hearing Loss</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is hearing?<br/>
            2. How is deafness defined?<br/>
            3. How can loud sounds, like a cheering crowd at a game, contribute to hearing loss?<br/>
            4. Write a public service announcement explaining how and why to protect the ears from loud sounds.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener153} value={sci8Essay153}/>

          <span className="days">LESSON 154 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.8/primary/lesson/musical-instruments-ms-ps"
              rel="noreferrer" target="_blank"> 17.8 Musical Instruments</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. List three properties of most musical instruments.<br/>
            2. Define resonance. How is resonance used in musical instruments?<br/>
            3. Identify the three basic categories of musical instruments.<br/>
            4. What is your favorite musical instrument? In which category does it belong? How do you think it makes
            sounds and changes pitch?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener154} value={sci8Essay154}/>

          <span className="days">LESSON 155 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/17.9/primary/lesson/ultrasound-ms-ps"
              rel="noreferrer" target="_blank"> 17.9 Ultrasound</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit44-5306536/"
            rel="noreferrer" target="_blank"> Sound: Challenge 4</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define ultrasound.<br/>
            2. Explain how animals use echolocation to find things in the dark.<br/>
            3. What does sonar stand for? How is it used to locate underwater objects?<br/>
            4. A sonar device on a ship sends ultrasound waves under the water to locate a sunken ship. It takes the
            ultrasound wave 0.6 seconds to travel from the device to the sunken ship and back again. How far below the
            surface is the sunken ship?<br/>
            5. How is ultrasonography like sonar?<br/>
          6. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener155} value={sci8Essay155}/>

          <span className="days">LESSON 156 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.1/primary/lesson/sources-of-visible-light-ms-ps"
              rel="noreferrer" target="_blank"> 19.1 Sources of Visible Light</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is visible light?<br/>
            2. Define incandescence, and give an example of an incandescent light source.<br/>
            3. What is luminescence?<br/>
            4. Describe the three ways that luminescence can occur. <br/>
            5. On a sunny day, white sand on a beach seems to glow with light. What process explains why the sand is so
            bright?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener156} value={sci8Essay156}/>

          <span className="days">LESSON 157 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.2/primary/lesson/artificial-light-ms-ps"
              rel="noreferrer" target="_blank"> 19.2 Artificial Light</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast incandescent and compact fluorescent light bulbs.<br/>
            2. How do neon lights produce visible light?<br/>
            3. Where are vapor lights used? Why are they a good choice for these places?<br/>
            4. What are some pros of LED lights?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener157} value={sci8Essay157}/>

          <span className="days">LESSON 158 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.3/primary/lesson/visible-light-and-matter-ms-ps"
              rel="noreferrer" target="_blank"> 19.3 Visible Light and Matter</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe three ways that light can interact with matter.<br/>
            2. Transmitted light may be refracted or scattered. When does each process occur?<br/>
            3. Why does matter increase in temperature when it absorbs light?<br/>
            4. Compare and contrast transparent, translucent, and opaque matter.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener158} value={sci8Essay158}/>

          <span className="days">LESSON 159 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.4/primary/lesson/color-ms-ps"
              rel="noreferrer" target="_blank"> 19.4 Light and Color</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit47-5306536/"
            rel="noreferrer" target="_blank"> Visible Light: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What determines the color of visible light?<br/>
            2. Which color of light has the longest wavelength? Which color has the shortest wavelength?<br/>
            3. How does a prism separate visible light into its different colors?<br/>
            4. The human eye can detect only three colors of light. What three colors are they? How can we perceive
            other colors of light?<br/>
            5. What are pigments? Identify the primary colors of pigments. If you combined the three primary pigment
            colors, what color would you get?<br/>
          6. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener159} value={sci8Essay159}/>

          <span className="days">LESSON 160 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.5/primary/lesson/law-of-reflection-ms-ps"
              rel="noreferrer" target="_blank"> 19.5 Reflection</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an image?<br/>
            2. What is the law of reflection?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener160} value={sci8Essay160}/>

          <span className="days">LESSON 161 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.6/primary/lesson/mirrors-ms-ps"
              rel="noreferrer" target="_blank"> 19.6 Mirrors</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an image? How do real and virtual images differ?<br/>
            2. Define the focal point of a mirror.<br/>
            3. Describe the image formed by a plane mirror.<br/>
            4. What type of image is formed by a concave mirror if the object is between the mirror and the focal point?<br/>
            5. Mirrors are sometimes placed at street intersections so drivers can see around blind corners. What type
            of mirror is used for this purpose? What type of image does it form?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener161} value={sci8Essay161}/>

          <span className="days">LESSON 162 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.7/primary/lesson/refraction-ms-ps"
              rel="noreferrer" target="_blank"> 19.7 Refraction</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. You may have heard that the speed of light is constant. Is this true? Why or why not?<br/>
            2. What is the refraction of light? When and why does it occur?<br/>
            3. Draw a diagram to show how visible light refracts when it passes from air to diamond.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener162} value={sci8Essay162}/>

          <span className="days">LESSON 163 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.8/primary/lesson/lens-ms-ps"
              rel="noreferrer" target="_blank"> 19.8 Lenses</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a lens? What does it do?<br/>
            2. Describe the image formed by a concave lens.<br/>
            3. Explain how a hand lens forms an enlarged image of an object.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener163} value={sci8Essay163}/>

          <span className="days">LESSON 164 </span>
          <p>Watch the video below: <b>How do glasses help us see </b>by TedEd</p>
          <Video videoUrl="https://www.youtube.com/embed/ypF037wlYZg"/>
          <p className="lessons">Answer the questions below. <br/>
            1. How do the cornea and the lens of the eye differ in the way they refract light so that it focuses on the
            retina?<br/>
            2. Was there anything new you learned in the video that surprised you?<br/>
            3. So many people in the world have uncorrected refractive errors, despite multiple treatments options. Why
            is this?<br/>
            4. There is increasing evidence that focusing on things held close to the eyes for long periods of time and
            not spending much time outdoors increases the risk of short sightedness in adolescents. How might teenagers
            be encouraged to spend less time texting and more time outside?<br/>
            5. Which part of the eye refracts light?<br/>
            6. Approximately how many people in the world are living with uncorrected refractive errors?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener164} value={sci8Essay164}/>

          <span className="days">LESSON 165 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.9/primary/lesson/optical-instruments-ms-ps"
              rel="noreferrer" target="_blank"> 19.9 Optical Instruments</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Define optics.<br/>
            2. Explain how a compound microscope uses convex lenses to make an enlarged image of a tiny object.<br/>
            3. Compare and contrast reflecting and refracting telescopes.<br/>
            4. Write a paragraph explaining how a camera works. Assume you are explaining it to a much younger student. <br/>
            5. Explain how reflection is involved in the production of laser light.<br/>
            6. How are optical fibers used?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener165} value={sci8Essay165}/>

          <span className="days">LESSON 166 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.10/primary/lesson/vision-and-the-eye-ms-ps"
              rel="noreferrer" target="_blank"> 19.10 Vision and the Eye</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Summarize how the eye gathers and focuses light.<br/>
            2. Explain the meaning of the following sentence: The eyes sense light but the brain sees.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener166} value={sci8Essay166}/>

          <span className="days">LESSON 167 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.11/primary/lesson/vision-problems-and-corrective-lenses-ms-ps"
              rel="noreferrer" target="_blank"> 19.11 Vision Problems and Corrective Lenses</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit48-5306536/"
            rel="noreferrer" target="_blank"> Visible Light: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Compare and contrast myopia and hyperopia.<br/>
            2. Explain how lenses can be used to correct vision problems.<br/>
          3. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener167} value={sci8Essay167}/>

          <span className="days">LESSON 168 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.1/primary/lesson/electric-charge-and-electric-force-ms-ps"
              rel="noreferrer" target="_blank"> 20.1 Electric Charge and Electric Force</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is electric charge?<br/>
            2. Describe how electric forces between charged particles work.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener168} value={sci8Essay168}/>

          <span className="days">LESSON 169 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.2/primary/lesson/electric-fields-ms-ps"
              rel="noreferrer" target="_blank"> 20.2 Electric Fields</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an electric field?<br/>
            2. How do the electric fields of two negatively charged particles interact?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener169} value={sci8Essay169}/>

          <span className="days">LESSON 170 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.3/primary/lesson/transfer-of-electric-charge-ms-ps"
              rel="noreferrer" target="_blank"> 20.3 Transfer of Electric Charge</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How is charge transferred by a van de Graaff generator?<br/>
            2. Compare and contrast the formation of cations and anions.<br/>
            3. State the law of conservation of charge.<br/>
            4. Explain how conduction and polarization occur, using the example of walking across a wool carpet in
            rubber-soled shoes and then reaching out to touch a metal doorknob.<br/>
            5. Predict what will happen to the charges of a plastic comb and a piece of tissue paper if you rub the
            tissue paper on the comb. (Hint: Plastic tends to accept electrons and tissue paper tends to give up
            electrons.)<br/>

          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener170} value={sci8Essay170}/>

          <span className="days">LESSON 171 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/19.1/"
               rel="noreferrer" target="_blank"> 20.4 Static Electricity and Static Discharge</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit49-5306536/"
            rel="noreferrer" target="_blank"> Electricity: Challenge 1</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is static electricity?<br/>
            2. How does static discharge occur?<br/>
            3. Explain why a bolt of lightning is like the spark you might see when you touch a metal object and get a
            shock.<br/>
          4. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener171} value={sci8Essay171}/>

          <span className="days">LESSON 172 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.5/primary/lesson/electric-current-ms-ps"
              rel="noreferrer" target="_blank"> 20.5 Current</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is electric current? Name the SI unit for electric current.<br/>
            2. Explain what gives a charge electric potential energy. Describe an example.<br/>
            3. How is electric potential energy related to the direction an electric charge spontaneously moves?<br/>
            4. What is voltage, and why is it needed for charges to flow in an electric current?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener172} value={sci8Essay172}/>

          <span className="days">LESSON 173 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.6/primary/lesson/direct-and-alternating-current-ms-ps"
              rel="noreferrer" target="_blank"> 20.6 Direct and Alternating Current</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe direct and alternating current.<br/>
            2. Compare and contrast direct and alternating current.<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener173} value={sci8Essay173}/>

          <span className="days">LESSON 174 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.7/primary/lesson/chemical-and-solar-cells-ms-ps"
              rel="noreferrer" target="_blank"> 20.7 Chemical and Solar Cells</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is voltage? How is it related to electric current?<br/>
            2. How does a chemical cell produce current?<br/>
            3. Explain how a solar cell works.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener174} value={sci8Essay174}/>

          <span className="days">LESSON 175 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.8/primary/lesson/electric-resistance-ms-ps"
              rel="noreferrer" target="_blank"> 20.8 Resistance</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is resistance? Name the SI unit for resistance.<br/>
            2. Explain what causes resistance.<br/>
            3. Describe properties of a metal wire that would minimize its resistance to electric current.<br/>
            4. Extend the rugby analogy to explain why a longer wire has greater resistance to electric current.<br/>
            5. Copper wires have about one-third the resistance of tungsten wires. Why would copper be less suitable
            than tungsten as a filament in an incandescent light bulb?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener175} value={sci8Essay175}/>

          <span className="days">LESSON 176 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.9/primary/lesson/electric-conductors-and-insulators-ms-ps"
              rel="noreferrer" target="_blank"> 20.9 Electric Conductors and Insulators</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is an electric conductor? Give examples of good electric conductors.<br/>
            2. Explain why electric current doesn’t flow through rubber.<br/>
            3. Jon can see the conductor of the power cord for an electric lamp. Should he use the lamp? Why or why not?<br/>
          </p>
          <textarea className="textArea" onChange={onChangeSci8Listener176} value={sci8Essay176}/>

          <span className="days">LESSON 177 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/20.10/primary/lesson/ohms-law-ms-ps"
              rel="noreferrer" target="_blank"> 20.10 Ohm's Law</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit50-5306536/"
            rel="noreferrer" target="_blank"> Electricity: Challenge 2</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. State Ohm’s law.<br/>
            2. An electric appliance is connected by wires to a 240-volt source of voltage. If the combined resistance
            of the appliance and wires is 12 ohms, how much current is flowing through the circuit?<br/>
          3. Write your score for the challenge.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener177} value={sci8Essay177}/>

          <span className="days">LESSON 178 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.1/primary/lesson/magnets-ms-ps"
              rel="noreferrer" target="_blank"> 21.1 Magnet</a></p>
                    <Video videoUrl="https://www.youtube.com/embed/emqsYNhu0_k?list=PLat8Jejmdx1vp2yUSilEEXBNEffnnLoYh"/>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a magnet?<br/>
            2. Describe the magnetic poles of a bar magnet.<br/>
            3. Explain why a magnet can exert force over a distance.<br/>
            4. Describe how magnetic fields on magnets attract and repel each other.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener178} value={sci8Essay178}/>

          <span className="days">LESSON 179 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.2/primary/lesson/ferromagnetic-material-ms-ps"
              rel="noreferrer" target="_blank"> 21.2 Ferromagnetic Material</a></p>
          <p className="lessons">Answer the questions below. <br/></p>
          1. Define magnetism.<br/>
          2. Why is an atom like a tiny magnet?<br/>
          3. What are magnetic domains?<br/>
          4. What is unique about ferromagnetic materials? List three ferromagnetic materials.<br/>
          5. Explain how you can make a permanent magnet from an iron nail.<br/>
          6. What is magnetite?<br/>
          <textarea className="textArea" onChange={onChangeSci8Listener179} value={sci8Essay179}/>

          <span className="days">LESSON 180 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.3/primary/lesson/earth-as-a-magnet-ms-ps"
              rel="noreferrer" target="_blank"> 21.3 Earth as a Magnet</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How does Earth act as a bar magnet?<br/>
            2. The compass in a car shows that the car is moving north. Does this mean that the car is moving toward 90°
            north latitude? Why or why not?<br/>
            3. Describe the magnetosphere.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener180} value={sci8Essay180}/>

          <span className="days">LESSON 181 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.4/primary/lesson/magnetic-field-reversal-ms-ps"
              rel="noreferrer" target="_blank"> 21.4 Magnetic Field Reversal</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. What is a magnetic field reversal?<br/>
            2. Explain how rocks on the ocean floor provide hard evidence that magnetic reversals occurred in the
            past.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener181} value={sci8Essay181}/>

          <span className="days">LESSON 182 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.5/primary/lesson/why-earth-is-a-magnet-ms-ps"
              rel="noreferrer" target="_blank"> 21.5 Why Earth Is A Magnet</a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. How did Gilbert show that Earth is a magnet?<br/>
            2. Which would be a better model of Earth’s inner structure: a peach or an orange? Explain your answer?<br/>
            3. Explain why Earth generates a magnetic field.<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener182} value={sci8Essay182}/>

          <span className="days">LESSON 183 </span>
          <p>Complete the reading, watch the videos and answer the 'Start Practice' questions for
            <a
              href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/21.6/primary/lesson/using-earths-magnetic-field-ms-ps"
              rel="noreferrer" target="_blank"> 21.6 Using Earth's Magnetic Field</a></p>
          <p>Complete <a
            href="https://flexbooks.ck12.org/cbook/ck-12-middle-school-physical-science-flexbook-2.0/section/unittest/Test-for-PSC-Unit52-5306536/"
            rel="noreferrer" target="_blank"> Magnetism: Challenge </a></p>
          <p className="lessons">Answer the questions below. <br/>
            1. Describe the Earth’s magnetic field.<br/>
            2. Explain the northern lights in terms of Earth’s magnetic field.<br/>
            3. How is a loggerhead turtle like a compass?<br/>
            4. What was your score for the challenge?<br/></p>
          <textarea className="textArea" onChange={onChangeSci8Listener183} value={sci8Essay183}/>

        </div>
      </section>
      <Confetti/>
      <h3 style={{ textAlign: "center", height: "100vh" }}>
        You finished 8th Grade Science! </h3>
    </form>
  )
}

export default Science8Component