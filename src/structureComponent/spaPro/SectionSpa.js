import React, { useState } from 'react'
import SpaArticle from './SpaArticle'

export default function SectionSpa(props) {
    const {id, mainTitle, descTitle, descContent, pcImg, moImg, alt} = props;
    
    const [moreProgram, setMoreProgram] = useState();
    /* 토글버튼 */
    const moreButton = () => {
            setMoreProgram( moreProgram => ! moreProgram );
        }
        
    return (
        <section className="program-section">
        <h2> { mainTitle } </h2>
        <div className="programs">
            <div className="program-title">   
                <picture>
                    <source srcSet={pcImg} media="(min-width: 600px)"/>
                    <img src={moImg} alt={alt} />
                </picture>
                <div className="program-desc">
                    <h3>{ descTitle }</h3>
                    <p>
                        {descContent[0]}
                        <br/>
                        {descContent[1]}
                    </p>
                </div>
                <button className={`moreBtn ${ moreProgram ? '' : 'on'}`} onClick={ moreButton } id={id} >
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="programs-detail" style={ {display : `${ moreProgram ? 'block' : 'none'}` } }>
            { articlePart.map( spaPrograms => ( 
                spaPrograms.map( spaContent => (
                    <SpaArticle 
                        key={spaContent.part+spaContent.key} 
                        part={spaContent.part} 
                        en={spaContent.en} 
                        kr={spaContent.kr} 
                        desc={spaContent.desc} 
                        price={spaContent.price} 
                    />))
                    )) };
            </div>    
        </div>
    </section>
    )
}





const articlePart = [
    [{
        key : 101,
        part : "SIGNATURE",
        en : "INTENSIVE GINSENG JOURNEY",
        kr : "인텐시브 진생 저니",
        desc : "강력한 인삼의 힘을 경험할 수 있는 페이셜과 백 케어 프로그램입니다. "+
                "인삼의 에너지를 고스란히 전달해 피부 자생력을 높여주고 "+
                "목과 등의 긴장을 풀어주어 즉각적인 컨디션 회복과 힘있게 차오른 피부를 만들어줍니다.",
        price : '100분 | 350,000원'
    },{
        key : 102,
        part : "SIGNATURE",
        en : "HERITAGE GINSENG JOURNEY",
        kr : "헤리티지 진생 저니",
        desc : "인삼 과학의 정수를 경험할 수 있는 페이셜과 전신 케어 프로그램입니다. "+
                "피부 손상을 케어는 물론 탄력 있는 피부로 만들어주고 흐트러진 바디 밸런스를 맞춰주어 "+
                "탄탄한 피부와 매끄러운 바디를 만들어줍니다",
        price : '130분 | 500,000원'
    },{
        key : 103,
        part : "SIGNATURE",
        en : "ULTIMATE RESTORATIVE JOURNEY",
        kr : "얼티밋 리스토러티브 저니",
        desc : "최고급 서비스를 경험하실 수 있는 페이셜과 전신 케어 프로그램입니다. "+
                "노화의 흔적을 다스려주는 전문적인 페이셜 케어와 젊은 에너지를 선사하는 "+
                "바디 터치로 시간이 지나도 흐트러지지 않는 아름다움을 선사합니다.",
        price : '180분 | 750,000원'
    },{
        key : 104,
        part : "FACE",
        en : "SIGNATURE GINSENG TREATMENT",
        kr : "시그니처 진생 트리트먼트",
        desc : "인삼의 에너지를 고스란히 담은 제품들,"+
                "피부 속까지 전달하는 리추얼과 옥뿔 마사저로 "+ 
                "인삼 과학의 정수를 경험할 수 있는 설화수 대표 프로그램입니다.",
        price : '80분 | 280,000원'
    },{
        key : 105,
        part : "FACE",
        en : "MOISTURIZING & COMFORTING TREATMENT",
        kr : "보습 & 진정 트리트먼트",
        desc : "진정-보습-건조 케어에 탁월한 제품들과 산뜻한 흡수를 도와주는 리추얼과 "+
                "백자 마사저로 피부 본연의 건강한 촉촉함을 찾아주는 트리트먼트입니다.",
        price : '80분 | 200,000원'
    },{
        key : 106,
        part : "FACE",
        en : "ULTIMATE TREATMENT",
        kr : "얼티밋 트리트먼트",
        desc : "피부 노화를 다각도로 개선하는 제품들, "+
                "젊은 에너지를 부여하는 리추얼과 호박 마사저로 노화의 흔적을 케어해주는 "+
                "하이엔드 안티에이징 트리트먼트입니다.",
        price : '90분 | 350,000원'
    },{
        key : 107,
        part : "BODY",
        en : "RECOVERY BODY CARE",
        kr : "회복 바디 케어",
        desc : "설화수 전문 테라피스트들의 정성스런 터치로 후면 바디를 케어하는 프로그램입니다. "+
                "지친 바디를 진정, 회복시키는 터치로 즉각적인 컨디션 회복과 건강한 에너지를 선사해줍니다.",
        price : '50분 | 200,000원'
    },{
        key : 108,
        part : "BODY",
        en : "CIRCULATION BODY CARE",
        kr : "순환 바디 케어",
        desc : "설화수 전문 테라피스트들의 섬세한 터치로 전신을 케어하는 프로그램입니다. "+
                "불필요한 노폐물을 배출시키고 바디 순환을 도와주는 부드러운 터치로 "+
                "전체적인 바디 밸런스를 맞춰 매끄러운 바디를 만들어줍니다.",
        price : '70분 | 280,000원'
    },{
        key : 109,
        part : "BODY",
        en : "INTENSIVE BODY CARE",
        kr : "집중 바디 케어",
        desc : "설화수만의 어플리케이터를 사용해 집중적으로 전신을 케어하는 프로그램입니다. "+ 
                "뭉친 근육을 이완시키고 건강한 에너지를 불어넣어주는 강한 터치로 활력과 "+
                "생기를 불어넣어 탄탄한 바디를 만들어줍니다.",
        price : '90분 | 350,000원'
    }],
    [{
        key : 201,
        part : "SIGNATURE",
        en : "INTENSIVE GINSENG TOUCH",
        kr : "인텐시브 진생 터치",
        desc : "강력한 인삼의 힘을 경험할 수 있는 페이셜과 백 케어 프로그램입니다. "+
                "인삼의 에너지를 고스란히 전달해 피부 자생력을 높여주고 "+
                "원하는 바디 부분 케어를 통해 일상에 지친 피부와 바디에 건강한 에너지를 부여해줍니다.",
        price : '90분 | 250,000원'
    },{
        key : 202,
        part : "FACE",
        en : "BRIGHTENING & RESILIENCE TREATMENT",
        kr : "광채 & 탄력 트리트먼트",
        desc : "광채 탄력 시너지 케어 제품들과 피부 톤,결을 더욱 돋보이게 하는 리추얼과 "+
                "연옥 마사저로 더욱 탄탄하고 환한 피부를 선사하는 트리트먼트입니다.",
        price : '80분 | 250,000원'
    },{
        key : 203,
        part : "FACE",
        en : "CALMING & VITALIZING TREATMENT",
        kr : "진정& 탄력 트리트먼트",
        desc : "신속한 피부 진정과 탄력 케어 제품들, 예민한 피부 맞춤 탄력 리추얼과 "+
                "경옥 마사저로 단숨에 피부 컨디션을 회복, 생기를 선사하는 트리트먼트입니다.",
        price : '80분 | 200,000원'
    },{
        key : 204,
        part : "BODY",
        en : "BACK & SHOULDER CARE",
        kr : "백 & 숄더 케어",
        desc : "설화수만의 리드미컬한 터치로 뭉친 등과 어깨 부위를 집중적으로 케어하여 "+
                "즉각적인 컨디션 회복은 물론, 스트레스 완화를 도와줍니다.",
        price : '50분 | 120,000원'
    },{
        key : 205,
        part : "BODY",
        en : "FOOT & LEG CARE",
        kr : "풋 & 레그 케어",
        desc : "두한족열(頭寒足熱)의 한방 이론을 모티브로 한 귀에서 다리로 이어지는 하체 집중 케어로 "+
                "즉각적인 붓기 완화와 함께 한결 가벼운 일상으로 인도합니다. \n\n"+
                "**자연 채광이 그대로 전달되는 릴렉세이션 라운지에서 진행합니다.",
        price : '50분 | 120,000원'
    },{
        key : 206,
        part : "ADDITIONAL",
        en : "BACK CARE",
        kr : "백 케어",
        desc : "집중적인 백 케어로 즉각적인 컨디션 회복과 스트레스 완화를 도와줍니다. ",
        price : '20분 | 80,000원'
    },{
        key : 207,
        part : "ADDITIONAL",
        en : "LEG CARE",
        kr : "레그케어",
        desc : "집중적인 하체 케어로 뭉쳐있던 다리 근육을 풀어주며 다리 피로를 풀어줍니다.",
        price : '20분 | 80,000원'
    },{
        key : 208,
        part : "ADDITIONAL",
        en : "ABDOMEN CARE",
        kr : "복부케어",
        desc : "복부의 불필요한 피하 지방 분해를 도와주어 건강하고 탄력 있는 복부를 만들어줍니다.",
        price : '20분 | 80,000원'
    },{
        key : 209,
        part : "ADDITIONAL",
        en : "SPECIAL MASK",
        kr : "스페셜케어",
        desc : "즉각적으로 피부를 진정시켜주고 활력을 공급해줍니다.",
        price : '20분 | 50,000원'
    }],
    [{
        key : 301,
        part : "SIGNATURE",
        en : "INTENSIVE GINSENG JOURNEY",
        kr : "인텐시브 진생 저니",
        desc : "강력한 인삼의 힘을 경험할 수 있는 페이셜과 백 케어 프로그램입니다. "+
                "인삼의 에너지를 고스란히 전달해 피부 자생력을 높여주고 "+
                "목과 등의 긴장을 풀어주어 즉각적인 컨디션 회복과 힘있게 차오른 피부를 만들어줍니다.",
        price : '100분 | 350,000원'
    },{
        key : 302,
        part : "SIGNATURE",
        en : "HERITAGE GINSENG JOURNEY",
        kr : "헤리티지 진생 저니",
        desc : "인삼 과학의 정수를 경험할 수 있는 페이셜과 전신 케어 프로그램입니다. "+
                "피부 손상을 케어는 물론 탄력 있는 피부로 만들어주고 흐트러진 바디 밸런스를 맞춰주어 "+
                "탄탄한 피부와 매끄러운 바디를 만들어줍니다",
        price : '130분 | 500,000원'
    },{
        key : 303,
        part : "SIGNATURE",
        en : "ULTIMATE RESTORATIVE JOURNEY",
        kr : "얼티밋 리스토러티브 저니",
        desc : "최고급 서비스를 경험하실 수 있는 페이셜과 전신 케어 프로그램입니다. "+
                "노화의 흔적을 다스려주는 전문적인 페이셜 케어와 젊은 에너지를 선사하는 "+
                "바디 터치로 시간이 지나도 흐트러지지 않는 아름다움을 선사합니다.",
        price : '180분 | 750,000원'
    },{
        key : 304,
        part : "FACE",
        en : "SIGNATURE GINSENG TREATMENT",
        kr : "시그니처 진생 트리트먼트",
        desc : "인삼의 에너지를 고스란히 담은 제품들,"+
                "피부 속까지 전달하는 리추얼과 옥뿔 마사저로 "+ 
                "인삼 과학의 정수를 경험할 수 있는 설화수 대표 프로그램입니다.",
        price : '80분 | 280,000원'
    },{
        key : 305,
        part : "FACE",
        en : "BRIGHTENING & RESILIENCE TREATMENT",
        kr : "광채 & 탄력 트리트먼트",
        desc : "광채 탄력 시너지 케어 제품들과 피부 톤,결을 더욱 돋보이게 하는 리추얼과 "+
                "연옥 마사저로 더욱 탄탄하고 환한 피부를 선사하는 트리트먼트입니다.",
        price : '80분 | 250,000원'
    },{
        key : 306,
        part : "FACE",
        en : "CALMING & VITALIZING TREATMENT",
        kr : "진정 & 탄력 트리트먼트",
        desc : "신속한 피부 진정과 탄력 케어 제품들, 예민한 피부 맞춤 탄력 리추얼과 "+
                "경옥 마사저로 단숨에 피부 컨디션을 회복, 생기를 선사하는 트리트먼트입니다.",
        price : '80분 | 200,000원'
    },{
        key : 307,
        part : "FACE",
        en : "MOISTURIZING & COMFORTING TREATMENT",
        kr : "보습 & 진정 트리트먼트",
        desc : "진정-보습-건조 케어에 탁월한 제품들과 산뜻한 흡수를 도와주는 리추얼과 "+
                "백자 마사저로 피부 본연의 건강한 촉촉함을 찾아주는 트리트먼트입니다.",
        price : '80분 | 200,000원'
    },{
        key : 308,
        part : "FACE",
        en : "ULTIMATE TREATMENT",
        kr : "얼티밋 트리트먼트",
        desc : "피부 노화를 다각도로 개선하는 제품들, 젊은 에너지를 부여하는 리추얼과 "+
                "호박 마사저로 노화의 흔적을 케어해주는 하이엔드 안티에이징 트리트먼트입니다.",
        price : '90분 | 350,000원'
    },{
        key : 309,
        part : "BODY",
        en : "RECOVERY BODY CARE",
        kr : "회복 바디 케어",
        desc : "설화수 전문 테라피스트들의 정성스런 터치로 후면 바디를 케어하는 프로그램입니다. "+
                "지친 바디를 진정, 회복시키는 터치로 즉각적인 컨디션 회복과 건강한 에너지를 선사해줍니다.",
        price : '50분 | 200,000원'
    }],]
