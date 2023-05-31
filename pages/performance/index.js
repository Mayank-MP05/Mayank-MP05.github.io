import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import OnImgTitleHeader from '../../src/common/on-img-title-header'

const PerformancePage = () => {
    const [windowWidth, setWindowWidth] = useState(1000)
    const [imageHeight, setImageHeight] = useState(500)
    useEffect(() => {
        if (typeof window != undefined) {
            const width = window.innerWidth
            if(width < 600){
                setWindowWidth(width)
                setImageHeight(0.4 * width)
            }else{
                setWindowWidth(0.8 * width)
                setImageHeight(0.4 * width)
            }
        }
    }, [])

    return (
        <div>
            <OnImgTitleHeader title={`Core Web Vitals`} />

            <a href='https://pagespeed.web.dev/analysis/https-mayank-mp05-github-io/swe1ou8yzc?form_factor=mobile' target='_blank'>
                <p className="project-title">OLD React Website - PageSpeed</p>
                <Image src="/static/performance-metrics/page-speed-insights-old.png" width={windowWidth} height={imageHeight} />
            </a>

            <a href='https://pagespeed.web.dev/analysis/https-mayank5pande-com/gns0xl4deh?form_factor=mobile' target='_blank'>
                <p className="project-title">NEW Next JS Website - PageSpeed</p>
                <Image src="/static/performance-metrics/page-speed-insights-new.png" width={windowWidth} height={imageHeight} />
            </a>

            <a href='https://gtmetrix.com/reports/mayank5pande.com/kPjLjEuF/' target='_blank'>
                <p className="project-title">GTMetrix</p>
                <Image src="/static/performance-metrics/gtmetrics-insights.png" width={windowWidth} height={imageHeight} />
            </a>

            <a href='https://www.webpagetest.org/result/230531_AiDcXF_6J8/' target='_blank'>
                <p className="project-title">WebpageTest</p>
                <Image src="/static/performance-metrics/webpagetest-insights.png" width={windowWidth} height={imageHeight} />
            </a>
        </div >
    )
}

export default PerformancePage