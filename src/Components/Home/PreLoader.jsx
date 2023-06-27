import { useEffect } from "react";
import {gsap} from "gsap";
export default function PreLoader() {
    useEffect(()=>{
        const tl = gsap.timeline()
        tl.fromTo(".preloader span", {
            opacity: 0,
            y: 50,
            stagger: {
                amount: .3
            },
            duration: .2,
        }, {
            opacity: 1,
            y:0,
            stagger: {
                amount: .3
            },
            duration: .2,
        }).to(".preloader span", {
            delay: 2,
            opacity: 0,
            y: -50,
            stagger: {
                amount: .3
            },
            duration: .2,
        }).to(".preloader", {
            transform: "translateY(-100vh)",
            duration: .5,
            ease: "power2.out"
        }, "-=0.2")
    }, [])
  return (
    <div className="preloader">
        <span>U</span>
        <span>n</span>
        <span>t</span>
        <span>i</span>
        <span>t</span>
        <span>l</span>
        <span>e</span>
        <span>d</span>
        <span>&nbsp;</span>
        <span>B</span>
        <span>L</span>
        <span>O</span>
        <span>G</span>
    </div>
  )
}
