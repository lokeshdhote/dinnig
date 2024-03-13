var tl = gsap.timeline({
    scrollTrigger:{
       trigger:"#page3",
      scroller:"body",
      start:"top 90%",
      end:"top 15%",
  markers:true,
     
    scrub:3,
    }
  })
  tl
  .from("#box1text1  h3",{
    delay:2,
    opacity:0,
    stagger:1
  },"a")
.from("#prt1",{
    x:-200
},"b")
.from("#prt2",{
    delay:1.2,
    scale:0
},"c")



.from("#box2text1 h3",{
    delay:2,
    opacity:0,
    stagger:1
  },"a")
  .from("#prt3",{
    x:-200
},"b")
.from("#prt4",{
    delay:1.2,
    scale:0
},"c")



.from("#box3text1 h3",{
    delay:2,
    opacity:0,
    stagger:1
  })
  .from("#prt5",{
    x:-200
})
.from("#prt6",{
    delay:1,
    scale:0
})

