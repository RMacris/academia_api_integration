import React, { useEffect, useRef } from 'react';

import homeStyles from './home.module.css'
import { TextBanner } from '../../components/textBanner/textBanner';

import { ProductCard } from '../../components/prod-card/card'
export function Home() {
    const banner = useRef(null)
    const cards = useRef(null)
    const ads1 = useRef(null)
    const ads2 = useRef(null)
    const ads3 = useRef(null)
    const refList = [banner,cards,ads1,ads2,ads3]

    function SetObservableOnRefList() {
        const observer = new IntersectionObserver( entries => {
            entries.forEach(entry => { 
                if(entry.isIntersecting) { 
                    entry.target.classList.replace(homeStyles.hidden,  homeStyles.show)
                    observer.unobserve(entry.target)
                }
            }, 
            {
                threshold: 1,
            });
        });

        refList.forEach(item => { 
            observer.observe(item.current)
        })
    }

    useEffect(() => {
        // SetObservableOnRefList()
    }, [])

    return (
        <div className="home">
            <section ref={banner} className={[homeStyles.img__container, homeStyles.hidden].join(' ')}>
                <img className={homeStyles.img__responsive} src="https://wallpaperaccess.com/full/5274380.jpg" alt="" srcset="" />
            </section>
            <section ref={cards} className={[homeStyles.products__container, homeStyles.hidden].join(' ')}>
                <div className={homeStyles.products__container}>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
                <div className={homeStyles.products__aditionals}>
                    <p>
                        here might come some disclaimer about somthing interesting
                        or maybe about something disclaimer about this product card that might 
                    </p>
                </div>
            </section>
            <section ref={ads1} className={[homeStyles.ads__container_right, homeStyles.hidden].join(' ')}>
               <TextBanner img_url='https://www.tommyeurope.tv/wp-content/uploads/2015/03/DFP_9784-tommyeurope.jpg'/>
            </section>
            <section ref={ads2} className={[homeStyles.ads__container_left, homeStyles.hidden].join(' ')}>
               <TextBanner img_url='https://st.depositphotos.com/1062035/4011/i/450/depositphotos_40111411-stock-photo-fitness-with-dumbbells.jpg'/>
            </section>
            <section ref={ads3} className={[homeStyles.ads__container_right, homeStyles.hidden].join(' ') }>
               <TextBanner img_url='https://thumbs.dreamstime.com/b/levantamento-modelo-da-aptid%C3%A3o-atl%C3%A9tica-muscular-do-halterofilista-ap%C3%B3s-exercis-64856941.jpg'/>
            </section>
        </div>
    )
}