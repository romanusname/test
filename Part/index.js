import componentTemplates from '@components/index'
import modals from './modal/index'
import components from './components'

//import styleTemplates from "./services/";

import childrenPassProps from "./childrenPassProps/childrenPassProps";
import propsSorting from "./sorting/propsSorting";
import styleAbbreviations from './sorting/styleAbbreviations/abbreviations'
import globalTimeline from "./sorting/globalTimeline/globalTimeline";
import globalScroll from "./sorting/globalScroll/globalScroll";
import styleContext from "./sorting/styleContext/styleContext";
import responsive from "./sorting/responsive/responsive";
import socket from './socket/socket'
import role from './role/role'
import widgets from "../widgets/widgets";
import formReducer from "./reducer/formReducer";
import formContext from "./sorting/formContext/formContext";
//import scrollBar from "./components/scrollBar/scrollBar";
import scrollSmoother from "./scrollSmoother/scrollSmoother";
//import events from "./services/events";
//import colorScheme from "./services/colorScheme";

export default {
    ...components,
    ...componentTemplates,
    widgets,
    childrenPassProps,
    propsSorting,
    styleAbbreviations,
    modals,
    globalTimeline,
    globalScroll,
    styleContext,
    responsive,
    socket,
    role,
 //   scrollBar,
    scrollSmoother,
    formReducer,
    formContext,
}



















/*
//import * as Components from '../../components'

import Main from './components/main/Main'
import Section from './components/section/Section'
import flex from './components/flex/Flex'
import group from './components/group/Group'
import button from './components/button/Button'
import p from './components/p/P'
import h1 from './components/h1/H1'
import h2 from './components/h2/H2'
import image from './components/image/Image'
import svg from './components/svg/Svg'
import Header from './components/header/Header'
import Navigator from './components/navigator/Navigator'
import Link from './components/link/Link'
import background from './components/background/Background'
import clone from './components/clone/Clone'
import dimensional from "./components/dimensional/Dimensional";
import pass from "./components/pass/Pass";
import columns from "./components/columns/Columns"
import grid from "./components/grid/Grid"
import {Slider} from "./components/slider/Slider"
import compound from './components/compound/Compound'
import modal from "./components/modal/modal";
import componentTemplates from './componentTemplates'
import modals from './modals'

import childrenPassProps from "./services/childrenPassProps";
import propsParsing from "./services/propsParsing/propsParsing";
//import events from "./services/events";
//import colorScheme from "./services/colorScheme";

let Part = module.exports = {
    Main,
    Section,
    flex,
    group,
    button,
    p,
    h1,
    h2,
    image,
    svg,
    Header,
    Navigator,
    Link,
    background,
    clone,
    dimensional,
    pass,
    childrenPassProps,
    propsParsing,
   // events,
    columns,
    grid,
    Slider,
    compound,
    modal,
    ...componentTemplates,
    modals,
}
export default Part
* */
