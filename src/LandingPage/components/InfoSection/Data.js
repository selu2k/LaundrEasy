import Service1Icon from "./Service1icon";
import Service2Icon from "./Service2Icon";
import Service3Icon from "./Service3Icon";

export const homeObjOne = {
  id: "service1",//change it
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Easy Submission",
  description:
    "We offer you token service in order to make your laundry experience, smooth and comfortable. All you need to do is submit your clothes and we will assign the token to avoid any mishaps.",
  imgStart: true,
  img: <Service1Icon />,
  alt: "service1",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "service2",//change it
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Hygienic, clean wash",
  description:
    "We ensure that your clothes are hygienically washed, so that they are germ free and clean. Our machines are periodically maintained to ensure completely hygienic services.",
  imgStart: false,
  img: <Service2Icon />,
  alt: "service2",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjThree = {
  id: "service3",//change it
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Fast Service",
  description:
    "We provide fast services so that you do not have to worry about time. Your clothes are folded with care, before handing it over to you to ensure a smooth, hassle free experience.",
  imgStart: true,
  img: <Service3Icon />,
  alt: "service3",
  dark: false,
  primary: true,
  darkText: true,
};
export const homeObjFour = {
  id: "servicehead",//change it
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "The complete solution for your laundry needs",
  // textalign:,
  imgStart: false,
  img: false,
  alt: false,
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjArr = [homeObjOne, homeObjTwo, homeObjThree];