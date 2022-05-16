import React, { useEffect, useRef } from 'react';
import styles from './textBanner.module.css'
export function TextBanner(props){ 
    const imgRef = useRef(null)
    const paragraph = useRef(null)

    
    function SetObservableOnRefList(subjectList = [], cssClassToReplace) {
        const observer = new IntersectionObserver( entries => {
            entries.forEach(entry => { 
                if(entry.isIntersecting) { 
                    entry.target.classList.replace(styles.content_hide,  cssClassToReplace)
                    observer.unobserve(entry.target)
                }
            }, 
            {
                threshold: 1,
            });
        });

        subjectList.forEach(item => { 
            observer.observe(item.current)
        })
    }

    useEffect(() => { 
        SetObservableOnRefList([imgRef], styles.img_show)
        SetObservableOnRefList([paragraph], styles.img_show)
    }, [])


    return (
        <>
            <div className={styles.ads__wrapper}>
                <div ref={paragraph} className={[styles.ads__info,  styles.content_hide].join(' ') }>
                    <h3 className={styles.ads__info_title } >Os melhores treinadores do mundo</h3>
                    <p className={styles.ads__info_paragraph }>Somente conosco você sera capaz de experienciar o que há
                    de mais moderno para seu desenvolvimento como atleta, com os melhores treinadores te auxiliando a cada contração.
                        to show the product card    
                    </p>
                </div>
                <div ref={imgRef} className={[styles.ads_image__container, styles.content_hide].join(' ')}>
                    <img className={styles.ads__img} src={props.img_url} alt=""  srcset="" />
                </div>
            </div>
        </>
    ) 
}