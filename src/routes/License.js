import { useEffect, useState } from 'react';
import './../App.css';

export default function License(){
    const licenseList = [
        {
            name: 'React',
            url: 'https://github.com/facebook/react',
            type: 'MIT LICENSE',
            writer: 'Copyright (c) 2013-present, Facebook, Inc.'
        },
        {
            name: 'React Router',
            url: 'https://github.com/remix-run/react-router/blob/main/LICENSE.md',
            type: 'MIT LICENSE',
            writer: 'Copyright (c) React Training LLC 2015-2019 Copyright (c) Remix Software Inc. 2020-2021 Copyright (c) Shopify Inc. 2022-2023'
        },
        {
            name: 'Axios',
            url: 'https://github.com/axios/axios/blob/v1.x/LICENSE',
            type: 'MIT LICENSE',
            writer: '(c) 2014-present Matt Zabriskie & Collaborators'
        }
    ]

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(./img/license.jpg)'}}>
                    <div>LICENSE</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href={process.env.PUBLIC_URL + '/'}>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>LICENSE</a></li>
                        <li className='detail-page__btn-submenu'>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>라이선스&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>오픈소스 라이선스</div>
                        <div className='detail-page__title-sub'>Open-source license</div>
                        <div className='txt-line'></div>
                    </div>

                        <div className='license__con fade-in-self' style={{padding:'0'}}>
                            본 웹사이트에 사용된 오픈소스 소프트웨어의 라이선스에 대하여 고지합니다.
                            <ul className='license__grid-con'>
                                {
                                    licenseList.map((a, i) => {
                                        return <GridItem a={a} i={i} name={a.name} url={a.url} type={a.type} writer={a.writer} />
                                    })
                                }
                            </ul>
                        </div>
                    
                    
                    
                </div>
            </div>
        </>
    )
}

function GridItem(props){

    return (
        <>
            <li className='license__grid-item'>
                <div className='license__source-name'><a href={props.url}>{props.name}</a></div>
                <div className='license__source-type'>{props.type}</div>
                <div className='license__source-writer'>{props.writer}</div>
            </li>    
        </>
    )
}