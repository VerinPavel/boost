export type btnProps = {
    id: number ;
    num: string ;
    text: string;
    }

export type arrayImg = {

}

import adsAstra1 from '/img/ourServices/branding/adsAstra/1.png'
import adsAstra2 from '/img/ourServices/branding/adsAstra/2.png'
import adsAstra3 from '/img/ourServices/branding/adsAstra/3.png'
import alone1 from '/img/ourServices/branding/notAlone/1.png'
import alone2 from '/img/ourServices/branding/notAlone/2.png'
import alone3 from '/img/ourServices/branding/notAlone/3.png'
import pills1 from '/img/ourServices/branding/pills/1.png'
import pills2 from '/img/ourServices/branding/pills/2.png'
import pills3 from '/img/ourServices/branding/pills/3.png'

import finan1 from '/img/ourServices/blogers/finan/1.png'
import finan2 from '/img/ourServices/blogers/finan/2.png'
import finan3 from '/img/ourServices/blogers/finan/3.png'

import criptoinvest1 from '/img/ourServices/blogers/criptoinvest/1.png'
import criptoinvest2 from '/img/ourServices/blogers/criptoinvest/2.png'
import criptoinvest3 from '/img/ourServices/blogers/criptoinvest/3.png'

import ravena1 from '/img/ourServices/blogers/ravena/1.png'
import ravena2 from '/img/ourServices/blogers/ravena/2.png'
import ravena3 from '/img/ourServices/blogers/ravena/3.png'



export const btns: btnProps[] = [
    {
        id: 1,
        num: '01',
        text: 'Branding',
    },
    {
        id: 2,
        num: '02',
        text: 'Bloggers ADS',
    },
    {
        id: 3,
        num: '03',
        text: 'Production',
    },
    {
        id: 4,
        num: '04',
        text: 'AI Production',
    }
]

export const brandingImg: arrayImg[] = [
    {
        id: 1,
        firstImg: adsAstra1 ,
        secondImg: adsAstra2,
        thirdImg: adsAstra3,
    },
    {
        id: 2,
        firstImg: alone1,
        secondImg: alone2,
        thirdImg: alone3,
    },
    {
        id: 3,
        firstImg: pills1,
        secondImg: pills2,
        thirdImg: pills3,
    },
   
]

export const blogersImg: arrayImg[] = [
    {
        id: 1,
        firstImg: finan1 ,
        secondImg: finan2,
        thirdImg: finan3,
    },
    {
        id: 2,
        firstImg: ravena1,
        secondImg: ravena2,
        thirdImg: ravena3,
    },
    {
        id: 3,
        firstImg: criptoinvest1,
        secondImg: criptoinvest2,
        thirdImg: criptoinvest3,
    },
    
]