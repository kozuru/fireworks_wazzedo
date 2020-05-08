html, body {
  height: 100%;
}

body {
  background: url(https://i.imgur.com/vyTzblq.jpg);
  background-size: cover;
}

.firefly {
  display:inline-block;
  position: fixed;
  left: 54vw;
  top: 30vw;

  width: 0.55vw;
  height: 0.55vw;
  margin:9px;
  animation: ease 100s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: fixed;

  width: 100%;
  height: 100%;

  border-radius: 50%;
  transform-origin: -10vw;
}

.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease 8s alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 13s;
}
.firefly:nth-child(1)::after {
  animation-duration: 13, 7695ms;
  animation-delay: 0ms, 3123ms;
}

@keyframes move1 {
  0% {
    transform: translateX(6vw) translateY(-9vh) scale(0.76);
  }
  4.347826087% {
    transform: translateX(-9vw) translateY(4vh) scale(0.62);
  }
  8.6956521739% {
    transform: translateX(36vw) translateY(11vh) scale(0.86);
  }
  13.0434782609% {
    transform: translateX(27vw) translateY(12vh) scale(0.27);
  }
  17.3913043478% {
    transform: translateX(26vw) translateY(-11vh) scale(0.45);
  }
  21.7391304348% {
    transform: translateX(-9vw) translateY(-14vh) scale(0.8);
  }
  26.0869565217% {
    transform: translateX(-27vw) translateY(-12vh) scale(0.46);
  }
  30.4347826087% {
    transform: translateX(-8vw) translateY(9vh) scale(0.92);
  }
  34.7826086957% {
    transform: translateX(-24vw) translateY(12vh) scale(0.57);
  }
  39.1304347826% {
    transform: translateX(9vw) translateY(8vh) scale(0.51);
  }
  43.4782608696% {
    transform: translateX(21vw) translateY(11vh) scale(0.89);
  }
  47.8260869565% {
    transform: translateX(-27vw) translateY(9vh) scale(0.43);
  }
  52.1739130435% {
    transform: translateX(-7vw) translateY(-12vh) scale(0.28);
  }
  56.5217391304% {
    transform: translateX(12vw) translateY(-1vh) scale(0.56);
  }
  60.8695652174% {
    transform: translateX(22vw) translateY(-14vh) scale(0.45);
  }
  65.2173913043% {
    transform: translateX(3vw) translateY(12vh) scale(0.32);
  }
  69.5652173913% {
    transform: translateX(-13vw) translateY(12vh) scale(0.49);
  }
  73.9130434783% {
    transform: translateX(-27vw) translateY(13vh) scale(0.59);
  }
  78.2608695652% {
    transform: translateX(11vw) translateY(-14vh) scale(0.36);
  }
  82.6086956522% {
    transform: translateX(-18vw) translateY(-14vh) scale(0.26);
  }
  86.9565217391% {
    transform: translateX(-17vw) translateY(1vh) scale(0.62);
  }
  91.3043478261% {
    transform: translateX(2vw) translateY(13vh) scale(0.89);
  }
  95.652173913% {
    transform: translateX(11vw) translateY(4vh) scale(0.73);
  }
  100% {
    transform: translateX(-16vw) translateY(1vh) scale(0.33);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 12s;
}
.firefly:nth-child(2)::after {
  animation-duration: 12s, 10718ms;
  animation-delay: 0ms, 5118ms;
}

@keyframes move2 {
  0% {
    transform: translateX(-29vw) translateY(7vh) scale(0.4);
  }
  5.8823529412% {
    transform: translateX(-25vw) translateY(11vh) scale(0.84);
  }
  11.7647058824% {
    transform: translateX(28vw) translateY(-15vh) scale(0.83);
  }
  17.6470588235% {
    transform: translateX(29vw) translateY(13vh) scale(0.65);
  }
  23.5294117647% {
    transform: translateX(22vw) translateY(12vh) scale(0.89);
  }
  29.4117647059% {
    transform: translateX(18vw) translateY(-10vh) scale(0.45);
  }
  35.2941176471% {
    transform: translateX(20vw) translateY(12vh) scale(0.99);
  }
  41.1764705882% {
    transform: translateX(-21vw) translateY(-10vh) scale(0.92);
  }
  47.0588235294% {
    transform: translateX(-2vw) translateY(10vh) scale(0.43);
  }
  52.9411764706% {
    transform: translateX(21vw) translateY(-11vh) scale(0.28);
  }
  58.8235294118% {
    transform: translateX(32vw) translateY(-7vh) scale(0.34);
  }
  64.7058823529% {
    transform: translateX(29vw) translateY(-14vh) scale(0.27);
  }
  70.5882352941% {
    transform: translateX(19vw) translateY(13vh) scale(0.68);
  }
  76.4705882353% {
    transform: translateX(12vw) translateY(-11vh) scale(0.35);
  }
  82.3529411765% {
    transform: translateX(-10vw) translateY(-6vh) scale(0.7);
  }
  88.2352941176% {
    transform: translateX(-29vw) translateY(-8vh) scale(0.55);
  }
  94.1176470588% {
    transform: translateX(-15vw) translateY(11vh) scale(0.71);
  }
  100% {
    transform: translateX(-18vw) translateY(6vh) scale(0.63);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 11s;
}
.firefly:nth-child(3)::after {
  animation-duration: 11s, 5585ms;
  animation-delay: 0ms, 813ms;
}

@keyframes move3 {
  0% {
    transform: translateX(-11vw) translateY(-12vh) scale(0.63);
  }
  4.1666666667% {
    transform: translateX(28vw) translateY(-8vh) scale(1);
  }
  8.3333333333% {
    transform: translateX(26vw) translateY(8vh) scale(0.73);
  }
  12.5% {
    transform: translateX(21vw) translateY(11vh) scale(0.31);
  }
  16.6666666667% {
    transform: translateX(-24vw) translateY(12vh) scale(0.29);
  }
  20.8333333333% {
    transform: translateX(32vw) translateY(-11vh) scale(0.66);
  }
  25% {
    transform: translateX(-24vw) translateY(12vh) scale(0.49);
  }
  29.1666666667% {
    transform: translateX(-26vw) translateY(-10vh) scale(1);
  }
  33.3333333333% {
    transform: translateX(29vw) translateY(11vh) scale(0.72);
  }
  37.5% {
    transform: translateX(29vw) translateY(12vh) scale(0.59);
  }
  41.6666666667% {
    transform: translateX(19vw) translateY(-16vh) scale(0.39);
  }
  45.8333333333% {
    transform: translateX(-26vw) translateY(-14vh) scale(0.68);
  }
  50% {
    transform: translateX(-28vw) translateY(13vh) scale(0.37);
  }
  54.1666666667% {
    transform: translateX(-27vw) translateY(10vh) scale(0.66);
  }
  58.3333333333% {
    transform: translateX(4vw) translateY(-16vh) scale(0.96);
  }
  62.5% {
    transform: translateX(26vw) translateY(13vh) scale(0.26);
  }
  66.6666666667% {
    transform: translateX(-20vw) translateY(10vh) scale(0.53);
  }
  70.8333333333% {
    transform: translateX(-28vw) translateY(12vh) scale(0.27);
  }
  75% {
    transform: translateX(-23vw) translateY(14vh) scale(0.37);
  }
  79.1666666667% {
    transform: translateX(22vw) translateY(-13vh) scale(0.78);
  }
  83.3333333333% {
    transform: translateX(-8vw) translateY(-15vh) scale(0.69);
  }
  87.5% {
    transform: translateX(2vw) translateY(12vh) scale(0.84);
  }
  91.6666666667% {
    transform: translateX(1vw) translateY(12vh) scale(0.5);
  }
  95.8333333333% {
    transform: translateX(16vw) translateY(11vh) scale(0.86);
  }
  100% {
    transform: translateX(-26vw) translateY(-13vh) scale(0.49);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 14s;
}
.firefly:nth-child(4)::after {
  animation-duration: 14s, 7098ms;
  animation-delay: 0ms, 596ms;
}

@keyframes move4 {
  0% {
    transform: translateX(-19vw) translateY(10vh) scale(1);
  }
  4.5454545455% {
    transform: translateX(-24vw) translateY(11vh) scale(0.34);
  }
  9.0909090909% {
    transform: translateX(-21vw) translateY(14vh) scale(0.88);
  }
  13.6363636364% {
    transform: translateX(11vw) translateY(-2vh) scale(0.43);
  }
  18.1818181818% {
    transform: translateX(-22vw) translateY(13vh) scale(0.95);
  }
  22.7272727273% {
    transform: translateX(-7vw) translateY(-3vh) scale(0.74);
  }
  27.2727272727% {
    transform: translateX(16vw) translateY(3vh) scale(0.57);
  }
  31.8181818182% {
    transform: translateX(26vw) translateY(11vh) scale(0.42);
  }
  36.3636363636% {
    transform: translateX(-5vw) translateY(10vh) scale(0.41);
  }
  40.9090909091% {
    transform: translateX(16vw) translateY(-13vh) scale(0.58);
  }
  45.4545454545% {
    transform: translateX(27vw) translateY(-12vh) scale(0.74);
  }
  50% {
    transform: translateX(4vw) translateY(8vh) scale(0.51);
  }
  54.5454545455% {
    transform: translateX(26vw) translateY(-14vh) scale(0.89);
  }
  59.0909090909% {
    transform: translateX(0vw) translateY(11vh) scale(0.54);
  }
  63.6363636364% {
    transform: translateX(30vw) translateY(-7vh) scale(0.32);
  }
  68.1818181818% {
    transform: translateX(-23vw) translateY(12vh) scale(0.32);
  }
  72.7272727273% {
    transform: translateX(21vw) translateY(14vh) scale(0.92);
  }
  77.2727272727% {
    transform: translateX(20vw) translateY(-9vh)scale(0.27);
  }
  81.8181818182% {
    transform: translateX(3vw) translateY(-1vh) scale(0.57);
  }
  86.3636363636% {
    transform: translateX(-24vw) translateY(-11vh) scale(0.58);
  }
  90.9090909091% {
    transform: translateX(4vw) translateY(-8vh) scale(0.58);
  }
  95.4545454545% {
    transform: translateX(-20vw) translateY(-13vh) scale(0.38);
  }
  100% {
    transform: translateX(-27vw) translateY(14vh) scale(0.33);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 13s;
}
.firefly:nth-child(5)::after {
  animation-duration: 13s, 7279ms;
  animation-delay: 0ms, 5841ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-3vw) translateY(8vh) scale(0.4);
  }
  4.7619047619% {
    transform: translateX(-20vw) translateY(-10vh) scale(0.65);
  }
  9.5238095238% {
    transform: translateX(-19vw) translateY(-16vh) scale(0.94);
  }
  14.2857142857% {
    transform: translateX(25vw) translateY(14vh) scale(0.64);
  }
  19.0476190476% {
    transform: translateX(-18vw) translateY(2vh) scale(0.8);
  }
  23.8095238095% {
    transform: translateX(32vw) translateY(15vh) scale(0.66);
  }
  28.5714285714% {
    transform: translateX(-27vw) translateY(4vh) scale(0.87);
  }
  33.3333333333% {
    transform: translateX(15vw) translateY(17vh) scale(0.58);
  }
  38.0952380952% {
    transform: translateX(9vw) translateY(14vh) scale(0.81);
  }
  42.8571428571% {
    transform: translateX(-12vw) translateY(-13vh) scale(0.32);
  }
  47.619047619% {
    transform: translateX(2vw) translateY(13vh) scale(0.29);
  }
  52.380952381% {
    transform: translateX(25vw) translateY(-7vh) scale(0.85);
  }
  57.1428571429% {
    transform: translateX(21vw) translateY(12vh) scale(0.49);
  }
  61.9047619048% {
    transform: translateX(18vw) translateY(16vh) scale(0.66);
  }
  66.6666666667% {
    transform: translateX(30vw) translateY(-18vh) scale(0.96);
  }
  71.4285714286% {
    transform: translateX(-27vw) translateY(13vh) scale(0.88);
  }
  76.1904761905% {
    transform: translateX(30vw) translateY(12vh) scale(0.81);
  }
  80.9523809524% {
    transform: translateX(1vw) translateY(14vh) scale(0.95);
  }
  85.7142857143% {
    transform: translateX(-19vw) translateY(10vh) scale(0.75);
  }
  90.4761904762% {
    transform: translateX(25vw) translateY(12vh) scale(0.34);
  }
  95.2380952381% {
    transform: translateX(-1vw) translateY(13vh) scale(0.51);
  }
  100% {
    transform: translateX(18vw) translateY(10vh) scale(0.79);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 13s;
}
.firefly:nth-child(6)::after {
  animation-duration: 13s, 5951ms;
  animation-delay: 0ms, 718ms;
}

@keyframes move6 {
  0% {
    transform: translateX(24vw) translateY(12vh) scale(0.83);
  }
  4.7619047619% {
    transform: translateX(-16vw) translateY(-9vh) scale(0.29);
  }
  9.5238095238% {
    transform: translateX(-33vw) translateY(13vh) scale(0.86);
  }
  14.2857142857% {
    transform: translateX(-29vw) translateY(13vh) scale(0.53);
  }
  19.0476190476% {
    transform: translateX(8vw) translateY(-15vh) scale(1);
  }
  23.8095238095% {
    transform: translateX(29vw) translateY(-7vh) scale(0.47);
  }
  28.5714285714% {
    transform: translateX(10vw) translateY(3vh) scale(0.67);
  }
  33.3333333333% {
    transform: translateX(-24vw) translateY(12vh) scale(0.45);
  }
  38.0952380952% {
    transform: translateX(-25vw) translateY(-10vh) scale(0.58);
  }
  42.8571428571% {
    transform: translateX(14vw) translateY(-10vh) scale(0.72);
  }
  47.619047619% {
    transform: translateX(-28vw) translateY(15vh) scale(0.95);
  }
  52.380952381% {
    transform: translateX(-10vw) translateY(18vh) scale(0.59);
  }
  57.1428571429% {
    transform: translateX(18vw) translateY(15vh) scale(0.84);
  }
  61.9047619048% {
    transform: translateX(24vw) translateY(-16vh) scale(0.3);
  }
  66.6666666667% {
    transform: translateX(24vw) translateY(-13vh) scale(0.41);
  }
  71.4285714286% {
    transform: translateX(16vw) translateY(-12vh) scale(0.49);
  }
  76.1904761905% {
    transform: translateX(-20vw) translateY(-15vh) scale(0.96);
  }
  80.9523809524% {
    transform: translateX(-29vw) translateY(12vh) scale(0.9);
  }
  85.7142857143% {
    transform: translateX(1vw) translateY(12vh) scale(0.36);
  }
  90.4761904762% {
    transform: translateX(-24vw) translateY(11vh) scale(0.93);
  }
  95.2380952381% {
    transform: translateX(-16vw) translateY(-10vh) scale(0.59);
  }
  100% {
    transform: translateX(-25vw) translateY(13vh) scale(0.46);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 15s;
}
.firefly:nth-child(7)::after {
  animation-duration: 15s, 5602ms;
  animation-delay: 0ms, 1709ms;
}

@keyframes move7 {
  0% {
    transform: translateX(0vw) translateY(10vh) scale(0.75);
  }
  3.8461538462% {
    transform: translateX(-1vw) translateY(11vh) scale(0.36);
  }
  7.6923076923% {
    transform: translateX(-20vw) translateY(4vh) scale(0.32);
  }
  11.5384615385% {
    transform: translateX(-22vw) translateY(-12vh) scale(0.55);
  }
  15.3846153846% {
    transform: translateX(15vw) translateY(-15vh) scale(0.66);
  }
  19.2307692308% {
    transform: translateX(2vw) translateY(-10vh) scale(0.54);
  }
  23.0769230769% {
    transform: translateX(21vw) translateY(-15vh) scale(0.7);
  }
  26.9230769231% {
    transform: translateX(0vw) translateY(1vh) scale(0.81);
  }
  30.7692307692% {
    transform: translateX(26vw) translateY(1vh) scale(0.56);
  }
  34.6153846154% {
    transform: translateX(-25vw) translateY(-14vh) scale(0.65);
  }
  38.4615384615% {
    transform: translateX(-13vw) translateY(-9vh) scale(0.7);
  }
  42.3076923077% {
    transform: translateX(33vw) translateY(12vh) scale(0.36);
  }
  46.1538461538% {
    transform: translateX(3vw) translateY(-13vh) scale(0.99);
  }
  50% {
    transform: translateX(25vw) translateY(13vh) scale(0.26);
  }
  53.8461538462% {
    transform: translateX(-16vw) translateY(11vh) scale(0.38);
  }
  57.6923076923% {
    transform: translateX(26vw) translateY(14vh) scale(0.28);
  }
  61.5384615385% {
    transform: translateX(-17vw) translateY(-12vh) scale(0.9);
  }
  65.3846153846% {
    transform: translateX(-29vw) translateY(13vh) scale(0.27);
  }
  69.2307692308% {
    transform: translateX(13vw) translateY(-9vh) scale(0.48);
  }
  73.0769230769% {
    transform: translateX(-12vw) translateY(-18vh) scale(0.86);
  }
  76.9230769231% {
    transform: translateX(27vw) translateY(14vh) scale(0.33);
  }
  80.7692307692% {
    transform: translateX(-28vw) translateY(3vh) scale(0.75);
  }
  84.6153846154% {
    transform: translateX(3vw) translateY(10vh) scale(0.3);
  }
  88.4615384615% {
    transform: translateX(-12vw) translateY(6vh) scale(0.41);
  }
  92.3076923077% {
    transform: translateX(-18vw) translateY(-9vh) scale(0.66);
  }
  96.1538461538% {
    transform: translateX(-21vw) translateY(9vh) scale(0.43);
  }
  100% {
    transform: translateX(26vw) translateY(13vh) scale(0.75);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 16s;
}
.firefly:nth-child(8)::after {
  animation-duration:16s, 7094ms;
  animation-delay: 0ms, 1245ms;
}

@keyframes move8 {
  0% {
    transform: translateX(-29vw) translateY(-13vh) scale(0.39);
  }
  3.5714285714% {
    transform: translateX(25vw) translateY(9vh) scale(0.55);
  }
  7.1428571429% {
    transform: translateX(21vw) translateY(-10vh) scale(0.59);
  }
  10.7142857143% {
    transform: translateX(18vw) translateY(-10vh) scale(0.54);
  }
  14.2857142857% {
    transform: translateX(-29vw) translateY(12vh) scale(0.34);
  }
  17.8571428571% {
    transform: translateX(29vw) translateY(11vh) scale(0.65);
  }
  21.4285714286% {
    transform: translateX(27vw) translateY(-15vh) scale(0.66);
  }
  25% {
    transform: translateX(-25vw) translateY(-16vh) scale(0.42);
  }
  28.5714285714% {
    transform: translateX(-22vw) translateY(-11vh) scale(0.46);
  }
  32.1428571429% {
    transform: translateX(-16vw) translateY(-15vh) scale(0.72);
  }
  35.7142857143% {
    transform: translateX(-28vw) translateY(-3vh) scale(0.82);
  }
  39.2857142857% {
    transform: translateX(-30vw) translateY(-14vh) scale(0.94);
  }
  42.8571428571% {
    transform: translateX(23vw) translateY(8vh) scale(0.71);
  }
  46.4285714286% {
    transform: translateX(-10vw) translateY(15vh) scale(1);
  }
  50% {
    transform: translateX(-25vw) translateY(-10vh) scale(0.28);
  }
  53.5714285714% {
    transform: translateX(3vw) translateY(12vh) scale(0.55);
  }
  57.1428571429% {
    transform: translateX(21vw) translateY(15vh) scale(0.69);
  }
  60.7142857143% {
    transform: translateX(30vw) translateY(-13vh) scale(0.64);
  }
  64.2857142857% {
    transform: translateX(-22vw) translateY(-5vh) scale(0.35);
  }
  67.8571428571% {
    transform: translateX(0vw) translateY(-1vh) scale(0.67);
  }
  71.4285714286% {
    transform: translateX(7vw) translateY(9vh) scale(0.54);
  }
  75% {
    transform: translateX(28vw) translateY(12vh) scale(0.32);
  }
  78.5714285714% {
    transform: translateX(19vw) translateY(-6vh) scale(0.75);
  }
  82.1428571429% {
    transform: translateX(-23vw) translateY(-15vh) scale(0.51);
  }
  85.7142857143% {
    transform: translateX(-24vw) translateY(11vh) scale(0.31);
  }
  89.2857142857% {
    transform: translateX(-19vw) translateY(-15vh) scale(0.3);
  }
  92.8571428571% {
    transform: translateX(23vw) translateY(8vh) scale(0.85);
  }
  96.4285714286% {
    transform: translateX(-2vw) translateY(-4vh) scale(0.7);
  }
  100% {
    transform: translateX(2vw) translateY(-16vh) scale(0.47);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 12s;
}
.firefly:nth-child(9)::after {
  animation-duration: 12s, 7565ms;
  animation-delay: 0ms, 7982ms;
}

@keyframes move9 {
  0% {
    transform: translateX(23vw) translateY(-5vh) scale(0.98);
  }
  5.8823529412% {
    transform: translateX(-26vw) translateY(-11vh) scale(0.94);
  }
  11.7647058824% {
    transform: translateX(-30vw) translateY(9vh) scale(0.76);
  }
  17.6470588235% {
    transform: translateX(28vw) translateY(-13vh) scale(0.53);
  }
  23.5294117647% {
    transform: translateX(-7vw) translateY(-5vh) scale(0.58);
  }
  29.4117647059% {
    transform: translateX(-17vw) translateY(15vh) scale(0.31);
  }
  35.2941176471% {
    transform: translateX(-22vw) translateY(-14vh) scale(0.91);
  }
  41.1764705882% {
    transform: translateX(22vw) translateY(11vh) scale(0.95);
  }
  47.0588235294% {
    transform: translateX(-20vw) translateY(10vh) scale(0.79);
  }
  52.9411764706% {
    transform: translateX(21vw) translateY(-4vh) scale(0.91);
  }
  58.8235294118% {
    transform: translateX(-29vw) translateY(-13vh) scale(0.61);
  }
  64.7058823529% {
    transform: translateX(15vw) translateY(-5vh) scale(0.87);
  }
  70.5882352941% {
    transform: translateX(20vw) translateY(-15vh) scale(0.29);
  }
  76.4705882353% {
    transform: translateX(-22vw) translateY(-12vh) scale(0.31);
  }
  82.3529411765% {
    transform: translateX(-7vw) translateY(-11vh) scale(0.29);
  }
  88.2352941176% {
    transform: translateX(-23vw) translateY(13vh) scale(0.32);
  }
  94.1176470588% {
    transform: translateX(11vw) translateY(10vh) scale(0.79);
  }
  100% {
    transform: translateX(15vw) translateY(-2vh) scale(0.91);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 14s;
}
.firefly:nth-child(10)::after {
  animation-duration: 14s, 5775ms;
  animation-delay: 0ms, 3640ms;
}

@keyframes move10 {
  0% {
    transform: translateX(28vw) translateY(-13vh) scale(0.26);
  }
  5% {
    transform: translateX(-17vw) translateY(8vh) scale(0.66);
  }
  10% {
    transform: translateX(22vw) translateY(14vh) scale(0.43);
  }
  15% {
    transform: translateX(-30vw) translateY(-10vh) scale(0.91);
  }
  20% {
    transform: translateX(19vw) translateY(11vh) scale(0.68);
  }
  25% {
    transform: translateX(-33vw) translateY(-10vh) scale(0.73);
  }
  30% {
    transform: translateX(29vw) translateY(-13vh) scale(0.68);
  }
  35% {
    transform: translateX(17vw) translateY(3vh) scale(0.51);
  }
  40% {
    transform: translateX(30vw) translateY(-11vh) scale(0.9);
  }
  45% {
    transform: translateX(-27vw) translateY(-14vh) scale(0.88);
  }
  50% {
    transform: translateX(-22vw) translateY(13vh) scale(0.98);
  }
  55% {
    transform: translateX(-21vw) translateY(-13vh) scale(0.51);
  }
  60% {
    transform: translateX(-22vw) translateY(-15vh) scale(0.8);
  }
  65% {
    transform: translateX(-21vw) translateY(-12vh) scale(0.5);
  }
  70% {
    transform: translateX(-20vw) translateY(-14vh) scale(0.61);
  }
  75% {
    transform: translateX(23vw) translateY(7vh) scale(0.33);
  }
  80% {
    transform: translateX(16vw) translateY(-10vh) scale(0.93);
  }
  85% {
    transform: translateX(-1vw) translateY(19vh) scale(0.69);
  }
  90% {
    transform: translateX(-28vw) translateY(9vh) scale(0.76);
  }
  95% {
    transform: translateX(-6vw) translateY(-12vh) scale(0.65);
  }
  100% {
    transform: translateX(-27vw) translateY(15vh) scale(0.57);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 13s;
}
.firefly:nth-child(11)::after {
  animation-duration: 13s, 8542ms;
  animation-delay: 0ms, 551ms;
}

@keyframes move11 {
  0% {
    transform: translateX(25vw) translateY(11vh) scale(0.65);
  }
  4% {
    transform: translateX(18vw) translateY(-12vh) scale(0.77);
  }
  8% {
    transform: translateX(5vw) translateY(-6vh) scale(0.68);
  }
  12% {
    transform: translateX(14vw) translateY(5vh) scale(0.98);
  }
  16% {
    transform: translateX(-23vw) translateY(-15vh) scale(0.54);
  }
  20% {
    transform: translateX(8vw) translateY(-12vh) scale(0.62);
  }
  24% {
    transform: translateX(-24vw) translateY(-11vh) scale(0.55);
  }
  28% {
    transform: translateX(-5vw) translateY(16vh) scale(0.72);
  }
  32% {
    transform: translateX(-22vw) translateY(-14vh) scale(0.63);
  }
  36% {
    transform: translateX(-24vw) translateY(11vh) scale(0.64);
  }
  40% {
    transform: translateX(5vw) translateY(-14vh) scale(0.79);
  }
  44% {
    transform: translateX(8vw) translateY(-11vh) scale(0.97);
  }
  48% {
    transform: translateX(21vw) translateY(13vh) scale(0.88);
  }
  52% {
    transform: translateX(-29vw) translateY(-12vh) scale(0.33);
  }
  56% {
    transform: translateX(0vw) translateY(-8vh) scale(0.32);
  }
  60% {
    transform: translateX(-8vw) translateY(-13vh) scale(0.32);
  }
  64% {
    transform: translateX(27vw) translateY(9vh) scale(0.26);
  }
  68% {
    transform: translateX(-9vw) translateY(12vh) scale(0.45);
  }
  72% {
    transform: translateX(14vw) translateY(12vh) scale(0.5);
  }
  76% {
    transform: translateX(26vw) translateY(-14vh) scale(0.31);
  }
  80% {
    transform: translateX(-17vw) translateY(-10vh) scale(0.67);
  }
  84% {
    transform: translateX(2vw) translateY(4vh) scale(0.3);
  }
  88% {
    transform: translateX(-3vw) translateY(8vh) scale(0.78);
  }
  92% {
    transform: translateX(-5vw) translateY(-11vh) scale(0.45);
  }
  96% {
    transform: translateX(11vw) translateY(9vh) scale(0.96);
  }
  100% {
    transform: translateX(-21vw) translateY(15vh) scale(0.28);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 12s;
}
.firefly:nth-child(12)::after {
  animation-duration: 12s, 6164ms;
  animation-delay: 0ms, 3399ms;
}

@keyframes move12 {
  0% {
    transform: translateX(23vw) translateY(8vh) scale(0.94);
  }
  5.8823529412% {
    transform: translateX(-29vw) translateY(-11vh) scale(0.54);
  }
  11.7647058824% {
    transform: translateX(25vw) translateY(3vh) scale(0.89);
  }
  17.6470588235% {
    transform: translateX(-1vw) translateY(14vh) scale(0.95);
  }
  23.5294117647% {
    transform: translateX(-22vw) translateY(-8vh) scale(0.62);
  }
  29.4117647059% {
    transform: translateX(-27vw) translateY(-10vh) scale(0.8);
  }
  35.2941176471% {
    transform: translateX(4vw) translateY(-11vh) scale(0.78);
  }
  41.1764705882% {
    transform: translateX(-28vw) translateY(0vh) scale(0.41);
  }
  47.0588235294% {
    transform: translateX(-24vw) translateY(-19vh) scale(0.97);
  }
  52.9411764706% {
    transform: translateX(-23vw) translateY(-15vh) scale(0.91);
  }
  58.8235294118% {
    transform: translateX(23vw) translateY(-7vh) scale(0.8);
  }
  64.7058823529% {
    transform: translateX(30vw) translateY(4vh) scale(0.42);
  }
  70.5882352941% {
    transform: translateX(26vw) translateY(8vh) scale(0.45);
  }
  76.4705882353% {
    transform: translateX(30vw) translateY(-10vh) scale(0.89);
  }
  82.3529411765% {
    transform: translateX(16vw) translateY(15vh) scale(0.45);
  }
  88.2352941176% {
    transform: translateX(6vw) translateY(12vh) scale(0.27);
  }
  94.1176470588% {
    transform: translateX(-14vw) translateY(-4vh) scale(0.57);
  }
  100% {
    transform: translateX(30vw) translateY(-11vh) scale(0.37);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 15s;
}
.firefly:nth-child(13)::after {
  animation-duration: 15s, 5546ms;
  animation-delay: 0ms, 2750ms;
}

@keyframes move13 {
  0% {
    transform: translateX(-6vw) translateY(-7vh) scale(0.94);
  }
  5.5555555556% {
    transform: translateX(12vw) translateY(14vh) scale(0.38);
  }
  11.1111111111% {
    transform: translateX(-28vw) translateY(-6vh) scale(0.32);
  }
  16.6666666667% {
    transform: translateX(-12vw) translateY(-15vh) scale(0.33);
  }
  22.2222222222% {
    transform: translateX(17vw) translateY(12vh) scale(0.76);
  }
  27.7777777778% {
    transform: translateX(-27vw) translateY(13vh) scale(0.86);
  }
  33.3333333333% {
    transform: translateX(11vw) translateY(-12vh) scale(0.34);
  }
  38.8888888889% {
    transform: translateX(-4vw) translateY(-1vh) scale(0.5);
  }
  44.4444444444% {
    transform: translateX(-22vw) translateY(-12vh) scale(0.79);
  }
  50% {
    transform: translateX(19vw) translateY(14vh) scale(0.3);
  }
  55.5555555556% {
    transform: translateX(24vw) translateY(1vh) scale(0.62);
  }
  61.1111111111% {
    transform: translateX(15vw) translateY(8vh) scale(0.44);
  }
  66.6666666667% {
    transform: translateX(-19vw) translateY(13vh) scale(0.95);
  }
  72.2222222222% {
    transform: translateX(14vw) translateY(-13vh) scale(0.35);
  }
  77.7777777778% {
    transform: translateX(17vw) translateY(1vh) scale(1);
  }
  83.3333333333% {
    transform: translateX(9vw) translateY(-2vh) scale(0.87);
  }
  88.8888888889% {
    transform: translateX(27vw) translateY(12vh) scale(0.5);
  }
  94.4444444444% {
    transform: translateX(17vw) translateY(-11vh) scale(0.26);
  }
  100% {
    transform: translateX(-26vw) translateY(13vh) scale(0.45);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 12s;
}
.firefly:nth-child(14)::after {
  animation-duration: 12s, 9209ms;
  animation-delay: 0ms, 5379ms;
}

@keyframes move14 {
  0% {
    transform: translateX(27vw) translateY(-9vh) scale(0.59);
  }
  4.5454545455% {
    transform: translateX(20vw) translateY(-13vh) scale(0.85);
  }
  9.0909090909% {
    transform: translateX(-6vw) translateY(-8vh) scale(0.73);
  }
  13.6363636364% {
    transform: translateX(21vw) translateY(8vh) scale(0.96);
  }
  18.1818181818% {
    transform: translateX(-15vw) translateY(-15vh) scale(0.84);
  }
  22.7272727273% {
    transform: translateX(-21vw) translateY(15vh) scale(0.51);
  }
  27.2727272727% {
    transform: translateX(-23vw) translateY(-5vh) scale(0.63);
  }
  31.8181818182% {
    transform: translateX(4vw) translateY(12vh) scale(0.42);
  }
  36.3636363636% {
    transform: translateX(-22vw) translateY(8vh) scale(0.47);
  }
  40.9090909091% {
    transform: translateX(-28vw) translateY(-6vh) scale(0.48);
  }
  45.4545454545% {
    transform: translateX(-29vw) translateY(13vh) scale(0.79);
  }
  50% {
    transform: translateX(22vw) translateY(-11vh) scale(0.36);
  }
  54.5454545455% {
    transform: translateX(24vw) translateY(14vh) scale(0.95);
  }
  59.0909090909% {
    transform: translateX(-21vw) translateY(-12vh) scale(0.66);
  }
  63.6363636364% {
    transform: translateX(12vw) translateY(12vh) scale(0.7);
  }
  68.1818181818% {
    transform: translateX(-24vw) translateY(11vh) scale(0.43);
  }
  72.7272727273% {
    transform: translateX(-14vw) translateY(5vh) scale(0.61);
  }
  77.2727272727% {
    transform: translateX(7vw) translateY(-14vh) scale(0.76);
  }
  81.8181818182% {
    transform: translateX(6vw) translateY(18vh) scale(0.79);
  }
  86.3636363636% {
    transform: translateX(11vw) translateY(12vh) scale(0.51);
  }
  90.9090909091% {
    transform: translateX(-21vw) translateY(6vh) scale(0.74);
  }
  95.4545454545% {
    transform: translateX(29vw) translateY(-9vh) scale(0.31);
  }
  100% {
    transform: translateX(25vw) translateY(-12vh) scale(0.81);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 12s;
}
.firefly:nth-child(15)::after {
  animation-duration: 12s, 6940ms;
  animation-delay: 0ms, 3028ms;
}

@keyframes move15 {
  0% {
    transform: translateX(-27vw) translateY(-5vh) scale(0.52);
  }
  4.1666666667% {
    transform: translateX(10vw) translateY(-12vh) scale(0.6);
  }
  8.3333333333% {
    transform: translateX(0vw) translateY(13vh) scale(0.97);
  }
  12.5% {
    transform: translateX(-28vw) translateY(3vh) scale(0.75);
  }
  16.6666666667% {
    transform: translateX(31vw) translateY(-10vh) scale(0.36);
  }
  20.8333333333% {
    transform: translateX(-23vw) translateY(14vh) scale(0.51);
  }
  25% {
    transform: translateX(5vw) translateY(-2vh) scale(0.58);
  }
  29.1666666667% {
    transform: translateX(-23vw) translateY(-14vh) scale(0.5);
  }
  33.3333333333% {
    transform: translateX(-25vw) translateY(-13vh) scale(0.26);
  }
  37.5% {
    transform: translateX(6vw) translateY(-11vh) scale(0.49);
  }
  41.6666666667% {
    transform: translateX(-23vw) translateY(12vh) scale(0.6);
  }
  45.8333333333% {
    transform: translateX(20vw) translateY(16vh) scale(0.3);
  }
  50% {
    transform: translateX(31vw) translateY(-11vh) scale(0.45);
  }
  54.1666666667% {
    transform: translateX(-24vw) translateY(2vh) scale(0.8);
  }
  58.3333333333% {
    transform: translateX(-18vw) translateY(-11vh) scale(0.86);
  }
  62.5% {
    transform: translateX(-29vw) translateY(-16vh) scale(0.97);
  }
  66.6666666667% {
    transform: translateX(-24vw) translateY(8vh) scale(0.75);
  }
  70.8333333333% {
    transform: translateX(-38vw) translateY(14vh) scale(0.43);
  }
  75% {
    transform: translateX(2vw) translateY(12vh) scale(0.27);
  }
  79.1666666667% {
    transform: translateX(20vw) translateY(-11vh) scale(0.89);
  }
  83.3333333333% {
    transform: translateX(-21vw) translateY(15vh) scale(0.28);
  }
  87.5% {
    transform: translateX(24vw) translateY(-15vh) scale(0.72);
  }
  91.6666666667% {
    transform: translateX(-28vw) translateY(-13vh) scale(0.47);
  }
  95.8333333333% {
    transform: translateX(27vw) translateY(14vh) scale(0.55);
  }
  100% {
    transform: translateX(-9vw) translateY(5vh) scale(0.78);
  }
}
.firefly:nth-child(16) {
  animation-name: move16;
}
.firefly:nth-child(16)::before {
  animation-duration: 13s;
}
.firefly:nth-child(16)::after {
  animation-duration: 13s, 5546ms;
  animation-delay: 0ms, 2750ms;
}

@keyframes move16 {
  0% {
    transform: translateX(-9vw) translateY(-11vh) scale(0.94);
  }
  5.5555555556% {
    transform: translateX(12vw) translateY(10vh) scale(0.38);
  }
  11.1111111111% {
    transform: translateX(-25vw) translateY(-16vh) scale(0.32);
  }
  16.6666666667% {
    transform: translateX(-16vw) translateY(-9vh) scale(0.33);
  }
  22.2222222222% {
    transform: translateX(3vw) translateY(10vh) scale(0.76);
  }
  27.7777777778% {
    transform: translateX(-20vw) translateY(8vh) scale(0.86);
  }
  33.3333333333% {
    transform: translateX(11vw) translateY(12vh) scale(0.34);
  }
  38.8888888889% {
    transform: translateX(4vw) translateY(-1vh) scale(0.5);
  }
  44.4444444444% {
    transform: translateX(-12vw) translateY(-8vh) scale(0.79);
  }
  50% {
    transform: translateX(9vw) translateY(11vh) scale(0.3);
  }
  55.5555555556% {
    transform: translateX(21vw) translateY(11vh) scale(0.62);
  }
  61.1111111111% {
    transform: translateX(8vw) translateY(10vh) scale(0.44);
  }
  66.6666666667% {
    transform: translateX(-17vw) translateY(11vh) scale(0.95);
  }
  72.2222222222% {
    transform: translateX(12vw) translateY(-3vh) scale(0.35);
  }
  77.7777777778% {
    transform: translateX(1vw) translateY(11vh) scale(1);
  }
  83.3333333333% {
    transform: translateX(8vw) translateY(-2vh) scale(0.87);
  }
  88.8888888889% {
    transform: translateX(20vw) translateY(11vh) scale(0.5);
  }
  94.4444444444% {
    transform: translateX(10vw) translateY(-14vh) scale(0.26);
  }
  100% {
    transform: translateX(-11w) translateY(10vh) scale(0.45);
  }
}
.firefly:nth-child(17) {
  animation-name: move17;
}
.firefly:nth-child(17)::before {
  animation-duration: 16s;
}
.firefly:nth-child(17)::after {
  animation-duration: 16s, 9209ms;
  animation-delay: 0ms, 5379ms;
}

@keyframes move17 {
  0% {
    transform: translateX(20vw) translateY(-3vh) scale(0.59);
  }
  4.5454545455% {
    transform: translateX(3vw) translateY(-10vh) scale(0.85);
  }
  9.0909090909% {
    transform: translateX(-11vw) translateY(-3vh) scale(0.73);
  }
  13.6363636364% {
    transform: translateX(11vw) translateY(10vh) scale(0.96);
  }
  18.1818181818% {
    transform: translateX(-19vw) translateY(-5vh) scale(0.84);
  }
  22.7272727273% {
    transform: translateX(-11vw) translateY(15vh) scale(0.51);
  }
  27.2727272727% {
    transform: translateX(-13vw) translateY(-15vh) scale(0.63);
  }
  31.8181818182% {
    transform: translateX(4vw) translateY(10vh) scale(0.42);
  }
  36.3636363636% {
    transform: translateX(-12vw) translateY(8vh) scale(0.47);
  }
  40.9090909091% {
    transform: translateX(-18vw) translateY(-1vh) scale(0.48);
  }
  45.4545454545% {
    transform: translateX(-19vw) translateY(11vh) scale(0.79);
  }
  50% {
    transform: translateX(12vw) translateY(-1vh) scale(0.36);
  }
  54.5454545455% {
    transform: translateX(14vw) translateY(7vh) scale(0.95);
  }
  59.0909090909% {
    transform: translateX(-21vw) translateY(-2vh) scale(0.66);
  }
  63.6363636364% {
    transform: translateX(13vw) translateY(12vh) scale(0.7);
  }
  68.1818181818% {
    transform: translateX(-20vw) translateY(11vh) scale(0.43);
  }
  72.7272727273% {
    transform: translateX(-4vw) translateY(5vh) scale(0.61);
  }
  77.2727272727% {
    transform: translateX(17vw) translateY(-14vh) scale(0.76);
  }
  81.8181818182% {
    transform: translateX(6vw) translateY(-8vh) scale(0.79);
  }
  86.3636363636% {
    transform: translateX(1vw) translateY(12vh) scale(0.51);
  }
  90.9090909091% {
    transform: translateX(-11vw) translateY(8vh) scale(0.74);
  }
  95.4545454545% {
    transform: translateX(9vw) translateY(-7vh) scale(0.31);
  }
  100% {
    transform: translateX(215vw) translateY(-4vh) scale(0.81);
  }
}
.firefly:nth-child(18) {
  animation-name: move18;
}
.firefly:nth-child(18)::before {
  animation-duration: 14s;
}
.firefly:nth-child(18)::after {
  animation-duration: 14s, 6940ms;
  animation-delay: 0ms, 3028ms;
}

@keyframes move18 {
  0% {
    transform: translateX(-17vw) translateY(-9vh) scale(0.52);
  }
  4.1666666667% {
    transform: translateX(3vw) translateY(-2vh) scale(0.6);
  }
  8.3333333333% {
    transform: translateX(0vw) translateY(11vh) scale(0.97);
  }
  12.5% {
    transform: translateX(-8vw) translateY(13vh) scale(0.75);
  }
  16.6666666667% {
    transform: translateX(11vw) translateY(-16vh) scale(0.36);
  }
  20.8333333333% {
    transform: translateX(-23vw) translateY(1vh) scale(0.51);
  }
  25% {
    transform: translateX(9vw) translateY(-2vh) scale(0.58);
  }
  29.1666666667% {
    transform: translateX(-23vw) translateY(-14vh) scale(0.5);
  }
  33.3333333333% {
    transform: translateX(-25vw) translateY(-13vh) scale(0.26);
  }
  37.5% {
    transform: translateX(6vw) translateY(-11vh) scale(0.49);
  }
  41.6666666667% {
    transform: translateX(-23vw) translateY(2vh) scale(0.6);
  }
  45.8333333333% {
    transform: translateX(21vw) translateY(8vh) scale(0.3);
  }
  50% {
    transform: translateX(11vw) translateY(-1vh) scale(0.45);
  }
  54.1666666667% {
    transform: translateX(-14vw) translateY(12vh) scale(0.8);
  }
  58.3333333333% {
    transform: translateX(-13vw) translateY(-1vh) scale(0.86);
  }
  62.5% {
    transform: translateX(-19vw) translateY(-6vh) scale(0.97);
  }
  66.6666666667% {
    transform: translateX(-14vw) translateY(8vh) scale(0.75);
  }
  70.8333333333% {
    transform: translateX(-28vw) translateY(14vh) scale(0.43);
  }
  75% {
    transform: translateX(2vw) translateY(1h) scale(0.27);
  }
  79.1666666667% {
    transform: translateX(20vw) translateY(-11vh) scale(0.89);
  }
  83.3333333333% {
    transform: translateX(-21vw) translateY(15vh) scale(0.28);
  }
  87.5% {
    transform: translateX(24vw) translateY(-15vh) scale(0.72);
  }
  91.6666666667% {
    transform: translateX(-28vw) translateY(-13vh) scale(0.47);
  }
  95.8333333333% {
    transform: translateX(17vw) translateY(14vh) scale(0.55);
  }
  100% {
    transform: translateX(-9vw) translateY(8vh) scale(0.78);
  }
}

@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 35%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw #FFFF33;
  }
  5%,20% {
    opacity: 1;
    box-shadow: 0 0 1vw 0.4vw #FFFF33;
  }
}
.firefly1 {
  position:absolute;
  top:50%;
  left:50%;
  width:0.4em;
  height:0.4em;
  background-color:white;
  border-radius:50%;
  box-shadow:0 0 0.4em 0.2em #FFFF33;
  animation:firefly1 27s ease-in-out alternate infinite;
}

.firefly2 {
  position:absolute;
  top:50%;
  left:50%;
  width:0.4em;
  height:0.4em;
  background-color:white;
  border-radius:50%;
  box-shadow:0 0 0.4em 0.2em #FFFF33;
  animation:firefly2 25s ease-in-out alternate infinite;
}


@keyframes firefly1{
   0% {
     top:80%;
     left:12%;
     opacity:1;
      }
   5% {
        top:71%;
        left:17%;
        opacity:0.3;
         }
   10% {
     top:75%;
     left:10%;
     opacity:1;
     width:0.4em;
     height:0.4em;
       }
   20% {
     top:77%;
     left:11%;
     opacity:1;
       }
   30% {
     top:78%;
     left:18%;
     opacity:1;
     width:0.1em;
     height:0.1em;
       }
   40% {
     top:80%;
     left:16%;
     opacity:0.2;
       }
    50% {
         top:73%;
         left:11%;
         opacity:1;
          }
   60% {
     top:75%;
     left:15%;
     opacity:0.6;
     width:0.4em;
     height:0.4em;
       }
   70% {
     top:75%;
     left:11%;
     opacity:0.1;
     width:0.3em;
     height:0.3em;
       }
    80% {
         top:79%;
         left:17%;
         opacity:1;
         width:0.3em;
         height:0.3em;
           }
   100% {
     top:70%;
     left:12%
     opacity:1;
       }
}
@keyframes firefly2{
   100% {
     top:90%;
     left:80%;
     opacity:0.3;
      }
   80% {
     top:85%;
     left:80%;
     opacity:0.8;
       }
   70% {
     top:80%;
     left:71%;
     opacity:1;
       }
   50% {
     top:79%;
     left:88%;
     opacity:0.2;
       }
   35% {
     top:83%;
     left:70%;
     opacity:1;
       }
   25% {
     top:80%;
     left:86%;
     opacity:1;
       }
   10% {
     top:86%;
     left:87%;
     opacity:0.31;
       }
   0% {
     top:79%;
     left:80%;
     opacity:10.9
       }
}

@keyframes popinout {
  0%, 20%, 100% {
    opacity: 0;
    background-color:black;
    box-shadow: 0 0 0vw 0vw #FFFF33;
  }
  5% 10%{
    opacity: 1;
    background-color:black;
    box-shadow: 0 0 0vw 0.0vw #FFFF33;
  }
}
