import { configureStore, createSlice, current } from "@reduxjs/toolkit"

let concert = createSlice({
    name: 'concert',
    initialState: [
        {
            id: 0, title: '박진영 콘서트 GROOVE BACK', rate: '8세 이상 관람가',
            showtime: '총 120분', cast: '박진영',
            priceVIP: 165000, priceSR: 143000, priceR: 121000, priceS: 110000,
            showyear: 2022, showmonth: 12, showday: 25, starttime: 17, delivery: '현장 수령',
            showdate : '2022-12-25', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221118/20221118-44117.jpg'
        },
        {
            id: 1, title: '비비 첫 정규 발매 기념 콘서트 [와주시면 안 될까요?]', rate: '만 15세 이상',
            showtime: '총 100분', cast: '비비',
            priceVIP: 77000, priceSR: 77000, priceR: 77000, priceS: 77000,
            showyear: 2022, showmonth: 12, showday: 28, starttime: 20, delivery: '2022년 12월 09일부터 순차 배송됩니다.',
            showdate : '2022-12-28',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202212/20221202/20221202-44323.jpg'
        },
        {
            id: 2, title: '2022 멜로망스 전국투어 콘서트 〈Festival〉', rate: '미취학아동 관람불가',
            showtime: '120분', cast: '멜로망스',
            priceVIP: 132000, priceSR: 121000, priceR: 121000, priceS: 110000,
            showyear: 2022, showmonth: 12, showday: 11, starttime: 17, delivery: '현장 수령',
            showdate : '2022-12-21',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202210/20221024/20221024-43889.jpg'
        },
        {
            id: 3, title: '[서울] 2022년 ‘Dream 55’ 나훈아 앵콜 콘서트', rate: ' 만 10세이상',
            showtime: '총 120분', cast: '나훈아',
            priceVIP: 165000, priceSR: 143000, priceR: 143000, priceS: 121000,
            showyear: 2022, showmonth: 12, showday: 18, starttime: 15, delivery: '현장 수령',
            showdate : '2022-12-18',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44018.jpg'
        },
        {
            id: 4, title: '해리 스타일스 첫 내한공연（HARRY STYLES LOVE ON TOUR 2023 - Live in Seoul）', rate: '만 12세 이상',
            showtime: '총 75분', cast: '해리 스타일스 (Harry Styles)',
            priceVIP: 250000, priceSR: 165000, priceR: 165000, priceS: 143000,
            showyear: 2023, showmonth: 3, showday: 20, starttime: 20, delivery: '현장 수령',
            showdate : '2023-03-20', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221116/20221116-44112.jpg'
        },
        {
            id: 5, title: '켈라니 첫 단독 내한공연（Kehlani Live in Seoul）', rate: '만 12세 관람가',
            showtime: '총 75분', cast: '켈라니 (Kehlani)',
            priceVIP: 110000, priceSR: 110000, priceR: 110000, priceS: 110000,
            showyear: 2023, showmonth: 2, showday: 13, starttime: 20, delivery: '2023년 01월 13일부터 순차 배송됩니다.',
            showdate : '2023-02-13', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221128/20221128-44299.jpg'
        }
    ] , reducers : {
        sortConcert (state, action) {   

            if (action.payload === "sortLowPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => a.priceS - b.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortHighPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => b.priceS - a.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortTitle") {
            const newSort = [...current(state)];
            newSort.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            state = [...newSort]
            return state;
            }
        }}
    }
)
export let { sortConcert } = concert.actions

let concertinfo = createSlice({
    name: 'concertinfo',
    initialState: [
        {
            id: 0, agencyinfo: '㈜제이와이피엔터테인먼트', consultation: '1544-6399',
            cast: '박진영', rate: '8세 이상 관람가', showtime: '총 120분',
            place: '올림픽공원 內 올림픽홀', placeadr: '서울 송파구 올림픽로 424 (방이동, 올림픽공원)',
            placeconsultation: '02-410-1114', placeurl: 'http://www.olympicpark.co.kr/',
            latitude : 37.52031235135914, longitude : 127.11547315198496,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221118/44117_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221118/44117_02.jpg'
        },
        {
            id: 1, agencyinfo: '주식회사 필굿뮤직', consultation: '1544-6399',
            cast: '비비', rate: '만 15세 이상', showtime: '총 100분',
            place: 'YES24 LIVE HALL', placeadr: '서울 광진구 구천면로 20 (광장동, 광진구공연장) YES24 LIVE HALL',
            placeconsultation: '070-5001-4532', placeurl: 'http://yes24livehall.com',
            latitude : 37.54572407018438, longitude : 127.10796239584363,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202212/20221202/44323_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202212/20221202/44323_2_04.jpg'
        },
        {
            id: 2, agencyinfo: '(주)어비스컴퍼니', consultation: '02-6327-1277',
            cast: '멜로망스', rate: '미취학아동 관람불가', showtime: '120분',
            place: '올림픽공원 內 올림픽홀', placeadr: '서울 송파구 올림픽로 424 (방이동, 올림픽공원)',
            placeconsultation: '02-410-1114', placeurl: 'http://www.olympicpark.co.kr/',
            latitude : 37.52031235135914, longitude : 127.11547315198496,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202210/20221024/43889_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202210/20221024/43889_02.jpg'
        },
        {
            id: 3, agencyinfo: '(주)예아라', consultation: '1544-6399',
            cast: '나훈아', rate: '만 10세이상', showtime: '총 120분',
            place: 'KSPO DOME(올림픽체조경기장)', placeadr: '서울 송파구 올림픽로 424 KSPO DOME(올림픽체조경기장)',
            placeconsultation: '02-410-1114', placeurl: 'https://olympicpark.kspo.or.kr/',
            latitude : 37.52031235135914, longitude : 127.11547315198496,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44018_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44018_02.jpg'
        },
        {
            id: 4, agencyinfo: '라이브네이션코리아', consultation: '02-6925-1818',
            cast: '해리 스타일스 (Harry Styles)', rate: '만 12세 이상', showtime: '총 75분',
            place: 'KSPO DOME(올림픽체조경기장)', placeadr: '',
            placeconsultation: '02-410-1114', placeurl: 'https://olympicpark.kspo.or.kr/',
            latitude : 37.52031235135914, longitude : 127.11547315198496,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/44112k_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/44112k_02.jpg'
        },
        {
            id: 5, agencyinfo: '라이브네이션코리아', consultation: '02-6925-1818',
            cast: '켈라니 (Kehlani)', rate: '만 12세 관람가', showtime: '총 75분',
            place: 'YES24 LIVE HALL', placeadr: '서울 광진구 구천면로 20 (광장동, 광진구공연장) YES24 LIVE HALL',
            placeconsultation: '070-5001-4532', placeurl: 'http://yes24livehall.com',
            latitude : 37.54572407018438, longitude : 127.10796239584363,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/44299_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/44299_2_02.jpg'
        }
    ]
})

let theater = createSlice({
    name: 'theater',
    initialState: [
        {
            id: 0, title: '친정엄마와 2박3일', rate: '만 7세 이상',
            showtime: '총 100분', cast: '강부자,윤유선,유정기,김남진,이요성,김찬훈,조유미',
            priceVIP: 77000, priceSR: 66000, priceR: 61000, priceS: 580000,
            showyear: 2023, showmonth: 1, showday: 13, starttime: 14, delivery: '현장 수령',
            showdate : '2023-01-13',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221121/20221121-44220.jpg'
        }, {
            id: 1, title: '연애하기좋은날', rate: '13세 이상',
            showtime: '총 100분', cast: '이재혁,최지훈,차도하,신아라,박한울,이성은,김동현,김초롱,김영재',
            priceVIP: 20000, priceSR: 16000, priceR: 13000, priceS: 10000,
            showyear: 2022, showmonth: 12, showday: 24, starttime: 17, delivery: '현장 수령',
            showdate : '2022-12-24', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202202/20220203/20220203-40226.jpg'
        }, {
            id: 2, title: '옥탑방 고양이', rate: '13세 이상',
            showtime: '총 100분', cast: '곽근영,윤정윤,양보현,양시환,박수정,마수연,임채민,정지호,김동진,유민휘,함원태,이제민,박지민,조윤진,심채아,이주하',
            priceVIP: 20000, priceSR: 16000, priceR: 13000, priceS: 10000,
            showyear: 2022, showmonth: 12, showday: 23, starttime: 12, delivery: '현장 수령',
            showdate : '2022-12-23',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202110/20211001/20211001-40181.jpg'
        }, {
            id: 3, title: '빛나는 버러지', rate: '13세 이상',
            showtime: '총 120분', cast: '황석정,정다희,송인성,최미소,배윤범,오정택',
            priceVIP: 55000, priceSR: 48000, priceR: 35000, priceS: 28000,
            showyear: 2023, showmonth: 1, showday: 8, starttime: 19, delivery: '현장 수령',
            showdate : '2023-01-08',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43981.jpg'
        }, {
            id: 4, title: '2호선 세입자', rate: '14세 이상',
            showtime: '총 90분', cast: '이선준,강병준,이준혁,혀윤지,최지수,김지현',
            priceVIP: 20000, priceSR: 16000, priceR: 13000, priceS: 10000,
            showyear: 2022, showmonth: 12, showday: 31, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-31',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202201/20220113/20220113-41225.jpg'
        }, {
            id: 5, title: '굿모닝 홍콩', rate: '12세 이상',
            showtime: '총 90분', cast: '김동현,최영도,공재민,김여진,김수민,김설빈,이창민,조수빈,강기혁,권나현',
            priceVIP: 40000, priceSR: 32000, priceR: 28000, priceS: 24000,
            showyear: 2022, showmonth: 12, showday: 11, starttime: 15, delivery: '현장 수령',
            showdate : '2022-12-17',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202212/20221206/20221206-43999.jpg'
        }
    ], reducers : {
        sortTheater (state, action) { 
            if (action.payload === "sortLowPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => a.priceS - b.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortHighPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => b.priceS - a.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortTitle") {
            const newSort = [...current(state)];
            newSort.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            state = [...newSort]
            return state;
            }
        }}
})
export let { sortTheater } = theater.actions

let theaterinfo = createSlice({
    name: 'theaterinfo',
    initialState: [
        {
            id: 0, agencyinfo: '㈜밝은누리', consultation: '1544-6399',
            cast: '강부자, 윤유선, 유정기, 김남진, 이요성, 김찬훈, 조유미', rate: '7세 이상 관람가', showtime: '총 100분',
            place: '대구 계명아트센터', placeadr: '대구 달서구 달구벌대로 1095 계명아트센터',
            placeconsultation: '053-580-6600', placeurl: 'http://kmuartcenter.kr',
            latitude : 35.85354608505478, longitude : 128.48149149345946,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/44220_n.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/44220_2_01.jpg'
        }, {
            id: 1, agencyinfo: '티켓랩_팀플레이예술기획(주)', consultation: '1661-6981',
            cast: '이재혁, 최지훈, 차도하, 신아라, 박한울, 이성은, 김동현, 김초롱, 김영재', rate: '13세 이상 관람가', showtime: '총 100분',
            place: '대학로 아티스탄홀', placeadr: '서울 종로구 동숭동 1-35',
            placeconsultation: '02-786-3134', placeurl: 'http://www.artistan.co.kr/',
            latitude : 37.583092671943014, longitude : 127.002083159597,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202209/20220922/40226_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202209/20220922/40226_2_02.jpg'
        }, {
            id: 2, agencyinfo: '티켓랩_(주)레드앤블루', consultation: '02-764-8760',
            cast: '곽근영, 윤정윤, 양보현, 양시환, 박수정, 마수연, 임채민, 정지호, 김동진, 유민휘, 함원태, 이제민, 박지민, 조윤진, 심채아, 이주하', rate: '13세 이상 관람가', showtime: '총 100분',
            place: '대학로 틴틴홀', placeadr: '서울 종로구 동숭동 1-97',
            placeconsultation: '02-764-8760', placeurl: 'http://www.artistan.co.kr/',
            latitude : 37.5816041961661, longitude : 127.00353224377346,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221109/40181_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221109/40181_2_02.jpg'
        }, {
            id: 3, agencyinfo: '(주)엠피앤컴퍼니', consultation: '02-744-4033',
            cast: '황석정,정다희,송인성,최미소,배윤범,오정택', rate: '13세 이상 관람가', showtime: '총 120분',
            place: '대학로 드림아트센터 4관', placeadr: '서울 종로구 동숭길 123 (동숭동, 드림아트센터) 드림아트센터',
            placeconsultation: '02-744-4033', placeurl: 'http://ticket.yes24.com/',
            latitude : 37.583287259112396, longitude : 127.00328777783419,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221103/43981_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221103/43981_2_02.jpg'
        }, {
            id: 4, agencyinfo: '티켓랩_(주)레드앤블루', consultation: '02-764-8760',
            cast: '이선준,강병준,이준혁,혀윤지,최지수,김지현', rate: '14세 이상 관람가', showtime: '총 90분',
            place: '대학로 바탕골 소극장', placeadr: '서울 종로구 동숭동 1-60',
            placeconsultation: '02-764-8760', placeurl: 'http://ticket.yes24.com/',
            latitude : 37.58188533109788, longitude : 127.00256767916764,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/41225_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202212/20221201/41225_2_02.jpg'
        }, {
            id: 5, agencyinfo: '티켓랩_(주)레드앤블루', consultation: '02-6498-0403',
            cast: '김동현,최영도,공재민,김여진,김수민,김설빈,이창민,조수빈,강기혁,권나현', rate: '12세 이상 관람가', showtime: '총 100분',
            place: '대학로 민송아트홀 1관', placeadr: '서울 종로구 대학로 144 (혜화동, 중원빌딩) 민송아트홀 1관\n',
            placeconsultation: '02-6498-0403', placeurl: 'http://ticket.yes24.com/',
            latitude : 37.5839792497939, longitude : 127.0020605409939,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/43999_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/43999_2_02.jpg'
        }
    ]
})

let musical = createSlice({
    name: 'musical',
    initialState: [
        {
            id: 0, title: '뮤지컬 [드라큘라]', rate: '14세 이상 관람가',
            showtime: '150분(인터미션 20분 포함)', cast: '--',
            priceVIP: 150000, priceSR: 130000, priceR: 100000, priceS: 80000,
            showyear: 2022, showmonth: 12, showday: 13, starttime: 21, delivery: '현장 수령',
            showdate : '2023-12-13',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43815.jpg'
        },
        {
            id: 1, title: '뮤지컬 ＜캣츠＞오리지널 내한－서울（Musical CATS）', rate: '8세 이상 관람가',
            showtime: '160분(인터미션 포함)', cast: ' 조아나 암필(그리자벨라)잭 댄슨(럼 텀 터거)브래드 리틀(올드 듀터러노미)',
            priceVIP: 170000, priceSR: 140000, priceR: 110000, priceS: 77000,
            showyear: 2023, showmonth: 5, showday: 13, starttime: 11, delivery: '현장 수령만 가능',
            showdate : '2023-05-13',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221108/20221108-43998.jpg'
        },
        {
            id: 2, title: '뮤지컬 〈브로드웨이 42번가〉', rate: '8세이상 관람가능',
            showtime: '160분(인터미션 20분)', cast: ' 송일국, 이종혁, 정영주',
            priceVIP: 140000, priceSR: 140000, priceR: 100000, priceS: 70000,
            showyear: 2022, showmonth: 11, showday: 5, starttime: 19, delivery: '현장 수령만 가능',
            showdate : '2023-04-05',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202209/20220922/20220922-43616.jpg'
        },
        {
            id: 3, title: '2022 푸에르자부르타 웨이라 인 서울 [2022 FUERZA BRUTA WAYRA IN SEOUL]',
            showtime: '총 70분 (인터미션 없음)', cast: '--',
            priceVIP: 121000, priceSR: 121000, priceR: 121000, priceS: 121000,
            showyear: 2022, showmonth: 11, showday: 30, starttime: 19, delivery: '현장 수령',
            showdate : '2022-12-25', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43293.jpg'
        },
        {
            id: 4, title: '뮤지컬 〈베토벤: Beethoven Secret', rate: '8세이상 관람가능',
            showtime: '--', cast: '박효신, 박은태, 카이, 조정은, 옥주현, 윤공주, 이해준',
            priceVIP: 170000, priceSR: 140000, priceR: 110000, priceS: 80000,
            showyear: 2023, showmonth: 1, showday: 12, starttime: 19, delivery: '현장 수령',
            showdate : '2023-01-12',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221117/20221117-44155.jpg'
        },
        {
            id: 5, title: '뮤지컬 〈지저스 크라이스트 수퍼스타〉 50주년 기념 한국 공연', rate: '8세 이상 관람가 (미취학 아동 입장 불가)',
            showtime: '135분 (인터미션 20분 포함)',
            cast: '마이클리, 임태경, 한지상, 윤형렬, 백형훈, 서은광, 김보경, 장은아, 제이민',
            priceVIP: 150000, priceSR: 120000, priceR: 80000, priceS: 60000,
            showyear: 2022, showmonth: 11, showday: 10, starttime: 19, delivery: '현장 수령만 가능',
            showdate : '2023-02-10',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221128/20221128-43451.jpg'
        }
    ], reducers : {
        sortMusical (state, action) { 
            if (action.payload === "sortLowPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => a.priceS - b.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortHighPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => b.priceS - a.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortTitle") {
            const newSort = [...current(state)];
            newSort.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            state = [...newSort]
            return state;
            }
        }}
})
export let { sortMusical } = musical.actions





let musicalinfo = createSlice({
    name: 'musicalinfo',
    initialState: [
        {
            id: 0, agencyinfo: '(주)글로벌컨텐츠', consultation: '1577-3363',
            cast: '--', rate: '14세 이상 관람가', showtime: '150분(인터미션 20분 포함)',
            place: '올림픽공원 내 우리금융아트홀', placeadr: '서울 송파구 방이동 88',
            placeconsultation: '02-410-1532', placeurl: 'http://www.kspo.or.kr/olpark/',
            latitude : 37.51674187482631, longitude : 127.12501454060532,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202210/20221017/43815_n0.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202210/20221017/43815_n1.jpg'
        },
        {
            id: 1, agencyinfo: '클립서비스㈜', consultation: '1577-3363',
            cast: '조아나 암필(그리자벨라), 잭 댄슨(럼 텀 터거), 브래드 리틀(올드 듀터러노미) 외',
            rate: '8세 이상 관람가', showtime: '160분(인터미션 포함)',
            place: '세종문화회관 대극장', placeadr: '서울 종로구 세종대로 175 (세종로) 대극장',
            placeconsultation: '02-399-1000', placeurl: 'http://www.sejongpac.or.kr',
            latitude : 37.571845875644996, longitude : 126.97616499383187,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221108/43998_n2_3.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/43998_05.jpg'
        },
        {
            id: 2, agencyinfo: '(주)인터파크', consultation: '1588-5212',
            cast: '송일국, 이종혁, 정영주, 배해선, 신영숙, 전수경, 홍지민, 오소연, 유낙원, 김동호, 이주순, 오세준, 서성종, 김호, 임기홍, 조용수, 최영민, 김성수, 우종웅',
            rate: '8세이상 관람가능', showtime: '160분(인터미션 20분)',
            place: '예술의전당 CJ 토월극장', placeadr: '서울 서초구 서초동 700',
            placeconsultation: '02-580-1300', placeurl: 'http://www.sac.or.kr',
            latitude : 37.48108395349739, longitude : 127.01524063713416,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221102/43616_n.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221118/43616_2_01.jpg'
        },
        {
            id: 3, agencyinfo: '주식회사 쇼비얀엔터테인먼트', consultation: '02-540-2010',
            cast: '--', rate: '8세 이상', showtime: '총 70분 (인터미션 없음)',
            place: '잠실종합운동장 FB씨어터', placeadr: '서울특별시 송파구 올림픽로 25',
            placeconsultation: '02-540-2010', placeurl: 'http://ticket.yes24.com/Perf/43293?Gcode=009_400',
            latitude : 37.51618536666282, longitude : 127.07592213853938,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202208/20220824/43293_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202208/20220824/43293_02.jpg'
        },
        {
            id: 4, agencyinfo: '(주)인터파크', consultation: '02-6391-6333',
            cast: '박효신, 박은태, 카이, 조정은, 옥주현, 윤공주, 이해준, 윤소호, 김진욱, 박시원, 김성민, 전민지, 최지혜, 이정수',
            rate: '8세이상 관람가능', showtime: '--',
            place: '예술의전당 오페라극장', placeadr: '서울 서초구 서초동 700',
            placeconsultation: '02-580-1300', placeurl: 'www.sac.or.kr',
            latitude : 37.48108395349739, longitude : 127.01524063713416,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221115/44155_n.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202212/20221202/44155_2_01_1.jpg'
        },
        {
            id: 5, agencyinfo: '주식회사 블루스테이지', consultation: '1577-3363',
            cast: '마이클리, 임태경, 한지상, 윤형렬, 백형훈, 서은광, 김보경, 장은아, 제이민, 김태한, 지현준, 육현욱, 전재현, 이한밀, 김바울, 신은총, 윤태호, 김민철, 김원빈',
            rate: '8세 이상 관람가 (미취학 아동 입장 불가)', showtime: '135분 (인터미션 20분 포함)',
            place: '광림아트센터 BBCH홀', placeadr: '서울 강남구 논현로163길 33 (신사동, 교회)',
            placeconsultation: '02)2056-5787 ', placeurl: 'http://www.klarts.kr/',
            latitude : 37.52389075228467, longitude : 127.0255754520199,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202210/20221012/43451_NN.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221129/43451_07.jpg'
        }
    ]
})


let classic = createSlice({
    name: 'classic',
    initialState: [
        {
            id: 0, title: '2022 예술의전당 ＆ 국립발레단 〈호두까기인형〉', rate: '48개월이상 관람가능',
            showtime: '120분(인터미션 20분 포함)', cast: ' 박슬기, 심현희, 한나래, 박예은, 곽화경, 조연재, 이재우, 허서명, 김기완, 하지석, 구현모, 김명규, 박종석',
            priceVIP: 100000, priceSR: 80000, priceR: 60000, priceS: 40000,
            showyear: 2022, showmonth: 12, showday: 25, starttime: 19, delivery: '현장 수령',
            showdate : '2023-11-25', vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221121/20221121-44182.jpg'
        },
        {
            id: 1, title: '조수미 ＆ 프렌즈 〈In Love〉', rate: ' 8세이상 관람가능',
            showtime: '120분 (인터미션 15분 포함)', cast: '조수미, 홍진호, 대니 구, 길병민, 나리, 최영선, 프라임 필하모닉 오케스트라',
            priceVIP: 150000, priceSR: 120000, priceR: 100000, priceS: 80000,
            showyear: 2022, showmonth: 12, showday: 23, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-23',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44033.jpg'
        },
        {
            id: 2, title: '사라장 ＆ 비르투오지', rate: '8세이상 관람가능',
            showtime: '100분 (인터미션 15분 포함)', cast: ' 사라 장',
            priceVIP: 170000, priceSR: 130000, priceR: 100000, priceS: 60000,
            showyear: 2022, showmonth: 12, showday: 27, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-27',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221108/20221108-44028.jpg'
        },
        {
            id: 3, title: '에릭 루 피아노 리사이틀', rate: ' 8세이상 관람가능',
            showtime: '95분(인터미션 15분)', cast: '에릭 루',
            priceVIP: 70000, priceSR: 50000, priceR: 50000, priceS: 30000,
            showyear: 2022, showmonth: 12, showday: 26, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-26',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202207/20220727/20220727-43026.jpg'
        },
        {
            id: 4, title: '파보 예르비 ＆ 도이치 캄머필하모닉', rate: '8세이상 관람가능',
            showtime: '120분 (인터미션 20분 포함)', cast: ' 파보 예르비, 강주미, 도이치 캄머필하모닉',
            priceVIP: 200000, priceSR: 150000, priceR: 100000, priceS: 60000,
            showyear: 2022, showmonth: 12, showday: 25, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-25',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44043.jpg'
        },
        {
            id: 5, title: '2022 리처드 용재 오닐 송년 콘서트 : 선물', rate: '8세이상 관람가능',
            showtime: '85분 (인터미션 15분 포함)', cast: '리처드 용재 오닐, 줄리앙 라브로, 문태국, 양인모, 체임버 오케스트라',
            priceVIP: 120000, priceSR: 90000, priceR: 70000, priceS: 50000,
            showyear: 2022, showmonth: 12, showday: 29, starttime: 20, delivery: '현장 수령',
            showdate : '2022-12-29',vipticket : 20, srticket : 20, sticket : 20, rticket : 20, 
            imageadr: 'http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44031.jpg'
        }
    ], reducers : {
        sortClassic (state, action) { 
            if (action.payload === "sortLowPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => a.priceS - b.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortHighPrice") {
                const newSort = [...current(state)];
                newSort.sort((a, b) => b.priceS - a.priceS);
                state = [...newSort]
                return state;
            } 
            else if (action.payload === "sortTitle") {
            const newSort = [...current(state)];
            newSort.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            state = [...newSort]
            return state;
            }
        }}
})
export let { sortClassic } = classic.actions

let classicinfo = createSlice({
    name: 'classicinfo',
    initialState: [
        {
            id: 0, agencyinfo: '예술의전당, 국립발레단', consultation: '02-580-1300',
            cast: '박슬기, 심현희, 한나래, 박예은, 곽화경, 조연재, 이재우, 허서명, 김기완, 하지석, 구현모, 김명규, 박종석', rate: '48개월이상 관람가능', showtime: '120분(인터미션 20분 포함)',
            place: '예술의전당 오페라극장', placeadr: '서울 서초구 남부순환로 2406',
            placeconsultation: '02-580-1300', placeurl: 'https://www.sac.or.kr/site/main/home',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221121/44182_2.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221117/%ED%98%B8%EB%91%90%EA%B9%8C%EA%B8%B0_s.jpg'
        },
        {
            id: 1, agencyinfo: '크레디아뮤직앤아티스트', consultation: '02-318-4301',
            cast: '조수미, 홍진호, 대니 구, 길병민, 나리, 최영선, 프라임 필하모닉 오케스트라', rate: '8세이상 관람가능', showtime: '120분 (인터미션 15분 포함)',
            place: '예술의전당 콘서트홀', placeadr: '서울 서초구 서초동 700',
            placeconsultation: '02-580-1300', placeurl: 'http://www.sac.or.kr',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44033_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44033_2_02.jpg'
        },
        {
            id: 2, agencyinfo: '크레디아뮤직앤아티스트', consultation: '02-318-4301',
            cast: '사라 장', rate: '8세이상 관람가능', showtime: '100분 (인터미션 15분 포함)',
            place: '예술의전당 콘서트홀', placeadr: '서울 서초구 남부순환로 2406 국립국악원',
            placeconsultation: '02-580-1300', placeurl: 'https://www.sac.or.kr/site/main/home',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221118/44028_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221118/44028_2_02.jpg'
        },
        {
            id: 3, agencyinfo: '마스트미디어', consultation: '02-541-2512',
            cast: '에릭 루', rate: '8세이상 관람가능', showtime: '95분(인터미션 15분)',
            place: '예술의전당 IBK 챔버홀', placeadr: '서울 서초구 남부순환로 2406 예술의전당',
            placeconsultation: '02-580-1300', placeurl: 'https://www.sac.or.kr/site/main/home',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221101/43026_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221101/43026_2_02.jpg'
        },
        {
            id: 4, agencyinfo: '(주)빈체로', consultation: '02-599-5743',
            cast: '파보 예르비, 강주미, 도이치 캄머필하모닉', rate: '8세이상 관람가능', showtime: '120분 (인터미션 20분 포함)',
            place: '예술의전당 콘서트홀', placeadr: '서울 서초구 남부순환로 2406 국립국악원',
            placeconsultation: '02-580-1300', placeurl: 'http://www.sacticket.co.kr/',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44043_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44043_2_02.jpg'
        },
        {
            id: 5, agencyinfo: '크레디아뮤직앤아티스트', consultation: '02-318-4301',
            cast: '리처드 용재 오닐, 줄리앙 라브로, 문태국, 양인모, 체임버 오케스트라', rate: '8세이상 관람가능', showtime: '85분 (인터미션 15분 포함)',
            place: '예술의전당 콘서트홀', placeadr: '서울 서초구 남부순환로 2406 국립국악원',
            placeconsultation: '02-580-1300', placeurl: 'http://www.sacticket.co.kr/',
            latitude : 37.480233529454026, longitude : 127.01420935881244,
            imageadr1: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44031_2_01.jpg',
            imageadr2: 'http://tkfile.yes24.com/Upload2/Board/202211/20221107/44031_2_02.jpg'
        }
    ]
})


// 로그인 판단 유무
let check = createSlice({
    name: 'check',
    initialState: ['false', '']
})

// 사용자 정보
let userInfo = createSlice({
    name: 'userInfo',
    initialState: [
        {id : 0, name: 'King', userid: '1111', pwd: '1111',
            email:'123@gmail.com', phone:'010-1111-1111', address: '강원도 춘천시 111길'},
        {id : 1, name: 'Smile', userid: '2222', pwd: '2222',
            email:'456@gmail.com', phone:'010-2222-2222', address: '서울특별시 종로구 254'}]
})

// 선택한 좌석
let selectseat = createSlice({
    name: 'selectseat',
    initialState: []
})

// 총 티켓 가격
let totalprice = createSlice({
    name: 'totalprice',
    initialState: 0
})

// reducer 설정
export default configureStore({
    reducer: {
        concert: concert.reducer,
        concertinfo: concertinfo.reducer,
        musical: musical.reducer,
        musicalinfo: musicalinfo.reducer,
        theater: theater.reducer,
        theaterinfo: theaterinfo.reducer,
        classic: classic.reducer,
        classicinfo: classicinfo.reducer,
        check: check.reducer,
        userInfo: userInfo.reducer,
        selectseat: selectseat.reducer,
        totalprice: totalprice.reducer
    }
})